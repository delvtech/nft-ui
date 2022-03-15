import { useSmartContractReadCall } from "@elementfi/react-query-typechain";
import { getProvider } from "elf/providers";
import useWeb3 from "elf/useWeb3";
import { BigNumber } from "ethers";
import { ElfNFT__factory } from "typechain-types";
import { useAddresses } from "./useAddress";

export function useOwnerOf(tokenId: BigNumber | undefined) {
  const { chainId } = useWeb3();

  const addresses = useAddresses();
  const provider = getProvider();

  const tokenContract = ElfNFT__factory.connect(
    addresses.tokenContract,
    provider,
  );

  return useSmartContractReadCall(tokenContract, "ownerOf", {
    callArgs: [tokenId as BigNumber],
    enabled: !!tokenId,
  });
}
