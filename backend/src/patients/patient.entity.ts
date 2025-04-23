// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity() // Декоратор указывает, что это сущность TypeORM
// export class Patient {
//   @PrimaryGeneratedColumn() // Автоинкрементный первичный ключ
//   id: number;

//   @Column({ length: 100 }) // Колонка с ограничением длины
//   full_name: string;

//   @Column({ type: 'date' }) // Колонка типа дата
//   birth_date: string;

//   @Column('int') // Целочисленная колонка
//   palata: number;
// }



import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('patients') // Явно указываем имя таблицы
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_name', length: 100 })
  fullName: string;

  @Column({ name: 'birth_date', type: 'date' })
  birthDate: Date;

  @Column('integer')
  palata: number;
}