import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectARegisterComponent } from './project-a-register.component';

const routes: Routes = [
  { path: '', component: ProjectARegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectARegisterRoutingModule { }
