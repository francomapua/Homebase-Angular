import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Properties
  herox: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(pickedHero: Hero): void {
    this.selectedHero = pickedHero;
  }

  constructor() {}

  ngOnInit() {}
}
