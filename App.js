import React from 'react';
import {Component} from 'react';
import {APPNavigator} from './Tab';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import CodePush from "react-native-code-push";

class App extends Component {
    constructor(props) {
        super(props);

    }

    //code-push更新
    componentDidMount() {
        this.sync();
    }

    sync() {
        CodePush.sync(
            {
                installMode: CodePush.InstallMode.IMMEDIATE,
                updateDialog: {

                    appendReleaseDescription: true,//是否显示更新description，默认为false

                    descriptionPrefix: "更新内容：",//更新说明的前缀。 默认是” Description:

                    mandatoryContinueButtonLabel: "立即更新",//强制更新的按钮文字，默认为continue

                    mandatoryUpdateMessage: "",//- 强制更新时，更新通知. Defaults to “An update is available that must be installed.”.

                    optionalIgnoreButtonLabel: '稍后',//非强制更新时，取消按钮文字,默认是ignore

                    optionalInstallButtonLabel: '后台更新',//非强制更新时，确认文字. Defaults to “Install”

                    optionalUpdateMessage: '有新版本了，是否更新？',//非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.

                    title: '更新提示'//要显示的更新通知的标题. Defaults to “Update available”.

                },

            },
        );
    }

    render() {
        return (
            <Provider store={store}>
                <APPNavigator></APPNavigator>
            </Provider>
        );
    }
}

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME};
App = CodePush(codePushOptions)(App);

AppRegistry.registerComponent('TreeHole', () => App);


