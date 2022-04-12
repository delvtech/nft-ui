import { Button, ButtonSize, ButtonStyles } from "common/Button/styles";
import React from "react";
import { useWalletDialog } from "src/hooks/useWalletDialog";
import useWeb3 from "src/hooks/useWeb3";

export const ConnectWalletNavButton = ({ size }: ButtonStyles) => {
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
