import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

    result:any;
    input:any;
    last_input:any;
    dict_list:any;

    constructor() { }

    ngOnInit() {
        this.input = null;
        this.result = null;
    }

    input_check(){

        var dict = {};

        //make dictionary object with the characters and the times they appear, change to uppercase
        for (var i=0; i<this.input.length;i++){
            var char = this.input[i].toUpperCase();

            if(dict[char]){
                dict[char]++;
            }
            else{
                dict[char] = 1;
            }
        }

        //find length of the dictionary
        var length = Object.keys(dict).length;
        //trigger for pyramid check
        var verdict = true;

        //check to make sure every value between 1 and the length is in the dictionary
        for(var i=1; i<=length;i++){

            //move to false, if it finds the value
            var bad_verdict_trigger = true;

            //loop dict
            for(var key in dict){
                if(dict[key]==i){
                    bad_verdict_trigger = false;
                    break;
                }
            }

            //if trigger still true;
            if(bad_verdict_trigger == true){
                verdict = false;
            }
        }

        //RESULTS

        if(verdict == true){
            this.result = true;
        }

        if(verdict == false){
            this.result = false;
        }

        this.dict_list = dict;
        this.last_input = this.input;
        this.input = null;

        //edge case, SPACE
        if(this.dict_list[" "]){
            this.dict_list["SPACE"] = this.dict_list[" "];
            delete this.dict_list[" "]
        }



    }

}
