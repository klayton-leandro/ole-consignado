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

  const cpfRef = useRef();
  const telefoneRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const loading = useSelector(state => state.auth.loading);

  const [name, setName] = useState('232323');
  const [cpf, setCpf] = useState('2322323');
  const [telefone, setTelefone] = useState('2232323');
  const [email, setEmail] = useState('2323e232323');
  const [username, setUsername] = useState('232233');
  const [password, setPassword] = useState('232323');

  function handleSubmit() {
    if (!name) {
      Alert.alert('Aviso', 'Nome é obrigatório.');
    } else if (!cpf) {
      Alert.alert('Aviso', 'CPF é obrigatório.');
    } else if (!telefone) {
      Alert.alert('Aviso', 'Telefone é obrigatório.');
    } else if (!email) {
      Alert.alert('Aviso', 'Email é obrigatório.');
    } else if (password.length < 6) {
      Alert.alert('Aviso', 'Sua senha deve ter no mínimo 6 caracteres.');
    } else {
      dispath(signUpRequest(name, cpf, telefone, email, username, password));
    }
  }

  return (
    <Scroll>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Icon name="arrow-back" size={30} color="#CD0D0E" />
          </TouchableOpacity>
        </Header>
        <Image
          source={mancha}
          style={{
            position: 'absolute',
            top: -280,
            left: -150,
            zIndex: -1,
          }}
        />
        <Title>Cadastra-se</Title>
        <SubTitle>Precisamos de alguns dados para efetuar o cadastro</SubTitle>
        <Image
          source={mancha}
          style={{ position: 'absolute', top: -380, left: -150 }}
        />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome"
            onSubmitEditing={() => cpfRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="recent-actors"
            placeholder="CPF"
            autocorrect={false}
            autoCapitalize="none"
            ref={cpfRef}
            onSubmitEditing={() => telefoneRef.current.focus()}
            value={cpf}
            onChangeText={value => setCpf(value)}
            masked
            type="cpf"
          />

          <FormInput
            icon="call"
            placeholder="Telefone"
            autocorrect={false}
            autoCapitalize="none"
            ref={telefoneRef}
            onSubmitEditing={() => emailRef.current.focus()}
            value={telefone}
            onChangeText={value => setTelefone(value)}
            masked
            type="cel-phone"
          />

          <FormInput
            icon="mail-outline"
            placeholder="Digite seu E-mail"
            autocorrect={false}
            autoCapitalize="none"
            ref={emailRef}
            onSubmitEditing={() => usernameRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Usuário"
            ref={usernameRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={username}
            onChangeText={setUsername}
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
          REGISTRAR
        </SubmitButton>
      </Container>
    </Scroll>
  );
}
