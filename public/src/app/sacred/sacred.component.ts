import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sacred',
  templateUrl: './sacred.component.html',
  styleUrls: ['./sacred.component.css']
})
export class SacredComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
