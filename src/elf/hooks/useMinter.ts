import useWeb3 from "elf/useWeb3";
import { ChainId } from "elf/wallets/chains";
import { Minter__factory } from "typechain-types";
import { Signer } from "ethers";
import { getAddressesList } from "src/nft-contract-addresses";
import { getProvider } from "elf/providers";
import { useSmartContractTransaction } from "@elementfi/react-query-typechain";

export function getMinter() {
  const { chainId } = useWeb3();
  return Minter__factory.connect(
    getAddressesList(chainId).minter,
    getProvider(chainId as ChainId),
  );
}

export function useMint(signer: Signer | undefined) {
  return useSmartContractTransaction(getMinter(), "mint", signer);
}
