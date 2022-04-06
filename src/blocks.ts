import { ChainId, getTargetChain } from "elf/wallets/chains";
import { memoize } from "lodash";

export const getBlockFrom = memoize(() => {
  const chain = getTargetChain();

  if (chain === ChainId.MAINNET) {
    return 14534060;
  }

  if (chain === ChainId.GOERLI) {
    return 6500000;
  }

  return 0;
});
