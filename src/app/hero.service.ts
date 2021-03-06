import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

	constructor(
		private messageService: MessageService, 
		private http: HttpClient) { }

	private heroesUrl = 'api/heroes';

	getHeroes2(): Hero[] {
		return HEROES;
	}

	getHeroes3(): Observable<Hero[]> {
		this.messageService.add('heroService: fetched heroes');
		return of(HEROES);
	}

	getHeroes(): Observable<Hero[]> {
		this.messageService.add('heroService: fetched heroes');
		return this.http.get<Hero[]>(this.heroesUrl);
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
