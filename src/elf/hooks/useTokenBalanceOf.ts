import { useSmartContractReadCall } from "@elementfi/react-query-typechain";
import { getProvider } from "elf/providers";
import { getAddresses } from "src/addresses";
import { NullableAddress } from "src/types";
import { ElfNFT__factory } from "typechain-types";

export function useTokenBalanceOf(address: NullableAddress) {
  const addresses = getAddresses();
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
