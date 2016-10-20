
import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";

@Injectable()
export class HeroService {

  heroes = HEROES;

  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(this.heroes);
  }

}
