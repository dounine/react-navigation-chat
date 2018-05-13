import React from 'react';
import {createBottomTabNavigator,StackNavigator} from 'react-navigation';
import ChatScreen from "../tabs/ChatScreen";
import HomeScreen from "../tabs/HomeScreen";

export default createBottomTabNavigator(
    {
        Chat: ChatScreen,
        Home: HomeScreen
    }
);