import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, users } = response.data;
    yield put(signInSuccess(token, users));
    if ((!token, users)) {
      Alert.alert('Email não cadastrado', 'revise os dados informados !');
      yield put(signFailure());
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return;
    }
  } catch (error) {
    Alert.alert('Dados incorretos', 'Verifique dados informados !');
    yield put(signFailure());
  }
}
export function* signUp({ payload }) {
  try {
    const { name, telefone, cpf, email, password, username } = payload;

    yield call(api.post, 'users', {
      name,
      telefone,
      cpf,
      username,
      email,
      password,
    });

    Alert.alert('Aviso', 'Usuário cadastrado com sucesso!');
    history.push('SignIn');
  } catch (error) {
    console.tron.log(error);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
