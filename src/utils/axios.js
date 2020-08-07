import axios from 'axios'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { message } from 'antd'
import { NODE_ENV, ROOT_API } from '@/config'


/* 防止重复提交，利用axios的cancelToken */
let pendingList = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const CancelToken = axios.CancelToken;
const handlePending = (config: any, cancel: any) => {
  // 获取请求的url
  const { url } = config;
  // 判断该请求是否在请求队列中
  if (pendingList.includes(url)) {
    // 如果在请求中，并存在cancel, 
    if (cancel) {
      // console.log('取消重复请求')
      cancel("取消重复请求"); // 执行取消操作
    } else {
      pendingList.splice(pendingList.indexOf(url), 1); // 把这条记录从数组中移除
    }
  } else {
    // 如果不存在在请求队列中，加入队列
    if (cancel) {
      pendingList.push(url);
    }
  }
};


/* 创建axios实例 */
const service = axios.create({
  baseURL: NODE_ENV === 'development' ? '' : ROOT_API,
  timeout: 10000, // 请求超时时间
});


// axios 拦截请求
service.interceptors.request.use(config => {
  NProgress.start()
  // cancel即axios提供的取消函数
  config.cancelToken = new CancelToken((cancel) => {
    handlePending(config, cancel);
  });

  return config
}, () => {
  return Promise.reject({ message: 'request error' });
})

// axios 拦截响应
service.interceptors.response.use(response => {
  NProgress.done()
  // 移除队列中的该请求，注意这时候没有传第二个参数f
  handlePending(response.config);

  return response
}, error => {
  NProgress.done()
  if (error.response) {
    return Promise.reject({ message: error.response.statusText });
  }
  return Promise.reject({ message: '网络不给力, 请稍候重试' });
})


/**
 * @description axios请求
 * @param url
 * @param method
 * @param json content-type
 * @param data
 * @param params
 * @param timeout
 */
const request = config => {
  const { url, method = 'POST', json = true, params = {}, data= {}, timeout = 10000 } = config
  return new Promise((resolve, reject) => {
    service({
      url,
      method,
      params,
      data,
      timeout,
      headers: {
        'content-type': json ? 'application/json; charset=UTF-8' : 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    }).then(res => {
      /**
         * response格式
         * {
            data:{},
            status:200,
            statusText:'OK',//从服务器返回的http状态文本
            headers: {},//响应头信息
            config: {} //`config`是在请求的时候的一些配置信息
          }
        */
       
      if (res.status === 200) {
        if(res.data.code === '403'){
          // 在此进行业务需求改造 例如 重定向至登录
          message.error(res.data.message)
          return reject(res.data)
        }

        if(res.data.code === '1'){
          message.error(res.data.message)
          return reject(res.data)
        }

        // resolve
        return resolve(res.data)
      }

      message.error(res.statusText)
      return reject(res.data)

    }).catch(error => {
      message.error(error.message)
      return reject(error)
    })
  })
}

export default request
