// import { Routes } from '@angular/router';
// import { PatientsComponent } from './patients/patients.component';

// export const routes: Routes = [
//   { path: 'patients', component: PatientsComponent },
//   { path: '', redirectTo: '/patients', pathMatch: 'full' }
// ];





import { Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';

export const routes: Routes = [
  { 
    path: 'patients', 
    component: PatientsComponent,
    title: 'Список пациентов' // Добавляем title для SEO и UX
  },
  { 
    path: '', 
    redirectTo: '/patients', 
    pathMatch: 'full' // Перенаправляем с корня на /patients
  },
  // Можно добавить маршрут для 404 страницы
  // { path: '**', component: PageNotFoundComponent }
];