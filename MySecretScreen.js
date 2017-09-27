import React from 'react';
import {Text,ActivityIndicator, View, Image, StyleSheet, Button, TextInput} from 'react-native';
import {MySecretScreenStyle} from './Styles';


class MySecretScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {secret: null,
                  publishing:false,
    };
  }

  publishSecret = async () => {
    console.log('publish...');
    this.setState(previousState => {
      return {publishing:true};
    });

    var url = 'http://192.168.1.104:3000/secrets';

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: this.state.secret,
      })
    });

    if (response.ok) {
      this.setState(previousState => {
        return {publishing:false};
      });

      this.refs['textInput'].clear();
      alert('发布成功')
    }


  }

  textChange = (text) => {
    console.log(text);
    this.setState(previousState => {
      return {secret: text};
    });
  }

  render() {
    return (
      <View style={MySecretScreenStyle.container}>
        <TextInput ref={'textInput'} style={MySecretScreenStyle.input} onChangeText={this.textChange} maxLength={1000}
                   multiline={true}></TextInput>
        <Button onPress={this.publishSecret} color="red" m style={MySecretScreenStyle.button}
                title={'吼一声'}/>
        <ActivityIndicator
          animating={this.state.publishing}
          style={[styles.centering,]}
          color="white"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  }});


module.exports = {MySecretScreen};
