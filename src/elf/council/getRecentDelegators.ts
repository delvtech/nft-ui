import {
  LockingVault__factory,
  VestingVault__factory,
} from "elf-council-typechain";
import { getProvider } from "elf/providers";
import { getAddresses } from "src/addresses";

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

  console.log(await vestingVault.manager());

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

  console.log(lockingLogs, vestingLogs);
}
