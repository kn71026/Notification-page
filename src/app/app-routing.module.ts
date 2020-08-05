import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ItemUpdatePage } from './item-update/item-update.page';

const routes: Routes = [
  // 讓網頁的預設會跳轉到 /main 登入頁面
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },

  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'add-notification',
    loadChildren: () => import('./add-notification/add-notification.module').then( m => m.AddNotificationPageModule)
  },
  {
    path: 'item-update',
    loadChildren: () => import('./item-update/item-update.module').then( m => m.ItemUpdatePageModule)
  },
  {
    path: 'item-update/:id',
    component: ItemUpdatePage
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
