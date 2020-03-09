import Axios from '@/utils/axios'

/** *
 * ajax({url,method,content,params,data})
 *
 * @param {string}  url，(必填)
 * @param {string}  method,默认post
 * @param {boolean} json, content-type类型
 * @param {object}  params
 * @param {object}  data
 *
 */

// 登录
export function login(data){
  return Axios.ajax({
    url:'/login',
    method:'POST',
    data
  })
}