import { Button, ButtonSize, ButtonStyles } from "common/Button/styles";
import { useWalletDialog } from "elf/hooks/useWalletDialog";
import useWeb3 from "elf/useWeb3";
import React from "react";

export const ConnectWalletButton = ({ size }: ButtonStyles) => {
  const { account, active } = useWeb3();
  const { open } = useWalletDialog();

  return (
    <Button size={size ?? ButtonSize.SMALL} onClick={() => open()}>
      {active
        ? `${account?.slice(0, 6)}...${account?.slice(-4)}`
        : "Connect Wallet"}
    </Button>
  );
};
