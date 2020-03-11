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

export function tableList(){
  return Axios.ajax({
    url:'/table/list',
    method:'GET',
  })
}

export function tableList1(){
  return Axios.ajax({
    url:'/table/list1',
    method:'GET',
  })
}