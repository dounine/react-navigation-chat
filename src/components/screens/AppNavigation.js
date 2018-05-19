import {StackNavigator} from "react-navigation";
import addNavigationHelpers from "react-navigation";
import {connect} from 'react-redux';
import React from 'react';
import TabScreen from './TabScreen';
import AuthScreen from "./AuthScreen";
import {addListener} from '../../utils/redux';
import MessageStacks from "../tabs/ChatStacks";


export const AppNavigator = StackNavigator({
    Main:TabScreen,
    Auth:AuthScreen
},{
    initialRouteName:'Main',
    navigationOptions:{
        header:null,
    }
});
class AppWithNavigationState extends React.Component {
    static router = AppNavigator.router;
    render() {
        const { dispatch, nav } = this.props;
        return (
            <AppNavigator
                navigation={{
                    dispatch,
                    state: nav,
                    addListener,
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);