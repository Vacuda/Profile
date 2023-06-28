import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-friend',
  templateUrl: './fetch-friend.component.html',
  styleUrls: ['./fetch-friend.component.css']
})
export class FetchFriendComponent implements OnInit {

    bIsWeb: boolean;

    constructor() { }

    ngOnInit() {
    }

    toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
