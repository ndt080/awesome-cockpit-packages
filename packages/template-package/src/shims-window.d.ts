export {};

declare global {
  interface CockpitProcessOptions {
    binary?: boolean;
    directory?: string;
    err?: 'out' | 'ignore' | 'message' | 'pty';
    environ?: string[];
    pty?: boolean;
    batch?: boolean;
    latency?: number;
    superuser?: 'require' | 'try';
  }

  interface CockpitProcessError {
    message: string;
    problem?: string;
    exit_signal: null;
    exit_status: number;
    toString: () => string;
  }

  type CockpitProcess = Promise<unknown> & {
    stream: (cb: (data: unknown) => void) => void;
    input: (data: unknown) => void;
    close: (problem?: string | Error) => void;
    progress: (cb: (data: unknown) => void) => void;
    fail: (cb: (data: CockpitProcessError) => void) => void;
    done: (cb: (data: unknown) => void) => void;
  };

  interface Cockpit {
    language: string;
    gettext: (text: string) => string;
    locale: (json: object) => void;
    spawn: (args: string[], options?: CockpitProcessOptions) => CockpitProcess;
    script: (script: string, args?: string[], options?: CockpitProcessOptions) => CockpitProcess;

    [key: string]: unknown;
  }

  // eslint-disable-next-line no-var
  var cockpit: Cockpit;

  interface Window {
    cockpit: Cockpit;
  }
}
