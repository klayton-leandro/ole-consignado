import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
  height: 46px;
  background: #3b9eff;
  border-radius: 15px;
  min-width: 150px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 }
})``;
