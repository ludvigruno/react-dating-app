import { all, takeLatest, put, call } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import types from '../../../core/actionTypes';
import { fetchRegisterFailure, fetchRegisterSuccess } from '../actions/actions';
import { post } from '../../../core/axios';
import { IFetchRegisterRequest } from '../interfaces';
import { query } from '../../../apollo';
import * as queries from '../queries';
import { setCurrentUser } from '../../../core/actions/actions';
import { getEncryptPassword } from '../../../utils/helpers';
import { ErrorMessages } from '../../../utils/constants';

function* registerUser(action: IFetchRegisterRequest): Generator<any> {
  const { payload } = action;
  try {
    if (!payload?.user) {
      throw new Error('Empty user');
    }

    const response: any = yield post(
      {
        path: 'sign-up',
        data: {
          user: {
            name: payload?.user.name,
            surname: payload?.user.surname,
            username: payload?.user.username,
            email: payload?.user.email,
            password: payload.user.password,
            repeatPassword: payload.user.confirmPassword,
            // password: getEncryptPassword(payload.user.password),
            avatar: payload?.user.avatar,
            age: payload?.user.age,
          },
        },
      },
      'application/json',
    );

    if (!response.isSuccess) {
      throw new Error('Unauthorization');
    }

    Cookies.set('token', response.token);

    const loginResponse: any = yield post(
      {
        path: 'sign-in',
        data: {
          user: {
            email: payload?.user.email,
            password: payload.user.password,
            //password: getEncryptPassword(payload.user.password),
          },
        },
      },
      'application/json',
    );
    if (!loginResponse.isSuccess) {
      throw new Error('Unauthorization');
    }
    const localToken = Cookies.get('token');

    const { data: getCurrentUser }: any = yield call(query, {
      query: queries.getCurrentUser,
      variables: {
        token: localToken,
      },
    });

    const { user } = getCurrentUser;
    yield put(
      setCurrentUser({
        currentUser: user,
      }),
    );

    yield put(fetchRegisterSuccess());
  } catch (error: any) {
    yield put(
      fetchRegisterFailure({
        error,
        message: ErrorMessages.register[error] || 'Error',
      }),
    );
  }
}

function* registerUserSaga() {
  yield all([takeLatest(types.FETCH_REGISTER_USER_REQUEST, registerUser)]);
}

export default registerUserSaga;
