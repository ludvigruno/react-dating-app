import axios, { AxiosRequestConfig } from 'axios';
import config from '../../config';

interface IGetOptions {
  path: string;
  params: { [key: string]: any };
}

interface IAxiosResponse {
  [key: string]: any;
}

export default async function get(options: IGetOptions): Promise<any> {
  const { path, params = {} } = options;
  const axiosOptions: AxiosRequestConfig = {
    withCredentials: true,
    params,
  };
  const res: IAxiosResponse = await axios.get<IAxiosResponse>(
    `${config.restApiHost + path}`,
    axiosOptions,
  );
  if (res.data.error) {
    throw res.data.error;
  }
  return res.data;
}
