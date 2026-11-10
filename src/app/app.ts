import { Component, signal } from '@angular/core';
import { Blogs } from './components/blogs/blogs';
import { Contact } from './components/contact/contact';
import { Developer } from './components/developer/developer';
import { Games } from './components/games/games';
import { SiteNav } from './components/site-nav/site-nav';
import { SiteFooter } from './components/site-footer/site-footer';

@Component({
  imports: [SiteNav,Blogs,Contact,Developer,Games,SiteFooter],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('landing-page');
}
