import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBooksName } from '../setbooksname';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-book-name',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="bookName.photo"
        alt="Exterior photo of {{ bookName.title }}"
      />
      <h2 class="listing-heading">{{ bookName.title }}</h2>
      <p class="listing-location">{{ bookName.author }}</p>
      <a [routerLink]="['/bookdetails', bookName.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./book-name.component.css'],
})
export class BookNameComponent {
  //  new property decorated with the @Input() decorator.
  @Input() bookName!: SetBooksName;
}
