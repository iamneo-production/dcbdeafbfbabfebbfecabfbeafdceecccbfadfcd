import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  optn1: number = 0; 
  optn2: number = 0; 
  amnt: number = 0;
  res: number = 0; 
  result: string = '';

  exchange(a: number, b: number, amt: number): string {
    if (a !== 0 && b !== 0) {
      this.result = (Math.round((b / a) * amt)).toFixed(2);
    } else {
      this.result = '';
    }
    return this.result;
  }
}