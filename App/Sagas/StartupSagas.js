import { put, select, spawn } from 'redux-saga/effects'
import { is } from 'ramda'
import codePushSaga from "react-native-code-push-saga";

// process STARTUP actions
export function * startup (action) {
    yield spawn(codePushSaga);
}
