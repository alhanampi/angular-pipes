import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, on: boolean = true): string {

    if (on) {
      let out = '';

      for (let i = 0; i < value.length; i++) {
        out += '*'; // each letter in out gets a * as replacement
      }
      return out;
    } else {
      return value;
    }

  }

}
