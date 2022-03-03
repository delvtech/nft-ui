import { useSmartContractReadCall } from "@elementfi/react-query-typechain";
import useWeb3 from "elf/useWeb3";
import { ElfNFT__factory } from "typechain-types";
import { useAddresses } from "./useAddress";
import { useProvider } from "./useProvider";

export function useTokenBalanceOf(address: string | null | undefined) {
  const { chainId } = useWeb3();

  const tokenContract = ElfNFT__factory.connect(
    useAddresses().tokenContract,
    useProvider(chainId),
  );

  return useSmartContractReadCall(tokenContract, "balanceOf", {
    callArgs: [address as string],
    enabled: !!address,
  });
}
