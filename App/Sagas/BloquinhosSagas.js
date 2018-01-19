import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import BloquinhosActions from '../Redux/BloquinhoRedux'

export function * getBloquinhos (api, action) {
  const { latitude, longitude } = action
  const response = yield call(api.getRoot, latitude, longitude)

  if (response.ok) {

    const bloquinhos = path(['data'], response)
    yield put(BloquinhosActions.bloquinhoSuccess(bloquinhos))
  } else {
    yield put(BloquinhosActions.bloquinhoFailure())
  }
}
