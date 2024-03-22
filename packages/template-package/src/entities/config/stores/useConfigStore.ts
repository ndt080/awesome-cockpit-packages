import { UserScriptMapper } from '@entities/userScript';
import { httpClient } from '@shared/plugins/axios';
import { create } from 'zustand';

import configUrl from '/configs/config.json?url';

import type { Config } from '../types';

interface ConfigStoreState {
  config: Config;
}

interface ConfigStoreActions {
  loadConfig: () => Promise<Config>;
}

const useConfigStore = create<ConfigStoreState & ConfigStoreActions>((set) => ({
  config: {
    scripts: [],
  },
  async loadConfig() {
    const config = await httpClient.get<Config>(configUrl).then(({ data }) => data);
    config.scripts = UserScriptMapper.mapMany(Array.isArray(config.scripts) ? config.scripts : []);
    set({ config });
    return config;
  },
}));

export { useConfigStore };
