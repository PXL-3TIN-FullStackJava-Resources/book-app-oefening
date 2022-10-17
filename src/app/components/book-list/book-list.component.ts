import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books$!: Observable<Book[]>;
  constructor(private bookService: BookService) { }


}
