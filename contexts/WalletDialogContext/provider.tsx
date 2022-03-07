import { ConnectWalletDialog } from "components/Wallet/ConnectWalletDialog";
import { WithChildren } from "helpers/types";
import React, { useCallback, useState } from "react";
import WalletDialogContext from "./index";

export const WalletDialogProvider = ({ children }: WithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <WalletDialogContext.Provider value={{ isOpen, open, close }}>
      <ConnectWalletDialog isOpen={isOpen} onClose={() => close()} />
      {children}
    </WalletDialogContext.Provider>
  );
};
