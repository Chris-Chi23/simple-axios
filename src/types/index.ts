export type HttpMethod = 'get' | 'GET'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'patch' | 'PATCH';

export interface AxiosRequestConfig {
  url: string;
  method?: HttpMethod;
  data?: any;
  params?: any;
}
