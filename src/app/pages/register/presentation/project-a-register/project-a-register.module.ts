import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectARegisterComponent } from './project-a-register.component';
import { ProjectARegisterRoutingModule } from './project-a-register-routing.module';
import { RegisterModule } from '../register.module';


@NgModule({
  declarations: [
    ProjectARegisterComponent
  ],
  imports: [
    CommonModule,
    ProjectARegisterRoutingModule,
    RegisterModule
   ],
})
export class ProjectARegisterModule { 
}
