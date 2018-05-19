import {AsyncStorage} from 'react-native'
import {applyMiddleware, createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import reduxLogger from 'redux-logger'
import {createEpicMiddleware} from 'redux-observable';
import fetchUserEpic from '../epic/index';
import {middleware} from '../utils/redux';

const epicMiddleware = createEpicMiddleware(fetchUserEpic);
import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux';
import AppNavigation from '../components/screens/AppNavigation';
const router = AppNavigation.router;
const mainNavAction = router.getActionForPathAndParams('Main');
const initialNavState = router.getStateForAction(mainNavAction);

const navReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state);
};
const initialAuthState = { isLoggedIn: false };
function auth(state = initialAuthState, action) {
    switch (action.type) {
        case 'Login':
            return { ...state, isLoggedIn: true };
        case 'Logout':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}
const AppReducer = combineReducers({
    nav:navReducer,
    auth,
    main:rootReducer
});
import rootReducer from '../reducers/index'

const persistConfig = {
    key:'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, AppReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(reduxLogger,epicMiddleware));
    let persistor = persistStore(store);
    return {store, persistor}
}
