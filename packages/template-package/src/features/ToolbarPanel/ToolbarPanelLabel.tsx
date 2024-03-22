import { ToolbarItem } from '@patternfly/react-core/dist/esm/components/Toolbar';
import { Flex, FlexItem } from '@patternfly/react-core/dist/esm/layouts/Flex';
import clsx from 'clsx';
import { memo, PropsWithChildren } from 'react';

type ToolbarPanelLabelProps = PropsWithChildren<{
  label: string;
  wrap?: boolean;
  contentClassName?: string;
}>;

function ToolbarPanelLabel({ children, label, wrap, contentClassName }: ToolbarPanelLabelProps) {
  return (
    <ToolbarItem align={{ default: 'alignLeft' }} alignSelf="center">
      <Flex gap={{ default: 'gapXl' }} className={clsx(!wrap && 'pf-v5-u-flex-nowrap')}>
        <FlexItem className="pf-v5-u-font-weight-bold" children={label} />
        <FlexItem className={contentClassName}>{children}</FlexItem>
      </Flex>
    </ToolbarItem>
  );
}

const MemoizedToolbarPanelLabel = memo(ToolbarPanelLabel);

export { MemoizedToolbarPanelLabel, ToolbarPanelLabel, type ToolbarPanelLabelProps };
