import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Book } from "./book.model";

interface GBook{
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
  };
}

interface BookResponse{
  items: GBook[];
}

@Injectable({
  providedIn: 'root'
})
export class BooksService{
  constructor(private httpClient: HttpClient){}

  getBookgs(): Observable<Array<Book>>{
    return this.httpClient.get<BookResponse>('https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks')
    .pipe(
      map( (bookResponse) => {
        if(bookResponse?.items){
          return bookResponse.items.map((gBook) => 
         {
          return {
            id: gBook.id,
            title: gBook.volumeInfo.title,
            authors: gBook.volumeInfo.authors
          }
        })
        }
        return [];
      })
    );
  }

}