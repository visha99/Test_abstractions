import { Component, inject } from '@angular/core';
import { RegistrationAbstraction } from '../../../abstrations/registration.abstraction';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './project-b-register.component.html',
  styleUrls: ['./project-b-register.component.scss']
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


