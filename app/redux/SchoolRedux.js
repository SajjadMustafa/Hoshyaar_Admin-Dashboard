import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { filter, find } from 'lodash'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getDistrictsRequest: ['payload', 'resolve', 'reject'],
  getDistrictsSuccess: null,
  getDistrictsFailure: ['error'],
  saveDistrictsLocal: ['districts'],
})

export const SchoolTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    districts: [],
   // form: { error: {}},
})

/* ------------- Reducers ------------- */

export const saveDistrictsLocal = (state, { districts }) =>
  state.merge({ districts })

export const getDistrictsRequest = (state, action) =>
  state.merge({ requesting: true, error: null })

export const getDistrictsSuccess = (state, action) =>
  state.merge({ requesting: false, error: null })

export const getDistrictsFailure = (state, { error }) =>
  state.merge({ requesting: false, error })

    // add new reducer here

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_DISTRICTS_LOCAL]: saveDistrictsLocal,
  [Types.GET_DISTRICTS_REQUEST]: getDistrictsRequest,
  [Types.GET_DISTRICTS_SUCCESS]: getDistrictsSuccess,
  [Types.GET_DISTRICTS_FAILURE]: getDistrictsFailure,
})
