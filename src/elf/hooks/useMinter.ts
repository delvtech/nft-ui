import {
  useSmartContractTransaction,
  UseSmartContractTransactionOptions,
} from "@elementfi/react-query-typechain";
import useWeb3 from "elf/useWeb3";
import { Signer } from "ethers";
import { Minter, Minter__factory } from "typechain-types";
import { useAddresses } from "./useAddress";
import { useProvider } from "./useProvider";

export function useMinter(
  signer?: Signer,
  options?: UseSmartContractTransactionOptions<Minter, "mint">,
) {
  const { chainId } = useWeb3();

  const minter = Minter__factory.connect(
    useAddresses().minter,
    useProvider(chainId),
  );

  return useSmartContractTransaction(minter, "mint", signer, options);
}
