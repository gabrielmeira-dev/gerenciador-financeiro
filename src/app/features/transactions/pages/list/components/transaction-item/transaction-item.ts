import { ChangeDetectionStrategy, Component, input, output, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { Transaction } from '../../../../../../shared/transaction/interfaces/transaction';
import { TransactionValue } from './components/transaction-value/transaction-value';
import { CustomColor } from '@shared/material/buttons/directives/custom-color';
import { IsIncome } from './directives/is-income';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-transaction-item',
  imports: [MatCardModule, MatButtonModule, TransactionValue, CustomColor, IsIncome, MatChipsModule],
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionItem {

  transaction = input.required<Transaction>();

  edit = output<Transaction>();
  remove = output<Transaction>();
}
