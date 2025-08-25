import { Routes } from "@angular/router";
import { Home } from "./home";
import { CreateOrEdit } from "./pages/create-or-edit/create-or-edit";
import { getTransactionsByIdResolver } from "./pages/create-or-edit/resolvers/get-transactions-by-id-resolver";

export default[
    {
        path: '',
        component: Home
    },
    {
        path: 'create',
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