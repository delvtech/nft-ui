import { Dialog, DialogProps } from "common/Dialog";
import useWeb3 from "elf/useWeb3";
import { injectedConnector } from "elf/wallets/connectors";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { AbstractConnector } from "@web3-react/abstract-connector";
import {
  BodyText,
  DialogTitle,
  FlexCol,
  PaddedButton,
  Spacer,
} from "common/Dialog/styles";

interface ConnectWalletButtonProps {
  connector: AbstractConnector;
  source: string;
  alt: string;

  onClick?: () => void;
}

const _ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  connector,
  source,
  alt,
  onClick,
}) => {
  const { activate, deactivate } = useWeb3();

  const deactivateActiveConnector = useCallback(async () => {
    await deactivate();
  }, [deactivate]);

  const handleClick = useCallback(() => {
    activate(connector, deactivateActiveConnector);
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
}) => (
  <Dialog isOpen={isOpen} onClose={() => onClose && onClose()}>
    <DialogTitle>Connect Wallet</DialogTitle>
    <FlexCol>
      <_ConnectWalletButton
        connector={injectedConnector}
        alt="MetaMask"
        source="/assets/svg/metamask.svg"
        onClick={() => onClose?.()}
      />

      <Spacer />

      <_ConnectWalletButton
        connector={injectedConnector}
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
  </Dialog>
);
