import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blender',
  templateUrl: './blender.component.html',
  styleUrls: ['./blender.component.css']
})
export class BlenderComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
