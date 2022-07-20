  import { ActionstoreService } from './../../service/actionstore.service';
import { ConfirmboxService } from './../../service/confirmbox.service';
import { ToastService } from './../../service/toast.service';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { StudentModel } from 'src/app/models/student.model';
import { ApiService } from 'src/app/service/api.service';
import { throttleTime } from 'rxjs';
import { Store } from '@ngrx/store';
import { userReducerState } from 'src/app/store/reducers/student.reducer';
import { ComponentStore } from '@ngrx/component-store';
import { getUsers } from 'src/app/store/reducers';
  
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
  providers : [ComponentStore]
})
export class StudentDashboardComponent implements OnInit {
  loader : boolean = false;
  spinner : boolean = false;
  error : boolean = false;
  submitted : boolean = false;
  formValue!: FormGroup; 
  myForm : NgForm;

  studentobj: StudentModel = new StudentModel;

  allstudent: any;

  btnUpdateShow:boolean = false;

  btnSaveShow:boolean = true;

  @ViewChild('closeModal') closeModal: ElementRef

  constructor(
     private formBuilder:FormBuilder,
     private api:ApiService,
     private toastServ : ToastService ,
     private confirmBox : ConfirmboxService,
     private actionService : ActionstoreService,
     private store : Store<userReducerState>
     )
    {}

  ngOnInit(): void {
  
   this.initializeForm();
    this.AllStudent();
  }

  initializeForm(){
    this.formValue = this.formBuilder.group({
      name:['',[Validators.required]],
      phone:['',[Validators.required]],
      email:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  AddStudent(){
    this.loader = true;
    this.formValue.markAllAsTouched();
    if(this.formValue.invalid) return
    this.studentobj.address = this.formValue.value.address;
    this.studentobj.city = this.formValue.value.city;
    this.studentobj.name = this.formValue.value.name;
    this.studentobj.email = this.formValue.value.email;
    this.studentobj.password = this.formValue.value.password;
    this.studentobj.phone = this.formValue.value.phone;

    this.api.postStudent(this.studentobj).pipe(throttleTime(2000)).subscribe({
      next: (v) => {console.log(v)},
    error: (e) => {
      this.toastServ.errorsmsg(e);
      console.log(e)},
    complete: () => {
      this.toastServ.successmsg('Student added successfully');
      this.loader = false;
      document.getElementById("closeModalButton").click(); //close the modal
      this.formValue.reset();
    } })

  }

  AllStudent(){
   const observer$ = this.actionService.getUserList();
   const userData$ = observer$[1];
   const loading$ = observer$[0];
   const error$ = observer$[2]
   userData$.subscribe(res=>{
    console.log("userdata",res)
    this.allstudent = res
   })
   loading$.subscribe(res=>{
    this.spinner = res
   })
   error$.subscribe(res=>{
    this.error = res
   })
  }

  tryAgain(){
    const observer$ = this.actionService.getUserList(true);
  }

  EditStudent(data:any){
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['city'].setValue(data.city);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['phone'].setValue(data.phone);
    this.formValue.controls['password'].setValue(data.password);
    this.studentobj._id = data._id;
    this.UpdateShowBtn();
  }

  UpdateStudent(){
    this.formValue.markAllAsTouched();
    if(this.formValue.invalid) return
    this.studentobj.address = this.formValue.value.address;
    this.studentobj.city = this.formValue.value.city;
    this.studentobj.name = this.formValue.value.name;
    this.studentobj.email = this.formValue.value.email;
    this.studentobj.password = this.formValue.value.password;
    this.studentobj.phone = this.formValue.value.phone;
    this.api.putStudent(this.studentobj,this.studentobj._id).subscribe(res => {
      // alert("Data Updated");
      this.toastServ.successmsg('Student updated successfully');
      // this.AllStudent();
      document.getElementById("closeModalButton").click();
      this.SaveShowBtn();
    },(err)=>{
      this.toastServ.errorsmsg(err);
    }
    )


  }

   


  DeleteStudent(data:any){
   let confirm= this.confirmBox.confirmBox();
   confirm(()=>this.api.deleteStudent(data._id).subscribe(),()=>this.AllStudent());
  }

  UpdateShowBtn()
  {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }

  SaveShowBtn()
  {
    this.initializeForm();
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }


  resetModal(){
    this.formValue.reset();
  }

}
