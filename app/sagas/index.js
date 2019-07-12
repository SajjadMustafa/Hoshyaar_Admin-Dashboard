import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';
import FixtureAPI from '../Services/FixtureApi';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import ActionTypes from '../redux/ActionTypes';

/* ------------- Sagas ------------- */
import SchoolSagas from './SchoolSagas';

const Sagas = {
  ...SchoolSagas,
};

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(ActionTypes.ALL_SCHOOL_REQUEST, Sagas.makeAllSchoolRequest, api),
    takeLatest(ActionTypes.ALL_USERS_REQUEST, Sagas.makeAllUsersRequest, api),
    takeLatest(
      ActionTypes.TOGGLE_STATUS_REQUEST,
      Sagas.makeToggleStatusRequest,
      api,
    ),
    takeLatest(
      ActionTypes.ALL_REPORTS_REQUEST,
      Sagas.makeallReportsRequest,
      api,
    ),
  ]);
}
