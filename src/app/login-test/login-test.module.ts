import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginTestPageRoutingModule } from './login-test-routing.module';

import { LoginTestPage } from './login-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginTestPageRoutingModule
  ],
  declarations: [LoginTestPage]
})
export class LoginTestPageModule {}
