import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, View, Text, FlatList } from 'react-native';

import ImagePicker from 'react-native-image-picker';

import logo from '~/assets/logo_red.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, SubTitle } from './styles';
import Document from '~/components/Document';
import api from '~/services/api';
import Axios from 'axios';

const options = {
  title: 'Selecione uma opção',
  cancelButtonTitle: 'Cancelar',
  mediaType: 'mixed',

  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function Dashboard() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    loadDocuments();
  }, []);

  async function loadDocuments() {
    console.tron.log('carrefando');
    await api.get('files').then(response => {
      setFiles(response.data);
    });
  }

  // lida com imagens
  function getPhoto(id) {
    ImagePicker.showImagePicker(options, async response => {
      if (response.didCancel) {
        return;
      }
      if (response.customButton) {
        return;
      }
      if (response.error) {
        Alert.alert('Erro ao tentar acessar a sua câmera');
      }

      const data = new FormData();

      data.append('file', {
        uri: response.uri,
        type: response.type,
        name: response.fileName,
      });

      await api
        .put(`files/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          loadDocuments();
        })
        .catch(error => {});
    });
  }

  return (
    <Container>
      <FlatList
        data={files}
        ListHeaderComponent={() => (
          <>
            <Title>Documentação</Title>
            <SubTitle>Por favor, nos envie os documentos abaixo:</SubTitle>
          </>
        )}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Document
            fileUrl={item.url}
            fileName={item.file}
            description={item.description}
            getPhoto={() => getPhoto(item.id)}
          />
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};
