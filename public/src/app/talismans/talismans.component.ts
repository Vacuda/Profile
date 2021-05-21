import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-talismans',
  templateUrl: './talismans.component.html',
  styleUrls: ['./talismans.component.css']
})
export class TalismansComponent implements OnInit {

bIsWeb: boolean;
blockthemiddlebutton: boolean = false;

@Input() bIsWeb_InputVariable;
@Input() BlockAButton;

//GENERAL
item_tagline: boolean                       = false;
item_prod_gen_design: boolean               = false;
item_learn_unreal: boolean                  = false;

//CODE DESIGN
item_cpp_integration: boolean               = false;
item_communication: boolean                 = false;
item_naming: boolean                        = false;
item_comments: boolean                      = false;
item_pointers: boolean                      = false;
item_save_games: boolean                    = false;
item_piece_faces: boolean                   = false;

item_precise_uvs: boolean                   = false;
item_recognize_connections: boolean         = false;
item_connecting_pieces: boolean             = false;
item_rotating: boolean                      = false;
item_refactors: boolean                     = false;
item_mem_management: boolean                = false;
item_oop_vs_func: boolean                   = false;

item_obj_act_str: boolean                   = false;
item_multiple_levels: boolean               = false;
item_blueprints: boolean                    = false;
item_widgets: boolean                       = false;
item_stats_menu: boolean                    = false;
item_rigging: boolean                       = false;
item_puzzle_pieces: boolean                 = false;
item_table_navigation: boolean              = false;

//GAME DESIGN / ART

item_puzzle_images: boolean                 = false;
item_character_crests: boolean              = false;
item_parables: boolean                      = false;
item_prod_gen_levels: boolean               = false;

item_vessels: boolean                       = false;
item_gameplay_verbs: boolean                = false;
item_modeling: boolean                     = false;

constructor() { 
}

ngOnInit() {
    //if defined by shell talismans web
    if(this.bIsWeb_InputVariable){
        this.bIsWeb = true;
    }
    //not defined
    else{
        //this means regular /talismans
        this.bIsWeb = false;
    }

    if(this.BlockAButton == true){
        this.blockthemiddlebutton = true;
    }
}

toTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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

//GENERAL
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

    toggle_item_prod_gen_design(){
        if(this.item_prod_gen_design == false){
            this.item_prod_gen_design = true;
            var element = document.getElementById("item_prod_gen_design");
            this.scrollToThisElement(element);
        }
        else{
            this.item_prod_gen_design = false;
        }
    }

    toggle_item_learn_unreal(){
        if(this.item_learn_unreal == false){
            this.item_learn_unreal = true;
            var element = document.getElementById("item_learn_unreal");
            this.scrollToThisElement(element);
        }
        else{
            this.item_learn_unreal = false;
        }
    }


//CODE DESIGN

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

    toggle_item_communication(){
        if(this.item_communication == false){
            this.item_communication = true;
            var element = document.getElementById("item_communication");
            this.scrollToThisElement(element);
        }
        else{
            this.item_communication = false;
        }
    }

    toggle_item_naming(){
        if(this.item_naming == false){
            this.item_naming = true;
            var element = document.getElementById("item_naming");
            this.scrollToThisElement(element);
        }
        else{
            this.item_naming = false;
        }
    }

    toggle_item_comments(){
        if(this.item_comments == false){
            this.item_comments = true;
            var element = document.getElementById("item_comments");
            this.scrollToThisElement(element);
        }
        else{
            this.item_comments = false;
        }
    }

