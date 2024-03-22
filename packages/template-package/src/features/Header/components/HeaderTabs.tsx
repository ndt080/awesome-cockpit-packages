import { HeaderContent } from '@features/Header/components/HeaderContent.tsx';
import { HeaderTab } from '@features/Header/components/HeaderTab.tsx';
import { Tabs } from '@patternfly/react-core/dist/esm/components/Tabs';
import type { MouseEvent, PropsWithChildren } from 'react';

type HeaderTabsProps = PropsWithChildren<{
  align?: 'alignRight' | 'alignLeft';
  tabs: { key: string; title: string }[];
  activeTab: string;
  onSelectTab?: (tab: string) => void;
}>;

function HeaderTabs({ tabs, align = 'alignLeft', activeTab, onSelectTab }: HeaderTabsProps) {
  const onSelect = (_: MouseEvent<HTMLElement>, key: string | number) => {
    onSelectTab && onSelectTab(String(key));
  };

  return (
    <HeaderContent align={align} id="toolbar-tabs">
      <Tabs role="region" activeKey={activeTab} onSelect={onSelect}>
        {tabs.map((tab) => (
          <HeaderTab key={tab.key} id={tab.key} title={tab.title} />
        ))}
      </Tabs>
    </HeaderContent>
  );
}

export { HeaderTabs, type HeaderTabsProps };
