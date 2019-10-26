import React from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container,Left,Name,Info,Time,Avatar } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import ApiKeys from '../firebaseAPi/ApiKeys';
export default class App extends React.Component {
  state = {
    photo: null,
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    if(!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
    ImagePicker.launchCamera(options, response => {

      if (response.uri) {
        this.setState({ photo: response})

        this.setState = async(response, imageName) => {
                const picture = await fetch(response);
                const blog = await picture.blog();
                var ref = firebase.storage().ref().child("images/" + imageName);
                return ref.put(blog);
              }
      }
    })
  }

  render() {
    const { photo } = this.state;
    return (
      <Container >
        <Left>
          {photo && (
            <Avatar source={{uri: photo.uri}} />
          )}
          <Info>
            <Name>Documento RG ou CNH</Name>
            <Time>Foto do Verso do RG ou CNH</Time>

          </Info>
        </Left>
        <TouchableOpacity onPress = {this.handleChoosePhoto}>
          <Icon name="photo" size={40} color="#CC0000" />
        </TouchableOpacity>
      </Container>

    );
  }
}
