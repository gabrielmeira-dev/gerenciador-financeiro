import { CurrencyPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HumanizeCurrencyPipe } from './pipes/humanize-currency-pipe';

type cardType = 'income' | 'outcome' | 'balance';

enum valueCssClass {
  income = 'income',
  outcome = 'outcome',
  zero = 'zero',
} 

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule, HumanizeCurrencyPipe],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss'
})
export class BalanceCard {
  type = input.required<cardType>();
  label = input.required<string>();
  value = input.required<number>();

  cssClass = computed<valueCssClass>(() => {
    if(this.type() === 'income'){
      return valueCssClass.income
    }

    if(this.type() === 'outcome'){
      return valueCssClass.outcome
    }

    if(this.value() === 0){
      return valueCssClass.zero
    }

    return this.value() > 0 ? valueCssClass.income : valueCssClass.outcome;
   
  })
}
