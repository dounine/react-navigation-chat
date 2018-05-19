import React from 'react';
import {createBottomTabNavigator,StackNavigator} from 'react-navigation';
import ChatScreen from "../tabs/ChatScreen";
import HomeScreen from "../tabs/HomeScreen";
import IYouIcon from "../../icon/IYouIcon";

export default createBottomTabNavigator(
    {
        Chat: ChatScreen,
        Mine: HomeScreen
    },{
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName = routeName.toLowerCase();
                return <IYouIcon name={iconName} size={25} color={tintColor} />;
            },
        }),
    }
);