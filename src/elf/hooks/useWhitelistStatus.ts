import axios from "axios";
import { ChainId, getTargetChain } from "elf/wallets/chains";
import { useQuery } from "react-query";
import { NullableAddress } from "src/types";
import { WHITELIST_URL } from "src/urls";

type Whitelist = string[];

interface WhitelistData {
  address: string;
  block: number;
}

interface WhitelistDataResponse {
  whitelist: Whitelist;
  whitelistData: WhitelistData;
}

const getWhitelistURL = () => {
  const chain = getTargetChain();

  if (chain === ChainId.GOERLI) {
    return "/whitelist/goerli_whitelist.json";
  } else {
    return WHITELIST_URL;
  }
};

export const useWhitelistStatus = (address: NullableAddress) => {
  return useQuery<boolean>(
    `whitelist-${address}`,
    async () => {
      const { data } = await axios.get<WhitelistDataResponse>(
        getWhitelistURL(),
      );
      return data.whitelist.includes(address as string);
    },
    {
      enabled: !!address,
      refetchOnWindowFocus: false,
    },
  );
};
