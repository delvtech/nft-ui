import { SwitchNetworkDialog } from "components/Dialogs/SwitchNetworkDialog";
import useWeb3 from "elf/useWeb3";
import { ChainId } from "elf/wallets/chains";
import { WithChildren } from "helpers/types";
import React, { useCallback, useEffect, useState } from "react";
import SwitchNetworkDialogContext from ".";

export const SwitchNetworkDialogProvider = ({ children }: WithChildren) => {
  const { chainId } = useWeb3();
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  useEffect(() => {
    console.log("here1", chainId);
    if (chainId && chainId !== ChainId.MAINNET && true) {
      console.log("here");
      open();
    } else {
      close();
    }
  }, [chainId]);

  return (
    <SwitchNetworkDialogContext.Provider value={{ isOpen, open, close }}>
      <SwitchNetworkDialog isOpen={isOpen} onClose={() => close()} />
      {children}
    </SwitchNetworkDialogContext.Provider>
  );
};
