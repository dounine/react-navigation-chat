import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {fetchUserSuccess,fetchUserFailed} from '../actions';

function* fetchUser(action) {
    try {
        let queryUser = function (name) {
            return axios.get('https://api.github.com/search/users?q='+name)
        };
        const response = yield call(queryUser,action.username);
        yield put(fetchUserSuccess(response.data));
    } catch (e) {
        yield put(fetchUserFailed(e.message));
    }
}

export default function* mySaga() {
    yield takeEvery("USER_FETCH_REQUEST", fetchUser);//消息监听
}


// function* mySaga() {
//     yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }
