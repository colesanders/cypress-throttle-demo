import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FillerPage } from './filler.page';

const routes: Routes = [
  {
    path: '',
    component: FillerPage,
    children: [
      {
        path: 'throttle/:time',
        loadChildren: () => import('../throttle/throttle.module').then((m) => m.ThrottlePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FillerPageRoutingModule {}
