import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo';
  counter = 0;
  

  cards=[
    {
      cardtitle : "Free",
      cardcost : 0,
      noofusers : "Single user",
      storage : "5GB Storage",
      project : "Unlimited Public Projects",
      access : "Community Access",
      privateproject : false,
      phonesupport : false,
      subdomain : false,
    status : false
    },
    {
      cardtitle : "Plus",
      cardcost: 9,
      noofusers : "5 Users",
      storage : "50GB Storage",
      project : "Unlimited Public Projects",
      access : "Community Access",
      privateproject : true,
      phonesupport : true,
      subdomain : true,
    status: false
    },
    {
      cardtitle : "Pro",
      cardcost : 49,
     noofusers : "Unlimited Users",
      storage : "150GB Storage",
      project : "Unlimited Public Projects",
      access : "Community Access",
      privateproject : true,
      phonesupport : true,
      subdomain : true,
     status: true
    }
  ]

  
}