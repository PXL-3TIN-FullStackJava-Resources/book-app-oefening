# Book app exercise
Provide the following features:
- As a user i an see a list of books. Every book object will render a book-item component.
- As a user i can click the "add new book" button to toggle the add-book form. The button text changes to "cancel". When i click this cancel button the add-book form will dissapear.
- As a user i can add a new book using the add-book form. The list will automatically refresh containing the new book. 
- As a user i can filter the book-list based on a keyboard in the search component. This will find books containing the keyword in the title property of a book object.
- As a user i can delete a book item. After the delete the list will automatically refresh.
- As a user i can update a book item. You can either create a new component that handles the update or reuse the add-book form component.

## api endpoints
You can cosume the following public api:
```
https://books.d-ries.be/api/book
```
Available endpoints:
- `GET /api/book`: returns all book objects
- `POST /api/book`: add a new book object
- `DELETE /api/book/:id`: delete a book based on the id provided in the url
- `PUT /api/book/:id`: update a book object based on the id provided in the url

This API will reset every minute.