import React from 'react';
import { Image, View } from 'react-native';
export default function IconHandler({ fileUrl, icon }) {
  return (
    <>
      {!fileUrl && icon === 'smile' && (
        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/icons/smile.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>
      )}
      {!fileUrl && icon === 'rg_frente' && (
        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/icons/rg_frente.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>
      )}
      {!fileUrl && icon === 'rg_verso' && (
        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/icons/rg_verso.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>
      )}
      {!fileUrl && icon === 'home' && (
        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/icons/home.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>
      )}
      {!fileUrl && icon === 'dollar-sign' && (
        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('../../assets/icons/dollar-sign.png')} />
        </View>
      )}
    </>
  );
}
