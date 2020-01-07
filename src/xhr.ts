import {AxiosRequestConfig} from './types';

const xhr = (config: AxiosRequestConfig): void => {
  const {data = null, url, method = 'get'} = config;
  const req = new XMLHttpRequest();
  req.open(method.toUpperCase(), url, true);
  req.send(data);
};

export default xhr;
