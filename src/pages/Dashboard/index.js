import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, View, FlatList } from 'react-native';

import ImagePicker from 'react-native-image-picker';

import logo from '~/assets/logo_red.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, SubTitle } from './styles';
import Document from '~/components/Document';
import api from '~/services/api';

export default function Dashboard() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    api.get('files').then(response => {
      setFiles(response.data);
    });
  });

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
      <FlatList
        data={files}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Document description={item.description} />}
      />
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
  headerRight: () => (
    <TouchableOpacity onPress={() => dispatch}>
      <Icon name="close" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
