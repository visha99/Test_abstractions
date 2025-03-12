import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';


const routesProyectA: Routes = [
  {
    path: '', 
    loadComponent: () => import('./project-a-register/project-a-register.component').then(m => m.ProjectARegisterComponent)  
  }
];
const routesProyectB: Routes = [
  {
    path: '', 
    loadComponent: () => import('./project-b-register/project-b-register.component').then(m => m.ProjectBRegisterComponent)  
  }
];


@NgModule({
  imports: [RouterModule.forChild([])],
  exports: [RouterModule],
  providers: [
    {  
      provide: ROUTES, 
      multi: true,
      useFactory: () => {
        switch (environment.client) {
          case 'project-a':
            return routesProyectA;
          case 'project-b':
            return routesProyectB;
          default:
            return routesProyectA;
          }
      }
    }
  ]
})
export class RegisterRoutingModule { }
