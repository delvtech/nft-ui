import { useSmartContractEvents } from "@elementfi/react-query-typechain";
import { getProvider } from "elf/providers";
import { BigNumber } from "ethers";
import { getBlockFrom } from "src/blocks";
import { NullableAddress } from "src/types";
import { ElfNFT__factory } from "typechain-types";
import { useAddresses } from "./useAddress";

export function useTransferEvents(
  from?: NullableAddress,
  to?: NullableAddress,
  tokenId?: BigNumber,
) {
  const address = useAddresses();
  const provider = getProvider();

  const NFT = ElfNFT__factory.connect(address.tokenContract, provider);

  return useSmartContractEvents(NFT, "Transfer", {
    callArgs: [from, to, tokenId],
    enabled: !!from || !!to || !!tokenId,
    fromBlock: getBlockFrom(),
  });
}
