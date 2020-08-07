import request from '@/utils/axios'

/**
 * @description 全局api
 */


// 城市字典
export function commonCityList(data){
  return request({
    url: 'api/common/citylist',
    method: 'POST',
    data,
  })
}