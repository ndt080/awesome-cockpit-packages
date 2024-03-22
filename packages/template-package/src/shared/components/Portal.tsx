import { PropsWithChildren, useId } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = PropsWithChildren<{
  target?: HTMLElement | null;
  hidden?: boolean;
}>;

function Portal({ target, children, hidden }: PortalProps) {
  const id = useId();
  return target && children && !hidden ? createPortal(children, target, id) : <></>;
}

export { Portal, type PortalProps };
