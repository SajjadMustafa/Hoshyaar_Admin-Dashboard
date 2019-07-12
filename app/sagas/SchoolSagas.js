// import { AsyncStorage } from 'react-native'
import { call, put } from 'redux-saga/effects';
import {
  parseError,
} from './Shared';
import Actions from '../redux/Actions';

function* makeAllSchoolRequest(api, action) {
  const { payload, resolve, reject } = action;
  const response = yield call(api.allSchool, payload);
  if (response.statusText === 'OK') {
    yield put(Actions.saveAllSchoolLocal(response.data));
    yield put(Actions.allSchoolSuccess());
    return resolve();
  }
  const error = parseError(response);
  yield put(Actions.allSchoolFailure(error));
  return reject(error);
}

function* makeAllUsersRequest(api, action) {
  const { payload, resolve, reject } = action;
  const response = yield call(api.getAllUsers, payload);
  console.log('response: ', response);
  if (response.statusText === 'OK') {
    yield put(Actions.saveUsersLocal(response.data));
    yield put(Actions.allUsersSuccess());
    return resolve();
  }
  const error = parseError(response);
  yield put(Actions.allUsersFailure(error));
  return reject(error);
}

function* makeToggleStatusRequest(api, action) {
  const { payload, resolve, reject } = action;
  const response = yield call(api.toggleStatus, payload);
  console.log('response: ', response);
  if (response.statusText === 'OK') {
    yield put(Actions.toggleStatusSuccess());
    yield put(Actions.saveUsersLocal(response.data));
    return resolve();
  }
  const error = parseError(response);
  yield put(Actions.toggleStatusFailure(error));
  return reject(error);
}

function* makeallReportsRequest(api, action) {
  console.log('all Report Sagas');
  const { payload, resolve, reject } = action;
  const response = yield call(api.allReports, payload);
  console.log('Responce  Sagas : ', response);
  if (response.statusText === 'OK') {
    yield put(Actions.saveAllReportsLocal(response.data));
    yield put(Actions.allReportsSuccess());
    return resolve();
  }
  const error = parseError(response);
  yield put(Actions.allReportsFailure(error));
  return reject(error);
}

export default {
  makeAllSchoolRequest,
  makeAllUsersRequest,
  makeToggleStatusRequest,
  makeallReportsRequest,
  // EXPORT_SAGA_ACTION
};
