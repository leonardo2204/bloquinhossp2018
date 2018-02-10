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

function* getCurrentAccessToken(){
  return yield call(AccessToken.getCurrentAccessToken)
}

export function* getFacebookEvents(action) {

  const accessToken = yield call(getCurrentAccessToken);
  
  if(!accessToken)
    return yield put(FacebookEventsActions.facebookEventsUserNotLoggedIn())

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
    yield put(FacebookEventsActions.facebookEventsSuccess(graphResponse.data))
  } else {
    yield put(FacebookEventsActions.facebookEventsFailure())
  }
}
