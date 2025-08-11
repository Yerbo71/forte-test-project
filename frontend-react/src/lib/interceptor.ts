import { toast } from 'sonner';

export const interceptorAxios = (axiosInstance: any) => {
  axiosInstance.interceptors.request.use(
    (config: any) => {
      return config;
    },
    (error: any) => {
      toast.error('Request failed to send');
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: any) => {
      if (['post', 'put', 'delete'].includes(response.config.method)) {
        toast.success('Request completed successfully');
      }
      return response;
    },
    (error: any) => {
      const message =
        error.response?.data?.message || error.message || 'An unexpected error occurred';
      toast.error(message);
      return Promise.reject(error);
    }
  );
};
