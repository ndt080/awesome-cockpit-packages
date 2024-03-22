import { t } from '@app/helpers/t.ts';
import { Banner } from '@patternfly/react-core/dist/esm/components/Banner';
import { Spinner } from '@patternfly/react-core/dist/esm/components/Spinner/Spinner';
import { Text } from '@patternfly/react-core/dist/esm/components/Text';
import { ComponentProps, memo } from 'react';

function LogsViewLoader(props: ComponentProps<typeof Banner>) {
  return (
    <Banner {...props} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Text component="p">{t('executing')}</Text>
      <Spinner size="sm" />
    </Banner>
  );
}

const MemoizedLogsViewLoader = memo(LogsViewLoader);

export { LogsViewLoader, MemoizedLogsViewLoader };
