import { all, put, takeLatest, call } from 'redux-saga/effects';
import { query } from '../../../apollo';
import * as queries from '../queries';
import types from '../../../core/actionTypes';
import { getUserListFailure, getUserListSuccess } from '../actions/actions';
import { IGetUserList } from '../interfaces';

function* fetchUserList(action: IGetUserList) {
  const { payload } = action;
  try {
    const {
      data: { getUsersWithoutCurrentId },
    } = yield call(query, {
      query: queries.fetchUserList,
      variables: {
        id: '62c5313cc488ab1d351ff8f0',
      },
    });

    yield put(getUserListSuccess({ users: getUsersWithoutCurrentId }));
  } catch (error: any) {
    yield put(
      getUserListFailure({
        error,
        message: {
          text: 'Error',
        },
      }),
    );
  }
}

function* fetchClientRequestsSaga() {
  yield all([takeLatest(types.GET_USER_LIST_REQUEST, fetchUserList)]);
}

export default fetchClientRequestsSaga;
