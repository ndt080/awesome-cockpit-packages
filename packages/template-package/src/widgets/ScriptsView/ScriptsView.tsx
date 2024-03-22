import { t } from '@app/helpers/t.ts';
import { useIndeterminateSelect } from '@app/helpers/useIndeterminateSelect.ts';
import type { TabViewComponentProps } from '@app/types/appTabs.ts';
import type { UserScript } from '@entities/userScript';
import { EntityCard, EntityCardActions, EntityCardGrid } from '@features/EntityCard';
import { ScriptControl } from '@features/ScriptControl';
import { TabViewSection } from '@features/TabViewSection';
import { ToolbarPanel, ToolbarPanelSelectAll } from '@features/ToolbarPanel';
import { PlayIcon } from '@patternfly/react-icons/dist/esm/icons/play-icon';
import { Portal } from '@shared/components/Portal';
import { TextField } from '@shared/components/TextField.tsx';
import { memo } from 'react';

interface ScriptsViewProps extends TabViewComponentProps {
  scripts: UserScript[];
}

function ScriptsView({ scripts, toolbarRef, hidden, scriptStatus, onSubmit }: ScriptsViewProps) {
  const { totalCount, selectedCount, selectState, onSelect, onSelectAll } = useIndeterminateSelect(
    () => scripts.reduce<Record<string, boolean>>((acc, { id }) => ({ ...acc, [id]: false }), {}),
    [scripts],
  );

  const onLaunchScript = () => {
    const ids = Object.entries(selectState)
      .filter(([, s]) => s)
      .map(([k]) => k);
    onSubmit && onSubmit(scripts.filter((s) => ids.includes(s.id)));
  };

  return (
    <>
      <Portal hidden={hidden} target={toolbarRef.current}>
        <ScriptControl
          icon={<PlayIcon />}
          variant="default"
          isDisabled={!selectedCount}
          children={t('executeScriptBtn')}
          status={scriptStatus}
          onClick={onLaunchScript}
        />
      </Portal>

      <TabViewSection component="form" hidden={hidden}>
        <ToolbarPanel>
          <ToolbarPanelSelectAll
            total={totalCount}
            checkedCount={selectedCount}
            onCheckedAll={onSelectAll}
          />
        </ToolbarPanel>

        <EntityCardGrid data={scripts}>
          {(script) => (
            <EntityCard
              key={script.id}
              title={t(script.name)}
              actions={
                <EntityCardActions
                  helpText={t('some script')}
                  checked={selectState[script.id]}
                  onSelect={(e) => onSelect && onSelect(script.id, e)}
                />
              }
              children={
                <TextField
                  label={t('command')}
                  name={script.name}
                  value={script.command}
                  readOnly
                  readOnlyVariant="default"
                />
              }
            />
          )}
        </EntityCardGrid>
      </TabViewSection>
    </>
  );
}

const MemoizedScriptsView = memo(ScriptsView);

export { MemoizedScriptsView, ScriptsView, type ScriptsViewProps };
