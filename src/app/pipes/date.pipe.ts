import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let date: any = new Date(value);
    date = date.getDate() + "-" + (date.getMonth() + 1)+ "-" + date.getFullYear();
    return date;
  }

}
