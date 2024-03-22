import './ScriptControl.scss';

import { UserScriptStatus } from '@entities/userScript';
import { Button, type ButtonProps } from '@patternfly/react-core/dist/esm/components/Button';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { memo } from 'react';

import { normalizeControlState } from '../helpers/normalizeControlState.ts';

const styleVariantConfig = cva('script-control', {
  variants: {
    variant: {
      default: 'script-control--default',
      outline: 'script-control--outline',
    },
    state: {
      none: '',
      loading: 'script-control--loading',
      success: 'script-control--success',
      danger: 'script-control--danger',
    },
  },
  defaultVariants: { variant: 'default', state: 'none' },
});

type ScriptControlProps = Omit<ButtonProps, 'variant' | 'isLoading' | 'isDanger'> &
  Omit<VariantProps<typeof styleVariantConfig>, 'state'> & {
    status: UserScriptStatus;
    onClick?: () => void;
  };

function ScriptControl({
  status,
  className,
  variant,
  icon,
  isDisabled = false,
  ...props
}: ScriptControlProps) {
  const state = normalizeControlState(status);
  const isLoading = state === 'loading';

  return (
    <Button
      className={clsx(styleVariantConfig({ variant, state }), className)}
      icon={!isLoading ? icon : undefined}
      isLoading={isLoading}
      isDisabled={!isLoading && isDisabled}
      {...props}
    />
  );
}

const MemoizedScriptControl = memo(ScriptControl);
export { MemoizedScriptControl, ScriptControl, type ScriptControlProps };
