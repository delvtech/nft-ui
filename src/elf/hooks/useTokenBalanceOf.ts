import { useSmartContractReadCall } from "@elementfi/react-query-typechain";
import useWeb3 from "elf/useWeb3";
import { NullableAddress } from "src/types";
import { ElfNFT__factory } from "typechain-types";
import { useAddresses } from "./useAddress";
import { useProvider } from "./useProvider";

export function useTokenBalanceOf(address: NullableAddress) {
  const { chainId } = useWeb3();

  const addresses = useAddresses();
  const provider = useProvider(chainId);

  const tokenContract = ElfNFT__factory.connect(
    addresses.tokenContract,
    provider,
  );

  return useSmartContractReadCall(tokenContract, "balanceOf", {
    callArgs: [address as string],
    enabled: !!address,
  });
}
