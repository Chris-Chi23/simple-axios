import xhr from './xhr';
import {AxiosRequestConfig} from './types';

const axios = (config: AxiosRequestConfig): void => xhr(config);

export default axios;
