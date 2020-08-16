import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimatePage } from './animate.page';

const routes: Routes = [
  {
    path: '',
    component: AnimatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimatePageRoutingModule {}
