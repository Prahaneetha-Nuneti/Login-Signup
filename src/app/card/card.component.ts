import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardtitle = "";
  @Input() cardcost = 0;
  @Input() noofusers = "";
  @Input() storage = "";
  @Input() project = "";
  @Input() access = "";
  @Input() privateproject:boolean = true;
  @Input() phonesupport:boolean = true;
  @Input() subdomain:boolean = true;
  @Input() status:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
