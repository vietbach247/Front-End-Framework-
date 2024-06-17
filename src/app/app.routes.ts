import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';
import { EditComponent } from './admin/edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },

  {
    path: 'add',
    component: AddComponent,
  },

  {
    path: 'edit/:id',
    component: EditComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];
