import React from "react";

interface WalletDialogContext {
  modalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const defaultContext: WalletDialogContext = {
  modalOpen: false,
  closeModal: () => {},
  openModal: () => {},
};

const WalletDialogContext =
  React.createContext<WalletDialogContext>(defaultContext);

export default WalletDialogContext;
