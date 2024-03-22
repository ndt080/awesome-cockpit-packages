import type { UserScript, UserScriptStatus } from '@entities/userScript';
import type { JSX, LazyExoticComponent, MemoExoticComponent, RefObject } from 'react';

export interface TabViewComponentProps {
  scriptStatus: UserScriptStatus;
  toolbarRef: RefObject<HTMLElement>;
  hidden?: boolean;
  disabled?: boolean;
  onSubmit: (script: UserScript[]) => void;
}

export type LazyTabViewComponent =
  | LazyExoticComponent<(props: TabViewComponentProps) => JSX.Element>
  | LazyExoticComponent<MemoExoticComponent<(props: TabViewComponentProps) => JSX.Element>>;
