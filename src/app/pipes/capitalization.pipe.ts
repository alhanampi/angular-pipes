import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalization'})
export class CapitalizationPipe implements PipeTransform {
    transform(value: string, allWords: boolean = true): string {

  value = value.toLowerCase();

	let names = value.split(' ');
// tslint:disable-next-line: forin
  if (allWords) {
// tslint:disable-next-line: forin
    for (const i in names) {
      names[i] = names[i][0].toUpperCase() + names[i].substr(1);
      }
// tslint:disable-next-line: indent
		} else {
// tslint:disable-next-line: indent
 	   names[0] = names[0][0].toUpperCase() + names [0].substr(1);
}
    return names.join(' ');
   }
}
