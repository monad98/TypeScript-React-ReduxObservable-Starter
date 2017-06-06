import * as github from '../actions/index';

export interface Repo {
  id: string;
  html_url: string;
  full_name: string;
}

export interface ReposObject {
  [user: string]: Repo[];
}

export default function reposByUser(state: ReposObject = {}, action: github.Actions) {
  switch (action.type) {
    case github.REQUESTED_USER_REPOS:
      return Object.assign({}, state, {
        [action.payload.user]: undefined
      });
    case github.RECEIVED_USER_REPOS:
      return Object.assign({}, state, {
        [action.payload.user]: action.payload.repos
      });
    default:
      return state;
  }
}
