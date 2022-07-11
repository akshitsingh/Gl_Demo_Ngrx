import { UserListErrorAction } from './../store/actions/student.action';
import { getUserError } from './../store/reducers/index';
import { combineLatest, Observable, take } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { userReducerState } from '../store/reducers/student.reducer';
import { getUserLoaded, getUserLoading, getUsers } from '../store/reducers';
import { UserListRequestAction, UserListSuccessAction } from '../store/actions/student.action';

@Injectable({
  providedIn: 'root'
})
export class ActionstoreService {

  constructor(private api:ApiService,private store:Store<userReducerState>) { }

  getUserList(force=false):[Observable<boolean>,Observable<any>,Observable<boolean>]{
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const getUserData$ = this.store.select(getUsers);
    const getError$ = this.store.select(getUserError);

    combineLatest([loading$,loaded$]).pipe(take(1)).subscribe(data=>{
      if(!data[0] && !data[1]){
        this.store.dispatch(new UserListRequestAction())
        this.api.getStudent().subscribe(res => {
          this.store.dispatch(new UserListSuccessAction({data : res.data}))
        },err=>{
          this.store.dispatch(new UserListErrorAction()) 
        })
      }
    })
    return [loading$,getUserData$,getError$]
  }

  
}
