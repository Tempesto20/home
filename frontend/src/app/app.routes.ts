// import { Routes } from '@angular/router';

// export const routes: Routes = [];




import { Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';

export const routes: Routes = [
  { path: 'patients', component: PatientsComponent },
  { path: '', redirectTo: '/patients', pathMatch: 'full' }
];