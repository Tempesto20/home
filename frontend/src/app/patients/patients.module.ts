import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PatientListComponent } from './patient-list/patient-list.component';
// import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsService } from '../services/patients.service';
// import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  // declarations: [
  //   PatientListComponent,
  //   // PatientDialogComponent
  // ],
  imports: [
    CommonModule,
    // PatientsRoutingModule,
    // Angular Material модули
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // Forms
    FormsModule,
    // ReactiveFormsModule // Добавьте если используете
  ],
  providers: [PatientsService]
})
export class PatientsModule { }