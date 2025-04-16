(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/azerothcore.github.io/azerothcore.github.io/git-catalogue/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2bqi":
    /*!*******************************************!*\
      !*** ./src/app/pipes/emoji-fixup.pipe.ts ***!
      \*******************************************/

    /*! exports provided: EmojiFixupPipe */

    /***/
    function bqi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmojiFixupPipe", function () {
        return EmojiFixupPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _assets_emoji_map_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../assets/emoji_map.json */
      "LlOg");

      var _assets_emoji_map_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../assets/emoji_map.json */
      "LlOg", 1);

      var EmojiFixupPipe = /*#__PURE__*/function () {
        function EmojiFixupPipe() {
          _classCallCheck(this, EmojiFixupPipe);
        }

        _createClass(EmojiFixupPipe, [{
          key: "transform",
          value: function transform(value) {
            return this.substitute(value);
          }
        }, {
          key: "substitute",
          value: function substitute(input) {
            var _a, _b;

            var text = input;
            var matches = (_a = input.match(EmojiFixupPipe.regex)) !== null && _a !== void 0 ? _a : [];

            var _iterator = _createForOfIteratorHelper(matches),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var match = _step.value;
                text = text.replace(match, (_b = EmojiFixupPipe.emojis.get(match)) !== null && _b !== void 0 ? _b : match);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return text;
          }
        }]);

        return EmojiFixupPipe;
      }();

      EmojiFixupPipe.emojis = function () {
        var map = new Map();

        for (var _i = 0, _arr = _toConsumableArray(Object.entries(_assets_emoji_map_json__WEBPACK_IMPORTED_MODULE_1__)); _i < _arr.length; _i++) {
          var _arr$_i = _slicedToArray(_arr[_i], 2),
              key = _arr$_i[0],
              value = _arr$_i[1];

          map.set(key.toLowerCase(), value);
        }

        return map;
      }();

      EmojiFixupPipe.regex = /\:[a-zA-Z0-9\-\_]+\:/gim;

      EmojiFixupPipe.ɵfac = function EmojiFixupPipe_Factory(t) {
        return new (t || EmojiFixupPipe)();
      };

      EmojiFixupPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "emojiFixup",
        type: EmojiFixupPipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmojiFixupPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'emojiFixup'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _services_catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/catalogue/catalogue.service */
      "dNPv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _repo_repo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../repo/repo.component */
      "AFWc");

      function HomeComponent_div_17_mat_tab_3_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-repo", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r6.id)("name", item_r6.name)("stars", item_r6.stargazers_count)("created", item_r6.created_at)("description", item_r6.description)("fullName", item_r6.full_name);
        }
      }

      function HomeComponent_div_17_mat_tab_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_17_mat_tab_3_div_1_div_1_Template, 2, 6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-paginator", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function HomeComponent_div_17_mat_tab_3_div_1_Template_mat_paginator_page_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r7.onPageChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r4 = ctx.ngIf;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.currentPageItems(items_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx_r3.page)("length", items_r4.length)("pageSize", ctx_r3.catalogueService.CONF.pageSize)("hidePageSize", true);
        }
      }

      function HomeComponent_div_17_mat_tab_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_17_mat_tab_3_div_1_Template, 3, 5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", key_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.catalogueService.items$[key_r2]));
        }
      }

      function HomeComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusChange", function HomeComponent_div_17_Template_mat_tab_group_focusChange_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.page = 0;
          })("selectedTabChange", function HomeComponent_div_17_Template_mat_tab_group_selectedTabChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onTabChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_17_mat_tab_3_Template, 3, 4, "mat-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r0.catalogueService.tabIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.catalogueService.confTabsKeys);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(catalogueService, cdRef, location) {
          _classCallCheck(this, HomeComponent);

          this.catalogueService = catalogueService;
          this.cdRef = cdRef;
          this.location = location;
          this.page = 0;
          this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
          window.parent.document.title = 'GitCatalogue';
        }

        _createClass(HomeComponent, [{
          key: "refresh",
          value: function refresh() {
            this.cdRef.detectChanges();
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(page) {
            this.page = page.pageIndex;
          }
        }, {
          key: "onTabChange",
          value: function onTabChange(tab) {
            var index = tab.index;
            var tabName = Object.keys(this.catalogueService.CONF.tabs)[index];
            var path = "/tab".concat(this.catalogueService.CONF.tabs[tabName].path);

            if (this.location.path() !== path) {
              this.location.go(path);
            }
          }
        }, {
          key: "currentPageItems",
          value: function currentPageItems(modules) {
            var _this = this;

            var filteredItems = modules;

            if (!!this.search) {
              filteredItems = filteredItems.filter(function (item) {
                return item.name.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
              });
            }

            return filteredItems.slice(this.catalogueService.CONF.pageSize * this.page, this.catalogueService.CONF.pageSize * (this.page + 1));
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"]])],
        decls: 18,
        vars: 3,
        consts: [[1, "row"], [1, "col-6"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "search", 1, "input-group-text"], [3, "icon"], ["type", "text", "placeholder", "Search an item in the catalogue", "aria-label", "Search", "aria-describedby", "search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col", "alert", "alert-info", "alert-submit"], ["href", "#/how-to"], ["class", "row", 4, "ngIf"], [1, "col-12"], [3, "selectedIndex", "focusChange", "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [4, "ngFor", "ngForOf"], [3, "pageIndex", "length", "pageSize", "hidePageSize", "page"], [3, "id", "name", "stars", "created", "description", "fullName"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Search an item by name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.search = $event;
            })("ngModelChange", function HomeComponent_Template_input_ngModelChange_7_listener() {
              return ctx.refresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Want to submit your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "repository");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "? Check the instructions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_17_Template, 4, 2, "div", 9);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.catalogueService.tabIndex !== -1);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], _repo_repo_component__WEBPACK_IMPORTED_MODULE_8__["RepoComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            providers: [_services_catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"]]
          }]
        }], function () {
          return [{
            type: _services_catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AFWc":
    /*!****************************************!*\
      !*** ./src/app/repo/repo.component.ts ***!
      \****************************************/

    /*! exports provided: RepoComponent */

    /***/
    function AFWc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepoComponent", function () {
        return RepoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular2-moment */
      "5eXZ");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_3__);

      var RepoComponent = function RepoComponent() {
        _classCallCheck(this, RepoComponent);

        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
      };

      RepoComponent.ɵfac = function RepoComponent_Factory(t) {
        return new (t || RepoComponent)();
      };

      RepoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RepoComponent,
        selectors: [["app-repo"]],
        inputs: {
          id: "id",
          name: "name",
          stars: "stars",
          created: "created",
          description: "description",
          fullName: "fullName"
        },
        decls: 12,
        vars: 10,
        consts: [[1, "media"], ["onerror", "this.src = 'https://avatars0.githubusercontent.com/u/20147732?v=4';", 1, "mr-3", "logo-small", 3, "src", "alt"], [1, "media-body"], [1, "mt-0", "mb-0"], [3, "href"], [1, "text-muted", "text-tiny"], [3, "icon"]],
        template: function RepoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "amTimeAgo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://raw.githubusercontent.com/" + ctx.fullName + "/master/icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#/details/", ctx.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.stars, " | Created ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx.created), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
        pipes: [angular2_moment__WEBPACK_IMPORTED_MODULE_3__["TimeAgoPipe"]],
        styles: [".logo-small[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlcG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InJlcG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1zbWFsbCB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG59XG4iXX0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-repo',
            templateUrl: './repo.component.html',
            styleUrls: ['./repo.component.scss']
          }]
        }], null, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          stars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          created: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fullName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    "C5eQ":
    /*!*********************************************************************!*\
      !*** ./src/app/services/resolvers/repo-details-resolver.service.ts ***!
      \*********************************************************************/

    /*! exports provided: RepoDetailsResolverService */

    /***/
    function C5eQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepoDetailsResolverService", function () {
        return RepoDetailsResolverService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../catalogue/catalogue.service */
      "dNPv");

      var RepoDetailsResolverService = /*#__PURE__*/function () {
        function RepoDetailsResolverService(catalogueService) {
          _classCallCheck(this, RepoDetailsResolverService);

          this.catalogueService = catalogueService;
        }

        _createClass(RepoDetailsResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this2 = this;

            var id = route.params.id;
            var repo$ = this.catalogueService.getLocalRepo(id);
            return repo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (repo) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
                repo: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(repo),
                readme: _this2.catalogueService.getRawReadmeDefault(repo),
                logo: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])("https://raw.githubusercontent.com/".concat(repo.full_name, "/master/icon.png"))
              });
            }));
          }
        }]);

        return RepoDetailsResolverService;
      }();

      RepoDetailsResolverService.ɵfac = function RepoDetailsResolverService_Factory(t) {
        return new (t || RepoDetailsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_3__["CatalogueService"]));
      };

      RepoDetailsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RepoDetailsResolverService,
        factory: RepoDetailsResolverService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepoDetailsResolverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_3__["CatalogueService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "L6jA":
    /*!**************************************************!*\
      !*** ./src/app/catalogue/catalogue.component.ts ***!
      \**************************************************/

    /*! exports provided: CatalogueComponent */

    /***/
    function L6jA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function () {
        return CatalogueComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CatalogueComponent = function CatalogueComponent() {
        _classCallCheck(this, CatalogueComponent);
      };

      CatalogueComponent.ɵfac = function CatalogueComponent_Factory(t) {
        return new (t || CatalogueComponent)();
      };

      CatalogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CatalogueComponent,
        selectors: [["app-catalogue"]],
        decls: 2,
        vars: 0,
        consts: [[1, "container", "mt-5"]],
        template: function CatalogueComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogueComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-catalogue',
            templateUrl: './catalogue.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LlOg":
    /*!***********************************!*\
      !*** ./src/assets/emoji_map.json ***!
      \***********************************/

    /*! exports provided: :woman_woman_girl_girl:, :woman_woman_girl_boy:, :woman_woman_boy_boy:, :man_woman_girl_girl:, :man_woman_girl_boy:, :man_woman_boy_boy:, :man_man_girl_girl:, :man_man_girl_boy:, :man_man_boy_boy:, :woman_woman_girl:, :woman_woman_boy:, :woman_girl_girl:, :woman_girl_boy:, :woman_boy_boy:, :man_woman_girl:, :man_man_girl:, :man_man_boy:, :man_girl_girl:, :man_girl_boy:, :man_boy_boy:, :woman_girl:, :woman_boy:, :man_girl:, :man_boy:, :joy:, :heart:, :heart_eyes:, :sob:, :blush:, :unamused:, :kissing_heart:, :two_hearts:, :weary:, :ok_hand:, :pensive:, :smirk:, :grin:, :wink:, :thumbsup:, :pray:, :relieved:, :notes:, :flushed:, :raised_hands:, :see_no_evil:, :cry:, :sunglasses:, :v:, :eyes:, :sweat_smile:, :sparkles:, :sleeping:, :smile:, :purple_heart:, :broken_heart:, :hundred_points:, :expressionless:, :sparkling_heart:, :blue_heart:, :confused:, :man_tipping_hand:, :information_desk_person:, :stuck_out_tongue_winking_eye:, :disappointed:, :yum:, :neutral_face:, :sleepy:, :clap:, :cupid:, :heartpulse:, :revolving_hearts:, :arrow_left:, :speak_no_evil:, :raised_hand:, :kiss:, :point_right:, :cherry_blossom:, :scream:, :fire:, :rage:, :smiley:, :tada:, :oncoming_fist:, :tired_face:, :camera:, :rose:, :stuck_out_tongue_closed_eyes:, :muscle:, :skull:, :sunny:, :yellow_heart:, :triumph:, :new_moon_with_face:, :laughing:, :sweat:, :point_left:, :heavy_check_mark:, :heart_eyes_cat:, :grinning:, :mask:, :green_heart:, :wave:, :persevere:, :heartbeat:, :arrow_forward:, :arrow_backward:, :arrow_right_hook:, :leftwards_arrow_with_hook:, :crown:, :kissing_closed_eyes:, :stuck_out_tongue:, :disappointed_relieved:, :innocent:, :headphones:, :white_check_mark:, :confounded:, :arrow_right:, :angry:, :grimacing:, :star2:, :gun:, :man_raising_hand:, :raising_hand:, :thumbsdown:, :dancer:, :musical_note:, :no_mouth:, :dizzy:, :fist:, :point_down:, :red_circle:, :man_gesturing_NO:, :no_good:, :boom:, :copyright:, :thought_balloon:, :tongue:, :poop:, :cold_sweat:, :gem:, :man_gesturing_OK:, :ok_woman:, :pizza:, :joy_cat:, :sun_with_face:, :leaves:, :sweat_drops:, :penguin:, :zzz:, :woman_walking:, :walking:, :airplane:, :balloon:, :star:, :ribbon:, :ballot_box_with_check:, :worried:, :underage:, :fearful:, :four_leaf_clover:, :hibiscus:, :microphone:, :open_hands:, :ghost:, :palm_tree:, :bangbang:, :nail_care:, :x:, :alien:, :woman_bowing:, :bow:, :soccer:, :angel:, :men_with_bunny_ears:, :dancers:, :exclamation:, :snowflake:, :point_up:, :kissing_smiling_eyes:, :rainbow:, :crescent_moon:, :heart_decoration:, :gift_heart:, :gift:, :beers:, :anguished:, :earth_africa:, :movie_camera:, :anchor:, :zap:, :club_suit:, :heavy_multiplication_x:, :woman_running:, :runner:, :sunflower:, :earth_americas:, :bouquet:, :dog:, :moneybag:, :herb:, :couple:, :fallen_leaf:, :tulip:, :birthday:, :cat:, :coffee:, :dizzy_face:, :point_up_2:, :open_mouth:, :hushed:, :basketball:, :christmas_tree:, :ring:, :full_moon_with_face:, :astonished:, :two_women_holding_hands:, :money_with_wings:, :crying_cat_face:, :hear_no_evil:, :dash:, :cactus:, :hotsprings:, :telephone:, :maple_leaf:, :princess:, :man_getting_massage:, :massage:, :love_letter:, :trophy:, :man_frowning:, :person_frowning:, :us:, :confetti_ball:, :blossom:, :kitchen_knife:, :lips:, :fries:, :doughnut:, :frowning:, :ocean:, :bomb:, :ok:, :cyclone:, :rocket:, :couplekiss:, :couple_woman_kiss:, :couple_man_kiss:, :couple_with_heart:, :woman_woman:, :man_man_love:, :lollipop:, :clapper:, :pig:, :smiling_imp:, :imp:, :bee:, :kissing_cat:, :anger:, :musical_score:, :santa:, :earth_asia:, :football:, :guitar:, :diamond_suit:, :panda_face:, :speech_balloon:, :strawberry:, :smirk_cat:, :banana:, :watermelon:, :snowman:, :smile_cat:, :spade_suit:, :top:, :eggplant:, :crystal_ball:, :fork_and_knife:, :calling:, :iphone:, :partly_sunny:, :warning:, :scream_cat:, :small_orange_diamond:, :baby:, :feet:, :footprints:, :beer:, :wine_glass:, :o:, :video_camera:, :rabbit:, :tropical_drink:, :smoking:, :space_invader:, :peach:, :snake:, :turtle:, :cherries:, :kissing:, :frog:, :milky_way:, :rotating_light:, :hatching_chick:, :closed_book:, :candy:, :hamburger:, :bear:, :tiger:, :automobile:, :fast_forward:, :icecream:, :pineapple:, :ear_of_rice:, :syringe:, :put_litter_in_its_place:, :chocolate_bar:, :black_small_square:, :tv:, :pill:, :octopus:, :jack_o_lantern:, :grapes:, :smiley_cat:, :cd:, :cocktail:, :cake:, :video_game:, :trade_mark:, :arrow_down:, :no_entry_sign:, :lipstick:, :whale:, :memo:, :registered:, :cookie:, :dolphin:, :loud_sound:, :man:, :hatched_chick:, :monkey:, :books:, :japanese_ogre:, :woman_guard:, :guardsman:, :loudspeaker:, :scissors:, :girl:, :mortar_board:, :fr:, :baseball:, :vertical_traffic_light:, :woman:, :fireworks:, :stars:, :sos:, :mushroom:, :pouting_cat:, :left_luggage:, :high_heel:, :dart:, :woman_swimming:, :swimmer:, :key:, :bikini:, :family:, :pencil2:, :elephant:, :droplet:, :seedling:, :apple:, :cool:, :telephone_receiver:, :dollar:, :house_with_garden:, :book:, :man_getting_haircut:, :haircut:, :computer:, :bulb:, :question:, :back:, :boy:, :closed_lock_with_key:, :man_pouting:, :person_with_pouting_face:, :tangerine:, :leftright_arrow:, :sunrise:, :poultry_leg:, :blue_circle:, :oncoming_automobile:, :shaved_ice:, :it:, :bird:, :gb:, :first_quarter_moon_with_face:, :eyeglasses:, :goat:, :night_with_stars:, :older_woman:, :black_circle:, :new_moon:, :two_men_holding_hands:, :white_circle:, :customs:, :tropical_fish:, :house:, :arrows_clockwise:, :last_quarter_moon_with_face:, :round_pushpin:, :full_moon:, :athletic_shoe:, :lemon:, :baby_bottle:, :artist_palette:, :envelope:, :spaghetti:, :wind_chime:, :fish_cake:, :evergreen_tree:, :up:, :arrow_up:, :arrow_upper_right:, :arrow_lower_right:, :arrow_lower_left:, :performing_arts:, :nose:, :pig_nose:, :fish:, :woman_wearing_turban:, :man_with_turban:, :koala:, :ear:, :eight_spoked_asterisk:, :small_blue_diamond:, :shower:, :bug:, :ramen:, :tophat:, :bride_with_veil:, :fuelpump:, :checkered_flag:, :horse:, :watch:, :monkey_face:, :baby_symbol:, :new:, :free:, :sparkler:, :corn:, :tennis:, :alarm_clock:, :battery:, :grey_exclamation:, :wolf:, :moyai:, :cow:, :mega:, :older_man:, :dress:, :link:, :chicken:, :cooking:, :whale2:, :arrow_upper_left:, :deciduous_tree:, :bento:, :pushpin:, :soon:, :repeat:, :dragon:, :hamster:, :golf:, :woman_surfing:, :surfer:, :mouse:, :waxing_crescent_moon:, :blue_car:, :a:, :interrobang:, :u5272:, :electric_plug:, :first_quarter_moon:, :cancer:, :trident:, :bread:, :woman_police_officer:, :cop:, :tea:, :fishing_pole_and_fish:, :waxing_gibbous_moon:, :bike:, :bust_in_silhouette:, :rice:, :radio:, :baby_chick:, :arrow_heading_down:, :waning_crescent_moon:, :arrow_up_down:, :last_quarter_moon:, :radio_button:, :sheep:, :blond_hair:, :person_with_blond_hair:, :waning_gibbous_moon:, :lock:, :green_apple:, :japanese_goblin:, :curly_loop:, :triangular_flag_on_post:, :arrows_counterclockwise:, :racehorse:, :fried_shrimp:, :sunrise_over_mountains:, :volcano:, :rooster:, :inbox_tray:, :wedding:, :sushi:, :wavy_dash:, :ice_cream:, :rewind:, :tomato:, :rabbit2:, :eight_pointed_black_star:, :small_red_triangle:, :high_brightness:, :heavy_plus_sign:, :man_with_gua_pi_mao:, :convenience_store:, :busts_in_silhouette:, :beetle:, :small_red_triangle_down:, :ger:, :arrow_heading_up:, :name_badge:, :bath:, :no_entry:, :crocodile:, :chestnut:, :dog2:, :cat2:, :hammer:, :meat_on_bone:, :shell:, :sparkle:, :sailboat:, :b:, :m:, :poodle:, :aquarius:, :stew:, :jeans:, :honey_pot:, :musical_keyboard:, :unlock:, :statue_of_liberty:, :heavy_dollar_sign:, :snowboarder:, :white_flower:, :necktie:, :diamond_shape_with_a_dot_inside:, :aries:, :womens:, :ant:, :scorpius:, :city_sunset:, :hourglass_flowing_sand:, :o2:, :dragon_face:, :snail:, :dvd:, :shirt:, :game_die:, :heavy_minus_sign:, :dolls:, :sagittarius:, :8ball:, :bus:, :custard:, :crossed_flags:, :part_alternation_mark:, :camel:, :curry:, :steam_locomotive:, :hospital:, :jp:, :large_blue_diamond:, :tanabata_tree:, :bell:, :leo:, :gemini:, :pear:, :large_orange_diamond:, :taurus:, :globe_with_meridians:, :door:, :clock6:, :oncoming_police_car:, :envelope_with_arrow:, :closed_umbrella:, :saxophone:, :church:, :woman_biking:, :bicyclist:, :pisces:, :dango:, :capricorn:, :office:, :woman_rowing_boat:, :rowboat:, :womans_hat:, :mans_shoe:, :love_hotel:, :mount_fuji:, :dromedary_camel:, :handbag:, :hourglass:, :negative_squared_cross_mark:, :trumpet:, :school:, :cow2:, :cityscape_at_dusk:, :woman_construction_worker:, :construction_worker:, :toilet:, :pig2:, :grey_question:, :beginner:, :violin:, :on:, :credit_card:, :id:, :secret:, :ferris_wheel:, :bowling:, :libra:, :virgo:, :barber:, :purse:, :roller_coaster:, :rat:, :date:, :rugby_football:, :ram:, :arrow_up_small:, :black_square_button:, :mobile_phone_off:, :tokyo_tower:, :congratulations:, :kimono:, :ru:, :ship:, :mag_right:, :mag:, :fire_engine:, :clock1130:, :police_car:, :black_joker:, :bridge_at_night:, :package:, :oncoming_taxi:, :calendar:, :horse_racing:, :tiger2:, :boot:, :ambulance:, :white_square_button:, :boar:, :school_satchel:, :loop:, :pound:, :information_source:, :ox:, :rice_ball:, :vs:, :end:, :parking:, :sandal:, :tent:, :seat:, :taxi:, :black_medium_small_square:, :briefcase:, :newspaper:, :circus_tent:, :six_pointed_star:, :mens:, :european_castle:, :flashlight:, :foggy:, :arrow_double_up:, :bamboo:, :ticket:, :helicopter:, :minidisc:, :oncoming_bus:, :melon:, :white_small_square:, :european_post_office:, :keycap_ten:, :notebook:, :no_bell:, :oden:, :flags:, :carousel_horse:, :blowfish:, :chart_with_upwards_trend:, :sweet_potato:, :ski:, :clock12:, :signal_strength:, :construction:, :black_medium_square:, :satellite:, :euro:, :womans_clothes:, :ledger:, :leopard:, :low_brightness:, :clock3:, :department_store:, :truck:, :sake:, :railway_car:, :speedboat:, :ko:, :vhs:, :clock1:, :arrow_double_down:, :water_buffalo:, :arrow_down_small:, :yen:, :mute:, :running_shirt_with_sash:, :white_large_square:, :wheelchair:, :clock2:, :paperclip:, :atm:, :cinema:, :telescope:, :rice_scene:, :blue_book:, :white_medium_square:, :postbox:, :e-mail:, :mouse2:, :bullettrain_side:, :ideograph_advantage:, :nut_and_bolt:, :ng:, :hotel:, :wc:, :izakaya_lantern:, :repeat_one:, :mailbox_with_mail:, :chart_with_downwards_trend:, :green_book:, :tractor:, :fountain:, :metro:, :clipboard:, :no_mobile_phones:, :clock4:, :no_smoking:, :black_large_square:, :slot_machine:, :clock5:, :bathtub:, :scroll:, :station:, :rice_cracker:, :bank:, :wrench:, :u6307:, :articulated_lorry:, :page_facing_up:, :ophiuchus:, :bar_chart:, :no_pedestrians:, :cn:, :vibration_mode:, :clock10:, :clock9:, :bullettrain_front:, :minibus:, :tram:, :clock8:, :u7a7a:, :traffic_light:, :woman_mountain_biking:, :mountain_bicyclist:, :microscope:, :japanese_castle:, :bookmark:, :bookmark_tabs:, :pouch:, :ab:, :page_with_curl:, :flower_playing_cards:, :clock11:, :fax:, :clock7:, :white_medium_small_square:, :currency_exchange:, :sound:, :chart:, :cl:, :floppy_disk:, :post_office:, :speaker:, :japan:, :u55b6:, :mahjong:, :incoming_envelope:, :orange_book:, :restroom:, :u7121:, :u6709:, :triangular_ruler:, :train:, :u7533:, :trolleybus:, :u6708:, :input_numbers:, :notebook_with_decorative_cover:, :u7981:, :u6e80:, :postal_horn:, :factory:, :children_crossing:, :train2:, :straight_ruler:, :pager:, :accept:, :u5408:, :lock_with_ink_pen:, :clock130:, :sa:, :outbox_tray:, :twisted_rightwards_arrows:, :mailbox:, :light_rail:, :clock930:, :busstop:, :open_file_folder:, :file_folder:, :potable_water:, :card_index:, :clock230:, :monorail:, :clock1230:, :clock1030:, :abc:, :mailbox_closed:, :clock430:, :mountain_railway:, :do_not_litter:, :clock330:, :heavy_division_sign:, :clock730:, :clock530:, :capital_abcd:, :mailbox_with_no_mail:, :symbols:, :aerial_tramway:, :clock830:, :clock630:, :abcd:, :mountain_cableway:, :koko:, :passport_control:, :non-potable_water:, :suspension_railway:, :baggage_claim:, :no_bicycles:, :rainbow_flag:, :woman_detective:, :detective:, :skull_crossbones:, :hugging:, :robot:, :face_with_headbandage:, :thinking:, :nerd:, :face_with_thermometer:, :moneymouth_face:, :zipper_mouth:, :rolling_eyes:, :upside_down:, :slight_smile:, :slightly_frowning_face:, :sign_of_the_horns:, :vulcan_salute:, :middle_finger:, :hand_with_fingers_splayed:, :writing_hand:, :eye_speachbubble:, :weightlifter_woman_dt:, :weightlifter_woman_mdt:, :weightlifter_woman_mt:, :weightlifter_woman_mlt:, :weightlifter_woman_lt:, :weightlifter_woman:, :weightlifter_dt:, :weightlifter_mdt:, :weightlifter_mt:, :weightlifter_mlt:, :weightlifter_lt:, :weightlifter:, :basketballer_woman_dt:, :basketballer_woman_mdt:, :basketballer_woman_mt:, :basketballer_woman_mlt:, :basketballer_woman_lt:, :woman_bouncing_ball:, :basketballer:, :man_in_suit:, :golfer:, :golfer_woman:, *, :heart_exclamation:, :star_of_david:, :cross:, :fleur-de-lis:, :atom:, :peace:, :place_of_worship:, :anger_right:, :menorah:, :om_symbol:, :scales:, :sleeping_accommodation:, :ballot_box:, :compression:, :linked_paperclips:, :prayer_beads:, :camera_with_flash:, :amphora:, :flag_black:, :airplane_arriving:, :airplane_departure:, :synagogue:, :mosque:, :kaaba:, :bow_and_arrow:, :badminton:, :ping_pong:, :ice_hockey:, :field_hockey:, :volleyball:, :cricket_game:, :medal:, :cheese_wedge:, :popcorn:, :champagne:, :burrito:, :taco:, :hotdog:, :umbrella:, :unicorn:, :turkey:, :scorpion:, :lion_face:, :crab:, :wind_blowing_face:, :record_button:, :stop_button:, :pause_button:, :play_pause:, :track_previous:, :track_next:, :beach_umbrella:, :flag_ac:, :flag_ad:, :flag_ae:, :flag_af:, :flag_ag:, :flag_ai:, :flag_al:, :flag_am:, :flag-ao:, :flag-aq:, :flag-ar:, :flag-as:, :flag-at:, :flag-au:, :flag-aw:, :flag-ax:, :flag-az:, :flag-ba:, :flag-bb:, :flag-bd:, :flag-be:, :flag-bf:, :flag-bg:, :flag-bh:, :flag-bi:, :flag-bj:, :flag-bl:, :flag-bm:, :flag-bn:, :flag-bo:, :flag-bq:, :flag-br:, :flag-bs:, :flag-bt:, :flag-bv:, :flag-bw:, :flag-by:, :flag-bz:, :flag-ca:, :flag-cc:, :flag-cd:, :flag-cf:, :flag-cg:, :flag-ch:, :flag-ci:, :flag-ck:, :flag-cl:, :flag-cm:, :flag-cn:, :flag-co:, :flag-cp:, :flag-cr:, :flag-cu:, :flag-cv:, :flag-cw:, :flag-cx:, :flag-cy:, :flag-cz:, :flag-de:, :flag-dg:, :flag-dj:, :flag-dk:, :flag-dm:, :flag-do:, :flag-dz:, :flag-ea:, :flag-ec:, :flag-ee:, :flag-eg:, :flag-eh:, :flag-er:, :flag-es:, :flag-et:, :flag-eu:, :flag-fi:, :flag-fj:, :flag-fk:, :flag-fm:, :flag-fo:, :flag-fr:, :flag-ga:, :flag-gb:, :flag-gd:, :flag-ge:, :flag-gf:, :flag-gg:, :flag-gh:, :flag-gi:, :flag-gl:, :flag-gm:, :flag-gn:, :flag-gp:, :flag-gq:, :flag-gr:, :flag-gs:, :flag-gt:, :flag-gu:, :flag-gw:, :flag-gy:, :flag-hk:, :flag-hm:, :flag-hn:, :flag-hr:, :flag-ht:, :flag-hu:, :flag-ic:, :flag-id:, :flag-ie:, :flag-il:, :flag-im:, :flag-in:, :flag-io:, :flag-iq:, :flag-ir:, :flag-is:, :flag-it:, :flag-je:, :flag-jm:, :flag-jo:, :flag-jp:, :flag-ke:, :flag-kg:, :flag-kh:, :flag-ki:, :flag-km:, :flag-kn:, :flag-kp:, :flag-kr:, :flag-kw:, :flag-ky:, :flag-kz:, :flag-la:, :flag-lb:, :flag-lc:, :flag-li:, :flag-lk:, :flag-lr:, :flag-ls:, :flag-lt:, :flag-lu:, :flag-lv:, :flag-ly:, :flag-ma:, :flag-mc:, :flag-md:, :flag-me:, :flag-mf:, :flag-mg:, :flag-mh:, :flag-mk:, :flag-ml:, :flag-mm:, :flag-mn:, :flag-mo:, :flag-mp:, :flag-mq:, :flag-mr:, :flag-ms:, :flag-mt:, :flag-mu:, :flag-mv:, :flag-mw:, :flag-mx:, :flag-my:, :flag-mz:, :flag-na:, :flag-nc:, :flag-ne:, :flag-nf:, :flag-ng:, :flag-ni:, :flag-nl:, :flag-no:, :flag-np:, :flag-nr:, :flag-nu:, :flag-nz:, :flag-om:, :flag-pa:, :flag-pe:, :flag-pf:, :flag-pg:, :flag-ph:, :flag-pk:, :flag-pl:, :flag-pm:, :flag-pn:, :flag-pr:, :flag-ps:, :flag-pt:, :flag-pw:, :flag-py:, :flag-qa:, :flag-re:, :flag-ro:, :flag-rs:, :flag-ru:, :flag-rw:, :flag-sa:, :flag-sb:, :flag-sc:, :flag-sd:, :flag-se:, :flag-sg:, :flag-sh:, :flag-si:, :flag-sj:, :flag-sk:, :flag-sl:, :flag-sm:, :flag-sn:, :flag-so:, :flag-sr:, :flag-ss:, :flag-st:, :flag-sv:, :flag-sx:, :flag-sy:, :flag-sz:, :flag-ta:, :flag-tc:, :flag-td:, :flag-tf:, :flag-tg:, :flag-th:, :flag-tj:, :flag-tk:, :flag-tl:, :flag-tm:, :flag-tn:, :flag-to:, :flag-tr:, :flag-tt:, :flag-tv:, :flag-tw:, :flag-tz:, :flag-ua:, :flag-ug:, :flag-um:, :flag-us:, :flag-uy:, :flag-uz:, :flag-va:, :flag-vc:, :flag-ve:, :flag-vg:, :flag-vi:, :flag-vn:, :flag_vu:, :flag_wf:, :flag_ws:, :flag_xk:, :flag_ye:, :flag_yt:, :flag_za:, :flag_zm:, :flag_zw:, :black_heart:, :speech_left:, :egg:, :octagonal_sign:, :spades:, :hearts:, :diamonds:, :clubs:, :drum:, :left_right_arrow:, :tm:, :0:, :1:, :2:, :3:, :4:, :5:, :6:, :7:, :8:, :9:, :hash:, :asterisk:, :zero:, :one:, :two:, :three:, :four:, :five:, :six:, :seven:, :eight:, :nine:, :rolling_on_the_floor_laughing:, :smiling_face_with_hearts:, :starstruck:, :smiling_face:, :zany_face:, :face_with_hand_over_mouth:, :shushing_face:, :face_with_raised_eyebrow:, :lying_face:, :drooling_face:, :nauseated_face:, :face_vomiting:, :sneezing_face:, :hot_face:, :cold_face:, :woozy_face:, :exploding_head:, :cowboy_hat_face:, :partying_face:, :face_with_monocle:, :frowning_face:, :pleading_face:, :yawning_face:, :face_with_symbols_on_mouth:, :skull_and_crossbones:, :clown_face:, :red_heart:, :orange_heart:, :brown_heart:, :white_heart:, :hole:, :left_speech_bubble:, :right_anger_bubble:, :raised_back_of_hand:, :child:, :mediumdark_skin_tone_beard:, :dark_skin_tone_beard:, :zombie:, :man_bouncing_ball:, :man_lifting_weights:, :person_playing_water_polo:, :light_skin_tone_mediumdark_skin_tone:, :man_man:, :man_woman_boy:, :speaking_head:, :light_skin_tone:, :mediumlight_skin_tone:, :medium_skin_tone:, :mediumdark_skin_tone:, :gorilla:, :orangutan:, :guide_dog:, :service_dog:, :fox:, :raccoon:, :zebra:, :deer:, :llama:, :giraffe:, :rhinoceros:, :hippopotamus:, :chipmunk:, :hedgehog:, :bat:, :sloth:, :otter:, :skunk:, :kangaroo:, :badger:, :dove:, :eagle:, :duck:, :swan:, :owl:, :flamingo:, :peacock:, :parrot:, :lizard:, :sauropod:, :TRex:, :shark:, :butterfly:, :cricket:, :spider:, :spider_web:, :mosquito:, :microbe:, :rosette:, :wilted_flower:, :shamrock:, :mango:, :kiwi_fruit:, :coconut:, :avocado:, :potato:, :carrot:, :hot_pepper:, :cucumber:, :leafy_green:, :broccoli:, :garlic:, :onion:, :peanuts:, :croissant:, :baguette_bread:, :pretzel:, :bagel:, :pancakes:, :waffle:, :cut_of_meat:, :bacon:, :sandwich:, :stuffed_flatbread:, :falafel:, :shallow_pan_of_food:, :bowl_with_spoon:, :green_salad:, :butter:, :salt:, :canned_food:, :moon_cake:, :dumpling:, :fortune_cookie:, :takeout_box:, :lobster:, :shrimp:, :squid:, :oyster:, :cupcake:, :pie:, :glass_of_milk:, :clinking_glasses:, :tumbler_glass:, :cup_with_straw:, :beverage_box:, :mate:, :ice:, :chopsticks:, :fork_and_knife_with_plate:, :spoon:, :world_map:, :compass:, :snowcapped_mountain:, :mountain:, :camping:, :beach_with_umbrella:, :desert:, :desert_island:, :national_park:, :stadium:, :classical_building:, :building_construction:, :brick:, :houses:, :derelict_house:, :hindu_temple:, :shinto_shrine:, :cityscape:, :hot_springs:, :racing_car:, :motorcycle:, :motor_scooter:, :manual_wheelchair:, :motorized_wheelchair:, :auto_rickshaw:, :kick_scooter:, :skateboard:, :motorway:, :railway_track:, :oil_drum:, :canoe:, :passenger_ship:, :ferry:, :motor_boat:, :small_airplane:, :parachute:, :flying_saucer:, :bellhop_bell:, :luggage:, :stopwatch:, :timer_clock:, :mantelpiece_clock:, :thermometer:, :sun:, :ringed_planet:, :cloud:, :cloud_with_lightning_and_rain:, :sun_behind_small_cloud:, :sun_behind_large_cloud:, :sun_behind_rain_cloud:, :cloud_with_rain:, :cloud_with_snow:, :cloud_with_lightning:, :tornado:, :fog:, :wind_face:, :umbrella_on_ground:, :comet:, :firecracker:, :red_envelope:, :reminder_ribbon:, :admission_tickets:, :military_medal:, :1st_place_medal:, :2nd_place_medal:, :3rd_place_medal:, :softball:, :flying_disc:, :lacrosse:, :boxing_glove:, :martial_arts_uniform:, :goal_net:, :ice_skate:, :diving_mask:, :sled:, :curling_stone:, :yoyo:, :kite:, :nazar_amulet:, :joystick:, :puzzle_piece:, :teddy_bear:, :chess_pawn:, :framed_picture:, :thread:, :yarn:, :goggles:, :lab_coat:, :safety_vest:, :scarf:, :gloves:, :coat:, :socks:, :sari:, :onepiece_swimsuit:, :briefs:, :shorts:, :shopping_bags:, :hiking_boot:, :flat_shoe:, :ballet_shoes:, :billed_cap:, :rescue_worker’s_helmet:, :studio_microphone:, :level_slider:, :control_knobs:, :banjo:, :desktop_computer:, :printer:, :keyboard:, :computer_mouse:, :trackball:, :abacus:, :film_frames:, :film_projector:, :candle:, :diya_lamp:, :rolledup_newspaper:, :label:, :receipt:, :ballot_box_with_ballot:, :pencil:, :black_nib:, :fountain_pen:, :pen:, :paintbrush:, :crayon:, :card_index_dividers:, :spiral_notepad:, :spiral_calendar:, :card_file_box:, :file_cabinet:, :wastebasket:, :old_key:, :axe:, :pick:, :hammer_and_pick:, :hammer_and_wrench:, :dagger:, :crossed_swords:, :shield:, :gear:, :clamp:, :balance_scale:, :probing_cane:, :chains:, :toolbox:, :magnet:, :alembic:, :test_tube:, :petri_dish:, :dna:, :drop_of_blood:, :adhesive_bandage:, :stethoscope:, :bed:, :couch_and_lamp:, :chair:, :razor:, :lotion_bottle:, :safety_pin:, :broom:, :basket:, :roll_of_paper:, :soap:, :sponge:, :fire_extinguisher:, :shopping_cart:, :coffin:, :funeral_urn:, :radioactive:, :biohazard:, :up_arrow:, :upright_arrow:, :right_arrow:, :downright_arrow:, :down_arrow:, :downleft_arrow:, :left_arrow:, :upleft_arrow:, :updown_arrow:, :right_arrow_curving_left:, :left_arrow_curving_right:, :right_arrow_curving_up:, :right_arrow_curving_down:, :atom_symbol:, :om:, :star_of_David:, :wheel_of_dharma:, :yin_yang:, :latin_cross:, :orthodox_cross:, :star_and_crescent:, :peace_symbol:, :play_button:, :next_track_button:, :play_or_pause_button:, :reverse_button:, :last_track_button:, :eject_button:, :female_sign:, :male_sign:, :medical_symbol:, :infinity:, :recycling_symbol:, :fleurde-lis:, :check_box_with_check:, :check_mark:, :multiplication_sign:, :eightspoked_asterisk:, :eightpointed_star:, :double_exclamation_mark:, :exclamation_question_mark:, :#:, :A_button_blood_type:, :B_button_blood_type:, :information:, :circled_M:, :O_button_blood_type:, :P_button:, :Japanese_service_charge_button:, :Japanese_monthly_amount_button:, :Japanese_reserved_button:, :Japanese_free_of_charge_button:, :Japanese_congratulations_button:, :Japanese_secret_button:, :orange_circle:, :yellow_circle:, :green_circle:, :purple_circle:, :brown_circle:, :red_square:, :orange_square:, :yellow_square:, :green_square:, :blue_square:, :white_flag:, :United_Nations:, :England:, :Scotland:, :wales:, default */

    /***/
    function LlOg(module) {
      module.exports = JSON.parse("{\":woman_woman_girl_girl:\":\"👩‍👩‍👧‍👧\",\":woman_woman_girl_boy:\":\"👩‍👩‍👧‍👦\",\":woman_woman_boy_boy:\":\"👩‍👩‍👦‍👦\",\":man_woman_girl_girl:\":\"👨‍👩‍👧‍👧\",\":man_woman_girl_boy:\":\"👨‍👩‍👧‍👦\",\":man_woman_boy_boy:\":\"👨‍👩‍👦‍👦\",\":man_man_girl_girl:\":\"👨‍👨‍👧‍👧\",\":man_man_girl_boy:\":\"👨‍👨‍👧‍👦\",\":man_man_boy_boy:\":\"👨‍👨‍👦‍👦\",\":woman_woman_girl:\":\"👩‍👩‍👧\",\":woman_woman_boy:\":\"👩‍👩‍👦\",\":woman_girl_girl:\":\"👩‍👧‍👧\",\":woman_girl_boy:\":\"👩‍👧‍👦\",\":woman_boy_boy:\":\"👩‍👦‍👦\",\":man_woman_girl:\":\"👨‍👩‍👧\",\":man_man_girl:\":\"👨‍👨‍👧\",\":man_man_boy:\":\"👨‍👨‍👦\",\":man_girl_girl:\":\"👨‍👧‍👧\",\":man_girl_boy:\":\"👨‍👧‍👦\",\":man_boy_boy:\":\"👨‍👦‍👦\",\":woman_girl:\":\"👩‍👧\",\":woman_boy:\":\"👩‍👦\",\":man_girl:\":\"👨‍👧\",\":man_boy:\":\"👨‍👦\",\":joy:\":\"😂\",\":heart:\":\"❤️\",\":heart_eyes:\":\"😍\",\":sob:\":\"😭\",\":blush:\":\"😊\",\":unamused:\":\"😒\",\":kissing_heart:\":\"😘\",\":two_hearts:\":\"💕\",\":weary:\":\"😩\",\":ok_hand:\":\"👌\",\":pensive:\":\"😔\",\":smirk:\":\"😏\",\":grin:\":\"😁\",\":wink:\":\"😉\",\":thumbsup:\":\"👍\",\":pray:\":\"🙏\",\":relieved:\":\"😌\",\":notes:\":\"🎶\",\":flushed:\":\"😳\",\":raised_hands:\":\"🙌\",\":see_no_evil:\":\"🙈\",\":cry:\":\"😢\",\":sunglasses:\":\"😎\",\":v:\":\"✌️\",\":eyes:\":\"👀\",\":sweat_smile:\":\"😅\",\":sparkles:\":\"✨\",\":sleeping:\":\"😴\",\":smile:\":\"😄\",\":purple_heart:\":\"💜\",\":broken_heart:\":\"💔\",\":hundred_points:\":\"💯\",\":expressionless:\":\"😑\",\":sparkling_heart:\":\"💖\",\":blue_heart:\":\"💙\",\":confused:\":\"😕\",\":man_tipping_hand:\":\"💁‍♂\",\":information_desk_person:\":\"💁\",\":stuck_out_tongue_winking_eye:\":\"😜\",\":disappointed:\":\"😞\",\":yum:\":\"😋\",\":neutral_face:\":\"😐\",\":sleepy:\":\"😪\",\":clap:\":\"👏\",\":cupid:\":\"💘\",\":heartpulse:\":\"💗\",\":revolving_hearts:\":\"💞\",\":arrow_left:\":\"⬅️\",\":speak_no_evil:\":\"🙊\",\":raised_hand:\":\"✋\",\":kiss:\":\"💋\",\":point_right:\":\"👉\",\":cherry_blossom:\":\"🌸\",\":scream:\":\"😱\",\":fire:\":\"🔥\",\":rage:\":\"😡\",\":smiley:\":\"😃\",\":tada:\":\"🎉\",\":oncoming_fist:\":\"👊\",\":tired_face:\":\"😫\",\":camera:\":\"📷\",\":rose:\":\"🌹\",\":stuck_out_tongue_closed_eyes:\":\"😝\",\":muscle:\":\"💪\",\":skull:\":\"💀\",\":sunny:\":\"☀️\",\":yellow_heart:\":\"💛\",\":triumph:\":\"😤\",\":new_moon_with_face:\":\"🌚\",\":laughing:\":\"😆\",\":sweat:\":\"😓\",\":point_left:\":\"👈\",\":heavy_check_mark:\":\"✔️\",\":heart_eyes_cat:\":\"😻\",\":grinning:\":\"😀\",\":mask:\":\"😷\",\":green_heart:\":\"💚\",\":wave:\":\"👋\",\":persevere:\":\"😣\",\":heartbeat:\":\"💓\",\":arrow_forward:\":\"▶️\",\":arrow_backward:\":\"◀️\",\":arrow_right_hook:\":\"↪️\",\":leftwards_arrow_with_hook:\":\"↩️\",\":crown:\":\"👑\",\":kissing_closed_eyes:\":\"😚\",\":stuck_out_tongue:\":\"😛\",\":disappointed_relieved:\":\"😥\",\":innocent:\":\"😇\",\":headphones:\":\"🎧\",\":white_check_mark:\":\"✅\",\":confounded:\":\"😖\",\":arrow_right:\":\"➡\",\":angry:\":\"😠\",\":grimacing:\":\"😬\",\":star2:\":\"🌟\",\":gun:\":\"🔫\",\":man_raising_hand:\":\"🙋‍♂\",\":raising_hand:\":\"🙋\",\":thumbsdown:\":\"👎\",\":dancer:\":\"💃\",\":musical_note:\":\"🎵\",\":no_mouth:\":\"😶\",\":dizzy:\":\"💫\",\":fist:\":\"✊\",\":point_down:\":\"👇\",\":red_circle:\":\"🔴\",\":man_gesturing_NO:\":\"🙅‍♂\",\":no_good:\":\"🙅\",\":boom:\":\"💥\",\":copyright:\":\"©️\",\":thought_balloon:\":\"💭\",\":tongue:\":\"👅\",\":poop:\":\"💩\",\":cold_sweat:\":\"😰\",\":gem:\":\"💎\",\":man_gesturing_OK:\":\"🙆‍♂\",\":ok_woman:\":\"🙆\",\":pizza:\":\"🍕\",\":joy_cat:\":\"😹\",\":sun_with_face:\":\"🌞\",\":leaves:\":\"🍃\",\":sweat_drops:\":\"💦\",\":penguin:\":\"🐧\",\":zzz:\":\"💤\",\":woman_walking:\":\"🚶‍♀\",\":walking:\":\"🚶\",\":airplane:\":\"✈️\",\":balloon:\":\"🎈\",\":star:\":\"⭐\",\":ribbon:\":\"🎀\",\":ballot_box_with_check:\":\"☑️\",\":worried:\":\"😟\",\":underage:\":\"🔞\",\":fearful:\":\"😨\",\":four_leaf_clover:\":\"🍀\",\":hibiscus:\":\"🌺\",\":microphone:\":\"🎤\",\":open_hands:\":\"👐\",\":ghost:\":\"👻\",\":palm_tree:\":\"🌴\",\":bangbang:\":\"‼️\",\":nail_care:\":\"💅\",\":x:\":\"❌\",\":alien:\":\"👽\",\":woman_bowing:\":\"🙇‍♀\",\":bow:\":\"🙇\",\":soccer:\":\"⚽\",\":angel:\":\"👼\",\":men_with_bunny_ears:\":\"👯‍♂\",\":dancers:\":\"👯\",\":exclamation:\":\"❗\",\":snowflake:\":\"❄️\",\":point_up:\":\"☝️\",\":kissing_smiling_eyes:\":\"😙\",\":rainbow:\":\"🌈\",\":crescent_moon:\":\"🌙\",\":heart_decoration:\":\"💟\",\":gift_heart:\":\"💝\",\":gift:\":\"🎁\",\":beers:\":\"🍻\",\":anguished:\":\"😧\",\":earth_africa:\":\"🌍\",\":movie_camera:\":\"🎥\",\":anchor:\":\"⚓\",\":zap:\":\"⚡\",\":club_suit:\":\"♣️\",\":heavy_multiplication_x:\":\"✖️\",\":woman_running:\":\"🏃‍♀\",\":runner:\":\"🏃\",\":sunflower:\":\"🌻\",\":earth_americas:\":\"🌎\",\":bouquet:\":\"💐\",\":dog:\":\"🐶\",\":moneybag:\":\"💰\",\":herb:\":\"🌿\",\":couple:\":\"👫\",\":fallen_leaf:\":\"🍂\",\":tulip:\":\"🌷\",\":birthday:\":\"🎂\",\":cat:\":\"🐱\",\":coffee:\":\"☕\",\":dizzy_face:\":\"😵\",\":point_up_2:\":\"👆\",\":open_mouth:\":\"😮\",\":hushed:\":\"😯\",\":basketball:\":\"🏀\",\":christmas_tree:\":\"🎄\",\":ring:\":\"💍\",\":full_moon_with_face:\":\"🌝\",\":astonished:\":\"😲\",\":two_women_holding_hands:\":\"👭\",\":money_with_wings:\":\"💸\",\":crying_cat_face:\":\"😿\",\":hear_no_evil:\":\"🙉\",\":dash:\":\"💨\",\":cactus:\":\"🌵\",\":hotsprings:\":\"♨️\",\":telephone:\":\"☎️\",\":maple_leaf:\":\"🍁\",\":princess:\":\"👸\",\":man_getting_massage:\":\"💆‍♂\",\":massage:\":\"💆\",\":love_letter:\":\"💌\",\":trophy:\":\"🏆\",\":man_frowning:\":\"🙍‍♂\",\":person_frowning:\":\"🙍\",\":us:\":\"🇺🇸\",\":confetti_ball:\":\"🎊\",\":blossom:\":\"🌼\",\":kitchen_knife:\":\"🔪\",\":lips:\":\"👄\",\":fries:\":\"🍟\",\":doughnut:\":\"🍩\",\":frowning:\":\"😦\",\":ocean:\":\"🌊\",\":bomb:\":\"💣\",\":ok:\":\"🆗\",\":cyclone:\":\"🌀\",\":rocket:\":\"🚀\",\":couplekiss:\":\"💏\",\":couple_woman_kiss:\":\"👩‍❤️‍💋‍👩\",\":couple_man_kiss:\":\"👨‍❤️‍💋‍👨\",\":couple_with_heart:\":\"💑\",\":woman_woman:\":\"👩‍❤️‍👩\",\":man_man_love:\":\"👨‍❤️‍👨\",\":lollipop:\":\"🍭\",\":clapper:\":\"🎬\",\":pig:\":\"🐷\",\":smiling_imp:\":\"😈\",\":imp:\":\"👿\",\":bee:\":\"🐝\",\":kissing_cat:\":\"😽\",\":anger:\":\"💢\",\":musical_score:\":\"🎼\",\":santa:\":\"🎅\",\":earth_asia:\":\"🌏\",\":football:\":\"🏈\",\":guitar:\":\"🎸\",\":diamond_suit:\":\"♦️\",\":panda_face:\":\"🐼\",\":speech_balloon:\":\"💬\",\":strawberry:\":\"🍓\",\":smirk_cat:\":\"😼\",\":banana:\":\"🍌\",\":watermelon:\":\"🍉\",\":snowman:\":\"⛄\",\":smile_cat:\":\"😸\",\":spade_suit:\":\"♠️\",\":top:\":\"🔝\",\":eggplant:\":\"🍆\",\":crystal_ball:\":\"🔮\",\":fork_and_knife:\":\"🍴\",\":calling:\":\"📲\",\":iphone:\":\"📱\",\":partly_sunny:\":\"⛅\",\":warning:\":\"⚠️\",\":scream_cat:\":\"🙀\",\":small_orange_diamond:\":\"🔸\",\":baby:\":\"👶\",\":feet:\":\"🐾\",\":footprints:\":\"👣\",\":beer:\":\"🍺\",\":wine_glass:\":\"🍷\",\":o:\":\"⭕\",\":video_camera:\":\"📹\",\":rabbit:\":\"🐰\",\":tropical_drink:\":\"🍹\",\":smoking:\":\"🚬\",\":space_invader:\":\"👾\",\":peach:\":\"🍑\",\":snake:\":\"🐍\",\":turtle:\":\"🐢\",\":cherries:\":\"🍒\",\":kissing:\":\"😗\",\":frog:\":\"🐸\",\":milky_way:\":\"🌌\",\":rotating_light:\":\"🚨\",\":hatching_chick:\":\"🐣\",\":closed_book:\":\"📕\",\":candy:\":\"🍬\",\":hamburger:\":\"🍔\",\":bear:\":\"🐻\",\":tiger:\":\"🐯\",\":automobile:\":\"🚗\",\":fast_forward:\":\"⏩\",\":icecream:\":\"🍦\",\":pineapple:\":\"🍍\",\":ear_of_rice:\":\"🌾\",\":syringe:\":\"💉\",\":put_litter_in_its_place:\":\"🚮\",\":chocolate_bar:\":\"🍫\",\":black_small_square:\":\"▪️\",\":tv:\":\"📺\",\":pill:\":\"💊\",\":octopus:\":\"🐙\",\":jack_o_lantern:\":\"🎃\",\":grapes:\":\"🍇\",\":smiley_cat:\":\"😺\",\":cd:\":\"💿\",\":cocktail:\":\"🍸\",\":cake:\":\"🍰\",\":video_game:\":\"🎮\",\":trade_mark:\":\"™️\",\":arrow_down:\":\"⬇️\",\":no_entry_sign:\":\"🚫\",\":lipstick:\":\"💄\",\":whale:\":\"🐳\",\":memo:\":\"📝\",\":registered:\":\"®️\",\":cookie:\":\"🍪\",\":dolphin:\":\"🐬\",\":loud_sound:\":\"🔊\",\":man:\":\"👨\",\":hatched_chick:\":\"🐥\",\":monkey:\":\"🐒\",\":books:\":\"📚\",\":japanese_ogre:\":\"👹\",\":woman_guard:\":\"💂‍♀\",\":guardsman:\":\"💂\",\":loudspeaker:\":\"📢\",\":scissors:\":\"✂️\",\":girl:\":\"👧\",\":mortar_board:\":\"🎓\",\":fr:\":\"🇫🇷\",\":baseball:\":\"⚾️\",\":vertical_traffic_light:\":\"🚦\",\":woman:\":\"👩\",\":fireworks:\":\"🎆\",\":stars:\":\"🌠\",\":sos:\":\"🆘\",\":mushroom:\":\"🍄\",\":pouting_cat:\":\"😾\",\":left_luggage:\":\"🛅\",\":high_heel:\":\"👠\",\":dart:\":\"🎯\",\":woman_swimming:\":\"🏊‍♀\",\":swimmer:\":\"🏊\",\":key:\":\"🔑\",\":bikini:\":\"👙\",\":family:\":\"👪\",\":pencil2:\":\"✏\",\":elephant:\":\"🐘\",\":droplet:\":\"💧\",\":seedling:\":\"🌱\",\":apple:\":\"🍎\",\":cool:\":\"🆒\",\":telephone_receiver:\":\"📞\",\":dollar:\":\"💵\",\":house_with_garden:\":\"🏡\",\":book:\":\"📖\",\":man_getting_haircut:\":\"💇‍♂\",\":haircut:\":\"💇\",\":computer:\":\"💻\",\":bulb:\":\"💡\",\":question:\":\"❓\",\":back:\":\"🔙\",\":boy:\":\"👦\",\":closed_lock_with_key:\":\"🔐\",\":man_pouting:\":\"🙎‍♂\",\":person_with_pouting_face:\":\"🙎\",\":tangerine:\":\"🍊\",\":leftright_arrow:\":\"↔️\",\":sunrise:\":\"🌅\",\":poultry_leg:\":\"🍗\",\":blue_circle:\":\"🔵\",\":oncoming_automobile:\":\"🚘\",\":shaved_ice:\":\"🍧\",\":it:\":\"🇮🇹\",\":bird:\":\"🐦\",\":gb:\":\"🇬🇧\",\":first_quarter_moon_with_face:\":\"🌛\",\":eyeglasses:\":\"👓\",\":goat:\":\"🐐\",\":night_with_stars:\":\"🌃\",\":older_woman:\":\"👵\",\":black_circle:\":\"⚫\",\":new_moon:\":\"🌑\",\":two_men_holding_hands:\":\"👬\",\":white_circle:\":\"⚪\",\":customs:\":\"🛃\",\":tropical_fish:\":\"🐠\",\":house:\":\"🏠\",\":arrows_clockwise:\":\"🔃\",\":last_quarter_moon_with_face:\":\"🌜\",\":round_pushpin:\":\"📍\",\":full_moon:\":\"🌕\",\":athletic_shoe:\":\"👟\",\":lemon:\":\"🍋\",\":baby_bottle:\":\"🍼\",\":artist_palette:\":\"🎨\",\":envelope:\":\"✉️\",\":spaghetti:\":\"🍝\",\":wind_chime:\":\"🎐\",\":fish_cake:\":\"🍥\",\":evergreen_tree:\":\"🌲\",\":up:\":\"🆙\",\":arrow_up:\":\"⬆️\",\":arrow_upper_right:\":\"↗️\",\":arrow_lower_right:\":\"↘️\",\":arrow_lower_left:\":\"↙️\",\":performing_arts:\":\"🎭\",\":nose:\":\"👃\",\":pig_nose:\":\"🐽\",\":fish:\":\"🐟\",\":woman_wearing_turban:\":\"👳‍♀\",\":man_with_turban:\":\"👳\",\":koala:\":\"🐨\",\":ear:\":\"👂\",\":eight_spoked_asterisk:\":\"✳️\",\":small_blue_diamond:\":\"🔹\",\":shower:\":\"🚿\",\":bug:\":\"🐛\",\":ramen:\":\"🍜\",\":tophat:\":\"🎩\",\":bride_with_veil:\":\"👰\",\":fuelpump:\":\"⛽\",\":checkered_flag:\":\"🏁\",\":horse:\":\"🐴\",\":watch:\":\"⌚\",\":monkey_face:\":\"🐵\",\":baby_symbol:\":\"🚼\",\":new:\":\"🆕\",\":free:\":\"🆓\",\":sparkler:\":\"🎇\",\":corn:\":\"🌽\",\":tennis:\":\"🎾\",\":alarm_clock:\":\"⏰\",\":battery:\":\"🔋\",\":grey_exclamation:\":\"❕\",\":wolf:\":\"🐺\",\":moyai:\":\"🗿\",\":cow:\":\"🐮\",\":mega:\":\"📣\",\":older_man:\":\"👴\",\":dress:\":\"👗\",\":link:\":\"🔗\",\":chicken:\":\"🐔\",\":cooking:\":\"🍳\",\":whale2:\":\"🐋\",\":arrow_upper_left:\":\"↖\",\":deciduous_tree:\":\"🌳\",\":bento:\":\"🍱\",\":pushpin:\":\"📌\",\":soon:\":\"🔜\",\":repeat:\":\"🔁\",\":dragon:\":\"🐉\",\":hamster:\":\"🐹\",\":golf:\":\"⛳\",\":woman_surfing:\":\"🏄‍♀\",\":surfer:\":\"🏄\",\":mouse:\":\"🐭\",\":waxing_crescent_moon:\":\"🌒\",\":blue_car:\":\"🚙\",\":a:\":\"🅰️\",\":interrobang:\":\"⁉️\",\":u5272:\":\"🈹\",\":electric_plug:\":\"🔌\",\":first_quarter_moon:\":\"🌓\",\":cancer:\":\"♋\",\":trident:\":\"🔱\",\":bread:\":\"🍞\",\":woman_police_officer:\":\"👮‍♀\",\":cop:\":\"👮\",\":tea:\":\"🍵\",\":fishing_pole_and_fish:\":\"🎣\",\":waxing_gibbous_moon:\":\"🌔\",\":bike:\":\"🚲\",\":bust_in_silhouette:\":\"👤\",\":rice:\":\"🍚\",\":radio:\":\"📻\",\":baby_chick:\":\"🐤\",\":arrow_heading_down:\":\"⤵️\",\":waning_crescent_moon:\":\"🌘\",\":arrow_up_down:\":\"↕\",\":last_quarter_moon:\":\"🌗\",\":radio_button:\":\"🔘\",\":sheep:\":\"🐑\",\":blond_hair:\":\"👱‍♀\",\":person_with_blond_hair:\":\"👱\",\":waning_gibbous_moon:\":\"🌖\",\":lock:\":\"🔒\",\":green_apple:\":\"🍏\",\":japanese_goblin:\":\"👺\",\":curly_loop:\":\"➰\",\":triangular_flag_on_post:\":\"🚩\",\":arrows_counterclockwise:\":\"🔄\",\":racehorse:\":\"🐎\",\":fried_shrimp:\":\"🍤\",\":sunrise_over_mountains:\":\"🌄\",\":volcano:\":\"🌋\",\":rooster:\":\"🐓\",\":inbox_tray:\":\"📥\",\":wedding:\":\"💒\",\":sushi:\":\"🍣\",\":wavy_dash:\":\"〰\",\":ice_cream:\":\"🍨\",\":rewind:\":\"⏪\",\":tomato:\":\"🍅\",\":rabbit2:\":\"🐇\",\":eight_pointed_black_star:\":\"✴️\",\":small_red_triangle:\":\"🔺\",\":high_brightness:\":\"🔆\",\":heavy_plus_sign:\":\"➕\",\":man_with_gua_pi_mao:\":\"👲\",\":convenience_store:\":\"🏪\",\":busts_in_silhouette:\":\"👥\",\":beetle:\":\"🐞\",\":small_red_triangle_down:\":\"🔻\",\":ger:\":\"🇩🇪\",\":arrow_heading_up:\":\"⤴️\",\":name_badge:\":\"📛\",\":bath:\":\"🛀\",\":no_entry:\":\"⛔\",\":crocodile:\":\"🐊\",\":chestnut:\":\"🌰\",\":dog2:\":\"🐕\",\":cat2:\":\"🐈\",\":hammer:\":\"🔨\",\":meat_on_bone:\":\"🍖\",\":shell:\":\"🐚\",\":sparkle:\":\"❇️\",\":sailboat:\":\"⛵\",\":b:\":\"🅱️\",\":m:\":\"Ⓜ️\",\":poodle:\":\"🐩\",\":aquarius:\":\"♒\",\":stew:\":\"🍲\",\":jeans:\":\"👖\",\":honey_pot:\":\"🍯\",\":musical_keyboard:\":\"🎹\",\":unlock:\":\"🔓\",\":statue_of_liberty:\":\"🗽\",\":heavy_dollar_sign:\":\"💲\",\":snowboarder:\":\"🏂\",\":white_flower:\":\"💮\",\":necktie:\":\"👔\",\":diamond_shape_with_a_dot_inside:\":\"💠\",\":aries:\":\"♈\",\":womens:\":\"🚺\",\":ant:\":\"🐜\",\":scorpius:\":\"♏\",\":city_sunset:\":\"🌇\",\":hourglass_flowing_sand:\":\"⏳\",\":o2:\":\"🅾️\",\":dragon_face:\":\"🐲\",\":snail:\":\"🐌\",\":dvd:\":\"📀\",\":shirt:\":\"👕\",\":game_die:\":\"🎲\",\":heavy_minus_sign:\":\"➖\",\":dolls:\":\"🎎\",\":sagittarius:\":\"♐\",\":8ball:\":\"🎱\",\":bus:\":\"🚌\",\":custard:\":\"🍮\",\":crossed_flags:\":\"🎌\",\":part_alternation_mark:\":\"〽️\",\":camel:\":\"🐫\",\":curry:\":\"🍛\",\":steam_locomotive:\":\"🚂\",\":hospital:\":\"🏥\",\":jp:\":\"🇯🇵\",\":large_blue_diamond:\":\"🔷\",\":tanabata_tree:\":\"🎋\",\":bell:\":\"🔔\",\":leo:\":\"♌\",\":gemini:\":\"♊\",\":pear:\":\"🍐\",\":large_orange_diamond:\":\"🔶\",\":taurus:\":\"♉\",\":globe_with_meridians:\":\"🌐\",\":door:\":\"🚪\",\":clock6:\":\"🕕\",\":oncoming_police_car:\":\"🚔\",\":envelope_with_arrow:\":\"📩\",\":closed_umbrella:\":\"🌂\",\":saxophone:\":\"🎷\",\":church:\":\"⛪\",\":woman_biking:\":\"🚴‍♀\",\":bicyclist:\":\"🚴\",\":pisces:\":\"♓\",\":dango:\":\"🍡\",\":capricorn:\":\"♑\",\":office:\":\"🏢\",\":woman_rowing_boat:\":\"🚣‍♀\",\":rowboat:\":\"🚣\",\":womans_hat:\":\"👒\",\":mans_shoe:\":\"👞\",\":love_hotel:\":\"🏩\",\":mount_fuji:\":\"🗻\",\":dromedary_camel:\":\"🐪\",\":handbag:\":\"👜\",\":hourglass:\":\"⌛\",\":negative_squared_cross_mark:\":\"❎\",\":trumpet:\":\"🎺\",\":school:\":\"🏫\",\":cow2:\":\"🐄\",\":cityscape_at_dusk:\":\"🌆\",\":woman_construction_worker:\":\"👷‍♀\",\":construction_worker:\":\"👷\",\":toilet:\":\"🚽\",\":pig2:\":\"🐖\",\":grey_question:\":\"❔\",\":beginner:\":\"🔰\",\":violin:\":\"🎻\",\":on:\":\"🔛\",\":credit_card:\":\"💳\",\":id:\":\"🆔\",\":secret:\":\"㊙\",\":ferris_wheel:\":\"🎡\",\":bowling:\":\"🎳\",\":libra:\":\"♎\",\":virgo:\":\"♍\",\":barber:\":\"💈\",\":purse:\":\"👛\",\":roller_coaster:\":\"🎢\",\":rat:\":\"🐀\",\":date:\":\"📅\",\":rugby_football:\":\"🏉\",\":ram:\":\"🐏\",\":arrow_up_small:\":\"🔼\",\":black_square_button:\":\"🔲\",\":mobile_phone_off:\":\"📴\",\":tokyo_tower:\":\"🗼\",\":congratulations:\":\"㊗\",\":kimono:\":\"👘\",\":ru:\":\"🇷🇺\",\":ship:\":\"🚢\",\":mag_right:\":\"🔎\",\":mag:\":\"🔍\",\":fire_engine:\":\"🚒\",\":clock1130:\":\"🕦\",\":police_car:\":\"🚓\",\":black_joker:\":\"🃏\",\":bridge_at_night:\":\"🌉\",\":package:\":\"📦\",\":oncoming_taxi:\":\"🚖\",\":calendar:\":\"📆\",\":horse_racing:\":\"🏇\",\":tiger2:\":\"🐅\",\":boot:\":\"👢\",\":ambulance:\":\"🚑\",\":white_square_button:\":\"🔳\",\":boar:\":\"🐗\",\":school_satchel:\":\"🎒\",\":loop:\":\"➿\",\":pound:\":\"💷\",\":information_source:\":\"ℹ\",\":ox:\":\"🐂\",\":rice_ball:\":\"🍙\",\":vs:\":\"🆚\",\":end:\":\"🔚\",\":parking:\":\"🅿️\",\":sandal:\":\"👡\",\":tent:\":\"⛺\",\":seat:\":\"💺\",\":taxi:\":\"🚕\",\":black_medium_small_square:\":\"◾\",\":briefcase:\":\"💼\",\":newspaper:\":\"📰\",\":circus_tent:\":\"🎪\",\":six_pointed_star:\":\"🔯\",\":mens:\":\"🚹\",\":european_castle:\":\"🏰\",\":flashlight:\":\"🔦\",\":foggy:\":\"🌁\",\":arrow_double_up:\":\"⏫\",\":bamboo:\":\"🎍\",\":ticket:\":\"🎫\",\":helicopter:\":\"🚁\",\":minidisc:\":\"💽\",\":oncoming_bus:\":\"🚍\",\":melon:\":\"🍈\",\":white_small_square:\":\"▫\",\":european_post_office:\":\"🏤\",\":keycap_ten:\":\"🔟\",\":notebook:\":\"📓\",\":no_bell:\":\"🔕\",\":oden:\":\"🍢\",\":flags:\":\"🎏\",\":carousel_horse:\":\"🎠\",\":blowfish:\":\"🐡\",\":chart_with_upwards_trend:\":\"📈\",\":sweet_potato:\":\"🍠\",\":ski:\":\"🎿\",\":clock12:\":\"🕛\",\":signal_strength:\":\"📶\",\":construction:\":\"🚧\",\":black_medium_square:\":\"◼\",\":satellite:\":\"📡\",\":euro:\":\"💶\",\":womans_clothes:\":\"👚\",\":ledger:\":\"📒\",\":leopard:\":\"🐆\",\":low_brightness:\":\"🔅\",\":clock3:\":\"🕒\",\":department_store:\":\"🏬\",\":truck:\":\"🚚\",\":sake:\":\"🍶\",\":railway_car:\":\"🚃\",\":speedboat:\":\"🚤\",\":ko:\":\"🇰🇷\",\":vhs:\":\"📼\",\":clock1:\":\"🕐\",\":arrow_double_down:\":\"⏬\",\":water_buffalo:\":\"🐃\",\":arrow_down_small:\":\"🔽\",\":yen:\":\"💴\",\":mute:\":\"🔇\",\":running_shirt_with_sash:\":\"🎽\",\":white_large_square:\":\"⬜\",\":wheelchair:\":\"♿\",\":clock2:\":\"🕑\",\":paperclip:\":\"📎\",\":atm:\":\"🏧\",\":cinema:\":\"🎦\",\":telescope:\":\"🔭\",\":rice_scene:\":\"🎑\",\":blue_book:\":\"📘\",\":white_medium_square:\":\"◻️\",\":postbox:\":\"📮\",\":e-mail:\":\"📧\",\":mouse2:\":\"🐁\",\":bullettrain_side:\":\"🚄\",\":ideograph_advantage:\":\"🉐\",\":nut_and_bolt:\":\"🔩\",\":ng:\":\"🆖\",\":hotel:\":\"🏨\",\":wc:\":\"🚾\",\":izakaya_lantern:\":\"🏮\",\":repeat_one:\":\"🔂\",\":mailbox_with_mail:\":\"📬\",\":chart_with_downwards_trend:\":\"📉\",\":green_book:\":\"📗\",\":tractor:\":\"🚜\",\":fountain:\":\"⛲\",\":metro:\":\"🚇\",\":clipboard:\":\"📋\",\":no_mobile_phones:\":\"📵\",\":clock4:\":\"🕓\",\":no_smoking:\":\"🚭\",\":black_large_square:\":\"⬛\",\":slot_machine:\":\"🎰\",\":clock5:\":\"🕔\",\":bathtub:\":\"🛁\",\":scroll:\":\"📜\",\":station:\":\"🚉\",\":rice_cracker:\":\"🍘\",\":bank:\":\"🏦\",\":wrench:\":\"🔧\",\":u6307:\":\"🈯️\",\":articulated_lorry:\":\"🚛\",\":page_facing_up:\":\"📄\",\":ophiuchus:\":\"⛎\",\":bar_chart:\":\"📊\",\":no_pedestrians:\":\"🚷\",\":cn:\":\"🇨🇳\",\":vibration_mode:\":\"📳\",\":clock10:\":\"🕙\",\":clock9:\":\"🕘\",\":bullettrain_front:\":\"🚅\",\":minibus:\":\"🚐\",\":tram:\":\"🚊\",\":clock8:\":\"🕗\",\":u7a7a:\":\"🈳\",\":traffic_light:\":\"🚥\",\":woman_mountain_biking:\":\"🚵‍♀\",\":mountain_bicyclist:\":\"🚵\",\":microscope:\":\"🔬\",\":japanese_castle:\":\"🏯\",\":bookmark:\":\"🔖\",\":bookmark_tabs:\":\"📑\",\":pouch:\":\"👝\",\":ab:\":\"🆎\",\":page_with_curl:\":\"📃\",\":flower_playing_cards:\":\"🎴\",\":clock11:\":\"🕚\",\":fax:\":\"📠\",\":clock7:\":\"🕖\",\":white_medium_small_square:\":\"◽\",\":currency_exchange:\":\"💱\",\":sound:\":\"🔉\",\":chart:\":\"💹\",\":cl:\":\"🆑\",\":floppy_disk:\":\"💾\",\":post_office:\":\"🏣\",\":speaker:\":\"🔈\",\":japan:\":\"🗾\",\":u55b6:\":\"🈺\",\":mahjong:\":\"🀄\",\":incoming_envelope:\":\"📨\",\":orange_book:\":\"📙\",\":restroom:\":\"🚻\",\":u7121:\":\"🈚️\",\":u6709:\":\"🈶\",\":triangular_ruler:\":\"📐\",\":train:\":\"🚋\",\":u7533:\":\"🈸\",\":trolleybus:\":\"🚎\",\":u6708:\":\"🈷\",\":input_numbers:\":\"🔢\",\":notebook_with_decorative_cover:\":\"📔\",\":u7981:\":\"🈲\",\":u6e80:\":\"🈵\",\":postal_horn:\":\"📯\",\":factory:\":\"🏭\",\":children_crossing:\":\"🚸\",\":train2:\":\"🚆\",\":straight_ruler:\":\"📏\",\":pager:\":\"📟\",\":accept:\":\"🉑\",\":u5408:\":\"🈴\",\":lock_with_ink_pen:\":\"🔏\",\":clock130:\":\"🕜\",\":sa:\":\"🈂️\",\":outbox_tray:\":\"📤\",\":twisted_rightwards_arrows:\":\"🔀\",\":mailbox:\":\"📫\",\":light_rail:\":\"🚈\",\":clock930:\":\"🕤\",\":busstop:\":\"🚏\",\":open_file_folder:\":\"📂\",\":file_folder:\":\"📁\",\":potable_water:\":\"🚰\",\":card_index:\":\"📇\",\":clock230:\":\"🕝\",\":monorail:\":\"🚝\",\":clock1230:\":\"🕧\",\":clock1030:\":\"🕥\",\":abc:\":\"🔤\",\":mailbox_closed:\":\"📪\",\":clock430:\":\"🕟\",\":mountain_railway:\":\"🚞\",\":do_not_litter:\":\"🚯\",\":clock330:\":\"🕞\",\":heavy_division_sign:\":\"➗\",\":clock730:\":\"🕢\",\":clock530:\":\"🕠\",\":capital_abcd:\":\"🔠\",\":mailbox_with_no_mail:\":\"📭\",\":symbols:\":\"🔣\",\":aerial_tramway:\":\"🚡\",\":clock830:\":\"🕣\",\":clock630:\":\"🕡\",\":abcd:\":\"🔡\",\":mountain_cableway:\":\"🚠\",\":koko:\":\"🈁\",\":passport_control:\":\"🛂\",\":non-potable_water:\":\"🚱\",\":suspension_railway:\":\"🚟\",\":baggage_claim:\":\"🛄\",\":no_bicycles:\":\"🚳\",\":rainbow_flag:\":\"🏳‍🌈\",\":woman_detective:\":\"🕵‍♀\",\":detective:\":\"🕵\",\":skull_crossbones:\":\"☠\",\":hugging:\":\"🤗\",\":robot:\":\"🤖\",\":face_with_headbandage:\":\"🤕\",\":thinking:\":\"🤔\",\":nerd:\":\"🤓\",\":face_with_thermometer:\":\"🤒\",\":moneymouth_face:\":\"🤑\",\":zipper_mouth:\":\"🤐\",\":rolling_eyes:\":\"🙄\",\":upside_down:\":\"🙃\",\":slight_smile:\":\"🙂\",\":slightly_frowning_face:\":\"🙁\",\":sign_of_the_horns:\":\"🤘\",\":vulcan_salute:\":\"🖖\",\":middle_finger:\":\"🖕\",\":hand_with_fingers_splayed:\":\"🖐\",\":writing_hand:\":\"✍\",\":eye_speachbubble:\":\"👁‍🗨\",\":weightlifter_woman_dt:\":\"🏋🏿‍♀\",\":weightlifter_woman_mdt:\":\"🏋🏾‍♀\",\":weightlifter_woman_mt:\":\"🏋🏽‍♀\",\":weightlifter_woman_mlt:\":\"🏋🏼‍♀\",\":weightlifter_woman_lt:\":\"🏋🏻‍♀\",\":weightlifter_woman:\":\"🏋‍♀\",\":weightlifter_dt:\":\"🏋🏿\",\":weightlifter_mdt:\":\"🏋🏾\",\":weightlifter_mt:\":\"🏋🏽\",\":weightlifter_mlt:\":\"🏋🏼\",\":weightlifter_lt:\":\"🏋🏻\",\":weightlifter:\":\"🏋\",\":basketballer_woman_dt:\":\"⛹🏿‍♀\",\":basketballer_woman_mdt:\":\"⛹🏾‍♀\",\":basketballer_woman_mt:\":\"⛹🏽‍♀\",\":basketballer_woman_mlt:\":\"⛹🏼‍♀\",\":basketballer_woman_lt:\":\"⛹🏻‍♀\",\":woman_bouncing_ball:\":\"⛹‍♀\",\":basketballer:\":\"⛹\",\":man_in_suit:\":\"🕴\",\":golfer:\":\"🏌\",\":golfer_woman:\":\"🏌‍♀\",\"*\":\"*️⃣\",\":heart_exclamation:\":\"❣️\",\":star_of_david:\":\"✡️\",\":cross:\":\"✝️\",\":fleur-de-lis:\":\"⚜\",\":atom:\":\"⚛\",\":peace:\":\"☮\",\":place_of_worship:\":\"🛐\",\":anger_right:\":\"🗯\",\":menorah:\":\"🕎\",\":om_symbol:\":\"🕉\",\":scales:\":\"⚖\",\":sleeping_accommodation:\":\"🛌\",\":ballot_box:\":\"🗳\",\":compression:\":\"🗜\",\":linked_paperclips:\":\"🖇\",\":prayer_beads:\":\"📿\",\":camera_with_flash:\":\"📸\",\":amphora:\":\"🏺\",\":flag_black:\":\"🏴\",\":airplane_arriving:\":\"🛬\",\":airplane_departure:\":\"🛫\",\":synagogue:\":\"🕍\",\":mosque:\":\"🕌\",\":kaaba:\":\"🕋\",\":bow_and_arrow:\":\"🏹\",\":badminton:\":\"🏸\",\":ping_pong:\":\"🏓\",\":ice_hockey:\":\"🏒\",\":field_hockey:\":\"🏑\",\":volleyball:\":\"🏐\",\":cricket_game:\":\"🏏\",\":medal:\":\"🏅\",\":cheese_wedge:\":\"🧀\",\":popcorn:\":\"🍿\",\":champagne:\":\"🍾\",\":burrito:\":\"🌯\",\":taco:\":\"🌮\",\":hotdog:\":\"🌭\",\":umbrella:\":\"☂️\",\":unicorn:\":\"🦄\",\":turkey:\":\"🦃\",\":scorpion:\":\"🦂\",\":lion_face:\":\"🦁\",\":crab:\":\"🦀\",\":wind_blowing_face:\":\"🌬\",\":record_button:\":\"⏺\",\":stop_button:\":\"⏹\",\":pause_button:\":\"⏸\",\":play_pause:\":\"⏯\",\":track_previous:\":\"⏮\",\":track_next:\":\"⏭\",\":beach_umbrella:\":\"⛱\",\":flag_ac:\":\"🇦🇨\",\":flag_ad:\":\"🇦🇩\",\":flag_ae:\":\"🇦🇪\",\":flag_af:\":\"🇦🇫\",\":flag_ag:\":\"🇦🇬\",\":flag_ai:\":\"🇦🇮\",\":flag_al:\":\"🇦🇱\",\":flag_am:\":\"🇦🇲\",\":flag-ao:\":\"🇦🇴\",\":flag-aq:\":\"🇦🇶\",\":flag-ar:\":\"🇦🇷\",\":flag-as:\":\"🇦🇸\",\":flag-at:\":\"🇦🇹\",\":flag-au:\":\"🇦🇺\",\":flag-aw:\":\"🇦🇼\",\":flag-ax:\":\"🇦🇽\",\":flag-az:\":\"🇦🇿\",\":flag-ba:\":\"🇧🇦\",\":flag-bb:\":\"🇧🇧\",\":flag-bd:\":\"🇧🇩\",\":flag-be:\":\"🇧🇪\",\":flag-bf:\":\"🇧🇫\",\":flag-bg:\":\"🇧🇬\",\":flag-bh:\":\"🇧🇭\",\":flag-bi:\":\"🇧🇮\",\":flag-bj:\":\"🇧🇯\",\":flag-bl:\":\"🇧🇱\",\":flag-bm:\":\"🇧🇲\",\":flag-bn:\":\"🇧🇳\",\":flag-bo:\":\"🇧🇴\",\":flag-bq:\":\"🇧🇶\",\":flag-br:\":\"🇧🇷\",\":flag-bs:\":\"🇧🇸\",\":flag-bt:\":\"🇧🇹\",\":flag-bv:\":\"🇧🇻\",\":flag-bw:\":\"🇧🇼\",\":flag-by:\":\"🇧🇾\",\":flag-bz:\":\"🇧🇿\",\":flag-ca:\":\"🇨🇦\",\":flag-cc:\":\"🇨🇨\",\":flag-cd:\":\"🇨🇩\",\":flag-cf:\":\"🇨🇫\",\":flag-cg:\":\"🇨🇬\",\":flag-ch:\":\"🇨🇭\",\":flag-ci:\":\"🇨🇮\",\":flag-ck:\":\"🇨🇰\",\":flag-cl:\":\"🇨🇱\",\":flag-cm:\":\"🇨🇲\",\":flag-cn:\":\"🇨🇳\",\":flag-co:\":\"🇨🇴\",\":flag-cp:\":\"🇨🇵\",\":flag-cr:\":\"🇨🇷\",\":flag-cu:\":\"🇨🇺\",\":flag-cv:\":\"🇨🇻\",\":flag-cw:\":\"🇨🇼\",\":flag-cx:\":\"🇨🇽\",\":flag-cy:\":\"🇨🇾\",\":flag-cz:\":\"🇨🇿\",\":flag-de:\":\"🇩🇪\",\":flag-dg:\":\"🇩🇬\",\":flag-dj:\":\"🇩🇯\",\":flag-dk:\":\"🇩🇰\",\":flag-dm:\":\"🇩🇲\",\":flag-do:\":\"🇩🇴\",\":flag-dz:\":\"🇩🇿\",\":flag-ea:\":\"🇪🇦\",\":flag-ec:\":\"🇪🇨\",\":flag-ee:\":\"🇪🇪\",\":flag-eg:\":\"🇪🇬\",\":flag-eh:\":\"🇪🇭\",\":flag-er:\":\"🇪🇷\",\":flag-es:\":\"🇪🇸\",\":flag-et:\":\"🇪🇹\",\":flag-eu:\":\"🇪🇺\",\":flag-fi:\":\"🇫🇮\",\":flag-fj:\":\"🇫🇯\",\":flag-fk:\":\"🇫🇰\",\":flag-fm:\":\"🇫🇲\",\":flag-fo:\":\"🇫🇴\",\":flag-fr:\":\"🇫🇷\",\":flag-ga:\":\"🇬🇦\",\":flag-gb:\":\"🇬🇧\",\":flag-gd:\":\"🇬🇩\",\":flag-ge:\":\"🇬🇪\",\":flag-gf:\":\"🇬🇫\",\":flag-gg:\":\"🇬🇬\",\":flag-gh:\":\"🇬🇭\",\":flag-gi:\":\"🇬🇮\",\":flag-gl:\":\"🇬🇱\",\":flag-gm:\":\"🇬🇲\",\":flag-gn:\":\"🇬🇳\",\":flag-gp:\":\"🇬🇵\",\":flag-gq:\":\"🇬🇶\",\":flag-gr:\":\"🇬🇷\",\":flag-gs:\":\"🇬🇸\",\":flag-gt:\":\"🇬🇹\",\":flag-gu:\":\"🇬🇺\",\":flag-gw:\":\"🇬🇼\",\":flag-gy:\":\"🇬🇾\",\":flag-hk:\":\"🇭🇰\",\":flag-hm:\":\"🇭🇲\",\":flag-hn:\":\"🇭🇳\",\":flag-hr:\":\"🇭🇷\",\":flag-ht:\":\"🇭🇹\",\":flag-hu:\":\"🇭🇺\",\":flag-ic:\":\"🇮🇨\",\":flag-id:\":\"🇮🇩\",\":flag-ie:\":\"🇮🇪\",\":flag-il:\":\"🇮🇱\",\":flag-im:\":\"🇮🇲\",\":flag-in:\":\"🇮🇳\",\":flag-io:\":\"🇮🇴\",\":flag-iq:\":\"🇮🇶\",\":flag-ir:\":\"🇮🇷\",\":flag-is:\":\"🇮🇸\",\":flag-it:\":\"🇮🇹\",\":flag-je:\":\"🇯🇪\",\":flag-jm:\":\"🇯🇲\",\":flag-jo:\":\"🇯🇴\",\":flag-jp:\":\"🇯🇵\",\":flag-ke:\":\"🇰🇪\",\":flag-kg:\":\"🇰🇬\",\":flag-kh:\":\"🇰🇭\",\":flag-ki:\":\"🇰🇮\",\":flag-km:\":\"🇰🇲\",\":flag-kn:\":\"🇰🇳\",\":flag-kp:\":\"🇰🇵\",\":flag-kr:\":\"🇰🇷\",\":flag-kw:\":\"🇰🇼\",\":flag-ky:\":\"🇰🇾\",\":flag-kz:\":\"🇰🇿\",\":flag-la:\":\"🇱🇦\",\":flag-lb:\":\"🇱🇧\",\":flag-lc:\":\"🇱🇨\",\":flag-li:\":\"🇱🇮\",\":flag-lk:\":\"🇱🇰\",\":flag-lr:\":\"🇱🇷\",\":flag-ls:\":\"🇱🇸\",\":flag-lt:\":\"🇱🇹\",\":flag-lu:\":\"🇱🇺\",\":flag-lv:\":\"🇱🇻\",\":flag-ly:\":\"🇱🇾\",\":flag-ma:\":\"🇲🇦\",\":flag-mc:\":\"🇲🇨\",\":flag-md:\":\"🇲🇩\",\":flag-me:\":\"🇲🇪\",\":flag-mf:\":\"🇲🇫\",\":flag-mg:\":\"🇲🇬\",\":flag-mh:\":\"🇲🇭\",\":flag-mk:\":\"🇲🇰\",\":flag-ml:\":\"🇲🇱\",\":flag-mm:\":\"🇲🇲\",\":flag-mn:\":\"🇲🇳\",\":flag-mo:\":\"🇲🇴\",\":flag-mp:\":\"🇲🇵\",\":flag-mq:\":\"🇲🇶\",\":flag-mr:\":\"🇲🇷\",\":flag-ms:\":\"🇲🇸\",\":flag-mt:\":\"🇲🇹\",\":flag-mu:\":\"🇲🇺\",\":flag-mv:\":\"🇲🇻\",\":flag-mw:\":\"🇲🇼\",\":flag-mx:\":\"🇲🇽\",\":flag-my:\":\"🇲🇾\",\":flag-mz:\":\"🇲🇿\",\":flag-na:\":\"🇳🇦\",\":flag-nc:\":\"🇳🇨\",\":flag-ne:\":\"🇳🇪\",\":flag-nf:\":\"🇳🇫\",\":flag-ng:\":\"🇳🇬\",\":flag-ni:\":\"🇳🇮\",\":flag-nl:\":\"🇳🇱\",\":flag-no:\":\"🇳🇴\",\":flag-np:\":\"🇳🇵\",\":flag-nr:\":\"🇳🇷\",\":flag-nu:\":\"🇳🇺\",\":flag-nz:\":\"🇳🇿\",\":flag-om:\":\"🇴🇲\",\":flag-pa:\":\"🇵🇦\",\":flag-pe:\":\"🇵🇪\",\":flag-pf:\":\"🇵🇫\",\":flag-pg:\":\"🇵🇬\",\":flag-ph:\":\"🇵🇭\",\":flag-pk:\":\"🇵🇰\",\":flag-pl:\":\"🇵🇱\",\":flag-pm:\":\"🇵🇲\",\":flag-pn:\":\"🇵🇳\",\":flag-pr:\":\"🇵🇷\",\":flag-ps:\":\"🇵🇸\",\":flag-pt:\":\"🇵🇹\",\":flag-pw:\":\"🇵🇼\",\":flag-py:\":\"🇵🇾\",\":flag-qa:\":\"🇶🇦\",\":flag-re:\":\"🇷🇪\",\":flag-ro:\":\"🇷🇴\",\":flag-rs:\":\"🇷🇸\",\":flag-ru:\":\"🇷🇺\",\":flag-rw:\":\"🇷🇼\",\":flag-sa:\":\"🇸🇦\",\":flag-sb:\":\"🇸🇧\",\":flag-sc:\":\"🇸🇨\",\":flag-sd:\":\"🇸🇩\",\":flag-se:\":\"🇸🇪\",\":flag-sg:\":\"🇸🇬\",\":flag-sh:\":\"🇸🇭\",\":flag-si:\":\"🇸🇮\",\":flag-sj:\":\"🇸🇯\",\":flag-sk:\":\"🇸🇰\",\":flag-sl:\":\"🇸🇱\",\":flag-sm:\":\"🇸🇲\",\":flag-sn:\":\"🇸🇳\",\":flag-so:\":\"🇸🇴\",\":flag-sr:\":\"🇸🇷\",\":flag-ss:\":\"🇸🇸\",\":flag-st:\":\"🇸🇹\",\":flag-sv:\":\"🇸🇻\",\":flag-sx:\":\"🇸🇽\",\":flag-sy:\":\"🇸🇾\",\":flag-sz:\":\"🇸🇿\",\":flag-ta:\":\"🇹🇦\",\":flag-tc:\":\"🇹🇨\",\":flag-td:\":\"🇹🇩\",\":flag-tf:\":\"🇹🇫\",\":flag-tg:\":\"🇹🇬\",\":flag-th:\":\"🇹🇭\",\":flag-tj:\":\"🇹🇯\",\":flag-tk:\":\"🇹🇰\",\":flag-tl:\":\"🇹🇱\",\":flag-tm:\":\"🇹🇲\",\":flag-tn:\":\"🇹🇳\",\":flag-to:\":\"🇹🇴\",\":flag-tr:\":\"🇹🇷\",\":flag-tt:\":\"🇹🇹\",\":flag-tv:\":\"🇹🇻\",\":flag-tw:\":\"🇹🇼\",\":flag-tz:\":\"🇹🇿\",\":flag-ua:\":\"🇺🇦\",\":flag-ug:\":\"🇺🇬\",\":flag-um:\":\"🇺🇲\",\":flag-us:\":\"🇺🇸\",\":flag-uy:\":\"🇺🇾\",\":flag-uz:\":\"🇺🇿\",\":flag-va:\":\"🇻🇦\",\":flag-vc:\":\"🇻🇨\",\":flag-ve:\":\"🇻🇪\",\":flag-vg:\":\"🇻🇬\",\":flag-vi:\":\"🇻🇮\",\":flag-vn:\":\"🇻🇳\",\":flag_vu:\":\"🇻🇺\",\":flag_wf:\":\"🇼🇫\",\":flag_ws:\":\"🇼🇸\",\":flag_xk:\":\"🇽🇰\",\":flag_ye:\":\"🇾🇪\",\":flag_yt:\":\"🇾🇹\",\":flag_za:\":\"🇿🇦\",\":flag_zm:\":\"🇿🇲\",\":flag_zw:\":\"🇿🇼\",\":black_heart:\":\"🖤\",\":speech_left:\":\"🗨\",\":egg:\":\"🥚\",\":octagonal_sign:\":\"🛑\",\":spades:\":\"♠\",\":hearts:\":\"♥\",\":diamonds:\":\"♦\",\":clubs:\":\"♣\",\":drum:\":\"🥁\",\":left_right_arrow:\":\"↔\",\":tm:\":\"™\",\":0:\":\"0️⃣\",\":1:\":\"1️⃣\",\":2:\":\"2️⃣\",\":3:\":\"3️⃣\",\":4:\":\"4️⃣\",\":5:\":\"5️⃣\",\":6:\":\"6️⃣\",\":7:\":\"7️⃣\",\":8:\":\"8️⃣\",\":9:\":\"9️⃣\",\":hash:\":\"#⃣\",\":asterisk:\":\"*⃣\",\":zero:\":\"0⃣\",\":one:\":\"1⃣\",\":two:\":\"2⃣\",\":three:\":\"3⃣\",\":four:\":\"4⃣\",\":five:\":\"5⃣\",\":six:\":\"6⃣\",\":seven:\":\"7⃣\",\":eight:\":\"8⃣\",\":nine:\":\"9⃣\",\":rolling_on_the_floor_laughing:\":\"🤣\",\":smiling_face_with_hearts:\":\"🥰\",\":starstruck:\":\"🤩\",\":smiling_face:\":\"☺\",\":zany_face:\":\"🤪\",\":face_with_hand_over_mouth:\":\"🤭\",\":shushing_face:\":\"🤫\",\":face_with_raised_eyebrow:\":\"🤨\",\":lying_face:\":\"🤥\",\":drooling_face:\":\"🤤\",\":nauseated_face:\":\"🤢\",\":face_vomiting:\":\"🤮\",\":sneezing_face:\":\"🤧\",\":hot_face:\":\"🥵\",\":cold_face:\":\"🥶\",\":woozy_face:\":\"🥴\",\":exploding_head:\":\"🤯\",\":cowboy_hat_face:\":\"🤠\",\":partying_face:\":\"🥳\",\":face_with_monocle:\":\"🧐\",\":frowning_face:\":\"☹️\",\":pleading_face:\":\"🥺\",\":yawning_face:\":\"🥱\",\":face_with_symbols_on_mouth:\":\"🤬\",\":skull_and_crossbones:\":\"☠️\",\":clown_face:\":\"🤡\",\":red_heart:\":\"❤\",\":orange_heart:\":\"🧡\",\":brown_heart:\":\"🤎\",\":white_heart:\":\"🤍\",\":hole:\":\"🕳️\",\":left_speech_bubble:\":\"🗨️\",\":right_anger_bubble:\":\"🗯️\",\":raised_back_of_hand:\":\"🤚\",\":child:\":\"🧒\",\":mediumdark_skin_tone_beard:\":\"🧔🏾\",\":dark_skin_tone_beard:\":\"🧔🏿\",\":zombie:\":\"🧟\",\":man_bouncing_ball:\":\"⛹‍♂\",\":man_lifting_weights:\":\"🏋‍♂\",\":person_playing_water_polo:\":\"🤽\",\":light_skin_tone_mediumdark_skin_tone:\":\"🧑🏻‍🤝‍🧑🏾\",\":man_man:\":\"👨‍❤‍👨\",\":man_woman_boy:\":\"👨‍👩‍👦\",\":speaking_head:\":\"🗣️\",\":light_skin_tone:\":\"🏻\",\":mediumlight_skin_tone:\":\"🏼\",\":medium_skin_tone:\":\"🏽\",\":mediumdark_skin_tone:\":\"🏾\",\":gorilla:\":\"🦍\",\":orangutan:\":\"🦧\",\":guide_dog:\":\"🦮\",\":service_dog:\":\"🐕‍🦺\",\":fox:\":\"🦊\",\":raccoon:\":\"🦝\",\":zebra:\":\"🦓\",\":deer:\":\"🦌\",\":llama:\":\"🦙\",\":giraffe:\":\"🦒\",\":rhinoceros:\":\"🦏\",\":hippopotamus:\":\"🦛\",\":chipmunk:\":\"🐿️\",\":hedgehog:\":\"🦔\",\":bat:\":\"🦇\",\":sloth:\":\"🦥\",\":otter:\":\"🦦\",\":skunk:\":\"🦨\",\":kangaroo:\":\"🦘\",\":badger:\":\"🦡\",\":dove:\":\"🕊️\",\":eagle:\":\"🦅\",\":duck:\":\"🦆\",\":swan:\":\"🦢\",\":owl:\":\"🦉\",\":flamingo:\":\"🦩\",\":peacock:\":\"🦚\",\":parrot:\":\"🦜\",\":lizard:\":\"🦎\",\":sauropod:\":\"🦕\",\":TRex:\":\"🦖\",\":shark:\":\"🦈\",\":butterfly:\":\"🦋\",\":cricket:\":\"🦗\",\":spider:\":\"🕷️\",\":spider_web:\":\"🕸️\",\":mosquito:\":\"🦟\",\":microbe:\":\"🦠\",\":rosette:\":\"🏵️\",\":wilted_flower:\":\"🥀\",\":shamrock:\":\"☘️\",\":mango:\":\"🥭\",\":kiwi_fruit:\":\"🥝\",\":coconut:\":\"🥥\",\":avocado:\":\"🥑\",\":potato:\":\"🥔\",\":carrot:\":\"🥕\",\":hot_pepper:\":\"🌶️\",\":cucumber:\":\"🥒\",\":leafy_green:\":\"🥬\",\":broccoli:\":\"🥦\",\":garlic:\":\"🧄\",\":onion:\":\"🧅\",\":peanuts:\":\"🥜\",\":croissant:\":\"🥐\",\":baguette_bread:\":\"🥖\",\":pretzel:\":\"🥨\",\":bagel:\":\"🥯\",\":pancakes:\":\"🥞\",\":waffle:\":\"🧇\",\":cut_of_meat:\":\"🥩\",\":bacon:\":\"🥓\",\":sandwich:\":\"🥪\",\":stuffed_flatbread:\":\"🥙\",\":falafel:\":\"🧆\",\":shallow_pan_of_food:\":\"🥘\",\":bowl_with_spoon:\":\"🥣\",\":green_salad:\":\"🥗\",\":butter:\":\"🧈\",\":salt:\":\"🧂\",\":canned_food:\":\"🥫\",\":moon_cake:\":\"🥮\",\":dumpling:\":\"🥟\",\":fortune_cookie:\":\"🥠\",\":takeout_box:\":\"🥡\",\":lobster:\":\"🦞\",\":shrimp:\":\"🦐\",\":squid:\":\"🦑\",\":oyster:\":\"🦪\",\":cupcake:\":\"🧁\",\":pie:\":\"🥧\",\":glass_of_milk:\":\"🥛\",\":clinking_glasses:\":\"🥂\",\":tumbler_glass:\":\"🥃\",\":cup_with_straw:\":\"🥤\",\":beverage_box:\":\"🧃\",\":mate:\":\"🧉\",\":ice:\":\"🧊\",\":chopsticks:\":\"🥢\",\":fork_and_knife_with_plate:\":\"🍽️\",\":spoon:\":\"🥄\",\":world_map:\":\"🗺️\",\":compass:\":\"🧭\",\":snowcapped_mountain:\":\"🏔️\",\":mountain:\":\"⛰️\",\":camping:\":\"🏕️\",\":beach_with_umbrella:\":\"🏖️\",\":desert:\":\"🏜️\",\":desert_island:\":\"🏝️\",\":national_park:\":\"🏞️\",\":stadium:\":\"🏟️\",\":classical_building:\":\"🏛️\",\":building_construction:\":\"🏗️\",\":brick:\":\"🧱\",\":houses:\":\"🏘️\",\":derelict_house:\":\"🏚️\",\":hindu_temple:\":\"🛕\",\":shinto_shrine:\":\"⛩️\",\":cityscape:\":\"🏙️\",\":hot_springs:\":\"♨\",\":racing_car:\":\"🏎️\",\":motorcycle:\":\"🏍️\",\":motor_scooter:\":\"🛵\",\":manual_wheelchair:\":\"🦽\",\":motorized_wheelchair:\":\"🦼\",\":auto_rickshaw:\":\"🛺\",\":kick_scooter:\":\"🛴\",\":skateboard:\":\"🛹\",\":motorway:\":\"🛣️\",\":railway_track:\":\"🛤️\",\":oil_drum:\":\"🛢️\",\":canoe:\":\"🛶\",\":passenger_ship:\":\"🛳️\",\":ferry:\":\"⛴️\",\":motor_boat:\":\"🛥️\",\":small_airplane:\":\"🛩️\",\":parachute:\":\"🪂\",\":flying_saucer:\":\"🛸\",\":bellhop_bell:\":\"🛎️\",\":luggage:\":\"🧳\",\":stopwatch:\":\"⏱️\",\":timer_clock:\":\"⏲️\",\":mantelpiece_clock:\":\"🕰️\",\":thermometer:\":\"🌡️\",\":sun:\":\"☀\",\":ringed_planet:\":\"🪐\",\":cloud:\":\"☁️\",\":cloud_with_lightning_and_rain:\":\"⛈️\",\":sun_behind_small_cloud:\":\"🌤️\",\":sun_behind_large_cloud:\":\"🌥️\",\":sun_behind_rain_cloud:\":\"🌦️\",\":cloud_with_rain:\":\"🌧️\",\":cloud_with_snow:\":\"🌨️\",\":cloud_with_lightning:\":\"🌩️\",\":tornado:\":\"🌪️\",\":fog:\":\"🌫️\",\":wind_face:\":\"🌬️\",\":umbrella_on_ground:\":\"⛱️\",\":comet:\":\"☄️\",\":firecracker:\":\"🧨\",\":red_envelope:\":\"🧧\",\":reminder_ribbon:\":\"🎗️\",\":admission_tickets:\":\"🎟️\",\":military_medal:\":\"🎖️\",\":1st_place_medal:\":\"🥇\",\":2nd_place_medal:\":\"🥈\",\":3rd_place_medal:\":\"🥉\",\":softball:\":\"🥎\",\":flying_disc:\":\"🥏\",\":lacrosse:\":\"🥍\",\":boxing_glove:\":\"🥊\",\":martial_arts_uniform:\":\"🥋\",\":goal_net:\":\"🥅\",\":ice_skate:\":\"⛸️\",\":diving_mask:\":\"🤿\",\":sled:\":\"🛷\",\":curling_stone:\":\"🥌\",\":yoyo:\":\"🪀\",\":kite:\":\"🪁\",\":nazar_amulet:\":\"🧿\",\":joystick:\":\"🕹️\",\":puzzle_piece:\":\"🧩\",\":teddy_bear:\":\"🧸\",\":chess_pawn:\":\"♟️\",\":framed_picture:\":\"🖼️\",\":thread:\":\"🧵\",\":yarn:\":\"🧶\",\":goggles:\":\"🥽\",\":lab_coat:\":\"🥼\",\":safety_vest:\":\"🦺\",\":scarf:\":\"🧣\",\":gloves:\":\"🧤\",\":coat:\":\"🧥\",\":socks:\":\"🧦\",\":sari:\":\"🥻\",\":onepiece_swimsuit:\":\"🩱\",\":briefs:\":\"🩲\",\":shorts:\":\"🩳\",\":shopping_bags:\":\"🛍️\",\":hiking_boot:\":\"🥾\",\":flat_shoe:\":\"🥿\",\":ballet_shoes:\":\"🩰\",\":billed_cap:\":\"🧢\",\":rescue_worker’s_helmet:\":\"⛑️\",\":studio_microphone:\":\"🎙️\",\":level_slider:\":\"🎚️\",\":control_knobs:\":\"🎛️\",\":banjo:\":\"🪕\",\":desktop_computer:\":\"🖥️\",\":printer:\":\"🖨️\",\":keyboard:\":\"⌨️\",\":computer_mouse:\":\"🖱️\",\":trackball:\":\"🖲️\",\":abacus:\":\"🧮\",\":film_frames:\":\"🎞️\",\":film_projector:\":\"📽️\",\":candle:\":\"🕯️\",\":diya_lamp:\":\"🪔\",\":rolledup_newspaper:\":\"🗞️\",\":label:\":\"🏷️\",\":receipt:\":\"🧾\",\":ballot_box_with_ballot:\":\"🗳️\",\":pencil:\":\"✏️\",\":black_nib:\":\"✒️\",\":fountain_pen:\":\"🖋️\",\":pen:\":\"🖊️\",\":paintbrush:\":\"🖌️\",\":crayon:\":\"🖍️\",\":card_index_dividers:\":\"🗂️\",\":spiral_notepad:\":\"🗒️\",\":spiral_calendar:\":\"🗓️\",\":card_file_box:\":\"🗃️\",\":file_cabinet:\":\"🗄️\",\":wastebasket:\":\"🗑️\",\":old_key:\":\"🗝️\",\":axe:\":\"🪓\",\":pick:\":\"⛏️\",\":hammer_and_pick:\":\"⚒️\",\":hammer_and_wrench:\":\"🛠️\",\":dagger:\":\"🗡️\",\":crossed_swords:\":\"⚔️\",\":shield:\":\"🛡️\",\":gear:\":\"⚙️\",\":clamp:\":\"🗜️\",\":balance_scale:\":\"⚖️\",\":probing_cane:\":\"🦯\",\":chains:\":\"⛓️\",\":toolbox:\":\"🧰\",\":magnet:\":\"🧲\",\":alembic:\":\"⚗️\",\":test_tube:\":\"🧪\",\":petri_dish:\":\"🧫\",\":dna:\":\"🧬\",\":drop_of_blood:\":\"🩸\",\":adhesive_bandage:\":\"🩹\",\":stethoscope:\":\"🩺\",\":bed:\":\"🛏️\",\":couch_and_lamp:\":\"🛋️\",\":chair:\":\"🪑\",\":razor:\":\"🪒\",\":lotion_bottle:\":\"🧴\",\":safety_pin:\":\"🧷\",\":broom:\":\"🧹\",\":basket:\":\"🧺\",\":roll_of_paper:\":\"🧻\",\":soap:\":\"🧼\",\":sponge:\":\"🧽\",\":fire_extinguisher:\":\"🧯\",\":shopping_cart:\":\"🛒\",\":coffin:\":\"⚰️\",\":funeral_urn:\":\"⚱️\",\":radioactive:\":\"☢️\",\":biohazard:\":\"☣️\",\":up_arrow:\":\"⬆\",\":upright_arrow:\":\"↗\",\":right_arrow:\":\"➡️\",\":downright_arrow:\":\"↘\",\":down_arrow:\":\"⬇\",\":downleft_arrow:\":\"↙\",\":left_arrow:\":\"⬅\",\":upleft_arrow:\":\"↖️\",\":updown_arrow:\":\"↕️\",\":right_arrow_curving_left:\":\"↩\",\":left_arrow_curving_right:\":\"↪\",\":right_arrow_curving_up:\":\"⤴\",\":right_arrow_curving_down:\":\"⤵\",\":atom_symbol:\":\"⚛️\",\":om:\":\"🕉️\",\":star_of_David:\":\"✡\",\":wheel_of_dharma:\":\"☸️\",\":yin_yang:\":\"☯️\",\":latin_cross:\":\"✝\",\":orthodox_cross:\":\"☦️\",\":star_and_crescent:\":\"☪️\",\":peace_symbol:\":\"☮️\",\":play_button:\":\"▶\",\":next_track_button:\":\"⏭️\",\":play_or_pause_button:\":\"⏯️\",\":reverse_button:\":\"◀\",\":last_track_button:\":\"⏮️\",\":eject_button:\":\"⏏️\",\":female_sign:\":\"♀️\",\":male_sign:\":\"♂\",\":medical_symbol:\":\"⚕️\",\":infinity:\":\"♾️\",\":recycling_symbol:\":\"♻️\",\":fleurde-lis:\":\"⚜️\",\":check_box_with_check:\":\"☑\",\":check_mark:\":\"✔\",\":multiplication_sign:\":\"✖\",\":eightspoked_asterisk:\":\"✳\",\":eightpointed_star:\":\"✴\",\":double_exclamation_mark:\":\"‼\",\":exclamation_question_mark:\":\"⁉\",\":#:\":\"#️⃣\",\":A_button_blood_type:\":\"🅰\",\":B_button_blood_type:\":\"🅱\",\":information:\":\"ℹ️\",\":circled_M:\":\"Ⓜ\",\":O_button_blood_type:\":\"🅾\",\":P_button:\":\"🅿\",\":Japanese_service_charge_button:\":\"🈂\",\":Japanese_monthly_amount_button:\":\"🈷️\",\":Japanese_reserved_button:\":\"🈯\",\":Japanese_free_of_charge_button:\":\"🈚\",\":Japanese_congratulations_button:\":\"㊗️\",\":Japanese_secret_button:\":\"㊙️\",\":orange_circle:\":\"🟠\",\":yellow_circle:\":\"🟡\",\":green_circle:\":\"🟢\",\":purple_circle:\":\"🟣\",\":brown_circle:\":\"🟤\",\":red_square:\":\"🟥\",\":orange_square:\":\"🟧\",\":yellow_square:\":\"🟨\",\":green_square:\":\"🟩\",\":blue_square:\":\"🟦\",\":white_flag:\":\"🏳️\",\":United_Nations:\":\"🇺🇳\",\":England:\":\"🏴󠁧󠁢󠁥󠁮󠁧󠁿\",\":Scotland:\":\"🏴󠁧󠁢󠁳󠁣󠁴󠁿\",\":wales:\":\"🏴󠁧󠁢󠁷󠁬󠁳󠁿\"}");
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-SG": "zavE",
        "./en-SG.js": "zavE",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/elements */
      "Dti6");
      /* harmony import */


      var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./catalogue/catalogue.component */
      "L6jA");

      var AppComponent = function AppComponent(injector) {
        _classCallCheck(this, AppComponent);

        var catalogueElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_2__["CatalogueComponent"], {
          injector: injector
        });
        customElements.define('catalogue-element', catalogueElement);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-catalogue");
          }
        },
        directives: [_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_2__["CatalogueComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _repo_repo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./repo/repo.component */
      "AFWc");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular2-moment */
      "5eXZ");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _repo_details_repo_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./repo-details/repo-details.component */
      "l2Dm");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _howto_howto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./howto/howto.component */
      "l5KK");
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-markdown */
      "lR5k");
      /* harmony import */


      var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./catalogue/catalogue.component */
      "L6jA");
      /* harmony import */


      var _pipes_emoji_fixup_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pipes/emoji-fixup.pipe */
      "2bqi");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], angular2_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _repo_repo_component__WEBPACK_IMPORTED_MODULE_4__["RepoComponent"], _repo_details_repo_details_component__WEBPACK_IMPORTED_MODULE_11__["RepoDetailsComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _howto_howto_component__WEBPACK_IMPORTED_MODULE_14__["HowtoComponent"], _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_16__["CatalogueComponent"], _pipes_emoji_fixup_pipe__WEBPACK_IMPORTED_MODULE_17__["EmojiFixupPipe"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], angular2_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _repo_repo_component__WEBPACK_IMPORTED_MODULE_4__["RepoComponent"], _repo_details_repo_details_component__WEBPACK_IMPORTED_MODULE_11__["RepoDetailsComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _howto_howto_component__WEBPACK_IMPORTED_MODULE_14__["HowtoComponent"], _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_16__["CatalogueComponent"], _pipes_emoji_fixup_pipe__WEBPACK_IMPORTED_MODULE_17__["EmojiFixupPipe"]],
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], angular2_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"].forRoot()],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dNPv":
    /*!*********************************************************!*\
      !*** ./src/app/services/catalogue/catalogue.service.ts ***!
      \*********************************************************/

    /*! exports provided: CatalogueService */

    /***/
    function dNPv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogueService", function () {
        return CatalogueService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CatalogueService = /*#__PURE__*/function () {
        function CatalogueService(http, route) {
          var _this3 = this;

          _classCallCheck(this, CatalogueService);

          this.http = http;
          this.route = route;
          this.items$ = {};
          this.configURL = 'assets/default.json';
          this.http.get(this.configURL).subscribe(function (config) {
            _this3.CONF = config;

            for (var _i2 = 0, _Object$keys = Object.keys(_this3.CONF.tabs); _i2 < _Object$keys.length; _i2++) {
              var k = _Object$keys[_i2];
              _this3.items$[k] = _this3.getLocalItems(_this3.CONF.tabs[k]);
            }
          });
        }

        _createClass(CatalogueService, [{
          key: "getLocalItems",
          value: function getLocalItems(tab) {
            var _this4 = this;

            var _tab$org = tab.org,
                org = _tab$org === void 0 ? '' : _tab$org,
                _tab$topic = tab.topic,
                topic = _tab$topic === void 0 ? '' : _tab$topic;
            var key = "".concat(org, "-").concat(topic);
            var item = localStorage.getItem(key);

            if (item && !this.expireMinutes(30, JSON.parse(item).timeDate)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(JSON.parse(item).value);
            }

            var topicFilter = topic ? "+topic:".concat(topic) : '';
            var orgFilter = org ? "org:".concat(org, "+") : '';
            var perPage = this.CONF.perPage;
            var totalSize = null;

            var getPage = function getPage(page) {
              return _this4.http.get("https://api.github.com/search/repositories?page=".concat(page, "&per_page=").concat(_this4.CONF.perPage, "&q=").concat(orgFilter, "fork:true").concat(topicFilter, "+sort:stars"));
            };

            var pages$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              var fetchPage = function fetchPage(page) {
                return getPage(page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                  if (!totalSize) {
                    totalSize = res.total_count;
                  }

                  return res.items;
                })).subscribe(function (items) {
                  observer.next(items);
                  var hasNextPage = perPage * page < totalSize;

                  if (hasNextPage) {
                    fetchPage(page + 1);
                  } else {
                    observer.complete();
                  }
                });
              };

              fetchPage(1);
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (acc, val) {
              return acc.concat(val);
            }, []));
            return this.cacheable(pages$, key);
          }
        }, {
          key: "cacheable",
          value: function cacheable(obs, key) {
            return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
              next: function next(data) {
                localStorage.setItem(key, JSON.stringify({
                  timeDate: new Date().getTime(),
                  value: data
                }));
              },
              error: function error(err) {
                console.error(err);
              }
            }));
          }
        }, {
          key: "expireMinutes",
          value: function expireMinutes(minutes, timeDate) {
            var diff = Math.abs(new Date().getTime() - timeDate);
            var diffMinutes = Math.floor(diff / 1000) / 60;
            return minutes < diffMinutes;
          }
        }, {
          key: "getLocalRepo",
          value: function getLocalRepo(id) {
            var key = 'repo-' + id;
            var item = localStorage.getItem(key);

            if (item && !this.expireMinutes(30, JSON.parse(item).timeDate)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(JSON.parse(item).value);
            }

            return this.cacheable(this.http.get("https://api.github.com/repositories/".concat(id)), key);
          }
        }, {
          key: "getRawReadmeDefault",
          value: function getRawReadmeDefault(repo) {
            return this.getRawReadme(repo.full_name, repo.default_branch);
          }
        }, {
          key: "getRawReadme",
          value: function getRawReadme(repo, defaultBranch) {
            var _this5 = this;

            return this.http.get("https://raw.githubusercontent.com/".concat(repo, "/").concat(defaultBranch, "/README.md?time=").concat(Date.now()), {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
              return _this5.http.get("https://raw.githubusercontent.com/".concat(repo, "/").concat(defaultBranch, "/.github/README.md?time=").concat(Date.now()), {
                responseType: 'text'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('No README found');
              }));
            }));
          }
        }, {
          key: "confTabsKeys",
          get: function get() {
            var _a;

            return this.CONF && Object.keys((_a = this.CONF) === null || _a === void 0 ? void 0 : _a.tabs);
          }
        }, {
          key: "confTabPaths",
          get: function get() {
            return this.CONF && Object.values(this.CONF.tabs).map(function (tab) {
              return tab.path;
            });
          }
        }, {
          key: "tabIndex",
          get: function get() {
            if (!this.confTabPaths) {
              return -1;
            }

            var tabName = this.route.snapshot.paramMap.get('tab');
            return tabName ? this.confTabPaths.indexOf("/".concat(tabName)) : 0;
          }
        }]);

        return CatalogueService;
      }();

      CatalogueService.ɵfac = function CatalogueService_Factory(t) {
        return new (t || CatalogueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      CatalogueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CatalogueService,
        factory: CatalogueService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogueService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "l2Dm":
    /*!********************************************************!*\
      !*** ./src/app/repo-details/repo-details.component.ts ***!
      \********************************************************/

    /*! exports provided: RepoDetailsComponent */

    /***/
    function l2Dm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepoDetailsComponent", function () {
        return RepoDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-markdown */
      "lR5k");
      /* harmony import */


      var _pipes_emoji_fixup_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/emoji-fixup.pipe */
      "2bqi");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular2-moment */
      "5eXZ");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_9__);

      function RepoDetailsComponent_div_3_li_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " License: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faBalanceScale);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.repo.license.spdx_id);
        }
      }

      function RepoDetailsComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RepoDetailsComponent_div_3_Template_img_error_2_listener() {
            var data_r1 = ctx.ngIf;
            return data_r1.logo = "https://avatars0.githubusercontent.com/u/20147732?v=4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "markdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "emojiFixup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About this repo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Repo ID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Author: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Repo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "View on Github ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Watchers: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Stars: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Forks: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Created: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "amTimeAgo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Last update: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "amTimeAgo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RepoDetailsComponent_div_3_li_66_Template, 5, 2, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", data_r1.repo.full_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.repo.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://github.com/", data_r1.repo.owner.login, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.repo.owner.login);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 26, data_r1.readme), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "", data_r1.repo.html_url, "/archive/", data_r1.repo.default_branch, ".zip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faGlobe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.repo.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faUserCircle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.repo.owner.login);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faGithub);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", data_r1.repo.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faExternalLinkAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faEye);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.repo.subscribers_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faStar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.repo.stargazers_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faCodeBranch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.repo.forks_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faClock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 28, data_r1.repo.created_at));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faSync);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 30, data_r1.repo.pushed_at));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r1.repo == null ? null : data_r1.repo.license);
        }
      }

      var RepoDetailsComponent = function RepoDetailsComponent(route) {
        _classCallCheck(this, RepoDetailsComponent);

        this.route = route;
        this.faCaretLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretLeft"];
        this.faGlobe = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGlobe"];
        this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCircle"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faExternalLinkAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExternalLinkAlt"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEye"];
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStar"];
        this.faCodeBranch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCodeBranch"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"];
        this.faBalanceScale = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBalanceScale"];
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSync"];
        this.data$ = route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('data')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
          window.parent.document.title = data.repo.name;
        }));
      };

      RepoDetailsComponent.ɵfac = function RepoDetailsComponent_Factory(t) {
        return new (t || RepoDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      RepoDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RepoDetailsComponent,
        selectors: [["app-repo-details"]],
        decls: 5,
        vars: 4,
        consts: [["href", "#/home"], [3, "icon"], ["class", "mt-3", 4, "ngIf"], [1, "mt-3"], [1, "media"], [1, "mr-3", "logo-small", "logo", 3, "src", "alt", "error"], [1, "media-body"], [1, "mt-0", "mb-0"], [3, "href"], [1, "row"], [1, "col-12", "col-md-8"], [1, "col-12", "col-md-4"], ["id", "about"], ["target", "_blank", 1, "btn", "btn-lg", "btn-success", 3, "href"], [1, "fa", "fa-download"], [1, "list-unstyled"], [1, "float-right"], ["target", "_blank", 1, "float-right", 3, "href"], [4, "ngIf"]],
        template: function RepoDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0 back to Catalogue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RepoDetailsComponent_div_3_Template, 67, 32, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCaretLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.data$));
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _pipes_emoji_fixup_pipe__WEBPACK_IMPORTED_MODULE_8__["EmojiFixupPipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_9__["TimeAgoPipe"]],
        styles: [".logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n#about[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid 2px #888;\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlcG8tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InJlcG8tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuI2Fib3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzg4ODtcbiAgcGFkZGluZzogMjVweDtcbn1cbiJdfQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepoDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-repo-details',
            templateUrl: './repo-details.component.html',
            styleUrls: ['./repo-details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "l5KK":
    /*!******************************************!*\
      !*** ./src/app/howto/howto.component.ts ***!
      \******************************************/

    /*! exports provided: HowtoComponent */

    /***/
    function l5KK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HowtoComponent", function () {
        return HowtoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _services_catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/catalogue/catalogue.service */
      "dNPv");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HowtoComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tab_r1.key, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.value.topic, " ");
        }
      }

      var HowtoComponent = function HowtoComponent(catalogueService) {
        _classCallCheck(this, HowtoComponent);

        this.catalogueService = catalogueService;
        this.faCaretLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretLeft"];
      };

      HowtoComponent.ɵfac = function HowtoComponent_Factory(t) {
        return new (t || HowtoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"]));
      };

      HowtoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HowtoComponent,
        selectors: [["app-howto"]],
        decls: 73,
        vars: 4,
        consts: [["href", "#/home"], [3, "icon"], [1, "mt-3"], [4, "ngFor", "ngForOf"]],
        template: function HowtoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0 back to Catalogue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "How to add an item in the catalogue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "In order to add your repository in the catalogue, you need to add the github topic related to each tab.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tabs & topics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HowtoComponent_li_10_Template, 4, 2, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "keyvalue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add these information in your project README");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "name of your script.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Author:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "username of the original author (in case it's forked into an organization).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Repository:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "link to the GitHub repository.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Download:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "link to download the sources as .zip (take it from GitHub).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "License:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "license used to release the code.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Give a complete description of what does the script and how it does it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Optional / Recommended");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Add a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "README.md");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " in the root folder with a complete description of your script. It will be shown in the details page of the catalogue. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Add an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "icon.png");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " in the root folder. It will be shown in the script list and details page of the catalogue.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "db_assembler");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " to include your SQL patches.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Follow best practices from the skeleton (.gitattributes, .gitkeep etc...)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Give the user the biggest amount of options for configuration possible. It reduces the need to modify the code because \"something doesn't work as I would like to\". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Use the GNU Affero General Public License v3.0.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCaretLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 2, ctx.catalogueService.CONF == null ? null : ctx.catalogueService.CONF.tabs));
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HowtoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-howto',
            templateUrl: './howto.component.html'
          }]
        }], function () {
          return [{
            type: _services_catalogue_catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular2-moment */
      "5eXZ");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-markdown */
      "lR5k");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _howto_howto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./howto/howto.component */
      "l5KK");
      /* harmony import */


      var _repo_details_repo_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./repo-details/repo-details.component */
      "l2Dm");
      /* harmony import */


      var _services_resolvers_repo_details_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/resolvers/repo-details-resolver.service */
      "C5eQ");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
      }, {
        path: 'tab/:tab',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
      }, {
        path: 'details/:id',
        component: _repo_details_repo_details_component__WEBPACK_IMPORTED_MODULE_8__["RepoDetailsComponent"],
        resolve: {
          data: _services_resolvers_repo_details_resolver_service__WEBPACK_IMPORTED_MODULE_9__["RepoDetailsResolverService"]
        },
        runGuardsAndResolvers: 'paramsChange'
      }, {
        path: 'how-to',
        component: _howto_howto_component__WEBPACK_IMPORTED_MODULE_7__["HowtoComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          useHash: true
        }), _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], angular2_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forRoot()], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], angular2_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
              useHash: true
            }), _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], angular2_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forRoot()],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map