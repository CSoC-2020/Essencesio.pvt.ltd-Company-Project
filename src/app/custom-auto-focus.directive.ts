import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomAutoFocus]'
})
export class CustomAutoFocusDirective implements OnInit {
  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }

  constructor(private elementRef: ElementRef) { }

}
