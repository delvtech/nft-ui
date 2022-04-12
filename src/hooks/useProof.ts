import axios from "axios";
import { useQuery } from "react-query";
import useWeb3 from "src/hooks/useWeb3";
import { NullableAddress, ProofData, ProofDataResponse } from "src/types";
import { ChainId } from "src/wallets/chains";

const S3_BUCKET_URI = "https://elementfi.s3.us-east-2.amazonaws.com/nft";

const getProofURI = (address: string, chainId?: number) => {
  if (chainId === ChainId.GOERLI) {
    return `${S3_BUCKET_URI}/goerli2/${address}`;
  }

  if (chainId === ChainId.MAINNET) {
    return `${S3_BUCKET_URI}/mainnet/${address}`;
  }

  // defaulting to local testnet, fetching proof from public/proofs/<address>
  // see available proofs for correct wallet to use for testing
  return `/proofs/${address}.json`;
};

export const useProof = (address: NullableAddress) => {
  const { chainId } = useWeb3();
  return useQuery<ProofData | undefined>(
    ["nft-proof", address],
    async () => {
      const { data } = await axios.get<ProofDataResponse>(
        getProofURI(address as string, chainId),
      );

      return data.pop();
    },
    {
      enabled: !!address,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );
};
