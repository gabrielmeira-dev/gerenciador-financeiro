import { Routes } from "@angular/router";
import { Home } from "./home";
import { getTransactionsResolver } from "./resolvers/get-transactions-resolver";

export default[
    {
        path: '',
        component: Home,
        resolve: {
            transactions: getTransactionsResolver
        }
    }
] as Routes;