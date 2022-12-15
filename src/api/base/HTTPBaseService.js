import axios from "axios";

const onRequest = (config) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) config.headers.Authorization = accessToken
    config.headers.Accept = 'application/json'

    return config
}

const onRequestError = (error) => {
    // console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

const onResponse = (response) => {
    return response;
}

const onResponseError = (error) => {
    // console.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance) {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}

const instance = axios.create({
    baseURL: process.env.VUE_APP_API
})

export const axiosInstanceV1 = setupInterceptorsTo(instance)