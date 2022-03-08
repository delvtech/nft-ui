import { Button } from "common/Button/styles";
import { Flex } from "common/Container/styles";
import { Dialog, DialogProps } from "common/Dialog";
import { DialogBodyText, DialogTitle } from "common/Dialog/styles";
import { Spacer } from "common/Spacer";
import useWeb3 from "elf/useWeb3";
import { ChainNames, getTargetChain } from "elf/wallets/chains";
import { BigNumber } from "ethers";
import { hexStripZeros } from "ethers/lib/utils";
import { createToastError } from "helpers/createToast";
import { WithChildren } from "helpers/types";
import React, { useCallback } from "react";

export const SwitchNetworkDialog = ({
  isOpen,
  onClose,
}: WithChildren<DialogProps>) => {
  const { active, deactivate, library } = useWeb3();

  const deactivateActiveConnector = useCallback(async () => {
    createToastError("Wallet has been disconnected.");
    await deactivate();
  }, [deactivate]);

  const chainName = ChainNames[getTargetChain()];

  const switchToNetwork = async () => {
    if (!library?.provider?.request) {
      return;
    }
    const formattedChainId = hexStripZeros(
      BigNumber.from(getTargetChain()).toHexString(),
    );
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: formattedChainId }],
      });
    } catch (error: any) {
      // 4902 is the error code for attempting to switch to an unrecognized chainId
      if (error.code === 4902) {
        // This should never happen
        createToastError("Network is not added to wallet.");
      } else {
        throw error;
      }
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={() => onClose?.()}>
      <Flex align="center" direction="column">
        <DialogTitle>Switch to {chainName}</DialogTitle>
        <Button sidePadding="24px" onClick={switchToNetwork}>
          Switch network
        </Button>

        {active && (
          <>
            <Spacer />
            <Button
              sidePadding="24px"
              onClick={async () => {
                await deactivateActiveConnector();
                onClose?.();
              }}
            >
              Close connection
            </Button>
          </>
        )}

        <DialogBodyText>
          Note: Elfiverse is only supported on {chainName}. Please switch to
          {chainName} by clicking on the button or changing networks in your
          wallet directly.
        </DialogBodyText>
      </Flex>
    </Dialog>
  );
};
