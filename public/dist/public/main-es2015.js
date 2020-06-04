(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n\n\n\n<!-- <div class=\"container\">\n\n    <h1>Adam J. Sikora</h1>\n    <h3>-Software Developer-</h3>\n    <p><a href=\"mailto:adamjsikora@gmail.com\">adamjsikora@gmail.com</a> - 708.764.0029 - <a href=\"https://www.linkedin.com/in/adamjsikora/\">linkedin.com/in/adamjsikora</a></p>\n\n    <div class=\"division\"></div> -->\n\n    <!-- <p *ngIf=\"elevator==true\">Focused developer looking to become a vital part of the team. Great balance between coding skill and soft skills. Effective communicator and teacher. Eager to learn deeply and be coached. Eager to build quality software and write beautiful code. Strong ability to see both the big and the small and how important the one is to the other. I lean towards back-end, but I have a background in film/visuals/videogames, so I know why things should look and feel good too.</p>\n\n    <div *ngIf=\"elevator==true\" class=\"division\"></div> -->\n\n    <!-- <router-outlet></router-outlet> -->\n\n    <!-- <app-projects></app-projects> -->\n\n<!-- </div> -->\n\n\n<!-- <img src=\"assets/images/hostility_skirmish/screenshot.png\" alt=\"hello\">\n<img src=\"assets/images/swedish_mountain_manicure/teleport.gif\" alt=\"hello\"> -->\n\n\n<!-- \n\n    <button [routerLink]=\"['/alpha']\">Load Alpha</button>\n    <a [routerLink] = \"['details', 5]\"> Go to /products/details/5 </a> \n\n\n    <div *ngIf=\"errors\">\n        <h4>Errors:</h4>\n        <ul>\n            <div *ngFor=\"let item of errors\">\n                <li class=\"errors\">{{item.message}}</li>\n            </div>\n        </ul>\n\n    </div>\n\n\n\n\n    <div *ngIf=\"createtask\">\n        <form (submit)=\"createTask()\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"createtask.title\" [(ngModel)]=\"createtask.title\" class=\"form-control\" id=\"title\" placeholder=\"---\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"createtask.description\" [(ngModel)]=\"createtask.description\" class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"---\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Create</button>\n        </form>\n    </div>\n\n    <div *ngIf=\"updatetask\">\n        <form (submit)=\"updateTask(onetask._id)\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"updatetask.title\" [(ngModel)]=\"updatetask.title\" class=\"form-control\" id=\"title\" value=\"updatetask.title\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"updatetask.description\" [(ngModel)]=\"updatetask.description\" class=\"form-control\" id=\"description\" rows=\"3\" value=\"updatetask.description\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Submit Edits</button>\n        </form>\n    </div>\n\n    <div class=\"division\"></div>\n\n    <button class=\"btn btn-primary\" (click)=\"getTasks()\">Click for Tasks</button>\n\n    <div class=\"division\"></div>\n\n    <div class=\"centered\" *ngFor=\"let task of tasks\">\n\n        <h2><a id=\"clickable\" (click)=\"getOneTask(task._id)\">{{task.title}}</a></h2>\n        <div class=\"division\"></div>\n    </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Books and Authors Exercise</h1>\n\n    <h4>Technologies</h4>\n    <p>Python, Django, MySQLite</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Books_Authors\">-Github-</a>\n\n    <h5>Adding and Linking Books and Authors</h5>\n    <img src=\"assets/images/books_authors/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cakes/cakes.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cakes/cakes.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Cake-Rating Exercise</h1>\n\n    <h4>Technologies</h4>\n    <p>Typescript, MongoDB, Express, Angular, Node.js</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Rate_My_Cakes\">-Github-</a>\n\n    <h5>Adding Cakes and Rating Cakes</h5>\n    <img src=\"assets/images/rate_my_cakes/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coin-machine/coin-machine.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coin-machine/coin-machine.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Coin Machine API</h1>\n\n    <p>I learned Ruby on Rails for this assignment from a prospective employer.  It's a basic CRUD API for depositing and withdrawing different coins from a machine.  It manages the possible coins and all of the transactions.  It alerts admins when the coin levels are too low.  It also uses a rudamentary, non-secure api key check before performing an action.</p>\n    <h4>Technologies</h4>\n    <p>Ruby on Rails, JSON, SQLite, Postman</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Coin_Machine\">-Github-</a>\n\n    <h5>Basic CRUD for Coins</h5>\n    <img src=\"assets/images/coin_machine/coins.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Basic CRUD for Transactions</h5>\n    <img src=\"assets/images/coin_machine/transactions.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch/fetch.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch/fetch.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"stick-top\">\n    <nav class=\"navbar navbar-light bg-white navbar-expand-md\">\n        <a href=\"/\"><img src=\"assets/images/fetch/fetch_logo.png\" style=\"width: 150px;\" class=\"hidden-sm hidden-xs navbar-brand\" alt=\"Fetch Rewards logo\"/></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div id=\"navbarNav\" class=\"navbar-collapse collapse justify-content-end\">\n            <ul class=\"nav navbar-nav justify-content-end\">\n                <li class=\"nav-item\"><a href='#' class='nav-link '>How it Works</a></li>\n                <li class=\"nav-item\"><a href='#' class='nav-link '>Brands</a></li>\n                <li class=\"nav-item\"><a href='#' class='nav-link '>Rewards</a></li>\n                <li class=\"nav-item\"><a href='#' class='nav-link '>Invite Friends</a></li>\n            </ul>\n        </div>\n    </nav>\n\n    <div class=\"divider\"></div>\n\n</div>\n\n<div class=\"container\">\n    <div style=\"margin-top:7%\">\n        <div class=\"row\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <img src=\"assets/images/fetch/groceries.png\" class=\"logo mw-100\" alt=\"Grocery bag with grocery products\"/>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h1>Input a <span class=\"orange\">WORD</span>, please?</h1>\n                        <form (submit)=\"input_check()\">\n                            <input type=\"text\" name=\"input\" [(ngModel)]=\"input\">\n                            <button class=\"btn fetch\" type=\"submit\">Fetch Result!</button>\n                        </form>\n                        <p>Is it a <span class=\"orange\">PYRAMID</span>?</p>\n\n                        <div *ngIf=\"result == null\">\n                            <div class=\"row\">\n                                <a href=\"https://apps.apple.com/app/id1182474649?ign-mpt=uo%3D2\" class=\"no-separation\" target=\"_blank\">\n                                    <img class=\"smaller-icon\" src=\"assets/images/fetch/appstore.png\" alt=\"Download Fetch Rewards in the App Store\"/>\n                                </a>\n\n                                <a href=\"https://play.google.com/store/apps/details?id=com.fetchrewards.fetchrewards.hop&hl=en\" class=\"no-separation\" target=\"_blank\">\n                                    <img class=\"smaller-icon\" src=\"assets/images/fetch/googleplay.png\" alt=\"Download Fetch Rewards in the Play Store\"/>\n                                </a>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"result == true\">\n                            <p class=\"result orange\">Pyramid!</p>\n                            <p class=\"last_input\">--{{last_input}}--</p>\n                            <div *ngFor=\"let item of dict_list | keyvalue\">\n                                <li>{{item.key}} - {{item.value}} times</li>\n                            </div> \n                        </div>\n\n                        <div *ngIf=\"result == false\">\n                            <p class=\"result orange\">Nope!</p>\n                            <p class=\"last_input\">--{{last_input}}--</p>\n                            <div *ngFor=\"let item of dict_list | keyvalue\">\n                                <li>{{item.key}} - {{item.value}} times</li>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">&nbsp;</div>\n\n    <div class=\"row\">\n        <div class=\"container\">\n            <div class=\"row d-flex justify-content-center scroll\" style=\"text-align:center\">\n                <p><b>Scroll to Learn More</b></p>\n            </div>\n            <div class=\"row d-flex justify-content-center\" style=\"text-align:center\">\n                <img src=\"assets/images/fetch/arrow_down.png\" alt=\"Scroll down arrow\"/>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n<footer>\n    <div class=\"zig-zag-top\" style=\"background-color:#ff9900; margin-left: -15px; margin-right: -15px\"></div>\n</footer>\n\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gold/gold.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gold/gold.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Gold-Getting Exercise</h1>\n\n    <h4>Technologies</h4>\n    <p>Python, Django, MySQLite</p>\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Gold_Getter_in_Django\">-Github-</a>\n\n    <p>and</p>\n\n    <p>Python, Flask, MySQLite</p>\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Gold_Getter_in_Flask\">-Github-</a>\n\n    <h5>Getting Golds</h5>\n    <img src=\"assets/images/gold_getter/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hostility/hostility.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hostility/hostility.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Hostility Skirmish</h1>\n\n    <p>Hostility Skirmish was a collobrative effort with two other programmers, built in a week.  We all wanted experience with Github and managing a project socially and using version control.  Getting the code to work as a multiplayer, online experience was the most difficult part, but we worked it out.</p>\n    <p>My contributions centered around building the gameplay mechanics and the models that it uses.  I had higher aspirations for it than we were able to get to.  We spent more time on the technology aspect of it than on the game itself.</p>\n    \n    <h4>Technologies</h4>\n    <p>C#, .NET Core, SQL</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Hostility_Skirmish\">-Github-</a>\n\n    <h5>Build your Party, Customize your Characters</h5>\n    <img src=\"assets/images/hostility_skirmish/build.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Challenge Fellow Onliners, Join the Battle</h5>\n    <img src=\"assets/images/hostility_skirmish/join_battle.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Turn-Based Attacks</h5>\n    <img src=\"assets/images/hostility_skirmish/attack.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Ouch!  Deaths.</h5>\n    <img src=\"assets/images/hostility_skirmish/death.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Inventory Shelf</h1>\n\n    <p>I used old POS software for a long time at a prior job.  I wanted to recreate it in a simple form and make it look much nicer!</p>\n    <h4>Technologies</h4>\n    <p>Typescript, MongoDB, Express, Angular, Node.js</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/InventoryShelf\">-Github-</a>\n\n    <h5>Adding, Editing, and Deleting a Product</h5>\n    <img src=\"assets/images/inventory_shelf/add_edit_delete.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Setting up a Keymap</h5>\n    <img src=\"assets/images/inventory_shelf/keymap.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Receive Inventory into the System</h5>\n    <img src=\"assets/images/inventory_shelf/receive.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Purchase your Snacks!</h5>\n    <img src=\"assets/images/inventory_shelf/purchase.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jigsaw/jigsaw.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jigsaw/jigsaw.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Jigsaw Registry</h1>\n\n    <p>A big hobby of mine is doing jigsaw puzzles.  At one point, I went looking for an app that could help me log my puzzling hobby, but I didn't find it.  So, I built it myself!</p>\n    <p>I have not yet been back to it to make it look and feel nice, but it was a challenge working with so many different models and forms.</p>\n    \n    <h4>Technologies</h4>\n    <p>Python, Django, SQLite</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/jigsaw_registry\">-Github-</a>\n\n    <h5>Log all of your Jigsaw Puzzles</h5>\n    <img src=\"assets/images/jigsaw_registry/view_puzzle.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Adding a Puzzle into the Database</h5>\n    <img src=\"assets/images/jigsaw_registry/add_puzzle.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Adding a Project into the System</h5>\n    <img src=\"assets/images/jigsaw_registry/add_project.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Check out your Stats</h5>\n    <img src=\"assets/images/jigsaw_registry/stats.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ninjaman/ninjaman.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ninjaman/ninjaman.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Ninjaman</h1>\n\n    <p>A typical pacman clone, but I learned a lot on building random worlds and using pathfinding algorithms to make sure that you could always win the game.</p>\n    <h4>Technologies</h4>\n    <p>Javascript</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Ninjaman\">-Github-</a>\n\n    <h5>Avoid the Monsters, Eat the Sushi</h5>\n    <img src=\"assets/images/ninjaman/win.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Randomized Worlds</h5>\n    <img src=\"assets/images/ninjaman/random.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Sorry, page not found!</h3>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/prod-cat/prod-cat.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prod-cat/prod-cat.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Products and Categories Exercise</h1>\n\n    <h4>Technologies</h4>\n    <p>C#, .NET Core, MySQL</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Products_Categories\">-Github-</a>\n\n    <h5>Adding, Editing, and Linking Products and Categories</h5>\n    <img src=\"assets/images/products_categories/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/prod-man/prod-man.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prod-man/prod-man.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Managing Products Exercise</h1>\n\n    <h4>Technologies</h4>\n    <p>Typescript, MongoDB, Express, Angular, Node.js</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Product_Manager\">-Github-</a>\n\n    <h5>Adding, Editing, and Viewing your Products</h5>\n    <img src=\"assets/images/product_manager/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<p *ngIf=\"elevator==true\" class=\"elevator\">Focused developer looking to become a vital part of the team. Great balance between technical skills and soft skills, creativity and habit. Effective communicator and teacher. Eager to learn deeply and be coached. Eager to build quality software and write beautiful code. Strong ability to see both the big and the small and how important the one is to the other. I have a background in filmmaking, editing, writing and video games, so I would love to join these passions with software development.</p>\n\n<div *ngIf=\"elevator==true\" class=\"division\"></div>\n\n\n<div class=\"inner\">\n    <div class=\"card\">\n        <div class=\"card-header\">Inventory Shelf</div>  \n        <img src=\"assets/images/inventory_shelf/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Manage Inventory, Make Purchases</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/inventory']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Coin Machine API</div>  \n        <img src=\"assets/images/coin_machine/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Basic CRUD for Coin Management</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/coin_machine']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Swedish Mountain Manicure</div>  \n        <img src=\"assets/images/swedish_mountain_manicure/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Platformer Video Game</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/swedish']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Wedding Planner</div>  \n        <img src=\"assets/images/wedding_planner/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Exercise with Login and Registration</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/wedding_planner']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Sacred Coins</div>  \n        <img src=\"assets/images/sacred_coins/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Vast Choose-Your-Own-Adventure</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/sacred']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Jigsaw Registry</div>  \n        <img src=\"assets/images/jigsaw_registry/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Jigsaw Puzzle Hobby Organizer</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/jigsaw']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Hostility Skirmish</div>  \n        <img src=\"assets/images/hostility_skirmish/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Online Multiplayer Battle Game</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/hostility']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Ninjaman</div>  \n        <img src=\"assets/images/ninjaman/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Pacman Clone</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/ninjaman']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Books and Authors</div>  \n        <img src=\"assets/images/books_authors/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Books and Authors Exercise</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/books_authors']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Gold Getter</div>  \n        <img src=\"assets/images/gold_getter/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Gold-Getting Exercise with Python</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/gold_getter']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Rate My Cakes</div>  \n        <img src=\"assets/images/rate_my_cakes/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Cake-Rating Exercise</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/rate_my_cakes']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Products and Categories</div>  \n        <img src=\"assets/images/products_categories/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Product and Category Exercise</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/products_categories']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Product Manager</div>  \n        <img src=\"assets/images/product_manager/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Managing Products Exercise</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/product_manager']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sacred/sacred.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sacred/sacred.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Sacred Coins</h1>\n\n    <p>When I was thirteen, I built a 200 page Choose-Your-Own-Adventure story for my family to play on Christmas Day in order to get their present.  And instead of flipping between pages, they had to walk to other parts of the house where I hid sleeves that contained each page of the story.  Every page had a different location in the house!  It had physical locks, items, and keys to use, and it was even customized for each family member.  It had 43 items in it and 17 ways to die.  No, no one ever completed it.  My mom did have me walk her through it though.</p>\n    <p>Anyway, I wanted to bring this back to life in a digital form.  (Don't pay attention to the writing!)  I really enjoyed building this, but I never finished it.  I loved building the sprites for the items. The crown jewel was working on the map and getting it to dynamically build as you played it!</p>\n    \n    <h4>Technologies</h4>\n    <p><a href=\"https://www.scirra.com/\">Built using Construct 2 (Visual Coding Language)</a></p>\n\n    <h5>Start your Adventure</h5>\n    <img src=\"assets/images/sacred_coins/start.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Get and Use Items</h5>\n    <img src=\"assets/images/sacred_coins/interact.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Full, Interactive Map, Builds as you Explore</h5>\n    <img src=\"assets/images/sacred_coins/map.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Find Multiple Rings to get past the Barrier</h5>\n    <img src=\"assets/images/sacred_coins/rings.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Built using a Visual Coding Language</h5>\n    <img src=\"assets/images/sacred_coins/coderun.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shell-portfolio/shell-portfolio.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell-portfolio/shell-portfolio.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n    <h1>Adam J. Sikora</h1>\n    <h3>-Software Developer-</h3>\n    <p><a href=\"mailto:adamjsikora@gmail.com\">adamjsikora@gmail.com</a> - 708.764.0029 - <a href=\"https://www.linkedin.com/in/adamjsikora/\">linkedin.com/in/adamjsikora</a></p>\n\n    <div class=\"division\"></div>\n\n    <!-- <p *ngIf=\"elevator==true\">Focused developer looking to become a vital part of the team. Great balance between coding skill and soft skills. Effective communicator and teacher. Eager to learn deeply and be coached. Eager to build quality software and write beautiful code. Strong ability to see both the big and the small and how important the one is to the other. I lean towards back-end, but I have a background in film/visuals/videogames, so I know why things should look and feel good too.</p>\n\n    <div *ngIf=\"elevator==true\" class=\"division\"></div> -->\n\n    <router-outlet></router-outlet>\n\n    <!-- <app-projects></app-projects> -->\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/swedish/swedish.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/swedish/swedish.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Swedish Mountain Manicure</h1>\n\n    <p>I had tons of fun on this project, as you may be able to tell.  I had told my partner to give me three words and that I would build a small videogame around.  She said, “Sweden, Nail Polish, and ...”  I can't remember the third one.  Maybe it was Passcard?</p>\n    <p>Anyway, I spent a lot of time working on the different sprites and gameplay modes of Jamie, our Nail Polish hero. Working with each element and getting them all to work together was particularly joyous for me.  I learned a whole lot about animation and programming a main character.  I even did a lot of experimenting building environments using repeated sprites.  Look at that teleport animation!  And have you built a sprite meatball that spins?</p>\n    \n    <h4>Technologies</h4>\n    <p><a href=\"https://www.scirra.com/\">Built using Construct 2 (Visual Coding Language)</a></p>\n\n    <h5>You are Nail Polish, Explore the Mountain, Its in Sweden.</h5>\n    <img src=\"assets/images/swedish_mountain_manicure/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Different Nail Polish, Different Game Play</h5>\n    <img src=\"assets/images/swedish_mountain_manicure/character.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Nifty Teleport Animation</h5>\n    <img src=\"assets/images/swedish_mountain_manicure/teleport.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wedding/wedding.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wedding/wedding.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Wedding Planner Exercise</h1>\n\n    <h4>Technologies</h4>\n    <p>C#, .NET Core, MySQL</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Wedding_Planner\">-Github-</a>\n\n    <h5>Login and Registration</h5>\n    <img src=\"assets/images/wedding_planner/registration.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <h5>Adding and RSVPing to a Wedding</h5>\n    <img src=\"assets/images/wedding_planner/adding_wedding.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hostility/hostility.component */ "./src/app/hostility/hostility.component.ts");
/* harmony import */ var _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ninjaman/ninjaman.component */ "./src/app/ninjaman/ninjaman.component.ts");
/* harmony import */ var _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swedish/swedish.component */ "./src/app/swedish/swedish.component.ts");
/* harmony import */ var _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sacred/sacred.component */ "./src/app/sacred/sacred.component.ts");
/* harmony import */ var _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jigsaw/jigsaw.component */ "./src/app/jigsaw/jigsaw.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prod-cat/prod-cat.component */ "./src/app/prod-cat/prod-cat.component.ts");
/* harmony import */ var _gold_gold_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gold/gold.component */ "./src/app/gold/gold.component.ts");
/* harmony import */ var _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wedding/wedding.component */ "./src/app/wedding/wedding.component.ts");
/* harmony import */ var _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cakes/cakes.component */ "./src/app/cakes/cakes.component.ts");
/* harmony import */ var _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./prod-man/prod-man.component */ "./src/app/prod-man/prod-man.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _fetch_fetch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fetch/fetch.component */ "./src/app/fetch/fetch.component.ts");
/* harmony import */ var _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shell-portfolio/shell-portfolio.component */ "./src/app/shell-portfolio/shell-portfolio.component.ts");
/* harmony import */ var _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./coin-machine/coin-machine.component */ "./src/app/coin-machine/coin-machine.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// import { EditComponent } from './edit/edit.component';
// import { NewComponent } from './new/new.component';



















