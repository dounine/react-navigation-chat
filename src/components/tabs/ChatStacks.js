import React from 'react';
import {
    createStackNavigator,
} from 'react-navigation';
import Messages from './chat/Messages';
import ChatConversation from './chat/ChatConversation';

export default createStackNavigator({
    Messages,
    ChatConversation
},{
    initialRouteParams:{
        connect:true
    }
});
