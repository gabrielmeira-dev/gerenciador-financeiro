import { ResolveFn } from '@angular/router';
import { TransactionsService } from '../../../../../shared/transaction/services/transactions';
import { inject } from '@angular/core';
import { Transaction } from '../../../../../shared/transaction/interfaces/transaction';

export const getTransactionsResolver: ResolveFn<Transaction[]> = (route, state) => {
  const transactionsService = inject(TransactionsService);
   return transactionsService.getAll();
};
