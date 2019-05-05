import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Alert, TextInput} from 'react-native';
import { Button, withTheme } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {loginText: '', passText: ''};
  }
    
  render() {

    console.log('Hello Console World!');
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/LoginBackground.png')} style={styles.imgBackground}>
          <View>
            <Text style={styles.homeName}>Money Builder</Text>
            <TextInput
                onChangeText = { (loginText) => this.setState({loginText}) }
                value = { this.state.loginText }
                placeholder = {'Username'}
                style = {styles.userText}
            />
            <TextInput
                onChangeText = { (passText) => this.setState({passText}) }
                value = { this.state.passText }
                placeholder = {'Password'}
                style = {styles.passText}
            />
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
  userText: {
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 5,
  },
  passText: {
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 5,
  }

});
