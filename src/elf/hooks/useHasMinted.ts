import { useTokenBalanceOf } from "./useTokenBalanceOf";

export function useHasMinted(address: string | null | undefined) {
  const { data: mintedCount } = useTokenBalanceOf(address);

  return mintedCount && mintedCount.gt(0);
}
