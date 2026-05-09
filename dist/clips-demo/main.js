(self["webpackChunkclips_demo"] = self["webpackChunkclips_demo"] || []).push([["main"],{

/***/ 8094:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AboutComponent {
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container", "mx-auto", "mt-4"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tenetur, animi doloremque culpa ex, sed impedit esse quia illum officia cupiditate rerum. Tempora vitae aperiam, assumenda quisquam nesciunt ducimus qui ullam. In inventore soluta voluptate nisi, distinctio vero consequuntur commodi cupiditate nobis minus, dolores fuga reiciendis corporis dignissimos iste? Deleniti eveniet earum pariatur sit ad maiores, repellendus odio voluptate voluptates nesciunt modi eos, omnis explicabo eius nihil recusandae obcaecati! Eveniet, iure ea. Quisquam beatae esse mollitia nisi quos ipsam quo temporibus corrupti vero eaque maxime, perferendis accusamus nesciunt quod earum dolores alias nihil totam quae assumenda vel, consequuntur ipsum doloribus. Ut maiores modi unde at quaerat quasi ullam assumenda, rerum odio fuga, animi commodi velit dolor eius debitis. Dolores aliquid, necessitatibus dolore provident amet aspernatur voluptatibus reiciendis, at consequuntur, totam numquam mollitia minus ipsum tenetur nam et ea doloribus eius qui vel! Fugit eum itaque nemo exercitationem. Reiciendis, veniam provident. Pariatur, voluptatum, eaque quisquam reiciendis quibusdam sequi quas expedita tenetur, nostrum distinctio praesentium incidunt ea nam! Praesentium doloribus iste accusantium voluptates ipsa dolorum aliquid tempora quis expedita eius doloremque sit consequatur dolorem eum blanditiis suscipit enim ratione, iure porro odio nihil harum corrupti sint fugit. Cum nulla consequuntur hic officia corrupti architecto, molestias, temporibus magni aspernatur veritatis neque dolorem ratione asperiores aliquam earum. Laudantium laboriosam minima maxime numquam molestias deserunt error id voluptate maiores culpa alias esse veniam iure, quisquam impedit minus soluta ipsam! Commodi, ducimus quae nihil dolor minus doloribus illo delectus quia quos exercitationem officia modi porro et suscipit vel incidunt sit veritatis ut asperiores. Libero pariatur odit aliquid error eveniet possimus aut perspiciatis qui eos, culpa officiis, soluta quas distinctio ipsam. Sequi aliquid voluptas a nostrum animi placeat quis architecto consequuntur, cupiditate est, modi quibusdam temporibus repellendus eum ex dolore? Minus obcaecati distinctio eligendi sit eos atque!\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _clip_clip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clip/clip.component */ 8079);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ 6084);
/* harmony import */ var _services_clip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/clip.service */ 6200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent
}, {
  path: 'clip/:id',
  component: _clip_clip_component__WEBPACK_IMPORTED_MODULE_3__.ClipComponent,
  resolve: {
    clip: _services_clip_service__WEBPACK_IMPORTED_MODULE_5__.ClipService
  }
}, {
  path: '',
  loadChildren: function () {
    var _ref = (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (yield __webpack_require__.e(/*! import() */ "src_app_video_video_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./video/video.module */ 3817))).VideoModule;
    });
    return function loadChildren() {
      return _ref.apply(this, arguments);
    };
  }()
}, {
  path: '**',
  component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 2333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _user_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/auth-modal/auth-modal.component */ 3723);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 5120);






function AppComponent_app_auth_modal_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-auth-modal");
  }
}
class AppComponent {
  constructor(auth) {
    this.auth = auth;
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 3,
      consts: [[4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav")(1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_app_auth_modal_2_Template, 1, 0, "app-auth-modal", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx.auth.isAuthenticatedWithDelay$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _user_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_1__.AuthModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.module */ 90);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ 5120);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _clip_clip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clip/clip.component */ 8079);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ 6084);
/* harmony import */ var _clipslist_clipslist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clipslist/clipslist.component */ 7303);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_fb_timestamp_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/fb-timestamp.pipe */ 8321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);














class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _user_user_module__WEBPACK_IMPORTED_MODULE_2__.UserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__.NavComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _clip_clip_component__WEBPACK_IMPORTED_MODULE_6__.ClipComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent, _clipslist_clipslist_component__WEBPACK_IMPORTED_MODULE_8__.ClipslistComponent, _pipes_fb_timestamp_pipe__WEBPACK_IMPORTED_MODULE_9__.FbTimestampPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _user_user_module__WEBPACK_IMPORTED_MODULE_2__.UserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 8079:
/*!****************************************!*\
  !*** ./src/app/clip/clip.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipComponent: () => (/* binding */ ClipComponent)
/* harmony export */ });
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ 2809);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _clipslist_clipslist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clipslist/clipslist.component */ 7303);
/* harmony import */ var _pipes_fb_timestamp_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/fb-timestamp.pipe */ 8321);






