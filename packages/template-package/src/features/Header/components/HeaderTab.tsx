import { Tab, TabTitleText } from '@patternfly/react-core/dist/esm/components/Tabs';
import type { PropsWithChildren } from 'react';

type HeaderTabProps = PropsWithChildren<{
  id: string;
  title: string;
}>;

function HeaderTab({ title, id }: HeaderTabProps) {
  return <Tab eventKey={id} title={<TabTitleText children={title} />} />;
}

export { HeaderTab, type HeaderTabProps };
