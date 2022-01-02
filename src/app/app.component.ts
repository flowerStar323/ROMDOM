import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'RDD';
  constructor(private meta: Meta, private title: Title, private router: Router) {
    this.meta.addTags([
      { name: 'description', content: 'SEO friendly' },
      { name: 'author', content: 'WebStar' },
      { name: 'keywords', content: 'RomDomDom, Rom, test' }
    ])
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      // window.scrollTo(0, 0)
    });
  }

}
