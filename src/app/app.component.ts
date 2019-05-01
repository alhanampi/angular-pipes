import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

nombre = 'Worf son of Mogh';

array = [1031, 1227, 1701, 1864, 72381, 74205, 74656 ]; //  discovery, shenzhou, enterprise, reliant, equinox, defiant, voyager

PI = Math.PI;

percentage = 0.12354;

latinum = 3519.75;

crew = {
  name: 'Jadzia',
  symbiont: 'Dax',
  age: 357,
  habilities: {
    languages: 'klingon',
    agility: 'gymnast',
    position: 'science officer',
  }
};

promise = new Promise( ( resolve, reject) =>  {
  setTimeout( () => resolve('data Ok'), 3500);
});

date = new Date();

nameForPipe = 'beNjaMIn sisKo';

}
