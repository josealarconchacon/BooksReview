import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookNameComponent } from '../book-name/book-name.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookNameComponent],
  template: `
    <section>
      <div class="wrap">
        <div class="container">
          <input type="text" placeholder="Search Books ..." />
          <button class="primary" type="button">Search</button>
        </div>
      </div>
    </section>
    <section class="results">
      <app-book-name></app-book-name>
    </section>
  `,
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {}
