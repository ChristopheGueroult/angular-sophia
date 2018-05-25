import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    args = args.toLowerCase().trim();

    return value ? value.filter(value => value.name.toLowerCase().includes(args)) : value;
  }

}
