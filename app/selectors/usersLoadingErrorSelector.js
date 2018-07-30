import { createSelector } from 'reselect';

export const usersLoadingErrorSelector = createSelector(
  state => state.users.fetch.error,
  (error = null) => error
);
