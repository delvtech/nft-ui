import React, { useEffect } from "react";
import toast from "react-hot-toast";
import useWeb3 from "elf/useWeb3";
import { COLORS } from "helpers/colorPalette";
import { createToastSuccess } from "helpers/createToast";
import { WithChildren } from "helpers/types";

// Higher order component for wallet events, mounts toast notifications.
export const WalletNotifier = ({ children }: WithChildren) => {
  const { active, account } = useWeb3();

  // Add use effect hooks for more event coverage
  useEffect(() => {
    if (account) {
      createToastSuccess("Connected Wallet");
    }
  }, [active, account]);

  return <>{children}</>;
};
