import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fantastic-knock-about',
  templateUrl: './fantastic-knock-about.component.html',
  styleUrls: ['./fantastic-knock-about.component.css']
})
export class FantasticKnockAboutComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    // TEST ADD FOR DEPLOYMENT

}