    toggle_item_pointers(){
        if(this.item_pointers == false){
            this.item_pointers = true;
            var element = document.getElementById("item_pointers");
            this.scrollToThisElement(element);
        }
        else{
            this.item_pointers = false;
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

    toggle_item_piece_faces(){
        if(this.item_piece_faces == false){
            this.item_piece_faces = true;
            var element = document.getElementById("item_piece_faces");
            this.scrollToThisElement(element);
        }
        else{
            this.item_piece_faces = false;
        }
    }

    toggle_item_precise_uvs(){
        if(this.item_precise_uvs == false){
            this.item_precise_uvs = true;
            var element = document.getElementById("item_precise_uvs");
            this.scrollToThisElement(element);
        }
        else{
            this.item_precise_uvs = false;
        }
    }

    toggle_item_recognize_connections(){
        if(this.item_recognize_connections == false){
            this.item_recognize_connections = true;
            var element = document.getElementById("item_recognize_connections");
            this.scrollToThisElement(element);
        }
        else{
            this.item_recognize_connections = false;
        }
    }

    toggle_item_connecting_pieces(){
        if(this.item_connecting_pieces == false){
            this.item_connecting_pieces = true;
            var element = document.getElementById("item_connecting_pieces");
            this.scrollToThisElement(element);
        }
        else{
            this.item_connecting_pieces = false;
        }
    }

    toggle_item_rotating(){
        if(this.item_rotating == false){
            this.item_rotating = true;
            var element = document.getElementById("item_rotating");
            this.scrollToThisElement(element);
        }
        else{
            this.item_rotating = false;
        }
    }

    toggle_item_refactors(){
        if(this.item_refactors == false){
            this.item_refactors = true;
            var element = document.getElementById("item_refactors");
            this.scrollToThisElement(element);
        }
        else{
            this.item_refactors = false;
        }
    }

    toggle_item_mem_management(){
        if(this.item_mem_management == false){
            this.item_mem_management = true;
            var element = document.getElementById("item_mem_management");
            this.scrollToThisElement(element);
        }
        else{
            this.item_mem_management = false;
        }
    }

    toggle_item_oop_vs_func(){
        if(this.item_oop_vs_func == false){
            this.item_oop_vs_func = true;
            var element = document.getElementById("item_oop_vs_func");
            this.scrollToThisElement(element);
        }
        else{
            this.item_oop_vs_func = false;
        }
    }

    toggle_item_obj_act_str(){
        if(this.item_obj_act_str == false){
            this.item_obj_act_str = true;
            var element = document.getElementById("item_obj_act_str");
            this.scrollToThisElement(element);
        }
        else{
            this.item_obj_act_str = false;
        }
    }

    toggle_item_multiple_levels(){
        if(this.item_multiple_levels == false){
            this.item_multiple_levels = true;
            var element = document.getElementById("item_multiple_levels");
            this.scrollToThisElement(element);
        }
        else{
            this.item_multiple_levels = false;
        }
    }

    toggle_item_blueprints(){
        if(this.item_blueprints == false){
            this.item_blueprints = true;
            var element = document.getElementById("item_blueprints");
            this.scrollToThisElement(element);
        }
        else{
            this.item_blueprints = false;
        }
    }

    toggle_item_widgets(){
        if(this.item_widgets == false){
            this.item_widgets = true;
            var element = document.getElementById("item_widgets");
            this.scrollToThisElement(element);
        }
        else{
            this.item_widgets = false;
        }
    }

    toggle_item_stats_menu(){
        if(this.item_stats_menu == false){
            this.item_stats_menu = true;
            var element = document.getElementById("item_stats_menu");
            this.scrollToThisElement(element);
        }
        else{
            this.item_stats_menu = false;
        }
    }

    toggle_item_rigging(){
        if(this.item_rigging == false){
            this.item_rigging = true;
            var element = document.getElementById("item_rigging");
            this.scrollToThisElement(element);
        }
        else{
            this.item_rigging = false;
        }
    }

    toggle_item_puzzle_pieces(){
        if(this.item_puzzle_pieces == false){
            this.item_puzzle_pieces = true;
            var element = document.getElementById("item_puzzle_pieces");
            this.scrollToThisElement(element);
        }
        else{
            this.item_puzzle_pieces = false;
        }
    }

    toggle_item_table_navigation(){
        if(this.item_table_navigation == false){
            this.item_table_navigation = true;
            var element = document.getElementById("item_table_navigation");
            this.scrollToThisElement(element);
        }
        else{
            this.item_table_navigation = false;
        }
    }


//GAME DESIGN / ART

    toggle_item_puzzle_images(){
        if(this.item_puzzle_images == false){
            this.item_puzzle_images = true;
            var element = document.getElementById("item_puzzle_images");
            this.scrollToThisElement(element);
        }
        else{
            this.item_puzzle_images = false;
        }
    }

    toggle_item_vessels(){
        if(this.item_vessels == false){
            this.item_vessels = true;
            var element = document.getElementById("item_vessels");
            this.scrollToThisElement(element);
        }
        else{
            this.item_vessels = false;
        }
    }

    toggle_item_parables(){
        if(this.item_parables == false){
            this.item_parables = true;
            var element = document.getElementById("item_parables");
            this.scrollToThisElement(element);
        }
        else{
            this.item_parables = false;
        }
    }

    toggle_item_character_crests(){
        if(this.item_character_crests == false){
            this.item_character_crests = true;
            var element = document.getElementById("item_character_crests");
            this.scrollToThisElement(element);
        }
        else{
            this.item_character_crests = false;
        }
    }

    toggle_item_gameplay_verbs(){
        if(this.item_gameplay_verbs == false){
            this.item_gameplay_verbs = true;
            var element = document.getElementById("item_gameplay_verbs");
            this.scrollToThisElement(element);
        }
        else{
            this.item_gameplay_verbs = false;
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

    toggle_item_modeling(){
        if(this.item_modeling == false){
            this.item_modeling = true;
            var element = document.getElementById("item_modeling");
            this.scrollToThisElement(element);
        }
        else{
            this.item_modeling = false;
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
