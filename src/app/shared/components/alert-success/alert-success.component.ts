import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-import-saving-success',
  standalone: true,
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.scss'],
  imports: [MatDialogModule, MatButtonModule, CommonModule],
})
export class AlertSuccessComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { icon: string, title: string, message: string }
  ) {}
}
