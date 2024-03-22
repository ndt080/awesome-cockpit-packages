import { httpClient } from '@shared/plugins/axios';
import { useCallback } from 'react';

import configUrl from '/configs/config.json?url';

interface Config {}

let config: Config = {};

function useConfig() {
  const loadConfig = useCallback(async (): Promise<Config> => {
    return httpClient
      .get<Config>(configUrl)
      .then(({ data }) => data)
      .then((response) => {
        config = response;
        return response;
      });
  }, []);

  return {
    get config() {
      return config;
    },
    loadConfig,
  };
}

export { type Config, useConfig };
