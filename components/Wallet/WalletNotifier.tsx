import { createToastSuccess } from "helpers/createToast";
import { WithChildren } from "helpers/types";
import React, { useEffect } from "react";
import { useEagerConnect } from "src/hooks/useEagerConnect";
import useWeb3 from "src/hooks/useWeb3";

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
