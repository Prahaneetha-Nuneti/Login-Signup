import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsnewComponent} from './whatsnew/whatsnew.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { LatestComponent} from './latest/latest.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path : "whatsnew",
    component : WhatsnewComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "latest",
    component : LatestComponent
  },
  {
    path : "details/:id",
    component : DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }