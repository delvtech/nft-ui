import { BigNumber, Event } from "ethers";

export const getTokenIdFromMintEvents = (
  events?: Event[],
): BigNumber | undefined => {
  const lastMintEvent = events?.slice(-1).pop();

  if (lastMintEvent) {
    const eventArgs = lastMintEvent.args;
    if (eventArgs) {
      const tokenId = eventArgs.at(2) as BigNumber;
      return tokenId;
    }
  }

  return;
};
