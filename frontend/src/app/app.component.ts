// import { Component } from '@angular/core';
// // import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   // imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   // template: '<div>Test patients component</div>', // Временно упрощенный шаблон
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'frontend';
// }




import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}