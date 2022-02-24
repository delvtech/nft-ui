import React from "react";
import WalletDialogContext from "contexts/WalletDialogContext";

export const useWalletDialog = () => {
  const context = React.useContext(WalletDialogContext);
  return context;
};