const _c0 = ["videoPlayer"];
class ClipComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.player = (0,video_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.target?.nativeElement);
    this.route.data.subscribe(data => {
      this.clip = data.clip;
      this.player?.src({
        src: this.clip.url,
        type: 'video/mp4'
      });
    });
  }
  static {
    this.ɵfac = function ClipComponent_Factory(t) {
      return new (t || ClipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ClipComponent,
      selectors: [["app-clip"]],
      viewQuery: function ClipComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.target = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe])],
      decls: 16,
      vars: 6,
      consts: [[1, "container", "mx-auto", "my-8", "bg-secondary", "p-6"], [1, "rounded", "relative", "flex", "flex-col"], [1, "font-bold", "mb-2", "text-3xl"], [1, "text-gray-400", "mb-6"], [1, "relative", "aspect-video", "overflow-hidden"], ["controls", "", "crossorigin", "", 1, "video-js", "vjs-theme-forest", "mx-auto"], ["videoPlayer", ""], [1, "container", "mx-auto", "my-8"], [1, "mt-6", "text-2xl"], [3, "scrollable"]],
      template: function ClipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "fbTimestamp");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "video", 5, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "More Clips");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-clipslist", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.clip == null ? null : ctx.clip.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Uploaded By ", ctx.clip == null ? null : ctx.clip.displayName, " on ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, ctx.clip == null ? null : ctx.clip.createdAt));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", false);
        }
      },
      dependencies: [_clipslist_clipslist_component__WEBPACK_IMPORTED_MODULE_1__.ClipslistComponent, _pipes_fb_timestamp_pipe__WEBPACK_IMPORTED_MODULE_2__.FbTimestampPipe],
      styles: [".vjs-modal-dialog .vjs-modal-dialog-content, .video-js .vjs-modal-dialog, .vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  text-align: center;\n}\n\n@font-face {\n  font-family: VideoJS;\n  src: url(data:application/font-woff;charset=utf-8;base64,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) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-play, .video-js .vjs-play-control .vjs-icon-placeholder, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-play:before, .video-js .vjs-play-control .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  content: \"\\f101\";\n}\n\n.vjs-icon-play-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-play-circle:before {\n  content: \"\\f102\";\n}\n\n.vjs-icon-pause, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-pause:before, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before {\n  content: \"\\f103\";\n}\n\n.vjs-icon-volume-mute, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-mute:before, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {\n  content: \"\\f104\";\n}\n\n.vjs-icon-volume-low, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-low:before, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {\n  content: \"\\f105\";\n}\n\n.vjs-icon-volume-mid, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-mid:before, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {\n  content: \"\\f106\";\n}\n\n.vjs-icon-volume-high, .video-js .vjs-mute-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-high:before, .video-js .vjs-mute-control .vjs-icon-placeholder:before {\n  content: \"\\f107\";\n}\n\n.vjs-icon-fullscreen-enter, .video-js .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {\n  content: \"\\f108\";\n}\n\n.vjs-icon-fullscreen-exit, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-fullscreen-exit:before, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {\n  content: \"\\f109\";\n}\n\n.vjs-icon-spinner {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-spinner:before {\n  content: \"\\f10a\";\n}\n\n.vjs-icon-subtitles, .video-js .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js .vjs-subtitles-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-subtitles:before, .video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js .vjs-subtitles-button .vjs-icon-placeholder:before {\n  content: \"\\f10b\";\n}\n\n.vjs-icon-captions, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js .vjs-captions-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-captions:before, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js .vjs-captions-button .vjs-icon-placeholder:before {\n  content: \"\\f10c\";\n}\n\n.vjs-icon-hd {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-hd:before {\n  content: \"\\f10d\";\n}\n\n.vjs-icon-chapters, .video-js .vjs-chapters-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-chapters:before, .video-js .vjs-chapters-button .vjs-icon-placeholder:before {\n  content: \"\\f10e\";\n}\n\n.vjs-icon-downloading {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-downloading:before {\n  content: \"\\f10f\";\n}\n\n.vjs-icon-file-download {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-file-download:before {\n  content: \"\\f110\";\n}\n\n.vjs-icon-file-download-done {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-file-download-done:before {\n  content: \"\\f111\";\n}\n\n.vjs-icon-file-download-off {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-file-download-off:before {\n  content: \"\\f112\";\n}\n\n.vjs-icon-share {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-share:before {\n  content: \"\\f113\";\n}\n\n.vjs-icon-cog {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-cog:before {\n  content: \"\\f114\";\n}\n\n.vjs-icon-square {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-square:before {\n  content: \"\\f115\";\n}\n\n.vjs-icon-circle, .vjs-seek-to-live-control .vjs-icon-placeholder, .video-js .vjs-volume-level, .video-js .vjs-play-progress {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-circle:before, .vjs-seek-to-live-control .vjs-icon-placeholder:before, .video-js .vjs-volume-level:before, .video-js .vjs-play-progress:before {\n  content: \"\\f116\";\n}\n\n.vjs-icon-circle-outline {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-circle-outline:before {\n  content: \"\\f117\";\n}\n\n.vjs-icon-circle-inner-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-circle-inner-circle:before {\n  content: \"\\f118\";\n}\n\n.vjs-icon-cancel, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-cancel:before, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before {\n  content: \"\\f119\";\n}\n\n.vjs-icon-repeat {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-repeat:before {\n  content: \"\\f11a\";\n}\n\n.vjs-icon-replay, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-replay:before, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before {\n  content: \"\\f11b\";\n}\n\n.vjs-icon-replay-5, .video-js .vjs-skip-backward-5 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-replay-5:before, .video-js .vjs-skip-backward-5 .vjs-icon-placeholder:before {\n  content: \"\\f11c\";\n}\n\n.vjs-icon-replay-10, .video-js .vjs-skip-backward-10 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-replay-10:before, .video-js .vjs-skip-backward-10 .vjs-icon-placeholder:before {\n  content: \"\\f11d\";\n}\n\n.vjs-icon-replay-30, .video-js .vjs-skip-backward-30 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-replay-30:before, .video-js .vjs-skip-backward-30 .vjs-icon-placeholder:before {\n  content: \"\\f11e\";\n}\n\n.vjs-icon-forward-5, .video-js .vjs-skip-forward-5 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-forward-5:before, .video-js .vjs-skip-forward-5 .vjs-icon-placeholder:before {\n  content: \"\\f11f\";\n}\n\n.vjs-icon-forward-10, .video-js .vjs-skip-forward-10 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-forward-10:before, .video-js .vjs-skip-forward-10 .vjs-icon-placeholder:before {\n  content: \"\\f120\";\n}\n\n.vjs-icon-forward-30, .video-js .vjs-skip-forward-30 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-forward-30:before, .video-js .vjs-skip-forward-30 .vjs-icon-placeholder:before {\n  content: \"\\f121\";\n}\n\n.vjs-icon-audio, .video-js .vjs-audio-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-audio:before, .video-js .vjs-audio-button .vjs-icon-placeholder:before {\n  content: \"\\f122\";\n}\n\n.vjs-icon-next-item {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-next-item:before {\n  content: \"\\f123\";\n}\n\n.vjs-icon-previous-item {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-previous-item:before {\n  content: \"\\f124\";\n}\n\n.vjs-icon-shuffle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-shuffle:before {\n  content: \"\\f125\";\n}\n\n.vjs-icon-cast {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-cast:before {\n  content: \"\\f126\";\n}\n\n.vjs-icon-picture-in-picture-enter, .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-picture-in-picture-enter:before, .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before {\n  content: \"\\f127\";\n}\n\n.vjs-icon-picture-in-picture-exit, .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-picture-in-picture-exit:before, .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before {\n  content: \"\\f128\";\n}\n\n.vjs-icon-facebook {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-facebook:before {\n  content: \"\\f129\";\n}\n\n.vjs-icon-linkedin {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-linkedin:before {\n  content: \"\\f12a\";\n}\n\n.vjs-icon-twitter {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-twitter:before {\n  content: \"\\f12b\";\n}\n\n.vjs-icon-tumblr {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-tumblr:before {\n  content: \"\\f12c\";\n}\n\n.vjs-icon-pinterest {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-pinterest:before {\n  content: \"\\f12d\";\n}\n\n.vjs-icon-audio-description, .video-js .vjs-descriptions-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-audio-description:before, .video-js .vjs-descriptions-button .vjs-icon-placeholder:before {\n  content: \"\\f12e\";\n}\n\n.video-js {\n  display: inline-block;\n  vertical-align: top;\n  box-sizing: border-box;\n  color: #fff;\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  font-size: 10px;\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  font-family: Arial, Helvetica, sans-serif;\n  word-break: initial;\n}\n.video-js:-moz-full-screen {\n  position: absolute;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.video-js[tabindex=\"-1\"] {\n  outline: none;\n}\n\n.video-js *,\n.video-js *:before,\n.video-js *:after {\n  box-sizing: inherit;\n}\n\n.video-js ul {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  list-style-position: outside;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.video-js.vjs-fluid,\n.video-js.vjs-16-9,\n.video-js.vjs-4-3,\n.video-js.vjs-9-16,\n.video-js.vjs-1-1 {\n  width: 100%;\n  max-width: 100%;\n}\n\n.video-js.vjs-fluid:not(.vjs-audio-only-mode),\n.video-js.vjs-16-9:not(.vjs-audio-only-mode),\n.video-js.vjs-4-3:not(.vjs-audio-only-mode),\n.video-js.vjs-9-16:not(.vjs-audio-only-mode),\n.video-js.vjs-1-1:not(.vjs-audio-only-mode) {\n  height: 0;\n}\n\n.video-js.vjs-16-9:not(.vjs-audio-only-mode) {\n  padding-top: 56.25%;\n}\n\n.video-js.vjs-4-3:not(.vjs-audio-only-mode) {\n  padding-top: 75%;\n}\n\n.video-js.vjs-9-16:not(.vjs-audio-only-mode) {\n  padding-top: 177.7777777778%;\n}\n\n.video-js.vjs-1-1:not(.vjs-audio-only-mode) {\n  padding-top: 100%;\n}\n\n.video-js.vjs-fill:not(.vjs-audio-only-mode) {\n  width: 100%;\n  height: 100%;\n}\n\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-js.vjs-audio-only-mode .vjs-tech {\n  display: none;\n}\n\nbody.vjs-full-window,\nbody.vjs-pip-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.vjs-full-window .video-js.vjs-fullscreen,\nbody.vjs-pip-window .video-js {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.video-js.vjs-fullscreen:not(.vjs-ios-native-fs),\nbody.vjs-pip-window .video-js {\n  width: 100% !important;\n  height: 100% !important;\n  padding-top: 0 !important;\n}\n\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none;\n}\n\n.vjs-pip-container .vjs-pip-text {\n  position: absolute;\n  bottom: 10%;\n  font-size: 2em;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 0.5em;\n  text-align: center;\n  width: 100%;\n}\n\n.vjs-layout-tiny.vjs-pip-container .vjs-pip-text,\n.vjs-layout-x-small.vjs-pip-container .vjs-pip-text,\n.vjs-layout-small.vjs-pip-container .vjs-pip-text {\n  bottom: 0;\n  font-size: 1.4em;\n}\n\n.vjs-hidden {\n  display: none !important;\n}\n\n.vjs-disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n\n.video-js .vjs-offscreen {\n  height: 1px;\n  left: -9999px;\n  position: absolute;\n  top: 0;\n  width: 1px;\n}\n\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n.vjs-no-js {\n  padding: 20px;\n  color: #fff;\n  background-color: #000;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  width: 300px;\n  height: 150px;\n  margin: 0px auto;\n}\n\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #66A8CC;\n}\n\n.video-js .vjs-big-play-button {\n  font-size: 3em;\n  line-height: 1.5em;\n  height: 1.63332em;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 0;\n  margin-top: -0.81666em;\n  margin-left: -1.5em;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  transition: all 0.4s;\n}\n.video-js:hover .vjs-big-play-button,\n.video-js .vjs-big-play-button:focus {\n  border-color: #fff;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n  transition: all 0s;\n}\n\n.vjs-controls-disabled .vjs-big-play-button,\n.vjs-has-started .vjs-big-play-button,\n.vjs-using-native-controls .vjs-big-play-button,\n.vjs-error .vjs-big-play-button {\n  display: none;\n}\n\n.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {\n  display: block;\n}\n\n.video-js button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  appearance: none;\n}\n\n.vjs-control .vjs-button {\n  width: 100%;\n  height: 100%;\n}\n\n.video-js .vjs-control.vjs-close-button {\n  cursor: pointer;\n  height: 3em;\n  position: absolute;\n  right: 0;\n  top: 0.5em;\n  z-index: 2;\n}\n.video-js .vjs-modal-dialog {\n  background: rgba(0, 0, 0, 0.8);\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));\n  overflow: auto;\n}\n\n.video-js .vjs-modal-dialog > * {\n  box-sizing: border-box;\n}\n\n.vjs-modal-dialog .vjs-modal-dialog-content {\n  font-size: 1.2em;\n  line-height: 1.5;\n  padding: 20px 24px;\n  z-index: 1;\n}\n\n.vjs-menu-button {\n  cursor: pointer;\n}\n\n.vjs-menu-button.vjs-disabled {\n  cursor: default;\n}\n\n.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {\n  display: none;\n}\n\n.vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  overflow: auto;\n}\n\n.vjs-menu .vjs-menu-content > * {\n  box-sizing: border-box;\n}\n\n.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu {\n  display: none;\n}\n\n.vjs-menu li {\n  list-style: none;\n  margin: 0;\n  padding: 0.2em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase;\n}\n\n.vjs-menu li.vjs-menu-item:focus,\n.vjs-menu li.vjs-menu-item:hover,\n.js-focus-visible .vjs-menu li.vjs-menu-item:hover {\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n\n.vjs-menu li.vjs-selected,\n.vjs-menu li.vjs-selected:focus,\n.vjs-menu li.vjs-selected:hover,\n.js-focus-visible .vjs-menu li.vjs-selected:hover {\n  background-color: #fff;\n  color: #2B333F;\n}\n\n.video-js .vjs-menu *:not(.vjs-selected):focus:not(:focus-visible),\n.js-focus-visible .vjs-menu *:not(.vjs-selected):focus:not(.focus-visible) {\n  background: none;\n}\n\n.vjs-menu li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default;\n}\n\n.vjs-menu-button-popup .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  width: 10em;\n  left: -3em;\n  height: 0em;\n  margin-bottom: 1.5em;\n  border-top-color: rgba(43, 51, 63, 0.7);\n}\n\n.vjs-pip-window .vjs-menu-button-popup .vjs-menu {\n  left: unset;\n  right: 1em;\n}\n\n.vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  position: absolute;\n  width: 100%;\n  bottom: 1.5em;\n  max-height: 15em;\n}\n\n.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\n.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 5em;\n}\n\n.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 10em;\n}\n\n.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 14em;\n}\n\n.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\n.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\n.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 25em;\n}\n\n.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu,\n.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {\n  display: block;\n}\n\n.video-js .vjs-menu-button-inline {\n  transition: all 0.4s;\n  overflow: hidden;\n}\n\n.video-js .vjs-menu-button-inline:before {\n  width: 2.222222222em;\n}\n\n.video-js .vjs-menu-button-inline:hover,\n.video-js .vjs-menu-button-inline:focus,\n.video-js .vjs-menu-button-inline.vjs-slider-active {\n  width: 12em;\n}\n\n.vjs-menu-button-inline .vjs-menu {\n  opacity: 0;\n  height: 100%;\n  width: auto;\n  position: absolute;\n  left: 4em;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  transition: all 0.4s;\n}\n\n.vjs-menu-button-inline:hover .vjs-menu,\n.vjs-menu-button-inline:focus .vjs-menu,\n.vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  display: block;\n  opacity: 1;\n}\n\n.vjs-menu-button-inline .vjs-menu-content {\n  width: auto;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n}\n\n.video-js .vjs-control-bar {\n  display: none;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n}\n\n.vjs-has-started .vjs-control-bar,\n.vjs-audio-only-mode .vjs-control-bar {\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.1s, opacity 0.1s;\n}\n\n.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  visibility: visible;\n  opacity: 0;\n  pointer-events: none;\n  transition: visibility 1s, opacity 1s;\n}\n\n.vjs-controls-disabled .vjs-control-bar,\n.vjs-using-native-controls .vjs-control-bar,\n.vjs-error .vjs-control-bar {\n  display: none !important;\n}\n\n.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar,\n.vjs-audio-only-mode.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.video-js .vjs-control {\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 4em;\n  flex: none;\n}\n\n.video-js .vjs-control.vjs-visible-text {\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.vjs-button > .vjs-icon-placeholder:before {\n  font-size: 1.8em;\n  line-height: 1.67;\n}\n\n.vjs-button > .vjs-icon-placeholder {\n  display: block;\n}\n\n.video-js .vjs-control:focus:before,\n.video-js .vjs-control:hover:before,\n.video-js .vjs-control:focus {\n  text-shadow: 0em 0em 1em white;\n}\n\n.video-js *:not(.vjs-visible-text) > .vjs-control-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.video-js .vjs-custom-control-spacer {\n  display: none;\n}\n\n.video-js .vjs-progress-control {\n  cursor: pointer;\n  flex: auto;\n  display: flex;\n  align-items: center;\n  min-width: 4em;\n  touch-action: none;\n}\n\n.video-js .vjs-progress-control.disabled {\n  cursor: default;\n}\n\n.vjs-live .vjs-progress-control {\n  display: none;\n}\n\n.vjs-liveui .vjs-progress-control {\n  display: flex;\n  align-items: center;\n}\n\n.video-js .vjs-progress-holder {\n  flex: auto;\n  transition: all 0.2s;\n  height: 0.3em;\n}\n\n.video-js .vjs-progress-control .vjs-progress-holder {\n  margin: 0 10px;\n}\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder {\n  font-size: 1.6666666667em;\n}\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled {\n  font-size: 1em;\n}\n\n.video-js .vjs-progress-holder .vjs-play-progress,\n.video-js .vjs-progress-holder .vjs-load-progress,\n.video-js .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 0;\n}\n\n.video-js .vjs-play-progress {\n  background-color: #fff;\n}\n.video-js .vjs-play-progress:before {\n  font-size: 0.9em;\n  position: absolute;\n  right: -0.5em;\n  line-height: 0.35em;\n  z-index: 1;\n}\n\n.video-js .vjs-load-progress {\n  background: rgba(115, 133, 159, 0.5);\n}\n\n.video-js .vjs-load-progress div {\n  background: rgba(115, 133, 159, 0.75);\n}\n\n.video-js .vjs-time-tooltip {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 0.3em;\n  color: #000;\n  float: right;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  padding: 6px 8px 8px 8px;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  visibility: hidden;\n  z-index: 1;\n}\n\n.video-js .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: none;\n}\n\n.video-js .vjs-progress-control:hover .vjs-time-tooltip,\n.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: block;\n  font-size: 0.6em;\n  visibility: visible;\n}\n\n.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {\n  font-size: 1em;\n}\n\n.video-js .vjs-progress-control .vjs-mouse-display {\n  display: none;\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  z-index: 1;\n}\n\n.video-js .vjs-progress-control:hover .vjs-mouse-display {\n  display: block;\n}\n\n.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 1s, opacity 1s;\n}\n\n.vjs-mouse-display .vjs-time-tooltip {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.video-js .vjs-slider {\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 0.45em 0 0.45em;\n  /* iOS Safari */\n  -webkit-touch-callout: none;\n  /* Safari */\n  -webkit-user-select: none;\n  /* Konqueror HTML */\n  /* Firefox */\n  /* Internet Explorer/Edge */\n  /* Non-prefixed version, currently supported by Chrome and Opera */\n  user-select: none;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n\n.video-js .vjs-slider.disabled {\n  cursor: default;\n}\n\n.video-js .vjs-slider:focus {\n  text-shadow: 0em 0em 1em white;\n  box-shadow: 0 0 1em #fff;\n}\n\n.video-js .vjs-mute-control {\n  cursor: pointer;\n  flex: none;\n}\n.video-js .vjs-volume-control {\n  cursor: pointer;\n  margin-right: 1em;\n  display: flex;\n}\n\n.video-js .vjs-volume-control.vjs-volume-horizontal {\n  width: 5em;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control {\n  visibility: visible;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n  margin-left: -1px;\n}\n\n.video-js .vjs-volume-panel {\n  transition: width 1s;\n}\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control, .video-js .vjs-volume-panel:active .vjs-volume-control, .video-js .vjs-volume-panel:focus .vjs-volume-control, .video-js .vjs-volume-panel .vjs-volume-control:active, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active {\n  visibility: visible;\n  opacity: 1;\n  position: relative;\n  transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\n}\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal {\n  width: 5em;\n  height: 3em;\n  margin-right: 0;\n}\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical {\n  left: -3.5em;\n  transition: left 0s;\n}\n.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active {\n  width: 10em;\n  transition: width 0.1s;\n}\n.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only {\n  width: 4em;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  height: 8em;\n  width: 3em;\n  left: -3000em;\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\n}\n\n.video-js .vjs-volume-panel {\n  display: flex;\n}\n\n.video-js .vjs-volume-bar {\n  margin: 1.35em 0.45em;\n}\n\n.vjs-volume-bar.vjs-slider-horizontal {\n  width: 5em;\n  height: 0.3em;\n}\n\n.vjs-volume-bar.vjs-slider-vertical {\n  width: 0.3em;\n  height: 5em;\n  margin: 1.35em auto;\n}\n\n.video-js .vjs-volume-level {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n}\n.video-js .vjs-volume-level:before {\n  position: absolute;\n  font-size: 0.9em;\n  z-index: 1;\n}\n\n.vjs-slider-vertical .vjs-volume-level {\n  width: 0.3em;\n}\n.vjs-slider-vertical .vjs-volume-level:before {\n  top: -0.5em;\n  left: -0.3em;\n  z-index: 1;\n}\n\n.vjs-slider-horizontal .vjs-volume-level {\n  height: 0.3em;\n}\n.vjs-slider-horizontal .vjs-volume-level:before {\n  line-height: 0.35em;\n  right: -0.5em;\n}\n\n.video-js .vjs-volume-panel.vjs-volume-panel-vertical {\n  width: 4em;\n}\n\n.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {\n  height: 100%;\n}\n\n.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {\n  width: 100%;\n}\n\n.video-js .vjs-volume-vertical {\n  width: 3em;\n  height: 8em;\n  bottom: 8em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n}\n\n.video-js .vjs-volume-horizontal .vjs-menu {\n  left: -2em;\n}\n\n.video-js .vjs-volume-tooltip {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 0.3em;\n  color: #000;\n  float: right;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  padding: 6px 8px 8px 8px;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  visibility: hidden;\n  z-index: 1;\n}\n\n.video-js .vjs-volume-control:hover .vjs-volume-tooltip,\n.video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip {\n  display: block;\n  font-size: 1em;\n  visibility: visible;\n}\n\n.video-js .vjs-volume-vertical:hover .vjs-volume-tooltip,\n.video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip {\n  left: 1em;\n  top: -12px;\n}\n\n.video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip {\n  font-size: 1em;\n}\n\n.video-js .vjs-volume-control .vjs-mouse-display {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-color: #000;\n  z-index: 1;\n}\n\n.video-js .vjs-volume-horizontal .vjs-mouse-display {\n  width: 1px;\n  height: 100%;\n}\n\n.video-js .vjs-volume-control:hover .vjs-mouse-display {\n  display: block;\n}\n\n.video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 1s, opacity 1s;\n}\n\n.vjs-mouse-display .vjs-volume-tooltip {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.vjs-poster {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n}\n\n.vjs-has-started .vjs-poster,\n.vjs-using-native-controls .vjs-poster {\n  display: none;\n}\n\n.vjs-audio.vjs-has-started .vjs-poster,\n.vjs-has-started.vjs-audio-poster-mode .vjs-poster,\n.vjs-pip-container.vjs-has-started .vjs-poster {\n  display: block;\n}\n\n.vjs-poster img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.video-js .vjs-live-control {\n  display: flex;\n  align-items: flex-start;\n  flex: auto;\n  font-size: 1em;\n  line-height: 3em;\n}\n\n.video-js:not(.vjs-live) .vjs-live-control,\n.video-js.vjs-liveui .vjs-live-control {\n  display: none;\n}\n\n.video-js .vjs-seek-to-live-control {\n  align-items: center;\n  cursor: pointer;\n  flex: none;\n  display: inline-flex;\n  height: 100%;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  font-size: 1em;\n  line-height: 3em;\n  width: auto;\n  min-width: 4em;\n}\n\n.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,\n.video-js:not(.vjs-live) .vjs-seek-to-live-control {\n  display: none;\n}\n\n.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge {\n  cursor: auto;\n}\n\n.vjs-seek-to-live-control .vjs-icon-placeholder {\n  margin-right: 0.5em;\n  color: #888;\n}\n\n.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder {\n  color: red;\n}\n\n.video-js .vjs-time-control {\n  flex: none;\n  font-size: 1em;\n  line-height: 3em;\n  min-width: 2em;\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.vjs-live .vjs-time-control,\n.vjs-live .vjs-time-divider,\n.video-js .vjs-current-time,\n.video-js .vjs-duration {\n  display: none;\n}\n\n.vjs-time-divider {\n  display: none;\n  line-height: 3em;\n}\n\n.video-js .vjs-play-control {\n  cursor: pointer;\n}\n\n.video-js .vjs-play-control .vjs-icon-placeholder {\n  flex: none;\n}\n\n.vjs-text-track-display {\n  position: absolute;\n  bottom: 3em;\n  left: 0;\n  right: 0;\n  top: 0;\n  pointer-events: none;\n}\n\n.video-js.vjs-controls-disabled .vjs-text-track-display,\n.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {\n  bottom: 1em;\n}\n\n.video-js .vjs-text-track {\n  font-size: 1.4em;\n  text-align: center;\n  margin-bottom: 0.1em;\n}\n\n.vjs-subtitles {\n  color: #fff;\n}\n\n.vjs-captions {\n  color: #fc6;\n}\n\n.vjs-tt-cue {\n  display: block;\n}\n\nvideo::-webkit-media-text-track-display {\n  transform: translateY(-3em);\n}\n\n.video-js.vjs-controls-disabled video::-webkit-media-text-track-display,\n.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {\n  transform: translateY(-1.5em);\n}\n\n.video-js .vjs-picture-in-picture-control {\n  cursor: pointer;\n  flex: none;\n}\n.video-js.vjs-audio-only-mode .vjs-picture-in-picture-control,\n.vjs-pip-window .vjs-picture-in-picture-control {\n  display: none;\n}\n\n.video-js .vjs-fullscreen-control {\n  cursor: pointer;\n  flex: none;\n}\n.video-js.vjs-audio-only-mode .vjs-fullscreen-control,\n.vjs-pip-window .vjs-fullscreen-control {\n  display: none;\n}\n\n.vjs-playback-rate > .vjs-menu-button,\n.vjs-playback-rate .vjs-playback-rate-value {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.vjs-playback-rate .vjs-playback-rate-value {\n  pointer-events: none;\n  font-size: 1.5em;\n  line-height: 2;\n  text-align: center;\n}\n\n.vjs-playback-rate .vjs-menu {\n  width: 4em;\n  left: 0em;\n}\n\n.vjs-error .vjs-error-display .vjs-modal-dialog-content {\n  font-size: 1.4em;\n  text-align: center;\n}\n\n.vjs-error .vjs-error-display:before {\n  color: #fff;\n  content: \"X\";\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 4em;\n  left: 0;\n  line-height: 1;\n  margin-top: -0.5em;\n  position: absolute;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center;\n  top: 50%;\n  vertical-align: middle;\n  width: 100%;\n}\n\n.vjs-loading-spinner {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.85;\n  text-align: left;\n  border: 6px solid rgba(43, 51, 63, 0.7);\n  box-sizing: border-box;\n  background-clip: padding-box;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  visibility: hidden;\n}\n\n.vjs-seeking .vjs-loading-spinner,\n.vjs-waiting .vjs-loading-spinner {\n  display: block;\n  animation: vjs-spinner-show 0s linear 0.3s forwards;\n}\n\n.vjs-loading-spinner:before,\n.vjs-loading-spinner:after {\n  content: \"\";\n  position: absolute;\n  margin: -6px;\n  box-sizing: inherit;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  opacity: 1;\n  border: inherit;\n  border-color: transparent;\n  border-top-color: white;\n}\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:after {\n  animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\n}\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:before {\n  border-top-color: rgb(255, 255, 255);\n}\n\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:after {\n  border-top-color: rgb(255, 255, 255);\n  animation-delay: 0.44s;\n}\n\n@keyframes vjs-spinner-show {\n  to {\n    visibility: visible;\n  }\n}\n@keyframes vjs-spinner-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f;\n  }\n  20% {\n    border-top-color: #73859f;\n  }\n  35% {\n    border-top-color: white;\n  }\n  60% {\n    border-top-color: #73859f;\n  }\n  100% {\n    border-top-color: #73859f;\n  }\n}\n.video-js.vjs-audio-only-mode .vjs-captions-button {\n  display: none;\n}\n\n.vjs-chapters-button .vjs-menu ul {\n  width: 24em;\n}\n\n.video-js.vjs-audio-only-mode .vjs-descriptions-button {\n  display: none;\n}\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\n  vertical-align: middle;\n  display: inline-block;\n  margin-bottom: -0.1em;\n}\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  content: \"\\f10c\";\n  font-size: 1.5em;\n  line-height: inherit;\n}\n\n.video-js.vjs-audio-only-mode .vjs-subs-caps-button {\n  display: none;\n}\n\n.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\n  vertical-align: middle;\n  display: inline-block;\n  margin-bottom: -0.1em;\n}\n\n.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  content: \" \\f12e\";\n  font-size: 1.5em;\n  line-height: inherit;\n}\n\n.video-js.vjs-layout-small .vjs-current-time,\n.video-js.vjs-layout-small .vjs-time-divider,\n.video-js.vjs-layout-small .vjs-duration,\n.video-js.vjs-layout-small .vjs-remaining-time,\n.video-js.vjs-layout-small .vjs-playback-rate,\n.video-js.vjs-layout-small .vjs-volume-control, .video-js.vjs-layout-x-small .vjs-current-time,\n.video-js.vjs-layout-x-small .vjs-time-divider,\n.video-js.vjs-layout-x-small .vjs-duration,\n.video-js.vjs-layout-x-small .vjs-remaining-time,\n.video-js.vjs-layout-x-small .vjs-playback-rate,\n.video-js.vjs-layout-x-small .vjs-volume-control, .video-js.vjs-layout-tiny .vjs-current-time,\n.video-js.vjs-layout-tiny .vjs-time-divider,\n.video-js.vjs-layout-tiny .vjs-duration,\n.video-js.vjs-layout-tiny .vjs-remaining-time,\n.video-js.vjs-layout-tiny .vjs-playback-rate,\n.video-js.vjs-layout-tiny .vjs-volume-control {\n  display: none;\n}\n.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover {\n  width: auto;\n  width: initial;\n}\n.video-js.vjs-layout-x-small .vjs-progress-control, .video-js.vjs-layout-tiny .vjs-progress-control {\n  display: none;\n}\n.video-js.vjs-layout-x-small .vjs-custom-control-spacer {\n  flex: auto;\n  display: block;\n}\n\n.vjs-modal-dialog.vjs-text-track-settings {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.75);\n  color: #fff;\n  height: 70%;\n}\n\n.vjs-text-track-settings .vjs-modal-dialog-content {\n  display: table;\n}\n\n.vjs-text-track-settings .vjs-track-settings-colors,\n.vjs-text-track-settings .vjs-track-settings-font,\n.vjs-text-track-settings .vjs-track-settings-controls {\n  display: table-cell;\n}\n\n.vjs-text-track-settings .vjs-track-settings-controls {\n  text-align: right;\n  vertical-align: bottom;\n}\n\n@supports (display: grid) {\n  .vjs-text-track-settings .vjs-modal-dialog-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    padding: 20px 24px 0px 24px;\n  }\n  .vjs-track-settings-controls .vjs-default-button {\n    margin-bottom: 20px;\n  }\n  .vjs-text-track-settings .vjs-track-settings-controls {\n    grid-column: 1/-1;\n  }\n  .vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,\n  .vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content,\n  .vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content {\n    grid-template-columns: 1fr;\n  }\n}\n.vjs-track-setting > select {\n  margin-right: 1em;\n  margin-bottom: 0.5em;\n}\n\n.vjs-text-track-settings fieldset {\n  margin: 10px;\n  border: none;\n}\n\n.vjs-text-track-settings fieldset span {\n  display: inline-block;\n  padding: 0 6px 8px;\n}\n\n.vjs-text-track-settings fieldset span > select {\n  max-width: 7.3em;\n}\n\n.vjs-text-track-settings legend {\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.vjs-text-track-settings .vjs-label {\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  margin: 0 5px 5px 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n}\n\n.vjs-track-settings-controls button:focus,\n.vjs-track-settings-controls button:active {\n  outline-style: solid;\n  outline-width: medium;\n  background-image: linear-gradient(0deg, #fff 88%, #73859f 100%);\n}\n\n.vjs-track-settings-controls button:hover {\n  color: rgba(43, 51, 63, 0.75);\n}\n\n.vjs-track-settings-controls button {\n  background-color: #fff;\n  background-image: linear-gradient(-180deg, #fff 88%, #73859f 100%);\n  color: #2B333F;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.vjs-track-settings-controls .vjs-default-button {\n  margin-right: 1em;\n}\n\n.vjs-title-bar {\n  background: rgba(0, 0, 0, 0.9);\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0) 100%);\n  font-size: 1.2em;\n  line-height: 1.5;\n  transition: opacity 0.1s;\n  padding: 0.666em 1.333em 4em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.vjs-title-bar-title,\n.vjs-title-bar-description {\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.vjs-title-bar-title {\n  font-weight: bold;\n  margin-bottom: 0.333em;\n}\n\n.vjs-playing.vjs-user-inactive .vjs-title-bar {\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.video-js .vjs-skip-forward-5 {\n  cursor: pointer;\n}\n.video-js .vjs-skip-forward-10 {\n  cursor: pointer;\n}\n.video-js .vjs-skip-forward-30 {\n  cursor: pointer;\n}\n.video-js .vjs-skip-backward-5 {\n  cursor: pointer;\n}\n.video-js .vjs-skip-backward-10 {\n  cursor: pointer;\n}\n.video-js .vjs-skip-backward-30 {\n  cursor: pointer;\n}\n@media print {\n  .video-js > *:not(.vjs-tech):not(.vjs-poster) {\n    visibility: hidden;\n  }\n}\n.vjs-resize-manager {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  z-index: -1000;\n}\n\n.js-focus-visible .video-js *:focus:not(.focus-visible) {\n  outline: none;\n}\n\n.video-js *:focus:not(:focus-visible) {\n  outline: none;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy92aWRlby5qcy9kaXN0L3ZpZGVvLWpzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscW5PQUFxbk87RUFDcm5PLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdC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QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi52anMtbW9kYWwtZGlhbG9nIC52anMtbW9kYWwtZGlhbG9nLWNvbnRlbnQsIC52aWRlby1qcyAudmpzLW1vZGFsLWRpYWxvZywgLnZqcy1idXR0b24gPiAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlLCAudmlkZW8tanMgLnZqcy1iaWctcGxheS1idXR0b24gLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udmpzLWJ1dHRvbiA+IC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsIC52aWRlby1qcyAudmpzLWJpZy1wbGF5LWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIHNyYzogdXJsKGRhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFCVWdBQXNBQUFBQUl0QUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCSFUxVkNBQUFCQ0FBQUFEc0FBQUJVSUlzbGVrOVRMeklBQUFGRUFBQUFQZ0FBQUZaUmlWMzNZMjFoY0FBQUFZUUFBQUVKQUFBRDVwNDIrVnhuYkhsbUFBQUNrQUFBRHd3QUFCZGs5Ui9XSG1obFlXUUFBQkdjQUFBQUt3QUFBRFluOGtTbmFHaGxZUUFBRWNnQUFBQWRBQUFBSkErUkNMMW9iWFI0QUFBUjZBQUFBQk1BQUFDOFE0NEFBR3h2WTJFQUFCSDhBQUFBWUFBQUFHQjdTSUhHYldGNGNBQUFFbHdBQUFBZkFBQUFJQUZBQUk5dVlXMWxBQUFTZkFBQUFTVUFBQUlLMWNmMW9IQnZjM1FBQUJPa0FBQUJmQUFBQW5YZEZxaDFlSnhqWUdSZ1lPQmlNR0N3WTJCeWNmTUpZZURMU1N6Slk1QmlZR0dBQUpBOE1wc3hKek05a1lFRHhnUEtzWUJwRGlCbWc0Z0NBQ1k3QlVnQWVKeGpZR1I3eERpQmdaV0JnYVdRNVJrREE4TXZDTTBjd3hET2VJNkJnWW1CbFprQkt3aEljMDFoY1BqSStGR1BIY1JkeUE0UlpnUVJBRGJaQ3ljQUFIaWM3ZFBYYmNNd0FFWFJLMXZ1dmZmZW03NDlYQWJLVjNiakJBNmZYc2FJZ01NTEVXb1FKYUFFRktObmxFTHlRNEsyN3ppYjVQTkY2dmw4eWxkK1RLcjVrSDArY1V3MHh2MDBId3Z4MkRSZXNVeUZLclY0WG9NbUxkcDA2TktqejRBaEk4Wk1tREpqem9JbEs5WnMyTEpqejRFako4NWN1SExqemlQZS8wVVdMMTdtZjJ0cUtMei85aks5Zjh0WHBHQ29SZFBLaHRTMFJxRmtXdlZRTnRTS29WWU50V2FvZGRQWEVCcUcyalE5WFdnWmF0dFFPNGJhTmRTZW9mWU5kV0NvUTBNZEdlcllVQ2VHT2pYVW1hSE9EWFZocUV0RFhSbnEybEEzaHJvMTFKMmg3ZzMxWUtoSFF6MFo2dGxRTDRaNk5kU2JvZDROOVdHb1Q5TWZIRjZHbWhuWkx4eURjUk1BQUFCNG5KMVlDMWdVVjVhdWM2dXJDbXhFR3JxNlZSRDZBVFFQNWRIUEtLOEdSSXlvS0Fwb0VCVURBaUd6R21kVWZLTlJNNHFMWnJVWmRHS2NHTi9HWkpLZDBTeU9XVGJmYm1aMk54cXpNNUl4UnROWmQ3OHZ3WWxKZHRSRW9PN3N1ZFZOcTZQbW14bUtxcnFQVStlZWUxNzNQODBCaDM5Q3U5RE9FWTRESFpCSzNpMjBEL1FSTGNmeGJFNXNFVnR3THBaemNsdzRpYkZJa1NDSlVjWjRNQnBNbm56d3VLTnNHV0JMNWkzcXk2a08yZFZwdlVwS2JrQVA5ZnE2MnJkZUdKK1RNLzdDMW5iSXV0ZnVXcldrNWNpNHpNeHhSMXFXL04rOUpzbUNHWGo5VktXaEZ4LzZ0ci9uejc4SU5EbTJDOXlQRi9mRGN4THV5S3hMQloxWkJ6MlFUaStSU2tpSDVSckRRSi9HZ0dRYWRYOW0wWVNVUnM3R3BTRzkwNVpzazQxdWoxNHl1bDFPdGllWjdRVWs1R1JHL1lpUzdQWVlQU0FaTlJlZDlzcTMrYk9wejAwcktiN3BlL1pFWnZiQUx4WkFIVDNBRm9IOEdYUDNydDY3UUZuNDBrdDhXMTNGakxURGI0OGMrZlNpNS83aDBQNGRMNXl6N0RQdGJtZ21ZeGZRQTlSTDIrRU9mVGN2ZHArMXZtdUJwdk9sbDFBczFTNmFrMEl2SnpDN3NLV0pGdEpnQmQydVdjZyswWnlnN2R6UWZoY2pYUmdYR1pSZjUvYTRBNThJRFU3NzdObDI1MkFVazRtMkJ5UlJqcVROcUlEQ0VKZUFuVTNpQ0Z3cmtyTndYRXpnNHlGZXZCd3lwenhrY1grQUlmazNWRUtsM1htV2JUODc4OFN6dnB2RkphaU9lekw2UXl1U3I5Vk5mOTdjc051MHozTHVoUjB3QVRVeFpBZlZCd1ZPeStuUUZoeFlkV2FYbFhlNEhDNHpXR1d6enNyTER0bWhJOXBPV09IdjdQVFQ3WHliSDFaMCt2MmQ1QWJkM2ttRytUc0gyM0NTL0t3VHh4L0prekV3eDZqY1FPVWM0MkxMd0hKL0o5M3VaOXlnaDNIdVpHd3FzWTlkV0RIUTU4ZHhOcXlxS1JRVFlkeHdUdWJpT1NzM0ZpTURrcTBXU1pRZ0NUMEdCRE9nMmx4T0FkMUZsUFZHczRBS0JBY1lISGFQMndQa0hhaXZtTEY1ellxbklacnZjSHg1Z040ay82dGNoTlcxRHRkZ05MMktyeEVrUy9rZm5JSG9WbnAxVmptanBUZjVyMGxUekxqMG1kUzI4dFgrWEdvclUzNjRlTVBtbldWbDhKMzZubEtHdzNDWmhqRWl1TXc4aDhtS3ZoR0QrNC9sRWxCV2pBaExKTWc2ZlR3NHpQWjhjT21jR1FCbTJReG1sMW5BbTEzQ3BZR3ExSktVbEpKVXpRbjFQVEFPMG1ndjZWTU1wQS9EdVJmU1dFdTRsREl4ZGJBdGRXSUt2bm4yVms3NjZDV2Z6OWZwWTBzSC9VcGRQNTByZnN6YVZwZFZSbXZJZWpFZExNazQ1czRCdTBFV0hqZU95U21GeVpTaU1haHZaZE5TbjI5cGVvSS9ZZXhZZktRVExldXJUWFh3RVZMZVNmSW5UV0hra01hZVV4N3NCdk9DU1RTajNBbGNLamZ1ZXlTMzZ0Q3JYRGxnUnRGMGV0RnE5amhjMWtmS3VCVC9Pd01yMEY0VVVUVGgxQU4wZzIwK0gvU2NQY3NJRXNZdTlkL3pONVBtanByUHROd0kxWlpjREs2aUM5N01janAyeTJhWDM2ZitRYnBHSHJnUnVIbFhKK1pmNlBGUkwydVFTcDh2eEhlRjJJb1JiOFJkMnJoTXpzTnhTUm1FdUtLNEpGbmtvamhNY3g2anpxSHpHTUdGY1crTWhCajBiaGY2Y293Tis0NUk0TEh2d1Q2ZnRldTdNNDJ3R1JJL3B4Y2c2L01aZEV2dDFVMVhhdWxIRlh1TG1xb3YvTXVrdlJWTDM1L2IzT0RNMSs0YVBqdHplSzd6bVVrVjJoM0RONTRIYVE5R3pKdnhIUmI2S3MyZ0I4MWZ3cXJhVCtBN0d2WkpyUkxSb2ZVNkcwdXJOTCt6RnczdjBGYVZERnhzS0VaVzU2RjMxcjZpcDZ2T0wrRkNPYkJQdUlNUmlYbGQ5UmFNZEx6UklPR2hQZXkyVDl2QS8zNURtWlBLOUlXYVQ5ZC9XZ09HTWllWXFKL2R6akxJaFpVMTE4Z2J5c3hyTlVHZWZ4RDZVTy9oeU5ObGxwRlRPSWJ4MzJrU0ZRY3Rud2VWNVB4VE1ITGpScWlBTitmUUU5Z0wrWHk1V0I2TU9TNEdKSnVZYkRVSGhjS0RoSEdSYkx6T3Bqc2pkTTEraXdBWkxHZWllZWhBQ1gyaGhJN1NqSy9aVVROcnZWamUzMVR4SmlGQkdZVmlXRmtDbjlQTWVYOWZTNnFWYnpmQ2o0Zk9DVHpEbnVXeTJjNHhBN21kTmtBM1JTOUZIMlZlcXpkQ0JsaXh4YnpYanZrSFUxSThCT1lGYjFwWnZQSUhTU0lqNHN2VDh4cHpjeHRYTitaS3lqZER2YnowOG5paUYzUHFWOVRuNU5TVDh2ZzQ4TVRhWThFNXhxU1NJc1dvV0hvK0x0QXp4ZEgvR0RVeXAzN0NCRVlmc28wNEYvTmxNVGNESlVUcEVDTFkwSEZHUUhJbUU4eHNFVWRnbnJRbGl4SXZHaEpBMUJ2eHBESEd4RU1CWUZlTk9IY0JKbFNqd2UySmNTZmJCRXNHT1BQQkhnLzZTQkJPQ3NMTHcwU3BVeG9kMFoxYkZNZkxrYlEzVWlaeEV5ZDBEeDh0K1NSQnUxOFE5bXNGYkk0ZTNwMVRIRWZrU0VoN2tFSjVvclIxMHFUV0R2YmdQV241YVd2Q1l5T0Fqd2dYeWpKaTM0dU1qbzU4TDI1Y21SQWVRWldJMlBBMVFRTHNQRVNBSDhXR0Z3Wlo0U1BvUjczQkhQeklQTUpqOUFyZUJ6S1Vtckg0dG9kVDE4QU52aTFvYzNZR2pVVC8waitFeFV3cThQSTlCTGFDUUlwdmV3d1l1MmV2QUcvVm8vNWF2UGRZN28rQmVtTExYdzN5K0Fka3pQOWJwSXhCMXdtNUVZcThmZXNIYlBFUHRtNkhySHZ0eDRqY0dQUjhmRERwa1pCZWZJakI0NlFubFVOUmx0djRaL3BPL0o2ZHhFamhZQXRtb01lcStHb3p2VVZ2TllPVzNtNkdDSWhvcHJjZnI5N0I4QWNJUVlzZkQ4bGpVdkdOanZrcnBqMEVUQTQ4Wk1JeENlcXNSSXNRQUxFMGdpMkdCK2dsU09mYk9qVzNHU0JNOXlQcTgvcnBKWHJKRHowQlB4VjZ4ZE40dWlDR0RRZWQzV2hnRmtCVVpFRnNtZXl5QnB6WHJtN1VHVEJaRzhMaDVhdWJGdWZrNWVVc2JyckZHcjdNY1lkYmx0eGEwbktZcVJLYlFqdmlrWFlrVEdNMGYyeHV5TTNMeTIxb1huV2Z2ZjZJMUJtWndmaDdFV1dJWXNnMm5IaHNEaE9uY3poSmNtSTZlQkFteTNqWjNSaUptS1FSL0pBOTlGY3dzZmFWYk5ERHlpMXJMOU5QajloZm82MXdqTTZCanpPTGlqTHBlVGdrL3BMK2lwNnRmWVd1cHplT2dQbnkydGNVdTlKLzltaHhKbGd5aTk4NU5GUmJ2Q1Zld1hVTlhMSmFXMFJ4WnF0Ull0bmZZZGNZb21YUVdkbkpIUUEzamlFRWtlVFFXY1d4ZERQOUl2dlZXdm8yVEs1NTNYRU1FcStzNjkvUURVMVE3cDB6eHdzbTlxUzM3OXdocjhOSTJQSnFMVXlHeWZOZVgzZUZmbkpVMlUrdUhSOWNWVjFJcWd1cnF3dVY0NFhWcDBoMnFONTVYNVhKd3RrNTl5UDBJWnVIcnFCT0JJdUlZaGtjb1Q2S3g3OVB1MkhTL0lQWklNT3FMV3MvcHRlT09rNE5QZ0ViNlFBSWRBUHN5Wms1TXdkK3dWYUhNZXhKdjcxOVc3eEN1MmwzN1VHNmx2WWRCY3ZIYTA4cDg5NzQxemQ2M3BoVFJHcUw1Z2dvNlNsdmRiV1h6Q3FzUHE3OE5uU3U3d25LeTJITlpiVm9SQ0k3VUpFT3lSaitzUEUwMDJ0T09ZN1FhNWZYYm9GV2tMTmVxWVVTWlJvY3A5WHdTVVp4Y1FaOUh3NkxWMnBPb1ZtdkhRRURiR0lFTkVHNWk2YkxnTVNNNG44K0ZOTFR0QWRzOTlEYVdFdmdjZjRvNVN5WWU5eCtrRjYvdEdvVFBBZFJtUy9YUUlFeS8vUXhLQzJvcWlvQUkzdFM1YXV2eEN0elQ2eTZSSzhmaENoWWN3Q0phTUpoeGMwdnFTeFEvcW1nc3JLQWxCWlVIbGF1aGVUcHZkOXVqNURuTHpKY3Q2cWZxNWZYYllIVklHY2ZySVZKaWhiYVZMdTF3VzdWYnM4ekswQThlOUp2YjkxUzljVk1qUHJhekQ2Z3BmZVpUWHpZYkNGTWNwcFZSc0dNcHA1NU9XZ3gxLzNKZUF4VzFZN0FPUmdNL20zcldyc2RMa1FWbUVWU1UxNmNYL2U3dXZrdnBxUmlRc0cwNlhKMHQ2NFRmK2wwbkcxZHQwMjVneU9JWmx2cTV1OUtTVTFOMlRXL3JzV25uTVJQeVREa2N0Ymh2SWNOdllJWFd5THpkd1lMb1llc1ViYVFHNGlLMmNXTzJnZHBlVVlMcUREME1VVE9QaERJR25aRXM1OHlBclI4NkZ6bnVXRXNVNFlEaTJ4MjZkQTRrbGtuOFFhNnZoazJRVWZYNEp4bS9uZ1g5cjdvZ24xZG1sbXdxWm11aHh0ZGc5WE4vREVjVWdxYis5aE15TmFuc2ZhUUVUMm1jUk9DbUdFTVZxeG01dStoNmtOMk1Pd2dxeWtWMndIOXlRRzlEdlZGVTM4UG9nYWY0RlZ1RTYyS0kvb0owMlJEZFdXMnc1ZHFRd1UvOCtOMXExRGx2c0w4NjN1NjFLTEU3eC9vOHcwVkpRTS9ZL1NRM3VuSXJxeHVlRWExQnFUNVZGTnNPN3AzOS9VQzc3MWE3N1Jvd3BhS2U5bnZKUUlUMVBvZzVMR3g4WGJsQkttQ05HVGYzeE1vZ0FRdlBuejlQWUtYLzA4c1ZEVEcxT0tVbE9MVWdTL1VhWnRtMU5BYVlUc2w3aTlaUStMNk80UmwwT0dhNTc3THVXdmMrQyt4OTYvdlloMGxMQnVNKzdYd0kvZFRMdGRUN3Y0ZDZyUlRXRG5rdTBJQnJxRm5aNWJWSXFLUDhsYXNKbGl0aFduYUxoVHNyOHFGSkJ1bEYvNzBwNHVuZG91MzZIZVRKNStqdjFmQ3liZVE4bkgzK1h2NmFFTmN6bU9GbGFiK2hxTURnMXJMT3QxMkErdGlVRnJZRHdRNmMzUlVKcDYwMW56ZWdUTlg2V2xZQUkyelNVVjk0NUY2elU1NlptWlZRYVdzcFdjSUFEeEo5R21salFVbkwycDJEcHI1VDhIKzVLSkZ1K3ZxQnE4cXZ5SFJ6U3RMSFBFTzVTUFlDVjluWmUweVpUMlJjSDBvSHZlZ1N6TkVKMG9HV1U4aVFXTTEyZGdQRXVnbmdWY2VHSXdaZ1BGcDBCaVQxYTBhM1I1UmNvdDdpaGZBMUovMjB2OTZqWDd6bVRYOXM1ODNIMGt3eDZXbkxkMDljWHJSOUxHcm9PYTlzSE5iZHl6OHdjS2s1bHFoYVZGSlpOd21xdHc4ODRNWE5kdkp1anBCYTN4enVTYVpIOXN4YTA2Wjd4K0hKU2R1UGJkWUh2L0RnbUVoZmJlaHZsbUdON0pVa2NHNzhHRE0xMkNleUZGVFBOcVZlTnhDMWd6anorYzJuVm82M1h4czhyS0pXWG9CSk0wdG1FYmZHbTRxenBvT0gzeHB6UWZ5eEx6VzFnbkU5TkhvNnRvbDFlTUVpYzRaVlByam5WaTBrcUFlMnNRMmJncXVwU2NhcThXR2xVV2dXSEk1MVNLSmwvVVlUNnpjY05zQ1NrQnRpVlpMc2llZnVGU0RZVDNGaThaazdFVW5talRSWXRzRmV1RERKUzA1TVc3OU0zbXIzbWxhK2Q4ZHphYzMxS1RQbUJZZkZpWVNVZWY0OFBoUGptOXJ5WnNTR1paa2ROdnpxMFk5cmROY3dEcTVEZzVDM1FXKzdVTjY0SUtwdHZTM3R2SGJ2dTVjOXB2MUV4YXUyMXJjOUxJcHdwUXdValRxODU3NnllVkR6NSs0V1oxblhUNDN3VjYwclBMSmJEcC9Va3NOclAzaVEyU0E2M1BzdDA1OGdPWURiaFJuUlV3OGwvc1J0NEhieFB6TzRXWXBJbkNwdVZnU2JWaDZKWHV3bm5KbmdLVFRDd2FQV21HNVhiaHBtMVUwWXQzRnlCR3BHWWVtUE03N3AyVEQ5MDRKamdKMlFGcEZMZVlwR3g4WDE1UXgxWmszMXA1a2k5WkxVdVhFMGxtdUpsY2FrSk1WTGVGUzFpSXZyQjhkclkwYWxvaWxha3FDWnd6d1JPUnR4bGd3eFM0SVRoZ2dKZDRURHhvaWFBSVQ4MGZGUEdyQ1BQcnUrcHVGbjUwNFAveWJyNGloQS82ZEtBU0xzaEVKaWM3eEU4dG16dTNLekE3VEFCQmU4eTVmTmJXbzNpbFFuL1N1RktNMTZiMmw1Yk9lYXlxZkdoWW1oSXVsVStmVk5EZFdWdjROTXpYMTBNQkh5UFI1dWhXVXU4RDlQMVZuSU10NG5HTmdaR0JnQU9KLzFiZjY0dmx0dmpKd3N6T0F3QU9sbXF2SU5FYy9XSnlEZ1FsRUFRQStkZ25qQUhpY1kyQmtZR0JuQUFHT1BnYUcvLzg1K2hrWUdWQ0JQZ0JHSndOa0FBQUFlSnhqWUdCZ1lCL0VtS01QdHh3QWhnNEIwZ0FBQUFBQUFBNEFhQUIrQU13QTRBRUNBVUlCYkFHWUFlNENMZ0tLQXRBQy9BTmlBNHdEcUFQZ0JEQUVzQVRhQlFnRldnWEFCZ2dHTGdad0Jxd0c5Z2RPQjRvSDBnZ3FDSEFJaGdpY0NNZ0pKQWxXQ1lnSnJBbnlDa0FLZGdya0M3SjRuR05nWkdCZzBHZG9abUJuQUFFbUlPWUNRZ2FHLzJBK0F3QWFxd0hRQUhpY1haQk5hb05BR0laZkU1UFFDS0ZRMmxVcHMyb1hCZk96ekFFU3lES0JRSmRHUjJOUVIzUVNTRS9RRS9RRVBVVVBVSHFzdnNyWGpUTXc4M3pQdlBNTkN1QVdQM0RRREFlamRtMUdqendTN3BNbXdpNzVYbmdBRDQvQ1Evb1g0VEZlNFF0N3VNTWJPemp1RGMwRW1YQ1AvQzdjSjM4SXUrUlA0UUVlOENVOHBQOFdIbU9QWDJFUHo4N1RQbzIwMmV5Mk9qbG5RU1hWLzZhck9qV0ZtdnN6TVd0ZDZDcXdPbEtIcTZvdnljTGFXTVdWeWRYS0ZGWm5tVkZsWlU0NnRQN1Iybkk1bmNiaS9kRGtmRHRGQkEyRERYYllraEtjK1YwQnFzNVp0OUpNMUhRR0JSVG0vRWV6VG1aTkt0cGNBTXM5WXU2QUs5Y2FGNzZ6b0xXSVdjZk1HT1NrVmR1dlNXZWNocVpzejA0MEliMlBZM3VyeEJKVHpyaVQ5NWxpcHorVE4xZm1BQUFBZUp4dGtYbFQyekFReGYxQzR0aEpBd1JhanQ0SFJ5OFZNd3dmU0pIWHNRWlpjblVRK1BZb1R0d3BNK3dmMnQ5YnJXWjJuNUpCc29sNThuSmNZWUFkRERGQ2lqRXk1SmhnaWxlWVlSZDcyTWNjQnpqRWE3ekJFWTV4Z2xPOHhUdTh4d2Q4eENkOHhoZDh4VGVjNFJ3WHVNUjMvTUJQL01Kdk1QekJGWXBrMkNyK09GMGZURWdyRkkxYUhoeE43NDBLRGJFbWVKcHNXWmxWajQwcys0NWFMdXY5S2lqbGhDWFNqTFFudS9kLzRVSDZzV3VsMW1SekZ4WmVla1V1RTd6MTBtZzNxTXRNMUZHUWRkUFNyTFF5dkpSNk9hdWtJdFlYRHA2cENKcm16MHVtcWthdTVwWjJoRm1tN20rSW1HNVcydDBrWm9KWFV0UGhWbllUYmJkT0JkZUNWR3FwSmU3WEtUcVNiUks3emJkd1hmUjBVK1NWc1N0dVMzWTc2ZW02K0ljM3hZaUhVcHBjMDRObjBsTXpheTNkU3hOY3A4YXVEbFdsYUNpNDh5ZXRGRDdZOVVTc3g4N0c0NWN1b3AxWnhRVXRqTG5MNGo1M0ZPMGErNVgwOFVYcVE3TlFObzkyUjBYT3o3c3hXRW54TjJUbmVKSThBY3R0dTRRPSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLXBsYXksIC52aWRlby1qcyAudmpzLXBsYXktY29udHJvbCAudmpzLWljb24tcGxhY2Vob2xkZXIsIC52aWRlby1qcyAudmpzLWJpZy1wbGF5LWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1wbGF5OmJlZm9yZSwgLnZpZGVvLWpzIC52anMtcGxheS1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsIC52aWRlby1qcyAudmpzLWJpZy1wbGF5LWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDFcIjtcbn1cblxuLnZqcy1pY29uLXBsYXktY2lyY2xlIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1wbGF5LWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwMlwiO1xufVxuXG4udmpzLWljb24tcGF1c2UsIC52aWRlby1qcyAudmpzLXBsYXktY29udHJvbC52anMtcGxheWluZyAudmpzLWljb24tcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLXBhdXNlOmJlZm9yZSwgLnZpZGVvLWpzIC52anMtcGxheS1jb250cm9sLnZqcy1wbGF5aW5nIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwM1wiO1xufVxuXG4udmpzLWljb24tdm9sdW1lLW11dGUsIC52aWRlby1qcyAudmpzLW11dGUtY29udHJvbC52anMtdm9sLTAgLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi12b2x1bWUtbXV0ZTpiZWZvcmUsIC52aWRlby1qcyAudmpzLW11dGUtY29udHJvbC52anMtdm9sLTAgLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA0XCI7XG59XG5cbi52anMtaWNvbi12b2x1bWUtbG93LCAudmlkZW8tanMgLnZqcy1tdXRlLWNvbnRyb2wudmpzLXZvbC0xIC52anMtaWNvbi1wbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tdm9sdW1lLWxvdzpiZWZvcmUsIC52aWRlby1qcyAudmpzLW11dGUtY29udHJvbC52anMtdm9sLTEgLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XG59XG5cbi52anMtaWNvbi12b2x1bWUtbWlkLCAudmlkZW8tanMgLnZqcy1tdXRlLWNvbnRyb2wudmpzLXZvbC0yIC52anMtaWNvbi1wbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tdm9sdW1lLW1pZDpiZWZvcmUsIC52aWRlby1qcyAudmpzLW11dGUtY29udHJvbC52anMtdm9sLTIgLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA2XCI7XG59XG5cbi52anMtaWNvbi12b2x1bWUtaGlnaCwgLnZpZGVvLWpzIC52anMtbXV0ZS1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tdm9sdW1lLWhpZ2g6YmVmb3JlLCAudmlkZW8tanMgLnZqcy1tdXRlLWNvbnRyb2wgLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XG59XG5cbi52anMtaWNvbi1mdWxsc2NyZWVuLWVudGVyLCAudmlkZW8tanMgLnZqcy1mdWxsc2NyZWVuLWNvbnRyb2wgLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1mdWxsc2NyZWVuLWVudGVyOmJlZm9yZSwgLnZpZGVvLWpzIC52anMtZnVsbHNjcmVlbi1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwOFwiO1xufVxuXG4udmpzLWljb24tZnVsbHNjcmVlbi1leGl0LCAudmlkZW8tanMudmpzLWZ1bGxzY3JlZW4gLnZqcy1mdWxsc2NyZWVuLWNvbnRyb2wgLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1mdWxsc2NyZWVuLWV4aXQ6YmVmb3JlLCAudmlkZW8tanMudmpzLWZ1bGxzY3JlZW4gLnZqcy1mdWxsc2NyZWVuLWNvbnRyb2wgLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA5XCI7XG59XG5cbi52anMtaWNvbi1zcGlubmVyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1zcGlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTBhXCI7XG59XG5cbi52anMtaWNvbi1zdWJ0aXRsZXMsIC52aWRlby1qcyAudmpzLXN1YnMtY2Fwcy1idXR0b24gLnZqcy1pY29uLXBsYWNlaG9sZGVyLFxuLnZpZGVvLWpzLnZpZGVvLWpzOmxhbmcoZW4tR0IpIC52anMtc3Vicy1jYXBzLWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXIsXG4udmlkZW8tanMudmlkZW8tanM6bGFuZyhlbi1JRSkgLnZqcy1zdWJzLWNhcHMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlcixcbi52aWRlby1qcy52aWRlby1qczpsYW5nKGVuLUFVKSAudmpzLXN1YnMtY2Fwcy1idXR0b24gLnZqcy1pY29uLXBsYWNlaG9sZGVyLFxuLnZpZGVvLWpzLnZpZGVvLWpzOmxhbmcoZW4tTlopIC52anMtc3Vicy1jYXBzLWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXIsIC52aWRlby1qcyAudmpzLXN1YnRpdGxlcy1idXR0b24gLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1zdWJ0aXRsZXM6YmVmb3JlLCAudmlkZW8tanMgLnZqcy1zdWJzLWNhcHMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsXG4udmlkZW8tanMudmlkZW8tanM6bGFuZyhlbi1HQikgLnZqcy1zdWJzLWNhcHMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsXG4udmlkZW8tanMudmlkZW8tanM6bGFuZyhlbi1JRSkgLnZqcy1zdWJzLWNhcHMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsXG4udmlkZW8tanMudmlkZW8tanM6bGFuZyhlbi1BVSkgLnZqcy1zdWJzLWNhcHMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsXG4udmlkZW8tanMudmlkZW8tanM6bGFuZyhlbi1OWikgLnZqcy1zdWJzLWNhcHMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsIC52aWRlby1qcyAudmpzLXN1YnRpdGxlcy1idXR0b24gLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTBiXCI7XG59XG5cbi52anMtaWNvbi1jYXB0aW9ucywgLnZpZGVvLWpzOmxhbmcoZW4pIC52anMtc3Vicy1jYXBzLWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXIsXG4udmlkZW8tanM6bGFuZyhmci1DQSkgLnZqcy1zdWJzLWNhcHMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlciwgLnZpZGVvLWpzIC52anMtY2FwdGlvbnMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tY2FwdGlvbnM6YmVmb3JlLCAudmlkZW8tanM6bGFuZyhlbikgLnZqcy1zdWJzLWNhcHMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsXG4udmlkZW8tanM6bGFuZyhmci1DQSkgLnZqcy1zdWJzLWNhcHMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsIC52aWRlby1qcyAudmpzLWNhcHRpb25zLWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMGNcIjtcbn1cblxuLnZqcy1pY29uLWhkIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1oZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwZFwiO1xufVxuXG4udmpzLWljb24tY2hhcHRlcnMsIC52aWRlby1qcyAudmpzLWNoYXB0ZXJzLWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLWNoYXB0ZXJzOmJlZm9yZSwgLnZpZGVvLWpzIC52anMtY2hhcHRlcnMtYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwZVwiO1xufVxuXG4udmpzLWljb24tZG93bmxvYWRpbmcge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLWRvd25sb2FkaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTBmXCI7XG59XG5cbi52anMtaWNvbi1maWxlLWRvd25sb2FkIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1maWxlLWRvd25sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTEwXCI7XG59XG5cbi52anMtaWNvbi1maWxlLWRvd25sb2FkLWRvbmUge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLWZpbGUtZG93bmxvYWQtZG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExMVwiO1xufVxuXG4udmpzLWljb24tZmlsZS1kb3dubG9hZC1vZmYge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLWZpbGUtZG93bmxvYWQtb2ZmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTEyXCI7XG59XG5cbi52anMtaWNvbi1zaGFyZSB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tc2hhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMTNcIjtcbn1cblxuLnZqcy1pY29uLWNvZyB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tY29nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTE0XCI7XG59XG5cbi52anMtaWNvbi1zcXVhcmUge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExNVwiO1xufVxuXG4udmpzLWljb24tY2lyY2xlLCAudmpzLXNlZWstdG8tbGl2ZS1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlciwgLnZpZGVvLWpzIC52anMtdm9sdW1lLWxldmVsLCAudmlkZW8tanMgLnZqcy1wbGF5LXByb2dyZXNzIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1jaXJjbGU6YmVmb3JlLCAudmpzLXNlZWstdG8tbGl2ZS1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUsIC52aWRlby1qcyAudmpzLXZvbHVtZS1sZXZlbDpiZWZvcmUsIC52aWRlby1qcyAudmpzLXBsYXktcHJvZ3Jlc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMTZcIjtcbn1cblxuLnZqcy1pY29uLWNpcmNsZS1vdXRsaW5lIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1jaXJjbGUtb3V0bGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExN1wiO1xufVxuXG4udmpzLWljb24tY2lyY2xlLWlubmVyLWNpcmNsZSB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tY2lyY2xlLWlubmVyLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExOFwiO1xufVxuXG4udmpzLWljb24tY2FuY2VsLCAudmlkZW8tanMgLnZqcy1jb250cm9sLnZqcy1jbG9zZS1idXR0b24gLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1jYW5jZWw6YmVmb3JlLCAudmlkZW8tanMgLnZqcy1jb250cm9sLnZqcy1jbG9zZS1idXR0b24gLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTE5XCI7XG59XG5cbi52anMtaWNvbi1yZXBlYXQge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLXJlcGVhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExYVwiO1xufVxuXG4udmpzLWljb24tcmVwbGF5LCAudmlkZW8tanMgLnZqcy1wbGF5LWNvbnRyb2wudmpzLWVuZGVkIC52anMtaWNvbi1wbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tcmVwbGF5OmJlZm9yZSwgLnZpZGVvLWpzIC52anMtcGxheS1jb250cm9sLnZqcy1lbmRlZCAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMWJcIjtcbn1cblxuLnZqcy1pY29uLXJlcGxheS01LCAudmlkZW8tanMgLnZqcy1za2lwLWJhY2t3YXJkLTUgLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1yZXBsYXktNTpiZWZvcmUsIC52aWRlby1qcyAudmpzLXNraXAtYmFja3dhcmQtNSAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMWNcIjtcbn1cblxuLnZqcy1pY29uLXJlcGxheS0xMCwgLnZpZGVvLWpzIC52anMtc2tpcC1iYWNrd2FyZC0xMCAudmpzLWljb24tcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLXJlcGxheS0xMDpiZWZvcmUsIC52aWRlby1qcyAudmpzLXNraXAtYmFja3dhcmQtMTAgLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTFkXCI7XG59XG5cbi52anMtaWNvbi1yZXBsYXktMzAsIC52aWRlby1qcyAudmpzLXNraXAtYmFja3dhcmQtMzAgLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1yZXBsYXktMzA6YmVmb3JlLCAudmlkZW8tanMgLnZqcy1za2lwLWJhY2t3YXJkLTMwIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExZVwiO1xufVxuXG4udmpzLWljb24tZm9yd2FyZC01LCAudmlkZW8tanMgLnZqcy1za2lwLWZvcndhcmQtNSAudmpzLWljb24tcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLWZvcndhcmQtNTpiZWZvcmUsIC52aWRlby1qcyAudmpzLXNraXAtZm9yd2FyZC01IC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExZlwiO1xufVxuXG4udmpzLWljb24tZm9yd2FyZC0xMCwgLnZpZGVvLWpzIC52anMtc2tpcC1mb3J3YXJkLTEwIC52anMtaWNvbi1wbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tZm9yd2FyZC0xMDpiZWZvcmUsIC52aWRlby1qcyAudmpzLXNraXAtZm9yd2FyZC0xMCAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjBcIjtcbn1cblxuLnZqcy1pY29uLWZvcndhcmQtMzAsIC52aWRlby1qcyAudmpzLXNraXAtZm9yd2FyZC0zMCAudmpzLWljb24tcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLWZvcndhcmQtMzA6YmVmb3JlLCAudmlkZW8tanMgLnZqcy1za2lwLWZvcndhcmQtMzAgLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTIxXCI7XG59XG5cbi52anMtaWNvbi1hdWRpbywgLnZpZGVvLWpzIC52anMtYXVkaW8tYnV0dG9uIC52anMtaWNvbi1wbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tYXVkaW86YmVmb3JlLCAudmlkZW8tanMgLnZqcy1hdWRpby1idXR0b24gLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTIyXCI7XG59XG5cbi52anMtaWNvbi1uZXh0LWl0ZW0ge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLW5leHQtaXRlbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyM1wiO1xufVxuXG4udmpzLWljb24tcHJldmlvdXMtaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tcHJldmlvdXMtaXRlbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyNFwiO1xufVxuXG4udmpzLWljb24tc2h1ZmZsZSB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tc2h1ZmZsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyNVwiO1xufVxuXG4udmpzLWljb24tY2FzdCB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tY2FzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyNlwiO1xufVxuXG4udmpzLWljb24tcGljdHVyZS1pbi1waWN0dXJlLWVudGVyLCAudmlkZW8tanMgLnZqcy1waWN0dXJlLWluLXBpY3R1cmUtY29udHJvbCAudmpzLWljb24tcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLXBpY3R1cmUtaW4tcGljdHVyZS1lbnRlcjpiZWZvcmUsIC52aWRlby1qcyAudmpzLXBpY3R1cmUtaW4tcGljdHVyZS1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyN1wiO1xufVxuXG4udmpzLWljb24tcGljdHVyZS1pbi1waWN0dXJlLWV4aXQsIC52aWRlby1qcy52anMtcGljdHVyZS1pbi1waWN0dXJlIC52anMtcGljdHVyZS1pbi1waWN0dXJlLWNvbnRyb2wgLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1waWN0dXJlLWluLXBpY3R1cmUtZXhpdDpiZWZvcmUsIC52aWRlby1qcy52anMtcGljdHVyZS1pbi1waWN0dXJlIC52anMtcGljdHVyZS1pbi1waWN0dXJlLWNvbnRyb2wgLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTI4XCI7XG59XG5cbi52anMtaWNvbi1mYWNlYm9vayB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tZmFjZWJvb2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjlcIjtcbn1cblxuLnZqcy1pY29uLWxpbmtlZGluIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi1saW5rZWRpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyYVwiO1xufVxuXG4udmpzLWljb24tdHdpdHRlciB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tdHdpdHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyYlwiO1xufVxuXG4udmpzLWljb24tdHVtYmxyIHtcbiAgZm9udC1mYW1pbHk6IFZpZGVvSlM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi52anMtaWNvbi10dW1ibHI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMmNcIjtcbn1cblxuLnZqcy1pY29uLXBpbnRlcmVzdCB7XG4gIGZvbnQtZmFtaWx5OiBWaWRlb0pTO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udmpzLWljb24tcGludGVyZXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTJkXCI7XG59XG5cbi52anMtaWNvbi1hdWRpby1kZXNjcmlwdGlvbiwgLnZpZGVvLWpzIC52anMtZGVzY3JpcHRpb25zLWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnZqcy1pY29uLWF1ZGlvLWRlc2NyaXB0aW9uOmJlZm9yZSwgLnZpZGVvLWpzIC52anMtZGVzY3JpcHRpb25zLWJ1dHRvbiAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMmVcIjtcbn1cblxuLnZpZGVvLWpzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB3b3JkLWJyZWFrOiBpbml0aWFsO1xufVxuLnZpZGVvLWpzOi1tb3otZnVsbC1zY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4udmlkZW8tanM6LXdlYmtpdC1mdWxsLXNjcmVlbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4udmlkZW8tanNbdGFiaW5kZXg9XCItMVwiXSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi52aWRlby1qcyAqLFxuLnZpZGVvLWpzICo6YmVmb3JlLFxuLnZpZGVvLWpzICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4udmlkZW8tanMgdWwge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnZpZGVvLWpzLnZqcy1mbHVpZCxcbi52aWRlby1qcy52anMtMTYtOSxcbi52aWRlby1qcy52anMtNC0zLFxuLnZpZGVvLWpzLnZqcy05LTE2LFxuLnZpZGVvLWpzLnZqcy0xLTEge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4udmlkZW8tanMudmpzLWZsdWlkOm5vdCgudmpzLWF1ZGlvLW9ubHktbW9kZSksXG4udmlkZW8tanMudmpzLTE2LTk6bm90KC52anMtYXVkaW8tb25seS1tb2RlKSxcbi52aWRlby1qcy52anMtNC0zOm5vdCgudmpzLWF1ZGlvLW9ubHktbW9kZSksXG4udmlkZW8tanMudmpzLTktMTY6bm90KC52anMtYXVkaW8tb25seS1tb2RlKSxcbi52aWRlby1qcy52anMtMS0xOm5vdCgudmpzLWF1ZGlvLW9ubHktbW9kZSkge1xuICBoZWlnaHQ6IDA7XG59XG5cbi52aWRlby1qcy52anMtMTYtOTpub3QoLnZqcy1hdWRpby1vbmx5LW1vZGUpIHtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbn1cblxuLnZpZGVvLWpzLnZqcy00LTM6bm90KC52anMtYXVkaW8tb25seS1tb2RlKSB7XG4gIHBhZGRpbmctdG9wOiA3NSU7XG59XG5cbi52aWRlby1qcy52anMtOS0xNjpub3QoLnZqcy1hdWRpby1vbmx5LW1vZGUpIHtcbiAgcGFkZGluZy10b3A6IDE3Ny43Nzc3Nzc3Nzc4JTtcbn1cblxuLnZpZGVvLWpzLnZqcy0xLTE6bm90KC52anMtYXVkaW8tb25seS1tb2RlKSB7XG4gIHBhZGRpbmctdG9wOiAxMDAlO1xufVxuXG4udmlkZW8tanMudmpzLWZpbGw6bm90KC52anMtYXVkaW8tb25seS1tb2RlKSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52aWRlby1qcyAudmpzLXRlY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnZpZGVvLWpzLnZqcy1hdWRpby1vbmx5LW1vZGUgLnZqcy10ZWNoIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYm9keS52anMtZnVsbC13aW5kb3csXG5ib2R5LnZqcy1waXAtd2luZG93IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52anMtZnVsbC13aW5kb3cgLnZpZGVvLWpzLnZqcy1mdWxsc2NyZWVuLFxuYm9keS52anMtcGlwLXdpbmRvdyAudmlkZW8tanMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwMDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLnZpZGVvLWpzLnZqcy1mdWxsc2NyZWVuOm5vdCgudmpzLWlvcy1uYXRpdmUtZnMpLFxuYm9keS52anMtcGlwLXdpbmRvdyAudmlkZW8tanMge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLnZpZGVvLWpzLnZqcy1mdWxsc2NyZWVuLnZqcy11c2VyLWluYWN0aXZlIHtcbiAgY3Vyc29yOiBub25lO1xufVxuXG4udmpzLXBpcC1jb250YWluZXIgLnZqcy1waXAtdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udmpzLWxheW91dC10aW55LnZqcy1waXAtY29udGFpbmVyIC52anMtcGlwLXRleHQsXG4udmpzLWxheW91dC14LXNtYWxsLnZqcy1waXAtY29udGFpbmVyIC52anMtcGlwLXRleHQsXG4udmpzLWxheW91dC1zbWFsbC52anMtcGlwLWNvbnRhaW5lciAudmpzLXBpcC10ZXh0IHtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG4udmpzLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnZqcy1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udmlkZW8tanMgLnZqcy1vZmZzY3JlZW4ge1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogLTk5OTlweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxcHg7XG59XG5cbi52anMtbG9jay1zaG93aW5nIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi52anMtbm8tanMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi52anMtbm8tanMgYSxcbi52anMtbm8tanMgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICM2NkE4Q0M7XG59XG5cbi52aWRlby1qcyAudmpzLWJpZy1wbGF5LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGhlaWdodDogMS42MzMzMmVtO1xuICB3aWR0aDogM2VtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAtMC44MTY2NmVtO1xuICBtYXJnaW4tbGVmdDogLTEuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMC4wNjY2NmVtIHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQjMzM0Y7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDUxLCA2MywgMC43KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLnZpZGVvLWpzOmhvdmVyIC52anMtYmlnLXBsYXktYnV0dG9uLFxuLnZpZGVvLWpzIC52anMtYmlnLXBsYXktYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM4NTlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTMzLCAxNTksIDAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwcztcbn1cblxuLnZqcy1jb250cm9scy1kaXNhYmxlZCAudmpzLWJpZy1wbGF5LWJ1dHRvbixcbi52anMtaGFzLXN0YXJ0ZWQgLnZqcy1iaWctcGxheS1idXR0b24sXG4udmpzLXVzaW5nLW5hdGl2ZS1jb250cm9scyAudmpzLWJpZy1wbGF5LWJ1dHRvbixcbi52anMtZXJyb3IgLnZqcy1iaWctcGxheS1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmpzLWhhcy1zdGFydGVkLnZqcy1wYXVzZWQudmpzLXNob3ctYmlnLXBsYXktYnV0dG9uLW9uLXBhdXNlIC52anMtYmlnLXBsYXktYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52aWRlby1qcyBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4udmpzLWNvbnRyb2wgLnZqcy1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udmlkZW8tanMgLnZqcy1jb250cm9sLnZqcy1jbG9zZS1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogM2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDAuNWVtO1xuICB6LWluZGV4OiAyO1xufVxuLnZpZGVvLWpzIC52anMtbW9kYWwtZGlhbG9nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnZpZGVvLWpzIC52anMtbW9kYWwtZGlhbG9nID4gKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi52anMtbW9kYWwtZGlhbG9nIC52anMtbW9kYWwtZGlhbG9nLWNvbnRlbnQge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi52anMtbWVudS1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52anMtbWVudS1idXR0b24udmpzLWRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udmpzLXdvcmtpbmdob3ZlciAudmpzLW1lbnUtYnV0dG9uLnZqcy1kaXNhYmxlZDpob3ZlciAudmpzLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmpzLW1lbnUgLnZqcy1tZW51LWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi52anMtbWVudSAudmpzLW1lbnUtY29udGVudCA+ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udmpzLXNjcnViYmluZyAudmpzLWNvbnRyb2wudmpzLW1lbnUtYnV0dG9uOmhvdmVyIC52anMtbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52anMtbWVudSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC4yZW0gMDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbi52anMtbWVudSBsaS52anMtbWVudS1pdGVtOmZvY3VzLFxuLnZqcy1tZW51IGxpLnZqcy1tZW51LWl0ZW06aG92ZXIsXG4uanMtZm9jdXMtdmlzaWJsZSAudmpzLW1lbnUgbGkudmpzLW1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Mzg1OWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMzMsIDE1OSwgMC41KTtcbn1cblxuLnZqcy1tZW51IGxpLnZqcy1zZWxlY3RlZCxcbi52anMtbWVudSBsaS52anMtc2VsZWN0ZWQ6Zm9jdXMsXG4udmpzLW1lbnUgbGkudmpzLXNlbGVjdGVkOmhvdmVyLFxuLmpzLWZvY3VzLXZpc2libGUgLnZqcy1tZW51IGxpLnZqcy1zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMkIzMzNGO1xufVxuXG4udmlkZW8tanMgLnZqcy1tZW51ICo6bm90KC52anMtc2VsZWN0ZWQpOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSksXG4uanMtZm9jdXMtdmlzaWJsZSAudmpzLW1lbnUgKjpub3QoLnZqcy1zZWxlY3RlZCk6Zm9jdXM6bm90KC5mb2N1cy12aXNpYmxlKSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi52anMtbWVudSBsaS52anMtbWVudS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDAuM2VtIDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi52anMtbWVudS1idXR0b24tcG9wdXAgLnZqcy1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMGVtO1xuICBsZWZ0OiAtM2VtO1xuICBoZWlnaHQ6IDBlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoNDMsIDUxLCA2MywgMC43KTtcbn1cblxuLnZqcy1waXAtd2luZG93IC52anMtbWVudS1idXR0b24tcG9wdXAgLnZqcy1tZW51IHtcbiAgbGVmdDogdW5zZXQ7XG4gIHJpZ2h0OiAxZW07XG59XG5cbi52anMtbWVudS1idXR0b24tcG9wdXAgLnZqcy1tZW51IC52anMtbWVudS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCMzMzRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNTEsIDYzLCAwLjcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDEuNWVtO1xuICBtYXgtaGVpZ2h0OiAxNWVtO1xufVxuXG4udmpzLWxheW91dC10aW55IC52anMtbWVudS1idXR0b24tcG9wdXAgLnZqcy1tZW51IC52anMtbWVudS1jb250ZW50LFxuLnZqcy1sYXlvdXQteC1zbWFsbCAudmpzLW1lbnUtYnV0dG9uLXBvcHVwIC52anMtbWVudSAudmpzLW1lbnUtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDVlbTtcbn1cblxuLnZqcy1sYXlvdXQtc21hbGwgLnZqcy1tZW51LWJ1dHRvbi1wb3B1cCAudmpzLW1lbnUgLnZqcy1tZW51LWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAxMGVtO1xufVxuXG4udmpzLWxheW91dC1tZWRpdW0gLnZqcy1tZW51LWJ1dHRvbi1wb3B1cCAudmpzLW1lbnUgLnZqcy1tZW51LWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAxNGVtO1xufVxuXG4udmpzLWxheW91dC1sYXJnZSAudmpzLW1lbnUtYnV0dG9uLXBvcHVwIC52anMtbWVudSAudmpzLW1lbnUtY29udGVudCxcbi52anMtbGF5b3V0LXgtbGFyZ2UgLnZqcy1tZW51LWJ1dHRvbi1wb3B1cCAudmpzLW1lbnUgLnZqcy1tZW51LWNvbnRlbnQsXG4udmpzLWxheW91dC1odWdlIC52anMtbWVudS1idXR0b24tcG9wdXAgLnZqcy1tZW51IC52anMtbWVudS1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMjVlbTtcbn1cblxuLnZqcy13b3JraW5naG92ZXIgLnZqcy1tZW51LWJ1dHRvbi1wb3B1cC52anMtaG92ZXIgLnZqcy1tZW51LFxuLnZqcy1tZW51LWJ1dHRvbi1wb3B1cCAudmpzLW1lbnUudmpzLWxvY2stc2hvd2luZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmlkZW8tanMgLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZpZGVvLWpzIC52anMtbWVudS1idXR0b24taW5saW5lOmJlZm9yZSB7XG4gIHdpZHRoOiAyLjIyMjIyMjIyMmVtO1xufVxuXG4udmlkZW8tanMgLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmU6aG92ZXIsXG4udmlkZW8tanMgLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmU6Zm9jdXMsXG4udmlkZW8tanMgLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmUudmpzLXNsaWRlci1hY3RpdmUge1xuICB3aWR0aDogMTJlbTtcbn1cblxuLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmUgLnZqcy1tZW51IHtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0ZW07XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmU6aG92ZXIgLnZqcy1tZW51LFxuLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmU6Zm9jdXMgLnZqcy1tZW51LFxuLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmUudmpzLXNsaWRlci1hY3RpdmUgLnZqcy1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52anMtbWVudS1idXR0b24taW5saW5lIC52anMtbWVudS1jb250ZW50IHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlkZW8tanMgLnZqcy1jb250cm9sLWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIzMzNGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA1MSwgNjMsIDAuNyk7XG59XG5cbi52anMtaGFzLXN0YXJ0ZWQgLnZqcy1jb250cm9sLWJhcixcbi52anMtYXVkaW8tb25seS1tb2RlIC52anMtY29udHJvbC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMXMsIG9wYWNpdHkgMC4xcztcbn1cblxuLnZqcy1oYXMtc3RhcnRlZC52anMtdXNlci1pbmFjdGl2ZS52anMtcGxheWluZyAudmpzLWNvbnRyb2wtYmFyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMXMsIG9wYWNpdHkgMXM7XG59XG5cbi52anMtY29udHJvbHMtZGlzYWJsZWQgLnZqcy1jb250cm9sLWJhcixcbi52anMtdXNpbmctbmF0aXZlLWNvbnRyb2xzIC52anMtY29udHJvbC1iYXIsXG4udmpzLWVycm9yIC52anMtY29udHJvbC1iYXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi52anMtYXVkaW8udmpzLWhhcy1zdGFydGVkLnZqcy11c2VyLWluYWN0aXZlLnZqcy1wbGF5aW5nIC52anMtY29udHJvbC1iYXIsXG4udmpzLWF1ZGlvLW9ubHktbW9kZS52anMtaGFzLXN0YXJ0ZWQudmpzLXVzZXItaW5hY3RpdmUudmpzLXBsYXlpbmcgLnZqcy1jb250cm9sLWJhciB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4udmlkZW8tanMgLnZqcy1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNGVtO1xuICBmbGV4OiBub25lO1xufVxuXG4udmlkZW8tanMgLnZqcy1jb250cm9sLnZqcy12aXNpYmxlLXRleHQge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cblxuLnZqcy1idXR0b24gPiAudmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG59XG5cbi52anMtYnV0dG9uID4gLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52aWRlby1qcyAudmpzLWNvbnRyb2w6Zm9jdXM6YmVmb3JlLFxuLnZpZGVvLWpzIC52anMtY29udHJvbDpob3ZlcjpiZWZvcmUsXG4udmlkZW8tanMgLnZqcy1jb250cm9sOmZvY3VzIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMWVtIHdoaXRlO1xufVxuXG4udmlkZW8tanMgKjpub3QoLnZqcy12aXNpYmxlLXRleHQpID4gLnZqcy1jb250cm9sLXRleHQge1xuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIGhlaWdodDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG59XG5cbi52aWRlby1qcyAudmpzLWN1c3RvbS1jb250cm9sLXNwYWNlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aWRlby1qcyAudmpzLXByb2dyZXNzLWNvbnRyb2wge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogNGVtO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG59XG5cbi52aWRlby1qcyAudmpzLXByb2dyZXNzLWNvbnRyb2wuZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi52anMtbGl2ZSAudmpzLXByb2dyZXNzLWNvbnRyb2wge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmpzLWxpdmV1aSAudmpzLXByb2dyZXNzLWNvbnRyb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udmlkZW8tanMgLnZqcy1wcm9ncmVzcy1ob2xkZXIge1xuICBmbGV4OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgaGVpZ2h0OiAwLjNlbTtcbn1cblxuLnZpZGVvLWpzIC52anMtcHJvZ3Jlc3MtY29udHJvbCAudmpzLXByb2dyZXNzLWhvbGRlciB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4udmlkZW8tanMgLnZqcy1wcm9ncmVzcy1jb250cm9sOmhvdmVyIC52anMtcHJvZ3Jlc3MtaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxLjY2NjY2NjY2NjdlbTtcbn1cblxuLnZpZGVvLWpzIC52anMtcHJvZ3Jlc3MtY29udHJvbDpob3ZlciAudmpzLXByb2dyZXNzLWhvbGRlci5kaXNhYmxlZCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4udmlkZW8tanMgLnZqcy1wcm9ncmVzcy1ob2xkZXIgLnZqcy1wbGF5LXByb2dyZXNzLFxuLnZpZGVvLWpzIC52anMtcHJvZ3Jlc3MtaG9sZGVyIC52anMtbG9hZC1wcm9ncmVzcyxcbi52aWRlby1qcyAudmpzLXByb2dyZXNzLWhvbGRlciAudmpzLWxvYWQtcHJvZ3Jlc3MgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4udmlkZW8tanMgLnZqcy1wbGF5LXByb2dyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi52aWRlby1qcyAudmpzLXBsYXktcHJvZ3Jlc3M6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTAuNWVtO1xuICBsaW5lLWhlaWdodDogMC4zNWVtO1xuICB6LWluZGV4OiAxO1xufVxuXG4udmlkZW8tanMgLnZqcy1sb2FkLXByb2dyZXNzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTUsIDEzMywgMTU5LCAwLjUpO1xufVxuXG4udmlkZW8tanMgLnZqcy1sb2FkLXByb2dyZXNzIGRpdiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTE1LCAxMzMsIDE1OSwgMC43NSk7XG59XG5cbi52aWRlby1qcyAudmpzLXRpbWUtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIGNvbG9yOiAjMDAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogNnB4IDhweCA4cHggOHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zLjRlbTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG4udmlkZW8tanMgLnZqcy1wcm9ncmVzcy1ob2xkZXI6Zm9jdXMgLnZqcy10aW1lLXRvb2x0aXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmlkZW8tanMgLnZqcy1wcm9ncmVzcy1jb250cm9sOmhvdmVyIC52anMtdGltZS10b29sdGlwLFxuLnZpZGVvLWpzIC52anMtcHJvZ3Jlc3MtY29udHJvbDpob3ZlciAudmpzLXByb2dyZXNzLWhvbGRlcjpmb2N1cyAudmpzLXRpbWUtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuNmVtO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4udmlkZW8tanMgLnZqcy1wcm9ncmVzcy1jb250cm9sLmRpc2FibGVkOmhvdmVyIC52anMtdGltZS10b29sdGlwIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi52aWRlby1qcyAudmpzLXByb2dyZXNzLWNvbnRyb2wgLnZqcy1tb3VzZS1kaXNwbGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi52aWRlby1qcyAudmpzLXByb2dyZXNzLWNvbnRyb2w6aG92ZXIgLnZqcy1tb3VzZS1kaXNwbGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52aWRlby1qcy52anMtdXNlci1pbmFjdGl2ZSAudmpzLXByb2dyZXNzLWNvbnRyb2wgLnZqcy1tb3VzZS1kaXNwbGF5IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFzLCBvcGFjaXR5IDFzO1xufVxuXG4udmpzLW1vdXNlLWRpc3BsYXkgLnZqcy10aW1lLXRvb2x0aXAge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4udmlkZW8tanMgLnZqcy1zbGlkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAuNDVlbSAwIDAuNDVlbTtcbiAgLyogaU9TIFNhZmFyaSAqL1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIFNhZmFyaSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAvKiBGaXJlZm94ICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczODU5ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDEzMywgMTU5LCAwLjUpO1xufVxuXG4udmlkZW8tanMgLnZqcy1zbGlkZXIuZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi52aWRlby1qcyAudmpzLXNsaWRlcjpmb2N1cyB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDFlbSB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjZmZmO1xufVxuXG4udmlkZW8tanMgLnZqcy1tdXRlLWNvbnRyb2wge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IG5vbmU7XG59XG4udmlkZW8tanMgLnZqcy12b2x1bWUtY29udHJvbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi52aWRlby1qcyAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiA1ZW07XG59XG5cbi52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbCAudmpzLXZvbHVtZS1jb250cm9sIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuXG4udmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcztcbn1cbi52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbC52anMtaG92ZXIgLnZqcy12b2x1bWUtY29udHJvbCwgLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsOmFjdGl2ZSAudmpzLXZvbHVtZS1jb250cm9sLCAudmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWw6Zm9jdXMgLnZqcy12b2x1bWUtY29udHJvbCwgLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsIC52anMtdm9sdW1lLWNvbnRyb2w6YWN0aXZlLCAudmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwudmpzLWhvdmVyIC52anMtbXV0ZS1jb250cm9sIH4gLnZqcy12b2x1bWUtY29udHJvbCwgLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsIC52anMtdm9sdW1lLWNvbnRyb2wudmpzLXNsaWRlci1hY3RpdmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4xcywgb3BhY2l0eSAwLjFzLCBoZWlnaHQgMC4xcywgd2lkdGggMC4xcywgbGVmdCAwcywgdG9wIDBzO1xufVxuLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsLnZqcy1ob3ZlciAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtaG9yaXpvbnRhbCwgLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsOmFjdGl2ZSAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtaG9yaXpvbnRhbCwgLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsOmZvY3VzIC52anMtdm9sdW1lLWNvbnRyb2wudmpzLXZvbHVtZS1ob3Jpem9udGFsLCAudmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwgLnZqcy12b2x1bWUtY29udHJvbDphY3RpdmUudmpzLXZvbHVtZS1ob3Jpem9udGFsLCAudmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwudmpzLWhvdmVyIC52anMtbXV0ZS1jb250cm9sIH4gLnZqcy12b2x1bWUtY29udHJvbC52anMtdm9sdW1lLWhvcml6b250YWwsIC52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbCAudmpzLXZvbHVtZS1jb250cm9sLnZqcy1zbGlkZXItYWN0aXZlLnZqcy12b2x1bWUtaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiA1ZW07XG4gIGhlaWdodDogM2VtO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4udmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwudmpzLWhvdmVyIC52anMtdm9sdW1lLWNvbnRyb2wudmpzLXZvbHVtZS12ZXJ0aWNhbCwgLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsOmFjdGl2ZSAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtdmVydGljYWwsIC52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbDpmb2N1cyAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtdmVydGljYWwsIC52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbCAudmpzLXZvbHVtZS1jb250cm9sOmFjdGl2ZS52anMtdm9sdW1lLXZlcnRpY2FsLCAudmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwudmpzLWhvdmVyIC52anMtbXV0ZS1jb250cm9sIH4gLnZqcy12b2x1bWUtY29udHJvbC52anMtdm9sdW1lLXZlcnRpY2FsLCAudmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwgLnZqcy12b2x1bWUtY29udHJvbC52anMtc2xpZGVyLWFjdGl2ZS52anMtdm9sdW1lLXZlcnRpY2FsIHtcbiAgbGVmdDogLTMuNWVtO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDBzO1xufVxuLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsLnZqcy12b2x1bWUtcGFuZWwtaG9yaXpvbnRhbC52anMtaG92ZXIsIC52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbC52anMtdm9sdW1lLXBhbmVsLWhvcml6b250YWw6YWN0aXZlLCAudmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwudmpzLXZvbHVtZS1wYW5lbC1ob3Jpem9udGFsLnZqcy1zbGlkZXItYWN0aXZlIHtcbiAgd2lkdGg6IDEwZW07XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMXM7XG59XG4udmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwudmpzLXZvbHVtZS1wYW5lbC1ob3Jpem9udGFsLnZqcy1tdXRlLXRvZ2dsZS1vbmx5IHtcbiAgd2lkdGg6IDRlbTtcbn1cblxuLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsIC52anMtdm9sdW1lLWNvbnRyb2wudmpzLXZvbHVtZS12ZXJ0aWNhbCB7XG4gIGhlaWdodDogOGVtO1xuICB3aWR0aDogM2VtO1xuICBsZWZ0OiAtMzAwMGVtO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFzLCBvcGFjaXR5IDFzLCBoZWlnaHQgMXMgMXMsIHdpZHRoIDFzIDFzLCBsZWZ0IDFzIDFzLCB0b3AgMXMgMXM7XG59XG5cbi52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbCAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtaG9yaXpvbnRhbCB7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMXMsIG9wYWNpdHkgMXMsIGhlaWdodCAxcyAxcywgd2lkdGggMXMsIGxlZnQgMXMgMXMsIHRvcCAxcyAxcztcbn1cblxuLnZpZGVvLWpzIC52anMtdm9sdW1lLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnZpZGVvLWpzIC52anMtdm9sdW1lLWJhciB7XG4gIG1hcmdpbjogMS4zNWVtIDAuNDVlbTtcbn1cblxuLnZqcy12b2x1bWUtYmFyLnZqcy1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiA1ZW07XG4gIGhlaWdodDogMC4zZW07XG59XG5cbi52anMtdm9sdW1lLWJhci52anMtc2xpZGVyLXZlcnRpY2FsIHtcbiAgd2lkdGg6IDAuM2VtO1xuICBoZWlnaHQ6IDVlbTtcbiAgbWFyZ2luOiAxLjM1ZW0gYXV0bztcbn1cblxuLnZpZGVvLWpzIC52anMtdm9sdW1lLWxldmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4udmlkZW8tanMgLnZqcy12b2x1bWUtbGV2ZWw6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB6LWluZGV4OiAxO1xufVxuXG4udmpzLXNsaWRlci12ZXJ0aWNhbCAudmpzLXZvbHVtZS1sZXZlbCB7XG4gIHdpZHRoOiAwLjNlbTtcbn1cbi52anMtc2xpZGVyLXZlcnRpY2FsIC52anMtdm9sdW1lLWxldmVsOmJlZm9yZSB7XG4gIHRvcDogLTAuNWVtO1xuICBsZWZ0OiAtMC4zZW07XG4gIHotaW5kZXg6IDE7XG59XG5cbi52anMtc2xpZGVyLWhvcml6b250YWwgLnZqcy12b2x1bWUtbGV2ZWwge1xuICBoZWlnaHQ6IDAuM2VtO1xufVxuLnZqcy1zbGlkZXItaG9yaXpvbnRhbCAudmpzLXZvbHVtZS1sZXZlbDpiZWZvcmUge1xuICBsaW5lLWhlaWdodDogMC4zNWVtO1xuICByaWdodDogLTAuNWVtO1xufVxuXG4udmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwudmpzLXZvbHVtZS1wYW5lbC12ZXJ0aWNhbCB7XG4gIHdpZHRoOiA0ZW07XG59XG5cbi52anMtdm9sdW1lLWJhci52anMtc2xpZGVyLXZlcnRpY2FsIC52anMtdm9sdW1lLWxldmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udmpzLXZvbHVtZS1iYXIudmpzLXNsaWRlci1ob3Jpem9udGFsIC52anMtdm9sdW1lLWxldmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52aWRlby1qcyAudmpzLXZvbHVtZS12ZXJ0aWNhbCB7XG4gIHdpZHRoOiAzZW07XG4gIGhlaWdodDogOGVtO1xuICBib3R0b206IDhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCMzMzRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNTEsIDYzLCAwLjcpO1xufVxuXG4udmlkZW8tanMgLnZqcy12b2x1bWUtaG9yaXpvbnRhbCAudmpzLW1lbnUge1xuICBsZWZ0OiAtMmVtO1xufVxuXG4udmlkZW8tanMgLnZqcy12b2x1bWUtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIGNvbG9yOiAjMDAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogNnB4IDhweCA4cHggOHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zLjRlbTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG4udmlkZW8tanMgLnZqcy12b2x1bWUtY29udHJvbDpob3ZlciAudmpzLXZvbHVtZS10b29sdGlwLFxuLnZpZGVvLWpzIC52anMtdm9sdW1lLWNvbnRyb2w6aG92ZXIgLnZqcy1wcm9ncmVzcy1ob2xkZXI6Zm9jdXMgLnZqcy12b2x1bWUtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDFlbTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnZpZGVvLWpzIC52anMtdm9sdW1lLXZlcnRpY2FsOmhvdmVyIC52anMtdm9sdW1lLXRvb2x0aXAsXG4udmlkZW8tanMgLnZqcy12b2x1bWUtdmVydGljYWw6aG92ZXIgLnZqcy1wcm9ncmVzcy1ob2xkZXI6Zm9jdXMgLnZqcy12b2x1bWUtdG9vbHRpcCB7XG4gIGxlZnQ6IDFlbTtcbiAgdG9wOiAtMTJweDtcbn1cblxuLnZpZGVvLWpzIC52anMtdm9sdW1lLWNvbnRyb2wuZGlzYWJsZWQ6aG92ZXIgLnZqcy12b2x1bWUtdG9vbHRpcCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4udmlkZW8tanMgLnZqcy12b2x1bWUtY29udHJvbCAudmpzLW1vdXNlLWRpc3BsYXkge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgei1pbmRleDogMTtcbn1cblxuLnZpZGVvLWpzIC52anMtdm9sdW1lLWhvcml6b250YWwgLnZqcy1tb3VzZS1kaXNwbGF5IHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udmlkZW8tanMgLnZqcy12b2x1bWUtY29udHJvbDpob3ZlciAudmpzLW1vdXNlLWRpc3BsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZpZGVvLWpzLnZqcy11c2VyLWluYWN0aXZlIC52anMtdm9sdW1lLWNvbnRyb2wgLnZqcy1tb3VzZS1kaXNwbGF5IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFzLCBvcGFjaXR5IDFzO1xufVxuXG4udmpzLW1vdXNlLWRpc3BsYXkgLnZqcy12b2x1bWUtdG9vbHRpcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi52anMtcG9zdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnZqcy1oYXMtc3RhcnRlZCAudmpzLXBvc3Rlcixcbi52anMtdXNpbmctbmF0aXZlLWNvbnRyb2xzIC52anMtcG9zdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZqcy1hdWRpby52anMtaGFzLXN0YXJ0ZWQgLnZqcy1wb3N0ZXIsXG4udmpzLWhhcy1zdGFydGVkLnZqcy1hdWRpby1wb3N0ZXItbW9kZSAudmpzLXBvc3Rlcixcbi52anMtcGlwLWNvbnRhaW5lci52anMtaGFzLXN0YXJ0ZWQgLnZqcy1wb3N0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZqcy1wb3N0ZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLnZpZGVvLWpzIC52anMtbGl2ZS1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogM2VtO1xufVxuXG4udmlkZW8tanM6bm90KC52anMtbGl2ZSkgLnZqcy1saXZlLWNvbnRyb2wsXG4udmlkZW8tanMudmpzLWxpdmV1aSAudmpzLWxpdmUtY29udHJvbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aWRlby1qcyAudmpzLXNlZWstdG8tbGl2ZS1jb250cm9sIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDRlbTtcbn1cblxuLnZpZGVvLWpzLnZqcy1saXZlOm5vdCgudmpzLWxpdmV1aSkgLnZqcy1zZWVrLXRvLWxpdmUtY29udHJvbCxcbi52aWRlby1qczpub3QoLnZqcy1saXZlKSAudmpzLXNlZWstdG8tbGl2ZS1jb250cm9sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZqcy1zZWVrLXRvLWxpdmUtY29udHJvbC52anMtY29udHJvbC52anMtYXQtbGl2ZS1lZGdlIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4udmpzLXNlZWstdG8tbGl2ZS1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlciB7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG4gIGNvbG9yOiAjODg4O1xufVxuXG4udmpzLXNlZWstdG8tbGl2ZS1jb250cm9sLnZqcy1jb250cm9sLnZqcy1hdC1saXZlLWVkZ2UgLnZqcy1pY29uLXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnZpZGVvLWpzIC52anMtdGltZS1jb250cm9sIHtcbiAgZmxleDogbm9uZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG4gIG1pbi13aWR0aDogMmVtO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cblxuLnZqcy1saXZlIC52anMtdGltZS1jb250cm9sLFxuLnZqcy1saXZlIC52anMtdGltZS1kaXZpZGVyLFxuLnZpZGVvLWpzIC52anMtY3VycmVudC10aW1lLFxuLnZpZGVvLWpzIC52anMtZHVyYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmpzLXRpbWUtZGl2aWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG59XG5cbi52aWRlby1qcyAudmpzLXBsYXktY29udHJvbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZpZGVvLWpzIC52anMtcGxheS1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlciB7XG4gIGZsZXg6IG5vbmU7XG59XG5cbi52anMtdGV4dC10cmFjay1kaXNwbGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDNlbTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi52aWRlby1qcy52anMtY29udHJvbHMtZGlzYWJsZWQgLnZqcy10ZXh0LXRyYWNrLWRpc3BsYXksXG4udmlkZW8tanMudmpzLXVzZXItaW5hY3RpdmUudmpzLXBsYXlpbmcgLnZqcy10ZXh0LXRyYWNrLWRpc3BsYXkge1xuICBib3R0b206IDFlbTtcbn1cblxuLnZpZGVvLWpzIC52anMtdGV4dC10cmFjayB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG59XG5cbi52anMtc3VidGl0bGVzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi52anMtY2FwdGlvbnMge1xuICBjb2xvcjogI2ZjNjtcbn1cblxuLnZqcy10dC1jdWUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudmlkZW86Oi13ZWJraXQtbWVkaWEtdGV4dC10cmFjay1kaXNwbGF5IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zZW0pO1xufVxuXG4udmlkZW8tanMudmpzLWNvbnRyb2xzLWRpc2FibGVkIHZpZGVvOjotd2Via2l0LW1lZGlhLXRleHQtdHJhY2stZGlzcGxheSxcbi52aWRlby1qcy52anMtdXNlci1pbmFjdGl2ZS52anMtcGxheWluZyB2aWRlbzo6LXdlYmtpdC1tZWRpYS10ZXh0LXRyYWNrLWRpc3BsYXkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNWVtKTtcbn1cblxuLnZpZGVvLWpzIC52anMtcGljdHVyZS1pbi1waWN0dXJlLWNvbnRyb2wge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IG5vbmU7XG59XG4udmlkZW8tanMudmpzLWF1ZGlvLW9ubHktbW9kZSAudmpzLXBpY3R1cmUtaW4tcGljdHVyZS1jb250cm9sLFxuLnZqcy1waXAtd2luZG93IC52anMtcGljdHVyZS1pbi1waWN0dXJlLWNvbnRyb2wge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmlkZW8tanMgLnZqcy1mdWxsc2NyZWVuLWNvbnRyb2wge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IG5vbmU7XG59XG4udmlkZW8tanMudmpzLWF1ZGlvLW9ubHktbW9kZSAudmpzLWZ1bGxzY3JlZW4tY29udHJvbCxcbi52anMtcGlwLXdpbmRvdyAudmpzLWZ1bGxzY3JlZW4tY29udHJvbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52anMtcGxheWJhY2stcmF0ZSA+IC52anMtbWVudS1idXR0b24sXG4udmpzLXBsYXliYWNrLXJhdGUgLnZqcy1wbGF5YmFjay1yYXRlLXZhbHVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52anMtcGxheWJhY2stcmF0ZSAudmpzLXBsYXliYWNrLXJhdGUtdmFsdWUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZqcy1wbGF5YmFjay1yYXRlIC52anMtbWVudSB7XG4gIHdpZHRoOiA0ZW07XG4gIGxlZnQ6IDBlbTtcbn1cblxuLnZqcy1lcnJvciAudmpzLWVycm9yLWRpc3BsYXkgLnZqcy1tb2RhbC1kaWFsb2ctY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZqcy1lcnJvciAudmpzLWVycm9yLWRpc3BsYXk6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IFwiWFwiO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGxlZnQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tdG9wOiAtMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1zaGFkb3c6IDAuMDVlbSAwLjA1ZW0gMC4xZW0gIzAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDUwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52anMtbG9hZGluZy1zcGlubmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0yNXB4IDAgMCAtMjVweDtcbiAgb3BhY2l0eTogMC44NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiA2cHggc29saWQgcmdiYSg0MywgNTEsIDYzLCAwLjcpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi52anMtc2Vla2luZyAudmpzLWxvYWRpbmctc3Bpbm5lcixcbi52anMtd2FpdGluZyAudmpzLWxvYWRpbmctc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbmltYXRpb246IHZqcy1zcGlubmVyLXNob3cgMHMgbGluZWFyIDAuM3MgZm9yd2FyZHM7XG59XG5cbi52anMtbG9hZGluZy1zcGlubmVyOmJlZm9yZSxcbi52anMtbG9hZGluZy1zcGlubmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IC02cHg7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogaW5oZXJpdDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG59XG5cbi52anMtc2Vla2luZyAudmpzLWxvYWRpbmctc3Bpbm5lcjpiZWZvcmUsXG4udmpzLXNlZWtpbmcgLnZqcy1sb2FkaW5nLXNwaW5uZXI6YWZ0ZXIsXG4udmpzLXdhaXRpbmcgLnZqcy1sb2FkaW5nLXNwaW5uZXI6YmVmb3JlLFxuLnZqcy13YWl0aW5nIC52anMtbG9hZGluZy1zcGlubmVyOmFmdGVyIHtcbiAgYW5pbWF0aW9uOiB2anMtc3Bpbm5lci1zcGluIDEuMXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4yLCAwLCAwLjgpIGluZmluaXRlLCB2anMtc3Bpbm5lci1mYWRlIDEuMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4udmpzLXNlZWtpbmcgLnZqcy1sb2FkaW5nLXNwaW5uZXI6YmVmb3JlLFxuLnZqcy13YWl0aW5nIC52anMtbG9hZGluZy1zcGlubmVyOmJlZm9yZSB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLnZqcy1zZWVraW5nIC52anMtbG9hZGluZy1zcGlubmVyOmFmdGVyLFxuLnZqcy13YWl0aW5nIC52anMtbG9hZGluZy1zcGlubmVyOmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNDRzO1xufVxuXG5Aa2V5ZnJhbWVzIHZqcy1zcGlubmVyLXNob3cge1xuICB0byB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuQGtleWZyYW1lcyB2anMtc3Bpbm5lci1zcGluIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyB2anMtc3Bpbm5lci1mYWRlIHtcbiAgMCUge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM3Mzg1OWY7XG4gIH1cbiAgMjAlIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNzM4NTlmO1xuICB9XG4gIDM1JSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgNjAlIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNzM4NTlmO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM3Mzg1OWY7XG4gIH1cbn1cbi52aWRlby1qcy52anMtYXVkaW8tb25seS1tb2RlIC52anMtY2FwdGlvbnMtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZqcy1jaGFwdGVycy1idXR0b24gLnZqcy1tZW51IHVsIHtcbiAgd2lkdGg6IDI0ZW07XG59XG5cbi52aWRlby1qcy52anMtYXVkaW8tb25seS1tb2RlIC52anMtZGVzY3JpcHRpb25zLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aWRlby1qcyAudmpzLXN1YnMtY2Fwcy1idXR0b24gKyAudmpzLW1lbnUgLnZqcy1jYXB0aW9ucy1tZW51LWl0ZW0gLnZqcy1tZW51LWl0ZW0tdGV4dCAudmpzLWljb24tcGxhY2Vob2xkZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IC0wLjFlbTtcbn1cblxuLnZpZGVvLWpzIC52anMtc3Vicy1jYXBzLWJ1dHRvbiArIC52anMtbWVudSAudmpzLWNhcHRpb25zLW1lbnUtaXRlbSAudmpzLW1lbnUtaXRlbS10ZXh0IC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgY29udGVudDogXCJcXGYxMGNcIjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi52aWRlby1qcy52anMtYXVkaW8tb25seS1tb2RlIC52anMtc3Vicy1jYXBzLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aWRlby1qcyAudmpzLWF1ZGlvLWJ1dHRvbiArIC52anMtbWVudSAudmpzLW1haW4tZGVzYy1tZW51LWl0ZW0gLnZqcy1tZW51LWl0ZW0tdGV4dCAudmpzLWljb24tcGxhY2Vob2xkZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IC0wLjFlbTtcbn1cblxuLnZpZGVvLWpzIC52anMtYXVkaW8tYnV0dG9uICsgLnZqcy1tZW51IC52anMtbWFpbi1kZXNjLW1lbnUtaXRlbSAudmpzLW1lbnUtaXRlbS10ZXh0IC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICBmb250LWZhbWlseTogVmlkZW9KUztcbiAgY29udGVudDogXCIgXFxmMTJlXCI7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4udmlkZW8tanMudmpzLWxheW91dC1zbWFsbCAudmpzLWN1cnJlbnQtdGltZSxcbi52aWRlby1qcy52anMtbGF5b3V0LXNtYWxsIC52anMtdGltZS1kaXZpZGVyLFxuLnZpZGVvLWpzLnZqcy1sYXlvdXQtc21hbGwgLnZqcy1kdXJhdGlvbixcbi52aWRlby1qcy52anMtbGF5b3V0LXNtYWxsIC52anMtcmVtYWluaW5nLXRpbWUsXG4udmlkZW8tanMudmpzLWxheW91dC1zbWFsbCAudmpzLXBsYXliYWNrLXJhdGUsXG4udmlkZW8tanMudmpzLWxheW91dC1zbWFsbCAudmpzLXZvbHVtZS1jb250cm9sLCAudmlkZW8tanMudmpzLWxheW91dC14LXNtYWxsIC52anMtY3VycmVudC10aW1lLFxuLnZpZGVvLWpzLnZqcy1sYXlvdXQteC1zbWFsbCAudmpzLXRpbWUtZGl2aWRlcixcbi52aWRlby1qcy52anMtbGF5b3V0LXgtc21hbGwgLnZqcy1kdXJhdGlvbixcbi52aWRlby1qcy52anMtbGF5b3V0LXgtc21hbGwgLnZqcy1yZW1haW5pbmctdGltZSxcbi52aWRlby1qcy52anMtbGF5b3V0LXgtc21hbGwgLnZqcy1wbGF5YmFjay1yYXRlLFxuLnZpZGVvLWpzLnZqcy1sYXlvdXQteC1zbWFsbCAudmpzLXZvbHVtZS1jb250cm9sLCAudmlkZW8tanMudmpzLWxheW91dC10aW55IC52anMtY3VycmVudC10aW1lLFxuLnZpZGVvLWpzLnZqcy1sYXlvdXQtdGlueSAudmpzLXRpbWUtZGl2aWRlcixcbi52aWRlby1qcy52anMtbGF5b3V0LXRpbnkgLnZqcy1kdXJhdGlvbixcbi52aWRlby1qcy52anMtbGF5b3V0LXRpbnkgLnZqcy1yZW1haW5pbmctdGltZSxcbi52aWRlby1qcy52anMtbGF5b3V0LXRpbnkgLnZqcy1wbGF5YmFjay1yYXRlLFxuLnZpZGVvLWpzLnZqcy1sYXlvdXQtdGlueSAudmpzLXZvbHVtZS1jb250cm9sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52aWRlby1qcy52anMtbGF5b3V0LXNtYWxsIC52anMtdm9sdW1lLXBhbmVsLnZqcy12b2x1bWUtcGFuZWwtaG9yaXpvbnRhbDpob3ZlciwgLnZpZGVvLWpzLnZqcy1sYXlvdXQtc21hbGwgLnZqcy12b2x1bWUtcGFuZWwudmpzLXZvbHVtZS1wYW5lbC1ob3Jpem9udGFsOmFjdGl2ZSwgLnZpZGVvLWpzLnZqcy1sYXlvdXQtc21hbGwgLnZqcy12b2x1bWUtcGFuZWwudmpzLXZvbHVtZS1wYW5lbC1ob3Jpem9udGFsLnZqcy1zbGlkZXItYWN0aXZlLCAudmlkZW8tanMudmpzLWxheW91dC1zbWFsbCAudmpzLXZvbHVtZS1wYW5lbC52anMtdm9sdW1lLXBhbmVsLWhvcml6b250YWwudmpzLWhvdmVyLCAudmlkZW8tanMudmpzLWxheW91dC14LXNtYWxsIC52anMtdm9sdW1lLXBhbmVsLnZqcy12b2x1bWUtcGFuZWwtaG9yaXpvbnRhbDpob3ZlciwgLnZpZGVvLWpzLnZqcy1sYXlvdXQteC1zbWFsbCAudmpzLXZvbHVtZS1wYW5lbC52anMtdm9sdW1lLXBhbmVsLWhvcml6b250YWw6YWN0aXZlLCAudmlkZW8tanMudmpzLWxheW91dC14LXNtYWxsIC52anMtdm9sdW1lLXBhbmVsLnZqcy12b2x1bWUtcGFuZWwtaG9yaXpvbnRhbC52anMtc2xpZGVyLWFjdGl2ZSwgLnZpZGVvLWpzLnZqcy1sYXlvdXQteC1zbWFsbCAudmpzLXZvbHVtZS1wYW5lbC52anMtdm9sdW1lLXBhbmVsLWhvcml6b250YWwudmpzLWhvdmVyLCAudmlkZW8tanMudmpzLWxheW91dC10aW55IC52anMtdm9sdW1lLXBhbmVsLnZqcy12b2x1bWUtcGFuZWwtaG9yaXpvbnRhbDpob3ZlciwgLnZpZGVvLWpzLnZqcy1sYXlvdXQtdGlueSAudmpzLXZvbHVtZS1wYW5lbC52anMtdm9sdW1lLXBhbmVsLWhvcml6b250YWw6YWN0aXZlLCAudmlkZW8tanMudmpzLWxheW91dC10aW55IC52anMtdm9sdW1lLXBhbmVsLnZqcy12b2x1bWUtcGFuZWwtaG9yaXpvbnRhbC52anMtc2xpZGVyLWFjdGl2ZSwgLnZpZGVvLWpzLnZqcy1sYXlvdXQtdGlueSAudmpzLXZvbHVtZS1wYW5lbC52anMtdm9sdW1lLXBhbmVsLWhvcml6b250YWwudmpzLWhvdmVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIHdpZHRoOiBpbml0aWFsO1xufVxuLnZpZGVvLWpzLnZqcy1sYXlvdXQteC1zbWFsbCAudmpzLXByb2dyZXNzLWNvbnRyb2wsIC52aWRlby1qcy52anMtbGF5b3V0LXRpbnkgLnZqcy1wcm9ncmVzcy1jb250cm9sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52aWRlby1qcy52anMtbGF5b3V0LXgtc21hbGwgLnZqcy1jdXN0b20tY29udHJvbC1zcGFjZXIge1xuICBmbGV4OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZqcy1tb2RhbC1kaWFsb2cudmpzLXRleHQtdHJhY2stc2V0dGluZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIzMzNGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA1MSwgNjMsIDAuNzUpO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbi52anMtdGV4dC10cmFjay1zZXR0aW5ncyAudmpzLW1vZGFsLWRpYWxvZy1jb250ZW50IHtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi52anMtdGV4dC10cmFjay1zZXR0aW5ncyAudmpzLXRyYWNrLXNldHRpbmdzLWNvbG9ycyxcbi52anMtdGV4dC10cmFjay1zZXR0aW5ncyAudmpzLXRyYWNrLXNldHRpbmdzLWZvbnQsXG4udmpzLXRleHQtdHJhY2stc2V0dGluZ3MgLnZqcy10cmFjay1zZXR0aW5ncy1jb250cm9scyB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi52anMtdGV4dC10cmFjay1zZXR0aW5ncyAudmpzLXRyYWNrLXNldHRpbmdzLWNvbnRyb2xzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbkBzdXBwb3J0cyAoZGlzcGxheTogZ3JpZCkge1xuICAudmpzLXRleHQtdHJhY2stc2V0dGluZ3MgLnZqcy1tb2RhbC1kaWFsb2ctY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgcGFkZGluZzogMjBweCAyNHB4IDBweCAyNHB4O1xuICB9XG4gIC52anMtdHJhY2stc2V0dGluZ3MtY29udHJvbHMgLnZqcy1kZWZhdWx0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAudmpzLXRleHQtdHJhY2stc2V0dGluZ3MgLnZqcy10cmFjay1zZXR0aW5ncy1jb250cm9scyB7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIH1cbiAgLnZqcy1sYXlvdXQtc21hbGwgLnZqcy10ZXh0LXRyYWNrLXNldHRpbmdzIC52anMtbW9kYWwtZGlhbG9nLWNvbnRlbnQsXG4gIC52anMtbGF5b3V0LXgtc21hbGwgLnZqcy10ZXh0LXRyYWNrLXNldHRpbmdzIC52anMtbW9kYWwtZGlhbG9nLWNvbnRlbnQsXG4gIC52anMtbGF5b3V0LXRpbnkgLnZqcy10ZXh0LXRyYWNrLXNldHRpbmdzIC52anMtbW9kYWwtZGlhbG9nLWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4udmpzLXRyYWNrLXNldHRpbmcgPiBzZWxlY3Qge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi52anMtdGV4dC10cmFjay1zZXR0aW5ncyBmaWVsZHNldCB7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udmpzLXRleHQtdHJhY2stc2V0dGluZ3MgZmllbGRzZXQgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCA2cHggOHB4O1xufVxuXG4udmpzLXRleHQtdHJhY2stc2V0dGluZ3MgZmllbGRzZXQgc3BhbiA+IHNlbGVjdCB7XG4gIG1heC13aWR0aDogNy4zZW07XG59XG5cbi52anMtdGV4dC10cmFjay1zZXR0aW5ncyBsZWdlbmQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnZqcy10ZXh0LXRyYWNrLXNldHRpbmdzIC52anMtbGFiZWwge1xuICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7XG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgbWFyZ2luOiAwIDVweCA1cHggMDtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZqcy10cmFjay1zZXR0aW5ncy1jb250cm9scyBidXR0b246Zm9jdXMsXG4udmpzLXRyYWNrLXNldHRpbmdzLWNvbnRyb2xzIGJ1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgb3V0bGluZS13aWR0aDogbWVkaXVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmZiA4OCUsICM3Mzg1OWYgMTAwJSk7XG59XG5cbi52anMtdHJhY2stc2V0dGluZ3MtY29udHJvbHMgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoNDMsIDUxLCA2MywgMC43NSk7XG59XG5cbi52anMtdHJhY2stc2V0dGluZ3MtY29udHJvbHMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmZmYgODglLCAjNzM4NTlmIDEwMCUpO1xuICBjb2xvcjogIzJCMzMzRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi52anMtdHJhY2stc2V0dGluZ3MtY29udHJvbHMgLnZqcy1kZWZhdWx0LWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4udmpzLXRpdGxlLWJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjkpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNykgNjAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXM7XG4gIHBhZGRpbmc6IDAuNjY2ZW0gMS4zMzNlbSA0ZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52anMtdGl0bGUtYmFyLXRpdGxlLFxuLnZqcy10aXRsZS1iYXItZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udmpzLXRpdGxlLWJhci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwLjMzM2VtO1xufVxuXG4udmpzLXBsYXlpbmcudmpzLXVzZXItaW5hY3RpdmUgLnZqcy10aXRsZS1iYXIge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xufVxuXG4udmlkZW8tanMgLnZqcy1za2lwLWZvcndhcmQtNSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52aWRlby1qcyAudmpzLXNraXAtZm9yd2FyZC0xMCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52aWRlby1qcyAudmpzLXNraXAtZm9yd2FyZC0zMCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52aWRlby1qcyAudmpzLXNraXAtYmFja3dhcmQtNSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52aWRlby1qcyAudmpzLXNraXAtYmFja3dhcmQtMTAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udmlkZW8tanMgLnZqcy1za2lwLWJhY2t3YXJkLTMwIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHByaW50IHtcbiAgLnZpZGVvLWpzID4gKjpub3QoLnZqcy10ZWNoKTpub3QoLnZqcy1wb3N0ZXIpIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cbi52anMtcmVzaXplLW1hbmFnZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICB6LWluZGV4OiAtMTAwMDtcbn1cblxuLmpzLWZvY3VzLXZpc2libGUgLnZpZGVvLWpzICo6Zm9jdXM6bm90KC5mb2N1cy12aXNpYmxlKSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi52aWRlby1qcyAqOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xuICBvdXRsaW5lOiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */.vjs-theme-forest{--vjs-theme-forest--primary:#6fb04e;--vjs-theme-forest--secondary:#fff}.vjs-theme-forest.vjs-big-play-button:focus,.vjs-theme-forest:hover .vjs-big-play-button{background-color:transparent;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' fill='%236fb04e'%3E%3Cpath fill-rule='evenodd' d='M44 88C19.738 88 0 68.262 0 44S19.738 0 44 0s44 19.738 44 44-19.738 44-44 44zm0-85C21.393 3 3 21.393 3 44c0 22.608 18.393 41 41 41s41-18.392 41-41C85 21.393 66.607 3 44 3zm16.063 43.898L39.629 60.741a3.496 3.496 0 01-3.604.194 3.492 3.492 0 01-1.859-3.092V30.158c0-1.299.712-2.483 1.859-3.092a3.487 3.487 0 013.604.194l20.433 13.843a3.497 3.497 0 01.001 5.795zm-1.683-3.311L37.946 29.744a.49.49 0 00-.276-.09.51.51 0 00-.239.062.483.483 0 00-.265.442v27.685c0 .262.166.389.265.442.1.053.299.118.515-.028L58.38 44.414A.489.489 0 0058.6 44a.49.49 0 00-.22-.413z'/%3E%3C/svg%3E\")}.vjs-theme-forest .vjs-big-play-button{width:88px;height:88px;background:none;background-repeat:no-repeat;background-position:50%;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' fill='%23fff'%3E%3Cpath fill-rule='evenodd' d='M44 88C19.738 88 0 68.262 0 44S19.738 0 44 0s44 19.738 44 44-19.738 44-44 44zm0-85C21.393 3 3 21.393 3 44c0 22.608 18.393 41 41 41s41-18.392 41-41C85 21.393 66.607 3 44 3zm16.063 43.898L39.629 60.741a3.496 3.496 0 01-3.604.194 3.492 3.492 0 01-1.859-3.092V30.158c0-1.299.712-2.483 1.859-3.092a3.487 3.487 0 013.604.194l20.433 13.843a3.497 3.497 0 01.001 5.795zm-1.683-3.311L37.946 29.744a.49.49 0 00-.276-.09.51.51 0 00-.239.062.483.483 0 00-.265.442v27.685c0 .262.166.389.265.442.1.053.299.118.515-.028L58.38 44.414A.489.489 0 0058.6 44a.49.49 0 00-.22-.413z'/%3E%3C/svg%3E\");border:none;top:50%;left:50%;margin-top:-44px;margin-left:-44px;color:purple}.vjs-theme-forest .vjs-big-play-button .vjs-icon-placeholder{display:none}.vjs-theme-forest .vjs-button>.vjs-icon-placeholder:before{line-height:1.55}.vjs-theme-forest .vjs-control:not(.vjs-disabled):not(.vjs-time-control):hover{color:var(--vjs-theme-forest--primary);text-shadow:var(--vjs-theme-forest--secondary) 1px 0 10px}.vjs-theme-forest .vjs-control-bar{background:none;margin-bottom:1em;padding-left:1em;padding-right:1em}.vjs-theme-forest .vjs-play-control{font-size:.8em}.vjs-theme-forest .vjs-play-control .vjs-icon-placeholder:before{background-color:var(--vjs-theme-forest--secondary);height:1.5em;width:1.5em;margin-top:.2em;border-radius:1em;color:var(--vjs-theme-forest--primary)}.vjs-theme-forest .vjs-play-control:hover .vjs-icon-placeholder:before{background-color:var(--vjs-theme-forest--primary);color:var(--vjs-theme-forest--secondary)}.vjs-theme-forest .vjs-mute-control{display:none}.vjs-theme-forest .vjs-volume-panel{margin-left:.5em;margin-right:.5em;padding-top:.3em}.vjs-theme-forest .vjs-volume-bar.vjs-slider-horizontal,.vjs-theme-forest .vjs-volume-panel,.vjs-theme-forest .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.vjs-theme-forest .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.vjs-theme-forest .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,.vjs-theme-forest .vjs-volume-panel:hover,.vjs-theme-forest .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-horizontal{width:3em}.vjs-theme-forest .vjs-volume-level:before{font-size:1em}.vjs-theme-forest .vjs-volume-panel .vjs-volume-control{opacity:1;width:100%;height:100%}.vjs-theme-forest .vjs-volume-bar{background-color:transparent;margin:0}.vjs-theme-forest .vjs-slider-horizontal .vjs-volume-level{height:100%}.vjs-theme-forest .vjs-volume-bar.vjs-slider-horizontal{margin-top:0;margin-bottom:0;height:100%}.vjs-theme-forest .vjs-volume-bar:before{content:\"\";z-index:0;width:0;height:0;position:absolute;top:0;left:0;border-left:3em solid transparent;border-bottom:2em solid var(--vjs-theme-forest--primary);border-right:0 solid transparent;border-top:0 solid transparent}.vjs-theme-forest .vjs-volume-level{overflow:hidden;background-color:transparent}.vjs-theme-forest .vjs-volume-level:before{content:\"\";z-index:1;width:0;height:0;position:absolute;top:0;left:0;border-left:3em solid transparent;border-bottom:2em solid var(--vjs-theme-forest--secondary);border-right:0 solid transparent;border-top:0 solid transparent}.vjs-theme-forest .vjs-progress-control:hover .vjs-progress-holder{font-size:1em}.vjs-theme-forest .vjs-play-progress:before{display:none}.vjs-theme-forest .vjs-progress-holder{border-radius:.2em;height:.5em;margin:0}.vjs-theme-forest .vjs-load-progress,.vjs-theme-forest .vjs-load-progress div,.vjs-theme-forest .vjs-play-progress{border-radius:.2em}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AdmlkZW9qcy90aGVtZXMvZGlzdC9mb3Jlc3QvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixtQ0FBbUMsQ0FBQyxrQ0FBa0MsQ0FBQyx5RkFBeUYsNEJBQTRCLENBQUMsb3VCQUFvdUIsQ0FBQyx1Q0FBdUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsaXVCQUFpdUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsNkRBQTZELFlBQVksQ0FBQywyREFBMkQsZ0JBQWdCLENBQUMsK0VBQStFLHNDQUFzQyxDQUFDLHlEQUF5RCxDQUFDLG1DQUFtQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLGNBQWMsQ0FBQyxpRUFBaUUsbURBQW1ELENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsc0NBQXNDLENBQUMsdUVBQXVFLGlEQUFpRCxDQUFDLHdDQUF3QyxDQUFDLG9DQUFvQyxZQUFZLENBQUMsb0NBQW9DLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLHVjQUF1YyxTQUFTLENBQUMsMkNBQTJDLGFBQWEsQ0FBQyx3REFBd0QsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsa0NBQWtDLDRCQUE0QixDQUFDLFFBQVEsQ0FBQywyREFBMkQsV0FBVyxDQUFDLHdEQUF3RCxZQUFZLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyx5Q0FBeUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUMsd0RBQXdELENBQUMsZ0NBQWdDLENBQUMsOEJBQThCLENBQUMsb0NBQW9DLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQywyQ0FBMkMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUMsMERBQTBELENBQUMsZ0NBQWdDLENBQUMsOEJBQThCLENBQUMsbUVBQW1FLGFBQWEsQ0FBQyw0Q0FBNEMsWUFBWSxDQUFDLHVDQUF1QyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLG1IQUFtSCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIudmpzLXRoZW1lLWZvcmVzdHstLXZqcy10aGVtZS1mb3Jlc3QtLXByaW1hcnk6IzZmYjA0ZTstLXZqcy10aGVtZS1mb3Jlc3QtLXNlY29uZGFyeTojZmZmfS52anMtdGhlbWUtZm9yZXN0LnZqcy1iaWctcGxheS1idXR0b246Zm9jdXMsLnZqcy10aGVtZS1mb3Jlc3Q6aG92ZXIgLnZqcy1iaWctcGxheS1idXR0b257YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4OCcgaGVpZ2h0PSc4OCcgZmlsbD0nJTIzNmZiMDRlJyUzRSUzQ3BhdGggZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNNDQgODhDMTkuNzM4IDg4IDAgNjguMjYyIDAgNDRTMTkuNzM4IDAgNDQgMHM0NCAxOS43MzggNDQgNDQtMTkuNzM4IDQ0LTQ0IDQ0em0wLTg1QzIxLjM5MyAzIDMgMjEuMzkzIDMgNDRjMCAyMi42MDggMTguMzkzIDQxIDQxIDQxczQxLTE4LjM5MiA0MS00MUM4NSAyMS4zOTMgNjYuNjA3IDMgNDQgM3ptMTYuMDYzIDQzLjg5OEwzOS42MjkgNjAuNzQxYTMuNDk2IDMuNDk2IDAgMDEtMy42MDQuMTk0IDMuNDkyIDMuNDkyIDAgMDEtMS44NTktMy4wOTJWMzAuMTU4YzAtMS4yOTkuNzEyLTIuNDgzIDEuODU5LTMuMDkyYTMuNDg3IDMuNDg3IDAgMDEzLjYwNC4xOTRsMjAuNDMzIDEzLjg0M2EzLjQ5NyAzLjQ5NyAwIDAxLjAwMSA1Ljc5NXptLTEuNjgzLTMuMzExTDM3Ljk0NiAyOS43NDRhLjQ5LjQ5IDAgMDAtLjI3Ni0uMDkuNTEuNTEgMCAwMC0uMjM5LjA2Mi40ODMuNDgzIDAgMDAtLjI2NS40NDJ2MjcuNjg1YzAgLjI2Mi4xNjYuMzg5LjI2NS40NDIuMS4wNTMuMjk5LjExOC41MTUtLjAyOEw1OC4zOCA0NC40MTRBLjQ4OS40ODkgMCAwMDU4LjYgNDRhLjQ5LjQ5IDAgMDAtLjIyLS40MTN6Jy8lM0UlM0Mvc3ZnJTNFXCIpfS52anMtdGhlbWUtZm9yZXN0IC52anMtYmlnLXBsYXktYnV0dG9ue3dpZHRoOjg4cHg7aGVpZ2h0Ojg4cHg7YmFja2dyb3VuZDpub25lO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4OCcgaGVpZ2h0PSc4OCcgZmlsbD0nJTIzZmZmJyUzRSUzQ3BhdGggZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNNDQgODhDMTkuNzM4IDg4IDAgNjguMjYyIDAgNDRTMTkuNzM4IDAgNDQgMHM0NCAxOS43MzggNDQgNDQtMTkuNzM4IDQ0LTQ0IDQ0em0wLTg1QzIxLjM5MyAzIDMgMjEuMzkzIDMgNDRjMCAyMi42MDggMTguMzkzIDQxIDQxIDQxczQxLTE4LjM5MiA0MS00MUM4NSAyMS4zOTMgNjYuNjA3IDMgNDQgM3ptMTYuMDYzIDQzLjg5OEwzOS42MjkgNjAuNzQxYTMuNDk2IDMuNDk2IDAgMDEtMy42MDQuMTk0IDMuNDkyIDMuNDkyIDAgMDEtMS44NTktMy4wOTJWMzAuMTU4YzAtMS4yOTkuNzEyLTIuNDgzIDEuODU5LTMuMDkyYTMuNDg3IDMuNDg3IDAgMDEzLjYwNC4xOTRsMjAuNDMzIDEzLjg0M2EzLjQ5NyAzLjQ5NyAwIDAxLjAwMSA1Ljc5NXptLTEuNjgzLTMuMzExTDM3Ljk0NiAyOS43NDRhLjQ5LjQ5IDAgMDAtLjI3Ni0uMDkuNTEuNTEgMCAwMC0uMjM5LjA2Mi40ODMuNDgzIDAgMDAtLjI2NS40NDJ2MjcuNjg1YzAgLjI2Mi4xNjYuMzg5LjI2NS40NDIuMS4wNTMuMjk5LjExOC41MTUtLjAyOEw1OC4zOCA0NC40MTRBLjQ4OS40ODkgMCAwMDU4LjYgNDRhLjQ5LjQ5IDAgMDAtLjIyLS40MTN6Jy8lM0UlM0Mvc3ZnJTNFXCIpO2JvcmRlcjpub25lO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLXRvcDotNDRweDttYXJnaW4tbGVmdDotNDRweDtjb2xvcjpwdXJwbGV9LnZqcy10aGVtZS1mb3Jlc3QgLnZqcy1iaWctcGxheS1idXR0b24gLnZqcy1pY29uLXBsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZX0udmpzLXRoZW1lLWZvcmVzdCAudmpzLWJ1dHRvbj4udmpzLWljb24tcGxhY2Vob2xkZXI6YmVmb3Jle2xpbmUtaGVpZ2h0OjEuNTV9LnZqcy10aGVtZS1mb3Jlc3QgLnZqcy1jb250cm9sOm5vdCgudmpzLWRpc2FibGVkKTpub3QoLnZqcy10aW1lLWNvbnRyb2wpOmhvdmVye2NvbG9yOnZhcigtLXZqcy10aGVtZS1mb3Jlc3QtLXByaW1hcnkpO3RleHQtc2hhZG93OnZhcigtLXZqcy10aGVtZS1mb3Jlc3QtLXNlY29uZGFyeSkgMXB4IDAgMTBweH0udmpzLXRoZW1lLWZvcmVzdCAudmpzLWNvbnRyb2wtYmFye2JhY2tncm91bmQ6bm9uZTttYXJnaW4tYm90dG9tOjFlbTtwYWRkaW5nLWxlZnQ6MWVtO3BhZGRpbmctcmlnaHQ6MWVtfS52anMtdGhlbWUtZm9yZXN0IC52anMtcGxheS1jb250cm9se2ZvbnQtc2l6ZTouOGVtfS52anMtdGhlbWUtZm9yZXN0IC52anMtcGxheS1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS12anMtdGhlbWUtZm9yZXN0LS1zZWNvbmRhcnkpO2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbTttYXJnaW4tdG9wOi4yZW07Ym9yZGVyLXJhZGl1czoxZW07Y29sb3I6dmFyKC0tdmpzLXRoZW1lLWZvcmVzdC0tcHJpbWFyeSl9LnZqcy10aGVtZS1mb3Jlc3QgLnZqcy1wbGF5LWNvbnRyb2w6aG92ZXIgLnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXZqcy10aGVtZS1mb3Jlc3QtLXByaW1hcnkpO2NvbG9yOnZhcigtLXZqcy10aGVtZS1mb3Jlc3QtLXNlY29uZGFyeSl9LnZqcy10aGVtZS1mb3Jlc3QgLnZqcy1tdXRlLWNvbnRyb2x7ZGlzcGxheTpub25lfS52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLXBhbmVse21hcmdpbi1sZWZ0Oi41ZW07bWFyZ2luLXJpZ2h0Oi41ZW07cGFkZGluZy10b3A6LjNlbX0udmpzLXRoZW1lLWZvcmVzdCAudmpzLXZvbHVtZS1iYXIudmpzLXNsaWRlci1ob3Jpem9udGFsLC52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLXBhbmVsLC52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLXBhbmVsLnZqcy12b2x1bWUtcGFuZWwtaG9yaXpvbnRhbC52anMtc2xpZGVyLWFjdGl2ZSwudmpzLXRoZW1lLWZvcmVzdCAudmpzLXZvbHVtZS1wYW5lbC52anMtdm9sdW1lLXBhbmVsLWhvcml6b250YWw6aG92ZXIsLnZqcy10aGVtZS1mb3Jlc3QgLnZqcy12b2x1bWUtcGFuZWw6YWN0aXZlIC52anMtdm9sdW1lLWNvbnRyb2wudmpzLXZvbHVtZS1ob3Jpem9udGFsLC52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLXBhbmVsOmhvdmVyLC52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLXBhbmVsOmhvdmVyIC52anMtdm9sdW1lLWNvbnRyb2wudmpzLXZvbHVtZS1ob3Jpem9udGFse3dpZHRoOjNlbX0udmpzLXRoZW1lLWZvcmVzdCAudmpzLXZvbHVtZS1sZXZlbDpiZWZvcmV7Zm9udC1zaXplOjFlbX0udmpzLXRoZW1lLWZvcmVzdCAudmpzLXZvbHVtZS1wYW5lbCAudmpzLXZvbHVtZS1jb250cm9se29wYWNpdHk6MTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O21hcmdpbjowfS52anMtdGhlbWUtZm9yZXN0IC52anMtc2xpZGVyLWhvcml6b250YWwgLnZqcy12b2x1bWUtbGV2ZWx7aGVpZ2h0OjEwMCV9LnZqcy10aGVtZS1mb3Jlc3QgLnZqcy12b2x1bWUtYmFyLnZqcy1zbGlkZXItaG9yaXpvbnRhbHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2hlaWdodDoxMDAlfS52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLWJhcjpiZWZvcmV7Y29udGVudDpcIlwiO3otaW5kZXg6MDt3aWR0aDowO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtib3JkZXItbGVmdDozZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToyZW0gc29saWQgdmFyKC0tdmpzLXRoZW1lLWZvcmVzdC0tcHJpbWFyeSk7Ym9yZGVyLXJpZ2h0OjAgc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcDowIHNvbGlkIHRyYW5zcGFyZW50fS52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLWxldmVse292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLWxldmVsOmJlZm9yZXtjb250ZW50OlwiXCI7ei1pbmRleDoxO3dpZHRoOjA7aGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2JvcmRlci1sZWZ0OjNlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjJlbSBzb2xpZCB2YXIoLS12anMtdGhlbWUtZm9yZXN0LS1zZWNvbmRhcnkpO2JvcmRlci1yaWdodDowIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3A6MCBzb2xpZCB0cmFuc3BhcmVudH0udmpzLXRoZW1lLWZvcmVzdCAudmpzLXByb2dyZXNzLWNvbnRyb2w6aG92ZXIgLnZqcy1wcm9ncmVzcy1ob2xkZXJ7Zm9udC1zaXplOjFlbX0udmpzLXRoZW1lLWZvcmVzdCAudmpzLXBsYXktcHJvZ3Jlc3M6YmVmb3Jle2Rpc3BsYXk6bm9uZX0udmpzLXRoZW1lLWZvcmVzdCAudmpzLXByb2dyZXNzLWhvbGRlcntib3JkZXItcmFkaXVzOi4yZW07aGVpZ2h0Oi41ZW07bWFyZ2luOjB9LnZqcy10aGVtZS1mb3Jlc3QgLnZqcy1sb2FkLXByb2dyZXNzLC52anMtdGhlbWUtZm9yZXN0IC52anMtbG9hZC1wcm9ncmVzcyBkaXYsLnZqcy10aGVtZS1mb3Jlc3QgLnZqcy1wbGF5LXByb2dyZXNze2JvcmRlci1yYWRpdXM6LjJlbX0iXSwic291cmNlUm9vdCI6IiJ9 *//* Video.js CSS START */\n.vjs-theme-forest {\n  --vjs-theme-forest--primary: rgb(129,140,248);\n}\n\n.vjs-theme-forest.vjs-big-play-button:focus, .vjs-theme-forest:hover .vjs-big-play-button {\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' fill='%23818cf8'%3E%3Cpath fill-rule='evenodd' d='M44 88C19.738 88 0 68.262 0 44S19.738 0 44 0s44 19.738 44 44-19.738 44-44 44zm0-85C21.393 3 3 21.393 3 44c0 22.608 18.393 41 41 41s41-18.392 41-41C85 21.393 66.607 3 44 3zm16.063 43.898L39.629 60.741a3.496 3.496 0 01-3.604.194 3.492 3.492 0 01-1.859-3.092V30.158c0-1.299.712-2.483 1.859-3.092a3.487 3.487 0 013.604.194l20.433 13.843a3.497 3.497 0 01.001 5.795zm-1.683-3.311L37.946 29.744a.49.49 0 00-.276-.09.51.51 0 00-.239.062.483.483 0 00-.265.442v27.685c0 .262.166.389.265.442.1.053.299.118.515-.028L58.38 44.414A.489.489 0 0058.6 44a.49.49 0 00-.22-.413z'/%3E%3C/svg%3E\");\n}\n\n.video-js {\n  position: initial;\n}\n\n.video-js .vjs-control-bar {\n  height: 6em;\n}\n\n.vjs-button>.vjs-icon-placeholder:before {\n  font-size: 3.8em;\n}\n\n.video-js .vjs-button {\n  width: 6em;\n}\n\n.vjs-theme-forest .vjs-volume-bar.vjs-slider-horizontal, .vjs-theme-forest .vjs-volume-panel, .vjs-theme-forest .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .vjs-theme-forest .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .vjs-theme-forest .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal, .vjs-theme-forest .vjs-volume-panel:hover, .vjs-theme-forest .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-horizontal {\n  width: 8em;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal, .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal {\n  width: 8em;\n  height: 6em;\n  margin-right: 0;\n}\n\n.vjs-theme-forest .vjs-volume-bar:before {\n  border-left-width: 8em;\n  border-bottom-width: 5em;\n}\n\n.vjs-theme-forest .vjs-volume-level::before {\n  border-left-width: 8em;\n  border-bottom-width: 5em;\n}\n\n.vjs-theme-forest .vjs-progress-holder {\n  height: 2em;\n}\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip, .video-js .vjs-progress-control:hover .vjs-time-tooltip {\n  font-size: 2em;\n}\n\n.video-js .vjs-time-tooltip {\n  top: -2em;\n}\n\n.video-js .vjs-time-control {\n  font-size: 2em;\n}\n/* Video.js CSS END */\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2xpcC9jbGlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsdUJBQXVCO0FBQ3ZCO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UscXVCQUFxdUI7QUFDdnVCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ352aWRlby5qcy9kaXN0L3ZpZGVvLWpzLmNzcyc7XHJcbkBpbXBvcnQgJ35AdmlkZW9qcy90aGVtZXMvZGlzdC9mb3Jlc3QvaW5kZXguY3NzJztcclxuXHJcbi8qIFZpZGVvLmpzIENTUyBTVEFSVCAqL1xyXG4udmpzLXRoZW1lLWZvcmVzdCB7XHJcbiAgLS12anMtdGhlbWUtZm9yZXN0LS1wcmltYXJ5OiByZ2IoMTI5LDE0MCwyNDgpO1xyXG59XHJcblxyXG4udmpzLXRoZW1lLWZvcmVzdC52anMtYmlnLXBsYXktYnV0dG9uOmZvY3VzLCAudmpzLXRoZW1lLWZvcmVzdDpob3ZlciAudmpzLWJpZy1wbGF5LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9Jzg4JyBoZWlnaHQ9Jzg4JyBmaWxsPSclMjM4MThjZjgnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J000NCA4OEMxOS43MzggODggMCA2OC4yNjIgMCA0NFMxOS43MzggMCA0NCAwczQ0IDE5LjczOCA0NCA0NC0xOS43MzggNDQtNDQgNDR6bTAtODVDMjEuMzkzIDMgMyAyMS4zOTMgMyA0NGMwIDIyLjYwOCAxOC4zOTMgNDEgNDEgNDFzNDEtMTguMzkyIDQxLTQxQzg1IDIxLjM5MyA2Ni42MDcgMyA0NCAzem0xNi4wNjMgNDMuODk4TDM5LjYyOSA2MC43NDFhMy40OTYgMy40OTYgMCAwMS0zLjYwNC4xOTQgMy40OTIgMy40OTIgMCAwMS0xLjg1OS0zLjA5MlYzMC4xNThjMC0xLjI5OS43MTItMi40ODMgMS44NTktMy4wOTJhMy40ODcgMy40ODcgMCAwMTMuNjA0LjE5NGwyMC40MzMgMTMuODQzYTMuNDk3IDMuNDk3IDAgMDEuMDAxIDUuNzk1em0tMS42ODMtMy4zMTFMMzcuOTQ2IDI5Ljc0NGEuNDkuNDkgMCAwMC0uMjc2LS4wOS41MS41MSAwIDAwLS4yMzkuMDYyLjQ4My40ODMgMCAwMC0uMjY1LjQ0MnYyNy42ODVjMCAuMjYyLjE2Ni4zODkuMjY1LjQ0Mi4xLjA1My4yOTkuMTE4LjUxNS0uMDI4TDU4LjM4IDQ0LjQxNEEuNDg5LjQ4OSAwIDAwNTguNiA0NGEuNDkuNDkgMCAwMC0uMjItLjQxM3onLyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbi52aWRlby1qcyB7XHJcbiAgcG9zaXRpb246IGluaXRpYWw7XHJcbn1cclxuXHJcbi52aWRlby1qcyAudmpzLWNvbnRyb2wtYmFyIHtcclxuICBoZWlnaHQ6IDZlbTtcclxufVxyXG5cclxuLnZqcy1idXR0b24+LnZqcy1pY29uLXBsYWNlaG9sZGVyOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiAzLjhlbTtcclxufVxyXG5cclxuLnZpZGVvLWpzIC52anMtYnV0dG9uIHtcclxuICB3aWR0aDogNmVtO1xyXG59XHJcblxyXG4udmpzLXRoZW1lLWZvcmVzdCAudmpzLXZvbHVtZS1iYXIudmpzLXNsaWRlci1ob3Jpem9udGFsLCAudmpzLXRoZW1lLWZvcmVzdCAudmpzLXZvbHVtZS1wYW5lbCwgLnZqcy10aGVtZS1mb3Jlc3QgLnZqcy12b2x1bWUtcGFuZWwudmpzLXZvbHVtZS1wYW5lbC1ob3Jpem9udGFsLnZqcy1zbGlkZXItYWN0aXZlLCAudmpzLXRoZW1lLWZvcmVzdCAudmpzLXZvbHVtZS1wYW5lbC52anMtdm9sdW1lLXBhbmVsLWhvcml6b250YWw6aG92ZXIsIC52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLXBhbmVsOmFjdGl2ZSAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtaG9yaXpvbnRhbCwgLnZqcy10aGVtZS1mb3Jlc3QgLnZqcy12b2x1bWUtcGFuZWw6aG92ZXIsIC52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLXBhbmVsOmhvdmVyIC52anMtdm9sdW1lLWNvbnRyb2wudmpzLXZvbHVtZS1ob3Jpem9udGFsIHtcclxuICB3aWR0aDogOGVtO1xyXG59XHJcblxyXG4udmlkZW8tanMgLnZqcy12b2x1bWUtcGFuZWwgLnZqcy12b2x1bWUtY29udHJvbC52anMtc2xpZGVyLWFjdGl2ZS52anMtdm9sdW1lLWhvcml6b250YWwsIC52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbCAudmpzLXZvbHVtZS1jb250cm9sOmFjdGl2ZS52anMtdm9sdW1lLWhvcml6b250YWwsIC52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbC52anMtaG92ZXIgLnZqcy1tdXRlLWNvbnRyb2x+LnZqcy12b2x1bWUtY29udHJvbC52anMtdm9sdW1lLWhvcml6b250YWwsIC52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbC52anMtaG92ZXIgLnZqcy12b2x1bWUtY29udHJvbC52anMtdm9sdW1lLWhvcml6b250YWwsIC52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbDphY3RpdmUgLnZqcy12b2x1bWUtY29udHJvbC52anMtdm9sdW1lLWhvcml6b250YWwsIC52aWRlby1qcyAudmpzLXZvbHVtZS1wYW5lbDpmb2N1cyAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtaG9yaXpvbnRhbCB7XHJcbiAgd2lkdGg6IDhlbTtcclxuICBoZWlnaHQ6IDZlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi52anMtdGhlbWUtZm9yZXN0IC52anMtdm9sdW1lLWJhcjpiZWZvcmUge1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA4ZW07XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNWVtO1xyXG59XHJcblxyXG4udmpzLXRoZW1lLWZvcmVzdCAudmpzLXZvbHVtZS1sZXZlbDo6YmVmb3JlIHtcclxuICBib3JkZXItbGVmdC13aWR0aDogOGVtO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDVlbTtcclxufVxyXG5cclxuLnZqcy10aGVtZS1mb3Jlc3QgLnZqcy1wcm9ncmVzcy1ob2xkZXIge1xyXG4gIGhlaWdodDogMmVtO1xyXG59XHJcblxyXG4udmlkZW8tanMgLnZqcy1wcm9ncmVzcy1jb250cm9sOmhvdmVyIC52anMtcHJvZ3Jlc3MtaG9sZGVyOmZvY3VzIC52anMtdGltZS10b29sdGlwLCAudmlkZW8tanMgLnZqcy1wcm9ncmVzcy1jb250cm9sOmhvdmVyIC52anMtdGltZS10b29sdGlwIHtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLnZpZGVvLWpzIC52anMtdGltZS10b29sdGlwIHtcclxuICB0b3A6IC0yZW07XHJcbn1cclxuXHJcbi52aWRlby1qcyAudmpzLXRpbWUtY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuLyogVmlkZW8uanMgQ1NTIEVORCAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}


/***/ }),

