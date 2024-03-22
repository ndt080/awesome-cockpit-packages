import { Checkbox } from '@patternfly/react-core/dist/esm/components/Checkbox';
import { HelpButton } from '@shared/components/HelpButton.tsx';
import { memo, useId } from 'react';

interface EntityCardActionsProps {
  helpText?: string;
  checked?: boolean;
  onSelect?: (value: boolean) => void;
}

function EntityCardActions({ helpText, checked, onSelect }: EntityCardActionsProps) {
  const id = useId();
  return (
    <>
      {helpText ? <HelpButton filled text={helpText} style={{ marginRight: 8 }} /> : null}
      <Checkbox isChecked={checked} onChange={(_, v) => onSelect && onSelect(v)} id={id} />
    </>
  );
}

const MemoizedEntityCardActions = memo(EntityCardActions);
export { EntityCardActions, type EntityCardActionsProps, MemoizedEntityCardActions };
