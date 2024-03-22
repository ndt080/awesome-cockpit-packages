import { Banner } from '@patternfly/react-core/dist/esm/components/Banner';
import { ComponentProps, memo } from 'react';

type LogsViewInfoProps = ComponentProps<typeof Banner> & {
  text: string;
};

function LogsViewInfo({ text, ...props }: LogsViewInfoProps) {
  return <Banner {...props}>{text}</Banner>;
}

const MemoizedLogsViewInfo = memo(LogsViewInfo);

export { LogsViewInfo, MemoizedLogsViewInfo };
