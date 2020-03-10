import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mypipe'})
export class MyPipe implements PipeTransform {
  transform(data: string): string {
    return data.slice(1);
  }
}
