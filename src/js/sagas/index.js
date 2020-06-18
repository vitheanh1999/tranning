import { fork } from 'redux-saga/effects';
import auth from './auth';
import loginSaga from './login/login';

export default function* root() {
  yield fork(auth);
  yield fork(loginSaga);
}
