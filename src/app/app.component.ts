import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addBook, removeBook, retrieveBooks } from './books/books.actions';
import { selectBookCollection, selectBooks } from './books/books.selector';
import { BooksService } from './books/books.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
 
  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }
 
  constructor(
    private booksService: BooksService,
    private store: Store
  ) {}
 
  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrieveBooks({ Book })));
  }

}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/