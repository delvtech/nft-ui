import { useSmartContractEvents } from "@elementfi/react-query-typechain";
import useWeb3 from "elf/useWeb3";
import { BigNumber } from "ethers";
import { NullableAddress } from "src/types";
import { ElfNFT__factory } from "typechain-types";
import { useAddresses } from "./useAddress";
import { useProvider } from "./useProvider";

export function useTransferEvents(
  from?: NullableAddress,
  to?: NullableAddress,
  tokenId?: BigNumber,
) {
  const { chainId } = useWeb3();

  const address = useAddresses();
  const provider = useProvider(chainId);

  const NFT = ElfNFT__factory.connect(address.tokenContract, provider);

  return useSmartContractEvents(NFT, "Transfer", {
    callArgs: [from, to, tokenId],
    enabled: !!from || !!to || !!tokenId,
  });
}
