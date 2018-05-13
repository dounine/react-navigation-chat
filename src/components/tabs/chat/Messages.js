import React from 'react';
import {View,Button,Text,DeviceEventEmitter} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {onChange} from "../../../actions";

class Messages extends React.Component{

    render() {
        const {value,changeValue} = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>hello {value}</Text>
                <Button title={"onChange"} onPress={()=>{changeValue('messages')}}></Button>
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
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Messages);