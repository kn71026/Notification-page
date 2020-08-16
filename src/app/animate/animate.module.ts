import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimatePageRoutingModule } from './animate-routing.module';

import { AnimatePage } from './animate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimatePageRoutingModule
  ],
  declarations: [AnimatePage]
})
export class AnimatePageModule {}
