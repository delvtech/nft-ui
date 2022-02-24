import React from "react";
import useWeb3 from "elf/useWeb3";
import { Button, ButtonSize, ButtonStyles } from "common/Button/styles";
import { useWalletDialog } from "elf/hooks/useWalletDialog";

export const ConnectWalletButton = ({ size }: ButtonStyles) => {
  const { account, active } = useWeb3();
  const { openModal } = useWalletDialog();

  return (
    <Button size={size ?? ButtonSize.SMALL} onClick={() => openModal()}>
      {active
        ? `${account?.slice(0, 6)}...${account?.slice(-4)}`
        : "Connect Wallet"}
    </Button>
  );
};
