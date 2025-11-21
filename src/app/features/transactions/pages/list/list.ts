import { Component, inject, input, linkedSignal, resource, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { NoTransactions } from './components/no-transactions/no-transactions';
import { TransactionItem } from './components/transaction-item/transaction-item';
import { TransactionsContainer } from './components/transactions-container/transactions-container';
import { TransactionsService } from '@shared/transaction/services/transactions';
import { ConfirmationDialogService } from '@shared/dialog/confirmation/services/confirmation-dialog';
import { Transaction } from '@shared/transaction/interfaces/transaction';
import { FeedbackService } from '@shared/feedback/services/feedback';
import { Search } from './components/search/search';
import { firstValueFrom } from 'rxjs';
// import { CustomKeyvaluePipe } from './pipes/custom-keyvalue-pipe';

@Component({
  selector: 'app-list',
  imports: [
    TransactionItem,
    NoTransactions,
    MatButtonModule,
    RouterLink,
    TransactionsContainer,
    Search
    //CustomKeyvaluePipe,
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  private transactionsService = inject(TransactionsService);
  private feedbackService = inject(FeedbackService);
  private router = inject(Router);
  private confirmationDialogService = inject(ConfirmationDialogService);
  private activatedRoute = inject(ActivatedRoute);

  /*
object = signal({
    name: 'Gabriel',
    age: 18,
    job: 'Sim'
  })

  addProp(){
    this.object.update((value: any) => {
      value['hairColor'] = 'Black'

      return value
    })
  }
*/

  // transactions = input.required<Transaction[]>();

  // items = linkedSignal(() => this.transactions());

  searchTerm = signal('');

  resourceRef = resource({
    params: () => {
      return {
       searchTerm: this.searchTerm()
      }
    },
    loader: ({ params: {searchTerm} }) => {
      return firstValueFrom(this.transactionsService.getAll(searchTerm)); 
    },
    defaultValue: []
  })

  edit(transaction: Transaction) {
    this.router.navigate(['edit', transaction.id], { relativeTo: this.activatedRoute  });
  }

  remove(transaction: Transaction) {
    this.confirmationDialogService
      .open({
        title: 'Deletar transação',
        message: 'Você realmente deseja deletar a transação?',
      })
      .subscribe({
        next: () => {
          this.transactionsService.delete(transaction.id).subscribe({
            next: () => {
              this.removeTransactionFromArray(transaction);
              this.feedbackService.sucess('Transação removida com sucesso');
            },
          });
        },
      });
  }

  private removeTransactionFromArray(transaction: Transaction) {
    this.resourceRef.update((transactions) =>
      transactions.filter((item) => item.id !== transaction.id)!
    );
  }
}
