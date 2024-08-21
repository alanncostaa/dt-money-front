import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

/*
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (!isAxiosError(error)) {
      return Promise.reject("Um erro inesperado ocorreu. Por favor, tente novamente mais tarde.");
    }

    const errorApi = error as AxiosError<ApiError>;

    if (errorApi.response?.status === 500) {
      return Promise.reject(DEFAULT_ERRORS[500]);
    }

    if (errorApi.response?.status === 404) {
      return Promise.reject(DEFAULT_ERRORS[404]);
    }

    if (!errorApi.response?.data.message) {
      return Promise.reject(DEFAULT_ERRORS.generic);
    }

    const message = errorApi.response.data.message
    return Promise.reject(message);
  });*/