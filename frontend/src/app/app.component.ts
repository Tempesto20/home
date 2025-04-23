// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   template: `<router-outlet></router-outlet>`
// })
// export class AppComponent {
//   title(title: any) {
//     throw new Error('Method not implemented.');
//   }
// }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Указываем, что это standalone компонент
  imports: [RouterOutlet], // Импортируем только необходимые директивы
  template: `
    <!-- Основной layout приложения -->
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  // Базовый компонент приложения не требует сложной логики
}