import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import {Provider,connect} from 'react-redux';
import reduxLogger from 'redux-logger';
import reducers from './src/reducers';
import AppNavigation from './src/components/screens/AppNavigation';
// import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
// import fetchUserEpic from './src/epic';
// const epicMiddleware = createEpicMiddleware(fetchUserEpic);
import mySaga from './src/sagas'


const store = createStore(reducers,applyMiddleware(reduxLogger,sagaMiddleware));

const AppWithNavigationState = connect()(AppNavigation);
sagaMiddleware.run(mySaga)
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
