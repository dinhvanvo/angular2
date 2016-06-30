"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AnimateComponent = (function () {
    function AnimateComponent() {
        this.images = images;
        this.currentIndex = 'show';
        this.isShow = true;
    }
    // currentIndex: number = 0;
    // moveLeft() { this.currentIndex++ };
    // moveRight() { this.currentIndex-- };
    AnimateComponent.prototype.moveLeft = function () { this.currentIndex = 'hide'; };
    ;
    AnimateComponent.prototype.moveRight = function () { this.currentIndex = 'show'; };
    ;
    AnimateComponent = __decorate([
        core_1.Component({
            animations: [core_1.trigger('carousel', [
                    core_1.state('hide, void', core_1.style({ left: '-100%' })),
                    core_1.state('show', core_1.style({ left: 0 })),
                    core_1.transition('show => hide', core_1.animate("5s", core_1.keyframes([
                        core_1.style({ left: "-20%", opacity: 1 }),
                        core_1.style({ left: "-40%", opacity: 0.8 }),
                        core_1.style({ left: "-60%", opacity: 0.6 }),
                        core_1.style({ left: "-80%", opacity: 0.4 }),
                        core_1.style({ left: "-100%", opacity: 0 }),
                    ]))),
                    core_1.transition('hide => show', core_1.animate("5s", core_1.keyframes([
                        core_1.style({ left: "-100%", opacity: 0.2 }),
                        core_1.style({ left: "-80%", opacity: 0.4 }),
                        core_1.style({ left: "-60%", opacity: 0.6 }),
                        core_1.style({ left: "-40%", opacity: 0.8 }),
                        core_1.style({ left: "0", opacity: 1 }),
                    ]))),
                ])],
            templateUrl: 'app/views/animate.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AnimateComponent);
    return AnimateComponent;
}());
exports.AnimateComponent = AnimateComponent;
var images = [
    { id: 1, url: 'cards/images/1.png' },
    { url: 'cards/images/2.png' },
    { url: 'cards/images/3.png' },
    { url: 'cards/images/4.png' },
    { url: 'cards/images/5.png' },
    { url: 'cards/images/6.png' },
    { url: 'cards/images/7.png' },
    { url: 'cards/images/8.png' },
    { url: 'cards/images/9.png' },
    { url: 'cards/images/10.png' },
    { url: 'cards/images/11.png' },
    { url: 'cards/images/12.png' },
    { url: 'cards/images/13.png' },
    { url: 'cards/images/14.png' },
    { url: 'cards/images/15.png' },
    { url: 'cards/images/16.png' },
    { url: 'cards/images/17.png' },
    { url: 'cards/images/18.png' },
    { url: 'cards/images/19.png' },
    { url: 'cards/images/20.png' },
];
//# sourceMappingURL=animateComponent.js.map