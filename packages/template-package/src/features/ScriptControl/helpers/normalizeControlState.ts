import { UserScriptStatus } from '@entities/userScript';

export function normalizeControlState(
  status: UserScriptStatus,
): 'none' | 'loading' | 'success' | 'danger' {
  switch (status) {
    case UserScriptStatus.Executing:
      return 'loading';
    case UserScriptStatus.Success:
      return 'success';
    case UserScriptStatus.Fail:
      return 'danger';
    default:
      return 'none';
  }
}
