import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Description,
  Left,
  Status,
  StatusDescription,
  Right,
  CameraButton,
} from './styles';

import camera from '~/assets/camera.png';
import IconHandler from '../IconHandler';

export default function Document({ icon, description, fileUrl, getPhoto }) {
  return (
    <>
      <Container>
        <Left>
          <IconHandler icon={icon} fileUrl={fileUrl} />
          {fileUrl && (
            <Image
              key={fileUrl}
              source={{ uri: `${fileUrl}?${new Date()}`, cache: 'reload' }}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
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
    </>
  );
}
