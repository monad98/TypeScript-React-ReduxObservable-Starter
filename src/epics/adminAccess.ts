import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import * as github from '../actions/index';
import { accessDenied } from '../actions';
import {Action} from './index';
import {ActionsObservable} from 'redux-observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/timer';

export default function adminAccess(action$: ActionsObservable<Action>) {
  return action$.ofType(github.CHECKED_ADMIN_ACCESS)
    // If you wanted to do an actual access check you
    // could do so here then filter by failed checks.
    .delay(2000)
    .mergeMap(() => Observable.merge(
      Observable.of(accessDenied()),
      Observable.timer(2000)
        .map(() => push('/'))
    ));
}
