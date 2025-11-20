import { Routes } from "@angular/router";
import { CreateOrEdit } from "./pages/create-or-edit/create-or-edit";
import { getTransactionsByIdResolver } from "./pages/create-or-edit/resolvers/get-transactions-by-id-resolver";
import { List } from "./pages/list/list";
import { getTransactionsResolver } from "./pages/list/resolvers/get-transactions-resolver";

export default[
    {
        path: '',
        component: List,
        resolve: {
            transactions: getTransactionsResolver
        }
    },
    {
        path: 'create/new',
        component: CreateOrEdit
    },
    {
        path: 'edit/:id',
        component: CreateOrEdit,
        resolve: {
            transaction: getTransactionsByIdResolver
        }
    },
] as Routes;