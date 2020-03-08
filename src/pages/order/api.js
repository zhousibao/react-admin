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

// 订单列表
export function orderList(data){
  return Axios.ajax({
    url:'/order/list',
    method:'POST',
    data
  })
}
// 结束订单
export function closeOrder(data){
  return Axios.ajax({
    url:'/order/close',
    method:'POST',
    data
  })
}