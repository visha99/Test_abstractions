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
    loadChildren: () => import('./pages/register/presentation/project-b-register/project-b-register.module').then(m => m.ProjectBRegisterModule)  
  }
];

// const routesProyectA: Routes = [];

// const routesProyectB: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
