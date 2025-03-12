import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'register', 
    loadChildren: () => import('./pages/register/presentation/register.module').then(m => m.RegisterModule)  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
