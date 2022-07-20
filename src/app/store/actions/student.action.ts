import { createAction, props } from '@ngrx/store';
import { StudentModel } from 'src/app/models/student.model';

export const USER_LIST_REQUEST = '[student] user list request';
export const USER_LIST_SUCCESS = '[student] user list success';
export const USER_LIST_ERROR = '[student] user list error';
export const USER_DELETE = '[student] user delete';
export const USER_ADD = '[student] user add';
export const USER_EDIT = '[student] user edit';
export const USER_DETAIL = '[student] user detail';

export const UserListRequestAction = createAction(
   USER_LIST_REQUEST
);

export const UserListSuccessAction = createAction(
  USER_LIST_SUCCESS,
  props<{ user: StudentModel }>()
);

export const UserDelete = createAction(
    USER_DELETE,
    props<{ id : string }>()
  );

  export const UserAdd = createAction(
    USER_ADD,
    props<{  payload: { data : StudentModel } }>()
  );

  export const UserDetail = createAction(
    USER_DETAIL,
    props<{  payload: { id : string } }>()
  );

  export const UserEdit = createAction(
    USER_EDIT,
    props<{ payload: { data: StudentModel }}>()
  );

  export const UserListErrorAction = createAction(
    USER_LIST_ERROR
  );

// export class UserListRequestAction{
//     readonly type=USER_LIST_REQUEST
// }

// export class UserListSuccessAction{
//     readonly type=USER_LIST_SUCCESS
//     constructor(public payload : {data : StudentModel}){ }
// }

// export class UserDelete {
//   readonly type = USER_DELETE;
//   constructor(public payload: { id: string }) {}
// }

// export class UserAdd {
//   readonly type = USER_ADD;
//   constructor(public payload: { data: StudentModel }) {}
// }

// export class UserDetail {
//   readonly type = USER_DETAIL;
//   constructor(public payload: { id: string }) {}
// }

// export class UserEdit {
//   readonly type = USER_EDIT;
//   constructor(public payload: { data: StudentModel }) {}
// }

// export class UserListErrorAction {
//   readonly type = USER_LIST_ERROR;
// }
