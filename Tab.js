import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from "react-navigation";
import SettingScreen from './Setting';
import SecretsScreen from './SecretsScreen';
import MySecretScreen from './MySecretScreen';
import Verify from './Verify';
import NameScreen from './NameScreen';
// import './TestNavScreen';

const MainScreenNavigator = TabNavigator({
  SecretCamp: {
    screen: SecretsScreen,
    navigationOptions: {
      headerTitle: "秘密大森林",
      tabBarLabel: '秘密营',
      tabBarIcon: ({tintColor}) => (<Image source={require('./img/tab/1.png')} style={[styles.icon]}/>)
    }
  },
  MySecret: {
    screen: MySecretScreen,
    navigationOptions: {
      headerTitle:'小秘密',
      tabBarLabel: '我的消息',
      tabBarIcon: ({tintColor}) => (<Image source={require('./img/tab/3.png')} style={[styles.icon]}/>)
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      headerTitle:'设置',
      tabBarLabel: '设置',
      tabBarIcon: ({tintColor}) => (<Image source={require('./img/tab/4.png')} style={[styles.icon]}/>)
    }
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,

  tabBarOptions: {
    style: {
      height: 59
    },
    showIcon: true,
    // activeBackgroundColor:'white',
    // activeTintColor:'#FF0000',
    // inactiveBackgroundColor:'white',
    // inactiveTintColor:'#aaa',
    // showLabel:false,
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const APPNavigator = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions:{
      titleStyle: {
        alignSelf: 'center'
      },
    },
  },
  Verify:{
    screen:Verify,
  },
  NameScreen:{
    screen:NameScreen,
  }
});

var styles = StyleSheet.create({
  icon: {
    height: 22,
    width: 22,
    resizeMode: 'contain'
  }
});



export {APPNavigator};
