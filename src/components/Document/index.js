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

export default function Document({ onChange, description }) {
  return (
    <Container>
      <Left>
        <IconContent>
          <Image source={require('~/assets/smile.png')} />
        </IconContent>

        <Description>{description}</Description>
      </Left>
      <Right>
        <CameraButton onPress={() => {}}>
          <Image source={camera} />
        </CameraButton>
      </Right>
    </Container>
  );
}
