import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { ConfirmationDialogService } from '../../../../shared/dialog/confirmation/services/confirmation-dialog';
import { FeedbackService } from '../../../../shared/feedback/services/feedback';
import { Transaction } from '../../../../shared/transaction/interfaces/transaction';
import { TransactionsService } from '../../../../shared/transaction/services/transactions';
import { NoTransactions } from './components/no-transactions/no-transactions';
import { TransactionItem } from './components/transaction-item/transaction-item';
import { TransactionsContainer } from './components/transactions-container/transactions-container';
import { Balance } from './components/balance/balance';

@Component({
  selector: 'app-list',
  imports: [Balance, TransactionItem, NoTransactions, MatButtonModule, RouterLink, TransactionsContainer],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  private transactionsService = inject(TransactionsService);
  private feedbackService = inject(FeedbackService);
  private router = inject(Router);
  private confirmationDialogService = inject(ConfirmationDialogService);

  transactions = signal<Transaction[]>([]);

  ngOnInit(): void {
    this.getTransactions();
  }

  edit(transaction: Transaction) {
    this.router.navigate(['edit', transaction.id]);
  }

  remove(transaction: Transaction) {
    this.confirmationDialogService.open({
      title: 'Deletar transação', message: 'Você realmente deseja deletar a transação?'
    }).subscribe({
      next: () => {
        this.transactionsService.delete(transaction.id).subscribe({
          next: () => {
            this.removeTransactionFromArray(transaction);
            this.feedbackService.sucess('Transação removida com sucesso');
          }
        });
      }
    });
  }

  private removeTransactionFromArray(transaction: Transaction) {
    this.transactions.update(transactions => {
      return transactions.filter(item => item.id !== transaction.id);
    });
  }

  private getTransactions() {
    this.transactionsService.getAll().subscribe({
      next: (transactions) => {
        this.transactions.set(transactions);
      }
    });
  }
}
