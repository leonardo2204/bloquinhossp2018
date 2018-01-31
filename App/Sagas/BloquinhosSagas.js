import {
  call,
  put
} from 'redux-saga/effects'
import {
  path
} from 'ramda'
import BloquinhosActions from '../Redux/BloquinhoRedux'
import BloquinhosDetailActions from '../Redux/BloquinhoDetailRedux'

export function* getBloquinhos(api, action) {
  const {
    latitude,
    longitude
  } = action

  try {
    const response = yield call(api.getRoot, latitude, longitude)
    throw new Error('se q la')
    if (response) {
      yield put(BloquinhosActions.bloquinhoSuccess(response))
    } else {
      yield put(BloquinhosActions.bloquinhoFailure())
    }
  } catch (err) {
    yield put(BloquinhosActions.bloquinhoFailure())
  }
}

export function* getBloquinhoDetail(api, action) {
  const {
    blocoId
  } = action

  try {
    const response = yield call(api.getBloquinho, blocoId)

    if (response && response.length > 0) {
      yield put(BloquinhosDetailActions.bloquinhoDetailSuccess(response[0]))
    } else {
      yield put(BloquinhosDetailActions.bloquinhoDetailFailure())
    }
  } catch (err) {
    yield put(BloquinhosDetailActions.bloquinhoDetailFailure())
  }
}
