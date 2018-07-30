import { createSelector } from 'reselect';

export const selectedUserSelector = createSelector(
  state => state.users.selectedUser,
  (user = {}) => user
);
