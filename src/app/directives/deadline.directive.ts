import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[deadline]',
})
export class DeadlineDirective implements OnInit {
  @Input() date!: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const today = new Date();
    const preDeadlineDays = 3;
    const preDeadlineDate = new Date(today);
    preDeadlineDate.setDate(today.getDate() + preDeadlineDays);

    const date = new Date(this.date);
    if (
      date.getFullYear() === preDeadlineDate.getFullYear() &&
      date.getMonth() === preDeadlineDate.getMonth() &&
      date.getDate() <= preDeadlineDate.getDate()
    ) {
      this.element.nativeElement.style.color = '#d70000';
    }
  }
}
