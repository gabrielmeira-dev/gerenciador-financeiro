import { Component, input } from '@angular/core';
import { Balance } from './components/balance/balance';
import { Transaction } from '@shared/transaction/interfaces/transaction';

@Component({
  selector: 'app-home',
  imports: [
    Balance,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home { 
  transactions = input.required<Transaction[]>();
}
