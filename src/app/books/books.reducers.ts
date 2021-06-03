import { createReducer, on } from '@ngrx/store';
import { Book } from './book.model';
import { retrieveBooks } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(retrieveBooks, (state, { Book }) => [...Book])
);
