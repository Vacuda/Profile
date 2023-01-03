import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crop-tool',
  templateUrl: './crop-tool.component.html',
  styleUrls: ['./crop-tool.component.css']
})
export class CropToolComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
