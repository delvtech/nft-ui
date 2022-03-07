import React from "react";

interface SwitchNetworkDialogContext {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

const defaultContext: SwitchNetworkDialogContext = {
  isOpen: false,
  close: () => {},
  open: () => {},
};

const SwitchNetworkDialogContext =
  React.createContext<SwitchNetworkDialogContext>(defaultContext);

export default SwitchNetworkDialogContext;
