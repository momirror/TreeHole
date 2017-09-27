import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

class ContactItem extends React.Component {

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>

    );
  }

}

module.exports = ContactItem;
