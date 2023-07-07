import { Component } from '@angular/core';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <!-- <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/book-stack.png"
          alt="logo"
          aria-hidden="true"
          style="width: 50px; margin: 0 50px"
        />
      </header> -->
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
      <section class="content">
        <app-books></app-books>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BooksReview';
}
