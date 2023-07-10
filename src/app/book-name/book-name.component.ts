import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBookName } from '../setbooksname';

@Component({
  selector: 'app-book-name',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>book-name works!</p> `,
  styleUrls: ['./book-name.component.css'],
})
export class BookNameComponent {
  //  new property decorated with the @Input() decorator.
  @Input() bookName!: SetBookName;
}
