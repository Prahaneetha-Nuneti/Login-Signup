import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
// import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
// import { TopborderComponent } from './topborder/topborder.component';
// import { LogoborderComponent } from './logoborder/logoborder.component';
// import { NavigborderComponent } from './navigborder/navigborder.component';
// import { TrendingComponent } from './trending/trending.component';
// import { WeeklyComponent } from './weekly/weekly.component';
// import { WhatsnewComponent } from './whatsnew/whatsnew.component';
// import { Weekly2Component } from './weekly2/weekly2.component';
// import { YoutubeComponent } from './youtube/youtube.component';
// import { RecentComponent } from './recent/recent.component';
// import { PaginationComponent } from './pagination/pagination.component';
// import { FootborderComponent } from './footborder/footborder.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { MapsComponent } from './maps/maps.component';
// import { GetintouchComponent } from './getintouch/getintouch.component';
// import { LatestComponent } from './latest/latest.component';
// import { LatesttrendingComponent } from './latesttrending/latesttrending.component';
// import { DetailsComponent } from './details/details.component';
// import { FollowComponent } from './follow/follow.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { CreateStudentComponent } from './create-student/create-student.component';
// import { AttendanceComponent } from './attendance/attendance.component';
// import { AttendancestatusComponent } from './attendancestatus/attendancestatus.component';
// import { StudentEditComponent } from './student-edit/student-edit.component';
// import { StudentListComponent } from './student-list/student-list.component';
@NgModule({
  declarations: [
    AppComponent,
    // TopborderComponent,
    // LogoborderComponent,
    // NavigborderComponent,
    // TrendingComponent,
    // WeeklyComponent,
    // WhatsnewComponent,
    // Weekly2Component,
    // YoutubeComponent,
    // RecentComponent,
    // PaginationComponent,
    // FootborderComponent,
    // HomeComponent,
    // AboutComponent,
    // ContactComponent,
    // MapsComponent,
    // GetintouchComponent,
    // LatestComponent,
    // LatesttrendingComponent,
    // DetailsComponent,
    // FollowComponent,
    // SidebarComponent,
    // CreateStudentComponent,
    // AttendanceComponent,
    // AttendanceReportComponent,
    // StudentEditComponent,
    // StudentListComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
