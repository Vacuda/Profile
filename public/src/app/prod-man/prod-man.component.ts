import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-man',
  templateUrl: './prod-man.component.html',
  styleUrls: ['./prod-man.component.css']
})
export class ProdManComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
