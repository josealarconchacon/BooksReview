import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBooksName } from '../setbooksname';

@Component({
  selector: 'app-book-name',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="bookName.photo"
        alt="Exterior photo of {{ bookName.title }}"
      />
      <h2 class="listing-heading">{{ bookName.title }}</h2>
      <p class="listing-location">{{ bookName.author }}, {{ bookName.city }}</p>
    </section>
  `,
  styleUrls: ['./book-name.component.css'],
})
export class BookNameComponent {
  //  new property decorated with the @Input() decorator.
  @Input() bookName!: SetBooksName;
}
