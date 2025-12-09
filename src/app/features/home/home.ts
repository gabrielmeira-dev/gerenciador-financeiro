import { Component, computed, input } from '@angular/core';
import { Balance } from './components/balance/balance';
import { Transaction } from '@shared/transaction/interfaces/transaction';
import { PieChart } from './components/pie-chart/pie-chart';
import { PieChartConfig } from './components/pie-chart/pie-chart-config.interface';
import { TransactionType } from '@shared/transaction/enums/transaction-type';

@Component({
  selector: 'app-home',
  imports: [Balance, PieChart],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  transactions = input.required<Transaction[]>();


  totalIncomes = computed(() => {
    return this.transactions().filter(item => item.type === TransactionType.INCOME).reduce((total, item) => total + item.value, 0)
   })

   totalOutcomes = computed(() => {
     return this.transactions().filter(item => item.type === TransactionType.OUTCOME).reduce((total, item) => total + item.value, 0)
    })

  chartConfig = computed<PieChartConfig>(() => {
    return { labels: ['Ganhos', 'Gastos'], dataLabels: 'Valor Total', data: [this.totalIncomes(), this.totalOutcomes()] };
  });
}
