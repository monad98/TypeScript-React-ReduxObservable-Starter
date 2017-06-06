import * as github from '../actions/index';

const DENIED = 'DENIED';

export default function adminAccess(state: string | null = null, action: github.Actions) {
  switch (action.type) {
    case github.ACCESS_DENIED:
      return DENIED;
    default:
      return state;
  }
}
