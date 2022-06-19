import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[deadline]',
})
export class DeadlineDirective implements OnInit {
  @Input() date!: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const today = new Date();
    const isMiss = new Date(this.date) < today;
    this.element.nativeElement.style.fontSize = '18px';
    if (isMiss) this.element.nativeElement.style.color = 'red';
  }
}
