(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/public/pages/singleBlog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/public/pages/singleBlog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.vue */ "./resources/js/public/pages/sidebar.vue");
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
  data: function data() {
    return {};
  },
  methods: {
    getSinglePost: function getSinglePost() {
      return this.$store.dispatch('get_single_post_frond', this.$route.params.id);
    }
  },
  components: {
    sidebar: _sidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.getSinglePost();
  },
  computed: {
    post: function post() {
      return this.$store.getters.getSinglePost;
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.getSinglePost();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/public/pages/singleBlog.vue?vue&type=template&id=44fae2e6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/public/pages/singleBlog.vue?vue&type=template&id=44fae2e6& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "blog" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { attrs: { id: "content" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "span8" }, [
            _c("article", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "span8" }, [
                  _c("div", { staticClass: "post-image" }, [
                    _c("div", { staticClass: "post-heading" }, [
                      _c(
                        "h3",
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/single_blog/" + _vm.post.id } },
                            [_vm._v(_vm._s(_vm.post.title))]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("img", {
                      staticStyle: { width: "100%", height: "400px" },
                      attrs: { src: "/backend/img/" + _vm.post.image, alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n               " +
                        _vm._s(_vm.post.description) +
                        "\n              "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bottom-article" }, [
                    _c("ul", { staticClass: "meta-post" }, [
                      _c("li", [
                        _c("i", { staticClass: "icon-user" }),
                        _vm.post.author
                          ? _c("a", { attrs: { href: "#" } }, [
                              _vm._v(" " + _vm._s(_vm.post.author.name))
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("i", { staticClass: "icon-folder-open" }),
                        _vm.post.category
                          ? _c("a", { attrs: { href: "#" } }, [
                              _vm._v(" " + _vm._s(_vm.post.category.name))
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "span4" }, [_c("sidebar")], 1)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { attrs: { id: "inner-headline" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "span4" }, [
            _c("div", { staticClass: "inner-heading" }, [
              _c("h2", [_vm._v("Blog left sidebar")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "span8" }, [
            _c("ul", { staticClass: "breadcrumb" }, [
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", { staticClass: "icon-home" })
                ]),
                _c("i", { staticClass: "icon-angle-right" })
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Blog")]),
                _c("i", { staticClass: "icon-angle-right" })
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "active" }, [
                _vm._v("Blog with left sidebar")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("i", { staticClass: "icon-tags" }),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Web design")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/public/pages/singleBlog.vue":
/*!**************************************************!*\
  !*** ./resources/js/public/pages/singleBlog.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _singleBlog_vue_vue_type_template_id_44fae2e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleBlog.vue?vue&type=template&id=44fae2e6& */ "./resources/js/public/pages/singleBlog.vue?vue&type=template&id=44fae2e6&");
/* harmony import */ var _singleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleBlog.vue?vue&type=script&lang=js& */ "./resources/js/public/pages/singleBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _singleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _singleBlog_vue_vue_type_template_id_44fae2e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _singleBlog_vue_vue_type_template_id_44fae2e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/public/pages/singleBlog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/public/pages/singleBlog.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/public/pages/singleBlog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./singleBlog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/public/pages/singleBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/public/pages/singleBlog.vue?vue&type=template&id=44fae2e6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/public/pages/singleBlog.vue?vue&type=template&id=44fae2e6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBlog_vue_vue_type_template_id_44fae2e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./singleBlog.vue?vue&type=template&id=44fae2e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/public/pages/singleBlog.vue?vue&type=template&id=44fae2e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBlog_vue_vue_type_template_id_44fae2e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBlog_vue_vue_type_template_id_44fae2e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);