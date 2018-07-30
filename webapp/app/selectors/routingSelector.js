import { createSelector } from 'reselect';

export const routingSelector = createSelector(
  state => state.routing,
  (routing = {}) => routing
);
