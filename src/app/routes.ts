import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

const routeConfig: Routes = [
  {
    path: '',
    component: BooksComponent,
    title: 'Home page',
  },
  {
    path: 'bookdetails/:id',
    component: BookdetailsComponent,
    title: 'Book details',
  },
];

export default routeConfig;
