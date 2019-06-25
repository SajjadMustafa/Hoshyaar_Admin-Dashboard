// import { AsyncStorage } from 'react-native'
import { call, put } from 'redux-saga/effects'
import { get } from 'lodash'
import { parseError, getAuthHeaders, saveUserToLocalStorage,
  removeUserFromLocalStorage } from './Shared'
import Actions from '../redux/Actions'


function * makeGetDistrictsRequest (api, action) {
  const { payload, resolve, reject } = action
  const response = yield call(api.getDistricts, payload)
  console.log('response: ', response)
  if (response.statusText == "OK") {
    yield put(Actions.saveDistrictsLocal(response.data))    
    yield put(Actions.getDistrictsSuccess())
    return resolve()
  } else {
    const error = parseError(response)
    yield put(Actions.getDistrictsFailure(error))
    return reject(error)
  }
}

export default {
    makeGetDistrictsRequest,
  // EXPORT_SAGA_ACTION
}
