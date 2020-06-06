import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitescroolPage } from './infinitescrool.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitescroolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitescroolPageRoutingModule {}
