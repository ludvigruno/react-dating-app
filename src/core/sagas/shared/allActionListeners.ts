import { takeEvery, all } from 'redux-saga/effects';
import { get } from 'lodash';

const checkActions = (action: any) =>
  action.type &&
  (action.type.includes('FAILURE') ||
    action.type.includes('SUCCESS') ||
    action.type.includes('WARNING') ||
    action.type.includes('INFO'));

const showToast = (action: any) => {
  const message = get(action, 'payload.message', null);
  if (!message) return;
  switch (message.type) {
    case 'WARNING':
      console.log(message.text);
      break;
    case 'INFO':
      console.log(message.text);
      break;
    case 'SUCCESS':
      console.log(message.text);
      break;
    case 'FAILURE':
    default:
      console.log(message.text);
      break;
  }
};

export default function* allActionsListener() {
  yield all([takeEvery(checkActions, showToast)]);
}
