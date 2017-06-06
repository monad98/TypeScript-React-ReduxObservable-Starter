import { ajax } from 'rxjs/observable/dom/ajax';
import * as github from '../actions/index';
import { receiveUserRepos } from '../actions';
import {Action} from './index';
import {ActionsObservable} from 'redux-observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

export default function fetchReposByUser(action$: ActionsObservable<Action>) {
  return action$.ofType(github.REQUESTED_USER_REPOS)
    .map(action => action.payload.user)
    .switchMap(user =>
      ajax.getJSON(`https://api.github.com/users/${user}/repos`)
        .map(receiveUserRepos.bind(null, user))
    );
}