/***/ 7303:
/*!**************************************************!*\
  !*** ./src/app/clipslist/clipslist.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipslistComponent: () => (/* binding */ ClipslistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_clip_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/clip.service */ 6200);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pipes_fb_timestamp_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/fb-timestamp.pipe */ 8321);






const _c0 = function (a2) {
  return ["/", "clip", a2];
};
function ClipslistComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9)(8, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "fbTimestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const clip_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, clip_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", clip_r1.screenshotUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](clip_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", clip_r1.displayName, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 5, clip_r1.createdAt));
  }
}
class ClipslistComponent {
  constructor(clipService) {
    this.clipService = clipService;
    this.scrollable = true;
    this.handleScroll = () => {
      const {
        scrollTop,
        offsetHeight
      } = document.documentElement;
      const {
        innerHeight
      } = window;
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;
      if (bottomOfWindow) {
        this.clipService.getClips();
      }
    };
    this.clipService.getClips();
  }
  ngOnInit() {
    if (this.scrollable) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  ngOnDestroy() {
    if (this.scrollable) {
      window.removeEventListener('scroll', this.handleScroll);
    }
    this.clipService.pageClips = [];
  }
  static {
    this.ɵfac = function ClipslistComponent_Factory(t) {
      return new (t || ClipslistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_clip_service__WEBPACK_IMPORTED_MODULE_0__.ClipService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ClipslistComponent,
      selectors: [["app-clipslist"]],
      inputs: {
        scrollable: "scrollable"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe])],
      decls: 2,
      vars: 1,
      consts: [[1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-4"], ["class", "mt-6 rounded-tl-2xl rounded-br-2xl shadow-xl bg-secondary transform hover:-translate-y-2 hover:shadow-2xl transition duration-300", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "mt-6", "rounded-tl-2xl", "rounded-br-2xl", "shadow-xl", "bg-secondary", "transform", "hover:-translate-y-2", "hover:shadow-2xl", "transition", "duration-300", 3, "routerLink"], ["crossorigin", "", "alt", "", 1, "card-img-top", "rounded-tl-2xl", "w-full", 3, "src"], [1, "relative"], [1, "absolute", "pointer-events-none", "bottom-full", "w-full", "bg-secondary", "text-white"], [1, "absolute", "bottom-full", "w-full", "pb-5", "overflow-hidden"], ["viewBox", "0 0 100 50", "preserveAspectRatio", "none", 1, "absolute", "bottom-0", "w-full", "h-full", "tranform", 2, "transform-origin", "top center", "transform", "scale(2)"], ["d", "M0 25h25L75 0h25v50H0z", "fill", "#283046"], [1, "p-8"], [1, "text-3xl", "mb-2"], [1, "mb-0"], [1, "text-gray-400"]],
      template: function ClipslistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ClipslistComponent_a_1_Template, 15, 9, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.clipService.pageClips);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _pipes_fb_timestamp_pipe__WEBPACK_IMPORTED_MODULE_1__.FbTimestampPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _clipslist_clipslist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clipslist/clipslist.component */ 7303);


class HomeComponent {
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 20,
      vars: 0,
      consts: [[1, "relative", "overflow-hidden", "mb-2"], ["autoplay", "", "muted", "", "loop", "", 1, "w-full", "h-full", "object-cover", "absolute", "z-0"], ["src", "assets/video/hero.webm", "type", "video/webm"], [1, "bg-gradient", "absolute", "w-full", "h-full", "z-40", "opacity-60"], [1, "w-full", "h-full", "absolute", "z-40"], [1, "cube"], [1, "container", "mx-auto", "relative", "z-50"], [1, "text-center", "px-20", "py-60", "w-full", "md:w-8/12", "mx-auto"], [1, "text-7xl", "font-bold", "uppercase", "mb-2"], [1, "container", "mx-auto"], [1, "uppercase", "text-center", "text-4xl", "grid", "mt-20", "mb-12", "items-center", "gap-8", "tracking-widest", "latest"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "video", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5)(6, "div", 5)(7, "div", 5)(8, "div", 5)(9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Record and share it!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Watch, clip, and share your awesome (or not!) gaming moments with your friends and the world! Twatch makes it incredibly easy to share your videos. Twatch it today! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section", 9)(17, "h1", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Latest ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-clipslist");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_clipslist_clipslist_component__WEBPACK_IMPORTED_MODULE_0__.ClipslistComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 5120:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavComponent: () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/modal.service */ 2855);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 2333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);





function NavComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_li_6_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.openModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login / Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    sort: "1"
  };
};
const _c1 = function () {
  return {
    exact: true
  };
};
function NavComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Manage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li")(4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li")(7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_ng_template_8_Template_a_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.auth.logout($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", ctx_r2.myMatchOptions)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
  }
}
class NavComponent {
  constructor(modal, auth) {
    this.modal = modal;
    this.auth = auth;
    this.myMatchOptions = {
      queryParams: 'ignored',
      matrixParams: 'exact',
      paths: 'exact',
      fragment: 'exact'
    };
  }
  ngOnInit() {}
  openModal($event) {
    $event.preventDefault();
    this.modal.toggleModal('auth');
  }
  static {
    this.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 13,
      vars: 4,
      consts: [["id", "header", 1, "bg-secondary"], [1, "container", "mx-auto", "flex", "justify-start", "items-center", "py-8", "px-4"], ["routerLink", "/", 1, "text-3xl", "text-indigo-400", "font-bold", "uppercase", "mr-4"], [1, "flex", "flex-grow", "items-center"], [1, "flex", "flex-row", "mt-1"], [4, "ngIf", "ngIfElse"], ["authLinks", ""], ["routerLink", "/about", "routerLinkActive", "text-orange-400", 1, "px-2"], ["href", "#", 1, "px-2", 3, "click"], ["routerLink", "/manage", "routerLinkActive", "text-orange-400", 1, "px-2", 3, "routerLinkActiveOptions", "queryParams"], ["routerLink", "/upload", "routerLinkActive", "text-orange-400", 1, "px-2", 3, "routerLinkActiveOptions"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Twatch");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "ul", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavComponent_li_6_Template, 3, 0, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavComponent_ng_template_8_Template, 9, 5, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li")(11, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, ctx.auth.isAuthenticated$))("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 6084:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NotFoundComponent {
  static {
    this.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 20,
      vars: 0,
      consts: [[1, "relative", "m-auto", "left-0", "right-0", "z-10", "w-36", "h-52", "border-indigo-400", "border-4", "top-32", "ghost"], [1, "absolute", "left-0", "right-0", "bottom-10", "m-auto", "text-center", "text-4xl", "font-bold"], [1, "rounded-full", "absolute", "left-0", "right-0", "w-3", "h-3", "bg-indigo-400", "mx-auto", "mt-10", "transform", "translate-x-6"], [1, "rounded-full", "absolute", "left-0", "right-0", "w-3", "h-3", "bg-indigo-400", "mx-auto", "mt-10", "transform", "-translate-x-6"], [1, "w-10", "h-2", "rounded-lg", "absolute", "left-0", "right-0", "mx-auto", "mt-20", "bg-indigo-400"], [1, "corner", "border-indigo-400", "border-4"], [1, "corner", "two", "border-indigo-400", "border-4"], [1, "corner", "three", "border-indigo-400", "border-4"], [1, "corner", "four", "border-indigo-400", "border-4"], [1, "over"], [1, "over", "two"], [1, "over", "three"], [1, "over", "four"], [1, "ghost-shadow", "w-32", "h-10", "mx-auto", "mt-56", "rounded", "bg-indigo-400", "left-0", "right-0", "absolute"], [1, "container", "mx-auto", "text-center", "mt-60"], [1, "text-4xl", "font-bold", "mb-4"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14)(16, "h2", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Page not found");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Looks like the page you're looking for is gone or doesn't exist.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 8321:
/*!********************************************!*\
  !*** ./src/app/pipes/fb-timestamp.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FbTimestampPipe: () => (/* binding */ FbTimestampPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


class FbTimestampPipe {
  constructor(datePipe) {
    this.datePipe = datePipe;
  }
  transform(value) {
    if (!value) return null;
    return this.datePipe.transform(value, 'mediumDate');
  }
  static {
    this.ɵfac = function FbTimestampPipe_Factory(t) {
      return new (t || FbTimestampPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "fbTimestamp",
      type: FbTimestampPipe,
      pure: true
    });
  }
}


/***/ }),

/***/ 9045:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 331);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _clerk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clerk.service */ 1411);







class ApiService {
  constructor(http, clerk) {
    this.http = http;
    this.clerk = clerk;
    this.base = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
  }
  headers() {
    var _this = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = yield _this.clerk.getToken();
      return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? {
          Authorization: `Bearer ${token}`
        } : {})
      });
    })();
  }
  get(path) {
    var _this2 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = yield _this2.headers();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this2.http.get(`${_this2.base}${path}`, {
        headers
      }));
    })();
  }
  post(path, body) {
    var _this3 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = yield _this3.headers();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this3.http.post(`${_this3.base}${path}`, body, {
        headers
      }));
    })();
  }
  put(path, body) {
    var _this4 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = yield _this4.headers();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this4.http.put(`${_this4.base}${path}`, body, {
        headers
      }));
    })();
  }
  delete(path) {
    var _this5 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = yield _this5.headers();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this5.http.delete(`${_this5.base}${path}`, {
        headers
      }));
    })();
  }
  static {
    this.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_clerk_service__WEBPACK_IMPORTED_MODULE_2__.ClerkService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 2333:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _clerk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clerk.service */ 1411);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 9045);







