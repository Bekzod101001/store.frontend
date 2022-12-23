import axios from "axios";
import i18n from "@/i18n";

const onRequest = (config) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) config.headers.Authorization = 'Bearer ' + accessToken
    config.params = {
        ...config.params,
        locale: i18n.locale
    }
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
    baseURL: process.env.VUE_APP_BASE_URL + "/api"
})

export const axiosInstanceV1 = setupInterceptorsTo(instance)