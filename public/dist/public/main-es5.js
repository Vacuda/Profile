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


    __webpack_exports__["default"] = "\n<div class=\"container\">\n\n    <h1>Adam J. Sikora</h1>\n    <h3>-Software Developer-</h3>\n    <p><a href=\"mailto:adamjsikora@gmail.com\">adamjsikora@gmail.com</a> - 708.764.0029 - <a href=\"https://www.linkedin.com/in/adamjsikora/\">linkedin.com/in/adamjsikora</a></p>\n\n    <div class=\"division\"></div>\n\n    <!-- <p *ngIf=\"elevator==true\">Focused developer looking to become a vital part of the team. Great balance between coding skill and soft skills. Effective communicator and teacher. Eager to learn deeply and be coached. Eager to build quality software and write beautiful code. Strong ability to see both the big and the small and how important the one is to the other. I lean towards back-end, but I have a background in film/visuals/videogames, so I know why things should look and feel good too.</p>\n\n    <div *ngIf=\"elevator==true\" class=\"division\"></div> -->\n\n    <router-outlet></router-outlet>\n\n    <!-- <app-projects></app-projects> -->\n\n</div>\n\n\n<!-- <img src=\"assets/images/hostility_skirmish/screenshot.png\" alt=\"hello\">\n<img src=\"assets/images/swedish_mountain_manicure/teleport.gif\" alt=\"hello\"> -->\n\n\n<!-- \n\n    <button [routerLink]=\"['/alpha']\">Load Alpha</button>\n    <a [routerLink] = \"['details', 5]\"> Go to /products/details/5 </a> \n\n\n    <div *ngIf=\"errors\">\n        <h4>Errors:</h4>\n        <ul>\n            <div *ngFor=\"let item of errors\">\n                <li class=\"errors\">{{item.message}}</li>\n            </div>\n        </ul>\n\n    </div>\n\n\n\n\n    <div *ngIf=\"createtask\">\n        <form (submit)=\"createTask()\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"createtask.title\" [(ngModel)]=\"createtask.title\" class=\"form-control\" id=\"title\" placeholder=\"---\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"createtask.description\" [(ngModel)]=\"createtask.description\" class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"---\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Create</button>\n        </form>\n    </div>\n\n    <div *ngIf=\"updatetask\">\n        <form (submit)=\"updateTask(onetask._id)\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"updatetask.title\" [(ngModel)]=\"updatetask.title\" class=\"form-control\" id=\"title\" value=\"updatetask.title\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"updatetask.description\" [(ngModel)]=\"updatetask.description\" class=\"form-control\" id=\"description\" rows=\"3\" value=\"updatetask.description\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Submit Edits</button>\n        </form>\n    </div>\n\n    <div class=\"division\"></div>\n\n    <button class=\"btn btn-primary\" (click)=\"getTasks()\">Click for Tasks</button>\n\n    <div class=\"division\"></div>\n\n    <div class=\"centered\" *ngFor=\"let task of tasks\">\n\n        <h2><a id=\"clickable\" (click)=\"getOneTask(task._id)\">{{task.title}}</a></h2>\n        <div class=\"division\"></div>\n    </div> -->\n";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Hostility Skirmish</h1>\n\n    <p>Hostility Skirmish was a collobrative effort with two other programmers, built in a week.  We all wanted experience with Github and managing a project socially and using version control.  Getting the code to work as a multiplayer, online experience was the most difficult part, but we worked it out.</p>\n    <p>My contributions centered around building the gameplay mechanics and the models that it uses.  I had higher aspirations for it than we were able to get to.  We spent more time on the technology aspect of it than on the game itself.</p>\n    \n    <h4>Technologies</h4>\n    <p>C#, .NET, SQL</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Hostility_Skirmish\">-Github-</a>\n\n    <h5>Build your Party, Customize your Characters</h5>\n    <img src=\"assets/images/hostility_skirmish/build.gif\" alt=\"...\">\n\n    <h5>Challenge Fellow Onliners, Join the Battle</h5>\n    <img src=\"assets/images/hostility_skirmish/join_battle.gif\" alt=\"...\">\n\n    <h5>Turn-Based Attacks</h5>\n    <img src=\"assets/images/hostility_skirmish/attack.gif\" alt=\"...\">\n\n    <h5>Ouch!  Deaths.</h5>\n    <img src=\"assets/images/hostility_skirmish/death.gif\" alt=\"...\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Inventory Shelf</h1>\n\n    <p>I used old POS software for a long time at a prior job.  I wanted to recreate it in a simple form and make it look much nicer!</p>\n    <h4>Technologies</h4>\n    <p>MongoDB, Express, Angular, Node.js</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/InventoryShelf\">-Github-</a>\n\n    <h5>Adding, Editing, and Deleting a Product</h5>\n    <img src=\"assets/images/inventory_shelf/add_edit_delete.gif\" alt=\"...\">\n\n    <h5>Setting up a Keymap</h5>\n    <img src=\"assets/images/inventory_shelf/keymap.gif\" alt=\"...\">\n\n    <h5>Receive Inventory into the System</h5>\n    <img src=\"assets/images/inventory_shelf/receive.gif\" alt=\"...\">\n\n    <h5>Purchase your Snacks!</h5>\n    <img src=\"assets/images/inventory_shelf/purchase.gif\" alt=\"...\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Jigsaw Registry</h1>\n\n    <p>A big hobby of mine is doing jigsaw puzzles.  At one point, I went looking for an app that could help me log my puzzling hobby, but I didn't find it.  So, I built it myself!</p>\n    <p>I have not yet been back to it to make it look and feel nice, but it was a challenge working with so many different models and forms.</p>\n    \n    <h4>Technologies</h4>\n    <p>Python, Django, SQLite</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/jigsaw_registry\">-Github-</a>\n\n    <h5>Log all of your Jigsaw Puzzles</h5>\n    <img src=\"assets/images/jigsaw_registry/view_puzzle.gif\" alt=\"...\">\n\n    <h5>Adding a Puzzle into the Database</h5>\n    <img src=\"assets/images/jigsaw_registry/add_puzzle.gif\" alt=\"...\">\n\n    <h5>Adding a Project into the System</h5>\n    <img src=\"assets/images/jigsaw_registry/add_project.gif\" alt=\"...\">\n\n    <h5>Check out your Stats</h5>\n    <img src=\"assets/images/jigsaw_registry/stats.gif\" alt=\"...\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Ninjaman</h1>\n\n    <p>A typical pacman clone, but I learned a lot on building random worlds and using pathfinding algorithms to make sure that you could always win the game.</p>\n    <h4>Technologies</h4>\n    <p>Javascript</p>\n\n    <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Ninjaman\">-Github-</a>\n\n    <h5>Avoid the Monsters, Eat the Sushi</h5>\n    <img src=\"assets/images/ninjaman/win.gif\" alt=\"...\">\n\n    <h5>Randomized Worlds</h5>\n    <img src=\"assets/images/ninjaman/random.gif\" alt=\"...\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>";
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


    __webpack_exports__["default"] = "\n<p *ngIf=\"elevator==true\">Focused developer looking to become a vital part of the team. Great balance between coding skill and soft skills. Effective communicator and teacher. Eager to learn deeply and be coached. Eager to build quality software and write beautiful code. Strong ability to see both the big and the small and how important the one is to the other. I lean towards back-end, but I have a background in film/visuals/videogames, so I know why things should look and feel good too.</p>\n\n<div *ngIf=\"elevator==true\" class=\"division\"></div>\n\n\n<div class=\"inner\">\n    <div class=\"card\">\n        <div class=\"card-header\">Inventory Shelf</div>  \n        <img src=\"assets/images/inventory_shelf/screenshot.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Manage Inventory, Make Purchases</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/inventory']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Swedish Mountain Manicure</div>  \n        <img src=\"assets/images/swedish_mountain_manicure/screenshot.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Platformer Video Game</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/swedish']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Sacred Coins</div>  \n        <img src=\"assets/images/sacred_coins/screenshot.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Vast Choose-Your-Own-Adventure</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/sacred']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Jigsaw Registry</div>  \n        <img src=\"assets/images/jigsaw_registry/screenshot.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Jigsaw Puzzle Hobby Organizer</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/jigsaw']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Hostility Skirmish</div>  \n        <img src=\"assets/images/hostility_skirmish/screenshot.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Online Multiplayer Battle Game</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/hostility']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Ninjaman</div>  \n        <img src=\"assets/images/ninjaman/screenshot.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Pacman Clone</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/ninjaman']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div>\n</div>\n\n";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Sacred Coins</h1>\n\n    <p>When I was thirteen, I built a 200 page Choose-Your-Own-Adventure story for my family to play on Christmas Day in order to get their present.  And instead of flipping between pages, they had to walk to other parts of the house where I hid sleeves that contained each page of the story.  Every page had a different location in the house!  It had physical locks, items, and keys to use, and it was even customized for each family member.  It had 43 items in it and 17 ways to die.  No, no one ever completed it.  My mom did have me walk her through it though.</p>\n    <p>Anyway, I wanted to bring this back to life in a digital form.  (Don't pay attention to the writing!)  I really enjoyed building this, but I never finished it.  I loved building the sprites for the items. The crown jewel was working on the map and getting it to dynamically build as you played it!</p>\n    \n    <h4>Technologies</h4>\n    <p><a href=\"https://www.scirra.com/\">Built using Construct 2 (Visual Coding Language)</a></p>\n\n    <h5>Start your Adventure</h5>\n    <img src=\"assets/images/sacred_coins/start.gif\" alt=\"...\">\n\n    <h5>Get and Use Items</h5>\n    <img src=\"assets/images/sacred_coins/interact.gif\" alt=\"...\">\n\n    <h5>Full, Interactive Map, Builds as you Explore</h5>\n    <img src=\"assets/images/sacred_coins/map.gif\" alt=\"...\">\n\n    <h5>Find Multiple Rings to get past the Barrier</h5>\n    <img src=\"assets/images/sacred_coins/rings.gif\" alt=\"...\">\n\n    <h5>Built using a Visual Coding Language</h5>\n    <img src=\"assets/images/sacred_coins/coderun.gif\" alt=\"...\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n\n    <h1>Swedish Mountain Manicure</h1>\n\n    <p>I had tons of fun on this project, as you may be able to tell.  I had told my partner to give me three words and that I would build a small videogame around.  She said, “Sweden, Nail Polish, and ...”  I can't remember the third one.  Maybe it was Passcard?</p>\n    <p>Anyway, I spent a lot of time working on the different sprites and gameplay modes of Jamie, our Nail Polish hero. Working with each element and getting them all to work together was particularly joyous for me.  I learned a whole lot about animation and programming a main character.  I even did a lot of experimenting building environments using repeated sprites.  Look at that teleport animation!  And have you built a sprite meatball that spins?</p>\n    \n    <h4>Technologies</h4>\n    <p><a href=\"https://www.scirra.com/\">Built using Construct 2 (Visual Coding Language)</a></p>\n\n    <h5>You are Nail Polish, Explore the Mountain, Its in Sweden.</h5>\n    <img src=\"assets/images/swedish_mountain_manicure/full.gif\" alt=\"...\">\n\n    <h5>Different Nail Polish, Different Game Play</h5>\n    <img src=\"assets/images/swedish_mountain_manicure/character.gif\" alt=\"...\">\n\n    <h5>Nifty Teleport Animation</h5>\n    <img src=\"assets/images/swedish_mountain_manicure/teleport.gif\" alt=\"...\">\n\n    <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n\n</div>";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import { EditComponent } from './edit/edit.component';
    // import { NewComponent } from './new/new.component';
    // import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


    var routes = [{
      path: '',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"]
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
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
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


    __webpack_exports__["default"] = "\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    color: rgb(216, 216, 216)\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFJQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBcUJBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7OztBQUlBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjMsIDE1NCk7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KVxyXG59XHJcblxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gXHJcbiAgICBcclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuXHJcblxyXG5cclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG5cclxuXHJcbn0iXX0= */";
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
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.elevator = true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log("ondestroy");
          this.elevator = false;
        }
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
    "./src/app/inventory/inventory.component.ts"); // import { TaskService } from './task.service';
    // import { ShowComponent } from './show/show.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_8__["HostilityComponent"], _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_9__["NinjamanComponent"], _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_10__["SwedishComponent"], _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_11__["SacredComponent"], _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_12__["JigsawComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
      providers: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      //   providers: [TaskService],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdGlsaXR5L2hvc3RpbGl0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9ob3N0aWxpdHkvaG9zdGlsaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamlnc2F3L2ppZ3Nhdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9qaWdzYXcvamlnc2F3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmluamFtYW4vbmluamFtYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvbmluamFtYW4vbmluamFtYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59Il19 */";
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


    __webpack_exports__["default"] = "* {\r\n    vertical-align: top;\r\n}\r\n\r\nimg {\r\n    margin: 5px auto;\r\n    height: 40%;\r\n    width: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n/* p {\r\n    max-height: 20%;\r\n} */\r\n\r\n.card-header {\r\n    margin: 0px auto 5px auto;\r\n    /* font: pink; */\r\n    display: block;\r\n    background-color: rgb(145, 145, 145);\r\n    /* background-color: rgb(160, 163, 154); */\r\n    /* background-image: radial-gradient(black,white); */\r\n    /* background-image: linear-gradient(black 50%,white, black); */\r\n}\r\n\r\n.card {\r\n    background-color: rgb(216, 216, 216);\r\n    width: 40%;\r\n    margin: 20px;\r\n    height: 300px;\r\n    display: inline-block;\r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.card-body {\r\n    height: 40%;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n    .card {\r\n        width: 100%;\r\n        height: auto;\r\n        margin: 20px;\r\n        /* height: 800px; */\r\n        display: inline-block;\r\n    }\r\n\r\n    img {\r\n        width: 60%;\r\n        margin: 5px auto;\r\n    }\r\n \r\n    \r\n}\r\n\r\n@media only screen and (max-width: 481px) {\r\n    .card {\r\n        \r\n        /* height: 700px; */\r\n\r\n    }\r\n\r\n   \r\n\r\n\r\n}\r\n\r\n/* @media only screen and (min-width: 1024px) {\r\n    .card {\r\n        width: 30%;\r\n        margin: 10px;\r\n        display: inline-block;\r\n    }\r\n\r\n\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7R0FFRzs7QUFHSDtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsb0RBQW9EO0lBQ3BELCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQU1BO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjs7O0FBR0o7O0FBRUE7SUFDSTs7UUFFSSxtQkFBbUI7O0lBRXZCOzs7OztBQUtKOztBQUVBOzs7Ozs7OztHQVFHIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogcCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XHJcbn0gKi9cclxuXHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byA1cHggYXV0bztcclxuICAgIC8qIGZvbnQ6IHBpbms7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MywgMTU0KTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChibGFjayx3aGl0ZSk7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmxhY2sgNTAlLHdoaXRlLCBibGFjayk7ICovXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgLyogaGVpZ2h0OiA4MDBweDsgKi9cclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICB9XHJcbiBcclxuICAgIFxyXG59XHJcbiAgICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODFweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGhlaWdodDogNzAwcHg7ICovXHJcblxyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG5cclxufVxyXG4gICAgXHJcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuXHJcbn0gKi8iXX0= */";
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
        value: function ngOnInit() {
          this.elevator = true;
        } // ngOnChanges(){
        //     this.elevator = true;
        // }

      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.elevator = false;
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FjcmVkL3NhY3JlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9zYWNyZWQvc2FjcmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dlZGlzaC9zd2VkaXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3N3ZWRpc2gvc3dlZGlzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn0iXX0= */";
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