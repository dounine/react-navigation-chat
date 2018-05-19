import React from 'react';
import {View, Animated, Button, Text, DeviceEventEmitter} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import IYouIcon from "../../../icon/IYouIcon";
import Colors from "../../../cons/Colors";

export default class ChatConversation extends React.Component{

    static navigationOptions = ({navigation, screenProps}) => ({
        headerTintColor: Colors.statusBarTextColor,
        title:navigation.state.params.nickName,
        headerStyle: {
            backgroundColor: Colors.statusBarBgColor,
            borderWidth: Colors.statusBarBorderBottomWidth,
            borderBottomColor: Colors.statusBarBorderBottomColor
        },
    });


    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Chat conversation!</Text>
                <IYouIcon name="voice" size={30} color="blue" />
            </SafeAreaView>
        );
    }
}