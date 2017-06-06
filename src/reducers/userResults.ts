import * as github from '../actions/index';

export interface User {
  id: string;
  login: string;
}

export type State = Array<User>;

const initialState: State = [];

export default function userResults(state: State = initialState, action: github.Actions) {
  switch (action.type) {
    case github.RECEIVED_USERS:
      return action.payload.users;
    case github.CLEARED_SEARCH_RESULTS:
      return initialState;
    default:
      return state;
  }
}
