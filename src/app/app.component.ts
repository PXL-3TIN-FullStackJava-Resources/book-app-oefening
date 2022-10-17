import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './shared/models/book.model';
import { BookService } from './shared/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adding: boolean = false;
  books$!: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void{
    this.books$ = this.bookService.getBooks();
  }

  toggleAdd(): void{
    this.adding = !this.adding;
  }

  handleAdd(): void{
    this.adding = false;
    this.fetchBooks();
  }
}
