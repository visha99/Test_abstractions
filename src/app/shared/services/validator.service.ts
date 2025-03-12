import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
// import { Globals } from 'src/app/core/enums/globals';
// import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class ValidatorService extends Validators {



  passwordValid(control: FormControl){
    const text = control.value as string;
    if (!/[a-zA-Z0-9ñÑ]/.test(text)) {
      return { passwordInvalid: true };
    }

    if (!/[A-ZÑ]/.test(text)) {
      return { passwordInvalid: true };
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(text)) {
      return { passwordInvalid: true };
    }

    if (/\s/.test(text)) {
      return { passwordInvalid: true };
    }

    return null;
  }

  nameValid(control: FormControl) {
    const text = control.value as string;
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚäÄëËïÏöÖüÜ ]+$/.test(text)) {
      return { nameInvalid: true };
    }

    if ( text?.endsWith(' ') && (text.length - 1) !== text?.trim().length ) {
      return { nameInvalid: true };
    }

    if(text?.trim().length < 2){
      return { nameInvalid: true };
    }

    if (/\s\s+/.test(text)) {
      return { nameInvalid: true };
    }
    return null;
  }

 


  documentIdValid(control: FormControl) {
    const text = `${control.value}`;
    if (!/^[a-zA-Z0-9ñÑ]+$/.test(text)) {
      return { documentIdInvalid: true };
    }

    if (text?.trim() !== text) {
      return { documentIdInvalid: true };
    }

    if (/\s\s+/.test(text)) {
      return { documentIdInvalid: true };
    }

    return null;
  }


}
