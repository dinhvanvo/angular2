"use strict";
var router_1 = require('@angular/router');
var HomeComponent_1 = require('./HomeComponent');
var routes = [
    {
        path: '',
        redirectTo: '/home',
        terminal: true
    },
    {
        path: 'home',
        component: HomeComponent_1.HomeComponent
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=routesConfig.js.map