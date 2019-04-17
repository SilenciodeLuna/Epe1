import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'h32/:txt', loadChildren: './h32/h32.module#H32PageModule' },
  { path: 'h64/:txt', loadChildren: './h64/h64.module#H64PageModule' },
  { path: 'h96/:txt', loadChildren: './h96/h96.module#H96PageModule' },
  { path: 'h128/:txt', loadChildren: './h128/h128.module#H128PageModule' },
  { path: 'acerca-de', loadChildren: './acerca-de/acerca-de.module#AcercaDePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
