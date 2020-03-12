const defaultState = {
  cityList:[], // 城市字典
}

const city = function(state = defaultState, action){
  const {type, payload} = action
  switch (type) {
  case 'get_city_list':
    return {...state, cityList:payload}
  default:
    return state
  }
}

export default city
 
