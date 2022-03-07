import useWeb3 from "elf/useWeb3";
import { useTokenBalanceOf } from "./useTokenBalanceOf";

export function useHasMinted(address?: string | null | undefined) {
  const { account } = useWeb3();
  const { data: mintedCount } = useTokenBalanceOf(address ?? account);

  return mintedCount && mintedCount.gt(0);
}
