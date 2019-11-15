import React, { useRef, useState } from 'react';
import { Image, ImageBackground, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo_red.png';
import Background from '~/components/Background';

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

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if (!cpf) {
      Alert.alert('Aviso', 'O cpf é obrigatório');
    } else if (!password) {
      Alert.alert('Aviso', 'A senha é obrigatória');
    } else {
      dispatch(signInRequest(cpf, password));
    }
  }
  return (
    <ImageBackground source={background} style={{ flex: 1 }}>
      <Background>
        <Scroll>
          <Container>
            <Image source={logo}  resizeMode="center" style={{width: 150, height: 150,marginVertical: 10}} />
            <OlaText>Olá!</OlaText>
            <WelcomeText>Bem-vindo. Por favor, entre em sua conta!</WelcomeText>
            <Form>

  

              <FormInput
                icon="recent-actors"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="CPF"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={cpf}
                onChangeText={value => setCpf(value)}

                masked
                type="cpf"

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
              <SubmitButton loading={loading} onPress={handleSubmit}>
                Entrar
              </SubmitButton>
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
