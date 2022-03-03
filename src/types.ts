import { BigNumber, BytesLike } from "ethers";

type TokenId = BigNumber;

type Proof = BytesLike[];

type Leaf = {
  address: string;
  tokenId: TokenId;
};

export type ProofData = { leaf: Leaf; proof: Proof };

export type ProofDataResponse = Array<ProofData>;
