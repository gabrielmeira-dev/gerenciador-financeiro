import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Layout } from '../components/layout/layout';

export default [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'login',
        component: Login,
      },
    ],
  },
] as Routes;
