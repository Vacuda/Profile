import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-machine',
  templateUrl: './coin-machine.component.html',
  styleUrls: ['./coin-machine.component.css']
})
export class CoinMachineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toTop(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
