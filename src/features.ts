type FeatureFlag = "preLaunch";

const FeatureSwitches: Record<FeatureFlag, boolean> = {
  preLaunch: false,
};

export const isFeatureEnabled = (flag: FeatureFlag) => FeatureSwitches[flag];
