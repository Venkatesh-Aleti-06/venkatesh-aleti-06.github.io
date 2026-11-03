import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Certifications } from './components/certifications/certifications';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, Skills, Projects, Certifications, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit() {
    AOS.init({ duration: 700, once: false, offset: 100, mirror: true });
  }
}
