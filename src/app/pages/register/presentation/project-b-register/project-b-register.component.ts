import { Component } from '@angular/core';
import { RegistrationAbstraction } from '../../../abstrations/registration.abstraction';
import { ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterModule } from '../register.module';

@Component({
  selector: 'app-project-b-register',
  templateUrl: './project-b-register.component.html',
  styleUrls: ['./project-b-register.component.scss'],
  standalone: true,
  imports: [CommonModule, RegisterModule]
})
export class ProjectBRegisterComponent extends RegistrationAbstraction {
  constructor() {
    super();
  }

  
  protected override addCustomFields(): void {
    this.form.addControl('identityDocument', this.formBuilder.nonNullable.control('', [Validators.required, this.validatorService.documentIdValid as ValidatorFn])); 
    this.form.addControl('secretQuestion', this.formBuilder.control('', Validators.required));
  }


}


