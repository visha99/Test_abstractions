import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBRegisterComponent } from './project-b-register.component';

const routes: Routes = [
  { path: '', component: ProjectBRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectBRegisterRoutingModule { }
