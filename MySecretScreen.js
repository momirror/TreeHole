import React from 'react';
import {Text,ActivityIndicator, View, Image, StyleSheet, Button, TextInput} from 'react-native';
import {MySecretScreenStyle} from './Styles';
import {connect} from 'react-redux';
import {refreshSecrets} from './actions/actions';
import {User, UserName} from "./Constant";


class MySecretScreen extends React.Component {

  constructor(props) {
    super(props);

    // User._name = "XiaoMing";
    User.setName('XiaoQiang');
    // alert(User.getName());
    // alert(User._name);


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
      this.props.dispatch(refreshSecrets());
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
        <Text>{UserName}</Text>
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

//一定要进行redux和componet的绑定，否则this.props.dispatch等相关方法无法调用。

const mapStateToProps = state => ({
  counter: state.counter //key 将会绑定到this.props中,值是在reducer中定义的回调函数 。
})

export default connect(mapStateToProps)(MySecretScreen);

