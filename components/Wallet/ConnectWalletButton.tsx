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

      {active ? (
        <Button size={ButtonSize.SMALL} onClick={() => setModalOpen(true)}>
          {account?.slice(0, 6)}...{account?.slice(-4)}
        </Button>
      ) : (
        <Button size={ButtonSize.SMALL} onClick={() => setModalOpen(true)}>
          Connect Wallet
        </Button>
      )}
    </>
  );
};
