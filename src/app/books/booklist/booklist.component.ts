import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  @Input()
  books: Array<Book>;

  @Output()
  add: EventEmitter<string>;

  constructor() {
    this.add = new EventEmitter<string>();
  }

  ngOnInit() {}
}
