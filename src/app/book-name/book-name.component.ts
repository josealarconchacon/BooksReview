import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-name',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      book-name works!
    </p>
  `,
  styleUrls: ['./book-name.component.css']
})
export class BookNameComponent {

}
