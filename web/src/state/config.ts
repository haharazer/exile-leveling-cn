import { persistentAtom } from ".";

export interface Config {
  gemsOnly: boolean;
  showSubsteps: boolean;
  // Older saved configurations omit this flag; undefined means disabled.
  showViscera?: boolean;
}

const CONFIG_VERSION = 0;

export const configSelector = persistentAtom<Config>(
  "config",
  {
    gemsOnly: false,
    showSubsteps: true,
    showViscera: false,
  },
  CONFIG_VERSION,
);
