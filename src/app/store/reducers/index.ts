import { ActionReducerMap, createFeatureSelector, createSelector, State } from '@ngrx/store';
 import * as fromUser from './student.reducer'

export interface RootReducer{
    users : fromUser.userReducerState
}

export const rootReducer : ActionReducerMap<RootReducer>={
    users : fromUser.userReducer
}

export const getUserState = createFeatureSelector<RootReducer>('users');

export const getUserLoaded = createSelector(getUserState,fromUser.getLoaded);
export const getUserLoading = createSelector(getUserState,fromUser.getLoading);
export const getUsers = createSelector(getUserState,fromUser.getUsers);
export const getUserError = createSelector(getUserState,fromUser.getError);




