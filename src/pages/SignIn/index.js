import React, { useRef, useState } from 'react';
import { ImageBackground, Alert } from 'react-native';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo_red.png';
import {
  Container,
  Form,
  FormInput,
  SignLink,
  SignLinkText,
  SubmitButton,
  OlaText,
  WelcomeText,
  Scroll,
  Bold,
} from './styles';

import background from '~assets/background.png';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const loading = useSelector(state => state.auth.loading);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if (!username) {
      Alert.alert('Aviso', 'O usuário é obrigatório');
    } else if (!password) {
      Alert.alert('Aviso', 'A senha é obrigatória');
    } else {
      dispatch(signInRequest(username, password));
    }
  }
  return (
    <ImageBackground source={background} style={{ flex: 1 }}>
      <Background>
        <Scroll>
          <Container>
            <Image source={logo} style={{ marginTop: 40 }} />
            <OlaText>Olá!</OlaText>
            <WelcomeText>Bem-vindo. Por favor, entre em sua conta!</WelcomeText>
            <Form>
              <FormInput
                icon="person-outline"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Usuário"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={username}
                onChangeText={setUsername}
              />
              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Senha"
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={password}
                onChangeText={setPassword}
              />
              <SubmitButton onPress={handleSubmit}>Entrar </SubmitButton>
            </Form>

            <SignLink onPress={() => navigation.navigate('SignUp')}>
              <SignLinkText>
                Não tenho uma conta? <Bold>Cadastra-se</Bold>
              </SignLinkText>
            </SignLink>
          </Container>
        </Scroll>
      </Background>
    </ImageBackground>
  );
}
