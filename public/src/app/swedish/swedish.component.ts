import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swedish',
  templateUrl: './swedish.component.html',
  styleUrls: ['./swedish.component.css']
})
export class SwedishComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
