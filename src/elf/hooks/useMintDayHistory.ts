import { Event } from "ethers";
import { countBy, toPairs } from "lodash";
import moment from "moment";
import { useQuery } from "react-query";
import { MintDayCount } from "src/types";
import { scale } from "src/util/scale";

export function useMintDayHistory(history?: Event[]) {
  return useQuery<MintDayCount[] | undefined>(
    "mint-history",
    async () => {
      if (history && history.length >= 2) {
        const first = history[0];
        const firstTimestamp = (await first.getBlock()).timestamp;

        const last = history[history.length - 1];
        const lastTimestamp = (await last.getBlock()).timestamp;

        const scaledHistory = history.map((event) =>
          moment(
            new Date(
              scale(
                event.blockNumber,
                first.blockNumber,
                last.blockNumber,
                firstTimestamp * 1000,
                lastTimestamp * 1000,
              ),
            ),
          ).format("DD MMM"),
        );

        return toPairs(countBy(scaledHistory)).map((pair) => ({
          date: pair[0],
          count: pair[1],
        }));
      }
    },
    {
      enabled: history && history.length >= 2,
      keepPreviousData: true,
    },
  );
}
