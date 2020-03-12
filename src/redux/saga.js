import {call, put, takeEvery} from 'redux-saga/effects'
import {commonCityList} from '@/pages/home/api'


// worker Saga : 将在 action 被 dispatch 时调用
function* getCityList(action){
  console.log(action)
  try{
    const res = yield call(commonCityList, action.payload)
    yield put({type: "get_city_list", payload: res.data.list});
  } catch(e) {
    console.log(e)
  }
}

// watch Saga :监听 action
export default function* citySaga() {
  yield takeEvery("saga_getCityList", getCityList);
}

