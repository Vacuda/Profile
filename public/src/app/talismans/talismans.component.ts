import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talismans',
  templateUrl: './talismans.component.html',
  styleUrls: ['./talismans.component.css']
})
export class TalismansComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
