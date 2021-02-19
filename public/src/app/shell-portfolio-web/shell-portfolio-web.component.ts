import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-portfolio-web',
  templateUrl: './shell-portfolio-web.component.html',
  styleUrls: ['./shell-portfolio-web.component.css']
})
export class ShellPortfolioWebComponent implements OnInit {

    // elevator: boolean;

    constructor() { }

    ngOnInit() {
        // this.elevator = true;
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    onOutletLoaded(component) {
        component.bIsWeb = true;
    }

    // ngOnDestroy(){
    //     this.elevator = false;
    // }

}
