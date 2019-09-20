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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t(e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n=r(a.hash);if("#"===n){if(!A.topOnEmptyHash)return;t=document.documentElement}else t=document.querySelector(n);(t=t||"#top"!==n?t:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(t,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals ga */
(function () {
  var els = document.getElementsByClassName("accordion");

  if (els.length === 0) {
    return;
  }

  function toggle(e) {
    e.preventDefault();
    e.currentTarget.parentNode.classList.toggle("open");

    if (!e.currentTarget.parentNode.classList.contains("open")) {
      return;
    }

    if ("function" === typeof ga) {
      ga("send", "event", "FAQ", "Open", e.currentTarget.querySelector("a").textContent);
    }
  }

  for (var i = 0; i < els.length; i++) {
    els[i].querySelector(".accordion-heading").addEventListener("click", toggle);
  }
})();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function () {
  var button_el = document.getElementById("toggle-nav-menu");

  if (!button_el) {
    return;
  }

  function toggle() {
    document.body.classList.toggle("menu-open");
  }

  button_el.addEventListener("click", toggle);
})();

(function () {
  var container_el = document.getElementById("site-navigation");

  if (!container_el) {
    return;
  }

  var link_els = container_el.getElementsByTagName("a");

  if (link_els.length === 0) {
    return;
  }

  function toggle() {
    document.body.classList.remove("menu-open");
  }

  for (var i = 0; i < link_els.length; i++) {
    link_els[i].addEventListener("click", toggle);
  }
})();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals ga */
(function () {
  var el = document.querySelector(".home-section-testimonials .btn");

  if (!el) {
    return;
  }

  function open() {
    document.querySelector(".home-section-testimonials").classList.add("open");

    if ("function" === typeof ga) {
      ga("send", "event", "Testimonials", "Click", "View More");
    }
  }

  el.addEventListener("click", open);
})();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./js/_accordion.js
var _accordion = __webpack_require__(1);

// EXTERNAL MODULE: ./js/_menu.js
var _menu = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/projects/app.vue?vue&type=template&id=5239d3f4&
var appvue_type_template_id_5239d3f4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "projects-app" }, [
    _vm.loading
      ? _c("div", { staticClass: "spinner" }, [
          _c("div", { staticClass: "bounce1" }),
          _vm._v(" "),
          _c("div", { staticClass: "bounce2" }),
          _vm._v(" "),
          _c("div", { staticClass: "bounce3" })
        ])
      : _c("div", [
          _c("nav", { staticClass: "projects-nav" }, [
            _c(
              "div",
              { staticClass: "projects-nav-type" },
              [
                _c("span", [_vm._v("By Company Type")]),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "SME" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Startup" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Corporation" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Nonprofit" },
                  on: { toggle: _vm.toggle }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "projects-nav-type" },
              [
                _c("span", [_vm._v("By Tech")]),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Golang" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "WordPress" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "eCommerce" },
                  on: { toggle: _vm.toggle }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "projects-nav-type" },
              [
                _c("span", [_vm._v("By Type")]),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "API" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Publication" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Membership" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Multi-language" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Multi-site" },
                  on: { toggle: _vm.toggle }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "projects-nav-type" },
              [
                _c("span", [_vm._v("By Region")]),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "North America" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Asia" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Europe" },
                  on: { toggle: _vm.toggle }
                }),
                _vm._v(" "),
                _c("nav-item", {
                  attrs: { name: "Middle East" },
                  on: { toggle: _vm.toggle }
                })
              ],
              1
            )
          ])
        ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "projects-list" },
      _vm._l(_vm.get_filtered_projects, function(project) {
        return _c("article", { key: project.slug, staticClass: "project" }, [
          _c(
            "a",
            {
              attrs: {
                href: project.website,
                target: "_blank",
                rel: "nofollow noopener"
              }
            },
            [
              project.image
                ? _c("img", {
                    attrs: {
                      src: _vm.get_src(project, 227, 170),
                      alt: project.title,
                      width: "227",
                      height: "170"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("h3", { domProps: { innerHTML: _vm._s(project.title) } })
            ]
          )
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
appvue_type_template_id_5239d3f4_render._withStripped = true


// CONCATENATED MODULE: ./js/projects/app.vue?vue&type=template&id=5239d3f4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/projects/_nav-item.vue?vue&type=template&id=33182222&
var _nav_itemvue_type_template_id_33182222_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        class: _vm.classes,
        attrs: { type: "button" },
        on: { click: _vm.toggle }
      },
      [_vm._v("\n\t\t" + _vm._s(_vm.name) + "\n\t")]
    )
  ])
}
var _nav_itemvue_type_template_id_33182222_staticRenderFns = []
_nav_itemvue_type_template_id_33182222_render._withStripped = true


// CONCATENATED MODULE: ./js/projects/_nav-item.vue?vue&type=template&id=33182222&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./js/projects/_nav-item.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _nav_itemvue_type_script_lang_js_ = ({
  name: "nav-item",
  components: {},
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data: function data() {
    var data = {};
    data.selected = false;
    return data;
  },
  computed: {
    classes: function classes() {
      var classes = {};
      classes.btn = true;
      classes["btn-solid"] = true;
      classes.active = this.selected;
      return classes;
    }
  },
  methods: {
    toggle: function toggle() {
      this.selected = !this.selected;
      this.$emit("toggle", this.name);
    }
  }
});
// CONCATENATED MODULE: ./js/projects/_nav-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var projects_nav_itemvue_type_script_lang_js_ = (_nav_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./js/projects/_nav-item.vue





/* normalize component */

