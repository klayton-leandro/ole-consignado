import React, {useRef, useState} from 'react';
import { Image,  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo_red.png';
import { Container, Form, FormInput,SignLink,SignLinkText,SubmitButton, Text} from './styles';


export default function SignIn({ navigation }){
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const loading = useSelector(state => state.auth.loading);
  if(loading == true){
    console.log('loading...')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(){
    dispatch(signInRequest(email,password));
  }
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
        <FormInput
        icon="mail-outline"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu E-mail"
        returnKeyType="next"
        onSubmitEditing={()=> passwordRef.current.focus()}
        value={email}
        onChangeText={setEmail}
        />
        <FormInput


        icon="lock-outline"
        secureTextEntry
        placeholder= "Digite sua Senha"
        ref={passwordRef}
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={password}
        onChangeText={setPassword}
        />
        <SubmitButton  onPress={handleSubmit}>ENTRAR</SubmitButton>
        </Form>
        <Text>Não tenho conta?</Text>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>
            CADASTRAR-SE
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
