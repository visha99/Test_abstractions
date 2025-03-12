import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';


const routesProyectA: Routes = [
  {
    path: '', 
    loadChildren: () => import('./project-a-register/project-a-register.module').then(m => m.ProjectARegisterModule)  
  }
];
const routesProyectB: Routes = [
  {
    path: '', 
    loadChildren: () => import('./project-b-register/project-b-register.module').then(m => m.ProjectBRegisterModule)  
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
