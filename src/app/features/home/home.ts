import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Balance } from './components/balance/balance';
import { Transaction } from '@shared/transaction/interfaces/transaction';
import { PieChart } from './components/pie-chart/pie-chart';
import { PieChartConfig } from './components/pie-chart/pie-chart-config.interface';
import { TransactionType } from '@shared/transaction/enums/transaction-type';
import { sumTransactions } from '@shared/functions/sum-transactions';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  imports: [Balance, PieChart, MatButtonModule, MatProgressBarModule, MatCardModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  transactions = input.required<Transaction[]>();

  totalIncomes = computed(() => {
    return sumTransactions(this.transactions(), TransactionType.INCOME)
   });

   totalOutcomes = computed(() => {
    return sumTransactions(this.transactions(), TransactionType.OUTCOME)
    });

  chartConfig = computed<PieChartConfig>(() => {
    return { labels: ['Ganhos', 'Gastos'], dataLabels: 'Valor Total', data: [this.totalIncomes(), this.totalOutcomes()] };
  });
}
