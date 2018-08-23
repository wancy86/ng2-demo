import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    // 注入service
    constructor(private heroService: HeroService) { }
    
    getHeroes(): void {
        this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

    // init的实现
    ngOnInit() {
        this.getHeroes();
    }
}