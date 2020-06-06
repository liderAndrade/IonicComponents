import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitescroolPageRoutingModule } from './infinitescrool-routing.module';

import { InfinitescroolPage } from './infinitescrool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitescroolPageRoutingModule
  ],
  declarations: [InfinitescroolPage]
})
export class InfinitescroolPageModule {}
