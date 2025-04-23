// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Patient } from './patient.entity';

// @Injectable()
// export class PatientsService {
//   constructor(
//     @InjectRepository(Patient) // Внедряем репозиторий для Patient
//     private patientsRepository: Repository<Patient>,
//   ) {}

//   // Метод для получения всех пациентов
//   findAll(): Promise<Patient[]> {
//     return this.patientsRepository.find();
//   }

//   // Метод для создания нового пациента
//   create(patient: Patient): Promise<Patient> {
//     return this.patientsRepository.save(patient);
//   }
// }





import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  create(patient: Patient): Patient | PromiseLike<Patient> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
  ) {}

  async findAll(): Promise<Patient[]> {
    try {
      const patients = await this.patientsRepository.find();
      console.log('Patients from DB:', patients); // Логируем данные из БД
      return patients;
    } catch (error) {
      console.error('DB error:', error);
      return [];
    }
  }
}





// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, catchError, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientsService {
//   private apiUrl = 'http://localhost:3000/patients';

//   constructor(private http: HttpClient) { }

//   getPatients(): Observable<any> {
//     return this.http.get(this.apiUrl).pipe(
//       tap(response => console.log('Raw response:', response)),
//       catchError(error => {
//         console.error('API Error:', error);
//         throw error;
//       })
//     );
//   }
// }