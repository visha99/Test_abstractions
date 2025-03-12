import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customError',
  standalone: true,
})
export class CustomErrorPipe implements PipeTransform {
  transform(errors: { [key: string]: boolean } | null | undefined, field?: string): string {
    if (!errors) {
      return '';
    }

    const error = Object.keys(errors)[0];
    if (error === 'required') {
      return 'Campo requerido';
    } else if (error === 'nameInvalid' && field === 'name') {
      return 'Por favor ingresa un nombre valido';
    } else if (error === 'email' && field === 'email') {
      return 'Por favor ingresa un correo electrónico valido';
    } else if (error === 'minlength' && field === 'password') {
      return 'Por favor ingresa una contraseña de al menos 6 caracteres';
    } else if (error === 'passwordInvalid' && field === 'password') {
      return 'La contraseña de tener al menos una letra mayúscula, un número y un caracter especial';
    } else if (error === 'documentIdInvalid' && field === 'identityDocument') {
      return 'El documento de identidad no debe contener caracteres especiales ni espacios';
    }
    return '';
  }
}
