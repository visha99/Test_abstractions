import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegistrationAbstraction } from 'src/app/pages/abstrations/registration.abstraction';
import { RegisterModule } from '../register.module';

@Component({
  selector: 'app-project-a-register',
  templateUrl: './project-a-register.component.html',
  styleUrls: ['./project-a-register.component.scss'],
  standalone: true,
  imports: [CommonModule, RegisterModule]
})
export class ProjectARegisterComponent extends RegistrationAbstraction {
  
  constructor() {
    super();
  }

  protected override addCustomFields(): void {
  }
}
