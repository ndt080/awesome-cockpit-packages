import { t } from '@app/helpers/t.ts';
import { useAppTabs } from '@app/helpers/useAppTabs.ts';
import { AppTab } from '@app/values/appTabs.ts';
import { useConfig } from '@entities/config';
import { UserScript, useUserScriptStore } from '@entities/userScript';
import { Header, HeaderContent, HeaderTabs } from '@features/Header';
import { Page } from '@patternfly/react-core/dist/esm/components/Page';
import { Suspense, useCallback, useEffect, useRef } from 'react';

function App() {
  const { config, loadConfig } = useConfig();

  const scriptStatus = useUserScriptStore((s) => s.lastStatus);
  const scriptResult = useUserScriptStore((s) => s.lastResult);
  const executeScripts = useUserScriptStore((s) => s.executeScripts);

  const toolbarRef = useRef<HTMLDivElement>(null);
  const { TabViewComponents, activeTab, setActiveTab, ...tabConfig } = useAppTabs();

  useEffect(() => {
    loadConfig().catch((e) => console.log(e));
  }, []);

  const onSubmit = useCallback((scripts: UserScript[]) => {
    setActiveTab(AppTab.Logs);
    executeScripts(scripts);
  }, []);

  return (
    <>
      <Page>
        <Header title={t('appTitle')} subtitle={t('appSubtitle')} description={t('appDescription')}>
          <HeaderTabs activeTab={activeTab} {...tabConfig} />
          <HeaderContent ref={toolbarRef} align="alignRight" id="toolbar-actions" />
        </Header>

        <Suspense>
          {TabViewComponents.map(([key, TabComponent]) => (
            <TabComponent
              toolbarRef={toolbarRef}
              scripts={config.scripts}
              logs={scriptResult}
              scriptStatus={scriptStatus}
              key={key}
              onSubmit={onSubmit}
              hidden={activeTab !== key}
            />
          ))}
        </Suspense>
      </Page>
    </>
  );
}

export default App;
