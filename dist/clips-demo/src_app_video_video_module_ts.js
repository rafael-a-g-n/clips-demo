(self["webpackChunkclips_demo"] = self["webpackChunkclips_demo"] || []).push([["src_app_video_video_module_ts"],{

/***/ 7917:
/*!********************************************!*\
  !*** ./src/app/services/ffmpeg.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FfmpegService: () => (/* binding */ FfmpegService)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ffmpeg/ffmpeg */ 829);
/* harmony import */ var _ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class FfmpegService {
  constructor() {
    this.isRunning = false;
    this.isReady = false;
    this.ffmpeg = (0,_ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_1__.createFFmpeg)({
      log: true
    });
  }
  init() {
    var _this = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isReady) {
        return;
      }
      yield _this.ffmpeg.load();
      _this.isReady = true;
    })();
  }
  getScreenshots(file) {
    var _this2 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isRunning = true;
      const data = yield (0,_ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_1__.fetchFile)(file);
      _this2.ffmpeg.FS('writeFile', file.name, data);
      const seconds = [1, 5, 9];
      const commands = [];
      seconds.forEach(second => {
        commands.push(
        //Input
        '-i', file.name,
        //Output Options
        '-ss', `00:00:0${second}`, '-frames:v', '1', '-filter:v', 'scale=510:-1',
        //Output
        `output_0${second}.png`);
      });
      yield _this2.ffmpeg.run(...commands);
      const screenshots = [];
      seconds.forEach(second => {
        const screenshotFile = _this2.ffmpeg.FS('readFile', `output_0${second}.png`);
        const screenshotBlob = new Blob([screenshotFile.buffer], {
          type: 'image/png'
        });
        const screenshotURL = URL.createObjectURL(screenshotBlob);
        screenshots.push(screenshotURL);
      });
      _this2.isRunning = false;
      return screenshots;
    })();
  }
  blobFromURL(url) {
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield fetch(url);
      const blob = yield response.blob();
      return blob;
    })();
  }
  static {
    this.ɵfac = function FfmpegService_Factory(t) {
      return new (t || FfmpegService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: FfmpegService,
      factory: FfmpegService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 4419:
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_clerk_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/clerk.service */ 1411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class AuthGuard {
  constructor(clerkService, router) {
    this.clerkService = clerkService;
    this.router = router;
  }
  canActivate() {
    if (this.clerkService.user$.getValue() != null) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_clerk_service__WEBPACK_IMPORTED_MODULE_0__.ClerkService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 8455:
/*!**********************************************!*\
  !*** ./src/app/video/edit/edit.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/modal.service */ 2855);
/* harmony import */ var src_app_services_clip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clip.service */ 6200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/modal/modal.component */ 8105);
/* harmony import */ var _shared_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/input/input.component */ 1060);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 5193);











function EditComponent_app_alert_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-alert", 9)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", ctx_r0.alertColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.alertMsg);
  }
}
const _c0 = function (a0, a1) {
  return {
    "opacity-50": a0,
    "hover:bg-indigo-700": a1
  };
};
class EditComponent {
  constructor(modal, clipService) {
    this.modal = modal;
    this.clipService = clipService;
    this.activeClip = null;
    this.inSubmission = false;
    this.showAlert = false;
    this.alertColor = 'blue';
    this.alertMsg = 'Please wait! Updating clipt.';
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.clipID = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', {
      nonNullable: true
    });
    this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', {
      validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)],
      nonNullable: true
    });
    this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      title: this.title,
      id: this.clipID
    });
  }
  ngOnInit() {
    this.modal.register('editClip');
  }
  ngOnDestroy() {
    this.modal.unregister('editClip');
  }
  ngOnChanges() {
    if (!this.activeClip) {
      return;
    }
    this.inSubmission = false;
    this.showAlert = false;
    this.clipID.setValue(this.activeClip.id ?? '');
    this.title.setValue(this.activeClip.title);
  }
  submit() {
    var _this = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.activeClip) {
        return;
      }
      _this.inSubmission = true;
      _this.showAlert = true;
      _this.alertColor = 'blue';
      _this.alertMsg = 'Please wait! Updating clip.';
      try {
        yield _this.clipService.updateClip(_this.clipID.value, _this.title.value);
      } catch (e) {
        _this.inSubmission = false;
        _this.alertColor = 'red';
        _this.alertMsg = 'Something went wrong. Try again later';
        return;
      }
      _this.activeClip.title = _this.title.value;
      _this.update.emit(_this.activeClip);
      _this.inSubmission = false;
      _this.alertColor = 'green';
      _this.alertMsg = 'Success!';
    })();
  }
  static {
    this.ɵfac = function EditComponent_Factory(t) {
      return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_clip_service__WEBPACK_IMPORTED_MODULE_2__.ClipService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: EditComponent,
      selectors: [["app-edit"]],
      inputs: {
        activeClip: "activeClip"
      },
      outputs: {
        update: "update"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 8,
      consts: [["modalID", "editClip"], [1, "text-2xl", "font-bold"], [3, "color", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mt-4"], [1, "block", "text-xl", "mb-4"], ["placeholder", "Enter Title", 3, "control"], [1, "mt-4", "text-right"], ["type", "submit", 1, "inline-flex", "justify-center", "py-2", "px-4", "border", "border-transparent", "shadow-sm", "rounded-md", "text-white", "bg-indigo-600", "focus:outline-none", 3, "disabled", "ngClass"], [3, "color"]],
      template: function EditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", 0)(1, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Edit Video");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, EditComponent_app_alert_3_Template, 3, 2, "app-alert", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Update ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAlert);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.inSubmission)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](5, _c0, ctx.inSubmission, !ctx.inSubmission));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent, _shared_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 3361:
