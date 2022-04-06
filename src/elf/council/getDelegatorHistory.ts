import {
  LockingVault__factory,
  VestingVault__factory,
} from "elf-council-typechain";
import { getProvider } from "elf/providers";
import { getAddresses } from "src/addresses";
import { getBlockFrom } from "src/blocks";
import { getScaledEventHistory } from "src/util/getScaledEventHistory";
import { sortEventsByBlock } from "src/util/sortEventsByBlock";

// Fetches the number of unique delegators from both locking and vesting vaults
// This function should be used within NextJs getStaticProps with a TTL to cache this result
export async function getDelegatorHistory() {
  const provider = getProvider();
  const address = getAddresses();

  const lockingVault = LockingVault__factory.connect(
    address.lockingVault,
    provider,
  );

  const vestingVault = VestingVault__factory.connect(
    address.vestingVault,
    provider,
  );

  // Query for all events
  const lockingFilter = lockingVault.filters.VoteChange(null, null, null);
  const vestingFilter = vestingVault.filters.VoteChange(null, null, null);

  const lockingEvents = await lockingVault.queryFilter(
    lockingFilter,
    getBlockFrom(),
  );
  const vestingEvents = await vestingVault.queryFilter(
    vestingFilter,
    getBlockFrom(),
  );

  const sortedEvents = sortEventsByBlock(lockingEvents.concat(vestingEvents));
  const history = await getScaledEventHistory(sortedEvents);

  return history;
}
