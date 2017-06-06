import { combineEpics } from 'redux-observable';
import searchUsers from './searchUsers';
import clearSearchResults from './clearSearchResults';
import fetchReposByUser from './fetchReposByUser';
import adminAccess from './adminAccess';

export interface Action {
  type: string;
  payload: any;
}

export default combineEpics(
  searchUsers,
  clearSearchResults,
  fetchReposByUser,
  adminAccess
);
