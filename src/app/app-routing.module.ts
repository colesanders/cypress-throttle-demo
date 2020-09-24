import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Click',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'throttle/:time',
    loadChildren: () => import('./throttle/throttle.module').then((m) => m.ThrottlePageModule),
  },
  {
    path: 'filler/:id',
    loadChildren: () => import('./filler/filler.module').then((m) => m.FillerPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
