import { t } from '@app/helpers/t.ts';
import {
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core/dist/esm/components/Toolbar';
import { LogViewerSearch } from '@patternfly/react-log-viewer';
import { memo } from 'react';

interface LogsViewToolbarProps {}

function LogsViewToolbar({ ...props }: LogsViewToolbarProps) {
  return (
    <Toolbar {...props}>
      <ToolbarContent style={{ padding: '4px 12px' }}>
        <ToolbarItem align={{ default: 'alignLeft' }}>
          <LogViewerSearch minSearchChars={3} placeholder={t('search')} />
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );
}

const MemoizedLogsViewToolbar = memo(LogsViewToolbar);

export { LogsViewToolbar, type LogsViewToolbarProps, MemoizedLogsViewToolbar };
