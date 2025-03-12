import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBRegisterComponent } from './project-b-register.component';

const routes: Routes = [
  { path: '', component: ProjectBRegisterComponent },
];

// const routesProyectA: Routes = [];

// const routesProyectB: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectBRegisterRoutingModule { }
