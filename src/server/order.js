import request from '@/utils/axios'


// 订单列表
export function orderList(data){
  return request({
    url: 'api/order/list',
    method: 'POST',
    data,
  })
}
// 结束订单
export function closeOrder(data){
  return request({
    url: 'api/order/close',
    method: 'POST',
    data,
  })
}
// 结束订单
export function orderDetail(params){
  return request({
    url: 'api/order/detail',
    method: 'POST',
    params,
  })
}