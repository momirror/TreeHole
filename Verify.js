import React from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';

export default class Verify extends React.Component {

  constructor(props){
    super(props);
    this.state = {test:true};

    // setInterval(()=>{
    //   this.setState(previousState=>{
    //     // console.log("this.name "+this.name);
    //     // console.log("this.addr "+this.addr);
    //     return {test:!this.state.test};
    //   });
    // },1000);
  }

  // getDefaultProps(){
  //
  // }

  componentWillMount() {
    console.log('-----------------------' +
      'componentWillMount');
  }

  componentDidMount() {
    console.log('-----------------------' +
      'componentDidMount');
  }

  componentWillUpdate() {
    console.log('-----------------------' +
      'componentWillUpdate');
  }

  // getInitialState(){
  //
  // }

  componentWillReceiveProps() {
    console.log('-----------------------' +
      'componentWillReceiveProps');
  }

  shouldComponentUpdate() {

    console.log('-----------------------' +
      'shoudComponentUpdate');
      return true;
  }

  componentDidUpdate() {
    console.log('-----------------------' +
      'componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('-----------------------' +
      'componentWillUnmount');
  }

  render() {
    console.log('-----------------------' +
      'render');
    return <Text>实名验证</Text>
  }
}

// module.exports = Verify;
