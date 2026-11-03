import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { portfolioData } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  data = portfolioData;
}
