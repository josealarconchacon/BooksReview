import { Component } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BooksComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']" href="">
        <header class="site-header">
          <div class="site-identity">
            <img
              class="brand-logo"
              src="/assets/book-stack.png"
              alt="logo"
              aria-hidden="true"
              style="width: 50px; margin: 0 50px"
            />
          </div>
          <nav class="site-navigation">
            <ul class="nav">
              <li><a href="#">Sell Your Book</a></li>
              <li><a href="#">Review</a></li>
            </ul>
          </nav>
        </header>
      </a>

      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BooksReview';
}
