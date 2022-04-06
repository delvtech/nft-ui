import { ContentPage } from "components/ContentPage";
import { ContentWrapper } from "components/Entrance/styles";
import { MintContainer, ProgressContainer } from "components/Mint/styles";
import { useMinter } from "elf/hooks/useMinter";
import { useProof } from "elf/hooks/useProof";
import { useTokenBalanceOf } from "elf/hooks/useTokenBalanceOf";
import { useWalletDialog } from "elf/hooks/useWalletDialog";
import { useWhitelistStatus } from "elf/hooks/useWhitelistStatus";
import useWeb3 from "elf/useWeb3";
import {
  createToastError,
  createToastLoading,
  createToastSuccess,
} from "helpers/createToast";
import Image from "next/image";
import { useRouter } from "next/router";
import MintGIF from "public/assets/gif/hero_image.gif";
import LoadingMintGIF from "public/assets/gif/minting_loading.gif";
import { useMemo, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import ReactTextTransition, { presets } from "react-text-transition";
import content from "./content.json";
import { MintButton } from "./MintButton";

export const Mint = () => {
  const { active, account, library } = useWeb3();
  const { data: proofData, isLoading: isProofLoading } = useProof(account);
  const { data: mintedCount } = useTokenBalanceOf(account);

  const { push } = useRouter();
  const { open } = useWalletDialog();
  const toastIdRef = useRef<string>();

  const canMint = !!proofData;
  const hasMinted = mintedCount && mintedCount.gt(0);

  const handleMint = () => {
    canMint && mint([proofData.leaf.tokenId, proofData.proof]);
  };

  const {
    mutate: mint,
    isLoading: isMinting,
    isSuccess,
  } = useMinter(library?.getSigner(), {
    onError: (e) => {
      createToastError(e.message, { id: toastIdRef.current });
    },
    onTransactionSubmitted: () => {
      toastIdRef.current = createToastLoading("Confirming mint transaction.", {
        id: toastIdRef.current,
      });
    },
    onTransactionMined: () => {
      createToastSuccess("Elfi has been successfully minted!", {
        id: toastIdRef.current,
      });
      push("/collection");
    },
  });

  const { data: isWhitelisted, isLoading: isWhitelistLoading } =
    useWhitelistStatus(account);

  const currentContent = useMemo(
    () =>
      isMinting ? content.pending : isSuccess ? content.success : content.stale,
    [isMinting, isSuccess],
  );

  return (
    <ContentPage padding="100px 124px 144px 124px" title="Mint">
      <MintContainer>
        <h1>
          <ReactTextTransition
            text={currentContent.title}
            springConfig={presets.gentle}
          />
        </h1>

        {isMinting ? (
          <Image
            src={LoadingMintGIF}
            alt="Elfiverse"
            width="720px"
            height="720px"
            quality={100}
            priority
          />
        ) : (
          <Image
            src={MintGIF}
            alt="Elfiverse"
            width="640px"
            height="400px"
            quality={100}
            priority
          />
        )}
        {console.log(isWhitelistLoading, isProofLoading)}

        {!isMinting ? (
          <MintButton
            active={active}
            canMint={canMint}
            hasMinted={hasMinted}
            openDialog={open}
            handleMint={handleMint}
            isLoading={isWhitelistLoading || isProofLoading}
            isWhitelisted={isWhitelisted}
          />
        ) : (
          <Fade>
            <ProgressContainer>
              <h2>
                <ReactTextTransition
                  text={currentContent.status}
                  springConfig={presets.gentle}
                />
              </h2>
            </ProgressContainer>
          </Fade>
        )}

        {active && isWhitelisted && canMint && !hasMinted && (
          <ContentWrapper>
            <ReactTextTransition
              text={currentContent.description}
              springConfig={presets.gentle}
            />
          </ContentWrapper>
        )}
      </MintContainer>
    </ContentPage>
  );
};
