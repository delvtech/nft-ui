import { BigNumber, Event } from "ethers";
import { Set } from "immutable";
import { useTransferEvents } from "./useTransferEvents";

type TransferEventArgs = [string, string, BigNumber];

export function useTokenIds(address: string | null | undefined) {
  const { data: toEvents } = useTransferEvents(undefined, address);
  const { data: fromEvents } = useTransferEvents(address, undefined);

  if (toEvents && fromEvents) {
    const tokenIds = reconcileTransferEvents(address, toEvents, fromEvents);
    return tokenIds.toJS() as Array<BigNumber>;
  }

  return [];
}

// Reconciles token in and out events into a set of tokens that the provided address owns
function reconcileTransferEvents(
  address: string | null | undefined,
  toEvents: Event[],
  fromEvents: Event[],
): Set<BigNumber> {
  const sortedEvents = sortEventsByBlock([...toEvents, ...fromEvents]);

  const tokenIds = sortedEvents.reduce((prev: Set<BigNumber>, curr: Event) => {
    const eventArgs = curr.args as TransferEventArgs;
    if (eventArgs) {
      const from = eventArgs[0];
      const to = eventArgs[1];
      const tokenId = eventArgs[2];

      // Skip edge case: transfer to self
      if (to === from) {
        return prev;
      }

      if (to === address) {
        return prev.add(tokenId);
      }

      if (from === address) {
        return prev.delete(tokenId);
      }
    }
    return prev;
  }, Set());

  return tokenIds;
}

function sortEventsByBlock(events: Event[]) {
  return events.sort((event) => event.blockNumber);
}
