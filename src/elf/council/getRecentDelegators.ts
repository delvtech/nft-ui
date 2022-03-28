import {
  LockingVault__factory,
  VestingVault__factory,
} from "elf-council-typechain";
import { getProvider } from "elf/providers";
import { getAddresses } from "src/addresses";

// Fetches the number of unique delegators from both locking and vesting vaults
// This function should be used within NextJs getStaticProps with a TTL to cache this result
export async function getRecentDelegators() {
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

  const lockingLogs = await provider.getLogs({
    fromBlock: 0,
    ...lockingFilter,
  });
  const vestingLogs = await provider.getLogs({
    fromBlock: 0,
    ...vestingFilter,
  });

  const delegators: Set<string> = new Set([]);

  lockingLogs.forEach((log) => {
    const from = log.topics[1];
    from && delegators.add(from);
  });

  vestingLogs.forEach((log) => {
    const from = log.topics[1];
    from && delegators.add(from);
  });

  return {
    delegators,
  };
}
