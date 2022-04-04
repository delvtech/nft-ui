import axios from "axios";
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

export const useWhitelistStatus = (address: NullableAddress) => {
  return useQuery<boolean>(
    `whitelist-${address}`,
    async () => {
      const { data } = await axios.get<WhitelistDataResponse>(WHITELIST_URL);
      return data.whitelist.includes(address as string);
    },
    {
      enabled: !!address,
    },
  );
};