const routes = [
    { path: '', component: _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_16__["ShellPortfolioComponent"],
        children: [
            { path: '', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"] },
            { path: 'hostility', component: _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_2__["HostilityComponent"] },
            { path: 'ninjaman', component: _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_3__["NinjamanComponent"] },
            { path: 'swedish', component: _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_4__["SwedishComponent"] },
            { path: 'sacred', component: _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_5__["SacredComponent"] },
            { path: 'jigsaw', component: _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_6__["JigsawComponent"] },
            { path: 'inventory', component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__["InventoryComponent"] },
            { path: 'books_authors', component: _books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"] },
            { path: 'products_categories', component: _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_9__["ProdCatComponent"] },
            { path: 'gold_getter', component: _gold_gold_component__WEBPACK_IMPORTED_MODULE_10__["GoldComponent"] },
            { path: 'wedding_planner', component: _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_11__["WeddingComponent"] },
            { path: 'rate_my_cakes', component: _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_12__["CakesComponent"] },
            { path: 'product_manager', component: _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_13__["ProdManComponent"] },
            { path: 'coin_machine', component: _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_17__["CoinMachineComponent"] },
        ]
    },
    { path: 'fetch', component: _fetch_fetch_component__WEBPACK_IMPORTED_MODULE_15__["FetchComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] }
];
// const routes: Routes = [
//     { path: '',component: ProjectsComponent },
//     { path: 'hostility',component: HostilityComponent },
//     { path: 'ninjaman',component: NinjamanComponent },
//     { path: 'swedish',component: SwedishComponent },
//     { path: 'sacred',component: SacredComponent },
//     { path: 'jigsaw',component: JigsawComponent },
//     { path: 'inventory',component: InventoryComponent },
//     { path: 'books_authors',component: BooksComponent },
//     { path: 'products_categories',component: ProdCatComponent },
//     { path: 'gold_getter',component: GoldComponent },
//     { path: 'wedding_planner',component: WeddingComponent },
//     { path: 'rate_my_cakes',component: CakesComponent },
//     { path: 'product_manager',component: ProdManComponent },
//     { path: 'fetch',component: FetchComponent },
//     { path: '**', component: PageNotFoundComponent }
// ];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_18__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]
    })
], AppRoutingModule);

