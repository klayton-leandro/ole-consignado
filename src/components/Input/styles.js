import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  padding: 0 7px;
  height: 55px;
  background-color: #fff;
  border-radius: 15px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#1A1A1A',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #1a1a1a;
`;

export const TInputMasked = styled(TextInputMask).attrs({
  placeholderTextColor: '#1a1a1a',
})`
  flex: 1;
  font-size: 14px;
  color: #1a1a1a;
`;
