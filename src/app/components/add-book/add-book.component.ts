import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/models/book.model';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  genres: string[] = ["horror","thriller","roman","detective","fantasy"];
  addForm!: FormGroup;
  @Output() addedBook: EventEmitter<null> = new EventEmitter();
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', []),
      genre: new FormControl('', []),
      isbn: new FormControl('',[])
    });
  }

  handleSubmit(): void{
    const book: Book = {...this.addForm.value};
    this.bookService.addBook(book).subscribe(() => {
      this.addForm.reset();
      this.addedBook.emit();
    });
  }

}
