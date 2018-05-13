import {StackNavigator} from "react-navigation";
import React from 'react';
import TabScreen from './TabScreen';
import AuthScreen from "./AuthScreen";


export default StackNavigator({
    Main:TabScreen,
    Auth:AuthScreen
},{
    initialRouteName:'Main',
    navigationOptions:{
        header:null,
    }
})