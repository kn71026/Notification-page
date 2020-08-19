import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginTestPage } from './login-test.page';

const routes: Routes = [
  {
    path: '',
    component: LoginTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginTestPageRoutingModule {}
