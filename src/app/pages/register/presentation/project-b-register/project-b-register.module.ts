import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBRegisterRoutingModule } from './project-b-register-routing.module';
import { ProjectBRegisterComponent } from './project-b-register.component';
import { RegisterModule } from '../register.module';


@NgModule({
  declarations: [
    ProjectBRegisterComponent
  ],
  imports: [
    CommonModule,
    ProjectBRegisterRoutingModule,
    RegisterModule
   ],
})
export class ProjectBRegisterModule { 
}