// const routes: Routes = [
//     { path: 'product',component: ProductComponent, children: [
//         { path: 'details/:id', component: ProductDetailComponent },
//     ]},
//     { path: 'review',component: ReviewComponent, children: [
//         { path: 'details/:id', component: ReviewDetailComponent },
//     ]},
//     { path: '', pathMatch: 'full', redirectTo: '/product' },
// ];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    color: rgb(216, 216, 216)\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h1 {\r\n        font-size: 45px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFJQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBbUJBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7OztBQUlBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjMsIDE1NCk7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KVxyXG59XHJcblxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcblxyXG5cclxuXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxuXHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import { TaskService } from './task.service';
let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() {
        this.elevator = true;
    }
    ngOnDestroy() {
        console.log("ondestroy");
        this.elevator = false;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

//this._router.navigate(['authors/all'])
// private _route: ActivatedRoute,
// private _router: Router
//import { ActivatedRoute, Params, Router } from '@angular/router';
// this._route.params.subscribe(params => {
//             console.log(params);
//             this.id=params.id;
//         })
// getTasks(){
//     this.updatetask = null;
//     this.createtask = {
//         title: "",
//         description: ""
//     }
//     let observable = this._httpService.getTasks()
//     observable.subscribe(data => {
//         this.tasks = data['results'];
//         this.onetask = null;
//     });
// }
// getOneTask(id:number){
//     this.errors = null;
//     let observable = this._httpService.getOneTask(id)
//     observable.subscribe(data => {
//         this.tasks = null;
//         this.onetask = data['results'];
//     });
// }
// createTask(){
//     this.errors = null;
//     let observable = this._httpService.createTask(this.createtask)
//     observable.subscribe(data => {
//         if(data["results"]){
//             this.getTasks();
//             this.createtask = {
//                 title: "",
//                 description: ""
//             }
//         }
//         else if(data["errors"]){
//             this.errors = [];
//             for(let item in data["errors"]){
//                 this.errors.push(data["errors"][item]);
//             }
//         }
//     });       
// }
// deleteTask(id:number){
//     //resets
//     this.errors = null;
//     this.updatetask = null;
//     this.createtask = {
//         title: "",
//         description: ""
//     }
//     let observable = this._httpService.deleteTask(id)
//     observable.subscribe(data => {
//         this.getTasks();
//         this.onetask = null;
//     });
// }
// markComplete(id:number){
//     //resets
//     this.errors = null;
//     let observable = this._httpService.markComplete(id)
//     observable.subscribe(data => {
//         this.getOneTask(id);
//     });
// }
// editTask(){
//     console.log("hereh;rake;jrakj;er")
//     //resets
//     this.createtask = null;
//     this.errors = null;
//     this.updatetask = {
//         title: this.onetask.title,
//         description: this.onetask.description
//     }
// }
// updateTask(id:number){
//     console.log(id)
//     let observable = this._httpService.updateTask(id, this.updatetask)
//     observable.subscribe(data => {
//         if(data["results"]){
//             this.createtask = {
//             title: "",
//             description: ""
//             }
//             this.getOneTask(id);
//             this.updatetask = null;
//         }
//         else if(data["errors"]){
//             this.errors = [];
//             for(let item in data["errors"]){
//                 this.errors.push(data["errors"][item]);
//             }
//         }
//     });
// }


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hostility/hostility.component */ "./src/app/hostility/hostility.component.ts");
/* harmony import */ var _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ninjaman/ninjaman.component */ "./src/app/ninjaman/ninjaman.component.ts");
/* harmony import */ var _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./swedish/swedish.component */ "./src/app/swedish/swedish.component.ts");
/* harmony import */ var _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sacred/sacred.component */ "./src/app/sacred/sacred.component.ts");
/* harmony import */ var _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jigsaw/jigsaw.component */ "./src/app/jigsaw/jigsaw.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _gold_gold_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gold/gold.component */ "./src/app/gold/gold.component.ts");
/* harmony import */ var _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wedding/wedding.component */ "./src/app/wedding/wedding.component.ts");
/* harmony import */ var _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cakes/cakes.component */ "./src/app/cakes/cakes.component.ts");
/* harmony import */ var _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./prod-cat/prod-cat.component */ "./src/app/prod-cat/prod-cat.component.ts");
/* harmony import */ var _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./prod-man/prod-man.component */ "./src/app/prod-man/prod-man.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _fetch_fetch_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fetch/fetch.component */ "./src/app/fetch/fetch.component.ts");
/* harmony import */ var _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shell-portfolio/shell-portfolio.component */ "./src/app/shell-portfolio/shell-portfolio.component.ts");
/* harmony import */ var _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./coin-machine/coin-machine.component */ "./src/app/coin-machine/coin-machine.component.ts");






