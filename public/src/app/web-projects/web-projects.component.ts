import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.css']
})
export class WebProjectsComponent implements OnInit {

    constructor(private appcomponent: AppComponent){}

    ngOnInit() {

    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }


}
