import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 

@Injectable({
  providedIn: 'root'
})
export class ToastService implements OnInit {
  constructor(private toastr: ToastrService) { }  
  
  ngOnInit() {  
  }  
  successmsg(msg:string){  
    this.toastr.success(msg,'Success')  
}  
 errorsmsg(msg:string){  
    this.toastr.error(msg,'Error')  
  
}  
infotoastr(msg:string)  
{  
this.toastr.info(msg, 'Information');  
}  
toastrwaring(msg:string)  
{  
  this.toastr.warning(msg, 'Warning');  
}  
}  
