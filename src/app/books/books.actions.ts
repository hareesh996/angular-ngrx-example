import { createAction, props } from '@ngrx/store';

export const addBook = createAction('[Add Book]', props<{ bookId }>());

export const removeBook = createAction(
  '[Book Collections] Remove a book',
  props<{ bookId }>()
);

export const retrieveBooks = createAction(
  '[Books List] Retrieve Books',
  props<{ Book }>()
);
