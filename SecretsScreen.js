import React from 'react';
import {Text, View, Image, StyleSheet, Button, TextInput, FlatList} from 'react-native';
import {NativeEventEmitter, NativeModules, Animated} from 'react-native';
import {connect} from 'react-redux';
import {noRefreshSecrets} from './actions/actions';
import SecretItem from './SecretItem';
import {MySecretScreenStyle} from './Styles';

class SecretsScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secrets: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetchSecrets();
  }


  //获取secrets数据
  fetchSecrets = async () => {


    if(this.state.refreshing){
      return;
    }

    this.setState(previousState => {

      return {
        refreshing:true};
    });


    console.log('fetchSecrets.......');

    var url = 'http://192.168.1.104:3000/secrets';
    let response = await fetch(url);
    let data = await response.json();

    this.setState(previousState => {
      return {secrets: data,
        refreshing:false};
    });

//    console.log(data);
  }

  //列表分割线
  seperator = () => {
    return <Text style={{height: 15, backgroundColor: '#F0F0F0'}}></Text>
  }

  keyExtractor = (item, index) => index;

  _pullDownToGetData = (e) => {
    console.log('=========='+e);
    if(this.state.secrets == null){
      alert('refresh failed')
      return;
    }
    this.fetchSecrets();

  }


  componentWillReceiveProps(nextProps){
    console.log('&&&&&&&&'+nextProps+ '  '+this.props.counter.refreshSecrets);
    if(nextProps.counter.refreshSecrets) {
      this.props.dispatch(noRefreshSecrets());
      this.fetchSecrets();
    }
  }

  render() {

    const {navigate} = this.props.navigation;

    return (
      <View>
        <Text>code push 测试1</Text>
        <FlatList refreshing={this.state.refreshing} onRefresh={this._pullDownToGetData}
                  onEndReachedThreshold={0.000000001} onEndReached={this._pullDownToGetData}
                  style={MySecretScreenStyle.list} data={this.state.secrets}
                  renderItem={({item, index}) => <SecretItem id={item.id} content={item.content}></SecretItem>}
                  ItemSeparatorComponent={this.seperator}
                  keyExtractor={this.keyExtractor}
        ></FlatList>
      </View>
    );
  }
}


//一定要进行redux和componet的绑定，否则this.props.dispatch等相关方法无法调用。

const mapStateToProps = state => ({
  counter: state.counter //key 将会绑定到this.props中,值是在reducer中定义的回调函数 。
})

export default connect(mapStateToProps)(SecretsScreen);
