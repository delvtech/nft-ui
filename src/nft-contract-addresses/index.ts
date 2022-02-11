import { ChainId } from "elf/wallets/chains";

import devAddressList from "./dev.addresses.json";

interface AddressesJsonFile {
  minter: string;
}

export function getAddressesList(chainId?: number): AddressesJsonFile {
  // Fetch address list by chainId
  if (chainId === ChainId.MAINNET) {
    // TODO @cashd: populate with mainnet address
    return devAddressList;
  }

  if (chainId === ChainId.GOERLI) {
    // TODO @cashd: populate with mainnet address
    return devAddressList;
  }

  // default to local addresses
  return devAddressList;
}
