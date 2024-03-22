import { FormGroup, FormHelperText } from '@patternfly/react-core/dist/esm/components/Form';
import { HelperText, HelperTextItem } from '@patternfly/react-core/dist/esm/components/HelperText';
import { TextInput } from '@patternfly/react-core/dist/esm/components/TextInput';
import { ExclamationCircleIcon } from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import { HelpButton } from '@shared/components/HelpButton.tsx';
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  memo,
  Ref,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import { isEqual } from 'underscore';

type TextFieldProps = ComponentPropsWithoutRef<typeof TextInput> & {
  label: string;
  helpText?: string;
  error?: string;
};

const TextField = forwardRef(
  (
    { label, helpText, name, value, error, ...props }: TextFieldProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
      innerRef.current!.value = String(value || '');
    }, [value]);

    useImperativeHandle(ref, () => innerRef.current!);

    return (
      <FormGroup
        label={label}
        labelIcon={helpText ? <HelpButton text={helpText} /> : undefined}
        className="pf-v5-u-font-weight-bold pf-v5-u-font-size-sm"
      >
        <TextInput
          ref={innerRef}
          name={name}
          aria-label={name}
          validated={error ? 'error' : undefined}
          {...props}
        />
        {error ? (
          <FormHelperText>
            <HelperText>
              <HelperTextItem icon={<ExclamationCircleIcon />} variant="error" children={error} />
            </HelperText>
          </FormHelperText>
        ) : null}
      </FormGroup>
    );
  },
);

const MemoizedTextField = memo(TextField, (p, n) => isEqual(p, n));

export { MemoizedTextField, TextField, type TextFieldProps };
