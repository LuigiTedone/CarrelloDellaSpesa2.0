import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AdditemPageRoutingModule } from './additem-routing.module';
import { NgControl } from '@angular/forms';
import { AdditemPage } from './additem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditemPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdditemPage],
  providers: []
})
export class AdditemPageModule {}
