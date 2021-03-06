import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapital'
})
export class FirstCapitalPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(value){
      return value.charAt(0).toUpperCase() + value.slice(1);
    }else{
      return '-';
    }
  }

}
