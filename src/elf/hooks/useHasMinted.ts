import useWeb3 from "elf/useWeb3";
import { NullableAddress } from "src/types";
import { useTokenBalanceOf } from "./useTokenBalanceOf";

// TODO @cashd: This needs to be refactored to check for the
// existence of a mintDate from useMintDate
export function useHasMinted(address?: NullableAddress) {
  const { account } = useWeb3();
  const { data: mintedCount } = useTokenBalanceOf(address ?? account);

  return mintedCount && mintedCount.gt(0);
}
