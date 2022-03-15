import {
  useSmartContractTransaction,
  UseSmartContractTransactionOptions,
} from "@elementfi/react-query-typechain";
import { getProvider } from "elf/providers";
import { Signer } from "ethers";
import { Minter, Minter__factory } from "typechain-types";
import { useAddresses } from "./useAddress";

export function useMinter(
  signer?: Signer,
  options?: UseSmartContractTransactionOptions<Minter, "mint">,
) {
  const addresses = useAddresses();
  const provider = getProvider();

  const minter = Minter__factory.connect(addresses.minter, provider);

  return useSmartContractTransaction(minter, "mint", signer, options);
}
