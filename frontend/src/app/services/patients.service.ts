// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Patient } from '../patient';

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientsService {
//   private apiUrl = 'http://localhost:3000/patients'; // URL NestJS API

//   constructor(private http: HttpClient) { }

//   // Получение списка пациентов
//   getPatients(): Observable<Patient[]> {
//     return this.http.get<Patient[]>(this.apiUrl);
//   }

//   // Добавление нового пациента
//   addPatient(patient: Patient): Observable<Patient> {
//     return this.http.post<Patient>(this.apiUrl, patient);
//   }
// }



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Patient } from '../patient';

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientsService {
//   private apiUrl = 'http://localhost:3000/patients';

//   constructor(private http: HttpClient) { }

//   getPatients(): Observable<Patient[]> {
//     return this.http.get<Patient[]>(this.apiUrl);
//   }
// }








import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private apiUrl = 'http://localhost:3000/patients';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl).pipe(
      map(response => {
        console.log('Response data:', response);
        return response;
      }),
      catchError(error => {
        console.error('Full error:', error);
        if (error.status === 200 && error.error) {
          // Обработка случая, когда ошибка пришла со статусом 200
          return of(error.error);
        }
        return of([]);
      })
    );
  }
}