import { Component, AfterViewInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'enumr-svg',
  template: '<div #svg></div>'
})
export class EnumrSvgComponent implements AfterViewInit {
    @ViewChild('svg', { static: true}) svgElementRef: ElementRef;
    @Input() svg: any;

    constructor() { 
    }

    ngAfterViewInit() {
        this.svgElementRef.nativeElement.insertAdjacentHTML('beforeend', this.svg);
    }
}
