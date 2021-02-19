import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-cat',
  templateUrl: './prod-cat.component.html',
  styleUrls: ['./prod-cat.component.css']
})
export class ProdCatComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
