import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;

  margin-bottom: 10px;
  min-height: 100px;
`;

export const Left = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 80%;

  border-right-width: 1;
  border-color: #ccc;
`;

export const Right = styled.View`
  justify-content: center;
  align-items: center;

  flex-basis: 20%;
`;

export const Description = styled.Text`
  margin-left: 5px;
  color: #000;
  font-size: 12px;
  flex: 1;
  font-family: 'Poppins-Regular';
`;

export const IconContent = styled.View`
  background: #f7f9fa;
  justify-content: center;
  align-items: center;
  border-radius: 50;
  padding: 10px;
  align-self: stretch;
`;

export const Status = styled.View``;

export const StatusDescription = styled.Text``;

export const CameraButton = styled.TouchableOpacity``;
