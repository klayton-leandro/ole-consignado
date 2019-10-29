import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Header = styled.View`
  height: 100px;
  margin-bottom: 20px;

  padding-top: 20px;
  align-self: stretch;
`;
export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: #f7f9fa;
`;

export const Form = styled.View`
  align-self: stretch;
  padding-bottom: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background-color: #cd0d0e;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const Title = styled.Text`
  font-size: 31px;
  color: #cd0d0e;
  font-weight: bold;
  text-align: left;
  align-self: stretch;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #000000;
  text-align: left;
  margin-bottom: 30px;
`;
