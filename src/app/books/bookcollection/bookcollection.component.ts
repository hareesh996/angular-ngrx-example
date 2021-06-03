import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-bookcollection',
  templateUrl: './bookcollection.component.html',
  styleUrls: ['./bookcollection.component.css']
})
export class BookcollectionComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
