import React from 'react';
import {View, Image, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import {SettingScreenStyles} from './Styles';
import {Constant} from './Constants';

import {connect} from 'react-redux';
import {increase,decrease,reset} from './actions/actions';

 class SettingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => {
        console.log('selectRow')
      }}>

        <Text style={SettingScreenStyles.setttingItemTitle}>{this.props.title}
        </Text>

      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  MyCounter:state.counter
})

export default connect(mapStateToProps)(SettingItem);
