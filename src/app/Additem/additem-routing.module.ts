import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditemPage } from './additem.page';

const routes: Routes = [
  {
    path: '',
    component: AdditemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditemPageRoutingModule {}
