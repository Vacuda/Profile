import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cater-iron-galaxy',
  templateUrl: './cater-iron-galaxy.component.html',
  styleUrls: ['./cater-iron-galaxy.component.css']
})
export class CaterIronGalaxyComponent implements OnInit {

    item_tagline: boolean                       = false;
    item_prod_gen_levels: boolean               = false;
    item_menu: boolean                          = false;
    item_rand_cut_puzzles: boolean              = false;
    item_save_games: boolean                    = false;

    item_cpp_integration: boolean               = false;

    constructor() { 
    }

    ngOnInit() {
    }
    
    scrollToThisElement(element: HTMLElement){
        //get location to scroll to
        var NewOffset: number = element.getBoundingClientRect().top + window.pageYOffset - 60;

        //perform scroll
        window.scrollTo({
            top: NewOffset,
            left: 0,
            behavior: 'smooth'
        });
    }

//TOGGLE FUNCTIONS

    toggle_item_tagline(){
        if(this.item_tagline == false){
            this.item_tagline = true;
            var element = document.getElementById("item_tagline");
            this.scrollToThisElement(element);
        }
        else{
            this.item_tagline = false;
        }
    }

    toggle_item_prod_gen_levels(){
        if(this.item_prod_gen_levels == false){
            this.item_prod_gen_levels = true;
            var element = document.getElementById("item_prod_gen_levels");
            this.scrollToThisElement(element);
        }
        else{
            this.item_prod_gen_levels = false;
        }
    }

    toggle_item_menu(){
        if(this.item_menu == false){
            this.item_menu = true;
            var element = document.getElementById("item_menu");
            this.scrollToThisElement(element);
        }
        else{
            this.item_menu = false;
        }
    }

    toggle_item_rand_cut_puzzles(){
        if(this.item_rand_cut_puzzles == false){
            this.item_rand_cut_puzzles = true;
            var element = document.getElementById("item_rand_cut_puzzles");
            this.scrollToThisElement(element);
        }
        else{
            this.item_rand_cut_puzzles = false;
        }
    }

    toggle_item_save_games(){
        if(this.item_save_games == false){
            this.item_save_games = true;
            var element = document.getElementById("item_save_games");
            this.scrollToThisElement(element);
        }
        else{
            this.item_save_games = false;
        }
    }

    toggle_item_cpp_integration(){
        if(this.item_cpp_integration == false){
            this.item_cpp_integration = true;
            var element = document.getElementById("item_cpp_integration");
            this.scrollToThisElement(element);
        }
        else{
            this.item_cpp_integration = false;
        }
    }

    // toggle_item_xxx(){
    //     if(this.item_xxx == false){
    //         this.item_xxx = true;
    //         var element = document.getElementById("item_xxx");
    //         this.scrollToThisElement(element);
    //     }
    //     else{
    //         this.item_xxx = false;
    //     }
    // }
}
