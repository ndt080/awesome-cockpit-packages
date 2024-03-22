import { t } from '@app/helpers/t.ts';
import type { TabViewComponentProps } from '@app/types/appTabs.ts';
import { UserScriptStatus } from '@entities/userScript';
import { ScriptControl } from '@features/ScriptControl';
import { PageSection } from '@patternfly/react-core/dist/esm/components/Page';
import { PlayIcon } from '@patternfly/react-icons/dist/esm/icons/play-icon';
import { LogViewer } from '@patternfly/react-log-viewer';
import { Portal } from '@shared/components/Portal.tsx';
import { LogsViewInfo } from '@widgets/LogsView/components/LogsViewInfo.tsx';
import { LogsViewLineInfo } from '@widgets/LogsView/components/LogsViewLineInfo.tsx';
import { LogsViewLoader } from '@widgets/LogsView/components/LogsViewLoader.tsx';
import { memo } from 'react';

import { LogViewConfig } from '../values/logViewConfig.ts';
import { MemoizedLogsViewToolbar } from './LogsViewToolbar.tsx';

interface LogsViewProps extends TabViewComponentProps {
  logs?: string[];
}

const DefaultLogs: string[] = [];

function LogsView({ toolbarRef, scriptStatus, logs = DefaultLogs, hidden }: LogsViewProps) {
  return (
    <>
      <Portal hidden={hidden} target={toolbarRef.current}>
        <ScriptControl
          icon={<PlayIcon />}
          variant="default"
          children={t('executeScriptBtn')}
          status={scriptStatus}
        />
      </Portal>

      {!hidden ? (
        <PageSection>
          <LogViewer
            hasLineNumbers={false}
            height="100%"
            data={logs}
            theme={LogViewConfig.theme}
            toolbar={<MemoizedLogsViewToolbar />}
            header={
              !logs?.length ? (
                <LogsViewInfo text={t('logsEmpty')} style={{ textAlign: 'center' }} />
              ) : scriptStatus === UserScriptStatus.Executing ? (
                <LogsViewLoader />
              ) : (
                <LogsViewLineInfo
                  variant={LogViewConfig.bannerVariant[scriptStatus]}
                  lineCount={logs?.length ?? 0}
                />
              )
            }
          />
        </PageSection>
      ) : null}
    </>
  );
}

const MemoizedLogsView = memo(LogsView);

export { LogsView, type LogsViewProps, MemoizedLogsView };
