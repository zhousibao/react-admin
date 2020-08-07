import request from '@/utils/axios'

export function tableList(){
  return request({
    url: 'api/table/list',
    method: 'GET',
  })
}

export function tableList1(){
  return request({
    url: 'api/table/list1',
    method: 'GET',
  })
}