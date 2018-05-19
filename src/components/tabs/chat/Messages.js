import React from 'react';
import {View,StatusBar,Platform,Button,ActivityIndicator,Text,DeviceEventEmitter} from 'react-native';
import {NavigationActions,SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import {onChange,fetchUserRequest} from "../../../actions";
import Colors from "../../../cons/Colors";
import ChatConversation from "./ChatConversation";
class Messages extends React.Component{

    static navigationOptions = ({navigation, screenProps}) => ({
        header: (
            <SafeAreaView style={{
                height: 44,
                borderBottomColor: Colors.statusBarBorderBottomColor,
                borderBottomWidth: Colors.statusBarBorderBottomWidth,
                backgroundColor: Colors.statusBarBgColor,
            }}>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            width: '20%'
                        }}
                    >

                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection:'row',
                            alignItems: 'center'
                        }}
                    >
                        <View style={{width:'24%',alignItems:'flex-end',marginRight:6,}}>
                            {
                                navigation.state.params.connect && <ActivityIndicator color={'#FFF'} animating size="small" />
                            }
                        </View>
                        <Text
                            numberOfLines={1}
                            style={{
                                width: '50%',
                                textAlign: 'center',
                                fontWeight: '600',
                                color: '#FFFFFF',
                                fontSize: 18,
                            }}
                        >
                            {(!navigation.state.params || navigation.state.params&&navigation.state.params.connect)?'Connecting...':'IYou'}
                            </Text>
                    </View>
                    <View
                        style={{
                            width: '20%',
                            alignItems: 'flex-end',
                        }}
                    >

                    </View>
                </View>
            </SafeAreaView>
        )
    });

    render() {
        const {value,fetchUserLoading,changeConnect,openChatConversation,changeValue,fetchUserId} = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {fetchUserLoading && <ActivityIndicator color={'blue'} animating size="small" />}
                <Text>hello {value}</Text>
                <Button title="changeValue" onPress={()=>{changeValue('messages')}}></Button>
                <Button title="fetchUserId" onPress={()=>{fetchUserId('dounine')}}></Button>
                <Button title="open Chat conversation" onPress={openChatConversation}></Button>
                <Button title="change connect" onPress={()=>changeConnect(true)}></Button>
                <Button title="change disconnect" onPress={()=>changeConnect(false)}></Button>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.main,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (value) => dispatch(onChange(value)),
        fetchUserId: (value) => dispatch(fetchUserRequest(value)),
        openChatConversation: () => dispatch(NavigationActions.navigate({routeName:'ChatConversation',params:{nickName:'lake'}})),
        changeConnect: (connect) => dispatch(NavigationActions.navigate({routeName:'Messages',params:{connect}})),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Messages);