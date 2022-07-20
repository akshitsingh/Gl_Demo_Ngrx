 import { UserAdd, UserDelete, UserEdit, UserListErrorAction, UserListRequestAction, UserListSuccessAction, USER_ADD, USER_DELETE, USER_EDIT } from './../actions/student.action';
import { USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_ERROR } from '../actions/student.action';
import { Action, createReducer, on, props } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

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

// export interface State extends EntityState<userReducerState>{

// }

// export const studentAdapter:EntityAdapter<userReducerState> = createEntityAdapter<userReducerState>({});

// const initialState : userReducerState = studentAdapter.getInitialState({
//     loading : false,
//     loaded : false,
//     error : false,
//     selectedUserId: null,
// })
   
//  const _userReducer = createReducer(initialState,
//     on(UserListRequestAction,(state)=> ( {...state,loading:true})),
//     on(UserListSuccessAction, (state, {user} ) => {
//         return studentAdapter.addOne(user, state)
//       }),
//     )

 const _userReducer = createReducer(initialState,
    on(UserListRequestAction,(state)=> ( {...state,loading:true})),
    on(UserListSuccessAction,(state,{user})=> {
        const data = state.users.concat(user)
         console.log("State",user)
         return {...state,loading:false,loaded : true,users:data,error:false}
    }),
    on(UserListErrorAction,(state)=>{
        return {...state,error:true,loading:false}
    }),
    on(UserAdd,(state,props)=>{
        const data = state.users.concat(props.payload.data);
        return {...state,users:data,error:false}
    }),
    on(UserEdit,(state,props)=>{
        const updatedUser = state.users.map(
                        user => props.payload.data._id === user._id ? props.payload.data : user);
                        return {
                          ...state,
                          users: updatedUser
                        
                         };
    }),
    on(UserDelete,(state,{id})=>{
        const users = state.users.filter(item=>item._id!= id)
                return {
                    ...state,
                    users
                }
    })
    );


    export function userReducer(state:any,action:Action){
        return _userReducer(state,action)
    }


    
//createselectors

export const getLoading = (State:userReducerState)=>  State.loading;
export const getLoaded = (State:userReducerState)=>  State.loaded;
 export const getUsers = (State:userReducerState)=>  State.users;
export const getError = (State:userReducerState)=>  State.error;


