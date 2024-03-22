import { PageSection } from '@patternfly/react-core/dist/esm/components/Page';
import { Grid, GridItem } from '@patternfly/react-core/dist/esm/layouts/Grid';
import { memo, ReactNode } from 'react';

type EntityCardGridProps<TData extends { id: string } = { id: string }> = {
  data: TData[];
  children: (item: TData, index: number) => ReactNode;
};

function EntityCardGrid<TData extends { id: string } = { id: string }>({
  data,
  children,
}: EntityCardGridProps<TData>) {
  return (
    <PageSection style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Grid hasGutter span={12} sm={12} md={12} lg={6} xl={4}>
        {data.map((item, index) => (
          <GridItem key={item.id}>{children(item, index)}</GridItem>
        ))}
      </Grid>
    </PageSection>
  );
}

const MemoizedEntityCardGrid = memo(EntityCardGrid);
export { EntityCardGrid, type EntityCardGridProps, MemoizedEntityCardGrid };
