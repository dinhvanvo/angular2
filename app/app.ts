import { Component }       from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
  `,
})

export class App {
  title = 'Tour of Heroes';
}