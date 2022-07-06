import { all, fork } from 'redux-saga/effects';
import accountSaga from './shared/account';
import registerSaga from '../../containers/Register/saga';
import loginSaga from '../../containers/Login/saga';
import userProfileSaga from '../../containers/UserProfile/saga';
import userListSaga from '../../containers/UserList/saga';
import allActionsListener from './shared/allActionListeners';

export default function* rootSaga() {
  yield all([
    fork(allActionsListener),
    fork(accountSaga),
    fork(registerSaga),
    fork(userProfileSaga),
    fork(loginSaga),
    fork(userListSaga),
  ]);
}
