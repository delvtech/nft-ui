import axios from "axios";
import { BigNumber, BytesLike } from "ethers";
import { useQuery } from "react-query";

type TokenId = BigNumber;
type Proof = BytesLike[];
type Leaf = {
  address: string;
  tokenId: TokenId;
};
type ProofData = { leaf: Leaf; proof: Proof };
type ProofDataResponse = Array<ProofData>;

// const fakeProof = {
//   tokenId: BigNumber.from(0),
//   proof: [
//     "0x3f68e79174daf15b50e15833babc8eb7743e730bb9606f922c48e95314c3905c",
//     "0x31403139b3e90fd160d993560f6de598174a3c5cbb1dd8614454219f590c1d57",
//     "0x2c70357a690b685ecef91703e08c73f3be5a8fe584b65cb1de18eb9dd3308dcd",
//   ],
// };

const S3_BUCKET_URI = "https://elementfi.s3.us-east-2.amazonaws.com/nft";

const getProofURI = (address: string) => `${S3_BUCKET_URI}/goerli2/${address}`;

export const useProof = (address: string | undefined | null) => {
  return useQuery<ProofData | undefined>(["nft-proof", address], async () => {
    if (!address) {
      return undefined;
    }
    // console.log(getProofURI(address));
    const { data } = await axios.get<ProofDataResponse>(getProofURI(address));

    console.log(data);

    if (data && data[0]) {
      return data[0];
    }

    return undefined;
  });
};
