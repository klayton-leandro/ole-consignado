import styled from 'styled-components/native';
import Button from '~/components/Button';
export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size:20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {padding:20},
})``;

export const Encaminhar = styled(Button).attrs({
  contentContainerStyle: {padding:20},
})`
  margin-top: 10px;
  background: #f64c75;
  padding: 10px;

`
