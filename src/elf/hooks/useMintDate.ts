import moment from "moment";
import { QueryObserverResult, useQuery } from "react-query";
import { getTokenIdFromMintEvents } from "src/util/getTokenIdFromMintEvent";
import { useMintEvents } from "./useMintEvents";
import { useOwnerOf } from "./useOwnerOf";

export function useMintDate(
  ownerAddress: string | null | undefined,
): QueryObserverResult<string | undefined> {
  const { data: events } = useMintEvents(ownerAddress);
  const tokenId = getTokenIdFromMintEvents(events);
  const { data: owner } = useOwnerOf(tokenId);

  return useQuery<string | undefined>(
    "mintDate",
    async () => {
      if (!events?.length) {
        return;
      }

      const lastMintEvent = events[events.length - 1];
      const { getBlock } = lastMintEvent;
      const block = await getBlock();

      // Localized Month/Day/Year
      const formattedDate = moment(block.timestamp * 1000).format("L");
      return formattedDate;
    },
    {
      enabled: !!events?.length && owner === ownerAddress,
    },
  );
}
