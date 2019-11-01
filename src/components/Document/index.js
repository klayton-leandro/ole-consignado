import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Description,
  Left,
  IconContent,
  Right,
  CameraButton,
} from './styles';

import camera from '~/assets/camera.png';

export default function Document({
  onChange,
  description,
  fileUrl,
  fileName,
  getPhoto,
}) {
  console.tron.log('renderizando');
  return (
    <Container>
      <Left>
        {!fileUrl && <Image source={require('~/assets/smile.png')} />}
        {fileUrl && (
          <Image
            key={fileUrl}
            source={{ uri: `${fileUrl}?${new Date()}`, cache: 'reload' }}
            style={{ width: 80, height: 80 }}
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
  );
}
