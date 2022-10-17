import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  genres: string[] = ["horror","thriller","roman","detective","fantasy"];
  constructor() { }

  ngOnInit(): void {
  }

}
