export {};

import { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

declare module 'axios' {
  interface InternalAxiosRequestConfig extends AxiosRequestConfig {
    headers: AxiosRequestHeaders;
    _retry: boolean;
  }

  type FailedRequest<TData = unknown> = {
    resolve: (value: TData | PromiseLike<TData>) => void;
    reject: (error: AxiosError) => void;
  };
}
