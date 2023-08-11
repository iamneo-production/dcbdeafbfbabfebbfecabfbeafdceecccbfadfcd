import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';
  sourceCurrency: number = 0;
  targetCurrency: number = 0;
  amount: number = 0;
  conversionResult: string = '';
  resultMessage: string = '';

  performConversion(): void {
    if (this.sourceCurrency !== 0 && this.targetCurrency !== 0) {
      this.conversionResult = (Math.round((this.targetCurrency / this.sourceCurrency) * this.amount)).toFixed(2);
      this.resultMessage = `Converted amount: ${this.conversionResult}`;
    } else {
      this.resultMessage = 'Please select valid source and target currencies.';
    }
  }
}