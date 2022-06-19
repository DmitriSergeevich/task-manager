import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruDate',
})
export class RuDatePipe implements PipeTransform {
  months = [
    'Января',
    'Февраля',
    'Март',
    'Апреля',
    'май',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  transform(value: string) {
    const date = new Date(value);
    const day = date.getDate();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();

    return ` ${day} ${month} ${year}`;
  }
}
