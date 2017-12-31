import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

	constructor(private messageService: MessageService) { }

	getHeroes2(): Hero[] {
		return HEROES;
	}

	getHeroes(): Observable<Hero[]> {
		this.messageService.add('heroService: fetched heroes');
		return of(HEROES);
	}

	getHero(id: number): Observable<Hero> {
	  // Todo: send the message _after_ fetching the hero
	  this.messageService.add(`HeroService: fetched hero id=${id}`);
	  return of(HEROES.find(hero => hero.id === id));
	}

	addMsg(): void{
		this.messageService.add('test message: '+(new Date().getTime()));
	}

}