/*!**************************************************!*\
  !*** ./src/app/video/manage/manage.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageComponent: () => (/* binding */ ManageComponent)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_clip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/clip.service */ 6200);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/modal.service */ 2855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit/edit.component */ 8455);









const _c0 = function (a2) {
  return ["/", "clip", a2];
};
function ManageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 13)(4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageComponent_div_11_Template_a_click_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const clip_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.copyToClipboard($event, clip_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Copy Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 16)(9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageComponent_div_11_Template_a_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const clip_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.openModal($event, clip_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageComponent_div_11_Template_a_click_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const clip_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.deleteClip($event, clip_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const clip_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", clip_r1.screenshotUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, clip_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", clip_r1.title, " ");
  }
}
class ManageComponent {
  constructor(router, route, clipService, modal) {
    this.router = router;
    this.route = route;
    this.clipService = clipService;
    this.modal = modal;
    this.videoOrder = '1';
    this.clips = [];
    this.activeClip = null;
    this.sort$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.videoOrder);
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.videoOrder = params.sort === '2' ? params.sort : '1';
      this.sort$.next(this.videoOrder);
    });
    this.clipService.getUserClips(this.sort$).subscribe(clips => {
      this.clips = clips;
    });
  }
  sort(event) {
    const {
      value
    } = event.target;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value
      }
    });
  }
  openModal($event, clip) {
    $event.preventDefault();
    this.activeClip = clip;
    this.modal.toggleModal('editClip');
  }
  update($event) {
    this.clips.forEach((element, index) => {
      if (element.id == $event.id) {
        this.clips[index].title = $event.title;
      }
    });
  }
  deleteClip($event, clip) {
    $event.preventDefault();
    this.clipService.deleteClip(clip);
    this.clips.forEach((element, index) => {
      if (element.id == clip.id) {
        this.clips.splice(index, 1);
      }
    });
  }
  copyToClipboard($event, id) {
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      $event.preventDefault();
      if (!id) {
        return;
      }
      const url = `${location.origin}/clip/${id}`;
      yield navigator.clipboard.writeText(url);
      alert('Link Copied');
    })();
  }
  static {
    this.ɵfac = function ManageComponent_Factory(t) {
      return new (t || ManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_clip_service__WEBPACK_IMPORTED_MODULE_1__.ClipService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ManageComponent,
      selectors: [["app-manage"]],
      decls: 13,
      vars: 4,
      consts: [[1, "container", "mx-auto", "my-8", "bg-secondary", "p-6"], [1, "rounded", "relative", "flex", "justify-between"], ["routerLink", "/upload", 1, "bg-indigo-400", "text-white", "py-4", "px-10", "text-xl"], [1, "text-black", "px-8", "text-xl", "outline-none", "appearance-none", 3, "change"], ["value", "1", 3, "selected"], ["value", "2", 3, "selected"], [1, "container", "mx-auto", "my-8"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-4"], ["class", "mt-6 rounded-tl-2xl rounded-br-2xl shadow-xl bg-secondary flex flex-col justify-start", 4, "ngFor", "ngForOf"], [3, "activeClip", "update"], [1, "mt-6", "rounded-tl-2xl", "rounded-br-2xl", "shadow-xl", "bg-secondary", "flex", "flex-col", "justify-start"], ["href", "#"], ["crossorigin", "", 1, "card-img-top", "rounded-tl-2xl", "w-full", 3, "src"], [1, "p-6", "text-2xl"], [1, "font-bold", "mb-2", 3, "routerLink"], ["href", "#", 1, "bg-gray-400", "text-white", "px-2", "py-1", "ml-2", "text-sm", "rounded", 3, "click"], [1, "flex", "text-center", "text-2xl", "bg-gray-800", "p-2", "mt-auto"], ["href", "#", 1, "flex-1", "p-2", "border-right", "border-r-2", "border-gray-700", "transition", "hover:text-indigo-400", 3, "click"], [1, "material-icons", "text-base"], ["href", "#", 1, "flex-1", "p-2", "rounded-br-2xl", "transition", "hover:text-indigo-400", 3, "click"]],
      template: function ManageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Upload Videos");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ManageComponent_Template_select_change_4_listener($event) {
            return ctx.sort($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Recent Uploads");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Oldest Uploads");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ManageComponent_div_11_Template, 15, 5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "app-edit", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function ManageComponent_Template_app_edit_update_12_listener($event) {
            return ctx.update($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx.videoOrder === "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx.videoOrder === "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.clips);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeClip", ctx.activeClip);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__.EditComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 5561:
/*!**********************************************!*\
  !*** ./src/app/video/pipes/safe-url.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeURLPipe: () => (/* binding */ SafeURLPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class SafeURLPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
  static {
    this.ɵfac = function SafeURLPipe_Factory(t) {
      return new (t || SafeURLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeURL",
      type: SafeURLPipe,
      pure: true
    });
  }
}


/***/ }),

/***/ 3870:
/*!**************************************************!*\
  !*** ./src/app/video/upload/upload.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadComponent: () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ 4289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_clip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/clip.service */ 6200);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 9045);
/* harmony import */ var src_app_services_clerk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clerk.service */ 1411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_ffmpeg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ffmpeg.service */ 7917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/input/input.component */ 1060);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 5193);
/* harmony import */ var _shared_directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/event-blocker.directive */ 3884);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/safe-url.pipe */ 5561);















function UploadComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function UploadComponent_ng_template_6_ng_container_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " autorenew ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "bg-indigo-400 border-indigo-400 border-solid": a0
  };
};
function UploadComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dragend", function UploadComponent_ng_template_6_ng_container_0_Template_div_dragend_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.isDragOver = false);
    })("dragover", function UploadComponent_ng_template_6_ng_container_0_Template_div_dragover_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.isDragOver = true);
    })("dragenter", function UploadComponent_ng_template_6_ng_container_0_Template_div_dragenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.isDragOver = true);
    })("dragleave", function UploadComponent_ng_template_6_ng_container_0_Template_div_dragleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.isDragOver = false);
    })("mouseleave", function UploadComponent_ng_template_6_ng_container_0_Template_div_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.isDragOver = false);
    })("drop", function UploadComponent_ng_template_6_ng_container_0_Template_div_drop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.storeFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Drop your file here");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "mp4 only! Max size 70Mb");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, UploadComponent_ng_template_6_ng_container_0_span_6_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function UploadComponent_ng_template_6_ng_container_0_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.storeFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r3.isDragOver));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.ffmpegService.isRunning);
  }
}
function UploadComponent_ng_template_6_ng_template_1_app_alert_0_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r17.percentage));
  }
}
function UploadComponent_ng_template_6_ng_template_1_app_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-alert", 21)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, UploadComponent_ng_template_6_ng_template_1_app_alert_0_p_3_Template, 3, 3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r15.alertColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r15.alertMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r15.showPercentage);
  }
}
const _c1 = function (a0, a1) {
  return {
    "border-green-400": a0,
    "border-transparent": a1
  };
};
function UploadComponent_ng_template_6_ng_template_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UploadComponent_ng_template_6_ng_template_1_div_5_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const screenshot_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.selectedScreenshot = screenshot_r18);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "safeURL");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const screenshot_r18 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](4, _c1, screenshot_r18 === ctx_r16.selectedScreenshot, screenshot_r18 !== ctx_r16.selectedScreenshot));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, screenshot_r18), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
const _c2 = function (a0, a1) {
  return {
    "opacity-50": a0,
    "hover:bg-indigo-700": a1
  };
};
function UploadComponent_ng_template_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, UploadComponent_ng_template_6_ng_template_1_app_alert_0_Template, 4, 3, "app-alert", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function UploadComponent_ng_template_6_ng_template_1_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.uploadFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Select a Thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, UploadComponent_ng_template_6_ng_template_1_div_5_Template, 3, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 16)(7, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 19)(11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " Publish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r5.uploadForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.screenshots);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r5.inSubmission)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](6, _c2, ctx_r5.inSubmission, !ctx_r5.inSubmission));
  }
}
function UploadComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, UploadComponent_ng_template_6_ng_container_0_Template, 8, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, UploadComponent_ng_template_6_ng_template_1_Template, 13, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.nextStep)("ngIfElse", _r4);
  }
}
class UploadComponent {
  constructor(clipsService, api, clerkService, router, ffmpegService) {
    this.clipsService = clipsService;
    this.api = api;
    this.clerkService = clerkService;
    this.router = router;
    this.ffmpegService = ffmpegService;
    this.isDragOver = false;
    this.file = null;
    this.nextStep = false;
    this.showAlert = false;
    this.alertColor = 'blue';
    this.alertMsg = 'Please wait! Your clip is being uploaded.';
    this.inSubmission = false;
    this.percentage = 0;
    this.showPercentage = false;
    this.screenshots = [];
    this.selectedScreenshot = '';
    this.uploadAborted = false;
    this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', {
      validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3)],
      nonNullable: true
    });
    this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      title: this.title
    });
    this.ffmpegService.init();
  }
  ngOnDestroy() {
    this.uploadAborted = true;
  }
  storeFile($event) {
    var _this = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.ffmpegService.isRunning) return;
      _this.isDragOver = false;
      _this.file = $event.dataTransfer ? $event.dataTransfer?.files.item(0) ?? null : $event.target.files?.item(0) ?? null;
      if (!_this.file || _this.file.type !== 'video/mp4') return;
      _this.screenshots = yield _this.ffmpegService.getScreenshots(_this.file);
      _this.selectedScreenshot = _this.screenshots[0];
      _this.title.setValue(_this.file.name.replace(/\.[^/.]+$/, ''));
      _this.nextStep = true;
    })();
  }
  uploadFile() {
    var _this2 = this;
    return (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.uploadForm.disable();
      _this2.showAlert = true;
      _this2.alertColor = 'blue';
      _this2.alertMsg = 'Please wait! Your clip is being uploaded.';
      _this2.inSubmission = true;
      _this2.showPercentage = true;
      const clipId = (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])();
      const clipFileName = `${clipId}.mp4`;
      const screenshotFileName = `${clipId}.png`;
      const user = _this2.clerkService.user$.getValue();
      try {
        // 1. Get presigned URLs for clip and screenshot
        const [clipUpload, screenshotUpload] = yield Promise.all([_this2.api.post('/api/upload', {
          fileName: clipFileName,
          contentType: 'video/mp4'
        }), _this2.api.post('/api/upload-screenshot', {
          fileName: screenshotFileName
        })]);
        const screenshotBlob = yield _this2.ffmpegService.blobFromURL(_this2.selectedScreenshot);
        // 2. Upload both to R2 via proxy upload (with XHR for clip progress)
        yield Promise.all([_this2.uploadWithProgress(clipUpload.uploadUrl, _this2.file, 'video/mp4'), fetch(screenshotUpload.uploadUrl, {
          method: 'PUT',
          body: screenshotBlob,
          headers: {
            'Content-Type': 'image/png'
          }
        })]);
        if (_this2.uploadAborted) return;
        // 3. Create clip record in D1
        const result = yield _this2.clipsService.createClip({
          userId: user?.id ?? '',
          displayName: user?.firstName ?? user?.username ?? 'Anonymous',
          title: _this2.title.value,
          fileName: clipFileName,
          url: '',
          screenshotUrl: '',
          screenshotFileName
        });
        _this2.alertColor = 'green';
        _this2.alertMsg = 'Success! Your clip is ready to be shared.';
        _this2.showPercentage = false;
        setTimeout(() => {
          _this2.router.navigate(['clip', result.id]);
        }, 1000);
      } catch (error) {
        _this2.uploadForm.enable();
        _this2.alertColor = 'red';
        _this2.alertMsg = 'Upload failed! Please try again.';
        _this2.inSubmission = true;
        _this2.showPercentage = false;
        console.error(error);
      }
    })();
  }
  uploadWithProgress(url, file, contentType) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', url);
      xhr.setRequestHeader('Content-Type', contentType);
      xhr.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          this.percentage = event.loaded / event.total;
        }
      });
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) resolve();else reject(new Error(`Upload failed: ${xhr.status}`));
      });
      xhr.addEventListener('error', () => reject(new Error('Upload network error')));
      xhr.send(file);
    });
  }
  static {
    this.ɵfac = function UploadComponent_Factory(t) {
      return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_clip_service__WEBPACK_IMPORTED_MODULE_1__.ClipService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_clerk_service__WEBPACK_IMPORTED_MODULE_3__.ClerkService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_ffmpeg_service__WEBPACK_IMPORTED_MODULE_4__.FfmpegService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: UploadComponent,
      selectors: [["app-upload"]],
      decls: 8,
      vars: 2,
      consts: [[1, "container", "mx-auto", "my-8", "bg-secondary", "p-6"], [1, "rounded", "relative", "flex", "flex-col"], [1, "font-bold", "mb-6"], ["class", "material-icons text-center text-6xl p-8 animate-spin", 4, "ngIf", "ngIfElse"], ["uploadEditorCtr", ""], [1, "material-icons", "text-center", "text-6xl", "p-8", "animate-spin"], [4, "ngIf", "ngIfElse"], ["uploadFormCtr", ""], ["app-event-blocker", "", 1, "w-full", "px-10", "py-40", "rounded", "text-center", "cursor-pointer", "border", "border-dashed", "border-gray-400", "transition", "duration-500", "hover:text-white", "hover:bg-indigo-400", "hover:border-indigo-400", "hover:border-solid", "text-xl", 3, "ngClass", "dragend", "dragover", "dragenter", "dragleave", "mouseleave", "drop"], ["class", "material-icons text-center text-6xl p-8 animate-spin", 4, "ngIf"], ["type", "file", 1, "mt-4", 3, "change"], [3, "color", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-4", "text-xl"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-4"], ["class", "border-8 cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mt-4"], [1, "block", "text-xl", "mb-4"], ["placeholder", "Enter Title", 3, "control"], [1, "mt-4", "text-right"], ["type", "submit", 1, "inline-flex", "justify-center", "py-2", "px-4", "border", "border-transparent", "shadow-sm", "rounded-md", "text-white", "bg-indigo-600", "focus:outline-none", 3, "disabled", "ngClass"], [3, "color"], [4, "ngIf"], [1, "border-8", "cursor-pointer", 3, "ngClass", "click"], [3, "src"]],
      template: function UploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Upload Video");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, UploadComponent_span_5_Template, 2, 0, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, UploadComponent_ng_template_6_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.ffmpegService.isReady)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _shared_directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_7__.EventBlockerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.PercentPipe, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_8__.SafeURLPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 7563:
/*!***********************************************!*\
  !*** ./src/app/video/video-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoRoutingModule: () => (/* binding */ VideoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage/manage.component */ 3361);
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload/upload.component */ 3870);
/* harmony import */ var src_app_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/guards/auth.guard */ 4419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [{
  path: 'manage',
  component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_0__.ManageComponent,
  data: {
    authOnly: true
  },
  canActivate: [src_app_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: 'upload',
  component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_1__.UploadComponent,
  data: {
    authOnly: true
  },
  canActivate: [src_app_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}];
class VideoRoutingModule {
  static {
    this.ɵfac = function VideoRoutingModule_Factory(t) {
      return new (t || VideoRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: VideoRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VideoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 3817:
/*!***************************************!*\
  !*** ./src/app/video/video.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoModule: () => (/* binding */ VideoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _video_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-routing.module */ 7563);
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage/manage.component */ 3361);
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload/upload.component */ 3870);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ 8455);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/safe-url.pipe */ 5561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









class VideoModule {
  static {
    this.ɵfac = function VideoModule_Factory(t) {
      return new (t || VideoModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: VideoModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _video_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideoRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](VideoModule, {
    declarations: [_manage_manage_component__WEBPACK_IMPORTED_MODULE_1__.ManageComponent, _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__.UploadComponent, _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__.EditComponent, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeURLPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _video_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideoRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 4370:
/*!*******************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/defaultOptions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ 3681);


/*
 * Default options for browser environment
 */
const corePath = typeof process !== 'undefined' && "development" === 'development' ? new URL('/node_modules/@ffmpeg/core/dist/ffmpeg-core.js', "file:///F:/Projects/clips-demo/node_modules/@ffmpeg/ffmpeg/src/browser/defaultOptions.js").href : `https://unpkg.com/@ffmpeg/core@${_package_json__WEBPACK_IMPORTED_MODULE_0__.devDependencies["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  corePath
});

/***/ }),

/***/ 8174:
/*!**************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchFile: () => (/* binding */ fetchFile)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

const readFromBlobOrFile = blob => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    resolve(fileReader.result);
  };
  fileReader.onerror = ({
    target: {
      error: {
        code
      }
    }
  }) => {
    reject(Error(`File could not be read! Code=${code}`));
  };
  fileReader.readAsArrayBuffer(blob);
});

// eslint-disable-next-line
const fetchFile = /*#__PURE__*/function () {
  var _ref = (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_data) {
    let data = _data;
    if (typeof _data === 'undefined') {
      return new Uint8Array();
    }
    if (typeof _data === 'string') {
      /* From base64 format */
      if (/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(_data)) {
        data = atob(_data.split(',')[1]).split('').map(c => c.charCodeAt(0));
        /* From remote server/URL */
      } else {
        const res = yield fetch(new URL(_data, "file:///F:/Projects/clips-demo/node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js").href);
        data = yield res.arrayBuffer();
      }
      /* From Blob or File */
    } else if (_data instanceof File || _data instanceof Blob) {
      data = yield readFromBlobOrFile(_data);
    }
    return new Uint8Array(data);
  });
  return function fetchFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 1171:
/*!************************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCreateFFmpegCore: () => (/* binding */ getCreateFFmpegCore)
/* harmony export */ });
/* harmony import */ var F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/log */ 6541);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_log__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/errors */ 9824);
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_errors__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable no-undef */



/*
 * Fetch data from remote URL and convert to blob URL
 * to avoid CORS issue
 */
const toBlobURL = /*#__PURE__*/function () {
  var _ref = (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, mimeType) {
    (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.log)('info', `fetch ${url}`);
    const buf = yield (yield fetch(url)).arrayBuffer();
    (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.log)('info', `${url} file size = ${buf.byteLength} bytes`);
    const blob = new Blob([buf], {
      type: mimeType
    });
    const blobURL = URL.createObjectURL(blob);
    (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.log)('info', `${url} blob URL = ${blobURL}`);
    return blobURL;
  });
  return function toBlobURL(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// eslint-disable-next-line
const getCreateFFmpegCore = /*#__PURE__*/function () {
  var _ref2 = (0,F_Projects_clips_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    corePath: _corePath,
    workerPath: _workerPath,
    wasmPath: _wasmPath
  }) {
    // in Web Worker context
    // eslint-disable-next-line
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      if (typeof _corePath !== 'string') {
        throw Error('corePath should be a string!');
      }
      const coreRemotePath = new URL(_corePath, "file:///F:/Projects/clips-demo/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href;
      const corePath = yield toBlobURL(coreRemotePath, 'application/javascript');
      const wasmPath = yield toBlobURL(_wasmPath !== undefined ? _wasmPath : coreRemotePath.replace('ffmpeg-core.js', 'ffmpeg-core.wasm'), 'application/wasm');
      const workerPath = yield toBlobURL(_workerPath !== undefined ? _workerPath : coreRemotePath.replace('ffmpeg-core.js', 'ffmpeg-core.worker.js'), 'application/javascript');
      if (typeof createFFmpegCore === 'undefined') {
        return new Promise(resolve => {
          globalThis.importScripts(corePath);
          if (typeof createFFmpegCore === 'undefined') {
            throw Error((0,_utils_errors__WEBPACK_IMPORTED_MODULE_2__.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(coreRemotePath));
          }
          (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.log)('info', 'ffmpeg-core.js script loaded');
          resolve({
            createFFmpegCore,
            corePath,
            wasmPath,
            workerPath
          });
        });
      }
      (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.log)('info', 'ffmpeg-core.js script is loaded already');
      return Promise.resolve({
        createFFmpegCore,
        corePath,
        wasmPath,
        workerPath
      });
    }
    if (typeof _corePath !== 'string') {
      throw Error('corePath should be a string!');
    }
    const coreRemotePath = new URL(_corePath, "file:///F:/Projects/clips-demo/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href;
    const corePath = yield toBlobURL(coreRemotePath, 'application/javascript');
    const wasmPath = yield toBlobURL(_wasmPath !== undefined ? _wasmPath : coreRemotePath.replace('ffmpeg-core.js', 'ffmpeg-core.wasm'), 'application/wasm');
    const workerPath = yield toBlobURL(_workerPath !== undefined ? _workerPath : coreRemotePath.replace('ffmpeg-core.js', 'ffmpeg-core.worker.js'), 'application/javascript');
    if (typeof createFFmpegCore === 'undefined') {
      return new Promise(resolve => {
        const script = document.createElement('script');
        const eventHandler = () => {
          script.removeEventListener('load', eventHandler);
          if (typeof createFFmpegCore === 'undefined') {
            throw Error((0,_utils_errors__WEBPACK_IMPORTED_MODULE_2__.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(coreRemotePath));
          }
          (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.log)('info', 'ffmpeg-core.js script loaded');
          resolve({
            createFFmpegCore,
            corePath,
            wasmPath,
            workerPath
          });
        };
        script.src = corePath;
        script.type = 'text/javascript';
        script.addEventListener('load', eventHandler);
        document.getElementsByTagName('head')[0].appendChild(script);
      });
    }
    (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.log)('info', 'ffmpeg-core.js script is loaded already');
    return Promise.resolve({
      createFFmpegCore,
      corePath,
      wasmPath,
      workerPath
    });
  });
  return function getCreateFFmpegCore(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 4503:
/*!**********************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* reexport safe */ _defaultOptions__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   fetchFile: () => (/* reexport safe */ _fetchFile__WEBPACK_IMPORTED_MODULE_2__.fetchFile),
/* harmony export */   getCreateFFmpegCore: () => (/* reexport safe */ _getCreateFFmpegCore__WEBPACK_IMPORTED_MODULE_1__.getCreateFFmpegCore)
/* harmony export */ });
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultOptions */ 4370);
/* harmony import */ var _getCreateFFmpegCore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCreateFFmpegCore */ 1171);
/* harmony import */ var _fetchFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchFile */ 8174);





/***/ }),

/***/ 4425:
/*!***************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/config.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = {
  defaultArgs: [/* args[0] is always the binary path */
  './ffmpeg', /* Disable interaction mode */
  '-nostdin', /* Force to override output file */
  '-y'],
  baseOptions: {
    /* Flag to turn on/off log messages in console */
    log: false,
    /*
     * Custom logger to get ffmpeg.wasm output messages.
     * a sample logger looks like this:
     *
     * ```
     * logger = ({ type, message }) => {
     *   console.log(type, message);
     * }
     * ```
     *
     * type can be one of following:
     *
     * info: internal workflow debug messages
     * fferr: ffmpeg native stderr output
     * ffout: ffmpeg native stdout output
     */
    logger: () => {},
    /*
     * Progress handler to get current progress of ffmpeg command.
     * a sample progress handler looks like this:
     *
     * ```
     * progress = ({ ratio }) => {
     *   console.log(ratio);
     * }
     * ```
     *
     * ratio is a float number between 0 to 1.
     */
    progress: () => {},
    /*
     * Path to find/download ffmpeg.wasm-core,
     * this value should be overwriten by `defaultOptions` in
     * each environment.
     */
    corePath: ''
  }
};

/***/ }),

/***/ 6617:
/*!*********************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/createFFmpeg.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 1778)["default"]);
const {
  defaultArgs,
  baseOptions
} = __webpack_require__(/*! ./config */ 4425);
const parseArgs = __webpack_require__(/*! ./utils/parseArgs */ 7258);
const {
  defaultOptions,
  getCreateFFmpegCore
} = __webpack_require__(/*! ./node */ 4503);
const {
  version
} = __webpack_require__(/*! ../package.json */ 3681);
const NO_LOAD = Error('ffmpeg.wasm is not ready, make sure you have completed load().');
module.exports = (_options = {}) => {
  const {
    log: optLog,
    logger,
    progress: optProgress,
    ...options
  } = {
    ...baseOptions,
    ...defaultOptions,
    ..._options
  };
  let Core = null;
  let ffmpeg = null;
  let runResolve = null;
  let runReject = null;
  let running = false;
  let customLogger = () => {};
  let logging = optLog;
  let progress = optProgress;
  let duration = 0;
  let frames = 0;
  let readFrames = false;
  let ratio = 0;
  const detectCompletion = message => {
    if (message === 'FFMPEG_END' && runResolve !== null) {
      runResolve();
      runResolve = null;
      runReject = null;
      running = false;
    }
  };
  const log = (type, message) => {
    customLogger({
      type,
      message
    });
    if (logging) {
      console.log(`[${type}] ${message}`);
    }
  };
  const ts2sec = ts => {
    const [h, m, s] = ts.split(':');
    return parseFloat(h) * 60 * 60 + parseFloat(m) * 60 + parseFloat(s);
  };
  const parseProgress = (message, prog) => {
    if (typeof message === 'string') {
      if (message.startsWith('  Duration')) {
        const ts = message.split(', ')[0].split(': ')[1];
        const d = ts2sec(ts);
        prog({
          duration: d,
          ratio
        });
        if (duration === 0 || duration > d) {
          duration = d;
          readFrames = true;
        }
      } else if (readFrames && message.startsWith('    Stream')) {
        const match = message.match(/([\d.]+) fps/);
        if (match) {
          const fps = parseFloat(match[1]);
          frames = duration * fps;
        } else {
          frames = 0;
        }
        readFrames = false;
      } else if (message.startsWith('frame') || message.startsWith('size')) {
        const ts = message.split('time=')[1].split(' ')[0];
        const t = ts2sec(ts);
        const match = message.match(/frame=\s*(\d+)/);
        if (frames && match) {
          const f = parseFloat(match[1]);
          ratio = Math.min(f / frames, 1);
        } else {
          ratio = t / duration;
        }
        prog({
          ratio,
          time: t
        });
      } else if (message.startsWith('video:')) {
        prog({
          ratio: 1
        });
        duration = 0;
      }
    }
  };
  const parseMessage = ({
    type,
    message
  }) => {
    log(type, message);
    parseProgress(message, progress);
    detectCompletion(message);
  };

  /*
   * Load ffmpeg.wasm-core script.
   * In browser environment, the ffmpeg.wasm-core script is fetch from
   * CDN and can be assign to a local path by assigning `corePath`.
   * In node environment, we use dynamic require and the default `corePath`
   * is `$ffmpeg/core`.
   *
   * Typically the load() func might take few seconds to minutes to complete,
   * better to do it as early as possible.
   *
   */
  const load = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      log('info', 'load ffmpeg-core');
      if (Core === null) {
        log('info', 'loading ffmpeg-core');
        /*
         * In node environment, all paths are undefined as there
         * is no need to set them.
         */
        const {
          createFFmpegCore,
          corePath,
          workerPath,
          wasmPath
        } = yield getCreateFFmpegCore(options);
        Core = yield createFFmpegCore({
          /*
           * Assign mainScriptUrlOrBlob fixes chrome extension web worker issue
           * as there is no document.currentScript in the context of content_scripts
           */
          mainScriptUrlOrBlob: corePath,
          printErr: message => parseMessage({
            type: 'fferr',
            message
          }),
          print: message => parseMessage({
            type: 'ffout',
            message
          }),
          /*
           * locateFile overrides paths of files that is loaded by main script (ffmpeg-core.js).
           * It is critical for browser environment and we override both wasm and worker paths
           * as we are using blob URL instead of original URL to avoid cross origin issues.
           */
          locateFile: (path, prefix) => {
            if (typeof window !== 'undefined' || typeof WorkerGlobalScope !== 'undefined') {
              if (typeof wasmPath !== 'undefined' && path.endsWith('ffmpeg-core.wasm')) {
                return wasmPath;
              }
              if (typeof workerPath !== 'undefined' && path.endsWith('ffmpeg-core.worker.js')) {
                return workerPath;
              }
            }
            return prefix + path;
          }
        });
        ffmpeg = Core.cwrap(options.mainName || 'proxy_main', 'number', ['number', 'number']);
        log('info', 'ffmpeg-core loaded');
      } else {
        throw Error('ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.');
      }
    });
    return function load() {
      return _ref.apply(this, arguments);
    };
  }();

  /*
   * Determine whether the Core is loaded.
   */
  const isLoaded = () => Core !== null;

  /*
   * Run ffmpeg command.
   * This is the major function in ffmpeg.wasm, you can just imagine it
   * as ffmpeg native cli and what you need to pass is the same.
   *
   * For example, you can convert native command below:
   *
   * ```
   * $ ffmpeg -i video.avi -c:v libx264 video.mp4
   * ```
   *
   * To
   *
   * ```
   * await ffmpeg.run('-i', 'video.avi', '-c:v', 'libx264', 'video.mp4');
   * ```
   *
   */
  const run = (..._args) => {
    log('info', `run ffmpeg command: ${_args.join(' ')}`);
    if (Core === null) {
      throw NO_LOAD;
    } else if (running) {
      throw Error('ffmpeg.wasm can only run one command at a time');
    } else {
      running = true;
      return new Promise((resolve, reject) => {
        const args = [...defaultArgs, ..._args].filter(s => s.length !== 0);
        runResolve = resolve;
        runReject = reject;
        ffmpeg(...parseArgs(Core, args));
      });
    }
  };

  /*
   * Run FS operations.
   * For input/output file of ffmpeg.wasm, it is required to save them to MEMFS
   * first so that ffmpeg.wasm is able to consume them. Here we rely on the FS
   * methods provided by Emscripten.
   *
   * Common methods to use are:
   * ffmpeg.FS('writeFile', 'video.avi', new Uint8Array(...)): writeFile writes
   * data to MEMFS. You need to use Uint8Array for binary data.
   * ffmpeg.FS('readFile', 'video.mp4'): readFile from MEMFS.
   * ffmpeg.FS('unlink', 'video.map'): delete file from MEMFS.
   *
   * For more info, check https://emscripten.org/docs/api_reference/Filesystem-API.html
   *
   */
  const FS = (method, ...args) => {
    log('info', `run FS.${method} ${args.map(arg => typeof arg === 'string' ? arg : `<${arg.length} bytes binary file>`).join(' ')}`);
    if (Core === null) {
      throw NO_LOAD;
    } else {
      let ret = null;
      try {
        ret = Core.FS[method](...args);
      } catch (e) {
        if (method === 'readdir') {
          throw Error(`ffmpeg.FS('readdir', '${args[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`);
        } else if (method === 'readFile') {
          throw Error(`ffmpeg.FS('readFile', '${args[0]}') error. Check if the path exists`);
        } else {
          throw Error('Oops, something went wrong in FS operation.');
        }
      }
      return ret;
    }
  };

  /**
   * forcibly terminate the ffmpeg program.
   */
  const exit = () => {
    if (Core === null) {
      throw NO_LOAD;
    } else {
      // if there's any pending runs, reject them
      if (runReject) {
        runReject('ffmpeg has exited');
      }
      running = false;
      try {
        Core.exit(1);
      } catch (err) {
        log(err.message);
        if (runReject) {
          runReject(err);
        }
      } finally {
        Core = null;
        ffmpeg = null;
        runResolve = null;
        runReject = null;
      }
    }
  };
  const setProgress = _progress => {
    progress = _progress;
  };
  const setLogger = _logger => {
    customLogger = _logger;
  };
  const setLogging = _logging => {
    logging = _logging;
  };
  log('info', `use ffmpeg.wasm v${version}`);
  return {
    setProgress,
    setLogger,
    setLogging,
    load,
    isLoaded,
    run,
    exit,
    FS
  };
};

/***/ }),

/***/ 829:
/*!**************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! regenerator-runtime/runtime */ 6032);
const createFFmpeg = __webpack_require__(/*! ./createFFmpeg */ 6617);
const {
  fetchFile
} = __webpack_require__(/*! ./node */ 4503);
module.exports = {
  /*
   * Create ffmpeg instance.
   * Each ffmpeg instance owns an isolated MEMFS and works
   * independently.
   *
   * For example:
   *
   * ```
   * const ffmpeg = createFFmpeg({
   *  log: true,
   *  logger: () => {},
   *  progress: () => {},
   *  corePath: '',
   * })
   * ```
   *
   * For the usage of these four arguments, check config.js
   *
   */
  createFFmpeg,
  /*
   * Helper function for fetching files from various resource.
   * Sometimes the video/audio file you want to process may located
   * in a remote URL and somewhere in your local file system.
   *
   * This helper function helps you to fetch to file and return an
   * Uint8Array variable for ffmpeg.wasm to consume.
   *
   */
  fetchFile
};

/***/ }),

