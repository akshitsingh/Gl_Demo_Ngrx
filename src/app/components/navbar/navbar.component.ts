import { StudentModel } from 'src/app/models/student.model';
import { Observable } from 'rxjs';
import { getUsers } from './../../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userReducerState } from 'src/app/store/reducers/student.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  users$: Observable<StudentModel[]>;

  constructor(private store:Store<userReducerState>) { }

  ngOnInit(): void {
   this.users$ = this.store.select(getUsers)
  }



}
