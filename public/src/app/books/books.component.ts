import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    toTop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

}
