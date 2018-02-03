import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

//'description, end_time, facebook_page, latitude, lineup, longitude, name'
const { Types, Creators } = createActions({
  bloquinhoRequest: ['latitude, longitude'],
  bloquinhoSuccess: ['bloquinhos'],
  bloquinhoFailure: null,
  bloquinhoSelected: ['bloquinho'],
  //bloquinhoCardClickEnabled: ['enabled'],
})

export const BloquinhoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  bloquinhos: null,
  fetching: null,
  error: null,
  bloquinhoSelected: null,
  //cardClickEnabled: null,
})

/* ------------- Reducers ------------- */

export const request = (state, { latitude, longitude }) =>
  state.merge({ fetching: true, latitude, longitude, bloquinhos: null, cardClickEnabled: false })

export const success = (state, action) => {
  const { bloquinhos } = action
  return state.merge({ fetching: false, error: null, bloquinhos, bloquinhoSelected: bloquinhos[0], cardClickEnabled: true })
}

export const failure = (state) =>
  state.merge({ fetching: false, error: true, bloquinhos: null, cardClickEnabled: false })

export const bloquinhoSelected = (state, action) => {
  const { bloquinho } = action
  return state.merge({ bloquinhoSelected: bloquinho })
}

// export const cardClickEnabled = (state, action) => {
//   const { enabled } = action
//   return state.merge({ cardClickEnabled : enabld })
// }

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BLOQUINHO_REQUEST]: request,
  [Types.BLOQUINHO_SUCCESS]: success,
  [Types.BLOQUINHO_FAILURE]: failure,
  [Types.BLOQUINHO_SELECTED]: bloquinhoSelected,
  //[Types.BLOQUINHO_CARD_CLICK_ENABLED]: cardClickEnabled,
})