// import { TaskService } from './task.service';


















// import { ShowComponent } from './show/show.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
            _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_8__["HostilityComponent"],
            _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_9__["NinjamanComponent"],
            _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_10__["SwedishComponent"],
            _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_11__["SacredComponent"],
            _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_12__["JigsawComponent"],
            _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"],
            _books_books_component__WEBPACK_IMPORTED_MODULE_14__["BooksComponent"],
            _gold_gold_component__WEBPACK_IMPORTED_MODULE_15__["GoldComponent"],
            _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_16__["WeddingComponent"],
            _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_17__["CakesComponent"],
            _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_18__["ProdCatComponent"],
            _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_19__["ProdManComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
            _fetch_fetch_component__WEBPACK_IMPORTED_MODULE_21__["FetchComponent"],
            _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_22__["ShellPortfolioComponent"],
            _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_23__["CoinMachineComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        //   providers: [TaskService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BooksComponent = class BooksComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")).default]
    })
], BooksComponent);



/***/ }),

/***/ "./src/app/cakes/cakes.component.css":
/*!*******************************************!*\
  !*** ./src/app/cakes/cakes.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZXMvY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jYWtlcy9jYWtlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/cakes/cakes.component.ts":
/*!******************************************!*\
  !*** ./src/app/cakes/cakes.component.ts ***!
  \******************************************/
