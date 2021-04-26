function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n\n\n\n\n<!-- <div class=\"container\">\n\n    <h1>Adam J. Sikora</h1>\n    <h3>-Software Developer-</h3>\n    <p><a href=\"mailto:adamjsikora@gmail.com\">adamjsikora@gmail.com</a> - 708.764.0029 - <a href=\"https://www.linkedin.com/in/adamjsikora/\">linkedin.com/in/adamjsikora</a></p>\n\n    <div class=\"division\"></div> -->\n\n    <!-- <p *ngIf=\"elevator==true\">Focused developer looking to become a vital part of the team. Great balance between coding skill and soft skills. Effective communicator and teacher. Eager to learn deeply and be coached. Eager to build quality software and write beautiful code. Strong ability to see both the big and the small and how important the one is to the other. I lean towards back-end, but I have a background in film/visuals/videogames, so I know why things should look and feel good too.</p>\n\n    <div *ngIf=\"elevator==true\" class=\"division\"></div> -->\n\n    <!-- <router-outlet></router-outlet> -->\n\n    <!-- <app-projects></app-projects> -->\n\n<!-- </div> -->\n\n\n<!-- <img src=\"assets/images/hostility_skirmish/screenshot.png\" alt=\"hello\">\n<img src=\"assets/images/swedish_mountain_manicure/teleport.gif\" alt=\"hello\"> -->\n\n\n<!-- \n\n    <button [routerLink]=\"['/alpha']\">Load Alpha</button>\n    <a [routerLink] = \"['details', 5]\"> Go to /products/details/5 </a> \n\n\n    <div *ngIf=\"errors\">\n        <h4>Errors:</h4>\n        <ul>\n            <div *ngFor=\"let item of errors\">\n                <li class=\"errors\">{{item.message}}</li>\n            </div>\n        </ul>\n\n    </div>\n\n\n\n\n    <div *ngIf=\"createtask\">\n        <form (submit)=\"createTask()\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"createtask.title\" [(ngModel)]=\"createtask.title\" class=\"form-control\" id=\"title\" placeholder=\"---\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"createtask.description\" [(ngModel)]=\"createtask.description\" class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"---\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Create</button>\n        </form>\n    </div>\n\n    <div *ngIf=\"updatetask\">\n        <form (submit)=\"updateTask(onetask._id)\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"updatetask.title\" [(ngModel)]=\"updatetask.title\" class=\"form-control\" id=\"title\" value=\"updatetask.title\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"updatetask.description\" [(ngModel)]=\"updatetask.description\" class=\"form-control\" id=\"description\" rows=\"3\" value=\"updatetask.description\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Submit Edits</button>\n        </form>\n    </div>\n\n    <div class=\"division\"></div>\n\n    <button class=\"btn btn-primary\" (click)=\"getTasks()\">Click for Tasks</button>\n\n    <div class=\"division\"></div>\n\n    <div class=\"centered\" *ngFor=\"let task of tasks\">\n\n        <h2><a id=\"clickable\" (click)=\"getOneTask(task._id)\">{{task.title}}</a></h2>\n        <div class=\"division\"></div>\n    </div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blender/blender.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blender/blender.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlenderBlenderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Blender Experience</h1>\n\n        <p>I've been using Blender for my current project, Talismans. My levels are procedurally generated, so\n            a number of things have been built with this in mind.</p>\n\n        <p>Puzzle pieces had to be very precise, so they can procedurally be made and still fit together in a consistent manner.</p>\n\n        <h4>Areas Of Focus</h4>\n        <p>Model Building, UV Maps, Minor Rigging</p>\n\n        <h5>Many Different Models To Break!</h5>\n        <img src=\"assets/images/blender/containers.png\" alt=\"Many Containers Surrounding Character\">\n\n        <h5>Pieces That Fit Evenly</h5>\n        <img src=\"assets/images/blender/pieces.png\" alt=\"Various Pieces On The Board\">\n\n        <h5>Many Different Puzzle Sizes!</h5>\n        <img src=\"assets/images/blender/many_grids.gif\" alt=\"Gif of Different Grids In Game\">\n\n        <h5>Dynamically Built Variant Doors</h5>\n        <img src=\"assets/images/blender/door.gif\" alt=\"Gif Showing Pieces Of Door Swapping\">\n\n        <h5>Currently, Working On Rigging Main Character</h5>\n        <img src=\"assets/images/blender/character_rigging.png\" alt=\"Blender Shot Of Rigging On Character\">\n\n        <h5>Procedurally-Generated Room Models</h5>\n        <img src=\"assets/images/blender/rooms.png\" alt=\"Various Models of a Room Kit\">\n\n        <h5>Obligatory Tutorial Donut</h5>\n        <img src=\"assets/images/blender/donut.png\" alt=\"Computer Graphic Donut\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBooksBooksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Books and Authors Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>Python, Django, MySQLite</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Books_Authors\">-Github-</a>\n\n        <h5>Adding and Linking Books and Authors</h5>\n        <img src=\"assets/images/books_authors/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cakes/cakes.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cakes/cakes.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCakesCakesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Cake-Rating Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>Typescript, MongoDB, Express, Angular, Node.js</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Rate_My_Cakes\">-Github-</a>\n\n        <h5>Adding Cakes and Rating Cakes</h5>\n        <img src=\"assets/images/rate_my_cakes/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/coin-machine/coin-machine.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coin-machine/coin-machine.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoinMachineCoinMachineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Coin Machine API</h1>\n\n        <p>I learned Ruby on Rails for this assignment from a prospective employer.  It's a basic CRUD API for depositing and withdrawing different coins from a machine.  It manages the possible coins and all of the transactions.  It alerts admins when the coin levels are too low.  It also uses a rudamentary, non-secure api key check before performing an action.</p>\n        <h4>Technologies</h4>\n        <p>Ruby on Rails, JSON, SQLite, Postman</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Coin_Machine\">-Github-</a>\n\n        <h5>Basic CRUD for Coins</h5>\n        <img src=\"assets/images/coin_machine/coins.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Basic CRUD for Transactions</h5>\n        <img src=\"assets/images/coin_machine/transactions.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/diabetes/diabetes.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/diabetes/diabetes.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDiabetesDiabetesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Diabetes Treatment App</h1>\n\n        <p>--WORK IN PROGRESS--</p>\n        <p>I'm working on this app for a friend who is a nurse in a Diabetes Clinic. The layout and technology are hooked up, and now I have to practically become a doctor to work out all the logic necessary to produce the proper diagnosis. Eek!</p>\n        <h4>Technologies</h4>\n        <p>Typescript, Express, Angular, Node.js</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Diabetes_Treatment\">-Github-</a>\n        <br>\n        <a class=\"btn btn-danger\" href=\"http://18.223.212.189/\">-Deployed-</a>\n\n        <h5>Changing Inputs, Diagnosis Alters Automatically</h5>\n        <img class=\"shrink\" src=\"assets/images/diabetes_treatment/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Responsive!</h5>\n        <img src=\"assets/images/diabetes_treatment/responsive.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gold/gold.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gold/gold.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGoldGoldComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Gold-Getting Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>Python, Django, MySQLite</p>\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Gold_Getter_in_Django\">-Github-</a>\n\n        <p>and</p>\n\n        <p>Python, Flask, MySQLite</p>\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Gold_Getter_in_Flask\">-Github-</a>\n\n        <h5>Getting Golds</h5>\n        <img src=\"assets/images/gold_getter/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hostility/hostility.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hostility/hostility.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHostilityHostilityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Hostility Skirmish</h1>\n\n        <p>Hostility Skirmish was a collobrative effort with two other programmers, built in a week.  We all wanted experience with Github and managing a project socially and using version control.  Getting the code to work as a multiplayer, online experience was the most difficult part, but we worked it out.</p>\n        <p>My contributions centered around building the gameplay mechanics and the models that it uses.  I had higher aspirations for it than we were able to get to.  We spent more time on the technology aspect of it than on the game itself.</p>\n        \n        <h4>Technologies</h4>\n        <p>C#, .NET Core, SQL</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Hostility_Skirmish\">-Github-</a>\n\n        <h5>Build your Party, Customize your Characters</h5>\n        <img src=\"assets/images/hostility_skirmish/build.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Challenge Fellow Onliners, Join the Battle</h5>\n        <img src=\"assets/images/hostility_skirmish/join_battle.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Turn-Based Attacks</h5>\n        <img src=\"assets/images/hostility_skirmish/attack.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Ouch!  Deaths.</h5>\n        <img src=\"assets/images/hostility_skirmish/death.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventoryInventoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Inventory Shelf</h1>\n\n        <p>I used old POS software for a long time at a prior job.  I wanted to recreate it in a simple form and make it look much nicer!</p>\n        <h4>Technologies</h4>\n        <p>Typescript, MongoDB, Express, Angular, Node.js</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/InventoryShelf\">-Github-</a>\n\n        <h5>Adding, Editing, and Deleting a Product</h5>\n        <img src=\"assets/images/inventory_shelf/add_edit_delete.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Setting up a Keymap</h5>\n        <img src=\"assets/images/inventory_shelf/keymap.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Receive Inventory into the System</h5>\n        <img src=\"assets/images/inventory_shelf/receive.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Purchase your Snacks!</h5>\n        <img src=\"assets/images/inventory_shelf/purchase.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jigsaw/jigsaw.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jigsaw/jigsaw.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJigsawJigsawComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Jigsaw Registry</h1>\n\n        <p>A big hobby of mine is doing jigsaw puzzles.  At one point, I went looking for an app that could help me log my puzzling hobby, but I didn't find it.  So, I built it myself!</p>\n        <p>I have not yet been back to it to make it look and feel nice, but it was a challenge working with so many different models and forms.</p>\n        \n        <h4>Technologies</h4>\n        <p>Python, Django, SQLite</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/jigsaw_registry\">-Github-</a>\n\n        <h5>Log all of your Jigsaw Puzzles</h5>\n        <img src=\"assets/images/jigsaw_registry/view_puzzle.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Adding a Puzzle into the Database</h5>\n        <img src=\"assets/images/jigsaw_registry/add_puzzle.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Adding a Project into the System</h5>\n        <img src=\"assets/images/jigsaw_registry/add_project.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Check out your Stats</h5>\n        <img src=\"assets/images/jigsaw_registry/stats.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ninjaman/ninjaman.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ninjaman/ninjaman.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNinjamanNinjamanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Ninjaman</h1>\n\n        <p>A typical pacman clone, but I learned a lot on building random worlds and using pathfinding algorithms to make sure that you could always win the game.</p>\n        <h4>Technologies</h4>\n        <p>Javascript</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Ninjaman\">-Github-</a>\n\n        <h5>Avoid the Monsters, Eat the Sushi</h5>\n        <img src=\"assets/images/ninjaman/win.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Randomized Worlds</h5>\n        <img src=\"assets/images/ninjaman/random.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Sorry, page not found!</h3>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prod-cat/prod-cat.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prod-cat/prod-cat.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProdCatProdCatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Products and Categories Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>C#, .NET Core, MySQL</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Products_Categories\">-Github-</a>\n\n        <h5>Adding, Editing, and Linking Products and Categories</h5>\n        <img src=\"assets/images/products_categories/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prod-man/prod-man.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prod-man/prod-man.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProdManProdManComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Managing Products Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>Typescript, MongoDB, Express, Angular, Node.js</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Product_Manager\">-Github-</a>\n\n        <h5>Adding, Editing, and Viewing your Products</h5>\n        <img src=\"assets/images/product_manager/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <p class=\"elevator\">\n        Focused developer looking to become a vital part of the team. \n        Great balance between technical skills and soft skills, creativity and habit. Effective communicator and teacher. \n        Eager to learn deeply and be coached. Eager to build quality software. Strong ability to see both the big \n        and the small and how important the one is to the other.</p>\n    \n    <p class=\"elevator\">\n        I have a background in filmmaking, editing, writing and playing a lot of video games, so I would love to join these \n        passions and break into the games industry. While I build my own game, I'd love to find a job that can help me learn.</p>\n\n    <div class=\"division\"></div>\n\n\n<div class=\"inner\">\n    \n    <div class=\"card\">\n        <div class=\"card-header\">Talismans</div>  \n        <img src=\"assets/images/talismans/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Game I'm Currently Developing</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/talismans']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Unreal Engine</div>  \n        <img src=\"assets/images/unreal/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Game Engine Experience</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/unreal']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Blender</div>  \n        <img src=\"assets/images/blender/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">3D Modeling Experience</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/blender']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Swedish Mountain Manicure</div>  \n        <img src=\"assets/images/swedish_mountain_manicure/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Platformer Video Game</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/swedish']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n    \n    <div class=\"card\">\n        <div class=\"card-header\">Hostility Skirmish (web)</div>  \n        <img src=\"assets/images/hostility_skirmish/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Online Multiplayer Battle Game</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/hostility']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n    \n    <div class=\"card\">\n        <div class=\"card-header\">Ninjaman</div>  \n        <img src=\"assets/images/ninjaman/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Pacman Clone</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/ninjaman']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n    \n    <div class=\"card\">\n        <div class=\"card-header\">Sacred Coins</div>  \n        <img src=\"assets/images/sacred_coins/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Vast Choose-Your-Own-Adventure</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/sacred']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n    \n    <div class=\"card\">\n        <div class=\"card-header\">Inventory Shelf (web)</div>  \n        <img src=\"assets/images/inventory_shelf/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Manage Inventory, Make Purchases</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/inventory']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Coin Machine API (web)</div>  \n        <img src=\"assets/images/coin_machine/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Basic CRUD for Coin Management</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/coin_machine']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Diabetes Treatment App (web)</div>  \n        <img src=\"assets/images/diabetes_treatment/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Medical Diagnosis Aid</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/diabetes']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Wedding Planner (web)</div>  \n        <img src=\"assets/images/wedding_planner/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Exercise with Login and Registration</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/wedding_planner']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Jigsaw Registry (web)</div>  \n        <img src=\"assets/images/jigsaw_registry/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Jigsaw Puzzle Hobby Organizer</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/jigsaw']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sacred/sacred.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sacred/sacred.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSacredSacredComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Sacred Coins</h1>\n\n        <p>When I was thirteen, I built a 200 page Choose-Your-Own-Adventure story for my family to play on Christmas Day in order to get their present.  And instead of flipping between pages, they had to walk to other parts of the house where I hid sleeves that contained each page of the story.  Every page had a different location in the house!  It had physical locks, items, and keys to use, and it was even customized for each family member.  It had 43 items in it and 17 ways to die.  No, no one ever completed it.  My mom did have me walk her through it though.</p>\n        <p>Anyway, I wanted to bring this back to life in a digital form.  (Don't pay attention to the writing!)  I really enjoyed building this, but I never finished it.  I loved building the sprites for the items. The crown jewel was working on the map and getting it to dynamically build as you played it!</p>\n        \n        <h4>Technologies</h4>\n        <p><a href=\"https://www.scirra.com/\">Built using Construct 2 (Visual Coding Language)</a></p>\n\n        <h5>Start your Adventure</h5>\n        <img src=\"assets/images/sacred_coins/start.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Get and Use Items</h5>\n        <img src=\"assets/images/sacred_coins/interact.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Full, Interactive Map, Builds as you Explore</h5>\n        <img src=\"assets/images/sacred_coins/map.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Find Multiple Rings to get past the Barrier</h5>\n        <img src=\"assets/images/sacred_coins/rings.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Built using a Visual Coding Language</h5>\n        <img src=\"assets/images/sacred_coins/coderun.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shell-portfolio-web/shell-portfolio-web.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell-portfolio-web/shell-portfolio-web.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShellPortfolioWebShellPortfolioWebComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mycontainer\">\n\n    <h1>Adam J. Sikora</h1>\n    <h3>-Software Programmer-</h3>\n    <p><a href=\"mailto:adamjsikora@gmail.com\">adamjsikora@gmail.com</a> - 708.764.0029\n    <p>\n        <a href=\"https://www.linkedin.com/in/adamjsikora/\"><img src=\"assets/images/icons/icon_linkedin.png\" alt=\"LinkedIn Icon\"></a>\n        <a class=\"midicon\" href=\"https://www.youtube.com/channel/UCQd1p4LLjIFoVrocGAS9bdQ\"><img src=\"assets/images/icons/icon_youtube.png\" alt=\"Youtube Icon\"></a>\n        <a class=\"rightmidicon\" href=\"https://twitter.com/vavavacudagames\"><img src=\"assets/images/icons/icon_twitter.png\" alt=\"Twitter Icon\"></a>\n        <a href=\"https://github.com/Vacuda\"><img src=\"assets/images/icons/icon_github.png\" alt=\"Github Icon\"></a>\n    </p>\n\n\n    <div class=\"division\"></div>\n\n\n    <router-outlet (activate)=\"onOutletLoaded($event)\"></router-outlet>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shell-portfolio/shell-portfolio.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell-portfolio/shell-portfolio.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShellPortfolioShellPortfolioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mycontainer\">\n\n    <h1>Adam J. Sikora</h1>\n    <h3>-Software Programmer-</h3>\n    <h3>-Game Developer-</h3>\n    <p><a href=\"mailto:adamjsikora@gmail.com\">adamjsikora@gmail.com</a> - 708.764.0029\n    <p>\n        <a href=\"https://www.linkedin.com/in/adamjsikora/\"><img src=\"assets/images/icons/icon_linkedin.png\" alt=\"LinkedIn Icon\"></a>\n        <a class=\"midicon\" href=\"https://www.youtube.com/channel/UCQd1p4LLjIFoVrocGAS9bdQ\"><img src=\"assets/images/icons/icon_youtube.png\" alt=\"Youtube Icon\"></a>\n        <a class=\"rightmidicon\" href=\"https://twitter.com/vavavacudagames\"><img src=\"assets/images/icons/icon_twitter.png\" alt=\"Twitter Icon\"></a>\n        <a href=\"https://github.com/Vacuda/Partial_Talismans\"><img src=\"assets/images/icons/icon_github.png\" alt=\"Github Icon\"></a>\n    </p>\n\n\n    <div class=\"division\"></div>\n\n\n    <router-outlet (activate)=\"onOutletLoaded($event)\"></router-outlet>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/swedish/swedish.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/swedish/swedish.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSwedishSwedishComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Swedish Mountain Manicure</h1>\n\n        <p>I had tons of fun on this project, as you may be able to tell.  I had told my partner to give me three words and that I would build a small videogame around.  She said, “Sweden, Nail Polish, and ...”  I can't remember the third one.  Maybe it was Passcard?</p>\n        <p>Anyway, I spent a lot of time working on the different sprites and gameplay modes of Jamie, our Nail Polish hero. Working with each element and getting them all to work together was particularly joyous for me.  I learned a whole lot about animation and programming a main character.  I even did a lot of experimenting building environments using repeated sprites.  Look at that teleport animation!  And have you built a sprite meatball that spins?</p>\n        \n        <h4>Technologies</h4>\n        <p><a href=\"https://www.scirra.com/\">Built using Construct 2 (Visual Coding Language)</a></p>\n\n        <h5>You are Nail Polish, Explore the Mountain, Its in Sweden.</h5>\n        <img src=\"assets/images/swedish_mountain_manicure/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Different Nail Polish, Different Game Play</h5>\n        <img src=\"assets/images/swedish_mountain_manicure/character.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Nifty Teleport Animation</h5>\n        <img src=\"assets/images/swedish_mountain_manicure/teleport.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/talismans/talismans.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/talismans/talismans.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTalismansTalismansComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n\n\n        <h1>Talismans</h1>\n\n        <p>Talismans is a calm, flow-inducing, procedurally-generated, multiple-puzzles, jigsaw puzzle game based on hexagons and \n            triangles and ... grief. You find the pieces in containers piled up in a typical level, no enemies, no deaths, just lots\n            of things to break, and lots of things to put back in its place.</p>\n\n        <p>I've been developing this game since August 2020. Check here for the latest updates:</p>\n\n        <p>\n            <a href=\"https://twitter.com/vavavacudagames\"><img src=\"assets/images/icons/icon_twitter.png\" alt=\"Twitter Icon\"></a>\n            <a href=\"https://www.youtube.com/channel/UCQd1p4LLjIFoVrocGAS9bdQ\"><img src=\"assets/images/icons/icon_youtube.png\" alt=\"Youtube Icon\"></a>\n        </p>\n\n        <h4>Technologies</h4>\n        <p>Written in C++, Unreal Engine, Procedurally-Generated, Blueprint Materials, Blender</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Partial_Talismans\">-Github Samples-</a>\n\n        <h5>My Latest DevLog</h5>\n        <iframe src=\"https://www.youtube.com/embed/bsYTjPxUjUE\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n        \n        <h5>Putting Together A Puzzle</h5>\n        <img src=\"assets/images/talismans/bin_view.png\" alt=\"Puzzle In Progress\">\n        \n        <h5>Different Sized Puzzles!</h5>\n        <img src=\"assets/images/talismans/many_grids.gif\" alt=\"Gif Of Different Sized Puzzle Grids\">\n        \n        <h5>Who's Going To Clean This Up?</h5>\n        <img src=\"assets/images/talismans/containers.png\" alt=\"Procedurally-Generated Room\">\n        \n        <h5>Who's Going To Sort These Pieces?</h5>\n        <img src=\"assets/images/talismans/junction.png\" alt=\"Unsorted Puzzle Pieces\">\n        \n        <h5>Written in C++</h5>\n        <img src=\"assets/images/talismans/code_2.png\" alt=\"Screenshot of C++ Code\">\n        \n        <h5>Scribbles</h5>\n        <img src=\"assets/images/talismans/scribbles.png\" alt=\"Scribbled Note Taking\">\n\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/unreal/unreal.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unreal/unreal.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUnrealUnrealComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Unreal Engine Experience</h1>\n\n        <p>I'm currently developing a procedurally-generated game, and I'm utilizing the Unreal Engine to build it. It's being built\n            mainly with C++, but I'm using Blueprints for materials and menus.</p>\n\n        <h4>Areas Of Focus</h4>\n        <p>C++ Integration With Engine, Material Blueprints, Widget Blueprints</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Partial_Talismans\">-Github Samples-</a>\n\n        <h5>C++ Integration</h5>\n        <img src=\"assets/images/unreal/code_1.png\" alt=\"Screenshot of C++ Code\">\n\n        <h5>Material Blueprints</h5>\n        <img src=\"assets/images/unreal/blueprints.png\" alt=\"Screenshot of Blueprints in Action\">\n\n        <h5>Texture Guide</h5>\n        <img src=\"assets/images/unreal/texture_guide.png\" alt=\"Texture Guide Screenshot\">\n\n        <h5>Fine Tuned Material UVs on Pieces</h5>\n        <img src=\"assets/images/unreal/radialchoice.png\" alt=\"RadialChoice Screenshot\">\n\n        <h5>Early Board</h5>\n        <img src=\"assets/images/unreal/early_ue4.png\" alt=\"Early Screenshot of a Puzzle Board\">\n\n        <h5>Early Room</h5>\n        <img src=\"assets/images/unreal/early_room.png\" alt=\"Early Screenshot of a Room\">\n\n        <h5>Early Procedural Generation</h5>\n        <img src=\"assets/images/unreal/procedurally_generated.png\" alt=\"Early Screenshot of a Room Procedurally_Generated\">\n\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/web-projects/web-projects.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-projects/web-projects.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWebProjectsWebProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<p class=\"elevator\">Focused developer looking to become a vital part of the team. Great balance between technical skills and soft skills, creativity and habit. Effective communicator and teacher. Eager to learn deeply and be coached. Eager to build quality software and write beautiful code. Strong ability to see both the big and the small and how important the one is to the other. I have a background in filmmaking, editing, writing and video games, so I would love to join these passions with software development.</p>\n\n<div class=\"division\"></div>\n\n<div class=\"inner\">\n\n    <div class=\"card\">\n        <div class=\"card-header\">Talismans</div>  \n        <img src=\"assets/images/talismans/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Game I'm Currently Developing</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/talismans']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n    \n    <div class=\"card\">\n        <div class=\"card-header\">Inventory Shelf</div>  \n        <img src=\"assets/images/inventory_shelf/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Manage Inventory, Make Purchases</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/inventory']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Coin Machine API</div>  \n        <img src=\"assets/images/coin_machine/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Basic CRUD for Coin Management</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/coin_machine']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Diabetes Treatment App</div>  \n        <img src=\"assets/images/diabetes_treatment/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Medical Diagnosis Aid</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/diabetes']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n\n    <div class=\"card\">\n        <div class=\"card-header\">Swedish Mountain Manicure</div>  \n        <img src=\"assets/images/swedish_mountain_manicure/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Platformer Video Game</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/swedish']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Wedding Planner</div>  \n        <img src=\"assets/images/wedding_planner/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Exercise with Login and Registration</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/wedding_planner']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Sacred Coins</div>  \n        <img src=\"assets/images/sacred_coins/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Vast Choose-Your-Own-Adventure</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/sacred']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Jigsaw Registry</div>  \n        <img src=\"assets/images/jigsaw_registry/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Jigsaw Puzzle Hobby Organizer</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/jigsaw']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Hostility Skirmish</div>  \n        <img src=\"assets/images/hostility_skirmish/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Online Multiplayer Battle Game</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/hostility']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Ninjaman</div>  \n        <img src=\"assets/images/ninjaman/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Pacman Clone</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/ninjaman']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Books and Authors</div>  \n        <img src=\"assets/images/books_authors/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Books and Authors Exercise</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/books_authors']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Gold Getter</div>  \n        <img src=\"assets/images/gold_getter/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Gold-Getting Exercise with Python</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/gold_getter']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Rate My Cakes</div>  \n        <img src=\"assets/images/rate_my_cakes/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Cake-Rating Exercise</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/rate_my_cakes']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Products and Categories</div>  \n        <img src=\"assets/images/products_categories/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Product and Category Exercise</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/products_categories']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Product Manager</div>  \n        <img src=\"assets/images/product_manager/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Managing Products Exercise</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/web/product_manager']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wedding/wedding.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wedding/wedding.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWeddingWeddingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n        <h1>Wedding Planner Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>C#, .NET Core, MySQL</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Wedding_Planner\">-Github-</a>\n\n        <h5>Login and Registration</h5>\n        <img src=\"assets/images/wedding_planner/registration.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Adding and RSVPing to a Wedding</h5>\n        <img src=\"assets/images/wedding_planner/adding_wedding.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hostility/hostility.component */
    "./src/app/hostility/hostility.component.ts");
    /* harmony import */


    var _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ninjaman/ninjaman.component */
    "./src/app/ninjaman/ninjaman.component.ts");
    /* harmony import */


    var _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./swedish/swedish.component */
    "./src/app/swedish/swedish.component.ts");
    /* harmony import */


    var _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sacred/sacred.component */
    "./src/app/sacred/sacred.component.ts");
    /* harmony import */


    var _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./jigsaw/jigsaw.component */
    "./src/app/jigsaw/jigsaw.component.ts");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _books_books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./books/books.component */
    "./src/app/books/books.component.ts");
    /* harmony import */


    var _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./prod-cat/prod-cat.component */
    "./src/app/prod-cat/prod-cat.component.ts");
    /* harmony import */


    var _gold_gold_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./gold/gold.component */
    "./src/app/gold/gold.component.ts");
    /* harmony import */


    var _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./wedding/wedding.component */
    "./src/app/wedding/wedding.component.ts");
    /* harmony import */


    var _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./cakes/cakes.component */
    "./src/app/cakes/cakes.component.ts");
    /* harmony import */


    var _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./prod-man/prod-man.component */
    "./src/app/prod-man/prod-man.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shell-portfolio/shell-portfolio.component */
    "./src/app/shell-portfolio/shell-portfolio.component.ts");
    /* harmony import */


    var _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./coin-machine/coin-machine.component */
    "./src/app/coin-machine/coin-machine.component.ts");
    /* harmony import */


    var _diabetes_diabetes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./diabetes/diabetes.component */
    "./src/app/diabetes/diabetes.component.ts");
    /* harmony import */


    var _web_projects_web_projects_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./web-projects/web-projects.component */
    "./src/app/web-projects/web-projects.component.ts");
    /* harmony import */


    var _shell_portfolio_web_shell_portfolio_web_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shell-portfolio-web/shell-portfolio-web.component */
    "./src/app/shell-portfolio-web/shell-portfolio-web.component.ts");
    /* harmony import */


    var _talismans_talismans_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./talismans/talismans.component */
    "./src/app/talismans/talismans.component.ts");
    /* harmony import */


    var _unreal_unreal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./unreal/unreal.component */
    "./src/app/unreal/unreal.component.ts");
    /* harmony import */


    var _blender_blender_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./blender/blender.component */
    "./src/app/blender/blender.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["ShellPortfolioComponent"],
      children: [{
        path: '',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"]
      }, {
        path: 'talismans',
        component: _talismans_talismans_component__WEBPACK_IMPORTED_MODULE_20__["TalismansComponent"]
      }, {
        path: 'unreal',
        component: _unreal_unreal_component__WEBPACK_IMPORTED_MODULE_21__["UnrealComponent"]
      }, {
        path: 'blender',
        component: _blender_blender_component__WEBPACK_IMPORTED_MODULE_22__["BlenderComponent"]
      }, {
        path: 'hostility',
        component: _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_2__["HostilityComponent"]
      }, {
        path: 'ninjaman',
        component: _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_3__["NinjamanComponent"]
      }, {
        path: 'swedish',
        component: _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_4__["SwedishComponent"]
      }, {
        path: 'sacred',
        component: _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_5__["SacredComponent"]
      }, {
        path: 'jigsaw',
        component: _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_6__["JigsawComponent"]
      }, {
        path: 'inventory',
        component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__["InventoryComponent"]
      }, {
        path: 'books_authors',
        component: _books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"]
      }, {
        path: 'products_categories',
        component: _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_9__["ProdCatComponent"]
      }, {
        path: 'gold_getter',
        component: _gold_gold_component__WEBPACK_IMPORTED_MODULE_10__["GoldComponent"]
      }, {
        path: 'wedding_planner',
        component: _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_11__["WeddingComponent"]
      }, {
        path: 'rate_my_cakes',
        component: _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_12__["CakesComponent"]
      }, {
        path: 'product_manager',
        component: _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_13__["ProdManComponent"]
      }, {
        path: 'coin_machine',
        component: _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_16__["CoinMachineComponent"]
      }, {
        path: 'diabetes',
        component: _diabetes_diabetes_component__WEBPACK_IMPORTED_MODULE_17__["DiabetesComponent"]
      }]
    }, {
      path: 'web',
      component: _shell_portfolio_web_shell_portfolio_web_component__WEBPACK_IMPORTED_MODULE_19__["ShellPortfolioWebComponent"],
      children: [{
        path: '',
        component: _web_projects_web_projects_component__WEBPACK_IMPORTED_MODULE_18__["WebProjectsComponent"]
      }, {
        path: 'hostility',
        component: _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_2__["HostilityComponent"]
      }, {
        path: 'talismans',
        component: _talismans_talismans_component__WEBPACK_IMPORTED_MODULE_20__["TalismansComponent"]
      }, {
        path: 'ninjaman',
        component: _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_3__["NinjamanComponent"]
      }, {
        path: 'swedish',
        component: _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_4__["SwedishComponent"]
      }, {
        path: 'sacred',
        component: _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_5__["SacredComponent"]
      }, {
        path: 'jigsaw',
        component: _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_6__["JigsawComponent"]
      }, {
        path: 'inventory',
        component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__["InventoryComponent"]
      }, {
        path: 'books_authors',
        component: _books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"]
      }, {
        path: 'products_categories',
        component: _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_9__["ProdCatComponent"]
      }, {
        path: 'gold_getter',
        component: _gold_gold_component__WEBPACK_IMPORTED_MODULE_10__["GoldComponent"]
      }, {
        path: 'wedding_planner',
        component: _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_11__["WeddingComponent"]
      }, {
        path: 'rate_my_cakes',
        component: _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_12__["CakesComponent"]
      }, {
        path: 'product_manager',
        component: _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_13__["ProdManComponent"]
      }, {
        path: 'coin_machine',
        component: _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_16__["CoinMachineComponent"]
      }, {
        path: 'diabetes',
        component: _diabetes_diabetes_component__WEBPACK_IMPORTED_MODULE_17__["DiabetesComponent"]
      }]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
    }]; // const routes: Routes = [
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

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_23__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"]]
    })], AppRoutingModule); // const routes: Routes = [
    //     { path: 'product',component: ProductComponent, children: [
    //         { path: 'details/:id', component: ProductDetailComponent },
    //     ]},
    //     { path: 'review',component: ReviewComponent, children: [
    //         { path: 'details/:id', component: ReviewDetailComponent },
    //     ]},
    //     { path: '', pathMatch: 'full', redirectTo: '/product' },
    // ];

    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n/* * {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    outline: 1px dotted red;\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n} */\r\n\r\n/* \r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    color: rgb(216, 216, 216)\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h1 {\r\n        font-size: 45px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n    \r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n    \r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRzs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkVHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgcmVkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk3MHB4O1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MywgMTU0KTtcclxufSAqL1xyXG5cclxuLyogXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KVxyXG59XHJcblxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcblxyXG5cclxuXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxuXHJcblxyXG59ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { TaskService } from './task.service';


    var AppComponent =
    /*#__PURE__*/
    function () {
      // tasks:any;
      // onetask:any;
      // createtask:any;
      // updatetask:any;
      // @Input() taskToShow:any;
      // elevator:any;
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent); //this._router.navigate(['authors/all'])
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

    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./hostility/hostility.component */
    "./src/app/hostility/hostility.component.ts");
    /* harmony import */


    var _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ninjaman/ninjaman.component */
    "./src/app/ninjaman/ninjaman.component.ts");
    /* harmony import */


    var _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./swedish/swedish.component */
    "./src/app/swedish/swedish.component.ts");
    /* harmony import */


    var _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sacred/sacred.component */
    "./src/app/sacred/sacred.component.ts");
    /* harmony import */


    var _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./jigsaw/jigsaw.component */
    "./src/app/jigsaw/jigsaw.component.ts");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _books_books_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./books/books.component */
    "./src/app/books/books.component.ts");
    /* harmony import */


    var _gold_gold_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./gold/gold.component */
    "./src/app/gold/gold.component.ts");
    /* harmony import */


    var _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./wedding/wedding.component */
    "./src/app/wedding/wedding.component.ts");
    /* harmony import */


    var _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./cakes/cakes.component */
    "./src/app/cakes/cakes.component.ts");
    /* harmony import */


    var _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./prod-cat/prod-cat.component */
    "./src/app/prod-cat/prod-cat.component.ts");
    /* harmony import */


    var _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./prod-man/prod-man.component */
    "./src/app/prod-man/prod-man.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shell-portfolio/shell-portfolio.component */
    "./src/app/shell-portfolio/shell-portfolio.component.ts");
    /* harmony import */


    var _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./coin-machine/coin-machine.component */
    "./src/app/coin-machine/coin-machine.component.ts");
    /* harmony import */


    var _diabetes_diabetes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./diabetes/diabetes.component */
    "./src/app/diabetes/diabetes.component.ts");
    /* harmony import */


    var _web_projects_web_projects_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./web-projects/web-projects.component */
    "./src/app/web-projects/web-projects.component.ts");
    /* harmony import */


    var _shell_portfolio_web_shell_portfolio_web_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./shell-portfolio-web/shell-portfolio-web.component */
    "./src/app/shell-portfolio-web/shell-portfolio-web.component.ts");
    /* harmony import */


    var _blender_blender_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./blender/blender.component */
    "./src/app/blender/blender.component.ts");
    /* harmony import */


    var _talismans_talismans_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./talismans/talismans.component */
    "./src/app/talismans/talismans.component.ts");
    /* harmony import */


    var _unreal_unreal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./unreal/unreal.component */
    "./src/app/unreal/unreal.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_8__["HostilityComponent"], _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_9__["NinjamanComponent"], _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_10__["SwedishComponent"], _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_11__["SacredComponent"], _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_12__["JigsawComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_14__["BooksComponent"], _gold_gold_component__WEBPACK_IMPORTED_MODULE_15__["GoldComponent"], _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_16__["WeddingComponent"], _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_17__["CakesComponent"], _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_18__["ProdCatComponent"], _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_19__["ProdManComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"], _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_21__["ShellPortfolioComponent"], _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_22__["CoinMachineComponent"], _diabetes_diabetes_component__WEBPACK_IMPORTED_MODULE_23__["DiabetesComponent"], _web_projects_web_projects_component__WEBPACK_IMPORTED_MODULE_24__["WebProjectsComponent"], _shell_portfolio_web_shell_portfolio_web_component__WEBPACK_IMPORTED_MODULE_25__["ShellPortfolioWebComponent"], _blender_blender_component__WEBPACK_IMPORTED_MODULE_26__["BlenderComponent"], _talismans_talismans_component__WEBPACK_IMPORTED_MODULE_27__["TalismansComponent"], _unreal_unreal_component__WEBPACK_IMPORTED_MODULE_28__["UnrealComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
      providers: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      //   providers: [TaskService],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/blender/blender.component.css":
  /*!***********************************************!*\
    !*** ./src/app/blender/blender.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlenderBlenderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxlbmRlci9ibGVuZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvYmxlbmRlci9ibGVuZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/blender/blender.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/blender/blender.component.ts ***!
    \**********************************************/

  /*! exports provided: BlenderComponent */

  /***/
  function srcAppBlenderBlenderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlenderComponent", function () {
      return BlenderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BlenderComponent =
    /*#__PURE__*/
    function () {
      function BlenderComponent() {
        _classCallCheck(this, BlenderComponent);
      }

      _createClass(BlenderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return BlenderComponent;
    }();

    BlenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blender',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blender.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blender/blender.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blender.component.css */
      "./src/app/blender/blender.component.css")).default]
    })], BlenderComponent);
    /***/
  },

  /***/
  "./src/app/books/books.component.css":
  /*!*******************************************!*\
    !*** ./src/app/books/books.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBooksBooksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/books/books.component.ts":
  /*!******************************************!*\
    !*** ./src/app/books/books.component.ts ***!
    \******************************************/

  /*! exports provided: BooksComponent */

  /***/
  function srcAppBooksBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
      return BooksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BooksComponent =
    /*#__PURE__*/
    function () {
      function BooksComponent() {
        _classCallCheck(this, BooksComponent);
      }

      _createClass(BooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return BooksComponent;
    }();

    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-books',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./books.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./books.component.css */
      "./src/app/books/books.component.css")).default]
    })], BooksComponent);
    /***/
  },

  /***/
  "./src/app/cakes/cakes.component.css":
  /*!*******************************************!*\
    !*** ./src/app/cakes/cakes.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCakesCakesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZXMvY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jYWtlcy9jYWtlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/cakes/cakes.component.ts":
  /*!******************************************!*\
    !*** ./src/app/cakes/cakes.component.ts ***!
    \******************************************/

  /*! exports provided: CakesComponent */

  /***/
  function srcAppCakesCakesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CakesComponent", function () {
      return CakesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CakesComponent =
    /*#__PURE__*/
    function () {
      function CakesComponent() {
        _classCallCheck(this, CakesComponent);
      }

      _createClass(CakesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return CakesComponent;
    }();

    CakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cakes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cakes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cakes/cakes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cakes.component.css */
      "./src/app/cakes/cakes.component.css")).default]
    })], CakesComponent);
    /***/
  },

  /***/
  "./src/app/coin-machine/coin-machine.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/coin-machine/coin-machine.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoinMachineCoinMachineComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29pbi1tYWNoaW5lL2NvaW4tbWFjaGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvaW4tbWFjaGluZS9jb2luLW1hY2hpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/coin-machine/coin-machine.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/coin-machine/coin-machine.component.ts ***!
    \********************************************************/

  /*! exports provided: CoinMachineComponent */

  /***/
  function srcAppCoinMachineCoinMachineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoinMachineComponent", function () {
      return CoinMachineComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CoinMachineComponent =
    /*#__PURE__*/
    function () {
      function CoinMachineComponent() {
        _classCallCheck(this, CoinMachineComponent);
      }

      _createClass(CoinMachineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return CoinMachineComponent;
    }();

    CoinMachineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-coin-machine',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./coin-machine.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/coin-machine/coin-machine.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./coin-machine.component.css */
      "./src/app/coin-machine/coin-machine.component.css")).default]
    })], CoinMachineComponent);
    /***/
  },

  /***/
  "./src/app/diabetes/diabetes.component.css":
  /*!*************************************************!*\
    !*** ./src/app/diabetes/diabetes.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDiabetesDiabetesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.shrink {\r\n    width: 60%;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhYmV0ZXMvZGlhYmV0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUdBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9kaWFiZXRlcy9kaWFiZXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5zaHJpbmsge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/diabetes/diabetes.component.ts":
  /*!************************************************!*\
    !*** ./src/app/diabetes/diabetes.component.ts ***!
    \************************************************/

  /*! exports provided: DiabetesComponent */

  /***/
  function srcAppDiabetesDiabetesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiabetesComponent", function () {
      return DiabetesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DiabetesComponent =
    /*#__PURE__*/
    function () {
      function DiabetesComponent() {
        _classCallCheck(this, DiabetesComponent);
      }

      _createClass(DiabetesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return DiabetesComponent;
    }();

    DiabetesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-diabetes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./diabetes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/diabetes/diabetes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./diabetes.component.css */
      "./src/app/diabetes/diabetes.component.css")).default]
    })], DiabetesComponent);
    /***/
  },

  /***/
  "./src/app/gold/gold.component.css":
  /*!*****************************************!*\
    !*** ./src/app/gold/gold.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppGoldGoldComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZC9nb2xkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvZ29sZC9nb2xkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/gold/gold.component.ts":
  /*!****************************************!*\
    !*** ./src/app/gold/gold.component.ts ***!
    \****************************************/

  /*! exports provided: GoldComponent */

  /***/
  function srcAppGoldGoldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoldComponent", function () {
      return GoldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GoldComponent =
    /*#__PURE__*/
    function () {
      function GoldComponent() {
        _classCallCheck(this, GoldComponent);
      }

      _createClass(GoldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return GoldComponent;
    }();

    GoldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gold',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gold.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gold/gold.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gold.component.css */
      "./src/app/gold/gold.component.css")).default]
    })], GoldComponent);
    /***/
  },

  /***/
  "./src/app/hostility/hostility.component.css":
  /*!***************************************************!*\
    !*** ./src/app/hostility/hostility.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHostilityHostilityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdGlsaXR5L2hvc3RpbGl0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hvc3RpbGl0eS9ob3N0aWxpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/hostility/hostility.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/hostility/hostility.component.ts ***!
    \**************************************************/

  /*! exports provided: HostilityComponent */

  /***/
  function srcAppHostilityHostilityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HostilityComponent", function () {
      return HostilityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HostilityComponent =
    /*#__PURE__*/
    function () {
      function HostilityComponent() {
        _classCallCheck(this, HostilityComponent);
      }

      _createClass(HostilityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return HostilityComponent;
    }();

    HostilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hostility',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hostility.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hostility/hostility.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hostility.component.css */
      "./src/app/hostility/hostility.component.css")).default]
    })], HostilityComponent);
    /***/
  },

  /***/
  "./src/app/inventory/inventory.component.css":
  /*!***************************************************!*\
    !*** ./src/app/inventory/inventory.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInventoryInventoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/inventory/inventory.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/inventory/inventory.component.ts ***!
    \**************************************************/

  /*! exports provided: InventoryComponent */

  /***/
  function srcAppInventoryInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryComponent", function () {
      return InventoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InventoryComponent =
    /*#__PURE__*/
    function () {
      function InventoryComponent() {
        _classCallCheck(this, InventoryComponent);
      }

      _createClass(InventoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return InventoryComponent;
    }();

    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inventory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inventory.component.css */
      "./src/app/inventory/inventory.component.css")).default]
    })], InventoryComponent);
    /***/
  },

  /***/
  "./src/app/jigsaw/jigsaw.component.css":
  /*!*********************************************!*\
    !*** ./src/app/jigsaw/jigsaw.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppJigsawJigsawComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamlnc2F3L2ppZ3Nhdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2ppZ3Nhdy9qaWdzYXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/jigsaw/jigsaw.component.ts":
  /*!********************************************!*\
    !*** ./src/app/jigsaw/jigsaw.component.ts ***!
    \********************************************/

  /*! exports provided: JigsawComponent */

  /***/
  function srcAppJigsawJigsawComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JigsawComponent", function () {
      return JigsawComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JigsawComponent =
    /*#__PURE__*/
    function () {
      function JigsawComponent() {
        _classCallCheck(this, JigsawComponent);
      }

      _createClass(JigsawComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return JigsawComponent;
    }();

    JigsawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jigsaw',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jigsaw.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jigsaw/jigsaw.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jigsaw.component.css */
      "./src/app/jigsaw/jigsaw.component.css")).default]
    })], JigsawComponent);
    /***/
  },

  /***/
  "./src/app/ninjaman/ninjaman.component.css":
  /*!*************************************************!*\
    !*** ./src/app/ninjaman/ninjaman.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNinjamanNinjamanComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmluamFtYW4vbmluamFtYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9uaW5qYW1hbi9uaW5qYW1hbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ninjaman/ninjaman.component.ts":
  /*!************************************************!*\
    !*** ./src/app/ninjaman/ninjaman.component.ts ***!
    \************************************************/

  /*! exports provided: NinjamanComponent */

  /***/
  function srcAppNinjamanNinjamanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NinjamanComponent", function () {
      return NinjamanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NinjamanComponent =
    /*#__PURE__*/
    function () {
      function NinjamanComponent() {
        _classCallCheck(this, NinjamanComponent);
      }

      _createClass(NinjamanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return NinjamanComponent;
    }();

    NinjamanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ninjaman',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ninjaman.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ninjaman/ninjaman.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ninjaman.component.css */
      "./src/app/ninjaman/ninjaman.component.css")).default]
    })], NinjamanComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/prod-cat/prod-cat.component.css":
  /*!*************************************************!*\
    !*** ./src/app/prod-cat/prod-cat.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProdCatProdCatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZC1jYXQvcHJvZC1jYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kLWNhdC9wcm9kLWNhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/prod-cat/prod-cat.component.ts":
  /*!************************************************!*\
    !*** ./src/app/prod-cat/prod-cat.component.ts ***!
    \************************************************/

  /*! exports provided: ProdCatComponent */

  /***/
  function srcAppProdCatProdCatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdCatComponent", function () {
      return ProdCatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProdCatComponent =
    /*#__PURE__*/
    function () {
      function ProdCatComponent() {
        _classCallCheck(this, ProdCatComponent);
      }

      _createClass(ProdCatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return ProdCatComponent;
    }();

    ProdCatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prod-cat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prod-cat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prod-cat/prod-cat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prod-cat.component.css */
      "./src/app/prod-cat/prod-cat.component.css")).default]
    })], ProdCatComponent);
    /***/
  },

  /***/
  "./src/app/prod-man/prod-man.component.css":
  /*!*************************************************!*\
    !*** ./src/app/prod-man/prod-man.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProdManProdManComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZC1tYW4vcHJvZC1tYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kLW1hbi9wcm9kLW1hbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/prod-man/prod-man.component.ts":
  /*!************************************************!*\
    !*** ./src/app/prod-man/prod-man.component.ts ***!
    \************************************************/

  /*! exports provided: ProdManComponent */

  /***/
  function srcAppProdManProdManComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdManComponent", function () {
      return ProdManComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProdManComponent =
    /*#__PURE__*/
    function () {
      function ProdManComponent() {
        _classCallCheck(this, ProdManComponent);
      }

      _createClass(ProdManComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return ProdManComponent;
    }();

    ProdManComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prod-man',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prod-man.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prod-man/prod-man.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prod-man.component.css */
      "./src/app/prod-man/prod-man.component.css")).default]
    })], ProdManComponent);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.css":
  /*!*************************************************!*\
    !*** ./src/app/projects/projects.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    vertical-align: top;\r\n}\r\n\r\nimg {\r\n    margin: 5px auto;\r\n    height: 40%;\r\n    width: auto;\r\n    max-width: 90%; \r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.inner {\r\n    margin: 0px auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n/* p {\r\n    max-height: 20%;\r\n} */\r\n\r\n.card-header {\r\n    margin: 0px auto 5px auto;\r\n    padding: 8px;\r\n    /* font: pink; */\r\n    display: block;\r\n    background-color: rgb(145, 145, 145);\r\n    /* background-color: rgb(160, 163, 154); */\r\n    /* background-image: radial-gradient(black,white); */\r\n    /* background-image: linear-gradient(black 50%,white, black); */\r\n}\r\n\r\n.card {\r\n    background-color: rgb(216, 216, 216);\r\n    width: 40%;\r\n    margin: 20px 0px;\r\n    height: 300px;\r\n    display: inline-block;\r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.card-body {\r\n    height: 40%;\r\n}\r\n\r\n.card-text {\r\n    margin: 0px 0px 15px 0px;\r\n}\r\n\r\n.elevator {\r\n    font-size: 13px;\r\n}\r\n\r\nbutton {\r\n    font-size: 20px;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .card-header {\r\n        font-size: 25px;\r\n    }\r\n\r\n    .card-body {\r\n        font-size: 18px;\r\n        padding: 0px 20px 20px 20px;\r\n    }\r\n\r\n    .card {\r\n        width: 90%;\r\n        height: auto;\r\n        /* min-height: 600px; */\r\n        margin: 20px 0px;\r\n        /* height: 1000px; */\r\n        display: inline-block;\r\n    }\r\n\r\n    img {\r\n        width: 60%;\r\n        height: auto;\r\n        margin: 15px auto;\r\n    }\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n    .card {\r\n        \r\n        height: 300px;\r\n        width: 46%;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n    }\r\n\r\n    .card-header {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 10px;\r\n    }\r\n\r\n    button {\r\n        font-size: 14px;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 547px) {\r\n    .card {\r\n        \r\n        height: 300px;\r\n        width: 46%;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n\r\n    }\r\n\r\n    .card-header {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n    /* img {\r\n        height: 40%;\r\n        width: auto;\r\n    } */\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n    .card {\r\n        width: 29.33%;\r\n        height: 300px;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n    } \r\n\r\n    .card-header {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7R0FFRzs7QUFHSDtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsMENBQTBDO0lBQzFDLG9EQUFvRDtJQUNwRCwrREFBK0Q7QUFDbkU7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBLFVBQVU7O0FBRVY7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7OztBQUdKOztBQUVBO0lBQ0k7O1FBRUksYUFBYTtRQUNiLFVBQVU7UUFDVixlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COzs7QUFHSjs7QUFJQSxXQUFXOztBQUVWO0lBQ0c7O1FBRUksYUFBYTtRQUNiLFVBQVU7UUFDVixlQUFlO1FBQ2YscUJBQXFCOztJQUV6Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBOzs7T0FHRzs7QUFFUDs7QUFFQSxVQUFVOztBQUVWO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLGVBQWU7UUFDZixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7OztBQUlKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7IFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogcCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XHJcbn0gKi9cclxuXHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byA1cHggYXV0bztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIC8qIGZvbnQ6IHBpbms7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MywgMTU0KTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChibGFjayx3aGl0ZSk7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmxhY2sgNTAlLHdoaXRlLCBibGFjayk7ICovXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTVweCAwcHg7XHJcbn1cclxuXHJcbi5lbGV2YXRvciB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBTTUFMTCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC8qIG1pbi1oZWlnaHQ6IDYwMHB4OyAqL1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMDAwcHg7ICovXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICB9XHJcbiBcclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAyJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyogTUVESVVNICovXHJcbiAgICBcclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQ3cHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NiU7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9ICovXHJcblxyXG59XHJcbiAgICBcclxuLyogTEFSR0UgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDI5LjMzJTtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAyJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9IFxyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent(appcomponent) {
        _classCallCheck(this, ProjectsComponent);

        this.appcomponent = appcomponent;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.css */
      "./src/app/projects/projects.component.css")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/sacred/sacred.component.css":
  /*!*********************************************!*\
    !*** ./src/app/sacred/sacred.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSacredSacredComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FjcmVkL3NhY3JlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3NhY3JlZC9zYWNyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sacred/sacred.component.ts":
  /*!********************************************!*\
    !*** ./src/app/sacred/sacred.component.ts ***!
    \********************************************/

  /*! exports provided: SacredComponent */

  /***/
  function srcAppSacredSacredComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SacredComponent", function () {
      return SacredComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SacredComponent =
    /*#__PURE__*/
    function () {
      function SacredComponent() {
        _classCallCheck(this, SacredComponent);
      }

      _createClass(SacredComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return SacredComponent;
    }();

    SacredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sacred',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sacred.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sacred/sacred.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sacred.component.css */
      "./src/app/sacred/sacred.component.css")).default]
    })], SacredComponent);
    /***/
  },

  /***/
  "./src/app/shell-portfolio-web/shell-portfolio-web.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/shell-portfolio-web/shell-portfolio-web.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShellPortfolioWebShellPortfolioWebComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.mycontainer {\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    color: rgb(216, 216, 216)\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\n.midicon {\r\n    margin: 0px 30px;\r\n}\r\n\r\n.rightmidicon {\r\n    margin-right: 30px;\r\n}\r\n\r\nimg {\r\n    margin-top: 10px;\r\n    height: 32px;\r\n    width: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n    \r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px;\r\n        padding: 20px 30px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    .mycontainer {\r\n        width: 970px;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px 40px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwtcG9ydGZvbGlvLXdlYi9zaGVsbC1wb3J0Zm9saW8td2ViLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBSUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFTQSxVQUFVOztBQUVWOztJQUVJO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjs7QUFFQSxXQUFXOztBQUVYOztJQUVJO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUVBLFVBQVU7O0FBRVY7O0lBRUk7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7OztBQUdKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwtcG9ydGZvbGlvLXdlYi9zaGVsbC1wb3J0Zm9saW8td2ViLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4ubXljb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTYzLCAxNTQpO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNilcclxufVxyXG5cclxuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1pZGljb24ge1xyXG4gICAgbWFyZ2luOiAwcHggMzBweDtcclxufVxyXG5cclxuLnJpZ2h0bWlkaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBTTUFMTCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIC5teWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gICAgXHJcbi8qIE1FRElVTSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG5cclxuICAgIC5teWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICBcclxuLyogTEFSR0UgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOTcwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shell-portfolio-web/shell-portfolio-web.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shell-portfolio-web/shell-portfolio-web.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ShellPortfolioWebComponent */

  /***/
  function srcAppShellPortfolioWebShellPortfolioWebComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellPortfolioWebComponent", function () {
      return ShellPortfolioWebComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShellPortfolioWebComponent =
    /*#__PURE__*/
    function () {
      // elevator: boolean;
      function ShellPortfolioWebComponent() {
        _classCallCheck(this, ShellPortfolioWebComponent);
      }

      _createClass(ShellPortfolioWebComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.elevator = true;
        }
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }, {
        key: "onOutletLoaded",
        value: function onOutletLoaded(component) {
          component.bIsWeb = true;
        }
      }]);

      return ShellPortfolioWebComponent;
    }();

    ShellPortfolioWebComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shell-portfolio-web',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shell-portfolio-web.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shell-portfolio-web/shell-portfolio-web.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shell-portfolio-web.component.css */
      "./src/app/shell-portfolio-web/shell-portfolio-web.component.css")).default]
    })], ShellPortfolioWebComponent);
    /***/
  },

  /***/
  "./src/app/shell-portfolio/shell-portfolio.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/shell-portfolio/shell-portfolio.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShellPortfolioShellPortfolioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.mycontainer {\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    color: rgb(216, 216, 216)\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\n.midicon {\r\n    margin: 0px 30px;\r\n}\r\n\r\n.rightmidicon {\r\n    margin-right: 30px;\r\n}\r\n\r\nimg {\r\n    margin-top: 10px;\r\n    height: 32px;\r\n    width: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n    \r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px;\r\n        padding: 20px 30px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    .mycontainer {\r\n        width: 970px;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px 40px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwtcG9ydGZvbGlvL3NoZWxsLXBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUlBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBVUEsVUFBVTs7QUFFVjs7SUFFSTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUEsV0FBVzs7QUFFWDs7SUFFSTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsV0FBVztRQUNYLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjs7QUFFQSxVQUFVOztBQUVWOztJQUVJO1FBQ0ksWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COzs7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsLXBvcnRmb2xpby9zaGVsbC1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIC8qIG91dGxpbmU6IDFweCBkb3R0ZWQgcmVkOyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5teWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjMsIDE1NCk7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KVxyXG59XHJcblxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubWlkaWNvbiB7XHJcbiAgICBtYXJnaW46IDBweCAzMHB4O1xyXG59XHJcblxyXG4ucmlnaHRtaWRpY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIFNNQUxMICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiAgICBcclxuLyogTUVESVVNICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbn1cclxuICAgIFxyXG4vKiBMQVJHRSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgICAubXljb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA5NzBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shell-portfolio/shell-portfolio.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shell-portfolio/shell-portfolio.component.ts ***!
    \**************************************************************/

  /*! exports provided: ShellPortfolioComponent */

  /***/
  function srcAppShellPortfolioShellPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellPortfolioComponent", function () {
      return ShellPortfolioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShellPortfolioComponent =
    /*#__PURE__*/
    function () {
      // elevator: boolean;
      function ShellPortfolioComponent() {
        _classCallCheck(this, ShellPortfolioComponent);
      }

      _createClass(ShellPortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.elevator = true;
        }
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }, {
        key: "onOutletLoaded",
        value: function onOutletLoaded(component) {
          component.bIsWeb = false;
        }
      }]);

      return ShellPortfolioComponent;
    }();

    ShellPortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shell-portfolio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shell-portfolio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shell-portfolio/shell-portfolio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shell-portfolio.component.css */
      "./src/app/shell-portfolio/shell-portfolio.component.css")).default]
    })], ShellPortfolioComponent);
    /***/
  },

  /***/
  "./src/app/swedish/swedish.component.css":
  /*!***********************************************!*\
    !*** ./src/app/swedish/swedish.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSwedishSwedishComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dlZGlzaC9zd2VkaXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvc3dlZGlzaC9zd2VkaXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/swedish/swedish.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/swedish/swedish.component.ts ***!
    \**********************************************/

  /*! exports provided: SwedishComponent */

  /***/
  function srcAppSwedishSwedishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwedishComponent", function () {
      return SwedishComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SwedishComponent =
    /*#__PURE__*/
    function () {
      function SwedishComponent() {
        _classCallCheck(this, SwedishComponent);
      }

      _createClass(SwedishComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return SwedishComponent;
    }();

    SwedishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-swedish',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./swedish.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/swedish/swedish.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./swedish.component.css */
      "./src/app/swedish/swedish.component.css")).default]
    })], SwedishComponent);
    /***/
  },

  /***/
  "./src/app/talismans/talismans.component.css":
  /*!***************************************************!*\
    !*** ./src/app/talismans/talismans.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTalismansTalismansComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\niframe {\r\n    width: 80%;\r\n    height: 400px;\r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.midicon {\r\n    margin: 0px 30px;\r\n}\r\n\r\n/* icons */\r\n\r\na img {\r\n    margin-top: 0px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    height: 64px;\r\n    width: auto;\r\n    box-shadow: none;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFsaXNtYW5zL3RhbGlzbWFucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLFVBQVU7O0FBQ1Y7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3RhbGlzbWFucy90YWxpc21hbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaWZyYW1lIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5taWRpY29uIHtcclxuICAgIG1hcmdpbjogMHB4IDMwcHg7XHJcbn1cclxuXHJcbi8qIGljb25zICovXHJcbmEgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/talismans/talismans.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/talismans/talismans.component.ts ***!
    \**************************************************/

  /*! exports provided: TalismansComponent */

  /***/
  function srcAppTalismansTalismansComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TalismansComponent", function () {
      return TalismansComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TalismansComponent =
    /*#__PURE__*/
    function () {
      function TalismansComponent() {
        _classCallCheck(this, TalismansComponent);
      }

      _createClass(TalismansComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return TalismansComponent;
    }();

    TalismansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-talismans',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./talismans.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/talismans/talismans.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./talismans.component.css */
      "./src/app/talismans/talismans.component.css")).default]
    })], TalismansComponent);
    /***/
  },

  /***/
  "./src/app/unreal/unreal.component.css":
  /*!*********************************************!*\
    !*** ./src/app/unreal/unreal.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUnrealUnrealComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5yZWFsL3VucmVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3VucmVhbC91bnJlYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/unreal/unreal.component.ts":
  /*!********************************************!*\
    !*** ./src/app/unreal/unreal.component.ts ***!
    \********************************************/

  /*! exports provided: UnrealComponent */

  /***/
  function srcAppUnrealUnrealComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnrealComponent", function () {
      return UnrealComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UnrealComponent =
    /*#__PURE__*/
    function () {
      function UnrealComponent() {
        _classCallCheck(this, UnrealComponent);
      }

      _createClass(UnrealComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return UnrealComponent;
    }();

    UnrealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unreal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unreal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/unreal/unreal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unreal.component.css */
      "./src/app/unreal/unreal.component.css")).default]
    })], UnrealComponent);
    /***/
  },

  /***/
  "./src/app/web-projects/web-projects.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/web-projects/web-projects.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWebProjectsWebProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    vertical-align: top;\r\n}\r\n\r\nimg {\r\n    margin: 5px auto;\r\n    height: 40%;\r\n    width: auto;\r\n    max-width: 90%; \r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.inner {\r\n    margin: 0px auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n/* p {\r\n    max-height: 20%;\r\n} */\r\n\r\n.card-header {\r\n    margin: 0px auto 5px auto;\r\n    padding: 8px;\r\n    /* font: pink; */\r\n    display: block;\r\n    background-color: rgb(145, 145, 145);\r\n    /* background-color: rgb(160, 163, 154); */\r\n    /* background-image: radial-gradient(black,white); */\r\n    /* background-image: linear-gradient(black 50%,white, black); */\r\n}\r\n\r\n.card {\r\n    background-color: rgb(216, 216, 216);\r\n    width: 40%;\r\n    margin: 20px 0px;\r\n    height: 300px;\r\n    display: inline-block;\r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.card-body {\r\n    height: 40%;\r\n}\r\n\r\n.card-text {\r\n    margin: 0px 0px 15px 0px;\r\n}\r\n\r\n.elevator {\r\n    font-size: 13px;\r\n}\r\n\r\nbutton {\r\n    font-size: 20px;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .card-header {\r\n        font-size: 25px;\r\n    }\r\n\r\n    .card-body {\r\n        font-size: 18px;\r\n        padding: 0px 20px 20px 20px;\r\n    }\r\n\r\n    .card {\r\n        width: 90%;\r\n        height: auto;\r\n        /* min-height: 600px; */\r\n        margin: 20px 0px;\r\n        /* height: 1000px; */\r\n        display: inline-block;\r\n    }\r\n\r\n    img {\r\n        width: 60%;\r\n        height: auto;\r\n        margin: 15px auto;\r\n    }\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n    .card {\r\n        \r\n        height: 300px;\r\n        width: 46%;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n    }\r\n\r\n    .card-header {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 10px;\r\n    }\r\n\r\n    button {\r\n        font-size: 14px;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 547px) {\r\n    .card {\r\n        \r\n        height: 300px;\r\n        width: 46%;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n\r\n    }\r\n\r\n    .card-header {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n    /* img {\r\n        height: 40%;\r\n        width: auto;\r\n    } */\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n    .card {\r\n        width: 29.33%;\r\n        height: 300px;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n    } \r\n\r\n    .card-header {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXByb2plY3RzL3dlYi1wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztHQUVHOztBQUdIO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsb0RBQW9EO0lBQ3BELCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0EsVUFBVTs7QUFFVjs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjs7O0FBR0o7O0FBRUE7SUFDSTs7UUFFSSxhQUFhO1FBQ2IsVUFBVTtRQUNWLGVBQWU7UUFDZixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7OztBQUdKOztBQUlBLFdBQVc7O0FBRVY7SUFDRzs7UUFFSSxhQUFhO1FBQ2IsVUFBVTtRQUNWLGVBQWU7UUFDZixxQkFBcUI7O0lBRXpCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7OztPQUdHOztBQUVQOztBQUVBLFVBQVU7O0FBRVY7SUFDSTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsZUFBZTtRQUNmLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COzs7O0FBSUoiLCJmaWxlIjoic3JjL2FwcC93ZWItcHJvamVjdHMvd2ViLXByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogOTAlOyBcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxufVxyXG5cclxuLmlubmVyIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHAge1xyXG4gICAgbWF4LWhlaWdodDogMjAlO1xyXG59ICovXHJcblxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAvKiBmb250OiBwaW5rOyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjMsIDE1NCk7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYmxhY2ssd2hpdGUpOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsYWNrIDUwJSx3aGl0ZSwgYmxhY2spOyAqL1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDE1cHggMHB4O1xyXG59XHJcblxyXG4uZWxldmF0b3Ige1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLyogU01BTEwgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAvKiBtaW4taGVpZ2h0OiA2MDBweDsgKi9cclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgICAgIC8qIGhlaWdodDogMTAwMHB4OyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgfVxyXG4gXHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICBtYXJnaW46IDIwcHggMiU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qIE1FRElVTSAqL1xyXG4gICAgXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0N3B4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAyJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfSAqL1xyXG5cclxufVxyXG4gICAgXHJcbi8qIExBUkdFICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAyOS4zMyU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggMiU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfSBcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/web-projects/web-projects.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/web-projects/web-projects.component.ts ***!
    \********************************************************/

  /*! exports provided: WebProjectsComponent */

  /***/
  function srcAppWebProjectsWebProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebProjectsComponent", function () {
      return WebProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    var WebProjectsComponent =
    /*#__PURE__*/
    function () {
      function WebProjectsComponent(appcomponent) {
        _classCallCheck(this, WebProjectsComponent);

        this.appcomponent = appcomponent;
      }

      _createClass(WebProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return WebProjectsComponent;
    }();

    WebProjectsComponent.ctorParameters = function () {
      return [{
        type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
      }];
    };

    WebProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-web-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./web-projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/web-projects/web-projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./web-projects.component.css */
      "./src/app/web-projects/web-projects.component.css")).default]
    })], WebProjectsComponent);
    /***/
  },

  /***/
  "./src/app/wedding/wedding.component.css":
  /*!***********************************************!*\
    !*** ./src/app/wedding/wedding.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWeddingWeddingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VkZGluZy93ZWRkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvd2VkZGluZy93ZWRkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/wedding/wedding.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/wedding/wedding.component.ts ***!
    \**********************************************/

  /*! exports provided: WeddingComponent */

  /***/
  function srcAppWeddingWeddingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeddingComponent", function () {
      return WeddingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WeddingComponent =
    /*#__PURE__*/
    function () {
      function WeddingComponent() {
        _classCallCheck(this, WeddingComponent);
      }

      _createClass(WeddingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return WeddingComponent;
    }();

    WeddingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wedding',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wedding.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wedding/wedding.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wedding.component.css */
      "./src/app/wedding/wedding.component.css")).default]
    })], WeddingComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\X-Chill-X\Github\Profile\public\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map