import request from '@/utils/axios'

// 角色列表
export function rolesList(data){
  return request({
    url: 'api/permission/rolesList',
    method: 'POST',
    data,
  })
}

// 新增角色
export function createRoles(data){
  return request({
    url: 'api/permission/createRoles',
    method: 'POST',
    data,
  })
}

// 设置权限、用户授权
export function permissionDo(data){
  return request({
    url: 'api/permission/do',
    method: 'POST',
    data,
  })
}

// 角色用户详情
export function rolesDetail(data){
  return request({
    url: 'api/permission/rolesDetail',
    method: 'POST',
    data,
  })
}

