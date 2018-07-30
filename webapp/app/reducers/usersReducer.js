import { USERS } from '../actions/actionTypes';
import { getUserId } from '../utils';
import { createReducer } from '../utils';
import initialState from './initialState';

export const users = createReducer(initialState.users, {
  [USERS.GET_SUCCESS](state, { users }) {
    return {
      ...state,
      data: users,
      selectedUser: {}
    };
  },
  [USERS.CREATE_SUCCESS](state, { user }) {
    return {
      ...state,
      data: [
        user,
        ...state.data
      ]
    };
  },
  [USERS.DELETE_SUCCESS](state, { user }) {
    return {
      ...state,
      data: state.data.filter(sourceUser => getUserId(user) !== getUserId(sourceUser)),
      selectedUser: {}
    };
  },
  [USERS.UPDATE_SUCCESS](state, { user }) {
    return {
      ...state,
      data: [
        user,
        ...state.data.filter(sourceUser => getUserId(user) !== getUserId(sourceUser))
      ],
      selectedUser: {}
    };
  },
  [USERS.SELECT_SUCCESS](state, { user }) {
    return {
      ...state,
      selectedUser: user
    };
  },
  [USERS.LOADING_BEGIN](state) {
    return {
      ...state,
      fetch: {
        loading: true,
        error: null
      }
    };
  },
  [USERS.LOADING_COMPLETE](state) {
    return {
      ...state,
      fetch: {
        loading: false,
        error: null
      }
    };
  },
  [USERS.LOADING_FAILED](state, { error }) {
    return {
      ...state,
      fetch: {
        loading: false,
        error: error
      }
    };
  }
});
