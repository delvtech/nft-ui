import { useSmartContractReadCall } from "@elementfi/react-query-typechain";
import useWeb3 from "elf/useWeb3";
import { BigNumber } from "ethers";
import { ElfNFT__factory } from "typechain-types";
import { useAddresses } from "./useAddress";
import { useProvider } from "./useProvider";

export function useOwnerOf(tokenId: BigNumber | undefined) {
  const { chainId } = useWeb3();

  const addresses = useAddresses();
  const provider = useProvider(chainId);

  const tokenContract = ElfNFT__factory.connect(
    addresses.tokenContract,
    provider,
  );

  return useSmartContractReadCall(tokenContract, "ownerOf", {
    callArgs: [tokenId as BigNumber],
    enabled: !!tokenId,
  });
}
