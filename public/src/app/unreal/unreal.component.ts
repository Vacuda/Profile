import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unreal',
  templateUrl: './unreal.component.html',
  styleUrls: ['./unreal.component.css']
})
export class UnrealComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
