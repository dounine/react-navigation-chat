import React from 'react';
import {View,Button,ActivityIndicator,Text,DeviceEventEmitter} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {onChange,fetchUserRequest} from "../../../actions";

class Messages extends React.Component{

    render() {
        const {value,fetchUserLoading,changeValue,fetchUserId} = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {fetchUserLoading && <ActivityIndicator color={'blue'} animating size="small" />}
                <Text>hello {value}</Text>
                <Button title={"changeValue"} onPress={()=>{changeValue('messages')}}></Button>
                <Button title={"fetchUserId"} onPress={()=>{fetchUserId('dounine')}}></Button>
                <Button title={"open Chat conversation"} onPress={()=>{this.props.navigation.navigate('ChatConversation')}}></Button>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (value) => dispatch(onChange(value)),
        fetchUserId: (value) => dispatch(fetchUserRequest(value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Messages);