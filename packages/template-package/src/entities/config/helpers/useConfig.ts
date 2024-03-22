import { useConfigStore } from '@entities/config';
import { useShallow } from 'zustand/react/shallow';

export function useConfig() {
  const config = useConfigStore(useShallow((s) => s.config));
  const loadConfig = useConfigStore(useShallow((s) => s.loadConfig));

  return { config, loadConfig };
}
