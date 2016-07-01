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
var common_1 = require('@angular/common');
var AnimateComponent = (function () {
    function AnimateComponent() {
        this.items = images;
        this.currentIndex = 'show';
        this.value = 1;
    }
    AnimateComponent.prototype.moveLeft = function () {
        this.currentIndex = 'hide';
        if (this.value == this.items.length) {
            this.value = 1;
        }
        else {
            this.value++;
        }
    };
    ;
    AnimateComponent.prototype.moveRight = function () {
        this.currentIndex = 'show';
        if (this.value == this.items[0].id) {
            this.value = this.items[this.items.length - 1].id;
        }
        else {
            this.value--;
        }
    };
    ;
    AnimateComponent = __decorate([
        core_1.Component({
            selector: 'app-animate',
            animations: [core_1.trigger('carousel', [
                    core_1.state('hide, void', core_1.style({ left: '-100%' })),
                    core_1.state('show', core_1.style({ left: 0 })),
                    core_1.state('right', core_1.style({ left: '100%' })),
                    core_1.transition('show => hide', core_1.animate("5s", core_1.keyframes([
                        core_1.style({ left: "0" }),
                        core_1.style({ left: "-20%" }),
                        core_1.style({ left: "-40%" }),
                        core_1.style({ left: "-60%" }),
                        core_1.style({ left: "-80%" }),
                        core_1.style({ left: "-100%" }),
                    ]))),
                    core_1.transition('hide => show', core_1.animate("5s", core_1.keyframes([
                        core_1.style({ left: "100%" }),
                        core_1.style({ left: "80%" }),
                        core_1.style({ left: "60%" }),
                        core_1.style({ left: "40%" }),
                        core_1.style({ left: "20%" }),
                        core_1.style({ left: "0" }),
                    ]))),
                ])],
            templateUrl: 'app/views/animate.html',
            directives: [common_1.NgSwitch, common_1.NgSwitchCase, common_1.NgSwitchDefault]
        }), 
        __metadata('design:paramtypes', [])
    ], AnimateComponent);
    return AnimateComponent;
}());
exports.AnimateComponent = AnimateComponent;
var images = [
    { id: 1, url: 'cards/images/1.png' },
    { id: 2, url: 'cards/images/2.png' },
    { id: 3, url: 'cards/images/3.png' },
    { id: 4, url: 'cards/images/4.png' },
    { id: 5, url: 'cards/images/5.png' },
];
//# sourceMappingURL=animateComponent.js.map