class AuthService {
  constructor(clerkService, api, router, route) {
    this.clerkService = clerkService;
    this.api = api;
    this.router = router;
    this.route = route;
    this.redirect = false;
    // Initialize Clerk on service creation
    clerkService.load();
    this.isAuthenticated$ = this.clerkService.session$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(session => !!session));
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.delay)(1500));
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => this.route.firstChild), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(route => route?.data ?? (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
      authOnly: false
    }))).subscribe(data => {
      this.redirect = data['authOnly'] ?? false;
    });
  }
  createUser(userData) {
    var _this = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!userData.password) {
        throw new Error('Password not provided!');
      }
      yield _this.clerkService.signUp(userData.email, userData.password, userData.name);
      // Store extra fields (age, phone) in D1 via the Worker
      yield _this.api.post('/api/users', {
        age: userData.age,
        phoneNumber: userData.phoneNumber
      });
    })();
  }
  logout($event) {
    var _this2 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ($event) {
        $event.preventDefault();
      }
      yield _this2.clerkService.signOut();
      if (_this2.redirect) {
        _this2.router.navigate(['/']);
      }
    })();
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_clerk_service__WEBPACK_IMPORTED_MODULE_1__.ClerkService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 1411:
/*!*******************************************!*\
  !*** ./src/app/services/clerk.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClerkService: () => (/* binding */ ClerkService)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _clerk_clerk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/clerk-js */ 4223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class ClerkService {
  constructor() {
    this._clerk = null;
    this._loaded = false;
    this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.session$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
  }
  load() {
    var _this = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._loaded) return;
      _this._clerk = new _clerk_clerk_js__WEBPACK_IMPORTED_MODULE_1__.Clerk(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.clerkPublishableKey);
      yield _this._clerk.load();
      _this._loaded = true;
      _this.user$.next(_this._clerk.user ?? null);
      _this.session$.next(_this._clerk.session ?? null);
      _this._clerk.addListener(({
        user,
        session
      }) => {
        _this.user$.next(user ?? null);
        _this.session$.next(session ?? null);
      });
    })();
  }
  get clerk() {
    if (!this._clerk) throw new Error('Clerk not loaded');
    return this._clerk;
  }
  getToken() {
    var _this2 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2._clerk?.session?.getToken() ?? null;
    })();
  }
  signIn(email, password) {
    var _this3 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const clerk = _this3.clerk;
      const result = yield clerk.client.signIn.create({
        identifier: email,
        password
      });
      if (result.status === 'complete') {
        yield clerk.setActive({
          session: result.createdSessionId
        });
      } else {
        throw new Error('Sign in incomplete: ' + result.status);
      }
    })();
  }
  signUp(email, password, firstName) {
    var _this4 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const clerk = _this4.clerk;
      const result = yield clerk.client.signUp.create({
        emailAddress: email,
        password,
        firstName
      });
      if (result.status === 'complete') {
        yield clerk.setActive({
          session: result.createdSessionId
        });
      } else {
        throw new Error('Sign up incomplete: ' + result.status);
      }
    })();
  }
  signOut() {
    var _this5 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.clerk.signOut();
    })();
  }
  static {
    this.ɵfac = function ClerkService_Factory(t) {
      return new (t || ClerkService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ClerkService,
      factory: ClerkService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 6200:
/*!******************************************!*\
  !*** ./src/app/services/clip.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipService: () => (/* binding */ ClipService)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 9045);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);





