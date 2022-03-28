import useWeb3 from "elf/useWeb3";
import { ChainId } from "elf/wallets/chains";
import { useEffect, useState } from "react";
import devAddressList from "../../addresses/dev.addresses.json";
import goerliAddressList from "../../addresses/goerli.addresses.json";

export const useAddresses = () => {
  const { chainId } = useWeb3();
  const [addresses, setAddresses] = useState(devAddressList);

  useEffect(() => {
    // Fetch address list by chainId
    if (chainId === ChainId.MAINNET) {
      // TODO @cashd: populate with mainnet address
      setAddresses(devAddressList);
    }

    if (chainId === ChainId.GOERLI) {
      setAddresses(goerliAddressList);
    }

    if (chainId === ChainId.LOCAL) {
      setAddresses(devAddressList);
    }
  }, [chainId]);

  return addresses;
};
