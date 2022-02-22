import React, { useState } from "react";
import useWeb3 from "elf/useWeb3";
import { Button, ButtonSize } from "common/Button/styles";
import { ConnectWalletDialog } from "./ConnectWalletDialog";

export const ConnectWalletButton: React.FC = () => {
  const { account, active } = useWeb3();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ConnectWalletDialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <Button size={ButtonSize.SMALL} onClick={() => setModalOpen(true)}>
        {active
          ? `${account?.slice(0, 6)}...${account?.slice(-4)}`
          : "Connect Wallet"}
      </Button>
    </>
  );
};
