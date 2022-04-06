import axios from "axios";
import useWeb3 from "elf/useWeb3";
import { useQuery } from "react-query";

const MAINNET_BASE =
  "https://ipfs.io/ipfs/QmUequ9q1Uw1tnYRgTH9KmHaasw8Z3q98rLxGNJeQZmnBW";

const getMetadataURL = (tokenId: number, chainId: number) => {
  return `${MAINNET_BASE}/${tokenId}`;
};

interface Metadata {
  image: string;
}

export const useElfImage = (tokenId?: number) => {
  const { chainId } = useWeb3();
  return useQuery<string | undefined>(
    `elf-image-${tokenId}`,
    async () => {
      const { data } = await axios.get<Metadata>(
        getMetadataURL(tokenId as number, chainId ?? 1),
      );

      return data.image;
    },
    {
      enabled: !!tokenId,
      refetchOnWindowFocus: false,
    },
  );
};
