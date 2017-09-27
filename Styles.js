import {StyleSheet} from 'react-native';

var SettingScreenStyles = StyleSheet.create({

  container:{
    backgroundColor:'white',
  },
  list:{
    backgroundColor:'white',
  },

  input:{
    color:'red',
    fontSize:24,
  },

  settingItemContainer:{
    // flex:1,
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'stretch',
  },

  setttingItemTitle:{
    marginTop:10,
    marginBottom:10,
    marginLeft:20,
  },

  settingItemImg:{
      width:30,
      height:30,
      backgroundColor:'green',
  },

});

var SecretsScreenStyle = StyleSheet.create({
  container:{
    flexDirection:'column',
  },
  header:{
    flexDirection:'row',
    marginTop:10,

  },
  thumb:{
    width:20,
    height:20,
    borderRadius:15,
    backgroundColor:'green',

  },
  title:{
    alignItems:'center',
    marginLeft:5,
  },
  content:{
    marginTop:10,
    marginBottom:10,
    lineHeight:20,
    paddingLeft:5,
    paddingRight:5,
  }
});

var MySecretScreenStyle = StyleSheet.create({

  container:{
    
  },

  list:{
    backgroundColor:'white',
  },
  
  input:{
    marginLeft:20,
    marginRight:20,
    marginTop:15,
    height:150,
    backgroundColor:'white',
    borderWidth:1,
    borderRadius:5,
    borderColor:'white',
  },
  
  button:{
    marginTop:115,
    backgroundColor:'red',
  },

});

export {SettingScreenStyles,MySecretScreenStyle,SecretsScreenStyle};
