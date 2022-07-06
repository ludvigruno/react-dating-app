import { all, call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { query } from '../../../apollo';
import { setCurrentUser } from '../../actions/actions';
import types from '../../actionTypes';
import { post } from '../../axios';
import * as queries from '../queries';

function* logout() {
  yield post(
    {
      path: 'logout',
      data: {},
    },
    'application/json',
  );
  yield put(
    setCurrentUser({
      currentUser: null,
    }),
  );
}

function* getCurrentUser(): Generator<any> {
  try {
    const localToken = Cookies.get('token');
    const {
      data: { getCurrentUser },
    }: any = yield call(query, {
      query: queries.getCurrentUser,
      variables: {
        token: localToken,
      },
    });
    yield put(
      setCurrentUser({
        currentUser: getCurrentUser.user,
      }),
    );
  } catch (e: any) {
    yield put(
      setCurrentUser({
        currentUser: null,
      }),
    );
  }
}

function* accountSaga() {
  yield all([
    takeLatest(types.LOGOUT_USER_REQUEST, logout),
    takeLatest(types.GET_CURRENT_USER_REQUEST, getCurrentUser),
  ]);
}

export default accountSaga;
