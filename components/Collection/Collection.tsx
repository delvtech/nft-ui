import { PrimaryButton } from "common/Button/styles";
import { Spacer } from "common/Spacer";
import { ContentPage } from "components/ContentPage";
import DefconZero from "components/Text/DefconZero";
import { useHasMinted } from "elf/hooks/useHasMinted";
import { useWalletDialog } from "elf/hooks/useWalletDialog";
import useWeb3 from "elf/useWeb3";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import ReactTextTransition, { presets } from "react-text-transition";
import { CollectionCard } from "./CollectionCard";
import { CollectionContainer } from "./styles";

export const Collection = () => {
  const hasMinted = useHasMinted();
  const { active } = useWeb3();
  const { open } = useWalletDialog();
  const { push } = useRouter();

  useEffect(() => {
    !active && open();
  }, [active, open]);

  return (
    <ContentPage padding="100px 124px 144px 124px" title="Collection">
      <CollectionContainer>
        <h1>
          <ReactTextTransition
            text="My ELF Collection"
            springConfig={presets.gentle}
          />
        </h1>
        <Fade>
          {hasMinted ? (
            <CollectionCard />
          ) : (
            <>
              <DefconZero color="greenLight">
                No ELF has been minted for this account.
              </DefconZero>

              <Spacer size="60px" />

              <PrimaryButton onClick={() => push("/mint")}>
                Confirm eligibility
              </PrimaryButton>
            </>
          )}
        </Fade>
      </CollectionContainer>
    </ContentPage>
  );
};
