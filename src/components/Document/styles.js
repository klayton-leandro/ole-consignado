import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  padding: 10px;
  margin-bottom: 10px;
  min-height: 100px;
  background-color: #ffffff;
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

export const Status = styled.View`
  margin-top: 10px;
`;

export const StatusDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 11px;
  color: #cd0d0e;
`;

export const CameraButton = styled.TouchableOpacity``;
