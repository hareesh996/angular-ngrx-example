import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { bookReducer } from './books/books.reducers';
import { collectionReducer } from './books/collections.reducers';
import { CounterComponent } from './counter/counter.component';
import { CounterReducer } from './counter/counter.reducers';
import { BooklistComponent } from './books/booklist/booklist.component';
import { BookcollectionComponent } from './books/bookcollection/bookcollection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: CounterReducer,
      books: bookReducer,
      collection: collectionReducer
    }),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CounterComponent,
    BooklistComponent,
    BookcollectionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
