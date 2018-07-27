import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDate'
})
export class FilterByDatePipe implements PipeTransform {

  transform(array, filterBy, range): any {
    let limit = new Date().getTime();
    const todayTimestamp = new Date();


    if (range == 'Past month') {
      todayTimestamp.setMonth(todayTimestamp.getMonth() - 1);
    } else if (range == 'Past hour') {
      todayTimestamp.setHours(todayTimestamp.getHours() - 1);
    } else if (range == 'Past 24 hours') {
      todayTimestamp.setDate(todayTimestamp.getDate() - 1);
    } else if (range == 'Past week') {
      todayTimestamp.setDate(todayTimestamp.getDate() - 7);
    } else if (range == 'Past year') {
      todayTimestamp.setFullYear(todayTimestamp.getFullYear() - 1);
    } else {
      return array;
    }

    limit = todayTimestamp.getTime();

    return Array.from(array).filter( (x: number) => {
      return (x[filterBy] * 1000) >= limit
    })
  }

}
