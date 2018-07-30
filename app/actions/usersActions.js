import { USERS } from '../actions/actionTypes';
import { makeActionCreator } from '../utils';

export const loadingUsersBegin = makeActionCreator(USERS.LOADING_BEGIN);
export const loadingUsersComplete = makeActionCreator(USERS.LOADING_COMPLETE);
export const createUsers = makeActionCreator(USERS.CREATE_BEGIN, 'user');
export const createUsersSuccess = makeActionCreator(USERS.CREATE_SUCCESS, 'user');
export const getUsers = makeActionCreator(USERS.GET_BEGIN);
export const getUsersSuccess = makeActionCreator(USERS.GET_SUCCESS, 'users');
export const deleteUsers = makeActionCreator(USERS.DELETE_BEGIN, 'user');
export const deleteUsersSuccess = makeActionCreator(USERS.DELETE_SUCCESS, 'user');
export const selectUser = makeActionCreator(USERS.SELECT_BEGIN, 'user');
export const selectUserSuccess = makeActionCreator(USERS.SELECT_SUCCESS, 'user');
export const updateUsers = makeActionCreator(USERS.UPDATE_BEGIN, 'user');
export const updateUsersSuccess = makeActionCreator(USERS.UPDATE_SUCCESS, 'user');
