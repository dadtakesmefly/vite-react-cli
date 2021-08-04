//1、引入axios
import axios from 'axios'
import tool from './tool'

const baseParams = {
    _appName: '',
    _platform: 'H5',
}

//2、创建axios的实例
// let httpService = axios.create({
//     baseUrl: process.env.NODE_ENV === "development" ? "/devApi" : "/proApi",// TODO:具体的配置可以根据项目情况而来
//     timeout: 5000
// })

let httpService = axios.create({})

//3、axios的拦截--request
httpService.interceptors.request.use(config => {
    // config.params = Object.assign({
    //     a:1
    // },config.params)
    // 请求成功处理
    // if (localStorage.getItem('token')) {//判断浏览器中的cookie中是否存在项目的token
    //     config.headers.token = localStorage.getItem('token')
    // }
    return config;
}, err => {
    Promise.reject(err);// 请求错误处理
})

//4、axios的拦截--response
httpService.interceptors.response.use(response => {
    // TODO:具体的code对应的处理可继续添加修改
    return response;
}, err => {
    // TODO:具体的code对应的处理可继续添加修改
 
    if (err.response.code === 500) {
        console.log('服务器错误');
    }
    return Promise.reject(err);
})

//5、get请求的封装
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'get',
            params: {...params,...baseParams}
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

//6、post请求封装  默认json格式:'Content-Type':'application/json',如果是文件上传，可以修改headers为 headers: { 'Content-Type': 'multipart/form-data' }
export function post(url, params = {}, headers = { 'Content-Type': 'application/json' }) {
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'post',
            data: { ...params, ...baseParams },
            headers: headers
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
//7、将模块暴露
export default {
    get,
    post
}
