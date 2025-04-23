import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [
    // Подключаем TypeORM для работы с PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',       // Тип базы данных
      host: 'localhost',     // Хост, где работает PostgreSQL
      port: 5432,            // Порт по умолчанию для PostgreSQL
      username: 'postgres',   // Имя пользователя (по умолчанию postgres)
      password: '1',          // Пароль, который вы указали
      database: 'polyclinic', // Имя базы данных
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Где искать сущности
      synchronize: true,      // В разработке можно true, в продакшене false
    }),
    PatientsModule,
  ],
})
export class AppModule {}





// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { PatientsModule } from './patients/patients.module';
// import { Patient } from './patients/patient.entity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: '1',
//       database: 'polyclinic',
//       entities: [Patient],
//       synchronize: true,
//       logging: true, // Включаем логирование SQL запросов
//     }),
//     PatientsModule,
//   ],
// })
// export class AppModule {}