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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Blender Experience</h1>\n\n        <p>I've been using Blender for my current project, Talismans. My levels are procedurally generated, so\n            a number of things have been built with this in mind.</p>\n\n        <p>Puzzle pieces had to be very precise, so they can procedurally be made and still fit together in a consistent manner.</p>\n\n        <h4>Areas Of Focus</h4>\n        <p>Model Building, UV Maps, Minor Rigging</p>\n\n        <h5>Honey Hives Title Screen</h5>\n        <img src=\"assets/images/blender/hh_titlescreen.gif\" alt=\"Gif Showing Titlescreen Of Honey Hives\">\n\n        <h5>Many Different Models To Break!</h5>\n        <img src=\"assets/images/blender/pedestals.png\" alt=\"Many Containers Surrounding Pedestals\">\n\n        <h5>Pieces That Fit Evenly</h5>\n        <img src=\"assets/images/blender/pieces.png\" alt=\"Various Pieces On The Board\">\n\n        <h5>Dynamically Built Variant Doors</h5>\n        <img src=\"assets/images/blender/door.gif\" alt=\"Gif Showing Pieces Of Door Swapping\">\n\n        <h5>Procedurally-Generated Room Models That Fit Together</h5>\n        <img src=\"assets/images/blender/rooms.png\" alt=\"Various Models of a Room Kit\">\n\n        <h5>Obligatory Tutorial Donut</h5>\n        <img src=\"assets/images/blender/donut.png\" alt=\"Computer Graphic Donut\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Books and Authors Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>Python, Django, MySQLite</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Books_Authors\">-Github-</a>\n\n        <h5>Adding and Linking Books and Authors</h5>\n        <img src=\"assets/images/books_authors/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/break-out-again/break-out-again.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/break-out-again/break-out-again.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBreakOutAgainBreakOutAgainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n    <h4>Break Out Spin-off - Game Jam Game</h4>\n        <img src=\"assets/images/break_out_again/boa_playthrough.gif\" alt=\"Playthrough\">\n\n        <p></p>\n        <a class=\"btn btn-danger\" href=\"https://vavavacudagames.itch.io/break-out-again-webgl\">- Play Me! -</a>\n\n        <h4>Technologies</h4>\n        <p>Built using Unity and C#</p>\n        \n        <p></p>\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/BreakOut/tree/main/Assets/Scripts\">- C# Github Samples -</a>\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n        <!-- <footer> -->\n        <p id=\"footerlegal\">&copy; VavaVacuda Games 2023</p>\n        <!-- </footer> -->\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Cake-Rating Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>Typescript, MongoDB, Express, Angular, Node.js</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Rate_My_Cakes\">-Github-</a>\n\n        <h5>Adding Cakes and Rating Cakes</h5>\n        <img src=\"assets/images/rate_my_cakes/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cater-iron-galaxy/cater-iron-galaxy.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cater-iron-galaxy/cater-iron-galaxy.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCaterIronGalaxyCaterIronGalaxyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mycontainer\">\n\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n    <h1>Welcome to my portfolio,</h1>\n    <h1>Iron Galaxy Studios Person!</h1>\n    <h3>You look rather cool today.  Did you get a haircut?</h3>\n    <img class=\"ironlogo\" src=\"assets/images/cater_iron_galaxy/iron_galaxy_logo.png\" alt=\"Iron Galaxy Logo\">\n\n    <h3>You're probably wondering why I called this meeting.</h3>\n    <h3>Iron Galaxy, we've noticed some odd behavior coming from you.</h3>\n    <h3>You are expanding rapidly, and we're all a little...</h3>\n    <h1>ENVIOUS!</h1>\n    <h1>Can I join you!?</h1>\n    <img class=\"adamatpicture\" src=\"assets/images/cater_iron_galaxy/adam_at_iron_galaxy.png\" alt=\"Adam At Iron Galaxy\">\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n    \n\n</div>\n\n<app-shell-portfolio ></app-shell-portfolio>\n\n\n\n\n\n";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Coin Machine API</h1>\n\n        <p>I learned Ruby on Rails for this assignment from a prospective employer.  It's a basic CRUD API for depositing and withdrawing different coins from a machine.  It manages the possible coins and all of the transactions.  It alerts admins when the coin levels are too low.  It also uses a rudamentary, non-secure api key check before performing an action.</p>\n        <h4>Technologies</h4>\n        <p>Ruby on Rails, JSON, SQLite, Postman</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Coin_Machine\">-Github-</a>\n\n        <h5>Basic CRUD for Coins</h5>\n        <img src=\"assets/images/coin_machine/coins.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Basic CRUD for Transactions</h5>\n        <img src=\"assets/images/coin_machine/transactions.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/crop-tool/crop-tool.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crop-tool/crop-tool.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCropToolCropToolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>BMP Image Cropper</h1>\n\n        <p>\n            This commandline tool takes in an 8-bit .bmp file and outputs a new .bmp file, cropping\n            off any transparent edges, reducing the image to its smallest bounding rectangle.\n        </p>\n\n        <img src=\"assets/images/crop_tool/cropper.gif\" alt=\"Animated Gif Showing Crop Functionality\">\n\n        <h4>Technologies</h4>\n        <p>C++</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/BMP_ImageCropper\">-Github-</a>\n\n        <h4>Store BMP Info</h4>\n        <p>\n            It reads and stores the .bmp file information into the BMP_Format class.  The BMP BMP_Format\n            consists of a fileheader, image info, colortable data, and pixel data.  Each pixel is\n            represented by a byte, written in hexadecimal.  Each row of pixels is padded to be a\n            multiple of 4 bytes in size.\n        </p>\n\n        <h4>Analyze Info</h4>\n        <p>\n            It anaylzes the information to determine each edge of the image with the first untransparent\n            pixel.  This takes into account possible padding due to the 4 byte padding restriction.\n        </p>\n\n        <h4>Produce New Image</h4>\n        <p>\n            Then, it uses that information to build a new .bmp file.  This file may need padding added\n            to it.  It copies the relevant data from the original file into the resulting image.  It\n            also correctly modifies the metadata to produce a valid .bmp file.\n        </p>\n\n        \n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Diabetes Treatment App</h1>\n\n        <p>--WORK IN PROGRESS--</p>\n        <p>I'm working on this app for a friend who is a nurse in a Diabetes Clinic. The layout and technology are hooked up, and now I have to practically become a doctor to work out all the logic necessary to produce the proper diagnosis. Eek!</p>\n        <h4>Technologies</h4>\n        <p>Typescript, Express, Angular, Node.js</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Diabetes_Treatment\">-Github-</a>\n        <br>\n\n        <h5>Changing Inputs, Diagnosis Alters Automatically</h5>\n        <img class=\"shrink\" src=\"assets/images/diabetes_treatment/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Responsive!</h5>\n        <img src=\"assets/images/diabetes_treatment/responsive.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Gold-Getting Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>Python, Django, MySQLite</p>\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Gold_Getter_in_Django\">-Github-</a>\n\n        <p>and</p>\n\n        <p>Python, Flask, MySQLite</p>\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Gold_Getter_in_Flask\">-Github-</a>\n\n        <h5>Getting Golds</h5>\n        <img src=\"assets/images/gold_getter/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/honey-hives/honey-hives.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/honey-hives/honey-hives.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHoneyHivesHoneyHivesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n    <h4>Hexagonal, Sudoku, Math, Tile and Metroidvania Game</h4>\n        <img src=\"assets/images/honey_hives/screenshot_honeyhives.png\" alt=\"Title Screen of Honey Hives\">\n\n\n        \n        <h4>Introductory DevLog:</h4>\n        <div class=\"videoWrapper\"ng>\n            <iframe src=\"https://www.youtube.com/embed/F9iDBG0Fjc4\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n\n        <p></p>\n        <a class=\"btn btn-danger\" href=\"https://www.youtube.com/watch?v=F9iDBG0Fjc4&list=PLzFBsLQ1cL2v6WZdW85rzh1bQrXdMdfrZ\">- Youtube Playlist Of All Videos -</a>\n        <p></p>\n\n        <h4>Technologies</h4>\n        <p>Built using Unity and C#, Models in Blender</p>\n        \n        <p></p>\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/HoneyHives/tree/master/Assets/Scripts\">- C# Github Samples -</a>\n        \n        <h5>Avoid False Statements In 9 Directions and Your Flowers Will Bloom!</h5>\n        <img src=\"assets/images/honey_hives/honeyhives_guidelines.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>You Can't Move Some Pieces</h5>\n        <img class=\"img_sm\" src=\"assets/images/honey_hives/honeyhives_negative_feedback.gif\" alt=\"Animated Gif of Negative Feedback\">\n\n        <h5>Spin, Move, and Make The Logic Valid</h5>\n        <img src=\"assets/images/honey_hives/honeyhives_manipulate.gif\" alt=\"Animated Gif of Manipulating Pieces\">\n\n        <h5>How It's Going vs How It Started</h5>\n        <img src=\"assets/images/honey_hives/honeyhives_designhistory.png\" alt=\"Game Design Picture\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n        <!-- <footer> -->\n        <p id=\"footerlegal\">Honey Hives &copy; VavaVacuda Games 2023</p>\n        <!-- </footer> -->\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Hostility Skirmish</h1>\n\n        <p>Hostility Skirmish was a collobrative effort with two other programmers, built in a week.  We all wanted experience with Github and managing a project socially and using version control.  Getting the code to work as a multiplayer, online experience was the most difficult part, but we worked it out.</p>\n        <p>My contributions centered around building the gameplay mechanics and the models that it uses.  I had higher aspirations for it than we were able to get to.  We spent more time on the technology aspect of it than on the game itself.</p>\n        \n        <h4>Technologies</h4>\n        <p>C#, .NET Core, SQL</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Hostility_Skirmish\">-Github-</a>\n\n        <h5>Build your Party, Customize your Characters</h5>\n        <img src=\"assets/images/hostility_skirmish/build.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Challenge Fellow Onliners, Join the Battle</h5>\n        <img src=\"assets/images/hostility_skirmish/join_battle.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Turn-Based Attacks</h5>\n        <img src=\"assets/images/hostility_skirmish/attack.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Ouch!  Deaths.</h5>\n        <img src=\"assets/images/hostility_skirmish/death.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Inventory Shelf</h1>\n\n        <p>I used old POS software for a long time at a prior job.  I wanted to recreate it in a simple form and make it look much nicer!</p>\n        <h4>Technologies</h4>\n        <p>Typescript, MongoDB, Express, Angular, Node.js</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/InventoryShelf\">-Github-</a>\n\n        <h5>Adding, Editing, and Deleting a Product</h5>\n        <img src=\"assets/images/inventory_shelf/add_edit_delete.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Setting up a Keymap</h5>\n        <img src=\"assets/images/inventory_shelf/keymap.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Receive Inventory into the System</h5>\n        <img src=\"assets/images/inventory_shelf/receive.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Purchase your Snacks!</h5>\n        <img src=\"assets/images/inventory_shelf/purchase.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Jigsaw Registry</h1>\n\n        <p>A big hobby of mine is doing jigsaw puzzles.  At one point, I went looking for an app that could help me log my puzzling hobby, but I didn't find it.  So, I built it myself!</p>\n        <p>I have not yet been back to it to make it look and feel nice, but it was a challenge working with so many different models and forms.</p>\n        \n        <h4>Technologies</h4>\n        <p>Python, Django, SQLite</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/jigsaw_registry\">-Github-</a>\n\n        <h5>Log all of your Jigsaw Puzzles</h5>\n        <img src=\"assets/images/jigsaw_registry/view_puzzle.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Adding a Puzzle into the Database</h5>\n        <img src=\"assets/images/jigsaw_registry/add_puzzle.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Adding a Project into the System</h5>\n        <img src=\"assets/images/jigsaw_registry/add_project.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Check out your Stats</h5>\n        <img src=\"assets/images/jigsaw_registry/stats.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Ninjaman</h1>\n\n        <p>A typical pacman clone, but I learned a lot on building random worlds and using pathfinding algorithms to make sure that you could always win the game.</p>\n        <h4>Technologies</h4>\n        <p>Javascript</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Ninjaman\">-Github-</a>\n\n        <h5>Avoid the Monsters, Eat the Sushi</h5>\n        <img src=\"assets/images/ninjaman/win.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Randomized Worlds</h5>\n        <img src=\"assets/images/ninjaman/random.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Products and Categories Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>C#, .NET Core, MySQL</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Products_Categories\">-Github-</a>\n\n        <h5>Adding, Editing, and Linking Products and Categories</h5>\n        <img src=\"assets/images/products_categories/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Managing Products Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>Typescript, MongoDB, Express, Angular, Node.js</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Product_Manager\">-Github-</a>\n\n        <h5>Adding, Editing, and Viewing your Products</h5>\n        <img src=\"assets/images/product_manager/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "\n        <p class=\"elevator\">\n            Focused game developer looking to become a vital part of a software development \n            team.  Great balance between technical skills and soft skills.  Effective communicator \n            as a leader and a colleague.  Highly adept at seeing how smaller details and components \n            integrate with the larger whole.  Background in filmmaking, visual arts, and management.</p>\n\n\n    \n\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n\n\n<div class=\"inner\">\n    \n    <div class=\"card\" [routerLink]=\"['/talismans']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Talismans Of Genyatium</div>  \n        <img src=\"assets/images/talismans/screenshot_talismans.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Developed with C++/Unreal</p>\n        </div>\n    </div>\n    \n    <div class=\"card\" [routerLink]=\"['/honey_hives']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Honey Hives</div>  \n        <img src=\"assets/images/honey_hives/screenshot_honeyhives.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Developed with C#/Unity</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/break_out_again']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Break Out Again</div>  \n        <img src=\"assets/images/break_out_again/breakout_again_icon.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Developed with C#/Unity</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/crop_tool']\" (click)=\"toTop()\">\n        <div class=\"card-header\">BMP Image Cropper</div>  \n        <img src=\"assets/images/crop_tool/screenshot_crop_tool.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">C++ Commandline Tool</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/swedish']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Swedish Mountain Manicure</div>  \n        <img src=\"assets/images/swedish_mountain_manicure/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Platformer Prototype</p>\n        </div>\n    </div>\n    \n    <div class=\"card\" [routerLink]=\"['/unreal']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Unreal Engine</div>  \n        <img src=\"assets/images/unreal/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Game Engine Experience</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/unity']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Unity Engine</div>  \n        <img src=\"assets/images/unity/screenshot_unity.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Game Engine Experience</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/blender']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Blender</div>  \n        <img src=\"assets/images/blender/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">3D Modeling Experience</p>\n        </div>\n    </div>\n\n    \n    <!-- <div class=\"card\">\n        <div class=\"card-header\">Hostility Skirmish (web)</div>  \n        <img src=\"assets/images/hostility_skirmish/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Online Multiplayer Battle Game</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/hostility']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div> -->\n    \n    <!-- <div class=\"card\">\n        <div class=\"card-header\">Ninjaman</div>  \n        <img src=\"assets/images/ninjaman/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Pacman Clone</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/ninjaman']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div> -->\n    \n    <!-- <div class=\"card\">\n        <div class=\"card-header\">Sacred Coins</div>  \n        <img src=\"assets/images/sacred_coins/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Vast Choose-Your-Own-Adventure</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/sacred']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div> -->\n    \n    <div class=\"card\" [routerLink]=\"['/inventory']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Inventory Shelf (web)</div>  \n        <img src=\"assets/images/inventory_shelf/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Manage Inventory, Make Purchases</p>\n        </div>\n    </div>\n\n    <!-- <div class=\"card\">\n        <div class=\"card-header\">Coin Machine API (web)</div>  \n        <img src=\"assets/images/coin_machine/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Basic CRUD for Coin Management</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/coin_machine']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div> -->\n\n    <!-- <div class=\"card\">\n        <div class=\"card-header\">Diabetes Treatment App (web)</div>  \n        <img src=\"assets/images/diabetes_treatment/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Medical Diagnosis Aid</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/diabetes']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div> -->\n\n    <!-- <div class=\"card\">\n        <div class=\"card-header\">Wedding Planner (web)</div>  \n        <img src=\"assets/images/wedding_planner/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Exercise with Login and Registration</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/wedding_planner']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div> -->\n\n    <!-- <div class=\"card\">\n        <div class=\"card-header\">Jigsaw Registry (web)</div>  \n        <img src=\"assets/images/jigsaw_registry/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Jigsaw Puzzle Hobby Organizer</p>\n            <button class=\"btn btn-success\" [routerLink]=\"['/jigsaw']\" (click)=\"toTop()\">Check Me Out</button>\n        </div>\n    </div> -->\n\n\n\n</div>\n\n";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Sacred Coins</h1>\n\n        <p>When I was thirteen, I built a 200 page Choose-Your-Own-Adventure story for my family to play on Christmas Day in order to get their present.  And instead of flipping between pages, they had to walk to other parts of the house where I hid sleeves that contained each page of the story.  Every page had a different location in the house!  It had physical locks, items, and keys to use, and it was even customized for each family member.  It had 43 items in it and 17 ways to die.  No, no one ever completed it.  My mom did have me walk her through it though.</p>\n        <p>Anyway, I wanted to bring this back to life in a digital form.  (Don't pay attention to the writing!)  I really enjoyed building this, but I never finished it.  I loved building the sprites for the items. The crown jewel was working on the map and getting it to dynamically build as you played it!</p>\n        \n        <h4>Technologies</h4>\n        <p><a href=\"https://www.scirra.com/\">Built using Construct 2 (Visual Coding Language)</a></p>\n\n        <h5>Start your Adventure</h5>\n        <img src=\"assets/images/sacred_coins/start.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Get and Use Items</h5>\n        <img src=\"assets/images/sacred_coins/interact.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Full, Interactive Map, Builds as you Explore</h5>\n        <img src=\"assets/images/sacred_coins/map.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Find Multiple Rings to get past the Barrier</h5>\n        <img src=\"assets/images/sacred_coins/rings.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Built using a Visual Coding Language</h5>\n        <img src=\"assets/images/sacred_coins/coderun.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"mycontainer\">\n\n    <h1>Adam J. Sikora</h1>\n    <h3>-Software Programmer-</h3>\n    <p><a href=\"mailto:adamjsikora@gmail.com\">adamjsikora@gmail.com</a> - 708.764.0029\n    <p>\n        <a href=\"https://www.linkedin.com/in/adamjsikora/\"><img src=\"assets/images/icons/icon_linkedin.png\" alt=\"LinkedIn Icon\"></a>\n        <a class=\"midicon\" href=\"https://www.youtube.com/channel/UCQd1p4LLjIFoVrocGAS9bdQ\"><img src=\"assets/images/icons/icon_youtube.png\" alt=\"Youtube Icon\"></a>\n        <a class=\"rightmidicon\" href=\"https://twitter.com/vavavacudagames\"><img src=\"assets/images/icons/icon_twitter.png\" alt=\"Twitter Icon\"></a>\n        <a href=\"https://github.com/Vacuda\"><img src=\"assets/images/icons/icon_github.png\" alt=\"Github Icon\"></a>\n    </p>\n\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n\n    <router-outlet (activate)=\"onOutletLoaded($event)\"></router-outlet>\n\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"mycontainer\">\n\n    <h1>Adam J. Sikora</h1>\n    <h3>-Game Developer-</h3>\n    <h3>-Software Programmer-</h3>\n    <p><a href=\"mailto:adamjsikora@gmail.com\">adamjsikora@gmail.com</a> - 708.764.0029\n    <p>\n        <a href=\"https://www.linkedin.com/in/adamjsikora/\"><img src=\"assets/images/icons/icon_linkedin.png\" alt=\"LinkedIn Icon\"></a>\n        <a class=\"midicon\" href=\"https://www.youtube.com/channel/UCQd1p4LLjIFoVrocGAS9bdQ\"><img src=\"assets/images/icons/icon_youtube.png\" alt=\"Youtube Icon\"></a>\n        <a class=\"rightmidicon\" href=\"https://twitter.com/vavavacudagames\"><img src=\"assets/images/icons/icon_twitter.png\" alt=\"Twitter Icon\"></a>\n        <a href=\"https://github.com/Vacuda\"><img src=\"assets/images/icons/icon_github.png\" alt=\"Github Icon\"></a>\n    </p>\n\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n\n    <router-outlet (activate)=\"onOutletLoaded($event)\"></router-outlet>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shell-talismans-web/shell-talismans-web.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell-talismans-web/shell-talismans-web.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShellTalismansWebShellTalismansWebComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-talismans [bIsWeb_InputVariable]=\"true\"></app-talismans>\n\n\n<!-- TEST GITHUB CHANGE -->\n";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Swedish Mountain Manicure</h1>\n\n        <p>I had tons of fun on this project, as you may be able to tell.  I had told my partner to give me three words and that I would build a small videogame around.  She said, “Sweden, Nail Polish, and ...”  I can't remember the third one.  Maybe it was Passcard?</p>\n        <p>Anyway, I spent a lot of time working on the different sprites and gameplay modes of Jamie, our Nail Polish hero. Working with each element and getting them all to work together was particularly joyous for me.  I learned a whole lot about animation and programming a main character.  I even did a lot of experimenting building environments using repeated sprites.  Look at that teleport animation!  And have you built a sprite meatball that spins?</p>\n        \n        <h4>Technologies</h4>\n        <p><a href=\"https://www.scirra.com/\">Built using Construct 2 (Visual Coding Language)</a></p>\n\n        <h5>You are Nail Polish, Explore the Mountain, Its in Sweden.</h5>\n        <img src=\"assets/images/swedish_mountain_manicure/full.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Different Nail Polish, Different Game Play</h5>\n        <img src=\"assets/images/swedish_mountain_manicure/character.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Nifty Teleport Animation</h5>\n        <img src=\"assets/images/swedish_mountain_manicure/teleport.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "\n<div class=\"mycontainer\">\n\n    <div *ngIf=\"blockthemiddlebutton==false\">\n        <!-- Switch For Regular Or Web Version -->\n        <div *ngIf=\"bIsWeb==true\">\n            <button class=\"btn btn-success\" id=\"button_override\" [routerLink]=\"['/web']\">&laquo; Adam's Portfolio Site &laquo;</button>\n        </div>\n        <div *ngIf=\"bIsWeb==false\">\n            <button class=\"btn btn-success\" id=\"button_override\" [routerLink]=\"['/']\">&laquo; Adam's Portfolio Site &laquo;</button>\n        </div>\n    </div>\n\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n    <!-- <h1>The Talismans Of Genyatium</h1> -->\n    <h1>Procedurally-Generated Hexagon Jigsaw Puzzle Game</h1>\n    <img class=\"talismanlogo\" src=\"assets/images/talismans/talismans_logo.png\" alt=\"Talismans Logo\">\n\n    \n    <p>\n        <a class=\"icons\" href=\"https://www.youtube.com/channel/UCQd1p4LLjIFoVrocGAS9bdQ\"><img src=\"assets/images/icons/icon_youtube.png\" alt=\"Youtube Icon\"></a>\n        <a class=\"midicon icons\" href=\"https://twitter.com/vavavacudagames\"><img src=\"assets/images/icons/icon_twitter.png\" alt=\"Twitter Icon\"></a>\n        <a class=\"icons\" href=\"https://github.com/Vacuda/Partial_Talismans\"><img src=\"assets/images/icons/icon_github.png\" alt=\"Github Icon\"></a>\n    </p>\n\n    \n\n    <img class=\"show_img\" src=\"assets/images/talismans/piece_rotations.gif\" alt=\"One Hex Rotation\">\n    <img class=\"show_img\" src=\"assets/images/talismans/connecting_pieces.gif\" alt=\"Puzzle In Progress\">\n    <img class=\"show_img\" src=\"assets/images/talismans/cluster_rotations.gif\" alt=\"Large Cluster Rotation\">\n \n\n    <img class=\"show_img\" src=\"assets/images/talismans/imprint.gif\" alt=\"Imprinting Functionality\">\n    <img class=\"show_img\" src=\"assets/images/talismans/transfer_sack.gif\" alt=\"Transfer Sack Ability\">\n    <img class=\"show_img\" src=\"assets/images/talismans/cursor_to_square.gif\" alt=\"Cursor Morphing\">\n    &nbsp;\n\n    <p>This game is written in C++ but also utilizes blueprints for materials and menus.</p>\n    &nbsp;\n    <p>Here's my latest DevLog:</p>\n    \n    <div class=\"videoWrapper\">\n        <iframe src=\"https://www.youtube.com/embed/bsYTjPxUjUE\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n    <p>And...</p>\n    <p>Here's a breakdown of all the things:</p>\n    &nbsp;\n\n<!-- GENERAL -->\n<div class=\"item\" id=\"item_tagline\">\n    <div class=\"itembar_category btn\">\n        <h3>General</h3>\n        <h3>&nbsp;</h3>\n    </div>\n</div>\n\n\n    <!-- Tagline -->\n    <div class=\"item\" id=\"item_tagline\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_tagline()\">\n            <h3>Game Tag Line</h3>\n            <h3>&#9660;</h3>\n        </div>\n\n        <div *ngIf=\"item_tagline==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                The Talismans Of Genyatium is a calm, flow-inducing, procedurally-generated, multiple-puzzle, jigsaw puzzle game\n                based on hexagons and triangles and ... grief.  You find the pieces in containers piled up in a typical level,\n                no enemies, no deaths, just lots of things to break and lots of things to put back into place.\n            </p>\n        </div>\n\n    </div>\n\n    <!-- Procedural Generation Design -->\n    <div class=\"item\" id=\"item_prod_gen_design\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_prod_gen_design()\">\n            <h3>Procedural Generation Design</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_prod_gen_design==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                From the beginning, this game idea needed to be procedurally-generated in a number of different ways.  \n                I knew that this would complicate the development process, but I just trusted that I would be able to \n                figure it out when I got there.  Knowing this from the beginning helped me to frame every decision.  \n                I could build something as a placeholder, but if I knew it would need to be dynamic later, I consistently \n                had to think about building the foundation that would enable that.\n            </p>\n            <div>&nbsp;</div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                What you learn about procedural generation \n                is not really to build something that has no constraints, but to build something with specific and consistent \n                constraints, in which you can fill the spaces in with randomness.\n            </p>\n            <div>&nbsp;</div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                I got it working great!  There's much work \n                still to be done to make the physical levels more appealing, but as for the dynamic puzzles, the foundation \n                is strong.  Some variables already effectively alter how a world is built, and the plan is to just add more, \n                making puzzle worlds entirely customizable.\n            </p>\n        </div>\n    </div>\n\n    <!-- Learning Unreal Engine -->\n    <div class=\"item\" id=\"item_learn_unreal\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_learn_unreal()\">\n            <h3>Learning Unreal Engine</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_learn_unreal==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <img class=\"itemimg_sm\" src=\"assets/images/unreal/screenshot.png\" alt=\"Unreal Engine Logo\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                I am developing this game as I learn the Unreal Engine.  I wanted to jump into the industry standard engine \n                to expose myself to the kind of tool I'd be working with on the job.  While I've come a long way, this thing \n                is massive and obtuse for a beginner.  The more you know, the more you know you don't know. And while I'm \n                familiar with many pieces of software, its been a journey navigating Unreal and learning it as a language \n                itself, let alone connecting it to my C++ code.\n            </p>\n        </div>\n    </div>\n\n<!-- CODE DESIGN -->\n<div class=\"item\" id=\"item_tagline\">\n    <div class=\"itembar_category btn\">\n        <h3>Code Design</h3>\n        <h3>&nbsp;</h3>\n    </div>\n</div> <!-- <div>&nbsp;</div> -->\n\n    <!-- C++ Integration -->\n    <div class=\"item\" id=\"item_cpp_integration\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_cpp_integration()\">\n            <h3>C++ Integration</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_cpp_integration==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                It was important to me to learn to write a game in C++ code rather than blueprints.  In fact, busting \n                out a Material Blueprint was more intimidating than working with C++ code.  But it took awhile to really \n                learn(and I'm still learning, with every new UE4 tool I use) how to connect the C++ code to the editor.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/cpp_integration.png\" alt=\"C++ Code\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                In a lot of ways, this has been my biggest obstacle in learning UE4.  You have to learn how to exchange \n                references between code and editor.  You have to understand the object inheritance trees and how and \n                when to use which.  You have to understand how and when to instantiate actors or objects and why.\n            </p>\n        </div>\n    </div>\n\n    <!-- Communication Between Everything -->\n    <div class=\"item\" id=\"item_communication\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_communication()\">\n            <h3>Communication Between Everything</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_communication==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                I'm big into code organization, so I was creating new classes to house different sections of code.  \n                Quickly, this meant that any time I needed one class to talk to another, I needed to first hook \n                them up to each other.  This was becoming cumbersome each time, so I created the Hub. This was \n                a housing class that would be built at the beginning of a level and it housed all of the relevant connections.  \n                Now, a class only needs to hook up to the Hub, and it can start to talk to eveyone.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/hub_code.png\" alt=\"C++ Code\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                I'm currently \n                rethinking this, though.  The Hub builds and houses all of the classes I created to organize code, \n                but as I move away from OOP, I will be translating some of those classes to namespaces and static \n                functions.  Now, instead of Hub-> BoardArbiter-> RotateThisPiece(GrabbedPiece), I'll be able to write \n                BoardArbiter:: RotateThisPiece(GrabbedPiece) and I won't need to create a BoardArbiter object. Now, \n                we're thinking without bloated objects!\n            </p>\n        </div>\n    </div>\n\n    <!-- Naming Importance -->\n    <div class=\"item\" id=\"item_naming\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_naming()\">\n            <h3>Naming Importance</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_naming==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                I think I'm good at naming variables and functions.  The shape of the characters, the patterns \n                used, and what the words themselves mean.  All of these can be combined to create clear and \n                robust naming conventions.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/naming_code.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div>\n\n    <!-- Clear Comments -->\n    <div class=\"item\" id=\"item_comments\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_comments()\">\n            <h3>Clear Comments</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_comments==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                I'm glad I was able to work on this project before working on a bigger team.  I've developed \n                my own style of how I prefer to write comments, and though I know I'll have to adapt that style \n                to the team's conventions, I think it was very helpful to develop my own first.  I'm more worried \n                that I write too many comments, so I think I'll be fine.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/comments_code.png\" alt=\"Puzzle In Progress\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                My comments are the pseudo code version of what the code does.  The code, \n                then, is merely an implementation of those comments.  Thus, you can read the code, without \n                reading any of the actual code.\n            </p>\n        </div>\n    </div>\n\n    <!-- Pointers -->\n    <div class=\"item\" id=\"item_pointers\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_pointers()\">\n            <h3>Pointers</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_pointers==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <div class=\"pointer\">*</div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Using pointers effectively was an early hurdle that I needed to get right.  I had only learned \n                about them;  I hadn't used them much.  C++ and Unreal communicate together using them too, but \n                what really helped me was building this project.  My backend information needed to be secure if \n                I was going to reliably move pieces around the game without errors.  The information needed to stay \n                in one spot.  So, with pointers, when the player moves pieces around in the game, they are really just moving \n                pointers to that information.  And then, actors in the game are just representations of that information.\n            </p>\n        </div>\n    </div>\n\n    <!-- Save Games -->\n    <div class=\"item\" id=\"item_save_games\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_save_games()\">\n            <h3>Save Games</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_save_games==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Early on, I researched how to implement save games.  So, I consolidated all the information that needed \n                to persist in one spot, and the game worked off that consolidated information.  A long \n                while passed, and I was ready to actually get save games working.  And without too much trouble, \n                I created a custom Save Game Object and successfully saved it and loaded it into a new game.  But \n                something was wrong...\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/save_game_1.png\" alt=\"Screenshot Of Saving Not Working\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                All of my objects were gone!  I saved pointers to them, but of course, the \n                objects themselves didn't persist.  Although I did spend a lot of time trying to get my code to use \n                references to structs, the solution was to just reinstantiate those objects when reloading the game.  \n                I had correctly collected most of the information needed anyway to do this except that I now needed \n                a new way to reference unique pieces.  Previously, I was using the pointers themselves as a form of \n                UID.  Now, I built my own UID to easily be able to rebuild objects upon loading a saved game. Success!\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/save_game_2.png\" alt=\"Screenshot Of Saving Working\">\n        </div>\n    </div>\n    \n    <!-- Material Blueprints and Piece Faces -->\n    <div class=\"item\" id=\"item_piece_faces\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_piece_faces()\">\n            <h3>Material Blueprints and Piece Faces</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_piece_faces==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                There was a key problem I needed to tackle with Material Blueprints, and I was doing it with no \n                prior experience with blueprints or materials.  I wanted to take one texture, the full puzzle \n                image, use it on a Material Instance, and to dynamically move the texture into its proper place \n                on each piece.  And rotate it accordingly!\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/piece_face_1.png\" alt=\"Puzzle Images Off Kilter\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Any variance would mess up the image when you put the \n                pieces together.  I wish I was making a game about Squares with the power of 2, but alas, hexagons \n                with a height of sqrt of 12288.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/piece_face_2.png\" alt=\"Successful Puzzle Image Alignment\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                But I finally got it!\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/piece_face_3.png\" alt=\"Blueprint Screenshot Of Working Material\">\n        </div>\n    </div>\n\n    <!-- Precise UVs -->\n    <div class=\"item\" id=\"item_precise_uvs\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_precise_uvs()\">\n            <h3>Precise UVs</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_precise_uvs==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                The long lesson learned is that their needs to be a tight marriage between models, their UVs, \n                and how the texture is manipulated on the material blueprint, especially when your objects \n                need to be mathematically precise.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/uvs.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div>\n\n    <!-- Getting Pieces To Recognize Their Connections -->\n    <div class=\"item\" id=\"item_recognize_connections\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_recognize_connections()\">\n            <h3>Getting Pieces To Recognize Their Connections</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_recognize_connections==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                This was one of my largest coding problems on this project.  It involved many steps.  \n                Each piece needs to store information for each other piece that it connects to.  First, \n                the unique ID of the piece it attaches to.  Second, the direction of the connection, \n                relative to a base rotation.  And finally, what segment of the other piece it needs to \n                be connected to.  All of this information is gathered when the puzzles are cut and checked \n                against when a piece is dropped.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/recognize.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div>\n\n    <!-- Connecting Pieces -->\n    <div class=\"item\" id=\"item_connecting_pieces\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_connecting_pieces()\">\n            <h3>Connecting Pieces</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_connecting_pieces==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                At first, I built the game to move pieces around the board.  When I approached the problem \n                of getting pieces to connect together, I knew I had to refactor.  So, I introduced Clusters.  \n                Now, the player actually moves invisible containers around the board that can hold one or more \n                pieces.  Every piece starts with its own cluster.  When a connecting piece is found, the piece \n                is added to the initial cluster, and the second one is destroyed.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/connecting_pieces.gif\" alt=\"Puzzle In Progress\">\n        </div>\n    </div>\n\n    <!-- Rotating Pieces, Rotating Clusters! -->\n    <div class=\"item\" id=\"item_rotating\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_rotating()\">\n            <h3>Rotating Pieces, Rotating Clusters!</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_rotating==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Each spot on the board has a unique address and part of that address is its rotation(Tri).  \n                Col, Row, and Tri.  A piece can only rotate by 60 degrees, so Tri is represented by an \n                integer(1-6).  Now, it's easy enough to rotate a piece.  \n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/piece_rotations.gif\" alt=\"One Hex Rotation\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                It spins around one point, and \n                the Tri changes by 1.  If at 7, reset to 1.  The rotation of the actor cluster is rotated \n                accordingly, and the pieces are connected to the cluster.  But what happens if a large cluster contains \n                pieces in different Col and Row addresses?\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/cluster_rotations.gif\" alt=\"Large Cluster Rotation\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                How would I know how to change the addresses of each piece?  I first tried to use trigonometry \n                to solve this problem.  I got close.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/math_scribbles.png\" alt=\"Page Scribbles Of Mathematic Formulas\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                I was able to reliably get the correct integer change \n                that needed to happen in the Col and Row.  Tri still changed only one.  However, I couldn't \n                figure out how to know whether I should add this number or subtract this number.  Before \n                solving this with trigonometry, I came to realize that I could hard code these numbers with \n                not too much effort.  They still followed a pattern, and hard coding this felt more reliable \n                than my decades past AP Trigonometry knowledge.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/rotation_hexmap.png\" alt=\"Hexagon Map To Help Find Rotations\">\n        </div>\n    </div>\n\n    <!-- Full Refactors Are Fun!! -->\n    <div class=\"item\" id=\"item_refactors\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_refactors()\">\n            <h3>Full Refactors Are Fun!!</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_refactors==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                You commit a stable build to gibhub, make a new branch, and then proceed to break your beloved \n                program.  Slowly, you move through the program, changing what you need to.  No use trying to \n                compile if you know there will tons of errors.  Finally, you've gone through everything you \n                think you need to change.  Compile, and you see how you did!  And then, you fix minor errors \n                for however long.  And usually, you've built your program better than you did last time.\n            </p>\n        </div>\n    </div>\n\n    <!-- Memory Management / Garbage Collection -->\n    <div class=\"item\" id=\"item_mem_management\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_mem_management()\">\n            <h3>Memory Management / Garbage Collection</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_mem_management==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                I haven't worked with any low level languages or systems programming, but I have had to \n                understand when I can let memory be garbage collected by UE4 and when and how to \n                protect it(UPROPERTY).  So, while I don't have practical experience with memory management, \n                I am starting to scratch the surface of it.\n            </p>\n        </div>\n    </div>\n\n    <!-- Object-Orientated VS Functional -->\n    <div class=\"item\" id=\"item_oop_vs_func\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_oop_vs_func()\">\n            <h3>Object-Orientated VS Functional</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_oop_vs_func==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Okay.  Object-Orientated Programming... After being web taught, OOP was supposed to be the newest, \n                bestest thing.  Make everything an object!  Turning my attention towards video game programming \n                however, I quickly picked up on the anti-OOP vibe.  Being new with UE4 though and programming in \n                general, I struggled just to get things to actually work.  Making them work well is another story.  \n                Making broad decisions on the different ways to get something to work is acquired over time.  My \n                game is not big enough to need to pay attention to every bit, but at least in the scope of a function, \n                I'd be aware of only including actions that are necessary.\n            </p>\n            <div>&nbsp;</div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                In this argument, however, I've recently \n                found that I'm using objects and classes sometimes only as code organization, only as namespaces.  \n                My next refactor goal on this project is to remove unneeded objects and replace them with namespace \n                files.   \n            </p>\n        </div>\n    </div>\n\n    <!-- Objects VS Actors VS Structs -->\n    <!-- <div class=\"item\" id=\"item_obj_act_str\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_obj_act_str()\">\n            <h3>Objects VS Actors VS Structs</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_obj_act_str==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                --\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/bin_view.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div> -->\n\n    <!-- Multiple Levels...Or Not??? -->\n    <div class=\"item\" id=\"item_multiple_levels\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_multiple_levels()\">\n            <h3>Multiple Levels...Or Not???</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_multiple_levels==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Currently, every puzzle board and every room is a separate level.  All pieces, vessels, \n                and backend objects are reloaded and respawned every time you change between rooms and \n                puzzles.  I know a lot of this is wasteful.  Even though the game runs fine now, I'm \n                weighing the trade offs of moving to just one level.  This would mean that I save the \n                comp time of not reloading things for no reason, but it would mean that I'd hold more \n                memory on the heap.  Still researching my options.\n            </p>\n        </div>\n    </div>\n\n    <!-- Blueprint Programming -->\n    <div class=\"item\" id=\"item_blueprints\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_blueprints()\">\n            <h3>Blueprint Programming</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_blueprints==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                I was more intimidated by blueprints than I was with my C++.  Over time, I was able to \n                get a better handle on them.  I like making them look neat, and I like some of the \n                visual representations of different types of variables.  I also like how it's easier \n                to get references from the editor.  However, larger operations are better done in C++.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/blueprints.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div>\n\n    <!-- UMG Widget Menus -->\n    <div class=\"item\" id=\"item_widgets\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_widgets()\">\n            <h3>UMG Widget Menus</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_widgets==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Widgets were another Unreal paradigm that took some effort to work with.  It didn't help \n                that I came to them without blueprint experience.  Following online tutorials weren't that \n                difficult, though.  First, I just got one properly working with the game. Next, I put in a pause and stats menu.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/pause_menu.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div>\n\n    <!-- Stats Menu -->\n    <div class=\"item\" id=\"item_stats_menu\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_stats_menu()\">\n            <h3>Stats Menu</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_stats_menu==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Making this menu required a good system of communication between the widget and my back-end \n                C++ code.  I also had to build a number of hooks in my code so I can gather all of this information.  \n                Getting these numbers is one thing, but I also wanted the player to be able to change the look of \n                progress. \n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/perspective_change.gif\" alt=\"Puzzle In Progress\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Specifically, that last look, which I've called MatrixBoxes.  Initially, I got this \n                working by creating a Widget Image for each of these black squares and making them visible according \n                to a TArray of an Enum that represents each different square.  I knew there was probably a better \n                solution, but I was glad I accomplished something “off the beaten path.”  Later, I had to add \n                characters to my main Font because it didn't come with some common punctuation.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/punctuation_creation.png\" alt=\"Puzzle In Progress\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Now that my game \n                brought me to learning how to make my own vector-graphic font characters, why don't I make some \n                characters that will act as my boxes?  Now, my back-end just returns a string in MatrixBox Language!\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/matrixbox_language.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div>\n\n    <!-- Model Rigging And Unreal Animation Integration -->\n    <div class=\"item\" id=\"item_rigging\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_rigging()\">\n            <h3>Model Rigging And Unreal Integration</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_rigging==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                This took me awhile.  I've worked with keyframe software before, so doing the simple animation \n                itself wasn't a problem for me.  However, I had to learn the basics of rigging 3D models and \n                how to specificallly configure my blender models for exporting into the .fbx file.  Then, \n                import them correctly into Unreal.  These two animations are minor, but the result of a lot \n                of struggle.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/itempiece_animation.gif\" alt=\"Animation Of An ItemPiece\">\n            <img class=\"itemimg\" src=\"assets/images/talismans/cursor_to_square.gif\" alt=\"Animation Of Cursor To Square\">\n        </div>\n    </div>\n\n    <!-- Puzzle Pieces -->\n    <div class=\"item\" id=\"item_puzzle_pieces\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_puzzle_pieces()\">\n            <h3>Puzzle Pieces - Randomly Cut And Integrated</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_puzzle_pieces==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                At the beginning of a new puzzle build, the puzzle pieces are randomly cut for each puzzle.  \n                This information is stored in simple, custom structs.  Objects are made for each of these pieces \n                at the beginning of each session based on this information, and these objects are moved and \n                manipulated throughout the game, which also alters the information in the structs.  The on-screen\n                pieces that the player sees are only representations of this information. In the future, I will be \n                able to effect the ratio of smaller pieces to bigger pieces based on\n                difficulty settings.\n            </p>\n            <!-- <img class=\"itemimg\" src=\"assets/images/talismans/bin_view.png\" alt=\"Puzzle In Progress\">\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                In the future, I will be able to effect the ratio of smaller pieces to bigger pieces based on\n                difficulty settings.\n            </p> -->\n        </div>\n    </div>\n\n    <!-- Table Navigation -->\n    <div class=\"item\" id=\"item_table_navigation\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_table_navigation()\">\n            <h3>Table Navigation</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_table_navigation==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                ---\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/table_navigation.gif\" alt=\"Puzzle In Progress\">\n        </div>\n    </div>\n\n<!-- GAME DESIGN / ART -->\n<div class=\"item\" id=\"item_tagline\">\n    <div class=\"itembar_category btn\">\n        <h3>Game Design/Art</h3>\n        <h3>&nbsp;</h3>\n    </div>\n</div>\n\n    <!-- Puzzle Images -->\n    <div class=\"item\" id=\"item_puzzle_images\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_puzzle_images()\">\n            <h3>Puzzle Images - Curated By Me</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_puzzle_images==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                Puzzle images are curated by me, mostly using royalty free images online, but a future \n                goal would be to add images from digital artists.  They come in 18 different sizes and \n                currently, there are 234 possible puzzles in the game.  Images are picked at random \n                during a world build according to how many pieces or how many puzzles are chosen.  Or \n                according to a percentage variable of larger puzzles versus small puzzles.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/puzzle_images.gif\" alt=\"Puzzle In Progress\">\n        </div>\n    </div>\n\n    <!-- Vessels -->\n    <div class=\"item\" id=\"item_vessels\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_vessels()\">\n            <h3>Vessels</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_vessels==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                These vessels represent all the baggage we store our pain in.  They are inspired by all \n                the breakable objects in video games that are so fun to clear.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/vessels.png\" alt=\"Hundreds Of Vessels Ready To Break\">\n        </div>\n    </div>\n\n    <!-- Parables -->\n    <!-- <div class=\"item\" id=\"item_parables\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_parables()\">\n            <h3>Parables</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_parables==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                --\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/bin_view.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div> -->\n\n    <!-- Character Crests -->\n    <!-- <div class=\"item\" id=\"item_character_crests\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_character_crests()\">\n            <h3>Character Crests</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_character_crests==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                --\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/bin_view.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div> -->\n\n    <!-- Gameplay Verbs -->\n    <div class=\"item\" id=\"item_gameplay_verbs\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_gameplay_verbs()\">\n            <h3>Future Gameplay Verbs</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_gameplay_verbs==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                The other side of the gameplay loop is breaking Vessels, and becoming increasingly \n                better at clearing them.  The plan is to create 4 or 5 different types of abilities, \n                which would each have a few levels of magnitude.  Each world build would populate \n                vessels with upgrades to these “Vitalities.”  Each game would have different combinations \n                of these Vitalities, making for a different type of breaking experience each game.  Imagine \n                one game where your stomp is the most powerful.  Imagine another where you find lots of \n                items to place that clear full lines of vessels at a time.  Imagine another where jumping up clears \n                a lot of vessels at once.  AND etc.  Here's a mockup of the stats screen that would show different\n                Vitalities gained.\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/mockup.png\" alt=\"Photoshop Mockup Of Upgrades\">\n        </div>\n    </div>\n\n    <!-- Prod Gen Levels -->\n    <!-- <div class=\"item\" id=\"item_prod_gen_levels\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_prod_gen_levels()\">\n            <h3>Procedurally Generated Levels</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_prod_gen_levels==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                --\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/bin_view.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div> -->\n\n    <!-- Modeling -->\n    <!-- <div class=\"item\" id=\"item_modeling\">\n\n        <div class=\"itembar btn\" (click)=\"toggle_item_modeling()\">\n            <h3>3D Modeling - Blender</h3>\n            <h3>&#9660;</h3>\n        </div>\n        <div *ngIf=\"item_modeling==true\" class=\"itemcontent\">\n            <div class=\"finedivision\"></div>\n            <div class=\"finedivision2\"></div>\n            <p class=\"bodytext left_align\">&nbsp;&nbsp;&nbsp;\n                --\n            </p>\n            <img class=\"itemimg\" src=\"assets/images/talismans/bin_view.png\" alt=\"Puzzle In Progress\">\n        </div>\n    </div> -->\n\n    \n\n\n\n\n\n\n\n<!--END ITEMS-->\n\n\n\n\n\n\n    <footer>\n        <p id=\"footerlegal\">&nbsp;</p>\n    </footer>\n\n            <!-- Switch For Regular Or Web Version -->\n            <div *ngIf=\"bIsWeb==true\">\n                <button class=\"btn btn-success onbottom\" id=\"button_override\" (click)=\"toTop()\" [routerLink]=\"['/web']\">&laquo; Adam's Portfolio Site &laquo;</button>\n            </div>\n            <div *ngIf=\"bIsWeb==false\">\n                <button class=\"btn btn-success onbottom\" id=\"button_override\" (click)=\"toTop()\" [routerLink]=\"['/']\">&laquo; Adam's Portfolio Site &laquo;</button>\n            </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n    <!-- <h1>The Talismans Of Genyatium</h1> -->\n    <img class=\"talismanlogo\" src=\"assets/images/talismans/talismans_logo.png\" alt=\"Talismans Logo\">\n    \n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n\n\n    <!-- <footer> -->\n        <p id=\"footerlegal\">Talismans Of Genyatium &copy; VavaVacuda Games 2023</p>\n    <!-- </footer> -->\n\n\n    \n    \n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/unity/unity.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unity/unity.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUnityUnityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Unity Engine Experience</h1>\n\n        <p>I'm developing a project in Unity named <a href=\"/honey_hives\">Honey Hives</a>.\n           Originally started as a two-week sprint to learn Unity by building a quick prototype; now, I'm looking to finish it up for release.\n            I definitely used my experience with Unreal to move quickly into how Unity was looking for me to build a project. \n            I can see how Unity is quicker to get things working, but I did have to turn my back on trying to make things as \n            lean while I was programming.</p>\n        <p></p>\n\n        <h4>Areas Of Focus</h4>\n        <p>Differences Between C# and C++, Easier To Connect Between Elements</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/HoneyHives/tree/master/Assets/Scripts\">- C# Github Samples -</a>\n\n        <h5>Structured By GameObject Heirarchy</h5>\n        <img src=\"assets/images/unity/unity_honeyhives.png\" alt=\"Screenshot of Unity Program\">\n\n        <h5>C# Code</h5>\n        <img src=\"assets/images/unity/unity_honeyhives_code.png\" alt=\"Screenshot of C# Code\">\n\n        \n\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Unreal Engine Experience</h1>\n\n        <p>I'm currently developing a procedurally-generated game, and I'm utilizing the Unreal Engine to build it. It's being built\n            mainly with C++, but I'm using Blueprints for materials and menus.</p>\n\n        <h4>Areas Of Focus</h4>\n        <p>C++ Integration With Engine, Material Blueprints, Widget Blueprints</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Partial_Talismans\">-Github Samples-</a>\n\n        <h5>C++ Integration</h5>\n        <img src=\"assets/images/unreal/code_1.png\" alt=\"Screenshot of C++ Code\">\n\n        <h5>Material Blueprints</h5>\n        <img src=\"assets/images/unreal/blueprints.png\" alt=\"Screenshot of Blueprints in Action\">\n\n        <h5>Texture Guide</h5>\n        <img src=\"assets/images/unreal/texture_guide.png\" alt=\"Texture Guide Screenshot\">\n\n        <h5>Fine Tuned Material UVs on Pieces</h5>\n        <img src=\"assets/images/unreal/radialchoice.png\" alt=\"RadialChoice Screenshot\">\n\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "\n<p class=\"elevator\">\n    Focused developer looking to become a vital part of a software development \n    team.  Great balance between technical skills and soft skills.  Effective communicator \n    as a leader and a colleague.  Highly adept at seeing how smaller details and components \n    integrate with the larger whole.  Background in filmmaking, visual arts, and management.</p>\n\n<div class=\"division\"></div>\n<div class=\"division2\"></div>\n\n<div class=\"inner\">\n\n    <div class=\"card\" [routerLink]=\"['/web/talismans']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Talismans Of Genyatium</div>  \n        <img src=\"assets/images/talismans/screenshot_talismans.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Developed with C++/Unreal</p>\n        </div>\n    </div>\n    \n    <div class=\"card\" [routerLink]=\"['/web/inventory']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Inventory Shelf (web)</div>  \n        <img src=\"assets/images/inventory_shelf/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Manage Inventory, Make Purchases</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/web/honey_hives']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Honey Hives</div>  \n        <img src=\"assets/images/honey_hives/screenshot_honeyhives.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Developed with C#/Unity</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/web/coin_machine']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Coin Machine API</div>  \n        <img src=\"assets/images/coin_machine/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Basic CRUD for Coin Management</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/web/crop_tool']\" (click)=\"toTop()\">\n        <div class=\"card-header\">BMP Image Cropper</div>  \n        <img src=\"assets/images/crop_tool/screenshot_crop_tool.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">C++ Commandline Tool</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/web/diabetes']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Diabetes Treatment App</div>  \n        <img src=\"assets/images/diabetes_treatment/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Medical Diagnosis Aid</p>\n        </div>\n    </div>\n\n    <!-- <div class=\"card\" [routerLink]=\"['/web/swedish']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Swedish Mountain Manicure</div>  \n        <img src=\"assets/images/swedish_mountain_manicure/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Platformer Prototype</p>\n        </div>\n    </div> -->\n\n    <div class=\"card\" [routerLink]=\"['/web/wedding_planner']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Wedding Planner</div>  \n        <img src=\"assets/images/wedding_planner/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Exercise with Login and Registration</p>\n        </div>\n    </div>\n\n    <!-- <div class=\"card\" [routerLink]=\"['/web/sacred']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Sacred Coins</div>  \n        <img src=\"assets/images/sacred_coins/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Vast Choose-Your-Own-Adventure</p>\n        </div>\n    </div> -->\n\n    <div class=\"card\" [routerLink]=\"['/web/jigsaw']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Jigsaw Registry</div>  \n        <img src=\"assets/images/jigsaw_registry/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Jigsaw Puzzle Hobby Organizer</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/web/hostility']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Hostility Skirmish</div>  \n        <img src=\"assets/images/hostility_skirmish/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Online Multiplayer Battle Game</p>\n        </div>\n    </div>\n\n    <div class=\"card\" [routerLink]=\"['/web/ninjaman']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Ninjaman</div>  \n        <img src=\"assets/images/ninjaman/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Pacman Clone</p>\n        </div>\n    </div>\n\n    <!-- <div class=\"card\" [routerLink]=\"['/web/books_authors']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Books and Authors</div>  \n        <img src=\"assets/images/books_authors/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Books and Authors Exercise</p>\n        </div>\n    </div> -->\n\n    <div class=\"card\" [routerLink]=\"['/web/gold_getter']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Gold Getter</div>  \n        <img src=\"assets/images/gold_getter/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Gold-Getting Exercise with Python</p>\n        </div>\n    </div>\n\n    <!-- <div class=\"card\" [routerLink]=\"['/web/rate_my_cakes']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Rate My Cakes</div>  \n        <img src=\"assets/images/rate_my_cakes/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Cake-Rating Exercise</p>\n        </div>\n    </div> -->\n\n    <!-- <div class=\"card\" [routerLink]=\"['/web/products_categories']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Products and Categories</div>  \n        <img src=\"assets/images/products_categories/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Product and Category Exercise</p>\n        </div>\n    </div> -->\n\n    <!-- <div class=\"card\" [routerLink]=\"['/web/product_manager']\" (click)=\"toTop()\">\n        <div class=\"card-header\">Product Manager</div>  \n        <img src=\"assets/images/product_manager/screenshot.png\" class=\"card-img-top\" alt=\"Screenshot\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Managing Products Exercise</p>\n        </div>\n    </div> -->\n\n</div>\n\n";
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


    __webpack_exports__["default"] = "<div class=\"inner\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\">-Back-</button>\n    </div>\n\n    <div class=\"division\"></div>\n    <div class=\"division2\"></div>\n\n        <h1>Wedding Planner Exercise</h1>\n\n        <h4>Technologies</h4>\n        <p>C#, .NET Core, MySQL</p>\n\n        <a class=\"btn btn-danger\" href=\"https://github.com/Vacuda/Wedding_Planner\">-Github-</a>\n\n        <h5>Login and Registration</h5>\n        <img src=\"assets/images/wedding_planner/registration.gif\" alt=\"Animated Gif Showing Functionality\">\n\n        <h5>Adding and RSVPing to a Wedding</h5>\n        <img src=\"assets/images/wedding_planner/adding_wedding.gif\" alt=\"Animated Gif Showing Functionality\">\n\n    <!-- Switch For Regular Or Web Version -->\n    <div *ngIf=\"bIsWeb==true\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/web']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n    <div *ngIf=\"bIsWeb==false\">\n        <button class=\"btn btn-success\" [routerLink]=\"['/']\" (click)=\"toTop()\">-Back-</button>\n    </div>\n\n</div>";
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


    var _cater_iron_galaxy_cater_iron_galaxy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./cater-iron-galaxy/cater-iron-galaxy.component */
    "./src/app/cater-iron-galaxy/cater-iron-galaxy.component.ts");
    /* harmony import */


    var _shell_talismans_web_shell_talismans_web_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shell-talismans-web/shell-talismans-web.component */
    "./src/app/shell-talismans-web/shell-talismans-web.component.ts");
    /* harmony import */


    var _unity_unity_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./unity/unity.component */
    "./src/app/unity/unity.component.ts");
    /* harmony import */


    var _honey_hives_honey_hives_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./honey-hives/honey-hives.component */
    "./src/app/honey-hives/honey-hives.component.ts");
    /* harmony import */


    var _crop_tool_crop_tool_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./crop-tool/crop-tool.component */
    "./src/app/crop-tool/crop-tool.component.ts");
    /* harmony import */


    var _break_out_again_break_out_again_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./break-out-again/break-out-again.component */
    "./src/app/break-out-again/break-out-again.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["ShellPortfolioComponent"],
      children: [{
        path: '',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"]
      }, // { path: 'talismans',component: TalismansComponent },
      {
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
      }, {
        path: 'unity',
        component: _unity_unity_component__WEBPACK_IMPORTED_MODULE_25__["UnityComponent"]
      }, {
        path: 'honey_hives',
        component: _honey_hives_honey_hives_component__WEBPACK_IMPORTED_MODULE_26__["HoneyHivesComponent"]
      }, {
        path: 'crop_tool',
        component: _crop_tool_crop_tool_component__WEBPACK_IMPORTED_MODULE_27__["CropToolComponent"]
      }, {
        path: 'break_out_again',
        component: _break_out_again_break_out_again_component__WEBPACK_IMPORTED_MODULE_28__["BreakOutAgainComponent"]
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
      }, // { path: 'talismans',component: TalismansComponent },
      {
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
      }, {
        path: 'honey_hives',
        component: _honey_hives_honey_hives_component__WEBPACK_IMPORTED_MODULE_26__["HoneyHivesComponent"]
      }, {
        path: 'crop_tool',
        component: _crop_tool_crop_tool_component__WEBPACK_IMPORTED_MODULE_27__["CropToolComponent"]
      }]
    }, {
      path: 'i_want_to_work_for_iron_galaxy',
      component: _cater_iron_galaxy_cater_iron_galaxy_component__WEBPACK_IMPORTED_MODULE_23__["CaterIronGalaxyComponent"],
      children: [{
        path: '',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"]
      }]
    }, {
      path: 'talismans',
      component: _talismans_talismans_component__WEBPACK_IMPORTED_MODULE_20__["TalismansComponent"]
    }, {
      path: 'web/talismans',
      component: _shell_talismans_web_shell_talismans_web_component__WEBPACK_IMPORTED_MODULE_24__["ShellTalismansWebComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_29__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"]]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
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
    })], AppComponent);
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
    /* harmony import */


    var _cater_iron_galaxy_cater_iron_galaxy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./cater-iron-galaxy/cater-iron-galaxy.component */
    "./src/app/cater-iron-galaxy/cater-iron-galaxy.component.ts");
    /* harmony import */


    var _shell_talismans_web_shell_talismans_web_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./shell-talismans-web/shell-talismans-web.component */
    "./src/app/shell-talismans-web/shell-talismans-web.component.ts");
    /* harmony import */


    var _unity_unity_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./unity/unity.component */
    "./src/app/unity/unity.component.ts");
    /* harmony import */


    var _honey_hives_honey_hives_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./honey-hives/honey-hives.component */
    "./src/app/honey-hives/honey-hives.component.ts");
    /* harmony import */


    var _crop_tool_crop_tool_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./crop-tool/crop-tool.component */
    "./src/app/crop-tool/crop-tool.component.ts");
    /* harmony import */


    var _break_out_again_break_out_again_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./break-out-again/break-out-again.component */
    "./src/app/break-out-again/break-out-again.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _hostility_hostility_component__WEBPACK_IMPORTED_MODULE_8__["HostilityComponent"], _ninjaman_ninjaman_component__WEBPACK_IMPORTED_MODULE_9__["NinjamanComponent"], _swedish_swedish_component__WEBPACK_IMPORTED_MODULE_10__["SwedishComponent"], _sacred_sacred_component__WEBPACK_IMPORTED_MODULE_11__["SacredComponent"], _jigsaw_jigsaw_component__WEBPACK_IMPORTED_MODULE_12__["JigsawComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_14__["BooksComponent"], _gold_gold_component__WEBPACK_IMPORTED_MODULE_15__["GoldComponent"], _wedding_wedding_component__WEBPACK_IMPORTED_MODULE_16__["WeddingComponent"], _cakes_cakes_component__WEBPACK_IMPORTED_MODULE_17__["CakesComponent"], _prod_cat_prod_cat_component__WEBPACK_IMPORTED_MODULE_18__["ProdCatComponent"], _prod_man_prod_man_component__WEBPACK_IMPORTED_MODULE_19__["ProdManComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"], _shell_portfolio_shell_portfolio_component__WEBPACK_IMPORTED_MODULE_21__["ShellPortfolioComponent"], _coin_machine_coin_machine_component__WEBPACK_IMPORTED_MODULE_22__["CoinMachineComponent"], _diabetes_diabetes_component__WEBPACK_IMPORTED_MODULE_23__["DiabetesComponent"], _web_projects_web_projects_component__WEBPACK_IMPORTED_MODULE_24__["WebProjectsComponent"], _shell_portfolio_web_shell_portfolio_web_component__WEBPACK_IMPORTED_MODULE_25__["ShellPortfolioWebComponent"], _blender_blender_component__WEBPACK_IMPORTED_MODULE_26__["BlenderComponent"], _talismans_talismans_component__WEBPACK_IMPORTED_MODULE_27__["TalismansComponent"], _unreal_unreal_component__WEBPACK_IMPORTED_MODULE_28__["UnrealComponent"], _cater_iron_galaxy_cater_iron_galaxy_component__WEBPACK_IMPORTED_MODULE_29__["CaterIronGalaxyComponent"], _shell_talismans_web_shell_talismans_web_component__WEBPACK_IMPORTED_MODULE_30__["ShellTalismansWebComponent"], _unity_unity_component__WEBPACK_IMPORTED_MODULE_31__["UnityComponent"], _honey_hives_honey_hives_component__WEBPACK_IMPORTED_MODULE_32__["HoneyHivesComponent"], _crop_tool_crop_tool_component__WEBPACK_IMPORTED_MODULE_33__["CropToolComponent"], _break_out_again_break_out_again_component__WEBPACK_IMPORTED_MODULE_34__["BreakOutAgainComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
      providers: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxlbmRlci9ibGVuZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9ibGVuZGVyL2JsZW5kZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRpdmlzaW9uMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMTRweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogLTE0cHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
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
  "./src/app/break-out-again/break-out-again.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/break-out-again/break-out-again.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBreakOutAgainBreakOutAgainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\niframe {\r\n    width: 80%;\r\n    display: block;\r\n    margin: 5px auto;\r\n    box-shadow: 0px 0px 7px black;\r\n}\r\n\r\n.videoWrapper {\r\n    position: relative;\r\n    padding-bottom: 56.25%; /* 16:9 */\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.videoWrapper iframe {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#footerlegal {\r\n    margin-top: 10px;\r\n    margin-bottom: 50px;\r\n    font-size: 10px;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh4{\r\n    margin: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 40%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.img_sm{\r\n    width: 35%;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n\r\n    iframe {\r\n        height: 30vh;\r\n    }\r\n\r\n    .btn-danger {\r\n        width: 100%;\r\n    }\r\n\r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    iframe {\r\n        height: 52vh;\r\n    }\r\n\r\n    .btn-danger {\r\n        width: 70%;\r\n    }\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    iframe {\r\n        height: 60vh;\r\n    }\r\n\r\n    .btn-danger {\r\n        width: 40%;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJlYWstb3V0LWFnYWluL2JyZWFrLW91dC1hZ2Fpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFFLFNBQVM7SUFDakMsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBR0EsVUFBVTs7QUFFVjs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7QUFFSjs7QUFFQSxXQUFXOztBQUVYOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7QUFFSjs7QUFFQSxVQUFVOztBQUVWOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2JyZWFrLW91dC1hZ2Fpbi9icmVhay1vdXQtYWdhaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaWZyYW1lIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCBibGFjaztcclxufVxyXG5cclxuLnZpZGVvV3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyAvKiAxNjo5ICovXHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udmlkZW9XcmFwcGVyIGlmcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNmb290ZXJsZWdhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogLTE0cHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5pbWdfc217XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG5cclxuLyogU01BTEwgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICBcclxuLyogTUVESVVNICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDUydmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1kYW5nZXIge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICBcclxuLyogTEFSR0UgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1kYW5nZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/break-out-again/break-out-again.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/break-out-again/break-out-again.component.ts ***!
    \**************************************************************/

  /*! exports provided: BreakOutAgainComponent */

  /***/
  function srcAppBreakOutAgainBreakOutAgainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakOutAgainComponent", function () {
      return BreakOutAgainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BreakOutAgainComponent =
    /*#__PURE__*/
    function () {
      function BreakOutAgainComponent() {
        _classCallCheck(this, BreakOutAgainComponent);
      }

      _createClass(BreakOutAgainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return BreakOutAgainComponent;
    }();

    BreakOutAgainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-break-out-again',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./break-out-again.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/break-out-again/break-out-again.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./break-out-again.component.css */
      "./src/app/break-out-again/break-out-again.component.css")).default]
    })], BreakOutAgainComponent);
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZXMvY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2Nha2VzL2Nha2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogLTE0cHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
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
  "./src/app/cater-iron-galaxy/cater-iron-galaxy.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/cater-iron-galaxy/cater-iron-galaxy.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCaterIronGalaxyCaterIronGalaxyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.mycontainer {\r\n    /* background-color: rgb(236, 219, 187);  */\r\n    /* background-color: rgb(117, 112, 103);  */\r\n    background-color: rgb(255, 255, 255); \r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(204, 175, 121); \r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(204, 175, 121); \r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px 0px 20px 20%;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.finedivision {\r\n    background-color: rgb(204, 175, 121); \r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 30%;\r\n    margin: -5px 0px 10px -20px;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.finedivision2 {\r\n    background-color: rgb(204, 175, 121); \r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 20%;\r\n    margin: -5px 0px 0px -20px;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    margin: 0px;\r\n    font-size: 14px;\r\n    display: block;\r\n}\r\n\r\n#rad:active {\r\n    background-color: rgb(155, 127, 76);\r\n    border-color: rgb(155, 127, 76);\r\n    box-shadow: rgb(155, 127, 76);\r\n}\r\n\r\nh1, h3 {\r\n    text-align: center;\r\n    color: rgb(14, 7, 2);\r\n}\r\n\r\niframe {\r\n    width: 80%;\r\n    display: block;\r\n    margin: 5px auto;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.midicon img{\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.icons img{\r\n    margin-top: 10px;\r\n    height: auto;\r\n}\r\n\r\n.ironlogo {\r\n    width: 50%;\r\n    height: auto;\r\n    margin: 10px auto;\r\n    display: block;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.talismanlogo {\r\n    width: 50%;\r\n    height: auto;\r\n    margin: 10px auto;\r\n    display: block;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.adamatpicture {\r\n    width: 70%;\r\n    height: auto;\r\n    margin: 10px auto;\r\n    display: block;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.btn-success {\r\n    background-color: rgb(204, 175, 121);\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    /* width: 30%; */\r\n    height: 24px;\r\n    line-height: 10px;\r\n    margin-left: 10px;\r\n    text-align: left;\r\n    box-shadow: 0px 0px 1px 2px rgb(95, 61, 29);\r\n}\r\n\r\n.itembar {\r\n    border-radius: 3px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 1px;\r\n    padding-bottom: 3px;\r\n    line-height: 20px;\r\n    display: block;\r\n    height: 40%;\r\n    width: 50%;\r\n    border-color: rgb(95, 61, 29);\r\n    background-color: rgb(204, 175, 121);\r\n    box-shadow: 0px 0px 1px 2px rgb(95, 61, 29);\r\n}\r\n\r\n.itembar_category {\r\n    border-radius: 3px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 1px;\r\n    padding-bottom: 3px;\r\n    line-height: 20px;\r\n    display: block;\r\n    height: 40%;\r\n    width: 50%;\r\n    border-color: rgb(95, 61, 29);\r\n    background-color: rgb(155, 127, 76);\r\n    /* background-color: rgb(204, 175, 121); */\r\n    box-shadow: 0px 0px 1px 2px rgb(95, 61, 29);\r\n}\r\n\r\n.itembar h3:nth-of-type(1) {\r\n    display: inline-block;\r\n    width: 90%;\r\n    text-align: left;\r\n}\r\n\r\n.itembar_category h3:nth-of-type(1) {\r\n    display: inline-block;\r\n    width: 90%;\r\n    text-align: left;\r\n}\r\n\r\n.itembar h3:nth-of-type(2) {\r\n    display: inline-block;\r\n    width: 10%;\r\n    text-align: right;\r\n}\r\n\r\n.itembar_category h3:nth-of-type(2) {\r\n    display: inline-block;\r\n    width: 10%;\r\n    text-align: right;\r\n}\r\n\r\n.itemimg {\r\n    width: 100%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 20px auto;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.itemimg_sm {\r\n    width: 30%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 20px auto;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.item {\r\n    margin: 0px 0px 20px 0px;\r\n}\r\n\r\n#footerlegal {\r\n    margin-top: 100px;\r\n    font-size: 10px;\r\n}\r\n\r\n.item .itemcontent {\r\n    margin: 10px 40px 0px 40px;\r\n}\r\n\r\n.left_align {\r\n    text-align: left;\r\n}\r\n\r\n.center_align {\r\n    text-align: center;\r\n}\r\n\r\n.pointer {\r\n    font-size: 60px;\r\n    color: rgb(204, 175, 121);\r\n    display: block;\r\n    margin-bottom: -30px;\r\n    margin-top: -4px;\r\n    text-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px 20px 5px 20px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 22px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 17px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 15px;\r\n    }\r\n\r\n    .mycontainer .bodytext {\r\n        font-size: 13px;\r\n    }\r\n\r\n    .itembar, .itembar_category {\r\n        width: 100%;\r\n    }\r\n\r\n    button {\r\n        font-size: 14px;\r\n    }\r\n\r\n    iframe {\r\n        height: 30vh;\r\n    }\r\n\r\n    .icons img{\r\n        width: 26px;\r\n    }\r\n\r\n    \r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px;\r\n        padding: 20px 30px 5px 30px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .mycontainer .bodytext {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .itembar, .itembar_category {\r\n        width: 75%;\r\n    }\r\n\r\n    iframe {\r\n        height: 52vh;\r\n    }\r\n\r\n    .icons img {\r\n        width: 44px;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    .mycontainer {\r\n        width: 970px;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px 40px 5px 40px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .mycontainer .bodytext {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .itembar, .itembar_category {\r\n        width: 50%;\r\n    }\r\n\r\n    iframe {\r\n        height: 60vh;\r\n    }\r\n\r\n    .icons img{\r\n        width: 54px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZXItaXJvbi1nYWxheHkvY2F0ZXItaXJvbi1nYWxheHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0Msb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUlBO0lBQ0ksb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVDQUF1QztBQUMzQzs7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLDBDQUEwQztJQUMxQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUdBLFVBQVU7O0FBRVY7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7OztBQUdKOztBQUVBLFdBQVc7O0FBRVg7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7O0FBR0o7O0FBRUEsVUFBVTs7QUFFVjs7SUFFSTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXRlci1pcm9uLWdhbGF4eS9jYXRlci1pcm9uLWdhbGF4eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgLyogb3V0bGluZTogMXB4IGRvdHRlZCByZWQ7ICovXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLm15Y29udGFpbmVyIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIxOSwgMTg3KTsgICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxMTIsIDEwMyk7ICAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAxNzUsIDEyMSk7IFxyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTc1LCAxMjEpOyBcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMTRweCAwcHggMjBweCAyMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5maW5lZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTc1LCAxMjEpOyBcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiAtNXB4IDBweCAxMHB4IC0yMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZmluZWRpdmlzaW9uMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAxNzUsIDEyMSk7IFxyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW46IC01cHggMHB4IDBweCAtMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jcmFkOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxMjcsIDc2KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE1NSwgMTI3LCA3Nik7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMTU1LCAxMjcsIDc2KTtcclxufVxyXG5cclxuaDEsIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDcsIDIpO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHJnYig5NSwgNjEsIDI5KTtcclxufVxyXG5cclxuLm1pZGljb24gaW1ne1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5pY29ucyBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaXJvbmxvZ28ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCByZ2IoOTUsIDYxLCAyOSk7XHJcbn1cclxuXHJcbi50YWxpc21hbmxvZ28ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCByZ2IoOTUsIDYxLCAyOSk7XHJcbn1cclxuXHJcbi5hZGFtYXRwaWN0dXJlIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDk1LCA2MSwgMjkpO1xyXG59XHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAxNzUsIDEyMSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC8qIHdpZHRoOiAzMCU7ICovXHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbn1cclxuXHJcbi5pdGVtYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDE3NSwgMTIxKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbn1cclxuXHJcbi5pdGVtYmFyX2NhdGVnb3J5IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTUsIDEyNywgNzYpO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTc1LCAxMjEpOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxufVxyXG5cclxuLml0ZW1iYXIgaDM6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pdGVtYmFyX2NhdGVnb3J5IGgzOm50aC1vZi10eXBlKDEpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaXRlbWJhciBoMzpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pdGVtYmFyX2NhdGVnb3J5IGgzOm50aC1vZi10eXBlKDIpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLml0ZW1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDk1LCA2MSwgMjkpO1xyXG59XHJcblxyXG4uaXRlbWltZ19zbSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHJnYig5NSwgNjEsIDI5KTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xyXG59XHJcblxyXG5cclxuI2Zvb3RlcmxlZ2FsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uaXRlbSAuaXRlbWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAxMHB4IDQwcHggMHB4IDQwcHg7XHJcbn1cclxuXHJcbi5sZWZ0X2FsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jZW50ZXJfYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjogcmdiKDIwNCwgMTc1LCAxMjEpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRpdmlzaW9uMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMTRweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbi8qIFNNQUxMICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCA1cHggMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciAuYm9keXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbWJhciwgLml0ZW1iYXJfY2F0ZWdvcnkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29ucyBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuICAgIFxyXG4vKiBNRURJVU0gKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuXHJcbiAgICAubXljb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMzBweCA1cHggMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciAuYm9keXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbWJhciwgLml0ZW1iYXJfY2F0ZWdvcnkge1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDUydmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb25zIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4gICAgXHJcbi8qIExBUkdFICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxuICAgIC5teWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDk3MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4IDVweCA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIC5ib2R5dGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtYmFyLCAuaXRlbWJhcl9jYXRlZ29yeSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbnMgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA1NHB4O1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/cater-iron-galaxy/cater-iron-galaxy.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/cater-iron-galaxy/cater-iron-galaxy.component.ts ***!
    \******************************************************************/

  /*! exports provided: CaterIronGalaxyComponent */

  /***/
  function srcAppCaterIronGalaxyCaterIronGalaxyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaterIronGalaxyComponent", function () {
      return CaterIronGalaxyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CaterIronGalaxyComponent =
    /*#__PURE__*/
    function () {
      function CaterIronGalaxyComponent() {
        _classCallCheck(this, CaterIronGalaxyComponent);

        //GENERAL
        this.item_tagline = false;
        this.item_prod_gen_design = false;
        this.item_learn_unreal = false; //CODE DESIGN

        this.item_cpp_integration = false;
        this.item_communication = false;
        this.item_naming = false;
        this.item_comments = false;
        this.item_pointers = false;
        this.item_save_games = false;
        this.item_piece_faces = false;
        this.item_precise_uvs = false;
        this.item_recognize_connections = false;
        this.item_connecting_pieces = false;
        this.item_rotating = false;
        this.item_refactors = false;
        this.item_mem_management = false;
        this.item_oop_vs_func = false;
        this.item_obj_act_str = false;
        this.item_multiple_levels = false;
        this.item_blueprints = false;
        this.item_widgets = false;
        this.item_stats_menu = false;
        this.item_rigging = false;
        this.item_puzzle_pieces = false;
        this.item_table_navigation = false; //GAME DESIGN / ART

        this.item_puzzle_images = false;
        this.item_character_crests = false;
        this.item_parables = false;
        this.item_prod_gen_levels = false;
        this.item_vessels = false;
        this.item_gameplay_verbs = false;
        this.item_modeling = false;
      }

      _createClass(CaterIronGalaxyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollToThisElement",
        value: function scrollToThisElement(element) {
          //get location to scroll to
          var NewOffset = element.getBoundingClientRect().top + window.pageYOffset - 60; //perform scroll

          window.scrollTo({
            top: NewOffset,
            left: 0,
            behavior: 'smooth'
          });
        } //TOGGLE FUNCTIONS
        //GENERAL

      }, {
        key: "toggle_item_tagline",
        value: function toggle_item_tagline() {
          if (this.item_tagline == false) {
            this.item_tagline = true;
            var element = document.getElementById("item_tagline");
            this.scrollToThisElement(element);
          } else {
            this.item_tagline = false;
          }
        }
      }, {
        key: "toggle_item_prod_gen_design",
        value: function toggle_item_prod_gen_design() {
          if (this.item_prod_gen_design == false) {
            this.item_prod_gen_design = true;
            var element = document.getElementById("item_prod_gen_design");
            this.scrollToThisElement(element);
          } else {
            this.item_prod_gen_design = false;
          }
        }
      }, {
        key: "toggle_item_learn_unreal",
        value: function toggle_item_learn_unreal() {
          if (this.item_learn_unreal == false) {
            this.item_learn_unreal = true;
            var element = document.getElementById("item_learn_unreal");
            this.scrollToThisElement(element);
          } else {
            this.item_learn_unreal = false;
          }
        } //CODE DESIGN

      }, {
        key: "toggle_item_cpp_integration",
        value: function toggle_item_cpp_integration() {
          if (this.item_cpp_integration == false) {
            this.item_cpp_integration = true;
            var element = document.getElementById("item_cpp_integration");
            this.scrollToThisElement(element);
          } else {
            this.item_cpp_integration = false;
          }
        }
      }, {
        key: "toggle_item_communication",
        value: function toggle_item_communication() {
          if (this.item_communication == false) {
            this.item_communication = true;
            var element = document.getElementById("item_communication");
            this.scrollToThisElement(element);
          } else {
            this.item_communication = false;
          }
        }
      }, {
        key: "toggle_item_naming",
        value: function toggle_item_naming() {
          if (this.item_naming == false) {
            this.item_naming = true;
            var element = document.getElementById("item_naming");
            this.scrollToThisElement(element);
          } else {
            this.item_naming = false;
          }
        }
      }, {
        key: "toggle_item_comments",
        value: function toggle_item_comments() {
          if (this.item_comments == false) {
            this.item_comments = true;
            var element = document.getElementById("item_comments");
            this.scrollToThisElement(element);
          } else {
            this.item_comments = false;
          }
        }
      }, {
        key: "toggle_item_pointers",
        value: function toggle_item_pointers() {
          if (this.item_pointers == false) {
            this.item_pointers = true;
            var element = document.getElementById("item_pointers");
            this.scrollToThisElement(element);
          } else {
            this.item_pointers = false;
          }
        }
      }, {
        key: "toggle_item_save_games",
        value: function toggle_item_save_games() {
          if (this.item_save_games == false) {
            this.item_save_games = true;
            var element = document.getElementById("item_save_games");
            this.scrollToThisElement(element);
          } else {
            this.item_save_games = false;
          }
        }
      }, {
        key: "toggle_item_piece_faces",
        value: function toggle_item_piece_faces() {
          if (this.item_piece_faces == false) {
            this.item_piece_faces = true;
            var element = document.getElementById("item_piece_faces");
            this.scrollToThisElement(element);
          } else {
            this.item_piece_faces = false;
          }
        }
      }, {
        key: "toggle_item_precise_uvs",
        value: function toggle_item_precise_uvs() {
          if (this.item_precise_uvs == false) {
            this.item_precise_uvs = true;
            var element = document.getElementById("item_precise_uvs");
            this.scrollToThisElement(element);
          } else {
            this.item_precise_uvs = false;
          }
        }
      }, {
        key: "toggle_item_recognize_connections",
        value: function toggle_item_recognize_connections() {
          if (this.item_recognize_connections == false) {
            this.item_recognize_connections = true;
            var element = document.getElementById("item_recognize_connections");
            this.scrollToThisElement(element);
          } else {
            this.item_recognize_connections = false;
          }
        }
      }, {
        key: "toggle_item_connecting_pieces",
        value: function toggle_item_connecting_pieces() {
          if (this.item_connecting_pieces == false) {
            this.item_connecting_pieces = true;
            var element = document.getElementById("item_connecting_pieces");
            this.scrollToThisElement(element);
          } else {
            this.item_connecting_pieces = false;
          }
        }
      }, {
        key: "toggle_item_rotating",
        value: function toggle_item_rotating() {
          if (this.item_rotating == false) {
            this.item_rotating = true;
            var element = document.getElementById("item_rotating");
            this.scrollToThisElement(element);
          } else {
            this.item_rotating = false;
          }
        }
      }, {
        key: "toggle_item_refactors",
        value: function toggle_item_refactors() {
          if (this.item_refactors == false) {
            this.item_refactors = true;
            var element = document.getElementById("item_refactors");
            this.scrollToThisElement(element);
          } else {
            this.item_refactors = false;
          }
        }
      }, {
        key: "toggle_item_mem_management",
        value: function toggle_item_mem_management() {
          if (this.item_mem_management == false) {
            this.item_mem_management = true;
            var element = document.getElementById("item_mem_management");
            this.scrollToThisElement(element);
          } else {
            this.item_mem_management = false;
          }
        }
      }, {
        key: "toggle_item_oop_vs_func",
        value: function toggle_item_oop_vs_func() {
          if (this.item_oop_vs_func == false) {
            this.item_oop_vs_func = true;
            var element = document.getElementById("item_oop_vs_func");
            this.scrollToThisElement(element);
          } else {
            this.item_oop_vs_func = false;
          }
        }
      }, {
        key: "toggle_item_obj_act_str",
        value: function toggle_item_obj_act_str() {
          if (this.item_obj_act_str == false) {
            this.item_obj_act_str = true;
            var element = document.getElementById("item_obj_act_str");
            this.scrollToThisElement(element);
          } else {
            this.item_obj_act_str = false;
          }
        }
      }, {
        key: "toggle_item_multiple_levels",
        value: function toggle_item_multiple_levels() {
          if (this.item_multiple_levels == false) {
            this.item_multiple_levels = true;
            var element = document.getElementById("item_multiple_levels");
            this.scrollToThisElement(element);
          } else {
            this.item_multiple_levels = false;
          }
        }
      }, {
        key: "toggle_item_blueprints",
        value: function toggle_item_blueprints() {
          if (this.item_blueprints == false) {
            this.item_blueprints = true;
            var element = document.getElementById("item_blueprints");
            this.scrollToThisElement(element);
          } else {
            this.item_blueprints = false;
          }
        }
      }, {
        key: "toggle_item_widgets",
        value: function toggle_item_widgets() {
          if (this.item_widgets == false) {
            this.item_widgets = true;
            var element = document.getElementById("item_widgets");
            this.scrollToThisElement(element);
          } else {
            this.item_widgets = false;
          }
        }
      }, {
        key: "toggle_item_stats_menu",
        value: function toggle_item_stats_menu() {
          if (this.item_stats_menu == false) {
            this.item_stats_menu = true;
            var element = document.getElementById("item_stats_menu");
            this.scrollToThisElement(element);
          } else {
            this.item_stats_menu = false;
          }
        }
      }, {
        key: "toggle_item_rigging",
        value: function toggle_item_rigging() {
          if (this.item_rigging == false) {
            this.item_rigging = true;
            var element = document.getElementById("item_rigging");
            this.scrollToThisElement(element);
          } else {
            this.item_rigging = false;
          }
        }
      }, {
        key: "toggle_item_puzzle_pieces",
        value: function toggle_item_puzzle_pieces() {
          if (this.item_puzzle_pieces == false) {
            this.item_puzzle_pieces = true;
            var element = document.getElementById("item_puzzle_pieces");
            this.scrollToThisElement(element);
          } else {
            this.item_puzzle_pieces = false;
          }
        }
      }, {
        key: "toggle_item_table_navigation",
        value: function toggle_item_table_navigation() {
          if (this.item_table_navigation == false) {
            this.item_table_navigation = true;
            var element = document.getElementById("item_table_navigation");
            this.scrollToThisElement(element);
          } else {
            this.item_table_navigation = false;
          }
        } //GAME DESIGN / ART

      }, {
        key: "toggle_item_puzzle_images",
        value: function toggle_item_puzzle_images() {
          if (this.item_puzzle_images == false) {
            this.item_puzzle_images = true;
            var element = document.getElementById("item_puzzle_images");
            this.scrollToThisElement(element);
          } else {
            this.item_puzzle_images = false;
          }
        }
      }, {
        key: "toggle_item_vessels",
        value: function toggle_item_vessels() {
          if (this.item_vessels == false) {
            this.item_vessels = true;
            var element = document.getElementById("item_vessels");
            this.scrollToThisElement(element);
          } else {
            this.item_vessels = false;
          }
        }
      }, {
        key: "toggle_item_parables",
        value: function toggle_item_parables() {
          if (this.item_parables == false) {
            this.item_parables = true;
            var element = document.getElementById("item_parables");
            this.scrollToThisElement(element);
          } else {
            this.item_parables = false;
          }
        }
      }, {
        key: "toggle_item_character_crests",
        value: function toggle_item_character_crests() {
          if (this.item_character_crests == false) {
            this.item_character_crests = true;
            var element = document.getElementById("item_character_crests");
            this.scrollToThisElement(element);
          } else {
            this.item_character_crests = false;
          }
        }
      }, {
        key: "toggle_item_gameplay_verbs",
        value: function toggle_item_gameplay_verbs() {
          if (this.item_gameplay_verbs == false) {
            this.item_gameplay_verbs = true;
            var element = document.getElementById("item_gameplay_verbs");
            this.scrollToThisElement(element);
          } else {
            this.item_gameplay_verbs = false;
          }
        }
      }, {
        key: "toggle_item_prod_gen_levels",
        value: function toggle_item_prod_gen_levels() {
          if (this.item_prod_gen_levels == false) {
            this.item_prod_gen_levels = true;
            var element = document.getElementById("item_prod_gen_levels");
            this.scrollToThisElement(element);
          } else {
            this.item_prod_gen_levels = false;
          }
        }
      }, {
        key: "toggle_item_modeling",
        value: function toggle_item_modeling() {
          if (this.item_modeling == false) {
            this.item_modeling = true;
            var element = document.getElementById("item_modeling");
            this.scrollToThisElement(element);
          } else {
            this.item_modeling = false;
          }
        }
      }]);

      return CaterIronGalaxyComponent;
    }();

    CaterIronGalaxyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cater-iron-galaxy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cater-iron-galaxy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cater-iron-galaxy/cater-iron-galaxy.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cater-iron-galaxy.component.css */
      "./src/app/cater-iron-galaxy/cater-iron-galaxy.component.css")).default]
    })], CaterIronGalaxyComponent);
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29pbi1tYWNoaW5lL2NvaW4tbWFjaGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29pbi1tYWNoaW5lL2NvaW4tbWFjaGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
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
  "./src/app/crop-tool/crop-tool.component.css":
  /*!***************************************************!*\
    !*** ./src/app/crop-tool/crop-tool.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCropToolCropToolComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 40%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JvcC10b29sL2Nyb3AtdG9vbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvY3JvcC10b29sL2Nyb3AtdG9vbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/crop-tool/crop-tool.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/crop-tool/crop-tool.component.ts ***!
    \**************************************************/

  /*! exports provided: CropToolComponent */

  /***/
  function srcAppCropToolCropToolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CropToolComponent", function () {
      return CropToolComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CropToolComponent =
    /*#__PURE__*/
    function () {
      function CropToolComponent() {
        _classCallCheck(this, CropToolComponent);
      }

      _createClass(CropToolComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return CropToolComponent;
    }();

    CropToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crop-tool',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crop-tool.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/crop-tool/crop-tool.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crop-tool.component.css */
      "./src/app/crop-tool/crop-tool.component.css")).default]
    })], CropToolComponent);
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.shrink {\r\n    width: 60%;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhYmV0ZXMvZGlhYmV0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2RpYWJldGVzL2RpYWJldGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLnNocmluayB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRpdmlzaW9uMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMTRweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29sZC9nb2xkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9nb2xkL2dvbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRpdmlzaW9uMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMTRweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
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
  "./src/app/honey-hives/honey-hives.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/honey-hives/honey-hives.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHoneyHivesHoneyHivesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\niframe {\r\n    width: 80%;\r\n    display: block;\r\n    margin: 5px auto;\r\n    box-shadow: 0px 0px 7px black;\r\n}\r\n\r\n.videoWrapper {\r\n    position: relative;\r\n    padding-bottom: 56.25%; /* 16:9 */\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.videoWrapper iframe {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#footerlegal {\r\n    margin-top: 10px;\r\n    margin-bottom: 50px;\r\n    font-size: 10px;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh4{\r\n    margin: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 40%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.img_sm{\r\n    width: 35%;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n\r\n    iframe {\r\n        height: 30vh;\r\n    }\r\n\r\n    .btn-danger {\r\n        width: 100%;\r\n    }\r\n\r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    iframe {\r\n        height: 52vh;\r\n    }\r\n\r\n    .btn-danger {\r\n        width: 70%;\r\n    }\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    iframe {\r\n        height: 60vh;\r\n    }\r\n\r\n    .btn-danger {\r\n        width: 40%;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9uZXktaGl2ZXMvaG9uZXktaGl2ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUdBLFVBQVU7O0FBRVY7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0FBRUo7O0FBRUEsV0FBVzs7QUFFWDs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0FBRUo7O0FBRUEsVUFBVTs7QUFFVjs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9ob25leS1oaXZlcy9ob25leS1oaXZlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IGJsYWNrO1xyXG59XHJcblxyXG4udmlkZW9XcmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi52aWRlb1dyYXBwZXIgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2Zvb3RlcmxlZ2FsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRpdmlzaW9uMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMTRweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDR7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmltZ19zbXtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcblxyXG4vKiBTTUFMTCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZGFuZ2VyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbn1cclxuICAgIFxyXG4vKiBNRURJVU0gKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIGhlaWdodDogNTJ2aDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuXHJcbn1cclxuICAgIFxyXG4vKiBMQVJHRSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/honey-hives/honey-hives.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/honey-hives/honey-hives.component.ts ***!
    \******************************************************/

  /*! exports provided: HoneyHivesComponent */

  /***/
  function srcAppHoneyHivesHoneyHivesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoneyHivesComponent", function () {
      return HoneyHivesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HoneyHivesComponent =
    /*#__PURE__*/
    function () {
      function HoneyHivesComponent() {
        _classCallCheck(this, HoneyHivesComponent);
      }

      _createClass(HoneyHivesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return HoneyHivesComponent;
    }();

    HoneyHivesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-honey-hives',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./honey-hives.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/honey-hives/honey-hives.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./honey-hives.component.css */
      "./src/app/honey-hives/honey-hives.component.css")).default]
    })], HoneyHivesComponent);
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdGlsaXR5L2hvc3RpbGl0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvaG9zdGlsaXR5L2hvc3RpbGl0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamlnc2F3L2ppZ3Nhdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvamlnc2F3L2ppZ3Nhdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmluamFtYW4vbmluamFtYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL25pbmphbWFuL25pbmphbWFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogLTE0cHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZC1jYXQvcHJvZC1jYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3Byb2QtY2F0L3Byb2QtY2F0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogLTE0cHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZC1tYW4vcHJvZC1tYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3Byb2QtbWFuL3Byb2QtbWFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogLTE0cHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
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


    __webpack_exports__["default"] = "* {\r\n    vertical-align: top;\r\n}\r\n\r\nimg {\r\n    margin: 5px auto;\r\n    height: 40%;\r\n    width: auto;\r\n    max-width: 90%; \r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.inner {\r\n    margin: 0px auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n/* .division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n} */\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* .sammy{\r\n    background-image: radial-gradient(rgb(209, 168, 31),white 98%);\r\n} */\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n/* p {\r\n    max-height: 20%;\r\n} */\r\n\r\n.card-header {\r\n    margin: 0px auto 5px auto;\r\n    padding: 8px;\r\n    /* font: pink; */\r\n    display: block;\r\n    /* background-color: rgb(145, 145, 145); */\r\n    /* background-color: rgb(138, 117, 47); */\r\n    background-image: radial-gradient(rgb(229, 206, 134),rgb(209, 168, 31));\r\n    /* background-image: linear-gradient(black 50%,white, black); */\r\n}\r\n\r\n.card {\r\n    /* background-color: rgb(216, 216, 216); */\r\n    background-color: rgb(228, 226, 208);\r\n    width: 40%;\r\n    margin: 20px 0px;\r\n    height: 200px;\r\n    display: inline-block;\r\n    box-shadow: 4px 4px 3px 2px rgb(104, 88, 47);\r\n    cursor: pointer;\r\n}\r\n\r\n.card:hover{\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    box-shadow: 6px 6px 3px 2px rgb(104, 88, 47);\r\n}\r\n\r\n.card-body {\r\n    height: 40%;\r\n}\r\n\r\n.card-text {\r\n    margin: 0px 0px 15px 0px;\r\n}\r\n\r\n.elevator {\r\n    font-size: 13px;\r\n}\r\n\r\nbutton {\r\n    font-size: 20px;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .card-header {\r\n        font-size: 25px;\r\n    }\r\n\r\n    .card-body {\r\n        font-size: 18px;\r\n        padding: 0px 20px 20px 20px;\r\n    }\r\n\r\n    .card {\r\n        width: 90%;\r\n        height: auto;\r\n        /* min-height: 600px; */\r\n        margin: 20px 0px;\r\n        /* height: 1000px; */\r\n        display: inline-block;\r\n    }\r\n\r\n    img {\r\n        width: 60%;\r\n        height: auto;\r\n        margin: 15px auto;\r\n    }\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n    .card {\r\n        \r\n        height: 200px;\r\n        width: 46%;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n    }\r\n\r\n    .card-header {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 10px;\r\n    }\r\n\r\n    button {\r\n        font-size: 14px;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 547px) {\r\n    .card {\r\n        \r\n        height: 200px;\r\n        width: 46%;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n\r\n    }\r\n\r\n    .card-header {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n    /* img {\r\n        height: 40%;\r\n        width: auto;\r\n    } */\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n    .card {\r\n        width: 29.33%;\r\n        height: 200px;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n    } \r\n\r\n    .card-header {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSDtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztHQUVHOztBQUdIO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDBDQUEwQztJQUMxQyx5Q0FBeUM7SUFDekMsdUVBQXVFO0lBQ3ZFLCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDRDQUE0QztJQUM1QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQSxVQUFVOztBQUVWOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOzs7QUFHSjs7QUFFQTtJQUNJOztRQUVJLGFBQWE7UUFDYixVQUFVO1FBQ1YsZUFBZTtRQUNmLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7O0FBR0o7O0FBSUEsV0FBVzs7QUFFVjtJQUNHOztRQUVJLGFBQWE7UUFDYixVQUFVO1FBQ1YsZUFBZTtRQUNmLHFCQUFxQjs7SUFFekI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7O09BR0c7O0FBRVA7O0FBRUEsVUFBVTs7QUFFVjtJQUNJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7Ozs7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogOTAlOyBcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxufVxyXG5cclxuLmlubmVyIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSAqL1xyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogLTE0cHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIC5zYW1teXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2IoMjA5LCAxNjgsIDMxKSx3aGl0ZSA5OCUpO1xyXG59ICovXHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogcCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XHJcbn0gKi9cclxuXHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byA1cHggYXV0bztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIC8qIGZvbnQ6IHBpbms7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDExNywgNDcpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYigyMjksIDIwNiwgMTM0KSxyZ2IoMjA5LCAxNjgsIDMxKSk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmxhY2sgNTAlLHdoaXRlLCBibGFjayk7ICovXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyNiwgMjA4KTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggM3B4IDJweCByZ2IoMTA0LCA4OCwgNDcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDNweCAycHggcmdiKDEwNCwgODgsIDQ3KTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTVweCAwcHg7XHJcbn1cclxuXHJcbi5lbGV2YXRvciB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBTTUFMTCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC8qIG1pbi1oZWlnaHQ6IDYwMHB4OyAqL1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMDAwcHg7ICovXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICB9XHJcbiBcclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAyJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyogTUVESVVNICovXHJcbiAgICBcclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQ3cHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NiU7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9ICovXHJcblxyXG59XHJcbiAgICBcclxuLyogTEFSR0UgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDI5LjMzJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAyJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9IFxyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FjcmVkL3NhY3JlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2FjcmVkL3NhY3JlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";
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


    __webpack_exports__["default"] = "* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.mycontainer {\r\n    /* background-color: rgb(160, 163, 154); */\r\n    /* background-color: rgb(65, 65, 65); */\r\n    /* background-image: linear-gradient(to right, rgb(169, 170, 166), rgb(75, 77, 73));  */\r\n    background-color: rgb(255, 255, 255); \r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n/* .division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n} */\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    /* color: rgb(216, 216, 216); */\r\n    color: rgb(58, 52, 22);\r\n    background-image: radial-gradient(rgb(229, 206, 134),rgb(209, 168, 31));\r\n    width: 40%;\r\n    margin: 10px auto 10px auto;\r\n    box-shadow: 4px 4px 3px 2px rgb(104, 88, 47);\r\n    border-radius: 8px;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\n.midicon {\r\n    margin: 0px 30px;\r\n}\r\n\r\n.rightmidicon {\r\n    margin-right: 30px;\r\n}\r\n\r\nimg {\r\n    margin-top: 10px;\r\n    height: 32px;\r\n    width: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n    \r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px;\r\n        padding: 20px 30px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    .mycontainer {\r\n        width: 970px;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px 40px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwtcG9ydGZvbGlvLXdlYi9zaGVsbC1wb3J0Zm9saW8td2ViLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLHVDQUF1QztJQUN2Qyx1RkFBdUY7SUFDdkYsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUlBOzs7Ozs7OztHQVFHOztBQUVIO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLHVFQUF1RTtJQUN2RSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLDRDQUE0QztJQUM1QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQVVBLFVBQVU7O0FBRVY7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUVBLFdBQVc7O0FBRVg7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUEsVUFBVTs7QUFFVjs7SUFFSTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7O0FBR0oiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC1wb3J0Zm9saW8td2ViL3NoZWxsLXBvcnRmb2xpby13ZWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4ubXljb250YWluZXIge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTYzLCAxNTQpOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgNjUpOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTY5LCAxNzAsIDE2NiksIHJnYig3NSwgNzcsIDczKSk7ICAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0gKi9cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTsgKi9cclxuICAgIGNvbG9yOiByZ2IoNTgsIDUyLCAyMik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDIyOSwgMjA2LCAxMzQpLHJnYigyMDksIDE2OCwgMzEpKTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDNweCAycHggcmdiKDEwNCwgODgsIDQ3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1pZGljb24ge1xyXG4gICAgbWFyZ2luOiAwcHggMzBweDtcclxufVxyXG5cclxuLnJpZ2h0bWlkaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBTTUFMTCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIC5teWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gICAgXHJcbi8qIE1FRElVTSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG5cclxuICAgIC5teWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICBcclxuLyogTEFSR0UgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOTcwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcblxyXG59Il19 */";
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


    __webpack_exports__["default"] = "\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.mycontainer {\r\n    /* background-color: rgb(160, 163, 154); */\r\n    /* background-color: rgb(65, 65, 65); */\r\n    /* background-image: linear-gradient(to right, rgb(169, 170, 166), rgb(75, 77, 73));  */\r\n    background-color: rgb(255, 255, 255); \r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n/* .division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n} */\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    /* color: rgb(216, 216, 216); */\r\n    color: rgb(58, 52, 22);\r\n    background-image: radial-gradient(rgb(229, 206, 134),rgb(209, 168, 31));\r\n    width: 40%;\r\n    margin: 10px auto 10px auto;\r\n    box-shadow: 4px 4px 3px 2px rgb(104, 88, 47);\r\n    border-radius: 8px;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\n.midicon {\r\n    margin: 0px 30px;\r\n}\r\n\r\n.rightmidicon {\r\n    margin-right: 30px;\r\n}\r\n\r\nimg {\r\n    margin-top: 10px;\r\n    height: 32px;\r\n    width: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n    \r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px;\r\n        padding: 20px 30px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    .mycontainer {\r\n        width: 970px;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px 40px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwtcG9ydGZvbGlvL3NoZWxsLXBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLHVDQUF1QztJQUN2Qyx1RkFBdUY7SUFDdkYsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUlBOzs7Ozs7OztHQVFHOztBQUVIO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLHVFQUF1RTtJQUN2RSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLDRDQUE0QztJQUM1QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQVVBLFVBQVU7O0FBRVY7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUVBLFdBQVc7O0FBRVg7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUEsVUFBVTs7QUFFVjs7SUFFSTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7O0FBR0oiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC1wb3J0Zm9saW8vc2hlbGwtcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4ubXljb250YWluZXIge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTYzLCAxNTQpOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgNjUpOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTY5LCAxNzAsIDE2NiksIHJnYig3NSwgNzcsIDczKSk7ICAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0gKi9cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTsgKi9cclxuICAgIGNvbG9yOiByZ2IoNTgsIDUyLCAyMik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDIyOSwgMjA2LCAxMzQpLHJnYigyMDksIDE2OCwgMzEpKTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDNweCAycHggcmdiKDEwNCwgODgsIDQ3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1pZGljb24ge1xyXG4gICAgbWFyZ2luOiAwcHggMzBweDtcclxufVxyXG5cclxuLnJpZ2h0bWlkaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBTTUFMTCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIC5teWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gICAgXHJcbi8qIE1FRElVTSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG5cclxuICAgIC5teWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICBcclxuLyogTEFSR0UgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOTcwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcblxyXG59Il19 */";
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
  "./src/app/shell-talismans-web/shell-talismans-web.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/shell-talismans-web/shell-talismans-web.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShellTalismansWebShellTalismansWebComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsLXRhbGlzbWFucy13ZWIvc2hlbGwtdGFsaXNtYW5zLXdlYi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shell-talismans-web/shell-talismans-web.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shell-talismans-web/shell-talismans-web.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ShellTalismansWebComponent */

  /***/
  function srcAppShellTalismansWebShellTalismansWebComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellTalismansWebComponent", function () {
      return ShellTalismansWebComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShellTalismansWebComponent =
    /*#__PURE__*/
    function () {
      function ShellTalismansWebComponent() {
        _classCallCheck(this, ShellTalismansWebComponent);
      }

      _createClass(ShellTalismansWebComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShellTalismansWebComponent;
    }();

    ShellTalismansWebComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shell-talismans-web',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shell-talismans-web.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shell-talismans-web/shell-talismans-web.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shell-talismans-web.component.css */
      "./src/app/shell-talismans-web/shell-talismans-web.component.css")).default]
    })], ShellTalismansWebComponent);
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dlZGlzaC9zd2VkaXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9zd2VkaXNoL3N3ZWRpc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRpdmlzaW9uMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMTRweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
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


    __webpack_exports__["default"] = "\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.mycontainer {\r\n    background-color: rgb(236, 219, 187);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(204, 175, 121); \r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.show_img{\r\n    margin-top: 10px;\r\n    margin-left: 3.5%;\r\n    margin-right: 3.5%;\r\n    width: 26.333%;\r\n    display: inline;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 8px rgb(95, 61, 29);\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(204, 175, 121); \r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px 0px 20px 20%;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.finedivision {\r\n    background-color: rgb(204, 175, 121); \r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 30%;\r\n    margin: -5px 0px 10px -20px;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.finedivision2 {\r\n    background-color: rgb(204, 175, 121); \r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 20%;\r\n    margin: -5px 0px 0px -20px;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.videoWrapper {\r\n    position: relative;\r\n    padding-bottom: 56.25%; /* 16:9 */\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.videoWrapper iframe {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbutton {\r\n    margin: 0px;\r\n    font-size: 14px;\r\n    display: block;\r\n}\r\n\r\nh1{\r\n    margin-top: 2%;\r\n}\r\n\r\nh1, h3 {\r\n    text-align: center;\r\n    color: rgb(14, 7, 2);\r\n}\r\n\r\niframe {\r\n    width: 80%;\r\n    display: block;\r\n    margin: 5px auto;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.midicon img{\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.icons img{\r\n    margin-top: 10px;\r\n    height: auto;\r\n}\r\n\r\n.lionlogo {\r\n    width: 50%;\r\n    height: auto;\r\n    margin: 10px auto;\r\n    display: block;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.anime {\r\n    text-align: center;\r\n    display: block;\r\n    margin: 5px auto;\r\n    font-size: 10px;\r\n}\r\n\r\n.talismanlogo {\r\n    width: 50%;\r\n    height: auto;\r\n    margin: 10px auto;\r\n    display: block;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.adamatpicture {\r\n    width: 70%;\r\n    height: auto;\r\n    margin: 10px auto;\r\n    display: block;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.btn-success {\r\n    background-color: rgb(204, 175, 121);\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    /* width: 30%; */\r\n    height: 24px;\r\n    line-height: 10px;\r\n    margin-left: 10px;\r\n    text-align: left;\r\n    box-shadow: 0px 0px 1px 2px rgb(95, 61, 29);\r\n}\r\n\r\n#button_override:active {\r\n    background-color: rgb(155, 127, 76);\r\n    border-color: rgb(155, 127, 76);\r\n    box-shadow: rgb(155, 127, 76);\r\n}\r\n\r\n.itembar {\r\n    border-radius: 3px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 1px;\r\n    padding-bottom: 3px;\r\n    line-height: 20px;\r\n    display: block;\r\n    height: 40%;\r\n    width: 50%;\r\n    border-color: rgb(95, 61, 29);\r\n    background-color: rgb(204, 175, 121);\r\n    box-shadow: 0px 0px 1px 2px rgb(95, 61, 29);\r\n}\r\n\r\n.itembar_category {\r\n    border-radius: 3px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 1px;\r\n    padding-bottom: 3px;\r\n    line-height: 20px;\r\n    display: block;\r\n    height: 40%;\r\n    width: 50%;\r\n    border-color: rgb(95, 61, 29);\r\n    background-color: rgb(155, 127, 76);\r\n    /* background-color: rgb(204, 175, 121); */\r\n    box-shadow: 0px 0px 1px 2px rgb(95, 61, 29);\r\n}\r\n\r\n.itembar h3:nth-of-type(1) {\r\n    display: inline-block;\r\n    width: 90%;\r\n    text-align: left;\r\n}\r\n\r\n.itembar_category h3:nth-of-type(1) {\r\n    display: inline-block;\r\n    width: 90%;\r\n    text-align: left;\r\n}\r\n\r\n.itembar h3:nth-of-type(2) {\r\n    display: inline-block;\r\n    width: 10%;\r\n    text-align: right;\r\n}\r\n\r\n.itembar_category h3:nth-of-type(2) {\r\n    display: inline-block;\r\n    width: 10%;\r\n    text-align: right;\r\n}\r\n\r\n.itemimg {\r\n    width: 100%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 20px auto;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.itemimg_sm {\r\n    width: 30%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 20px auto;\r\n    box-shadow: 0px 0px 7px rgb(95, 61, 29);\r\n}\r\n\r\n.item {\r\n    margin: 0px 0px 20px 0px;\r\n}\r\n\r\n#footerlegal {\r\n    margin-top: 10px;\r\n    margin-bottom: 50px;\r\n    font-size: 10px;\r\n}\r\n\r\n.onbottom {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\n.item .itemcontent {\r\n    margin: 10px 40px 0px 40px;\r\n}\r\n\r\n.left_align {\r\n    text-align: left;\r\n}\r\n\r\n.center_align {\r\n    text-align: center;\r\n}\r\n\r\n.pointer {\r\n    font-size: 60px;\r\n    color: rgb(204, 175, 121);\r\n    display: block;\r\n    margin-bottom: -30px;\r\n    margin-top: -4px;\r\n    text-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 22px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 17px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 15px;\r\n    }\r\n\r\n    .mycontainer .bodytext {\r\n        font-size: 13px;\r\n    }\r\n\r\n    .itembar, .itembar_category {\r\n        width: 100%;\r\n    }\r\n\r\n    button {\r\n        font-size: 14px;\r\n    }\r\n\r\n    iframe {\r\n        height: 30vh;\r\n    }\r\n\r\n    .icons img{\r\n        width: 26px;\r\n    }\r\n\r\n    \r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    .mycontainer {\r\n        width: 100%;\r\n        min-height: 800px;\r\n        margin: 0px;\r\n        padding: 20px 30px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .mycontainer .bodytext {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .itembar, .itembar_category {\r\n        width: 75%;\r\n    }\r\n\r\n    iframe {\r\n        height: 52vh;\r\n    }\r\n\r\n    .icons img {\r\n        width: 44px;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    .mycontainer {\r\n        width: 970px;\r\n        min-height: 800px;\r\n        margin: 0px auto;\r\n        padding: 20px 40px;\r\n    }\r\n\r\n    .mycontainer h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .mycontainer h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .mycontainer p {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .mycontainer .bodytext {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .itembar, .itembar_category {\r\n        width: 50%;\r\n    }\r\n\r\n    iframe {\r\n        height: 60vh;\r\n    }\r\n\r\n    .icons img{\r\n        width: 54px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFsaXNtYW5zL3RhbGlzbWFucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUlBO0lBQ0ksb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVDQUF1QztBQUMzQzs7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7SUFDViw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsMENBQTBDO0lBQzFDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsd0NBQXdDO0FBQzVDOztBQUdBLFVBQVU7O0FBRVY7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztJQUNmOzs7QUFHSjs7QUFFQSxXQUFXOztBQUVYOztJQUVJO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7OztBQUdKOztBQUVBLFVBQVU7O0FBRVY7O0lBRUk7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGFsaXNtYW5zL3RhbGlzbWFucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgLyogb3V0bGluZTogMXB4IGRvdHRlZCByZWQ7ICovXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLm15Y29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIxOSwgMTg3KTtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAxNzUsIDEyMSk7IFxyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zaG93X2ltZ3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMy41JTtcclxuICAgIG1hcmdpbi1yaWdodDogMy41JTtcclxuICAgIHdpZHRoOiAyNi4zMzMlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiKDk1LCA2MSwgMjkpO1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDE3NSwgMTIxKTsgXHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogLTE0cHggMHB4IDIwcHggMjAlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZmluZWRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDE3NSwgMTIxKTsgXHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogLTVweCAwcHggMTBweCAtMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmZpbmVkaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTc1LCAxMjEpOyBcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiAtNXB4IDBweCAwcHggLTIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi52aWRlb1dyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTsgLyogMTY6OSAqL1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnZpZGVvV3JhcHBlciBpZnJhbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbmgxLCBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDE0LCA3LCAyKTtcclxufVxyXG5cclxuaWZyYW1lIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCByZ2IoOTUsIDYxLCAyOSk7XHJcbn1cclxuXHJcbi5taWRpY29uIGltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaWNvbnMgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmxpb25sb2dvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDk1LCA2MSwgMjkpO1xyXG59XHJcblxyXG4uYW5pbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4udGFsaXNtYW5sb2dvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDk1LCA2MSwgMjkpO1xyXG59XHJcblxyXG4uYWRhbWF0cGljdHVyZSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHJnYig5NSwgNjEsIDI5KTtcclxufVxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTc1LCAxMjEpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAvKiB3aWR0aDogMzAlOyAqL1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG59XHJcblxyXG4jYnV0dG9uX292ZXJyaWRlOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxMjcsIDc2KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE1NSwgMTI3LCA3Nik7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMTU1LCAxMjcsIDc2KTtcclxufVxyXG5cclxuLml0ZW1iYXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTc1LCAxMjEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxufVxyXG5cclxuLml0ZW1iYXJfY2F0ZWdvcnkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSwgMTI3LCA3Nik7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAxNzUsIDEyMSk7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG59XHJcblxyXG4uaXRlbWJhciBoMzpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLml0ZW1iYXJfY2F0ZWdvcnkgaDM6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pdGVtYmFyIGgzOm50aC1vZi10eXBlKDIpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLml0ZW1iYXJfY2F0ZWdvcnkgaDM6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uaXRlbWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCByZ2IoOTUsIDYxLCAyOSk7XHJcbn1cclxuXHJcbi5pdGVtaW1nX3NtIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiKDk1LCA2MSwgMjkpO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XHJcbn1cclxuXHJcblxyXG4jZm9vdGVybGVnYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5vbmJvdHRvbSB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pdGVtIC5pdGVtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDEwcHggNDBweCAwcHggNDBweDtcclxufVxyXG5cclxuLmxlZnRfYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNlbnRlcl9hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGNvbG9yOiByZ2IoMjA0LCAxNzUsIDEyMSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbn1cclxuXHJcblxyXG4vKiBTTUFMTCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIC5teWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIC5ib2R5dGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtYmFyLCAuaXRlbWJhcl9jYXRlZ29yeSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb25zIGltZ3tcclxuICAgICAgICB3aWR0aDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG4gICAgXHJcbi8qIE1FRElVTSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG5cclxuICAgIC5teWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5teWNvbnRhaW5lciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIC5ib2R5dGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtYmFyLCAuaXRlbWJhcl9jYXRlZ29yeSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIGhlaWdodDogNTJ2aDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbnMgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDRweDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiAgICBcclxuLyogTEFSR0UgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOTcwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Y29udGFpbmVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXljb250YWluZXIgLmJvZHl0ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW1iYXIsIC5pdGVtYmFyX2NhdGVnb3J5IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29ucyBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDU0cHg7XHJcbiAgICB9XHJcbn0iXX0= */";
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

        this.blockthemiddlebutton = false; //GENERAL

        this.item_tagline = false;
        this.item_prod_gen_design = false;
        this.item_learn_unreal = false; //CODE DESIGN

        this.item_cpp_integration = false;
        this.item_communication = false;
        this.item_naming = false;
        this.item_comments = false;
        this.item_pointers = false;
        this.item_save_games = false;
        this.item_piece_faces = false;
        this.item_precise_uvs = false;
        this.item_recognize_connections = false;
        this.item_connecting_pieces = false;
        this.item_rotating = false;
        this.item_refactors = false;
        this.item_mem_management = false;
        this.item_oop_vs_func = false;
        this.item_obj_act_str = false;
        this.item_multiple_levels = false;
        this.item_blueprints = false;
        this.item_widgets = false;
        this.item_stats_menu = false;
        this.item_rigging = false;
        this.item_puzzle_pieces = false;
        this.item_table_navigation = false; //GAME DESIGN / ART

        this.item_puzzle_images = false;
        this.item_character_crests = false;
        this.item_parables = false;
        this.item_prod_gen_levels = false;
        this.item_vessels = false;
        this.item_gameplay_verbs = false;
        this.item_modeling = false;
      }

      _createClass(TalismansComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //if defined by shell talismans web
          if (this.bIsWeb_InputVariable) {
            this.bIsWeb = true;
          } //not defined
          else {
              //this means regular /talismans
              this.bIsWeb = false;
            }

          if (this.BlockAButton == true) {
            this.blockthemiddlebutton = true;
          }
        }
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }, {
        key: "scrollToThisElement",
        value: function scrollToThisElement(element) {
          //get location to scroll to
          var NewOffset = element.getBoundingClientRect().top + window.pageYOffset - 60; //perform scroll

          window.scrollTo({
            top: NewOffset,
            left: 0,
            behavior: 'smooth'
          });
        } //TOGGLE FUNCTIONS
        //GENERAL

      }, {
        key: "toggle_item_tagline",
        value: function toggle_item_tagline() {
          if (this.item_tagline == false) {
            this.item_tagline = true;
            var element = document.getElementById("item_tagline");
            this.scrollToThisElement(element);
          } else {
            this.item_tagline = false;
          }
        }
      }, {
        key: "toggle_item_prod_gen_design",
        value: function toggle_item_prod_gen_design() {
          if (this.item_prod_gen_design == false) {
            this.item_prod_gen_design = true;
            var element = document.getElementById("item_prod_gen_design");
            this.scrollToThisElement(element);
          } else {
            this.item_prod_gen_design = false;
          }
        }
      }, {
        key: "toggle_item_learn_unreal",
        value: function toggle_item_learn_unreal() {
          if (this.item_learn_unreal == false) {
            this.item_learn_unreal = true;
            var element = document.getElementById("item_learn_unreal");
            this.scrollToThisElement(element);
          } else {
            this.item_learn_unreal = false;
          }
        } //CODE DESIGN

      }, {
        key: "toggle_item_cpp_integration",
        value: function toggle_item_cpp_integration() {
          if (this.item_cpp_integration == false) {
            this.item_cpp_integration = true;
            var element = document.getElementById("item_cpp_integration");
            this.scrollToThisElement(element);
          } else {
            this.item_cpp_integration = false;
          }
        }
      }, {
        key: "toggle_item_communication",
        value: function toggle_item_communication() {
          if (this.item_communication == false) {
            this.item_communication = true;
            var element = document.getElementById("item_communication");
            this.scrollToThisElement(element);
          } else {
            this.item_communication = false;
          }
        }
      }, {
        key: "toggle_item_naming",
        value: function toggle_item_naming() {
          if (this.item_naming == false) {
            this.item_naming = true;
            var element = document.getElementById("item_naming");
            this.scrollToThisElement(element);
          } else {
            this.item_naming = false;
          }
        }
      }, {
        key: "toggle_item_comments",
        value: function toggle_item_comments() {
          if (this.item_comments == false) {
            this.item_comments = true;
            var element = document.getElementById("item_comments");
            this.scrollToThisElement(element);
          } else {
            this.item_comments = false;
          }
        }
      }, {
        key: "toggle_item_pointers",
        value: function toggle_item_pointers() {
          if (this.item_pointers == false) {
            this.item_pointers = true;
            var element = document.getElementById("item_pointers");
            this.scrollToThisElement(element);
          } else {
            this.item_pointers = false;
          }
        }
      }, {
        key: "toggle_item_save_games",
        value: function toggle_item_save_games() {
          if (this.item_save_games == false) {
            this.item_save_games = true;
            var element = document.getElementById("item_save_games");
            this.scrollToThisElement(element);
          } else {
            this.item_save_games = false;
          }
        }
      }, {
        key: "toggle_item_piece_faces",
        value: function toggle_item_piece_faces() {
          if (this.item_piece_faces == false) {
            this.item_piece_faces = true;
            var element = document.getElementById("item_piece_faces");
            this.scrollToThisElement(element);
          } else {
            this.item_piece_faces = false;
          }
        }
      }, {
        key: "toggle_item_precise_uvs",
        value: function toggle_item_precise_uvs() {
          if (this.item_precise_uvs == false) {
            this.item_precise_uvs = true;
            var element = document.getElementById("item_precise_uvs");
            this.scrollToThisElement(element);
          } else {
            this.item_precise_uvs = false;
          }
        }
      }, {
        key: "toggle_item_recognize_connections",
        value: function toggle_item_recognize_connections() {
          if (this.item_recognize_connections == false) {
            this.item_recognize_connections = true;
            var element = document.getElementById("item_recognize_connections");
            this.scrollToThisElement(element);
          } else {
            this.item_recognize_connections = false;
          }
        }
      }, {
        key: "toggle_item_connecting_pieces",
        value: function toggle_item_connecting_pieces() {
          if (this.item_connecting_pieces == false) {
            this.item_connecting_pieces = true;
            var element = document.getElementById("item_connecting_pieces");
            this.scrollToThisElement(element);
          } else {
            this.item_connecting_pieces = false;
          }
        }
      }, {
        key: "toggle_item_rotating",
        value: function toggle_item_rotating() {
          if (this.item_rotating == false) {
            this.item_rotating = true;
            var element = document.getElementById("item_rotating");
            this.scrollToThisElement(element);
          } else {
            this.item_rotating = false;
          }
        }
      }, {
        key: "toggle_item_refactors",
        value: function toggle_item_refactors() {
          if (this.item_refactors == false) {
            this.item_refactors = true;
            var element = document.getElementById("item_refactors");
            this.scrollToThisElement(element);
          } else {
            this.item_refactors = false;
          }
        }
      }, {
        key: "toggle_item_mem_management",
        value: function toggle_item_mem_management() {
          if (this.item_mem_management == false) {
            this.item_mem_management = true;
            var element = document.getElementById("item_mem_management");
            this.scrollToThisElement(element);
          } else {
            this.item_mem_management = false;
          }
        }
      }, {
        key: "toggle_item_oop_vs_func",
        value: function toggle_item_oop_vs_func() {
          if (this.item_oop_vs_func == false) {
            this.item_oop_vs_func = true;
            var element = document.getElementById("item_oop_vs_func");
            this.scrollToThisElement(element);
          } else {
            this.item_oop_vs_func = false;
          }
        }
      }, {
        key: "toggle_item_obj_act_str",
        value: function toggle_item_obj_act_str() {
          if (this.item_obj_act_str == false) {
            this.item_obj_act_str = true;
            var element = document.getElementById("item_obj_act_str");
            this.scrollToThisElement(element);
          } else {
            this.item_obj_act_str = false;
          }
        }
      }, {
        key: "toggle_item_multiple_levels",
        value: function toggle_item_multiple_levels() {
          if (this.item_multiple_levels == false) {
            this.item_multiple_levels = true;
            var element = document.getElementById("item_multiple_levels");
            this.scrollToThisElement(element);
          } else {
            this.item_multiple_levels = false;
          }
        }
      }, {
        key: "toggle_item_blueprints",
        value: function toggle_item_blueprints() {
          if (this.item_blueprints == false) {
            this.item_blueprints = true;
            var element = document.getElementById("item_blueprints");
            this.scrollToThisElement(element);
          } else {
            this.item_blueprints = false;
          }
        }
      }, {
        key: "toggle_item_widgets",
        value: function toggle_item_widgets() {
          if (this.item_widgets == false) {
            this.item_widgets = true;
            var element = document.getElementById("item_widgets");
            this.scrollToThisElement(element);
          } else {
            this.item_widgets = false;
          }
        }
      }, {
        key: "toggle_item_stats_menu",
        value: function toggle_item_stats_menu() {
          if (this.item_stats_menu == false) {
            this.item_stats_menu = true;
            var element = document.getElementById("item_stats_menu");
            this.scrollToThisElement(element);
          } else {
            this.item_stats_menu = false;
          }
        }
      }, {
        key: "toggle_item_rigging",
        value: function toggle_item_rigging() {
          if (this.item_rigging == false) {
            this.item_rigging = true;
            var element = document.getElementById("item_rigging");
            this.scrollToThisElement(element);
          } else {
            this.item_rigging = false;
          }
        }
      }, {
        key: "toggle_item_puzzle_pieces",
        value: function toggle_item_puzzle_pieces() {
          if (this.item_puzzle_pieces == false) {
            this.item_puzzle_pieces = true;
            var element = document.getElementById("item_puzzle_pieces");
            this.scrollToThisElement(element);
          } else {
            this.item_puzzle_pieces = false;
          }
        }
      }, {
        key: "toggle_item_table_navigation",
        value: function toggle_item_table_navigation() {
          if (this.item_table_navigation == false) {
            this.item_table_navigation = true;
            var element = document.getElementById("item_table_navigation");
            this.scrollToThisElement(element);
          } else {
            this.item_table_navigation = false;
          }
        } //GAME DESIGN / ART

      }, {
        key: "toggle_item_puzzle_images",
        value: function toggle_item_puzzle_images() {
          if (this.item_puzzle_images == false) {
            this.item_puzzle_images = true;
            var element = document.getElementById("item_puzzle_images");
            this.scrollToThisElement(element);
          } else {
            this.item_puzzle_images = false;
          }
        }
      }, {
        key: "toggle_item_vessels",
        value: function toggle_item_vessels() {
          if (this.item_vessels == false) {
            this.item_vessels = true;
            var element = document.getElementById("item_vessels");
            this.scrollToThisElement(element);
          } else {
            this.item_vessels = false;
          }
        }
      }, {
        key: "toggle_item_parables",
        value: function toggle_item_parables() {
          if (this.item_parables == false) {
            this.item_parables = true;
            var element = document.getElementById("item_parables");
            this.scrollToThisElement(element);
          } else {
            this.item_parables = false;
          }
        }
      }, {
        key: "toggle_item_character_crests",
        value: function toggle_item_character_crests() {
          if (this.item_character_crests == false) {
            this.item_character_crests = true;
            var element = document.getElementById("item_character_crests");
            this.scrollToThisElement(element);
          } else {
            this.item_character_crests = false;
          }
        }
      }, {
        key: "toggle_item_gameplay_verbs",
        value: function toggle_item_gameplay_verbs() {
          if (this.item_gameplay_verbs == false) {
            this.item_gameplay_verbs = true;
            var element = document.getElementById("item_gameplay_verbs");
            this.scrollToThisElement(element);
          } else {
            this.item_gameplay_verbs = false;
          }
        }
      }, {
        key: "toggle_item_prod_gen_levels",
        value: function toggle_item_prod_gen_levels() {
          if (this.item_prod_gen_levels == false) {
            this.item_prod_gen_levels = true;
            var element = document.getElementById("item_prod_gen_levels");
            this.scrollToThisElement(element);
          } else {
            this.item_prod_gen_levels = false;
          }
        }
      }, {
        key: "toggle_item_modeling",
        value: function toggle_item_modeling() {
          if (this.item_modeling == false) {
            this.item_modeling = true;
            var element = document.getElementById("item_modeling");
            this.scrollToThisElement(element);
          } else {
            this.item_modeling = false;
          }
        }
      }]);

      return TalismansComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TalismansComponent.prototype, "bIsWeb_InputVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TalismansComponent.prototype, "BlockAButton", void 0);
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
  "./src/app/unity/unity.component.css":
  /*!*******************************************!*\
    !*** ./src/app/unity/unity.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppUnityUnityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .btn-danger {\r\n        width: 100%;\r\n    }\r\n\r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    .btn-danger {\r\n        width: 70%;\r\n    }\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    .btn-danger {\r\n        width: 40%;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pdHkvdW5pdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUEsVUFBVTs7QUFFVjs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmOztBQUVKOztBQUVBLFdBQVc7O0FBRVg7O0lBRUk7UUFDSSxVQUFVO0lBQ2Q7O0FBRUo7O0FBRUEsVUFBVTs7QUFFVjs7SUFFSTtRQUNJLFVBQVU7SUFDZDs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3VuaXR5L3VuaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtYXgtd2lkdGg6IDkwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCBibGFjaztcclxufVxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogLTE0cHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFNNQUxMICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1kYW5nZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgXHJcbi8qIE1FRElVTSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG5cclxuICAgIC5idG4tZGFuZ2VyIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgXHJcbi8qIExBUkdFICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxuICAgIC5idG4tZGFuZ2VyIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/unity/unity.component.ts":
  /*!******************************************!*\
    !*** ./src/app/unity/unity.component.ts ***!
    \******************************************/

  /*! exports provided: UnityComponent */

  /***/
  function srcAppUnityUnityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnityComponent", function () {
      return UnityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UnityComponent =
    /*#__PURE__*/
    function () {
      function UnityComponent() {
        _classCallCheck(this, UnityComponent);
      }

      _createClass(UnityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return UnityComponent;
    }();

    UnityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/unity/unity.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unity.component.css */
      "./src/app/unity/unity.component.css")).default]
    })], UnityComponent);
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .btn-danger {\r\n        width: 100%;\r\n    }\r\n\r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n    .btn-danger {\r\n        width: 70%;\r\n    }\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    .btn-danger {\r\n        width: 40%;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5yZWFsL3VucmVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQSxVQUFVOztBQUVWOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0FBRUo7O0FBRUEsV0FBVzs7QUFFWDs7SUFFSTtRQUNJLFVBQVU7SUFDZDs7QUFFSjs7QUFFQSxVQUFVOztBQUVWOztJQUVJO1FBQ0ksVUFBVTtJQUNkOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvdW5yZWFsL3VucmVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogbWF4LXdpZHRoOiA5MCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBTTUFMTCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZGFuZ2VyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbn1cclxuICAgIFxyXG4vKiBNRURJVU0gKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuXHJcbiAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuXHJcbn1cclxuICAgIFxyXG4vKiBMQVJHRSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuXHJcbn0iXX0= */";
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


    __webpack_exports__["default"] = "* {\r\n    vertical-align: top;\r\n}\r\n\r\nimg {\r\n    margin: 5px auto;\r\n    height: 40%;\r\n    width: auto;\r\n    max-width: 90%; \r\n    box-shadow: 0px 0px 3px 2px black;\r\n}\r\n\r\n.inner {\r\n    margin: 0px auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n/* .division {\r\n    background-color: rgb(216, 216, 216);\r\n    height: 5px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px rgb(216, 216, 216);\r\n    display: block;\r\n    border-radius: 10px;\r\n} */\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* .sammy{\r\n    background-image: radial-gradient(rgb(209, 168, 31),white 98%);\r\n} */\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n/* p {\r\n    max-height: 20%;\r\n} */\r\n\r\n.card-header {\r\n    margin: 0px auto 5px auto;\r\n    padding: 8px;\r\n    /* font: pink; */\r\n    display: block;\r\n    /* background-color: rgb(145, 145, 145); */\r\n    /* background-color: rgb(138, 117, 47); */\r\n    background-image: radial-gradient(rgb(229, 206, 134),rgb(209, 168, 31));\r\n    /* background-image: linear-gradient(black 50%,white, black); */\r\n}\r\n\r\n.card {\r\n    /* background-color: rgb(216, 216, 216); */\r\n    background-color: rgb(228, 226, 208);\r\n    width: 40%;\r\n    margin: 20px 0px;\r\n    height: 200px;\r\n    display: inline-block;\r\n    box-shadow: 4px 4px 3px 2px rgb(104, 88, 47);\r\n    cursor: pointer;\r\n}\r\n\r\n.card:hover{\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    box-shadow: 6px 6px 3px 2px rgb(104, 88, 47);\r\n}\r\n\r\n.card-body {\r\n    height: 40%;\r\n}\r\n\r\n.card-text {\r\n    margin: 0px 0px 15px 0px;\r\n}\r\n\r\n.elevator {\r\n    font-size: 13px;\r\n}\r\n\r\nbutton {\r\n    font-size: 20px;\r\n}\r\n\r\n/* SMALL */\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .card-header {\r\n        font-size: 25px;\r\n    }\r\n\r\n    .card-body {\r\n        font-size: 18px;\r\n        padding: 0px 20px 20px 20px;\r\n    }\r\n\r\n    .card {\r\n        width: 90%;\r\n        height: auto;\r\n        /* min-height: 600px; */\r\n        margin: 20px 0px;\r\n        /* height: 1000px; */\r\n        display: inline-block;\r\n    }\r\n\r\n    img {\r\n        width: 60%;\r\n        height: auto;\r\n        margin: 15px auto;\r\n    }\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n    .card {\r\n        \r\n        height: 200px;\r\n        width: 46%;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n    }\r\n\r\n    .card-header {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 10px;\r\n    }\r\n\r\n    button {\r\n        font-size: 14px;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* MEDIUM */\r\n\r\n@media only screen and (min-width: 547px) {\r\n    .card {\r\n        \r\n        height: 200px;\r\n        width: 46%;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n\r\n    }\r\n\r\n    .card-header {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n    /* img {\r\n        height: 40%;\r\n        width: auto;\r\n    } */\r\n\r\n}\r\n\r\n/* LARGE */\r\n\r\n@media only screen and (min-width: 1024px) {\r\n    .card {\r\n        width: 29.33%;\r\n        height: 200px;\r\n        margin: 20px 2%;\r\n        display: inline-block;\r\n    } \r\n\r\n    .card-header {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXByb2plY3RzL3dlYi1wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7OztHQVFHOztBQUVIO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0dBRUc7O0FBR0g7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsMENBQTBDO0lBQzFDLHlDQUF5QztJQUN6Qyx1RUFBdUU7SUFDdkUsK0RBQStEO0FBQ25FOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBLFVBQVU7O0FBRVY7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7OztBQUdKOztBQUVBO0lBQ0k7O1FBRUksYUFBYTtRQUNiLFVBQVU7UUFDVixlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COzs7QUFHSjs7QUFJQSxXQUFXOztBQUVWO0lBQ0c7O1FBRUksYUFBYTtRQUNiLFVBQVU7UUFDVixlQUFlO1FBQ2YscUJBQXFCOztJQUV6Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBOzs7T0FHRzs7QUFFUDs7QUFFQSxVQUFVOztBQUVWO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLGVBQWU7UUFDZixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7OztBQUlKIiwiZmlsZSI6InNyYy9hcHAvd2ViLXByb2plY3RzL3dlYi1wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkwJTsgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIC5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0gKi9cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE2OCwgMzEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoOTUsIDYxLCAyOSk7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xNHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiAuc2FtbXl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDIwOSwgMTY4LCAzMSksd2hpdGUgOTglKTtcclxufSAqL1xyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHAge1xyXG4gICAgbWF4LWhlaWdodDogMjAlO1xyXG59ICovXHJcblxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAvKiBmb250OiBwaW5rOyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAxMTcsIDQ3KTsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2IoMjI5LCAyMDYsIDEzNCkscmdiKDIwOSwgMTY4LCAzMSkpO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsYWNrIDUwJSx3aGl0ZSwgYmxhY2spOyAqL1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjYsIDIwOCk7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDNweCAycHggcmdiKDEwNCwgODgsIDQ3KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAzcHggMnB4IHJnYigxMDQsIDg4LCA0Nyk7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDE1cHggMHB4O1xyXG59XHJcblxyXG4uZWxldmF0b3Ige1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLyogU01BTEwgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAvKiBtaW4taGVpZ2h0OiA2MDBweDsgKi9cclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgICAgIC8qIGhlaWdodDogMTAwMHB4OyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgfVxyXG4gXHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICBtYXJnaW46IDIwcHggMiU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qIE1FRElVTSAqL1xyXG4gICAgXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0N3B4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAyJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfSAqL1xyXG5cclxufVxyXG4gICAgXHJcbi8qIExBUkdFICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAyOS4zMyU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggMiU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfSBcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".inner {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 80%;\r\n    height: auto;\r\n    /* max-width: 90%; */\r\n    box-shadow: 0px 0px 3px 2px black;\r\n\r\n}\r\n\r\nh5 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    text-decoration: underline;\r\n}\r\n\r\n.top {\r\n    width: 20%;\r\n    height: auto;\r\n}\r\n\r\n.btn-success {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.btn-danger {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n    height: 24px;\r\n    line-height: 10px;\r\n    box-shadow: 0px 0px 1px 2px black;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 60%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n.division2 {\r\n    background-color: rgb(209, 168, 31);\r\n    border-color: rgb(95, 61, 29);\r\n    height: 5px;\r\n    width: 50%;\r\n    margin: -14px auto 20px auto;\r\n    box-shadow: 0px 0px 2px rgb(95, 61, 29);\r\n    display: block;\r\n    border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h5 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    p {\r\n        font-size: 20px;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VkZGluZy93ZWRkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC93ZWRkaW5nL3dlZGRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIG1heC13aWR0aDogOTAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IGJsYWNrO1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTY4LCAzMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRpdmlzaW9uMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNjgsIDMxKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA2MSwgMjkpO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMTRweCBhdXRvIDIwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYig5NSwgNjEsIDI5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
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