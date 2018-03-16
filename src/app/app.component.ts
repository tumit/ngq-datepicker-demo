import { Component } from '@angular/core';
import { th_TH, en_GB } from 'ngq-datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  opts = th_TH;

  toggle() {
    this.opts = (this.opts === th_TH) ? en_GB : th_TH;
  }

}
