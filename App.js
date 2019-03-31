import React from 'react';
import { StyleSheet, Text, View, ImageBackground,  Alert} from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends React.Component {
  render() {

    console.log('Hello Console World!');
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/LoginBackground.png')} style={styles.imgBackground}>
          <View>
            <Text style={styles.homeName}>Money Builder</Text>
            <Button onPress={() => { Alert.alert('You tapped the button!');}}
              title="Login" type="outline" titleStyle={{color: 'white'}} buttonStyle={{borderColor: 'white', width: 250, marginTop: -50, alignSelf: 'center'}}/>
            <Button title="Create Account" type="outline" titleStyle={{color: 'white'}} buttonStyle={{borderColor: 'white', width: 250, marginTop: 50, alignSelf: 'center'}}/>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: 100,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
  },
  homeName: {
    fontSize: 36, 
    color: '#fff', 
    textAlign: 'center', 
    lineHeight: 350,
    fontWeight: 'bold',
  },

});
