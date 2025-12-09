import { Component, computed, input } from '@angular/core';
import { Balance } from './components/balance/balance';
import { Transaction } from '@shared/transaction/interfaces/transaction';
import { PieChart } from './components/pie-chart/pie-chart';
import { PieChartConfig } from './components/pie-chart/pie-chart-config.interface';

@Component({
  selector: 'app-home',
  imports: [
    Balance,
    PieChart
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home { 
  transactions = input.required<Transaction[]>();

  chartConfig = computed<PieChartConfig>(() => {
   return { labels: ['teste1'], dataLabels: 'Teste', data: [100] }
  })
}
