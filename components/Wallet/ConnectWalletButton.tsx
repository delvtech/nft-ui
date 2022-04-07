import { PrimaryButton } from "common/Button/styles";
import { useWalletDialog } from "elf/hooks/useWalletDialog";
import useWeb3 from "elf/useWeb3";
import React from "react";

export const ConnectWalletButton = () => {
  const { active } = useWeb3();
  const { open } = useWalletDialog();

  return (
    <PrimaryButton onClick={() => open()}>
      {active ? "Connected" : "Connect Wallet"}
    </PrimaryButton>
  );
};
