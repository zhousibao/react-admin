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

// 城市字典
export function commonCityList(data){
  return Axios.ajax({
    url: '/common/citylist',
    method: 'POST',
    data,
  })
}
