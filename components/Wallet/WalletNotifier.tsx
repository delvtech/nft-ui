import React, { useEffect } from "react";
import toast from "react-hot-toast";
import useWeb3 from "elf/useWeb3";
import { COLORS } from "helpers/colorPalette";

// Higher order component for wallet events, mounts toast notifications.
export const WalletNotifier: React.FC = ({ children }) => {
  const { active, account } = useWeb3();

  // Add use effect hooks for more event coverage
  useEffect(() => {
    if (account) {
      toast.success("Connected wallet!", {
        duration: 10000,
        position: "bottom-right",
        style: {
          borderRadius: 0,
          borderWidth: "1px",
          borderColor: COLORS.greenLight,
          backgroundColor: COLORS.black,
          color: COLORS.white,
        },
      });
    }
  }, [active, account]);

  return <>{children}</>;
};
