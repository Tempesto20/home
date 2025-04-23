// export interface Patient {
//   id: number;
//   fullName: string;
//   birthDate: string;
//   palata: number;
// }





export interface Patient {
  id: number;
  fullName: string;
  birthDate: string; // Можно использовать Date, но нужно преобразовывать с сервера
  palata: number;
}

// Дополнительные интерфейсы, если нужно:
// export interface PatientCreateDto { ... }
// export interface PatientUpdateDto { ... }