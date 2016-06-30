import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'app/views/home.html'
})

export class HomeComponent {
    title = "Message from home Component";
}

// import { Component }       from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>{{title}}</h1>
//   `,
// })

// export class App {
//   title = 'Tour of Heroes';
// }