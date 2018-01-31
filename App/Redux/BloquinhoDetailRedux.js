import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

//'description, end_time, facebook_page, latitude, lineup, longitude, name'
const { Types, Creators } = createActions({
  bloquinhoDetailRequest: ['blocoId'],
  bloquinhoDetailPreset: ['bloco_name', 'blocoId', 'picture'],
  bloquinhoDetailSuccess: ['bloquinho'],
  bloquinhoDetailFailure: null,
})

export const BloquinhoDetailTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  bloquinho: null,
  fetching: null,
  error: null,
})

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.merge({ fetching: true })

export const preset = (state, action) => {
    const { bloco_name, blocoId, picture } = action
    return state.merge({ fetching: true, bloquinho: { bloco_name, blocoId, picture }})
}

export const success = (state, action) => {
  const { bloquinho } = action
  return state.merge({ fetching: false, error: null, bloquinho })
}

export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BLOQUINHO_DETAIL_REQUEST]: request,
  [Types.BLOQUINHO_DETAIL_PRESET]: preset,
  [Types.BLOQUINHO_DETAIL_SUCCESS]: success,
  [Types.BLOQUINHO_DETAIL_FAILURE]: failure,
})
