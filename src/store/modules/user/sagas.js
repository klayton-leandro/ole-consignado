import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, phone, password, username } = payload.data;

    const profile = {
      name,
      email,
      phone,
      password,
      username,
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Aviso', 'Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro ao atualizar perfil, confira seus dados');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