class ClipService {
  constructor(api, router) {
    this.api = api;
    this.router = router;
    this.pageClips = [];
    this.pendingReq = false;
    this.lastCreatedAt = null;
  }
  createClip(data) {
    var _this = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.api.post('/api/clips', data);
    })();
  }
  getUserClips(sort$) {
    var _this2 = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      const sub = sort$.subscribe( /*#__PURE__*/function () {
        var _ref = (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (sort) {
          const dir = sort === '1' ? 'desc' : 'asc';
          try {
            const clips = yield _this2.api.get(`/api/clips/my?sort=${dir}`);
            observer.next(clips);
          } catch (err) {
            observer.error(err);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return () => sub.unsubscribe();
    });
  }
  updateClip(id, title) {
    var _this3 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.api.put(`/api/clips/${id}`, {
        title
      });
    })();
  }
  deleteClip(clip) {
    var _this4 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.api.delete(`/api/clips/${clip.id}`);
    })();
  }
  getClips() {
    var _this5 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.pendingReq) return;
      _this5.pendingReq = true;
      const params = _this5.lastCreatedAt ? `?cursor=${encodeURIComponent(_this5.lastCreatedAt)}` : '';
      const clips = yield _this5.api.get(`/api/clips${params}`);
      _this5.pageClips.push(...clips);
      if (clips.length > 0) {
        _this5.lastCreatedAt = clips[clips.length - 1].createdAt;
      }
      _this5.pendingReq = false;
    })();
  }
  resolve(route, _state) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.api.get(`/api/clips/${route.params['id']}`).catch(() => {
      this.router.navigate(['/']);
      return null;
    }));
  }
  static {
    this.ɵfac = function ClipService_Factory(t) {
      return new (t || ClipService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ClipService,
      factory: ClipService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 2855:
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalService: () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ModalService {
  constructor() {
    this.modals = [];
  }
  register(id) {
    this.modals.push({
      id,
      visible: false
    });
  }
  unregister(id) {
    this.modals = this.modals.filter(element => element.id !== id);
  }
  isModalOpen(id) {
    return !!this.modals.find(element => element.id === id)?.visible;
  }
  toggleModal(id) {
    const modal = this.modals.find(element => element.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
  static {
    this.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 5193:
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertComponent: () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


const _c0 = ["*"];
class AlertComponent {
  get bgColor() {
    return `bg-${this.color}-400`;
  }
  constructor() {
    this.color = 'blue';
  }
  ngOnInit() {}
  static {
    this.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["app-alert"]],
      inputs: {
        color: "color"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [[1, "text-white", "text-center", "bold", "p-4", "mb-4", "rounded-md", 3, "ngClass"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bgColor);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 3884:
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/event-blocker.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventBlockerDirective: () => (/* binding */ EventBlockerDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class EventBlockerDirective {
  handleEvent(event) {
    event.preventDefault();
  }
  static {
    this.ɵfac = function EventBlockerDirective_Factory(t) {
      return new (t || EventBlockerDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EventBlockerDirective,
      selectors: [["", "app-event-blocker", ""]],
      hostBindings: function EventBlockerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function EventBlockerDirective_drop_HostBindingHandler($event) {
            return ctx.handleEvent($event);
          })("dragover", function EventBlockerDirective_dragover_HostBindingHandler($event) {
            return ctx.handleEvent($event);
          });
        }
      }
    });
  }
}


/***/ }),

/***/ 1060:
/*!*************************************************!*\
  !*** ./src/app/shared/input/input.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputComponent: () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mask */ 7728);





function InputComponent_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords must be at least 8 characters long, have 1 uppercase letter, 1 lowercase letter and 1 number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_container_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" The value you inputted is ", ctx_r3.control.errors == null ? null : ctx_r3.control.errors.minlength.actualLength, " characters long. It must be at least ", ctx_r3.control.errors == null ? null : ctx_r3.control.errors.minlength.requiredLength, " characters long. ");
  }
}
function InputComponent_ng_container_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You must enter a valid email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_container_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Value too low.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_container_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Value too high.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_container_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords do not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_container_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email taken. Please try another email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InputComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_ng_container_1_p_1_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputComponent_ng_container_1_p_2_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputComponent_ng_container_1_p_3_Template, 2, 2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_ng_container_1_p_4_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputComponent_ng_container_1_p_5_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputComponent_ng_container_1_p_6_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InputComponent_ng_container_1_p_7_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InputComponent_ng_container_1_p_8_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.noMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors == null ? null : ctx_r0.control.errors.emailTaken);
  }
}
class InputComponent {
  constructor() {
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
    this.type = 'text';
    this.placeholder = '';
    this.format = '';
  }
  ngOnInit() {}
  static {
    this.ɵfac = function InputComponent_Factory(t) {
      return new (t || InputComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputComponent,
      selectors: [["app-input"]],
      inputs: {
        control: "control",
        type: "type",
        placeholder: "placeholder",
        format: "format"
      },
      decls: 2,
      vars: 6,
      consts: [[1, "block", "w-full", "py-1.5", "px-3", "text-gray-200", "border", "border-gray-400", "transition", "duration-500", "focus:outline-none", "rounded", "bg-transparent", "focus:border-indigo-400", 3, "formControl", "type", "placeholder", "mask", "dropSpecialCharacters"], [4, "ngIf"], ["class", "text-red-400", 4, "ngIf"], [1, "text-red-400"]],
      template: function InputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_ng_container_1_Template, 9, 8, "ng-container", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("type", ctx.type)("placeholder", ctx.placeholder)("mask", ctx.format)("dropSpecialCharacters", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.touched && ctx.control.dirty);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_3__.NgxMaskDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 8105:
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalComponent: () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/modal.service */ 2855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



const _c0 = [[["", "heading", ""]], "*"];
const _c1 = function (a0) {
  return {
    hidden: a0
  };
};
const _c2 = ["[heading]", "*"];
class ModalComponent {
  constructor(modal, el) {
    this.modal = modal;
    this.el = el;
    this.modalID = '';
  }
  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy() {
    document.body.removeChild(this.el.nativeElement);
  }
  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
  static {
    this.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal"]],
      inputs: {
        modalID: "modalID"
      },
      ngContentSelectors: _c2,
      decls: 13,
      vars: 3,
      consts: [["id", "modal", 1, "fixed", "z-50", "inset-0", "overflow-y-auto", 3, "ngClass"], [1, "flex", "items-end", "justify-center", "min-h-screen", "pt-4", "px-4", "pb-20", "text-center", "sm:block", "sm:p-0"], [1, "fixed", "inset-0", "transition-opacity", 3, "click"], [1, "absolute", "inset-0", "bg-gray-800", "opacity-75"], [1, "hidden", "sm:inline-block", "sm:align-middle", "sm:h-screen"], [1, "inline-block", "align-bottom", "bg-secondary", "rounded-lg", "text-left", "overflow-hidden", "shadow-xl", "transform", "transition-all", "sm:my-8", "sm:align-middle", "sm:max-w-lg", "sm:w-full"], [1, "py-4", "text-left", "px-6"], [1, "flex", "justify-between", "items-center", "pb-4"], [1, "modal-close", "cursor-pointer", "z-50", 3, "click"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_2_listener() {
            return ctx.closeModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u200B");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_10_listener() {
            return ctx.closeModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u2715 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](12, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, !ctx.modal.isModalOpen(ctx.modalID)));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 7728);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal.component */ 8105);
/* harmony import */ var _tabs_container_tabs_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-container/tabs-container.component */ 564);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab/tab.component */ 4560);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/input.component */ 1060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert/alert.component */ 5193);
/* harmony import */ var _directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/event-blocker.directive */ 3884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);










class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_7__.provideEnvironmentNgxMask)()],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, _tabs_container_tabs_container_component__WEBPACK_IMPORTED_MODULE_1__.TabsContainerComponent, _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent, _input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent, _directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_5__.EventBlockerDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskDirective],
    exports: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, _tabs_container_tabs_container_component__WEBPACK_IMPORTED_MODULE_1__.TabsContainerComponent, _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent, _input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent, _directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_5__.EventBlockerDirective]
  });
})();

