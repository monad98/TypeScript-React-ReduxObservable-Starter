import { Observable } from 'rxjs/Observable';
// import { replace } from 'react-router-redux';
import * as ActionTypes from '../actionTypes';
// import { receiveUsers } from '../actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import {ActionsObservable} from "redux-observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import {loadArticles} from "../actions/index";
interface Action {
  type: string,
  payload: any
}
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const authKey = "d8966fd97abd46028557596c31b5fd0e";

export const fetchArticles = (action$: ActionsObservable<Action>) => {
  return action$
    .ofType(ActionTypes.FETCH_ARTICLES)
    .map(action => action.payload)
    .filter(query => !!query)
    .switchMap(query =>
          ajax.getJSON(`${queryURLBase}api-key=${authKey}&q=${query.qs}&begin_date=${query.startDate}0101&end_date=${query.endDate}1231`)
            .map((res: any) => res.response.docs)
            .map(loadArticles)
    );
};

// export function fetchArticles (query) {
//   return dispatch => {
//     dispatch(requestArticles(query.qs));
//     const url = `${queryURLBase}api-key=${authKey}&q=${query.qs}&begin_date=${query.startDate}0101&end_date=${query.endDate}1231`;
//     fetch(url)
//       .then(data => data.json())
//       .then(res => {
//         const articles = res.response.docs;
//         return dispatch(loadArticles(articles));
//       })
//       .catch(function(e) {
//         console.log('parsing failed', e)
//       })
//   }
// }