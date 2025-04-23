// import { Controller, Get, Post, Body } from '@nestjs/common';
// import { PatientsService } from './patients.service';
// import { Patient } from './patient.entity';

// @Controller('patients')
// export class PatientsController {
//   constructor(private readonly patientsService: PatientsService) {}

//   @Get() // Обработчик GET запросов на /patients
//   async findAll(): Promise<Patient[]> {
//     return this.patientsService.findAll();
//   }

//   @Post() // Обработчик POST запросов на /patients
//   async create(@Body() patient: Patient): Promise<Patient> {
//     return this.patientsService.create(patient);
//   }
// }



import { Controller, Get } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientsService.findAll();
  }
}