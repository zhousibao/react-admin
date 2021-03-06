import request from '@/utils/axios'

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

// 城市列表
export function cityList(data){
  return request({
    url: 'api/city/list',
    method: 'POST',
    data,
  })
}

// 开通城市
export function addCity(data){
  return request({
    url: 'api/city/add',
    method: 'POST',
    data,
  })
}