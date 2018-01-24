import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

//'description, end_time, facebook_page, latitude, lineup, longitude, name'
const { Types, Creators } = createActions({
  bloquinhoRequest: ['latitude, longitude'],
  bloquinhoSuccess: ['bloquinhos'],
  bloquinhoFailure: null,
  bloquinhoSelected: ['bloquinho'],
  bloquinhoCardClicked: ['bloco'],
})

export const BloquinhoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  bloquinhos: null,
  fetching: null,
  error: null,
  bloquinhoSelected: null,
  bloquinhoCardSelected: null,
})

/* ------------- Selectors ------------- */

export const BloquinhoSelectors = {
  selectBloquinhos: state => state.bloquinhos
}

/* ------------- Reducers ------------- */

export const request = (state, { latitude, longitude }) =>
  state.merge({ fetching: true, latitude, longitude, bloquinhos: null })

export const success = (state, action) => {
  const { bloquinhos } = action
  return state.merge({ fetching: false, error: null, bloquinhos })
}

export const failure = (state) =>
  state.merge({ fetching: false, error: true, bloquinhos: null })

export const bloquinhoSelected = (state, action) => {
  const { bloquinho } = action
  return state.merge({ bloquinhoSelected: bloquinho })
}

export const bloquinhoCardClicked = (state, action) => {
  const { blocoId, picture, bloco_name } = action.bloco
  return state.merge({ bloquinhoCardSelected: {blocoId, picture, bloco_name} })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BLOQUINHO_REQUEST]: request,
  [Types.BLOQUINHO_SUCCESS]: success,
  [Types.BLOQUINHO_FAILURE]: failure,
  [Types.BLOQUINHO_SELECTED]: bloquinhoSelected,
  [Types.BLOQUINHO_CARD_CLICKED]: bloquinhoCardClicked,
})
