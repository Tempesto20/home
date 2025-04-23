// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { PatientsComponent } from './patients/patients.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     PatientsComponent // Компонент должен быть здесь объявлен
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule { }





// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';

// import { AppComponent } from './app.component';
// import { PatientsModule } from './patients/patients.module';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//     MatTableModule,
//     MatButtonModule,
//     MatIconModule,
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     PatientsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }











import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Добавьте этот импорт

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Не забудьте этот импорт для работы с HTTP
    CommonModule // Добавьте эту строку
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }