import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honey-hives',
  templateUrl: './honey-hives.component.html',
  styleUrls: ['./honey-hives.component.css']
})
export class HoneyHivesComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}