/***/ }),

/***/ 4560:
/*!*********************************************!*\
  !*** ./src/app/shared/tab/tab.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const _c0 = ["*"];
class TabComponent {
  constructor() {
    this.tabTitle = '';
    this.active = false;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function TabComponent_Factory(t) {
      return new (t || TabComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabComponent,
      selectors: [["app-tab"]],
      inputs: {
        tabTitle: "tabTitle",
        active: "active"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 2,
      template: function TabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.active);
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 564:
/*!*******************************************************************!*\
  !*** ./src/app/shared/tabs-container/tabs-container.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsContainerComponent: () => (/* binding */ TabsContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tab/tab.component */ 4560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




const _c0 = function (a0, a1) {
  return {
    "hover:text-indigo-400": a0,
    "hover:text-white text-white bg-indigo-400": a1
  };
};
function TabsContainerComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsContainerComponent_li_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const tab_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectTab(tab_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, !tab_r1.active, tab_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tab_r1.tabTitle);
  }
}
const _c1 = ["*"];
class TabsContainerComponent {
  constructor() {
    this.tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.QueryList();
  }
  ngAfterContentInit() {
    const activeTabs = this.tabs?.filter(tab => tab.active);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  selectTab(tab) {
    this.tabs?.forEach(tab => {
      tab.active = false;
    });
    tab.active = true;
    return false;
  }
  static {
    this.ɵfac = function TabsContainerComponent_Factory(t) {
      return new (t || TabsContainerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TabsContainerComponent,
      selectors: [["app-tabs-container"]],
      contentQueries: function TabsContainerComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _tab_tab_component__WEBPACK_IMPORTED_MODULE_0__.TabComponent, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
        }
      },
      ngContentSelectors: _c1,
      decls: 3,
      vars: 1,
      consts: [[1, "flex", "flex-wrap", "mb-4"], ["class", "flex-auto text-center", 4, "ngFor", "ngForOf"], [1, "flex-auto", "text-center"], ["href", "#", 1, "block", "rounded", "py-3", "px-4", "transition", "hover:text-white", "text-white", "bg-indigo-400", 3, "ngClass", "click"]],
      template: function TabsContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TabsContainerComponent_li_1_Template, 3, 5, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 3723:
/*!*********************************************************!*\
  !*** ./src/app/user/auth-modal/auth-modal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModalComponent: () => (/* binding */ AuthModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/modal.service */ 2855);
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/modal/modal.component */ 8105);
/* harmony import */ var _shared_tabs_container_tabs_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/tabs-container/tabs-container.component */ 564);
/* harmony import */ var _shared_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/tab/tab.component */ 4560);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ 4479);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.component */ 9191);







