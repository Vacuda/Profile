import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninjaman',
  templateUrl: './ninjaman.component.html',
  styleUrls: ['./ninjaman.component.css']
})
export class NinjamanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
