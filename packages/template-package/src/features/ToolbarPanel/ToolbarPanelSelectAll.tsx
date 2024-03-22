import { t } from '@app/helpers/t.ts';
import { Text } from '@patternfly/react-core/dist/esm/components/Text';
import { ToolbarItem } from '@patternfly/react-core/dist/esm/components/Toolbar';
import { Flex, FlexItem } from '@patternfly/react-core/dist/esm/layouts/Flex';
import { IndeterminateCheckbox } from '@shared/components/IndeterminateCheckbox.tsx';
import { CSSProperties, memo } from 'react';

type ToolbarPanelSelectAllProps = {
  total: number;
  checkedCount: number;
  onCheckedAll: (state: boolean) => void;
};

const DisabledStyles: CSSProperties = { opacity: '50%', pointerEvents: 'none' };

function ToolbarPanelSelectAll({
  total = 0,
  checkedCount = 0,
  onCheckedAll,
}: ToolbarPanelSelectAllProps) {
  const checked = !checkedCount ? false : checkedCount !== total ? 'indeterminate' : true;

  return (
    <ToolbarItem align={{ default: 'alignRight' }} alignSelf="center">
      <Flex gap={{ default: 'gap2xl' }}>
        <FlexItem>
          <Flex gap={{ default: 'gapSm' }}>
            <IndeterminateCheckbox
              disabled={!total}
              checked={checked}
              onCheckedChange={(state) => onCheckedAll(!!state)}
            />
            <Text style={!total ? DisabledStyles : undefined} component="p">
              {t('selectAllScripts')}
            </Text>
          </Flex>
        </FlexItem>
        <FlexItem style={{ minWidth: 90, textAlign: 'left' }}>
          {t('selectedCount')
            .replace('{{selected}}', String(checkedCount))
            .replace('{{total}}', String(total))}
        </FlexItem>
      </Flex>
    </ToolbarItem>
  );
}

const MemoizedToolbarPanelSelectAll = memo(ToolbarPanelSelectAll);

export { MemoizedToolbarPanelSelectAll, ToolbarPanelSelectAll, type ToolbarPanelSelectAllProps };
