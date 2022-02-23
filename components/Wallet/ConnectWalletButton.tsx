import React from "react";
import useWeb3 from "elf/useWeb3";
import { Button, ButtonSize } from "common/Button/styles";
import { useWalletDialog } from "elf/hooks/useWalletDialog";

export const ConnectWalletButton: React.FC = () => {
  const { account, active } = useWeb3();
  const { openModal } = useWalletDialog();

  return (
    <Button size={ButtonSize.SMALL} onClick={() => openModal()}>
      {active
        ? `${account?.slice(0, 6)}...${account?.slice(-4)}`
        : "Connect Wallet"}
    </Button>
  );
};
