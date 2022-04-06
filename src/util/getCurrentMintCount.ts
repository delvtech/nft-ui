import { getProvider } from "elf/providers";
import { ethers } from "ethers";
import { getAddresses } from "src/addresses";
import { getBlockFrom } from "src/blocks";
import { ElfNFT__factory } from "typechain-types";

// This function should be used within NextJs getStaticProps with a TTL to cache this result
export async function getCurrentMintCount() {
  const provider = getProvider();
  const address = getAddresses();

  const NFT = ElfNFT__factory.connect(address.tokenContract, provider);

  const transferFilter = NFT.filters.Transfer(
    ethers.constants.AddressZero,
    null,
    null,
  );

  const transferEvents = await NFT.queryFilter(transferFilter, getBlockFrom());

  return transferEvents.length;
}
