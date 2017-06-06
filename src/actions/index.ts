import {User} from '../reducers/userResults';
import {Repo} from '../reducers/reposByUser';

export const SEARCHED_USERS = 'SEARCHED_USERS';
export type SEARCHED_USERS = typeof SEARCHED_USERS;

export const RECEIVED_USERS = 'RECEIVED_USERS';
export type RECEIVED_USERS = typeof RECEIVED_USERS;

export const CLEARED_SEARCH_RESULTS = 'CLEARED_SEARCH_RESULTS';
export type CLEARED_SEARCH_RESULTS = typeof CLEARED_SEARCH_RESULTS;

export const REQUESTED_USER_REPOS = 'REQUESTED_USER_REPOS';
export type REQUESTED_USER_REPOS = typeof REQUESTED_USER_REPOS;

export const RECEIVED_USER_REPOS = 'RECEIVED_USER_REPOS';
export type RECEIVED_USER_REPOS = typeof RECEIVED_USER_REPOS;

export const CHECKED_ADMIN_ACCESS = 'CHECKED_ADMIN_ACCESS';
export type CHECKED_ADMIN_ACCESS = typeof CHECKED_ADMIN_ACCESS;

export const ACCESS_DENIED = 'ACCESS_DENIED';
export type ACCESS_DENIED = typeof ACCESS_DENIED;

export interface SearchUsers {
  type: typeof SEARCHED_USERS;
  payload: string;
}
export function searchUsers(query: string): SearchUsers {
  return {
    type: SEARCHED_USERS,
    payload: query
  };
}

export interface ReceiveUsers {
  type: typeof RECEIVED_USERS;
  payload: {
    users: User[],
    repos: Repo[]
  };
}
export function receiveUsers(users: User[]) {
  return {
    type: RECEIVED_USERS,
    payload: {
      users
    }
  };
}

export interface ClearSearchResults {
  type: typeof CLEARED_SEARCH_RESULTS;
}
export function clearSearchResults () {
  return {
    type: CLEARED_SEARCH_RESULTS,
  };
}

export interface RequestReposByUser {
  type: typeof REQUESTED_USER_REPOS;
  payload: {
    user: string
  };
}
export function requestReposByUser (user: string) {
  return {
    type: REQUESTED_USER_REPOS,
    payload: {
      user
    }
  };
}

export interface ReceiveUserRepos {
  type: typeof RECEIVED_USER_REPOS;
  payload: {
    user: string,
    repos: Repo[]
  };
}
export function receiveUserRepos(user: string, repos: Repo[]) { // (user, repos)
  return {
    type: RECEIVED_USER_REPOS,
    payload: { user, repos }
  };
}

export interface CheckAdminAccess {
  type: typeof CHECKED_ADMIN_ACCESS;
}
export function checkAdminAccess () {
  return {
    type: CHECKED_ADMIN_ACCESS
  };
}

export interface AccessDenied {
  type: typeof ACCESS_DENIED;
}
export function accessDenied () {
  return {
    type: ACCESS_DENIED
  };
}

export type Actions
  = SearchUsers
  | ReceiveUsers
  | ClearSearchResults
  | RequestReposByUser
  | ReceiveUserRepos
  | CheckAdminAccess
  | AccessDenied;