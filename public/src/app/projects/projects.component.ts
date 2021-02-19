import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    constructor(private appcomponent: AppComponent){}

    ngOnInit() {

    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
