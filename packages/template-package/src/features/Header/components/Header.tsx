import { PageSection, PageSectionVariants } from '@patternfly/react-core/dist/esm/components/Page';
import { Text, TextContent } from '@patternfly/react-core/dist/esm/components/Text';
import { Toolbar, ToolbarContent } from '@patternfly/react-core/dist/esm/components/Toolbar';
import { Flex } from '@patternfly/react-core/dist/esm/layouts/Flex';
import type { CSSProperties, PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  description?: string;
}>;

const SubTitleStyle: CSSProperties = {
  fontWeight: 'var(--pf-v5-global--FontWeight--bold)',
};

function Header({ children, title, subtitle, description }: HeaderProps) {
  return (
    <PageSection variant={PageSectionVariants.light}>
      <TextContent>
        <Text component="h1" children={title} />
        <Flex>
          {subtitle ? <Text component="p" children={subtitle} style={SubTitleStyle} /> : null}
          {description ? <Text component="p" children={description} /> : null}
        </Flex>
      </TextContent>
      <Toolbar>
        <ToolbarContent children={children} />
      </Toolbar>
    </PageSection>
  );
}

export { Header, type HeaderProps };
