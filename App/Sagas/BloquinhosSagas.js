import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import BloquinhosActions from '../Redux/BloquinhoRedux'

export function * getBloquinhos (api, action) {
  const { latitude, longitude } = action
  const response = yield call(api.getRoot, latitude, longitude)

  if (response) {
    yield put(BloquinhosActions.bloquinhoSuccess(response))
  } else {
    yield put(BloquinhosActions.bloquinhoFailure())
  }
}
