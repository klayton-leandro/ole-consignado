import React, {useRef, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Image,  } from 'react-native';
import Background from '~/components/Background';
import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo_red.png';
import { Container, Form,SubmitButton, SignLink, SignLinkText} from './styles';
import { FormInput } from '../SignIn/styles';


export default function SignUp({navigation}){
  const dispath = useDispatch();
  const emailRef = useRef();
  const PasswordRef = useRef();
  const loading = useSelector(state => state.auth.loading);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function handleSubmit(){
    dispath(signUpRequest(name,email,password));
  };
  return (
  <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder= "Nome Completo"
              onSubmitEditing={()=> emailRef.current.focus()}
              value={name}
              onChangeText={setName}
            />

            <FormInput
              icon="mail-outline"
              placeholder="Digite seu E-mail"
              autocorrect={false}
              autoCapitalize="none"
              ref={emailRef}
              onSubmitEditing={()=> PasswordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite sua senha"
              ref={PasswordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />
          </Form>
        <SubmitButton loading={loading} onPress={handleSubmit}>REGISTRAR</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>
          Ja tenho cadastro ?
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
