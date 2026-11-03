import { Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  data = portfolioData;
}
