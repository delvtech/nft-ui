import { useSmartContractReadCall } from "@elementfi/react-query-typechain";
import { getProvider } from "elf/providers";
import useWeb3 from "elf/useWeb3";
import { NullableAddress } from "src/types";
import { ElfNFT__factory } from "typechain-types";
import { useAddresses } from "./useAddress";

export function useTokenBalanceOf(address: NullableAddress) {
  const { chainId } = useWeb3();

  const addresses = useAddresses();
  const provider = getProvider();

  const tokenContract = ElfNFT__factory.connect(
    addresses.tokenContract,
    provider,
  );

  return useSmartContractReadCall(tokenContract, "balanceOf", {
    callArgs: [address as string],
    enabled: !!address,
  });
}
