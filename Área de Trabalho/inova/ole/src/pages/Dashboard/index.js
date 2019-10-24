import React , {useState}from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';
import Background from '~/components/Background' ;
import DocumentoF from '~/components/DocumentoF';
import DocumentoV from '~/components/DocumentoV';
import Comprovante from '~/components/Comprovante';
import Self from '~/components/Self';


import {Container , Title, List,Encaminhar } from './styles';

export default function Dashboard() {


  const documentoF = [1]
  const documentoV = [1]
  const comprovanteD = [1]

  const self = [1]

  return (
    <Background>
      <Container>
        <Title></Title>

        <List
          data={documentoF}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <DocumentoF data={item}/>
          }
        />
        <List
          data={documentoV}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <DocumentoV data={item}/>
          }
        />
        <List
          data={comprovanteD}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Comprovante data={item}/>
          }
        />
        <List
          data={self}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Self data={item}/>
          }
        />


      </Container>

    </Background>
    );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor }) => (
    <Icon name="home" size={30} color={tintColor} />
  ),
};
