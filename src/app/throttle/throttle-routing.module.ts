import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThrottlePage } from './throttle.page';

const routes: Routes = [
  {
    path: '',
    component: ThrottlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThrottlePageRoutingModule {}
