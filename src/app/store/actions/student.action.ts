import { StudentModel } from "src/app/models/student.model";

export const USER_LIST_REQUEST = 'user list request';
export const USER_LIST_SUCCESS = 'user list success';
export const USER_LIST_ERROR = 'user list error';
export const USER_DELETE = 'user delete';
export const USER_ADD = 'user add';
export const USER_EDIT = 'user edit';
export const USER_DETAIL = 'user detail';



export class UserListRequestAction{
    readonly type=USER_LIST_REQUEST
}

export class UserListSuccessAction{  
    readonly type=USER_LIST_SUCCESS
    constructor(public payload : {data : StudentModel}){ }
}

export class UserDelete{  
    readonly type=USER_DELETE
    constructor(public payload : {id : string}){ }
}

export class UserAdd{  
    readonly type=USER_ADD
    constructor(public payload : {data : StudentModel}){ }
}

export class UserDetail{  
    readonly type=USER_DETAIL
    constructor(public payload : {id : string}){ }
}

export class UserEdit{  
    readonly type= USER_EDIT
    constructor(public payload : {data : StudentModel}){ }
}

export class UserListErrorAction{
    readonly type=USER_LIST_ERROR
}




