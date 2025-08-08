import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

type cardType = 'income' | 'outcome' | 'balance';

enum valueCssClass {
  income = 'income',
  outcome = 'outcome',
} 

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule],
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

    return this.value() > 0 ? valueCssClass.income : valueCssClass.outcome;
   
  })
}