/*! exports provided: CakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakesComponent", function() { return CakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CakesComponent = class CakesComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
CakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cakes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cakes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cakes/cakes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cakes.component.css */ "./src/app/cakes/cakes.component.css")).default]
    })
], CakesComponent);



/***/ }),

/***/ "./src/app/coin-machine/coin-machine.component.css":
/*!*********************************************************!*\
  !*** ./src/app/coin-machine/coin-machine.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29pbi1tYWNoaW5lL2NvaW4tbWFjaGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvaW4tbWFjaGluZS9jb2luLW1hY2hpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/coin-machine/coin-machine.component.ts":
/*!********************************************************!*\
  !*** ./src/app/coin-machine/coin-machine.component.ts ***!
  \********************************************************/
/*! exports provided: CoinMachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinMachineComponent", function() { return CoinMachineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CoinMachineComponent = class CoinMachineComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
CoinMachineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coin-machine',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coin-machine.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coin-machine/coin-machine.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coin-machine.component.css */ "./src/app/coin-machine/coin-machine.component.css")).default]
    })
], CoinMachineComponent);



/***/ }),

/***/ "./src/app/fetch/fetch.component.css":
/*!*******************************************!*\
  !*** ./src/app/fetch/fetch.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    /* padding-top: 100px; */\r\n    /* height: 500px; */\r\n    /* background-image: linear-gradient(black 10%, white 90%); */\r\n}\r\n\r\n.smaller-icon{\r\n    /* display: inline-block; */\r\n    width: 156px;\r\n    height: auto;\r\n}\r\n\r\n.no-separation{\r\n    width: 156px;\r\n}\r\n\r\n.scroll{\r\n    font-size: 11px;\r\n    font-weight: 100;\r\n}\r\n\r\n.divider{\r\n    height: 15px;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(214, 214, 214)), color-stop(90%, white));\r\n    background-image: linear-gradient(rgb(214, 214, 214) 0%, white 90%);\r\n}\r\n\r\n.orange{\r\n    color: #ff9900;\r\n    text-shadow: 0px 1px 0px rgb(224, 125, 12);\r\n}\r\n\r\ninput{\r\n    border: 1px solid black;\r\n    height: 30px;\r\n    background-color: rgb(236, 236, 236);\r\n}\r\n\r\n.btn {\r\n    width: 140px;\r\n    margin-left: 15px;\r\n    font-size: 15px;\r\n    color: white;\r\n    /* text-shadow: 0px 0px 13px rgb(80, 43, 0); */\r\n    height: 30px;\r\n    border: 1px solid black;\r\n    border-radius: 1px 1px 3px black;\r\n    box-shadow: 0px 0px 3px rgb(63, 63, 63);\r\n    background-color: #ff9900;\r\n}\r\n\r\n.fetch {\r\n    line-height: 15px;\r\n}\r\n\r\n.result {\r\n    margin-top: -5px;\r\n    font-size: 80px;\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n}\r\n\r\nfooter {\r\nbackground-color: #fff;\r\n}\r\n\r\nfooter * {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nfooter\t.zig-zag-top:before{\r\n    background: \r\n                linear-gradient(-45deg, #ff9900 16px, red 16px, blue 16px,  transparent 0), \r\n                linear-gradient(45deg, #ff9900 16px, transparent 0);\r\n    background-position: left top;\r\n    background-repeat: repeat-x;\r\n    background-size: 22px 32px;\r\n    content: \" \";\r\n    display: block;\r\n\r\n    height: 32px;\r\n    width: 100%;\r\n\r\n    position: relative;\r\n    bottom: 64px;\r\n    left:0;\r\n}\r\n\r\nfooter\tdiv > * {\r\n    margin: 0 40px;\r\n}\r\n\r\nfooter\t.zig-zag-top{\r\n    margin: 32px 0;\r\n    margin-bottom: 0;\r\n    background: #ff9900;\r\n}\r\n\r\nfooter\t.zig-zag-top{\r\n    padding: 32px 0;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.last_input {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmV0Y2gvZmV0Y2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1IQUFtRTtJQUFuRSxtRUFBbUU7QUFDdkU7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osOENBQThDO0lBQzlDLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLHVDQUF1QztJQUN2Qyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFPQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7O21FQUUrRDtJQUMvRCw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osY0FBYzs7SUFFZCxZQUFZO0lBQ1osV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07QUFDVjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBbUNBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7OztBQUlBIiwiZmlsZSI6InNyYy9hcHAvZmV0Y2gvZmV0Y2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIC8qIHBhZGRpbmctdG9wOiAxMDBweDsgKi9cclxuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmxhY2sgMTAlLCB3aGl0ZSA5MCUpOyAqL1xyXG59XHJcblxyXG4uc21hbGxlci1pY29ue1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgd2lkdGg6IDE1NnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubm8tc2VwYXJhdGlvbntcclxuICAgIHdpZHRoOiAxNTZweDtcclxufVxyXG5cclxuLnNjcm9sbHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5kaXZpZGVye1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyMTQsIDIxNCwgMjE0KSAwJSwgd2hpdGUgOTAlKTtcclxufVxyXG5cclxuLm9yYW5nZXtcclxuICAgIGNvbG9yOiAjZmY5OTAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYigyMjQsIDEyNSwgMTIpO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLyogdGV4dC1zaGFkb3c6IDBweCAwcHggMTNweCByZ2IoODAsIDQzLCAwKTsgKi9cclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4IDFweCAzcHggYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2IoNjMsIDYzLCA2Myk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5OTAwO1xyXG59XHJcblxyXG4uZmV0Y2gge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxufVxyXG5cclxubGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZvb3RlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmZvb3RlciAqIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5mb290ZXJcdC56aWctemFnLXRvcDpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kOiBcclxuICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZjk5MDAgMTZweCwgcmVkIDE2cHgsIGJsdWUgMTZweCwgIHRyYW5zcGFyZW50IDApLCBcclxuICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmOTkwMCAxNnB4LCB0cmFuc3BhcmVudCAwKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMnB4IDMycHg7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNjRweDtcclxuICAgIGxlZnQ6MDtcclxufVxyXG5cclxuZm9vdGVyXHRkaXYgPiAqIHtcclxuICAgIG1hcmdpbjogMCA0MHB4O1xyXG59XHJcblxyXG5mb290ZXJcdC56aWctemFnLXRvcHtcclxuICAgIG1hcmdpbjogMzJweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjk5MDA7XHJcbn1cclxuXHJcbmZvb3Rlclx0LnppZy16YWctdG9we1xyXG4gICAgcGFkZGluZzogMzJweCAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubGFzdF9pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gXHJcbiAgICBcclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuXHJcblxyXG5cclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG5cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/fetch/fetch.component.ts":
/*!******************************************!*\
  !*** ./src/app/fetch/fetch.component.ts ***!
  \******************************************/
/*! exports provided: FetchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchComponent", function() { return FetchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FetchComponent = class FetchComponent {
    constructor() { }
    ngOnInit() {
        this.input = null;
        this.result = null;
    }
    input_check() {
        var dict = {};
        //make dictionary object with the characters and the times they appear, change to uppercase
        for (var i = 0; i < this.input.length; i++) {
            var char = this.input[i].toUpperCase();
            if (dict[char]) {
                dict[char]++;
            }
            else {
                dict[char] = 1;
            }
        }
        //find length of the dictionary
        var length = Object.keys(dict).length;
        //trigger for pyramid check
        var verdict = true;
        //check to make sure every value between 1 and the length is in the dictionary
        for (var i = 1; i <= length; i++) {
            //move to false, if it finds the value
            var bad_verdict_trigger = true;
            //loop dict
            for (var key in dict) {
                if (dict[key] == i) {
                    bad_verdict_trigger = false;
                    break;
                }
            }
            //if trigger still true;
            if (bad_verdict_trigger == true) {
                verdict = false;
            }
        }
        //RESULTS
        if (verdict == true) {
            this.result = true;
        }
        if (verdict == false) {
            this.result = false;
        }
        this.dict_list = dict;
        this.last_input = this.input;
        this.input = null;
        //edge case, SPACE
        if (this.dict_list[" "]) {
            this.dict_list["SPACE"] = this.dict_list[" "];
            delete this.dict_list[" "];
        }
    }
};
FetchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fetch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fetch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch/fetch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fetch.component.css */ "./src/app/fetch/fetch.component.css")).default]
    })
], FetchComponent);



