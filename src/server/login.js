import request from '@/utils/axios'

// 登录
export function login(data){
  return request({
    url: '/api/user/login',
    method: 'POST',
    data,
  })
}