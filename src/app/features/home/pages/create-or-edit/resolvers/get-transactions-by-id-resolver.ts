import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { TransactionsService } from '@shared/transaction/services/transactions';
import { Transaction } from '@shared/transaction/interfaces/transaction';


export const getTransactionsByIdResolver: ResolveFn<Transaction> = (route, state) => {
  
  const transactionsService = inject(TransactionsService);

  const id = route.paramMap.get('id') as string;

  return transactionsService.getById(id) ;
};
