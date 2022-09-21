import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-books-page',
  templateUrl: './all-books-page.component.html',
  styleUrls: ['./all-books-page.component.css']
})
export class AllBooksPageComponent implements OnInit {

  // In the future, we will be getting this data from my book API
  placeholderBooks: Array<Book> = [
    {
      title: "The Phantom Tollbooth",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/813AWm89-iL.jpg"
    },
    {
      title: "To Kill a Mockingbird",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81aY1lxk+9L.jpg"
    },
    {
      title: "Animorphs #1: The Invasion",
      imgUrl: "another.com"
    }
  ];

  books : Array<Book> = [];

  constructor(public http: HttpClient) { }

  // this is a part of the component's lifecycle: the component
  // runs this method when the component loads
  ngOnInit(): void {
    // this.HttpClient.get<Book[]>(this.baseUrl)
    this.http.get<Book[]>("http://20.38.45.14:9000/api/books")
      .subscribe(data => {
        this.books = data;
      });
  }

}
