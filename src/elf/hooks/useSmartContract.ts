import { useSmartContractTransaction } from "@elementfi/react-query-typechain";
import { getProvider } from "elf/providers";
import useWeb3 from "elf/useWeb3";
import { ChainId } from "elf/wallets/chains";
import { Signer } from "ethers";

import { Minter__factory } from "typechain-types";

const ADDRESS = "0xd787Ec2b6C962f611300175603741Db8438674a0";

export function getMinter() {
  const { chainId } = useWeb3();
  return Minter__factory.connect(
    ADDRESS,
    getProvider(chainId ?? ChainId.LOCAL),
  );
}

export function useMint(signer: Signer | undefined) {
  return useSmartContractTransaction(getMinter(), "mint", signer);
}
