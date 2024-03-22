import { ToolbarItem } from '@patternfly/react-core/dist/esm/components/Toolbar';
import { forwardRef, PropsWithChildren, Ref } from 'react';

type HeaderContentProps = PropsWithChildren<{
  id: string;
  align?: 'alignRight' | 'alignLeft';
}>;

const HeaderContent = forwardRef(
  ({ children, id, align, ...props }: HeaderContentProps, ref: Ref<HTMLDivElement>) => {
    return (
      <ToolbarItem {...props} id={id} align={{ default: align }}>
        <div ref={ref} className="pf-m-full-width">
          {children}
        </div>
      </ToolbarItem>
    );
  },
);

export { HeaderContent, type HeaderContentProps };
