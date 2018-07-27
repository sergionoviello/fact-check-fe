import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateShortFormat'
})
export class DateShortFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    try {
      return new Date(value * 1000).toLocaleString('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (e) {
      return '';
    }
  }
}
