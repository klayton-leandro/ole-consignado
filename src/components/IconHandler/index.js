import React from 'react';
import { Image } from 'react-native';
export default function IconHandler({ fileUrl, icon }) {
  return (
    <>
      {!fileUrl && icon === 'smile' && (
        <Image source={require('../../assets/icons/smile.png')} />
      )}
      {!fileUrl && icon === 'rg_frente' && (
        <Image source={require('../../assets/icons/rg_frente.png')} />
      )}
      {!fileUrl && icon === 'rg_verso' && (
        <Image source={require('../../assets/icons/rg_verso.png')} />
      )}
      {!fileUrl && icon === 'home' && (
        <Image source={require('../../assets/icons/home.png')} />
      )}
      {!fileUrl && icon === 'dollar-sign' && (
        <Image source={require('../../assets/icons/dollar-sign.png')} />
      )}
    </>
  );
}
