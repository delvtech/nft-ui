import React, { useCallback, useState } from "react";
import WalletDialogContext from "./index";
import { ConnectWalletDialog } from "components/Wallet/ConnectWalletDialog";

export const WalletDialogProvider: React.FC = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => {
    console.log("click");
    setModalOpen(true);
  }, [setModalOpen]);

  const closeModal = useCallback(() => setModalOpen(false), [setModalOpen]);

  return (
    <WalletDialogContext.Provider value={{ modalOpen, openModal, closeModal }}>
      <ConnectWalletDialog isOpen={modalOpen} onClose={() => closeModal()} />
      {children}
    </WalletDialogContext.Provider>
  );
};
