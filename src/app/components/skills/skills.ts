import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { portfolioData } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  data = portfolioData;
}
