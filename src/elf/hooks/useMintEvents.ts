import { useSmartContractEvents } from "@elementfi/react-query-typechain";
import useWeb3 from "elf/useWeb3";
import { ERC721__factory } from "typechain-types";
import { useAddresses } from "./useAddress";
import { useProvider } from "./useProvider";

const zeroAddress = "0x0000000000000000000000000000000000000000";

export function useMintEvents(ownerAddress: string | undefined | null) {
  const { chainId } = useWeb3();

  const NFT = ERC721__factory.connect(
    useAddresses().tokenContract,
    useProvider(chainId),
  );

  return useSmartContractEvents(NFT, "Transfer", {
    callArgs: [zeroAddress, ownerAddress],
    enabled: !!ownerAddress,
  });
}
