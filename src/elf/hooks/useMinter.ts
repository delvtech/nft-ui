import useWeb3 from "elf/useWeb3";
import { Minter__factory } from "typechain-types";
import { Signer } from "ethers";
import { useSmartContractTransaction } from "@elementfi/react-query-typechain";
import { useProvider } from "./useProvider";
import { useAddresses } from "./useAddress";

export function useMinter(signer?: Signer) {
  const { chainId } = useWeb3();

  const minter = Minter__factory.connect(
    useAddresses().minter,
    useProvider(chainId),
  );

  return useSmartContractTransaction(minter, "mint", signer);
}
