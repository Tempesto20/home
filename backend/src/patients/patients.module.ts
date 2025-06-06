import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { Patient } from './patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])], // Регистрируем сущность Patient
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}