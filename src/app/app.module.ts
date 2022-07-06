import { rootReducer } from './store/reducers/index';
import { StudentmodalComponent } from './modals/studentmodal/studentmodal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { ErrorComponent } from './shared/component/error/error.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
 
@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentmodalComponent,
    SpinnerComponent,
    NavbarComponent,
    ErrorComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
       maxAge: 25, logOnly: environment.production
       }),
    ToastrModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
