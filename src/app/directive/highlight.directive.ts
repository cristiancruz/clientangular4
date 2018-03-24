import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }
    // tslint:disable-next-line:no-input-rename
    @Input('highlight') plan: string;

    ngOnInit() {
        if (this.plan === 'pagado') {
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
            this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '14px');
        }
    }
 }
