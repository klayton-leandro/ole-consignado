import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { signInSuccess, signFailure, signUpSuccess } from './actions';
import NavigationService from '../../../services/navigation';

/* 
  - Login do usuário no banco
  - Params: username e password
*/

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, 'sessions', {
      username,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (error) {
    Alert.alert('Aviso', 'Verifique seus dados de login e tente novamente.');
    yield put(signFailure());
  }
}

/* 
  - Cadastra um novo usuário no banco
  - Params: name, cpf, phone, email, username e password 
*/

export function* signUp({ payload }) {
  try {
    const { name, cpf, phone, email, username, password } = payload;

    yield call(api.post, 'users', {
      name,
      cpf,
      phone,
      email,
      username,
      password,
    });

    Alert.alert(
      'Aviso',
      'Cadastrado com sucesso.',
      [
        {
          text: 'OK',
          onPress: () => {
            NavigationService.navigate('SignIn');
          },
        },
      ],
      { cancelable: false }
    );

    yield put(signUpSuccess());
  } catch (err) {
    const error = err.response && err.response.data.error;
    if (error && error.message) {
      Alert.alert('Aviso', error.message);
    }
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
