import { Component, animate, state, style, transition, trigger, keyframes } from '@angular/core';
import { NgSwitchDefault, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'app-animate',
    animations: [trigger(
        'carousel',
        [
            state('hide, void', style({ left: '-100%' })),
            state('show', style({ left: 0 })),
            state('right', style({ left: '100%' })),
            transition('show => hide', animate("5s", keyframes([
                style({ left: "0" }),
                style({ left: "-20%" }),
                style({ left: "-40%" }),
                style({ left: "-60%" }),
                style({ left: "-80%" }),
                style({ left: "-100%" }),
            ]))),
            transition('hide => show', animate("5s", keyframes([
                style({ left: "100%" }),
                style({ left: "80%" }),
                style({ left: "60%" }),
                style({ left: "40%" }),
                style({ left: "20%" }),
                style({ left: "0" }),
            ]))),
        ])],
    templateUrl: 'app/views/animate.html',
    directives: [NgSwitch, NgSwitchCase, NgSwitchDefault]
})

export class AnimateComponent {
    public items = images;
    currentIndex: string = 'show';
    value = 1;
    moveLeft() {
        this.currentIndex = 'hide';
        if (this.value == this.items.length) {
            this.value = 1;
        } else {
            this.value++;
        }
    };
    moveRight() {
        this.currentIndex = 'show';
        if (this.value == this.items[0].id) {
            this.value = this.items[this.items.length - 1].id;
        } else {
            this.value--;
        }

    };
}

var images = [
    { id: 1, url: 'cards/images/1.png' },
    { id: 2, url: 'cards/images/2.png' },
    { id: 3, url: 'cards/images/3.png' },
    { id: 4, url: 'cards/images/4.png' },
    { id: 5, url: 'cards/images/5.png' },
]