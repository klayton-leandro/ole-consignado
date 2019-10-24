import React, {Alert} from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container,Left,Name,Info,Time,Avatar } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import ApiKeys from '../firebaseAPi/ApiKeys';

export default class App extends React.Component {

  state = {
    result: null,
  };

  onChooseImagePress = async () => {

    let result = await ImagePicker.launchImageLibrary();

    if(!result){
      this.uploadImage(result.uri, "test-image")
      .then(() => {
          Alert.alert('Upload com sucesso')
        })
        .catch((error) => {
          Alert.alert(erro)
        });
      }
    }
  uploadImage = async(uri,imageName) => {
    const response = await fetch(uri);
    const blog = await response.blog();
    var ref = firebase.storage().ref().child("images/" +imageName);
    return ref.put(blog);
  }

  render() {
    const { result } = this.state;
    return (
      <Container >
        <Left>
          {result && (
            <Avatar source={{uri: result.uri}} />
          )}
          <Info>
            <Name>Comprovante de Renda</Name>
            <Time>Extrato bancário seus 3 meses</Time>

          </Info>
        </Left>
        <TouchableOpacity onPress = {this.onChooseImagePress}>
          <Icon name="photo" size={40} color="#CC0000" />
        </TouchableOpacity>
      </Container>

    );
  }
}
