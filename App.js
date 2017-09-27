import  React from 'react';
import {Component} from 'react';
import {APPNavigator} from './Tab';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

class App extends  Component{
  constructor(props) {
    super(props);
    
  }
  
  render(){
    return(
      <Provider store = {store}>
      <APPNavigator></APPNavigator>
      </Provider>
    );
  }
}




AppRegistry.registerComponent('TreeHole', () => App);


