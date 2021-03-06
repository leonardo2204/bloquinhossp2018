import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { BloquinhoTypes } from '../Redux/BloquinhoRedux'
import { BloquinhoDetailTypes } from '../Redux/BloquinhoDetailRedux'
import { FacebookEventsTypes } from '../Redux/FacebookEventsRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getBloquinhos, getBloquinhoDetail } from './BloquinhosSagas'
import { getFacebookEvents } from './FacebookEventsSagas'
import FacebookEvents from '../Containers/FacebookEvents';
 
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(BloquinhoTypes.BLOQUINHO_REQUEST, getBloquinhos, api),
    takeLatest(BloquinhoDetailTypes.BLOQUINHO_DETAIL_REQUEST, getBloquinhoDetail, api),
    takeLatest(FacebookEventsTypes.FACEBOOK_EVENTS_REQUEST, getFacebookEvents),
  ])
}
