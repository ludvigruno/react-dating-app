import { all, takeLatest, put, call } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import types from '../../../core/actionTypes';
import { fetchLoginFailure, fetchLoginSuccess } from '../actions/actions';
import { post } from '../../../core/axios';
import { getEncryptPassword } from '../../../utils/helpers';
import { query } from '../../../apollo';
import * as queries from '../queries';
import { IFetchLoginRequest } from '../interfaces';
import { setCurrentUser } from '../../../core/actions/actions';
import { ErrorMessages } from '../../../utils/constants';

function* loginUser(action: IFetchLoginRequest): Generator<any> {
  const { payload } = action;
  try {
    if (!payload?.password) {
      throw new Error('Empty password');
    }
    const response: any = yield post(
      {
        path: 'sign-in',
        data: {
          user: {
            email: payload?.email,
            password: payload.password,
            // password: getEncryptPassword(payload.password),
          },
        },
      },
      'application/json',
    );

    if (!response.isSuccess) {
      throw new Error('Unauthorization');
    }

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
    yield put(fetchLoginSuccess());
  } catch (error: any) {
    yield put(
      fetchLoginFailure({
        error,
        message: {
          text: ErrorMessages.login[error] || 'Error',
        },
      }),
    );
  }
}

function* loginUserSaga() {
  yield all([takeLatest(types.LOGIN_USER_REQUEST, loginUser)]);
}

export default loginUserSaga;
