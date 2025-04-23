// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, catchError, map, of } from 'rxjs';
// import { Patient } from '../patient';

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientsService {
//   private apiUrl = 'http://localhost:3000/patients';

//   constructor(private http: HttpClient) { }

//   getPatients(): Observable<Patient[]> {
//     return this.http.get<Patient[]>(this.apiUrl).pipe(
//       map(response => {
//         console.log('Response data:', response);
//         return response;
//       }),
//       catchError(error => {
//         console.error('Full error:', error);
//         if (error.status === 200 && error.error) {
//           // Обработка случая, когда ошибка пришла со статусом 200
//           return of(error.error);
//         }
//         return of([]);
//       })
//     );
//   }
// }






import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root' // Сервис предоставляется на уровне всего приложения
})
export class PatientsService {
  private apiUrl = 'http://localhost:3000/patients'; // URL API

  constructor(private http: HttpClient) { }

  // Метод для получения списка пациентов
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Ошибка при загрузке пациентов:', error);
        return of([]); // Возвращаем пустой массив в случае ошибки
      })
    );
  }

  // Здесь можно добавить другие методы для работы с пациентами:
  // getPatientById(id), createPatient(patient), updatePatient(id, patient), etc.
}




