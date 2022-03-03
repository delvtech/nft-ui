import axios from "axios";
import useWeb3 from "elf/useWeb3";
import { ChainId } from "elf/wallets/chains";
import { useQuery } from "react-query";
import { ProofData, ProofDataResponse } from "src/types";

const S3_BUCKET_URI = "https://elementfi.s3.us-east-2.amazonaws.com/nft";

const getProofURI = (address: string, chainId?: number) => {
  if (chainId === ChainId.GOERLI) {
    return `${S3_BUCKET_URI}/goerli2/${address}`;
  }

  if (chainId === ChainId.MAINNET) {
    // TODO @cashd: update when mainnet bucket is ready
    return `${S3_BUCKET_URI}/goerli2/${address}`;
  }

  // defaulting to local testnet, fetching proof from public/proofs/<address>
  // see available proofs for correct wallet to use for testing
  return `/proofs/${address}.json`;
};

export const useProof = (address: string | undefined | null) => {
  const { chainId } = useWeb3();
  return useQuery<ProofData | undefined>(["nft-proof", address], async () => {
    if (!address) {
      return undefined;
    }
    const { data } = await axios.get<ProofDataResponse>(
      getProofURI(address, chainId),
    );

    if (data && data[0]) {
      return data[0];
    }

    return undefined;
  });
};
