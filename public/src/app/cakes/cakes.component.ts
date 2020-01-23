import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    toTop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

}
