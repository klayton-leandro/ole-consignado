import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import ImagePicker from 'react-native-image-picker';

import logo from '~/assets/logo_red.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, SubTitle } from './styles';
import Document from '~/components/Document';

export default function Dashboard() {
  // lida com imagens
  function getImages(key) {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        return;
      }
      if (response.customButton) {
        return;
      }
      if (response.error) {
        Alert.alert('Erro ao tentar acessar a sua câmera');
      }

      const source = {
        uri: response.uri,
        fileName: response.fileName,
        type: response.type,
      };

      if (key === 'rg') {
        setRgDocumento(source);
      } else if (key === 'cpf') {
        setCpfDocumento(source);
      } else if (key === 'estadoCivil') {
        setEstadoCivilDocumento(source);
      } else if (key === 'comprovanteEndereco') {
        setComprovanteEnderecoDocumento(source);
      } else if (key === 'renda') {
        setRendaDocumento(source);
      } else if (key === 'ctps') {
        setCtpsDocumento(source);
      } else if (key === 'formularioScr') {
        setFormularioScr(source);
      } else if (key === 'formularioPropostaFinanciamento') {
        setFormularioPropostaFinanciamento(source);
      } else if (key === 'coabitacao') {
        setCoabitacaoDocumento(source);
      }
    });
  }

  return (
    <Container>
      <Title>Documentação</Title>
      <SubTitle>Por favor, nos envie os documentos abaixo:</SubTitle>

      <Document description="Foto do rosto da frente ewe we" />
    </Container>
  );
}

Dashboard.navigationOptions = ({ navigation }) => ({
  headerTitle: () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image source={logo} style={{ width: 50, height: 50 }} />
    </View>
  ),
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon name="menu" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
  headerRight: () => <View />,
});
