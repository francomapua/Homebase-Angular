import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Properties
  heroes: Hero[] ;
  selectedHero: Hero;

  onSelect(pickedHero: Hero): void {
    this.selectedHero = pickedHero;
  }

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.populateHeroes();
  }

  populateHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
