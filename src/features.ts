type FeatureFlag = "preLaunch";

const FeatureSwitches: Record<FeatureFlag, boolean> = {
  preLaunch: true,
};

export const isFeatureEnabled = (flag: FeatureFlag) => FeatureSwitches[flag];
