import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  facebookEventsRequest: null,
  facebookEventsSuccess: ['data'],
  facebookEventsFailure: null
})

export const FacebookEventsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  events: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const FacebookEventsSelectors = {
  getEvents: state => state.events
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true, error: null, events: null })

// successful api lookup
export const success = (state, action) => {
  const { data } = action
  return state.merge({ fetching: false, error: null, events: data })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, events: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FACEBOOK_EVENTS_REQUEST]: request,
  [Types.FACEBOOK_EVENTS_SUCCESS]: success,
  [Types.FACEBOOK_EVENTS_FAILURE]: failure
})
