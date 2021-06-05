import axios from "axios";
<<<<<<< HEAD
// import { BASE_URL } from "./common";
import { getToken } from "./auth";
const instance = axios.create({
  baseURL: '/api',
=======
// import { api } from "./common";
import { getToken } from "./auth";
const instance = axios.create({
<<<<<<< HEAD
  baseURL: '/api',
=======
  baseURL: "/api",
>>>>>>> 2fad2b37055a80952e043eb22c7f5c1bcc7a6a22
  timeout: 5000,
});

instance.interceptors.request.use(
  function(config) {
    if (getToken()) {
      //配置头
      config.headers.authorization = "Bearer " + getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
//封装get请求
export const get = (url, params) => instance.get(url, { params });
//封装post请求
export const post = (url, data) => instance.post(url, data);

//封装delete请求
export const del = (url, data) => instance.delete(url, data);
