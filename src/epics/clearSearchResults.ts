import * as github from '../actions/index';
import { clearSearchResults } from '../actions';
import {Action} from './index';
import {ActionsObservable} from 'redux-observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export default (action$: ActionsObservable<Action>) =>
  action$.ofType(github.SEARCHED_USERS)
    .filter(action => !action.payload)
    .map(clearSearchResults);