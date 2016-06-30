import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/home']" routerLinkActive="active">Home</a>
      <a [routerLink]="['/animate']" routerLinkActive="active">Animate</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class App {
    title = 'Message from app';
}