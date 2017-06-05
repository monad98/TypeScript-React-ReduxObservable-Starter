/**
 * Created by monad on 6/3/17.
 */
import { combineEpics } from 'redux-observable';
import searchUsers from './searchUsers';
import clearSearchResults from './clearSearchResults';
import fetchReposByUser from './fetchReposByUser';
import adminAccess from './adminAccess';

export default combineEpics(
  searchUsers,
  clearSearchResults,
  fetchReposByUser,
  adminAccess
);
