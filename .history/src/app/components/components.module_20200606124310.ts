import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PopinfoComponent } from './popinfo/popinfo.component';

@NgModule({
  declarations: [MenuComponent, PopinfoComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    PopinfoComponent
  ]
})
export class ComponentsModule { }
