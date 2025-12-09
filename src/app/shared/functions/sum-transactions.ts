import { TransactionType } from "@shared/transaction/enums/transaction-type";
import { Transaction } from "@shared/transaction/interfaces/transaction";

export function sumTransactions(transactions: Transaction[], type: TransactionType){
    return transactions.filter(item => item.type === type).reduce((total, item) => total + item.value, 0);
  }