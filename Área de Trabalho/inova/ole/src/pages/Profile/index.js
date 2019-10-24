import React, {useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';

import {Container,Title, Form, FormInput, SubmitButton, Separator, LogoutButton} from './style';

import Background from '~/components/Background';
import { dispatch } from 'rxjs/internal/observable/pairs';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const emailRef = useRef();
  const oldPasswordRef =useRef();
  const PasswordRef =useRef();
  const confirmPasswordRef =useRef();

  const [ name, setName] = useState('Dono apple');
  const [ email, setEmail] = useState('dono@apple.com.br');
  const [ oldPassword, setOldPassword] = useState('');
  const [ password, setPassword] = useState('');
  const [ confirmPassoword, setConfirmPassword] =useState('');

function handleSubmit (){
}

function handleLogout (){
  dispatch(signOut());
}
  return (
    <Background>
      <Container>
        <Title>Meu Perfil</Title>
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
              onSubmitEditing={()=> oldPasswordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
            <Separator />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Sua senha atual"
              ref={oldPasswordRef}
              returnKeyType="next"
              onSubmitEditing={()=> PasswordRef.current.focus()}
              value={oldPassword}
              onChangeText={setOldPassword}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="sua nova senha"
              ref={PasswordRef}
              returnKeyType="next"
              onSubmitEditing={()=> confirmPasswordRef.current.focus()}
              value={password}
              onChangeText={setPassword}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Confirme sua senha"
              ref={confirmPasswordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={confirmPassoword}
              onChangeText={setConfirmPassword}
            />
            <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
            <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
        </Form>
        </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor }) => (
    <Icon name="person" size={30} color={tintColor} />
  ),
};
