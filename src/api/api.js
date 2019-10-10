import axios from 'axios'
const url = 'https://www.easy-mock.com/mock/59ba12e6e0dc663341a97644/example/'
// https://www.easy-mock.com/mock/59ba12e6e0dc663341a97644/example/cityList
axios.defaults.timeout = 3000

//请求拦截器
axios.interceptors.request.use(function(config){
    return config
},function(err){
    console.log(err.code)
    return Promise.reject(err)
})

//响应拦截器
axios.interceptors.response.use(response =>{
    return response
},err=>{
    console.log(err)
    if (err.code === 'ECONNABORTED'){
        alert('响应超时')
    }else{
        alert(err)
    }
    return Promise.reject(err)
})
export const getList = ()=>{
   return axios.get(`${url}firstCategory`).then(res=> res.data)
}
export const cityList = ()=>{
    return axios.get(`${url}cityList`).then(res=> res.data)
}
export const bannerList = ()=>{
    return axios.get(`${url}bannerList`).then(res=> res.data)
}
export const storeList = ()=>{
    return axios.get(`${url}storeList`).then(res=> res.data)
}
