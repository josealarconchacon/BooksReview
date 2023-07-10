import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookNameComponent } from '../book-name/book-name.component';
import { SetBookName } from '../setbooksname';

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
      <app-book-name [bookName]="setbooksname"></app-book-name>
    </section>
  `,
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  bookName: SetBookName = {
    id: 9990,
    title: 'Cracking The Code Interview',
    author: 'Cracking The Code Interview',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HBS_SGYAmQMvZMbT63TC9BVGESDOgUOgeQ&usqp=CAU',
    city: 'NY',
    categories: 'Programming and Software Development',
    description:
      "Cracking the Coding Interview is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers",
    year: 2020,
    availableUnits: 23,
  };
  setbooksname: any;
}
