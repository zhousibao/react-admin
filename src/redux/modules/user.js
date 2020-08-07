import Storage  from '@/utils/storage';

const defaultState:IStoreUser= {
  token: Storage.getItem('token'), 
  userInfo: Storage.getItem('userInfo') || {}, // 用户信息
}

const user = (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
  case 'set_token':
    return { ...state, token: payload }
  case 'set_userInfo':
    return { ...state, userInfo: payload }
  default:
    return state
  }
}

export default user