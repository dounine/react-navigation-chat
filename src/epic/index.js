import {Observable} from 'rxjs/Rx';
import {queryUser} from '../api';
import {fetchUserSuccess,fetchUserFailed} from '../actions';

const fetchUserEpic = action$ => action$.ofType("USER_FETCH_REQUEST").mergeMap(action => Observable.fromPromise(queryUser(action.username)).map(response => fetchUserSuccess(response.data)).catch(error => of(fetchUserFailed(error))));

export default fetchUserEpic;