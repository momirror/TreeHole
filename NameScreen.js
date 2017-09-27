import React from 'react'
import {View,TextInput,Text} from 'react-native'

export default class NameScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View>
        <Text>点击编辑姓名：{window}</Text>
        <TextInput
          placeholder="在这里编辑你的姓名"></TextInput>

      </View>
    );
  }
}