var component = normalizeComponent(
  projects_nav_itemvue_type_script_lang_js_,
  _nav_itemvue_type_template_id_33182222_render,
  _nav_itemvue_type_template_id_33182222_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/projects/_nav-item.vue"
/* harmony default export */ var _nav_item = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./js/projects/app.vue?vue&type=script&lang=js&
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

/* eslint compat/compat:1 */

/* harmony default export */ var appvue_type_script_lang_js_ = ({
  name: "projects-app",
  components: {
    NavItem: _nav_item
  },
  data: function data() {
    var data = {};
    data.loading = true;
    data.projects = [];
    data.selected = [];
    return data;
  },
  computed: {
    get_filtered_projects: function get_filtered_projects() {
      var projects = [],
          categories = this.selected.length === 0 ? ["Featured"] : this.selected;

      for (var i = 0; i < this.projects.length; i++) {
        if (!this.intersects(this.projects[i].categories, categories)) {
          continue;
        }

        projects.push(this.projects[i]);
      }

      return projects;
    }
  },
  mounted: function mounted() {
    this.get_projects();
  },
  methods: {
    intersects: function intersects(a1, a2) {
      for (var i = 0; i < a1.length; i++) {
        if (a2.indexOf(a1[i]) === -1) {
          continue;
        }

        return true;
      }

      return false;
    },
    get_projects: function get_projects() {
      var self = this;
      fetch("project/index.json").then(function (response) {
        return response.json();
      }).then(function (response) {
        response.items = response.items.reverse();

        for (var i = 0; i < response.items.length; i++) {
          var slug = response.items[i].title;
          slug = slug.toLowerCase();
          slug = slug.replace(/ /g, "-");
          response.items[i].slug = slug;
          self.projects.push(response.items[i]);
        }

        self.loading = false;
      });
    },
    toggle: function toggle(category) {
      var idx = this.selected.indexOf(category);

      if (idx === -1) {
        this.selected.push(category);
      } else {
        this.selected.splice(idx, 1);
      }
    },
    get_src: function get_src(project, width, height) {
      return "https://res.cloudinary.com/cdbtech/image/fetch/w_".concat(width, ",h_").concat(height, ",dpr_2.0,c_lfill,g_north/https://cdbtech.com/sites/").concat(project.image);
    }
  }
});
// CONCATENATED MODULE: ./js/projects/app.vue?vue&type=script&lang=js&
 /* harmony default export */ var projects_appvue_type_script_lang_js_ = (appvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./js/projects/app.vue





/* normalize component */

var app_component = normalizeComponent(
  projects_appvue_type_script_lang_js_,
  appvue_type_template_id_5239d3f4_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var app_api; }
app_component.options.__file = "js/projects/app.vue"
/* harmony default export */ var app = (app_component.exports);
// CONCATENATED MODULE: ./js/_projects.js
/* globals Vue */


(function () {
  var app_el = document.getElementById("projects-app");

  if (!app_el) {
    return;
  }

  if (typeof Vue !== "function") {
    return;
  }

  new Vue({
    el: app_el,
    render: function render(helper) {
      return helper(app);
    }
  });
})();
// EXTERNAL MODULE: ./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js
var smooth_scroll_polyfills_min = __webpack_require__(0);
var smooth_scroll_polyfills_min_default = /*#__PURE__*/__webpack_require__.n(smooth_scroll_polyfills_min);

// CONCATENATED MODULE: ./js/_scroll.js
/* globals ga */


(function () {
  new smooth_scroll_polyfills_min_default.a("a[data-scroll]");
})();

(function () {
  // Setup global vars
  var nav_el = document.getElementById("site-navigation"),
      target_els = {},
      lastScrollY = 0,
      ticking = false;

  if (!nav_el) {
    return;
  }

  var nav_els = nav_el.getElementsByTagName("a");

  if (nav_els.length === 0) {
    return;
  }

  function trigger_pageview(slug) {
    if ("function" !== typeof ga) {
      return;
    }

    ga("set", "page", "/".concat(slug));
    ga("send", "pageview");
  }

  function init() {
    for (var i = 0; i < nav_els.length; i++) {
      var target_el = document.getElementById(nav_els[i].dataset.section);

      if (target_el) {
        target_els[nav_els[i].dataset.section] = target_el;
      }
    }

    update_affix();
  }

  function update_affix() {
    var active_el = false;

    for (var i = 0; i < nav_els.length; i++) {
      if (target_els[nav_els[i].dataset.section].offsetTop > lastScrollY) {
        break;
      }

      active_el = nav_els[i];
    }

    if (active_el) {
      if (!active_el.classList.contains("current")) {
        for (var _i = 0; _i < nav_els.length; _i++) {
          nav_els[_i].classList.remove("current");
        }

        active_el.classList.add("current");
        trigger_pageview(active_el.dataset.section);
      }
    } else {
      for (var _i2 = 0; _i2 < nav_els.length; _i2++) {
        nav_els[_i2].classList.remove("current");
      }
    }

    ticking = false;
  }

  function request_tick() {
    if (ticking) {
      return;
    }

    window.requestAnimationFrame(update_affix);
    ticking = true;
  }

  function on_scroll() {
    lastScrollY = window.pageYOffset;
    request_tick();
  }

  init();
  window.addEventListener("scroll", on_scroll);
  window.addEventListener("resize", init);
})();
// EXTERNAL MODULE: ./js/_testimonials.js
var _testimonials = __webpack_require__(3);

// CONCATENATED MODULE: ./js/scripts.js






/***/ })
/******/ ]);