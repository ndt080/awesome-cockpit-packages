import { t } from '@app/helpers/t.ts';
import { Banner } from '@patternfly/react-core/dist/esm/components/Banner';
import { ComponentProps, memo } from 'react';

type LogsViewLineInfoProps = ComponentProps<typeof Banner> & {
  lineCount: number;
};

function LogsViewLineInfo({ lineCount, ...props }: LogsViewLineInfoProps) {
  return <Banner {...props}>{t('lineCount').replace('{{count}}', String(lineCount))}</Banner>;
}

const MemoizedLogsViewLineInfo = memo(LogsViewLineInfo);

export { LogsViewLineInfo, MemoizedLogsViewLineInfo };
