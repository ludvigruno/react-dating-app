import CryptoJS from 'crypto-js';
import { AnyAction, Dispatch } from 'redux';
import config from '../config';

export function getEncryptPassword(password: string): string {
  return CryptoJS.SHA256(password + config.secretKey).toString();
}

export const doesUserExist = () => {
  const user = localStorage.getItem('buy-request@user');
  return !!user;
};

export function decrypt(encryptedString: string) {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedString, 'secret');
  return JSON.parse(CryptoJS.enc.Utf8.stringify(decryptedBytes));
}

export const getDecryptedUserFromLocalStorage = () => {
  const user = localStorage.getItem('buy-request@user');
  const decryptedUser = decrypt(user!);
  return JSON.parse(decryptedUser);
};

export function writeToLocalStorage(obj: object) {
  const data = CryptoJS.AES.encrypt(JSON.stringify(obj), 'secret');
  localStorage.setItem('buy-request@user', data.toString());
}

export function removeUserFromLocalStorage() {
  localStorage.removeItem('buy-request@user');
}

export const getUserFormLocalStorage = () => {
  const user = localStorage.getItem('buy-request@user');
  if (user) {
    return decrypt(user);
  }
  return undefined;
};

export function isJson(message: string) {
  try {
    JSON.parse(message);
  } catch (e) {
    return message;
  }
  return (
    JSON.parse(message).description || JSON.parse(message).error_description
  );
}

export default function dispatchPromise<T>(
  dispatch: Dispatch,
  action: AnyAction,
) {
  return new Promise<T>((resolve, reject) => {
    dispatch({
      ...action,
      resolve,
      reject,
    });
  });
}

export function isEmpty(obj: object) {
  return !!Object.keys(obj).length;
}

export function truncateString(str: string, n: number): string {
  if (!str || str.length <= n) return str;
  const subString = str.substring(0, n - 1);
  return `${subString.substring(0, subString.lastIndexOf(' '))}...`;
}
