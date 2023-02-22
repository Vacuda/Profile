import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-break-out-again',
  templateUrl: './break-out-again.component.html',
  styleUrls: ['./break-out-again.component.css']
})
export class BreakOutAgainComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
