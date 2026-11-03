import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  data = portfolioData;
}
