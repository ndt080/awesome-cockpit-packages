import { UserScriptStatus } from '@entities/userScript';
import type { BannerProps } from '@patternfly/react-core/dist/esm/components/Banner';
import { LogViewer } from '@patternfly/react-log-viewer';
import { ComponentProps } from 'react';

export const LogViewConfig = {
  theme: 'dark' as ComponentProps<typeof LogViewer>['theme'],
  bannerVariant: {
    [UserScriptStatus.None]: 'default',
    [UserScriptStatus.Executing]: 'default',
    [UserScriptStatus.Fail]: 'red',
    [UserScriptStatus.Success]: 'green',
  } satisfies Record<UserScriptStatus, BannerProps['variant']>,
};
