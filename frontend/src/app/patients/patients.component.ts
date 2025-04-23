// import { Component, OnInit } from '@angular/core';
// import { PatientsService } from '../services/patients.service';
// import { Patient } from '../patient';

// @Component({
//   selector: 'app-patients',
//   templateUrl: './patients.component.html',
//   styleUrls: ['./patients.component.scss']
// })
// export class PatientsComponent implements OnInit {
//   patients: Patient[] | null = null; // null - загрузка, [] - нет данных

//   constructor(private patientsService: PatientsService) {}

//   ngOnInit(): void {
//     this.loadPatients();
//   }

//   loadPatients(): void {
//     this.patients = null; // Показываем индикатор загрузки
//     this.patientsService.getPatients().subscribe({
//       next: (data) => {
//         console.log('Received data:', data);
//         this.patients = Array.isArray(data) ? data : [];
//       },
//       error: (err) => {
//         console.error('Full error:', err);
//         this.patients = [];
//       }
//     });
//   }
// }












import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../patient';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patients',
  standalone: true, // Указываем, что это standalone компонент
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatButtonModule,
    DatePipe // Для форматирования дат
  ],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] | null = null; // null - загрузка, [] - нет данных
  displayedColumns: string[] = ['id', 'fullName', 'birthDate', 'palata']; // Колонки таблицы

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  // Загрузка пациентов
  loadPatients(): void {
    this.patients = null; // Показываем индикатор загрузки
    this.patientsService.getPatients().subscribe({
      next: (data) => {
        this.patients = Array.isArray(data) ? data : [];
      },
      error: () => {
        this.patients = []; // В случае ошибки показываем пустой список
      }
    });
  }

  // Метод для обновления данных
  refresh(): void {
    this.loadPatients();
  }
}