import { BigNumber, BytesLike } from "ethers";
import { useQuery } from "react-query";

interface ProofData {
  tokenId: BigNumber;
  proof: BytesLike[];
}

// Mocked data for now
export const useProof = (address: string | undefined | null) => {
  return useQuery<ProofData>(["nft-proof", address], () => {
    return Promise.resolve({
      tokenId: BigNumber.from(0),
      proof: [
        "0x3f68e79174daf15b50e15833babc8eb7743e730bb9606f922c48e95314c3905c",
        "0x31403139b3e90fd160d993560f6de598174a3c5cbb1dd8614454219f590c1d57",
        "0x2c70357a690b685ecef91703e08c73f3be5a8fe584b65cb1de18eb9dd3308dcd",
      ],
    });
  });
};
