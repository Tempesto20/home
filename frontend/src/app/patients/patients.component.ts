// import { Component, OnInit } from '@angular/core';
// import { PatientsService } from '../services/patients.service';
// import { Patient } from '../patient';

// @Component({
//   selector: 'app-patients', // Убедитесь, что селектор именно 'app-patients'
//   templateUrl: './patients.component.html',
//   styleUrls: ['./patients.component.scss']
// })
// export class PatientsComponent implements OnInit {
//   patients: Patient[] = [];
//   newPatient: Patient = {
//     id: 0,
//     full_name: '',
//     birth_date: '',
//     palata: 0
//   };

//   constructor(private patientsService: PatientsService) { }

//   ngOnInit(): void {
//     this.loadPatients();
//   }

//   loadPatients(): void {
//     this.patientsService.getPatients().subscribe(
//       (data) => {
//         this.patients = data;
//       },
//       (error) => {
//         console.error('Ошибка при загрузке пациентов:', error);
//       }
//     );
//   }

//   addPatient(): void {
//     this.patientsService.addPatient(this.newPatient).subscribe(
//       (data) => {
//         this.patients.push(data);
//         this.newPatient = { id: 0, full_name: '', birth_date: '', palata: 0 };
//       },
//       (error) => {
//         console.error('Ошибка при добавлении пациента:', error);
//       }
//     );
//   }
// }
















// import { Component, OnInit } from '@angular/core';
// import { PatientsService } from '../services/patients.service';
// import { Patient } from '../patient';

// @Component({
//   selector: 'app-patients',
//   templateUrl: './patients.component.html',
//   styleUrls: ['./patients.component.scss']
// })
// export class PatientsComponent implements OnInit {
//   // patients: Patient[] = []; // Инициализируем свойство patients


//   patients: Patient[] = [
//     { id: 1, full_name: 'Тестовый пациент', birth_date: '2000-01-01', palata: 101 },
//     { id: 2, full_name: 'Еще один пациент', birth_date: '1995-05-15', palata: 205 }
//   ];

//   constructor(private patientsService: PatientsService) {}

  
//   ngOnInit(): void {
//     this.loadPatients();
//   }

//   loadPatients(): void {
//     this.patientsService.getPatients().subscribe(
//       (data) => {
//         this.patients = data; // Заполняем массив patients данными
//       },
//       (error) => {
//         console.error('Ошибка при загрузке пациентов:', error);
//       }
//     );
//   }
// }







// import { Component, OnInit } from '@angular/core';
// import { PatientsService } from '../services/patients.service';
// import { Patient } from '../patient';

// @Component({
//   selector: 'app-patients',
//   templateUrl: './patients.component.html',
//   styleUrls: ['./patients.component.scss']
// })
// export class PatientsComponent implements OnInit {
//   patients: Patient[] = [];

//   constructor(private patientsService: PatientsService) {}

//   ngOnInit(): void {
//     this.loadPatients();
//   }

//   loadPatients(): void {
//     this.patientsService.getPatients().subscribe({
//       next: (data) => {
//         if (!Array.isArray(data)) {
//           console.error('Ожидался массив, получено:', data);
//           this.patients = [];
//           return;
//         }
//         this.patients = data;
//       },
//       error: (err) => {
//         console.error('Ошибка загрузки:', err);
//         this.patients = [];
//       }
//     });
//   }
// }











import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] | null = null; // null - загрузка, [] - нет данных

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patients = null; // Показываем индикатор загрузки
    this.patientsService.getPatients().subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.patients = Array.isArray(data) ? data : [];
      },
      error: (err) => {
        console.error('Full error:', err);
        this.patients = [];
      }
    });
  }
}