import { UserDelete, UserEdit, UserListSuccessAction } from './../store/actions/student.action';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { StudentModel } from '../models/student.model';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { userReducerState } from '../store/reducers/student.reducer';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient,private store : Store<userReducerState>) { }


  // Post Method For Add Student
  postStudent(data:StudentModel)
  {
    return this._http.post<StudentModel>(`${environment.API_URL}student/add`,data).pipe(map((res:any)=> {
      this.store.dispatch(new UserListSuccessAction({data : data}))
      return res
    }))
  }
 
    // Get Method For All Student
    getStudent()
    {
      return this._http.get<StudentModel>(`${environment.API_URL}students`).pipe(map((res:any)=> {
        return res
      }))
    }

      // Put Method For Update Student
  putStudent(data:StudentModel, id:string)
  {
    return this._http.put<StudentModel>(`${environment.API_URL}student/${id}`,data).pipe(map((res:any)=> {
      this.store.dispatch(new UserEdit({data}))
      return res
    }))
  }

  // Delete Method For delete Student
  deleteStudent(id:string){
    return this._http.delete<StudentModel>(`${environment.API_URL}student/${id}`).pipe(map((res:any)=> {
      this.store.dispatch(new UserDelete({id}))
      return res;
    }))
  }
    
}
