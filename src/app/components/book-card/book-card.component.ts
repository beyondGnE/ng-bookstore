import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input()
  title: String = "Placeholder";
  @Input()
  url: String = "url.com";
  @Input()
  author: String = "author";
  liked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  like() : void {
    this.liked = !this.liked;
  }

}
