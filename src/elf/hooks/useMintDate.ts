import { BigNumber, ethers } from "ethers";
import moment from "moment";
import { QueryObserverResult, useQuery } from "react-query";
import { useMintEvents } from "./useMintEvents";

export function useMintDate(
  tokenId?: BigNumber,
): QueryObserverResult<string | undefined> {
  const { data: events } = useMintEvents(
    ethers.constants.AddressZero,
    undefined,
    tokenId,
  );

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
      enabled: !!events?.length,
    },
  );
}
