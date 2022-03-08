import { SwitchNetworkDialog } from "components/Dialogs/SwitchNetworkDialog";
import { NEXT_ENV } from "elf/hooks/useProvider";
import useWeb3 from "elf/useWeb3";
import { getTargetChain } from "elf/wallets/chains";
import { WithChildren } from "helpers/types";
import React, { useCallback, useEffect, useState } from "react";
import SwitchNetworkDialogContext from ".";

export const SwitchNetworkDialogProvider = ({ children }: WithChildren) => {
  const { chainId } = useWeb3();
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  useEffect(() => {
    if (
      !!chainId &&
      getTargetChain() !== chainId &&
      // Overrides this check if we are in development mode
      NEXT_ENV !== "development"
    ) {
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
