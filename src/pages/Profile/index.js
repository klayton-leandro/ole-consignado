import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity, Image, Alert, Text } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, Form, Title, SubmitButton } from './styles';
import { FormInput, Scroll } from '../SignIn/styles';

import mancha from '~/assets/mancha.png';
import api from '~/services/api';

export default function Profile({ navigation }) {
  const dispath = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  // Refs
  const cpfRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  // State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  useEffect(() => {
    async function loadUser() {
      await api.get('user').then(response => {
        const { name, phone, email } = response.data;
        setName(name);

        setPhone(phone);
        setEmail(email);
      });
    }
    loadUser();
  }, []);

  function handleSubmit() {
    if (!name) {
      Alert.alert('Aviso', 'Nome é obrigatório.');
    } else if (!phone) {
      Alert.alert('Aviso', 'Telefone é obrigatório.');
    } else if (!email) {
      Alert.alert('Aviso', 'Email é obrigatório.');
    } else if (password && password.length < 6) {
      Alert.alert('Aviso', 'Sua  nova senha deve ter no mínimo 6 caracteres.');
    } else {
      dispath(updateProfileRequest({ name, phone, email, password }));
    }
  }

  return (
    <Scroll>
      <Container>
        <TouchableOpacity
          onPress={() => dispath(signOut())}
          style={{
            position: 'absolute',
            top: 20,
            right: 10,
            zIndex: 0,

            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontFamily: 'Poppins-Bold', color: '#CD0D0E' }}>
            Sair do App
          </Text>
        </TouchableOpacity>
        <Image
          source={mancha}
          style={{
            position: 'absolute',
            top: -280,
            left: -150,
            zIndex: -1,
          }}
        />
        <Title>
          Perfil
        </Title>

        <Image
          source={mancha}
          style={{ position: 'absolute', top: -380, left: -150 }}
        />
        <Form>
          <FormInput
            icon="face"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome"
            onSubmitEditing={() => cpfRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="call"
            placeholder="Telefone"
            autocorrect={false}
            autoCapitalize="none"
            ref={phoneRef}
            onSubmitEditing={() => emailRef.current.focus()}
            value={phone}
            onChangeText={value => setPhone(value)}
            masked
            type="cel-phone"
          />

          <FormInput
            icon="mail-outline"
            placeholder="E-mail"
            autocorrect={false}
            autoCapitalize="none"
            ref={emailRef}
            onSubmitEditing={() => usernameRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
        </Form>
        <SubmitButton loading={loading} onPress={handleSubmit}>
          ATUALIZAR
        </SubmitButton>
      </Container>
    </Scroll>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
