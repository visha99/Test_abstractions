import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomErrorPipe } from 'src/app/shared/pipes/custom-error.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterService } from '../domain/services/register.service';
import { RegisterFirebaseService } from '../infraestructure/register-firebase.service';
import {MatTabsModule} from '@angular/material/tabs';
import { AlertSuccessComponent } from 'src/app/shared/components/alert-success/alert-success.component';
import { RegisterRoutingModule } from './register-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CustomErrorPipe,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    AlertSuccessComponent
   ],
  exports: [ 
    ReactiveFormsModule,
    MatFormFieldModule,
    CustomErrorPipe,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    AlertSuccessComponent 
  ],
   providers: [
    { provide: RegisterService, useExisting: RegisterFirebaseService },
   ],
})
export class RegisterModule { 
}
