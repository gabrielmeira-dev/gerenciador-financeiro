import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { Transaction } from '../../shared/transaction/interfaces/transaction';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';
import { NoTransactions } from "./components/no-transactions/no-transactions";
import { HttpClient } from '@angular/common/http';
import { TransactionsService } from '../../shared/transaction/services/transactions';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FeedbackService } from '../../shared/feedback/services/feedback';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { filter } from 'rxjs';


@Component({
  selector: 'dialog-animations-example-dialog',
  template: `<h2 mat-dialog-title>Deletar transação</h2>
  <mat-dialog-content>
   Você realmente deseja deletar essa transação?
  </mat-dialog-content>
  <mat-dialog-actions>
    <button matButton [mat-dialog-close]="false">Não</button>
    <button matButton [mat-dialog-close]="true" cdkFocusInitial>Sim!</button>
  </mat-dialog-actions> `,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
}

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem, NoTransactions, MatButtonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  private transactionsService = inject(TransactionsService);
  private feedbackService = inject(FeedbackService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  transactions = signal<Transaction[]>([]);

  ngOnInit(): void {
    this.getTransactions();
  }

  edit(transaction: Transaction) {
    this.router.navigate(['edit', transaction.id]);
    }

  remove(transaction: Transaction) {
      this.dialog.open(DialogAnimationsExampleDialog, {}).afterClosed().pipe(
        filter((res: boolean) => res === true )
      ).subscribe({
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
