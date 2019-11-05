import React, { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';

import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, SubTitle } from './styles';
import Document from '~/components/Document';
import api from '~/services/api';

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
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadDocuments();
  }, []);

  async function loadDocuments() {
    setRefreshing(true);
    await api.get('files').then(response => {
      setFiles(response.data);
      setRefreshing(false);
    });
  }

  // lida com imagens
  function getPhoto(item) {
    if (!item.checked) {
      ImagePicker.launchCamera(options, async response => {
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
          .put(`files/${item.id}`, data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => {
            loadDocuments();
          })
          .catch(error => {});
      });
    } else {
      Alert.alert('Aviso', 'Seu arquivo já foi validado e aprovado.');
    }
  }

  return (
    <Container>
      <FlatList
        data={files}
        onRefresh={loadDocuments}
        refreshing={refreshing}
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
            message={item.message}
            checked={item.checked}
            icon={item.icon}
            fileUrl={item.url}
            fileName={item.file}
            description={item.description}
            getPhoto={() => getPhoto(item)}
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
