import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  opt1: number = 0; // Initialize to some default value
  opt2: number = 0; // Initialize to some default value
  amt: number = 0; // Initialize to some default value
  res: number = 0; // Initialize to some default value
  result: string = ''; // Initialize to an empty string

  exchange(a: number, b: number, amt: number): string {
    if (a !== 0 && b !== 0) {
      this.result = (Math.round((b / a) * amt)).toFixed(2);
    } else {
      this.result = '';
    }
    return this.result;
  }
}
