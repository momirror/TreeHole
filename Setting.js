import React from 'react';
import {Text, View, Image, StyleSheet,FlatList} from 'react-native';
import Verify from './Verify';
import SettingItem from './SettingItem';
import {SettingScreenStyles} from './Styles';

export default class SettingScreen extends React.Component {

  constructor(props){
    super(props);
    this.data =  [{'key':'用户ID'},{'key':'我的树坑'},{'key':'我的回复'}];
  }

_seperator = ()=> {
  return <Text style={{height:0.5,backgroundColor:'grey'}}></Text>
}


 selectRow = (item,index)=> {
   const {navigate} = this.props.navigation;

   switch (index) {
     case 0:
        navigate('NameScreen');
        break;
     case 3:
       navigate('Verify',{title:item.key});
       break;
     default:

   }

   if(index == 3) {
     navigate('Verify',{title:item.key});
   }


   console.log('this.props :'+item.key+ 'index :'+index);

 }

 _keyExtractor = (item, index) => index;

  render() {
    return (<View style={SettingScreenStyles.container}>
      <FlatList style={SettingScreenStyles.list} data={this.data}
        renderItem={({item,index}) =><SettingItem title={item.key}></SettingItem>}
        ItemSeparatorComponent = {this._seperator}
        keyExtractor = {this._keyExtractor}
        ></FlatList>
    </View>);


  }
}

var styles = StyleSheet.create({
    img:{
      width:100,
      height:50,
    },
    container:{
      flex:1,
      paddingTop:22,
    },

    item:{
      padding: 10,
      fontSize: 18,
      height:44,
      backgroundColor:'white',
    }
});
