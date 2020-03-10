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

// 角色列表
export function rolesList(data){
  return Axios.ajax({
    url:'/permission/rolesList',
    method:'POST',
    data
  })
}

// 新增角色
export function createRoles(data){
  return Axios.ajax({
    url:'/permission/createRoles',
    method:'POST',
    data
  })
}

// 设置权限、用户授权
export function permissionDo(data){
  return Axios.ajax({
    url:'/permission/do',
    method:'POST',
    data
  })
}

// 角色用户详情
export function rolesDetail(data){
  return Axios.ajax({
    url:'/permission/rolesDetail',
    method:'POST',
    data
  })
}

