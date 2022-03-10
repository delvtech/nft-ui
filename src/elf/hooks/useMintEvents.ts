import { useSmartContractEvents } from "@elementfi/react-query-typechain";
import useWeb3 from "elf/useWeb3";
import { ethers } from "ethers";
import { ElfNFT__factory } from "typechain-types";
import { useAddresses } from "./useAddress";
import { useProvider } from "./useProvider";

export function useMintEvents(ownerAddress: string | undefined | null) {
  const { chainId } = useWeb3();

  const address = useAddresses();
  const provider = useProvider(chainId);

  const NFT = ElfNFT__factory.connect(address.tokenContract, provider);

  return useSmartContractEvents(NFT, "Transfer", {
    callArgs: [ethers.constants.AddressZero, ownerAddress],
    enabled: !!ownerAddress,
  });
}
