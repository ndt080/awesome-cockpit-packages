import { AppTab, AppTabsConfig } from '@app/values/appTabs.ts';
import { lazy, useCallback, useState } from 'react';

import { LazyTabViewComponent } from '../types/appTabs.ts';

const ScriptsView = lazy(() => import('@widgets/ScriptsView'));
const LogsView = lazy(() => import('@widgets/LogsView'));

const TabViewComponents = {
  [AppTab.Scripts]: ScriptsView,
  [AppTab.Logs]: LogsView,
} satisfies Record<AppTab, LazyTabViewComponent>;

export function useAppTabs() {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.Scripts);

  const onSelectTab = useCallback((key: string) => {
    if (Object.values(AppTab).includes(key as AppTab)) {
      setActiveTab(key as AppTab);
    }
  }, []);

  return {
    TabViewComponents: Object.entries(TabViewComponents),
    tabs: AppTabsConfig,
    activeTab,
    setActiveTab,
    onSelectTab,
  };
}