class AuthModalComponent {
  constructor(modal) {
    this.modal = modal;
  }
  ngOnInit() {
    this.modal.register('auth');
  }
  ngOnDestroy() {
    this.modal.unregister('auth');
  }
  static {
    this.ɵfac = function AuthModalComponent_Factory(t) {
      return new (t || AuthModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AuthModalComponent,
      selectors: [["app-auth-modal"]],
      decls: 8,
      vars: 0,
      consts: [["modalID", "auth"], ["heading", "", 1, "text-2xl", "font-bold"], ["tabTitle", "Login"], ["tabTitle", "Register"]],
      template: function AuthModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", 0)(1, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Your Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "app-tabs-container")(4, "app-tab", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-login");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-tab", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-register");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent, _shared_tabs_container_tabs_container_component__WEBPACK_IMPORTED_MODULE_2__.TabsContainerComponent, _shared_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__.TabComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 4479:
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_clerk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/clerk.service */ 1411);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 5193);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






function LoginComponent_app_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-alert", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r0.alertColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.alertMsg, "\n");
  }
}
function LoginComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(clerkService) {
    this.clerkService = clerkService;
    this.credentials = {
      email: '',
      password: ''
    };
    this.showAlert = false;
    this.alertMsg = 'Please wait! we are logging you in.';
    this.alertColor = 'blue';
    this.inSubmission = false;
  }
  login() {
    var _this = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showAlert = true;
      _this.alertMsg = 'Please wait! we are logging you in.';
      _this.alertColor = 'blue';
      _this.inSubmission = true;
      try {
        yield _this.clerkService.signIn(_this.credentials.email, _this.credentials.password);
      } catch (error) {
        const code = error?.errors?.[0]?.code ?? '';
        if (code === 'form_password_incorrect') {
          _this.alertMsg = 'The password is invalid.';
        } else if (code === 'form_identifier_not_found') {
          _this.alertMsg = 'User not found.';
        } else {
          _this.alertMsg = 'An unexpected error occurred. Please try again later.';
        }
        _this.inSubmission = false;
        _this.alertColor = 'red';
        return;
      }
      _this.alertMsg = 'Success! You are now logged in.';
      _this.alertColor = 'green';
    })();
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_clerk_service__WEBPACK_IMPORTED_MODULE_1__.ClerkService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 17,
      vars: 6,
      consts: [[3, "color", 4, "ngIf"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "mb-3"], [1, "inline-block", "mb-2"], ["type", "email", "name", "email", "placeholder", "Enter Email", "required", "", "pattern", "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", 1, "block", "w-full", "py-1.5", "px-3", "text-gray-200", "border", "border-gray-400", "transition", "duration-500", "focus:outline-none", "rounded", "bg-transparent", "focus:border-indigo-400", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "text-red-400", 4, "ngIf"], ["name", "password", "type", "password", "placeholder", "Password", "required", "", 1, "block", "w-full", "py-1.5", "px-3", "text-gray-200", "border", "border-gray-400", "transition", "duration-500", "focus:outline-none", "rounded", "bg-transparent", "focus:border-indigo-400", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", 1, "block", "w-full", "bg-indigo-400", "text-white", "py-1.5", "px-3", "rounded", "transition", "hover:bg-indigo-500", "disabled:opacity-50", "disabled:bg-indigo-400", 3, "disabled"], [3, "color"], [1, "text-red-400"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LoginComponent_app_alert_0_Template, 2, 2, "app-alert", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 5, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.credentials.email = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LoginComponent_p_8_Template, 2, 0, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3)(10, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 8, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.credentials.password = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LoginComponent_p_14_Template, 2, 0, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAlert);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.credentials.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.errors && _r2.touched && _r2.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.credentials.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.errors && _r4.touched && _r4.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r1.invalid || ctx.inSubmission);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 9191:
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _validators_register_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/register-validators */ 5134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/input/input.component */ 1060);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 5193);









