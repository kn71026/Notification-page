import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemUpdatePageRoutingModule } from './item-update-routing.module';

import { ItemUpdatePage } from './item-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemUpdatePageRoutingModule
  ],
  declarations: [ItemUpdatePage]
})
export class ItemUpdatePageModule {}
