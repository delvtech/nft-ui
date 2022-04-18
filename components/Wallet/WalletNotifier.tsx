import { createToastSuccess } from "helpers/createToast";
import { WithChildren } from "helpers/types";
import { useEagerConnect } from "hooks/useEagerConnect";
import useWeb3 from "hooks/useWeb3";
import React, { useEffect } from "react";

// Higher order component for wallet events, mounts toast notifications.
export const WalletNotifier = ({ children }: WithChildren) => {
  const { account } = useWeb3();

  useEagerConnect();

  // Add use effect hooks for more event coverage
  useEffect(() => {
    if (account) {
      createToastSuccess("Connected Wallet");
    }
  }, [account]);

  return <>{children}</>;
};