/***/ 9824:
/*!*********************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/utils/errors.js ***!
  \*********************************************************/
/***/ ((module) => {

const CREATE_FFMPEG_CORE_IS_NOT_DEFINED = corePath => `
createFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ${corePath}. Use another URL when calling createFFmpeg():

const ffmpeg = createFFmpeg({
  corePath: 'http://localhost:3000/ffmpeg-core.js',
});
`;
module.exports = {
  CREATE_FFMPEG_CORE_IS_NOT_DEFINED
};

/***/ }),

/***/ 6541:
/*!******************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/utils/log.js ***!
  \******************************************************/
/***/ ((module) => {

let logging = false;
let customLogger = () => {};
const setLogging = _logging => {
  logging = _logging;
};
const setCustomLogger = logger => {
  customLogger = logger;
};
const log = (type, message) => {
  customLogger({
    type,
    message
  });
  if (logging) {
    console.log(`[${type}] ${message}`);
  }
};
module.exports = {
  logging,
  setLogging,
  setCustomLogger,
  log
};

/***/ }),

/***/ 7258:
/*!************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/utils/parseArgs.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = (Core, args) => {
  const argsPtr = Core._malloc(args.length * Uint32Array.BYTES_PER_ELEMENT);
  args.forEach((s, idx) => {
    const sz = Core.lengthBytesUTF8(s) + 1;
    const buf = Core._malloc(sz);
    Core.stringToUTF8(s, buf, sz);
    Core.setValue(argsPtr + Uint32Array.BYTES_PER_ELEMENT * idx, buf, 'i32');
  });
  return [args.length, argsPtr];
};

/***/ }),

/***/ 6032:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);
        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return {
      next: doneResult
    };
  }
  exports.values = values;
  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ 9210:
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ 9772:
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 7948:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ 7858:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 9359);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ 4289:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ 9210);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ 7948);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ 7858);



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 9359:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 9772);

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 1778:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3681:
/*!**************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/package.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@ffmpeg/ffmpeg","version":"0.11.6","description":"FFmpeg WebAssembly version","main":"src/index.js","types":"src/index.d.ts","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","start:worker":"node scripts/worker-server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}');

/***/ })

}]);
//# sourceMappingURL=src_app_video_video_module_ts.js.map