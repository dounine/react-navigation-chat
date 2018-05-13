import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import {Provider,connect} from 'react-redux';
import reduxLogger from 'redux-logger';
import reducers from './src/reducers';
import AppNavigation from './src/components/screens/AppNavigation';


const store = createStore(reducers,applyMiddleware(reduxLogger));

const AppWithNavigationState = connect()(AppNavigation);

console.disableYellowBox = true;

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
        <Provider store={store}>
            <AppWithNavigationState/>
        </Provider>
    );
  }
}
