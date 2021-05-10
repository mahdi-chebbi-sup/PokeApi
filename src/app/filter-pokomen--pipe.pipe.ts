import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokomenPipe', pure: false
})
export class FilterPokomenPipePipe implements PipeTransform {

  transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }

}
