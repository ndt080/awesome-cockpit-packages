import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from '@patternfly/react-core/dist/esm/components/Card';
import clsx from 'clsx';
import { CSSProperties, memo, PropsWithChildren, ReactNode } from 'react';

type EntityCardProps = PropsWithChildren<{
  title: string;
  className?: string;
  actions?: ReactNode;
}>;

const HeaderStyle = { '--pf-v5-c-card__actions--MarginTop': 0 } as CSSProperties;

function EntityCard({ title, className, actions, children }: EntityCardProps) {
  return (
    <Card className={clsx('entity-card', className)}>
      <CardHeader actions={{ actions }} style={HeaderStyle}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody isFilled>{children}</CardBody>
    </Card>
  );
}

const MemoizedEntityCard = memo(EntityCard);
export { EntityCard, type EntityCardProps, MemoizedEntityCard };
