import { get, isEmpty } from './helpers';

export function getUserId(user = {}) {
  let userId = get(user, '_id');

  if (!userId) {
    userId = get(user, 'id');
  }

  return userId;
}

export function isUserMatchById(sourceUser = {}, targetUser = {}) {
  return getUserId(sourceUser) === getUserId(targetUser); 
}

export function isValidUser(user) {
  return isEmpty(getUserId(user)) === false;
}