/***/ }),

/***/ "./src/app/gold/gold.component.css":
/*!*****************************************!*\
  !*** ./src/app/gold/gold.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZC9nb2xkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvZ29sZC9nb2xkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/gold/gold.component.ts":
/*!****************************************!*\
  !*** ./src/app/gold/gold.component.ts ***!
  \****************************************/
/*! exports provided: GoldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoldComponent", function() { return GoldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GoldComponent = class GoldComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
GoldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gold',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gold.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gold/gold.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gold.component.css */ "./src/app/gold/gold.component.css")).default]
    })
], GoldComponent);



/***/ }),

/***/ "./src/app/hostility/hostility.component.css":
/*!***************************************************!*\
  !*** ./src/app/hostility/hostility.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdGlsaXR5L2hvc3RpbGl0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hvc3RpbGl0eS9ob3N0aWxpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/hostility/hostility.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hostility/hostility.component.ts ***!
  \**************************************************/
/*! exports provided: HostilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostilityComponent", function() { return HostilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HostilityComponent = class HostilityComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
HostilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hostility',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hostility.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hostility/hostility.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hostility.component.css */ "./src/app/hostility/hostility.component.css")).default]
    })
], HostilityComponent);



/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/*!***************************************************!*\
  !*** ./src/app/inventory/inventory.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InventoryComponent = class InventoryComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")).default]
    })
], InventoryComponent);



/***/ }),

