import { Component } from '@angular/core';
import { RegistrationAbstraction } from 'src/app/pages/abstrations/registration.abstraction';

@Component({
  selector: 'app-project-a-register',
  templateUrl: './project-a-register.component.html',
  styleUrls: ['./project-a-register.component.scss']
})
export class ProjectARegisterComponent extends RegistrationAbstraction {
  
  constructor() {
    super();
  }

  protected override addCustomFields(): void {
  }
}