function RegisterComponent_app_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-alert", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r0.alertColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.alertMsg, "\n");
  }
}
class RegisterComponent {
  constructor(auth) {
    this.auth = auth;
    this.inSubmission = false;
    this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)]);
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]);
    this.age = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(120)]);
    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]);
    this.confirm_password = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
    this.phoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(16)]);
    this.showAlert = false;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';
    this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      name: this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      confirm_password: this.confirm_password,
      phoneNumber: this.phoneNumber
    }, [_validators_register_validators__WEBPACK_IMPORTED_MODULE_1__.RegisterValidators.match('password', 'confirm_password')]);
  }
  register() {
    var _this = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showAlert = true;
      _this.alertMsg = 'Please wait! Your account is being created.';
      _this.alertColor = 'blue';
      _this.inSubmission = true;
      try {
        yield _this.auth.createUser(_this.registerForm.value);
      } catch (error) {
        const code = error?.errors?.[0]?.code ?? '';
        if (code === 'form_identifier_exists') {
          _this.alertMsg = 'The email address is already in use.';
        } else {
          _this.alertMsg = 'An unexpected error occurred. Please try again later.';
        }
        _this.alertColor = 'red';
        _this.inSubmission = false;
        return;
      }
      _this.alertMsg = 'Success! Your account has been created.';
      _this.alertColor = 'green';
    })();
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 28,
      vars: 9,
      consts: [[3, "color", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "inline-block", "mb-2"], ["placeholder", "Enter Name", 3, "control"], ["type", "email", "placeholder", "Enter Email", 3, "control"], ["type", "number", "placeholder", "Enter Age", 3, "control"], ["type", "password", "placeholder", "Enter Password", 3, "control"], ["type", "password", "placeholder", "Confirm Password", 3, "control"], ["placeholder", "Enter Phone Number", "format", "(+000) 000000000", 3, "control"], ["type", "submit", 1, "block", "w-full", "bg-indigo-400", "text-white", "py-1.5", "px-3", "rounded", "transition", "hover:bg-indigo-500", "disabled:opacity-50", "disabled:bg-indigo-400", 3, "disabled"], [3, "color"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RegisterComponent_app_alert_0_Template, 2, 2, "app-alert", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() {
            return ctx.register();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2)(7, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 2)(11, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Age");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 2)(15, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "app-input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 2)(19, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "app-input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 2)(23, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "app-input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAlert);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.age);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.confirm_password);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.phoneNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.registerForm.invalid || ctx.inSubmission);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 90:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-modal/auth-modal.component */ 3723);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 4479);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







class UserModule {
  static {
    this.ɵfac = function UserModule_Factory(t) {
      return new (t || UserModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: UserModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_0__.AuthModalComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
    exports: [_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_0__.AuthModalComponent]
  });
})();

/***/ }),

/***/ 5134:
/*!********************************************************!*\
  !*** ./src/app/user/validators/register-validators.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterValidators: () => (/* binding */ RegisterValidators)
/* harmony export */ });
class RegisterValidators {
  static match(controlName, matchingControlName) {
    return group => {
      const control = group.get(controlName);
      const matchingControl = group.get(matchingControlName);
      if (!control || !matchingControl) {
        console.error('Form controls can not be found in the form group.');
        return {
          controlNotFound: false
        };
      }
      const error = control.value === matchingControl.value ? null : {
        noMatch: true
      };
      matchingControl.setErrors(error);
      return error;
    };
  }
}
// new RegisterValidators.match() <~ Without static
// RegisterValidators.match() <~ With static

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  clerkPublishableKey: 'pk_test_YWRhcHRpbmctaGF3ay0yMy5jbGVyay5hY2NvdW50cy5kZXYk',
  apiUrl: 'https://clips-api.ragn.workers.dev',
  r2PublicUrl: 'https://pub-32cdd46afc054974a62ae644bc2977e2.r2.dev'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 5893:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map