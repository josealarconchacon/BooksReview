import { Injectable } from '@angular/core';
import { SetBooksName } from './setbooksname';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  bookNameList: SetBooksName[] = [
    {
      id: 9990,
      title: 'Cracking The Code Interview',
      author: 'Sara',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HBS_SGYAmQMvZMbT63TC9BVGESDOgUOgeQ&usqp=CAU',
      city: 'NY',
      categories: 'Programming and Software Development',
      description:
        "Cracking the Coding Interview is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers",
      year: 2020,
      availableUnits: 23,
    },
    {
      id: 9990,
      title: 'Cracking The Code Interview',
      author: 'Sara',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HBS_SGYAmQMvZMbT63TC9BVGESDOgUOgeQ&usqp=CAU',
      city: 'NY',
      categories: 'Programming and Software Development',
      description:
        "Cracking the Coding Interview is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers",
      year: 2020,
      availableUnits: 23,
    },
    {
      id: 9990,
      title: 'Cracking The Code Interview',
      author: 'Sara',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HBS_SGYAmQMvZMbT63TC9BVGESDOgUOgeQ&usqp=CAU',
      city: 'NY',
      categories: 'Programming and Software Development',
      description:
        "Cracking the Coding Interview is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers",
      year: 2020,
      availableUnits: 23,
    },
    {
      id: 9990,
      title: 'Cracking The Code Interview',
      author: 'Sara',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HBS_SGYAmQMvZMbT63TC9BVGESDOgUOgeQ&usqp=CAU',
      city: 'NY',
      categories: 'Programming and Software Development',
      description:
        "Cracking the Coding Interview is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers",
      year: 2020,
      availableUnits: 23,
    },
    {
      id: 9990,
      title: 'Cracking The Code Interview',
      author: 'Sara',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HBS_SGYAmQMvZMbT63TC9BVGESDOgUOgeQ&usqp=CAU',
      city: 'NY',
      categories: 'Programming and Software Development',
      description:
        "Cracking the Coding Interview is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers",
      year: 2020,
      availableUnits: 23,
    },
  ];

  getAllHousingLocations(): SetBooksName[] {
    return this.bookNameList;
  }

  getHousingLocationById(id: number): SetBooksName | undefined {
    return this.bookNameList.find((bookName) => bookName.id === id);
  }
}
