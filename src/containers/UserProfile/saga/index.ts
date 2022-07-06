import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as queries from '../queries';
import types from '../../../core/actionTypes';
import { query } from '../../../apollo';
import { IFetchUserProfileAction } from '../interfaces';
import {
  fetchUserProfileFailure,
  fetchUserProfileSuccess,
} from '../actions/actions';

function* fetchUserProfile(action: IFetchUserProfileAction) {
  const { payload } = action;
  try {
    const {
      data: { getUserById },
    } = yield call(query, {
      query: queries.getUserById,
      variables: {
        id: payload.userId,
      },
    });
    const { user } = getUserById;
    yield put(
      fetchUserProfileSuccess({
        user,
      }),
    );
  } catch (e: any) {
    yield put(fetchUserProfileFailure(e));
  }
}

function* userProfileSaga() {
  yield all([takeLatest(types.FETCH_USER_PROFILE_REQUEST, fetchUserProfile)]);
}

export default userProfileSaga;
