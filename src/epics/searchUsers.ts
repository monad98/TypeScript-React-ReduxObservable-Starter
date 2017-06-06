import * as github from '../actions/index';
import { receiveUsers } from '../actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import {ActionsObservable} from 'redux-observable';
import {Action} from './index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

export default function searchUsers(action$: ActionsObservable<Action>) {
  return action$.ofType(github.SEARCHED_USERS)
    .map(action => action.payload)
    .filter(q => !!q)
    .debounceTime(600)
    .switchMap(q =>
      ajax.getJSON(`https://api.github.com/search/users?q=${q}`)
        .map((res: any) => res.items)
        .map(receiveUsers)
    );
};
