import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { portfolioData } from '../../data/portfolio-data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [NgFor],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {
  data = portfolioData;
}
