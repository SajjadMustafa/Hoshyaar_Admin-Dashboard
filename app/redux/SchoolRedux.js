import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
// import { filter, find } from 'lodash';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  allSchoolRequest: ['payload', 'resolve', 'reject'],
  allSchoolSuccess: null,
  allSchoolFailure: ['error'],
  saveAllSchoolLocal: ['allschool'],

  allUsersRequest: ['payload', 'resolve', 'reject'],
  allUsersSuccess: null,
  allUsersFailure: ['error'],
  saveUsersLocal: ['users'],

  toggleStatusRequest: ['payload', 'resolve', 'reject'],
  toggleStatusSuccess: null,
  toggleStatusFailure: ['error'],
  toggleStatusLocal: ['users'],

  allReportsRequest: ['payload', 'resolve', 'reject'],
  allReportsSuccess: null,
  allReportsFailure: ['error'],
  saveAllReportsLocal: ['allReports'],
});

export const SchoolTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  allReports: [],
  allschool: [],
  users: [],
  // form: { error: {}},
});

/* ------------- Reducers ------------- */

export const saveAllSchoolLocal = (state, { allschool }) =>
  state.merge({ allschool });

export const allSchoolRequest = (state, action) =>
  state.merge({ requesting: true, error: null });

export const allSchoolSuccess = (state, action) =>
  state.merge({ requesting: false, error: null });

export const allSchoolFailure = (state, { error }) =>
  state.merge({ requesting: false, error });

export const allUsersRequest = (state, action) =>
  state.merge({ requesting: true, error: null });

export const allUsersSuccess = (state, action) =>
  state.merge({ requesting: false, error: null });

export const allUsersFailure = (state, { error }) =>
  state.merge({ requesting: false, error });

export const saveUsersLocal = (state, { users }) => state.merge({ users });

export const toggleStatusRequest = (state, action) =>
  state.merge({ requesting: true, error: null });

export const toggleStatusSuccess = (state, action) =>
  state.merge({ requesting: false, error: null });

export const toggleStatusFailure = (state, action) =>
  state.merge({ requesting: false, error });

export const allReportsRequest = (state, action) =>
  state.merge({ requesting: true, error: null });

export const allReportsSuccess = (state, action) =>
  state.merge({ requesting: false, error: null });

export const allReportsFailure = (state, { error }) =>
  state.merge({ requesting: false, error });

export const saveAllReportsLocal = (state, { allReports }) => {
  return state.merge({ allReports });
};

// add new reducer here

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ALL_SCHOOL_LOCAL]: saveAllSchoolLocal,
  [Types.ALL_SCHOOL_REQUEST]: allSchoolRequest,
  [Types.ALL_SCHOOL_SUCCESS]: allSchoolSuccess,
  [Types.ALL_SCHOOL_FAILURE]: allSchoolFailure,

  [Types.ALL_USERS_REQUEST]: allUsersRequest,
  [Types.ALL_USERS_SUCCESS]: allUsersSuccess,
  [Types.ALL_USERS_FAILURE]: allUsersFailure,
  [Types.SAVE_USERS_LOCAL]: saveUsersLocal,

  [Types.ALL_REPORTS_REQUEST]: allReportsRequest,
  [Types.ALL_REPORTS_SUCCESS]: allReportsSuccess,
  [Types.ALL_REPORTS_FAILURE]: allReportsFailure,
  [Types.SAVE_ALL_REPORTS_LOCAL]: saveAllReportsLocal,

  [Types.TOGGLE_STATUS_REQUEST]: toggleStatusRequest,
  [Types.TOGGLE_STATUS_SUCCESS]: toggleStatusSuccess,
  [Types.TOGGLE_STATUS_FAILURE]: toggleStatusFailure,
});
