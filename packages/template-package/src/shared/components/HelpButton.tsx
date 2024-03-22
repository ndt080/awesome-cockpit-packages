import { Popover } from '@patternfly/react-core/dist/esm/components/Popover';
import { OutlinedQuestionCircleIcon } from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { CSSProperties } from 'react';

interface HelpButtonProps {
  text: string;
  filled?: boolean;
  style?: CSSProperties;
}

function HelpButton({ text, filled = false, style }: HelpButtonProps) {
  return (
    <Popover hideOnOutsideClick showClose={false} bodyContent={text}>
      <button
        type="button"
        onClick={(e) => e.preventDefault()}
        className={styles.formGroupLabelHelp}
        style={style}
      >
        {filled ? <QuestionCircleIcon /> : <OutlinedQuestionCircleIcon />}
      </button>
    </Popover>
  );
}

export { HelpButton };
