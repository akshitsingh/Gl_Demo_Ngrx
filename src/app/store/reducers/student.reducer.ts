 import { USER_ADD, USER_DELETE, USER_EDIT } from './../actions/student.action';
import { USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_ERROR } from '../actions/student.action';
import { Action } from '../actions/index';
import { StudentModel } from "src/app/models/student.model";
import { State } from '@ngrx/store';

export interface userReducerState{
    loading : boolean,
    loaded : boolean,
    users : any,
    error : boolean
}

const initialState : userReducerState={
    loaded : false,
    loading : false,
    users : [],
    error : false
}

export function userReducer(state=initialState,action:Action):userReducerState{
  switch(action.type){
    case USER_LIST_REQUEST:{
        return {...state,loading:true}
    }
    case USER_LIST_ERROR:{
        return {...state,error:true,loading:false}
    }
    case USER_LIST_SUCCESS:{
        const data = state.users.concat(action.payload.data)
        return {...state,loading:false,loaded : true,users:data,error:false}
    }
    case USER_ADD:{
        const data = state.users.concat(action.payload.data)
        return {...state,users:data,error:false}
    }
    case USER_EDIT:{
        const updatedUser = state.users.map(
            user => action.payload.data._id === user._id ? action.payload.data : user);
            return {
              ...state,
              users: updatedUser
            
             };
    }
    case USER_DELETE:{
        const users = state.users.filter(item=>item._id!=action.payload.id)
        return {
            ...state,
            users
        }
    }
    default : {
       return state;
    }
  }
}

//selectors

export const getLoading = (State:userReducerState)=>  State.loading;
export const getLoaded = (State:userReducerState)=>  State.loaded;
export const getUsers = (State:userReducerState)=>  State.users;
export const getError = (State:userReducerState)=>  State.error;


