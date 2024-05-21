import axios from 'axios';

// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  exchange: {
    list: `${HOST_API}exchanges`,
    new: `${HOST_API}exchanges`,
    comment: (id) => `${HOST_API}exchanges/${id}/comments`,
    like: (id) => `${HOST_API}exchanges/${id}/like`,
  },
  comment: {
    count: `${HOST_API}comments/count`,
  }
};
