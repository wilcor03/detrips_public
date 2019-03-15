/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/wilcor03/Code/detrips/node_modules/vue-loader/lib/component-normalizer.js'");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/wilcor03/Code/detrips/node_modules/vue/dist/vue.common.js'");

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(15);
window.Popper = __webpack_require__(17).default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

/*try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}*/

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(18);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/wilcor03/Code/detrips/node_modules/lodash/lodash.js'");

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/wilcor03/Code/detrips/node_modules/popper.js/dist/esm/popper.js'");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/wilcor03/Code/detrips/node_modules/axios/index.js'");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/wilcor03/Code/detrips/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(42)
/* template */
var __vue_template__ = __webpack_require__(46)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/videos/VideoList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-043f52ed", Component.options)
  } else {
    hotAPI.reload("data-v-043f52ed", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_VideoModal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_VideoModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_VideoModal__);
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
    components: {
        'video-modal': __WEBPACK_IMPORTED_MODULE_0__partials_VideoModal___default.a
    },
    props: {
        model_id: Number,
        model: String
    },
    data: function data() {
        return {
            video: {
                title: "",
                embed: "",
                description: ""
            },
            videos: "",
            showModal: false,
            selectedVideo: {},
            submitButtonText: 'Añadir',
            editing: false,
            videoSaved: true
        };
    },

    methods: {
        submitForm: function submitForm() {
            var _this = this;

            if (!this.editing) {
                axios.post('/api/admin/videos/model/' + this.model_id + '?model=' + this.model, this.video).then(function (data) {
                    _this.videos = data['data'];
                    _this.video = {};
                });
                return false;
            }

            axios.put('/api/admin/videos/' + this.video.id + '?model=' + this.model, this.video).then(function (data) {

                var video = data['data'];
                var position = _this.videos.findIndex(function (el) {
                    return el.id == video.id;
                });

                _this.videos[position] = video;
                _this.video = {};
                _this.editing = false;
            });
        },
        openModal: function openModal(item, buttonKey) {
            var _this2 = this;

            this.selectedVideo = item;
            this.showModal = true;

            setTimeout(function () {
                _this2.$refs.buttonModal[buttonKey].click();
            }, 300);
        },
        modalClosed: function modalClosed(event) {
            this.showModal = !event;
        },
        deleteVideo: function deleteVideo(video_id) {
            var _this3 = this;

            axios.post('/api/admin/videos/' + video_id + '/model/' + this.model_id + '/detach?model=' + this.model).then(function (data) {
                var video = data['data'];
                var position = _this3.videos.findIndex(function (el) {
                    return el.id == video.id;
                });

                _this3.videos.splice(position, 1);
            });
        },
        editVideo: function editVideo(video) {
            this.video = video;
            this.submitButtonText = "Modificar";
            this.editing = true;
        },
        getAll: function getAll() {
            var _this4 = this;

            axios.get('/api/admin/videos/model/' + this.model_id + '?model=' + this.model).then(function (data) {
                _this4.videos = data['data'];
            });
        },
        cancel: function cancel() {
            if (this.video.title == "") {
                return false;
            }
            this.editing = false;
            this.video = {};
            this.getAll();
        }
    },
    mounted: function mounted() {
        this.selectedVideo = this.video;
        this.getAll();
    }
});

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(44)
/* template */
var __vue_template__ = __webpack_require__(45)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/partials/VideoModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2e82e98", Component.options)
  } else {
    hotAPI.reload("data-v-b2e82e98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: {
        video: Object
    },
    computed: {
        url: function url() {
            return "https://www.youtube.com/embed/" + this.video.embed;
        }
    },
    methods: {
        closeModal: function closeModal() {
            this.$emit('onModalClosed', true);
        }
    }
});

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      attrs: { id: "videoModal" },
      on: {
        keyup: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")
          ) {
            return null
          }
          return _vm.closeModal($event)
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "videoModalShow",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "myModalLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-lg",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-body mb-0 p-0" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "embed-responsive embed-responsive-16by9 z-depth-1-half"
                    },
                    [
                      _c("iframe", {
                        staticClass: "embed-responsive-item",
                        attrs: { src: _vm.url, allowfullscreen: "" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "grey-text",
                      staticStyle: { padding: "15px" }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.video.description) +
                          "\n                    "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "modal-footer justify-content-center flex-column flex-md-row"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-outline-primary btn-rounded btn-md ml-4",
                        attrs: { type: "button", "data-dismiss": "modal" },
                        on: { click: _vm.closeModal }
                      },
                      [_vm._v("Cerrar")]
                    )
                  ]
                )
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b2e82e98", module.exports)
  }
}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "videos" } },
    [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submitForm($event)
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "md-form" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.video.title,
                      expression: "video.title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "title", required: "" },
                  domProps: { value: _vm.video.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.video, "title", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  { class: { active: _vm.editing }, attrs: { for: "title" } },
                  [_vm._v("Título")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "md-form" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.video.embed,
                      expression: "video.embed"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "embed", required: "" },
                  domProps: { value: _vm.video.embed },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.video, "embed", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  { class: { active: _vm.editing }, attrs: { for: "embed" } },
                  [_vm._v("Parte URL (=eLwR3-R5Kmc)")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "md-form" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.video.description,
                      expression: "video.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "description" },
                  domProps: { value: _vm.video.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.video, "description", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    class: { active: _vm.editing },
                    attrs: { for: "description" }
                  },
                  [_vm._v("Descripción")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-info btn-sm waves-effect waves-light",
                  attrs: { type: "submit" }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.submitButtonText) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "btn btn-success btn-sm waves-effect waves-light",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.cancel($event)
                    }
                  }
                },
                [_vm._v("\n                    Limpiar\n                ")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row text-center" }, [
        _c("div", { staticClass: "col" }, [
          _vm.editing
            ? _c("span", { staticStyle: { color: "red" } }, [
                _c("b", [_vm._v("Sin guardar!")])
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h4", [_vm._v("LISTA DE VIDEOS")]),
      _vm._v(" "),
      _vm._l(_vm.videos, function(item, k) {
        return _c("div", { key: item.id, staticClass: "row" }, [
          _c("div", { staticClass: "col-md-5" }, [
            _vm._v("\n            " + _vm._s(item.title) + "\n        ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-7" }, [
            _c("button", {
              ref: "buttonModal",
              refInFor: true,
              staticClass: "btn btn-primary btn-sm",
              staticStyle: { display: "none" },
              attrs: {
                type: "button",
                "data-toggle": "modal",
                "data-target": "#videoModalShow"
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-danger btn-sm",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.deleteVideo(item.id)
                  }
                }
              },
              [_vm._v("Borrar")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-warning btn-sm",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.editVideo(item)
                  }
                }
              },
              [_vm._v("Editar")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-sm",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.openModal(item, k)
                  }
                }
              },
              [_vm._v("\n                VER\n            ")]
            )
          ])
        ])
      }),
      _vm._v(" "),
      _vm.showModal
        ? _c(
            "div",
            [
              _c("video-modal", {
                attrs: { video: _vm.selectedVideo || _vm.video },
                on: {
                  onModalClosed: function($event) {
                    _vm.modalClosed($event)
                  }
                }
              })
            ],
            1
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-043f52ed", module.exports)
  }
}

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(50)
/* template */
var __vue_template__ = __webpack_require__(51)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c60270d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/photos/PhotoList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c60270d", Component.options)
  } else {
    hotAPI.reload("data-v-0c60270d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c55d2b18", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c60270d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PhotoList.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c60270d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PhotoList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n#content-images .card[data-v-0c60270d]{\n    float:left; margin-bottom:10px; margin-right:10px;\n}\n#content-images .card a[data-v-0c60270d]{\n    display: block;\n    text-align: center;\n    margin-top: 10px;\n    color:red;\n    font-weight: bold;\n}\n#content-images .card p[data-v-0c60270d]{\n    max-width: 180px;\n}\n", ""]);

// exports


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/wilcor03/Code/detrips/node_modules/vue-style-loader/lib/addStylesClient.js'");

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: {
        model_id: Number,
        model: String
    },
    data: function data() {
        return {
            photo: {
                title: "",
                description: ""
            },
            photos: [],
            inputFiles: [],
            totUploading: 0,
            totUploaded: 0,
            loading: false
        };
    },
    mounted: function mounted() {
        this.allPhotos();
    },

    methods: {
        allPhotos: function allPhotos() {
            var _this = this;

            axios.get("/api/admin/photos/" + this.model_id + "?model=" + this.model).then(function (data) {
                _this.photos = data['data'];
            });
        },
        selectedPhotos: function selectedPhotos(e) {
            var elements = e.target.files;
            this.totUploading = elements.length;
            this.totUploaded = 0;
            this.inputFiles = [];
            for (var i = 0; i < elements.length; i++) {
                //this.upload(elements[i]);
                this.inputFiles.push(elements[i]);
            }
        },
        upload: function upload(file) {
            var _this2 = this;

            var fd = new FormData();
            fd.append('title', this.photo.title);
            fd.append('description', this.photo.description);
            fd.append('photo', file, file.name);
            axios.post("/api/admin/photos/upload/" + this.model_id + "?model=" + this.model, fd, {
                onUploadProgress: function onUploadProgress(uploadEvent) {
                    console.log('progress ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + "%");
                }
            }).then(function (data) {
                _this2.photos.push(data['data']);
                _this2.totUploaded += 1;

                if (_this2.totUploading === _this2.totUploaded) {
                    _this2.loading = false;
                    _this2.photo = {};
                    alert('Imagenes subidas exitosamente!');
                }
            });
        },
        destroy: function destroy(item) {
            var _this3 = this;

            axios.delete("/api/admin/photos/" + item.id).then(function (data) {
                var photo = data['data'];
                var position = _this3.photos.findIndex(function (el) {
                    return el.id == photo.id;
                });

                _this3.photos.splice(position, 1);
            });
        },
        submitForm: function submitForm() {
            var _this4 = this;

            this.loading = true;
            this.inputFiles.forEach(function (element) {
                _this4.upload(element);
            });
            //this.upload();
        }
    },
    filters: {
        setCardTitle: function setCardTitle(value) {
            if (value.length > 20) {
                return value.slice(0, 20) + "...";
            }
            return value;
        }
    }
});

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "photos" } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitForm($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "md-form" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.photo.title,
                    expression: "photo.title"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  maxlength: "40",
                  id: "title",
                  required: ""
                },
                domProps: { value: _vm.photo.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.photo, "title", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "title" } }, [_vm._v("Título")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "md-form" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.photo.description,
                    expression: "photo.description"
                  }
                ],
                staticClass: "form-control",
                attrs: { maxlength: "90", type: "text", required: "" },
                domProps: { value: _vm.photo.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.photo, "description", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "embed" } }, [_vm._v("Descripción")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { id: "upload", required: "", type: "file", multiple: "" },
              on: { change: _vm.selectedPhotos }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "upload" } })
          ])
        ]),
        _vm._v(" "),
        !_vm.loading
          ? _c(
              "button",
              {
                staticClass: "btn btn-info btn-sm waves-effect waves-light",
                attrs: { type: "submit" }
              },
              [_vm._v("\n            Guardar\n        ")]
            )
          : _c(
              "button",
              {
                staticClass: "btn btn-info btn-sm waves-effect waves-light",
                attrs: { disabled: "" }
              },
              [_vm._v("\n            Guardando...\n        ")]
            )
      ]
    ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "content-images" } },
      _vm._l(_vm.photos, function(item) {
        return _c("div", { key: item.id, staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v(_vm._s(_vm._f("set-card-title")(item.title || "Sin título")))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("img", { attrs: { src: item.images.small.path, alt: "" } }),
            _vm._v(" "),
            _c(
              "a",
              {
                attrs: { href: "" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.destroy(item)
                  }
                }
              },
              [_vm._v("Borrar")]
            ),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(item.description))])
          ])
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c60270d", module.exports)
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(14);

window.Vue = __webpack_require__(13);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('photo-list', __webpack_require__(47));
Vue.component('video-list', __webpack_require__(41));

var app = new Vue({
  data: {
    showPhotos: false,
    showVideos: false
  },
  el: '#city-app'
});

/***/ })

/******/ });