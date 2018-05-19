import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigation from './src/components/screens/AppNavigation';
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from './src/store/persistor';
const {store,persistor} = configureStore();


console.disableYellowBox = true;

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppNavigation/>
                </PersistGate>
            </Provider>
        );
    }
}
