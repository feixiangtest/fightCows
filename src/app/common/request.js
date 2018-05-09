/*
 * @Author: Janson 
 * @Date: 2018-05-08 08:32:11 
 * @Last Modified by: ZhangShuai
 * @Last Modified time: 2018-05-08 09:19:08
 */

import axios from 'axios';
import Vue from 'vue';
import store from '../store.js'
// 添加一个请求拦截器
let deposit = [];
axios.interceptors.request.use(config => {


    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})
// 添加一个响应拦截器
axios.interceptors.response.use(response => {

    return response.data
}, function (error) {
    return Promise.reject(error)
})
export default {
    g(url, params) {
        return axios({
            method: 'get',
            url: url,
            params,
            withCredentials: true,
            timeout: 30000
        })
    },
    p(url, data) {

        return axios({
            method: 'post',
            url: url,
            data: data,
            timeout: 30000,
            withCredentials: true,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
    }
}