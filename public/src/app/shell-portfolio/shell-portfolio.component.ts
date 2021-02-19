import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-portfolio',
  templateUrl: './shell-portfolio.component.html',
  styleUrls: ['./shell-portfolio.component.css']
})
export class ShellPortfolioComponent implements OnInit {

    // elevator: boolean;

    constructor() { }

    ngOnInit() {
        // this.elevator = true;
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    onOutletLoaded(component) {
        component.bIsWeb = false;
    }

    // ngOnDestroy(){
    //     this.elevator = false;
    // }

}

