import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any): any {
    return value.toUpperCase();
  }

}

@Pipe
(
  {name:'customjson'}
)
export class CustomJsonPipe implements PipeTransform
{
  transform(value:any, args?:number):any{

    return JSON.stringify(value);//convert javascript object into string.
  }
}
