import React from 'react';
import {View, Image, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import {SecretsScreenStyle} from './Styles';
import {Constant} from './Constants';

import {connect} from 'react-redux';
import {increase, decrease, reset} from './actions/actions';

class SecretItem extends React.Component {
  constructor(props) {
    super(props);
  }

  _onLayout = (event) => {
    console.log('height: ' + event.nativeEvent.layout.height);
  }

  render() {
    let num = parseInt(117*Math.random());
    let img = 'emoji'+num;
    return (

      <TouchableOpacity style={SecretsScreenStyle.container} onPress={() => {
        console.log('selectRow')
      }} onLayout={this._onLayout}>

        <View style={SecretsScreenStyle.header}>
          <Image style={SecretsScreenStyle.thumb} source={{uri:img}}></Image>
          <Text style={SecretsScreenStyle.title}>{this.props.id}</Text>
        </View>
        <Text style={SecretsScreenStyle.content}>{this.props.content}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  MyCounter: state.counter
})

export default connect(mapStateToProps)(SecretItem);
