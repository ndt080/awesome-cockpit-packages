import { CheckIcon } from '@patternfly/react-icons/dist/esm/icons/check-icon';
import { MinusIcon } from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const IndeterminateCheckbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={clsx('indeterminate-checkbox', className)}
    checked={checked}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="indeterminate-checkbox__indicator">
      {checked === 'indeterminate' && <MinusIcon className="indeterminate-checkbox__icon" />}
      {checked === true && <CheckIcon className="indeterminate-checkbox__icon" />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

export { IndeterminateCheckbox };
