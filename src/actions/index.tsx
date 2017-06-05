
import * as ActionTypes from '../actionTypes';

export interface IncrementEnthusiasm {
    type: ActionTypes.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: ActionTypes.DECREMENT_ENTHUSIASM;
}


export interface QueryObject {
    qs: string;
    startDate: string;
    endDate: string;
}


export interface FetchArticles {
    type: ActionTypes.FETCH_ARTICLES;
    payload: QueryObject
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: ActionTypes.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: ActionTypes.DECREMENT_ENTHUSIASM
    };
}


export function fetchArticles(query: QueryObject): FetchArticles {
    return {
        type: ActionTypes.FETCH_ARTICLES,
        payload: query
    };
}

export function loadArticles(articles: any): FetchArticles {
    return {
        type: ActionTypes.FETCH_ARTICLES,
        payload: articles
    };
}