(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/category/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/category/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'List',
  data: function data() {
    return {
      categoryId: [],
      select: '',
      select_all: false
    };
  },
  methods: {
    delete_item: function delete_item(id) {
      var _this = this;

      axios.post("/api/delete_category", {
        id: id
      }).then(function (response) {
        Toast.fire({
          icon: 'success',
          title: response.data.data
        });
        return _this.$store.dispatch('setCategory');
      });
    },
    deleteAll: function deleteAll() {
      var _this2 = this;

      axios.get('/api/delete_multiple_category/' + this.categoryId).then(function (response) {
        _this2.$store.dispatch('setCategory');

        _this2.categoryId = [];
        Toast.fire({
          icon: 'success',
          title: "Category Deleted successfully"
        });
      });
    },
    seleteAll: function seleteAll() {
      if (this.select_all == false) {
        this.select_all = true;

        for (var category in this.get_categories) {
          this.categoryId.push(this.get_categories[category].id);
        }

        alert(this.categoryId);
      } else {
        this.select_all = false;

        for (var category in this.get_categories) {
          this.categoryId = [];
        }
      }
    }
  },
  computed: {
    get_categories: function get_categories() {
      return this.$store.getters.getCategory;
    }
  },
  mounted: function mounted() {
    return this.$store.dispatch('setCategory');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/category/index.vue?vue&type=template&id=55b903ea&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/category/index.vue?vue&type=template&id=55b903ea& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "show-category" } }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-8 offset-2" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c(
              "h3",
              { staticClass: "card-title float-right" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-warning",
                    attrs: { to: { name: "add_category" } }
                  },
                  [_vm._v("Add New Category")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "table",
              {
                staticClass: "table table-bordered table-hover",
                attrs: { id: "example2" }
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _c("p", [
                        _c("span", { staticClass: "pr-2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.select_all,
                                expression: "select_all"
                              }
                            ],
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.select_all)
                                ? _vm._i(_vm.select_all, null) > -1
                                : _vm.select_all
                            },
                            on: {
                              click: _vm.seleteAll,
                              change: function($event) {
                                var $$a = _vm.select_all,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.select_all = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.select_all = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.select_all = $$c
                                }
                              }
                            }
                          }),
                          _c("span", { staticClass: "pl-2" }, [
                            _vm._v("Checkbox")
                          ])
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.select,
                                  expression: "select"
                                }
                              ],
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.select = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  _vm.deleteAll
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Delete All")
                              ])
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Serial")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Created At")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Action")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.get_categories, function(data, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.categoryId,
                              expression: "categoryId"
                            }
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            value: data.id,
                            checked: Array.isArray(_vm.categoryId)
                              ? _vm._i(_vm.categoryId, data.id) > -1
                              : _vm.categoryId
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.categoryId,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = data.id,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.categoryId = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.categoryId = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.categoryId = $$c
                              }
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(data.name))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("time_format")(data.created_at)))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-success",
                              attrs: {
                                to: {
                                  name: "category_edit",
                                  params: { id: data.id }
                                }
                              }
                            },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger",
                              attrs: { href: "" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.delete_item(data.id)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/category/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/admin/pages/category/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_55b903ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=55b903ea& */ "./resources/js/admin/pages/category/index.vue?vue&type=template&id=55b903ea&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/category/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_55b903ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_55b903ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/category/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/category/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/pages/category/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/category/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/category/index.vue?vue&type=template&id=55b903ea&":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/pages/category/index.vue?vue&type=template&id=55b903ea& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_55b903ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=55b903ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/category/index.vue?vue&type=template&id=55b903ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_55b903ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_55b903ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);