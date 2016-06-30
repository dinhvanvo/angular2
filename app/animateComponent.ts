import { Component, animate, state, style, transition, trigger, keyframes } from '@angular/core';

@Component({
    animations: [trigger(
        'carousel',
        [
            state('hide, void', style({ left: '-100%'})),
            state('show', style({ left: 0})),
            transition('show => hide', animate("5s", keyframes([
                style({ left: "-20%", opacity: 1 }),
                style({ left: "-40%", opacity: 0.8 }),
                style({ left: "-60%", opacity: 0.6 }),
                style({ left: "-80%", opacity: 0.4 }),
                style({ left: "-100%", opacity: 0 }),
            ]))),
            transition('hide => show', animate("5s", keyframes([
                style({ left: "-100%", opacity: 0.2 }),
                style({ left: "-80%", opacity: 0.4 }),
                style({ left: "-60%", opacity: 0.6 }),
                style({ left: "-40%", opacity: 0.8 }),
                style({ left: "0", opacity: 1 }),
            ]))),
        ])],
    templateUrl: 'app/views/animate.html'
})

export class AnimateComponent {
    public images = images;
    currentIndex: string = 'show';
    isShow : boolean = true;
    // currentIndex: number = 0;

    // moveLeft() { this.currentIndex++ };
    // moveRight() { this.currentIndex-- };

    moveLeft() { this.currentIndex = 'hide' };
    moveRight() { this.currentIndex = 'show' };
}

var images = [
    { id: 1, url: 'cards/images/1.png' },
    {url : 'cards/images/2.png'},
    {url : 'cards/images/3.png'},
    {url : 'cards/images/4.png'},
    {url : 'cards/images/5.png'},
    {url : 'cards/images/6.png'},
    {url : 'cards/images/7.png'},
    {url : 'cards/images/8.png'},
    {url : 'cards/images/9.png'},
    {url : 'cards/images/10.png'},
    {url : 'cards/images/11.png'},
    {url : 'cards/images/12.png'},
    {url : 'cards/images/13.png'},
    {url : 'cards/images/14.png'},
    {url : 'cards/images/15.png'},
    {url : 'cards/images/16.png'},
    {url : 'cards/images/17.png'},
    {url : 'cards/images/18.png'},
    {url : 'cards/images/19.png'},
    {url : 'cards/images/20.png'},
]