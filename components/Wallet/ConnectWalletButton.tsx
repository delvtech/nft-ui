import { PrimaryButton } from "common/Button/styles";
import React from "react";
import { useWalletDialog } from "src/hooks/useWalletDialog";
import useWeb3 from "src/hooks/useWeb3";

export const ConnectWalletButton = () => {
  const { active } = useWeb3();
  const { open } = useWalletDialog();

  return (
    <PrimaryButton onClick={() => open()}>
      {active ? "Connected" : "Connect Wallet"}
    </PrimaryButton>
  );
};
