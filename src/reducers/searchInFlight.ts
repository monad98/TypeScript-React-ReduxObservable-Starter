import * as github from '../actions/index';

export default function searchInFlight(state: boolean = false, action: github.Actions) {
  switch (action.type) {
    case github.SEARCHED_USERS:
      return true;
    case github.RECEIVED_USERS:
    case github.CLEARED_SEARCH_RESULTS:
      return false;
    default:
      return state;
  }
}
