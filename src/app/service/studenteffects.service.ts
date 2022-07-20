import { Injectable } from '@angular/core';
import { Actions, createEffect,Effect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserListErrorAction, UserListRequestAction, UserListSuccessAction } from '../store/actions/student.action';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StudenteffectsService {

  constructor(
    private actions$: Actions,
    private api:ApiService
  ) {}
  
//   loadStudents$ = createEffect(() => {
//  return this.actions$.pipe(
//     ofType(UserListRequestAction),
//     switchMap(() => this.api.getStudent().pipe(
//       map(users => UserListSuccessAction({payload : users})),
//       catchError(() => of((UserListErrorAction)))
//     ))
//   )
//      } )



}
