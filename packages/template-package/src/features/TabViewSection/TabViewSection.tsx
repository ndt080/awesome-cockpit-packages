import {
  PageContext,
  PageSectionProps,
  PageSectionTypes,
  PageSectionVariants,
} from '@patternfly/react-core/dist/esm/components/Page';
import { formatBreakpointMods } from '@patternfly/react-core/dist/esm/helpers';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Page/page';
import * as React from 'react';
import { forwardRef, Ref } from 'react';

const variantType = {
  [PageSectionTypes.default]: styles.pageMainSection,
  [PageSectionTypes.nav]: styles.pageMainNav,
  [PageSectionTypes.subNav]: styles.pageMainSubnav,
  [PageSectionTypes.breadcrumb]: styles.pageMainBreadcrumb,
  [PageSectionTypes.tabs]: styles.pageMainTabs,
  [PageSectionTypes.wizard]: styles.pageMainWizard,
};

const variantStyle = {
  [PageSectionVariants.default]: '',
  [PageSectionVariants.light]: styles.modifiers.light,
  [PageSectionVariants.dark]: styles.modifiers.dark_200,
  [PageSectionVariants.darker]: styles.modifiers.dark_100,
};

export const TabViewSection = forwardRef(
  (
    {
      className = '',
      children,
      variant = 'default',
      type = 'default',
      padding,
      isFilled,
      isWidthLimited = false,
      isCenterAligned = false,
      stickyOnBreakpoint,
      hasShadowTop = false,
      hasShadowBottom = false,
      hasOverflowScroll = false,
      'aria-label': ariaLabel,
      component = 'section',
      ...props
    }: PageSectionProps,
    ref: Ref<HTMLElement>,
  ) => {
    const Component = component as 'section';
    const { height, getVerticalBreakpoint } = React.useContext(PageContext);

    return (
      <Component
        ref={ref}
        {...props}
        className={css(
          variantType[type],
          formatBreakpointMods(padding ?? {}, styles),
          formatBreakpointMods(
            stickyOnBreakpoint ?? {},
            styles,
            'sticky-',
            getVerticalBreakpoint(height),
            true,
          ),
          variantStyle[variant],
          !isFilled && styles.modifiers.noFill,
          isFilled && styles.modifiers.fill,
          isWidthLimited && styles.modifiers.limitWidth,
          isWidthLimited &&
            isCenterAligned &&
            type !== PageSectionTypes.subNav &&
            styles.modifiers.alignCenter,
          hasShadowTop && styles.modifiers.shadowTop,
          hasShadowBottom && styles.modifiers.shadowBottom,
          hasOverflowScroll && styles.modifiers.overflowScroll,
          className,
          'pf-m-overflow-scroll',
        )}
        {...(hasOverflowScroll && { tabIndex: 0 })}
        aria-label={ariaLabel}
      >
        {isWidthLimited ? <div className={css(styles.pageMainBody)}>{children}</div> : children}
      </Component>
    );
  },
);

TabViewSection.displayName = 'PageSection';
