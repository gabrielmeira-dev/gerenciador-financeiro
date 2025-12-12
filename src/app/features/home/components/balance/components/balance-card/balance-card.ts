import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

type cardType = 'income' | 'outcome' | 'balance';

enum valueCssClass {
  income = 'income',
  outcome = 'outcome',
  zero = 'zero',
} 

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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