/***/ "./src/app/jigsaw/jigsaw.component.css":
/*!*********************************************!*\
  !*** ./src/app/jigsaw/jigsaw.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamlnc2F3L2ppZ3Nhdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2ppZ3Nhdy9qaWdzYXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/jigsaw/jigsaw.component.ts":
/*!********************************************!*\
  !*** ./src/app/jigsaw/jigsaw.component.ts ***!
  \********************************************/
/*! exports provided: JigsawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JigsawComponent", function() { return JigsawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JigsawComponent = class JigsawComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
JigsawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jigsaw',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jigsaw.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jigsaw/jigsaw.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jigsaw.component.css */ "./src/app/jigsaw/jigsaw.component.css")).default]
    })
], JigsawComponent);



/***/ }),

/***/ "./src/app/ninjaman/ninjaman.component.css":
/*!*************************************************!*\
  !*** ./src/app/ninjaman/ninjaman.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmluamFtYW4vbmluamFtYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9uaW5qYW1hbi9uaW5qYW1hbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/ninjaman/ninjaman.component.ts":
/*!************************************************!*\
  !*** ./src/app/ninjaman/ninjaman.component.ts ***!
  \************************************************/
/*! exports provided: NinjamanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NinjamanComponent", function() { return NinjamanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NinjamanComponent = class NinjamanComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
NinjamanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ninjaman',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ninjaman.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ninjaman/ninjaman.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ninjaman.component.css */ "./src/app/ninjaman/ninjaman.component.css")).default]
    })
], NinjamanComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/prod-cat/prod-cat.component.css":
/*!*************************************************!*\
  !*** ./src/app/prod-cat/prod-cat.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZC1jYXQvcHJvZC1jYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kLWNhdC9wcm9kLWNhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/prod-cat/prod-cat.component.ts":
/*!************************************************!*\
  !*** ./src/app/prod-cat/prod-cat.component.ts ***!
  \************************************************/
/*! exports provided: ProdCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdCatComponent", function() { return ProdCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProdCatComponent = class ProdCatComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
ProdCatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prod-cat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prod-cat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/prod-cat/prod-cat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prod-cat.component.css */ "./src/app/prod-cat/prod-cat.component.css")).default]
    })
], ProdCatComponent);



/***/ }),

/***/ "./src/app/prod-man/prod-man.component.css":
/*!*************************************************!*\
  !*** ./src/app/prod-man/prod-man.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZC1tYW4vcHJvZC1tYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kLW1hbi9wcm9kLW1hbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/prod-man/prod-man.component.ts":
/*!************************************************!*\
  !*** ./src/app/prod-man/prod-man.component.ts ***!
  \************************************************/
