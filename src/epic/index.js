import 'rxjs';
import { Observable } from 'rxjs/Observable'
import {queryUser} from '../api';
import {fetchUserSuccess,fetchUserFailed} from '../actions';

const fetchUserEpic = action$ =>
    action$.ofType("USER_FETCH_REQUEST")
        .mergeMap(action =>
            Observable.fromPromise(queryUser(action.username))
                .map(response => fetchUserSuccess(response.data))
                .catch(error => Observable.of(fetchUserFailed(error)))
        )

export default fetchUserEpic;