import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookNameComponent } from '../book-name/book-name.component';
import { SetBooksName } from '../setbooksname';
import { BookService } from '../book.service';

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
      <!-- adding a property binding to a component tag [..]="" -->
      <app-book-name
        *ngFor="let bookName of bookNameList"
        [bookName]="bookName"
      ></app-book-name>
    </section>
  `,
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  bookNameList: SetBooksName[] = [];
  bookService: BookService = inject(BookService);

  constructor() {
    this.bookNameList = this.bookService.getAllHousingLocations();
  }
}
