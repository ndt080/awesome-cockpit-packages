import { concatWithLastMessage } from '@app/helpers/concatWithLastMessage.ts';
import { t } from '@app/helpers/t.ts';
import { create } from 'zustand';

import type { UserScript } from '../types/userScript.ts';
import { UserScriptStatus } from '../values/userScriptStatus.ts';

interface UserScriptStoreState {
  lastStatus: UserScriptStatus;
  lastResult: string[];
}

interface UserScriptStoreActions {
  executeScripts: (scripts: UserScript[]) => void;
}

const useUserScriptStore = create<UserScriptStoreState & UserScriptStoreActions>((set) => ({
  lastStatus: UserScriptStatus.None,
  lastResult: [],
  executeScripts: (scripts: UserScript[]) => {
    let process: CockpitProcess | null = null;

    const command = scripts.map((s) => s.command).join(' && ');
    const withSudo = Boolean(scripts.filter((s) => s.withSuperuser).length);

    try {
      set({ lastStatus: UserScriptStatus.Executing, lastResult: [command] });

      process = cockpit.script(command, withSudo ? ['-S'] : [], {
        err: 'out',
        superuser: withSudo ? 'require' : undefined,
      });

      process.finally(() => {
        process?.close();
      });

      process.stream((data) => {
        set((s) => ({
          lastResult: [...s.lastResult, String(data ?? '')].filter(Boolean),
        }));
      });

      process.fail((error) => {
        set((s) => ({
          lastResult: [...s.lastResult, error.toString()].filter(Boolean),
          lastStatus: UserScriptStatus.Fail,
        }));
      });

      process.done(() => {
        set((s) => {
          if (s.lastStatus === UserScriptStatus.Executing) {
            const results = concatWithLastMessage(s.lastResult, t('Completed successfully.'));
            return {
              lastResult: results.filter(Boolean),
              lastStatus: UserScriptStatus.Success,
            };
          }
          return { lastStatus: UserScriptStatus.None };
        });
      });
    } catch {
      process?.close();
    }
  },
}));

export { useUserScriptStore };
