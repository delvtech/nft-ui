import { MintPlaceholder } from "components/Mint/MintPlaceholder";
import { useProof } from "elf/hooks/useProof";
import useWeb3 from "elf/useWeb3";
import { NextPage } from "next";
import React from "react";
import { Mint } from "../components/Mint";

const MintPage: NextPage = () => {
  const { account } = useWeb3();
  const { data: proofData } = useProof(account);

  const isAllowlisted = proofData?.proof && proofData.tokenId;

  return isAllowlisted ? <Mint /> : <MintPlaceholder />;
};

export default MintPage;
