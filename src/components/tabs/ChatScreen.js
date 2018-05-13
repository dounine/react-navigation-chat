import React from 'react';
import MessageStacks from './ChatStacks';


export default class AuthenticationScreen extends React.Component {
    static router = MessageStacks.router;

    static navigationOptions = ({navigation}) => ({
        tabBarVisible: navigation.state.routes.slice(-1)[0].routeName==='Messages'
    });

    render() {
        return (
            <MessageStacks navigation={this.props.navigation} />
        );
    }
}