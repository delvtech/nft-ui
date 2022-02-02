import React, { useCallback } from "react";
import useWeb3 from "elf/useWeb3";
import { Button, ButtonsContainer } from "common/Button/styles";
import { injectedConnector } from "wallets/connectors";

export const ConnectWalletButton: React.FC = () => {
  const { active, activate, deactivate } = useWeb3();

  const deactivateActiveConnector = useCallback(async () => {
    await deactivate();
  }, [deactivate]);

  return (
    <ButtonsContainer>
      {active ? (
        <Button onClick={() => deactivateActiveConnector()}>
          Disconnect Wallet
        </Button>
      ) : (
        <Button
          onClick={() => activate(injectedConnector, deactivateActiveConnector)}
        >
          Connect Wallet
        </Button>
      )}
    </ButtonsContainer>
  );
};
