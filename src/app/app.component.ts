import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';
  act  = true;
  showDefaultMessage = true; // default state

toggleDefaultMessage(state: boolean) {
    this.showDefaultMessage = state;
}
}