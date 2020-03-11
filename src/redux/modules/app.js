const defaultState = {
  menuTitle:'首页'
}

const app = function(state = defaultState, action){
  const {type, payload} = action
  switch (type) {
  case 'changeMenuTitle':
    return {...state,menuTitle:payload}
  default:
    return state
  }
}

export default app