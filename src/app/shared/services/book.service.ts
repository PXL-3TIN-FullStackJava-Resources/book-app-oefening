import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(environment.apiUrl);
  }

  addBook(book: Book): Observable<Book>{
    return this.http.post<Book>(environment.apiUrl, book);
  }

  updateBook(book: Book): Observable<Book>{
    return this.http.put<Book>(environment.apiUrl + '/' + book._id, book);
  }

  deleteBook(book: Book): Observable<any>{
    return this.http.delete(environment.apiUrl + '/' + book._id);
  }

}
