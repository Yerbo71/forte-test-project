import { toast } from 'sonner';
export const interceptorAxios = (axiosInstance) => {
    axiosInstance.interceptors.request.use((config) => {
        return config;
    }, (error) => {
        toast.error('Request failed to send');
        return Promise.reject(error);
    });
    axiosInstance.interceptors.response.use((response) => {
        if (['post', 'put', 'delete'].includes(response.config.method)) {
            toast.success('Request completed successfully');
        }
        return response;
    }, (error) => {
        const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
        toast.error(message);
        return Promise.reject(error);
    });
};
