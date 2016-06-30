import {provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './homeComponent';
import { AnimateComponent } from './animateComponent'
const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        terminal: true
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'animate',
        component: AnimateComponent
    },
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];