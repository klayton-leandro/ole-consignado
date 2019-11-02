import React from 'react';
import { Image, View } from 'react-native';

import {
  Container,
  Description,
  Left,
  Status,
  StatusDescription,
  Right,
  Content,
  CameraButton,
} from './styles';

import camera from '~/assets/camera.png';
import IconHandler from '../IconHandler';

export default function Document({
  icon,
  description,
  fileUrl,
  getPhoto,
  checked,
  message,
}) {
  return (
    <Content>
      <Container>
        <Left>
          <IconHandler icon={icon} fileUrl={fileUrl} />
          {fileUrl && (
            <Image
              key={fileUrl}
              source={{ uri: `${fileUrl}?${new Date()}`, cache: 'reload' }}
              style={{ width: 80, height: 80 }}
              resizeMode="cover"
              resizeMethod="resize"
            />
          )}

          <Description>{description}</Description>
        </Left>
        <Right>
          <CameraButton onPress={getPhoto}>
            <Image source={camera} />
          </CameraButton>
        </Right>
      </Container>
      <Status>
        <StatusDescription>
          {checked && 'Documento validado e aprovado'}
          {!fileUrl && 'Aguardando o envio'}
          {message && '* ' + message}
        </StatusDescription>
      </Status>
    </Content>
  );
}
