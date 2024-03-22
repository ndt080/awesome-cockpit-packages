import { Toolbar, ToolbarContent } from '@patternfly/react-core/dist/esm/components/Toolbar';
import type { PropsWithChildren } from 'react';

function ToolbarPanel({ children }: PropsWithChildren) {
  return (
    <Toolbar>
      <ToolbarContent>{children}</ToolbarContent>
    </Toolbar>
  );
}

export { ToolbarPanel };
