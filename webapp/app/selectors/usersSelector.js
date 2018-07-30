import { createSelector } from 'reselect';

export const usersSelector = createSelector(
  state => state.users.data,
  (users = []) => users
);
