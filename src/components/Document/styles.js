import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;

  margin-bottom: 10px;
  height: 120px;
`;

export const Left = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 70%;
`;

export const Right = styled.View`
  justify-content: center;
  align-items: center;

  flex-basis: 30%;
  align-self: stretch;
`;

export const Description = styled.Text`
  margin-left: 5px;
  color: #000;
  font-size: 15px;
  flex: 1;
`;

export const IconContent = styled.View`
  background: #f7f9fa;
  justify-content: center;
  align-items: center;
  border-radius: 50;
  padding: 10px;
  align-self: stretch;
`;

export const CameraButton = styled.TouchableOpacity``;
