import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';
export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const OlaText = styled.Text`
  color: #ffffff;
  font-size: 42px;
  text-align: center;
`;

export const WelcomeText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  text-align: center;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  align-self: flex-end;
  padding: 10px;
  background-color: #cd0d0e;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const Text = styled.Text`
  margin-top: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const Bold = styled.Text`
  color: #ff4a4a;
`;
