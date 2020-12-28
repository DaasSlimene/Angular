import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Book from '../Book';
import { BookService } from '../_service/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book!: Book;
  
  constructor( private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookService.getbyid(params.id).subscribe(book => {
        this.book = book;
      })
  })
  }
  getbyid(id:any){
    let response = this.bookService.getbyid(id);
    response.subscribe(data => {
      this.book = data;
      return this.book;
    });
        
  }
  updateBook( id: any,  author:any,  price:any,releasedate:any, title:any): void {
    console.log(this.book);
    this.bookService.updateBook(id,author,price,releasedate,title).subscribe((book) => {
        console.log('Book added from add-book.component.ts',book);
    })
}


}
