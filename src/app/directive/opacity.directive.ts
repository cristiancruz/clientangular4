import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'li[opacity-clicks]',
})
export class OpacityClicksDirective {
    initial = 0;
    // tslint:disable-next-line:no-inferrable-types
    @HostBinding('style.opacity') opacity: number = .1;

    @HostListener('click', ['$event.target']) onclick(btn) {
        this.opacity += .1;
    }

 }



