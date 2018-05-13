import React from 'react';
import {View, Animated, Button, Text, DeviceEventEmitter} from 'react-native';

export default class ChatConversation extends React.Component{

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Chat conversation!</Text>
            </View>
        );
    }
}