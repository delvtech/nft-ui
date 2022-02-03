import Button from "common/Button";
import React, { useCallback } from "react";
import useWeb3 from "elf/useWeb3";
import { ButtonSize } from "common/Button/styles";
import { injectedConnector } from "wallets/connectors";

export const ConnectWalletButton: React.FC = () => {
  const { account, active, activate, deactivate } = useWeb3();

  const deactivateActiveConnector = useCallback(async () => {
    await deactivate();
  }, [deactivate]);

  return (
    <>
      {active ? (
        <Button
          size={ButtonSize.SMALL}
          onClick={() => deactivateActiveConnector()}
        >
          {account?.slice(0, 6)}...{account?.slice(-6)}
        </Button>
      ) : (
        <Button
          size={ButtonSize.SMALL}
          onClick={() => activate(injectedConnector, deactivateActiveConnector)}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
};