/*! exports provided: ProdManComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdManComponent", function() { return ProdManComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProdManComponent = class ProdManComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
ProdManComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prod-man',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prod-man.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/prod-man/prod-man.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prod-man.component.css */ "./src/app/prod-man/prod-man.component.css")).default]
    })
], ProdManComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    vertical-align: top;\r\n}\r\n\r\nimg {\r\n    margin: 5px auto;\r\n    height: 40%;\r\n    width: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n/* p {\r\n    max-height: 20%;\r\n} */\r\n\r\n.card-header {\r\n    margin: 0px auto 5px auto;\r\n    /* font: pink; */\r\n    display: block;\r\n    background-color: rgb(145, 145, 145);\r\n    /* background-color: rgb(160, 163, 154); */\r\n    /* background-image: radial-gradient(black,white); */\r\n    /* background-image: linear-gradient(black 50%,white, black); */\r\n}\r\n\r\n.card {\r\n    background-color: rgb(216, 216, 216);\r\n    width: 40%;\r\n    margin: 20px;\r\n    height: 300px;\r\n    display: inline-block;\r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.card-body {\r\n    height: 40%;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n    .card {\r\n        width: 100%;\r\n        height: auto;\r\n        margin: 20px;\r\n        font-size: 35px;\r\n        /* height: 800px; */\r\n        display: inline-block;\r\n    }\r\n\r\n    img {\r\n        width: 60%;\r\n        margin: 5px auto;\r\n    }\r\n\r\n    .elevator {\r\n        font-size: 20px;\r\n    }\r\n\r\n    button {\r\n        font-size: 30px;\r\n    }\r\n \r\n    \r\n}\r\n\r\n@media only screen and (max-width: 481px) {\r\n    .card {\r\n        \r\n        /* height: 700px; */\r\n\r\n    }\r\n\r\n   \r\n\r\n\r\n}\r\n\r\n/* @media only screen and (min-width: 1024px) {\r\n    .card {\r\n        width: 30%;\r\n        margin: 10px;\r\n        display: inline-block;\r\n    }\r\n\r\n\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7R0FFRzs7QUFHSDtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsb0RBQW9EO0lBQ3BELCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQU1BO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7O0FBR0o7O0FBRUE7SUFDSTs7UUFFSSxtQkFBbUI7O0lBRXZCOzs7OztBQUtKOztBQUVBOzs7Ozs7OztHQVFHIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogcCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XHJcbn0gKi9cclxuXHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byA1cHggYXV0bztcclxuICAgIC8qIGZvbnQ6IHBpbms7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MywgMTU0KTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChibGFjayx3aGl0ZSk7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmxhY2sgNTAlLHdoaXRlLCBibGFjayk7ICovXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIC8qIGhlaWdodDogODAwcHg7ICovXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGV2YXRvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gXHJcbiAgICBcclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgxcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBcclxuICAgICAgICAvKiBoZWlnaHQ6IDcwMHB4OyAqL1xyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuXHJcbn1cclxuICAgIFxyXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcblxyXG59ICovIl19 */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



let ProjectsComponent = class ProjectsComponent {
    constructor(appcomponent) {
        this.appcomponent = appcomponent;
    }
    ngOnInit() {
        this.elevator = true;
    }
    // ngOnChanges(){
    //     this.elevator = true;
    // }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    ngOnDestroy() {
        this.elevator = false;
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/sacred/sacred.component.css":
/*!*********************************************!*\
  !*** ./src/app/sacred/sacred.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FjcmVkL3NhY3JlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3NhY3JlZC9zYWNyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/sacred/sacred.component.ts":
/*!********************************************!*\
  !*** ./src/app/sacred/sacred.component.ts ***!
  \********************************************/
/*! exports provided: SacredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SacredComponent", function() { return SacredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SacredComponent = class SacredComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
SacredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sacred',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sacred.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sacred/sacred.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sacred.component.css */ "./src/app/sacred/sacred.component.css")).default]
    })
], SacredComponent);



/***/ }),

/***/ "./src/app/shell-portfolio/shell-portfolio.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shell-portfolio/shell-portfolio.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    color: rgb(216, 216, 216)\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h1 {\r\n        font-size: 45px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwtcG9ydGZvbGlvL3NoZWxsLXBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBSUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQW1CQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsLXBvcnRmb2xpby9zaGVsbC1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIC8qIG91dGxpbmU6IDFweCBkb3R0ZWQgcmVkOyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk3MHB4O1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MywgMTU0KTtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpXHJcbn1cclxuXHJcbmgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuXHJcblxyXG5cclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG5cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shell-portfolio/shell-portfolio.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shell-portfolio/shell-portfolio.component.ts ***!
  \**************************************************************/
/*! exports provided: ShellPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellPortfolioComponent", function() { return ShellPortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShellPortfolioComponent = class ShellPortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShellPortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shell-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shell-portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shell-portfolio/shell-portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shell-portfolio.component.css */ "./src/app/shell-portfolio/shell-portfolio.component.css")).default]
    })
], ShellPortfolioComponent);



/***/ }),

/***/ "./src/app/swedish/swedish.component.css":
/*!***********************************************!*\
  !*** ./src/app/swedish/swedish.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dlZGlzaC9zd2VkaXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvc3dlZGlzaC9zd2VkaXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/swedish/swedish.component.ts":
/*!**********************************************!*\
  !*** ./src/app/swedish/swedish.component.ts ***!
  \**********************************************/
/*! exports provided: SwedishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwedishComponent", function() { return SwedishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SwedishComponent = class SwedishComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
SwedishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-swedish',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./swedish.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/swedish/swedish.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./swedish.component.css */ "./src/app/swedish/swedish.component.css")).default]
    })
], SwedishComponent);



/***/ }),

/***/ "./src/app/wedding/wedding.component.css":
/*!***********************************************!*\
  !*** ./src/app/wedding/wedding.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VkZGluZy93ZWRkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvd2VkZGluZy93ZWRkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/wedding/wedding.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wedding/wedding.component.ts ***!
  \**********************************************/
/*! exports provided: WeddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeddingComponent", function() { return WeddingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeddingComponent = class WeddingComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
WeddingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wedding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wedding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wedding/wedding.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wedding.component.css */ "./src/app/wedding/wedding.component.css")).default]
    })
], WeddingComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\X-Chill-X\Github\Profile\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map