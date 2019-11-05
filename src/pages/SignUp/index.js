import React, { useRef, useState } from 'react';
import { TouchableOpacity, Image, Alert } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { signUpRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  Title,
  SubTitle,
  Header,
  SubmitButton,
} from './styles';
import { FormInput, Scroll } from '../SignIn/styles';

import mancha from '~/assets/mancha.png';

export default function SignUp({ navigation }) {
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
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if (!name) {
      Alert.alert('Aviso', 'Nome é obrigatório.');
    } else if (!cpf) {
      Alert.alert('Aviso', 'CPF é obrigatório.');
    } else if (!phone) {
      Alert.alert('Aviso', 'Telefone é obrigatório.');
    } else if (!email) {
      Alert.alert('Aviso', 'Email é obrigatório.');
    } else if (!username) {
      Alert.alert('Aviso', 'Usuário é obrigatório.');
    } else if (password.length < 6) {
      Alert.alert('Aviso', 'Sua senha deve ter no mínimo 6 caracteres.');
    } else {
      dispath(signUpRequest(name, cpf, phone, email, username, password));
    }
  }

  return (
    <Scroll>
      <Container>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
            zIndex: 0,
          }}
        >
          <Icon name="arrow-back" size={30} color="#CD0D0E" />
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
        <Title>Cadastre-se</Title>
        <SubTitle>Precisamos de alguns dados para efetuar o cadastro</SubTitle>
        <Image
          source={mancha}
          style={{ position: 'absolute', top: -380, left: -150 }}
        />
        <Form>
          <FormInput
            icon="face"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="recent-actors"
            keyboardType="number-pad"
            placeholder="CPF"
            value={cpf}
            onChangeText={value => setCpf(value)}
            masked
            type="cpf"
          />

          <FormInput
            icon="call"
            keyboardType="phone-pad"
            placeholder="Telefone"
            autocorrect={false}
            autoCapitalize="none"
            ref={phoneRef}
            value={phone}
            onChangeText={value => setPhone(value)}
            masked
            type="cel-phone"
          />

          <FormInput
            keyboardType="email-address"
            icon="mail-outline"
            placeholder="E-mail"
            autocorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="person-outline"
            returnKeyType="next"
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
        </Form>
        <SubmitButton loading={loading} onPress={handleSubmit}>
          REGISTRAR
        </SubmitButton>
      </Container>
    </Scroll>
  );
}
