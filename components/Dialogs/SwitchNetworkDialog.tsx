import { Button } from "common/Button/styles";
import { Flex } from "common/Container/styles";
import { Dialog, DialogProps } from "common/Dialog";
import { DialogBodyText, DialogTitle } from "common/Dialog/styles";
import { Spacer } from "common/Spacer";
import useWeb3 from "elf/useWeb3";
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

  const switchToNetwork = async () => {
    if (!library?.provider?.request) {
      return;
    }
    const formattedChainId = hexStripZeros(BigNumber.from(1).toHexString());
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: formattedChainId }],
      });
    } catch (error: any) {
      // 4902 is the error code for attempting to switch to an unrecognized chainId
      if (error.code === 4902) {
        // const info = CHAIN_INFO[chainId];
        // await library.provider.request({
        //   method: "wallet_addEthereumChain",
        //   params: [
        //     {
        //       chainId: formattedChainId,
        //       chainName: info.label,
        //       rpcUrls: getRpcUrls(chainId),
        //       nativeCurrency: info.nativeCurrency,
        //       blockExplorerUrls: [info.explorer],
        //     },
        //   ],
        // });
        // // metamask (only known implementer) automatically switches after a network is added
        // // the second call is done here because that behavior is not a part of the spec and cannot be relied upon in the future
        // // metamask's behavior when switching to the current network is just to return null (a no-op)
        // try {
        //   await library.provider.request({
        //     method: "wallet_switchEthereumChain",
        //     params: [{ chainId: formattedChainId }],
        //   });
        // } catch (error) {
        //   console.debug("Added network but could not switch chains", error);
        // }
      } else {
        throw error;
      }
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={() => onClose?.()}>
      <Flex align="center" direction="column">
        <DialogTitle>Switch to Ethereum</DialogTitle>
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
          Note: Some connectors can only disconnect wallets from their app. Some
          connectors may also cause a page refresh.
        </DialogBodyText>
      </Flex>
    </Dialog>
  );
};
