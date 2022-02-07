import { Dialog, DialogProps } from "common/Dialog";
import useWeb3 from "elf/useWeb3";
import {
  getWalletConnectConnector,
  injectedConnector,
} from "elf/wallets/connectors";
import Image from "next/image";
import React, { useCallback } from "react";
import { AbstractConnector } from "@web3-react/abstract-connector";
import {
  BodyText,
  DialogTitle,
  FlexCol,
  PaddedButton,
} from "common/Dialog/styles";
import Button from "common/Button";
import { Spacer } from "common/Spacer";

interface WalletButtonProps {
  connector: AbstractConnector;
  source: string;
  alt: string;

  onClick?: () => void;
  deactivator?: () => void;
}

const WalletButton: React.FC<WalletButtonProps> = ({
  connector,
  source,
  alt,
  onClick,
  deactivator,
}) => {
  const { activate } = useWeb3();

  const handleClick = useCallback(() => {
    activate(connector, deactivator);
    onClick?.();
  }, [activate]);

  return (
    <PaddedButton onClick={handleClick}>
      <Image layout="fixed" height={100} width={100} src={source} alt={alt} />
    </PaddedButton>
  );
};

export const ConnectWalletDialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
}) => {
  const { active, deactivate } = useWeb3();

  const deactivateActiveConnector = useCallback(async () => {
    await deactivate();
  }, [deactivate]);

  return (
    <Dialog isOpen={isOpen} onClose={() => onClose && onClose()}>
      <DialogTitle>Connect Wallet</DialogTitle>
      <FlexCol>
        <WalletButton
          connector={injectedConnector}
          deactivator={deactivateActiveConnector}
          alt="MetaMask"
          source="/assets/svg/metamask.svg"
          onClick={() => onClose?.()}
        />

        <Spacer />

        <WalletButton
          connector={getWalletConnectConnector()}
          deactivator={deactivateActiveConnector}
          alt="WalletConnect"
          source="/assets/svg/walletConnectIcon.svg"
          onClick={() => onClose?.()}
        />
      </FlexCol>
      <Spacer />
      <BodyText>
        Note: Some connectors can only disconnect wallets from their app. Some
        connectors may also cause a page refresh.
      </BodyText>

      {active && (
        <>
          <Spacer />
          <Button
            sidePadding="25px"
            onClick={() => {
              deactivateActiveConnector();
              onClose?.();
            }}
          >
            Close connection
          </Button>
          <Spacer />
        </>
      )}
    </Dialog>
  );
};
