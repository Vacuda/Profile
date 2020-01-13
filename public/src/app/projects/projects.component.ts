import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    elevator: any;

    constructor(private appcomponent: AppComponent){}

    ngOnInit() {
        this.elevator = true;
    }

    // ngOnChanges(){
    //     this.elevator = true;
    // }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    ngOnDestroy(){
        this.elevator = false;
    }

}
