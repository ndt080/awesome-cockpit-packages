import { t } from '@app/helpers/t.ts';

export enum AppTab {
  Scripts = 'scripts',
  Logs = 'logs',
}

export const AppTabsConfig: { key: AppTab; title: string }[] = [
  { key: AppTab.Scripts, title: t('scriptsTabName') },
  { key: AppTab.Logs, title: t('logsTabName') },
];
