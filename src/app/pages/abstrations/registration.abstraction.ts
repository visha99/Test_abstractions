import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register/domain/services/register.service';
import { AlertSuccessComponent } from 'src/app/shared/components/alert-success/alert-success.component';
import { MatDialog } from '@angular/material/dialog';
import { ValidatorService } from 'src/app/shared/services/validator.service';

export abstract class RegistrationAbstraction {

  protected readonly formBuilder = inject(FormBuilder);
  readonly #registerService = inject(RegisterService);
  readonly #matDialog = inject(MatDialog);
  readonly validatorService = inject(ValidatorService);
  public form: FormGroup;
  constructor() {
    this.form = this.createForm();
    this.addCustomFields();
  }

  protected abstract addCustomFields(): void;

  private createForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, this.validatorService.nameValid]],
      password: ['', [Validators.required, Validators.minLength(6), this.validatorService.passwordValid]],
      
    });
  }

  async confirmData() {
    if (this.form.invalid) {
      return
    }
    const groupId: string = new Date().getTime().toString(); 
    try {
      await this.#registerService.create(groupId, this.form.value);
      this.openRegisterObservationModal(
        'Datos guardados',
        'Los datos del registro fueron guardados exitosamente'
      );
    } catch (error) {
      this.openRegisterObservationModal(
        'Error al guardar los datos',
        'Ocurrió un error al guardar los datos del registro'
      );
      console.error(error)
    }
  }

  openRegisterObservationModal(title: string, message: string) {
    this.#matDialog.open(AlertSuccessComponent, {
      data: {
        title,
        message,
      },
      autoFocus: false,
    });
  }
}