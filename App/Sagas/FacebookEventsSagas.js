/* ***********************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

import {
  call,
  put
} from 'redux-saga/effects'
import FacebookEventsActions from '../Redux/FacebookEventsRedux'
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk'
// import { FacebookEventsSelectors } from '../Redux/FacebookEventsRedux'

export function* getFacebookEvents(action) {

  const accessToken = yield call(AccessToken.getCurrentAccessToken);
  console.tron.log(accessToken)

  const graphRequest = () => new Promise((resolve, reject) => {
    const infoRequest = new GraphRequest(
      '/me/events', {
        accessToken: accessToken.accessToken,
        parameters: {
          fields: {
            string: 'name, picture{url}'
          },
          since: {
            string: (Date.now() / 1000 | 0).toString() //cool way to floor a number e.g. Math.floor()
          }
        }
      },
      (error, result) => {
        if (error) return reject(error)
        else
          return resolve(result)
      }
    )

    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start()
  })

  const graphResponse = yield call(graphRequest)

  // success?
  if (graphResponse.data) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(FacebookEventsActions.facebookEventsSuccess(graphResponse.data))
  } else {
    yield put(FacebookEventsActions.facebookEventsFailure())
  }
}
