import { useSmartContractReadCall } from "@elementfi/react-query-typechain";
import { ElfNFT__factory } from "contracts";
import { BigNumber } from "ethers";
import { getAddresses } from "src/addresses";
import useWeb3 from "src/hooks/useWeb3";
import { getProvider } from "src/providers";

export function useOwnerOf(tokenId: BigNumber | undefined) {
  const { chainId } = useWeb3();

  const addresses = getAddresses();
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
