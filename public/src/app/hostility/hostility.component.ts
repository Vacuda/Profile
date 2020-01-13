import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostility',
  templateUrl: './hostility.component.html',
  styleUrls: ['./hostility.component.css']
})
export class HostilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
