import { createSelector } from 'reselect';

export const usersLoadingSelector = createSelector(
  state => state.users.fetch.loading,
  (loading = false) => loading
);
