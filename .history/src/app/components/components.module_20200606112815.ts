import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class ComponentsModule { }
