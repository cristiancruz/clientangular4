import { Directive, HostListener} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'a[counter-clicks]',
})
export class CounterClicksDirective {
    initial = 0;

    @HostListener('click', ['$event.target']) onclick(btn) {
        console.log('a', btn, 'Numer of clicks', this.initial++);
    }

 }



