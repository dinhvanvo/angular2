"use strict";
var router_1 = require('@angular/router');
var homeComponent_1 = require('./homeComponent');
var animateComponent_1 = require('./animateComponent');
var routes = [
    {
        path: '',
        redirectTo: '/home',
        terminal: true
    },
    {
        path: 'home',
        component: homeComponent_1.HomeComponent
    },
    {
        path: 'animate',
        component: animateComponent_1.AnimateComponent
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=routesConfig.js.map