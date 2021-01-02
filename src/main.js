/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.2
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = function (callback) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Already ready or interactive, execute callback
    callback.call();
  } else if (document.attachEvent) {
    // Old browsers
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'interactive') callback.call();
    });
  } else if (document.addEventListener) {
    // Modern browsers
    document.addEventListener('DOMContentLoaded', callback);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
  win = window;
} else if (typeof global !== "undefined") {
  win = global;
} else if (typeof self !== "undefined") {
  win = self;
} else {
  win = {};
}

module.exports = win;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



 // no conflict

var oldPlugin = global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax;
global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"];

global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax.noConflict = function () {
  global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax = oldPlugin;
  return this;
}; // jQuery support


if ('undefined' !== typeof global__WEBPACK_IMPORTED_MODULE_1__["jQuery"]) {
  var jQueryPlugin = function jQueryPlugin() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    Array.prototype.unshift.call(args, this);
    var res = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].apply(global__WEBPACK_IMPORTED_MODULE_1__["window"], args);
    return 'object' !== _typeof(res) ? res : this;
  };

  jQueryPlugin.constructor = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].constructor; // no conflict

  var oldJqPlugin = global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax;
  global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax = jQueryPlugin;

  global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax.noConflict = function () {
    global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax = oldJqPlugin;
    return this;
  };
} // data-jarallax initialization


lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  Object(_jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelectorAll('[data-jarallax]'));
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var navigator = global__WEBPACK_IMPORTED_MODULE_1__["window"].navigator;
var isIE = -1 < navigator.userAgent.indexOf('MSIE ') || -1 < navigator.userAgent.indexOf('Trident/') || -1 < navigator.userAgent.indexOf('Edge/');
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var supportTransform = function () {
  var prefixes = 'transform WebkitTransform MozTransform'.split(' ');
  var div = document.createElement('div');

  for (var i = 0; i < prefixes.length; i += 1) {
    if (div && div.style[prefixes[i]] !== undefined) {
      return prefixes[i];
    }
  }

  return false;
}();

var $deviceHelper;
/**
 * The most popular mobile browsers changes height after page scroll and this generates image jumping.
 * We can fix it using this workaround with vh units.
 */

function getDeviceHeight() {
  if (!$deviceHelper && document.body) {
    $deviceHelper = document.createElement('div');
    $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
    document.body.appendChild($deviceHelper);
  }

  return ($deviceHelper ? $deviceHelper.clientHeight : 0) || global__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight || document.documentElement.clientHeight;
} // Window height data


var wndH;

function updateWndVars() {
  if (isMobile) {
    wndH = getDeviceHeight();
  } else {
    wndH = global__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight || document.documentElement.clientHeight;
  }
}

updateWndVars();
global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('resize', updateWndVars);
global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('orientationchange', updateWndVars);
global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('load', updateWndVars);
lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  updateWndVars({
    type: 'dom-loaded'
  });
}); // list with all jarallax instances
// need to render all in one scroll/resize event

var jarallaxList = []; // get all parents of the element.

function getParents(elem) {
  var parents = [];

  while (null !== elem.parentElement) {
    elem = elem.parentElement;

    if (1 === elem.nodeType) {
      parents.push(elem);
    }
  }

  return parents;
}

function updateParallax() {
  if (!jarallaxList.length) {
    return;
  }

  jarallaxList.forEach(function (data, k) {
    var instance = data.instance,
        oldData = data.oldData;
    var clientRect = instance.$item.getBoundingClientRect();
    var newData = {
      width: clientRect.width,
      height: clientRect.height,
      top: clientRect.top,
      bottom: clientRect.bottom,
      wndW: global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth,
      wndH: wndH
    };
    var isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
    var isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
    jarallaxList[k].oldData = newData;

    if (isResized) {
      instance.onResize();
    }

    if (isScrolled) {
      instance.onScroll();
    }
  });
  global__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(updateParallax);
}

var instanceID = 0; // Jarallax class

var Jarallax = /*#__PURE__*/function () {
  function Jarallax(item, userOptions) {
    _classCallCheck(this, Jarallax);

    var self = this;
    self.instanceID = instanceID;
    instanceID += 1;
    self.$item = item;
    self.defaults = {
      type: 'scroll',
      // type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
      speed: 0.5,
      // supported value from -1 to 2
      imgSrc: null,
      imgElement: '.jarallax-img',
      imgSize: 'cover',
      imgPosition: '50% 50%',
      imgRepeat: 'no-repeat',
      // supported only for background, not for <img> tag
      keepImg: false,
      // keep <img> tag in it's default place
      elementInViewport: null,
      zIndex: -100,
      disableParallax: false,
      disableVideo: false,
      // video
      videoSrc: null,
      videoStartTime: 0,
      videoEndTime: 0,
      videoVolume: 0,
      videoLoop: true,
      videoPlayOnlyVisible: true,
      videoLazyLoading: true,
      // events
      onScroll: null,
      // function(calculations) {}
      onInit: null,
      // function() {}
      onDestroy: null,
      // function() {}
      onCoverImage: null // function() {}

    }; // prepare data-options

    var dataOptions = self.$item.dataset || {};
    var pureDataOptions = {};
    Object.keys(dataOptions).forEach(function (key) {
      var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);

      if (loweCaseOption && 'undefined' !== typeof self.defaults[loweCaseOption]) {
        pureDataOptions[loweCaseOption] = dataOptions[key];
      }
    });
    self.options = self.extend({}, self.defaults, pureDataOptions, userOptions);
    self.pureOptions = self.extend({}, self.options); // prepare 'true' and 'false' strings to boolean

    Object.keys(self.options).forEach(function (key) {
      if ('true' === self.options[key]) {
        self.options[key] = true;
      } else if ('false' === self.options[key]) {
        self.options[key] = false;
      }
    }); // fix speed option [-1.0, 2.0]

    self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed))); // prepare disableParallax callback

    if ('string' === typeof self.options.disableParallax) {
      self.options.disableParallax = new RegExp(self.options.disableParallax);
    }

    if (self.options.disableParallax instanceof RegExp) {
      var disableParallaxRegexp = self.options.disableParallax;

      self.options.disableParallax = function () {
        return disableParallaxRegexp.test(navigator.userAgent);
      };
    }

    if ('function' !== typeof self.options.disableParallax) {
      self.options.disableParallax = function () {
        return false;
      };
    } // prepare disableVideo callback


    if ('string' === typeof self.options.disableVideo) {
      self.options.disableVideo = new RegExp(self.options.disableVideo);
    }

    if (self.options.disableVideo instanceof RegExp) {
      var disableVideoRegexp = self.options.disableVideo;

      self.options.disableVideo = function () {
        return disableVideoRegexp.test(navigator.userAgent);
      };
    }

    if ('function' !== typeof self.options.disableVideo) {
      self.options.disableVideo = function () {
        return false;
      };
    } // custom element to check if parallax in viewport


    var elementInVP = self.options.elementInViewport; // get first item from array

    if (elementInVP && 'object' === _typeof(elementInVP) && 'undefined' !== typeof elementInVP.length) {
      var _elementInVP = elementInVP;

      var _elementInVP2 = _slicedToArray(_elementInVP, 1);

      elementInVP = _elementInVP2[0];
    } // check if dom element


    if (!(elementInVP instanceof Element)) {
      elementInVP = null;
    }

    self.options.elementInViewport = elementInVP;
    self.image = {
      src: self.options.imgSrc || null,
      $container: null,
      useImgTag: false,
      // position fixed is needed for the most of browsers because absolute position have glitches
      // on MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
      // on mobile devices better scrolled with absolute position
      position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed'
    };

    if (self.initImg() && self.canInitParallax()) {
      self.init();
    }
  } // add styles to element
  // eslint-disable-next-line class-methods-use-this


  _createClass(Jarallax, [{
    key: "css",
    value: function css(el, styles) {
      if ('string' === typeof styles) {
        return global__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el).getPropertyValue(styles);
      } // add transform property with vendor prefix


      if (styles.transform && supportTransform) {
        styles[supportTransform] = styles.transform;
      }

      Object.keys(styles).forEach(function (key) {
        el.style[key] = styles[key];
      });
      return el;
    } // Extend like jQuery.extend
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "extend",
    value: function extend(out) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      out = out || {};
      Object.keys(args).forEach(function (i) {
        if (!args[i]) {
          return;
        }

        Object.keys(args[i]).forEach(function (key) {
          out[key] = args[i][key];
        });
      });
      return out;
    } // get window size and scroll position. Useful for extensions
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getWindowData",
    value: function getWindowData() {
      return {
        width: global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth || document.documentElement.clientWidth,
        height: wndH,
        y: document.documentElement.scrollTop
      };
    } // Jarallax functions

  }, {
    key: "initImg",
    value: function initImg() {
      var self = this; // find image element

      var $imgElement = self.options.imgElement;

      if ($imgElement && 'string' === typeof $imgElement) {
        $imgElement = self.$item.querySelector($imgElement);
      } // check if dom element


      if (!($imgElement instanceof Element)) {
        if (self.options.imgSrc) {
          $imgElement = new Image();
          $imgElement.src = self.options.imgSrc;
        } else {
          $imgElement = null;
        }
      }

      if ($imgElement) {
        if (self.options.keepImg) {
          self.image.$item = $imgElement.cloneNode(true);
        } else {
          self.image.$item = $imgElement;
          self.image.$itemParent = $imgElement.parentNode;
        }

        self.image.useImgTag = true;
      } // true if there is img tag


      if (self.image.$item) {
        return true;
      } // get image src


      if (null === self.image.src) {
        self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        self.image.bgImage = self.css(self.$item, 'background-image');
      }

      return !(!self.image.bgImage || 'none' === self.image.bgImage);
    }
  }, {
    key: "canInitParallax",
    value: function canInitParallax() {
      return supportTransform && !this.options.disableParallax();
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      var containerStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      };
      var imageStyles = {
        pointerEvents: 'none',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        willChange: 'transform,opacity'
      };

      if (!self.options.keepImg) {
        // save default user styles
        var curStyle = self.$item.getAttribute('style');

        if (curStyle) {
          self.$item.setAttribute('data-jarallax-original-styles', curStyle);
        }

        if (self.image.useImgTag) {
          var curImgStyle = self.image.$item.getAttribute('style');

          if (curImgStyle) {
            self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
          }
        }
      } // set relative position and z-index to the parent


      if ('static' === self.css(self.$item, 'position')) {
        self.css(self.$item, {
          position: 'relative'
        });
      }

      if ('auto' === self.css(self.$item, 'z-index')) {
        self.css(self.$item, {
          zIndex: 0
        });
      } // container for parallax image


      self.image.$container = document.createElement('div');
      self.css(self.image.$container, containerStyles);
      self.css(self.image.$container, {
        'z-index': self.options.zIndex
      }); // fix for IE https://github.com/nk-o/jarallax/issues/110

      if (isIE) {
        self.css(self.image.$container, {
          opacity: 0.9999
        });
      }

      self.image.$container.setAttribute('id', "jarallax-container-".concat(self.instanceID));
      self.$item.appendChild(self.image.$container); // use img tag

      if (self.image.useImgTag) {
        imageStyles = self.extend({
          'object-fit': self.options.imgSize,
          'object-position': self.options.imgPosition,
          // support for plugin https://github.com/bfred-it/object-fit-images
          'font-family': "object-fit: ".concat(self.options.imgSize, "; object-position: ").concat(self.options.imgPosition, ";"),
          'max-width': 'none'
        }, containerStyles, imageStyles); // use div with background image
      } else {
        self.image.$item = document.createElement('div');

        if (self.image.src) {
          imageStyles = self.extend({
            'background-position': self.options.imgPosition,
            'background-size': self.options.imgSize,
            'background-repeat': self.options.imgRepeat,
            'background-image': self.image.bgImage || "url(\"".concat(self.image.src, "\")")
          }, containerStyles, imageStyles);
        }
      }

      if ('opacity' === self.options.type || 'scale' === self.options.type || 'scale-opacity' === self.options.type || 1 === self.options.speed) {
        self.image.position = 'absolute';
      } // 1. Check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
      //    discussion - https://github.com/nk-o/jarallax/issues/9
      // 2. Check if parents have overflow scroll


      if ('fixed' === self.image.position) {
        var $parents = getParents(self.$item).filter(function (el) {
          var styles = global__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el);
          var parentTransform = styles['-webkit-transform'] || styles['-moz-transform'] || styles.transform;
          var overflowRegex = /(auto|scroll)/;
          return parentTransform && 'none' !== parentTransform || overflowRegex.test(styles.overflow + styles['overflow-y'] + styles['overflow-x']);
        });
        self.image.position = $parents.length ? 'absolute' : 'fixed';
      } // add position to parallax block


      imageStyles.position = self.image.position; // insert parallax image

      self.css(self.image.$item, imageStyles);
      self.image.$container.appendChild(self.image.$item); // set initial position and size

      self.onResize();
      self.onScroll(true); // call onInit event

      if (self.options.onInit) {
        self.options.onInit.call(self);
      } // remove default user background


      if ('none' !== self.css(self.$item, 'background-image')) {
        self.css(self.$item, {
          'background-image': 'none'
        });
      }

      self.addToParallaxList();
    } // add to parallax instances list

  }, {
    key: "addToParallaxList",
    value: function addToParallaxList() {
      jarallaxList.push({
        instance: this
      });

      if (1 === jarallaxList.length) {
        global__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(updateParallax);
      }
    } // remove from parallax instances list

  }, {
    key: "removeFromParallaxList",
    value: function removeFromParallaxList() {
      var self = this;
      jarallaxList.forEach(function (data, key) {
        if (data.instance.instanceID === self.instanceID) {
          jarallaxList.splice(key, 1);
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var self = this;
      self.removeFromParallaxList(); // return styles on container as before jarallax init

      var originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
      self.$item.removeAttribute('data-jarallax-original-styles'); // null occurs if there is no style tag before jarallax init

      if (!originalStylesTag) {
        self.$item.removeAttribute('style');
      } else {
        self.$item.setAttribute('style', originalStylesTag);
      }

      if (self.image.useImgTag) {
        // return styles on img tag as before jarallax init
        var originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
        self.image.$item.removeAttribute('data-jarallax-original-styles'); // null occurs if there is no style tag before jarallax init

        if (!originalStylesImgTag) {
          self.image.$item.removeAttribute('style');
        } else {
          self.image.$item.setAttribute('style', originalStylesTag);
        } // move img tag to its default position


        if (self.image.$itemParent) {
          self.image.$itemParent.appendChild(self.image.$item);
        }
      } // remove additional dom elements


      if (self.$clipStyles) {
        self.$clipStyles.parentNode.removeChild(self.$clipStyles);
      }

      if (self.image.$container) {
        self.image.$container.parentNode.removeChild(self.image.$container);
      } // call onDestroy event


      if (self.options.onDestroy) {
        self.options.onDestroy.call(self);
      } // delete jarallax from item


      delete self.$item.jarallax;
    } // it will remove some image overlapping
    // overlapping occur due to an image position fixed inside absolute position element

  }, {
    key: "clipContainer",
    value: function clipContainer() {
      // needed only when background in fixed position
      if ('fixed' !== this.image.position) {
        return;
      }

      var self = this;
      var rect = self.image.$container.getBoundingClientRect();
      var width = rect.width,
          height = rect.height;

      if (!self.$clipStyles) {
        self.$clipStyles = document.createElement('style');
        self.$clipStyles.setAttribute('type', 'text/css');
        self.$clipStyles.setAttribute('id', "jarallax-clip-".concat(self.instanceID));
        var head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(self.$clipStyles);
      }

      var styles = "#jarallax-container-".concat(self.instanceID, " {\n           clip: rect(0 ").concat(width, "px ").concat(height, "px 0);\n           clip: rect(0, ").concat(width, "px, ").concat(height, "px, 0);\n        }"); // add clip styles inline (this method need for support IE8 and less browsers)

      if (self.$clipStyles.styleSheet) {
        self.$clipStyles.styleSheet.cssText = styles;
      } else {
        self.$clipStyles.innerHTML = styles;
      }
    }
  }, {
    key: "coverImage",
    value: function coverImage() {
      var self = this;
      var rect = self.image.$container.getBoundingClientRect();
      var contH = rect.height;
      var speed = self.options.speed;
      var isScroll = 'scroll' === self.options.type || 'scroll-opacity' === self.options.type;
      var scrollDist = 0;
      var resultH = contH;
      var resultMT = 0; // scroll parallax

      if (isScroll) {
        // scroll distance and height for image
        if (0 > speed) {
          scrollDist = speed * Math.max(contH, wndH);

          if (wndH < contH) {
            scrollDist -= speed * (contH - wndH);
          }
        } else {
          scrollDist = speed * (contH + wndH);
        } // size for scroll parallax


        if (1 < speed) {
          resultH = Math.abs(scrollDist - wndH);
        } else if (0 > speed) {
          resultH = scrollDist / speed + Math.abs(scrollDist);
        } else {
          resultH += (wndH - contH) * (1 - speed);
        }

        scrollDist /= 2;
      } // store scroll distance


      self.parallaxScrollDistance = scrollDist; // vertical center

      if (isScroll) {
        resultMT = (wndH - resultH) / 2;
      } else {
        resultMT = (contH - resultH) / 2;
      } // apply result to item


      self.css(self.image.$item, {
        height: "".concat(resultH, "px"),
        marginTop: "".concat(resultMT, "px"),
        left: 'fixed' === self.image.position ? "".concat(rect.left, "px") : '0',
        width: "".concat(rect.width, "px")
      }); // call onCoverImage event

      if (self.options.onCoverImage) {
        self.options.onCoverImage.call(self);
      } // return some useful data. Used in the video cover function


      return {
        image: {
          height: resultH,
          marginTop: resultMT
        },
        container: rect
      };
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.isElementInViewport || false;
    }
  }, {
    key: "onScroll",
    value: function onScroll(force) {
      var self = this;
      var rect = self.$item.getBoundingClientRect();
      var contT = rect.top;
      var contH = rect.height;
      var styles = {}; // check if in viewport

      var viewportRect = rect;

      if (self.options.elementInViewport) {
        viewportRect = self.options.elementInViewport.getBoundingClientRect();
      }

      self.isElementInViewport = 0 <= viewportRect.bottom && 0 <= viewportRect.right && viewportRect.top <= wndH && viewportRect.left <= global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth; // stop calculations if item is not in viewport

      if (force ? false : !self.isElementInViewport) {
        return;
      } // calculate parallax helping variables


      var beforeTop = Math.max(0, contT);
      var beforeTopEnd = Math.max(0, contH + contT);
      var afterTop = Math.max(0, -contT);
      var beforeBottom = Math.max(0, contT + contH - wndH);
      var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
      var afterBottom = Math.max(0, -contT + wndH - contH);
      var fromViewportCenter = 1 - 2 * ((wndH - contT) / (wndH + contH)); // calculate on how percent of section is visible

      var visiblePercent = 1;

      if (contH < wndH) {
        visiblePercent = 1 - (afterTop || beforeBottom) / contH;
      } else if (beforeTopEnd <= wndH) {
        visiblePercent = beforeTopEnd / wndH;
      } else if (beforeBottomEnd <= wndH) {
        visiblePercent = beforeBottomEnd / wndH;
      } // opacity


      if ('opacity' === self.options.type || 'scale-opacity' === self.options.type || 'scroll-opacity' === self.options.type) {
        styles.transform = 'translate3d(0,0,0)';
        styles.opacity = visiblePercent;
      } // scale


      if ('scale' === self.options.type || 'scale-opacity' === self.options.type) {
        var scale = 1;

        if (0 > self.options.speed) {
          scale -= self.options.speed * visiblePercent;
        } else {
          scale += self.options.speed * (1 - visiblePercent);
        }

        styles.transform = "scale(".concat(scale, ") translate3d(0,0,0)");
      } // scroll


      if ('scroll' === self.options.type || 'scroll-opacity' === self.options.type) {
        var positionY = self.parallaxScrollDistance * fromViewportCenter; // fix if parallax block in absolute position

        if ('absolute' === self.image.position) {
          positionY -= contT;
        }

        styles.transform = "translate3d(0,".concat(positionY, "px,0)");
      }

      self.css(self.image.$item, styles); // call onScroll event

      if (self.options.onScroll) {
        self.options.onScroll.call(self, {
          section: rect,
          beforeTop: beforeTop,
          beforeTopEnd: beforeTopEnd,
          afterTop: afterTop,
          beforeBottom: beforeBottom,
          beforeBottomEnd: beforeBottomEnd,
          afterBottom: afterBottom,
          visiblePercent: visiblePercent,
          fromViewportCenter: fromViewportCenter
        });
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.coverImage();
      this.clipContainer();
    }
  }]);

  return Jarallax;
}(); // global definition


var plugin = function plugin(items, options) {
  // check for dom element
  // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
  if ('object' === (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? items instanceof HTMLElement : items && 'object' === _typeof(items) && null !== items && 1 === items.nodeType && 'string' === typeof items.nodeName) {
    items = [items];
  }

  var len = items.length;
  var k = 0;
  var ret;

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  for (k; k < len; k += 1) {
    if ('object' === _typeof(options) || 'undefined' === typeof options) {
      if (!items[k].jarallax) {
        items[k].jarallax = new Jarallax(items[k], options);
      }
    } else if (items[k].jarallax) {
      // eslint-disable-next-line prefer-spread
      ret = items[k].jarallax[options].apply(items[k].jarallax, args);
    }

    if ('undefined' !== typeof ret) {
      return ret;
    }
  }

  return items;
};

plugin.constructor = Jarallax;
/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ })
/******/ ]);
//	Playerjs.com 13.3.3
//	20.12.2020 13:04:54
//	API - https://playerjs.com/docs/q=api

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('B 7g=[];B i7;if(1V[\'FQ\']){1K(FQ,1)};E zT(3D){B o={1O:K,kY:[],oI:[],i8:\'Wf\',We:Hf,Wd:H8,7x:\'13.3.3\',f5:[\'7d\',\'\'],i5:\'\',2k:K,7t:K,cP:K,Wb:K,cC:K,5h:K,8G:K,9v:K,u:\'#Wc#Wi#Wa#ku#W9#W0#VZ#VX#W2#W3#W8#W6#W4#W5#Wm#Wn#WG#WF#WE#WC#WD#WH#WB#WA#Ws#Wq#Wo#Wp#ku#Wt#Wu#Ww#Vn#Vr#V7#V5#ku#V6#Vf#Vc#Vd#Vu#Vv#VO#VN#ku#VL=\',u2:\'\',u3:\'\',u4:\'\',u5:\'\',u6:\'\',u7:\'\',u8:\'\',u9:\'\',y:\'xx??x?=xx????=\',p:\'{Y5}\',Y4:-1,r5:"BU",dA:"//BU.7j",7B:[],dt:H,pr:H,ga:K,ab:K,g4:[],Y3:K,dv:\'//.7G//\',2f:[],62:[],7Y:[],3n:[],n8:[],aR:[],iQ:0,oq:K,5W:K,1F:K,tl:K,aD:K,iW:1V.a3.W<2C&&1V.a3.Y<2C,vl:[],Y2:[],qQ:0,8v:K,fq:K,ma:K,XK:[],aV:K,ei:K,pz:2b,gt:2b,nW:K,AM:E(x){B a;L a},XJ:0,pB:4X,5M:K,ca:K,ln:1P.ln,d:9k.uV,hF:9k.uV,8B:9k.8B,8r:9k.8B.O("8r")==0,XM:{},v6:\'gC-AH.7j/AH.js\',fd:["AM","Ao"],4L:[],Ce:[],Y7:[],do:1,jk:[],Ao:E(x){B a;L a},1a:0,nn:0,5Q:K,dk:-1,8X:3,Yn:0,oh:0,al:0,3H:{x:1,y:1,x0:1,y0:1},bB:["ir","dE","dz","mb","mf","la","le","cZ","cF","rI"],bV:0,Yr:0,dL:0,ck:0,xH:[],bC:[\'6T\',\'cp\',\'nm\',\'8K\'],Ys:[],lC:H,ov:[],j2:0,k3:K,lj:[K,K,K]};B dK={S:{w:20,h:20,1h:"-",Yu:"-",a:1,6K:-1,1z:"3K",1G:"",1A:1,gB:-1,a2:0,2m:1,1n:"",1C:"",4e:"Yt",bU:12,g1:0,1k:"R",2F:"0 3 0 3",cG:"0 0 0 0",2y:1,gd:"0 0 0 0",Yl:0,fX:1,bg:0,lX:0,CN:0,5G:1,7O:-1,5p:"3G",8N:-1,e1:"0 0 0 0",sE:-1,sF:"3K",d3:-1,mv:-1,5O:"1L",4h:"mJ",2m:0,gY:"3G",h7:0.7,r6:0,sd:"3K",hj:"5 5 5 5",Yk:"0 0 0 0",rF:1,sb:"nt-nc",h3:10,s9:0,3x:"",B3:5,B4:0,3i:0,Yc:2,Y8:2,CD:0.2,Cv:0,Cx:0.1,iK:0,DM:"Y9",DW:1,Dw:5,CZ:"3G",CG:"3K",CA:"3K",Dg:1,Du:1,sq:1,7p:0,3y:0,e8:20,cd:"<2e W=\'20\' Y=\'20\'><g><cL ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 3j=\'#fx\'/></g></2e>",sH:1,lI:-1,iB:0,lW:1,sl:-1,Yj:0.1,fu:0,2V:"",AE:0,AP:"mJ",3c:"",Az:E5,AA:E5,D9:0,4S:0,5q:"3K",E9:0,Eb:"3G",CX:9,qH:"0 0 10 0",qE:"0 0 0 0",CP:0}};E Bq(){L H;o.Bo=H}E bO(s){if(s.O(\'.\')==-1){s=s.1x(1);s2=\'\';V(i=0;i<s.Q;i+=3){s2+=\'%u0\'+s.6x(i,i+3)}s=Yh(s2)}L s};E BV(){if(o.u!=\'\'){v=8O(v,4P.6l(dm(o.u)))}if(3D.O("#"+v.9L)==0){3t{3D=4P.6l(o[o.fd[0]](3D))}3b(e){}}F{if(3D.O("#"+v.dy)==0){3t{3D=4P.6l(o[o.fd[1]](3D))}3b(e){}}}}E 8z(x){if(x==\'EH\'){v.mA=\' \';v.jI=\' \'}if(x==\'Al\'){L[\'XG\',\'XF\',2I(\'7D\')]}if(x==\'1O\'){if(v.mA!=\' \'&&v.jI!=\' \'){B d=1B 6p();B hr=d.X7();B mn=d.X6();if(hr==v.mA&&mn==v.jI){1u(\'z6\');o.2k?o.U.8l():\'\';o.U.2Q();v.mA=\' \';v.jI=\' \';o.R.Ct(\'se\')}}}if(x==\'A7\'){L[\'Xt\',\'Xq\',2I(\'7D\')]}if(x==\'v3\'){B s=v.gx*60+v.gN*1;if(s>0){v.1F=o.2w=s}}if(x==\'qj\'){if(v.cE){3l.7Q(\'uE\'+v.cE,v.gx+\':\'+v.gN)}}if(x==\'Xp\'){v.gx=\'0\';v.gN=\'0\'}if(x==\'EC\'){v.gx=\'0\';v.gN=\'0\';if(v.cE){if(3l.5D(\'uE\'+v.cE)!=22){B 1J=3l.5D(\'uE\'+v.cE);B dr=1J.2D(\':\');if(dr.Q==2){v.gx=dr[0];v.gN=dr[1]}}}}}E kO(y,1c){}B ux=E(){B b4=1M("1S");o.1Q.1H(b4);J(b4,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'W\':\'100%\',\'Y\':30,\'2t-1z\':v.w1,\'1t\':v.zg,\'2p\':\'1L\'});B x=1M("1S");o.1Q.1H(x);J(x,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'W\':\'100%\',\'1z\':v.vP,\'4e-3I\':v.zh,\'2W\':(v.zo+\'px \'+v.zf+\'px\'),\'2p\':\'1L\'});G.7G=E(1C,n){x.1U=1C;6h(x);J(b4,{\'Y\':x.2P,\'2p\':\'4c\'});b4.C.4C="Xo";V(B i=0;i<x.cM(\'a\').Q;i++){x.cM(\'a\')[i].C.1z=\'#fx\'}if(n){1K(G.8D,2C*n)}x.C.4C="V4"};G.8D=E(){2R(x);2R(b4)}};2o(E(w,i,s,e){B 9g=0;B 7X=0;B ew=0;B cR=[];B dq=[];j6(H){if(9g<5)dq.3d(w.5V(9g));F if(9g<w.Q)cR.3d(w.5V(9g));9g++;if(7X<5)dq.3d(i.5V(7X));F if(7X<i.Q)cR.3d(i.5V(7X));7X++;if(ew<5)dq.3d(s.5V(ew));F if(ew<s.Q)cR.3d(s.5V(ew));ew++;if(w.Q+i.Q+s.Q+e.Q==cR.Q+dq.Q+e.Q)1l}B DS=cR.l0(\'\');B DY=dq.l0(\'\');7X=0;B t8=[];V(9g=0;9g<cR.Q;9g+=2){B v7=-1;if(DY.av(7X)%2)v7=1;t8.3d(7a.uS(2u(DS.1x(9g,2),36)-v7));7X++;if(7X>=dq.Q)7X=0}L t8.l0(\'\')}(\'T9\',\'T7\',\'Te\',\'T4\'));B v={1u:0,ri:0,jp:"#3G",2Y:0,BJ:1,9m:"#3G",5p:"#3K",7p:0,dj:1,hG:1,3k:0,zu:1,bW:0,1y:{T3:0,1z:"3G",a:"0.4",h:34,hb:1,1p:1,fL:1,dO:0,fP:3,8E:0,mx:3,5O:"1L",1k:"2M",2F:"0 0 0 0",7p:0,g7:0,aU:\'\'},2a:{on:1,f:1,r:1,m:1,46:5,vo:"46",7P:1,vq:"1T",Gg:0,DT:1,pj:1,dc:0.2},1b:{5p:"3G",8N:"lV",5G:0.9,7O:-1,1k:"1d",2F:"0 0 0 0",2W:"7 15 7 15",1z:"3K",4e:"Hk, GV, nt-nc",bU:12,4A:10,g1:0,5q:"Hn",qn:1,9m:"SW",a:1,6K:-1,SX:0,T2:100,RP:wA,RL:1,qX:1,G8:"RM",r0:"3G",rr:-1,RW:-1,Gf:0,6t:3,im:16,t6:"Sk",7p:0,hE:1,n9:1,nx:"3K",tj:0,tk:"3G",Fx:1,FD:0,FJ:"lV",kK:0,hf:4X,e3:0,8Y:0,Au:0,Ap:0,dZ:1,3J:0,l2:50,sD:0,kN:1,eC:S1,jE:0,uR:"lV",uW:"0 0 0 0",nu:30,9m:"w8"},1i:{5p:"3G",8N:"Ut",5G:0.7,7O:-1,4e:"Hk, GV, nt-nc",1k:"2M-2j",2F:"0 0 0 0",2W:"7 10 7 15",1z:"3K",bU:12,im:16,4A:10,g1:0,Uw:"3K",5q:"Hn",a:1,1A:5,6K:-1,sR:1,6t:3,hE:1,n9:1,nx:"3K",kK:0,hf:4X,7p:0,UJ:1,TG:"59",4Y:1,Tt:"6y",13L:1,13K:"2q",13I:0,13J:"6s",13x:0,13u:"5C",nu:30,9m:"w8"},FC:{1k:"2M-2j",2F:"0 10 50 0"},1T:0.8,v4:1,iP:1,b9:0,5e:0,yn:1,5m:0,4a:0,Gk:0,py:0,4d:0,GX:1,ja:0,uP:0,uO:0,go:\',\',iI:\';\',hZ:\'//\',i6:\'3j\',jh:1,jC:-1,wV:0,wG:\'20 0 0 20\',d7:\'1g-1d\',s0:100,s7:100,sT:-1,oB:0,x9:1,w1:"lJ",vP:"3K",zo:5,zf:10,zg:1,zh:10,iQ:0,t9:1,uu:1,hY:1,4H:\'14m\',G0:0,gz:\'8e\',hl:1,EK:0,EB:0,GF:0,8j:1,ba:1,Fc:5,ae:0,y5:1,F5:0,pp:5,Gu:0,G4:0,pF:0,9I:1,fw:1,GE:0,wq:0,GJ:0,rA:1,kW:0,2H:"Ak",14l:CL,kc:\'100%\',ga:0,A3:{9o:1,1N:0,jF:0,4z:0,1O:1,uc:0,ud:0,uk:0,13Z:0,142:0,13s:0},A9:{9o:1,1N:0,jF:0,4z:0,1O:1,uc:0,ud:0,uk:0},12D:100,o5:1,iN:1,jd:14,ir:\'100%\',wE:1,jy:20,wD:1,mf:0.7,wy:2,sj:3,cZ:10,dE:"3K",dz:"yA",mb:"3G",la:0,le:iu,uU:1,cF:0,qr:1,9P:1,Ei:1,Ej:0.3,gM:3,mj:4,Eq:5,rz:0,E8:12I,CO:Ee,yH:0,yr:1,pi:1,jR:1,Fr:1,qO:0,ht:160,rV:90,rY:0,AS:1,AR:"lV",Bb:0,Aw:1,9L:\'2\',dy:\'3\',13n:10,139:1,13e:1,15u:-1,15D:1,15H:1,e0:-1,15G:0,15z:1,15y:0,15r:1,15q:0,15p:1,15K:0,15Z:1,15Y:0,163:1,166:0,165:1,15X:0,tn:1,15V:0,15W:0,15O:1,15N:0,15M:1,15P:"#3K",15T:"#3G",15S:"#3G",14J:"#3K",15n:"#3G",14K:"#3K",14I:"#3G",14H:"#3K",14F:"#3G",14G:"#3K",14L:"#3G",14M:"#3K",14R:1,14Q:0,14P:1,14N:0.5,14O:"#3K",14E:"#3G",14D:1,14u:1,14v:1,14t:1,14s:1,14q:10,14r:-1,14w:1,14x:1,14C:0,lf:0,14B:"or",14A:"or",14y:"or",14z:"or",14S:"50%",14T:-1,15e:0,15d:-1,15c:0,15a:0,GQ:1,GT:0,yN:30,15b:2,wB:10,yj:0,15f:30,FV:1,FW:1,6b:0,2x:{on:0,5p:"3G",2Y:0,az:2,9m:"3G",1k:"1d",2F:"20 0 0 20",W:150,1p:0}};v.bE="ru";B 7l=E(is){B i;B C=[];B f=[];B aZ=[];B 15g=[];B 5L=[];B 7u=[];B 1W=[];B f2=[];B h1=[];B 15l=[];B 4x=[];B 6k=[];B 3F=[];B bZ=[];B cz=K;B 2T;B nf=-1;B 4n=H;B 1f=is;B 1b;B 5e=[];B dp=[];B 3N=\'\';B eL=\'\';B 5K=-1;B hV=K;B 15k=K;B mX=K;B n7=K;B hP=K;B hc=K;B nC;B va;B jq;B fP;B uF;B nD=-1;B 9y=0;B 5X="2y";B 9C=(o.1q.2A?"et":"kH");B aj=(o.1q.2A?"cW":"kJ");C=8O(C,v[is]);C=4l(v[is],\'2F\',\'2F\');if(C.jE==0){C.uW="0 0 0 0"}C=4l(v[is],\'e1\',\'uW\');C=4l(v[is],\'2W\',\'2W\');C.nF=0;B hD="<2e W=\'"+C.6t*2+"\' Y=\'"+(C.6t*2>C.4A?(C.6t*2):C.4A)+"\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'><g><cL ry=\'"+(C.6t)+"\' rx=\'"+C.6t+"\' cy=\'"+(C.6t*2>C.4A?(C.6t):(C.4A/2))+"\' cx=\'"+C.6t+"\' 3j=\'#"+C.5q+"\'/></g></2e>";B yU="<2e W=\'"+C.6t*2+"\' Y=\'"+C.4A+"\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\' ><g><cL ry=\'"+(C.6t-1)+"\' rx=\'"+(C.6t-1)+"\' cy=\'"+(C.4A/2+2)+"\' cx=\'"+C.6t+"\' 3z=\'#"+C.5q+"\' 3z=\'1\' 3j-1t=\'0\'/></g></2e>";B xx=4;B FS="<2e W=\'"+(xx+2)+"\' Y=\'"+(C.4A)+"\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'><g><2K x1=\'1\' y1=\'"+(C.4A/2-xx)+"\' x2=\'"+xx+"\' y2=\'"+(C.4A/2)+"\' 3z=\'#"+C.1z+"\' 3z-W=\'1\' 3z-bw=\'56\'/><2K x1=\'"+xx+"\' y1=\'"+(C.4A/2)+"\' x2=\'1\' y2=\'"+(C.4A/2+xx)+"\' 3z=\'#"+C.1z+"\' 3z-W=\'1\' 3z-bw=\'56\'/></g></2e>";B mk="<2e W=\'"+(xx+10)+"\' Y=\'"+(C.4A+2)+"\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\' C=\'hA:1d\'><g><2K x1=\'1\' y1=\'"+(C.4A/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.4A/2-xx+2)+"\' 3z=\'#"+C.1z+"\' 3z-W=\'1\' 3z-bw=\'56\' /><2K x1=\'1\' y1=\'"+(C.4A/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.4A/2+xx+2)+"\' 3z=\'#"+C.1z+"\' 3z-W=\'1\' 3z-bw=\'56\'/></g></2e>";B 1D=1M("1S");o.1Q.1H(1D);J(1D,{\'6P\':\'3i\',\'2p\':\'4c\',\'1t\':0,\'2Y-6g\':C.7p});if(is=="1i"){1D.C.4C=100}F{1D.C.4C=99}B X=1M("1S");if(C.xl>0&&o.iW){C.bU=C.xl}J(X,{\'1k\':\'eY\',\'1g\':0,\'1d\':0,\'2p\':\'4c\',\'W\':\'100%\',\'2W-1g\':C.8Q,\'2W-2j\':C.6Q+20,\'2W-2M\':C.92,\'2W-1d\':C.6I,\'1z\':C.1z,\'4e-3I\':C.bU,\'4e-h6\':C.4e,\'eA-d1\':C.g1+\'px\'});if(o.1q.6r){J(X,{\'7v-W\':xk})}if(is!=="1b"){J(X,{\'6P-y\':\'8M\'})}1D.1H(X);if(C.3J!=1){B 7e=1M("1S");J(7e,{\'2p\':\'4c\',\'6P\':\'3i\',\'2Y-6g\':C.7p});if(C.3J!=1){if(o.1q.6r){J(7e,{\'7v-W\':xk})}}X.1H(7e)}if(is=="1b"){4E(X,{id:(v.id+"6Y"+is)});if(C.3J==1){J(X,{\'W\':\'100%\',\'2W-2j\':C.6Q,\'2W-2M\':C.92+20,\'6P-x\':\'8M\',\'9h-7P\':\'b6\'});J(1D,{\'W\':o.3M-C.4i-C.3E,\'Y\':C.l2+C.8Q+C.92})}F{J(X,{\'6P-y\':\'8M\'});if(C.GN==1){kv()}}if(C.jE==1){J(1D,{\'2t-1z\':C.uR})}if(v.1b.3h==1){2R(1D)}}if(C.hE==1){B 5c=1M("1S");B 9G=nb(C.jE==1?C.uR:C.5p);if(C.3J==1){iL(5c,\'to 2j, 4q(\'+9G+\',\'+(C.5G*1+0.3)+\'), 4q(\'+9G+\',0)\',\'1d\',12,5,7,10,7,10,12,15);5c.1w(5X,G2)}F{iL(5c,\'to 2M, 4q(\'+9G+\',\'+(C.5G*1+0.3)+\'), 4q(\'+9G+\',0)\',\'1g\',5,12,10,7,10,7,15,12);5c.1w(5X,G6)}B 5f=1M("1S");if(C.3J==1){iL(5f,\'to 1d, 4q(\'+9G+\',\'+(C.5G*1+0.3)+\'), 4q(\'+9G+\',0)\',\'2j\',8,5,13,10,13,10,8,15);5f.1w(5X,G5)}F{iL(5f,\'to 2M, 4q(\'+9G+\',0), 4q(\'+9G+\',\'+(C.5G*1+0.3)+\')\',\'2M\',5,8,10,13,10,13,15,8);5f.1w(5X,Gh)}5c.1w("kH",hn);5c.1w("kJ",hn);5f.1w("kH",hn);5f.1w("kJ",hn);X.1w("q7",xO);5c.1w("9f",9S);5f.1w("9f",9S);1D.1H(5c);1D.1H(5f);43(va);va=7o(Gj,2C)}X.1w(9C,xK);X.1w(aj,rg);if(is=="1i"){V(B i=1;i<11;i++){if(I(v["8R"+is][is+i])){v.1i[is+i]=v["8R"+is][is+i];if(I(v["8R"+is][is+i+"1R"])){v.1i[is+i+"1R"]=v["8R"+is][is+i+"1R"]}if(I(v["8R"+is][is+i+"1h"])){v.1i[is+i+"1h"]=v["8R"+is][is+i+"1h"]}}if(I(v.1i[is+i])){if(v.1i[is+i]==1){bQ(\'f\',i);bJ(f[i],aZ[i],5L[i],7u[i]);5L[i].1U=2I(v.1i[is+i+"1h"]);if(I(v.1i[is+i+"1R"])){if(v.1i[is+i+"1R"]!=\'\'){5L[i].1U=v.1i[is+i+"1R"]}}if(I(v.1i[is+i+"1h"])){1W[i]=v.1i[is+i+"1h"];8C(i);if(1W[i]==\'1A\'){nD=i}}f[i].1w(9C,5U);f[i].1w(aj,5u);f[i].1w(5X,9x);f[i].1w("9f",9S);if(v.1i[is+i+"1p"]==1){J(f[i],{"Y":0})}}}}}E xO(x){if(is=="1b"&&C.3J==1&&x){if(x.o7==0&&x.f9!=0){X.9U-=x.f9;x.8u()}}43(jq);jq=7o(rg,cU);9J()}E xK(){o.3B=H}E rg(){if(C.gi==1){3r(o.fz);o.fz=1K(E(){if(!o.3B){bf()}},(v.1i.fr>0?v.1i.fr*2C:2C))}o.3B=K}E 5U(1c){if(o.2k){o.52?o.U.52(K):\'\'}B i=1c.4h.7K(\'kb\');B x;if(i){x=\'f\'}F{if(1c.4h.7K(\'bI\')){i=1c.4h.7K(\'bI\');x=\'f2\'}}if(i){i=2u(i);B eM=K;if(I(2o(x)[i])){if(C.7O>-1){J(2o(x+\'bg\')[i],{\'1t\':C.7O})}if(C.6K>-1){J(2o(x+\'1R\')[i],{\'1t\':C.6K});J(2o(x+\'4S\')[i],{\'1t\':C.6K})}if(is=="1b"){if(1W[i].O("1b")==0){B id=1W[i].1x(8);if(3N==id||eL==id){J(2o(x+\'1R\')[i],{\'1z\':C.5q});J(2o(x+\'4S\')[i],{\'1z\':C.5q});eM=H}F{J(2o(x+\'1R\')[i],{\'1z\':C.1z})}}}if(C.tx==1&&I(C.nr)&&eM){}F{J(2o(x+\'bg\')[i],{\'6o\':C.8N})}}}};E 5u(1c){if(o.2k){o.52?o.U.52(H):\'\'}B i=1c.4h.7K(\'kb\');B x;B eM=K;9J();if(i){x=\'f\'}F{if(1c.4h.7K(\'bI\')){i=1c.4h.7K(\'bI\');x=\'f2\'}}if(i){if(I(2o(x)[i])){if(C.7O>-1){J(2o(x+\'bg\')[i],{\'1t\':C.5G,"4y":"1t 0.1s 2O"})}if(C.6K>-1){J(2o(x+\'1R\')[i],{\'1t\':C.a,"4y":"1t 0.1s 2O"});J(2o(x+\'4S\')[i],{\'1t\':C.a,"4y":"1t 0.1s 2O"})}if(is=="1b"){if(1W[i].O("1b")==0){B id=1W[i].1x(8);if(3N==id||eL==id){J(2o(x+\'1R\')[i],{\'1z\':C.5q});J(2o(x+\'4S\')[i],{\'1z\':C.5q});eM=H}F{if(I(o.aR[id])){iq(i)}F{J(2o(x+\'1R\')[i],{\'1z\':C.1z})}}}}if(C.tx==1&&I(C.nr)&&eM){}F{J(2o(x+\'bg\')[i],{\'6o\':o.aR[id]?C.r0:C.5p})}}}}E 9x(1c){if(!hP){B d=1B 6p();o.a1=d.9a();B i=1c.4h.7K(\'kb\');if(i){if(I(f[i])){if(I(1W[i])){4U(i,0)}}}}}E 9S(1c){1c.6d=H;9J()}E rp(1c){if(!hP){B d=1B 6p();o.a1=d.9a();B i=1c.4h.7K(\'bI\');if(i){if(i==0){fn()}F{if(I(3F[i])){EY(i)}}}}}E kz(1c){B x=1c.4h.7K(\'zq\');if(x){tU(x)}}E GL(1c){9J();B i=1c.4h.7K(\'bI\');if(I(3F[i])){if(3F[i].O("=")>0){B x=3F[i].1x(0,3F[i].O("="));B y=3F[i].1x(3F[i].O("=")+1);B z=2T+\'wQ\';if(!v[z]){v[z]=[]}if(!I(v[z][x])){v[z][x]=v[x]+\'\'}qB(x,y)}}}E qB(x,y){v[x]=y;if(o.5g&&v.uU==1&&x!="cF"){3l.7Q("n2"+x,y)}o.U.mH();tU(x)}E DC(1c){B i=1c.4h.7K(\'bI\');B x=3F[i];if(I(x)){if(x.O("=")>0){B z=x.1x(0,x.O("="));B y=x.1x(x.O("=")+1);v[z]=y;ve();8C(o[2T+\'ke\']);if(2T=="lb"){8z("qj")}}}}E 8C(i){if(I(1W[i])){B 9Q=K;B 8i=K;B 6v=\'\';if(is=="1i"){if(1W[i]=="59"){6v=o.P.pE()}if(1W[i]=="6y"){6v=o.P.pG()}if(1W[i]=="cl"){if(o.7k){6v=o.n8[o.10m]}}if(1W[i]=="6y"||1W[i]=="cl"||1W[i]=="59"){if(o[\'eH\'+1W[i]].Q==0){9Q=H}F{if(o[\'eH\'+1W[i]].Q==1&&(C.AI!=1||o[\'eH\'+1W[i]][0]==1)){9Q=H}F{8i=H}}}if(1W[i]=="5h"){if(!o.5h){9Q=H}F{8i=H}}if(1W[i]=="6s"){if(o.2B!=\'aC\'&&!v.6s){9Q=H}F{8i=H}}if(1W[i]=="2q"){if(I(o.2g)){8i=H;if(o.8v||v.9P==1){if(o.5E){6v=o.3n[!o.8v?o.5E.8Z():o.3O]}}F{6v=\'\'}B gP=0;V(B s=0;s<o.2g.Q;s++){if(o.2g[s]!=\'\'){gP++}}if(gP==1&&o.iE==1){gP=0}if(gP==0){9Q=H;8i=K}}F{9Q=H}}if(1W[i]=="5C"){6v=o.4L[o.8X];8i=H;if(o.2B=="au"||(o.P.5A()&&v.10p!=1)){9Q=H;8i=K}}if(1W[i]=="1A"){6v=2N.56(o.3H.x*100)+\'%\';8i=H}if(1W[i].O("7R")>0){B x=\' \';B y=[\'xa\',\'xf\',\'xY\'];V(B z=0;z<y.Q;z++){if(I(v[1W[i]+y[z]])){if(v[1W[i]+y[z]]!=\' \'){x+=(x!=\' \'?\':\':\'\')+v[1W[i]+y[z]]}}}6v=x!=\' 0:0\'&&x.O(":")>-1?x:\' \';8i=H}}7u[i].1U=6v+(6v!=\'\'&&C.10r!=1?\' &dI;<2e W="h8" Y="Dd" rJ="-1 -1 5 8" 7x="1.1" 3w="3f://3v.w3.3o/3U/2e" 3w:3A="3f://3v.w3.3o/6u/3A"><kX 3z="#\'+C.5q+\'" 3z-W="1" 3j="1L" 2S="0 0 3 3 0 6"></kX></2e>\':\'\');if(9Q){1p(f[i]);if(is=="1i"){bZ[i]?3r(bZ[i]):\'\';if(o.R){o.R.gb(i,K,6v)}F{bZ[i]=1K(E(){o.R.gb(i,K,6v)},4X)}}J(f[i],{\'1k\':\'29\',\'2j\':0,\'1g\':-100})}if(8i){if(C.3J==1){J(f[i],{\'2p\':\'cK-4c\'})}F{1r(f[i])}if(is=="1i"){bZ[i]?3r(bZ[i]):\'\';if(o.R){o.R.gb(i,H,6v)}F{bZ[i]=1K(E(){o.R.gb(i,H,6v)},4F)}}J(f[i],{\'1k\':\'eY\',\'2j\':0,\'1g\':0})}2r()}V(B j=1;j<f.Q;j++){if(f[j]){if(5T(f[j])){B 4v=K;4n?4v=H:\'\';4n=K;4v&&o.R?o.R.4v():\'\'}}}};E 4U(i,z5){if(I(1W[i])){o.ul=H;9J();B x=tK();if(2T!=1W[i]){2T=1W[i];if(2T==\'59\'||2T==\'6y\'||2T==\'2q\'||2T==\'5C\'||2T==\'cl\'||2T==\'1A\'||2T.O("7R")>0){nf=i;B z=xz(o[\'eH\'+2T]);if(2T=="se"){z=8z("Al")}if(2T=="lb"){z=8z("A7")}B eX=o[\'Yz\'+2T];B z2=o[\'YA\'+2T];V(B j=1;j<f.Q;j++){if(f[j]){f[j].C.2p="1L"}}f2=[];bQ(\'f2\',0);bJ(f2[0],h1[0],4x[0],6k[0]);J(f2[0],{"2Y-2M":"5a 6O "+(C.z3==1?"#"+C.9m.1Y("#",""):"4q(100,100,100,0.7)")});9y=z5;B rZ=K;4x[0].1U=(x[0]<2||9y==1||C.t0==1?\'\':mk)+(v.1i[is+i+"1R"]&&v.1i[is+i+"1R"]!=\'\'?v.1i[is+i+"1R"]:2I(v.1i[is+i+"1h"]));if(2T==\'2q\'&&!o.jU&&!o.jX){6k[0].1U=2I("3D");J(6k[0],{\'1z\':C.1z,\'1C-hm\':\'Z5\',\'6V\':\'2z\',\'6e\':\'3S\'});6k[0].1w(5X,Gy);rZ=H}if(rZ){if(hV){if(9y==2){z=[];2R(f2[0])}V(j=0;j<o.bB.Q;j++){if(v.k5==0&&o.bB[j]=="dz"){}F{z.3d("Zd"+o.bB[j])}}}}if(2T==\'1A\'){bi();J(6k[0],{\'W\':C.4A*2.5,\'1C-6R\':\'2j\'})}J(4x[0],{\'4e-3I\':C.im});3F[0]="E4";if(9y!=1&&x[0]>1){f2[0].1w(9C,5U);f2[0].1w(aj,5u);f2[0].1w(5X,rp);f2[0].1w("9f",9S)}F{J(f2[0],{"6e":\'7c\'})}if(C.GM==1){2R(f2[0])}if(I(z)){B zz=\'\';V(j=0;j<z.Q;j++){B y=j+1;B de=0;B 7D=K;if(z[j]&&4s(z[j])!=\'\'){if(2T==\'59\'){if(z[j]==2I("2z")){de=1}if(o.2B=="1I"&&v.Zc==1){B iz=4Q(z[j]);if(iz&&iz<zz){de=2}zz=4Q(z[j])}}bQ(\'f2\',y,de);bJ(f2[y],h1[y],4x[y],6k[y],1W[i]);if(26(z[j])==\'4Z\'){if(z[j].O("<<<")==0){z[j]=z[j].1Y(\'<<<\',\'\');7D=H}if(z[j].O(\'7R\')>0){o[2T+\'ke\']=i}if(z[j].O("rf")==0){B 1J=z[j];if(1J.O("7R")>0){4x[y].1U=2I(z[j].1x(1J.O("7R")+5))}F{4x[y].1U=2I(z[j].1x(7))}if(z[j]==\'11P\'){J(f2[y],{"2Y-1g":"5a 6O 4q(100,100,100,0.7)"})}}F{4x[y].1U=z[j]}}F{4x[y].1U=z[j]}3F[y]=2T+j;if(eX==j||z2==j){6k[y].1U=eX==j?hD:yU;eX==j?J(4x[y],{\'1z\':C.5q}):\'\'}if(26(z[j])==\'4Z\'){if(z[j].O("rf")==0){B t=z[j].1x(7);if(t.O("1z")>0){6k[y].1U="<1S C=\'"+(v[t]=="3G"?\'2Y:5a 6O #hw;Y:eV;W:eV;\':\'Y:eZ;W:eZ;\')+";2t-1z:"+(v[t].O("#")==-1?\'#\':\'\')+v[t]+";2Y-6g:eZ;\'></1S>"}F{if(I(v[z[j].1x(7)])){6k[y].1U=v[z[j].1x(7)]}}}}if(2T==\'59\'){if(z[j]==2I("2z")&&o.P.io()){J(4x[y],{\'1z\':C.5q})}if(I(v.nl)){if(v.nl.O(z[j])>-1){2R(f2[y])}}}B tr="";if(26(z[j])==\'4Z\'){if(z[j].O("rf")==0){4E(f2[y],{\'12u\':i,\'zq\':z[j].1x(7)});tr="kz"}}if(!7D){f2[y].1w(9C,5U);f2[y].1w(aj,5u);if(tr=="kz"){f2[y].1w(5X,kz)}F{f2[y].1w(5X,rp)}f2[y].1w("9f",9S)}F{J(f2[y],{"6e":"7c"})}}}}2r()}if(1W[i]==\'6s\'){o.U.lR()}if(1W[i].O(\'1b\')>-1){B id=1W[i].1x(8);if(I(o.1v[id])){if(I(o.1v[id][\'3p\'])){o.2w=2b;d9(i);ut(id);8z("v3");if(I(o.1v[id][\'7z\'])&&v.7z==1&&v.10E==1){7z(o.1v[id][\'7z\'])}F{mO(id);o.U.ds(o.1v[id][\'3p\'],(v.1b.hy==1?1:2b));v.1b.8Y==0&&v.1b.dZ==1?1K(bf,4X):\'\';mX=K;n7=K;n3(id)}}F{if(I(o.1v[id][\'4N\'])){6f(id);if(mX){5K==-1?4U(0,0):\'\'}F if(n7){5K==-1?4U(2u(f.Q)-2,0):\'\'}}}}if(o.3h){o.3h.na()}}if(1W[i]==\'5h\'){o.P.ec()}}}};G.Cu=E(x){8C(o[x+\'ke\'])};E tU(x){if(x=="rI"){B z=2T+\'wQ\';if(v[z]){V(B y in v[z]){if(v[z].2G(y)){qB(y,v[z][y])}}hH()}L}9J();V(B i=0;i<f2.Q;i++){if(f2[i]){f2[i].C.2p="1L"}}f2=[];bQ(\'f2\',0);bJ(f2[0],h1[0],4x[0],6k[0]);J(f2[0],{"2Y-2M":"5a 6O "+(C.z3==1?"#"+C.9m.1Y("#",""):"4q(100,100,100,0.7)")});if(x.O("7R")>0){f2[0].1w(5X,ve);4x[0].1U=2I(x.1x(x.O("7R")+5))}F{f2[0].1w(5X,hH);4x[0].1U=(C.t0!=1?mk:\'\')+2I(x)}J(4x[0],{\'4e-3I\':C.im});f2[0].1w(9C,5U);f2[0].1w(aj,5u);f2[0].1w("9f",9S);B 4w=[];B uK=K;if(x.O("3I")>0){4w=[\'50%\',\'75%\',\'100%\',\'125%\',\'150%\',\'Kg%\',\'4X%\',\'Js%\',\'cj%\',\'iu%\']}if(x.O("5G")>0){4w=[\'0\',\'0.2\',\'0.3\',\'0.4\',\'0.5\',\'0.6\',\'0.7\',\'0.8\',\'0.9\',\'1\']}if(x.O("iy")>0){V(i=-5;i<5.5;i+=0.5){4w.3d(2N.56(i*100)/100)}}if(x.O("fZ")>0){4w=[4X,iu,bn]}if(x.O("2M")>0){V(i=0;i<21;i++){4w[i]=i*10}}if(x.O("xa")>0){V(i=0;i<24;i++){4w[i]=i}}if(x.O("xf")>0||x.O("xY")>0){V(i=0;i<60;i++){4w[i]=i}}if(x.O("az")>0){uK=H;4w=[0,1]}if(x.O("1z")>0){4w=[\'3K\',\'yA\',\'QH\',\'Qk\',\'Qp\',\'LW\',\'LD\',\'LL\',\'Mm\',\'Md\',\'Mc\',\'Ma\',\'KF\',\'Lu\',\'MY\',\'MM\',\'O5\',\'3G\'];B vx=v[x].1Y("#","");if(4w.O(vx)==-1){4w[8]=vx}}V(y=1;y<=4w.Q;y++){bQ(\'f2\',y,0);bJ(f2[y],h1[y],4x[y],6k[y]);J(6k[y],{\'2W-1d\':0});if(x.O("1z")>0||x.O("2M")>0||x.O("7R")>0||x.O("iy")>0){y%3!=0?J(f2[y],{\'hA\':\'1d\'}):\'\';J(f2[y],{\'W\':\'33.3%\'});if(x.O("1z")>0){4x[y].1U="<1S C=\'"+(4w[y-1]=="3G"?\'2Y:5a 6O #hw;Y:BQ;W:BQ;\':\'Y:dU;W:dU;\')+";2t-1z:#"+4w[y-1]+";2Y-6g:dU;\'></1S>";J(f2[y],{\'2K-Y\':1})}F{4x[y].1U=4w[y-1]}}F{if(x.O("fZ")>0){4x[y].1U=4w[y-1]}F{y%2!=0?J(f2[y],{\'hA\':\'1d\'}):\'\';J(f2[y],{\'W\':\'50%\'});if(uK){4x[y].1U=2I(4w[y-1]+\'bd\')}F{4x[y].1U=4w[y-1]}}}3F[y]=x+\'=\'+4w[y-1];if((4w[y-1]==v[x]&&7a(v[x])!=" ")||v[x]==\'#\'+4w[y-1]){6k[y].1U=hD;J(4x[y],{\'1z\':C.5q})}f2[y].1w(9C,5U);f2[y].1w(aj,5u);if(x.O("7R")>0){f2[y].1w(5X,DC)}F{f2[y].1w(5X,GL)}f2[y].1w("9f",9S)}2r()}E mO(id){if(I(o.1v[id][\'1X\'])){v.1X=o.1v[id][\'1X\'];I(v.1X)?o.P.9l(v.1X):\'\'}if(I(o.1v[id][\'1R\'])){o.fB=o.1v[id][\'1R\']}}E n3(id){if(I(o.1v[id][\'1R\'])){if(v.ja==1){if(o.U.lr(o.1v[id])){}F{v.1R=(v.uO==1&&I(o.ta)?o.ta+(v.uP==1?\'<br>\':\' \'):\'\')+o.1v[id][\'1R\']}o.U.9N(\'1R\')}}if(v.iK==1){if(I(o.1v[id][\'2S\'])){v.2S=o.1v[id][\'2S\']}F{v.2S=[]}o.R.it()}v.6z=2b;B xv=[\'1e\',\'xq\',\'xX\',\'kE\',\'7s\',\'4z\',\'6z\',\'4p\',\'hI\',\'6s\',\'bj\',\'bM\',\'j3\'];V(B i=0;i<xv.Q;i++){if(I(o.1v[id][xv[i]])){v[xv[i]]=o.1v[id][xv[i]]}}v.1F=0;ut(id);if(I(o.1v[id][\'3a\'])){o.1v[id][\'2q\']=o.1v[id][\'3a\']}if(I(o.1v[id][\'2q\'])){o.U.ip(o.1v[id][\'2q\'])}if(I(o.1v[id][\'cY\'])){6M(\'cY\',o.1v[id][\'cY\'])}}E ut(id){B x=o.1v[id][\'1F\'];if(I(x)){if(x=="3m"){if(o.P.1a()>0){v.1F=o.2w=o.P.1a()}}F{v.1F=o.2w=x}}}E d9(x){if(5K==0&&!o.1F){J(5L[5K],{\'1z\':C.1z});J(aZ[5K],{\'6o\':C.5p});7u[5K].1U=\'\'}F{o.tm=x;if(5K>-1){iq(5K)}if(3N!=\'\'){o.aR[3N]=H;5e=uY(5e,3N)}}if(1W[x]){B id=1W[x].1x(8);7u[x].1U=hD;J(5L[x],{\'1z\':C.5q,\'1C-hm\':\'1L\',\'1t\':C.a});if(C.tx==1&&I(C.nr)){J(aZ[x],{\'6o\':C.nr})}5K=x;3N=id;o.3N=3N;v.4T=3N;o.nj=5L[x].1U;o.tm=3N;eL=o.1v[id][\'hJ\'];if(o.R){o.R.fM()}}}E 6f(id){B x=id==0?o.1b:o.1v[id];o.tm=id;V(B i=0;i<f.Q;i++){if(C.3J==1){X.2U(f[i])}F{7e.2U(f[i])}f[i]=22}f=[];5K=-1;if(I(x[\'4N\'])){B y=4b.3R(x[\'4N\']).Q;bQ(\'f\',y);1W[y]="Cg";bJ(f[y],aZ[y],5L[y],7u[y]);if(C.3J==1){J(f[y],{"W":(C.kN==1?C.eC:"2z"),"Y":C.l2})}if(C.qn==1){if(C.3J==1){J(f[y],{"HG":"5a 6O #"+C.t6})}F{J(f[y],{"Id":"5a 6O #"+C.t6})}}B 1J=x.1R;if(C.t0!=1){1J=mk+1J}5L[y].1U=1J;J(5L[y],{\'4e-3I\':C.im});B p=x[\'hJ\'];f[y].1w(9C,5U);f[y].1w(aj,5u);f[y].1w(5X,E(){G3(p)});x=x[\'4N\']}B y=4b.3R(x).Q;5e=[];dp=[];V(B i=0;i<y;i++){bQ(\'f\',i);1W[i]="1b"+x[i].id;if(!I(o.aR[x[i].id])&&!I(x[i].4N)){5e[x[i].id]=i;dp[x[i].id]=i}bJ(f[i],aZ[i],5L[i],7u[i]);if(C.3J==1){if(C.6t==0){J(5L[i],{\'W\':C.eC-C.rK-C.rL});2R(7u[i])}J(f[i],{"W":(C.kN==1?C.eC:"2z"),"Y":C.l2})}if(C.qn==1&&i<y-1){B mF=1M("1S");f[i].1H(mF);if(C.3J==1){J(mF,{"1k":"29","1g":0,"2j":0,"W":1,"Y":"100%","2t":"#"+C.9m,"6V":"1L"})}F{J(mF,{"1k":"29","2M":0,"1d":0,"W":"100%","Y":1,"2t":"#"+C.9m,"6V":"1L"})}}5L[i].1U=x[i].1R?x[i].1R:\'&dI;\';if(v.bL==1&&v.yk==1&&x[i].id){if(o.FO){if(o.FO.O(x[i].id)>-1){x[i].r8=1}}}if(I(x[i].r8)){if(x[i].r8==1){o.aR[x[i].id]=H;iq(i)}}if(I(x[i].4N)){7u[i].1U=FS;J(7u[i],{"1z":C.1z})}f[i].1w(9C,5U);f[i].1w(aj,5u);f[i].1w(5X,9x);f[i].1w("9f",9S);if(I(o.aR[x[i].id])){iq(i)}if(3N==x[i].id){d9(i)}if(eL==x[i].id){J(5L[i],{\'1z\':C.5q});J(7u[i],{\'1z\':C.5q})}}2r();4n=K;o.R?o.R.4v():\'\'}E iL(x,y,z,x1,y1,x2,y2,x3,y3,x4,y4){B ww=(C.3J==1?\'FZ\':\'100%\');B hh=(C.3J==1?\'100%\':\'FZ\');J(x,{\'1k\':\'29\',\'2p\':\'cK-4c\',\'W\':ww,\'Y\':hh,\'1C-6R\':\'6F\'});if(C.Fx==1){J(x,{\'2t\':\'-j4-2O-5l(\'+y+\')\',\'2t\':\'-3C-2O-5l(\'+y+\')\',\'2t\':\'-ms-2O-5l(\'+y+\')\',\'2t\':\'-o-2O-5l(\'+y+\')\',\'2t\':\'2O-5l(\'+y+\')\',})}if(C.3J==1||o.1q.2A){J(x,{\'6e\':\'3S\'})}F{J(x,{\'3S-2H\':\'1L\'})}if(C.kK==1){J(x,{\'5R-W\':C.hf+\'px!5o\'})}if(z=="1g"){J(x,{\'1g\':-1,\'1d\':0})}if(z=="2M"){J(x,{\'2M\':-1,\'1d\':0})}if(z=="1d"){J(x,{\'1g\':0,\'1d\':0})}if(z=="2j"){J(x,{\'1g\':0,\'2j\':0})}if(z=="2j"||z=="1d"){J(x,{\'1C-6R\':\'1d\',\'2W-1g\':1D.2P/2-10})}x.1U="<6F><1S "+(C.FD==1?"IH=\'G.C.6o=\\"#"+C.FJ+"\\"\' IJ=\'"+(C.tj==1?"G.C.6o=\\"#"+C.tk:"G.C.2t=\\"1L")+"\\"\'":"")+" C=\'3S-2H:2z;6e:3S;W:dU;Y:dU;2Y-6g:dU;"+(C.tj==1?"2t-1z:#"+C.tk+";":"")+(z=="1g"?"2F-1g:eZ;":"")+(z=="2M"?"2F-1g:eZ;":"")+(z=="2j"?"2F-1d:lx;":"")+(z=="1d"?"2F-2j:lx;":"")+"\'><2e W=\'20\' Y=\'20\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'><g><2K x1=\'"+x1+"\' y1=\'"+y1+"\' x2=\'"+x2+"\' y2=\'"+y2+"\' 3z=\'#"+C.nx+"\' 3z-W=\'"+C.n9+"\' 3z-bw=\'56\'/><2K x1=\'"+x3+"\' y1=\'"+y3+"\' x2=\'"+x4+"\' y2=\'"+y4+"\' 3z=\'#"+C.nx+"\' 3z-W=\'"+C.n9+"\' 3z-bw=\'56\'/></g></2e></1S></6F>"}G.9r=E(){if(C.hE==1){9r()}};E Gj(){if(cz){9r()}}E 9r(e){if(C.hE==1&&!hc){if(C.3J==1){B h=X.I9;B m=1D.2i+C.6I+C.6Q;B t=X.9U}F{B h=X.C1;B m=1D.2P;B t=X.c4}if(h>m){if(t>0){if(!5T(5c)){1r(5c);B m1=1B 5t({"mc":5c,"1G":"7w","to":1,"1a":0.3,"me":"5c"})}}F{if(5T(5c)){B m2=1B 5t({"mc":5c,"1G":"7w","to":0,"1a":0.3,"me":"5c","1p":H})}if(e){e.f9<0?e.8u():\'\'}}if(t<h-m-10){if(!5T(5f)){1r(5f);B m3=1B 5t({"mc":5f,"1G":"7w","to":1,"1a":0.3,"me":"5f"})}}F{if(5T(5f)){B m4=1B 5t({"mc":5f,"1G":"7w","to":0,"1a":0.3,"me":"5f","1p":H})}if(e){e.f9>0?e.8u():\'\'}}}F{1p(5c);1p(5f)}}}E Gh(){B x=X.c4+1D.2P-60;B m=1B 5t({"mc":X,"1G":"8M","to":x,"1a":0.3,"me":"Cf","8q":"bF"});1K(9r,2C)}E G6(){B x=X.c4-1D.2P+60;B m=1B 5t({"mc":X,"1G":"8M","to":x,"1a":0.3,"me":"HX","8q":"bF"});1K(9r,2C)}E hn(1c){3r(o.fz);1c.9V()}E G5(){B x=X.9U+(1D.2i+C.6I+C.6Q)-60;B m=1B 5t({"mc":X,"1G":"hX","to":x,"1a":0.3,"me":"K7","8q":"bF"});1K(9r,2C)}E G2(){B x=X.9U-(1D.2i+C.6I+C.6Q)+60;B m=1B 5t({"mc":X,"1G":"hX","to":x,"1a":0.3,"me":"Cr","8q":"bF"});1K(9r,2C)}E G3(x){if(x==\'\'){6f(0)}F{if(I(o.1v[x])){6f(x)}}2T=\'\'}E iq(x){7u[x].1U=\'\';J(5L[x],{\'1z\':C.G8});if(C.Gf==1){J(5L[x],{\'1C-hm\':\'2K-Ku\'})}if(C.qX>-1){J(5L[x],{\'1t\':C.qX})}J(aZ[x],{\'6o\':C.r0});if(C.rr>-1){J(aZ[x],{\'1t\':C.rr})}}E EY(i){if(I(3F[i])){9J();if(3F[i].O("59")==0){o.U.5J(3F[i].1x(7))}if(3F[i].O("6y")==0){o.U.cO(3F[i].1x(10))}if(3F[i].O("2q")==0){!o.5E?o.5E=1B mV():\'\';o.5E.aw(3F[i].1x(8))}if(3F[i].O("cl")==0&&v.7k==1){o.7k.zK(3F[i].1x(7))}if(3F[i].O("1A")==0){if(3F[i]==\'Ky\'){o.P.1A(C.1A/100)}if(3F[i]==\'Kq\'){o.P.1A(\'-\'+C.1A/100)}if(3F[i]==\'Ki\'){o.P.nN()}}if(3F[i].O("7R")>0){if(3F[i].O("Kf")>0){8z(2T+\'0\');8C(o[2T+\'ke\']);if(2T=="lb"){8z("qj")}fn()}}if(3F[i].O("5C")==0){o.U.8g(3F[i].1x(5));fJ();1K(bf,4X)}}};G.fJ=E(){fJ()};G.DQ=E(x){V(B i=0;i<1W.Q;i++){if(1W[i]==x){L H}}L K};E fJ(){V(B i=0;i<1W.Q;i++){if(1W[i]=="5C"){8C(i);if(2T==\'5C\'){eI();4U(i,0)}}}}E bQ(x,i,de){if(I(2o(x))){2o(x)[i]=1M("1S");if(i<2||x=="f"||2T!=\'59\'||de==1){if(C.3J==1){X.1H(2o(x)[i])}F{7e.1H(2o(x)[i])}}F{if(C.3J==1){X.qT(2o(x)[i],2o(x)[i-1])}F{7e.qT(2o(x)[i],2o(x)[de==2?i-2:i-1])}}if(x==\'f\'){4E(2o(x)[i],{\'kb\':i})}if(x==\'f2\'){4E(2o(x)[i],{\'bI\':i})}2o(x+\'bg\')[i]=1M("1S");2o(x)[i].1H(2o(x+\'bg\')[i]);2o(x+\'41\')[i]=1M("1S");2o(x)[i].1H(2o(x+\'41\')[i]);J(2o(x+\'41\')[i],{\'1k\':\'29\',\'2j\':0,\'1g\':0,\'W\':\'100%\',\'Y\':\'100%\',\'6V\':\'1L\'});2o(x+\'1R\')[i]=1M("1S");2o(x)[i].1H(2o(x+\'1R\')[i]);2o(x+\'4S\')[i]=1M("1S");2o(x)[i].1H(2o(x+\'4S\')[i]);if(x=="f2"&&is=="1i"&&C.sR==0){2R(2o(x+\'4S\')[i])}}};E bJ(x,b4,i1,qM,J8){J(x,{\'1k\':\'eY\',\'2j\':0,\'1g\':0,\'6e\':\'3S\',\'Y\':\'2z\',\'W\':\'100%\',\'6P\':\'3i\',\'2p\':\'4c\',\'2K-Y\':\'1.Jc\'});if(C.sD&&C.3J==1){J(x,{\'JJ\':C.sD})}if(C.3J==1){J(x,{\'2p\':\'cK-4c\',\'a4-6R\':\'1g\',\'9h-7P\':\'t7\'})}J(b4,{\'1k\':\'29\',\'2j\':0,\'1g\':0,\'W\':\'100%\',\'Y\':\'100%\',\'6o\':C.5p,\'1t\':C.5G,\'6V\':\'1L\',\'4y\':\'1t 0.2s 2O,2t .2s 2O\'});J(i1,{\'1k\':\'eY\',\'2j\':0,\'1g\':0,\'hA\':(C.6R?C.6R:\'1d\'),\'1z\':C.1z,\'2W-1g\':C.ha,\'2W-2j\':C.rL,\'2W-2M\':C.Jt,\'2W-1d\':C.rK,\'6V\':\'1L\',\'1t\':C.a,\'4y\':\'1t 0.2s 2O,1z 0.2s 2O\',});J(qM,{\'1k\':\'eY\',\'2j\':0,\'1g\':0,\'hA\':(C.Fm?C.Fm:\'2j\'),\'2W-1g\':C.ha+(C.4A<C.bU?(C.bU-C.4A)/2:0),\'2W-2j\':C.rL,\'2W-1d\':C.rK,\'6V\':\'1L\',\'4e-3I\':C.4A,\'1t\':C.a,\'1z\':C.5q,\'4y\':\'1t 0.2s 2O,1z 0.2s 2O\'});if(C.kK==1){J(x,{\'5R-W\':C.hf+\'px!5o\'});J(i1,{\'5R-W\':(C.hf-70)+\'px!5o\'})}F{if(C.3J==1){if(C.kN==1){J(x,{\'W\':C.eC});J(i1,{\'W\':C.eC-70})}}F{J(i1,{\'9h-7P\':\'b6\'});J(qM,{\'9h-7P\':\'b6\'})}}}E fn(){V(B i=1;i<f.Q;i++){if(I(f[i])){if(C.3J==1){f[i].C.2p="cK-4c"}F{f[i].C.2p="4c"}}}9J();eI();2r();2T=\'\';nf=-1};E eI(){V(B j=0;j<f2.Q;j++){if(f2[j]){if(C.3J==1){X.2U(f2[j])}F{7e.2U(f2[j])}f2[j]=22}}f2=[];2T=\'\'}E Cc(){L X.2i};G.gT=E(){kv()};E kv(){if(is=="1b"){if(C.3J==1||C.GN==1){B x=o.3M-C.4i-C.3E;J(1D,{\'W\':x});J(X,{\'W\':x});7e?J(7e,{\'W\':x}):\'\'}}}E 2r(){if(!hc){if(is=="1i"){o.R?o.R.um():\'\';B x=C.GM==1&&f.Q>1?f[1]:f[0]}if(is=="1b"){kv();o.R?o.R.gT():\'\';B x=f[0];if(v.Gi==1){mP()}}f.Q>1&&!x?(f[1]?x=f[1]:\'\'):\'\';f.Q>2&&!x?(f[2]?x=f[2]:\'\'):\'\';if(x){x.2i==0&&f2.Q>0?x=f2[0]:\'\'}if(X.2i-X.l6>0&&x&&C.3J!=1){if(I(5c)){J(5c,{"W":7e.2i})}if(I(5f)){J(5f,{"W":7e.2i})}C.nF=(X.2i-x.2i)-(X.l6-x.l6)}F{C.nF=0}}};E tK(){B x=0;B y=0;B z=\'\';V(B i=1;i<f.Q;i++){if(I(f[i])){if(f[i].C.5B=="3V"){x++;y=i;z=1W[i]}}}L[x,y,z]}G.vu=E(){hV=H;G.1r();9y=2;hH()};E Gy(x){hV=!hV;hH(x)}E hH(){fn();V(B i=0;i<1W.Q;i++){if(1W[i]=="2q"){4U(i,9y)}}}E 9J(){3r(uF);uF=1K(E(){o.ul=K},3U)}E ve(){B x=2T;fn();V(B i=0;i<1W.Q;i++){if(1W[i]==x){4U(i,0)}}}E bf(x){if(is==\'1i\'&&v.1i.8Y==1){}F{if(is==\'1b\'&&v.1b.3h==1&&v.1b.JX!=1){o.3h?o.3h.f1():\'\';cz=K}F{if((x!=1||(C.Kb==1&&C.8Y==1))&&!o.1q.tv){B m=1B 5t({"mc":1D,"1G":"7w","to":0,"1a":0.1,"me":is,"8q":"vE"});fP=1K(E(){J(1D,{"5B":"3i","1t":0,"1g":-3U});cz=K},4X)}F{J(1D,{"5B":"3i","1t":0,"1g":-3U});cz=K}}if(is==\'1b\'){if(v.1b.BE==1&&o.R){o.R.nV("1h","1b",H)}}43(jq)}};G.c=E(){L 1D};G.co=E(){if(1D.Iq(X)){L X}};G.s=E(1f){L C[1f]};G.ss=E(1f){L C};G.1r=E(){fn();3r(fP);cz=H;if(is==\'1b\'&&v.1b.3h==1){o.3h?o.3h.fF():\'\'}F{J(1D,{"5B":"3V","1t":1,"4y":"1t 0.2s 2O"});B x=tK();if(x[0]==1){if(x[2]=="59"||x[2]=="6y"||x[2]=="2q"||x[2]=="5C"||x[2]=="1A"||x[2].O("7R")>0){4U(x[1],0)}}}if(o.R){is==\'1i\'?o.R.um():\'\';if(is==\'1b\'){o.R.gT();if(v.1b.BE==1){o.R.nV("1h","1b",K)}}}if(o.1q.6r){J(X,{\'7v-W\':\'2z\'});if(C.3J!=1){J(7e,{\'7v-W\':\'2z\'})}}hP=H;43(nC);nC=7o(BF,100)};E BF(){43(nC);hP=K}G.5S=E(i){4U(i,1)};G.1p=E(x){bf(x)};G.5J=E(){V(B i=0;i<1W.Q;i++){if(1W[i]=="59"){8C(i);if(o.2f.Q>1){1r(f[i])}if(2T==\'59\'){eI();4U(i,9y)}}}};G.ec=E(){V(B i=0;i<1W.Q;i++){if(1W[i]=="5h"){8C(i)}}};G.fN=E(x){V(B i=0;i<1W.Q;i++){if(1W[i]==x){8C(i);if(o[\'eH\'+x]){if(o[\'eH\'+x].Q>1){1r(f[i])}}if(2T==x){eI();4U(i,9y)}}}};G.aw=E(){V(B i=0;i<1W.Q;i++){if(1W[i]=="2q"){8C(i);if(o.3n){if(o.3n.Q>0){B x=K;if(o.2g){V(B y=0;y<o.2g.Q;y++){if(o.2g[y]!=\'\'){x=H;1l}}}F{x=H}x?1r(f[i]):\'\'}}if(2T==\'2q\'){eI();4U(i,0)}}}};G.vf=E(x){o.1b=x;6f(0);if(I(v.4T)){if(v.4T.O("x-")!=0){V(B y in o.1v){if(o.1v.2G(y)){if(o.1v[y].dg==v.4T){v.4T=y}}}}if(I(o.1v[v.4T])){fe(o.1v[v.4T]);B y=o.1v[v.4T][\'aQ\'];d9(y);if(v.1b.uM==1&&C.3h!=1){6f(0);1K(E(){2r()},4F)}F{1K(E(){cw(y);2r()},4F)}v.4T=2b}F{d9(0)}}F{d9(0)}if(C.3h==1){if(!I(o.3h)){o.3h=1B IP()}}};G.g5=E(x){if(I(o.1v[x])){fe(o.1v[x]);4U(o.1v[x][\'aQ\'],0);cw(o.1v[x][\'aQ\'])}};G.kf=E(x){if(I(o.1v[x])){fe(o.1v[x]);if(o.1v[x]["3p"]){d9(o.1v[x][\'aQ\']);mO(x);o.U.ds(o.1v[x]["3p"],1);n3(x);cw(o.1v[x][\'aQ\']);if(o.3h){o.3h.na()}}F if(o.1v[x]["4N"]){6f(x)}}};E C0(x){if(I(o.1v[x])){eL=\'\';6f(0);fe(o.1v[x]);mO(x);4U(o.1v[x][\'aQ\'],0);n3(x)}};G.cN=E(){mX=H;x=2u(5K)+1;if(3N!=\'\'){o.aR[3N]=H;5e=uY(5e,3N)}if(v.5e==1){x=rk(5e);if(x==22){if(v.K8==1||v.1b.e3==1){dp.BX(E(a,b){L 2N.7b()-0.5});V(B x in dp){if(dp.2G(x)){5e[x]=dp[x]}}x=rk(5e)}F{o.U.vG()}}}F{if((1W[x]=="Cg"||5K==-1)&&3N!=\'\'){B y=4b.3R(o.1v).O(3N);if(y<4b.3R(o.1v).Q){B z=o.1v[4b.3R(o.1v)[y+1]];if(z){if(I(z.4N)){z=o.1v[4b.3R(o.1v)[y+2]]}G.kf(z.id);x=-1;o.U.2L()}}}}if(x>-1){4U(x,0);cw(x)}};E cw(x){if(f[x]&&!hc){if(C.3J==1){B to=f[x].ny-20;B m=1B 5t({"mc":X,"1G":"hX","to":to,"1a":0.3,"me":"Cr","8q":"bF"})}F{B to=f[x].Ca-1D.2P/2+20;B m=1B 5t({"mc":X,"1G":"8M","to":to,"1a":0.3,"me":"Cf","8q":"bF"})}1K(9r,2C)}}E rk(44){B 3R=4b.3R(44);B x;V(B i=0;i<3R.Q;i++){x=44[3R[3R.Q*2N.7b()<<0]];if(x){1l}}L x};G.bi=E(){bi()};E bi(){if(nD>-1){8C(nD);if(2T==\'1A\'){6k[0].1U=2N.56(o.3H.x*100)+\'%\'}}};G.e2=E(){if(v.5e==1){L 4b.3R(5e).Q>0}B x=K;if(o.1v){x=4b.3R(o.1v).O(3N)<4b.3R(o.1v).Q-1}L x};G.k2=E(){if(I(o.hU)){C0(o.hU)}};G.v9=E(){B x=5K>0;if(o.1v){B y=4b.3R(o.1v);B z=y.O(3N);x=z>0;if(z==1){if(I(o.1v[y[0]].4N)){x=K}}}L x};G.k1=E(){L I(o.1v)};G.es=E(){n7=H;if(G.v9()){B x=2u(5K)-1;if(x<0){B y=4b.3R(o.1v).O(3N);if(y>0){B z=o.1v[4b.3R(o.1v)[y-1]];if(z){if(I(z.4N)){z=o.1v[4b.3R(o.1v)[y-2]]}if(z){G.kf(z.id);o.U.2L()}}}}F{4U(x,0);cw(x)}}};G.jT=E(){if(5K>0){cw(5K)}};E fe(x){if(x[\'pc\']!=-1){fe(o.1v[x[\'hJ\']]);6f(x[\'hJ\'])}F{6f(0)}};G.g=E(x){9W(x){1m"W":L Cc();1l;1m"Y":L 1D.2P;1l;1m"1g":L 1D.Ca;1l;1m"Gn":L X.C1;1l;1m"Gm":L C.9q;1l;1m"x":L 4Q(1D.C.1d);1l;1m"y":L 4Q(1D.C.1g);1l;1m"1t":L 1D.C.1t;1l;1m"1r":L cz;1l;1m"5S":L nf;1l;1m"1f":L 1f;1l;1m"9T":L 1f+9T;1l;1m"4n":L 4n;1l;1m"1b":L is=="1b";1l;1m"sR":L hD;1l;1m"bX":L o.1v[o.bX]?o.1v[o.bX].1R:\'\';1m"bM":L v.bM?v.bM:\'\'}};G.4n=E(){if(is=="1i"){B x=0;V(B i=1;i<11;i++){if(1W[i]=="59"){B y=o.2f.Q;if(I(v.nl)){B z=v.nl.2D(",");V(B j=0;j<z.Q;j++){if(o.2f.O(z[j])>-1){y--}}}if(y>0){if(y>1||(y==1&&o.2f!=1&&C.AI==1)){x++}}}if(1W[i]=="5h"){if(o.5h){x++}}if(1W[i]=="6s"){if(o.2B==\'aC\'||v.6s){x++}}if(1W[i]=="6y"){if(o.62.Q>0){x++}}if(1W[i]=="cl"&&v.7k==1){if(o.n8.Q>0){x++}}if(1W[i]=="2q"){if(I(o.2g)){V(B s=0;s<o.2g.Q;s++){if(o.2g[s]!=\'\'){x++;1l}}}if(x==1&&o.iE==1){x=0}}if(1W[i]=="5C"){if(o.2B!="au"){x++}}if(1W[i]=="1A"){x++}if(1W[i]){if(1W[i].O("7R")>0){x++}}if(v.1i[is+i+\'1p\']==1){x--}}L x==0}F if(is=="1b"){L f.Q==0}F{L 4n}};G.3Y=E(){if(1D.5k==o.1Q){1D.2U(X);o.1Q.2U(1D);o.3h?o.3h.3Y():\'\';1D=22;X=22;hc=H}}};B o0=E(1e){B X;B 1n;B dx;B 9c=K;B 5S=K;B 4g=v.Ay==1&&I(v.At)?gX(v.At):"#3K";B DO=v.Ay==1&&I(v.Be)?gX(v.Be):"#3G";B sh=[];B ea=["yI","Kj","Jz","JB","Jw","Ju","Jv","ok"];G.fF=E(){if(!9c){X=1M("1S");J(X,{"1k":"29","W":"100%","Y":"100%","2t":kI(DO,0.8),"1z":4g});X.C.4C="3U";B 8D=1M("1S");J(8D,{"1k":"29","1g":15,"2j":15,"6e":"3S","2W":5});8D.1U="<2e W=\'20\' Y=\'20\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'><g><4I d=\'Kx.5,3.5 L3.5,16.5 E0.5,3.5 Z\' 3z=\'"+4g+"\' 3z-W=\'3\' 3z-bw=\'El\'></4I><4I d=\'M3.5,3.5 E0.5,16.5 L3.5,3.5 Z\' 3z=\'"+4g+"\' 3z-W=\'3\' 3z-bw=\'El\'></4I></g></2e>";if(o.1q.2A){8D.1w("cW",E(1c){a8()})}F{8D.aI=a8}8D.C.4C=10;B 2E=1M("1S");J(2E,{"1k":"29","1g":((v.Ej*100)+\'%\'),"1d":0,"W":"100%","1C-6R":"6F","1z":4g});2E.1U=(v.Ei==1?2I("3q")+\'<br><br>\':\'\')+(I(v.1e)?\'<a 8B="\'+v.1e+\'" C="1C-hm:1L;1z:\'+4g+\';H9:0;9h-7P: b6;eA-d1:5a;2p:4c" 4h="mJ" id="l9\'+v.id+\'">\'+v.1e+\'</a>\':\'\');o.1Q.1H(X);X.1H(8D);X.1H(2E);J(o.1D,{\'-3C-dl-eU\':\'2z\'});if(I(v.1e)){ni("l9"+v.id)}1n=[];if(!I(v.Eg)){v.Eg="mz"}if(!I(v.Eh)){v.Eh="kl"}if(!I(v.sQ)){if(v.bE=="ru"){v.sQ="vk"}if(v.bE=="en"){v.sQ="gC"}}if(I(v.7s)){v.JS="7s"}B 2e;V(B i=1;i<=15;i++){if(I(v["3q"+i])){2e=CE(v["3q"+i]);if(v["3q"+i]!=""&&2e&&2e!=\'\'){1n[i]=1M("1S");J(1n[i],{"2p":"cK-4c","6e":"3S"});B m=((v.gM*20-20)+v.Eq*1)/2;B ml=0;if(v["3q"+i]=="vk"||v["3q"+i]=="7s"){ml=v.gM*3}J(1n[i],{"2F-1d":m+ml,"2F-2j":m+ml,"2F-1g":m+20,"W":20,"Y":20});1n[i].1U="<2e W=\'20\' Y=\'20\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'><g>"+2e+"</g></2e>";2E.1H(1n[i]);1A(i,v.gM);1n[i].i="i"+i;1n[i].eW=5U;1n[i].eO=5u;1n[i].aI=9x}}}dx=1M("1S");J(dx,{"2p":"4c","W":"100%","1C-6R":"6F","2F-1g":m+15});2E.1H(dx);9c=H}F{6h(X);J(o.1D,{\'-3C-dl-eU\':\'2z\'});if(I(v.1e)){ni("l9"+v.id)}}if(o.1O){o.aV=H;o.U.2Q()}5S=H};E a8(){if(o.aV){o.U.2L()}f1()}E f1(){if(I(X)){2R(X);o.aV=K;5S=K;dx.1U=\'\';J(o.1D,{\'-3C-dl-eU\':\'1L\'})}}G.f1=E(){f1()};E 5U(){if(I(G.i)){B i=G.i.1x(1)*1;if(v.mj>-1){1A(i,v.mj)}}}E 5u(){if(I(G.i)){B i=G.i.1x(1)*1;if(v.mj>-1){1A(i,v.gM)}}}E 9x(e){if(I(G.i)){B i=G.i.1x(1)*1;sC(v["3q"+i])}}G.2X=E(x){if(x.O("1e")>-1){if(v[x]){B y=v[x].1Y("{1a}",2u(o.P.1a()));mY(y);o.8x.7G(2I("m9"),2)}}sC(x,H)};E sC(y,z){B x=\'\';if(y=="mz"){x="8r://3v.mz.7j/qP/qP.E2?u="}if(y=="kl"){x="8r://kl.7j/E4?5P="}if(y=="gC"){x="8r://HW.gC.7j/3q?1e="}if(y=="vk"){x="8r://vk.7j/3q.E2?1e="}if(ea.O(y)>-1){if(sh[y]){x=sh[y].3q()}}if(y=="7s"&&I(v.7s)){if(I(v.gs)){v.gs=v.gs.1Y(/7Z\'qt/ig,\'"\')}mY((I(v.E7)?v.E7.1Y(/7Z\'qt/ig,\'"\'):\'\')+\'<bW W="\'+(v.rz==1?v.E8:2u(o.8P))+\'" Y="\'+(v.rz==1?v.CO:2u(o.aT))+\'" 3c="\'+v.7s+\'" Ic="0" uJ\'+(I(v.gs)?\' \'+v.gs:\'\')+\'></bW>\'+(I(v.CS)?v.CS.1Y(/7Z\'qt/ig,\'"\'):\'\'));if(z){o.8x.7G(2I("m9"),2)}F{dx.1U=2I("m9");if(I(v.1e)){ni("l9"+v.id)}}}x!=\'\'?Cw(x,\'o0\',4F,4F):\'\'}E 1A(i,x){J(1n[i],{"2J-GY":\'50% 50% lx\'});J(1n[i],{"2J":"1A("+x+")","4y":"2J 0.1s 2O"})}E Cw(1e,1R,qf,qo){B CY=(a3.Y/2)-(qo/2);B Dm=(a3.W/2)-(qf/2);1V.5S(1e+xF(I(v.1e)?v.1e:o.8B),\'qP\',\'1g=\'+CY+\',1d=\'+Dm+\',1y=0,5P=0,W=\'+qf+\',Y=\'+qo)}E ni(Cs){B qw=1P,1C=qw.8d(Cs),cX,mw;if(1C){if(qw.7A.D6){cX=1P.7A.D6();cX.P5(1C);cX.eU()}F if(1V.Dn){mw=1V.Dn();cX=1P.P9();cX.Pd(1C);mw.Pc();mw.Pb(cX)}}}E CE(x){if(x=="mz"){L"<4I d=\'yG,6.gk gJ.gl,6.gk gJ.gl,5.PK f7.gl,4.PN 12.PF,4.uC 12.PE,4.uC uv.CM,4.uC uv.CM,2.PD gJ.PB,2 C9.PA,2 8.g0,3.P2 8.g0,5.P1 L8.g0,6.gk L7,6.gk L7,9.j0 L8.g0,9.j0 L8.g0,17.DJ gJ.gl,17.DJ gJ.gl,9.j0 uv.OB,9.j0 A2,6.gk Z\' 3j=\'"+4g+"\' 3j-9E=\'d6\'></4I>"}if(x=="kl"){L"<4I d=\'M7.H3,15.kU fj.OL,15.kU 15.jL,11.QY 15.jL,7.QX 96.jL,7.QV 15.jL,7.R5 15.QU,7.QL 96.QJ,7.QO 16.Bd,6.QS 16.QQ,6.Ro 96.Rn,6.Rp 15.Rt,6.Rr 14.Rk,6.R9 96.Re,6.Ri 15.Rh,5.Rf 16.Bd,5.QG 96.Q9,5.Q8 15.Q5,5.Q6 14.Qb,5.Qe aM.Qd,4.Qc 11.Q4,4.Q3 10.PW,5.PV l1.PU,6.PS 9.PT,7.PX 10.PY,8.Q2 C8.Q1,8.Q0 6.PZ,7.Qg 4.Qh,5.Qv C4.Qw,6.QB 4.QF,8.QE 5.QD,8.QC C5.Qm,8.Ql 4.Qi,8.Qj 4.o9,8.Qn L4.o9,8.Qo C4.o9,9.Qs 5.Qr,10.O9 6.O8,11.LS C6.LR,11.LQ 5.LO,11.LP 5.LT,11.LU C5.LV,12.LN 6.LM,12.LE 7.LB,12.LF C6.LH,13.LJ 5.LI,13.ox 4.Mk,13.ox C4.Mj,13.ox 4.Mi,13.Mq 4,13.Mp C5.Me,14.M6 6.M2,15.kU 7.H3,15.kU\' 3j=\'"+4g+"\' 3j-9E=\'d6\'></4I>"}if(x=="gC"){L"<4I d=\'Mb.ff,8.pR o3.ff,11.H6 l1.ff,11.H6 12.KT,11.GZ 13.KS,11.GZ fj.KQ,12.KR 11.KV,13.oV 10.ff,13.oV C8.KW,13.oV 6.oT,11.L0 6.oT,10 C6.oT,8.KZ 8.KY,6.oW 10.ff,6.oW f7.KX,6.oW 11.KP,6.KO 12.KH,7.KG fj.KD,6.KE 12.KI,6.KJ 14.KN,5.KM aM.KL,4.KK 11.Lq,4 10.Hs,4 C6.Hq,4 4,6.Lp 4,10 C4,13.Ln 6.Hq,16 10.Hs,16 96.Lt,16 16.Lx,11.Lw 15.Lv,8.pR o3.ff,8.pR Z\' 3j=\'"+4g+"\' 3j-9E=\'d6\'></4I>"}if(x=="vk"){L"<4I d=\'Lm.pU,13.Ll-0.Le-0.Ld-1.Lc-1.La-1.Lb-2.Lf-0.Lg-0.Lk-0.Gs-0.Lj-0.uh-0.Li-0.Lh c-1.Mr-1.Ms,3.121-3.NB,2.NA-5.Nx-0.hT-0.Ny-0.ND-0.NH-3.NG-0.21-3.Nv-0.Nl-0.Nj,0.ze-0.127,0.Nk-0.gL,0.136 c-0.zi,1.Np-1.164,2.Nu-2.Hg,3.Ns-0.p5,0.Gb-0.Nr,0.111-0.NI,0.NJ-0.hT-0.O1-0.1-0.q0-0.148-0.jJ c-0.O0-0.NZ-0.O2-3.O3-0.O7-4.O6-0.jJ-0.pX-0.p5-0.161-0.gL-0.O4-0.Gb-0.vS-0.NX-0.pX-0.NW-0.124 c-1.102-0.18-2.NO-0.146-3.NM,0.NL.NP,5.NQ,7.84,5.36,7.NU,5.NS.63,5.NR,7.Ni,5.Nh,7.MK,5.MJ c0.Gs,0.hT,0.uh,0.gL,0.MI,0.MG.MH,7.ML,8.hR,8.54,8.zl,9.MP.MO,9.58,8.MN,9.MF,8.vF,9.ME C8.36,9.Mw,8.Mt,9.Mu,8.My,9.MC.135,9.MB,7.MR,9.MS,7.Na,9.N9.Nb,9.Nc,7.Ng,9.Ne,7.Nd,9.N5 C6.N4,8.MX,6.zt,7.MW,5.MV,5.MT-0.hT-0.124-0.124-0.zO-0.21-0.MZ.N3,5.N2,5.13,5.N1,4.zp,5.N0.Ol,5.MU c-0.Nf,0-0.N7,0.p0-0.N6,0.N8.q0,5.MA.vJ,5.MD,1.Mz,5.93,2.vS,6.Mv.Mx,3.101,3.MQ,7.Am,6.NV,8.NK c0.NN,0.DX,1.NY,0.wA,2.Nt,0.Nq.Nm-0.Nn,0.Nw-0.NE,0.NF-0.NC.jJ-0.Nz.q0-0.jJ,0.hT-0.pX,0.p0-0.16 c0.149-0.Ls,0.Lo-0.Lr,0.L6-1.L5.p0-0.p5,0.124-0.gL,0.gL-0.KU.Ly-0.Lz,0.133-0.127,0.zO-0.148 c0.M9-0.M8,2.M1,1.M4,2.M5,2.Mf.Mn,14.Mo,19.Ml,15.zw,18.pU,13.Mh.Mg,13.M0,18.LZ,13.LK,18.pU,13.LA\' 3j=\'"+4g+"\' 3j-9E=\'d6\'/></4I>"}if(ea.O(x)>-1){if(!sh[x]){3t{sh[x]=2o(\'1B LC\'+x+\'()\')}3b(e){}}L sh[x]?sh[x].1n(4g):\'\'}if(x=="7s"){L"<4I d=\'M7.g2,13.tP L1,10.ym L1,9.yh L7.g2,5.LX L7.g2,7.LY L2.Qq,9.tJ L7.g2,12.y6 L7.g2,13.tP Z xd.yf,4 L9.Qt,16 L7.Qu,16 o3.QA,4 fl.yf,4 Z Qx.y8,9.tJ fl.mp,7.Qy fl.mp,5.Qz yl,9.yh yl,10.ym fl.mp,13.tP fl.mp,12.y6 Qf.y8,9.tJ Z\' 3j=\'"+4g+"\' 3j-9E=\'d6\'></4I>"}}E mY(x){B fg=1P.1M(\'qY\');fg.5N(\'C\',\'W:5a;2Y:0;1t:0;\');1P.7A.1H(fg);fg.4S=x;fg.eU();1P.Qa(\'mY\');1P.7A.2U(fg)};G.4n=E(){B x=H;V(B i=1;i<=15;i++){if(I(v["3q"+i])){if(v["3q"+i]!=""){x=K}}F{i<4?x=K:\'\'}}if(I(v["7s"])){v["7s"]!=\'\'?x=K:\'\'}if(I(v["1e"])){v["1e"]!=\'\'?x=K:\'\'}L x};G.3Y=E(){if(9c){o.1Q.2U(X);X=22;9c=K}};G.yM=E(){L 5S}};E Q7(){G.3q=E(){L(o.1q.2A?"8r://wa.me/?":"8r://Rg.yI.7j/ah?")+"1C="};G.1n=E(4g){L"<4I d=\'yG.xn,5.xe aM.Rd,4.R8 11.Ra,3.Rb 10.Rc,3.yK C6.Rj,3.yK 4.Rs,6.Ru 4.Rq,9.Rl C4.Rm,10.R7 4.R6,11.QP 4.QR,12.QN L4.QI,15.QK L7.QM,14.QT C8.R2,15.R3 9.R4,15.R1 10.R0,15.xy aM.QW,15.xy 15.QZ,12.PR 15.PQ,9.OI OJ.OM,7.OH 15.OG,6.OC 14.xn,5.xe Z xd.Ah,11.Ai fj.OD,11.OE 12.OF,12.ON 11.OO,12.OX f7.OY,12.OZ 11.P0,12.OW 10.OV,11.OQ C8.OP,11.OR 7.OT,9.OU 7.OA,9.Oz C7.Oh,9.Oi 6.uA,8.Oj 6.uA,8.Ok C6.uA,7.Og 7.Of,7.Ob 7.Oa,6.Oc C7.Od,6.Oe 7.KC,6.jA 7.Om,6.jA C7.Ov,6.jA 8.Ow,6.jA 8.Ox,6.Oy C8.Ou,6.Ot 8.Op,6.Oo 8.Oq,6.Or C8.Os,7.PC 8.xP,8.Pz 8.Py,8.Pu C9.Pt,8.Pv 9.Pw,8.Px 8.PM,8.PO C8.xP,8.PP 8.PL,8.PG 8.PH,8.PI C8.PJ,8.Ps 8.Pr,8.Pa 8.P8,8.P4 C8.P3,8.P6 8.P7,9.Pe 8.Pf,9.Pn C8.Po,9.Pp 8.Pq,9.Pm 9.Pl,10.Ph C9.Pg,10.Pi 10.Pj,10.Pk 10.Rv,10.Iu l1.It,11.Ir 10.Is,11.Ig 10.Io,10.A0 l1.Il,10.zL 11.ID,10.IS 11.IQ,10.II f7.I4,10.Hw 11.HK,10.HO 11.HN,10.Hv f7.Hu,10.HP 12.I7,10.I0 12.HS,10.HR fj.HV,10.zL 12.HY,10.IM 13.KB,10.A0 aM.Af,10.K3 13.Af,11.K9 12.Ah,11.Ai Z\' 3j=\'"+4g+"\' 3j-9E=\'d6\'></4I>"}};E K1(){G.3q=E(){L"8r://t.me/3q/1e?1e="};G.1n=E(4g){L"<4I d=\'JU.wC,4.wZ 96.JV,4.JW 15.K0,4.JZ 14.A6,4.A8 A2.A6,4.A8 tY.Kk,4.Ko 11.Kn,5.Km 8.Kl,6.JP C6.JO,7.Jk 4.Jl,8.Jp 4.Jn,8.Jm C4.z7,8.J5 3.J3,9.J4 3.J9,9.Jd C3.Jb,9.JI 3.JN,10.JM 4.z7,10.JA C4.JF,10.JG 6.JH,11.J6 6.J7,11.Jf C6.Kh,11.KA 13.Kw,6.Ks 13.zj,6.JY aM.JR,7.K5 8.HZ,11.Ie 8.Ii,11.Ip C8.Iz,11.Iy 7.IG,14.JT 8.JQ,14.Kr C8.Kz,14.Jg 8.Je,14.Jr 8.K4,14.zk C8.Jy,14.Jx 8.JL,14.yT 8.JE,14.yT C9.Jo,14.Jh 9.Jj,13.Kp 10.Kv,13.Ke f7.K2,14.Ka 12.Kc,15.I1 12.I8,15.Ia fl.HA,15.HL fj.HH,15.Hy 13.J1,15.vb 13.IL,15.vb aM.IE,15.vb 13.IY,15.J0 13.zj,15.IT aM.IU,15.In 13.Ij,15.Ih 14.zn,14.zk tY.zn,14.IB 14.Iw,14.JD 14.Iv,14.Ix tY.IR,12.IV 14.IX,10.HF 15.HJ,9.HM 96.HE,7.HC 15.I5,6.I3 15.I2,5.I6 96.HQ,5.HU 15.K6,5.IW 15.Kd,5.Ji 96.Ja,5.Jq 15.JK,4.JC 15.wC,4.wZ Z\' 3j=\'"+4g+"\' 3j-9E=\'d6\'></4I>"}};B nR=E(1e,ih){B 6L=K;if(1e.O(\'6L\')==0){6L=H;1e=1e.1x(5)}B l3=kB(1e);B 1N;B 3k;B 9c=K;B 3P=K;B lc=K;B kp=K;B 2z=H;B tA=[];B bT=1;B iw=K;B tZ;B ce=0;B iY=0;B kP=K;B lz=\'Ha\'+v.id+(6L?\'6L\':\'\');B 1D=1M(\'1S\');1D.5N(\'id\',lz);ih.1H(1D);o.5h=K;!6L?o.U.fV():\'\';if(o.1q.2A){v.4a=1}if(v.wn!=1){B 7L=1M(\'1S\');ih.1H(7L);J(7L,{1k:"29",1g:0,1d:0,"2t-1z":"#lJ",Y:"100%",W:"100%","1t":0});7L.1w("EL",E(1c){1c.6d=H});if(o.1q.2A){7L.1w("et",E(1c){1c.6d=H});7L.1w("2y",E(1c){1c.6d=H});7L.1w("cW",E(1c){1c.6d=H;f8(1c);if(v.dj==1){1K(w6,100);1K(mZ,2C)}})}F{7L.1w("rs",E(1c){B x=H;if(v.2l==1){if(I(v.6T)&&!lc){x=K}if(I(v.my)&&aq()=="9t"&&1a()>0){x=K}}if(x&&v.dj==1&&v.w7!=1){2R(G);1K(mZ,3U)}})}v.dj==1&&v.Kt!=1?2R(7L):\'\'}E mZ(){6h(7L)}E w6(){if(v.w7!=1){2R(7L)}}if(v.4a==1&&v.4d==0){8b()}if(!1V[\'YT\']){1V.J2=E(){nE();V(B i=0;i<7g.Q;i++){if(7g[i].2X("id")!=v.id){if(7g[i].2X(\'zE\')){7g[i].2X(\'zF\')}}}};B fc=mW("4f.7j/vT","4f.7j/vT","HT");if(fc){fc.k4=E(e){o.U.9Y();if(v.wj!=1){1N=\'vV Ib i9\';o.P.4R()}}}}F{nE()}E nE(){if(v.4a==1||6L){!9c?9n():\'\'}F{o.U.9Y()}}E 9n(){if("YT"in 1V){if(I(YT.n0)&&!9c){1u("zY 9n");B tQ=0;if(v.wn==1){tQ=1}o.2w>0?ce=2u(o.2w):\'\';3k=1B YT.n0(lz,{Y:o.9F,W:o.aF,HB:l3,HI:{Hx:1,Hz:lz,IN:1,IO:1,dZ:1,Fw:((v.o5==0||(v.IK!=1&&o.1q.9j))&&o.1q.2A?0:1),IF:3,R:tQ,IZ:0,IC:1,xI:0,4d:0,b9:0},2H:{\'Im\':uT,\'Ik\':Co,\'4R\':4R,\'If\':wh}});if(o.2w>0){o.2w=2b}2r();9c=H}F{1K(9n,4F)}}F{1K(9n,4F)}}B g8;E uT(){1u("zY hk");3P=H;3r(tZ);o.U.6N();if(6L){if(o.1q.rD){o.U.5d()}3k.mE();o.2l.IA()}F{if(v.4d==1&&o.1q.rD&&!o.k3){o.U.5d();if(o.1q.2A){43(g8);g8=7o(yV,cj)}}if(v.4a==0){3k.mE()}F{o.U.9Y()}o.P.am();if(bT!=1){8g(bT)}bu();2r()}}E yV(){B x=3k.wf();if(x==2||x==-1){o.R.2Q();o.R.6N();43(g8)}if(x==1){43(g8)}}E Co(1c){if(v.TO==1){1u(\'YT\',1c.1E)}if(6L){if(1c.1E==YT.c8.wo){o.2l.11f()}if(1c.1E==YT.c8.vB){}}F{if(1c.1E==YT.c8.vB){if(iY==1){iY=0;uT()}if(!o.1O){o.U.2L()}if(ce>0){3k.wm(ce,H);ce=0;o.2w=2b}mZ();lc=H;3P=H;if(kp){3k.tG()}F{o.P.8V();o.P.bx()}wd();if(I(v.42)){V(B i=0;i<o.2f.Q;i++){if(v.42==o.2f[i]){5J(i)}}v.42=22}F{if(I(o.42)){V(B i=0;i<o.2f.Q;i++){if(o.42==o.2f[i]){5J(i)}}o.42=22}}iw=K}if(1c.1E==-1&&iw&&o.1O){o.U.6N();iw=K;aA()}if(1c.1E==YT.c8.11e){aA()}if(1c.1E==YT.c8.wo){8o()}if(1c.1E==YT.c8.11g){if(!o.1O){}if(o.1O){iw=H;8b()}}if(1c.1E==YT.c8.11h){}}}E 4R(1c){if(6L){o.2l.11i()}F{if(1c.1E==2){1N="Hl 4f id"}if(1c.1E==5){1N="oy 4n"}if(1c.1E==101||1c.1E==150||1c.1E==100){1N="G 5Y is 11d"}if(v.11c==1){I(v.wi)?1N=v.wi:\'\'}if(v.wj!=1){o.P.4R()}F{1p(o.1X)}}}E 8o(){v.1F>0?ce=v.1F:\'\';o.P.8o();o.P.am()}E aA(){if(!o.Hm&&o.1O){o.U.2Q()}}E bx(){o.P.bx()}E bu(){o.P.bu();o.U.oE()}E am(){o.P.am()}E d5(){o.P.d5()}E 8b(){if(o.P){o.P.8b()}F{tZ=1K(8b,100)}}E wh(1c){uf(1c.1E)}E wd(){if(!kP){B x=3k.10Y()+\'\';if(x!=\'\'&&x!=2b){o.2f=x.2D(\',\');o.2f=o.2f.yu();if(v.uu==0){B y=o.2f.O(\'2z\');if(y>-1){o.2f.pa(y,1)}}V(B i=0;i<o.2f.Q;i++){o.2f[i]=tg(o.2f[i])}kP=H;uf(3k.10X())}}}E uf(x){o.2Z=o.2f.O(tg(x+\'\'));o.R.vh(o.2Z)}G.3I=E(){L{"W":0,"Y":0}};G.3c=E(x){l3=kB(x);if(o.2w>0){ce=2u(o.2w)}g5(l3)};E aq(){B 6C=-1;if(3P){6C=3k.wf()}B x=\'\';if(6C==-1){x="9t"}if(6C==1||6C==3){x="5Z"}if(6C==2){x="9t";if(o.1O){o.R.2Q();o.U.6N()}}if(6C==5){x="9t"}if(6C==0){x="ad"}L x}E 2r(){3k?3k.10Z(o.3M,o.4J):\'\'}E tg(x){B y=x;if(x=="11a"){y="oY"}if(x=="iW"){y="lN"}if(x=="11b"){y="lK"}if(x=="11j"){y="lG"}if(x=="11k"){y="lP"}if(x=="11s"){y="lZ"}if(v.wq==1){y=2I(y)}if(x=="2z"){y=2I("2z")}tA[y]=x;L y}E 1a(){L 3P?3k.11t():0};E 8g(x){3k?3k.11u(x):\'\';bT=x};G.jO=E(){nE()};G.2L=E(){if(3P){3k.mE()}F{if(!9c){9n()}F{}}};G.2Q=E(){if(3P){3k.tG()}};G.cQ=E(){if(3P){aq()==\'5Z\'?3k.tG():3k.mE()}};G.3Z=E(x){3P?3k.wm(x,H):\'\'};G.7C=E(){L K};G.5d=E(){3P?3k.5m():\'\'};G.6U=E(){3P?3k.11v():\'\'};G.47=E(x){3P?3k.zN(x*100):\'\'};G.lv=E(){L aq()==\'5Z\'};G.5A=E(){L K};G.vR=E(x){5J(x)};E 5J(x){if(3P){if(I(o.2f[x])){B y=tA[o.2f[x]];2z=y==\'2z\';B z=1a();3k.11r(y)}}}G.dP=E(x){8g(x)};G.3P=E(){L 3P};G.5P=E(){L aq()};G.1a=E(){L 1a()};G.1o=E(){B x=3P?3k.wc():0;if(I(v.4z)){x=v.4z}L x};G.aO=E(){B x=0;if(3P){x=3k.11q()*3k.wc()}L x};G.51=E(){2r()};G.po=E(){L 1N};G.2z=E(){L v.uu==1?2z:K};G.x6=E(x){g5(x)};E g5(x){1e=x;if(3k){iY=1;3k.11m(x,0)}}G.m7=E(){if(o.1q.2A&&o.1q.8T){G.2L();kp=H}F{if(aq()=="5Z"){G.2Q()}}};G.dD=E(){kp=K};G.os=E(){L H};G.3Y=E(){3P?3k.9b():\'\';3P=K;kP=K;3t{if(1D){ih.2U(1D)}ih.2U(7L)}3b(e){}}};B mV=E(){B 3a=[];B 4n=H;B 8Z;B 8F=-1;G.1F=E(x){dw(x)};E dw(x){if(x!=\'\'){B 1F=0;B uy=H;B ij=\'\';o.2g=x.2D(",");o.3n=[];o.3O=-1;if(sB()&&v.qr==1){if(3l.5D("qp")!=22){ij=3l.5D("qp")}}F{if(o.qz){ij=o.qz}}V(B i=0;i<o.2g.Q;i++){if(o.2g[i].O("#0")==0){o.2g[i]=bO(o.2g[i])}if(o.2g[i].O("#"+v.9L)==0){o.2g[i]=o[o.fd[0]](o.2g[i])}if(o.2g[i].O("[")==0&&o.2g[i].O("]")>1){o.3n[i]=o.2g[i].1x(o.2g[i].O("[")+1,o.2g[i].O("]")-1);o.2g[i]=o.2g[i].1x(o.2g[i].O("]")+1);uy=K}F{o.3n[i]=o.2g[i].1x(o.2g[i].vW("/")+1);o.3n[i]=o.3n[i].1x(0,o.3n[i].vW("."))}if(o.2g[i].O("#0")==0){o.2g[i]=bO(o.2g[i])}if(o.2g[i].O("#"+v.9L)==0){o.2g[i]=o[o.fd[0]](o.2g[i])}}if(o.3n.Q>1&&v.k5==1){o.3n.3d(jr(\'11l\',2I(\'z4\')));o.2g.3d("7U")}if(o.3n.Q>0&&v.9P==1){if(v.11n==1){8Z=0;1F++;o.3n.qS(jr(\'vU\',2I(\'7D\')));o.2g.qS("")}F{o.3n.3d(jr(\'vU\',2I(\'7D\')));o.2g.3d("");8Z=o.3n.Q-1}}V(B i=0;i<o.2g.Q;i++){if(I(v.w0)){if(v.w0==o.3n[i]){1F=i;o.3O=i}}if(ij!=\'\'){if(ij==o.3n[i]){1F=i;o.3O=i}}}if(v.9P==1&&v.iN==0){o.3O=8Z}I(o.R)?o.R.bS():\'\';if(v.iN==1){o.3O=1F;if(v.k5==1&&o.2g[1F]=="7U"){qL(o.3O)}F{iH(o.3O)}}F{if(uy&&o.2g.Q<3){iH(8Z==0?1:0)}v.9P!=1?o.3O=-1:\'\'}}F{3Y()}}E iH(x){if(I(o.2g[x])){if(o.2g[x].O(".")>-1){o.jx=o.2g[x].2D(" or ");o.fv=0;jG(x)}}}E qL(x){3a[x]=4b();3a[x][0]=9e();3a[x][1]=9e();V(B i=0;i<o.2g.Q;i++){1K(iH,i*4F,i)}}E jG(x){B 1e=4s(o.jx[o.fv]);B 4k=dC(1e);8F=x;o.iE=1;4k.cH=E(){o.iE=0;if(G.dN==4&&G.5P==4X){o.8v=H;w5(1e,G.cu,x)}F{if(o.fv+1<o.jx.Q){o.fv++;jG(8F)}F{kG("h0")}}};4k.k4=E(e){o.iE=0;if(o.fv+1<o.jx.Q){o.fv++;jG(8F)}F{kG("h0")}};4k.ah()};E kG(x){1u("2q aN eE or vL p9");if(o.3n[o.3O].O(2I("h0"))==-1){o.3n[o.3O]=o.3n[o.3O]+\' (\'+2I(x)+\')\'}if(v.11o==1&&8F>-1){o.2g[8F]=\'\';o.3n[8F]=\'\'}o.3O=-1;o.8v=K;if(o.11p){o.R.bS();o.R.4v()}F{1K(E(){o.R.bS();o.R.4v()},100)}if(I(o.2q)){o.1Q.2U(o.2q);o.2q=22}}E w5(1e,x,y){if(1e.O(\'.jN\')>-1||1e.O(\'.wS\')>-1||1e.O(\'.j7\')>-1||1e.O(\'.wT\')>-1){B l=o.3O;if(I(3a[l])&&o.2g[l]=="7U"){}F{3a[l]=4b();3a[l][0]=9e();3a[l][1]=9e()}B 3T=9e();3T=x.2D(/\\r|\\n/);B qV=1;B t1=0;B t2=0;B ep=(I(v.wv)?v.wv:0);if(1e.O(\'iy=\')>0){ep=1e.1x(1e.O(\'iy=\')+6)*1}V(i=0;i<3T.Q;i++){if(1e.O(\'.jN\')>-1||1e.O(\'.wT\')>-1){if(3T[i].O(\'-->\')>-1&&3T[i].O(\':\')>-1){t1=il(3T[i].1x(0,3T[i].O(\'-->\')))*1+ep;t1==0?t1=1:\'\';t2=il(3T[i].1x(3T[i].O(\'-->\')+4,12))*1+ep;I(3a[l][0][t1])?\'\':3a[l][0][t1]=\'\';V(B j=t1;j<t2;j++){3a[l][1][j]=t1}qV++}F{3T[i]=4s(3T[i]);if(3T[i]!=\'\'&&3T[i].Q>0&&3T[i]!=qV&&3T[i]!=\'10W\'){3a[l][0][t1]=(3a[l][0][t1]&&3a[l][0][t1]!=\'\'?3a[l][0][t1]+\'<br>\':\'\')+(o.2g[l]=="7U"&&y>0?\'[eg]\':\'\')+3T[i]+(o.2g[l]=="7U"&&y>0?\'[/eg]\':\'\')}}}if(1e.O(\'.wS\')>-1||1e.O(\'.j7\')>-1){if(3T[i].O(\'10V:\')>-1){t1=il(3T[i].1x((1e.O(\'.j7\')>-1?3T[i].O(\'=0\')+3:12),12))*1+ep;t2=il(3T[i].1x((1e.O(\'.j7\')>-1?3T[i].O(\'=0\')+14:23),10))*1+ep;B p=\'\';if(3T[i].O(\'0,,\')>0){p=3T[i].1x(3T[i].O(\'0,,\')+3)}F{if(3T[i].O(\'wR,\')>0){p=3T[i].1x(3T[i].O(\'wR,\')+6)}}if(3a[l][0][t1]!=2b){3a[l][0][t1]+=\'\\n\'+(o.2g[l]=="7U"&&y>0?\'[eg]\':\'\')+p+(o.2g[l]=="7U"&&y>0?\'[/eg]\':\'\')}F{3a[l][0][t1]=p}3a[l][0][t1]=3a[l][0][t1].1Y(/{.*?}/,\'\');3a[l][0][t1]=3a[l][0][t1].1Y(/\\\\\\\\N/,\'<br>\');3a[l][0][t1]=3a[l][0][t1].1Y(/\\\\N/,\'<br>\');V(B j=t1;j<t2;j++){3a[l][1][j]=t1}}}}o.R.bS();o.U.mH();o.R.4v()}F{if(x!=\'\'){if(x.O(\'[\')==0){dw(x)}F{kG("1N")}}F{3Y();o.R.4v()}}}E il(jN){B 1J=jN.2D(\':\');B 6w=0;1J.Q==2?1J.qS("aE"):\'\';1J[0]!=\'aE\'?6w+=1J[0]*rw:\'\';1J[1]!=\'aE\'?6w+=1J[1]*60:\'\';6w+=1J[2].1x(0,2)*1;6w=6w*10+1J[2].1x(3,1)*1;L 6w};E aw(x){if(I(o.2g[x])){1u("ip",x);o.3O=x;if(I(o.3n[x])){if(o.5g&&v.qr==1){3l.7Q("qp",o.3n[x])}F{o.qz=o.3n[x]}}if(o.2B=="1I"&&o.jU==H){o.P.gO(x,"1I")}F{if(o.2B=="2c"&&o.jX==H){o.P.gO(x,"2c")}F{if(o.2g[x]=="7U"){qL(o.3O)}F{iH(o.3O)}}}}};G.aw=E(x){if(I(o.3O)){if(o.3O!=x){if(x==-1||(v.9P==1&&x==8Z)){qK()}F{v.cF=0;o.3O=x;o.8v=H;v.iN=1;aw(x);js("2q",o.3n[x]);o.R.bS()}}F{if(v.9P!=1){qK()}}}};G.8Z=E(){L 8Z};G.1r=E(x){fF(x)};G.C=E(){sK()};G.6z=E(){3Y()};E qK(){js("2q","7D");o.3O=v.9P==1?8Z:-1;v.iN=0;o.8v=K;o.R.bS();o.jU||o.jX?aw(o.3O):\'\';I(o.2q)?o.1Q.2U(o.2q):\'\';o.2q=22}E fF(1a){if(v.cF){1a=1a-v.cF*1}if(o.8v&&I(o.2g)){if(3a){B x=o.3O;if(I(3a[x])){if(I(3a[x][1])){B t=2u(1a*10);if(I(3a[x][1][t])){B y=\'\';y=3a[x][0][3a[x][1][t]];if(!I(o.2q)){o.2q=1M(\'1S\');o.1Q.1H(o.2q);sK()}if(4n){6h(o.2q)}wM();if(v.10D==1){y=10F(y)}if(v.k5==1){y=y.1Y(/\\[eg\\]/gm,\'<6E C="1z:\'+(v.dz.O("#")==-1?\'#\':\'\')+v.dz+\'">\');y=y.1Y(/\\[\\/eg\\]/gm,\'</6E>\')}o.2q.1U=\'<6E C="\'+(v.wD==1?\'2t-1z:\'+zc(v.mb,v.mf)+\';\':\'\')+\'-3C-5F-hm-1l: 10G;1z:\'+(v.dE.O("#")==-1?\'#\':\'\')+v.dE+\';2W:\'+v.sj+\'px \'+v.sj*2+\'px;2Y-6g:\'+v.wy+\'px;2F:0 0;2K-Y:\'+(v.wz?v.wz:1.8)+\';4e-fZ:\'+v.le+\'">\'+4s(y)+\'</6E>\';if(v.wE==1){if(o.2k){J(o.2q,{"4e-3I":((v.jy+((2u(v.ir)-100)*v.jy/100))+"px")})}F{J(o.2q,{"4e-3I":((v.jd+((2u(v.ir)-100)*v.jd/100))+"px")})}}4n=K}F{if(!4n&&I(o.2q)){o.2q.1U=\'\';4n=H;2R(o.2q)}}}}}}}E sK(){if(o.2q){J(o.2q,{"1k":"29","W":"100%","2W-1d":"10%","2W-2j":"10%","1d":0,"1z":v.dE,"1C-6R":"6F","5F-hM":"2Y-5F"});if(v.10H==1&&I(v.sM)){v.sM!=\'\'?J(o.2q,{"4e-h6":v.sM}):\'\'}if(v.la==1){J(o.2q,{"1C-az":"5a 5a 10C 10B"})}F{J(o.2q,{"1C-az":"1L"})}if(v.10x==1){FN(o.2q,\'o.kr\')}F{J(o.2q,{"3S-2H":"1L"})}}}E wM(){if(!o.kr){if(o.R.kd()||v.cZ>v.1y.h){J(o.2q,{"1k":"29","1g":"2z","1d":0,"2M":(v.cZ*1)})}F{J(o.2q,{"1k":"29","1g":"2z","1d":0,"2M":(v.cZ*1+v.1y.h*1)})}}}E 3Y(){o.3O=-1;o.8v=K;o.ma=K;v.2q=22;v.j3=22;o.3a=22;o.2g=22;if(I(o.R)){o.R.bS()}o.3n=22;if(I(o.2q)){o.1Q.2U(o.2q);o.2q=22}o.3O=22;o.8v=K}};B wU=E(){v.10w==1?o.1X.C.4C=100:\'\';J(o.1X,{\'W\':v.s0,\'Y\':v.s7});B x={"2F":v.wG};x=4l(x,\'2F\',\'2F\');if(v.d7.O("2j")>-1){di=1;J(o.1X,{\'1k\':\'29\',\'2j\':x.4i-x.3E})}F{J(o.1X,{\'1k\':\'29\',\'1d\':x.3E-x.4i})}if(v.d7.O("1g")>-1){J(o.1X,{\'1g\':x.7n-x.9q})}if(v.d7.O("2M")>-1){J(o.1X,{\'2M\':x.9q-x.7n})}if(v.d7=="2j"||v.d7=="1d"){J(o.1X,{\'1g\':\'50%\',\'2F-1g\':-v.s7/2+x.7n-x.9q})}if(v.d7=="1g"){J(o.1X,{\'1k\':\'29\',\'1d\':\'50%\',\'2F-1d\':-v.s0/2+x.4i-x.3E})}if(v.vN>0){J(o.1X,{\'2Y-6g\':v.vN})}if(v.sT!=-1){J(o.1X,{\'2t\':v.sT})}if(v.10y==1){B sh=(v.vD?v.vD:10);J(o.1X,{"5F-az":sh/2+"px "+sh/3+"px "+sh+"px 4q(0,0,0,0.3)"})}};B 5t=E(2h){B dY;B 10z;B 3e;B 4D;B 4m;B j9;B eB=0;B bT;B uX=K;B jz;if(2h.me!=2b&&2h.mc!=2b&&2h.1G!=2b&&2h.to!=2b){if(2h.1a==22){if(2h.1G.O("fI")>-1){2h.to==0?2h.1a=0.5:2h.1a=0.2}F{2h.1a=0.15}}dY=vO(2h.8q);if(2h.1G.O("1A")==-1){if(I(o.7B[2h.me])){o.7B[2h.me].rX()}}if(2h.1G.O("1A")==-1){o.7B[2h.me]=G}if(2h.1r==1){2h.mc.1Z("2p",H)}3e=2h.1G.2D(\'|\');4m=7a(2h.to).2D(\'|\');4D=1B 9e();V(B i=0;i<3e.Q;i++){if(!4m[i]){4m[i]=4m[0]}if(3e[i]=="fI"){4D[i]=2h.mc.g("1t")}if(3e[i]=="7w"){4D[i]=2h.mc.C.1t}if(3e[i]=="y"){4D[i]=2h.mc.g("y")}if(3e[i]=="x"){4D[i]=2h.mc.g("x")}if(3e[i]=="1d"){4D[i]=2u(2h.mc.C.1d)}if(3e[i]=="1A"){4D[i]=2h.mc.g("3u")}if(3e[i]=="8M"){4D[i]=2h.mc.c4}if(3e[i]=="hX"){4D[i]=2h.mc.9U}if(3e[i]=="3g"){4D[i]=2h.mc.g("3g")}if(3e[i]=="3u"){4D[i]=2h.mc.g("3u")}if(3e[i]=="W"){4D[i]=2h.mc.g("W")}if(3e[i]=="vA"){4D[i]=2h.mc.2i;4m[i]=2N.7S(4m[i]);2h.me=="10A"?1u("W",2h.me,4D[i],4m[i],2h.mc.2i):\'\'}if(3e[i]=="Y"){4D[i]=2h.mc.g("Y")}if(3e[i]=="vC"){4D[i]=2h.mc.2P}4m[i]=vQ(4m[i]);4D[i]=vQ(4D[i])}bT=2h.1a*2C/dY.Q;j9=dY.Q;if(3e.Q==1&&4D[0]==4m[0]){9H()}F{1K(jB,2N.56(bT))}}E jB(){V(B i=0;i<3e.Q;i++){B 1J=4D[i]+(4m[i]-4D[i])*(dY[eB]?dY[eB]:0);if(3e[i]=="fI"){2h.mc.1Z("1t",1J)}if(3e[i]=="7w"){2h.mc.C.1t=1J}if(3e[i]=="y"){2h.mc.1Z("1g",1J)}if(3e[i]=="x"){2h.mc.1Z("1d",1J)}if(3e[i]=="1d"){2h.mc.C.1d=1J+"px"}if(3e[i]=="1A"){2h.mc.1Z("1A",1J)}if(3e[i]=="3g"){2h.mc.1Z("3g",1J)}if(3e[i]=="3u"){2h.mc.1Z("3u",1J)}if(3e[i]=="8M"){2h.mc.c4=1J}if(3e[i]=="hX"){2h.mc.9U=1J}if(3e[i]=="W"){2h.mc.1Z("W",1J)}if(3e[i]=="vA"){J(2h.mc,{"W":1J})}if(3e[i]=="Y"){2h.mc.1Z("Y",1J)}if(3e[i]=="vC"){J(2h.mc,{"Y":1J})}}eB++;if(!uX){if(eB==j9){9H()}F{jz=1K(jB,2N.56(bT))}}}E 9H(){uX=H;if(2h.1p){if(3e[0]=="7w"||3e[0]=="1d"){1p(2h.mc)}F{2h.mc.1Z("2p",K)}}if(2h.1G.O("1A")==-1){o.7B[2h.me]=22;4p o.7B[2h.me]}};G.rX=E(){3r(jz);9H()};G.y7=E(){3r(jz);eB=j9-1;jB();9H()};E vO(vH){9W(vH){1m"vE":L[0,0.10I,0.10J,1.10R,1.vF,1.10S,1.102,0.10T,0.10U,0.87,0.10Q,0.10P,1.zx,1.10L,1.10K,1.10M,0.10N,0.vJ,0.10O,0.11w,1.11x,1.x8,1.zd,1.x8,1.yW,0.hw,0.hR,0.hR,0.hR,0.hR,1];1l;1m"bF":L[0,0.12e,0.12d,0.12f,0.12g,0.Am,0.zl,0.12h,0.uh,0.12c,0.12b,0.123,0.11Z,0.126,0.zy,0.129,0.12a,0.12i,0.12j,0.95,0.zi,0.12r,0.12s,0.12t,0.99,0.zp,0.zB,0.hw,1];1l;1m"C2":L[0,0.146,0.28,0.12q,0.12p,0.12l,0.12k,0.78,0.zy,0.12m,0.12n,0.zB,1.zx,1.12o,1.zs,1.11Y,1.zw,1.zr,1.zr,1.11X,1.11G,1.11F,1.zs,1.zt,1.11H,1.ze,1.11I,1.11J,1.zd,1.yW];1l;7c:L[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];1l}}};B Fp=E(){B N=h9.11E,ua=h9.11D,rd;B M=ua.lh(/(lm|hi|6r|su|yY)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);B M=ua.lh(/(lm|hi|6r|su|yY|11z|iR)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);if(M&&(rd=ua.lh(/7x\\/([\\.\\d]+)/i))!=22)M[2]=rd[1];B rO=h9.11y;G.aW=M?M[1]:N;G.7x=M?M[2]:h9.11A;G.lm=G.aW=="11B";G.p8=G.aW=="yR 9.0";G.ie=G.aW=="yR"||G.aW=="11C"||G.aW=="11K";G.iR=ua.bG(/(iR)\\/?\\s*/i)>-1;G.su=G.aW=="11L";G.6r=G.aW=="11T";G.hi=1V.hi;G.fO=ua.bG("11U NT")>-1;G.5n=(ua.bG(/(9j|h4|11V)\\/?\\s*/i)>-1)||(h9.11W===\'11S\'&&rO>1);G.tv=v.za!=1&&ua.bG(/(11R|11N|LG zb|11M|11O|TV 11Q)\\/?\\s*/i)>-1;G.lg=v.za!=1&&ua.bG(/(LG zb)\\/?\\s*/i)>-1;G.9j=ua.bG(/(9j)\\/?\\s*/i)>-1;G.h4=G.5n&&!G.9j;G.3C=\'10v\'in 1P.m6.C;if(ua.bG(/(8T)\\/?\\s*/i)>-1){rO>0?G.8T=H:G.tv=H}G.2A=(G.5n||G.8T||(ua.bG(/(10u|Zb|lm kD)\\/?\\s*/i)>-1))&&!G.tv;G.rD=G.6r||G.hi;G.ug=!G.2A;G.sn=G.2A||G.tv;G.2k=K;if(G.5n){G.Z9=4u(ua.1x(ua.O(\'OS \')+3,4).1Y(\'6Y\',\'.\'));if(G.h4&&!\'Ze\'in 1V){G.2A=G.5n=K;G.tv=H}}if(o.1Q.o4||o.1Q.o2||o.1Q.nT||o.1Q.nX||o.1Q.nL){G.2k=H}};E 8O(44,6A){V(B s in 6A){if(26(6A[s])==\'3L\'){if(s=="2H"||s=="3p"){44[s]=6A[s]}F{V(B s2 in 6A[s]){if(26(44[s])!=\'3L\'){44[s]={}}if(26(6A[s][s2])==\'3L\'){V(B s3 in 6A[s][s2]){if(26(44[s][s2])!=\'3L\'){44[s][s2]={}}if(26(6A[s][s2][s3])==\'3L\'){V(B s4 in 6A[s][s2][s3]){if(26(44[s][s2][s3])!=\'3L\'){44[s][s2][s3]={}}44[s][s2][s3][s4]=6A[s][s2][s3][s4];if(s3==\'2W\'||s3==\'2F\'){44[s][s2][s3][s4]=2u(44[s][s2][s3][s4])}}}F{44[s][s2][s3]=6A[s][s2][s3];if(s2==\'2W\'||s2==\'2F\'){44[s][s2][s3]=2u(44[s][s2][s3])}}}}F{44[s][s2]=6A[s][s2];if(s==\'2W\'||s==\'2F\'){44[s][s2]=2u(44[s][s2])}}}}}F{if(s.O("Z8")>0&&4s(6A[s])===""){}F{44[s]=s5(s,6A[s])}}}L 44};B s5=E(1f,4S){if(26(4S)==\'4Z\'){4S=4s(4S);if(1f.O("1z")>-1&&4S.O("#")!=0&&4S!=-1){4S="#"+4S}}L 4S};E zc(du,1t){L\'4q(\'+(du=du.1Y(\'#\',\'\')).lh(1B Z7(\'(.{\'+du.Q/3+\'})\',\'g\')).Z3(E(l){L 2u(du.Q%2?l+l:l,16)}).8L(1t||1).l0(\',\')+\')\'}E sB(){3t{B 5g=1V[\'3l\'],x=\'Z2\';5g.7Q(x,x);5g.oa(x);L H}3b(e){L K}};E tF(9T){if(9T){if(o.7B[9T]){o.7B[9T].rX()}}};B 2I=E(x){B y=x;if(y){y=x.5V(0).Z4()+x.6x(1);if(y.O("6Y")>-1){y=y.1Y(/6Y/ig," ")}}B en={"of":"of","bY":"bY","Z6":"z9 on z8","Zf":"z9 1N on z8","z4":"Zg at Zo","7r":"kg","Zp":"No","se":"z6","lb":"Zq","Zr":"Zn","cZ":"Zm 2F","le":"Zi fZ","la":"Zh","mf":"a0 1t","mb":"a0 1z","ir":"rH 3I","dE":"rH 1z","dz":"rH 1z 2","cF":"4O iy","rI":"Zj","e4":"Zk","m9":"Zl to Z1","oY":"Z0","lN":"YH","lK":"YG","lG":"zD","Hd":"zD","lP":"HD","lZ":"YI HD","YJ":"YK HD","qc":"YF HD","oS":"YE HD 4K","YB":"Ad","YC":"Go to YD YL\'s YM","6y":"YW","8h":"YV","2k":"YX 2k","Bn":"YY 2k"};if(I(en[x])){y=en[x]}if(I(o[\'rR\'+v.bE])){if(I(o[\'rR\'+v.bE][x])){y=o[\'rR\'+v.bE][x]}}if(v.rP){if(v.rP[x]){y=v.rP[x]}}L y};B a6=E(x,y,z){if(!I(o.g4[y])&&v.o8!=1){B t=o.fB?o.fB:(v.1R?v.1R:\'\');I(v.bj)?t=v.bj:\'\';if(v.A9[x]==1&&v.xZ==1&&I(v.iD)){if(x=="9o"){7o(Ab,YZ)}if(I(1V["lT"+v.iD])){1V["lT"+v.iD].Aj(\'sN\'+x,{1R:t});1u("A5",\'sN\'+x)}F{1u("A5 YU 1N")}}if(v.A3[x]==1){if(v.ga==1){if(v.BP==1){if(1V.Aa){Aa(\'1c\',\'sN\'+x,{\'bj\':t})}}F{if(1V.ga){B sO={BN:\'n0\',BM:y};if(t!=\'\'){sO.BO=t}ga(\'dl.ah\',\'1c\',sO)}}}}}z?o.g4[y]=H:\'\'};E Ab(){if(I(1V["lT"+v.iD])){1V["lT"+v.iD].Aj(\'YS\')}};B kB=E(1e){B x=\'\';1e=1e.1Y("v=","{=");if(1e.O(\'jb.be/\')>-1){x=1e.1x(1e.O(".be/")+4);x.1Y("/","")}F{x=1e.2D(/(jb.be\\/|v\\/|7s\\/|YO\\?|4f.YN\\/dl\\/[^#]*#([^\\/]*?\\/)*)\\??{?=?([^#\\&\\?]*)/)[3]}if(x!=\'\'){if(x.O("?t=")>0){v.1F=x.1x(x.O("?t=")+3);B h=0;B m=0;B s=0;if(v.1F.O("h")>0){h=v.1F.1x(0,v.1F.O("h"));v.1F=v.1F.1x(v.1F.O("h")+1)}if(v.1F.O("m")>0){m=v.1F.1x(0,v.1F.O("m"));v.1F=v.1F.1x(v.1F.O("m")+1)}if(v.1F.O("s")>0){s=v.1F.1x(0,v.1F.O("s"));v.1F=v.1F.1x(v.1F.O("s")+1)}if(h>0||m>0||s>0){v.1F=h*rw+m*60+s*1}x=x.1x(0,x.O("?t="))}}L x};B js=E(x,y,li){if(x=="9o"){o.9o=H}if(v.kW==1&&o.9o){if(v.YP==1||li==1){rC(x,y)}F{if(y!==2b){if(26(y)==\'3L\'){y=4P.Ac(y)}}if(26(v.2H)==\'4Z\'){if(v.2H.O("{")==0){3t{v.2H=v.2H.1Y(/\\\'/ig,\'"\');v.2H=4P.6l(v.2H)}3b(e){da.1u(e)}}}if(26(v.2H)==\'3L\'){if(I(v.2H[x])||I(v.2H[\'ea\'])){B z=x;if(!I(v.2H[x])&&I(v.2H[\'ea\'])){z=\'ea\'}if(x.O("7q")==0){if(I(v.2H[\'2l\'])){z=\'2l\'}}3t{if(y!==2b){2o(v.2H[z]+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2o(v.2H[z]+"(\'"+x+"\',\'"+v.id+"\')")}}3b(e){1u("2H",e,x)}}}F{if(v.2H==\'\'){v.2H="Ak"}3t{if(y!==2b){2o(v.2H+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2o(v.2H+"(\'"+x+"\',\'"+v.id+"\')")}}3b(e){1u("2H",e,x,y)}}}}if(v.Cl==1&&li!==1){B zv={1c:x,1a:o.P?(x=="46"?o.yd:o.P.1a()):0};if(y!=2b){zv["1E"]=y}if(x=="1o"||x=="1a"){zv["1o"]=o.P.1o()}if(x=="1T"||x=="aP"){zv["1T"]=v.1T}if(x=="1B"){zv["id"]=6M("zV")}1V.b5.Ae(zv,\'*\');B z=x;x=="9o"||x=="1F"||x=="4z"?z=x+"ed":\'\';x=="1O"?z="YQ":\'\';x=="5r"?z="9t":\'\';x=="5m"?z="3W":\'\';x=="aP"?z="YR":\'\';x=="46"?z="Zs":\'\';x=="Zt"?z="10d":\'\';zv["1c"]=z;if(z!=\'\'&&z!=x){zv=4P.6l(4P.Ac(zv));1V.b5.Ae(zv,\'*\')}}};B rC=E(x,y){B ev=1P.10c(\'7F\');if(y!==2b){ev.a5=y}ev.10e(x,H,H);o.1D.10f(ev)};G.1c=E(x,y){o.2H[x]=y};B 2X=E(x,y,S){L 6M(x,y,S)};G.2X=E(x,y,S){L 6M(x,y,S)};E 6M(x,y,S){if(I(o.U)){if(o.qs==1){L}if(S){if(26(S)==\'4Z\'){if(S.O("id:")==0){S=o.R.qI(S.1x(3),"5z");if(S){if(x=="jP"&&y=="10g"){S.gc()}}}}}if(x=="1O"){if(I(y)){if(26(y)==\'4Z\'){y=y.1Y(/(\\r\\n|\\n|\\r)/gm,"");B 2w=-1;if(y.O("[46:")>-1&&y.O("]")==y.Q-1){2w=y.1x(y.O("[46:")+6,y.Q-1);o.2w=2w=2u(2w.1x(0,2w.Q-1));y=y.1x(0,y.O("[46:"))}if(y.O("#"+v.9L)==0){y=o[o.fd[0]](y)}if(y.O("#"+v.dy)==0&&y.O(v.hZ)>0){y=o[o.fd[1]](y)}if(y.O("#0")==0){y=bO(y)}if(v.dW==1){y=dW(y)}if(y.O(".7G")==y.Q-4){B 4k=dC(y);4k.cH=E(){if(G.dN==4&&G.5P==4X){3t{6M(\'1O\',4P.6l(G.cu))}3b(e){}}};4k.ah();L}if(y.O("id:")==0&&I(o.1v)){B z=qR(y);if(I(o.1v[z])){o.R.DR(z);2w>-1?o.2w=2w:\'\';L H}F{L K}}if(y.O("10b:")==0){B z=y.1x(10);if(o.2B=="4f"){o.P.x5(z);L H}F{y=\'//jb.be/\'+z}}}o.U.ds(y)}F{o.U.2L()}}if(x=="3p"&&I(y)){o.kT=H;if(y.O("id:")==0&&I(o.1v)){B z=qR(y);if(I(o.1v[z])){o.R.v5(z);2w>-1?o.2w=2w:\'\';L H}F{L K}}F{o.U.ds(y,1);o.R.4t(0,0)}}F{26 zZ==\'E\'?zZ():\'\'}if(x=="4a"&&I(y)){o.kT=H;o.U.ds(y,1,1)}if(x=="5r"){if(o.1O){o.U.2Q();o.U.mH()}}if(x=="cl"&&I(y)){o.1F&&o.7k?o.7k.zK(y):\'\'}if(x.O("10a")==0){if(o.2l){o.2l.ZW(x.1x(6),y)}}if(x=="4a"){o.P.nK()}if(x=="8x"){o.8x.8D();o.8x=1B ux();if(v.wI==1){o.8x.7G(v.wH)}F{o.8x.7G("ZV 9w")}if(v.wJ==1&&I(v.wK)){o.ex=1B wL()}}if(x=="9X"){o.R.8U();o.R.B1("tu")}if(x=="qm"){o.1O?o.U.2Q():o.U.2L()}if(x=="2v"){v.4a=0;v.4d=0;o.P.mg();o.U.as()}if(x=="ae"){o.1a=o.P.1a();o.U.hv()}if(x=="6s"){if(v.sy){if(v.sy.on==1&&v.sy.ZX==1){o.U.lR()}}}if(x=="3q"){o.R.AD()}if(x=="ZY"&&I(y)){if(v.2l==1&&o.p!=\'\'){B sv=4P.6l(dm(o.p));V(B l in sv){if(sv.2G(l)){if(I(sv[l].id)){if(y==sv[l].id){v.8K=\'ZZ\'+(I(sv[l][\'sz\'])?\'sz\'+sv[l][\'sz\']:\'\')+y+\'6Y\'+sv[l].6T;v.ub=H;o.U.xM("8K")}}}}}}if(x=="10h"){26 zM=="E"?zM():\'\'}if(x=="cE"&&y){v.cE=y;o.3m?o.3m.10i():\'\'}if(x=="5m"){o.U.5d()}if(x=="5C"){if(I(y)){o.U.8g(y)}F{L o.4L[o.8X]}}if(x=="gy"){L o.4L}if(x=="aP"){o.U.6U()}if(x=="j3"){if(I(y)){v[x]=y;o.U.fT()}}if(x=="bb"){L o.2f}if(x=="yJ"){L o.ab?H:K}if(x=="8h"){L o.P?o.P.5A():K}if(x=="Cj"){L v.9P==1?o.3n.6x(0,-1):o.3n}if(x=="9i"){L o.62}if(x=="1T"||x=="zN"){if(I(y)){if(y>=0&&y<=1){o.U.47(y)}}L o.3W?0:v.1T}if(x=="3W"){L I(o.3W)?o.3W:K}if(x=="10q"){o.R?o.R.DP(y):\'\'}if(x=="cY"){y<2?y=\'\':\'\';if(o[\'u\'+y]!=\'\'){B x2=4P.6l(dm(o[\'u\'+y]));B v2=[];V(B l in v){if(v.2G(l)){if(l.O("8R")==0){v[l]=22}}}if(26 x2=="3L"){V(B k in x2){if(x2.2G(k)){if(k.O("8R")==0){v[k]=x2[k]}if(k=="1y"){v2[k]=x2[k]}}}}v=8O(v,v2);B qG=K;if(o.R.bp()){o.R.7l();qG=H}B qD=K;if(o.R.cS()){o.R.bh();qD=H}o.R.3Y();o.R=22;o.R=1B rb();if(o.P.5P()=="5Z"){o.R.2L()}o.R.47(v.1T);if(I(v.1R)){9N(v.1R)}if(qG){o.R.7l()}if(qD){o.R.bh()}if(o.2k){o.R.7M()}if(1f!=\'Dt\'){o.R.4t(o.P.1a(),o.P.1o())}2r()}}if(x=="kE"){L v.kE}if(x=="51"){o.R.51(H)}if(x=="46"){if(I(y)){if(26 y=="4Z"){if(y.O("%")>-1){y=2u(y.1x(0,y.O("%")));y=o.P.1o()*y/100}F{B l7=o.P.1a();if(o.3m&&!o.1F){if(!o.3m.jZ){B f=o.3m.9D();if(f.t&&f.d){l7=f.t;o.3m.jZ=H}}}if(y.O("+")==0){y=l7+2u(y.1x(1))}F{if(y.O("-")==0){y=l7-2u(y.1x(1))}}}}y=y*1;y<0?y=0:\'\';if(o.P.1o()>0){y>o.P.1o()?y=0:\'\'}if(!I(o.2l)&&!I(o.6i)&&o.P.1o()>0){o.2w=2b;o.U.3Z(y,H);o.U.pD()}F{o.2w=y}}}if(x=="2k"){!o.2k?o.U.7M():\'\'}if(x=="q4"){o.2k?o.U.8l():\'\'}if(x=="10s"){L o.2k}if(x=="3I"){L o.3M+\'/\'+o.4J}if(x=="10t"){if(I(o.eb)){o.eb.Do()}}if(x=="Bh"||x=="10o"){if(I(o.eb)){o.eb.Un()}}if(x=="1a"){B l5=o.P?o.P.1a():0;if(o.3m&&v.bL==1&&!o.1F&&l5==0){B f=o.3m.9D();if(f.t){l5=f.t}}L l5}if(x=="10k"){if(o.bX){6M("1O","id:"+o.bX)}if(o.zI){6M("46",o.zI);6M("1O")}}if(x=="1o"){L o.P?o.P.1o():0}if(x=="2S"){if(y){v.2S=y;o.R.it()}}if(x=="59"){if(I(y)){if(S){v.hd=a9(v.hd,y,S);if(o.2f.Q==2){o.U.5J(v.hd)}}F{o.U.5J(y)}}F{L o.P?o.P.pE():0}}if(x=="6y"){if(I(y)){if(S){v.qC=a9(v.qC,y,S);if(o.62.Q==2){o.U.cO(v.qC)}}F{o.U.cO(y)}}F{L o.P?o.P.pG():0}}if(x=="zE"){L o.2B=="4f"}if(x=="AG"){if(o.5v>0){o.k8=o.5v}o.U.ds(v.3p)}if(x=="5Z"){L o.1O}if(x=="lc"){L o.1F}if(x=="1q"){L o.1q[y]}if(x=="zF"){o.qs!=1?o.P.pu():\'\'}if(x=="id"){L v.id}if(x=="1u"){v.1u=y}if(x=="kW"){v.kW=y}if(x=="2x"){o.P.wk()}if(x=="10j"){o.P.wt();if(S){o.qQ=a9(o.qQ,y,S)}}if(x=="5h"){o.P.ec()}if(x=="8G"){o.P.c9()}if(x=="3D"&&v.o8!=1){da.1u(3D)}if(x=="2q"){v.2q=y;if(I(y)){if(y.6H().Q<3&&o.5E){o.5E.aw(y*1)}F{o.U.ip(y)}}}if(x=="bA"){if(I(o.bA)){if(I(y)){o.bA.2X(y)}F{L o.bA.10l()}}}if(x=="rl"){if(o.zG){L o.zG}F{L K}}if(x=="5F"){B 5F=1M("1S");5F.id=y;5F.C.4C=we;o.1Q.1H(5F)}if(x=="AK"){if(o.5M){B 5I=1M("5I");o.1D.1H(5I);B 9u=5I.zH(\'2d\');B 3I=o.P.3I();5I.W=3I.W>0?3I.W:o.8P;5I.Y=3I.Y>0?3I.Y:o.aT;9u.qg(o.P.7C(),0,0,5I.W,5I.Y);59=2;B gp=1P.1M("5I");gp.W=5I.W*59;gp.Y=5I.Y*59;B fY=gp.zH("2d");fY.qg(o.P.7C(),0,0,5I.W*59,5I.Y*59);if(v.10n==1&&I(v.qk)){!I(v.gE)?v.gE=20:\'\';!I(v.qy)?v.qy="3K":\'\';fY.4e=v.gE+"px ZU, ZT";fY.ZC="#"+v.qy;fY.ZB((v.qk=="hF"?o.hF:v.qk),v.gE,5I.Y*59-v.gE-5)}9u.qg(gp,0,0,5I.W,5I.Y);B 41;3t{41=5I.ZD("aU/ZE")}3b(e){da.1u(e.9w);L K}L 41}F{L K}}if(x=="2c"){L o.2B==x?o.P.ji():2b}if(x=="1I"){L o.2B==x?o.P.jo():2b}if(x=="1X"){if(!o.1O){o.P.9l(y);L H}F{L K}}if(x=="1A"){if(y){o.P.1A(y)}F{L[o.3H.x,o.3H.y,o.4j.C.1d,o.4j.C.1g]}}if(x=="1R"){if(I(y)){I(y)?v.1R=y:\'\';o.U.9N(\'1R\');L H}F{L v.1R}}if(x=="ZF"){o.U.yt()}if(x=="1b"){if(y){if(26(y)==\'3L\'){3t{o.U.6f(y);L H}3b(e){L K}}F{if(y.O(".7G")==y.Q-4||y.O(".7G?")>0){B 4k=dC(y);4k.cH=E(){if(G.dN==4&&G.5P==4X){3t{6M(\'1b\',4P.6l(G.cu))}3b(e){}}};4k.ah();L H}}}}if(x=="8e"){o.R.cN()}if(x=="e4"){o.R.es()}if(x=="mi"){if(I(y)&&I(o.1v)){!o.1O?v.4d=0:\'\';V(B j in o.1v){if(o.1v.2G(j)){if(o.1v[j].dg==y){y=j}}}if(I(o.1v[y])){o.R.v5(y);L H}F{L K}}}if(x=="ZA"){B 1J=[];if(I(o.1v)){V(B j in o.1v){if(o.1v[j].4N&&o.1v[j].pc==-1){1J.3d({1R:o.1v[j].1R,id:o.1v[j].id})}}}L 1J}if(x=="zV"){if(o.3N){L o.1v[o.3N].dg?o.1v[o.3N].dg:o.3N}}if(x=="Zz"){if(o.1v){L 4b.3R(o.1v).Q}F{L-1}}if(x=="nj"){if(I(o.nj)){L o.nj}}if(x=="Zv"){o.R.kj()}if(x=="Zu"){if(o.2l){L H}F{L K}}if(x=="Zw"){if(o.2l){L zQ()}F{L K}}if(x=="Zx"){if(o.2l){L o.2l.5r()}F{L K}}if(x=="Zy"){if(o.2l){L o.2l.yF()}F{L K}}if(x=="6b"){v.6b=a9(v.6b,y,S);o.P.6b()}if(x=="b9"){if(I(S)){v.b9=a9(v.b9,y,S)}F{if(I(y)){v.b9=y}F{L v.b9}}}if(x=="5e"){if(I(S)){v.5e=a9(v.5e,y,S)}F{if(I(y)){v.5e=y}F{L v.5e}}}if(x=="sk"||x=="kh"){B z="e3";x=="kh"?z="ki":"";if(I(S)){v.1b[z]=a9(v.1b[z],y,S)}F{if(I(y)){y==\'0/1\'?y=1-v.1b[z]:\'\';v.1b[z]=y}F{L v.1b[z]}}}if(x=="hd"){if(o.2f.Q==2){v.hd=o.2f[o.2Z];v.hd=a9(v.hd,y,S);if(o.2f[0]==v.hd){o.U.5J(0)}F{o.U.5J(1)}}}if(x=="v"&&y){if(y.O(\'3p\')==0||y.O(\'bk\')==0){L}L v[y]}if(x.O("g9:")==0){B xx=x.1x(7);if(26(y)==\'3L\'&&26(v[xx])==\'3L\'){V(B yy in y){if(y.2G(yy)){v[xx][yy]=y[yy]}}}F{if(x.O(\'Ch\')==-1){v[xx]=y}}L H}if(x=="ZG"){L o.P?o.P.bo():\'\'}if(x=="ZH"){L o.7x+\' \'+o.i8}if(x=="i8"){L o.i8}if(x=="pZ"){L o.pZ}if(x=="pt"){L o.pt}if(x=="5B"){L o.5B}if(x=="ZP"){L o.2l?o.zS:2b}if(x=="9b"){o.U.o6();o.qs=1;v.2a.on=0;o.1D.1U=\'\'}}F{L K}};E a9(x,y,S){B z=4s(y)+\'\';if(y.O("/")>0){B y2=y.2D("/");if(y2.Q==2){if(x==4s(y2[0])){z=4s(y2[1]);if(S){S.fo(1)}}F{z=4s(y2[0]);if(S){S.fo(0)}}}}L z}E dC(x){B 4k=1B xA();4k.5S(\'xi\',x,H);L 4k}E qR(y){B z=y.1x(3);if(o.1v){V(B j in o.1v){if(o.1v.2G(j)){if(o.1v[j].dg==z){z=j}}}}L z}E zQ(){B x;if(o.2l){if(o.2l.vj()){x=o.2l}}if(!x&&o.6i){x=o.6i}if(x){B y={is:o.4M,1q:x.a5("ZQ"),7x:x.a5("7x"),ZR:x.a5("yO"),1e:o.xL+(x.a5("zR")?x.a5("12w")+x.a5("zR"):\'\'),1G:x.a5("ZO"),3p:x.a5("3p"),1a:o.P.1a(),1T:x.ZN(),id:o.zS};if(o.4M=="8K"){y.ZJ=o.ZI}L y}}B 1M=E(x){B y=x;x==\'1S\'||x==\'sX\'?y=\'6Z\':\'\';B z=1P.1M(y);if(x==\'sX\'){J(z,{"6e":"3S","2p":"4c"})}L z};B 1u=E(a,b,c,d,e,f,g){if(v.1u==1||v.ri==1){B x=a+(b!=2b?" "+b:"")+(c!=2b?" "+c:"")+(d!=2b?" "+d:"")+(e!=2b?" "+e:"")+(f!=2b?" "+f:"")+(g!=2b?" "+g:"");da.1u("zT"+(v.uH==1?"2":"")+": "+x);if(v.ri==1&&I(1P.8d("yP"))){1P.8d("yP").1U+=x+\'<br/>\'}}};B Bt=E(){if(v.uz==1&&I(v.ro)&&v.ro!=\'\'){B x=1P.1M(\'fu\');x.xI=\'ZK\';x.8B=\'8r://uz.ZL.7j/J?h6=\'+v.ro.1Y(/,/ig,"|").1Y(/ /ig,"+");1P.ZM.1H(x)}};B D5=E(1S,4g){B x=["4I","eS","kX","gS","cL"];V(B y=0;y<x.Q;y++){B z=1S.st("2e "+x[y]);if(z.Q>0){V(B y2=0;y2<z.Q;y2++){z[y2].C.3j=4g}}}};B 4O=E(1a){1a<0?1a=0:\'\';B xC=o.P.1o>=bn?H:K;B xG=o.P.1o>=rw?H:K;B 6c=2N.7S(1a/60);B 7f=2N.7S(1a-6c*60);B 7y=2N.7S(6c/60);B g3=2N.7S(7y/24);6c=6c-7y*60;if(g3>0){7y=7y-g3*24}if(v.iV==1&&o.P.5A()){B d=1B 6p();L 7a(1B 6p(d.9a()+1a*2C).xE())}F{L 7a((g3>0?g3+\':\':\'\')+(7y>0||xG?7y+\':\':\'\')+((7y>0||xC)&&6c<10?\'0\':\'\')+6c+\':\'+(7f<10?\'0\':\'\')+7f)}};B ik=E(x){B 7f=2N.7S(x);B 6c=2N.7S(7f/60);B 7y=2N.7S(6c/60);6c=2N.7S(6c%60);7f=2N.7S(7f%60);7y>0&&6c<10?6c="0"+6c:"";7f=7f>=0?((7f>=10)?7f:"0"+7f):"aE";B 6w=(7y>0?7y+":":"")+(6c>=0?6c:"0")+":"+7f;if(v.iV==1&&o.P.5A()){B d=1B 6p();L 7a(1B 6p(d.9a()+x*2C).xE())}F{L 6w}};B 12v=E(){L xF((1V.9k!=1V.b5.9k)?1P.uw:1P.9k.8B)};B mW=E(x,y,z){B t;if(!xV(x)&&y){t=1P.1M(\'sW\');y=="13c"?y=x:\'\';t.3c=y.O(\'//\')==-1?\'//\'+y:y;t.154=1;if(z){t.8t=z}B s=1P.cM(\'sW\')[0];s.5k.qT(t,s)}L t};B xV=E(y){B x=K;B iU=1P.cM(\'sW\');V(B i=0;i<iU.Q;i++){if(iU[i].3c.O(y)>-1){x=H}}L x};B kI=E(x,y){x=x.1Y(\'#\',\'\');B r=2u(x.Q==3?x.6x(0,1).hx(2):x.6x(0,2),16);B g=2u(x.Q==3?x.6x(1,2).hx(2):x.6x(2,4),16);B b=2u(x.Q==3?x.6x(2,3).hx(2):x.6x(4,6),16);if(y){L\'4q(\'+r+\', \'+g+\', \'+b+\', \'+y+\')\'}F{L\'153(\'+r+\', \'+g+\', \'+b+\')\'}};B J=E(e,o){if(I(e)){V(B 1f in o){if(o.2G(1f)){if(o[1f]!=\'155\'&&o[1f]!=2b){if(26 o[1f]==\'156\'&&1f!=\'1t\'&&1f!=\'4C\'){o[1f]+=\'px\'}if((1f.O("1z")>-1||1f.O("De")>-1)&&o[1f].O("#")==-1&&o[1f].O("4q")==-1){o[1f]=\'#\'+o[1f]}if(1f=="2J"){e.C[\'-ms-\'+1f]=o[1f];e.C[\'-j4-\'+1f]=o[1f];e.C[\'-3C-\'+1f]=o[1f];e.C[\'-o-\'+1f]=o[1f]}if(1f=="sY"){if(o[1f].O(" ")>-1){o[1f]=\'"\'+o[1f]+\'"\'}}if(1f=="5F-hM"){e.C.157(1f,o[1f],\'5o\')}F{e.C[1f]=o[1f]}}}}}};B CR=E(x,4g,b1,b2){B y=ib(b1,1)*1;B z=ib(b2,1)*1;J(x,{"2t":"152-2O-5l(-151,"+4g+","+4g+" "+y+"px,4q(0,0,0,0),"+y+"px,4q(0,0,0,0) "+(y+z)+"px)"})};B gX=E(c){L c.1x(0,1)!=\'#\'?c="#"+c:c};B E6=E(x,1z,y){!1z?1z=\'#fx\':\'\';1z=gX(1z);B r=7b(mt,14V);x=x.1Y(/\\(14U\\)/g,r);x=x.1Y(/\\(1z\\)/g,1z);B xR=x.1x(0,x.O(\'|||\'));B vp=x.1x(x.O(\'|||\')+3);B 9K=\'\';if(o.1q.3C){9K=vp.1Y(/5O:/g,"-3C-5O:");9K=9K.1Y(/5O-/g,"-3C-5O-");9K=9K.1Y(/@xQ/g,"@-3C-xQ");9K=9K.1Y(/2J/g,"-3C-2J")}y.1U=xR;tX(9K+vp)};B tX=E(x){if(o.J){if(o.J.xB){o.J.xB.14W=x}F{o.J.1H(1P.Fl(x))}}};B 4k=E(y,z){B x=1B xA();x.5S(\'xi\',y,H);x.cH=z;x.ah()};B 14X=E(x){if(x){V(B i=0;i<5;i++){if(x.14Z=="14Y"){1l}F{if(x.xj){x=x.xj}}}}L x};B 8a=E(z){B 8a=1P.1M("41");if(o.jk.O(z)>-1){o.jk.3d(z);if(z.O("?")>0){z=z+\'&\'+2N.7b()}F{z=z+\'?\'+2N.7b()}}F{o.jk.3d(z)}8a.5N(\'3c\',z);8a.5N(\'Y\',\'5a\');8a.5N(\'W\',\'5a\')};B 4E=E(e,o){V(B 1f in o){if(o.2G(1f)){e.5N(1f,o[1f])}}};B 9b=E(e){if(e){3t{e.5k.2U(e);e=22}3b(e){}}};B 7b=E(7v,5R){L 2N.7S(158.Q>1?(5R-7v+1)*2N.7b()+7v:(7v+1)*2N.7b())};B k6=E(){L 2N.7b().6H(36).159(2,12)};B uY=E(x,y){x=4b.3R(x).15i(E(44,1f){if(1f!=y){44[1f]=x[1f]}L 44},{});L x};B 4s=E(x){if(26 x=="4Z"){L x.1Y(/^\\s+|\\s+$/gm,\'\')}F{L x}};B 15h=E(x,n){if(n==0){L"#0"+aY.e(x)}if(n==-1){L aY.e(x)}if(n==1){L"#1"+uG(aY.e(x),1)}};B uD=E(x){if(v[x]!=""){if(26 v[x]!="4Z"){o[x+\'o\']=v[x]}F{if(v[x].O("[{")==0){3t{v[x]=v[x].1Y(/7Z\'qt/ig,\'"\');o[x+\'o\']=2o(v[x])}3b(e){}}}}};B 5x=E(x){L 7a.uS(x)};B dm=E(x){if(x.1x(0,2)=="#1"){L aY.d(uG(x.1x(2),-1))}F if(x.1x(0,2)=="#0"){L aY.d(x.1x(2))}F{L x}};B ui=E(x){if(x){if(x.O(\'3f\')==-1&&x.O(\'.\')==-1&&x.Q>100){x=\'1E:aU/sr;i2,\'+x}}L x};B 1p=E(x){x.C.5B="3i"};B 1r=E(x){x.C.5B="3V"};B 2R=E(x){x?x.C.2p="1L":\'\'};B 6h=E(x){x?x.C.2p="4c":\'\'};B 5T=E(x){L x?x.C.5B!="3i"&&x.C.2p!="1L":K};B 4Q=E(s){if(26 s=="4Z"){if(s.O("px")>0){s=s.1x(0,s.O("px"))}}L 2u(s)};B 3i=E(x){L x.C.2p=="1L"};B nb=E(du){B je=2u(du,16);B r=(je>>16)&uN;B g=(je>>8)&uN;B b=je&uN;L r+","+g+","+b};B 4l=E(o,x,y){o[x+\'1g\']=0;o[x+\'2j\']=0;o[x+\'2M\']=0;o[x+\'1d\']=0;if(I(o[y])){B z=o[y].2D(" ");if(z.Q==4){o[x+\'1g\']=z[0]?4u(z[0]):0;o[x+\'2j\']=z[1]?4u(z[1]):0;o[x+\'2M\']=z[2]?4u(z[2]):0;o[x+\'1d\']=z[3]?4u(z[3]):0}}L o};B 15j=E(x){if(x){x=x.1Y(/ /ig,\'px \')}L x+\'px\'};B jr=E(x,y){L v[x]&&v[x]!=\'\'?v[x]:y};B ek=7a.uS(65,66,67,68,69,70,71,72,73,74,75,76,77,97,98,99,100,101,102,103,104,105,106,107,108,109,78,79,80,81,82,83,84,85,86,87,88,89,90,110,111,112,113,114,115,116,117,118,119,120,121,122);B aY={9O:ek+"15m+/=",e:E(e){B t="";B n,r,i,s,o,u,a;B f=0;e=aY.xb(e);j6(f<e.Q){n=e.av(f++);r=e.av(f++);i=e.av(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(oe(r)){u=a=64}F if(oe(i)){a=64}t=t+G.9O.5V(s)+G.9O.5V(o)+G.9O.5V(u)+G.9O.5V(a)}L t},d:E(e){B t="";B n,r,i;B s,o,u,a;B f=0;e=e.1Y(/[^A-Za-z0-9\\+\\/\\=]/g,"");j6(f<e.Q){s=G.9O.O(e.5V(f++));o=G.9O.O(e.5V(f++));u=G.9O.O(e.5V(f++));a=G.9O.O(e.5V(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+5x(n);if(u!=64){t=t+5x(r)}if(a!=64){t=t+5x(i)}}t=aY.xc(t);L t},xb:E(e){e=e.1Y(/\\r\\n/g,"\\n");B t="";V(B n=0;n<e.Q;n++){B r=e.av(n);if(r<128){t+=5x(r)}F if(r>127&&r<15U){t+=5x(r>>6|15Q);t+=5x(r&63|128)}F{t+=5x(r>>12|xm);t+=5x(r>>6&63|128);t+=5x(r&63|128)}}L t},xc:E(e){B t="";B n=0;B r=0;B c1=0;B c2=0;j6(n<e.Q){r=e.av(n);if(r<128){t+=5x(r);n++}F if(r>15L&&r<xm){c2=e.av(n+1);t+=5x((r&31)<<6|c2&63);n+=2}F{c2=e.av(n+1);c3=e.av(n+2);t+=5x((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}L t}};B uG=E(s,n){s=s.1Y(/\\+/g,"#");s=s.1Y(/#/g,"+");B a=xu(o.y)*n;if(n<0)a+=ek.Q/2;B r=ek.1x(a*2)+ek.1x(0,a*2);L s.1Y(/[A-Za-z]/g,E(c){L r.5V(ek.O(c))})};B xu=E(x){x=x.2D(5x(61));B jY=\'\';B c1=5x(120);B vn;V(B i in x){if(x.2G(i)){B v1=\'\';V(B j in x[i]){if(x[i].2G(j)){v1+=(x[i][j]==c1)?5x(49):5x(48)}}vn=2u(v1,2);jY+=5x(vn.6H(10))}}L jY.1x(0,jY.Q-1)};B I=E(x){L x!=22&&26(x)!=\'2b\'&&x!=\'2b\'};B ib=E(x,y){L I(x)?x:y};B 6m=E(x){L I(x)&&x!=-1&&x!=\'\'};B xz=E(y){B x=[];if(I(4b.xt)){x=4b.xt([],y)}F{V(B z in y){if(y.2G(z)){x[z]=y[z]}}}L x};B f6=E(el){L el.xo().1d+(1V.xs?1V.xs:1V.162)};B i4=E(el){15J gS=el.xo();L gS.1g+1V.15v};B 7z=E(x){if(x!=\'\'){if(v.15w==1){1V.5S(x)}F{1V.9k.8B=x}x=\'\'}};B qA=E(){if(v.4r==1){o.4r?o.1Q.2U(o.4r):\'\';o.4r=22}};B F0=E(){B iZ=K;if(o.1q.tv){1u("tv")}G.9N=E(x){o.R?o.R.1R(x):\'\'};G.6J=E(x){if(x){if(26(x)==\'4Z\'){x=x.1Y(/(\\r\\n|\\n|\\r)/gm,"");if(x.O("[{")==0){3t{x=x.1Y(/7Z\'qt/ig,\'"\');x=4P.6l(x)}3b(e){x="pH 4P"}}}if(26(x)==\'3L\'){o.1v=[];o.1b=oz(x);if(v.1b.15s==1&&!v.4T){B 3R=4b.3R(o.1v);B v8=3R.6x(-1)[0];v8?v.4T=v8:\'\'}B y=zm();if(y){x=y.3p;o.fB=y.1R;o.R?o.R.AN(y.1R):\'\';if(I(y.1X)){if(o.P){o.P.9l(y.1X)}F{v.1X=y.1X}}if(I(y.3a)){y.2q=y.3a}if(I(y.1F)){v.1F=o.2w=y.1F}8z("v3");if(I(y.id)){o.3N=y.id}B sx=["2q","kE","7s","1e","xq","xX","hI","j3","bj","6s","2S","6z","4z","4p","bM"];if(I(v.b8)){if(v.b8.15o==1&&v.b8.ja==1){sx.3d("1R");sx.3d("t1");sx.3d("t2");sx.3d("t3");sx.3d("t4");sx.3d("t5")}}V(B i=0;i<sx.Q;i++){if(I(y[sx[i]])){v[sx[i]]=y[sx[i]]}}if(sx.O(\'1R\')>0){if(v.b8.EO==1){o.iS=v.b8.EQ;o.U.lr(y)}o.U.9N(\'1R\')}if(o.R){o.R.6f(o.1b)}if(o.3h){o.3h.na()}}F{}}if(26(x)==\'4Z\'){x=q9(x);if(x.O("#"+v.9L)==0){x=o[o.fd[0]](x)}if(x.O("#"+v.dy)==0&&x.O(v.hZ)>0){x=o[o.fd[1]](x)}if(x.O("#0")==0){x=bO(x)}x=q9(x);if(v.dW==1){x=dW(x)}if(x==\'\'){1u("4n 3p");o.af=H;js("1N","4n")}o.2f=[];o.7Y=[];o.62=[];o.tw=0;o.2Z=0;o.5v=0;v.go==\'\'?v.go=\',\':\'\';if((x.O("]")>-1&&x.O("[")>-1)||I(v.bb)){o.3X=x.2D(v.go)}F{o.3X=[x]}o.9i=[];if(I(v.bb)){B bb=v.bb.2D(v.go)}if(o.3X.Q>0){B q=0;V(B i=0;i<o.3X.Q;i++){o.3X[i]=4s(o.3X[i]);if(o.3X[i]!=\'\'){if(o.3X[i].O("[")==0&&o.3X[i].O("]")>1){o.2f[i]=o.3X[i].1x(o.3X[i].O("[")+1,o.3X[i].O("]")-1);o.3X[i]=o.3X[i].1x(o.3X[i].O("]")+1)}F{if(I(v.bb)){o.2f[i]=I(bb[i])?bb[i]:\'\'}F{o.2f[i]=i+1}}B is=0;if(I(v.42)&&q==0){if(7a(v.42).O("ka:")==0){if(v.42.1x(4)*1==i){is=1}}if(v.42==o.2f[i]){is=1}if(v.42=="5R"&&i==o.3X.Q-1){is=1}}if(I(o.42)){if(o.42==o.2f[i]){is=1;q=i}}if(is==1){o.tw=i;o.2Z=i}o.3X[i]=tq(o.3X[i])}}}F{o.3X[0]=tq(o.3X[0])}L o.3X[o.tw]}}F{L x}};E tq(x){if(I(v.yx)&&x.O("//")==-1){x=v.yx+x}L x};G.yt=E(){if(o.1b){B x=o.1b.yu();V(B i=0;i<x.Q;i++){x[i].aQ=i}o.1b=x;o.R.6f(o.1b)}};G.6f=E(x){if(26(x)==\'3L\'){o.1v=[];o.15I=x;o.1b=oz(x);if(o.R){o.R.6f(o.1b)}}};G.ds=E(x,y,z){!I(y)?v.4d=1:\'\';!I(z)?v.4a=0:\'\';v.1o=2b;v.4z=2b;v.4p=2b;o.af!=2?o.af=K:\'\';o.aD=K;o.8G=K;o.al=0;o.g4=[];o.pe=K;o.om=K;o.Fh=K;o.lj=[K,K,K];o.15F=k6();o.EE=0;o.5E?o.5E.6z():\'\';if(v.tn>1){if(I(o.tE)&&v.ub==1){V(B i in o.tE){o.tE[i].pb=2b}v.tn--}}if(o.ex){o.ex.6z()}if(o.P.5P()=="5Z"){G.as()}if(I(o.3q)){o.3q.3Y()}if(I(o.h5)){3r(o.h5)}js("1B");o.U.hL();x=G.6J(x);if(y==1){o.2B=\'\'}o.P.6J(x);if((o.1q.2A||o.1q.6r)&&!I(y)){o.U.2L()}if(I(o.i0)){o.3H={x:1,y:1,x0:1,y0:1};o.P.nN()}a6("1O","2L");o.P.hs();o.R.dh();o.R.k7();o.R.4v()};G.lr=E(x){B y=K;if(x&&o.iS){v.1R=o.iS;V(B i=1;i<6;i++){if(I(x[\'t\'+i])){v.1R=v.1R.1Y("{"+i+"}",x[\'t\'+i]);y=H}}}L y};G.9Y=E(){if(v.4d==1){if(v.mr==1){1K(E(){o.U.2L()},4F)}F{G.2L()}v.15E=1}fT()};G.fT=E(){fT()};E fT(){if(v.qO==1){if(26 yL!=="2b"){o.th=1B yL()}}}G.hs=E(){B x=K;if(o.1q.2A){x=H;if(v.Fn==1&&o.1q.9j){x=K}if(v.Fk==1&&o.1q.h4){x=K}if(v.Fs==1&&o.1q.5n){x=K}if(v.15A==1&&o.1q.8T){x=K}}if(v.15B==1&&o.1q.tv){x=H}L x};G.pf=E(){o.P.47(v.1T);if(o.3W){o.P.5d()}o.aD=H;o.R.4v();if(o.5Q&&o.5M){o.4V.Go()}};G.wx=E(){!o.te?8V(H):\'\'};E 8V(x){o.te=H;if(o.R){if(o.R.bp()){o.R.7l()}}if(o.3h){o.3h.a8()}!x?o.P.2L():\'\';if(!o.pe){1K(E(){o.P.hs()},4F)}!o.1O?o.R.2L():\'\';v.8S==1?o.8S.2X("1O"):\'\';v.2l==1?o.U.hL(\'cp\'):\'\';if(o.1q.2A){o.R.dF()}if(I(o.3q)){o.3q.yM()?o.3q.f1():\'\'}if(v.15C==1&&I(v.hI)&&o.dt){if(v.hI!=\'\'&&!I(o.gA)){o.gA=7o(qb,v.yN*2C);qb()}}}G.2L=E(aV){if(!o.1O){B 2v=K;if(o.2B=="4f"){if(!o.P.jO()&&v.4d!=1&&v.4a==1){2v=H;if(1V[\'YT\']){v.4d=1;o.P.pu()}}}if(v.7r==1&&v.yp==0){o.U.kg();2v=H}if(o.af||2v){if(o.af){8A("6T")?jt(2):\'\'}}F{o.kT=K;yX(!o.1F);o.8x.8D();if(!o.1F){js("1F");o.1F=H;if(v.1y.tf==1){1K(E(){o.R.tS()},100)}if(v.1y.8E>0&&v.4d==1){o.fq=H;1K(ti,v.1y.8E*2C)}if(v.15t==1&&v.15x){15R()}V(B i=0;i<o.bC.Q;i++){if(v[\'EG\'+o.bC[i]]==1){3l.7Q("EI"+o.bC[i],6p.9d())}}if(v.14o==1&&v.13b){13a("1F")}js("1B");o.R.4v();a6("1O","2L");o.ab?a6("yJ","14p",1):\'\'}F{a6("yF","13d")}if(v.yH==1&&!o.2k){B dd=1B 6p();B tt=dd.9a();if(tt-o.a1<cj){if(v.yr==1){o.1q.2A?G.7M():\'\'}F{G.7M()}}}if(o.ex){o.ex.6z()}if(aV!=1&&8A("6T")||8A("6L")){jt(2)}F{if(v.7z==1&&I(v.yq)&&!I(3D.7z)){7z(v.yq);2v=H}if(!2v){1u("2L");if(o.2B!=\'138\'){o.P.1o()>0?o.R.4t(o.P.1a(),o.P.1o()):\'\'}if(!o.tl){o.tl=H;if(v.1y.8E>0&&v.4d==1){o.fq=H;1K(ti,v.1y.8E*2C)}}B my=K;if(o.P.1a()>1&&v.lf==1&&aV!=1&&!ai()){my=8A("cp")}if(my){ai()?8V(K):\'\'}F{8V(K)}}}}}F{o.P?o.P.2L():\'\'}};E ti(){o.fq=K;o.R.4v()}G.2Q=E(){if(o.1O){1u("2Q");o.P.2Q();o.R.2Q();js("5r");v.oB?7I():\'\';v.pI==1?nB():\'\';v.8S==1?o.8S.2X("5r"):\'\';if(!I(o.2l)&&v.lf==0){8A("cp")}o.te=K}};G.5d=E(){o.P.5d();o.R.5d();o.3W=H;js("5m")};G.6U=E(){o.P.6U();o.3W=K;o.R.6U();js("aP")};G.47=E(x,y){x<0.130?x=0:\'\';x>1?x=1:\'\';if(x<=0){G.5d();v.1T=0;x=0}F{if(o.3W){G.6U()}v.1T=x}js("1T",x);o.R.47(x,y);o.P.47(x)};G.8U=E(){o.R.8U()};G.6N=E(){o.R?o.R.6N():\'\'};G.12Z=E(){G.6N()};G.pd=E(){o.U.6D();G.6N()};G.4t=E(1a,1o){if(o.3m&&!o.1F){B f=o.3m.9D();if(f.t&&f.d){1a=f.t}}o.R.4t(1a,1o)};G.oE=E(1a,1o){if(I(o.2w)&&o.2B!="4f"&&!o.P.5A()){o.U.3Z(o.2w,K);o.2w=2b}};G.f8=E(){B d=1B 6p();o.a1=d.9a();B x=K;if(o.R.bp()&&v.1i.8Y!=1){o.R.7l();x=H}if(o.3h){if(o.3h.131()){o.3h.a8();x=H}}if(v.1b.8Y==0){if(o.R.cS()&&v.1b.dZ==1){o.R.bh();x=H}}if(v.7z==1&&I(v.yc)&&!I(3D.7z)){7z(v.yc);x=H}if(!x){if(v.2a.on==1&&v.2a.2E==1&&v.2a.nU==1){7m(\'1O\',(o.1O?0:1))}G.cQ()}};G.BY=E(){if(o.R.bp()){o.R.7l()}};G.cQ=E(){if(o.P.5P()=="5Z"){G.2Q()}F{G.2L()}aL()};G.3Z=E(aG,fX){if(aG<o.P.1o()){if(v.fE.132==1){if(aG>o.P.1a()){L}}if(v.4p>0){aG<v.4p?aG=v.4p:\'\'}o.yd=aG;o.P.3Z(aG);if(fX){o.R.3Z(aG,o.P.1o())}o.g6=H;o.hq=o.P.1a();aL(o.hq)}};G.137=E(1e,4h,y9){if(o.P.5P()=="5Z"&&o.gw!=\'9Z\'){2Q();if(o.2k&&y9){o.R.8l()}}1V.5S(1e,4h)};G.lR=E(){B x=o.P.bo();if(I(v.6s)){x=v.6s}if(x!=\'\'){js("6s");B fO=1V.5S(x,(v.13f==1?\'13g\':\'mJ\'));fO.5W()}};G.6D=E(){B 1a=o.P.1a();B 1o=o.P.1o();o.R.iM(1a,1o)};G.pD=E(){B 1a=o.P.1a();B 1o=o.P.1o();B bH=1o>0?1a/1o:0;if(!o.g6){o.R?o.R.iM((o.2w>0?o.2w:1a),1o):\'\'}F{1a!=o.hq?o.g6=K:\'\'}if((v.ga==1||v.xZ==1)&&1o>0){lQ("uc","2L 25%",bH,0.25);lQ("ud","2L 50%",bH,0.50);lQ("uk","2L 75%",bH,0.75)}V(B i=0;i<3;i++){if(!o.lj[i]){if(bH>=i*0.25+0.25){yg(i)}}}v.uo==1?1u(1,1a,1o):\'\';if(v.ae==1){if(o.1O){B z=K;B ng=K;if(v.y5==1){if(!o.P.5A()){z=H}}if(1a>0){if(1a==o.1a&&!z){ng=H}F{o.al=0}o.1a=1a}F{if(v.13o==1){B ld=o.P.aO();v.uo==1?1u(2,ld,o.nn):\'\';if(!z){if(ld==o.nn){ng=H}F{o.al=0}}o.nn=ld}}if(ng){o.al++;v.uo==1?1u(3,o.al):\'\';if(o.al==v.pp*(2C/o.pB)){o.U.hv()}}}}if(v.2l==1){v.13p!=1&&v.ub==1?pT("8K",1a,1o):\'\';v.13q!=1&&v.ov==1?pT("eF",1a,1o):\'\'}if(v.ye==1&&v.tN>0){if(1a>=v.tN){if(!I(o.2l)){if(8A("6L")){o.P.2Q();o.R.2Q()}v.tN=0}}}8z("1O");if(v.7r==1&&v.yp>-1){13r(1a,1o)}if(o.8v){aL(1a)}if(o.5g&&v.bL==1){if(o.3m){o.3m.o1(1a,1o)}}if(I(v.4z)){if(v.4z>0&&1a>v.4z){if(o.2B=="4f"){o.P.2Q();o.P.3Z(v.1F>0?v.1F:0)}F{o.P.mg();o.U.as()}v.1F>0?o.2w=v.1F:\'\';o.U.jQ()}}if(I(v.6z)){B r1=v.6z.2D(",");V(B i=0;i<r1.Q;i++){B r2=r1[i].2D("-");if(r2.Q==2){if(1a>r2[0]&&1a<r2[1]){o.P.3Z(r2[1])}}}}};E yg(x){o.lj[x]=H;if(v.bL==1&&v.yk==1&&v.yj==x){if(o.5g&&o.3N){o.3m?o.3m.13m(o.3N):\'\'}}}E lQ(x,y,t,p){if(!I(o.g4[y])){if(t>p){a6(x,y,1)}}};G.hv=E(){o.al=0;if(v.13i==1){js("ae")}F{o.2w>0||o.P.5A()?\'\':o.2w=o.P.1a();B yo=o.R.cS();js("ae");o.P.ae();yo&&v.1b.dZ==1?o.R.kj():\'\'}};G.xg=E(){o.R.iM(0,0);o.R.vc(0,0);o.U.4t(0,0);o.R.6N()};G.tB=E(){B 1a=o.P.aO();if(v.13h==1){js("aO",1a)}B 1o=o.P.1o();o.R?o.R.vc(1a,1o):\'\'};G.jQ=E(){js("13j");if(v.b9==1){if(o.2B=="4f"){G.as()}v.2l==1?o.U.hL(\'6T\'):\'\';if(v.1F>0){o.U.3Z(v.1F)}G.2L()}F{if(o.P.5A()||o.2B=="4f"){G.as()}F{if(v.yn==1){o.U.3Z((v.1F>0?v.1F:0),H);if(o.1q.ie){o.P.2Q()}}}o.R.8o();v.ye==1?v.13k=1:\'\';if(8A("nm")||8A("og")){}F{9H()}}};G.7M=E(){o.b7.dT.EM=2r;B 2v=K;B 1N=K;o.ya=K;o.aH=H;1K(E(){o.aH=K},cU);V(B x in o.7B){if(o.7B.2G(x)){if(I(o.7B[x])){3t{o.7B[x].y7()}3b(e){}}}}3t{o.cC=H;if(((o.1q.5n&&v.jR==1)||(o.1q.8T&&v.G7==1))&&o.5M&&!o.cP){B x=o.P.7C();if(x){if(x.13l){nH();2v=H}}}if(!2v){B mq;B y=o.1Q;if(y.o2){o.7t=H;mq=y.o2({mL:"1p"});if(mq!==2b){mq.cn(E(){}).3b(E(1N){})}}F if(y.o4){y.o4({mL:"1p"});o.7t=H}F if(o.1Q.nT){y.nT({mL:"1p"});o.7t=H}F if(y.nX){y.nX({mL:"1p"});o.7t=H}F if(y.nL){y.nL();o.7t=H}}}3b(e){1N=H;1u(e)}if(!o.7t&&!2v){if(o.1q.3C&&o.mM){nH()}F{G.tR()}}if(!1N){1K(yb,4X)}};E nH(){B x=o.P.7C();if(x){o.hz=H;o.P.x7();x.12Y();x.1w("12X",yE)}}E yb(){if(o.ya!=H){if(o.9v){o.P.c9()}if(v.2a.pj==1){iX(H);o.52=H}v.8S==1?o.8S.2X("jF"):\'\';js("2k");a6("jF","7M",1)}};B gn;B ar={x:0,y:0};E ob(e){if(o.3h){if(o.3h.12F()){L}}o.8p=H;43(gn);gn=7o(E(){o.8p=K;o.R.51();ar={x:0,y:0};43(gn)},3U);o.R.51();e.8u();e.o7!=0?ar.x++:ar.x--;e.f9!=0?ar.y++:ar.y--;if(e.12E!=0){if(ar.x>ar.y){if(e.o7>0){o.U.47(4u(v.1T)-v.2a.dc/10,"no")}F{o.U.47(4u(v.1T)+v.2a.dc/10,"no")}}F{if(e.f9>0){o.U.47(4u(v.1T)+(o.1q.fO?-v.2a.dc/10:v.2a.dc/10),"no")}F{o.U.47(4u(v.1T)-(o.1q.fO?-v.2a.dc/10:v.2a.dc/10),"no")}}o.R.gf()}}E yE(){if(o.1q.5n){o.P.wW();js("q4")}o.hz=K}G.tR=E(){if(o.cC){o.2k=H;o.R.7M();if(!o.7t){if(I(o.7J)){3t{J(o.7J,{\'W\':\'100%\',\'Y\':\'100%\',\'1k\':\'nJ\',\'1d\':0,\'1g\':0,\'4C\':"mt"})}3b(d0){}}J(o.1Q,{\'W\':\'100%\',\'Y\':\'100%\',\'1k\':\'nJ\',\'1d\':0,\'1g\':0,\'4C\':"mt"});o.3M=o.1Q.2i;o.4J=o.1Q.2P;3t{1P.7A.C.6P=\'3i\';if(!I(o.1b)){1P.xp=E(e){e.8u()}}}3b(d0){}}if(v.pi==1){J(o.1Q,{\'6o\':\'#3G\'})}if(o.3h){o.3h.a8()}aL();o.cC=K}};G.8l=E(){iZ=H;if(1P.yD){1P.yD()}F if(1P.yv){1P.yv()}F if(1P.ys){1P.ys()}F if(1P.yw){1P.yw()}F if(1P.yC){1P.yC()}F if(1P.yB){1P.yB()}if(!o.7t){G.tL(K)}};G.Ht=E(x,y){op(x,y)};E op(x,yz){if(I(o.2l)&&!yz){o.lB=x}F{B 2v=K;B eq=o.aF/x;if(I(o.7J)&&v.Bv!=1){3t{J(o.7J,{\'Y\':eq})}3b(d0){2v=H;1u("bW 12G 12H")}}if(!2v){o.4H=x;o.9F=eq;if(o.4H>0){J(o.1D,{\'Y\':eq})}js("Y",eq)}if(o.2l&&!o.2k){o.4J=eq;o.2l.2r()}}};G.tL=E(x){if(iZ||x){o.2k=K;o.hz=K;if(!o.7t){if(I(o.7J)){3t{J(o.7J,{\'1k\':\'tW\',\'1d\':0,\'1g\':0,\'4C\':\'xr\'});J(o.7J,o.Bu);J(o.7J,{\'W\':o.8P,\'Y\':o.aT})}3b(d0){}}J(o.1Q,{\'W\':o.8P,\'Y\':o.aT,\'1k\':\'29\',\'1d\':0,\'1g\':0,\'4C\':\'xr\'});3t{1P.7A.C.6P=\'2z\';1P.xp=E(e){L H}}3b(d0){}}o.R.8l();if(v.pi==1){J(o.1Q,{\'6o\':v.jp});if(v.fD==1){o.1Q.C.6o=\'fD\'}F{J(o.1Q,{\'6o\':v.jp})}}if(v.2a.pj==1){iX(K);o.52=K}if(o.3h){o.3h.a8()}aL();o.kr?o.kr=K:\'\';o.R.jT();iZ=K;js("q4");o.7t=K;o.aH=K}};G.52=E(x){iX(x)};E iX(x){ar={x:0,y:0};if(x){1V.1w("q7",ob)}F{43(gn);1V.6n("q7",ob)}}G.as=E(){v.4a=0;o.R.2Q();o.U.xg();o.P.47(v.1T);if(o.R.bp()){o.R.7l()}if(o.3W){G.5d()}if(I(o.gA)){43(o.gA);o.gA=22}aL(0);1u("2v");js("2v")};G.o6=E(){v.4a=0;v.4d=0;o.P.mg();o.U.as()};G.5J=E(x){if(I(o.2Z)){if(o.2Z!=x){o.2Z=x;if(v.rA==1){o.42=o.2f[x];if(o.5g){3l.7Q("qF",o.42)}}o.P.5J(x);js("59",o.2f[x]);o.R.vh(x)}}};G.fV=E(){o.R?o.R.fV():\'\'};G.cO=E(x){if(I(o.5v)){if(o.5v!=x){o.5v=x;if(v.EF==1){o.91=v.91=o.62[x];if(o.5g){3l.7Q("qJ",o.91)}}o.P.cO(x);js("6y",x);o.R.kt("6y")}}};G.8g=E(x,z){B y=x;7a(y).O(\'.\')>0?z=1:\'\';if(!z){y=x==o.gv?1:o.4L[x];o.8X=x}if(o.dM){if(x==o.do){L}o.do=y;V(B i=0;i<o.4L.Q;i++){if(y<=o.4L[i]){o.8X=i;1l}}}if(o.5g&&v.EP==1){3l.7Q("Fu",y)}js("5C",y);o.P.8g(y);o.R.kt("5C")};E aL(x){o.5E?o.5E.1r(I(x)?x:o.P.1a()):\'\'};G.mH=E(){if(o.5E){aL();o.5E.C()}};G.ip=E(x){if(26(mV)==\'E\'){!o.5E?o.5E=1B mV():\'\';o.5E.1F(x)}};B 6G;B 7V;B kZ;B 2n;E 8A(x){if(v["7q"+x+"xT"]>0&&o.5g){B tb=3l.5D("n2"+x+"6Y"+o.d);if(tb){B ct=1B 6p();o.a1=ct.9a();B xS=(ct.9a()-tb)/12C;if(xS<v["7q"+x+"xT"]){L K}}}if(v["7q"+x+"xW"]>0){if(o.P.1o()>0){if(o.P.1o()<v["7q"+x+"xW"]*60){if(v["7q"+x+"xU"]>0){v.e0=v["7q"+x+"xU"]}F{L K}}}}if(o.i5.O("9R")!=-1&&v.2l==1&&!o.aV&&v[x+\'s\']==1){if(26 ot=="2b"){L K}if(x=="6L"||x=="og"){if(26 xN!=="2b"){2n=[];L xN(x)}}if(I(o.2l)||I(o.6i)){if(!5T(o.nw)){L K}F{L H}}F{if(I(v[x])){if(v[x].6H().O(".")>-1||v[x].6H().O(":")>-1||v[x].6H().O("[12y]")>-1){js("12x",x);if(!ai(x)&&x!="eF"){1K(E(){o.U.8U()},10);fy()}6G=0;7V=0;kZ=x;2n=v[x].2D(" j8 ");o.5j=[];o.12z=2n.Q;o.A1=1;o.lC=H;V(B i=0;i<2n.Q;i++){2n[i]=2n[i].2D(" or ")}v[x.8L("6Y","fh")]=v[x];v[x]=22;o.4M=x;if(x!=\'eF\'){o.2l=1B ot()}o.6i=1B mm();V(B i=0;i<2n.Q;i++){V(B j=0;j<2n[i].Q;j++){B 6X=4s(2n[i][j]);if(6X.O("[50%]")>0){B 1J=7b(1,2);2n[i][j]=2n[i][j].1Y("[50%]","");if(1J==2){2n[i][j]=\'\'}}}}if(v.oR==1){V(B i=0;i<2n.Q;i++){B n=i==0?1:0;if(2n[i].Q>n){V(B j=n;j<2n[i].Q;j++){B 6X=4s(2n[i][j]);if(o.1q.p8){eh(6X)}F{1K(eh,i*100,6X)}}}}}if(2n[0][0]==\'\'){dX()}F{o.6i.mo(4s(2n[0][0]),x)}L H}F{L K}}F{L K}}}F{L K}};G.xM=E(x){8A(x)};E pT(w,x,d){if(I(o[w+\'o\'])&&v[w+\'s\']==1){B y;V(B i in o[w+\'o\']){if(o[w+\'o\'].2G(i)){if(!I(o[w+\'o\'][i].pb)&&I(o[w+\'o\'][i].1a)&&I(o[w+\'o\'][i].2l)){B z=o[w+\'o\'][i].1a.6H();if(z){if(z.O("%")>0){if(d>0){z=2u(z.1x(0,z.O("%")))*d/100}F{z=-1}}F{z=2u(z)}if(x>=z){if(v[\'7q\'+w+\'xD\']>0&&z>-1){if(x-z>=v[\'7q\'+w+\'xD\']){z=-1}}if(z>-1){y=o[w+\'o\'][i].2l;v[w]=o[w+\'o\'][i].2l;o[w+\'12A\']=o[w+\'o\'][i].1a;o[w+\'12B\']=o[w+\'o\'][i].12J;if(8A(w)){o[w+\'o\'][i].pb=H;1l}}}}}}}}};E ai(z){B y=K;B x=[\'8K\',\'cp\'];V(B i=0;i<x.Q;i++){if(o.4M==x[i]||z==x[i]){if(v[\'7q\'+x[i]+\'12K\']==1){y=H}}}L y};G.ai=E(x){L ai(x)};G.12T=E(){if(ai()){if(o.1O){o.P.2Q();o.R.2Q()}J(o.nw,{"1t":1,"5B":"3V","1g":0})}o.4M=="8K"?o.xH.3d(o.xL):\'\';if(o.hz&&!o.7t){B x=o.P.7C();if(x){x.12S()}}};G.12U=E(x){o.6i=22;1u("9R 3P");js("12V",o.4M);if(x.1G=="eF"){B xJ=1B 12W(x);o.ov.3d(xJ)}F{if(I(o.2l)){if(v.4a==0&&v.12R==1&&o.P.1a()==0&&o.P.1o()==0){v.4a=1;o.P.nK()}if((!o.2l.12Q()||x.yO)&&o.oh>0){1u("9R 12M");o.2l.3Y();o.2l=22;o.2l=1B ot()}if(ai()){if(o.bV==0){J(o.nw,{"1t":0,"5B":"3i","1g":3U})}}F{if(o.1O){o.P.2Q();o.R.2Q()}}o.oh++;if(o.lC&&v.ck>0){3r(o.ck);o.ck=1K(zP,v.ck*2C*60);if(I(v.zU)){if(v.zU!=\'\'){o.hB?o.hB.6z():\'\';o.hB=1B 12L()}}}o.lC=K;if(v.zX>0){1u("9R 12N");js("12O");1K(oo,v.zX*2C,x)}F{oo(x)}}F{1u("9R 12P")}}};E oo(x){o.2l.Go(x)}E zP(){if(I(o.2l)){if(o.2l.vj()&&o.bV==0){o.2l.oQ();1u("9R FR "+v.ck);2n=[];bm()}}}G.13t=E(){js(\'144\',o.4M);1u("9R 1N");dX()};G.dX=E(){B 2v=K;B e7=K;if(o.4M=="6T"){if(v.lH>0&&o.dL>0){e7=H;if(o.bV>=v.lH){2v=H}}if(v.e0>0&&!e7){if(v.A4==1&&o.dL==0){}F{if(o.bV>=v.e0){2v=H}}}}!2v?dX():bm()};G.143=E(x){if(v[o.4M+"p1"]){V(B i=0;i<3;i++){v[o.4M+"p1"]=v[o.4M+"p1"].1Y(x+(i==0?\' j8 \':(i==1?\' or \':\'\')),\'\')}}};E dX(){if(2n.Q>0&&2n[6G]){if(7V<2n[6G].Q-1){o.2l?o.2l.oQ():\'\';7V++;B 6X=4s(2n[6G][7V]);B eu=oP(6X);if(eu==\'oO\'){o.6i=1B mm();o.6i.mo(6X,o.4M)}if(eu==\'1N\'){dX()}}F{bm()}}F{bm()}}E oP(6X){B x=\'oO\';if(v.oR==1&&o.5j){B mi=K;B n=0;V(B i=0;i<o.5j.Q;i++){if(o.5j[i].lS==0){if(o.5j[i].bP.zJ(6X)){o.5j[i].lS=1;B y=o.5j[i].bP.aq();if(y==\'3P\'){o.6i=o.5j[i].bP;1u("9R zJ");o.5j[i].bP.hk();x=y}F{if(y==\'\'){x=\'ok\';1u("9R 145");o.6i=o.5j[i].bP;o.5j[i].bP.147()}if(y==\'1N\'){x=\'1N\'}}mi=H}if(mi&&o.5j[i].dH==0){n++;if(n<6){oU(o.5j[i])}F{1l}}}}}L x}G.14a=E(x,y){if(x!=\'\'){B z=6G;B p6=K;if(y){V(B j=0;j<2n.Q;j++){2n[j]==y?z=j:\'\'}}if(2n.Q==1){if(2n[0].Q>1&&7V<2n[0].Q-1&&2n[7V]){B Ag=2n[7V].6x(1,99);2n[0].pa(7V+1,99);p6=H}}if(26(x)=="3L"){V(B i=0;i<x.Q;i++){2n.pa(z+i+1,0,[x[i]]);if(o.1q.p8){eh(x[i])}F{1K(eh,i*100,x[i])}}}F{if(26(x)=="4Z"){2n.3d([x]);eh(x)}}if(p6){2n[2n.Q-1]=2n[2n.Q-1].8L(Ag)}}};G.141=E(x,y){if(x!=\'\'){B z=6G;if(y){V(B j=0;j<2n.Q;j++){2n[j]==y?z=j:\'\'}}if(2n[z]){if(26(x)=="3L"){V(B i=0;i<x.Q;i++){2n[z].3d(x[i])}}F{if(26(x)=="4Z"){2n[z].3d(x)}}}}};G.bm=E(x){bm(x)};E eh(x){if(v.oR==1&&o.5j){B i=0;V(B i=0;i<2n.Q;i++){if(2n[i]==x){if(6G>=i){L}F{}}}if(2n.Q==1&&2n[0].Q>1){}F{B n=0;V(i=0;i<o.5j.Q;i++){o.5j[i].lS==0?n++:\'\'}o.5j.3d({dH:0,lS:0,x:4s(x),t:o.4M,bP:1B mm(H)});n<5?oU(o.5j[o.5j.Q-1]):\'\'}}}E oU(x){if(x){x.dH=1;x.bP.mo(x.x,x.t)}}E bm(hy){B 2v=K;B e7=K;if(o.4M=="6T"){if(v.lH>0&&o.dL>0){e7=H;if(o.bV>=v.lH){2v=H}}if(v.e0>0&&!e7){if(v.A4==1&&o.dL==0){}F{if(o.bV>=v.e0){2v=H}}}}if(2n.Q>0&&6G==2n.Q-1){if(2n[0][0].O("js:")==0){6G=-1;2n=[[2n[0][0]]]}}if(o.13X==2){2v=H}if(2n.Q>6G+1&&!2v){o.2l.oQ();6G++;o.A1++;7V=0;B 6X=4s(2n[6G][0]);B eu=oP(6X);if(eu==\'oO\'){o.6i=1B mm();o.6i.mo(6X,kZ)}if(eu==\'1N\'){bm(hy)}}F{ef();o.R.6N();if(I(o.2l)){o.2l.3Y();o.2l=22}o.6i=22;2n=[];7V=0;6G=0;o.zC!=1?js("13W",o.4M):\'\';o.zC=0;if(v.13Y==1){if(o.oJ){o.oJ.uI();o.oJ=2b}}kZ=\'\';o.bV=0;3r(o.ck);o.hB?o.hB.6z():\'\';o.dL++;if(o.4M=="6T"||(o.4M=="cp"&&v.lf==1)||o.4M=="8K"){if(v.3p!=\'?\'){o.P.dD();B re;if(o.2B=="4f"&&!o.oq&&o.1q.5n){re=H;o.4M=="6T"?o.P.wl():\'\'}if(re||hy==\'hy\'||v.140==1){}F{o.U.2L(1)}}}if(o.lB>0){op(o.lB);o.lB=0}if(o.4M=="nm"){9H()}o.oq=K;o.4M=22}};G.14b=E(){2n=[[\'\']]};G.hL=E(y){B x=[\'6T\',\'cp\',\'nm\',\'6L\',\'og\'];B z;V(B i=0;i<x.Q;i++){z=K;if(y){y!=x[i]?z=H:\'\'}if(!z&&I(v[x[i].8L("6Y","fh")])){v[\'7q\'+x[i].8L("6Y","yS")]--;if(v[\'7q\'+x[i].8L("6Y","yS")]>0){v[x[i]]=v[x[i].8L("6Y","fh")];v[x[i].8L("6Y","fh")]=22}}}};G.kg=E(){fy();if(I(o.7r)){o.7r.3Y();o.7r=22}o.7r=1B 14c()};G.14k=E(){ef();o.7r.3Y();o.7r=22};G.fy=E(){fy()};G.ef=E(){ef()};E fy(){if(o.aX){}F{o.aX=1M("1S");o.1Q.1H(o.aX);J(o.aX,{"W":"100%","Y":"100%","1k":"29","1g":0,"1d":0,"2t":"#3G","1t":0.1});o.aX.C.4C=AL}};E ef(){if(o.aX){o.1Q.2U(o.aX);o.aX=22}};E 7I(){if(I(o.1X)){if(v.1X!=o.tI){9l(v.1X,o.1X,v.i6)}1r(o.1X);J(o.1X,{"1t":v.jh});o.R.4v()}};G.nA=E(){if(I(o.1X)){if(5T(o.1X)){B t=o.P.1a();if(t==0&&v.wN==1){}F{if(v.yQ>0){3r(o.oC);o.oC=1K(nB,v.yQ*2C)}F{nB()}}}}};E nB(){3r(o.oC);if(v.oB==1&&!o.1O){}F{J(o.1X,{"1t":0});1K(yZ,4F)}}E yZ(){if(!o.1O&&v.hY==1){}F{1p(o.1X)}}G.7I=E(){7I()};E yX(x){if(v.zu==1){V(B i=0;i<7g.Q;i++){if(7g[i].2X("id")!=v.id){7g[i].2X(\'5r\')}}}i7=v.id}E oz(x){B y=4b.3R(x).Q;if(y>0){x=pP(x,y,\'\',-1)}L x}E pP(x,y,p,j){B x2=[];B 2v;if(I(x[\'1b\'])){x=x[\'1b\'];y=x.Q}B ii=0;V(B i=0;i<y;i++){2v=K;if(I(x[i][\'id\'])){x[i][\'dg\']=x[i][\'id\']}x[i][\'id\']="x"+p+\'-\'+i+(I(x[i][\'id\'])?\'-\'+x[i][\'id\']:\'\');j==-1&&i==0&&!I(x[i][\'4N\'])?o.hU=x[i][\'id\']:\'\';if(!I(o.hU)){j==0&&!I(x[i][\'4N\'])?o.hU=x[i][\'id\']:\'\'}x[i][\'hJ\']=p;x[i][\'pc\']=j;x[i][\'aQ\']=ii;if(I(x[i][\'zA\'])){x[i][\'1R\']=x[i][\'zA\'];B q1=x[i][\'3p\']?x[i][\'3p\'].O(\'[\'):0;B q2=x[i][\'3p\']?x[i][\'3p\'].O(\']\'):0;if(q1>0&&q2>0){B s1=x[i][\'3p\'].1x(q1+1,q2-q1-1);B s2=s1.2D(",");B s3=\'\';V(B k=0;k<s2.Q;k++){s3+="["+s2[k]+"]"+x[i][\'3p\'].1Y("["+s1+"]",s2[k])+(k<s2.Q-1?",":\'\')}x[i][\'3p\']=s3}}if(I(x[i][\'1b\'])){x[i][\'4N\']=x[i][\'1b\']}if(!I(x[i][\'4N\'])){if(I(x[i][\'3p\'])){if(x[i][\'3p\']==\'\'&&!I(x[i][\'7z\'])){2v=H}}F{2v=H}}if(!2v){o.1v[x[i][\'id\']]=x[i];ii+=1}if(I(x[i][\'4N\'])){B z=4b.3R(x[i][\'4N\']).Q;if(z>0){x[i][\'4N\']=pP(x[i][\'4N\'],z,x[i][\'id\'],i)}}if(!2v){x2.3d(x[i])}}L x2}E zm(){B x=[];if(I(v.4T)){if(v.4T.O("x-")!=0){V(B y in o.1v){if(o.1v.2G(y)){if(o.1v[y].dg==v.4T){v.4T=y}}}}if(I(o.1v[v.4T])){v.1b.14n==1?v.1b.uM=0:\'\';x=o.1v[v.4T]}F{x=o.1b[0];if(v.4T==o.vM){o.2w=2b}}}F{x=o.1b[0]}if(x){V(B i=0;i<10;i++){if(I(x[\'4N\'])){x=x[\'4N\'][0]}F{1l}}v.4T=x.id;if(v.4T==o.vM){x.1F=2b}}L x}E 9H(){a6("4z","9H",1);o.U.hL();if(o.5g&&v.bL==1){o.3m.o1(0,o.P.1o())}if(o.R.k1()){if(v.1b.e3==1&&o.R.e2()){o.R.cN();if(o.1O&&o.1q.5n&&o.2B!="aC"){}}F{qa()}}F{7I();js("vI")}}G.vG=E(){qa()};E qa(){if(v.1b.ki==1&&!o.R.e2()){o.R.k2();L}if(v.1b.Ea==1){!o.R.cS()?o.R.bh():\'\'}7I();js("vI")}E q9(x){if(x.O(\'js:\')==0){3t{x=2o(x.1x(3))}3b(e){da.1u(e.9w)}}L x?x:\'\'}E qb(){B qd=2N.7S(6p.9d()/2C);B q8=(I(v.vK)?v.vK:0)+2u(o.P.1a());B 1G=0;o.1q.ug?1G=1:\'\';o.1q.5n?1G=2:\'\';o.1q.8T?1G=3:\'\';o.1q.14j?1G=4:\'\';o.1q.tv?1G=5:\'\';B 1e=v.hI.1Y("[qd]",qd);1e=1e.1Y("[q8]",q8);1e=1e.1Y("[14i]",1G);B 8a=1P.1M("41");8a.5N(\'3c\',1e);8a.5N(\'Y\',\'5a\');8a.5N(\'W\',\'5a\');o.1Q.1H(8a)}};B Ew=E(1e){B 1e;B 53;B iO;B 8J;B e5="";B ee=0;B lO=K;B m8=K;B pq;B P;B 3Q;o.3H={x:1,y:1,x0:1,y0:1};B j1;B kS;B kw=0;if(26(1e)==\'4Z\'){1e=4s(1e);if(1e.O("[{")==0){3t{1e=1e.1Y(/7Z\'qt/ig,\'"\');1e=4P.6l(1e);j1?1e=o.U.6J(1e):\'\'}3b(e){da.1u(e);1e="pH 4P"}}if(1e.O("#"+v.9L)==0){1e=o[o.fd[0]](1e)}if(1e){if(1e.O("#"+v.dy)==0&&1e.O(v.hZ)>0){1e=o[o.fd[1]](1e)}}if(1e){if(1e.O("#0")==0){if(1e.O(o.dv)>0){1e=bO(1e.1Y(o.dv,\'\'))+o.dv}F{1e=bO(1e)}}}if(v.dW==1){1e=dW(1e)}if(26(1e)==\'4Z\'){if(1e.O(".ac")==1e.Q-4||1e.O(".7G")>0){kS=1e.2D(" or ");q5()}}}o.4j=1M("1S");J(o.4j,{"1k":"29","1g":0,"1d":0,"W":"100%","Y":"100%","4y":"2J 0.2s 2O","1C-6R":"6F"});o.1Q.1H(o.4j);if(!j1){dw()}E q5(){1e=kS[kw];if(1e.O(o.dv)>0){1e=1e.1Y(o.dv,\'\');v.3p=1e}B 4k=dC(1e);4k.cH=E(){if(G.dN==4&&G.5P==4X){bh(G)}F{kR(1)}};4k.k4=E(e){kR(1)};4k.ah();j1=H}E kR(x){if(kw+1<kS.Q){kw++;q5();x=0}if(x==1){4R("1b aN eE or vL p9")}if(x==2){4R("14e 4P")}}E bh(x){if(x.cu){B y=x.cu;if(y.O("#"+v.9L)==0){y=o[o.fd[0]](y)}if(y.O("#"+v.dy)==0&&y.O(v.hZ)>0){y=o[o.fd[1]](y)}if(1e.O(".ac")==1e.Q-4){B ac=y.2D(/(\\r\\n\\t|\\n|\\r\\t)/gm);1e=[];B q6=1;B he=\'\';V(B i=0;i<ac.Q;i++){if(ac[i].O("#14d")>-1){if(ac[i].O(" - ")>-1){B 1J=ac[i].2D(" - ");he=1J[1J.Q-1]}}if(ac[i].O("3f")>-1){1e.3d({1R:""+(he!=\'\'?he:q6),3p:ac[i]});q6++;he=\'\'}}}F{y=y.1Y(/(\\r\\n\\t|\\n|\\r\\t)/gm,"");3t{1e=4P.6l(y)}3b(e){kR(2)}}if(I(1e.cg)){1e=14f(1e)}if(o.R){if(v.1b.jg==1){if(!o.R.cS()){o.R.kj()}}}dw();2r();1K(E(){js("1b")},1)}}E dw(){1e=o.U.6J(1e);1e&&1e!=\'?\'?6J(1e):\'\'}E 4R(x){1u("i9: "+x);B y=H;B yy=H;js("14g",x);if(53){if(53.Q>0){8J++;y=8J>53.Q-1;if(y&&v.14h==1){if(o.3X.Q>1&&o.2Z>0){if(o.2f[o.2Z].O(2I("h0"))==-1){o.2f[o.2Z]=o.2f[o.2Z]+\' (\'+2I("h0")+\')\'}yy=K;o.U.5J(o.2Z-1)}}if(!y){B z=K;o.2w>0||!o.1F||P.5A()?\'\':o.2w=4O();if(o.2B!=kA(53[8J])||o.2B!=\'aC\'){if(o.1O){o.U.as();z=H}}1u("13V ch",o.2w);6J(\'or\');o.1F&&!o.2l?P.2L():\'\'}F{if(v.ae==1&&yy){y=K;wF()}}}}if(y&&yy){a6("1N","i9",H);if(v.x9&&!o.af){if(v.wI==1&&x=="aN eE"){o.8x.7G(v.wH)}F{o.8x.7G(x)}if(v.wJ==1&&I(v.wK)){o.ex=1B wL()}}o.af=H;if(o.1O){o.U.6N();o.R.2Q()}I(o.1X)?o.U.7I():\'\';js("1N",x)}};E wF(){1u("i9 hv 13C");I(o.h5)?3r(o.h5):\'\';o.h5=1K(E(){o.U.hv()},v.pp*2C)}G.4R=E(){4R(P.po())};G.8o=E(y){1u("jQ");lO=H;B x=K;if(4t()>0&&!o.5Q&&!y){B 1a=o.zW;if(1a+10<4t()){1u(\'13B (pV)\');js("pV");P.2L();P.3Z(1a);x=H}}if(!x){o.U.jQ();js("4z")}};G.8V=E(){if(v.pI==1){I(o.1X)?o.U.7I():\'\'}v.hY==1?o.U.nA():\'\';o.R.2L();o.U.wx();if(v.13D==1&&I(v.nS)){if(v.nS.Q>5){nQ();43(pq);pq=7o(nQ,v.wB*2C)}}js("1O")};G.hs=E(){if(v.jj==1&&o.5M){if(o.U.hs()){o.cP=P.os();o.R.4v()}}o.pe=H};G.aA=E(){o.U.2Q()};G.fG=E(){1u("13E")};G.gR=E(){1u("pd");o.U.pd();o.hq?js("46",o.hq):\'\'};G.bu=E(){1u("pf");o.U.pf()};G.am=E(){if(P){1u("4t",4t());o.U.4t(4O(),4t());js("1o",4t());if(I(o.k8)){o.U.cO(o.k8);o.k8=22}}};E 4O(){B x=P.1a();L x}E 4t(){B x=P.1o();L x}G.d5=E(){};G.8b=E(){1u("8U");o.U.8U();js("9X")};G.bx=E(){if(ee!=4O()){o.U.6N();if(ee==0){if(v.hY==1&&v.wN==1){o.U.nA()}}}ee=4O();js("1a",ee);if(v.2x.on==1){if(26(wY)==\'E\'){if(!3Q&&v.2x.4o!=1&&v.wO&&v.wO!=\'\'&&ee>0){o.hK=1B wY();3Q=o.hK.f0()}}}};G.pu=E(){if(o.2B=="4f"){P?P.jO():\'\'}};G.x5=E(x){o.U.as();P.x6(x)};G.jO=E(){if(o.2B=="4f"&&P){L P.3P()}F{L H}};G.jo=E(){L P.jo()};G.ji=E(){L P.ji()};G.5J=E(x){1u("13F",x);if((o.2B=="aC"||o.2B=="ws"||(o.2B=="1I"&&(v.8j==0||8I()<2))||(o.2B=="2c"&&(v.9I==0||bK()<2)))&&I(o.3X[x])){B 1a=G.1a();o.2w>0?\'\':o.2w=1a;o.U.3Z(1a,K);6J(o.3X[x],H);o.U.2L()}if(o.2B=="1I"&&v.8j==1&&8I()>1){P.Bw(x)}F if(o.2B=="2c"&&v.9I==1&&bK()>1){P.Bp(x)}F if(o.2B=="4f"){P.vR(x)}};E wX(){if(o.5M&&o.2g){P.q3();V(B i=0;i<o.2g.Q;i++){P.Ck(o.2g[i],o.3n[i],(i==o.3O))}}}G.8g=E(x){1u("13A",x);P?P.dP(x):\'\';if(v.2x.on==1){if(3Q){3Q.dP(x)}}};G.x7=E(){wX()};G.wW=E(){P.q3()};G.cO=E(x){1u("13z",x);if(o.9i.Q>0){if(o.9i[x]){B 1a=G.1a();o.2w>0?\'\':o.2w=1a;o.U.3Z(1a,K);6J(o.9i[x],H);o.U.2L()}}F{if(o.2B=="1I"&&v.ba==1){P.BR(x)}F if(o.2B=="2c"&&v.fw==1){P.Bz(x)}}};G.pE=E(){B x=o.2f[o.2Z];x==2b?x=\'\':\'\';B y=io()&&v.hl==1&&v.8j==1&&x!=2I("2z");L(y?\'\'+2I("2z")+\' \':\'\')+x};G.pG=E(){B x=o.62[o.5v];x==2b?x=\'\':\'\';L x};G.io=E(){L io()};E io(){B x=K;if(P){if(o.2B=="4f"){x=P.2z()}if(o.2B=="1I"&&v.8j==1&&8I()>1&&v.hl==1){x=P.2z()}if(o.2B=="2c"&&v.9I==1&&bK()>1){x=P.2z()}}L x}E 8I(){if(o.2B=="1I"){L P.8I()}F{L 0}}E bK(){if(o.2B=="2c"){L P.bK()}F{L 0}}G.51=E(x){if(P&&(o.2B=="4f"||o.2B=="au"||I(v.fA))){P.51()}if(v.wP>0){J(o.4j,{"Y":(o.2k?"100%":o.aT-v.wP)})}if(o.3Q&&v.2x.wr==1){o.hK.51()}};G.3I=E(){L P.3I()};G.ae=E(){1u(\'ae\');o.al=0;o.1F?v.4d=1:\'\';6J(1e)};if(!I(o.1X)){nI()}if(I(v.1X)){if(v.1X!=\'\'){9l(v.1X,o.1X,v.i6);if(v.pI==1&&!o.1F){1p(o.1X)}}F{v.1X=22}}E aq(){e5=P?P.5P():\'\'}E wu(1e){53=1e.2D(" or ");V(B i=0;i<53.Q;i++){if(53[i].O(" j8 ")>-1){iO=53[i].2D(" j8 ");53[i]=iO[7b(0,iO.Q-1)]}}8J=0}E w9(){aq();if(e5=="5Z"||o.5Q){o.U.pD()}if(e5!=""){o.U.tB()}}E nI(){if(o.1X){o.1Q.2U(o.1X)}o.1X=1M("1S");J(o.1X,{"3S-2H":"1L","1t":v.jh,4y:"1t 0.5s"});if(v.wV==1){wU()}F{J(o.1X,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'W\':\'100%\',\'Y\':\'100%\'})}o.1Q.1H(o.1X)}E 6J(x,y,w4){v.iI==\'\'?v.iI=\';\':\'\';if(x.O(\'{\')>-1&&x.O(\'}\')>-1&&x.O(v.iI)>-1){B z=x.2D(v.iI);o.9i=[];V(B i=0;i<z.Q;i++){o.62[i]=z[i].1x(z[i].O("{")+1,z[i].O("}")-1);o.9i[i]=z[i].1x(z[i].O("}")+1);if(I(v.91)){if(v.91==o.62[i]){o.5v=i}}}x=o.9i[o.5v]}!I(53)?53=[]:\'\';x&&x!=\'or\'&&x!=\'x\'?wu(x):\'\';B ft=o.2B;if(53.Q>0){o.2B=kA(53[8J]);B f0=K;if(w4){f0=H}1e=53[8J];if(!f0&&x!=\'x\'&&P&&o.2B==ft&&(ft=="aC"||ft=="au"||(ft=="4f"&&o.1F&&!m8)||(ft=="1I"))){P.3c(1e);1u("3c")}F{1u("13v");mC();wb(1e)}if(o.gv){if(o.dM){P.dP(o.do)}F{if(o.8X!=o.gv){P.dP(o.4L[o.8X])}}}}if(!y){43(o.pz);o.pz=7o(w9,o.pB);if(I(v.2q)){if(v.2q!=\'\'){o.U.ip(v.2q)}}if(v.jS==1){if(v.jj==1&&o.1q.2A){}F{if(o.2B=="4f"){J(o.4j,{"1g":-cU,"1d":-cU})}F{2R(o.4j)}v.1y.1p=0}}}}E kA(x){B 1G="aC";if(x){if(x.O(".FF")>0){1G="1I"}F if(x.O(".FH")>0){1G="2c"}F if(x.O("ws://")==0){1G="ws"}F if(x.O(\'4f.7j/\')>-1||x.O(\'jb.be/\')>-1){if(26(nR)==\'E\'){1G="4f";if(v.t9==1){B y=\'8r://41.4f.7j/vi/\'+kB(x)+\'/\';vY(y+\'vZ.iT\',E(z){z>100?v.1X=y+\'vZ.iT\':v.1X=y+\'13w.iT\';if(o.1v){o.1v[o.3N][\'1X\']=v.1X}v.4d==1||o.1F?\'\':9l(v.1X,o.1X,v.i6)})}}F{1u("No vV")}}F if(v.au==1&&x.O(\'au.7j/\')>-1){1G="au"}F if(v.13y==1){13G(x)?1G="7Z":\'\'}}o.5M=1G=="aC"||1G=="1I"||1G=="2c"||1G=="ws";L 1G}E vY(1e,vX){B 41=1B 13H();41.cH=E(){vX(G.Y)};41.3c=1e}E wb(x){o.2B=kA(x);if(o.5M){P=1B FX(x,o.4j,K)}if(o.2B=="4f"){P=1B nR(x,o.4j)}if(v.au==1&&o.2B=="au"){P=1B 13Q(x,o.4j)}if(o.2B=="7Z"){P=1B 13P(x)}o.R?o.R.DN():\'\';B t=0;if(I(v.1o)){if(o.3m&&v.bL==1&&!o.1F){t=o.3m.9D().t}1K(E(){o.U.4t(t,v.1o)},100)}}E mC(){if(P){P.3Y();P=22;e5="ad"}if(3Q){3Q.3Y();3Q=22;3Q=2b;o.hK.6z();o.3Q=22;o.hK=22}};G.3Y=E(){mC()};G.13R=E(){53=[];mC()};G.6J=E(x,y,z){6J(x,y,z)};G.9l=E(x){9l(x,o.1X,v.i6)};G.2L=E(){if(P){lO=K;m8=K;if(o.5Q){o.4V.2L()}F{P.2L();v.hY==1?o.U.nA():\'\'}if(I(3Q)){3Q.2L()}if(o.7k){if(o.5M){if(o.a1>0&&!o.7k.13S()){o.7k.na()}}F{o.n8=[];o.R.kt("cl")}}if(o.5M&&v.Et>-1&&!o.om&&!o.1q.5n){if(o.a1>0){P.H4()}}}F{1K(G.2L,4F)}};G.wt=E(1c){if(o.3Q){if(v.2x.wr==1){if(o.vl[o.3Q]>2){L}}if(1c){1c.9V();1V.1c?1V.1c.6d=H:\'\'}B 1J=P;P.oj(H,o.3Q);3Q.oj(K,o.4j);P=3Q;3Q=1J;P.2L();3Q.2L();js("2x")}};G.wl=E(){P.3c(1e)};G.ue=E(){v.8S==1?o.8S.2X("1p"):\'\';o.nW=H};G.gH=E(){if(v.1y.vs){v.1y.vs=K;if(o.R){o.R.qv(1);o.R.tS()}}o.nW=K};G.wk=E(){if(I(o.3Q)){5T(o.3Q)?1p(o.3Q):1r(o.3Q)}};G.ec=E(){if(o.5M&&o.5h){o.ei=H;P.5h()}};G.c9=E(){if(o.5M&&o.8G){P.8G()}};G.m7=E(){if(v.a7==1&&I(v.wg)){if(!I(o.a7)){o.a7=1M("1S");J(o.a7,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'W\':\'100%\',\'Y\':\'100%\',"3S-2H":"1L","4C":we});o.1Q.1H(o.a7)}6h(o.a7);9l(v.wg,o.a7,\'3j\')}if(P){jt(0);P.m7()}};G.dD=E(){if(o.a7){2R(o.a7)}P?P.dD():\'\'};G.2Q=E(){if(o.5Q){o.4V.2Q()}F{P?P.2Q():1u("13T")}if(I(o.3Q)){3Q.2Q()}};G.mg=E(){m8=H;o.U.3Z(0,K);I(o.1X)?o.U.7I():\'\';6J(\'x\')};G.cQ=E(){P?P.cQ():\'\'};G.3Z=E(x){if(P){if(o.5Q){o.4V.3Z(x)}F{P.3Z(x);if(v.2x.on==1){if(3Q){3Q.3Z(x)}}}}};G.5d=E(){if(P){P.5d();o.5Q?o.4V.5d():\'\'}};G.6U=E(){if(P){P.6U();o.5Q?o.4V.6U():\'\'}};G.47=E(x){P?P.47(x):\'\';if(o.5Q){o.4V.47(x)}};G.lv=E(){L P?P.lv():K};G.5A=E(){L P?P.5A():K};G.5P=E(){L e5};G.ad=E(){L lO};G.1a=E(){B x=0;if(P){x=4O();if(o.5Q){B y=o.4V.4O();y?x=y:\'\'}F{if(4t()>0&&x!=4t()){o.zW=x+0.13O}}L x}F{L 0}};G.1o=E(){B x=0;if(P){x=4t();x==0&&I(v.1o)?x=v.1o*1:\'\';if(o.5Q){B y=o.4V.4t();y?x=y:\'\'}}L x};G.aO=E(){L P?P.aO():0};G.13N=E(){nI()};G.nK=E(){if(o.5M){P.4a()}};G.1A=E(x){if(7a(x).O(":")>0){B y=x.2D(":");B z0=o.3M/o.4J;B z1=o.P.3I();if(z1.W>0){z0=z1.W/z1.Y}B z=y[0]/y[1];if(z0!=z){if(o.5M){if(v.Fz==1){J(P.7C(),{\'3L-f4\':\'td\'})}F{J(P.7C(),{\'3L-f4\':\'3j\'})}}B w2=o.4J*z;B x2=w2/o.3M;B h2=o.3M/z;B y2=h2/o.4J;if(x2<1){o.3H.x0=o.3H.x=4u(x2);o.3H.y=1}F{o.3H.x=1;o.3H.y0=o.3H.y=4u(y2)}J(o.4j,{"2J":"3u("+o.3H.x+") 3g("+o.3H.y+")"});o.i0=x}}F{o.3H.x+=4u(x);o.3H.y+=4u(x);J(o.4j,{"2J":"3u("+o.3H.x+") 3g("+o.3H.y+")"})}if(v.2a.13M==1){if(!o.FY){if(o.3H.x>0||o.3H.y>1){FN(o.4j,\'o.ZS\');o.FY=H}}F{if(o.3H.x==1&&o.3H.y==1){J(o.4j,{"1g":0,"1d":0})}}}o.R.vd()};G.nN=E(){if(o.5M){J(P.7C(),{\'3L-f4\':\'tc\'})}o.3H.x=o.3H.x0;o.3H.y=o.3H.y0;J(o.4j,{"2J":"3u("+o.3H.x+") 3g("+o.3H.y+")"});o.R.vd();o.i0=22};G.gO=E(x,y){P.gO(x,y)};G.Yx=E(){B x=2b;I(o.2g)?I(o.2g[o.3O])?x=o.2g[o.3O]:\'\':\'\';L x};G.bo=E(){L bo()};E bo(){L 53.Q>0?(53[8J]?53[8J]:\'\'):\'\'};G.7C=E(){L P?P.7C():K};G.6b=E(){if(o.5M){P.6b()}};E nQ(){B 4k=dC(v.nS+\'?1e=\'+53[8J]);4k.cH=E(){if(G.dN==4&&G.5P==4X){if(G.cu){v.1R=G.cu;o.U.9N(\'1R\')}}};4k.ah()}};B FX=E(1e,1D,2x){B 1j=1M("5Y");B hg;if(v.TR==1){B cf=1M("bW");4E(cf,{"GH":"no","uJ":"H","GI":"H","3c":""});J(cf,{"1k":"29","W":"100%","Y":"100%","2Y":0});1D.1H(cf);B FU=1V.7o(E(){if(cf.dT.1P.dN==="TQ"){1V.43(FU);J(cf.qe.7A,{"2W":0,"2F":0});cf.qe.7A.1H(1j)}},100)}F{1D.1H(1j)}B 1I;B 4B=K;B oL=K;B 9M=K;B dV=-1;B 2c;B 7E=K;B pv=K;B pg=K;B ws;B oM=K;B 6q=K;B 9B=K;B 7N=0;B 8y=K;B 1N;B TS;B md=K;B gV=-1;B bc=-1;B pM;B jH;B jw;B gj;B TT;B GU=\'5Y/TU; TP="Yy.TK, TJ.40.2"\';J(1j,{\'1k\':\'29\',\'1g\':0,\'1d\':0,\'W\':\'100%\',\'Y\':\'100%\',\'3L-f4\':\'tc\',\'4y\':"Di 0.2s 2O",\'7v-Y\':\'2z\',\'5R-Y\':\'1L\',\'7v-W\':\'2z\',\'5R-W\':\'1L\'});if(v.Fz==1||v.3j==1){if(v.Rw==1||v.3j==1){J(1j,{\'3L-f4\':\'3j\'})}F{J(1j,{\'3L-f4\':\'td\'})}}if(v.o5==1&&o.1q.2A){4E(1j,{\'Fw\':\'1\'})}if(v.TL==1){4E(1j,{"TM":"FI","TN":"FI"})}4E(1j,{\'3c\':1e,\'x-3C-5h\':\'GD\'});if(v.TW==1){4E(1j,{\'2x\':\'K\'})}if(v.TX==1){4E(1j,{\'U5\':\'U6\'})}if(!o.1q.tv){4E(1j,{\'4a\':(v.4a==1&&v.4d==0?\'aD\':\'1L\')})}oF();if(2x){1j.4d=H;1j.3W=H}if(!I(1e)){1e=\'\'}if(1e.O(".FH")>0){6q=H;if(!I(1V.6S)){B fc=mW("FG.6S.3o","FG.6S.3o/U7/2c.7U.7v.js","U8");if(fc){o.k0=7o(Gp,100);fc.k4=E(e){43(o.k0);o.U.9Y();1N=\'8n U4 aN eE\';o.P.4R()}}}F{pw()}}F if(((3D.1I==1&&v.o8!=1)||1e.O(".FF")>0)&&(o.f5.O("7d")!=-1||I(1V.5i))){4B=H;3t{if(I(5i)){if(!5i.Gl()||(o.1q.6r&&v.U3==1&&!o.1q.5n)||(o.1q.6r&&o.1q.5n&&v.TZ==1)||(o.1q.iR&&v.TY==1)){1u(\'7d U0 \',5i.Gl());4B=K}F{if(v.4a==1||v.4d==1||v.Gk==1||2x){c6(K)}}}F{4B=K}}3b(1N){4B=K}}F if(1e.O("ws://")==0&&v.U1==1){8y=H;oN()}if(o.1q.tv&&v.4d==1&&!4B&&!6q&&!8y){1K(E(){o.U.9Y()},100)}if(v.7k==1){I(o.7k)?o.7k.a8():\'\';o.7k=1B U2()}E Gp(){if(I(1V.6S)){43(o.k0);pw()}}E pw(){6q=H;if(ou()){v.4a==1||v.4d==1||v.py==1?nh(K):\'\'}F{6q=K;1u("8n aN Fd")}}E nh(x){1u("8n");v.py=1;B dn={df:60};if(o.3X.Q>1){v.9I=0;v.Gq=H}F{v.Gq?v.9I=1:\'\'}if(o.9i.Q>1){v.fw=0;v.Gv=H}F{v.Gv?v.fw=1:\'\'}if(I(v.db)){if(I(v.db.df)){if(v.db.df>bn){v.db.df=bn}}if(26 v.db=="3L"){V(B 1f in v.db){dn[1f]=v.db[1f]}}}2c=6S.bq().f0();js("2c",2c,1);v.Gu==1&&!2x?2c.ao({\'pO\':{\'TI\':6S.TH.Tq}}):\'\';B ap=(v.4d==1||2x||x);2c.Tp(1j,1e,ap);if(v.Tr==1){B aa=v.Ts;if(aa){if(26(aa)=="4Z"){3t{aa=aa.1Y(/7Z\'qt/ig,\'"\');aa=4P.6l(aa)}3b(e){1u("pH 8n To 4P")}}if(26(aa)=="3L"){2c.Tn(aa)}}}2c.ao({\'ax\':{\'Tj\':H,\'Fv\':(dn.Ga==1&&!ap?0:dn.df)}});2c.ao({\'ax\':{\'Ti\':dn.df}});2c.ao({\'ax\':{\'Tk.ow\':K}});2c.ao({\'ax\':{\'Tl.ow\':K}});if(v.G4==1){2c.Tm(2b,H)}if(v.pF==1){2c.ao({\'ax\':{\'mS\':{\'mU\':{\'9Z\':K,\'5Y\':K}}}})}2c.on(6S.bq.2H.Tu,E(1E){if(!pv){1u("8n EZ");B q=GR();GB();o.jX=K;if(v.Tv==1){jw=1B TD(2c,2x)}9B=2c.TE();9B?1u("Fj"):\'\';if(v.9I==1){if(v.pF==1||q>0){o.2Z=q;2c.ao({\'ax\':{\'mS\':{\'mU\':{\'9Z\':K,\'5Y\':K}}}})}F{o.2Z=2c.jf("5Y").Q-1}o.R.dh(o.2Z);2c.mT("5Y",o.2Z);2c.mT("9Z",o.2Z)}o.U.9Y();pv=H}});2c.on(6S.bq.2H.TF,E(1E){if(dn.Ga==1&&!ap){2c.ao({\'ax\':{\'Fv\':dn.df}})}if(!pg){B 7h=2u(o.5v);if(7h>0&&v.fw==1){2c.By(2c.pS("9Z")[7h])}pg=H}});2c.on(6S.bq.2H.TC,E(1E){if(9B){o.U.4t(2c.1a(),2c.1o())}});2c.on(6S.bq.2H.TB,E(1E){2c.Tx(-1)});2c.on(6S.bq.2H.Tw,E(1E){if(1E.Ty=="5Y"&&1E.Tz!=1E.EN&&v.9I==1){o.2Z=1E.EN;o.R.dh(o.2Z);1u("8n F2 "+o.2Z)}});2c.on(6S.bq.2H.TA,E(1E){if(I(1E.pk)){if(1E.pk.1G=="U9"){js("Fo",1E.pk.1e)}}});2c.on(6S.bq.2H.Fg,E(1E){o.pt=1E;if(1E.1N=="Ua"){1N="8n "+1E.1N+": "+1E.1c.9w+", "+1E.1c.1c;1u(1N);o.P.4R()}F if(1E.1N=="UM"||1E.1N=="UL"){1N="8n "+1E.1N+" 1N: "+1E.1c;1u(1N);o.P.4R()}F if(1E.1N=="UN"||1E.1N=="UO"){1N="8n "+1E.1N+" 1N: "+1E.1c;1u(1N);o.P.4R()}F if(1E.1N=="6s"){1N="8n fm oy 1N UP";1u(1N);o.P.4R()}});7E=H}E c6(x){1u("7d");if(o.3X.Q>1){v.8j=0;v.EV=H}F{v.EV?v.8j=1:\'\'}if(o.9i.Q>1){v.ba=0;v.ET=H}F{v.ET?v.ba=1:\'\'}o.jU=K;dV=-1;B pn=K;if(v.6T&&v.EU==1){pn=H;v.EU=0}hg={pO:(v.EK==1&&!2x),UK:(v.4a==1||v.4d==1||2x||x)&&!pn,er:60,pK:60,UF:(v.EA>0?v.EA*2C:Ev),UE:(v.Ex>0?v.Ex*2C:Ev),UG:K};if(v.EB==1){hg[\'UH\']=E(4k,1e){4k.UI=H}}if(I(v.6W)){if(I(v.6W.er)){if(v.6W.er>bn){v.6W.er=bn}v.6W.pK=v.6W.er}if(I(v.6W.ED)){v.6W.pK=v.6W.er=v.6W.ED}if(26 v.6W=="3L"){V(B 1f in v.6W){hg[1f]=v.6W[1f]}}}1I=1B 5i(hg);js("1I",1I,1);1I.F9(1e);1I.UQ(1j);1I.on(5i.7F.UR,E(){1u("7d EZ")});1I.on(5i.7F.UZ,E(1c,1E){!2x?o.U.9Y():\'\'});1I.on(5i.7F.V0,E(1c,1E){if(!2x&&v.8j==1&&8I()>1){Gz();o.R?o.R.dh(o.2Z):\'\'}});1I.on(5i.7F.V1,E(1c,1E){pY()});1I.on(5i.7F.V2,E(1c,1E){pY()});1I.on(5i.7F.UY,E(1c,1E){if(!2x){if(1E.hS.8h!=9B){9B=1E.hS.8h;o.R.4v()}9B=1E.hS.8h;if(9B){1u("Fj");o.Fh=1e.O("?rB")>-1;if(1j.1o>0&&1j.dQ>0){if(1j.1o-1j.dQ<10){if(o.i3>0){if(o.i3==1j.dQ&&o.Fi==1j.1o){o.j2++;if(o.j2>2){o.j2=0;o.i3=-1;1I.9b();c6(H);8o()}}F{o.i3=-1}}F{o.i3=1j.dQ;o.Fi=1j.1o}}}}}if(v.8j==1){o.2Z=1I.jl;o.R?o.R.dh(o.2Z):\'\'}jm()});1I.on(5i.7F.UX,E(1c,1E){if(I(1E.Ft)&&!2x){js("Fo",1E.Ft.UT)}if(dV>-1){1I.H5=dV;dV=-1}oL=H;Fe()});1I.on(5i.7F.US,E(1c,1E){js("UU",1E,1)});1I.on(5i.7F.UV,E(1c,1E){!2x&&v.ba==1?p2():\'\'});1I.on(5i.7F.UW,E(1c,1E){if(!2x&&v.ba==1){oZ()}});if(v.UD==1){jH=1B UC(1I,2x)}F{1I.Uj=K}1I.on(5i.7F.Fg,E(1c,1E){v.1u==1?da.1u(1E):\'\';js(1E.1G+\'5i\',1E);o.pZ=1E;if(1E.fm){9W(1E.1G){1m 5i.F4.Ui:if(v.F5==1){1u("Uk");B 5Z=o.1O;!2x&&5Z?o.U.2Q():\'\';o.U.7I();7N=1;pL(5Z)}F{1N=1E.hS;o.2w>0||2x||v.8h==1||8y?\'\':o.2w=4O();1I.9b();if(!2x){o.P.4R()}}1l;1m 5i.F4.Ul:Fa();1l;7c:1N="7d fm 1N, 9b";1I.9b();!2x?o.P.4R():\'\';1l}}F{1u("7d ",1E.1G,1E.hS,(1E.jc?1E.jc.mK:\'\'));js("Um",(1E.jc?1E.jc.mK:\'\'));if(7N>0){7N=2;pL()}}});9M=H}E pY(){if(!2x&&v.8j==1&&8I()>1){if(o.2Z!=1I.jl){o.2Z=1I.jl;o.R?o.R.dh(o.2Z):\'\';1u("7d F2 "+o.2Z)}}}E oN(){if(I(1V.F8)){if(ou()){if(!I(o.ws)){o.ws=1B Uh()}ws=1B F8(1j,1e,{pO:H});oM=H}F{8y=K;1u("aN Fd")}}}E Fe(){pN()};G.6b=E(){pN()};E pN(){if(v.Dy){if(1j.fa.Q>0){if(v.6b==1){1j.fa[1j.fa.Q-1].gw="Ci"}F{1j.fa[1j.fa.Q-1].gw="3i"}if(!o.6b){o.6b=H;o.R.4v()}}F{if(o.6b){o.6b=K;o.R.4v()}}}}E pL(x){if(7N>0){3r(pM);pM=1K(Fb,v.Fc*2C)}}E Fb(){if(7N>0){1u("Ug")}if(7N==1){1I.F9(1e)}if(7N==2){1I.9b();c6(H);1j.1O()}}B mG=0;B mR=0;E Fa(){B 9d=pW.9d();if(!mG||(9d-mG)>cU){mG=pW.9d();1u("7d fm P 1N, 3t to fh");1I.Gw();1I.oK();if(o.1O){gQ()}}F{if(!mR||(9d-mR)>cU){mR=pW.9d();1u("7d fm P 1N, 3t to fh");1I.Uc();1I.Gw()}F{1u("7d fm P 1N, pV Ub")}}}1j.1w(\'Ud\',Ho);1j.1w(\'1N\',ph);1j.1w(\'ad\',8o);1j.1w(\'1O\',8V);1j.1w(\'5r\',aA);1j.1w(\'Cm\',bx);1j.1w(\'g6\',fG);1j.1w(\'jZ\',gR);1j.1w(\'Cn\',bu);1j.1w(\'Eu\',d5);1j.1w(\'9X\',8b);1j.1w(\'Cq\',am);1j.1w(\'Ue\',Hj);1j.1w(\'An\',pC);1j.1w(\'Cp\',pA);E Ho(){if(!4B&&!6q){!2x?o.U.9Y():\'\'}}E ph(){if(!4B&&!6q){if(1j.1N){1u(1j.1N,1j.1N.mK,1j.1N.9w);B x=1j.1N.mK;1N=2b;if(x==1){1N="Uf"}if(x==2){1N="oy"}if(x==3){1N="dm"}if(x==4){1N="aN eE"}1u("Uo i9: ",1N)}if(1N!=2b){4R()}}}E 4R(){!2x?o.P.4R():\'\'}E 8o(){!2x?o.P.8o():\'\'}E 8V(){if(!o.1F&&v.6T){1u(\'Hl 1O\');5r();o.U.2L();L}if(4B&&7N>0){}F{if(!2x){if(bc==-1){B x=K;if(4B){if(I(o.2l)||I(o.6i)){if(!o.U.ai()||5T(o.nw)){5r();x=H}}}if(!x){o.P.8V()}}}}}E aA(){!2x&&!o.Hm?o.P.aA():\'\'}E bx(){!2x?o.P.bx():\'\';if(bc>-1){if(4O()>bc){5r();bc=-1}}}E fG(){!2x?o.P.fG():\'\'}E gR(){!2x?o.P.gR():\'\'}E bu(){if(2x){od()}F{o.P.bu();oc();if(4B&&7N>0){7N=0;1u("Up up");1I.oK();gQ();o.R.2L()}if(I(v.fA)){2r()}}}G.fA=E(){L(1j.nG/1j.f3)};E od(){if(1j.f3>0){J(1D,{"Y":1D.2i/(1j.nG/1j.f3)-2u(v.2x.2Y)})}}E oc(){if(v.n4==1){43(o.oD);o.oD=7o(oG,100);oG()}}E oG(){if(1j){if(1j.f3>0){o.U.Ht(1j.nG/1j.f3);43(o.oD)}}}E am(){!2x&&!8y?o.P.am():\'\'}E d5(){!2x?o.P.d5():\'\'}E 8b(){if(4B&&7N>0){}F{!2x?o.P.8b():\'\'}}E Hj(){o.U.oE()}E ou(){B ne=1V.GO=1V.GO||1V.Ux;B hC=1V.GP=1V.GP||1V.Uy;B lq=ne&&26 ne.lq===\'E\'&&ne.lq(GU);B GS=!hC||hC.ol&&26 hC.ol.Uz===\'E\'&&26 hC.ol.6z===\'E\';L lq&&GS}E GR(){B q=0;if(!2x&&v.9I==1){o.2f=[];B x=2c.jf("5Y");if(x.Q>1){B y=\'\';V(B i=0;i<x.Q;i++){o.2f[i]=I(x[i].Y)?p7(x[i],v.GJ):i;if(o.2f[i]==y||v.GC==1){y=o.2f[i];if(I(x[i].bz)){o.2f[i]+=" "+hu+" &dI;"+2u(x[i].bz/2C)+\' \'+2I(\'bY\')+\'</6E>\';v.GC!=1?o.2f[i-1]+=" "+hu+" &dI;"+2u(x[i-1].bz/2C)+\' \'+2I(\'bY\')+\'</6E>\':\'\';y=\'\'}}F{y=o.2f[i]}if(I(v.42)&&q==0){if(v.42==o.2f[i]){q=i}}if(I(o.42)){if(o.42==o.2f[i]){q=i}}}o.2f[x.Q]=2I("2z")}}L q}E GB(){if(!2x&&v.fw==1){o.5v=0;B x=2c.pS("9Z");if(x.Q>1){V(B i=0;i<x.Q;i++){o.62[i]=i;if(I(x[i].bE)){o.62[i]=p4(x[i].bE)}F{if(I(x[i].GA)){o.62[i]=2I("6y")+" "+x[i].GA}}if(I(o.91)){if(o.91==o.62[i]){o.5v=i}}}}1u("8n Hc ",o.5v);o.R.k7(o.5v)}}B hu="<6E C=\'1t:0.5\'>";E Gz(){if(!2x&&v.8j==1){B x=1I.fC;B q=0;o.2f=[];if(x.Q>1){V(B i=0;i<x.Q;i++){if(I(x[i].Y)){B y=p7(x[i],v.GE);if(o.2f.O(y)>-1||v.UB==1){if(I(x[i].bz)){B yi=o.2f.O(y);yi>-1?o.2f[yi]+=" "+hu+" &dI;"+2u(x[yi].bz/2C)+\' \'+2I(\'bY\')+\'</6E>\':\'\';o.2f[i]=y+" "+hu+" &dI;"+2u(x[i].bz/2C)+\' \'+2I(\'bY\')+\'</6E>\'}}F{o.2f[i]=y}if(I(x[i].GG)){o.7Y[i]=x[i].GG[0]}}F if(I(x[i].8t)){o.2f[i]=x[i].8t}F{o.2f[i]=i}if(I(v.42)&&q==0){if(v.42==o.2f[i]){q=i}}if(I(o.42)){if(o.42==o.2f[i]){q=i}}}if(v.hl==1){o.2f[x.Q]=2I("2z")}F{1I.BK=0;1I.gg=0}if(v.GF==1||q>0){1I.gg=0;if(v.gz=="8e"||(!o.1F&&v.4a==0)){1I.pQ=q}F{if(v.gz=="eX"){1I.ns=q}}}F{v.hl==1?o.2Z=1I.fC.Q-1:o.2Z=1I.Uv}jm()}o.R?o.R.4v():\'\'}}E jm(){if(o.7Y.Q>0&&v.ba==1){p2();oZ()}}E p2(){if(!2x&&v.ba==1){B x=1I.oH;o.62=[];B 2v;if(x.Q>1){V(B i=0;i<x.Q;i++){2v=K;if(I(x[i].dG)&&o.7Y.Q>0){if(x[i].dG!=o.7Y[o.2Z]){V(B j=0;j<o.7Y.Q;j++){if(o.7Y[j]==x[i].dG){2v=H}}}}if(!2v){o.62[i]=I(x[i].8t)?p4(x[i].8t):i;if(I(v.91)){if(v.91==o.62[i]){o.5v=i;1I.jD=i}}}}}}}E oZ(){if(!2x){B x=1I.oH;B y=1I.jD;if(x[y].dG){if(o.7Y.Q>0){if(o.7Y[o.2Z]!=x[y].dG){V(B i=0;i<x.Q;i++){if(x[i].8t==x[y].8t&&x[i].dG==o.7Y[o.2Z]){1I.jD=i;y=i;1l}}}}}o.5v=y;1u("7d Hc ",o.5v);o.R.k7(o.5v)}};E p4(x){B r=x.kx();if(r=="Ur"||r=="en"){x="Uq"}F if(r=="Us"||r=="ru"){x="Русский"}L x};E p7(x,y){B r=x.Y+\'p\';if(x.Y<4X){r=\'oY\'}F if(x.Y>=4X&&x.Y<=cj){r=\'lN\'}F if(x.Y>cj&&x.Y<=iu){r=\'lK\'}F if(x.Y>iu&&x.Y<=4F){r=\'lG\'}F if(x.Y>4F&&x.Y<=bn){r=\'Hd\'}F if(x.Y>bn&&x.Y<=He){r=\'lP\'}F if(x.Y>He&&x.Y<=Hi){r=\'lZ\'}F if(x.Y>Hi&&x.Y<=Hh){r=\'qc\'}F if(x.Y>Hh){r=\'oS\'}if(x.W==Hg&&x.Y<=Uu){r=\'lN\'}F if(x.W==Hf&&x.Y<=H8){r=\'lK\'}F if(x.W==Th&&x.Y<=Tg){r=\'lG\'}F if(x.W==S7&&x.Y<=S6){r=\'lP\'}F if(x.W==S8&&x.Y<=S9){r=\'lZ\'}F if(x.W==Sa&&x.Y<=S5){r=\'qc\'}F if(x.W==S4&&x.Y<=S0){r=\'oS\'}if(v.1i.RZ==1&&I(v.1i[\'8t\'+r])){r=v.1i[\'8t\'+r]}F{if(y==1){r=2I(r)}if(y==2&&I(x.bz)){r=2u(x.bz/2C)+\' \'+2I(\'bY\')}}L r};E 4O(){if(6q){L 7E?2c.1a():0}F{L 1j.dQ}};G.2L=E(){B p=H;if(4B&&!oL){if(!9M){c6(H)}1I.oK()}if(6q&&!7E){nh(H);p=K}if(8y){if(!oM){oN()}ws.1O();p=K}if(1j.C.1g=="-S2"){G.dD()}p?gQ():\'\'};B S3;E gQ(){if(1e!="1L"){B oX=1j.1O();if(oX!==2b){oX.cn(E(){}).3b(E(1N){1u("Sb",1N.9w);if(1N.9w.O(\'ch\')==-1&&1N.9w.O(\'Sc by\')==-1){if(!o.1q.sn||1N.9w.O(\'dl p9 Sl\')==-1){if(v.GX==1&&!o.3W){o.U.5d();1j.1O()}F{o.R.2Q();o.U.7I()}}F{if(o.1q.tv&&(4B||6q)){}F{o.R.2Q();o.U.7I();js("Sm")}}}})}}}G.m7=E(){if(o.6i||o.2l){if(o.9v){c9()}if(!o.ei&&o.1q.2A&&o.1q.3C){if(!1j.3W){1j.3W=H;md=H}J(1j,{"1k":"29","1d":-3U,"1g":-3U});bc=4O();if(!8y){1j.1O()}if(bc==0&&o.2w>0){gj=o.2w}}}};G.dD=E(){if(!o.ei&&(o.1q.2A||o.1q.3C)){J(1j,{"1k":"tW","1d":0,"1g":0});if(I(v.fA)){2r()}if(md){!o.3W?1j.3W=K:\'\';md=K}if(gj>0){o.2w=gj;gj=0}bc=-1}};G.2Q=E(){5r()};E 5r(){if(8y){ws.5r()}F{1j.5r()}};G.cQ=E(){!1j.9t?2Q():gQ()};G.3Z=E(x){if(6q&&7E){2c.46(x)}F{if(4B){if(v.Sn==1&&x>0&&oi()){dV=1I.ns;1I.H5=0}}1j.dQ=x}};G.5d=E(){1j.3W=H};G.6U=E(){1j.3W=K};G.47=E(x){1j.1T=x};G.H4=E(){if(o.BG!=1j){B ch;B 9u;if(o.kY[1j]){ch=o.kY[1j];9u=o.oI[1j]}F{1V.p3=1V.p3||1V.Sj;9u=1B p3();ch=9u.Si(1j);o.kY[1j]=ch;o.oI[1j]=9u}B fU=9u.Se();fU.fU.4S=v.Et;ch.BI(fU);fU.BI(9u.Sd);o.om=H;o.BG=1j}};G.lv=E(){L!1j.9t};G.5A=E(){L v.8h==1||8y?H:9B};G.7C=E(){L 1j};G.os=E(){4E(1j,{\'R\':\'1\'});L H};G.4a=E(){4E(1j,{\'4a\':\'aD\'});if(4B&&!9M){c6(K)}if(6q&&!7E){nh(K)}};G.5P=E(){B 6C="5Z";if(1j.9t){6C="9t"}if(1j.ad){6C="ad"}L 6C};G.oj=E(x,y){2x=x;y.1H(1j);1D=y;if(x){1j.3W=H;od();if(o.2f.Q>0){if(4B){gV=o.2Z;1I.gg=0;1I.ns=0}}}F{if(!o.3W){1j.3W=K}1j.1T=v.1T;oc();if(o.2f.Q>0){if(4B){1I.gg=-1;if(gV>-1){gV<1I.fC.Q?1I.pQ=gV:\'\'}}}}};G.1a=E(){L 4O()};G.1o=E(){B x=1j.1o;if(6q&&7E){x=2c.1o()}if(I(v.4z)){x=v.4z}L x!=Sf&&!oe(x)?x:0};G.aO=E(){B x=0;if(1j.8f){if(1j.8f.Q>0){B y=4O();V(B i=0;i<1j.8f.Q;i++){if((y>=1j.8f.1F(i)||y>=1j.8f.1F(i)-100)&&y<=1j.8f.4z(i)){x=1j.8f.4z(i)}}x==0?x=1j.8f.4z(1j.8f.Q-1):\'\'}}if(I(v.4z)){x>v.4z?x=v.4z:\'\'}L x};G.2z=E(){L oi()};E oi(){B x=K;if(4B){if(9M){x=1I.BK}}F if(6q){if(7E){B y=2c.Sg();x=y.ax.mS.mU.5Y}}L x}G.3I=E(){L{"W":1j.nG,"Y":1j.f3}};G.3c=E(x){1e=x;o.af!=2?o.af=K:\'\';if(4B){4B&&1I?1I.9b():\'\';c6(H);oA()}F{4E(1j,{\'3c\':x,\'4d\':0});oF();5r()}};E oF(){if(o.1q.6r){B y=1j.fa;if(y){V(B i=0;i<y.Q;i++){y[i].gw="Sh"}}y=1j.oH;if(y){V(i=0;i<y.Q;i++){y[i].ow=(i==0?1:0)}}if(1V.RY){1j.1w(\'RX\',E(1c){o.5h=1c.RF=="RE";!2x?o.U.fV():\'\'})}}oA()}G.5h=E(){1j.RG()};G.8G=E(){c9()};E oA(){if(o.1q.3C){if(I(1j.RH)&&!o.1q.9j){o.8G=H}if(1P.RI&&!1j.RD){o.8G=H}}}E c9(){if(o.1q.6r){if(1j.RC==="mN-in-mN"){1j.Bs("cK");o.9v=K}F{1j.Bs("mN-in-mN");o.9v=H}}F{if(!1P.Ry){2o(\'1j.Rx().cn(p => {o.9v = H;}).3b(1N => {o.9v = K;});\')}F{2o(\'1P.Rz().cn(ok =>{o.9v = K;}).3b(1N => {});\')}}};E pC(){o.9v=H};E pA(){o.9v=K};G.Bp=E(x){if(7E){B x=2u(x);if(x==2c.jf("5Y").Q){o.2Z=2c.RA(\'5Y\')}F{2c.ao({\'ax\':{\'mS\':{\'mU\':{\'9Z\':K,\'5Y\':K}}}});2c.mT(\'5Y\',x);2c.mT(\'9Z\',x)}}};G.RB=E(x){if(o.ws){o.ws.BB(ws,x,-1)}};G.RJ=E(x){if(o.ws){o.ws.BB(ws,-1,x)}};G.Bz=E(x){if(7E){if(1j.8f.Q>0){2c.By(2c.pS(\'9Z\')[2u(x)])}}};G.Bw=E(x){if(9M){B y=2u(x);if(x==1I.fC.Q){y=-1;1I.gg=-1}if(v.gz=="eX"){1K(8b,4F);1I.ns=y}if(v.gz=="8e"){1u("7d 8e RK "+y);1I.pQ=y}if(y==-1){o.2Z=1I.jl}jm()}};G.jo=E(){L 1I};G.ji=E(){L 2c};G.8I=E(){L 8I()};E 8I(){B x=0;if(9M){if(1I.fC){x=1I.fC.Q}}L x}G.bK=E(){L bK()};G.51=E(){2r()};E 2r(){if(v.fA){2X(\'1A\',7a(v.fA).1Y(\'/\',\':\'))}}E bK(){B x=0;if(7E){x=2c.jf("5Y").Q}L x}G.BR=E(x){if(9M){1I.jD=2u(x)}};G.gO=E(x,y){if(y=="1I"&&9M&&jH){jH.RT(x)}if(y=="2c"&&7E&&jw){jw.RS(x)}};G.dP=E(x){if(x){1j.RU=x}};G.q3=E(){B x=1j.RV;B y=[];V(B i=0;i<x.Q;i++){if(x[i].ks.kx()==\'7h\'){x[i].6n("dH",pJ);y.3d(x[i])}}V(B i=0;i<y.Q;i++){1j.2U(y[i])}};G.Ck=E(x,y,z){if(x!=\'\'){if(x.O(\' or \')>0){B xx=x.2D(\' or \');x=xx[0]}B 7h=1P.1M(\'7h\');7h.5N(\'3c\',x);7h.5N(\'bj\',y);7h.5N(\'RR\',\'Cj\');7h.5N(\'gw\',\'Ci\');if(z){7h.5N(\'7c\',\'\')}1j.1H(7h);7h.1w("dH",pJ)}};E pJ(e){if(e.4h.bj&&o.5E){V(B i=0;i<o.3n.Q;i++){if(o.3n[i]==e.4h.bj){o.5E.aw(i)}}}};G.po=E(){L 1N};G.3Y=E(){43(o.k0);4B&&1I?1I.9b():\'\';6q&&2c?2c.RQ():\'\';8y&&ws?ws.2v():\'\';1j.6n(\'1N\',ph);1j.6n(\'ad\',8o);1j.6n(\'1O\',8V);1j.6n(\'5r\',aA);1j.6n(\'Cm\',bx);1j.6n(\'g6\',fG);1j.6n(\'jZ\',gR);1j.6n(\'Cn\',bu);1j.6n(\'Eu\',d5);1j.6n(\'9X\',8b);1j.6n(\'Cq\',am);1j.6n(\'An\',pC);1j.6n(\'Cp\',pA);1j.3c=\'\';if(1D.ks=="BA"){1D.qe.7A.2U(1j)}F{1D.2U(1j)}1j=22}};B rb=E(){B b=[];B dB=[];B 4W=[];B 9X=K;B ju;B 9p=K;B 1i;B 1b;if(o.4Y){o.4Y.1p();o.4Y=22}B kn;o.4L=[0.25,0.5,0.75,1,1.25,1.5,2];if(v.1i.RN==1&&I(v.1i.gy)){v.1i.gy=v.1i.gy.1Y(/\\n/ig,\'\');o.4L=v.1i.gy.2D(",")}o.gv=o.4L.O(\'1\')>-1?o.4L.O(\'1\'):o.4L.O(1);o.8X==3?o.8X=o.gv:\'\';!I(v.1i.1A)?v.1i.1A=5:\'\';o.Ce=[\'+ \'+v.1i.1A+\'%\',\'&RO; \'+v.1i.1A+\'%\',\'100%\'];B nk=K;B 8w=0;B kV=0;B fi=K;B uj=H;B bg=1B AF();B 1i;B 6a=[];B nP=K;B nO=K;B fS=0;B aB=[];if(v.fE.1k=="R-2j"){v.fE.1k="R"}V(B y in v){if(v.2G(y)){if(y.O("8R")==0&&v[y]){!I(v[y].nY)?v[y].nY=v[y].6a:v[y].6a=v[y].nY;6a[v[y].6a]=y;if(v.fE.1k!="R"){if(v[y].1k=="R-2j"){aB.3d([y,v[y].6a]);nP=H}F{if(v[y].1k=="R"||v[y].1k==2b){nP?nO=H:\'\'}}}fS<v[y].6a?fS=v[y].6a:\'\'}}}if(nO){aB.BX(E(a,b){L a[1]-b[1]});V(B i=0;i<aB.Q;i++){6a[v[aB[i][0]].6a]=22;v[aB[i][0]].6a=fS+1;fS++;6a[v[aB[i][0]].6a]=aB[i][0]}}if(v.1y.1p==1&&v.1y.ci==1){o.1y=1M("1S");o.1Q.1H(o.1y);J(o.1y,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'W\':\'100%\',\'Y\':\'100%\',\'4y\':\'1g 0.3s 8q-6w\',\'3S-2H\':\'1L\'})}B 7i=1M("1S");if(v.1y.1p==1&&v.1y.ci==1){o.1y.1H(7i)}F{o.1Q.1H(7i)}J(7i,{\'1k\':\'29\',\'1d\':0,\'2M\':0,\'W\':\'100%\',\'Y\':v.1y.h});7i.aI=E(){!o.1q.2A?o.U.BY():\'\'};if(o.qN){2R(bg.c());2R(7i)}V(B i=1;i<6a.Q;i++){if(6a[i]){B y=6a[i];if(y){if(o.1q.2A){if(v[y].1h=="1T"&&v.So==1&&o.1q.8T){v[y].gI=0}F{if(v[y].1h=="1T"||(v[y].1h=="2k"&&v.Sp)){v[y].on=0}}}if(o.qN){v[y].on=0}if(v[y].on==1){B 1h=v[y].1h;if(1h=="2K"||1h=="1T"){b[y]=1B Dp(y,1h);b[y].2r(b[y].s("w"))}F{b[y]=1B DK(y)}dB.3d(y);if(b[y].g("1h")=="1R"){if(b[y].s("1C")==\'\'){if(b[y].s("B")!=\'\'){if(!I(v[b[y].s("B")])){b[y].1Z("2p",K)}}F{b[y].1Z("2p",K)}}}if(b[y].g("1h")=="4o"){B lu=b[y].s("2V");if(lu){if(lu.O("2X:")==0&&lu.O(",0/1")>0){B z=lu.2D(",");2X(z[0].1x(4))==0?b[y].fo(0):\'\'}}}b[y].1Z("1A",b[y].s("1A"))}}}}if(I(v.1i)){if(26(7l)==\'E\'){1i=1B 7l("1i");v.1i.8Y==1?1i.1r():1i.1p()}F{o.SZ=H}}if(I(v.1b)){if(26(7l)==\'E\'){1b=1B 7l("1b");if(I(o.1b)){1b.vf(o.1b);if(v.1b.jg==0||!I(v.1b.jg)){v.1b.8Y==0?1b.1p():\'\'}F{1b.1r()}}F{1b.1p(1)}fM()}}if(I(v.BT)){if(v.BT.on==1){o.3q=1B o0()}}u1();2r(H);4G();vv();uj=K;E Cb(S){B x=0;B SY=K;if(S){if(S.g("1h")==\'2K\'){x=4W.1d+S.s("3E");if(4W.fk!=22){}F{4W.fk=[]}}F{if(4W.fk!=22){B ay=S.g("W")+S.s("4i")+S.s("3E");if(nv(S)){ay=0}if(S.s("3i")==1&&!S.g("1r")){ay=0}if(S.s("a4")>0){ay=0}x=bg.g("w")-v.1y.mx*1-ay+S.g("W")/2+S.s("3E");B i=0;4W.2j-=ay;V(i=0;i<4W.fk.Q;i++){B aS=b[4W.fk[i]];if(aS.s("a4")>0){J(aS.c(),{"1d":(aS.g("x0")-ay)})}F{J(aS.c(),{"1d":(aS.g("x")-ay)})}aS.1Z("x0",aS.g("x"))}4W.fk.3d(S.g("1f"));S.1Z(\'di\',1)}F{if(S.s("3i")==1&&!S.g("1r")){if(S.g("1h")=="1T"){if(S.s("1p")==1&&S.s("gI")==1&&fi){8w+=S.g("W")+S.s("3E")+S.s("4i");fi=K}}}F{if(S.s("a4")>0){x=4W.1d+S.s("3E")+S.s("4i")}F{B 2v=K;if(S.g("1h")=="1T"){if(S.s("1p")==1&&S.s("gI")==1){if(!o.d8&&!o.8p){2v=H;fi=K}F{if(!fi){8w-=S.g("W")+S.s("3E")+S.s("4i");fi=H}}}}if(nv(S)){2v=H}if(!2v){4W.1d+=S.g("W")/2+S.s("3E");x=4W.1d;4W.1d+=S.g("W")/2+S.s("4i")}F{x=4W.1d}}}}}}L x}E ur(S){B W=o.2k&&v.1y.hb==0?o.8P:o.3M;B Y=o.4J;B an=0;if(S!=bg){an=W/2+S.s("3E")-S.s("4i")}B cI=Y/2;B nM=S.g("W");B mI=S.g("Y");B 1k=S.s("1k");if(1k.O("6F")>-1){an=o.3M/2+S.s("3E")-S.s("4i")}if(1k.O("1g")==0){cI=mI/2+(S.s("Cd")*o.4J/100)}if(1k.O("2M")==0){cI=o.4J-(S==bg?mI:mI/2)-(S.s("BZ")*o.4J/100)}if(1k.O("2j")>-1){an=o.3M-nM/2+S.s("3E")-S.s("4i")-(S.s("T0")*o.3M/100)}if(1k.O("1d")>-1){an=nM/2+S.s("3E")-S.s("4i")+(S.s("jn")*o.3M/100)}if(1k=="cv"){an=-o.sS/2+(S.s("jn")*o.sS/100)+S.s("3E")-S.s("4i");cI=-o.mh/2-(S.s("BZ")*o.mh/100)+(S.s("Cd")*o.mh/100)}if(1k.O("R")>-1){B cx=Cb(S);an=(bg?(bg.c()?4Q(bg.c().ny):0):0)+cx;if(1k=="R-2j"){an+=8w}if(v.1y.1k=="1g"){cI=v.1y.h/2-(v.cB<0?v.cB:0)}F{cI=Y-v.1y.h/2}}L{x:an,y:cI+S.s("7n")-S.s("9q")}}E 2r(7U){B w=o.2k&&v.1y.hb==0?o.8P:o.3M;B h=o.4J;J(bg.c(),{\'1g\':(v.1y.1k=="1g"?0:o.4J-v.1y.h)-v.cB});bg.1Z("y0",(o.4J-v.1y.h-v.cB));if(v.1y.hb==0&&bg){J(bg.c(),{\'W\':w,\'1d\':0,\'2F-1d\':0});bg.1Z("w",w);if(o.2k){J(bg.c(),{\'1d\':\'50%\',\'2F-1d\':-w/2})}}4W={"1d":v.1y.mx*1,"2j":(bg.g("w")-v.1y.mx*1)};B nZ=K;if(!bg.g("1r")){bg.1Z("2p",H);nZ=H}B 1f;V(B i=0;i<dB.Q;i++){1f=dB[i];if(b[1f]){B cc=ur(b[1f]);if(cc){b[1f].1Z("x0",cc.x);b[1f].1Z("y0",cc.y);if(b[1f].s("3i")==1&&!b[1f].g("1r")&&!7U){tD(b[1f])}F{J(b[1f].c(),{"1k":"29","1d":b[1f].g("x0"),"1g":b[1f].g("y0")})}}}}if(nZ){bg.1Z("2p",K)}8w=0;V(1f in b){if(b.2G(1f)){if(b[1f].s("1k")=="R-2j"&&b[1f].g("1h")!="2K"&&8w>-1){8w=4W.2j-4W.1d}if(b[1f].g("1h")=="2K"&&bg){B cr;if(b[1f].s("T1")==1){cr=b[1f].s("w")}F{if(b[1f].s("1k").O("R")>-1){cr=4W.2j-4W.1d-b[1f].s("3E")-b[1f].s("4i");J(b[1f].c(),{"1d":(4Q(bg.c().ny)+4W.1d+b[1f].s("3E")+cr/2)});8w=-1}F{cr=bg.g("w")-b[1f].s("3E")-b[1f].s("4i");J(b[1f].c(),{"1d":(4Q(bg.c().ny)+b[1f].s("3E")+cr/2)})}}b[1f].1Z("x0",b[1f].g("x"));b[1f].2r(cr)}}}if(1i){gU(1i)}if(1b){gU(1b)}nk||o.2k||kV!=8w?4G():\'\'}E tD(b){B 1d=0;B 1g=0;if(b.s("1k").O("2j")>-1&&b.s("1k").O("R")==-1){1d=o.3M+b.g("W")+10}if(b.s("1k").O("1d")>-1){1d=-b.g("W")-10}if(b.s("1k").O("1g")>-1){1g=-b.g("Y")*2}if(b.s("1k").O("2M")>-1||b.s("1k").O("R")>-1){1g=o.4J+b.g("Y")+b.g("W")+10}if(1d>0){J(b.c(),{"1d":1d})}if(1g>0){J(b.c(),{"1g":1g})}}E gU(x){B 1g=-3U;x.gT();B y=o.4J-v.1y.h*(x.s("1k").O("1g")>-1?1:2);B gu=y-(o.2k&&!o.1q.2A?(100+x.s("nu")*1):x.s("nu"));gu<100?gu=100:\'\';J(x.c(),{\'5R-Y\':gu});x.co()?J(x.co(),{\'5R-Y\':gu}):\'\';if(x.g("1r")){1g=o.4J/2-x.g("Y")/2+x.s("7n")-x.s("9q");if(x.s("1k").O("1g")>-1){1g=x.s("7n")-x.s("9q")}if(x.s("1k").O("2M")>-1){1g=o.4J-v.1y.h-x.g("Y")+x.s("7n")-x.s("9q")}1g<0?1g=0:\'\'}if(x.s("1k").O("2j")>-1){J(x.c(),{"1k":"29","2j":x.s("4i")-x.s("nF"),"1g":1g})}F if(x.s("1k").O("1d")>-1){J(x.c(),{"1k":"29","1d":x.s("3E"),"1g":1g})}F{if(x.g("1f")=="1b"&&x.s("3J")==1){J(x.c(),{"1k":"29","1d":o.3M/2-x.g("W")/2+x.s("3E")/2-x.s("4i")/2,"1g":1g})}F{B l=o.3M/2-x.g("W")/2+x.s("3E")-x.s("4i");J(x.c(),{"1k":"29","1d":(l>0?l:0),"1g":1g})}}x.9r()};G.dS=E(1f){B S=b[1f];B 1h=S.g("1h");if(1h){B d=1B 6p();o.a1=d.9a();if(1h&&1h!=""){4U(S)}}};G.nV=E(z,x,y){V(B 1f in b){if(b.2G(1f)){if(b[1f].s(z)==x){b[1f].1Z(y?"6h":"2R")}}}};G.qI=E(x,s){B y=7H(s,x);L y};E 4U(S,1G){o.k3=H;kn=S;B a=S.g("1h");if(a=="1O"){o.U.2L();if(v.2a.on==1&&v.2a.2E==1&&v.2a.nU==1){7m(\'1O\',1)}}F{if(a=="5r"){o.U.2Q();if(v.2a.on==1&&v.2a.2E==1&&v.2a.nU==1){7m(\'1O\',0)}}if(a=="2v"){o.U.o6()}}if(a=="C2"){o.U.3Z(0,K)}if(a=="2k"){!o.5Q?o.U.7M():\'\'}F{if(a=="Bn"){o.U.8l()}}if(a=="2K"){B ld=o.P.1o();B lt=S.g("2y")*ld;if(v.4p>0){ld-=v.4p;lt=S.g("2y")*ld+v.4p}if(v.Bm>0){if(v.Bm/ld<=1-S.g("2y")){L}}o.U.3Z(lt,H);if(o.3m){o.3m.o1(lt,ld);o.2w>0?o.2w=2b:\'\'}}if(a=="1T"){B x=S.g("2y");x<0.SS?x=0:\'\';x>1?x=1:\'\';if(S.s("e6")=="5C"){x=4u(x*o.4L.6x(-1)[0]).rE(1);o.U.8g(x,1)}F{if(o.5g&&v.v4==1){3l.7Q("vz",x);if(S.g("2y")>0||o.1q.9j||v.iP==0){3l.oa("iF")}F{3l.7Q("iF",1)}}o.U.47(x)}}if(a=="5m"){if(o.5g&&!o.1q.9j&&v.iP==1){3l.7Q("iF",1)}o.U.5d();if(v.2a.2E==1&&v.2a.AJ==1){7m(\'5m\',0)}}F{if(a=="aP"){if(o.5g){3l.oa("iF")}o.U.6U();if(v.2a.2E==1&&v.2a.AJ==1){7m(\'5m\',1)}}}if(a.O("1a")==0){S.SR()?S.gq():S.On()}if(a=="c5"){o.P.rj()}if(a=="1A+"){o.P.bi(0.1)}if(a=="1A-"){o.P.bi(-0.1)}if(a=="1A"){o.P.bi(0)}if(a=="8h"){2X("AG");S.1Z("rt",1);S.1Z("np",1)}if(a=="3q"){js("3q");tO()}if(a=="1i"){if(1i){if(!1i.g("1r")){1i.1r()}F{1i.1p()}}}if(a=="1b"){if(o.eR==a){L}if(I(v.1b)){if(1b.g("1r")){1b.1p()}F{1K(E(){1b.1r()},100)}}}if(a=="8e"){o.R.cN()}if(a=="e4"){o.R.es()}if(a=="4o"){if(S.s("fu")==1&&S.s("2V")!=""){B x=4s(S.s("2V"));if(o.eR==a+x){L}if(x.O(\'{1a}\')>-1){x=x.1Y(\'{1a}\',(I(o.3m)?o.3m.9D().t:o.P.1a()))}if(x.O(\'{3p}\')>-1){x=x.1Y(\'{3p}\',o.P.bo())}if(x.O(\'{1R}\')>-1){x=x.1Y(\'{1R}\',v.1R.1Y(/,/ig," "))}if(x=="5h"){o.P.ec()}if(x=="ST"){o.U.3Z(S.s("jn")*o.P.1o()/100);!o.1O?o.U.2L():\'\'}S.s("AE")==1?o.U.2Q():\'\';B y=x.2D(",");if(x.O("2X:")==0){B z=x.1x(4).2D(";");V(B i=0;i<z.Q;i++){y=z[i].2D(",");if(y.Q>1){if(y[0]==\'46\'){if(v.2a.2E==1&&v.2a.tz==1){7m(\'46\',y[1]>0?1:0)}}2X(y[0],y[1],S);y[1]==\'0/1\'?qA():\'\'}F{if(y[0]=="AK"&&v.SU==1){B ss=2X(y[0]);if(ss){if(ss.O("1E")>-1){B 41=1P.1M(\'41\');41.5N(\'3c\',ss);J(41,{1k:"nJ",2j:(I(v.lL)?v.lL:20),2M:(I(v.lL)?v.lL:20),W:0,4y:"W 0.5s bF-SV(.75,-0.5,0,1.75)"});41.C.4C=AL;1P.7A.1H(41);1K(E(){J(41,{W:(I(v.AQ)?v.AQ:4X)})},1);41.aI=E(){G.5k.2U(G)}}}F{1u(y[0]+" 1N")}}F{2X(y[0])}}}}F{if(x.O("js:")==0){if(x.O("(")>0&&x.O(")")>0){2o(x.1x(3))}F{2o(y[0].1x(3)+\'(\'+(I(y[1])?\'"\'+y[1]+\'"\':\'\')+(I(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}}if(x.O("1c:")==0){rC(x.1x(6),o.P.1a())}if(x.O("3f")==0||x.O("/")==0||x.O("?")==0||x.O("1e:")==0){x.O("1e:")==0?x=x.1x(4):\'\';1V.5S(x,S.s("AP"))}if(x.O("6s")==0){o.U.lR()}if(x=="2X:8G"){o.P.c9()}}if(x.O("1i#")>-1){if(1i){B si=x.1x(9).2D(",");if(1i.g("1r")&&1i.g("5S")==si[0]){1i.1p()}F{V(B i=0;i<si.Q;i++){i==0?1i.1r():\'\';1i.5S(si[i])}}}}if(x.O("1i:")>-1&&v.1i.Tc==1){if(!o.4Y){o.4Y=1B Td()}if(1G=="8s"){o.4Y.1r(x)}F{o.4Y.qm(x)}}if(x=="Ed"){o.U.ef();o.uZ=0;S.1Z("2R");B bl=7H("2V","4c");if(bl){bl.1Z("2R")}}if(x=="4c"){S.6j("OK");S.s("mQ")?1V.9k.8B=4s(S.s("mQ")):\'\'}}}};G.1R=E(t){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="1R"){if(b[x].s("B")==t||t=="1R"){if(v[t]!=\'\'||b[x].s("1n")!=\'\'){b[x].1Z("2p",H)}F{b[x].1Z("2p",K)}b[x].6j(v[t])}}}}tM()};G.AN=E(){tM()};G.tS=E(){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="4o"){if(b[x].s("1G")=="1C"){b[x].94()}}}}};E tM(){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="4o"){if(b[x].s("1G")=="1C"){b[x].Dr(H)}}}}}E tO(){if(I(o.3q)){o.3q.fF()}}G.AD=E(){tO()};G.FE=E(){if(v.1R!=\'\'){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="1R"){B y=K;if(!b[x].g("1r")){y=H;b[x].1Z("2p",H)}b[x].6j(v.1R);if(y){b[x].1Z("2p",K)}}}}}};G.Tf=E(){u1()};E u1(){if(v.gF){if(26(v.gF)=="3L"){V(B x in v.gF){if(v.gF.2G(x)){un(x,v.gF[x])}}}}};G.Tb=E(y,z){un(y,z)};E un(y,z){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="4o"&&b[x].s("1G")=="1C"){if(b[x].s("5z")==y){if(!b[x].g("1r")||b[x].s("3i")==1){b[x].1Z("Dl");b[x].1Z("2p",H)}b[x].6j(z)}}}}};G.51=E(){2r()};G.Ta=E(){2r(H)};G.um=E(){gU(1i)};G.gT=E(){gU(1b)};G.2L=E(){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="1O"){b[x].On()}}}if(G.cS()&&v.1b.dZ==1){G.bh()}o.1O=H;4G()};G.2Q=E(){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="5r"||b[x].g("1h")=="2v"){b[x].gq()}}}if(1b){if(v.1b.Dv==1&&!1b.4n()){1b.1r()}}o.1O=K;G.6N();4G();if(v.1y.1p==1&&v.1y.dJ==1){gr(H)}};G.5d=E(){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="5m"){b[x].On()}G.47(0)}}4G()};G.6U=E(){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="aP"){b[x].gq()}}}if(v.1T<0.1){v.1T=0.5;o.U.47(v.1T)}F{G.47(v.1T)}4G()};G.47=E(1T,y){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="1T"){if(b[x].s("e6")!="5C"){b[x].6D(1T,1,(y=="no"?y:H))}}if(b[x].g("1h")=="5m"){b[x].qx(1T)}}}4G()};G.7M=E(){B bl=7H("1h","2k");if(bl){bl.On();bl.1Z("1A",bl.s("1A"))}4G();nk?1K(4G,4F):\'\';dF()};G.8l=E(){B bl=7H("1h","2k");if(bl){bl.gq()}2r();43(o.gt);4G()};G.8o=E(){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="1O"){b[x].qh()}}}};G.EJ=E(){4G()};E 4G(){V(B x in b){if(b.2G(x)){if(b[x].g("1h")!="fs"){bs(b[x])}}}bs(bg);if(kV!=8w){kV=8w;2r()}if(v.1y.1p==1&&v.1y.ci==1){eD(!o.fq&&!o.5y&&!o.2k&&o.1O&&v.1y.dO!=1&&!o.5Q)}};E ky(){B 1r=9p&&v.1y.fL==1;if(!o.1O&&v.1y.1p==1&&v.1y.dJ==1){1r=K}if(1r){V(B x in b){if(b.2G(x)){if(b[x].g("1h")!="fs"){bs(b[x],K)}}}J(o.1Q,{"6e":"7c"});o.ls=H;bs(bg,K);if(bg.g("1r")){gH()}eD(K)}}E gr(){B 1p=o.1O&&v.1y.fL==1&&!o.3B&&!o.ca;if(!o.1O&&v.1y.1p==1&&v.1y.dJ==1){1p=H}if(1i){if(1i.g("1r")&&o.ul){1p=K}}if(1p){V(B x in b){if(b.2G(x)){if(b[x].g("1h")!="fs"){bs(b[x],H)}}}bs(bg,H);if(!bg.g("1r")){9p=H;o.P.ue();if(o.1O){J(o.1Q,{"6e":"1L"});o.ls=K}}eD(H)}}E dF(){if(v.1y.fL==1){if(v.1y.dO==1&&!o.2k&&!o.aH){}F{43(o.gt);o.gt=7o(gr,((v.1y.8E>0?v.1y.8E:v.1y.fP)*2C))}}}E bs(S,cs){B 1p=K;B 1r=K;B cm=K;if(v.1y.1p==1){if(!o.fq&&!o.5y&&!o.2k&&o.1O&&v.1y.dO!=1&&!o.5Q){1p=H;1r=K;cm=H}F{1p=K;1r=H}if(I(cs)&&!o.5Q){1p=cs;1r=!1p}if(v.1y.1p==1&&v.1y.ci==1&&(S.s("1k").O("R")==0||S.s("1h")=="2K")){1p=K;1r=H}if(v.1y.dJ==1&&!o.1O){1p=H;1r=K;cm=K}}F{if(S.s("1p")!=1){1r=H}}if(1r&&!o.ls){J(o.1Q,{"6e":"7c"});o.ls=H}B a=S.g("1h");if(a=="4o"&&S.s("1k").O("R")==-1){1p=K;1r=H}if(o.5Q){if(a=="2K"){if(o.P.1o()==-1){1p=H;1r=K}}}B us=K;B hp=nv(S);if(S.s("1p")==1){if(S.s("T6")==1){if(cm||cs||(o.1O&&!o.5y)){!cm&&!cs?\'\':hp=H}}if(S.s("T5")==1){if(o.1O&&!o.5y){hp=H}}if(S.s("AB")==1||S.s("Av")==1||S.s("Bc")==1){nk=H}}if(hp){1p=H;1r=K}F{!1p?1r=H:\'\'}if(S.s("1h")=="1T"){if(S.s("1p")==1&&S.s("gI")==1){1p=H;1r=K;if(!cm&&(o.8p||o.d8)&&!cs&&S.s("cJ")!=1){1p=K;1r=H}F{us=H}}}if(o.cP||(!o.1F&&v.1y.1p==1&&v.1y.tf==1)||(!o.aD&&v.1y.1p==1&&v.1y.B9==1)){if(S.s("1k").O("R")>-1||S.s("1k").O("2M")>-1){1p=H;1r=K}if(v.1y.dO==1&&!o.2k){1p=K;1r=H}}if(1i){if(1i.g("1r")&&v.1i.8Y!=1){cm=K;cs=K}}if(a=="3q"){if(I(o.3q)){if(o.3q.4n()){1p=H;1r=K;S.1Z("5O","1L")}}}if(a=="1b"||a=="8e"||a=="e4"||S.s("Ar")==1){if(1b){if(1b.4n()&&S.s("Ar")!=0){1p=H;1r=K;S.1Z("5O","1L")}}F{1p=H;1r=K}}if(o.T8==1){1p=H;1r=K}if(us){B cc=ur(S);if(cc){cc.y>0?S.1Z("y0",cc.y):\'\';J(S.c(),{"1k":"29","1g":S.g("y0")})}}if(1p){bf(S,(uj?H:K))}if(1r){AX(S)}if(S==bg){if(!1p&&1r){gH();6h(7i);9p=K}if(1p&&!1r){o.P.ue();d4();2R(7i);9p=H}if(1b){if(v.1b.8Y==1&&!1b.4n()){if(1r||o.cP){if(v.1b.Ap==1&&o.2k){}F{if(!1b.g("1r")){if(v.1b.Au==1){!o.1O?1b.1r():\'\'}F{1b.1r()}}}}F{if(1p&&1b.g("1r")){1b.1p()}}}}}};E nv(S){B x=K;B a=S.g("1h");if(S.s("1p")==1){if(S.s("CB")==1){o.1O?x=H:\'\'}if(S.s("dJ")==1){!o.1O?x=H:\'\'}if(S.s("SQ")==1){o.1q.ug?x=H:\'\'}if(S.s("SP")==1){o.1q.2A?x=H:\'\'}if(S.s("Av")==1){if(o.3M>S.s("AA")){S.1Z("cJ",1);x=H}F{S.1Z("cJ",0)}}if(S.s("AB")==1){if(o.3M<=S.s("Az")){S.1Z("cJ",1);x=H}F{S.1Z("cJ",0)}}if(S.s("Sy")==1){o.1F?x=H:\'\'}if(S.s("Sx")==1){if(o.1F||!o.3m||o.P.5A()){x=H}if(o.3m){if(o.3m.9D().t==0){x=H}}}if(S.s("tf")==1){!o.1F?x=H:\'\'}if(S.s("Sz")==1){if(I(S.s("Ax"))){3D[S.s("Ax")]?x=H:\'\'}}if(S.s("SA")==1&&o.1q.5n){!o.1F||o.kT?x=H:\'\'}if(S.s("SB")==1){!o.P.ad()?x=H:\'\'}if(S.s("Sw")==1){!o.P.5A()?x=H:\'\'}if(S.s("Sv")==1){!o.5y?x=H:\'\'}if(S.s("Sr")==1){!o.2k?x=H:\'\'}if(S.s("Bc")==1){o.2k?x=H:\'\'}if(S.s("Sq")==1){!o.3W?x=H:\'\'}if(S.s("Ss")==1){o.P.5A()&&o.P.bo().O("?rB")==-1?x=H:\'\'}if(S.s("D7")==1){5T(o.1X)?x=H:\'\'}if(S.s("B9")==1){!o.aD?x=H:\'\'}if(S.s("St")==1){o.aD?x=H:\'\'}if(S.s("Su")==1){o.kD?x=H:\'\'}if(S.s("SC")==1){!o.kD?x=H:\'\'}if(S.s("Cy")==1){if(S.g("fH")){x=H}}if(S.s("SD")==1){!o.ab?x=H:\'\'}if(S.s("SL")==1){o.ab?x=H:\'\'}if(S.s("SM")==1){if(v.4a==1&&v.dj==1){if(o.2B=="4f"&&!I(v.1X)&&v.t9==0){if(!o.1F||o.P.5P()=="ad"){if(v.1X==\'\'){}F{x=H}}}}}}if(a=="4o"){if(S.s("2V")){if(S.s("2V")=="2X:5h"||S.s("2V")=="5h"){if(!o.5h&&!o.ei){x=H}}if(S.s("2V")=="2X:8G"){if(!o.8G||(!o.1F&&v.4a==0)){x=H}}if(S.s("2V")=="2X:Bh"){if(!o.kD){x=H}}if(S.s("2V").O("6b")>-1){if(!o.6b){x=H}}}}if(a=="1b"||a=="8e"||a=="e4"){if(1b){if(1b.4n()){x=H}}F{x=H}}if(a=="1i"){if(1i){if(1i.4n()){x=H;S.1Z("5O","1L")}}F{x=H}}if(S.g("1G")=="1C"){if(S.g("Q")==0){x=H}}if(S.g("1i#")){if(!S.g("1Z#3V")){x=H}}if(S.s("4V")==1){B cb=1P.8d("SN"+v.id);if((o.P.1o()==0&&o.P.1a()==0)||!o.5M||!5T(cb)||!o.SO){x=H}}if(S.s("rq")==1){!x?S.1Z("rq",1):\'\'}if(a=="1o"){if(o.P.5A()){x=H}}if(S.g("1f")=="tu"&&o.1q.2A){if(o.cP&&o.1q.8T){x=H}}L x}E bf(S,tH){if(S.g("1r")){if(o.aH||S.s("5O")=="1L"||tH){S.1Z("2p",K)}F{AY(S)}S.1Z("1r",K)}};E AX(S){if(!S.g("1r")){if(S.s("5O")=="1L"||o.aH){S.1Z("2p",H);if(o.aH){S.1Z("1t",1)}if(S.g("1h")=="1T"){if(o.gW){tD(S)}}}F{AW(S)}if(S.s("1h")=="1T"){o.R.47(o.3W?0:v.1T)}if(S.s("1h")=="2K"){o.U.tB()}S.1Z("1r",H)}};E AY(S){tF(S.g("1f"));B 5w="fI|";B 5b="0|";B 1p=1;B a=S.s("5O");B p=S.s("1k");if(a=="1A"){5w+="1A|";5b+="0|"}if(a=="1k"){if(p.O("2j")>-1&&p.O("R")==-1){5w+="x|";5b+=4Q(o.3M+S.g("W"))+"|"}if(p.O("1d")>-1){5w+="x|";5b+=4Q(-S.g("W"))+"|"}if(p.O("1g")>-1){5w+="y|";5b+="0|"+(-S.g("Y"))+"|"}if(p.O("2M")>-1||p.O("R")>-1||p=="cv"){5w+="y|";if(S.g("1h")=="2K"||S.g("1h")=="1T"){5b+=4Q(o.4J+S.s("h")+(S.s("h")<20?20-S.s("h"):0))+"|"}F{5b+=4Q(o.4J+S.g("Y"))+"|"}}if(p=="6F"){5w+="1A|";5b+="0|"}}B m=1B 5t({"mc":S,"me":S.g("1f"),"1G":5w.1x(0,5w.Q-1),"to":5b.1x(0,5b.Q-1),"1p":1p})};E AW(S){tF(S.g("1f"));B 5w="";B 5b="";B a=S.s("5O");B p=S.s("1k");if(S.g("1t")!=1){5w="fI|";5b=(S.g("1f")==\'bg\'?v.1y.a:"1")+"|"}if(a=="1A"){if(S.g("3u")!=S.s("1A")){S.1Z("1A",0);5w+="1A|";5b+=S.s("1A")+"|"}}if(a=="1k"){if(p=="6F"){if(S.g("3u")!=S.s("1A")){5w+="1A|";5b+=S.s("1A")+"|"}}F{if(p.O("R")>-1){if(S.g("y")!=S.g("y0")){5w+="y|";5b+=S.g("y0")+"|"}}F{5w+="x|y|";5b+=S.g("x0")+"|"+S.g("y0")+"|"}}}if(5w!=""&&5b!=""){B m=1B 5t({mc:S,me:S.g("1f"),1G:5w.1x(0,5w.Q-1),to:5b.1x(0,5b.Q-1),1r:1})}F{S.1Z("2p",H)}};G.iA=E(1f,1G,tH){B 51=K;B 2v=K;B S=b[1f];B 1h=S.g("1h");B 2V=S.s("2V");if(1G=="8s"){if(o.gW){if(1h=="1T"||1h=="5m"||1h=="aP"){o.8p=H;o.d8=H;51=H;4G();if(v.fE.AV==1){B bl=7H("1h","2K");if(bl){2R(bl.c())}}}}if(1i&&((v.1i.gi==1&&(1h=="1i"||2V.O("AT")==0))||2V.O("1i:")==0)){3r(o.fz);if(!1i.g("1r")||kn!=S){4U(S,1G);o.eR=1h+2V;1K(E(){o.eR=22},4F)}}if(1b&&v.1b.gi==1&&1h=="1b"){3r(o.ts);if(!1b.g("1r")||kn!=S){4U(S,1G);o.eR=1h;1K(E(){o.eR=22},4F)}}}if(1G=="6w"){if(o.gW){if(1h=="1T"||1h=="5m"||1h=="aP"){o.8p=K;o.d8=H;1K(E(){if(!o.8p){o.d8=K;V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="1T"){bf(b[x]);2r()}if(b[x].g("1h")=="2K"){if(v.fE.AV==1){6h(b[x].c())}}}}}},4F)}}if((v.1i.gi==1&&(1h=="1i"||2V.O("AT")==0))||2V.O("1i:")==0){3r(o.fz);o.fz=1K(E(){if(!o.3B){d4(1)}},(v.1i.fr>0?v.1i.fr*2C:2C))}if(1b&&v.1b.gi==1&&1h=="1b"){3r(o.ts);o.ts=1K(E(){if(!o.3B){1b.g("1r")?1b.1p(1):\'\'}},(v.1b.fr>0?v.1b.fr*2C:2C))}}if(51){1K(2r,10)}};G.kC=E(){if(o.52&&!o.2k){o.U.52(K);o.52=K}if(o.1X){if(v.jC>-1&&5T(o.1X)){J(o.1X,{1t:v.jh})}}if(o.1O&&v.AZ==1&&v.SK!=0){o.U.2Q()}if(v.1y.8E>0){3r(o.AU);o.AU=1K(4G,v.1y.8E*2C)}F{4G()}};G.Ey=E(){if(o.1X){if(v.jC>-1&&5T(o.1X)){J(o.1X,{1t:v.jC})}}if(!o.1O&&v.AZ==1){o.U.2L()}4G();eD(K)};G.em=E(ag,ak){B y;V(B x in b){if(b.2G(x)){y=b[x].g("1h");if(y=="2K"||y=="1T"){b[x].em(ag,ak)}}}};G.vg=E(){if(v.1y.1p==1){if(v.1y.dO==1&&!o.2k){L}if(!o.5y&&o.P.5P()=="5Z"){o.5y=H;4G()}if(v.1y.fL==1){ky();dF()}eD(K)}};G.ey=E(ag,ak){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="2K"||b[x].g("1h")=="1T"){b[x].ey(ag,ak)}}}};G.iM=E(1a,1o){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="2K"){b[x].6D(1a,1o)}if(b[x].g("1h")=="1a"){ko(b[x],1a,1o)}if(b[x].s("DG")==1){b[x].rj()}}}};E eD(x){if(v.1y.1p==1){x?d4():\'\';if(v.1y.ci==1){if(!o.1O&&v.1y.dJ==1){x=H}if(x&&!o.ty){J(o.1y,{"1g":bg.h()})}if(!x&&o.ty){J(o.1y,{"1g":0})}o.ty=x}}}E gH(){9p=K;o.P.gH();if(o.vr){o.vr=K;2r();1K(2r,cj)}}E ko(x,1a,1o){if(v.4p>0){1a-=v.4p;1o-=v.4p}B y=4O(1a);if(x.s("Dx")=="1"){y=4O(1o-1a)}if(x.s("SJ")=="1"){if(x.s("SF")=="1"){y=y+(1o>0?\' \'+2I(x.s("SE"))+\' \'+4O(1o):\'\')}F{1a==0?y=4O(1o):\'\'}}x.6j(y)}G.vc=E(1a,1o){B x=7H("1h","2K");if(x){x.Bg(1a,1o)}};G.8U=E(){if(v.jS==1){3r(ju);ju=1K(8U,4F)}F{8U()}};E 8U(){if(!9X){js("SG");B x=7H("1h","fs");if(x){x.Dc();9X=H}}}G.B1=E(y){V(B x in b){if(x==y){b[x].1Z("2R")}}};G.6N=E(1a,1o){3r(ju);if(9X){js("8f");B x=7H("1h","fs");if(x){x.gD();9X=K}}};G.gf=E(){B x=7H("2V","1T 8M");if(x){x.1Z("6h");x.6j(2I(\'1T\')+\' \'+(o.3W?0:2N.lE(v.1T*100))+\'%\');3r(o.gf);o.gf=1K(B2,2C)}};E B2(){B x=7H("2V","1T 8M");if(x){x.6j(\'\');x.1Z("2R");3r(o.gf)}}G.3Z=E(1a,1o){if(v.4p>0){1a-=v.4p;1o-=v.4p}V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="2K"){1o>0?b[x].1Z("2y",1a/1o):\'\';b[x].Bl()}if(b[x].g("1h")=="1a"){ko(b[x],1a,1o)}if(b[x].g("1h")=="8h"){b[x].1Z("rt",0.5);b[x].1Z("np",0)}}}};G.4t=E(1a,1o){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="1o"){if(v.4p>0){1o-=v.4p}b[x].6j(4O(1o))}if(b[x].g("1h")=="2K"){b[x].6D(1a,1o);b[x].ez(1o)}if(b[x].g("1h")=="1a"){ko(b[x],1a,1o)}}}};G.7l=E(){1i.g("1r")?1i.1p():1i.1r()};G.bp=E(){if(1i){L 1i.g("1r")?H:K}F{L K}};G.vd=E(){if(1i){1i.bi()}};G.d4=E(){d4()};G.Ct=E(x){if(1i){1i.Cu(x)}};G.Gd=E(){if(1i){1i.fJ()}};G.Gc=E(x){if(1i){L 1i.DQ(x)}};E d4(x){if(1i){1i.g("1r")?1i.1p(x):\'\'}o.4Y?o.4Y.1p():\'\'};G.bh=E(){if(1b){if(1b.g("1r")){1b.1p(1)}F{1b.1r()}}};G.kj=E(){if(1b){1K(E(){1b.1r()},100)}};G.cS=E(){if(1b){L 1b.g("1r")?H:K}F{L K}};G.eN=E(x){L 1b?1b.g(x):\'\'};G.6f=E(x){if(1b){1b.vf(x)}};G.cN=E(){if(1b){1b.cN()}};G.jT=E(){if(1b){1b.jT()}};G.fM=E(){fM()};E fM(){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="8e"){J(b[x].c(),{"1t":(!1b.e2()?0.5:1)})}if(b[x].g("1h")=="e4"){J(b[x].c(),{"1t":(!1b.v9()?0.5:1)})}}}}G.e2=E(){if(1b){L 1b.e2()}F{L K}};G.k1=E(){if(1b){L 1b.k1()}F{L K}};G.k2=E(){if(1b){1b.k2()}};G.es=E(){if(1b){1b.es()}};G.DR=E(x){if(x&&1b){1b.g5(x)}};G.v5=E(x){if(x&&1b){1b.kf(x)}};G.DP=E(x){if(x&&1b){J(1b.co(),{"SH":"1L"});1P.8d(x).1H(1b.co());2R(1b.c())}};G.SI=E(){};G.vh=E(x){if(1i){1i.5J();1i.g("1r")?1K(E(){1i.1p()},4X):\'\'}};G.dh=E(x){if(1i){1i.5J()}if(o.4Y){o.4Y.g9()}};G.fV=E(x){if(1i){1i.ec()}2r();4G()};G.kt=E(x){if(1i){1i.fN(x);1i.g("1r")?1i.1p():\'\'}if(o.4Y){o.4Y.g9()}x=="5C"?vv():\'\'};E vv(){if(o.dM){B y=o.4L.6x(-1)[0];V(B i in b){if(b.2G(i)){if(b[i].s("e6")=="5C"&&o.do){b[i].6D(o.do,y)}if(b[i].s("2V")=="2X:5C,1.0"){b[i].qx(4u(o.do/y,1).rE(1))}}}}}G.k7=E(x){if(1i){1i.fN("6y")}if(o.4Y){o.4Y.g9()}};G.bS=E(){if(1i){1i.aw();1i.g("1r")?1K(E(){1i.1p()},4X):\'\'}if(o.4Y){o.4Y.g9()}};G.vu=E(){o.4Y?o.4Y.1p():\'\';if(1i){1i.vu()}};G.gb=E(ka,2p,bd){V(B x in b){if(b.2G(x)){if(b[x].g("1h")=="1i"){if(b[x].s("fp")==1){b[x].D3()}}if(b[x].g("Dk")=="1i#"+ka){b[x].1Z("1Z#3V",2p);if(b[x].g("1G")=="1C"){if(bd){B vt=bd.O(" <6E C=\'1t");if(vt>-1){bd=bd.1x(0,vt)}b[x].6j(bd)}}F{if(v.1i[\'1i\'+ka+\'1h\']=="2q"){if(bd==2I("7D")){b[x].fo(0)}F{b[x].fo(1)}}2r()}bs(b[x])}}}};G.DN=E(){if(1i){1i.5J();1i.fN("6y");1i.fN("6s")}};G.it=E(){B x=7H("1h","2K");if(x){x.it()}};G.51=E(){2r();if(9p){o.vr=H}};G.qv=E(x){if(!9p||x==1){2r();4G()}F{v.1y.vs=H}};G.4v=E(){4G();2r();4G();if(o.cP){2R(7i)}F{!9p?6h(7i):\'\'}};G.ER=E(1c){if(i7==v.id&&v.2a.on==1){B x=1c.DV;if(x==2b){x=1c.DL}if(I(o.2l)||I(o.7r)||o.uZ==1){L K}if(((v.2a.7P==1&&x==32)||(v.2a.V3==1&&x==13))&&(o.5W||o.5y)){if(v.2a.2E==1){7m(\'1O\',o.1O?0:1)}o.U.cQ();1c.8u();L K}!v.2a.kM?v.2a.kM=0.2:\'\';!v.2a.1A?v.2a.1A=5:\'\';if(v.2a.DT==1&&o.5W){if(o.P.1o()>0){V(B i=48;i<58;i++){if(x==i){o.U.3Z((o.P.1o()*(x-48)*10)/100,H)}}}}if(x==39&&o.5W){kL(v.2a.vo)}if(x==37&&o.5W){kQ(v.2a.vo)}if(x==38&&o.5W){kL(v.2a.vq)}if(x==40&&o.5W){kQ(v.2a.vq)}if(x==DX&&o.5W){kL(v.2a.DU)}if(x==Xn&&o.5W){kQ(v.2a.DU)}}};E 7H(y,z){V(B x in b){if(b.2G(x)){if(b[x].s(y)==z){L b[x]}}}}E kL(x){if(x=="8e"){if(o.1b){o.R.cN()}F{x="46"}}if(x=="46"){if(o.P.1o()>0){if(o.P.1a()+4u(v.2a.46)<o.P.1o()){o.U.3Z(o.P.1a()+4u(v.2a.46),H)}}}if(x=="1T"){o.U.47(4u(v.1T)+4u(v.2a.kM));1c.8u()}if(x=="1A"){o.P.1A(v.2a.1A/100);1c.8u()}if(v.2a.2E==1){7m(x,1)}}E kQ(x){if(x=="8e"){if(o.1b){o.R.es()}F{x="46"}}if(x=="46"){if(o.P.1o()>0&&o.1F){o.U.3Z((o.P.1a()-v.2a.46>=0?o.P.1a()-v.2a.46:0),H)}}if(x=="1T"){o.U.47(4u(v.1T)-4u(v.2a.kM));1c.8u()}if(x=="1A"){o.P.1A(-v.2a.1A/100);1c.8u()}if(v.2a.2E==1){7m(x,0)}};G.EX=E(1c){if(i7==v.id){B x=1c.DV;if(x==2b){x=1c.DL}if(x==57){if(v.1u==1){}}if(o.2k&&x==27){o.U.8l()}if(I(o.2l)||I(o.7r)){L K}if(v.2a.f==1&&x==70&&v.jS!=1&&(o.5W||o.5y)){if(v.2a.2E==1){7m(\'2k\',o.2k?0:1)}o.2k?o.U.8l():o.U.7M()}if(v.2a.m==1&&x==77&&(o.5W||o.5y)){if(v.2a.2E==1){7m(\'5m\',o.3W?1:0)}o.3W?o.U.6U():o.U.5d()}}};G.3Y=E(){43(o.gt);V(B x in o){if(x.O("X")==0&&x.O("FP")>-1){43(o[x])}}V(B i=0;i<dB.Q;i++){1f=dB[i];if(b[1f]){b[1f].3Y()}}if(1i){1i.3Y()}if(1b){1b.3Y()}bg.3Y();if(7i.5k==o.1Q){o.1Q.2U(7i)}F{o.1y?o.1y.2U(7i):\'\'}};G.ky=E(){ky()};G.gr=E(){gr();4G()};G.dF=E(){dF()};G.kd=E(){L 9p}};B DK=E(1f){B i;B C=[];B w;B h;B qu=0;B bg;B n6;B 8m;B m0=0;B 3V=H;B Cz=K;B 3u=1;B 3g=1;B 2m;B 9s;B 3x;B 7W;B 1h;B 9z=\'\';B x0;B y0;B on;B 8s=K;B bv=K;B d2=0;B Xr;B Xm=0;B di=0;B Ec=0;B fK=0;B nz=K;B fH=K;B 3i=K;B fW;B fp;B n1;B rv=K;C=8O(C,dK.S);C=8O(C,v[1f]);B U=[C.1h];1h=U[0];I(C.DA)?U[1]=C.DA:\'\';I(C.DB)?U[1]=C.DB:\'\';I(C.1R)?C.1C=C.1R:\'\';if(6m(C.Dz)){o.iW?C.1A=C.Dz:\'\'}if(I(C.2V)){if(C.1G=="1C"&&C.2V!=\'\'){if(I(v[C.2V+\'1C\'])){C.1C=v[C.2V+\'1C\']}}if(C.2V.O("1i#")==0){9z=C.2V;if(C.3x==\'\'&&9z.O(",")==-1){C.3x=2I(v.1i[\'1i\'+9z.1x(9)+\'1h\'])}}if(C.2V.O("6b")>0){v.Dy=H}if(C.2V=="Xl"){C.Xh=1B Xg(C)}}B aJ=C.3x?C.3x.2D("///"):[];B uQ=0;B 2E=1B 9e();B 1n=1B 9e();B cV=1B 9e();B Xi=1B 9e();B gh=0;B 9A;if(C.1G=="1C"){if(I(C.1C)){2E[0]=4s(C.1C);C.nd=C.1C.Q;if(C.1C.O("/")==0){C.D2=1}if(C.1C.O("|")==0){C.D4=1}if(C.1C.O("-")==0){C.D1=1}if(1h=="1a"||1h=="1o"){if(C.1C.O(\'0:\')==0){C.nq=H}if(C.1C.2D(":").Q==3){C.Dq=H}F{if(C.1C.O(\'aE:aE\')>-1){C.Df=H}}if(C.iV==1){v.iV=1}}if(C.Dx==1&&C.1C.O("-")==0){C.D0=1}if(C.1C.O("///")>0&&1h=="4o"){C.eJ=C.1C.2D("///");C.1C=2E[0]=C.eJ[0]}}if(v.uz==1){1K(94,100);1K(94,4F);1K(94,2C)}}F{if(I(C.1n)){2E[0]=C.1n;if(2E[0].O("///")>0&&2E[0].O("i2")==-1){2E=C.1n.2D("///")}if(I(C.n5)){2E[1]=C.n5}if(C.lk==1){if(6m(C.DI)){2E.3d(C.DI);gh=2E.Q-1}}}}if(1h=="4o"){if(C.Xj==1&&I(C.mQ)){C.r7=C.2V}}B X=1M("1S");if(C.1k==\'cv\'){o.cv.1H(X)}F{if(C.1k.O(\'R\')>-1&&v.1y.1p==1&&v.1y.ci==1){o.1y.1H(X)}F{o.1Q.1H(X)}}B n6=1M("1S");X.1H(n6);J(X,{"1k":"29","1d":0,"1g":0,"1t":1,"eT":"hN","sG":"hQ"});if(6m(C.5z)){4E(X,{"id":(v.id+"6Y"+"8R"+C.5z)})}if(C.DG==1){J(X,{"4y":"2J 0.2s 2O"})}if(2E.Q>0){V(i=0;i<2E.Q;i++){1n[i]=1M("1S");J(1n[i],{"1k":"29","1g":0,"1d":0,"6V":"1L","1t":C.a,"4y":"1t 0.1s 2O,2J 0.1s 2O"});if(C.1G=="eQ"&&C.3c!=\'\'){if(C.3c.O(".sr")>-1||C.3c.O(".iT")>-1||C.3c.O(".8a")>-1||C.3c.O("i2")>-1){C.3c.O("//")==-1&&C.3c.O("i2")==-1?C.3c=\'//\'+C.3c:\'\';B z=1M("41");C.8F=1;z.1w("dH",r4);z.3c=C.3c;1n[i].1H(z);C.w=1n[i].2i;C.h=1n[i].2P;if(6m(C.5z)){4E(1n[i],{"id":(v.id+"ge"+C.5z+"E3")})}}}if(C.1G=="1C"){J(1n[i],{"1z":(C.1z),"eT":C.bU,"sY":C.4e,"eA-d1":C.g1+\'px\',"2W":"0 eK 0 eK","9h-7P":"b6"});if(C.2y==1){if(C.1C.O("<a ")>-1||1f=="b8"){J(1n[i],{"6V":"2z"})}}if(C.Er==1){J(1n[i],{"4e-fZ":"Er"})}2E[i]==\'8h\'?2E[i]=2I("8h"):\'\';1n[i].1U=ql(2E[i]);1K(qq,100);C.w=1n[i].2i;C.h=1n[i].2P;if(6m(C.5z)){4E(1n[i],{"id":(v.id+"ge"+C.5z+"Xk")})}}if(C.1G=="J"){E6(2E[i],C.1z,1n[i])}B bN=2E[i].6H();B jv=bN.O(\'<2e\')>-1||bN.O(\'<Xs\')>-1;if(C.1G=="2e"&&(bN.O(\'<g>\')>-1||jv)){if(1h=="5m"||1h=="4o"){bN=bN.1Y(/lp/g,\'lp\'+v.id+1f)}if(bN.O(\'3S\')>-1){aK(1n[i])}1n[i].1U=(!jv?"<2e W=\'20\' Y=\'20\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'>":\'\')+bN+(!jv?"</2e>":\'\');1n[i].2i>20?C.w=1n[i].2i:\'\';1n[i].2P>20?C.h=1n[i].2P:\'\';J(1n[i],{"W":C.w,"Y":C.h});if(C.d3!=-1){ly(1n,C.d3)}if(6m(C.5z)){4E(1n[i],{"id":(v.id+"ge"+C.5z+"E3"+i)})}}X.1H(1n[i]);i>0?1p(1n[i]):\'\'}a0();n1?r4():\'\';if(C.2V=="4V"){C.4V=1;C.1p=1;o.4V?1n[0].1U=o.4V.jP(C.d3!=-1?C.d3:\'#3K\'):\'\';1n[0].eW=5U;1n[0].eO=5u;1n[0].hW=cD}F{if((bg.2i*C.1A<35||bg.2P*C.1A<35)&&C.1G!=\'1C\'){qU();aK(8m)}F{aK(bg)}}if(1h=="4o"){if(C.fu==1&&I(C.2V)){B lu=C.2V;if(lu.O("2X:")==0){B 1J=lu.1x(4).2D(",");if(1J.Q==2){B dr=1J[1].2D("/");if(dr.Q==2){1J[0]==\'hd\'?1J[0]="42":\'\';if(v[1J[0]]==dr[1]){C.a=1;J(1n[0],{"1t":C.a})}}}}if(lu=="Ed"||lu=="4c"){o.U.fy();X.C.4C=XB;o.uZ=1}}}if(1h=="1i"&&C.fp==1){fp=1B XC(X,bg)}if(C.2y==0){J(X,{"6V":"1L"})}if(C.8F==1){1p(bg)}if(C.2m==1){lw()}if(C.1k.O("2j")>-1){di=1}if(C.1k.O("1g")>-1){Ec=1}if(C.1k.O("2M")>-1||C.1k.O("X")>-1){fK=1}2r();B t=\'\';if(C.a2!=0){t+="c5("+C.a2+"gK)"}if(C.XD==1){t+=" 3u(-1)"}if(C.XE==1){t+=" 3g(-1)"}if(t!=\'\'){J(X,{"2J":t})}if(1h=="fs"){gD()}B 1J=[];B i;if(1h=="1b"){1J=[\'e3\',\'Ea\',\'jg\',\'Dv\',\'uM\',\'ki\'];V(i=0;i<1J.Q;i++){if(I(C[1J[i]])&&!I(v.1b[1J[i]])){v.1b[1J[i]]=C[1J[i]]}}}if(1h=="1R"){1J=[\'ja\',\'uO\',\'uP\'];V(i=0;i<1J.Q;i++){if(I(C[1J[i]])&&!I(3D[1J[i]])){v[1J[i]]=C[1J[i]]}}}C.cT==1?cq():\'\';if(1h=="4o"&&C.on==0){2R(X)}}E qU(){if(8m){8m.5k.2U(8m)}8m=1M("1S");J(8m,{"1k":"29","1g":0,"1d":0,"W":C.1G=="eQ"?bg.2i:(bg.2i>35?bg.2i:35)*C.Du,"Y":C.1G=="eQ"?bg.2P:(bg.2P>35?bg.2P:35)*C.sq});C=4l(C,\'gd\',\'gd\');X.1H(8m)}E aK(x){if(1h.O("1a")==0&&U.Q==1){C.2y=0}if(1h=="4o"&&C.fu==0){C.2y=0}if(C.2y==1){if(C.fX==1){J(x,{"6e":"3S"})}J(x,{"6V":"2z"});if(o.1q.2A){x.1w("bv",E(1c){1c.9V();bv=H});x.1w("et",E(1c){1c.9V()});x.1w("cW",E(1c){1c.9V();1c.8u();if(!bv){9x(1c)}bv=K})}F{x.aI=9x}if(v.1y.g7==1||C.g7==1){J(x,{"2t-1z":"#lJ","1t":0.5})}}F{J(x,{"6e":"7c"})}if(!o.1q.2A){x.eW=5U;x.eO=5u}if(C.3i==1||C.2m==1){x.hW=cD}}E a0(){if(bg){bg.5k.2U(bg)}bg=1M("1S");J(bg,{"1k":"29","1g":0,"1d":0});if(6m(C.5z)){4E(bg,{"id":(v.id+"ge"+C.5z+"XA")})}w=C.w;h=C.h;C=4l(C,\'2F\',\'2F\');C=4l(C,\'cG\',\'cG\');if(C.1G=="1C"){w=1n[uQ].2i;h=1n[uQ].2P;if(C.v0>0){w<C.v0?w=C.v0:\'\'}}C=4l(C,\'e1\',\'e1\');C=4l(C,\'CQ\',\'CQ\');if(o.1q.6r){C.CK/=C.1A;C.CJ/=C.1A;C.CT/=C.1A;C.CU/=C.1A}if(6m(C.5z)&&I(v.4o)&&C.1h=="4o"){if(26(v.4o)==\'3L\'){V(B i=0;i<4b.3R(v.4o).Q;i++){if(v.4o[i][C.5z]){if(v.4o[i][C.5z]=="7D"){C.on=0}F{B 1J=v.4o[i][C.5z].2D(":");if(1J[0]=="2F-1d"){if(1J[1].O("%")>0){C.jn=2u(1J[1])}F{C.3E=2u(1J[1])}}}}}}}C.h=h;C.w=w;if(C.bg==1){h=h+C.8Q+C.92;w=w+C.6I+C.6Q;C.h=h;C.w=w;if(C.1G=="1C"){C.lY=1n[0].2P}}F{C.5G=0}J(bg,{"W":(C.CN==1?CL:w),"Y":h,"so":(C.lX*h)/2,"2t":C.5p,"1t":C.5G,"4y":"1t .1s 2O, 2t .1s 2O, 2J .1s 2O"});if(C.1G=="eQ"){J(bg,{"W":w,"Y":h,"so":(C.lX*h/C.1A)/2,})}if(C.Xz==1){CR(bg,C.5p,C.Xv,C.Xu)}if(C.sE==1){J(bg,{"2Y":"5a 6O "+C.sF})}n6.1H(bg)}E 2r(){J(bg,{"1g":(-bg.2P/2),"1d":(-bg.2i/2)});if(8m){B x=C.1G=="eQ"?bg.2i:(bg.2i>35?bg.2i:35);B y=C.1G=="eQ"?bg.2P:(bg.2P>35?bg.2P:35);J(8m,{"1g":(-y/2)+C.En-C.Em,"1d":(-x/2)+C.Xw-C.Xx})}V(i=0;i<2E.Q;i++){if(C.1G=="2e"){J(1n[i],{"1g":-2N.56(2u(1n[i].C.Y))/2,"1d":-2u(1n[i].C.W)/2})}F{J(1n[i],{"1g":-2N.56(1n[i].2P)/2,"1d":-1n[i].2i/2})}if(bg){J(1n[i],{"1g":(4Q(1n[i].C.1g)+C.8Q/2-C.92/2+C.CT/2+C.CU/2),"1d":(4Q(1n[i].C.1d)+C.6I/2-C.6Q/2+C.CK/2+C.CJ/2)})}}}E 5U(){B i;8s=H;if(C.cV==1){if(on&&I(C.n5)){i=1}F{i=0}if(9A&&cV.Q>2){i=2}if(cV[i]){mu();1r(1n[cV[i]])}}if(C.bg==1){if(C.7O!=-1){J(bg,{"1t":C.7O})}if(C.8N!=-1){J(bg,{"2t":C.8N})}}if(C.6K>-1&&!Cz){V(i=0;i<2E.Q;i++){if(1n[i].C.5B!="3i"){J(1n[i],{"1t":C.6K})}}}if(C.mv!=-1){ly(1n,C.mv)}if(C.Xy==1){d2=d2+45;J(1n[0],{"2J":"c5("+d2+"gK)"})}if(C.gB>C.1A&&C.gB>-1){1A(C.gB)}if(1h=="1i"&&o.R.bp()){}F{if(C.2m==1&&C.cT!=1){1r(2m);J(2m,{"1t":1})}}if(1h=="5m"){o.U.52(H);o.52=H}o.ca=H;o.R.iA(1f,"8s")}E 5u(){8s=K;B i;if(C.cV==1){if(on&&I(C.n5)){i=1}F{i=0}if(9A&&cV.Q>2){i=2}mu();1r(1n[i])}if(C.bg==1){if(C.7O!=-1){J(bg,{"1t":C.5G})}if(C.8N!=-1){J(bg,{"2t":C.5p})}}if(C.6K>-1){V(i=0;i<2E.Q;i++){if(1n[i].C.5B!="3i"){J(1n[i],{"1t":C.a})}}}if(C.gB>-1){1A(C.1A)}if(C.mv!=-1){ly(1n,(C.d3==-1?\'#3K\':C.d3))}if(1h=="5m"&&!o.2k){o.U.52(K);o.52=K}if(C.2m==1&&C.cT!=1){1p(2m);J(2m,{"1t":0})}o.ca=K;o.R?o.R.iA(1f,"6w"):\'\'}E 9x(1c){1c.6d=H;if(!nz){o.R.dS(1f);if(1h=="4o"){gc()}if(C.2m==1&&C.cT!=1){1p(2m);J(2m,{"1t":0})}if(C.Xf==1){d2=d2+45;J(1n[0],{"2J":"c5("+d2+"gK)"})}fH=H;if(C.Cy==1||(1f=="tu"&&C.1p==1&&C.CB==1)){o.R.4v()}}}E gc(){if(2E){if(2E.Q>1){if(on==H){1r(1n[0]);1p(1n[1])}F{1r(1n[1]);1p(1n[0])}}if(C.2m==1&&aJ.Q>1){3x.1U=(on==H?aJ[0]:aJ[1]);cq()}}if(I(C.r7)){if(on==H){C.2V=C.r7}F{C.2V=C.mQ}}if(I(C.eJ)){if(C.eJ.Q>1){if(on==H){6j(C.eJ[0])}F{6j(C.eJ[1])}}}on=on!=H;if(C.bg==1&&I(C.r9)){if(C.r9!=-1){if(on){C.CC=C.5p;C.5p=C.r9}F{C.5p=C.CC}a0();aK(bg);2r();if(C.1G=="1C"){94()}F{1A(C.1A)}}}}E qh(1c){1c.6d=H;o.R.dS(1f)}E mu(){V(B i=0;i<2E.Q;i++){if(1n[i].C.5B!="3i"){J(1n[i],{"1t":C.a});1p(1n[i])}}}E qq(1C){if(1n[0]){if(1n[0].2i>o.3M-C.3E-C.4i-C.6I-C.6Q){if(C.ra==1){if(!1C){1C=1n[0].1U}1n[0].1U=\'<ra>\'+1C+\'</ra>\'}F{J(1n[0],{"9h-7P":"t7"})}J(1n[0],{"W":o.3M-C.3E-C.4i-C.6I-C.6Q})}}}E r4(){if(bg){n1=K;C.8F=0;1p(bg);if(1n[0]){C.w=1n[0].2i*C.1A;C.h=1n[0].2P*C.1A;if(C.r3>0){C.h=C.r3*C.1A;J(1n[0],{Y:C.r3})}1A(C.1A)}C.aO=0;a0();qU();aK(8m);1r(bg);2r();o.R.51();if(!5T(X)){2R(X)}}F{n1=H}}E DF(1c){1c.6d=H}E cD(){if(!o.1q.2A&&!o.ca){5U()}cq()}E 1A(x){if(x>0){if(o.1q.6r&&C.cT!=1){J(bg,{"CH":x+""})}F{J(bg,{"2J":"1A("+x+")"})}V(i=0;i<2E.Q;i++){if(o.1q.6r&&C.cT!=1){J(1n[i],{"CH":x+""})}F{J(1n[i],{"2J":"1A("+x+")"})}}3u=x;3g=x}}E lw(){2m=1M("1S");J(2m,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'Y\':\'2z\',"1t":0,"4y":"1t 0.1s 2O"});9s=1M("1S");C=4l(C,\'hj\',\'hj\');C=4l(C,\'CF\',\'CF\');J(9s,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'W\':\'100%\',\'Y\':30,\'2t-1z\':C.gY,\'1t\':C.h7,\'2Y-6g\':C.r6});3x=1M("1S");J(3x,{\'1k\':\'29\',\'1d\':C.lA,\'1g\':C.lD,\'1z\':C.sd,\'4e-h6\':C.sb,\'4e-3I\':C.h3,"eA-d1":C.s9+\'px\',\'1t\':C.rF,"2K-Y":"1",\'9h-7P\':\'b6\'});if(C.gZ==1){7W=1M("1S");7W.1U=\'<2e W="eV" Y="lo" rJ="0 0 8 6" 7x="1.1" 3w="3f://3v.w3.3o/3U/2e" 3w:3A="3f://3v.w3.3o/6u/3A"><eS id="As" 3z="1L" 3j="#\'+C.gY.1Y("#","")+\'" 3j-9E="AC" 2S="0 0 8 0 4 6"></eS></2e>\'}if(C.cT==1){J(2m,{"1t":1});aK(2m)}F{J(2m,{"6V":"1L"})}X.1H(2m);3x.1U=C.3x==\'\'?2I(1h):aJ[0];2m.1H(9s);2m.1H(3x);if(C.gZ==1){2m.1H(7W);B rc=o.ln?\'-eV\':\'-lo\';B ps=C.Xe;if(!I(ps)){ps=\'\'}B tp=ps.O("1g")>-1;if(tp){J(7W,{"2J":"c5(-WX)"})}J(7W,{\'1k\':\'29\',\'2j\':(ps.O("2j")>-1?10*C.1A:\'2z\'),\'1d\':(ps.O("1d")>-1?10*C.1A:(ps==\'\'||ps==\'1g\'?\'50%\':\'2z\')),\'2F-1d\':(ps==\'\'||ps==\'1g\'?\'-rU\':0),\'2M\':(tp?\'2z\':rc),\'1g\':(tp?rc:\'2z\'),\'1t\':C.h7})}cq()}E cq(){if(C.2m==1){J(2m,{"1g":(fK==1?-h-2m.2P+3:-2m.2P/2)+C.WW-C.WY,"1d":(di==1?-3x.2i:(fK==1?-w/2:+3x.2i))-(fK==1?0:3x.2i/2+5)+C.WZ-C.X0,"Y":C.lD+C.h3+C.B6,"W":C.B5+3x.2i+C.lA});J(9s,{\'Y\':2m.2P});2m.C.4C="2C"}}G.c=E(){L X};G.s=E(x){L C[x]};G.ss=E(x,x2){L I(C[x])?C[x][x2]:K};G.g=E(x){9W(x){1m"W":L w;1l;1m"Y":L h;1l;1m"x":L 4Q(X.C.1d);1l;1m"y":L 4Q(X.C.1g);1l;1m"1t":L X.C.1t?X.C.1t:1;1l;1m"1r":L 3V;1l;1m"3u":L 3u;1l;1m"3g":L 3g;1l;1m"1h":L 1h;1l;1m"Dk":L 9z;1l;1m"fH":L fH;1l;1m"1G":L C.1G;1l;1m"Q":L C.nd?C.nd:0;1l;1m"1f":L 1f;1l;1m"x0":L x0;1l;1m"y0":L y0;1l;1m"8s":L 8s;1l;1m"1i#":L 9z.O("1i#")==0;1l;1m"1i:":L 9z.O("1i:")==0;1l;1m"1Z#3V":L rv;1l;7c:L K}};G.1Z=E(k,x){9W(k){1m"1r":8s?5u():\'\';3V=x;1l;1m"2p":Dh(x);1l;1m"6h":6h(X);1l;1m"2R":2R(X);1l;1m"Dl":C.3i=0;1l;1m"rq":if(C.Dj>0&&C.3i!=1&&!fW){3r(fW);fW=1K(E(){2R(X);C.3i=1;fW=2b},C.Dj*2C)}1l;1m"1A":1A(x);1l;1m"3u":J(X,{"2J":"3u("+x+")"});3u=x;1l;1m"3g":J(X,{"2J":"3g("+x+")"});3g=x;1l;1m"1t":J(X,{"1t":x});1l;1m"rt":J(1n[0],{"1t":x});1l;1m"np":J(1n[0],{"Di":"np("+x+")"});1l;1m"1d":J(X,{"1d":x});1l;1m"1g":J(X,{"1g":x});1l;1m"W":J(X,{"W":x});1l;1m"Y":J(X,{"Y":x});1l;1m"rG":C.rG=x;1l;1m"di":di=x;1l;1m"1Z#3V":rv=x;1l;1m"x":J(X,{"1d":x});1l;1m"y":J(X,{"1g":x});1l;1m"5O":C.5O=x;1l;1m"x0":x0=x;1l;1m"y0":y0=x;1l;7c:L K}};E Dh(x){if(x&&o.1q.2A){nz=H;1K(Ds,cj)}if(!x){if(C.lk==1&&9A){1p(1n[gh]);1r(1n[0]);9A=K}}if(C.8F==1){x?1r(X):1p(X)}F{if(1f=="WV"||1f=="Dt"){x?1r(X):1p(X)}F{J(X,{"2p":(x?"4c":"1L")})}3V=x;x?1r(X):\'\'}}E Ds(){nz=K}G.6j=E(1C){6j(1C);C.WU=1C};G.rj=E(){J(X,{"2J":"c5("+m0+"gK)"});m0+=20};G.Dr=E(x){if(C.1C.O("{1R")>-1){6j(C.1C)}};G.gc=E(){gc()};E 6j(1C){if(C.1G=="1C"){if(I(1C)){if(C.Dq){if(1C.Q==4){1C=(C.nq?\'0:0\':\'aE:0\')+1C}if(1C.Q==5){1C=(C.nq?\'0:\':\'aE:\')+1C}if(1C.Q==7){1C=(C.nq?\'\':\'0\')+1C}}if(C.Df){if(1C.Q==4){1C=\'0\'+1C}}C.nd=1C.Q}1C=(C.D4==1?\'| \':\'\')+(C.D2==1?\'/ \':\'\')+(C.D0==1?\'-\':(C.D1==1?\'- \':\'\'))+1C;B Db=1n[0].2i+(C.bg==1?C.8Q+C.92:0);B Da=1n[0].2P+(C.bg==1?C.8Q+C.92:0);1n[0].1U=(1h=="4o"?ql(1C):1C);if(C.WQ==1){1n[0].1U+=\'<6E C="2p:cK-4c;W:eZ"></6E><6E C="2Y-1g: eK 6O #fx;2Y-1d: eK 6O fD;2Y-2j: eK 6O fD;1k: 29;2j:eK;1g: 50%;2F-1g: -5a;"></6E>\'}if(1h=="1R"){J(1n[0],{"W":"2z","9h-7P":"b6"});qq(1C)}C.w=1n[0].2i+(C.bg==1?C.8Q+C.92:0);C.h=1n[0].2P+(C.bg==1?C.8Q+C.92:0);if(Db!=C.w||Da!=C.h||(C.w>0&&qu==0)){94()}if(1n[0].2i>0){qu=C.w}F{9z!=\'\'?1p(1n[0]):\'\';if(1C!=\'\'){1K(94,10)}}}}G.94=E(){94()};E 94(){if(C.1G=="1C"){if(1n[0]){if(1n[0].2i>0){9z!=\'\'?1r(1n[0]):\'\';w=C.w=1n[0].2i;h=C.h=1n[0].2P;a0();aK(bg);2r();o.R?o.R.qv():\'\'}}}}G.qx=E(x){if(C.D9==1){B n=4;if(1f=="WP"){if(o.1q.2A){L}}F{n=8}B y=\'lp\';B z=[];V(B i=1;i<n;i++){z[i]=1P.8d(y.8L(v.id,1f,\'WR\',i))}if(z[1]){V(B i=1;i<n;i++){z[i]?1p(z[i]):\'\'}if(n==4){V(B i=1;i<n;i++){x>(i/n)&&z[i]?1r(z[i]):\'\'}}F{V(B i=n;i>0;i--){if(x*1+(1/n)>=(i/n)&&z[i]){1r(z[i]);1l}}}}}};G.On=E(){if(!on){if(2E){if(2E.Q>1&&U.Q>1){1p(1n[0]);1r(1n[1])}}if(U.Q>1){1h=U[1];if(C.2m==1){3x.1U=qi(1);cq()}}if(C.lk==1&&9A){1p(1n[gh]);9A=K}on=H}};E qi(x){L C.3x==\'\'?2I(U[x]):(aJ.Q>1?aJ[x]:aJ[0])}G.fo=E(x){B y=\'lp\';B z=1P.8d(y.8L(v.id,1f,\'WS\'));if(z){J(z,{"4y":"2J 0.1s 8q-6w"});if(x==1){z.C.2J=\'D8(0, 0)\'}F{z.C.2J=\'D8(-Dd, 0)\'}}F{if(x==1){C.a=1}F{C.a=0.5}}J(1n[0],{"1t":C.a})};G.gq=E(){if(on){if(2E){if(2E.Q>1&&U.Q>1){1r(1n[0]);1p(1n[1])}}1h=U[0];if(U.Q>1){if(C.2m==1){3x.1U=qi(0);cq()}}on=K;9A=K}};G.qh=E(){if(C.lk==1){mu();1r(1n[gh]);9A=H}};G.Dc=E(){B 2v=K;if(C.1p==1&&C.D7==1){if(5T(o.1X)){2v=H}}if(!2v){6h(X);B cg=X.cM("*");V(B i=cg.Q;i--;){J(cg[i],{"5O-1O-6C":"WT"})}3V=H}};G.gD=E(){gD()};E gD(){2R(X);B cg=X.cM("*");V(B i=cg.Q;i--;){J(cg[i],{"5O-1O-6C":"9t"})}3V=K}G.3Y=E(){if(2E.Q>0){V(i=0;i<2E.Q;i++){X.2U(1n[i]);1n[i]=22}}if(bg){bg.eP("aI");bg.eP("eW");bg.eP("eO");bg.5k.2U(bg);bg=22}if(C.1k==\'cv\'){o.cv.2U(X)}F{if(X.5k==o.1Q){o.1Q.2U(X)}F{if(o.1y){if(X.5k==o.1y){o.1y.2U(X)}}}}if(2m){X.2U(2m)}X=22};G.D3=E(){fp?fp.qm():\'\'};E ql(x){B z=x+\'\';if(x.O(\'{1a}\')>-1&&I(o.3m)){x=x.1Y(\'{1a}\',ik(o.3m.9D().t))}if(x.O(\'{1R\')>-1){B y=o.fB?o.fB:(v.1R?v.1R:\'\');if(x.O(\'{bM}\')>-1&&o.R){x=x.1Y(\'{bM}\',o.R.eN(\'bM\'))}if(o.bX&&o.R){y=o.R.eN(\'bX\')}x=x.1Y(\'{1R}\',y);if(o.bX&&!o.R){1K(6j,100,z)}}L x}E ly(1n,4g){V(B i=0;i<1n.Q;i++){D5(1n[i],4g)}if(C.2V=="4V"){if(o.4V){o.4V.De(1n[0],4g)}}}};B Dp=E(1f,1h){B i;B C=[];B w;B h;B bg;B 3V=H;B x0;B y0;B 3u=1;B 3g=1;B dR=0;B 8W=0;B X1;B 3B;B lM;B 2y;B 3y;B Bf;B Bj;B s6;B Bk;B 2m;B 9s;B 3x;B 7W;B 2S=[];o.DZ=-1;B lU;B 8s;B sg;V(i in dK.S){C[i]=dK.S[i]}B 1h=v[1f].1h;B 1G=v[1f].1G;V(i in dK[1h]){C[i]=dK[1h][i]}V(i in v[1f]){C[i]=v[1f][i]}C.w=2u(C.w);C.h=2u(C.h);C=4l(C,\'2F\',\'2F\');C=4l(C,\'cG\',\'cG\');B X=1M("1S");if(v.1y.ci==1&&v.1y.1p==1){o.1y.1H(X)}F{o.1Q.1H(X)}1h=="2K"?o.cv=X:\'\';B b3=K;if(C.e6){if(C.e6!=\'1T\'){b3=H}}J(X,{"1k":"29","1g":0,"1d":0,"1t":1,"eT":"hN","sG":"hQ"});if(C.Dg==1){X.C.4C=5}a0();B 7T=1M("1S");J(7T,{"1k":"29","2M":2N.56(-C.h/2),"1d":2N.56(-C.w/2)});if(C.Ep==1){J(7T,{"2Y-6g":C.7p*C.h/2,"Y":C.h,"6P":"3i","3S-2H":"1L"})}if(6m(C.5z)){4E(X,{"id":(v.id+"ge"+C.5z)})}X.1H(7T);if(1h==\'2K\'&&v.qO==1){Ba()}if(C.2m==1){lw()}B 8k=1M("1S");fR(0,8k,0.3,(C.5l==1?"2O-5l(#"+C.CZ+", #"+C.l4+")":C.l4),C.w,C.X2);if(C.CV==1&&I(C.l8)){B gG=1M("1S");gG.1U=C.l8.1Y(/\\#CW/g,"#"+C.l4);8k.1H(gG);J(gG,{"1k":"29","2M":-2N.56(C.h/2),"1d":0,"3S-2H":"1L"});J(8k,{"6P":"3i","2t":"1L"});B x=["4I","eS","kX","gS","cL"];V(B y=0;y<x.Q;y++){B z=gG.st("2e "+x[y]);if(z.Q>0){V(B y2=0;y2<z.Q;y2++){z[y2].C.3j=C.l4}}}}7T.1H(8k);B Xa=[];B bR=1M("1S");fR(1,bR,C.CD,(C.5l==1?"2O-5l(#"+C.CG+", #"+C.CI+")":C.CI),0,C.Xb);7T.1H(bR);if(C.6K>0){B cA=1M("1S");fR(2,cA,C.Cv,C.Xc,0,C.6K);7T.1H(cA)}B 6B=1M("1S");fR(3,6B,C.Cx,(C.5l==1?"2O-5l(#"+C.CA+", #"+C.1z+")":C.1z),0,C.a);if(C.CV==1&&I(C.l8)){B lF=1M("1S");lF.1U=C.l8.1Y(/\\#CW/g,"#"+C.1z);J(lF,{"1k":"29","2M":-2N.56(C.h/2),"1d":0,"3S-2H":"1L"});J(6B,{"6P":"3i","2t":"1L"});6B.1H(lF)}if(C.4S==1){B 8H=1M("1S");C=4l(C,\'qE\',\'qE\');C=4l(C,\'qH\',\'qH\');J(8H,{"1k":"29","2M":C.h/2,"2j":0,"3S-2H":"1L","4e-3I":(C.CX+"px"),"1z":C.5q,"2K-Y":"100%","2W-1g":C.Xd,"2W-2M":C.X9,"2W-1d":C.X8,"2W-2j":C.X4,"2F-1g":C.X3,"2F-2M":C.X5,"2F-1d":C.Bi,"2F-2j":C.B8,"2Y-6g":(C.CP+"px"),"2p":"1L"});if(C.E9==1){J(8H,{"2t":"#"+C.Eb})}6B.1H(8H);B iJ=K;B ic=K}o.mh=C.h;7T.1H(6B);if(C.iK==1){v.iK=1;B iC=1M("1S");J(iC,{"1k":"29","1g":0,"1d":0});X.1H(iC);I(v.2S)?rQ(v.2S):\'\'}if(C.3y==1){if(C.cd.6H().O(\'<2e\')==-1){C.cd==\'\'?C.cd="<2e W=\'20\' Y=\'20\'><g><cL ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 3j=\'#fx\'/></g></2e>":\'\'}3y=1M("1S");3y.1U=C.cd.6H();C=4l(C,\'E1\',\'E1\');J(3y,{"1k":"29","1g":-10+C.Yg-C.Yf,"1d":-2C,"3S-2H":"1L","Y":20,"W":C.e8,"1t":C.sH,"4y":"2J 0.1s 2O, 1t 0.1s 2O"});if(C.iB==1||C.rT==1){J(3y,{"2J":"1A(0)"})}F{if(C.lW!=1){J(3y,{"2J":"1A("+C.lW+")"})}}X.1H(3y);if(C.sl!=-1){B x=["4I","gS","cL"];V(B y=0;y<x.Q;y++){B z=3y.st("2e "+x[y]);if(z.Q>0){V(B y2=0;y2<z.Q;y2++){z[y2].C.3j="#"+C.sl}}}}C.e9=3y.2i}if(C.a2!=0){J(X,{"2J":"c5("+C.a2+"gK)"})}if(C.3i==1){1p(X);3V=K}if(1h=="1T"){if(C.1p==1&&C.gI==1){o.gW=H;C.3i=H}F{o.gW=K}}C.a4=0;if(C.a2!=0){C.fQ=2N.FL(C.a2);if(C.fQ>45&&C.fQ<135){C.a4=90}if(C.fQ>Yi&&C.fQ<Ee){C.a4=DD}}if(b3){o.dM=C.e6=="5C";w=C.w;6D(1,o.4L.6x(-1)[0],"no")}E fR(n,x,y,z,Ef,Eo){J(x,{"1k":"29","2M":0,"1d":0,"W":Ef,"Y":(C[\'h\'+n]>0?C[\'h\'+n]:C.h),"2t":z?(z.O("2O")>-1?z:\'#\'+z):\'\',"2Y-6g":(C.Ep==1?1:C.7p*C.h/2),"1t":Eo,"3S-2H":"1L","4y":"2J 0.2s 8q-in-6w"})}E a0(){bg=1M("1S");C=4l(C,\'e1\',\'e1\');B lY=C.h+C.8Q+C.92;B Es=C.w+C.6I+C.6Q;if(C.bg==1){}F{C.5G=0}C=4l(C,\'gd\',\'gd\');if(v.1y.g7==1||C.g7==1){C.5p=\'#lJ\';C.bg=1;C.5G=0.5}J(bg,{"1k":"29","1g":0,"1d":0,"W":Es,"Y":lY*C.sq,"so":(C.lX*lY)/2,"6o":C.5p,"1t":C.5G,"6V":"2z","4y":"1t .1s 2O, 2t .1s 2O"});if(C.sE==1){J(bg,{"2Y":"5a 6O #"+C.sF})}if(C.2y==1){if(C.fX==1){J(bg,{"6e":"3S"})}if(!o.1q.2A){bg.aI=9x;bg.Ye=sL;bg.Yd=sf;bg.hW=cD}}F{J(bg,{"6e":"7c"})}if(!o.1q.2A){bg.eW=5U;bg.hW=cD;bg.eO=5u}if(o.1q.2A){bg.1w("et",E(1c){1c.6d=H;if(!I(1c.5H)&&1c.bt.Q>0){1c.5H=1c.bt[0].ia;1c.8c=1c.bt[0].km}lU=1c;5U(1c);sf(1c)});bg.1w("cW",E(1c){1c.6d=H;5u(1c);sL(lU)});bg.1w("2y",E(1c){1c.6d=H});bg.1w("bv",E(1c){if(!I(1c.5H)&&1c.bt.Q>0){1c.5H=1c.bt[0].ia;1c.8c=1c.bt[0].km}lU=1c;cD(1c)})}J(bg,{"1d":2N.lE(-C.w/2-C.6I)});J(bg,{"1g":2N.lE(-C.h/2-C.8Q+C.En-C.Em)});X.1H(bg)}E 2r(W){if(W!=w){w=W;o.sS=w;B bH=w/8k.2i;J(bg,{"W":(w+C.6I+C.6Q),"1d":-w/2-C.6I,});J(7T,{"1d":-w/2});J(8k,{"W":w});J(7T,{"W":w});B xx=bR.2i*bH;if(xx>8k.2i){xx=8k.2i}J(bR,{"W":xx});B wp=6B.2i*bH;J(6B,{"W":wp});s8(wp,K);if(1h=="2K"){AO()}if(C.iK==1){ez()}}}E s8(x,1L){if(C.3y==1){if(x<C.e9/2&&C.e8!=20){x=C.e9/2}if(x>w-C.e9/2&&C.e8!=20){x=w-C.e9/2}B y=x-w/2-C.e9/2+C.Ya-C.Yb;J(3y,{"1d":y})}}E sa(){J(3y,{"2J":"1A("+C.lW+")"})}E 5U(1c){o.R.iA(1f,"8s");if(C.bg==1){if(C.7O!=-1){B m=1B 5t({"mc":bg,"1G":"7w","to":C.7O,"1a":0.1,"me":(1f+"bg")})}if(6m(C.8N)){J(bg,{"2t-1z":C.8N})}}if(6m(C.sU)){J(6B,{"2t-1z":C.sU})}if(C.3y==1){if(C.Ek==1&&I(C.sI)){if(C.m5==1&&3B){}F{3y.1U="<2e W=\'"+C.e8+"\' Y=\'20\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'>"+C.sI.6H()+"</2e>"}}if(C.iB==1){if(C.rT==1&&!o.1F){}F{sa()}}F{if(C.lI!=-1){B m2=1B 5t({"mc":3y,"1G":"7w","to":C.lI,"1a":0.1,"me":(1f+"3y")})}}}if(C.2m==1&&(o.P.1o()>0||1h=="1T"||b3)){1r(2m);J(2m,{"1t":1})}if(C.eo>0){J(bg,{"2J":"3g("+((C.eo-1)/5+1)+")"});sJ(C.eo)}if(1h=="1T"){o.U.52(H);o.52=H}o.ca=H}E sJ(x){J(8k,{"2J":"3g("+x+")"});J(bR,{"2J":"3g("+x+")"});cA?J(cA,{"2J":"3g("+x+")"}):\'\';J(6B,{"2J":"3g("+x+")"})}E 5u(){if(!lM){if(C.6K>0){J(cA,{"W":0})}if(6m(C.sU)){J(6B,{"2t-1z":C.1z})}if(C.bg==1){if(C.7O!=-1){B m=1B 5t({"mc":bg,"1G":"7w","to":C.5G,"1a":0.1,"me":(1f+"bg")})}if(6m(C.8N)){J(bg,{"2t-1z":C.5p})}}if(C.3y==1){if(C.Ek==1&&I(C.sI)){if(C.m5==1&&3B){}F{3y.1U="<2e W=\'"+C.e8+"\' Y=\'20\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'>"+C.cd.6H()+"</2e>"}}if(C.iB==1){J(3y,{"2J":"1A(0)"})}F{if(C.lI!=-1){B m2=1B 5t({"mc":3y,"1G":"7w","to":C.sH,"1a":0.1,"me":(1f+"3y")})}}}if(C.eo>0){J(bg,{"2J":"3g(1)"});sJ(1)}if(1h=="1T"&&!o.2k){o.U.52(K);o.52=K}o.R.iA(1f,"6w")}if(C.2m==1&&(o.P.1o()>0||1h=="1T")){1p(2m);J(2m,{"1t":0})}if(o.ma&&1h=="2K"){o.th.1p();o.DZ=-1}o.ca=K}E 9x(1c){1c.6d=H}E DF(1c){1c.6d=H}E sL(1c){if(1h=="1T"){if(o.8p){lM=H;3r(sg);sg=1K(E(){lM=K;5u()},2C)}}rS();o.3B=K;if(C.3y==1){if(C.m5==1&&I(C.rN)){3y.1U="<2e W=\'20\' Y=\'20\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'>"+C.cd.6H()+"</2e>"}}b0(1c.5H,1c.8c);o.R.dS(1f);o.R.ey(1c.5H,1c.8c);1c.6d=H}E sf(1c){3B=H;if(C.3y==1){if(C.m5==1&&I(C.rN)){3y.1U="<2e W=\'20\' Y=\'20\' 3w:3A=\'3f://3v.w3.3o/6u/3A\' 3w=\'3f://3v.w3.3o/3U/2e\'>"+C.rN.6H()+"</2e>"}}dR=i4(bg);8W=f6(bg);b0(1c.5H,1c.8c);6D(2y,1,"no")}E b0(iv,ix){B x;B DH=2N.5R(1P.m6.9U,1P.7A.9U);B DE=2N.5R(1P.m6.c4,1P.7A.c4);if(o.1q.2A){}F{ix=ix+DE;iv=iv+DH}if(C.a4>0){x=ix-dR-C.6Q;2y=x/w;if(C.a4==DD){x=ix-dR-C.6I;2y=x/w;2y=(2y-1)*-1}}F{x=iv-8W-C.6I;2y=x/w;if(C.a2>134&&C.a2<Yv){x=iv-8W-C.6Q;2y=x/w;2y=(2y-1)*-1}}2y>1?2y=1:\'\';2y<0?2y=0:\'\'}G.ez=E(){ez()};G.it=E(){rQ()};E rQ(){if(2S){V(B i=0;i<2S.Q;i++){iC.2U(2S[i])}}2S=[];if(v.2S){if(26(v.2S)=="4Z"){v.2S=2o(v.2S)}V(B i=0;i<4b.3R(v.2S).Q;i++){if(v.2S[i].1a){2S[i]=1M("1S");J(2S[i],{\'1k\':\'29\',\'1d\':0,\'1g\':-C.h/2,\'W\':(I(v.2S[i].W)?v.2S[i].W:C.Dw),\'Y\':C.h,\'1t\':(I(v.2S[i].1t)?v.2S[i].1t:C.DW),\'3S-2H\':\'1L\',\'2p\':\'1L\',\'2t-1z\':(I(v.2S[i].1z)?v.2S[i].1z:C.DM)});2S[i].1a=v.2S[i].1a;iC.1H(2S[i])}}ez()}}E ez(){B x=o.P.1o();V(B i=0;i<2S.Q;i++){if(x>0){J(2S[i],{\'1d\':w*(2S[i].1a/x)-w/2,\'2p\':\'4c\'})}F{2R(2S[i])}}}E rS(){3B=K}E cD(1c){8W=f6(bg);if(C.6K>0){if(o.1F||1h!=\'2K\'){J(cA,{"W":1c.5H-8W})}}if(C.2m==1&&(o.P.1o()>0||1h=="1T"||b3)){!5T(2m)?1r(2m):\'\';dR=i4(bg);b0(1c.5H,1c.8c);if(1h=="2K"){if(v.Yw==1){if(o.P.5A()&&o.P.bo().O("?rB")>0){3x.1U=\'- \'+ik((1-2y)*o.P.1o(H))}F{3x.1U=ik(2y*o.P.1o())}}F{B d=o.P.1o();if(v.4p>0){d=d-v.4p}3x.1U=ik(2y*d)}}if(1h=="1T"||b3){3x.1U=2N.56(2y*100);if(b3){if(o.dM){3x.1U=4u(2y*o.4L.6x(-1)[0]).rE(1)}}}J(2m,{"1g":(-3x.2P*2-C.B3*1)-(C.B4==1?(C.h/2)*(C.eo>0?C.eo:1):0),"1d":(-w/2+(1c.5H+1P.m6.9U-8W)-2m.2i/2),"Y":C.lD+C.h3+C.B6,"W":C.B5+3x.2i+C.lA,});J(9s,{\'Y\':2m.2P});2m.C.4C="2C"}if(o.ma&&1h=="2K"&&o.th){if(o.P.1o()>0){if(C.2m==0){dR=i4(bg);8W=f6(bg);b0(1c.5H,1c.8c)}B 1d=(-w/2+(1c.5H-8W)-v.ht/2);1d>w/2-v.ht?1d=w/2-v.ht:\'\';J(o.bD,{"1g":(-v.rV-(v.B0>0?v.B0*1:5)-v.rY),"1d":(1d<-w/2?-w/2:1d)});o.th.1a(2y*o.P.1o(),1c.5H,8W,w)}}}G.c=E(){L X};G.s=E(1f){L C[1f]};G.ss=E(x,x2){L C[x][x2]};G.g=E(x){9W(x){1m"W":L w;1l;1m"Ym":L 8k.2i;1l;1m"Y":L C.h;1l;1m"x":L 4Q(X.C.1d);1l;1m"y":L 4Q(X.C.1g);1l;1m"1t":L X.C.1t?X.C.1t:1;1l;1m"1r":L 3V;1l;1m"3u":L 3u;1l;1m"3g":L 3g;1l;1m"1h":L 1h;1l;1m"1f":L 1f;1l;1m"x0":L x0;1l;1m"y0":L y0;1l;1m"2y":L 2y;1l;7c:L K}};G.1Z=E(1f,x){9W(1f){1m"1r":3V=x;1l;1m"3B":3B=x;1l;1m"2p":1h=="2K"||C.1p==1?J(X,{"5B":(x?"3V":"3i")}):J(X,{"2p":(x?"4c":"1L")});3V=x;1l;1m"3u":J(X,{"2J":"3u("+x+")"});3u=x;1l;1m"3g":J(X,{"2J":"3g("+x+")"});3g=x;1l;1m"1t":J(X,{"1t":x});1l;1m"1d":J(X,{"1d":x});1l;1m"1g":J(X,{"1g":x});1l;1m"2y":2y=x;1l;1m"cJ":C.cJ=x;1l;1m"W":J(X,{"W":x});1l;1m"Y":J(X,{"Y":x});1l;1m"rG":C.Yo=x;1l;1m"x":J(X,{"1d":x});1l;1m"y":J(X,{"1g":x});1l;1m"x0":x0=x;1l;1m"y0":y0=x;1l}};G.2r=E(x){2r(x)};G.kC=E(x){};G.em=E(ag,ak){if(3B){if(1h=="1T"||b3){b0(ag,ak);o.R.dS(1f)}if(1h=="1T"){o.8p=H}b0(ag,ak);6D(2y,1,"no")}};G.ey=E(ag,ak){if(3B){rS();3B=K;b0(ag,ak);o.R.dS(1f);6D(2y,1,"no")}};E 6D(1a,1o,sc){1a<0?1a=0:\'\';if(v.4p>0&&1o>1){1o=1o-v.4p;1a=1a-v.4p}if(C.3y==1&&C.rT==1&&C.iB!=1){if(!C.B7&&1a>0){sa();C.B7=H}}if(3B&&1o!=1){}F{B 4m;if(1o>0&&1a>0){if(1a>1o){1a=1o}4m=w*(1a/1o);if(4m==6B.2i){4m=-1}}F{4m=0}if(4m>=0){J(6B,{"W":4m});s8(4m,H)}if(I(8H)){if(1o<2&&1h=="2K"){if(iJ){2R(8H);iJ=K}}F{if(!iJ){6h(8H);iJ=H}8H.1U=1h=="2K"?4O(1a==0?1o:1a):2N.lE(1a*100);if(4m<8H.l6+C.B8+C.Bi){if(!ic){J(8H,{"1d":0,"2j":"2z"});ic=H}}F{if(ic){J(8H,{"2j":0,"1d":"2z"});ic=K}}}}}};G.6D=E(1a,1o,sc){if(1o!=Bj||1a!=Bk){6D(1a,1o,sc)}};G.Bl=E(){2y>1?2y=1:\'\';2y<0?2y=0:\'\';J(6B,{"W":(2y*w)})};G.Bg=E(1a,1o){if(1o>0&&1a>0){B 4m=w*(1a/1o);J(bR,{"W":4Q(4m)});Bf=1o;s6=1a}F{s6=0;J(bR,{"W":0})}};E Ba(){o.bD=1M("1S");J(o.bD,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'W\':v.ht,\'Y\':v.rV,\'6P\':\'3i\',"3S-2H":"1L","2t-1z":"#Yp","2Y-6g":v.Bb+\'px\',"2p":"1L"});o.bD.id="Yq"+v.id;if(v.rY==1){J(o.bD,{"2Y":v.AS+"px 6O "+s5(\'1z\',v.AR)})}if(v.Aw==1){J(o.bD,{"5F-az":"lx 5a h8 4q(0,0,0,0.5)"})}o.bD.C.4C="hw";X.1H(o.bD)}E lw(){2m=1M("1S");J(2m,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'Y\':\'2z\',"3S-2H":"1L","1t":0,"4y":"1t 0.1s 2O"});9s=1M("1S");C=4l(C,\'hj\',\'hj\');J(9s,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'W\':\'100%\',\'Y\':30,\'2t-1z\':C.gY,\'1t\':C.h7,\'2Y-6g\':C.r6});3x=1M("1S");J(3x,{\'1k\':\'29\',\'1d\':C.lA,\'1g\':C.lD,\'1z\':C.sd,\'4e-h6\':C.sb,\'4e-3I\':C.h3,"eA-d1":C.s9+\'px\',"2K-Y":"1",\'1t\':C.rF});C.Aq?C.gZ=C.Aq:\'\';if(C.gZ==1){7W=1M("1S");7W.1U=\'<2e W="eV" Y="lo" rJ="0 0 8 6" 7x="1.1" 3w="3f://3v.w3.3o/3U/2e" 3w:3A="3f://3v.w3.3o/6u/3A"><eS id="As" 3z="1L" 3j="\'+gX(C.gY)+\'" 3j-9E="AC" 2S="0 0 8 0 4 6"></eS></2e>\'}X.1H(2m);2m.1H(9s);2m.1H(3x);if(C.gZ==1){2m.1H(7W);J(7W,{\'1k\':\'29\',\'1d\':\'50%\',\'2F-1d\':\'-rU\',\'2M\':(o.ln?\'-eV\':\'-lo\'),\'1t\':C.h7})}};E AO(){if(o.3m&&v.bL==1&&!o.1F){B f=o.3m.9D();if(f.t&&f.d){6D(f.t,f.d)}}};G.3Y=E(){X.2U(7T);if(bg){bg.eP("aI");bg.eP("eW");bg.eP("eO");bg.5k.2U(bg);bg=22}if(3y){X.2U(3y)}if(X.5k==o.1Q){o.1Q.2U(X)}F{if(o.1y){if(X.5k==o.1y){o.1y.2U(X)}}}X=22}};B AF=E(){B i;B C=[];B w;B h;B 3V=H;B 3u=1;B 3g=1;B x0=0;B y0=0;B 9T=7b(mt,Y6);B 1h,1f="bg";B 1G="XP";C["1k"]=v.1y.1k;V(B k in v.1y){if(v.1y.2G(k)){C[k]=v.1y[k]}}if(C.1r==0){v.1y.h=C.h=0;C.2W=C.2F="0 0 0 0";C.5l=0}C["1A"]=1;C=4l(C,\'2F\',\'2F\');C=4l(C,\'cG\',\'cG\');if(I(C.ha)){if(C.ha!=20&&C.2F=="-20 0 0 0"){C.7n=C.ha}}B X=1M("1S");J(X,{\'1k\':\'29\',\'1d\':0,\'1g\':0,\'W\':(C.hb==1?\'100%\':o.8P),\'Y\':C.h-(C.1k!=\'1g\'?C.7n:0),\'XO\':C.a,\'3S-2H\':\'1L\',\'eT\':\'hN\',\'sG\':\'hQ\'});o.1Q.1H(X);B bg=1M("1S");J(bg,{\'XQ\':\'29\',\'XR\':0,\'XS\':0,\'XN\':\'100%\',\'Y\':C.h-(C.1k!=\'1g\'?C.9q+C.7n:0),\'1t\':C.a,\'2p\':\'4c\',\'2F-1d\':C.3E,\'2F-2j\':C.4i,\'2Y-6g\':C.7p});X.1H(bg);w=X.2i;v.cB=-C.7n;if(C.5l==1){if(C.1z==\'3G\'||v.1y.aU!=\'\'){if(C.1k!=\'1g\'){v.cB=98-C.h}B 41=\'1E:aU/sr;i2,XI+XH/T/D+XL/XT/XU==\';if(v.1y.aU.O("1E:aU")>-1){41=v.1y.aU}J(bg,{\'Y\':C.h+(C.1k!=\'1g\'?v.cB:0),\'2t\':\'1e(\'+41+\') hx-x 50% 100%\',\'2t-3I\':\'2z\'})}F{B fb=\'to 2M, 4q(\'+nb(C.1z)+\',0), 4q(\'+nb(C.1z)+\',1)\';J(bg,{\'2t\':\'-j4-2O-5l(\'+fb+\')\',\'2t\':\'-3C-2O-5l(\'+fb+\')\',\'2t\':\'-ms-2O-5l(\'+fb+\')\',\'2t\':\'-o-2O-5l(\'+fb+\')\',\'2t\':\'2O-5l(\'+fb+\')\'})}}F{J(bg,{\'2t-1z\':C.1z})}G.h=E(){L C.h-(C.1k!=\'1g\'?C.7n:0)};G.c=E(){L X};G.s=E(1f){L C[1f]};G.g=E(x){if(X){9W(x){1m"w":X.2i>0?w=X.2i:\'\';L w;1l;1m"W":L X.2i;1l;1m"Y":L X.2P;1l;1m"x":L 4Q(X.C.1d);1l;1m"y":L 4Q(X.C.1g);1l;1m"1t":L X.C.1t?X.C.1t:1;1l;1m"1r":L 3V;1l;1m"3u":L 3u;1l;1m"3g":L 3g;1l;1m"1f":L 1f;1l;1m"x0":L x0;1l;1m"y0":L y0;1l;1m"9T":L 1f+9T;1l;7c:L K}}F{L K}};G.1Z=E(1f,x){9W(1f){1m"1r":3V=x;1l;1m"w":w=x;1l;1m"2p":J(X,{"2p":(x&&!o.qN?"4c":"1L")});3V=x;1l;1m"1A":J(X,{"2J":"1A("+x+")"});3u=x;3g=x;1l;1m"3u":J(X,{"2J":"3u("+x+")"});3u=x;1l;1m"3g":J(X,{"2J":"3g("+x+")"});3g=x;1l;1m"1t":J(X,{"1t":x});1l;1m"1d":J(X,{"1d":x});1l;1m"1g":J(X,{"1g":x});1l;1m"W":J(X,{"W":x});1l;1m"Y":J(X,{"Y":x});1l;1m"x":J(X,{"1d":x});1l;1m"y":J(X,{"1g":x});1l;1m"x0":x0=x;1l;1m"y0":y0=x;1l}};G.3Y=E(){o.1Q.2U(X);X=22}};if(26(3D)=="4Z"){BV()}o.G=G;if(3D.id){if(1P.8d(3D.id)){rh()}F{1P.1w(\'Y1\',9n)}}F{26 BW==\'E\'?BW():\'\'}E rh(){if(I(3D.id)){if(1P.8d(3D.id)){if(!FM(1P.8d(3D.id))||3D.3V==1){9n()}F{1K(rh,50)}}}}E 9n(){V(B i=0;i<7g.Q;i++){if(7g[i].2X("id")==3D.id){if(7g[i].2X("5Z")){7g[i].2X(\'2v\')}}}7g.3d(o.G);B 2v=K;if(I(3D.3k)){V(B i=2;i<10;i++){if(3D.3k==i&&o[\'u\'+i]!=\'\'){v=8O(v,4P.6l(dm(o[\'u\'+i])));2v=H}}}if(o.u!=\'\'&&!2v){v=8O(v,(26 o.u!="3L"?4P.6l(dm(o.u)):o.u))}if(26(Y0)!="E"){V(B 1f in 3D){if(3D.2G(1f)){if(1f.O("Ch")==0){3D[1f]=22}}}}v=8O(v,3D);if((!I(v.3p)||v.3p==\'\')&&v.XW==1){1u(\'6z\');L}if(v.Cl==1||v.uH==1){1V.1w(\'9w\',E(1c){B x=2b;B y;I(1c.1E.1a)?x=1c.1E.1a:\'\';I(1c.1E.1T)?x=1c.1E.1T:\'\';I(1c.1E.BS)?y=1c.1E.BS:\'\';I(1c.1E.2X)?y=1c.1E.2X:\'\';if(y&&v.vw){if(v.vw!=\'\'){B pm=v.vw.1Y(/\\s+/ig,\'\').2D(\',\');if(pm.O(y)==-1){L}}}if(v.uH==1){if(26(Bx)=="E"){Bx(1c)}}if(y&&o.9o){if(I(1c.1E.1Z)){x=1c.1E.1Z}6M(y,x)}})}V(B 1f in o.f5){if(o.f5.2G(1f)){o.f5[1f]!=\'\'?o.i5+=o.f5[1f]+\' \':\'\'}}1u(o.7x+\' \'+o.i5);i7=v.id;o.d=9k.uV;if(b5){B mB=K;3t{if(b5){if(b5.1P){B mD=b5.1P.cM("BA");V(B i=0;i<mD.Q;i++){if(mD[i].dT===1V){o.7J=mD[i];o.mM=H;v.Bv!=1?J(o.7J,{"2Y":"1L"}):\'\';o.Bu=o.7J.C;1u("bW")}}}F{mB=H}}}3b(d0){mB=H}if(mB){o.mM=H;1u("XV-hF")}}o.mM&&1P.uw?o.hF=1P.uw.2D(\'/\')[2]:\'\';!o.Bo?Bq():\'\';if(26(Br)=="E"){if(Br()){L}}o.9o=H;Bt();B BC=1B 6p();if(BC.XX()==20){if(7b(1,20)==10&&v.XY!=0){mW(o.v6,o.v6);1K(E(){if(1V.ga){ga(\'f0\',\'UA-XZ-6\',\'2z\',{\'8t\':\'7Z\',\'WO\':H});ga(\'WN\',\'BD\');ga(\'BD:VE\',[o.d]);ga(\'7Z.ah\',\'1c\',{BN:\'n0\',BM:\'9n\',BO:o.d})}},cU)}}if(v.ga==1&&v.BP!=1){if(26 BL==\'E\'){o.ga=1B BL()}}o.1D=1P.8d(v.id);if(!o.1D){v.1u=1;1u(\'id "\'+v.id+\'" aN eE\');L K}o.1D.1U=\'\';J(o.1D,{\'2W\':0,\'VD-d1\':\'t7\'});o.9F=o.1D.2P;o.aF=o.1D.2i;if(I(v.hO)&&!I(v.4H)){if(I(v.hO.4H)){v.4H=v.hO.4H}if(I(v.hO.n4)){v.n4=v.hO.n4}}if(o.1D.C.W.O("%")>-1){o.VF=o.1D.C.W}if(v.4H=="7D"||o.1D.C.Y.O("%")>-1){v.4H="%";o.kc=o.1D.C.Y;o.9F=0}if(o.aF==0){if(o.1D.C.W.O("px")>0){o.aF=2u(o.1D.C.W)}F{if(o.1D.5k.C.W.O("px")>0){o.aF=2u(o.1D.5k.C.W)}F{if(o.1D.5k.5k.C.W.O("px")>0){o.aF=2u(o.1D.5k.5k.C.W)}}}}if(7a(v.4H).O("x")>0){o.4H=v.4H.2D("x")[0]/v.4H.2D("x")[1];if(o.9F==0){o.9F=o.aF/o.4H}}F{o.4H=0}J(o.1D,{\'1k\':\'eY\',\'5F-hM\':\'sZ-5F\',\'1C-6R\':\'1d\',\'-3C-dl-eU\':\'1L\',\'VG\':\'3i\',\'sY\':\'nt-nc\',\'7v-Y\':15,\'eT\':\'hN\',\'2K-Y\':\'hQ\',\'H2\':\'H1\'});if(v.az==1){J(o.1D,{\'5F-az\':\' 0 BH VH 4q(50,50,93,.1), 0 h8 BH 4q(0,0,0,.VC)\'})}if(o.4H>0){J(o.1D,{\'Y\':o.9F})}F{J(o.1D,{\'Y\':o.9F==0?o.kc:o.9F})}o.1Q=1M("1S");J(o.1Q,{\'1k\':\'29\',\'5F-hM\':\'sZ-5F\',\'6o\':v.jp,\'1z\':\'#3K\',\'W\':\'100%\',\'Y\':\'100%\',\'6P\':\'3i\',\'1d\':0,\'1g\':0,\'eT\':\'hN\',\'2K-Y\':\'hQ\'});if(v.VB==1){o.1Q.C.6o=\'fD\'}if(v.2Y==1){J(o.1D,{\'2Y\':v.BJ+\'px 6O \'+v.9m})}o.J=1P.1M(\'C\');o.J.1G=\'1C/J\';o.1Q.1H(o.J);o.1Q.5N("id",\'Vx\'+v.id);tX("6Z, 6Z > *{1k: tW;1g: 2z;1d: 2z;6P:3V;H2:H1!5o;5R-W:1L!5o;kq-1h: Vw;2J-GY: 6F 6F;5F-hM:sZ-5F!5o;-3C-H0-H7-1z: 4q(0,0,0,0);-3C-H0-H7-1z: fD;1C-Vy:0!5o} 6Z 41{5R-W:1L} 6Z > *:5W {H9: 1L} 6Z,6Z a,6Z a:Vz,6Z a:VA,6Z a:fu,6Z a:vj,6Z a:5W{1z:#fx;4e-3I:100%;}#Ha"+v.id+"{W:100%!5o;Y:100%!5o;5R-W:1L!5o;5R-Y:1L!5o}6Z bW{2p:4c!5o;5R-Y:1L!5o}");jt(1);if(1V.Hb){B GW=1B Hb(E(e){if(e[0].vm.Q>0){V(B i=0;i<e[0].vm.Q;i++){if(e[0].vm[i]==o.1Q){uI()}}}});GW.VI(o.1D,{VJ:H})}o.b7=1M(\'bW\');4E(o.b7,{"id":"VR"+v.id,"GH":"no","1R":"","uJ":"H","GI":"H","GD-iU":"H"});J(o.b7,{\'1k\':\'29\',\'W\':\'100%\',\'Y\':\'100%\',\'2Y\':0,\'3S-2H\':\'1L\'});o.1Q.1H(o.b7);o.1D.VS=E VT(e){o.iQ++;if(o.iQ==5){v.1u=1;1u(o.7x+\' \'+o.i5+\' \'+o.i8)}if(!e)B e=1V.1c;e.6d=H;if(e.9V)e.9V();B x=e.ia-f6(o.1Q);B y=e.km-i4(o.1Q);if(v.VU==1){if(I(v.j5)){if(4s(v.j5)!=\'\'){o.r5=v.j5;I(v.GK)?o.dA=v.GK:\'\';v.j5==\'1L\'?o.dA=o.d:\'\'}}}sm(x,y);L K};E sm(x,y){if(o.dA.O(o.d)==-1||v.GT==1||v.4r==1){if(!I(o.4r)){!v.kk?v.kk="3G":\'\';!v.rW?v.rW="3K":\'\';o.4r=1M(\'1S\');B 1J;B n=0;V(B i=0;i<10;i++){if((v[\'rm\'+i]==1&&v.4r==1)||i==9){if((I(v[\'rm\'+i+\'t\'])&&I(v[\'rm\'+i+\'a\'])||i==9)){1J=1M("sX");if(i==9){if(v.VQ!=1){1J.qW=o.r5+(v.GQ==1?" "+o.7x:\'\')}F{1l}}F{1J.qW=v[\'rm\'+i+\'t\']}if(i!=9){if(v[\'rm\'+i+\'a\'].O(",0/1")>-1){B z=v[\'rm\'+i+\'a\'].2D(\',\');1J.qW+=\' (\'+(2X(z[0].1x(4))==1?2I(\'on\'):2I(\'7D\'))+\')\'}}1J.5N("i",i);F3(1J);1J.1w("2y",Hr);o.4r.1H(1J);n++}}}J(o.4r,{"1C-2J":"VP","2K-Y":"1","9h-7P":"b6","2t":kI(v.kk,0.7)});if(n>1){J(o.4r,{"2W":"h8"})}o.4r.C.4C="VK";o.4r.hW=Hp;o.1Q.1H(o.4r)}F{6h(o.4r)}J(o.4r,{"1k":"29","1g":y,"1d":x,"1C-6R":"1d"});B rn=K;if(o.3M-x<o.4r.2i-20){J(o.4r,{"1d":x-o.4r.2i});rn=H}if(v.VM==1||rn){J(o.4r,{"1C-6R":"2j"})}o.F7=x;o.F1=y;3r(o.jK);o.jK=1K(E(){2R(o.4r)},3U)}}E Hp(){3r(o.jK);o.jK=1K(E(){2R(o.4r)},3U)}E Hr(e){B i=e.4h.7K("i");B y;B rM=K;if(i>0){if(i==9){o.dA!=\'\'?1V.5S(o.dA):\'\'}F{B x=v[\'rm\'+i+\'a\'];if(x){if(x.O("2X:")==0){if(x.O(",0/1")>-1){B z=x.2D(\',\');B b=o.R.qI(x,"2V");2X(z[0].1x(4),z[1],b);qA();sm(o.F7,o.F1);rM=H}F{y=x.2D(",");2X(y[0].1x(4),(I(y[1])?y[1]:22))}}if(x.O("3q:")==0&&o.3q){o.3q.2X(x.1x(6))}if(x.O("js:")==0){y=x.2D(",");2o(y[0].1x(3)+\'(\'+(I(y[1])?\'"\'+y[1]+\'"\':\'\')+(I(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}if(x.O("1e:")==0){1V.5S(x.1x(4))}}}!rM?2R(o.4r):\'\'}}E F3(x){J(x,{"2W":"rU h8","4e-3I":(v.F6?v.F6:"55")+"%","eA-d1":"0.Ve","1t":0.9,"1z":v.rW});x.1w("kH",Ff);x.1w("kJ",Fq)}E Ff(e){J(e.4h,{"1t":1});J(e.4h,{"2t":kI(v.kk,0.5)})}E Fq(e){J(e.4h,{"1t":0.9});J(e.4h,{"2t":"1L"})}o.1q=1B Fp();if(o.1q.5n){B sP=(v.Fr==1?\'*::-3C-P-R-1F-Vg-jP {2p: 1L!5o;-3C-sV: 1L;}\':\'\');if(v.jj==1&&v.Fs!=1&&(v.Fn!=1||!o.1q.9j)&&(v.Fk!=1||!o.1q.h4)){}F{if(o.1q.5n&&v.jR==1){}F{sP+=\'5Y::-3C-P-R {2p:1L !5o;}*::-3C-P-R-Vb {2p: 1L!5o;-3C-sV: 1L;}*::--3C-P-R-1O-jP {2p: 1L!5o;-3C-sV: 1L;}\'}}B 1J=1P.1M(\'C\');1J.1G=\'1C/J\';1J.1H(1P.Fl(sP));o.1Q.1H(1J)}if(o.1q.sn){v.4d==1&&v.Va==1?v.4d=0:\'\'}if(o.4H==0){if(o.1Q.2P==15&&!o.kc&&v.Gx>0){J(o.1D,{"Y":v.Gx})}}if(I(v.sk)){v.1b.e3=v.sk}if(I(v.kh)){v.1b.ki=v.kh}if(I(v.1F)){o.2w=v.1F}hk();1K(E(){js("9o");if(v.3P){if(26 v.3P==\'E\'){v.3P=v.3P.8t};2o(v.3P+(v.3P.O(\'()\')==-1?\'("\'+v.id+\'")\':\'\'))}},1)}E hk(){1u("hk");o.U=1B F0();if(!v.3p){v.3p="?"}if(v.pl){v.3p=v.pl+o.dv}o.V8=k6();o.EE=0;o.5g=sB();if(o.5g){if(3l.5D("sA")!=22){o.sw=3l.5D("sA")}F{o.sw=k6();3l.7Q("sA",o.sw)}if(v.rA==1){if(3l.5D("qF")!=22){o.42=3l.5D("qF")}}if(v.EF==1){if(3l.5D("qJ")!=22){v.91=3l.5D("qJ")}}V(B i=0;i<o.bC.Q;i++){if(v[\'EG\'+o.bC[i]]==1){if(3l.5D("EI"+o.bC[i])!=22){}F{v[o.bC[i]+\'s\']=0}}}8z("EH");8z("EC")}o.iG=o.8B.1x(o.8B.O("://")+3);if(o.iG.O("#")>0){o.iG=o.iG.1x(0,o.iG.O("#"))}if(o.5g&&v.bL==1){o.3m=1B V9()}if(v.mr==1){o.5B=v.Vh;FA(o.1D,"5B",H)}v.8S==1?o.8S=1B Vi():\'\';v.eb==1&&v.mr==1?o.eb=1B Vq():\'\';v.ab==1?Vs():\'\';if(v.Vt==1){o.bA=1B Vp();o.bA.dw()}o.P=1B Ew(v.3p);if(!o.1q.2A){o.1Q.1w("Vo",E(){o.5y=H;o.jM=H;o.R?o.R.Ey():\'\'});o.1Q.1w("Vk",E(e){if(!o.3B){if(v.1y.8E>0){3r(o.Ez);o.Ez=1K(E(){if(o.5y!=o.jM){o.5y=o.jM;o.R.EJ()}},v.1y.8E*2C)}F{o.5y=K}o.jM=K;if(o.R){o.R.kC()}}});o.1Q.1w("Vj",E(e){o.3B=H});o.1Q.1w("9f",E(e){o.3B=K;if(!o.52){o.8p=K;o.d8=K}1K(E(){o.5W=H},4F);if(o.1q.2A&&o.R.kd()){}F{o.R?o.R.ey(e.5H,e.8c):\'\'}if(v.jS==1){if(o.R.bp()){o.R.7l()}}});o.1Q.1w("rs",E(e){if(I(o.R)){if(o.3B){o.R.em(e.5H,e.8c)}F{o.R.vg()}}})}F{1V.1w("Vl",FK,K)}v.rl==1&&26 EW==\'E\'?o.rl=1B EW():\'\';o.4j.1w("et",E(e){o.3B=H;o.5y=H;o.kF=K;kO("1F",e)},{ej:H});o.4j.1w("bv",E(e){if(o.3B){o.kF=H;kO("Vm",e)}},{ej:H});o.4j.1w("cW",E(e){o.3B=K;o.5y=K;if(v.k9==1){B 9d=1B 6p().9a();if(9d-o.a1<(v.ho?v.ho:0.3)*2C){jW(e)}}!o.kF?f8(e):\'\';o.kF=K;if(o.5h||o.ei){o.R.51()}kO("4z",e)},{ej:H});3t{1V.1P.1w("9f",E(e){o.5W=K;if(!o.52){o.8p=K;o.d8=K}if(o.3B&&o.R){o.3B=K;o.R.ey(e.5H,e.8c);o.R.kC()}if(!o.5y&&!o.1q.2A&&!o.1q.tv){o.R.d4();if(o.3h){o.3h.a8()}}})}3b(d0){}1V.1P.1w("rs",E(e){o.R&&o.3B?o.R.em(e.5H,e.8c):\'\'});o.1Q.1w("et",E(e){o.kq=H;o.3B=H},{ej:H});o.1Q.1w("cW",E(e){o.kq=K;o.3B=K},{ej:H});1V.1P.1w("bv",E(e){if(o.R&&o.kq){o.R.em(e.bt[0].ia,e.bt[0].km)}},{ej:H});1V.1P.1w("VV",E(e){B x=e.4h.ks.kx();if(x==\'ES\'||x==\'qY\'){L}F{o.R?o.R.EX(e):\'\'}});1V.1P.1w("VW",E(e){B x=e.4h.ks.kx();if(x==\'ES\'||x==\'qY\'||x==\'1S\'){L}F{o.R?o.R.ER(e):\'\'}});if(o.7J){qZ(b5.1P,FB)}qZ(1P,Fy);E qZ(x,z){B y=[\'\',\'j4\',\'3C\',\'ms\',\'Wv\'];if(x){V(B i=0;i<y.Q;i++){x.1w(y[i]+(i<y.Q-1?"Wx":\'\'),z,K)}}}if(!I(o.b7.dT)){1u("Wy");L}F{o.b7.dT.1w(\'51\',2r,H);o.b7.dT.EM=2r}if(!o.1q.2A){o.4j.1w("2y",f8,K);if(v.hG==1&&v.k9==1){o.4j.1w("EL",jW,K)}}mP();if(v.4V){v.4V.on==1?o.4V=1B Wz():\'\'}o.R=1B rb();if(v.b8.EO){o.iS=v.b8.EQ}9N();2r();if(o.5g){if(v.v4==1&&v.1T!=0&&!o.1q.2A){if(3l.5D("vz")!=22){v.1T=3l.5D("vz")}if(3l.5D("iF")==1&&v.iP==1){v.5m=1}}if(v.EP==1){B sp=3l.5D("Fu");if(I(sp)){if(sp.O(\'.\')>0&&o.dM){o.U.8g(sp,1)}F{if(o.4L){B eG=o.4L.O(sp);eG==-1?eG=o.4L.O(sp*1):\'\';if(eG!=-1&&o.R.Gc(\'5C\')){o.8X=eG;o.P.8g(o.4L[eG])}o.R.Gd()}}}}B uL=K;if(v.uU==1){V(B j=0;j<o.bB.Q;j++){if(3l.5D("n2"+o.bB[j])!=22){v[o.bB[j]]=3l.5D("n2"+o.bB[j]);uL=H}}}if(!uL){if(o.1q.2A){v.uB&&v.uB>-1?v.cZ=v.uB:\'\';if(I(v.Ge)){v.jd=v.Ge;6m(v.G9)?v.jy=v.G9:\'\'}}}}if(o.3m){B f=o.3m.9D();if(f.t&&f.d){o.R.iM(f.t,f.d);o.R.4t(f.t,f.d);v.1o=f.d}}o.U.47(v.1T);if(v.5m==1){o.U.5d();o.R.4v()}o.8x=1B ux();if(v.7p>0){J(o.1D,{"2Y-6g":(v.7p+"px")});J(o.1Q,{"2Y-6g":(v.7p+"px")})}if(I(v.8K)){uD("8K")}if(I(v.eF)){uD("eF")}if(I(o.1b)){js("1b")}if(v.7r==1&&v.Wr==1){o.U.kg()}V(B i=2;i<10;i++){if(I(v["cY"+i])){if(v["cY"+i]=="2A"&&o.1q.2A){6M("cY",i)}}}}E f8(e){if(o.vl[o.4j]>2){L}o.k3=H;v.ho==0?v.k9=1:\'\';if(o.ll&&v.dj==1&&v.hG==1&&!o.1q.tv){jW(e)}F{jV();if(v.k9==1||v.hG==0){vy()}F{o.ll=1K(vy,(v.ho?v.ho:0.35)*2C)}}}E vy(){jV();if(o.1q.2A){if(o.R.kd()){o.R.vg();L}if(o.hz){if(v.G7==1&&v.WJ==1&&o.1q.8T){L}if(v.jR==1&&v.WK==1&&o.1q.5n){L}}}v.dj==1?o.U.f8():\'\'}E jW(e){jV();B y=K;if(v.2a.Gg==1){if(e){if(v.2a.WL==1&&!o.1q.2A){}F{B x;if(o.1q.2A){x=e.WM;if(!x){if(e.Gr){x=e.Gr[0].ia-f6(o.1Q)}}}F{x=e.WI}if(x){if(x<o.3M/2){if(x<o.3M*20/100){6M("46","-"+ib(v.2a.Gt,10));v.2a.2E==1&&v.2a.tz==1?7m(\'46\',0):\'\';y=H}}F{if(x>o.3M-o.3M*20/100){6M("46","+"+ib(v.2a.Gt,10));v.2a.2E==1&&v.2a.tz==1?7m(\'46\',1):\'\';y=H}}if(y){if(e.9V)e.9V()}}}}}if(!y&&v.hG==1){if(v.jj==1&&o.1q.2A){}F{o.2k?o.U.8l():o.U.7M()}}}E jV(){3r(o.ll);o.ll=2b}E 2r(x){B y=K;if(o.8P!=o.1Q.2i||o.aT!=o.1Q.2P){y=H}mP();o.R?o.R.51():\'\';o.P.51();y&&!o.2k?js("51",o.8P+\',\'+o.aT):\'\'}E mP(){B xw=o.1Q.2i;B xh=o.1Q.2P;if(o.R){if(v.Gi==1){if(v.1b.1k!="2M"){B x=o.R.eN("Gn")+o.R.eN("1g")+5+o.R.eN("Gm")+(v.G1>0?v.G1:0)+5;J(o.1D,{"Y":x})}}}if(o.4H>0&&!o.2k&&!o.cC){xh=xw/o.4H;J(o.1D,{"Y":xh})}if(!o.2k&&!o.cC&&!o.aH){o.8P=2N.56(xw);o.aT=2N.56(xh)}if(o.1q.2A&&o.2k&&v.G0==1&&v.tV!=1&&a3.c7){if(o.4H>0){if(o.4H<1){B sp=a3.c7.tC(\'FT\');if(sp!==2b){sp.cn(E(){}).3b(E(1N){})}}F{B sp=a3.c7.tC(\'tT\');if(sp!==2b){sp.cn(E(){}).3b(E(1N){})}}}F{B sp=a3.c7.tC(\'tT\');if(sp!==2b){sp.cn(E(){}).3b(E(1N){})}}}o.3M=xw;o.4J=xh;if(I(v.1R)&&o.R){v.1R!=\'\'?o.R.FE():\'\'}if(I(o.i0)){o.P.1A(o.i0)}if(o.2l&&!o.2k){o.2l.2r()}o.3h?o.3h.2r():\'\';o.bA?o.bA.2r():\'\'}E 9N(){o.U.lr(v);V(B x in v){if(v.2G(x)){if(x.O("1R")==0){if(v[x]!=\'\'){o.ta=v[x];o.U.9N(x)}}}}}E 9l(1e,1D,1A){if(1e){if(1e!=\'\'){if(1D==o.1X&&1e==o.tI){}F{if(1e.O("#"+v.9L)==0){1e=o[o.fd[0]](1e)}if(1e.O("#0")==0){1e=bO(1e)}1e=ui(1e);1e=1e.1Y(/\\s/g,\'%20\');B s="tc";if(1A=="3j"){s="td"}if(1A=="1L"){s="2z"}if(1A=="W7"){s="100% 100%"}J(1D,{\'2t\':\'1e(\'+1e+\') no-hx 6F 6F\',\'2t-3I\':s});1r(1D);1D==o.1X?o.tI=1e:\'\'}}}};E VY(x){if(x.on==1&&I(x.3c)){x.3c=ui(x.3c);B y=1M("1S");if(x.3c.O("3f")>-1||x.3c.O("//")==0){B z=1M("41");z.3c=x.3c;y.1H(z)}x=8O(x,v.FC);x=4l(x,\'2F\',\'2F\');J(y,{\'1k\':\'29\'});if(x.1k.O("2M")>-1){J(y,{\'2M\':x.9q})}if(x.1k.O("2j")>-1){J(y,{\'2j\':x.4i})}if(x.1k.O("1g")>-1){J(y,{\'1g\':x.7n})}if(x.1k.O("1d")>-1){J(y,{\'1d\':x.3E})}o.1D.1H(y)}};E Fy(){if(o.2k&&!uq()){o.U.tL(H)}F{if(o.cC||o.5y){uq()?o.2k=H:\'\';o.U.tR()}}1u("2k",o.2k)}E FB(){if(v.mr==1){FA(o.1D,"5B",H)}}E W1(){1u("c7 "+a3.c7.m0)}E FK(){if(2N.FL(1V.c7)===90){1u("tT");if(v.tV==1){B ok=H;if(v.FV==1&&!o.1F){ok=K}if(v.FW==1&&!o.1O){ok=K}if(o.2l){ok=H}!o.2k&&ok?o.U.7M():\'\'}}F{1u("FT");if(v.tV==1){o.2k?o.U.8l():\'\'}}}E uq(x){!x?x=1P:\'\';L!!(x.Wj||x.Wk||x.Wl||x.Wh||(x.Wg!=2b))}E FM(x){L x.2i==0&&x.2P==0};E uI(){V(B x in o){if(x.O("FP")>-1){43(o[x])}if(x.O("FR")>-1){3r(o[x])}}1u("13U")}}',62,4223,'|||||||||||||||||||||||||||||||||||||var|style||function|else|this|true|exist|css|false|return|||indexOf|media|length|controls|but||actions|for|width|control|height||||||||||||time|playlist|event|left|url|key|top|action|settings|pjstg|position|break|case|icon|duration|hide|system|show||opacity|log|playlist_dic|addEventListener|substr|toolbar|color|scale|new|text|container|data|start|type|appendChild|hls|tmp|setTimeout|none|createElement|error|play|document|frame|title|div|volume|innerHTML|window|faction|poster|replace|set|||null||||typeof|||absolute|hotkey|undefined|dash||svg|files_quality|subs|_o|offsetWidth|right|fullscreen|vast|tip|vasturl|eval|display|subtitle|Resize||background|parseInt|stop|seekto|pip|click|auto|mobile|file_type|1000|split|icons|margin|hasOwnProperty|events|Lang|transform|line|Play|bottom|Math|linear|offsetHeight|Pause|hide2|points|open_action|removeChild|linkurl|padding|api|border|current_quality|||||||||||sub|catch|src|push|_type|http|scaleY|droplist|hidden|fill|player|localStorage|continue|files_subtitle|org|file|share|clearTimeout||try|scaleX|www|xmlns|tiptext|handle|stroke|xlink|mouseDown|webkit|options|marginleft|f2action|000000|mediascale|size|floatleft|ffffff|object|screen_w|plid|current_subtitle|ready|media2|keys|pointer|rows|2000|visible|muted|files|Remove|Seek||img|default_quality|clearInterval|obj||seek|Volume|||preload|Object|block|autoplay|font|youtube|clr|target|marginright|mediacontainer|xhr|MarginPadding|_to|empty|custom|delete|rgba|rightmenu|trim|Duration|parseFloat|refresh|values|f2title|transition|end|valuefontsize|is_hls|zIndex|_from|attr|500|ShowOrHide|aspect|path|screen_h||files_speed|vasttype|folder|Time|JSON|int|onError|value|plstart|Action|chromecast|butPosition|200|settings2|string||resize|volumewheel|urls|||round|||quality|1px|m_to|arr_up|Mute|shuffle|arr_down|storage|airplay|Hls|vast_loaders|parentNode|gradient|mute|ios|important|bgcolor|valuecolor|pause||Motion|onOut|current_audiotrack|m_type|dechar|mouseHere|dom|isLive|visibility|speed|getItem|sbt|box|bga|clientX|canvas|SetQuality|plx|ftitle|tagvideo|setAttribute|animation|status|casting|max|open|isVisible|onOver|charAt|focus|evntclk|video|playing|||files_audiotrack||||||||order|captions|minutes|cancelBubble|cursor|UpdatePlaylist|radius|show2|vastloader|UpdateText|f2value|parse|exist2|removeEventListener|backgroundColor|Date|is_dash|safari|download|activeiconsize|1999|_value|out|slice|audiotrack|remove|obj2|line3|state|UpdatePlay|span|center|vast_and|toString|bgpaddingleft|File|aover|intro|apiProcessor|StopWaiting|solid|overflow|bgpaddingright|align|dashjs|preroll|Unmute|pointerEvents|hlsconfig|_url|_|pjsdiv|||||||||||String|random|default|HLS|control2|seconds|pljssglobal|track|bg2|com|channels|Settings|PluginHotIcon|margintop|setInterval|rounding|vast_|pass|embed|realfullscreen|fvalue|min|alpha_div|version|hours|redirect|body|motions|tag|off|dash_created|Events|txt|FindBut|ShowPoster|parentIframe|getAttribute|layer|Fullscreen|is_sleep|bgaover|space|setItem|timer|floor|lines|all|vast_or|tipcrn|ll1I|files_quality_ag|pjs|||||||||||gif|onWaiting|clientY|getElementById|next|buffered|SetSpeed|live|_show|hlsquality|line0|Normalscreen|area|DASH|onEnded|hidden_volume_over|ease|https|over|name|preventDefault|subtitle_on|stretch_width|alert|is_ws|SettingsTimers|Advertising|href|Value|close|hideleavetimeout|loading|pipwebkit|line3value|HlsLevelsLength|current_url|midroll|concat|scroll|bgcolorover|UpdateObject|normal_w|bgpaddingtop|control_|effects|android|Waiting|onPlay|leftBg|current_speed|always|ioff||default_audio|bgpaddingbottom||ResizeText||C15||||getTime|destroy|created|now|Array|mouseup|lIll|white|audiotracks|iphone|location|Poster|bordercolor|Init|init|toolbarHidden|marginbottom|Arrows|tipbg|paused|ctx|ispipkit|message|onClick|_cstm|actionstt|replay|is_live|evntovr|flag|rule|container_h|scrollbgcolor|End|dashquality|Retimer|_css2|enc2|hls_created|Title|_keyStr|sub_off|_hide|VAST|onMouseUp|motion_id|scrollLeft|stopPropagation|switch|waiting|MediaReady|audio|Background|clicktime|rotation|screen|vertical|info|gaTracker|vast_poster|Close|Switcher|ddj||m3u|ended|reload|media_error|stage_x|send|isVastBgLoad|evntout|stage_y|reloadTimer|onDuration|but_x|updateSettings||Status|lastwheel|Stop||vimeo|charCodeAt|SetSubtitle|streaming|but_space|shadow|onPause|_rb|native|metadata|00|container_w|sec|fullscreen_process|onclick|tips|Clickable|Sub|C13|not|loaded|unmute|pjs_i|plhistory|but2|normal_h|image|noads|browser|curtain|salt|fbg|CalculateClick|||_cul|xbg|parent|nowrap|frameresize|control_title|loop|hlsaudio|qualities|pause_before_vast|val||HideControl||Playlist|Scale|label|||VastRemoveAndPlay|600|currentFile|SettingsVisible|MediaPlayer||ShowOrHideProcessor|touches|onMeta|touchmove|linecap|onTimeupdate||bitrate|quiz|sub_options|vsts|thumb|lang|cubic|search|delta|f2id|StyleItem|DashLevelsLength|timestore|title2|icn|fd0|ldr|CreateItem|line1|SubtitleChanged|_speed|fontsize|vast_impressions|iframe|butplstart|kbps|stout|||||scrollTop|rotate|CreateHLS|orientation|PlayerState|PipWebkit|controlover|||handleicon|_start|tagframe|items|source|hidedown|300|vast_longtimeout|channel|toolbar_hide|then||pauseroll|Tip|line_width|forcehide||responseText|timeline|ScrollTo|||is_visible|line2|toolbar_margintop|fullscreen_start|onMove|cuid|sub_shift|marginproc|onload|but_y|hiddenwidth|inline|ellipse|getElementsByTagName|PlaylistNext|SetAudioTrack|nativecontrols|Toggle|ll1l|PlaylistVisible|tipalways|3000|iconsover|touchend|range|design|sub_bottom|err|spacing|iconangle|iconscolor|SettingsClose|onVolume|nonzero|poster_floatposition|hidden_volume_over_process|ActionPlaylist|console|dashconfig|wheelstep||toend|bufferLength|pjs_id|QualityChangedNoHand|rightside|screenclick||user|decode|dash_config|custom_speed|shuffle_|l1lI|tmp2|NewFile||hex|pltxt|Start|answer|enc3|sub_color2|brandurl|butNames|XHR|AfterVast|sub_color|HideInterval|groupId|load|nbsp|hideonpause|default_style|vast_starts|line_speed|readyState|hidejustfull|setSpeed|currentTime|topBg|ControlClick|contentWindow|20px|hls_force|fplace|VastNext|_ease|autohide|vast_preroll_andlimit|bgpadding|PlaylistNextExist|autoplaylist|prev|_status|customline|nolimit|handle_width|handlewidth|other|minify|Airplay||_lastime|RemoveCurtain|sub2|VastAddPreload|airplayed|passive|abc||StageMove||expand|url_shift|coh|maxBufferLength|PlaylistPrev|touchstart|_preloaded||Il1l|err404v|StageMouseUp|PlacePoints|letter|_step|floatwidth|ToolbarDown|found|overlay|spd|files_|Remove2|texts|3px|plfolder|opn|PlaylistG|onmouseout|removeAttribute|pic|overopentimeout|polygon|fontSize|select|8px|onmouseover|current|relative|10px|create|Hide||videoHeight|fit|compilation|findLeft|C11|ScreenClick|deltaY|textTracks|bgg|scrpt||FindPlStart|0259804|textArea|recover|stretch_with_volume|C12|rightbs|L12|fatal|Home|CustomSwitch|hdicon|starttimeout|showoverto|buffer||link|sub_or|dashaudio|fff|Curtain|settingsovertimer|ratio|titlestore|levels|transparent|control_line|Show|onSeeking|clicked|alpha|UpdateSpeed|bottomside|hidewithoutmoving|PlaylistControls|SetSetting|win|hidetimeout|rotation2|StyleLine|_max_order|Thumbs|gain|AirplayChanged|htto|hand|ctx2|weight|48743763|letterspacing|33571875|days|gatracked|playById|seeking|clickarea|_play_i|update||SettingsN|CustomToogle|clickmargin|_control_|volumescroll|autoLevelCapping|iconreplay|showovercontrol|_seekaftervast|87798468|616046||volumewheelin|file_separator|canvas2|Off|HideForce|embedvars|toolbarInterval|ymax|speed1|mode|offsettimerminute|speeds|hlschangequality|heartbeatInterval|scaleover|google|BufferStop|ssfontsize|customtext|svg0|ToolbarShow|hideoutmute|L11|deg|186|shareiconscale|offsettimersecond|hlsDashSub|sxs|TagPlay|onSeeked|rect|resizePlaylist|ResizeSettings|pip_quality|hidden_volume|CheckColor|tipbgcolor|tippointer|loading_error|f2bg||tipfontsize|ipad|reloadErrorTimeout|family|tipbga|5px|navigator|paddingtop|stretchonfullscreen|removed||m3ut|limitmaxwidth|hls_config||chrome|tippadding|Ready|hlsautoquality|decoration|ScrollOverOut|dclckto||seeking_time||NativeControls|thumb_width|span05|Reload|999|repeat|dontplay|nativefull|float|vast_longtomsg|sourceBuffer|_activeIcon|scrollarrows|domain|doubleclick|SubtitleSettingsMenu|heartbeat|pjs_parent|mediapip|VastRecover|sizing|14px|playersize|justshow|1em|998|details|05|pl_first_id|sub_settings_on|onmousemove|scrollleft|posterhide|file3_separator|custom_aspect|xtitle|base64|hls_stuck_time|findTop|compilations|poster_scale|pljssglobalid|playerid|Error|pageX|existv|l3v_left|||||parentcontainer||memory|timeFormat|TimeSub|headfontsize||autoQuality|Subtitle|HistoryPlaylist|sub_sizeproc||RenewPoints|400|event_x|_wait|event_y|shift||Mouse|handlehide|pointscontrol|yamtrid|subload|pljsmute|href2|SubtitleLoad|file2_separator|l3v_show|pointed|StyleArrow|Played|subtitle_start|urls_and|mutestore|rightclick|edge|title_template|jpg|scripts|dvrtime|small|VolumeWheelX|_readyonplay|_fullscreen_end|53790984|wait|stuck|thumbnails|moz|rc_label|while|ssa|and|_steps|showtitleplaylist|youtu|response|sub_size|bigint|getBitrateInfoListFor|openplaylistbefore|poster_a|getDASH|nativecontrolsmobile|gifed|loadLevel|HlsUpdateAudio|marginprocleft|getHLS|screencolor|wheelinterval|StringVar||datetime|wait_to|isvg|_dashsubtracks|subsor|sub_size_fullscreen|_timeout|72532408|onStep|poster_aover|audioTrack|marginbg|full|SubtitleLoad2|_hlssubtracks|sleeptimerminute|037|rightout|153204|mouseHere2|srt|YoutubeReady|button|Ended|nativefullios|hidevideo|PlaylistHere|hls_subs|ClearClick|DoubleClick|dash_subs|result|seeked|dashInterval|PlaylistExist|PlaylistRewind|acted|onerror|sub_all|randomstr|AudioTrackChangedNoHand|restart_audio|click0timeout|num|fid|container_h_procent|ToolbarHidden|_i|openById|Password|playlistloop|playlistrewind|PlaylistShow|rmbgcolor|twitter|pageY|_lastactbut|UpdateTime|vastonmobile|touch|subdrag|tagName|SettingChanged|Dq9neNd|ResizePlaylist|current_plurl|toLowerCase|ShowForce|onClickSubtitle|FileType|YoutubeID|StageLeave|mini|vars|mouseMove|SubtitleError|mouseover|hex2rgb|mouseout|limitwidth|KeyPlusUp|vol|floatlimitwidth|Touch|quality_received|KeyPlusDown|PlaylistError|plurls|newfile|0933314|stretch_width_last|eventstracker|polyline|audiosrc|vast_type|join|C10|floatheight|youtube_id|colorbg|_t|clientWidth|omt|customdesignsvg|pjs_share_link_|sub_shadow|offsettimer|started||sub_weight|pauserollonplay||match||quartile|iconsreplay|click_t|opera|doctype|6px|pjs_|isTypeSupported|TitleTemplate|fcdef|||isPlaying|CreateTip|0px|IconsColor|container_id|tippaddingright|resizeonplay|adsfirst|tippaddingtop|ceil|svg3|480p|vast_preroll_and2limit|handleaover|ff0000|360p|ssflyp|mouseUp|240p|_ended|720p|gaTrackPlay|Download|done|yaCounter|lastTouch|333333|handlescale|bgo|bgh|1080p|angle|||||handleiconspress|documentElement|BeforeVast|_stopped|copied|thumbs_on|sub_bgcolor||unmuteplease||sub_bga|Recover|timeline_h|find|shareiconscaleover|_prevIcon|mlr|VastLoader||Load|6642813|fspr|observer||100000|hideAllIcons|iconscolorover|selection|leftandrightpadding|playroll|facebook|sleeptimerhour|exception|RemoveMedia|frames|playVideo|brd|recover_decoding_error_date|RenewSubtitle|but_h|_blank|code|navigationUI|iniframe|picture|UpdateVars0|MainUpdateSize|linkurl2|recover_swap_audio_codec_date|abr|setQualityFor|autoSwitchBitrate|PluginSub|Script|autonextopenfolder|copy|ShowLayer|Player|imgldd|pljs|UpdateVars|changeheight|icon2|bgcontainer|autoprevopenfolder|files_channel|scrollarrowsize|Update|hexToRgb|serif|lngth|mediaSource|open_settings|rld|CreateDASH|SelectText|playlist_title|resizeonwidth|forbidden_quality|postroll|timeld||saturate|timeshort|playbgcolor|currentLevel|sans|hmaxk|HideProof|vastcontainer|scrollarrowcolor|offsetLeft|noclick|HidePoster|HidePoster2|showinterval|scale_i|YouTubeIframeAPIReady|scrollwidth|videoWidth|NativeWebkitFullscreen|CreatePoster|fixed|Preload|msRequestFullscreen|but_w|normalscale|_move_rights|_rights|RadioTags|MediaYoutube|tagsurl|mozRequestFullScreen|playiconbut|toggleControl|toolbarhidden|webkitRequestFullScreen|order0|bg_hide|Share|write|requestFullscreen|L10|requestFullScreen|playsinlineonmobile|StopMedia|deltaX|playerjscom|49474569|removeItem|VolumeWheel|PlayerSize|PipSize|isNaN||outro|vastgo|isAuto|ChangePip||prototype|gained||VastGo|NewAspect|vastclick||nativeControls|VastVideo|MseIsSupported|overlays|enabled|9830753|network|IndexPlaylist|CheckPip|posteronpause|pstr_to|heightInterval|LoadedData|tagSrc|WaitSize|audioTracks|audioctx|ima|startLoad|hls_started|ws_created|CreateWS|skip|VastPreloaded|RemoveForNextAd|vast_preload|2160p|50539216|VastPreloadLoad|5629344|43706564|playPromise|160p|HlsAudioTrack|062|_recover|HlsAudioTracks|AudioContext|RenameTracks|099|moveOr2end|MseRenameQualities|ie9|denied|splice|worked|pjs_parent_i|Seeked|checknative|Metadata|dash_play|onTagError|fullblack|volumewheelfull|request|||dontload|errorMessage|reloadtimeout|_tags|||dasherror|onYoutubeReady|dash_init|Dashed||preloaddash|timerInterval|onPipLeave|timerTime|onPipEnter|Playing|getQuality|dashlowquality|getAudioTrack|incorrect|posterhidepause|iOSTrackLoaded|maxMaxBufferLength|HlsSleep|sleep_timeout|Captions|debug|IndexPlaylistProcessor|nextLevel|81389961|getTracksFor|MidrollOverlay|927|recovery|performance|086|HlsLevel|hlserror|025|||removeTracks|exitfullscreen|PlaylistLoad|m3ui|wheel|fts|fjs|End2|Heartbeat|1440p|vts|contentDocument|winWidth|drawImage|ReplayIcon|TipText|offsetwrite|sstext|Places|toggle|borderbottom|winHeight|pljssubtitle|Marquee|sub_store|destroyed||last_text_w|resizeFromText|doc|UpdateVolume|ssfontcolor|remember_sub|reRightMenu|StyleSubtitle|ahd|show_playlist|valuepadding|pljsquality|show_settings|valuemargin|butByS|pljstrack|SubtitleOff|SubtitleLoadAll|xvalue|hidecontrols|thumbs|sharer|piped|FindIdPl|unshift|insertBefore|ClickArea|cnt|innerText|historytitlea|textarea|FSL|historybgcolor|||picheight|imageLoaded|brand|tipbgrounding|linkurl0|played|bgcolorlink2|marquee|Controls|btm|tem||pjslng|ControlOut|VisibleCheck|logout|Rotate|Shuffle|geo||tmpr|fontnames|onClick2|hidetime|historybga|mousemove|iconopacity||settingsNumberVisible|3600|||embedsize|qualitystore|DVR|JsEvent|mutedautoplay|toFixed|tipa|over_final|Text|sub_reset|viewBox|paddingleft|paddingright|dont|handleiconpress|mtp|rename|UpdatePoints|lang_|EndMove|handlehideinit|4px|thumb_height|rmcolor|TheEnd|thumb_border|suboptns|poster_floatwidth|||||SettingsParser|_time_load|poster_floatheight|HandleWidth|tipletterspacing|ShowHandle|tipfont|animate|tipcolor|sleeptimer|onDown|onup_to|||sub_bgpadding|autonext|handlecolor|RightMenu|mobiletv|borderRadius||clickscaley|png||querySelectorAll|firefox||userid||apiprm|cpm|pljsuserid|StorageSupport|ClickAction|floatmarginright|bgborder|bgbordercolor|lineHeight|handlea|handleiconover|LineScale|Style|onUp|sub_font|playerjs_|gao|ioscss|share3|activeicon|timeline_w|poster_floatbgcolor|coloroverplay|appearance|script|div2|fontFamily|content|noprevicon||||||headbordercolor|normal|l1ll|youtubeposter|maintitle||contain|cover|onplay|hideuntilstarted|RenameQualities||StartTimeout|scrollarrowbg|scrollarrowbgcolor|start2|plopenid|vast_midroll_limit|||Prefile|clck|playlistovertimer||control_start||current_file|playbgcolored|toolbarisdown|seekiconbut|_set_quality|Loading|lock|HidePositionControl|midrollo|killMotion|pauseVideo|quick|currentposter|91628571|VisibleItems|NormalscreenUI|TitlePl|introstart|ShowShare|976|cntrls|FullscreenUI|resizetext|landscape|ActionOptions|landscapefull|static|pushCSS|C14|startwait_t||CustomTextButs||||||||||midrolls|play25|play50|ToolbarHide|SetCurrentQuality|desktop|606|checkBase64|firstly|play75|setaction|resizeSettings|CustomText|reloadlog||isFullscreen|ControlCoordinate|re_y|UpdateStart|ytautoquality|L13|referrer|Alert|urlcnfg|fonts|96189913|sub_bottommob|59038667|str2obj|pjsoffsettimer|settimer|pepper|pjsframed|Destroy|allowfullscreen|valuefromlang|substore|openplaylistroot|255|addtitleplaylist|addtitleplaylistbr|_currentIcon|marginbgcolor|fromCharCode|onYtPlayerReady|sub_designstore|hostname|marginbgpadding|_stop|removebykey|stopkeys|minw|encoded||offset|volumestore|PlaylistOpenId|gaurl|ll11|last|PlaylistPrevExist|arrinterval|5017903|Loaded|SettingsScale|SubtitleTimerMenu|updatePlaylist|StageMove2|QualityChanged||active||moving|removedNodes|chr|leftright|_css|updown|resizeonmouse|resizeme|spn|SubOpt|SpeedChanged|postmessages||ScreenClick2|pljsvolume|width_div|PLAYING|height_div|poster_floatshadowpx|elastic|372|ShuffleEnd|str|finish|984|livets|access|plcontinue|poster_floatrounding|Ease|alertscolor|Number|setQuality|049|iframe_api|sub_off_title|YouTube|lastIndexOf|callback|imageExists|maxresdefault|default_subtitle|alertsbgcolor|||crt|SubtitleParse|HideLayer|ytcl|666666|Timer||CreateMedia|getDuration|Qualities|10000|getPlayerState|vast_posterurl|onQualityChanged|customyterror|yterrors|PipToggle|reYT|seekTo|youtubecontrols|ENDED||nameofyoutubequality|movable||PipSwitch|ParseUrl|subshift||onPlayTag|sub_bgo|sub_lineheight|177|tagsinterval|774328|sub_bg|sub_big_fullscreen|ErrorReload|poster_floatmargin|alert404text|alert404|alert404v|alert404video|PluginErrorVideo|SubtitleBottom|posterhidestart|file2|screenmarginbottom|_reset|ffect|ass|vtt|PluginFloatPoster|poster_float|removeNativeSubtitle|NativeSubtitle|PluginPip|61928677||||||playByYoutubeId|playId|nativeSubtitle|006|alerts|hour|_ue|_ud|M12|25712408|minute|Stopped||GET|parentElement|220|smallfontsize|224|2464991|getBoundingClientRect|ontouchmove|url2|unset|scrollX|assign|sugar||||4877241|copyObject|XMLHttpRequest|styleSheet|full_minutes|rest|toLocaleTimeString|encodeURIComponent|full_hours|midrollimprsd|rel|ovr|ControlOver|current_vast_url|advertising|PluginIntro|Wheel|93409913|keyframes|_html|ct2|timebreak|timelimited|Scripted|timelimit|url3|second|yamtr||||||reloadlive|0785714|TheEnd2|0956563|endfull|fs_error|PostFullscreen|redirectonclick|seeked_time|intros|1411563|Quartile|16114286||playedquartile|playedstore|L19|6265714|finishrewind|openpl|passontime|redirectonplay|fullonplaymobile|cancelFullscreen|InvertPlaylist|reverse|exitFullscreen|mozCancelFullScreen|prefile||frmvst|ffeeab|msExitFullscreen|webkitCancelFullScreen|cancelFullScreen|iosExitFullscreen|resume|M14|fullonplay|whatsapp|adblock|50032408|PluginThumbs|isOpen|heartbeatinterval|isVpaid|pjslog|posterhidetime|MSIE|limit|8345227|_xIcon|PlayingChecker|003|StopOtherPlayer|msie|HidePoster3|||pressed|bordercolored|together|cstm|Sleep|14130702|device|Playback|notv|Browser|hexToRGBA|007|033|alertspaddingh|alertsbga|alertsfontsize|962|4959714|7378707|483|FindFileInPlaylist|0454574|alertspaddingv|994|setupx|095|072|06|stopotherplayers||092|029|848||comment|997|shwvstfnsh|High|isyoutube|youtubeready|geobj|getContext|butseekto|preloaded|SetChannel|8215241|VastBreak|setVolume|223|VastLongTimeout|VastInfo|wrapper|vast_adid|Playerjs|vast_longtimemsg|playlist_id|current_time|vast_prestarttimeout|Youtube|Papi41|9211241|adscounter|L14|ga_event|vast_preroll_2andlimit|Yandex|8361812|offsetoptions|60588467|yamtr_event|gtag|yaHit|stringify||postMessage|0638991|last_ors|9390991|6327241|reachGoal|PlayerjsEvents|sleepoptions|416|enterpictureinpicture|tsdaHbiR|alwaysnotfullscreen|linetippointer|hidewithoutplaylist|Rectangle|sharecolor|alwaysjustpause|hideoverwidth|thumb_shadow|hidevar|shareclred|hideonwidthlimit|hideoverwidthlimit|hideonwidth|evenodd|showShare|linkpause|ControlsBg|restart|analytics|show1value|muteiconbut|screenshot|1001|YEEHeFDN|titlepl|Continue|linktarget|ssflyw|thumb_bordercolor|thumb_borderwidth|setting|leavetimeout|hideonvolume|ShowAnimate|ShowControl|HideAnimate|playonhover|thumb_bottom|HideElement|Volumescrolled|linetipmarginbottom|toptip|tippaddingleft|tippaddingbottom|handleinit|valuemarginright|hideuntilmeta|CreateThumb|thumb_radius|hideonfullscreen|0725739|sharebgcolor|_duration_load|UpdateLoad|unfixing|valuemarginleft|_duration_play|_time_play|UpdatePlaySeek|seekwindow|normalscreen|prted|setDashQuality|prtObj|PjsFr|webkitSetPresentationMode|CustomFonts|parentIframe_style|notframe|setHlsQuality|PjsFrMsg|setCurrentTrack|setDashAudioTrack|IFRAME|setTracks|today|linker|hidecontrol|ShowTimeout|gainedsource|15px|connect|bordersize|autoLevelEnabled|PluginOldGA|eventAction|eventCategory|eventLabel|ga4|18px|setHlsAudioTrack|method|control_share|playerjs|optStr|PluginReplace|sort|ControlsBgClick|marginprocbottom|showById|scrollHeight|back||||||||offsetTop|ControlX|Width|marginproctop|files_scale|scroll_down|playlistfolder|rc_|showing|subtitles|addTrack|postmessage|timeupdate|loadedmetadata|onYtPlayerStateChange|leavepictureinpicture|durationchange|scroll_left|element|SettingsTimer|UpdateTimer|linespeed2|Pop|linespeed3|hideafterclick|selectOpen|gradientcolor|hideonplay|bgcolorlink0|linespeed1|IconSVG|tipmargin|gradientcolorload|zoom|colorload|iconmarginright|iconmarginleft|5000|9616447|bgstretch|embedheight|valuerounding|iconmargin|Bglines|embedhtmlend|iconmargintop|iconmarginbottom|customdesign|FFFFFF|valuesize|winTop|gradientcolorbg|minus4back|minus4time|slash4time|HdIcon|line4time|SvgColor|createTextRange|hidewithposter|translate|displayvolume|prevorius_default_h|prevorius_default_w|Buffer|7px|Color|with_min|ontop|DisplayControl|filter|hidesec|action_settings|unhidden|winLeft|getSelection||ControlLine|with_hours|RenewFromTitle|noClickTimeout|control_duration|clickscalex|openplaylistpause|pointw|inversetime|hlscaptions|scalesmall|action2|opposite|onClickTimer2|270|yOffset|CancelBubble|rotateplaying|xOffset|icon3|0645937|Control|keyCode|pointcolor|UpdateSettings|bgclr|PlaylistMove|Exist|PlaylistPlayId|lI1l|nums|plusminus|which|pointa|187|I1lI|current_thumb|L16|handlemargin|php|_icon|home|700|controlCSS|embedhtmlstart|embedwidth|valuebg|openplaylistafter|valuebgcolor|topside|unblock|315|_w|share1|share2|sharetitle|sharetop|handleiconsover|square|clickmarginbottom|clickmargintop|_a|roundout|shareiconmargin|bold|bgw|volumegain|volumechange|40000|Media|hlsfto|StageOver|leavetimeout2|hlsmto|hlscookies|offsettimerinit|customBuffer|sesstime|trackstore|vast_nofirst|sleeptimer0|pljsfirst|Review|hlsdebug|dblclick|onresize|newQuality|templated|speedstore|template|KeyDown|input|hlsaudio_off|hlsvastwait|hlsquality_off|PluginGeo|KeyUp|Action2|attached|Actions|right_y|Level|RightCSS|ErrorTypes|livewakeup|rmsize|right_x|FlussonicMsePlayer|loadSource|HlsRecoverMediaError|HlsLiveWaiting|livewakeuptime|supported|hlsTextTracks|RightOver|ERROR|dvr|hls_stuck_duration|Live|nativenotipad|createTextNode|valuealign|nativenotiphone|fragment|System|RightOut|hidestartbutios|nativenotios|frag|pljsspeed|stableBufferTime|playsinline|scrollarrowgradient|FullscreenChange|covervideo|Visibility|ParentFS|logo|scrollarrowbgover|updateTitle|m3u8|cdn|mpd|anonymous|scrollarrowbgovercolor|OrientationChange|abs|isHidden|PluginMovable|playedstored|Interval|PlayerjsAsync|timeout|_nextIcon|portrait|framei|lsfullstart|lsfullplay|MediaVideo|mediadrag|40px|landfullmobile|change2playlist_bottom|ScrollLeft|PlaylistBack|dashcookies|ScrollRight|ScrollUp|nativefulldroid|historycolor|sub_sizemobfull|buffer0|074|SettingsExist|SettingsSpeed|sub_sizemob|historytitlestrike|seeksides|ScrollDown|change2playlist|ArrowsInterval|preloadhls|isSupported|margin_bottom|scroll_height||WaitDash|dashquality_off|changedTouches|358|seeksidesec|dashdebug|dashaudio_off|recoverMediaError|playerheight|SubtitleSettings|HlsQualityLevels|index|DashAudioTracks|dashaddbitrate|allow|nameofhlsquality|hlslowquality|audioGroupIds|scrolling|allowtransparency|nameofdashquality|rc_labelurl|onClickSubtitle2|nohead|width100|MediaSource|SourceBuffer|rc_version|DashQualityLevels|sourceBufferValidAPI|rc_anyway|mimeCodec|helvetica|obsrvr|autoplaymute|origin|1861004|tap|ltr|direction|90342661|Gain|nextAutoLevel|1907336|highlight|360|outline|pljs_yt_|MutationObserver|AudioTrack|540p|900|640|426|1800|1200|onLoadedData|arial|wrong|nopause|ffdd1f|onLoadStart|RightMove|70098039|RightClick|0306373|changeAspect|8542991|2593241|1843241|enablejsapi|3811714|playerapiid|490814|videoId|95640915||4794819|8512623|borderRight|7454539|playerVars|1980378|5794991|1667378|39043363|7168991|2095241|3091241|8681427|7465241|7398991|youtube_iframe_api|61104201|8898991|plus|scroll_up|9894991|27203981|6715241|046119|8413385|54918887|4792991|7073175|79867139|5904991|4774119|scrollWidth|1533357|API|frameborder|borderBottom|6399635|onPlaybackQualityChange|0213241|0997273|3524524|9784469|onStateChange|9932991|onReady|3677693|9056991|6935719|contains|0339241|8180991|7310991|9589241|0856637|0588595|5770455|706974|3658545|ytReady|7244686|modestbranding|2800991|3351462|iv_load_policy|97987656|onMouseOver|3343241|onMouseOut|playsinlineonmobileiphone|2547336|8587241|html5|disablekb|PluginDroplist|3796991|541335|4843241|461584|7774154|593535|46361894|9031916|4155588|showinfo|4883882|0134958|onYouTubeIframeAPIReady|591821|18940216|9481644|0254896|78152031|actn|56501681|9485553|55161471|5em|5646609|0174202|1461085|3870176|4324598|36980425|91761122|90280076|62378254|86775181|39594688|01249004|76053503|10176229|6306539|250|paddingbottom|tumblr|pinterest|webshare|8450875|25694808|telegram|1945595|reddit|79351404|6708602|51661242|55677205|4089931|39285947|80589866|marginRight|9753595|2536879|0203322|75264618|54028255|92444761|00668076|5495798|share15|3468113|M15|6001007|47186369|dropnohide|82476969|45846159|3186567|PluginShare_telegram|2176147|9829241|13718414|06600745|8949469|scroll_right|shuffle8|2829241|1213742|hidesmoothly|3701951|908349|2904441|timer2|175|91554129|scale2|viber|5011287|89905178|83887768|525863|71310145|545084|scale1|3602134|66394451|ytcl1|through|158849|4557651|M16|scale0|04688705|6017798|0266991|78569913|8666667|81698842|FEF370|31274131|3683824|8247549|74749035|59305019|0156863|56138996|0867647|8030888|7490196|7735294|7243243|2857843|3404412|26c0|9818627|04681373|0737745|05147059|03088803|969112|||||387c0|247||||521|782|079|825|404|104h|012c|729|718|619|371|749c|M18|3127413|022|68725869|5906863|938|455|0088235|D90000|8191176|6864865|2242647|059|078|749z|77097501|PluginShare_|e8bbff|8689236|8884018||86718761|7530359|5974074|799|ffc7d1|68019712|1560223|77251408|1938004|1782179|16597325|0769314|39074182|1197833|72576646|feba54|798|694|951|699|035|51658043||913|896|6959766||282|786|4bd9ac|M10|b3fee8|d9bb8c|16089933|203C15|902|749C18|20257304|40514608|60771911|585|aaaaaa|941|808|9480146|9713884|075|356|335|703|053c1|691|343|323|993|682C1|802|715C8|806|666|641|384C8|759|754|682|692|021|409829|397|434|468C8|321|958|777|892c|459|588|026|357|073DA0|285C5|447L2|474|534|261|629|307|507|421|173L2|641C7|791|667|555|419|443|248|556|669|618|073|077|136c|211|013||291|148c0|173|997c|301|901|675|359|222l|087c|05c0|562|642|198l0|446|087|471|051|593|234|099c|439|099C7|304|676|203|952|273|595|472C7||741|966|297|174|577|546|963|012|054|303|21c|644082|219c|396|53995424|835402|48629913|06192408|91252408|62369913|76252408|34889913|42432408|49829913|60952408|89792408|16112408|569|88589913||73852408|39769913|50989913|98752408|64309913|73312408|27949913|98549913|08569913|17269913|72892408|70972408|57329913|7271472|38992408|8142991|9825241|2028991|3780991|89532408|49672408|C16||5898759|0008991|3197241|9280991|60889913|9699241|3699241||64769913|80932408|1310991|4685241|3443241|6532991|3695241|3958991|15729686|92524947|53509913|87332408|moveToElementText|94772408|45709913|61009913|createRange|80612408|addRange|removeAllRanges|selectNodeContents|02932408|54409913|94929913|2155241|7255241|4310991|8833241|37689913|81892408|17872408|63169913|32872408|93169913|67729913|69872408|00849913|09932408|17432408|03369913|26192408|97129913|02432408|0727459|6447345|28392408|00904312|2793122|005212|52352408|83449913|61112408|75949913|31446009|90889913|98389913|72728083|36152408|46112408|9996991|7997241|31646496|90967882|1901646|69316331|8524226|24362617|1161475|15818198|02664888|0670433|1279354|72704574|8769747|024648|68926767|PluginShare_whatsapp|47890336|5739326|execCommand|4558853|777689|4897677|8022411|L17|05663568|86483105|84924851|74734142|62de50|85641921|24660331|54866401|5798291|faed54|90490625|35178546|79137169|4526875|883875|46721646|1869905|M17|69428571|79828571|5723438|63201142|86810611|65174939|12014413|53370204|18283508|72ccf8|00029913|644054|5003241|51242501|14009913|4865241|15013093|5781241|4153898|81329913|7060285|7581241|1454127|73447623|3092991|84355402|209383|9978991|0038991|4871241|01549913|2357241|00069913|62539844|28889913|5473241|12492408|59305507|6100991|50092408|0068991|1148991|484333|77497165|web|8816878|27361297|70329913|950631|49132408|01289913|9518092|19180463|3982733|01349913|53462054|01469913|4570635|18772408|5810991|fillvideo|requestPictureInPicture|pictureInPictureElement|exitPictureInPicture|getQualityFor|setWsQuality|webkitPresentationMode|disablePictureInPicture|available|availability|webkitShowPlaybackTargetPicker|webkitSupportsPresentationMode|pictureInPictureEnabled|setWsAudioTrack|level|postertitleonhover|999999|customspeeds|ndash|posterwidth|reset|kind|DashSubTrack|HlsSubTrack|playbackRate|childNodes|historybgaover|webkitplaybacktargetavailabilitychanged|WebKitPlaybackTargetAvailabilityEvent|customqualities|2160|170|2000px|playtry|3840|1440|720|1280|1920|1080|2560|playError|interrupted|destination|createGain|Infinity|getSettings|disabled|createMediaElementSource|webkitAudioContext|888888|permission|autoplay_denied|hlsforce|showvolmobile|nativemobile|hideonunmute|hidenormscreen|hideonlive|hideonmeta|hidemini|hideonleave|hideonvod|hide0timestore|hideafterstart|hideonvar|hideuntilstartedios|hideuntilended|hidenomini|hidenoab|separator|showboth|buffering|maxHeight|ShowSettingsBut|showduration|pauseonhover|hideab|hideonyoutube|pjs_cast_button_|cast_available|hideonmobile|hideondesktop|isOn|02|seektome|ssfly|bezier|444444|posters|to_right|noset|marginprocright|customwidth|posterheight|customimage|1b3fc47f9f7a75d85d6f72522257c34b|hidelap|hideonleaveandplay|236d0o3q1t3s221c291s3b3v211d3o01101o272z2q193x3e1i1b3v111k1a21173u3y1z211411153v3b2o1932241u3s2v322n113u263e133x392q1920261z311o232e1g3e2b361y2v3u11101o360y11102b213x3129381w2x3u1z121m3e182t213n113238251q27352c162z2x252c183s29111z3a231s27332e1421381w1c3s291y2s29163u291s2u271q3e1z3w2611113u281z3w263s2o3o01112z2b3w141o252e2o111z21141z121o252e3o2o37202q1z313129233v3238143q0z1e1e2t2e292q142s11101f311o113z3a25353w253w273r153623111z3a371131141j1z1e1o2c182t312r2c2b213x312o1i27333e293y121o141p1e1d2f1e1c1j1c122f1k1e1a2g1m1c1c3e181g151g1i1e1k1d1h2c1s1f1r2e1r3g1t2c1u3c1w2e1s2g1c2e1u1c112c1s3e1r2e1s2e142c1u2e1m2e1u1e1i2e1u3c1j2c1u2f1z2e1q3e1z2c1v1d1u2e1s1f1s2e1s2c1w2c1t3g1v2e1s2e1v2c1w3e192e1u1f1w2e1t2e1s2c1s2f1y2e1r2g1l2c1v1c1u2e1t2e1q2e1s2c102c1s3e192e1s2g102c1u3c172e1t3g1r2e1s2d192c1s3f1x2e1q3f172c1u3d1e2e1s2f172e1s3d1c2c1s1f192e1r3g162c1u3d182e1s3f1t2e1s1d192c1t3f1c2e1q3f182c1u3d142e1s3f172e1u3d1c2c1s3f182e1q3f1h2c1u1d192e1s3f1b2e1s3d192c1s3f1t2e1q3f192c1u3d162e1s3f152e1t3c1k2c1s2f172e1q3g192c1u3d172e1u2e1s2e1s2c1g1c1f1e1p1g1a1e1k2d1f3c1b2e141e101g143d1u3d1c1g1u1f1u2f1j2d1a1d121d1c3g1c3g1m1c1d3c1f3f1j3g111g1l1c1k1d1h3f1g2e161e1f1d181e1s1f1j3e1d1e1g3e161d1h3g193g1d3f1s1e1r3c1f1e1c3f1d3f1f3d1e3d1f3f1c1f192f1e3d1g3d1e1g1s3e1d1e141e1u2e1f3f1r3d1d3f1f3c1e1c181e1c2g192e1c1e1d3d1g2e1c2e1d1g1k1c1f3c1g1f1g2e1h1f1t2c1u1d1j3e1d3g161e1d3e1k1d1f1e1g2e1r2g1j2c1w2d1k2e1s1g132e1t3e1r2c1u1e1f2e1s2g1t2c1w2c1u2e1t2g132e1t2e1l2c1s2g1d1f1s2g1s2c1v1e1l2e1u2f132e1t1c1m2c1s2g1c1f1t3e173d1v2d1f341d2i3e193f1q1e191e153e123c141g1i3f171g1g2e1k1c1x3g1i3g152e1v3e1v2c1u2e1v2e1u2g1b2c1u1d1y2e1t2g1q2e1u2d1y2c1t2g1o2e1t1e1w2c1t2c1s2e1s2e1y2e1u3c192c1u2g102e1s3e192c1t3e1z2e1s2e1w2e1w1c1l2c1t2e152e1s1e1q2c1s3e1f2e1u2e1e2e1u3e1g2c1u2f1x2e1t2g1l2c1u3e1t2e1u3g1z2e1u2c1c2c1u1e1x2e1u2e1j2c1s1d182e1u3f1a2e1u3d192c1s3f1a2e1s3f1b2c1u3d1l2e1s3f192e1v3c1d2c1s1f182e1u3g172c1s3d172e1t3f1d2e1u3d182c1u3g102e1s3f1a2c1s3d192e1s3f182e1u3c172c1s3f172e1s3e1f2c1s3d172e1s3f1o2e1u3d192c1u3f1c2e1s3f192c1s3d1j2e1s2f182e1w3d1e2c1s1f172e1s3f1d2c1s3c1z2e1s2e1k1e1j3c1f2d1e1e1h3d1c3f1e3c1b2c141e103d1d3g1a1d191e1f1g1g3f1g3e1e3d1f2e1k1e1o1e1i1f1j1e1c1c1h1e1b2f1k3f1a3d1f3c1a1f1g3f141g1j3c121e1w2f1j1f181e141b1d1e1e3f1p1e1b3e1e3e1j3e1e3f1e3g1e3f1g3c1f3d1f1f1k3f1k3f1y1e142c1e1e1b1e1d1g1j3d1m3c1y3g1c2f132e1c3d142d1f3e1g1e1i3e1e1c1s2e1m1e1c2g1b3f163e1d2e1i1f1k1f1h3e141e141c1a1f1r1g1b3e1g1c1y2c1u1e1v2e1t3e1s2c1s1c102e1u1e1o2e1w2e1f2c1t1g152e1t2e1t2c1s1c1z2e1s2g1y2e1w1e1k3d1u2e1w2e1u1g1s2c1s3d1h2e1t2g1v2e1u1c1k3d193e1w3e1t3e1j121i1d1g1g1g3g1u1g1l1d1b1c1j1f191f1f1f1f1c1j1c1u1g1o3e1s3f1g2c1s2c1i2e1s3e1z2e1w1c1v2c1u1f1r2e1t1e1i2c1s1d1x2e1t2e1p2e1w1e1v2c1t2e152e1u2e102c1s3c1e2e1u2e1r2e1u1d162c1s2e1u2e1s2g1m2c1t3c1z2e1u2g1y2e1v2c1y2c1s3f1k2e1s2e1a2c1s3c1r2e1u2e1q2e1v1c1g2c1u3e142e1u2e112c1s2c1b2e1u2g1e2e1v3e1j2c1s3f182e1s3e1e2c1s1d192e1s3g1b2e1u3d182c1t3e192e1s3f192c1s3c1h2e1s2f182e1w3c1d2c1s1f192e1s3e1j2c1s3d182e1u3f192e1u3d192c1s3e1z2e1s2f1b2c1s3d1e2e1s1f192e1u3e1c2c1s1f172e1t3g1d2c1s2d182e1s3f182e1u2d172c1t3e1j2e1s2f1a2c1s3d192e1s3f172e1u3d1t2c1s2e1u2e1f1e1h3b143e1f2f182g1c2g1e1c1i1d1m3g1y2g1c2e1e1e1c1d1h1e1b2f1k1f1a3d1d3c1a1g1g3g141f1j3e121d1w2f1j3f183e141b1f1d1e3g1p1e1b3e1f3e1j3d131g1o1e1i1f1j3d1g2c181e1c2f161g1u1d1j3c181e181e181e1a1c1s1e1j1e1a1e1a1g143b1f1d1c1e1i2f1c3f1h3c121d143g1d3e1c3f1g3e1j1e1f2e192f141f1e1c1f3c1f2f1i3f1a1g1i1d1f1e1k1g1h2e1s3f1l3e152d1e3g142f1e2f1e1c1f3c1y2e1u1g1y2e1v2e1e2c1u3e1h2e1u2e172c1k3c1h2e1s3f1u2e1u1c1x2c1t1e1s2e1u1e1v2c1f3d1u2e1t3g1v2e1v2c1l2c1u1e1k2e1t3e1f2c1f2c1y3f1z2e1t2e1j171r2q1v2k1g1i1t1i1f1q1r14|hideall|a7f3d1s212827313718243o0z3z1o253z2o193x2c1b3o0z112k3o0z302m3v3s35242v203n1z303a231q253321142z2v23211a3s271z1138231q25352z1420361y1z10141z153v292o1731241s3s2t312n1z3u243e133v292o192z241z101o233c1g3c2b36162v3s121z1m260w121z39213v312936162v3u101z1m3c182t39213v2b213v39213x29213v1z112s271z303u271s2s271r2o1g25303q2c1x21121b3v1z1z302433142z2o1b3v1z1i1t352z1b203n3e1z3u2m2z1q1e252z1o1o231z1q253t173z24143e1c3c29361c3w29321v3w2s3o3s3732293p35303917142z1411101m233c1q1z1z3u243e1b35383v111x21121g1e2k163d1k1g1h1d1h3c1a1c1r3c1c1g193d123e1r3e1i1c1w1g101d152c1v2c1y2c1u2e1x2c1r2d1w2c1q1c152e1r3e1w2c1w2c132c1t3g1s2c1s1c1m2c1s1c1z2e1s1c1v2c1u2d1u2c1t2e1r2c1q2d192c1r2c1u2e1q2c1c2c1w2e1r2c1u2f1p2c1q3e1z2c1q2e142e1s2e1w2c1v2e1x2c1s1e1q2c1q2e1x2c1r2c1v2e1r3c1t2c1u3d1u2c1u3e1o2c1q3e1j2c1q2d192e1q3d1y2c1u2d162c1s3f1f2c1q3d192c1q3e102e1q3d152c1w3d1s2c1s3f172c1q3d1v2c1q2d172e1s3d1t2c1u3d172c1t3e1a2c1q3d1a2c1s3d1y2e1q3d172c1w3d162c1s1f172c1s3d1d2c1q3d172e1q3e1p2c1u2d172c1s3g1a2c1q3d1b2c1q3e1w2e1q1d152c1u3d172c1s3f152c1q3d1d2c1q2c1u2e1q1c1d1c1d2d1c3e1c1e1g1e1k3e1t3b1d3d1c3f1g2d103d1q2d1d2d1p1e193c1d3e1e1d1k1e1c1g1o3e1d3c1e1d1d3c1d1f141e1q1d1d1d1a3d1c3g1e3d1e2c1e1c1b3c1c1g1k3c1d1c1a3d113e1h2e192d1i3e1f1c1e3e1j3g1h1e1h3e161d1c3d1p1g1k1e1g3e1d2c1d1e1h3d1b2d1a1c1u2e1d3d1f3g101c1d3d1e1c1k3d1o3e1b3e161e1f1c103c1b1f171d1d1d1f1d1h1e1c2e1j2c1d1c1e1c1b3d1c1e161b1d1e1j1c1w2c1t1e1h2c1s1e1r2c1q3c1t2e1r2e1t2c1v1c1y2c1u2f162c1r2e122c1q3c1s2e1r1c1u2c1w1c142c1t2e1f2c1q1e1v2c1q3e1u2e1r1c1y2c1w3c1s2d143e1w2c1s1c191j1t143e1f2d163e1r3e1a3c1u3e1a1e1g3c1j1e1o1c1h2c181b1e3d142e1u2e1t2c1u2d1p2c1s3g1x2c1s2e142c1s2e1y2e1t2e1z2c1s2c1q2c1s2g1v2c1t2c1v2c1r2c1v2e1s3d1w2c1u3c1o2c1s3g1h2c1s2c1z2c1q2c1e2e1s1c1i2c1s3c1x2c1u2e1v2c1u1d1r2c1r1c1g2e1s1d1x2c1t2c1k2c1u1g1v2c1t2c152c1s2c1y2e1s3c1e2c1u2c1p2c1s1f162c1u3c1g2c1q3d192e1u3e162c1s3d152c1s3f1b2c1s1d192c1q3d1v2e1s3d192c1s3c162c1s3f192c1u3e1b2c1q3d182e1s3d182c1s3d172c1u3f1v2c1s3d182c1q3c1c2e1s3d192c1t3e1b2c1s3f192c1s3e1k2c1q2d172e1u3e1c2c1s1d172c1u3e1q2c1s1d172c1r3c1i2e1s3d172c1s3d1c2c1s3f172c1s2c1z2c1q1c1k1e183d1k1e1j1e1d1c1i1f1p3e1r3b1f3e1d1d1b3g1h3e133e1l1c1g1d1h1f1g3c181c1f2d141e1c1f1j3c1d1c1g3d121d1h3g193d1c3d1s1e1k3c1c1e1d3d1s2e1m1c193c1c3f1c1c1p1e1f2e1h3e1d1e1s1d1p1e1m1e1k1e1p1g1c3e1k3e181c161c142f1d3e1d1c1m3c1d1d1g1f141e1c2c1g1c1b3d1c3f1c3c1i3c121c141e1k1f1h2c1s1e1q3d1d3e183g1k1e151e1k1c1d1c1d3f1s3c1c3d1s2e1j3c1d1e1w2d1z2c1u2e1h2c1u2e1t2c1s3d1l2c1r2c1t2e1s1c1p2c1t3d132c1t2g1h2c1u2e1r2c1q2e1t2e1u1d142c1u2d1t2c1u2e1y2c1s1e102c1q2d1e2e1s1c163d1w2c1u2c15141o1d1p1e1c1c1i2e141g1e3e1h1d1e3e121d1i1g1j1e1t2c1i2e1u2c1r1g1g2c1u1c1u2c1r2c1k2e1u2c162c1s2e1k2c1s1f192c1u2e1m2c1s2e1x2e1s2e1y2c1s3d1y2c1s3e1w2c1s1d1k2c1p2e1v2e1t3e1g2c1s2c1s2c1s1f1r2c1t2e1t2c1q2c1w2e1s2e1e2c1u1c1x2c1s3e1r2c1u2c142c1q2e1p2e1u1c1k2c1u3c1f2c1u3f1z2c1s3c1z2c1r1d1u2e1s1d172c1t3c142c1s1f182c1u3d182c1q1d172e1s3c1b2c1s3d152c1u3g1t2c1s1d192c1q3d1b2e1s3d172c1s3e142c1s1f192c1s3d1g2c1q3d172e1u3d142c1s2d172c1s3f1z2c1s3d192c1q3e1w2e1s3d192c1t3d1c2c1s3f172c1s3c1e2c1q3d182e1t3d192c1s1d152c1t3e192c1s3d172c1q3d192e1s2c1u2c1s2c1u1c1f1e123c161c1k3e191c141e121d141e1s2c191c1q1e183c1c1c1g3e121e1h3g191d1c3d1s1e1k3c1d1e1c3d1s2e1m1c193c1d3f1c3c1p1e1f2e1a3e1c1e1s1d1c3c1d2d141e1s1f1b1d1j3d1f1e1e3d1g2e1c1c1q3d1c3d1h3d183f142c1a1c1f3d1d3d183g1c3d1p3c121d121c1e1e1d3d1s3d1i1d1d1e1p1g1d1c143c1s3d1k3c181e1t3c1c3e1g1e1g3d171g1e3c1o1c1f1c1d2c1s1f1c3d1p1e1f3c1i1e1p3e121c1t2c102c1q2c1w2e1t1e1u2c1u1d1y2c1s3g1d1c1s1c1l2c1s2e1w2e1u2c1s2c1s2c1d2c1s2e1o1c182e102c1q2e1h2e1t1c172c1u1e1q2c1s1e1z1c192c1y2d1r2c1v1e122e2f2k1q1r1r2i1d1i2e221m|resize2|customText|combined|PluginSettings2|964772b33313y351y371e27222q193v2e1d3q001z1o27213o2m272e2q2m2w253a1g232z1i2e2b361a2x3u113z1m280y113z39233x2139361c2x3u1z2z1o21182t2z2p112238231s27353c14212x253c1w2u29111z38251s27332c1621281w10111611133v3b2q192z241u3u2v2z2n113w263c133x3b2q172z2612111m23113w281z3u28113w261z3w2q2139213x2e2b213v2b233x252y3b3x2e1z1z2435163o00222e2b3w121o2e1d3o0z212m241z2z1o21111z2s2911211d393x2e1a1w10222x3w2s332e12111c1m11153x27211v322q12232722352c162835211d1e1a2e163z261y11121z202u2911101m3u37013z223516351i1b3f1q1g1i1d1h1e1q3d1h2g1s3f1d3e1a3g1k2e1g1e1j2f1c3c1u3f1k2c1r2e112e1s2e102e1t2c1w2e1u3f1i2c1u2e182c1q3e1t2e1s2c1s2e1t1c1e2e1w2e122c1w2e1z2c1q2e1d2e1s2e1g2e1t3e1h2e1u2e1s2c1u1g142c1s2g1t2e1q2c112e1u2c1e2e1w3e1r2c1w2g1w2c1r2e1v2e1s2e1i2e1t2c1v2e1w2f1w2c1w2e182c1q2g1z2e1s2e1d2e1s1d142e1w3g1t2c1u2f192c1q3f1b2e1q1d1a2e1s3e1x2e1u3f172c1u3e1i2c1q2f192e1s3d162e1s2d152e1v3f1j2c1u2f192c1s3f162e1q3d1b2e1u3c1a2e1u2f152c1w3f1d2c1q3f192e1r3d1e2e1s1d152e1u3g192c1u2f172c1r3f112e1q3d182e1u3e182e1u2f162c1w3g1v2c1q3f192e1q3d1b2e1s3d1s2e1u2e1s2c1h1e1h3d1e1g1i3g1s1d161g1s2e1b3e1k1f101d163f1g2c1e3e1u2g1o3e1e3e1j3c1d1f1d1f1h2d1a3g121c173f1e1g1e3d1i2e1f3d1q3g1m1e1j1c1k1g1h1d1a1e1j1e191d1m3g183d1d3e1c1f1e3e161f1h1c101e1c1e181c1c1e1a3e1k1g1u2f191d1d1f1m3d1d3f1i1g1b1d1r3e122c123g121e1d3d1e3g1k1e1r1g1u2e1b1d1c3g1s1c1q3e1i3f1c3e161f1i1e1q1f1i1e1s1d1j3f1c1c1d1g1m1e103e1e3f1g1e1v2e1w2e1s1e1u2e1t2c1b2e1u2g132c1v2e1h2c1t2g1v2e1s3d1s2e1u3e1t2e1u2e1t2c1v2e1y2c1d3f1s2e1q1c1j2e1t2c1t2e1w2e1h2c1v2g1w2c1d2f123e152c1y2f12121q243e181c1k3g1g2g1d3d162e1k3d1a1g1g1f1o2e1l1e143e1c1e1r3g122c1w2g1t2c1s2e1z2e1s2c1i2e1w3c1t2e1u2g1u2c1v2e1v2c1u2g1g2e1r2c1z2e1w2d1y2e1u2e162c1u2g1z2c1u2g1b2e1q1d182e1u2c1z2e1s1g1e2c1w1e1w2c1t2e1k2e1s2c182e1u2e1p2e1s1f172c1w2g1r2c1u1g1x2e1q2e102e1u3d102e1s2e1u2c1u1f1m2c1r2g1v2e1r3e1i2e1u1d192e1u3g162c1u3f1b2c1t3g162e1q1d192e1w3d1c2e1s2f152c1w3g1i2c1s3f192e1s3d1f2e1u3d182e1u3g1c2c1u3f192c1s3f172e1q2d192e1w3c1a2e1s3f162c1u3f1c2c1s3f182e1q3d1c2e1u1d172e1t3f192c1u3f1b2c1s3f152e1q2d192e1w3e1w2e1s1f152c1u3f1d2c1s3f172e1q3c112e1u2c1w2e1k1e103d1q1g1m1d143g121g122e1u2g1e3d143g103g1g1d1f3e1f1d161g1f1f191d1s3f1e3e1g3f1g1e1b1c1e1e1e1e1p3e1f1e163d151g1j2c1b1f1k1f1d1c1i2e1u1e1j3g1d1e1h3c1e2f1d3e1j1f181e102c1b2f1d1d1b1f1b2f191c1a1e1f3d183f153e1g1d1u3f1h1e1c3g1f1e1d3c1d1e1b1d1r1g1s1g101c1w1f163d1c3f171g1f1d1u2f1l2e1p1e1a3g161d1r3g1f1c1h3e1f1e1e2c1e1g1j2c1i1g1f3f1d2c1u2e1j2c1s1e152e1q2e1h2e1u1e1i2e1s2f1q2c1w2g1m2c1s3e1w2e1s1c1h2e1u2e1o2e1u2e1f2c1b3e1t2c1s2e1j2e1q2e192e1u3e1t2e1u1g1k2c173e102c192e163e172j1k2f1g3e1c1e1i3e1k1e1l1f1m1c1d3e1g1f1e1d1i2e1j1e1b2e152e1s1c1q2e1v2c152e1s1e1j2c1u3g1h2c1u1e1e2e1q3e1i2e1w1d1x2e1t2g1h2c1w2g1v2c1u2g1z2e1q2c1e2e1w1c1x2e1u2e1f2c1u1e1w2c1s2e1w2e1r2c122e1w2c1z2e1t2f1s2c1u1e172c1t2g1y2e1s2c172e1v3e1u2e1u2e1i2c1w1e112c1u1e1x2e1q2d1y2e1v2c1t2e1s2f152c1v3e112c1s3f182e1q3c1d2e1u3d192e1u3f1b2c1u3f1a2c1s3f1d2e1q2d192e1v3d1z2e1s1f152c1u3e1m2c1s3f172e1q3d182e1u1d192e1s3f132c1u3f1a2c1s3f1v2e1q2d1b2e1u3e1g2e1s2f172c1u3f1d2c1s3f172e1q3c1s2e1u3d192e1u3f1r2c1u3f1a2c1u3g1y2e1q3d192e1u3d192e1s3f152c1u2e1w2c1s2g1f1e103e1b3f1s1c1p3f1r3d1b3d1e3e1d2c1p3e1y2f1i3e1e1e1e1e1p3e1d1e163e151g1j2c1b1f1k1f1d1c1i2e1u1e1c3g1f1e1h3c1f2f1d3d1j3f181e102c1b1f1e1e1g3f1g2e1d3d1u1f1m3c1o1e1i1f1f1e1e2f1m3d1k1g1k3f1i3e1e3f1e3e1j3g1h3f121c1e2g1h3d1s3e1d1e1d1c1k2f141d143g1f2f191e1j3d1u2d1s1f1f3e1b2e161f1q1e1a1g1i3e1h1c1e2g1e3c1x3e122e171d1u2f1d3d1w1g1s2g1d3c192e1v3e1h2e1u2g1s2c1u2f182c1t2g1z2e1r1c112e1t1c152e1t2e1g2c1w2f1j2c1u1g1h2e1r2e183e1w3e182e1u1g1q2c1u3f1j2c1s2g192e1q2d1u3e1b2d1x2e1y2e121c1v1k1v2i2j2j1f1f1i1f161|customTextPl|480|854|bufferTimeAtTopQualityLongForm|setFastSwitchEnabled|lastBitrateCachingInfo|lastMediaSettingsCachingInfo|setXHRWithCredentialsForType|setProtectionData|DRM|initialize|LOG_LEVEL_DEBUG|dashdrm|dashdrmjson|settings2action|STREAM_INITIALIZED|dashsubtracks|QUALITY_CHANGE_REQUESTED|setTextTrack|mediaType|oldQuality|FRAGMENT_LOADING_COMPLETED|TEXT_TRACKS_ADDED|PLAYBACK_TIME_UPDATED|PluginDashSubtitles|isDynamic|PLAYBACK_PLAYING|settings1action|Debug|logLevel|mp4a|42E01E|tagcors|crossorigin|crossOrigin|ytlog|codecs|complete|taginframe|error_time|urlmse|mp4||ynxnopip|nativenodownload|nativehlsinedge|nativehlsios|support|flussonic|PlugMediaChannels|nativehlsinsafari|SDK|controlsList|nodownload|latest|dash_all|MediaSegment|manifestError|failed|swapAudioCodec|loadstart|loadeddata|aborted|watching|PluginWS|NETWORK_ERROR|subtitleDisplay|sleep|MEDIA_ERROR|hls_error||Video|wake|English|eng|rus|222222|240|firstLevel|titlecolor|WebKitMediaSource|WebKitSourceBuffer|appendBuffer||hlsaddbitrate|PluginHlsSubtitles|hlssubtracks|fragLoadingTimeOut|manifestLoadingTimeOut|enableWorker|xhrSetup|withCredentials|settings1|autoStartLoad|mediasource|capability|key_session|key_message|encountered|attachMedia|MEDIA_ATTACHED|FRAG_PARSING_METADATA|relurl|fragdata|AUDIO_TRACKS_UPDATED|AUDIO_TRACK_SWITCHING|FRAG_CHANGED|LEVEL_LOADED|MANIFEST_LOADED|MANIFEST_PARSED|LEVEL_SWITCH|LEVEL_SWITCHED|enter|1006|DudhaNmTcq1ZeKYmDGeVc256aLxWxZpNbKYTDGdkAroXAroXxZp0dNtVd2aWdN09x3FZMK5ncut0aGhZzqonzkIQxn48dut0bqplDGeBAHsVCHlYAHs2BGX3zksZBGpAAGX3zksZBGpAAq44BnITBZpAAq44BnITBjpAAGX1zkh3BGpAAHsVCHlYAHs2BGX1zkh3BGpABZ43ArE1ArE4BZXYzkI4CrA4CrA1wsX3zkdXBrIXBrh3zrsVBrsYBksYBkIhHrhVBrsYBksYBkITAq43ArE1ArE4BnshHrhVBHh4Anh4AnITAq43ArE1ArE4BnshHrs0zkw5BHE5BHsTBj40AHs2AHs2BGpAAHEVAkl1Brl1AGX2zkIhHrs0zkw5BHE5BHsTBj41CrhnCrhnBGpACq41CrhnCrhnBGXYAj4ZCHI0CHIYwsX4zkEYAHMYAHM1zrsZzkw5BHE5BHshHrdVBno0BHo0CrdTAHsVBHh4Anh4AZpABZ43ArE1ArE4BZXYAG40AHs2AHs3wsXYAG45CHsYAHM1zrdVAHw1wtPOwuaQcuX9xZBNaNaNaNMOzn48z2d|wjXjMKB0bK9VwkPjcNJ4eqwTwOF5duIjCjxneNdjzqxnM2tTaGw6AG4ZzqxXc3BQeumWcjw6wOFWdqwTwN1idNeQcjw6wkwXAqoXwrohCHojzqxQM29Vd2BWcu9ZwkPjaNJkAHMnwO0TwNBWcOFZc2Ygd2iidNIjCOTjc3xlaLwjCksZzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTDGdkAroXAroXxZp0dNtVd2aWdN09x3FZMK5ncut0aGhYzqoXyGd|Dvpieuhhar0OHHsYzkl5AHsYBkITBZ4YAkIhHrsTBZ4YAkIhHroVCrd1zrdhHroVCrd1zrMhHrsTBG44BnIhHrsYzkl5AHsYBkITBG44BnIhHrdVBno0BHo0CrdTAG41CrhnCrhnBGpABZ43ArE1ArE4BZXYzkEYAHMYAHM1wsX4zkEYAHMYAHM1zroVBno0BHo0CrdYwsX4zkI4CrA4CrA1zroVBno0BHo0CrdYwsXYBq4ZCHI0CHIYzrMVBrsYBksYBkIhHrs0zkw5BHE5BHsTBj41wsXYBq4ZCHI0CHIYzrMVBHh4Anh4AnIhHrhVBHh4Anh4AnITAHwVAkl1Brl1AGpACq40AHs2AHs2BGXYAj4ZCHI0CHIYwsX3zkdXBrIXBrh3zrsYzkI4CrA4CrAhHrdVBno0BHo0CrdTAHsVBrsYBksYBZpAAHsVCHlYAHs2BGX3zksZBGpbxZp0dNtVd2aWdN09x3FZMK5ncut0aGh3zkI4BHw0CqXhBj41AroXAroQwvBkMKYmyq0YzqoYyGp0dNtVd2YieuIPzHdVBHh1AkE4zqoUBj41AroXAroQwqdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxiM3FQc24jCjxXdNJ2wjXjevmXaGw6wOB2aZwTwOBkMKYmwkPYzkwTwOpWd2m0bK9VwkPjeu9XwjXjcKtZa2mVwkPjAkoXwrlXwrohAqwTwNmkc25nM29Tc3wjCjxNaKAYBkAjgGXjM29VevxWct9VaLi0wkQ7wN9ZauJZwkPYBZXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|sessid|TimeStore|autoplaynomobiletv|panel|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOBPMLxmwjXjevmXaGw6wOB2aZwTwOpWd2m0bK9VwkPjeu9XzLxQa2i0wjXjcKtZa2mVwkPjBHohAHAhAqoXwjXjMNdjCkoTwNxOcZw6AGXjd2BicuIjCjwXzkhjzqxja3piauFQcNdjCjw2wrMhBjo2wjXjMNeiwkPXzkATwNxOMK92aLwjCkoVBjXjMK5QcKt0bK9VwkPjcN9VaGwTwNJid2IjCjxmcutneumkwjXjMGw6wkoVBjwTwNtWeNJZwkPjAGwTwOFQdqw6AqXjMNekc2YWdjw6wkoXAroXAqwTwOFQduxOM29Tc3wjCjxNaNaNaNMjzqxnM2tTaK92aLwjCjwUAGwTwNmkc25nM29Tc3wjCjxNaKAYBkAjzqx0bLpkc2YWdjw6wNsXAnd2AGwTwOFQduxOMGw6wksjgGXjcutVaZw6wNJVwjXjbuYnwkPYzqxnaLF0bK5OdZw6fZxnaLF0bK5OdnEjCksTwOBmevFQcNenButkeumWcjw6wNFWe25Tc2tlwjXjeNtTeKJkc2YWdjw6wkoXAroXAqwTwNB1d3FWcLBXaKJldZw6AqXjdutlaumVaZw6wkIhBZo1wrdjzqxVc2imMKEjCkoTwNaWcOFnbLQmwkPYAjXjM29Tc3wjCjwXAroXArojzqxja2BWcu9ZwkPjaNJkAHMnwjXjMNeiwkPjAGwTwOpWd2m0bK9VwkPjeu9XzLxQa2i0wjXjcKtZa2mVwkPjBrIhAHIhAqoXwjXjdN91cNFQcNdjCkITwNxOM29Tc3xWeNJZwkPjaNJlBnmiwjXjd2J0eumVa3AYMKB0bK9VwkPjd3pmaKEjzqxnaLF0bK5OdnxiM3FQc24jCjxncuJmdvFQcKJZwjXjd2J0eumVa3AnMKB0bK9VwkPjc2aNd2J0eumUaLwjzqxjc3xlaLxkc2YWdNJlwkPYzqxjc3xlaLxkc2YWdjw6wNIZMKA1CqwTwOFQeuYmM29Tc3wjCjxNakoXArojzqxPaKtlaN9VevBQfNIjCks0gGXjd2iidNJQM29Vd2BicuIjCjwZwjXjd2iidNJQM29Vd2BicuJWeNJZwkPjAZ41wjXjd2iidNJQM29VcKtZa2mVwkPYAqXjduYifKYQd3EjCOTjeNtTeKJkc2YWdjw6wNamMns2AZwTwOeQavFPAHoXwkPYzqxicveifLAjCksTwN1idNeQcjw6wkAXAqoXwrwhAHojzqxZc3JVaumVaZw6AqXjMNeiwkPjAqwTwNxOM29Tc3wjCjxNB2M3akdjzqxPbLB0c3x5eum0cuJnevxQb2IjCksTwNiQd3FWdOmja2BWcu9ZwkPjakeNB2M3wjXjaN9Veqw6wl9XaK4hI2tVdZwTwNiQd3FWdOmkc2YWdjw6wNamMns2AZwTwNt1eu9Xcut5cumneqw6AGXjdu9nbLFQc24jCjx0c3ojzqxPcKt4bZw6AqXjM29Tc3wjCjxNaKAYBkAjzqxja2BWcu9Zc3amdjw6wNM3akeNBZwTwNxWdNFmdNBWcu9ZwkPjBkM1CHFiwjXjbuJiauxWdNFmdNBWcu9ZwkPjaNJkAHMnwO0TwOaid3EjCkoTwOpZaLxWcuYnwkPXzqxnbutZaHEjCjx0aKYma3xicGwTwOBPMLxmBGw6wOePMLFnMLpXwjXjbumlaLaQauJWwkPYzqxXcut5aLxPaKmObvEjCks1AqXjMLBXaKB0wkPjc2aNwjXjd2iidNJ0bLFTaGw6AGXjd2iidNJ0c3ojCjwXzkwjzqxTc29XwkPXzqxnbvJNaNYmwkPXzqxZc3JVaumVaZw6AHoTwNBPMK5OaHxXcut5cumneqw6AGXjaNmTaGw6wmU7duQnx3t0eum0cuJXbOAOdLE6duQnx3t00yvEUeuo0zkFkntXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnPWz3pTdNQnzNBWcG9nMK1XcuIVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t00yvEUeuo0zkFknxXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnPWz3pTdNQnzNBWcG9nMK1XcuIVcLo0duQnx3t0gJ0jzqxXcut5aLx3bKF0bqw6AkhXzqxNc250dZw6AGXjaN9Veu5icKJnwkPjH3pmcjpHMK5nwjXjMN9ZauJZwkPXzqxjc3xlaLxkc2YWdjw6wNFmauJlaGwTwOpWd3Fmdm9Ncu9ieqw6AGXjdu9neuJZL2aTc2t0dN91cNFQcNdjCksXzqxXc3B0aLxPbKFmwkPXzqxXc3B0aLxgaNYWMLFUMLxObK4jCjwZAqoXwrohAqwTwOpWd3Fmdm9Ncu9ieuimbKePeqw6AHAXzqxXc3B0aLxgaNYWMLF3bKF0bqw6AHAXzqxXc3B0aLxgaNYWMLFja2BWcu9ZwkPjCro2CHIYwjXjM29VevxWct9DENapHGw6fZxWcjw6AGXjc3xlaLwjCks4zqxiM3FQc24jCjxkeLB0c20jzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhaNmTcr0Ow2aNaNaNajdhevxicOBNc3xUDGe0dNtVd2YieuIPAq41zqoXyGd|Dvpieuhhar0OHHhVAHAnCro5BGXYAj45Bno2BkM3wsX4zksnAnhXCHITCq4YBrw4BHdYBqpABZ4ZAnInCrsTCq4YBrw4BHdYBqpABG43AHInCrsTCG42BnoXCHIZBqpABj4nArs2BkM3zrsXzkw4BHAnAnAhHrdVAHo1Arl1AjX5zkE2BnEZCrI3wsX3zksXBHo5BHwTAHwVCHdXBkM2BZpACq4YAnA4Arl1zrsZzkl3ArM2BkdhKjpBAHoVCrw1Brd2AjXYAZ4XBHd1AkA4wsAYAG45CHo4Arl1zrsnzko1BnIZAnhhAHwVBnI4ArE3BjXYAj40AHAnAnAnwrsZzkd1Cro0BnMTAHsVAnh1BHwnCqprAHwVBnI4ArE3BjXYAq40ArhnCrshAHwVArw3CHo0CqX5zkhZAko5BHw0wrsYzkwYArlXBrhTCG44AkwXCHIZBqprAHoVBnM3BHdYBqX5zkhZAko5BHw0wrsXzkA3CrIZAnhTCG45CHI4Arl1AjoYAq4YBrMTAHoVAkw3Brw4BjpAAHoVAHE2zrlVArE3Bks5ArIhHrsZzkEnAnwnCrsTCG4XBrd2AHlXBGpAAHwVBrAnAkA4AGX4zks0Akh1Bns0wsX5zksYCHo5BHwTCq4YBrw4BHdYBqpACG4YAHlXCHIZzrsXzklYBHo0BnMhHrlVCrA1BkM2BZXYAG4YArAZAnhYwsAYAq4YAkIYCHo1zrsXzkhZCrs5ArIhAHoVBrIXCHo0CqXYAq43AHwnCrshAHoVCrE5zrsXzkdYAkA4AGprAHsVAnl4AHlXBGXYAq43AHwnCrshAHsVBns3BHdYBqXYAG4XArs5ArE4wrsYzkdYBnI3AHETAHsVBrw4CHIZBqprAHsVBns3BHdYBqXYAG44AHl4Arl1wrsYzkA5AHh1BnsTAHwVAHE1BHwnCqoYAq44AHlYBrw5zrsZzks0BHIZAnhhEnsXzkAYAkE3BkwTAHwVAHE1BHwnCqo5zkh2AndYBrATAHsVCHI3AnAnAZo5zkInCqXYAG42AHdYBrw5wsX4zkl2CqXYAj4nAnA3AHEnwsA5zkA3CHM2BkdTAHwVBnhZBrd2Ajo5zkl4BnM2BkdTAHAVArI3BHwnCqoYAq44AkdZCrI3zrsnzko1BnIZAnhhHrsXzkhZBHE3BkwTAHAVArI3BHwnCqpbws05zkI1CrI5Ard0zrEhHrlVBHI4BHlXBnETAqpABj4XCHl5CHl5zrwhHrlVBHI4BHlXBnETBqpbxZpNbKYTDGdkaNaNaNaNxn48z3pieuh|15em|Dvpieuhhar0OHHIVBndXAHM4CrlTAHwVAnw1BklYCGprBG4YCrEnBnAXCqXYAj44CHd1Crh4wrEVAnhnAnEYBHdTAHAVAkIhAZ41zrsnzkw1wsAYzkdXBHo3BrI2zrsnzkw1wroVAkITAHsVBnl0CHw1BqoXzkw1zrsXwsAXzkw1zrhVAko1Ard0BHMhAG43ArIXBnE1BjX2zkd1wrAVBGX2zkd1wsA0zkA3AHAnBnMYzrMVBnIhBG4YBkw1CrdXAZX3zko5Akh5CrAYwrIVBnE2AHM4BqX3zkM1AHsYBHo3wsXYAG4nCrdZAkAYzrEVArsXAro5AndhHrsZzkwXArM4BqX1zkw3Arw3CHdYwsX2zkI2AkInArd1zrhVCHo5BHsZBkAhEnMVBkhnCHsYCHITCG4ZBHonBnMYAZo2zkd1zrlVBks3BrdXAkwhBj43BGXYAqprBj43BGXYAq4nBno3BnwYwrMVBkh3CHsZAHITAHoVBnw3ArEZCGo2zkI3AnI2Bkw0zrsYzko1Crl4AkIhHrsZzkw0CrdZCrATAHEVBkMXAHd3AZpAAHsVBrE1ArE3AZXYBG45AkM3ArM4wsX1zkd3Ars2Crh5zrsZzkAZBHM5AHlhKjpBAHAVBGX2zkd1wsAYAG43ArIXBnE2zrMVBnIhAHoVAkITBG4ZCHE5AkI0BqoYAq4ZBGXnzkIhEnsXzkw1zrsVBno1Ard0BHMhAHsVBno1Ard0BjXXzkw1wrsnzkITAq4ZBGprAHIVAkl0CHw1BqXXzkw1wrs2zkd1zrsVBno1Ard0BHMhAHMVBnITAZ41wsAYBj43BGX1zkw5BrlZBHE0wrs1zkw5BrlZBHETBj43BGoYAZ41zrMVBnIhKjpBAZ41zrsYzkd1wsA0zkE2BkE5CrAYzrsYzkd1wrIVAkITAHoVCHM2Brl4AZo1zkw1zrsXwsA1zkw1zrlVArAnBHoYBklhBq40BkM0CHhnAGX4zkw1wrAVBGX4zkw1wsAZzkInAnIXAHM5zrhVAkIhAG43BGX5zkonAnIXAHM5wrsVBnITAHohEnsVBnITAHoVCHM2Brl4AZoZzkInAnIXAHM5zrsYzkd1wrAVBGXYAG43BGpbws0YAZ41zrIVAkIhEns0zkE2BkE5CrATBG4ZBGoYBG4ZBGX0zkE2BkE5CrAYwrs1zkw1zrAVBGprAHIVAkITAj41AnA1Ars2CGoYBq40BkM0CHhnzrsVBnIhAHAVBGXYzkd1wsAYAj41AnA1Ars3zrsVBnIhAHsVBnITAj41AnA1Ars2CGoYAG43BGXnzkIhEnsYzkd1zrEVBrM2Brl4AnshAHwVBHAnBHoYBZX1zkw1wrsnzkITBG4ZBGpbws0YAZ41zrs5zkd1wsAYAG43ArIXBnE2zrs5zkd1wrsXzkw1zrs4zkw5BrlZBHEhAHoVAkITAHMVBGprAHoVAkITAHEVBno1Ard0BjoYAG43ArIXBnE2zrsnzkw1wrsnzkITAHAVAkIhEns1zkw5BrlZBHETAHAVAkIhAHMVBnITAHEVBno1Ard0BjoYBj43BGXYBj41wsAYBj43BGXYCq4ZCHE5AkI0wrs1zkw5BrlZBHETAHlVBnIhAHAVBGXYCG43BGpbws0YAZ41zrs4zkw1wsAYBq40BkM0CHhnzrs4zkw1wrs1zkw1zrs3zkE2BkE5CrAhAHIVAkITAHMVBGprAHIVAkITAHIVBHAnBHoYBZoYBq40BkM0CHhnzrs0zkd1wrsnzkITAHEVBnIhEnsZzkInAnIXAHdTAHEVBnIhAHsVBnITAHIVBHAnBHoYBZoYAG43BGXYBj41wsAYAG43BGXYBZ40BkM0CHhnwrsZzkInAnIXAHdTAHhVAkIhAHAVBGXYCq4ZBGpbxZpNbKYTDGdkaNaNaNaNxZ8|playback|startvisibility|PluginEffects|mousedown|mouseleave|orientationchange|move|DvxmM3Ehfr0OAqdhfH0OAqdhe2mleuh9xnsZxZpPaKmObvE9xnsZxZpNbKYTDGdkaNaNaNaNxZ8|mouseenter|PluginQuiz|PluginMini|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOB0c3ojzqx0fLpmwkPjd3aOwjXjMNdjCkp9zqxkc250dN9TL3pZaLMjCOTjc3xlaLwjCks2zqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwuaQcuX9xZAXAroXAroOwvFZMK5naN9ZcH0OevxicOBTMLFmyrwVBGXhAZ41yGd|PluginBlock|quizes|Dvpieuhhar0OHHwVCHIYArl1CrETBq40CHl1CHAZAjprAG40AHd3BkhnBqX2zks0Brl0BkwnwroVBHE5CHl5CHIZzrhVAno0CrM0BZoXzkI0CHl5CHl1AjXYAq42wsAXzkI0CHl5CHl1AjXYBG41Brw5Brh2wrEVBHI3ArIYBrMTAHlVBHIXAroXAGo5zkITAHlVBHIXAroXAGprAHEVBrEZCHE4BGXYCG41BHoXAroYwrs4zkE1zrs1zkI0Akl0CrMhAHhVBrITAHoVBjprAHhVBrITBG42BHdXBHs0CGoYBq40Brw5Brh1zrsVBkE5CHl5CHhhCG41zrsVBkE5CHl5CHhhHrlVBGXZzks0CHl5CHl4wsAYBq4YBkM4ArMZzrwVAHE5CHl5CHhhAHdVCHITBG45AnAYCHA4BjoYBZ45BGXYAq42wsAYBZ45BGXYBG4ZBkM4ArMZwrs0zks2BkhXBkwTAHlVArIXAroXAGo5zkITAHlVArIXAroXAGprBq44AnAYCHA4BqXYCG4XBHoXAroYwrsVArE5CHl5CHITAHIVAkM2Cro2AjoYzko0CHl5CHl1zrsXzkMhEnsVArE5CHl5CHITCq40Anw2Bro5AjoYzkh2Crl3CrAYzrMVAnl0AHMnAkEhAZ4nAHM4CrwnBqX0zkh0ArE3Brd4wsXZzkl1AHo5BHh0zrEVBrl5BHlnAkwhKjdhaNmTcr0Ow2aNaNaNajd|Dq9XMLFPDkXWan48z3B2an4jzqx0fLpmwkPjd3aOwjXjdu9nbLFQc24jCjx0c3ojzqxUMLxObK4jCjwZArohBHohAqoXwjXjd2BicuIjCjwYzkAjzqxQM29Vd2BWcu9ZwkPjaNJkAHMnwjXjMGw6wkoVBZwTwNtWeNJZwkPjAGwTwNYQcNTjCksTwNYQcNU1dNXjCjxidul6d2JmbZXUAHIjgGXjM29VevxWct9QclYXGjw6fZxWcjw6AGXjc3xlaLwjCks5zqxiM3FQc24jCjxkeLB0c20jzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhaNmTcr0Ow2aNaNaNajdhevxicOBNc3xUDGe0dNtVd2YieuIPAq41zqoXyGd|manipulation|oframe|indent|visited|hover|transbg|07|word|autoLink|container_w_procent|overflow_|35px|observe|childList|99999|wjXjevmXaGw6wOB2aZwTwOpWd2m0bK9VwkPjeu9XwjXjcKtZa2mVwkPjAkoXwrohAqo1AqwTwOBkMKYmwkPjAG4nwjXjbKBWcOBkc2YWdjw6wNamMns2AZwTwNsjCjwXzkdjzqxic3amdjw6wksjzqxTbK5SwkPYzqxTbK5SeLxTwkPjMLpQCOBmaKTTyns1wjXjM29XfGw6AL0TwOpZaKYWMKEjCkoTwOBPMLxmAZw6wNeWc2eTaGwTwOBPMLxmBjw6wjwTwOpWd3Fmdm9Ncu9ievpWd2m0bK9VwkPjeu9XwjXjdu9neuJZL2aTc2t0d2iiau93wkPYzqxnbutZaKBTdNJlwkPYzqxnbutZaKBWcu9ZwkPjaNJkAHMnwjXjd2iidNJja2BWcu9ZwkPjBrI0AHFjwjXjcNt0bLamaOJTcumWdZw6AGXjdNJTc2tlwkPXzqxmeNJVevB0dNtkb2JZwkPYzqxmeNJVeuYQd3FmcNJZdZw6Av0|rmright|Dq9XMLFPDkYXMLFPwuE9x00Zzkl1AHo5BHh0zrEVBrl5BHlnAkwhEnsVBrs3BnM4AnETBj4YBrE5BrMZAZoXzkI0CHl5CHl1AjX4zkAXBrh2BrdhAq41Brl5CHl5BHwTAHoVBjprAq41Brl5CHl5BHwTAHIVBHEZCHE4Bjo0zkI1Bno1AHE2zrs5zkI1AroXArshCG41zrs5zkI1AroXArshEns0zkE0Akl0CrITAHlVBHIXAroXAGoYCq40BGXYBG41Brw5Brh2wrs4zkE1zrsXzkMhEns4zkE1zrIVBkI3ArIYBrlhAHEVBrEZCHE4BGXYzkM0CHl5CHl4wrlVBGXYzkM0CHl5CHl4wsX5zkITAj4YBrl5CHl5CqprAHEVAHM2Cro2AjXZzks0CHl5CHl4wrs3zkl1zrIVCHAnAHlnCrMhAHdVCHITAHoVBjprAHdVCHITAHIVAkM2Cro2AjoYBq4YBkM4ArMZzrs5zko1AroXArshCG41zrs5zko1AroXArshEnEVCrAnAHlnCrETAHlVArIXAroXAGoYzko0CHl5CHl1zrs1zkw2BkhXBkwhAG4XBrl5CHl5BGXYAq42wsAYzko0CHl5CHl1zrhVBrAZBkEXCHwhAG44Bkh5BnhnAGX2zkA5Brs2Anw0wrAVAns2CrhZAnETBq44Bro0BnE3CqpAAj45BHsXCHI4BqX0zkE5CHI5AnwZwtPOwvFZMK5naN9ZcH0OevxicOBTMLFmyrlVBHoXAroXzqoYAq42AroXAroQwvBkMKYmyq0YzqoYyGp0dNtVd2YieuIPzHlVBHoXAroXzqoUAHoVBkoXAroXyGoOwuaQcuX9xZBNaNaNaNMODkXWdut0br48z2d|Dvpieuhhar0OHHhVAHAnCro5BGXYAj45Bno2BkM3wsX4zksnAnhXCHITCq4YBrw4BHdYBqpABZ4ZAnInCrsTCq4YBrw4BHdYBqpABG43AHInCrsTCG42BnoXCHIZBqpABj4nArs2BkM3zrsXzkw4BHAnAnAhHrdVAHo1Arl1AjX5zkE2BnEZCrI3wsX3zksXBHo5BHwTAHwVCHdXBkM2BZpACq4YAnA4Arl1zrsZzkl3ArM2BkdhKjpBAHoVCrw1Brd2AjXYAZ4XBHd1AkA4wsAYAG45CHo4Arl1zrsnzko1BnIZAnhhAHwVBnI4ArE3BjXYAj40AHAnAnAnwrsZzkd1Cro0BnMTAHsVAnh1BHwnCqprAHwVBnI4ArE3BjXYAq40ArhnCrshAHwVArw3CHo0CqX5zkhZAko5BHw0wrsYzkwYArlXBrhTCG44AkwXCHIZBqprAHoVBnM3BHdYBqX5zkhZAko5BHw0wrsXzkA3CrIZAnhTCG45CHI4Arl1AjoYAq4YBrMTAHoVAkw3Brw4BjpAAHoVAHE2zrlVArE3Bks5ArIhHrsZzkEnAnwnCrsTCG4XBrd2AHlXBGpAAHwVBrAnAkA4AGX4zks0Akh1Bns0wsX5zksYCHo5BHwTCq4YBrw4BHdYBqpACG4YAHlXCHIZzrsXzklYBHo0BnMhHrlVCrA1BkM2BZXYAG4YArAZAnhYwsAYAq4YAkIYCHo1zrsXzkhZCrs5ArIhAHoVBrIXCHo0CqXYAq43AHwnCrshAHoVCrE5zrsXzkdYAkA4AGprAHsVAnl4AHlXBGXYAq43AHwnCrshAHsVBns3BHdYBqXYAG4XArs5ArE4wrsYzkdYBnI3AHETAHsVBrw4CHIZBqprAHsVBns3BHdYBqXYAG44AHl4Arl1wrsYzkA5AHh1BnsTAHwVAHE1BHwnCqoYAq44AHlYBrw5zrsZzks0BHIZAnhhEnsXzkAYAkE3BkwTAHwVAHE1BHwnCqo5zkh2AndYBrATAHsVCHI3AnAnAZo5zkInCqXYAG42AHdYBrw5wsX4zkl2CqXYAj4nAnA3AHEnwsA5zkA3CHM2BkdTAHwVBnhZBrd2Ajo5zkl4BnM2BkdTAHAVArI3BHwnCqoYAq44AkdZCrI3zrsnzko1BnIZAnhhHrsXzkhZBHE3BkwTAHAVArI3BHwnCqpbws05zko5CHl5CHlTBqpACG4XCHl5CHl5zrohHrsZzkI1CrI5ArdTAjpACG4XCHl5CHl5zrEhKjdhaNmTcr0Ow2aNaNaNajd|uppercase|rc_nobrand|pjsfrrs|oncontextmenu|ContextMenu|rc_custom|keyup|keydown|Dq9ODkXWd3aODjwTwNmkc24ZwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuX9xZAXAroXAroOwvFZMK5naN9ZcH0OevxicOBTMLFmyrsTwrsQxn48du9TfKeWcjpXc2mVevA9xZ0YzksnBkh2CrA4aG0YAZo1zkd0BHI1BkM0wq0YzksnBkh2CrA4aG0YAZoYAG43Brl2Crw2wrEVAroZBrM1CrwhAHsVBnE5BkhZBjo5zkoXAkE2BHhZwrs2zkd0CHM4AkMhCG4XArw0BkI4AjoXzkd0CrlXAHA2BZo0zkoXAkE2BHhZwrIVBnE1BHI2BkEOwuaQcuX9xZBNaNaNaNMOzn48dut0bqplDGeBAHAVBGX3zkd5Akh5AnwZwsXYAG44BHA1BHA0zrMVAHE2BrE2BkshHrsYzks0BkE0BkMTBj44BHA1BHAnCGpAAHwVBnlZCrlnAjX4zkIhHrsYzks0BkE0BkMTAHoVAHE2BrE2BjpAAHsVCrInBHInBqXYAq44BHA1BHA0wsXYAZ41zrlVAko3AHo2BnhhHrs1zks0BkE0BkMTAHoVCrInBHInBqpAAHIVCrInBHInBqXYAq4YBrM0BrM2wsXYBq4ZArdYArM4zrhVBGpAAHIVCrInBHInBqX2zkh1AnI1AnA5wsXYBG4YBrM0BrM2zrMVAHE2BrE2BkshHrsnzkITBZ43CHw4CHAZAjpbxZpNbKYTDGdkaNaNaNaNxZ8|Logo|Dvpieuhhar0OHHsXzkl5BnAXBnwTAj4XCHsZCrEYCqprAHsVBHo5Crh3BZXZzkwnBrA1ArI5wrsZzkM4Akw5AHsTAj44BrMXArI2BZoYAZ4ZCrh5Crw1zrAVAkl3CrsXBHhhEns0zkl5Bro2AHlTBq41Bkd1CrhnAjoYBG45CHM3BHIZzrMVAnA0AkdnArMhAHIVCHlnAHh5BjX4zkd2AHoXBkw3wsAYBG45Crl2Ano1zrsYzks4Anw0CrwhAHEVCHlXAkI5BqXYAj45Akl1BnAhAHAVAkl1AnlTAHEVAHdXCrhnwsAYAj42CHoZBrIZzrs0zkMYBro4BkMhAHsVBrA1BnlYzrs1zkw1BnM2BjoYAq45CHdnArdZzrs1zkA2ArwZCHIhHrsXzkl5BnAXBnwTAHdVBrA4Anw5CqprAHsVCrl3AHE3CGXYBZ4ZAndnBrA5wrsnzks4And5BrlTAHMVBnAYBkE1BZoYBq40BndYAnoZzrs1zkd4BrEYBkEhEns2zkM1Crl2BnMTAHEVAHh2BrI0BjoYBZ45Crh2AnETAHsVCrMZCHM0AGoYBZ45CHAYCrd0zrhVBnMnCHE0CGprAHdVCHl3BnE0BjX1zkM2AkA0BkM2wrs2zkM2CHo4AHsTAZ4nAksnAkwYAZoYBq40CrA1And2zrsVBklnBnEYAnhhEnsnzks5Akd5BnlTAq43Anw1AkA2AnAhAHsVCrl1AHAXCqXXzkwYAnAZAko0BGoYAq45CHdnArdZzrohHrsXzkl5BnAXBnwTAj4XCHsZCrEYCqpbxZpQar0OduQnL3aWcvJUaJ9mcuJUaK50AjdhaNmTcq1ZeKYmDGeVc256aLxWxZpNbKYTDGdkaNaNaNaNxZ8|DudhaNmTcr0OwnoXAroXAqdhevxicOBNc3xUDGe0dNtVd2YieuIPAGXhAGlODkYXc2Y5a29VwvpWbK50dn0OzHsVAHA2CrM4AnimzHsnwrIVBnE1BHI2BkEhzHsVAHA2CrM4AnimzHsnwrsYzkd0CHM4AkMhBq4XArw0BkI4AjoYAG43Brl2Crw2wrlVAroZBrM1CrwhAHMVBnE5BkhZBjo5zkoXAkE2BHhZwroVBnE4CHoYAnM3wrEVAroZBrM1CrwhBG43BrI1BHM2BqdhaNmTcr0Ow2aNaNaNajdWDkYXMLFPwuE9x00YAG4XArw0BkI4zrEVBnE5BkhZBkwhHrsYzkoXAkE2BHhTAHwVBnE5BkhZBjprAHsVAroZBrM1CqXYAj43Brl2Crw2wrsnzkInBrM5AkETAHsVBrwYCHE4AjoYAZ41AnE2CHw0zrhVBnE5BkhZBkwhEnsnzkInBrM5AkETBj4XBnd0AHM5CGoYAG4XArw0BkI4zrEVBnE5BkhZBkwhAHsVAroZBrM1CqX0zkd0CHM4AkMZwtPOwumlDGeXbOBgeN9TeK1mL2JTaK1mcOEYxZpNbKYTDGdkaNaNaNaNxZ8|Orientation|Dq9ODkXWd3aODjwTwNtkeumWcjw6wN11euIjzqxiM3FQc24ZwkPjeK5UeLFmwjXjevmXaGw6wOB2aZwTwOBkMKYmwkPjAGwTwN1idNeQcjw6wksnwrohAqoYAZwTwNsjCjwXzkljzqxic3amdjw6wksjzqxnM2tTaK92aLwjCjwYzkwjzqxQM29Vd2BWcu9ZwkPjaNJkAHMnwjXjdu9nbLFQc24jCjx0c3oUcuJNeqx9zqxkc250dN9TL3aWcvJUaGw6fZxWdNFmdjw6BGXjc24jCksTwOF5duIjCjxnbutXaGwTwNtkeumWcjw6wOaWcvJUaGwTwNhjCkETwOxWeK5lbK5OwkPjAqwTwNB1d3FWcLeQavFPwkPYzqx3wkP3AqXjMGw6AGXjMKxOwkPjAq4nwjXjMK92aLwjCjwUAGwTwNBWcu9ZwkPjaNJkAHMnwjXjM29Tc3xjaZw6wNamMns2AZwTwNBWcu9Zc3amdjw6wNamMns2AZwTwNiQauIjCkoTwNiQauJWeLFUeLFmwkPYzqxZc3FieumWcjw6wkw3AqwTwNxOdutlaumVaZw6wkIhAqo1wrojzqxjaZw6AqXjbutVauYmwkPXzqxPMK5lcuJkc2YWdjw6wNsXAnd2AGwTwNiicNFTaLBkMKYmwkPjAq42wjXjcKtZa2mVwkPjCrohAqoXwq0YAqwTwNJ4dutVaqw6wj0YwjXja3xiaummcOEjCkoTwOpWd2m0bK9VwkPjeu9XzKYmaOEjzqxPMK5lcuJUMLxObK4jCjwXwrohAGoXwjXjM3Jneu9UauJnbKeVwkPYzqxkeLB0c21laLBQa25neNdjCjxdckYneNdhe2mleuh9xnsXBvp4xZpPaKmObvE9xnmXfqdheNmme0xWfr0OCrohAHl1wrsXBqo5xZp2aLxnbK9VDGdYzksOwviUcu5nDGePevFXCj8We3e3zOdnzN9ZaZ8ZAroXz3B2aZdhfu1TcOA6fuYQcNT9x2i0evo6zZ93e3dVenAVc3xOzns5CHlWfuYQcNTODmYVwqohwrYOwumlDGevdN91dq0ZxZpnevxWb2I9x25WcNIOwvB0dN9SaG13bKF0br0OAGdhaNmTcr0OcN9VaGdhaNmTcq1ZeKYmDGemeNJVc2FlxZp0dNtVd2aWdN09x3FZMK5ncut0aGh4Aq4XAroXAroTwrs5BG4XAroXAroQxn5dcjohwqohwqohDvxmM3EhaNmTcr0Ow0auFlauFjdhfr0OAqdhfH0OAqdhe2mleuh9xnsOwuimbKePer0OCGd|Dq9ZaKB0DmYVwqohwqohwqo8dNJkeqpNbKYTDGdkFlauFlauxZp4DGd2xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnw0xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnAXxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xns4xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|stretch|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnsZxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|wjXjMKB0bK9VwkPjduYifGwTwNtkeumWckwjCjxXMLJnaGwTwOF5duIjCjxneNdjzqxnM2tTaGw6wkwVAjwTwOBkMKYmc3amdjw6wkwVBGwTwN1idNeQcjw6wkwXAqoXwrohArojzqxiwkPjAGwTwNtWeNJZwkPjzHsjzqxXc3BQeumWcjw6wOFWdqwTwNmkc25nM29Tc3wjCjxNaKAYBkAjzqxjaZw6AqXjMNekc2YWdjw6wkBNMHijAZwTwNxOcZw6wksjzqxja3piauFQcNdjCjw3wrdhBZo3wO0TwNBWcOFZc2YgcLJ0aGw6fZxWdNFmdjw6BqXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|Dvpieuhhar0OHHs2zrdVAHA2BksYAnwhHrs2zrdVAHo5AHM5BrIhHrs1zkwXCrs3CrITBZ4YArlYBkl0BGpAAHEVAkd1ArlnzrdVAHo5AHM5BrIhEns0zkw3BHo5AZXnzks5CHsZBkw1wrsYzko2Ans5BZXXwrdVAHA3BHE2BrITAqprAZ4ZAHs4CHI5AGXXwroTAZ4YCHlYAkMZBGoXzrdVAHo5AHM5BrIhEnoTAHsVArs5AksZBjonzkwYAHh5BHlYzrs0zkwYCrAnCrlhBZ4YAnd1BrM0BGXYBq4ZAHhnAnh5wsX3zksnBnI0BkE1zrsZzkE0AHo0BkIhEnEVAHlnAno4BHITAHwVBrEYArE2BGoYzkd4BrA4BkMZzrsXzko0AHdXAHhhAG43CrEnCrM2AjX3zksXCHs2CHE1wsAYzkd4BrA4BkMZzrEVAHd2BkA3ArIhBq4YCHAnArh1BGXYzkd3Bnw5AkA2wrdVAHA3BHE2BrITAG43BndZCHwnBjprAHoVArhYBnh0BqXYzkd3Bnw5AkA2wrsZzkE5ArdXBkATBq4YBnM2AndXBGoYAj40CHo3ArMnzrdVAHo5AHM5BrIhHrsXzkM0BrIYBkdTBZ4YArlYBkl0BGpAAHAVAnhZCrl5BjXYAG41BHw0Aro0wsXYBjX3zksnBkMYAHAZwtPOwuaQcuX9xZBNaNaNaNMODkXWdut0br48z2d|fullwheel|1fZxnM3xmaK5kc2YWdjw6wktlANE1AqwTwOFWc2YjMLwjCOTjM29Tc3wjCjwXAroXArojzqxPbKFmwkPXzqxUMLxObK4jCjwUAkohAqoXwrojzqxOdNtlbKJVeqw6AqXjMK5QcKt0bK9VwkPjMKYXbusjzqxiwkPjAqwTwNhjCkoTwNYmaOFicNFZbKePevpiauFQcNdjCkF9zqxkc250dN9TL3FQeuYmwkQ7wN9ZauJZwkPYzqxWcjw6AqXjMKB0bK9VwkPjeum0cuIjzqx0fLpmwkPjeuJ4eqwTwOpWd2m0bK9VwkPjeu9XzKYmaOEjzqxkcumkbZw6AqXjbutVaqw6AqXjeuJ4eqw6wjwTwOaidjw6wOFQeuYmwjXjbumlaGw6AqXjbumlaK9VduYifGw6AGXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxjaZw6AqXjMNeiwkPXzkETwNxOdutlaumVaZw6wkMhBjo2wrMjzqx0bLFTaGw6wmFQeuYmwu9NwvFPaGp0dNtkbZwTwNBWcu9ZwkPjaNJkAHMnwjXjcKtZa2mVwkPjAHIhAqoXwrs1wjXjaN9Veqw6wl9XaK4hI2tVdZwTwNaWcOFnbLQmwkPYAjXjcuJ0euJZd3piM2mVaZw6wkojzqxnbu93eum0cuJXcut5cumneqw6AGXjcKtZdLJmaGw6AqXjMGw6wkoVBZx9zqxkc250dN9TL2YQcNIjCOTjc3xlaLwjCkATwN9VwkPYzqx0fLpmwkPjd2iiduIjzqxiM3FQc24jCjxTbK5mwjXjbqw6AHoTwOxWeK5lbK5OwkPjAGwTwOdjCksXAqXjMGw6wksjzqxiMNdjCjwXzksjzqxicu9iaqw6wkoVAjwTwNtWeNJZwkPjAq4ZwjXjM29Tc3wjCjxNaKAYBkAjzqxkc2YWdNxOwkPjaNJkAHMnwjXjM29Tc3xTc2tlwkPjaNJkAHMnwjXjM29Tc3xWeNJZwkPjaNJkAHMnwjXjMOJNaNJZwkQ7wN9VwkPXzqxkc2YWdjw6wNaNaNaNajwTwNsjCkoVBL0TwOpWd2m0bK9VwkPjeu9XwjXjcKtZa2mVwkPjAkdXwrs1wrohAHIjzqxPMK5lcuIjCkoTwNxOdutlaumVaZw6wkIhAqo1wrojzqx0bLojCksTwNiQauIjCksTwNiQauJWcNYQeNIjCksTwNJ4dutVaqw6wj0YwjXjcumVaLFQdu1idNeQcNxWevFWcGw6AHwTwOFQduBWcu9ZwkPjAHwYAksZwjXjeumXMNeiwkPjAGwTwOFQduxOM29Tc3wjCjxNaKAYBkAjzqx0bLpXMKFlbK5OwkPjAZo1wrEhBGwTwOFQduaWcOFnbLQmwkPYAqXjeumXMNeZc3JVaumVaZw6AjXjbutVauYmd2BicuIjCjwYwjXjbutVauYmM29Tc3wjCjxNaKAYBkAjzqxPMK5lcuJQM29VwkPjDvB2aZp3bKF0br0OAHmXfqdhbuJQa2i0DGdYCLp4xZp2bKJ3EN94DGdUAGoUAGoYCGoYCGdheNJZd2mWck0OAG4YxZp4cKYVdn0ObvF0drPWz3e3eZ53AZ5WdNdWAkoXAq9neNdOwviUcu5nCOiTbK5SDGePevFXCj8We3e3zOdnzN9ZaZ8YCHl5z3iTbK5Sxn4hwqohDuBQdNBTaGpnevxWb2I9xZBNB2M3akdOwvB0dN9SaG13bKF0br0OAqdhaNmTcr0Ow2amMns2AZdhaNmTcq1ZeKYmDGemeNJVc2FlxZpkfr0OCq41xZpkfH0OCq41xZpZDGd4zkIODkXWM2mZM2YmDkXWd3aODjwTwOFQduaWcOEjCjxDduJVwtBicOAjzqx0bLpXc2mVeuJZwkPYgGXjM29VevxWct9Xcut5wkQ7wN9ZauJZwkPZzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwvFZMK5naN9ZcH0OevxicOBTMLFmyrITwrAQxn48dut0bqplDGeBAHsVBrE2AnE2AjX2zks1BnhYAkIhHrsVAHEXAHlZAnsTAq4YAHM2BkM2BZprAG4XAHEnAkM5AjXXzko0And1wroVCrh0BnI5BkwTAqoXzkdnBkM4AkM5zrohEnoVAnAnAHdnArhTAqoXzkoXAndXAHlZzroVAnw4AHw1wroVAronBnoYCHwTAq43AklYBkM2BZpAAqXXzkdZCHs2BkM3wsXXzrsnzkw3ArhnAnAhHroVAronBnoYCHwTAHAVAkdXCrAnAZprAq4XArA3Ars5AjXYAZ42Bns4BnIhAq4nAnAYBnAXCqXYBqoXzkdnBkM4AkM5zrs0wsAXzkh4CrE2AHI0zrs0wrsVArs0Anw2CHwTAHAVCHE4CHI4AZoYzks1AHw5Cro4zrsnzkh3Bko0AHdhHrsYzkE0BkA0BkwTBZ44BrwYCrd1wsAYAG42CHo2BnAYzrdVBkEYBkM2BZoYAG44BrMYBHA4zrdVAnA5ArMZBGoYAG44BrMYBHA4zrdhEnsYzkh0Bks1AnhTBj42Bko5And1wrsYzkM5ArM3AnsTBj4nBks5BnlYBZoYAG40BrMnBrMZzrMVAHI3CrsZBGpAAHsVBrE2AnE2AjX2zks1BnhYAkIhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxQM29VAjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTDGdkAroXAroXxZp0dNtVd2aWdN09x3FZMK5ncut0aGh0zqonyGd|default_h|default_w|1v3e1ghwoulf|fullscreenElement|msFullscreenElement|Dvpieuhhar0OHHdVBno3BklZAkhTAq43Bnd3BnhXBkdhHrdVBno3BklZAkhTAHAVAkwZAkwZAjprBZ43Ard2CHwZCqXYAZ42BHs3BndhCq4XCHsYAkoZAGXYBqo4zkI2BrsXAkInzrs0wsXYAG4YAnAnAnAnzrs0wsAYAG42ArMnAHI2zrs0wrsYzkl4CHd0AnITAHAVBkIYBnd3wrsYzkl4CHd0AnITAHAVAkwZAkwZAjpAAHsVCHh5BnEnBGXXzkd3Bnd3Bnd3CqprAHsVCHh5BnEnBGXXzkA0CrwZAkl3AjoYAG42ArMnAHI2zrohAHsVAHAnAnAnAZXXwsX4zkI2BrsXAkInzrohEnhVArlYAHwXAksTAqo3zkdXBnM5Akw4zroVAnE4AkwZCHdZwrdVBno3BklZAkhTAq43Bnd3Bnd3BnhhKjpBAZ40AkI2BrsXAGXYBqpAAq44BHM0AHoZBHATAHEhEnoVAnhnBrw3CHAYzrs0wroTAHAVBkIYBnd3wroTAHAVAkwZAkwZAjpAAqXXzkd3Bnd3BnlYAZprAqXXzkA0CrwZAkl3AjoXzkA4AnEZBnlnAGXXwroVCrI2BrsXAkInzrohHrAVBrw1BkEYArsTAqprAZ44CHh2AkAnBqXXwrEVAkhZArIYAkdTAq4nBrhZAkw5BnwhBq4ZCrwXBHsZBZXXzkd3Bnd3Bnd3CqpABq4ZCrwXBHsZBZXYAZ4ZAkwZAkwZwsA0zkw4Ako1AHw3zrsnzkM1AHd3BZonzkh5CrMZAnA0zrs0wrAVBrw1BkEYArsTAHEhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxQM29VAZw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGhZzqonyGd|webkitFullscreenElement|webkitIsFullScreen|mozFullScreen|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnA2xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnEZxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|DudhaNmTcq1ZeKYmDGeVc256aLxWxZp0dNtVd2aWdN09x3FZMK5ncut0aGhXzqoXyGd|Dvpieuhhar0OHHlVCro5CHA0BrhTAqprBq40AHE0Bno1AjXXwroTBq41wroTAHohEnoTAHIVBGo0zkEYBrE3ArIZzrwXwrlVCro5CHA0BrhTAkohEns1zkwXBHA5CrETAkohAHlVBks5CrM5zrs1zkIhAHlVBks5CrM5zrsXwsAYCG42AHl4BklTBq41wrs1zkwXBHA5CrETAqo5zkhXCHlnBrE4zrohHrlVCro5CHA0BrhTAqpACG44Arl5AnE0CqXXwtPhHHdVCrE3CHE3BHlTAHEVBGpABZ44Brd5Brd1CGX1zkIhHrsnzkdnAnlXCrATAHohHrdVCrE3CHE3BHlTAHEVBGpABZ44Brd5Brd1CGXYBq41wtPOwuaQcuX9xZBNaNaNaNMOzn48z2d|Dvpieuhhar0OHHMVBkd0Bro1AHsTAqpABj42BnE0ArIYAGXYzkd0AHlnBHE4wsXYzkd0AHs0CHs2zrsVBnEYCHA1BrhhHrsVBnEYAHE5AHMTBj42Bnd0AHlnBGpAAqX2zkM3BnEYCHA1wsXXzrohHrMVBkd0Bro1AHsTAqpbws0YCqXXwsXYCqX2zkM3BnEYCHA1wsXYBj4ZBHh4BHo4zrMVBkd3Brs5AnIhHrs2zkw1Crh1ArhTAG43Brs5AnI0CqpAAHsVAnw1BHl0CGXYzkd0AHlnBHE4wsXYAG4nAkI1CHE5zrohHrs4zrohKjpBAG43BrsYBrlYBjXYAG4nAkw1Cro2wsXYzkd0AHs0CHs2zrs2zkw1Cro2BrIhHrMVBkd0Bro1AHsTAHMVAkI4ArM0BGpABj42BnE0ArIYAGXYCqpAAqXYCqpAAqXYAG4nAkw1Cro2wsXYzkd0AHs0CHs2zrsYzkAZAkI4ArMhKjpBAHhTAHsVAnwZBHhXBjpAAHhTAHhhHrsYzkAZBHI5BrlTAHhhHrsYzkAZBHI5BrlTAHMVAkI4ArM0BGpAAHMVAkI4CrIXCqXYBj4ZBHhXBkE1wsXYBj4ZBHh4BHo4zrsYzkAZAkI4ArMhHrs4zrsYzkAZAkI4ArMhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxQM29VAjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwvFZMK5naN9ZcH0OevxicOBTMLFmyrsTwrsQxn48dut0bqplDGeBAqX2zkM3BnEYCHA1wsXXzrEVCHA1BrhnCrdhHrEVCHAnAkI1CHITBq45AnI0CrA4BZpABq45AnAZBHI5BGXUCq44Crs3CrEZaG0YBjpABj42BnE0ArIYAGXUCq44Crs3CrEZaG0YBjpABj42BnE0ArIYAGX2zkM3BnEYCHA1wsXXzrMVBkd3Brs5AnIhKjpBAHsVAnw1BHl0CGX2zkM3BnEYCHA1wsXYAG4nAkI1CHE5zrohHrsnzko2Bkd0BrsTAqpAAHAVArM2BnE0AGX0zklnBHE4Anh3wsXYCqX0zklnBHE4Anh3wsXYCqX2zkM3BnEYCHA1wsXYAG4nAkI1CHE5zrMVBkd3Brs5AnIhKjpBBq45AnAZBHI5BGXYCqpABq45AnAZBHI5BGXYAZ4XBkE1AHMYwsXUCq44Crs3CrEZaG0YBjXYAZ4XBkE1AHMYwsXUCq44Crs3CrEZaG0YBjXYAG4nAkw1Cro2wsX2zkM3BrEXBHsYzrsYzkAZAkI4ArMhHrMVBkd0Bro1AHsTAHhhHrEVCHAnAkI1CHITAHhhKjpBAHsVAnw1BHl0CGXYCqpAAHsVAnw1BHl0CGXYAG4nAkw1Cro2wsXYCqXYAG4nAkw1Cro2wsXYCqXYAZ4XBkE1AHMYwsXYAZ4XBkM3BrEYzrsnzko2BrIYBkshHrsnzko2Bkd0BrsTAHhhHrsYzkAZBHI5BrlTAHhhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxiM3FQc24jCjxNeKYTd2BZaKJVwjXjMKB0bK9VAjw6wN5WdN1icvBkdNJmcjwTwOF5duIjCjxneNdjzqxXc3BQeumWcjw6wNBWcOFZc2YnzLxQa2i0wjXjcKtZa2mVwkPjAqoYAqoXwrsXwjXjd2BicuIjCjwXzkhjzqxiwkPjAGwTwNtWeNJZwkPjzHsjzqx0bLojCksTwOBkMKYmc3amdjw6wkoVCGx9zqxkc250dN9TL3B0MLx0wkQ7wN9ZauJZwkPYBqXjdu9nbLFQc24jCjx0c3oUcuJNeqwTwOBkMKYmwkPjAZ41wjXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|passonstart|DudhaNmTcq1ZeKYmDGeVc256aLxWxZp0dNtVd2aWdN09x3FZMK5ncut0aGhYzqoYyGd|wjXjbKBWckAjCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|DudhevxicOBNc3xUDGe0dNtVd2YieuIPAjXhAZlODkYXMLFPwuE9x00YBjX3zksnBkMYAHAZwsXYBjX3zksXCHs2CHE1wsXYBG4ZArhYBnh1zrdVAHo5AHM5BrIhHrs0zkw3BHo5AZX3zksXCHs2CHE1wsAYBq4ZBnIXCHATAZ4YCHlYAkMZBGoYAG4XBkAYCHdTAqo3zksnBnI0BkE1zrohEnAVAksYCrl1CHsTAqoXzrAVAHl5AHw2AkIhAqX3zksXCHs2CHE1wsAXzrsYzkoYCHwYAkMhAZ4ZAHs4CHI5AGXYBq4ZAHhnAnh5wrdVAHA3BHE2BrITAHEVAks4AnA4CGpABZ4YAnd1BrM0BGXYAj40BrsXBrM1wsA0zks5AnAXCrI1zrsZzkE0AHo0BkIhAG43CrEnCrM2AjXYAq4XBrs3Ars4wrsVBnh0Anh2BkwTBZ4YArlYBkl0BGprAG43CrEnCrM2AjX0zks3BkMnBno1wrEVAHlnAno4BHITAG43BndZCHwnBjo3zksnBnI0BkE1zrsVBnd3AklZAnMhEnsXzko4AHd4BrETAG43BndZCHwnBjoYAj40CHo3ArMnzrEVAHd2BkA3ArIhAHwVBrlXBno2AZX3zksXCHs2CHE1wsXYAq42BrE1AHM3zrdVAHo5AHM5BrIhHrsnzkA4Akh5CHMTAHsVBHIZBroXBqpAAHMTBZ4YAnM2AHsnAjpbxZpNbKYTDGdkaNaNaNaNxn48z3pieuh|MSFullscreenChange|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOpTMLljzqx0fLpmwkPjd3aOwjXjMNdjCkoTwNxOM29Tc3wjCjwXAroXArojzqxja28jCksTwNxOdutlaumVaZw6wkdhBZo3wrdjzqxQM29VcKtZa2mVwkPjAqoXwrohBqwTwNxOMGw6Aq4nzqxja2tWeNJZwkPXzkMTwOBkMKYmc3amdjw6wkEjzqxPbKFmwkPYzqxPbKFmc25Xcut5wkPYzqxPbKFmc255c3J0eKxmwkPYzqxQM29Vd2BWcu9ZwkPjMHonBnMYwjXjcKtZa2mVwkPjAnohAqoXwrAXwO0TwNBWcOFZc2Ygcum2aGw6fZxWdNFmdjw6AHoTwN9VwkPXzqx0aLi0wkPjcum2aGwTwNYmevFmdOBXMKBQcNdjCkwTwNtkeumWcjw6wNYQeNIjzqx0fLpmwkPjeuJ4eqwTwNiicNEjCkoTwNBTbKBSwkPXzqxNc250d2m6aGw6AHoTwN1idNeQcjw6wkohAqoXwrsXwjXjMGw6Aq41zqxPbKFmwkPYzqxPbKFmc252c2EjCkt9zqxkc250dN9TL3B0c3ojCOTjc3xlaLwjCks1zqxWcjw6AqXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGh0zqo0yGd|fullscreenchange|Local|ChromeCast|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOpTMLmTbLB0wjXjdu9nbLFQc24jCjxTaKa0wjXjcKtZa2mVwkPjAqoXwrohBjwTwNxOwkPYzqxnM2tTaGw6AG41zqx0fLpmwkPjd3aOwjXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxja3piauFQcNdjCjwnwrAhAZonwjXjMNeiwkPXzkETwNxOMK92aLwjCkoVCqXjeumXwkPXgGXjM29VevxWct9NeKYTwkQ7wN9ZauJZwkPYAZXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOBmevFQcNenwjXjdu9nbLFQc24jCjx0c3oUdNmObvEjzqxUMLxObK4jCjwYAZoYAZoXwrojzqx0fLpmwkPjd3aOwjXjd2BicuIjCjwYwjXjMGw6wksjzqxic3amdjw6wksjzqx0bLojCkoTwOBkMKYmc3amdjw6wksVAjwTwNmkc25nM29Tc3wjCjxNaKAYBkAjzqx0bLpja2BWcu9ZwkPjaNJkAHMnwjXjeumXM29Tc3wjCjwXakpNAuMjzqx0bLpja3xWeK5lbK5OwkPnzqx0bLpja2sjCjwYwjXjeumXaN9VevBQfNIjCksYzqx0bLpXc2mVeuJZwkPXzqx0bLpXc2mVeuJZMKYQa24jCjxZbKePeqwTwOFQdvpiauFQcNdjCjw1wrdhBGo3wO0TwNBWcOFZc2YgduYifKYQd3EjCOTjc3xlaLwjCklTwN9VwkPXzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwvFZMK5naN9ZcH0OevxicOBTMLFmyrwTwrAQxn48dut0bqplDGeBAqXXwsXYBjXXwsXYBjXZwsXXzrwhHroTAqpbws0XzrMhHrs2zrMhHrs2zrhhHroTCqpAAqX2wtPhHHoTAHwhHrs2zrsZwsXYBjXYBqpAAqXYBqpAAqXYAjpbxZpNbKYTDGdkaNaNaNaNxZ8|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnM2xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohDq9ODmYVDq9neNd|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnMXxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnI0xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnE4xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|wO0TwNBWcOFZc2YgeumUaGw6fZxWdNFmdjw6BjXjc24jCksTwNtkeumWcjw6wOFQcKIjzqx0fLpmwkPjeuJ4eqwTwOFmfvEjCjwXCkoXwjXjaN9VevBQfNIjCklTwN1idNeQcjw6wkw1AqoXwrohAHAjzqxkcumkbZw6AqXjd2JXMLxieu9ZwkPjzZwTwNaWcOEjCjxIMKiWcKsTELxQMKXjzqxTaLF0aLxndutkbK5OwkPjAGwTwNsjCjwXzkdjzqxXc3BQeumWcjw6wOFWdq1TaKa0wjXjM29Tc3wjCjxNaKAYBkAjzqxnbu93avJZMLFQc24jCkoTwOBPc3ejc3FPwkPYgGXjM29VevxWct9leLxieumWcjw6fZxWdNFmdjw6BZXjc24jCksTwNtkeumWcjw6wNF1dNt0bK9VwjXjevmXaGw6wOFmfvEjzqx0aLi0wkPjArPXAqwTwNaWcOFnbLQmwkPYAqXjcKtZa2mVwkPjAkIXwrsnwrohAqwTwNBTbKBSwkPXzqxNc250wkPjJutPc21izstZbKtTwjXjcuJ0euJZd3piM2mVaZw6AqXjMGw6wkoVBZwTwNBWcu9ZwkPjaNJkAHMnwjXjdu9nbLFQc24jCjx0c3oUdNmObvEjgGXjM29VevxWct9jeKaNaLwjCOTjc3xlaLwjCkhTwN9VwkPYzqxQM29VwkPjDvpRd2FQejpkcutndn0Ocu9iauJZyvxicNEQxn48z3pRd2FQek58gvXVcu9iauJZyvxicNEQzqoVcu9iauJZyvxicNEQCNxmaN9ZaGXhzNYWMKFmdjiZMK5lyHQiaOFmdjp7wuFQd3pTMLl6MNYWM2T7MN9ZauJZzLxiaum1dnPhBHomCZp3bKF0brPhAHJXfrThbuJQa2i0CjoYBLp4CZoUe2Jjb2m0zKtVbK1ieumWcj1NbKYTzK1WauI6wuxWeuh7wutVbK1ieumWcj1NbKYTzK1WauI6wuxWeuh7wq13aKxSbLEUMK5QcKt0bK9VCjpicNmUMLFQc24PdNtVaqlhAG44dZpQcNaQcNm0aGpmMLBmzKmVzK91erThMK5QcKt0bK9VCjpicNmUMLFQc24PdNtVaqlhAG44dZpQcNaQcNm0aGpmMLBmzKmVzK91erU9wq5Tc2tlaLwPdNtVaqlhf3pWd2m0bK9VCjpZaKYieum2aHThzLemMNUQeq1icNmUMLFQc24UauJTMLl6wq0Xzks2dnThMK5QcKt0bK9VzKFmcut5CjoUAq4YBOA7gGoVcu9iauJZyvxicNEQCNxmaN9ZaGXhzNYWMKFmdjiZMK5lyHQiaOFmdjp7wuBWcOFmcOE6wqdOCZpXc3BQeumWckPhMKxnc2Y1euI7wvFWdrPXgGoVcu9iauJZyvxicNEQCNxmaN9ZaGp7cuJNerPhzHAXdvh7wutVbK1ieumWcj1laKYifHPhzHoVAnxnCZp9wq5Tc2tlaLwPdNtVaql6MKa0aLwhfZpTaKa0CjonAvp4CZp9wspSaLmNdNtUaLAhMK5QcKt0bK9VyvxicNEQwvThAqITwrhXxGXhAHoXxGp7wuxWfq1nbutlc3d6wrohAkohAqoUAG4naK0hyuBWcu9ZyHThgGo0AqIhfZpjc3hUd2iiau93CjoXwrwVBKJUwrohAqoPM29Tc3wQCZp9wv0jzqxiM3FQc24jCjxjeKaNaLwjzqx0fLpmwkPjM3BnwjXjdu9nbLFQc24jCjx0c3ojzqxnM2tTaGw6wkoVBZwTwNBTbKBSwkPXzqxPbKFmwkPYzqxkc2YWdjw6wNamMns2AZwTwN1idNeQcjw6wkIXwrohAqoXwjXjcNmkcjw6wks0wO0TwNBWcOFZc2Ygd2J0eumVa3AjCOTjc3xlaLwjCksYzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwvFZMK5naN9ZcH0OevxicOBTMLFmyrsTwrsQxn48dut0bqplDGeBCG45BHlZAHMnBjXXwsXYAG4XBnA0AnIZzrwVBrwZCHhXBnIhHrsZzko4Brw3CqXZzkl3BkhnBkd1wsXYBq41BkI0AkMnzrsVCrM5AHw0BnIhHrs2zkoXAHA1BHATAZ4nBHd2BkM4CGpAAHIVAHl3AkM0BZX1zkh0AHEYBno5wsXYBG40AHI0BnI2zrMVCrAXBkh0AnIhHrs3zkh3AndXBkATBZ43CrhnCHsYwsXYCqX5zkh0Akw5CHI0wsXYBG41BHAnBHs0zrsXzkhXAroXBkAhHrs1zko3Arh0BndTAHsVCrA4Bro4CGpAAHMVArhYBklXBGXYBq4nBrwZArlnwsXYBq42BHM2ArEZzrs1zkhYAnI0BnlhHrsZzks1Ans1BrATAHEVBnM5Ako0BGpAAHsVArw3Brd2BjXYBG4ZBrwZBro4wsXYAq4XCrI1AHoYzrs3zkMXBnM3wsX4zko2AnhZBrI0zrs3zkdhHrMVCHh0AHo1BrdTAHIVAkh4Bro1CqpABG44AHw0BklZzrs0zkd4ArdYBrhhHrAVBrE2AHI1BnETAHIVCrInBndZAGpAAG45BkEZBkhYAGXYBq40AnE1AnlnwsXZzklZCHw3BHIYzrsYzkh4BrI3AnlhHrwVAnM2AnsnBrITAHoVCrwnArw2CGpAAqX5zkh5CHl3BrhnwsXXzkoZAno0ArlXBklTBZ44AkAXBrI3CqpAAj40BrM3Bns4AGX2zkh0AkAYCrEZwsXZzkl0ArdnBrA1zrIVCrEYBrs3ArlhHrsVCrhnCHAZCHdTAZ4nBHd2BkM4CGpAAZ4nAnsnAko4BGXYzkh5Akw2CHsnwsX1zkh2CHh4BkM0zrwVCrl2AHEXCrMhHrMVCHdZBkE2BkwTAj40Cro3Bnl4wsX3zklnBnInArhTAq4XBrMXBrsZAHA2wsX5zkl1CHwYBkA2zrohKjpBCq44Brl5Anh3AZX2wsA3zkw3BkonAnE1zrMhBjX3zkw3BkoYAnw4wrMTCq44Brl5Anl3BqprBjXYAq40AkA5CrM3wrdVAkd2ArAnBrITAHsVBZo4zkh0CHlnCrdnzrsYzkdhEnsXzkEZAnl2BkMTAHsVBZoYAG43zrsXzkEZAnl4BkdhAHsVBZX4zkh0CHlnCHd0wsAYAG43zrdVAkd2ArsnAkhhAHoVBrwnCHM2BjX2wrhVCrE5CHA4BnATBjpbxZpNbKYTDGdkaNaNaNaNxZ8|offsetX|nfscldr|nfsclios|seeksidesmob|layerX|require|allowLinker|control_mute|triangle|volume_element|slider|running|text33|control_time|tipmargintop|180deg|tipmarginbottom|tipmarginleft|tipmarginright|alphas|abg|valuemargintop|valuepaddingright|valuemarginbottom|getMinutes|getHours|valuepaddingleft|valuepaddingbottom|lines1|aload|colorover|valuepaddingtop|tippointeralign|rotateonclick|PluginCountdown|counter|iconspress|link2|_text|countdown|bufferDeg|189|1005|offsettimer0|pjslng_offsettimersecond|bufferInterval|SVG|pjslng_offsettimerminute|bgline2|bgline1|clickmarginleft|clickmarginright|rotateonhover|bglines|_bg|2001|PluginHdIcon|flipx|flipy|pjslng_sleeptimerminute|pjslng_sleeptimerhour|OqFAAAAdklEQVQoz42QQQ7AIAgEF|iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT|reloaderTimer|thumbs_img|kbq|logos|width_|opacity_|shape|position_|left_|top_|RWAlnQyyazA4aoAB4FsBSA|bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg|Cross|emptyremove|getDate|srvsga|88484718|pljscom|DOMContentLoaded|moved|pjsga|isflash|partners|200000|files_sleep|stripsspace|ffce00|handlemarginleft|handlemarginright|stripsw|onmousedown|onmouseup|handlemarginbottom|handlemargintop|unescape|225|slidespeed|tippmargin|normalonclick|offsetwidth|current_sleep|roundingver_final|000|pjs_thumbnail_|vast_impressions_all|vast_remove|Verdana|action_back|235|hlsdvrtime|currentSubtitle|avc1|current_|pressed_|ads|adsinvitation|the|Ultra|Quad|Medium|Small|Full|1296p|Super|advertiser|website|capiom|watch|eventlisteners|resumed|unmuted|playerjs_hit||Metric|LIVE|Audio|Enter|Exit|300000|Tiny|clipboard|__storage_test__|map|toUpperCase|underline|castdevice|RegExp|roll|iosv||iemobile|hlsqhsort|pjslng_|ontouchstart|casterror|All|Shadow|Font|Reset|Previous|Copied|Bottom|Yes|once|0val|Skip|1val|rewound|vast_Impression|vastnow|showplaylist|vastinfo|vastpause|vastresume|playlist_length|playlist_folders|fillText|fillStyle|toDataURL|jpeg|invert|currentfile|vrsn|midrollcrtm|midroll_time|stylesheet|googleapis|head|getVolume|filetype|vastids|adsystem|vpaid|dragging|Arial|Courier|Test|VpaidSet|dwn|startvast|prt|||||||||||vpaid_|youtubeid|createEvent|adShown|initEvent|dispatchEvent|toogle|vastbreak|updateCuid|switchpip|timeplay|Active|current_channel|sscopyright|unfix|speed4live|moveplaylist|hidearrow|isfullscreen|fix|blackberry|WebkitAppearance|posterontop|sub_drag|poster_floatshadow|_timer|line_play|black|2px|sub_split2words|redirectplaylist|PluginSubword|clone|sub_fonted|432|857|036|041|019|996|981|992|914|275|296|957|883|Dialogue|WEBVTT|getPlaybackQuality|getAvailableQualityLevels|setSize|||||||||||tiny|medium|customyterrors|unavailable|PAUSED|ytEnded|BUFFERING|CUED|ytError|large|hd720|sub_all_title|loadVideoById|sub_off0|subtitle_errdel|constrols|getVideoLoadedFraction|setPlaybackQuality|hd1080|getCurrentTime|setPlaybackRate|unMute|988|001|maxTouchPoints|trident|appVersion|Opera|Trident|userAgent|appName|081|088|046|023|014|Edge|Firefox|SmartTV|MiTV|Philips|pjslng_sub_sizeproc|Build|Tizen|MacIntel|Safari|Windows|ipod|platform|093|084|785||||747|||818|||874|897|705|659|185|096|267|344|547|918|935|702|613|907|956|055|513|403|971|979|985|f2parent|Href|wrapper0|vast_init|yandex|adsinchain|crtm|skipimprsd|3600000|ga_proc|wheelDelta|OpenScroll|crossdomain|issue|560|skipimpessed|bgload|PluginVastTimeMsg|renew|startdelay|vast_startdelay|alarm|tagLive|vastbgpreload|webkitExitFullscreen|VastImpression|VastReady|vast_ready|VastOverlay|webkitendfullscreen|webkitEnterFullScreen|Progress|01|Visible|dontseekforward|||||Open|pdf|vast_pauseonclick|PluginStat|pjsstatid|same|Resume|vast_closeonclick|downself|_self|pjsiframed|reloadjustevent|fileend|outros|webkitSupportsFullscreen|writePl|vast_timeout|reloadstart|nomidroll|nooverlay|PasswordTime|vast_impression|VastError|settings5action|New|hqdefault|settings5|pjsframe|Audiotrack|Speed|Break|Timeout|tags|Seeking|Quality|PjsFramed|Image|settings4|settings4action|settings3action|settings3|scaledrag|createposter|0001|MediaPjs|MediaVimeo|RemoveAll|Created|nomedia|Destroyed|Alternative|vast_finish|vast_stop|vast_ima|vast_skip|vast_dontplay|VastInsertOr|vast_click|VastRemoveUrl|vast_error|preloading||disablePreload|||VastInsertAnd|EmptyVastUrl|Pass|EXTINF|playlists|YoutubePlaylist|loaderror|tryotherquality|dvtp|winmob|RemovePassword|errortimeout|16x9|norootplstart|pjsstat|AdBlock|vpaid_timeout|vpaid_timeout2|vast_midroll_vmap|vast_postroll_vmap|vast_preroll_vmap|vast_pauseroll_vmap|vast_resound|vpaid_slotinframe|partnerpostrollor|partnermidrollor|partnerpauserollor|partnerprerollor|eventstrackervast|vast_openclick|vast_unmutebutcolor|vast_progressbgcolor|vast_progresscolor|vast_xcolor|vast_xbgcolor|vast_skipcolor|vast_titlecolor|vast_volumebgcolor|vast_volumecolor|vast_default_volume|vast_unmutebutbgcolor|vast_unmutebutonce|vast_unmutehover|vast_linktxtonmobile|midrollpoint|introskiptime|rand|1000000|cssText|FindPjsDiv|PJSDIV|nodeName||45deg|repeating|rgb|async|NaNpx|number|setProperty|arguments|substring|introtxt|default_channel|introtitle|introclosetime|introclickable|minivis|fimg|encode|reduce|MarPad|sub_settings|f2img|0123456789|vast_titlebgcolor|showfrom1file|vast_pauserolltbimp|vast_pauserolltimebreak|vast_pauseroll_limit|openlast|water|vast_volume|scrollY|redirectblank|wid|vast_preroll_counter|vast_prerolltbimp|nativenotandroid|nativeontv|heartbeats|vast_title|autoplayed|sess|vast_prerolltimebreak|vast_preroll_limit|playlist_source|const|vast_pauseroll_counter|191|vast_introtbimp|vast_introtimebreak|vast_midrolltbimp|vast_linktxtbgcolor|192|PluginWater|vast_skipbgcolor|vast_linktxtcolor|2048|vast_midroll_counter|vast_midrolltimebreak|vast_playroll_counter|vast_postrolltimebreak|vast_postroll_limit|||pageXOffset|vast_postrolltbimp||vast_playroll_limit|vast_postroll_counter'.split('|'),0,{}))
"undefined"!=typeof window&&function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Hls=t():e.Hls=t()}(this,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=13)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}));var i=r(5);function a(){}var n={trace:a,debug:a,log:a,warn:a,info:a,error:a},s=n;function o(e,t){return t="["+e+"] > "+t}var l=Object(i.a)();function d(e){var t=l.console[e];return t?function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];i[0]&&(i[0]=o(e,i[0])),t.apply(l.console,i)}:a}var u=function(e){if(l.console&&!0===e||"object"==typeof e){!function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];r.forEach((function(t){s[t]=e[t]?e[t].bind(e):d(t)}))}(e,"debug","log","info","warn","error");try{s.log()}catch(e){s=n}}else s=n},c=s},function(e,t,r){"use strict";t.a={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",LEVELS_UPDATED:"hlsLevelsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",CUES_PARSED:"hlsCuesParsed",NON_NATIVE_TEXT_TRACKS_FOUND:"hlsNonNativeTextTracksFound",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition",LIVE_BACK_BUFFER_REACHED:"hlsLiveBackBufferReached"}},function(e,t,r){"use strict";var i,a;r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a})),function(e){e.NETWORK_ERROR="networkError",e.MEDIA_ERROR="mediaError",e.KEY_SYSTEM_ERROR="keySystemError",e.MUX_ERROR="muxError",e.OTHER_ERROR="otherError"}(i||(i={})),function(e){e.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",e.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",e.KEY_SYSTEM_NO_SESSION="keySystemNoSession",e.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",e.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",e.MANIFEST_LOAD_ERROR="manifestLoadError",e.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",e.MANIFEST_PARSING_ERROR="manifestParsingError",e.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",e.LEVEL_EMPTY_ERROR="levelEmptyError",e.LEVEL_LOAD_ERROR="levelLoadError",e.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",e.LEVEL_SWITCH_ERROR="levelSwitchError",e.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",e.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",e.FRAG_LOAD_ERROR="fragLoadError",e.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",e.FRAG_DECRYPT_ERROR="fragDecryptError",e.FRAG_PARSING_ERROR="fragParsingError",e.REMUX_ALLOC_ERROR="remuxAllocError",e.KEY_LOAD_ERROR="keyLoadError",e.KEY_LOAD_TIMEOUT="keyLoadTimeOut",e.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",e.BUFFER_APPEND_ERROR="bufferAppendError",e.BUFFER_APPENDING_ERROR="bufferAppendingError",e.BUFFER_STALLED_ERROR="bufferStalledError",e.BUFFER_FULL_ERROR="bufferFullError",e.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",e.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",e.INTERNAL_EXCEPTION="internalException"}(a||(a={}))},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var i=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)};Number.MAX_SAFE_INTEGER},function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var i,a=r(5),n=function(){function e(){}return e.isHeader=function(e,t){return t+10<=e.length&&73===e[t]&&68===e[t+1]&&51===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.isFooter=function(e,t){return t+10<=e.length&&51===e[t]&&68===e[t+1]&&73===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.getID3Data=function(t,r){for(var i=r,a=0;e.isHeader(t,r);){a+=10,a+=e._readSize(t,r+6),e.isFooter(t,r+10)&&(a+=10),r+=a}if(a>0)return t.subarray(i,i+a)},e._readSize=function(e,t){var r=0;return r=(127&e[t])<<21,r|=(127&e[t+1])<<14,r|=(127&e[t+2])<<7,r|=127&e[t+3]},e.getTimeStamp=function(t){for(var r=e.getID3Frames(t),i=0;i<r.length;i++){var a=r[i];if(e.isTimeStampFrame(a))return e._readTimeStamp(a)}},e.isTimeStampFrame=function(e){return e&&"PRIV"===e.key&&"com.apple.streaming.transportStreamTimestamp"===e.info},e._getFrameData=function(t){var r=String.fromCharCode(t[0],t[1],t[2],t[3]),i=e._readSize(t,4);return{type:r,size:i,data:t.subarray(10,10+i)}},e.getID3Frames=function(t){for(var r=0,i=[];e.isHeader(t,r);){for(var a=e._readSize(t,r+6),n=(r+=10)+a;r+8<n;){var s=e._getFrameData(t.subarray(r)),o=e._decodeFrame(s);o&&i.push(o),r+=s.size+10}e.isFooter(t,r)&&(r+=10)}return i},e._decodeFrame=function(t){return"PRIV"===t.type?e._decodePrivFrame(t):"T"===t.type[0]?e._decodeTextFrame(t):"W"===t.type[0]?e._decodeURLFrame(t):void 0},e._readTimeStamp=function(e){if(8===e.data.byteLength){var t=new Uint8Array(e.data),r=1&t[3],i=(t[4]<<23)+(t[5]<<15)+(t[6]<<7)+t[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},e._decodePrivFrame=function(t){if(!(t.size<2)){var r=e._utf8ArrayToStr(t.data,!0),i=new Uint8Array(t.data.subarray(r.length+1));return{key:t.type,info:r,data:i.buffer}}},e._decodeTextFrame=function(t){if(!(t.size<2)){if("TXXX"===t.type){var r=1,i=e._utf8ArrayToStr(t.data.subarray(r),!0);r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data.subarray(1));return{key:t.type,data:n}}},e._decodeURLFrame=function(t){if("WXXX"===t.type){if(t.size<2)return;var r=1,i=e._utf8ArrayToStr(t.data.subarray(r),!0);r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data);return{key:t.type,data:n}},e._utf8ArrayToStr=function(e,t){void 0===t&&(t=!1);var r=s();if(r){var i=r.decode(e);if(t){var a=i.indexOf("\0");return-1!==a?i.substring(0,a):i}return i.replace(/\0/g,"")}for(var n,o,l,d=e.length,u="",c=0;c<d;){if(0===(n=e[c++])&&t)return u;if(0!==n&&3!==n)switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:u+=String.fromCharCode(n);break;case 12:case 13:o=e[c++],u+=String.fromCharCode((31&n)<<6|63&o);break;case 14:o=e[c++],l=e[c++],u+=String.fromCharCode((15&n)<<12|(63&o)<<6|(63&l)<<0)}}return u},e}();function s(){var e=Object(a.a)();return i||void 0===e.TextDecoder||(i=new e.TextDecoder("utf-8")),i}var o=n._utf8ArrayToStr;t.a=n},function(e,t,r){"use strict";function i(){return"undefined"==typeof window?self:window}r.d(t,"a",(function(){return i}))},function(e,t,r){var i,a,n,s,o;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,a=/^([^\/?#]*)(.*)$/,n=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(e,t,r){if(r=r||{},e=e.trim(),!(t=t.trim())){if(!r.alwaysNormalize)return e;var i=o.parseURL(e);if(!i)throw new Error("Error trying to parse base URL.");return i.path=o.normalizePath(i.path),o.buildURLFromParts(i)}var n=o.parseURL(t);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):t;var s=o.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=a.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var d={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(d.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var u=s.path,c=u.substring(0,u.lastIndexOf("/")+1)+n.path;d.path=o.normalizePath(c)}else d.path=s.path,n.params||(d.params=s.params,n.query||(d.query=s.query));return null===d.path&&(d.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(d)},parseURL:function(e){var t=i.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(n,"");e.length!==(e=e.replace(s,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}},e.exports=o},function(e,t,r){"use strict";var i=function(){function e(e,t){this.subtle=e,this.aesIV=t}return e.prototype.decrypt=function(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)},e}(),a=function(){function e(e,t){this.subtle=e,this.key=t}return e.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},e}();var n=function(){function e(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}var t=e.prototype;return t.uint8ArrayToUint32Array_=function(e){for(var t=new DataView(e),r=new Uint32Array(4),i=0;i<4;i++)r[i]=t.getUint32(4*i);return r},t.initTable=function(){var e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],s=r[3],o=this.invSubMix,l=o[0],d=o[1],u=o[2],c=o[3],h=new Uint32Array(256),f=0,g=0,p=0;for(p=0;p<256;p++)h[p]=p<128?p<<1:p<<1^283;for(p=0;p<256;p++){var v=g^g<<1^g<<2^g<<3^g<<4;v=v>>>8^255&v^99,e[f]=v,t[v]=f;var m=h[f],y=h[m],b=h[y],T=257*h[v]^16843008*v;i[f]=T<<24|T>>>8,a[f]=T<<16|T>>>16,n[f]=T<<8|T>>>24,s[f]=T,T=16843009*b^65537*y^257*m^16843008*f,l[v]=T<<24|T>>>8,d[v]=T<<16|T>>>16,u[v]=T<<8|T>>>24,c[v]=T,f?(f=m^h[h[h[b^m]]],g^=h[h[g]]):f=g=1}},t.expandKey=function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,i=0;i<t.length&&r;)r=t[i]===this.key[i],i++;if(!r){this.key=t;var a=this.keySize=t.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n,s,o,l,d=this.ksRows=4*(a+6+1),u=this.keySchedule=new Uint32Array(d),c=this.invKeySchedule=new Uint32Array(d),h=this.sBox,f=this.rcon,g=this.invSubMix,p=g[0],v=g[1],m=g[2],y=g[3];for(n=0;n<d;n++)n<a?o=u[n]=t[n]:(l=o,n%a==0?(l=h[(l=l<<8|l>>>24)>>>24]<<24|h[l>>>16&255]<<16|h[l>>>8&255]<<8|h[255&l],l^=f[n/a|0]<<24):a>6&&n%a==4&&(l=h[l>>>24]<<24|h[l>>>16&255]<<16|h[l>>>8&255]<<8|h[255&l]),u[n]=o=(u[n-a]^l)>>>0);for(s=0;s<d;s++)n=d-s,l=3&s?u[n]:u[n-4],c[s]=s<4||n<=4?l:p[h[l>>>24]]^v[h[l>>>16&255]]^m[h[l>>>8&255]]^y[h[255&l]],c[s]=c[s]>>>0}},t.networkToHostOrderSwap=function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24},t.decrypt=function(e,t,r,i){for(var a,n,s,o,l,d,u,c,h,f,g,p,v,m,y,b,T,E=this.keySize+6,S=this.invKeySchedule,_=this.invSBox,R=this.invSubMix,A=R[0],k=R[1],w=R[2],L=R[3],D=this.uint8ArrayToUint32Array_(r),O=D[0],C=D[1],I=D[2],P=D[3],x=new Int32Array(e),M=new Int32Array(x.length),F=this.networkToHostOrderSwap;t<x.length;){for(h=F(x[t]),f=F(x[t+1]),g=F(x[t+2]),p=F(x[t+3]),l=h^S[0],d=p^S[1],u=g^S[2],c=f^S[3],v=4,m=1;m<E;m++)a=A[l>>>24]^k[d>>16&255]^w[u>>8&255]^L[255&c]^S[v],n=A[d>>>24]^k[u>>16&255]^w[c>>8&255]^L[255&l]^S[v+1],s=A[u>>>24]^k[c>>16&255]^w[l>>8&255]^L[255&d]^S[v+2],o=A[c>>>24]^k[l>>16&255]^w[d>>8&255]^L[255&u]^S[v+3],l=a,d=n,u=s,c=o,v+=4;a=_[l>>>24]<<24^_[d>>16&255]<<16^_[u>>8&255]<<8^_[255&c]^S[v],n=_[d>>>24]<<24^_[u>>16&255]<<16^_[c>>8&255]<<8^_[255&l]^S[v+1],s=_[u>>>24]<<24^_[c>>16&255]<<16^_[l>>8&255]<<8^_[255&d]^S[v+2],o=_[c>>>24]<<24^_[l>>16&255]<<16^_[d>>8&255]<<8^_[255&u]^S[v+3],v+=3,M[t]=F(a^O),M[t+1]=F(o^C),M[t+2]=F(s^I),M[t+3]=F(n^P),O=h,C=f,I=g,P=p,t+=4}return i?(y=M.buffer,b=y.byteLength,(T=b&&new DataView(y).getUint8(b-1))?y.slice(0,b-T):y):M.buffer},t.destroy=function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0},e}(),s=r(2),o=r(0),l=r(1),d=r(5),u=Object(d.a)(),c=function(){function e(e,t,r){var i=(void 0===r?{}:r).removePKCS7Padding,a=void 0===i||i;if(this.logEnabled=!0,this.observer=e,this.config=t,this.removePKCS7Padding=a,a)try{var n=u.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch(e){}this.disableWebCrypto=!this.subtle}var t=e.prototype;return t.isSync=function(){return this.disableWebCrypto&&this.config.enableSoftwareAES},t.decrypt=function(e,t,r,s){var l=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(o.b.log("JS AES decrypt"),this.logEnabled=!1);var d=this.decryptor;d||(this.decryptor=d=new n),d.expandKey(t),s(d.decrypt(e,0,r,this.removePKCS7Padding))}else{this.logEnabled&&(o.b.log("WebCrypto AES decrypt"),this.logEnabled=!1);var u=this.subtle;this.key!==t&&(this.key=t,this.fastAesKey=new a(u,t)),this.fastAesKey.expandKey().then((function(a){new i(u,r).decrypt(e,a).catch((function(i){l.onWebCryptoError(i,e,t,r,s)})).then((function(e){s(e)}))})).catch((function(i){l.onWebCryptoError(i,e,t,r,s)}))}},t.onWebCryptoError=function(e,t,r,i,a){this.config.enableSoftwareAES?(o.b.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(t,r,i,a)):(o.b.error("decrypting error : "+e.message),this.observer.trigger(l.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.FRAG_DECRYPT_ERROR,fatal:!0,reason:e.message}))},t.destroy=function(){var e=this.decryptor;e&&(e.destroy(),this.decryptor=void 0)},e}();t.a=c},function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,a="~";function n(){}function s(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,r,i,n){if("function"!=typeof r)throw new TypeError("The listener must be a function");var o=new s(r,i||e,n),l=a?a+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],o]:e._events[l].push(o):(e._events[l]=o,e._eventsCount++),e}function l(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function d(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),d.prototype.eventNames=function(){var e,t,r=[];if(0===this._eventsCount)return r;for(t in e=this._events)i.call(e,t)&&r.push(a?t.slice(1):t);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},d.prototype.listeners=function(e){var t=a?a+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,s=new Array(n);i<n;i++)s[i]=r[i].fn;return s},d.prototype.listenerCount=function(e){var t=a?a+e:e,r=this._events[t];return r?r.fn?1:r.length:0},d.prototype.emit=function(e,t,r,i,n,s){var o=a?a+e:e;if(!this._events[o])return!1;var l,d,u=this._events[o],c=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),c){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,i),!0;case 5:return u.fn.call(u.context,t,r,i,n),!0;case 6:return u.fn.call(u.context,t,r,i,n,s),!0}for(d=1,l=new Array(c-1);d<c;d++)l[d-1]=arguments[d];u.fn.apply(u.context,l)}else{var h,f=u.length;for(d=0;d<f;d++)switch(u[d].once&&this.removeListener(e,u[d].fn,void 0,!0),c){case 1:u[d].fn.call(u[d].context);break;case 2:u[d].fn.call(u[d].context,t);break;case 3:u[d].fn.call(u[d].context,t,r);break;case 4:u[d].fn.call(u[d].context,t,r,i);break;default:if(!l)for(h=1,l=new Array(c-1);h<c;h++)l[h-1]=arguments[h];u[d].fn.apply(u[d].context,l)}}return!0},d.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},d.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},d.prototype.removeListener=function(e,t,r,i){var n=a?a+e:e;if(!this._events[n])return this;if(!t)return l(this,n),this;var s=this._events[n];if(s.fn)s.fn!==t||i&&!s.once||r&&s.context!==r||l(this,n);else{for(var o=0,d=[],u=s.length;o<u;o++)(s[o].fn!==t||i&&!s[o].once||r&&s[o].context!==r)&&d.push(s[o]);d.length?this._events[n]=1===d.length?d[0]:d:l(this,n)}return this},d.prototype.removeAllListeners=function(e){var t;return e?(t=a?a+e:e,this._events[t]&&l(this,t)):(this._events=new n,this._eventsCount=0),this},d.prototype.off=d.prototype.removeListener,d.prototype.addListener=d.prototype.on,d.prefixed=a,d.EventEmitter=d,e.exports=d},function(e,t,r){"use strict";var i=r(1),a=r(2),n=r(7),s=r(3),o=r(0),l=r(5);function d(e,t){return 255===e[t]&&240==(246&e[t+1])}function u(e,t){return 1&e[t+1]?7:9}function c(e,t){return(3&e[t+3])<<11|e[t+4]<<3|(224&e[t+5])>>>5}function h(e,t){return!!(t+1<e.length&&d(e,t))}function f(e,t){if(h(e,t)){var r=u(e,t);if(t+r>=e.length)return!1;var i=c(e,t);if(i<=r)return!1;var a=t+i;if(a===e.length||a+1<e.length&&d(e,a))return!0}return!1}function g(e,t,r,n,s){if(!e.samplerate){var l=function(e,t,r,n){var s,l,d,u,c,h=navigator.userAgent.toLowerCase(),f=n,g=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];if(s=1+((192&t[r+2])>>>6),!((l=(60&t[r+2])>>>2)>g.length-1))return u=(1&t[r+2])<<2,u|=(192&t[r+3])>>>6,o.b.log("manifest codec:"+n+",ADTS data:type:"+s+",sampleingIndex:"+l+"["+g[l]+"Hz],channelConfig:"+u),/firefox/i.test(h)?l>=6?(s=5,c=new Array(4),d=l-3):(s=2,c=new Array(2),d=l):-1!==h.indexOf("android")?(s=2,c=new Array(2),d=l):(s=5,c=new Array(4),n&&(-1!==n.indexOf("mp4a.40.29")||-1!==n.indexOf("mp4a.40.5"))||!n&&l>=6?d=l-3:((n&&-1!==n.indexOf("mp4a.40.2")&&(l>=6&&1===u||/vivaldi/i.test(h))||!n&&1===u)&&(s=2,c=new Array(2)),d=l)),c[0]=s<<3,c[0]|=(14&l)>>1,c[1]|=(1&l)<<7,c[1]|=u<<3,5===s&&(c[1]|=(14&d)>>1,c[2]=(1&d)<<7,c[2]|=8,c[3]=0),{config:c,samplerate:g[l],channelCount:u,codec:"mp4a.40."+s,manifestCodec:f};e.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+l})}(t,r,n,s);e.config=l.config,e.samplerate=l.samplerate,e.channelCount=l.channelCount,e.codec=l.codec,e.manifestCodec=l.manifestCodec,o.b.log("parsed codec:"+e.codec+",rate:"+l.samplerate+",nb channel:"+l.channelCount)}}function p(e){return 9216e4/e}function v(e,t,r,i,a){var n=function(e,t,r,i,a){var n,s,o=e.length;if(n=u(e,t),s=c(e,t),(s-=n)>0&&t+n+s<=o)return{headerLength:n,frameLength:s,stamp:r+i*a}}(t,r,i,a,p(e.samplerate));if(n){var s=n.stamp,o=n.headerLength,l=n.frameLength,d={unit:t.subarray(r+o,r+o+l),pts:s,dts:s};return e.samples.push(d),{sample:d,length:l+o}}}var m=r(4),y=function(){function e(e,t,r){this.observer=e,this.config=r,this.remuxer=t}var t=e.prototype;return t.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/adts",type:"audio",id:0,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},t.resetTimeStamp=function(){},e.probe=function(e){if(!e)return!1;for(var t=(m.a.getID3Data(e,0)||[]).length,r=e.length;t<r;t++)if(f(e,t))return o.b.log("ADTS sync word found !"),!0;return!1},t.append=function(e,t,r,i){for(var a=this._audioTrack,n=m.a.getID3Data(e,0)||[],l=m.a.getTimeStamp(n),d=Object(s.a)(l)?90*l:9e4*t,u=0,c=d,f=e.length,p=n.length,y=[{pts:c,dts:c,data:n}];p<f-1;)if(h(e,p)&&p+5<f){g(a,this.observer,e,p,a.manifestCodec);var b=v(a,e,p,d,u);if(!b){o.b.log("Unable to parse AAC frame");break}p+=b.length,c=b.sample.pts,u++}else m.a.isHeader(e,p)?(n=m.a.getID3Data(e,p),y.push({pts:c,dts:c,data:n}),p+=n.length):p++;this.remuxer.remux(a,{samples:[]},{samples:y,inputTimeScale:9e4},{samples:[]},t,r,i)},t.destroy=function(){},e}(),b=r(10),T={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],SamplesCoefficients:[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],BytesInSlot:[0,1,1,4],appendFrame:function(e,t,r,i,a){if(!(r+24>t.length)){var n=this.parseHeader(t,r);if(n&&r+n.frameLength<=t.length){var s=i+a*(9e4*n.samplesPerFrame/n.sampleRate),o={unit:t.subarray(r,r+n.frameLength),pts:s,dts:s};return e.config=[],e.channelCount=n.channelCount,e.samplerate=n.sampleRate,e.samples.push(o),{sample:o,length:n.frameLength}}}},parseHeader:function(e,t){var r=e[t+1]>>3&3,i=e[t+1]>>1&3,a=e[t+2]>>4&15,n=e[t+2]>>2&3,s=e[t+2]>>1&1;if(1!==r&&0!==a&&15!==a&&3!==n){var o=3===r?3-i:3===i?3:4,l=1e3*T.BitratesMap[14*o+a-1],d=3===r?0:2===r?1:2,u=T.SamplingRateMap[3*d+n],c=e[t+3]>>6==3?1:2,h=T.SamplesCoefficients[r][i],f=T.BytesInSlot[i],g=8*h*f;return{sampleRate:u,channelCount:c,frameLength:parseInt(h*l/u+s,10)*f,samplesPerFrame:g}}},isHeaderPattern:function(e,t){return 255===e[t]&&224==(224&e[t+1])&&0!=(6&e[t+1])},isHeader:function(e,t){return!!(t+1<e.length&&this.isHeaderPattern(e,t))},probe:function(e,t){if(t+1<e.length&&this.isHeaderPattern(e,t)){var r=this.parseHeader(e,t),i=4;r&&r.frameLength&&(i=r.frameLength);var a=t+i;if(a===e.length||a+1<e.length&&this.isHeaderPattern(e,a))return!0}return!1}},E=T,S=function(){function e(e){this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}var t=e.prototype;return t.loadWord=function(){var e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),a=Math.min(4,t);if(0===a)throw new Error("no bytes available");i.set(e.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},t.skipBits=function(e){var t;this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,e-=(t=e>>3)>>3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)},t.readBits=function(e){var t=Math.min(this.bitsAvailable,e),r=this.word>>>32-t;return e>32&&o.b.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0?this.word<<=t:this.bytesAvailable>0&&this.loadWord(),(t=e-t)>0&&this.bitsAvailable?r<<t|this.readBits(t):r},t.skipLZ=function(){var e;for(e=0;e<this.bitsAvailable;++e)if(0!=(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()},t.skipUEG=function(){this.skipBits(1+this.skipLZ())},t.skipEG=function(){this.skipBits(1+this.skipLZ())},t.readUEG=function(){var e=this.skipLZ();return this.readBits(e+1)-1},t.readEG=function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)},t.readBoolean=function(){return 1===this.readBits(1)},t.readUByte=function(){return this.readBits(8)},t.readUShort=function(){return this.readBits(16)},t.readUInt=function(){return this.readBits(32)},t.skipScalingList=function(e){var t,r=8,i=8;for(t=0;t<e;t++)0!==i&&(i=(r+this.readEG()+256)%256),r=0===i?r:i},t.readSPS=function(){var e,t,r,i,a,n,s,o=0,l=0,d=0,u=0,c=this.readUByte.bind(this),h=this.readBits.bind(this),f=this.readUEG.bind(this),g=this.readBoolean.bind(this),p=this.skipBits.bind(this),v=this.skipEG.bind(this),m=this.skipUEG.bind(this),y=this.skipScalingList.bind(this);if(c(),e=c(),h(5),p(3),c(),m(),100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){var b=f();if(3===b&&p(1),m(),m(),p(1),g())for(n=3!==b?8:12,s=0;s<n;s++)g()&&y(s<6?16:64)}m();var T=f();if(0===T)f();else if(1===T)for(p(1),v(),v(),t=f(),s=0;s<t;s++)v();m(),p(1),r=f(),i=f(),0===(a=h(1))&&p(1),p(1),g()&&(o=f(),l=f(),d=f(),u=f());var E=[1,1];if(g()&&g())switch(c()){case 1:E=[1,1];break;case 2:E=[12,11];break;case 3:E=[10,11];break;case 4:E=[16,11];break;case 5:E=[40,33];break;case 6:E=[24,11];break;case 7:E=[20,11];break;case 8:E=[32,11];break;case 9:E=[80,33];break;case 10:E=[18,11];break;case 11:E=[15,11];break;case 12:E=[64,33];break;case 13:E=[160,99];break;case 14:E=[4,3];break;case 15:E=[3,2];break;case 16:E=[2,1];break;case 255:E=[c()<<8|c(),c()<<8|c()]}return{width:Math.ceil(16*(r+1)-2*o-2*l),height:(2-a)*(i+1)*16-(a?2:4)*(d+u),pixelRatio:E}},t.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},e}(),_=function(){function e(e,t,r,i){this.decryptdata=r,this.discardEPB=i,this.decrypter=new n.a(e,t,{removePKCS7Padding:!1})}var t=e.prototype;return t.decryptBuffer=function(e,t){this.decrypter.decrypt(e,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,t)},t.decryptAacSample=function(e,t,r,i){var a=e[t].unit,n=a.subarray(16,a.length-a.length%16),s=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),o=this;this.decryptBuffer(s,(function(n){n=new Uint8Array(n),a.set(n,16),i||o.decryptAacSamples(e,t+1,r)}))},t.decryptAacSamples=function(e,t,r){for(;;t++){if(t>=e.length)return void r();if(!(e[t].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(e,t,r,i),!i)return}}},t.getAvcEncryptedData=function(e){for(var t=16*Math.floor((e.length-48)/160)+16,r=new Int8Array(t),i=0,a=32;a<=e.length-16;a+=160,i+=16)r.set(e.subarray(a,a+16),i);return r},t.getAvcDecryptedUnit=function(e,t){t=new Uint8Array(t);for(var r=0,i=32;i<=e.length-16;i+=160,r+=16)e.set(t.subarray(r,r+16),i);return e},t.decryptAvcSample=function(e,t,r,i,a,n){var s=this.discardEPB(a.data),o=this.getAvcEncryptedData(s),l=this;this.decryptBuffer(o.buffer,(function(o){a.data=l.getAvcDecryptedUnit(s,o),n||l.decryptAvcSamples(e,t,r+1,i)}))},t.decryptAvcSamples=function(e,t,r,i){for(;;t++,r=0){if(t>=e.length)return void i();for(var a=e[t].units;!(r>=a.length);r++){var n=a[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var s=this.decrypter.isSync();if(this.decryptAvcSample(e,t,r,i,n,s),!s)return}}}},e}(),R={video:1,audio:2,id3:3,text:4},A=function(){function e(e,t,r,i){this.observer=e,this.config=r,this.typeSupported=i,this.remuxer=t,this.sampleAes=null,this.pmtUnknownTypes={}}var t=e.prototype;return t.setDecryptData=function(e){null!=e&&null!=e.key&&"SAMPLE-AES"===e.method?this.sampleAes=new _(this.observer,this.config,e,this.discardEPB):this.sampleAes=null},e.probe=function(t){var r=e._syncOffset(t);return!(r<0)&&(r&&o.b.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)},e._syncOffset=function(e){for(var t=Math.min(1e3,e.length-564),r=0;r<t;){if(71===e[r]&&71===e[r+188]&&71===e[r+376])return r;r++}return-1},e.createTrack=function(e,t){return{container:"video"===e||"audio"===e?"video/mp2t":void 0,type:e,id:R[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:"video"===e?0:void 0,isAAC:"audio"===e||void 0,duration:"audio"===e?t:void 0}},t.resetInitSegment=function(t,r,i,a){this.pmtParsed=!1,this._pmtId=-1,this.pmtUnknownTypes={},this._avcTrack=e.createTrack("video",a),this._audioTrack=e.createTrack("audio",a),this._id3Track=e.createTrack("id3",a),this._txtTrack=e.createTrack("text",a),this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=r,this.videoCodec=i,this._duration=a},t.resetTimeStamp=function(){},t.append=function(t,r,n,s){var l,d,u,c,h,f=t.length,g=!1;this.pmtUnknownTypes={},this.contiguous=n;var p=this.pmtParsed,v=this._avcTrack,m=this._audioTrack,y=this._id3Track,b=v.pid,T=m.pid,E=y.pid,S=this._pmtId,_=v.pesData,R=m.pesData,A=y.pesData,k=this._parsePAT,w=this._parsePMT.bind(this),L=this._parsePES,D=this._parseAVCPES.bind(this),O=this._parseAACPES.bind(this),C=this._parseMPEGPES.bind(this),I=this._parseID3PES.bind(this),P=e._syncOffset(t);for(f-=(f+P)%188,l=P;l<f;l+=188)if(71===t[l]){if(d=!!(64&t[l+1]),u=((31&t[l+1])<<8)+t[l+2],(48&t[l+3])>>4>1){if((c=l+5+t[l+4])===l+188)continue}else c=l+4;switch(u){case b:d&&(_&&(h=L(_))&&D(h,!1),_={data:[],size:0}),_&&(_.data.push(t.subarray(c,l+188)),_.size+=l+188-c);break;case T:d&&(R&&(h=L(R))&&(m.isAAC?O(h):C(h)),R={data:[],size:0}),R&&(R.data.push(t.subarray(c,l+188)),R.size+=l+188-c);break;case E:d&&(A&&(h=L(A))&&I(h),A={data:[],size:0}),A&&(A.data.push(t.subarray(c,l+188)),A.size+=l+188-c);break;case 0:d&&(c+=t[c]+1),S=this._pmtId=k(t,c);break;case S:d&&(c+=t[c]+1);var x=w(t,c,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);(b=x.avc)>0&&(v.pid=b),(T=x.audio)>0&&(m.pid=T,m.isAAC=x.isAAC),(E=x.id3)>0&&(y.pid=E),g&&!p&&(o.b.log("reparse from beginning"),g=!1,l=P-188),p=this.pmtParsed=!0;break;case 17:case 8191:break;default:g=!0}}else this.observer.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});_&&(h=L(_))?(D(h,!0),v.pesData=null):v.pesData=_,R&&(h=L(R))?(m.isAAC?O(h):C(h),m.pesData=null):(R&&R.size&&o.b.log("last AAC PES packet truncated,might overlap between fragments"),m.pesData=R),A&&(h=L(A))?(I(h),y.pesData=null):y.pesData=A,null==this.sampleAes?this.remuxer.remux(m,v,y,this._txtTrack,r,n,s):this.decryptAndRemux(m,v,y,this._txtTrack,r,n,s)},t.decryptAndRemux=function(e,t,r,i,a,n,s){if(e.samples&&e.isAAC){var o=this;this.sampleAes.decryptAacSamples(e.samples,0,(function(){o.decryptAndRemuxAvc(e,t,r,i,a,n,s)}))}else this.decryptAndRemuxAvc(e,t,r,i,a,n,s)},t.decryptAndRemuxAvc=function(e,t,r,i,a,n,s){if(t.samples){var o=this;this.sampleAes.decryptAvcSamples(t.samples,0,0,(function(){o.remuxer.remux(e,t,r,i,a,n,s)}))}else this.remuxer.remux(e,t,r,i,a,n,s)},t.destroy=function(){this._initPTS=this._initDTS=void 0,this._duration=0},t._parsePAT=function(e,t){return(31&e[t+10])<<8|e[t+11]},t._trackUnknownPmt=function(e,t,r){var i=this.pmtUnknownTypes[e]||0;return 0===i&&(this.pmtUnknownTypes[e]=0,t.call(o.b,r)),this.pmtUnknownTypes[e]++,i},t._parsePMT=function(e,t,r,i){var a,n,s={audio:-1,avc:-1,id3:-1,isAAC:!0};for(a=t+3+((15&e[t+1])<<8|e[t+2])-4,t+=12+((15&e[t+10])<<8|e[t+11]);t<a;){switch(n=(31&e[t+1])<<8|e[t+2],e[t]){case 207:if(!i){this._trackUnknownPmt(e[t],o.b.warn,"ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:-1===s.audio&&(s.audio=n);break;case 21:-1===s.id3&&(s.id3=n);break;case 219:if(!i){this._trackUnknownPmt(e[t],o.b.warn,"H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:-1===s.avc&&(s.avc=n);break;case 3:case 4:r?-1===s.audio&&(s.audio=n,s.isAAC=!1):this._trackUnknownPmt(e[t],o.b.warn,"MPEG audio found, not supported in this browser");break;case 36:this._trackUnknownPmt(e[t],o.b.warn,"Unsupported HEVC stream type found");break;default:this._trackUnknownPmt(e[t],o.b.log,"Unknown stream type:"+e[t])}t+=5+((15&e[t+3])<<8|e[t+4])}return s},t._parsePES=function(e){var t,r,i,a,n,s,l,d,u=0,c=e.data;if(!e||0===e.size)return null;for(;c[0].length<19&&c.length>1;){var h=new Uint8Array(c[0].length+c[1].length);h.set(c[0]),h.set(c[1],c[0].length),c[0]=h,c.splice(1,1)}if(1===((t=c[0])[0]<<16)+(t[1]<<8)+t[2]){if((i=(t[4]<<8)+t[5])&&i>e.size-6)return null;if(192&(r=t[7])&&(s=536870912*(14&t[9])+4194304*(255&t[10])+16384*(254&t[11])+128*(255&t[12])+(254&t[13])/2,64&r?s-(l=536870912*(14&t[14])+4194304*(255&t[15])+16384*(254&t[16])+128*(255&t[17])+(254&t[18])/2)>54e5&&(o.b.warn(Math.round((s-l)/9e4)+"s delta between PTS and DTS, align them"),s=l):l=s),d=(a=t[8])+9,e.size<=d)return null;e.size-=d,n=new Uint8Array(e.size);for(var f=0,g=c.length;f<g;f++){var p=(t=c[f]).byteLength;if(d){if(d>p){d-=p;continue}t=t.subarray(d),p-=d,d=0}n.set(t,u),u+=p}return i&&(i-=a+3),{data:n,pts:s,dts:l,len:i}}return null},t.pushAccesUnit=function(e,t){if(e.units.length&&e.frame){var r=t.samples,i=r.length;if(isNaN(e.pts)){if(!i)return void t.dropped++;var a=r[i-1];e.pts=a.pts,e.dts=a.dts}!this.config.forceKeyFrameOnDiscontinuity||!0===e.key||t.sps&&(i||this.contiguous)?(e.id=i,r.push(e)):t.dropped++}e.debug.length&&o.b.log(e.pts+"/"+e.dts+":"+e.debug)},t._parseAVCPES=function(e,t){var r,i,a,n=this,s=this._avcTrack,o=this._parseAVCNALu(e.data),l=this.avcSample,d=!1,u=this.pushAccesUnit.bind(this),c=function(e,t,r,i){return{key:e,pts:t,dts:r,units:[],debug:i}};e.data=null,l&&o.length&&!s.audFound&&(u(l,s),l=this.avcSample=c(!1,e.pts,e.dts,"")),o.forEach((function(t){switch(t.type){case 1:i=!0,l||(l=n.avcSample=c(!0,e.pts,e.dts,"")),l.frame=!0;var o=t.data;if(d&&o.length>4){var h=new S(o).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(l.key=!0)}break;case 5:i=!0,l||(l=n.avcSample=c(!0,e.pts,e.dts,"")),l.key=!0,l.frame=!0;break;case 6:i=!0,(r=new S(n.discardEPB(t.data))).readUByte();for(var f=0,g=0,p=!1,v=0;!p&&r.bytesAvailable>1;){f=0;do{f+=v=r.readUByte()}while(255===v);g=0;do{g+=v=r.readUByte()}while(255===v);if(4===f&&0!==r.bytesAvailable){if(p=!0,181===r.readUByte())if(49===r.readUShort())if(1195456820===r.readUInt())if(3===r.readUByte()){var y=r.readUByte(),b=31&y,T=[y,r.readUByte()];for(a=0;a<b;a++)T.push(r.readUByte()),T.push(r.readUByte()),T.push(r.readUByte());n._insertSampleInOrder(n._txtTrack.samples,{type:3,pts:e.pts,bytes:T})}}else if(5===f&&0!==r.bytesAvailable){if(p=!0,g>16){var E=[];for(a=0;a<16;a++)E.push(r.readUByte().toString(16)),3!==a&&5!==a&&7!==a&&9!==a||E.push("-");var _=g-16,R=new Uint8Array(_);for(a=0;a<_;a++)R[a]=r.readUByte();n._insertSampleInOrder(n._txtTrack.samples,{pts:e.pts,payloadType:f,uuid:E.join(""),userDataBytes:R,userData:Object(m.b)(R.buffer)})}}else if(g<r.bytesAvailable)for(a=0;a<g;a++)r.readUByte()}break;case 7:if(i=!0,d=!0,!s.sps){var A=(r=new S(t.data)).readSPS();s.width=A.width,s.height=A.height,s.pixelRatio=A.pixelRatio,s.sps=[t.data],s.duration=n._duration;var k=t.data.subarray(1,4),w="avc1.";for(a=0;a<3;a++){var L=k[a].toString(16);L.length<2&&(L="0"+L),w+=L}s.codec=w}break;case 8:i=!0,s.pps||(s.pps=[t.data]);break;case 9:i=!1,s.audFound=!0,l&&u(l,s),l=n.avcSample=c(!1,e.pts,e.dts,"");break;case 12:i=!1;break;default:i=!1,l&&(l.debug+="unknown NAL "+t.type+" ")}l&&i&&l.units.push(t)})),t&&l&&(u(l,s),this.avcSample=null)},t._insertSampleInOrder=function(e,t){var r=e.length;if(r>0){if(t.pts>=e[r-1].pts)e.push(t);else for(var i=r-1;i>=0;i--)if(t.pts<e[i].pts){e.splice(i,0,t);break}}else e.push(t)},t._getLastNalUnit=function(){var e,t=this.avcSample;if(!t||0===t.units.length){var r=this._avcTrack.samples;t=r[r.length-1]}if(t){var i=t.units;e=i[i.length-1]}return e},t._parseAVCNALu=function(e){var t,r,i,a,n=0,s=e.byteLength,o=this._avcTrack,l=o.naluState||0,d=l,u=[],c=-1;for(-1===l&&(c=0,a=31&e[0],l=0,n=1);n<s;)if(t=e[n++],l)if(1!==l)if(t)if(1===t){if(c>=0)i={data:e.subarray(c,n-l-1),type:a},u.push(i);else{var h=this._getLastNalUnit();if(h&&(d&&n<=4-d&&h.state&&(h.data=h.data.subarray(0,h.data.byteLength-d)),(r=n-l-1)>0)){var f=new Uint8Array(h.data.byteLength+r);f.set(h.data,0),f.set(e.subarray(0,r),h.data.byteLength),h.data=f}}n<s?(c=n,a=31&e[n],l=0):l=-1}else l=0;else l=3;else l=t?0:2;else l=t?0:1;if(c>=0&&l>=0&&(i={data:e.subarray(c,s),type:a,state:l},u.push(i)),0===u.length){var g=this._getLastNalUnit();if(g){var p=new Uint8Array(g.data.byteLength+e.byteLength);p.set(g.data,0),p.set(e,g.data.byteLength),g.data=p}}return o.naluState=l,u},t.discardEPB=function(e){for(var t,r,i=e.byteLength,a=[],n=1;n<i-2;)0===e[n]&&0===e[n+1]&&3===e[n+2]?(a.push(n+2),n+=2):n++;if(0===a.length)return e;t=i-a.length,r=new Uint8Array(t);var s=0;for(n=0;n<t;s++,n++)s===a[0]&&(s++,a.shift()),r[n]=e[s];return r},t._parseAACPES=function(e){var t,r,n,s,l,d,u,c=this._audioTrack,f=e.data,m=e.pts,y=this.aacOverFlow,b=this.aacLastPTS;if(y){var T=new Uint8Array(y.byteLength+f.byteLength);T.set(y,0),T.set(f,y.byteLength),f=T}for(n=0,l=f.length;n<l-1&&!h(f,n);n++);if(n&&(n<l-1?(d="AAC PES did not start with ADTS header,offset:"+n,u=!1):(d="no ADTS header found in AAC PES",u=!0),o.b.warn("parsing error:"+d),this.observer.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:u,reason:d}),u))return;if(g(c,this.observer,f,n,this.audioCodec),r=0,t=p(c.samplerate),y&&b){var E=b+t;Math.abs(E-m)>1&&(o.b.log("AAC: align PTS for overlapping frames by "+Math.round((E-m)/90)),m=E)}for(;n<l;){if(h(f,n)){if(n+5<l){var S=v(c,f,n,m,r);if(S){n+=S.length,s=S.sample.pts,r++;continue}}break}n++}y=n<l?f.subarray(n,l):null,this.aacOverFlow=y,this.aacLastPTS=s},t._parseMPEGPES=function(e){for(var t=e.data,r=t.length,i=0,a=0,n=e.pts;a<r;)if(E.isHeader(t,a)){var s=E.appendFrame(this._audioTrack,t,a,n,i);if(!s)break;a+=s.length,i++}else a++},t._parseID3PES=function(e){this._id3Track.samples.push(e)},e}(),k=function(){function e(e,t,r){this.observer=e,this.config=r,this.remuxer=t}var t=e.prototype;return t.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},t.resetTimeStamp=function(){},e.probe=function(e){var t,r,i=m.a.getID3Data(e,0);if(i&&void 0!==m.a.getTimeStamp(i))for(t=i.length,r=Math.min(e.length-1,t+100);t<r;t++)if(E.probe(e,t))return o.b.log("MPEG Audio sync word found !"),!0;return!1},t.append=function(e,t,r,i){for(var a=m.a.getID3Data(e,0)||[],n=m.a.getTimeStamp(a),s=void 0!==n?90*n:9e4*t,o=a.length,l=e.length,d=0,u=0,c=this._audioTrack,h=[{pts:s,dts:s,data:a}];o<l;)if(E.isHeader(e,o)){var f=E.appendFrame(c,e,o,s,d);if(!f)break;o+=f.length,u=f.sample.pts,d++}else m.a.isHeader(e,o)?(a=m.a.getID3Data(e,o),h.push({pts:u,dts:u,data:a}),o+=a.length):o++;this.remuxer.remux(c,{samples:[]},{samples:h,inputTimeScale:9e4},{samples:[]},t,r,i)},t.destroy=function(){},e}(),w=function(){function e(){}return e.getSilentFrame=function(e,t){switch(e){case"mp4a.40.2":if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},e}(),L=Math.pow(2,32)-1,D=function(){function e(){}return e.init=function(){var t;for(t in e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=n,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,s,l,s,o),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,a))},e.box=function(e){for(var t,r=Array.prototype.slice.call(arguments,1),i=8,a=r.length,n=a;a--;)i+=r[a].byteLength;for((t=new Uint8Array(i))[0]=i>>24&255,t[1]=i>>16&255,t[2]=i>>8&255,t[3]=255&i,t.set(e,4),a=0,i=8;a<n;a++)t.set(r[a],i),i+=r[a].byteLength;return t},e.hdlr=function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])},e.mdat=function(t){return e.box(e.types.mdat,t)},e.mdhd=function(t,r){r*=t;var i=Math.floor(r/(L+1)),a=Math.floor(r%(L+1));return e.box(e.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,85,196,0,0]))},e.mdia=function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))},e.mfhd=function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))},e.minf=function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))},e.moof=function(t,r,i){return e.box(e.types.moof,e.mfhd(t),e.traf(i,r))},e.moov=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trak(t[r]);return e.box.apply(null,[e.types.moov,e.mvhd(t[0].timescale,t[0].duration)].concat(i).concat(e.mvex(t)))},e.mvex=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trex(t[r]);return e.box.apply(null,[e.types.mvex].concat(i))},e.mvhd=function(t,r){r*=t;var i=Math.floor(r/(L+1)),a=Math.floor(r%(L+1)),n=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,n)},e.sdtp=function(t){var r,i,a=t.samples||[],n=new Uint8Array(4+a.length);for(i=0;i<a.length;i++)r=a[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return e.box(e.types.sdtp,n)},e.stbl=function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))},e.avc1=function(t){var r,i,a,n=[],s=[];for(r=0;r<t.sps.length;r++)a=(i=t.sps[r]).byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(i));for(r=0;r<t.pps.length;r++)a=(i=t.pps[r]).byteLength,s.push(a>>>8&255),s.push(255&a),s=s.concat(Array.prototype.slice.call(i));var o=e.box(e.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|t.sps.length].concat(n).concat([t.pps.length]).concat(s))),l=t.width,d=t.height,u=t.pixelRatio[0],c=t.pixelRatio[1];return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,d>>8&255,255&d,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),e.box(e.types.pasp,new Uint8Array([u>>24,u>>16&255,u>>8&255,255&u,c>>24,c>>16&255,c>>8&255,255&c])))},e.esds=function(e){var t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))},e.mp4a=function(t){var r=t.samplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),e.box(e.types.esds,e.esds(t)))},e.mp3=function(t){var r=t.samplerate;return e.box(e.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},e.stsd=function(t){return"audio"===t.type?t.isAAC||"mp3"!==t.codec?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.mp3(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))},e.tkhd=function(t){var r=t.id,i=t.duration*t.timescale,a=t.width,n=t.height,s=Math.floor(i/(L+1)),o=Math.floor(i%(L+1));return e.box(e.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,o>>24,o>>16&255,o>>8&255,255&o,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,255&a,0,0,n>>8&255,255&n,0,0]))},e.traf=function(t,r){var i=e.sdtp(t),a=t.id,n=Math.floor(r/(L+1)),s=Math.floor(r%(L+1));return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,a>>24,a>>16&255,a>>8&255,255&a])),e.box(e.types.tfdt,new Uint8Array([1,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,s>>24,s>>16&255,s>>8&255,255&s])),e.trun(t,i.length+16+20+8+16+8+8),i)},e.trak=function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))},e.trex=function(t){var r=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},e.trun=function(t,r){var i,a,n,s,o,l,d=t.samples||[],u=d.length,c=12+16*u,h=new Uint8Array(c);for(r+=8+c,h.set([0,0,15,1,u>>>24&255,u>>>16&255,u>>>8&255,255&u,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<u;i++)n=(a=d[i]).duration,s=a.size,o=a.flags,l=a.cts,h.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return e.box(e.types.trun,h)},e.initSegment=function(t){e.types||e.init();var r,i=e.moov(t);return(r=new Uint8Array(e.FTYP.byteLength+i.byteLength)).set(e.FTYP),r.set(i,e.FTYP.byteLength),r},e}();function O(e,t,r,i){void 0===r&&(r=1),void 0===i&&(i=!1);var a=e*t*r;return i?Math.round(a):a}function C(e,t){return void 0===t&&(t=!1),O(e,1e3,1/9e4,t)}function I(e,t){return void 0===t&&(t=1),O(e,9e4,1/t)}var P=I(10),x=I(.2),M=null;function F(e,t){var r;if(void 0===t)return e;for(r=t<e?-8589934592:8589934592;Math.abs(e-t)>4294967296;)e+=r;return e}var U,N=function(){function e(e,t,r,i){if(this.observer=e,this.config=t,this.typeSupported=r,this.ISGenerated=!1,null===M){var a=navigator.userAgent.match(/Chrome\/(\d+)/i);M=a?parseInt(a[1]):0}}var t=e.prototype;return t.destroy=function(){},t.resetTimeStamp=function(e){this._initPTS=this._initDTS=e},t.resetInitSegment=function(){this.ISGenerated=!1},t.getVideoStartPts=function(e){var t=!1,r=e.reduce((function(e,r){var i=r.pts-e;return i<-4294967296?(t=!0,e):i>0?e:r.pts}),e[0].pts);return t&&o.b.debug("PTS rollover detected"),r},t.remux=function(e,t,r,a,n,s,l){if(this.ISGenerated||this.generateIS(e,t,n),this.ISGenerated){var d=e.samples.length,u=t.samples.length,c=n,h=n;if(d&&u){var f=this.getVideoStartPts(t.samples),g=(e.samples[0].pts-f)/t.inputTimeScale;c+=Math.max(0,g),h+=Math.max(0,-g)}if(d){e.timescale||(o.b.warn("regenerate InitSegment as audio detected"),this.generateIS(e,t,n));var p,v=this.remuxAudio(e,c,s,l);if(u)v&&(p=v.endPTS-v.startPTS),t.timescale||(o.b.warn("regenerate InitSegment as video detected"),this.generateIS(e,t,n)),this.remuxVideo(t,h,s,p)}else if(u){var m=this.remuxVideo(t,h,s,0,l);m&&e.codec&&this.remuxEmptyAudio(e,c,s,m)}}r.samples.length&&this.remuxID3(r,n),a.samples.length&&this.remuxText(a,n),this.observer.trigger(i.a.FRAG_PARSED)},t.generateIS=function(e,t,r){var n,s,l=this.observer,d=e.samples,u=t.samples,c=this.typeSupported,h="audio/mp4",f={},g={tracks:f},p=void 0===this._initPTS;if(p&&(n=s=1/0),e.config&&d.length&&(e.timescale=e.samplerate,o.b.log("audio sampling rate : "+e.samplerate),e.isAAC||(c.mpeg?(h="audio/mpeg",e.codec=""):c.mp3&&(e.codec="mp3")),f.audio={container:h,codec:e.codec,initSegment:!e.isAAC&&c.mpeg?new Uint8Array:D.initSegment([e]),metadata:{channelCount:e.channelCount}},p&&(n=s=d[0].pts-Math.round(e.inputTimeScale*r))),t.sps&&t.pps&&u.length){var v=t.inputTimeScale;if(t.timescale=v,f.video={container:"video/mp4",codec:t.codec,initSegment:D.initSegment([t]),metadata:{width:t.width,height:t.height}},p){var m=this.getVideoStartPts(u),y=Math.round(v*r);s=Math.min(s,u[0].dts-y),n=Math.min(n,m-y),this.observer.trigger(i.a.INIT_PTS_FOUND,{initPTS:n})}}else p&&f.audio&&this.observer.trigger(i.a.INIT_PTS_FOUND,{initPTS:n});Object.keys(f).length?(l.trigger(i.a.FRAG_PARSING_INIT_SEGMENT,g),this.ISGenerated=!0,p&&(this._initPTS=n,this._initDTS=s)):l.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})},t.remuxVideo=function(e,t,r,n){var s,l,d,u,c,h=e.timescale,f=e.samples,g=[],p=f.length,v=this._initPTS,m=8,y=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY,T=0,E=!1,S=this.nextAvcDts;if(0!==p){if(!r)S=t*h-(f[0].pts-F(f[0].dts,f[0].pts));for(var _=0;_<p;_++){var R=f[_];R.pts=F(R.pts-v,S),R.dts=F(R.dts-v,S),R.dts>R.pts&&(T=Math.max(Math.min(T,R.pts-R.dts),-1*x)),R.dts<f[_>0?_-1:_].dts&&(E=!0)}E&&f.sort((function(e,t){var r=e.dts-t.dts,i=e.pts-t.pts;return r||i||e.id-t.id})),u=f[0].dts,c=f[p-1].dts;var A=Math.round((c-u)/(p-1));if(T<0){if(T<-2*A){o.b.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by "+C(-A,!0)+" ms");for(var k=T,w=0;w<p;w++)f[w].dts=k=Math.max(k,f[w].pts-A),f[w].pts=Math.max(k,f[w].pts)}else{o.b.warn("PTS < DTS detected in video samples, shifting DTS by "+C(T,!0)+" ms to overcome this issue");for(var L=0;L<p;L++)f[L].dts=f[L].dts+T}u=f[0].dts,c=f[p-1].dts}if(r){var O=u-S,I=O>A;if(I||O<-1){I?o.b.warn("AVC: "+C(O,!0)+" ms ("+O+"dts) hole between fragments detected, filling it"):o.b.warn("AVC: "+C(-O,!0)+" ms ("+O+"dts) overlapping between fragments detected"),u=S;var P=f[0].pts-O;f[0].dts=u,f[0].pts=P,o.b.log("Video: First PTS/DTS adjusted: "+C(P,!0)+"/"+C(u,!0)+", delta: "+C(O,!0)+" ms")}}M&&M<75&&(u=Math.max(0,u));for(var U=0,N=0,B=0;B<p;B++){for(var G=f[B],K=G.units,j=K.length,H=0,V=0;V<j;V++)H+=K[V].data.length;N+=H,U+=j,G.length=H,G.dts=Math.max(G.dts,u),G.pts=Math.max(G.pts,G.dts,0),y=Math.min(G.pts,y),b=Math.max(G.pts,b)}c=f[p-1].dts;var Y=N+4*U+8;try{l=new Uint8Array(Y)}catch(e){return void this.observer.trigger(i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:Y,reason:"fail allocating video mdat "+Y})}var W=new DataView(l.buffer);W.setUint32(0,Y),l.set(D.types.mdat,4);for(var q=0;q<p;q++){for(var X,z=f[q],Q=z.units,$=0,J=0,Z=Q.length;J<Z;J++){var ee=Q[J],te=ee.data,re=ee.data.byteLength;W.setUint32(m,re),m+=4,l.set(te,m),m+=re,$+=4+re}if(q<p-1)s=f[q+1].dts-z.dts;else{var ie=this.config,ae=z.dts-f[q>0?q-1:q].dts;if(ie.stretchShortVideoTrack){var ne=ie.maxBufferHole,se=Math.floor(ne*h),oe=(n?y+n*h:this.nextAudioPts)-z.pts;oe>se?((s=oe-ae)<0&&(s=ae),o.b.log("It is approximately "+C(oe,!1)+" ms to the next segment; using duration "+C(s,!1)+" ms for the last video frame.")):s=ae}else s=ae}X=Math.round(z.pts-z.dts),g.push({size:$,duration:s,cts:X,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:z.key?2:1,isNonSync:z.key?0:1}})}this.nextAvcDts=c+s;var le=e.dropped;if(e.nbNalu=0,e.dropped=0,g.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var de=g[0].flags;de.dependsOn=2,de.isNonSync=0}e.samples=g,d=D.moof(e.sequenceNumber++,u,e),e.samples=[];var ue={data1:d,data2:l,startPTS:y/h,endPTS:(b+s)/h,startDTS:u/h,endDTS:this.nextAvcDts/h,type:"video",hasAudio:!1,hasVideo:!0,nb:g.length,dropped:le};return this.observer.trigger(i.a.FRAG_PARSING_DATA,ue),ue}},t.remuxAudio=function(e,t,r,n){var s,l,d,u,c,h,f=e.inputTimeScale,g=e.timescale,p=f/g,v=(e.isAAC?1024:1152)*p,m=this._initPTS,y=!e.isAAC&&this.typeSupported.mpeg,b=y?0:8,T=e.samples,E=[],S=this.nextAudioPts;if(r|=T.length&&S&&(n&&Math.abs(t-S/f)<.1||Math.abs(T[0].pts-S-m)<20*v),T.forEach((function(e){e.pts=e.dts=F(e.pts-m,t*f)})),0!==(T=T.filter((function(e){return e.pts>=0}))).length){if(r||(S=n?Math.max(0,t*f):T[0].pts),e.isAAC)for(var _=this.config.maxAudioFramesDrift,R=0,A=S;R<T.length;){var k=T[R],L=k.pts,O=L-A;if(O<=-_*v)r||R>0?(o.b.warn("Dropping 1 audio frame @ "+C(A,!0)/1e3+"s due to "+C(O,!0)+" ms overlap."),T.splice(R,1)):(o.b.warn("Audio frame @ "+C(L,!0)/1e3+"s overlaps nextAudioPts by "+C(O,!0)+" ms."),A=L+v,R++);else if(O>=_*v&&O<P&&A){var I=Math.round(O/v);o.b.warn("Injecting "+I+" audio frames @ "+C(A,!0)/1e3+"s due to "+C(O,!0)+" ms gap.");for(var x=0;x<I;x++){var M=Math.max(A,0);(l=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(o.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),l=k.unit.subarray()),T.splice(R,0,{unit:l,pts:M,dts:M}),A+=v,R++}k.pts=k.dts=A,A+=v,R++}else Math.abs(O),k.pts=k.dts=A,A+=v,R++}for(var U=T.length,N=0;U--;)N+=T[U].unit.byteLength;for(var B=0,G=T.length;B<G;B++){var K=T[B],j=K.unit,H=K.pts;if(void 0!==h&&s)s.duration=Math.round((H-h)/p);else{var V=H-S,Y=0;if(r&&e.isAAC&&V){if(V>0&&V<P)Y=Math.round((H-S)/v),o.b.log(C(V,!0)+" ms hole between AAC samples detected,filling it"),Y>0&&((l=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(l=j.subarray()),N+=Y*l.length);else if(V<-12){o.b.log("drop overlapping AAC sample, expected/parsed/delta: "+C(S,!0)+" ms / "+C(H,!0)+" ms / "+C(-V,!0)+" ms"),N-=j.byteLength;continue}H=S}if(c=H,!(N>0))return;N+=b;try{d=new Uint8Array(N)}catch(e){return void this.observer.trigger(i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:N,reason:"fail allocating audio mdat "+N})}y||(new DataView(d.buffer).setUint32(0,N),d.set(D.types.mdat,4));for(var W=0;W<Y;W++)(l=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(o.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),l=j.subarray()),d.set(l,b),b+=l.byteLength,s={size:l.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},E.push(s)}d.set(j,b);var q=j.byteLength;b+=q,s={size:q,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},E.push(s),h=H}var X=0;if((U=E.length)>=2&&(X=E[U-2].duration,s.duration=X),U){this.nextAudioPts=S=h+p*X,e.samples=E,u=y?new Uint8Array:D.moof(e.sequenceNumber++,c/p,e),e.samples=[];var z=c/f,Q=S/f,$={data1:u,data2:d,startPTS:z,endPTS:Q,startDTS:z,endDTS:Q,type:"audio",hasAudio:!0,hasVideo:!1,nb:U};return this.observer.trigger(i.a.FRAG_PARSING_DATA,$),$}return null}},t.remuxEmptyAudio=function(e,t,r,i){var a=e.inputTimeScale,n=a/(e.samplerate?e.samplerate:a),s=this.nextAudioPts,l=(void 0!==s?s:i.startDTS*a)+this._initDTS,d=i.endDTS*a+this._initDTS,u=1024*n,c=Math.ceil((d-l)/u),h=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(o.b.warn("remux empty Audio"),h){for(var f=[],g=0;g<c;g++){var p=l+g*u;f.push({unit:h,pts:p,dts:p})}e.samples=f,this.remuxAudio(e,t,r)}else o.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")},t.remuxID3=function(e,t){var r=e.samples.length;if(r){for(var a=e.inputTimeScale,n=this._initPTS,s=this._initDTS,o=0;o<r;o++){var l=e.samples[o];l.pts=F(l.pts-n,t*a)/a,l.dts=F(l.dts-s,t*a)/a}this.observer.trigger(i.a.FRAG_PARSING_METADATA,{samples:e.samples}),e.samples=[]}},t.remuxText=function(e,t){var r=e.samples.length,a=e.inputTimeScale,n=this._initPTS;if(r){for(var s=0;s<r;s++){var o=e.samples[s];o.pts=F(o.pts-n,t*a)/a}e.samples.sort((function(e,t){return e.pts-t.pts})),this.observer.trigger(i.a.FRAG_PARSING_USERDATA,{samples:e.samples})}e.samples=[]},e}(),B=function(){function e(e){this.observer=e}var t=e.prototype;return t.destroy=function(){},t.resetTimeStamp=function(){},t.resetInitSegment=function(){},t.remux=function(e,t,r,a,n,s,o,l){var d=this.observer,u="";e&&(u+="audio"),t&&(u+="video"),d.trigger(i.a.FRAG_PARSING_DATA,{data1:l,startPTS:n,startDTS:n,type:u,hasAudio:!!e,hasVideo:!!t,nb:1,dropped:0}),d.trigger(i.a.FRAG_PARSED)},e}(),G=Object(l.a)();try{U=G.performance.now.bind(G.performance)}catch(e){o.b.debug("Unable to use Performance API on this environment"),U=G.Date.now}var K=function(){function e(e,t,r,i){this.observer=e,this.typeSupported=t,this.config=r,this.vendor=i}var t=e.prototype;return t.destroy=function(){var e=this.demuxer;e&&e.destroy()},t.push=function(e,t,r,a,s,o,l,d,u,c,h,f){var g=this;if(e.byteLength>0&&null!=t&&null!=t.key&&"AES-128"===t.method){var p=this.decrypter;null==p&&(p=this.decrypter=new n.a(this.observer,this.config));var v=U();p.decrypt(e,t.key.buffer,t.iv.buffer,(function(e){var n=U();g.observer.trigger(i.a.FRAG_DECRYPTED,{stats:{tstart:v,tdecrypt:n}}),g.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),a,s,o,l,d,u,c,h,f)}))}else this.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),a,s,o,l,d,u,c,h,f)},t.pushDecrypted=function(e,t,r,n,s,o,l,d,u,c,h,f){var g=this.demuxer,p=this.remuxer;if(!g||l||d){for(var v,m=this.observer,T=this.typeSupported,E=this.config,S=[{demux:A,remux:N},{demux:b.a,remux:B},{demux:y,remux:N},{demux:k,remux:N}],_=0,R=S.length;_<R&&!(v=S[_]).demux.probe(e);_++);if(!v)return void m.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});p&&p instanceof v.remux||(p=new v.remux(m,E,T,this.vendor)),g&&g instanceof v.demux||(g=new v.demux(m,p,E,T),this.probe=v.demux.probe),this.demuxer=g,this.remuxer=p}(l||d)&&(g.resetInitSegment(r,n,s,c),p.resetInitSegment()),l&&(g.resetTimeStamp(f),p.resetTimeStamp(f)),"function"==typeof g.setDecryptData&&g.setDecryptData(t),g.append(e,o,u,h)},e}();t.a=K},function(e,t,r){"use strict";var i=r(0),a=r(1),n=Math.pow(2,32)-1,s=function(){function e(e,t){this.observer=e,this.remuxer=t}var t=e.prototype;return t.resetTimeStamp=function(e){this.initPTS=e},t.resetInitSegment=function(t,r,i,n){if(t&&t.byteLength){var s=this.initData=e.parseInitSegment(t);null==r&&(r="mp4a.40.5"),null==i&&(i="avc1.42e01e");var o={};s.audio&&s.video?o.audiovideo={container:"video/mp4",codec:r+","+i,initSegment:n?t:null}:(s.audio&&(o.audio={container:"audio/mp4",codec:r,initSegment:n?t:null}),s.video&&(o.video={container:"video/mp4",codec:i,initSegment:n?t:null})),this.observer.trigger(a.a.FRAG_PARSING_INIT_SEGMENT,{tracks:o})}else r&&(this.audioCodec=r),i&&(this.videoCodec=i)},e.probe=function(t){return e.findBox({data:t,start:0,end:Math.min(t.length,16384)},["moof"]).length>0},e.bin2str=function(e){return String.fromCharCode.apply(null,e)},e.readUint16=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<8|e[t+1];return r<0?65536+r:r},e.readUint32=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3];return r<0?4294967296+r:r},e.writeUint32=function(e,t,r){e.data&&(t+=e.start,e=e.data),e[t]=r>>24,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r},e.findBox=function(t,r){var i,a,n,s,o,l,d=[];if(t.data?(o=t.start,n=t.end,t=t.data):(o=0,n=t.byteLength),!r.length)return null;for(i=o;i<n;)l=(a=e.readUint32(t,i))>1?i+a:n,e.bin2str(t.subarray(i+4,i+8))===r[0]&&(1===r.length?d.push({data:t,start:i+8,end:l}):(s=e.findBox({data:t,start:i+8,end:l},r.slice(1))).length&&(d=d.concat(s))),i=l;return d},e.parseSegmentIndex=function(t){var r,i=e.findBox(t,["moov"])[0],a=i?i.end:null,n=0,s=e.findBox(t,["sidx"]);if(!s||!s[0])return null;r=[];var o=(s=s[0]).data[0];n=0===o?8:16;var l=e.readUint32(s,n);n+=4;n+=0===o?8:16,n+=2;var d=s.end+0,u=e.readUint16(s,n);n+=2;for(var c=0;c<u;c++){var h=n,f=e.readUint32(s,h);h+=4;var g=2147483647&f;if(1===(2147483648&f)>>>31)return void console.warn("SIDX has hierarchical references (not supported)");var p=e.readUint32(s,h);h+=4,r.push({referenceSize:g,subsegmentDuration:p,info:{duration:p/l,start:d,end:d+g-1}}),d+=g,n=h+=4}return{earliestPresentationTime:0,timescale:l,version:o,referencesCount:u,references:r,moovEndOffset:a}},e.parseInitSegment=function(t){var r=[];return e.findBox(t,["moov","trak"]).forEach((function(t){var a=e.findBox(t,["tkhd"])[0];if(a){var n=a.data[a.start],s=0===n?12:20,o=e.readUint32(a,s),l=e.findBox(t,["mdia","mdhd"])[0];if(l){s=0===(n=l.data[l.start])?12:20;var d=e.readUint32(l,s),u=e.findBox(t,["mdia","hdlr"])[0];if(u){var c={soun:"audio",vide:"video"}[e.bin2str(u.data.subarray(u.start+8,u.start+12))];if(c){var h=e.findBox(t,["mdia","minf","stbl","stsd"]);if(h.length){h=h[0];var f=e.bin2str(h.data.subarray(h.start+12,h.start+16));i.b.log("MP4Demuxer:"+c+":"+f+" found")}r[o]={timescale:d,type:c},r[c]={timescale:d,id:o}}}}}})),r},e.getStartDTS=function(t,r){var i,a,n;return i=e.findBox(r,["moof","traf"]),a=[].concat.apply([],i.map((function(r){return e.findBox(r,["tfhd"]).map((function(i){var a,n;return a=e.readUint32(i,4),n=t[a].timescale||9e4,e.findBox(r,["tfdt"]).map((function(t){var r,i;return r=t.data[t.start],i=e.readUint32(t,4),1===r&&(i*=Math.pow(2,32),i+=e.readUint32(t,8)),i}))[0]/n}))}))),n=Math.min.apply(null,a),isFinite(n)?n:0},e.offsetStartDTS=function(t,r,i){e.findBox(r,["moof","traf"]).map((function(r){return e.findBox(r,["tfhd"]).map((function(a){var s=e.readUint32(a,4),o=t[s].timescale||9e4;e.findBox(r,["tfdt"]).map((function(t){var r=t.data[t.start],a=e.readUint32(t,4);if(0===r)e.writeUint32(t,4,a-i*o);else{a*=Math.pow(2,32),a+=e.readUint32(t,8),a-=i*o,a=Math.max(a,0);var s=Math.floor(a/(n+1)),l=Math.floor(a%(n+1));e.writeUint32(t,4,s),e.writeUint32(t,8,l)}}))}))}))},t.append=function(t,r,i,n){var s=this.initData;s||(this.resetInitSegment(t,this.audioCodec,this.videoCodec,!1),s=this.initData);var o,l=this.initPTS;if(void 0===l){var d=e.getStartDTS(s,t);this.initPTS=l=d-r,this.observer.trigger(a.a.INIT_PTS_FOUND,{initPTS:l})}e.offsetStartDTS(s,t,l),o=e.getStartDTS(s,t),this.remuxer.remux(s.audio,s.video,null,null,o,i,n,t)},t.destroy=function(){},e}();t.a=s},function(e,t,r){function i(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var i=r(r.s=ENTRY_MODULE);return i.default||i}function a(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function n(e,t,i){var n={};n[i]=[];var s=t.toString(),o=s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!o)return n;for(var l,d=o[1],u=new RegExp("(\\\\n|\\W)"+a(d)+"\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g");l=u.exec(s);)"dll-reference"!==l[3]&&n[i].push(l[3]);for(u=new RegExp("\\("+a(d)+'\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g");l=u.exec(s);)e[l[2]]||(n[i].push(l[1]),e[l[2]]=r(l[1]).m),n[l[2]]=n[l[2]]||[],n[l[2]].push(l[4]);for(var c,h=Object.keys(n),f=0;f<h.length;f++)for(var g=0;g<n[h[f]].length;g++)c=n[h[f]][g],isNaN(1*c)||(n[h[f]][g]=1*n[h[f]][g]);return n}function s(e){return Object.keys(e).reduce((function(t,r){return t||e[r].length>0}),!1)}e.exports=function(e,t){t=t||{};var a={main:r.m},o=t.all?{main:Object.keys(a.main)}:function(e,t){for(var r={main:[t]},i={main:[]},a={main:{}};s(r);)for(var o=Object.keys(r),l=0;l<o.length;l++){var d=o[l],u=r[d].pop();if(a[d]=a[d]||{},!a[d][u]&&e[d][u]){a[d][u]=!0,i[d]=i[d]||[],i[d].push(u);for(var c=n(e,e[d][u],d),h=Object.keys(c),f=0;f<h.length;f++)r[h[f]]=r[h[f]]||[],r[h[f]]=r[h[f]].concat(c[h[f]])}}return i}(a,e),l="";Object.keys(o).filter((function(e){return"main"!==e})).forEach((function(e){for(var t=0;o[e][t];)t++;o[e].push(t),a[e][t]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",l=l+"var "+e+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+o[e].map((function(t){return JSON.stringify(t)+": "+a[e][t].toString()})).join(",")+"});\n"})),l=l+"new (("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+o.main.map((function(e){return JSON.stringify(e)+": "+a.main[e].toString()})).join(",")+"}))(self);";var d=new window.Blob([l],{type:"text/javascript"});if(t.bare)return d;var u=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(d),c=new window.Worker(u);return c.objectURL=u,c}},function(e,t,r){"use strict";r.r(t);var i=r(9),a=r(1),n=r(0),s=r(8);t.default=function(e){var t=new s.EventEmitter;t.trigger=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.emit.apply(t,[e,e].concat(i))},t.off=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.removeListener.apply(t,[e].concat(i))};var r=function(t,r){e.postMessage({event:t,data:r})};e.addEventListener("message",(function(a){var s=a.data;switch(s.cmd){case"init":var o=JSON.parse(s.config);e.demuxer=new i.a(t,s.typeSupported,o,s.vendor),Object(n.a)(o.debug),r("init",null);break;case"demux":e.demuxer.push(s.data,s.decryptdata,s.initSegment,s.audioCodec,s.videoCodec,s.timeOffset,s.discontinuity,s.trackSwitch,s.contiguous,s.duration,s.accurateTimeOffset,s.defaultInitPTS)}})),t.on(a.a.FRAG_DECRYPTED,r),t.on(a.a.FRAG_PARSING_INIT_SEGMENT,r),t.on(a.a.FRAG_PARSED,r),t.on(a.a.ERROR,r),t.on(a.a.FRAG_PARSING_METADATA,r),t.on(a.a.FRAG_PARSING_USERDATA,r),t.on(a.a.INIT_PTS_FOUND,r),t.on(a.a.FRAG_PARSING_DATA,(function(t,r){var i=[],a={event:t,data:r};r.data1&&(a.data1=r.data1.buffer,i.push(r.data1.buffer),delete r.data1),r.data2&&(a.data2=r.data2.buffer,i.push(r.data2.buffer),delete r.data2),e.postMessage(a,i)}))}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return nr}));var i={};r.r(i),r.d(i,"newCue",(function(){return ft}));var a,n,s=r(6),o=r(2),l=r(3),d=r(1),u=r(0),c={hlsEventGeneric:!0,hlsHandlerDestroying:!0,hlsHandlerDestroyed:!0},h=function(){function e(e){this.hls=void 0,this.handledEvents=void 0,this.useGenericHandler=void 0,this.hls=e,this.onEvent=this.onEvent.bind(this);for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.handledEvents=r,this.useGenericHandler=!0,this.registerListeners()}var t=e.prototype;return t.destroy=function(){this.onHandlerDestroying(),this.unregisterListeners(),this.onHandlerDestroyed()},t.onHandlerDestroying=function(){},t.onHandlerDestroyed=function(){},t.isEventHandler=function(){return"object"==typeof this.handledEvents&&this.handledEvents.length&&"function"==typeof this.onEvent},t.registerListeners=function(){this.isEventHandler()&&this.handledEvents.forEach((function(e){if(c[e])throw new Error("Forbidden event-name: "+e);this.hls.on(e,this.onEvent)}),this)},t.unregisterListeners=function(){this.isEventHandler()&&this.handledEvents.forEach((function(e){this.hls.off(e,this.onEvent)}),this)},t.onEvent=function(e,t){this.onEventGeneric(e,t)},t.onEventGeneric=function(e,t){try{(function(e,t){var r="on"+e.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,t)}).call(this,e,t).call()}catch(t){u.b.error("An internal error happened while handling event "+e+'. Error message: "'+t.message+'". Here is a stacktrace:',t),this.hls.trigger(d.a.ERROR,{type:o.b.OTHER_ERROR,details:o.a.INTERNAL_EXCEPTION,fatal:!1,event:e,err:t})}},e}();!function(e){e.MANIFEST="manifest",e.LEVEL="level",e.AUDIO_TRACK="audioTrack",e.SUBTITLE_TRACK="subtitleTrack"}(a||(a={})),function(e){e.MAIN="main",e.AUDIO="audio",e.SUBTITLE="subtitle"}(n||(n={}));var f=r(10);function g(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p,v=function(){function e(e,t){this._uri=null,this.baseuri=void 0,this.reluri=void 0,this.method=null,this.key=null,this.iv=null,this.baseuri=e,this.reluri=t}var t,r,i;return t=e,(r=[{key:"uri",get:function(){return!this._uri&&this.reluri&&(this._uri=Object(s.buildAbsoluteURL)(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri}}])&&g(t.prototype,r),i&&g(t,i),e}();function m(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}!function(e){e.AUDIO="audio",e.VIDEO="video"}(p||(p={}));var y=function(){function e(){var e;this._url=null,this._byteRange=null,this._decryptdata=null,this._elementaryStreams=((e={})[p.AUDIO]=!1,e[p.VIDEO]=!1,e),this.deltaPTS=0,this.rawProgramDateTime=null,this.programDateTime=null,this.title=null,this.tagList=[],this.cc=void 0,this.type=void 0,this.relurl=void 0,this.baseurl=void 0,this.duration=void 0,this.start=void 0,this.sn=0,this.urlId=0,this.level=0,this.levelkey=void 0,this.loader=void 0}var t,r,i,a=e.prototype;return a.setByteRange=function(e,t){var r=e.split("@",2),i=[];1===r.length?i[0]=t?t.byteRangeEndOffset:0:i[0]=parseInt(r[1]),i[1]=parseInt(r[0])+i[0],this._byteRange=i},a.addElementaryStream=function(e){this._elementaryStreams[e]=!0},a.hasElementaryStream=function(e){return!0===this._elementaryStreams[e]},a.createInitializationVector=function(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t},a.setDecryptDataFromLevelKey=function(e,t){var r=e;return(null==e?void 0:e.method)&&e.uri&&!e.iv&&((r=new v(e.baseuri,e.reluri)).method=e.method,r.iv=this.createInitializationVector(t)),r},t=e,(r=[{key:"url",get:function(){return!this._url&&this.relurl&&(this._url=Object(s.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(e){this._url=e}},{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var e=this.sn;"number"!=typeof e&&(this.levelkey&&"AES-128"===this.levelkey.method&&!this.levelkey.iv&&u.b.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),e=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,e)}return this._decryptdata}},{key:"endProgramDateTime",get:function(){if(null===this.programDateTime)return null;if(!Object(l.a)(this.programDateTime))return null;var e=Object(l.a)(this.duration)?this.duration:0;return this.programDateTime+1e3*e}},{key:"encrypted",get:function(){return!(!this.decryptdata||null===this.decryptdata.uri||null!==this.decryptdata.key)}}])&&m(t.prototype,r),i&&m(t,i),e}();function b(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var T=function(){function e(e){this.endCC=0,this.endSN=0,this.fragments=[],this.initSegment=null,this.live=!0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=e,this.version=null}var t,r,i;return t=e,(r=[{key:"hasProgramDateTime",get:function(){return!(!this.fragments[0]||!Object(l.a)(this.fragments[0].programDateTime))}}])&&b(t.prototype,r),i&&b(t,i),e}(),E=/^(\d+)x(\d+)$/,S=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,_=function(){function e(t){for(var r in"string"==typeof t&&(t=e.parseAttrList(t)),t)t.hasOwnProperty(r)&&(this[r]=t[r])}var t=e.prototype;return t.decimalInteger=function(e){var t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t},t.hexadecimalInteger=function(e){if(this[e]){var t=(this[e]||"0x").slice(2);t=(1&t.length?"0":"")+t;for(var r=new Uint8Array(t.length/2),i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(2*i,2*i+2),16);return r}return null},t.hexadecimalIntegerAsNumber=function(e){var t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t},t.decimalFloatingPoint=function(e){return parseFloat(this[e])},t.enumeratedString=function(e){return this[e]},t.decimalResolution=function(e){var t=E.exec(this[e]);if(null!==t)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}},e.parseAttrList=function(e){var t,r={};for(S.lastIndex=0;null!==(t=S.exec(e));){var i=t[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[t[1]]=i}return r},e}(),R={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0}};function A(e,t){return MediaSource.isTypeSupported((t||"video")+'/mp4;codecs="'+e+'"')}var k=/(?:#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+)/g,w=/#EXT-X-MEDIA:(.*)/g,L=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)([\S+ ?]+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),D=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,O=/\.(mp4|m4s|m4v|m4a)$/i,C=function(){function e(){}return e.findGroup=function(e,t){for(var r=0;r<e.length;r++){var i=e[r];if(i.id===t)return i}},e.convertAVC1ToAVCOTI=function(e){var t,r=e.split(".");return r.length>2?(t=r.shift()+".",t+=parseInt(r.shift()).toString(16),t+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):t=e,t},e.resolve=function(e,t){return s.buildAbsoluteURL(t,e,{alwaysNormalize:!0})},e.parseMasterPlaylist=function(t,r){var i,a=[],n={},s=!1;function o(e,t){["video","audio"].forEach((function(r){var i=e.filter((function(e){return function(e,t){var r=R[t];return!!r&&!0===r[e.slice(0,4)]}(e,r)}));if(i.length){var a=i.filter((function(e){return 0===e.lastIndexOf("avc1",0)||0===e.lastIndexOf("mp4a",0)}));t[r+"Codec"]=a.length>0?a[0]:i[0],e=e.filter((function(e){return-1===i.indexOf(e)}))}})),t.unknownCodecs=e}for(k.lastIndex=0;null!=(i=k.exec(t));)if(i[1]){var l={},d=l.attrs=new _(i[1]);l.url=e.resolve(i[2],r);var u=d.decimalResolution("RESOLUTION");u&&(l.width=u.width,l.height=u.height),l.bitrate=d.decimalInteger("AVERAGE-BANDWIDTH")||d.decimalInteger("BANDWIDTH"),l.name=d.NAME,o([].concat((d.CODECS||"").split(/[ ,]+/)),l),l.videoCodec&&-1!==l.videoCodec.indexOf("avc1")&&(l.videoCodec=e.convertAVC1ToAVCOTI(l.videoCodec)),a.push(l)}else if(i[3]){var c=new _(i[3]);c["DATA-ID"]&&(s=!0,n[c["DATA-ID"]]=c)}return{levels:a,sessionData:s?n:null}},e.parseMasterPlaylistMedia=function(t,r,i,a){var n;void 0===a&&(a=[]);var s=[],o=0;for(w.lastIndex=0;null!==(n=w.exec(t));){var l=new _(n[1]);if(l.TYPE===i){var d={attrs:l,id:o++,groupId:l["GROUP-ID"],instreamId:l["INSTREAM-ID"],name:l.NAME||l.LANGUAGE,type:i,default:"YES"===l.DEFAULT,autoselect:"YES"===l.AUTOSELECT,forced:"YES"===l.FORCED,lang:l.LANGUAGE};if(l.URI&&(d.url=e.resolve(l.URI,r)),a.length){var u=e.findGroup(a,d.groupId);d.audioCodec=u?u.codec:a[0].codec}s.push(d)}}return s},e.parseLevelPlaylist=function(e,t,r,i,a){var n,s,o,d=0,c=0,h=new T(t),f=0,g=null,p=new y,m=null;for(L.lastIndex=0;null!==(n=L.exec(e));){var b=n[1];if(b){p.duration=parseFloat(b);var E=(" "+n[2]).slice(1);p.title=E||null,p.tagList.push(E?["INF",b,E]:["INF",b])}else if(n[3]){if(Object(l.a)(p.duration)){var S=d++;p.type=i,p.start=c,o&&(p.levelkey=o),p.sn=S,p.level=r,p.cc=f,p.urlId=a,p.baseurl=t,p.relurl=(" "+n[3]).slice(1),I(p,g),h.fragments.push(p),g=p,c+=p.duration,p=new y}}else if(n[4]){var R=(" "+n[4]).slice(1);g?p.setByteRange(R,g):p.setByteRange(R)}else if(n[5])p.rawProgramDateTime=(" "+n[5]).slice(1),p.tagList.push(["PROGRAM-DATE-TIME",p.rawProgramDateTime]),null===m&&(m=h.fragments.length);else{if(!(n=n[0].match(D))){u.b.warn("No matches on slow regex match for level playlist!");continue}for(s=1;s<n.length&&void 0===n[s];s++);var A=(" "+n[s+1]).slice(1),k=(" "+n[s+2]).slice(1);switch(n[s]){case"#":p.tagList.push(k?[A,k]:[A]);break;case"PLAYLIST-TYPE":h.type=A.toUpperCase();break;case"MEDIA-SEQUENCE":d=h.startSN=parseInt(A);break;case"TARGETDURATION":h.targetduration=parseFloat(A);break;case"VERSION":h.version=parseInt(A);break;case"EXTM3U":break;case"ENDLIST":h.live=!1;break;case"DIS":f++,p.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":f=parseInt(A);break;case"KEY":var w=new _(A),C=w.enumeratedString("METHOD"),P=w.URI,x=w.hexadecimalInteger("IV");if("com.apple.streamingkeydelivery"===(w.KEYFORMAT||"identity")){u.b.warn("Keyformat com.apple.streamingkeydelivery is not supported");continue}C&&(o=new v(t,P),P&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(C)>=0&&(o.method=C,o.key=null,o.iv=x));break;case"START":var M=new _(A).decimalFloatingPoint("TIME-OFFSET");Object(l.a)(M)&&(h.startTimeOffset=M);break;case"MAP":var F=new _(A);p.relurl=F.URI,F.BYTERANGE&&p.setByteRange(F.BYTERANGE),p.baseurl=t,p.level=r,p.type=i,p.sn="initSegment",h.initSegment=p,(p=new y).rawProgramDateTime=h.initSegment.rawProgramDateTime;break;default:u.b.warn("line parsed but not handled: "+n)}}}return(p=g)&&!p.relurl&&(h.fragments.pop(),c-=p.duration),h.totalduration=c,h.averagetargetduration=c/h.fragments.length,h.endSN=d-1,h.startCC=h.fragments[0]?h.fragments[0].cc:0,h.endCC=f,!h.initSegment&&h.fragments.length&&h.fragments.every((function(e){return O.test(e.relurl)}))&&(u.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),(p=new y).relurl=h.fragments[0].relurl,p.baseurl=t,p.level=r,p.type=i,p.sn="initSegment",h.initSegment=p,h.needSidxRanges=!0),m&&function(e,t){for(var r=e[t],i=t-1;i>=0;i--){var a=e[i];a.programDateTime=r.programDateTime-1e3*a.duration,r=a}}(h.fragments,m),h},e}();function I(e,t){e.rawProgramDateTime?e.programDateTime=Date.parse(e.rawProgramDateTime):(null==t?void 0:t.programDateTime)&&(e.programDateTime=t.endProgramDateTime),Object(l.a)(e.programDateTime)||(e.programDateTime=null,e.rawProgramDateTime=null)}var P=window.performance,x=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MANIFEST_LOADING,d.a.LEVEL_LOADING,d.a.AUDIO_TRACK_LOADING,d.a.SUBTITLE_TRACK_LOADING)||this).loaders={},r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.canHaveQualityLevels=function(e){return e!==a.AUDIO_TRACK&&e!==a.SUBTITLE_TRACK},i.mapContextToLevelType=function(e){switch(e.type){case a.AUDIO_TRACK:return n.AUDIO;case a.SUBTITLE_TRACK:return n.SUBTITLE;default:return n.MAIN}},i.getResponseUrl=function(e,t){var r=e.url;return void 0!==r&&0!==r.indexOf("data:")||(r=t.url),r};var s=i.prototype;return s.createInternalLoader=function(e){var t=this.hls.config,r=t.pLoader,i=t.loader,a=new(r||i)(t);return e.loader=a,this.loaders[e.type]=a,a},s.getInternalLoader=function(e){return this.loaders[e.type]},s.resetInternalLoader=function(e){this.loaders[e]&&delete this.loaders[e]},s.destroyInternalLoaders=function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}},s.destroy=function(){this.destroyInternalLoaders(),e.prototype.destroy.call(this)},s.onManifestLoading=function(e){this.load({url:e.url,type:a.MANIFEST,level:0,id:null,responseType:"text"})},s.onLevelLoading=function(e){this.load({url:e.url,type:a.LEVEL,level:e.level,id:e.id,responseType:"text"})},s.onAudioTrackLoading=function(e){this.load({url:e.url,type:a.AUDIO_TRACK,level:null,id:e.id,responseType:"text"})},s.onSubtitleTrackLoading=function(e){this.load({url:e.url,type:a.SUBTITLE_TRACK,level:null,id:e.id,responseType:"text"})},s.load=function(e){var t=this.hls.config;u.b.debug("Loading playlist of type "+e.type+", level: "+e.level+", id: "+e.id);var r,i,n,s,o=this.getInternalLoader(e);if(o){var l=o.context;if(l&&l.url===e.url)return u.b.trace("playlist request ongoing"),!1;u.b.warn("aborting previous loader for type: "+e.type),o.abort()}switch(e.type){case a.MANIFEST:r=t.manifestLoadingMaxRetry,i=t.manifestLoadingTimeOut,n=t.manifestLoadingRetryDelay,s=t.manifestLoadingMaxRetryTimeout;break;case a.LEVEL:r=0,s=0,n=0,i=t.levelLoadingTimeOut;break;default:r=t.levelLoadingMaxRetry,i=t.levelLoadingTimeOut,n=t.levelLoadingRetryDelay,s=t.levelLoadingMaxRetryTimeout}o=this.createInternalLoader(e);var d={timeout:i,maxRetry:r,retryDelay:n,maxRetryDelay:s},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};return u.b.debug("Calling internal loader delegate for URL: "+e.url),o.load(e,d,c),!0},s.loadsuccess=function(e,t,r,i){if(void 0===i&&(i=null),r.isSidxRequest)return this._handleSidxRequest(e,r),void this._handlePlaylistLoaded(e,t,r,i);if(this.resetInternalLoader(r.type),"string"!=typeof e.data)throw new Error('expected responseType of "text" for PlaylistLoader');var a=e.data;t.tload=P.now(),0===a.indexOf("#EXTM3U")?a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this._handleTrackOrLevelPlaylist(e,t,r,i):this._handleMasterPlaylist(e,t,r,i):this._handleManifestParsingError(e,r,"no EXTM3U delimiter",i)},s.loaderror=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!1,e)},s.loadtimeout=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!0)},s._handleMasterPlaylist=function(e,t,r,a){var n=this.hls,s=e.data,o=i.getResponseUrl(e,r),l=C.parseMasterPlaylist(s,o),c=l.levels,h=l.sessionData;if(c.length){var f=c.map((function(e){return{id:e.attrs.AUDIO,codec:e.audioCodec}})),g=C.parseMasterPlaylistMedia(s,o,"AUDIO",f),p=C.parseMasterPlaylistMedia(s,o,"SUBTITLES"),v=C.parseMasterPlaylistMedia(s,o,"CLOSED-CAPTIONS");if(g.length){var m=!1;g.forEach((function(e){e.url||(m=!0)})),!1===m&&c[0].audioCodec&&!c[0].attrs.AUDIO&&(u.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),g.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:{},url:""}))}n.trigger(d.a.MANIFEST_LOADED,{levels:c,audioTracks:g,subtitles:p,captions:v,url:o,stats:t,networkDetails:a,sessionData:h})}else this._handleManifestParsingError(e,r,"no level found in manifest",a)},s._handleTrackOrLevelPlaylist=function(e,t,r,n){var s=this.hls,u=r.id,c=r.level,h=r.type,f=i.getResponseUrl(e,r),g=Object(l.a)(u)?u:0,p=Object(l.a)(c)?c:g,v=i.mapContextToLevelType(r),m=C.parseLevelPlaylist(e.data,f,p,v,g);if(m.tload=t.tload,m.fragments.length){if(h===a.MANIFEST){var y={url:f,details:m};s.trigger(d.a.MANIFEST_LOADED,{levels:[y],audioTracks:[],url:f,stats:t,networkDetails:n,sessionData:null})}if(t.tparsed=P.now(),m.needSidxRanges){var b=m.initSegment.url;this.load({url:b,isSidxRequest:!0,type:h,level:c,levelDetails:m,id:u,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer"})}else r.levelDetails=m,this._handlePlaylistLoaded(e,t,r,n)}else s.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.LEVEL_EMPTY_ERROR,fatal:!1,url:f,reason:"no fragments found in level",level:"number"==typeof r.level?r.level:void 0})},s._handleSidxRequest=function(e,t){if("string"==typeof e.data)throw new Error("sidx request must be made with responseType of array buffer");var r=f.a.parseSegmentIndex(new Uint8Array(e.data));if(r){var i=r.references,a=t.levelDetails;i.forEach((function(e,t){var r=e.info;if(a){var i=a.fragments[t];0===i.byteRange.length&&i.setByteRange(String(1+r.end-r.start)+"@"+String(r.start))}})),a&&a.initSegment.setByteRange(String(r.moovEndOffset)+"@0")}},s._handleManifestParsingError=function(e,t,r,i){this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.MANIFEST_PARSING_ERROR,fatal:!0,url:e.url,reason:r,networkDetails:i})},s._handleNetworkError=function(e,t,r,i){var n,s;void 0===r&&(r=!1),void 0===i&&(i=null),u.b.info("A network error occured while loading a "+e.type+"-type playlist");var l=this.getInternalLoader(e);switch(e.type){case a.MANIFEST:n=r?o.a.MANIFEST_LOAD_TIMEOUT:o.a.MANIFEST_LOAD_ERROR,s=!0;break;case a.LEVEL:n=r?o.a.LEVEL_LOAD_TIMEOUT:o.a.LEVEL_LOAD_ERROR,s=!1;break;case a.AUDIO_TRACK:n=r?o.a.AUDIO_TRACK_LOAD_TIMEOUT:o.a.AUDIO_TRACK_LOAD_ERROR,s=!1;break;default:s=!1}l&&(l.abort(),this.resetInternalLoader(e.type));var c={type:o.b.NETWORK_ERROR,details:n,fatal:s,url:e.url,loader:l,context:e,networkDetails:t};i&&(c.response=i),this.hls.trigger(d.a.ERROR,c)},s._handlePlaylistLoaded=function(e,t,r,n){var s=r.type,o=r.level,l=r.id,u=r.levelDetails;if(u&&u.targetduration)if(i.canHaveQualityLevels(r.type))this.hls.trigger(d.a.LEVEL_LOADED,{details:u,level:o||0,id:l||0,stats:t,networkDetails:n});else switch(s){case a.AUDIO_TRACK:this.hls.trigger(d.a.AUDIO_TRACK_LOADED,{details:u,id:l,stats:t,networkDetails:n});break;case a.SUBTITLE_TRACK:this.hls.trigger(d.a.SUBTITLE_TRACK_LOADED,{details:u,id:l,stats:t,networkDetails:n})}else this._handleManifestParsingError(e,r,"invalid target duration",n)},i}(h);var M=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.FRAG_LOADING)||this).loaders={},r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){var t=this.loaders;for(var r in t){var i=t[r];i&&i.destroy()}this.loaders={},e.prototype.destroy.call(this)},a.onFragLoading=function(e){var t=e.frag,r=t.type,i=this.loaders,a=this.hls.config,n=a.fLoader,s=a.loader;t.loaded=0;var o,d,c,h=i[r];h&&(u.b.warn("abort previous fragment loader for type: "+r),h.abort()),h=i[r]=t.loader=a.fLoader?new n(a):new s(a),o={url:t.url,frag:t,responseType:"arraybuffer",progressData:!1};var f=t.byteRangeStartOffset,g=t.byteRangeEndOffset;Object(l.a)(f)&&Object(l.a)(g)&&(o.rangeStart=f,o.rangeEnd=g),d={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},h.load(o,d,c)},a.loadsuccess=function(e,t,r,i){void 0===i&&(i=null);var a=e.data,n=r.frag;n.loader=void 0,this.loaders[n.type]=void 0,this.hls.trigger(d.a.FRAG_LOADED,{payload:a,frag:n,stats:t,networkDetails:i})},a.loaderror=function(e,t,r){void 0===r&&(r=null);var i=t.frag,a=i.loader;a&&a.abort(),this.loaders[i.type]=void 0,this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.FRAG_LOAD_ERROR,fatal:!1,frag:t.frag,response:e,networkDetails:r})},a.loadtimeout=function(e,t,r){void 0===r&&(r=null);var i=t.frag,a=i.loader;a&&a.abort(),this.loaders[i.type]=void 0,this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t.frag,networkDetails:r})},a.loadprogress=function(e,t,r,i){void 0===i&&(i=null);var a=t.frag;a.loaded=e.loaded,this.hls.trigger(d.a.FRAG_LOAD_PROGRESS,{frag:a,stats:e,networkDetails:i})},i}(h);var F=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.KEY_LOADING)||this).loaders={},r.decryptkey=null,r.decrypturl=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){for(var t in this.loaders){var r=this.loaders[t];r&&r.destroy()}this.loaders={},e.prototype.destroy.call(this)},a.onKeyLoading=function(e){var t=e.frag,r=t.type,i=this.loaders[r];if(t.decryptdata){var a=t.decryptdata.uri;if(a!==this.decrypturl||null===this.decryptkey){var n=this.hls.config;if(i&&(u.b.warn("abort previous key loader for type:"+r),i.abort()),!a)return void u.b.warn("key uri is falsy");t.loader=this.loaders[r]=new n.loader(n),this.decrypturl=a,this.decryptkey=null;var s={url:a,frag:t,responseType:"arraybuffer"},o={timeout:n.fragLoadingTimeOut,maxRetry:0,retryDelay:n.fragLoadingRetryDelay,maxRetryDelay:n.fragLoadingMaxRetryTimeout},l={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};t.loader.load(s,o,l)}else this.decryptkey&&(t.decryptdata.key=this.decryptkey,this.hls.trigger(d.a.KEY_LOADED,{frag:t}))}else u.b.warn("Missing decryption data on fragment in onKeyLoading")},a.loadsuccess=function(e,t,r){var i=r.frag;i.decryptdata?(this.decryptkey=i.decryptdata.key=new Uint8Array(e.data),i.loader=void 0,delete this.loaders[i.type],this.hls.trigger(d.a.KEY_LOADED,{frag:i})):u.b.error("after key load, decryptdata unset")},a.loaderror=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.KEY_LOAD_ERROR,fatal:!1,frag:r,response:e})},a.loadtimeout=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},i}(h);var U="NOT_LOADED",N="APPENDING",B="PARTIAL",G="OK",K=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.BUFFER_APPENDED,d.a.FRAG_BUFFERED,d.a.FRAG_LOADED)||this).bufferPadding=.2,r.fragments=Object.create(null),r.timeRanges=Object.create(null),r.config=t.config,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.config=null,h.prototype.destroy.call(this),e.prototype.destroy.call(this)},a.getBufferedFrag=function(e,t){var r=this.fragments,i=Object.keys(r).filter((function(i){var a=r[i];if(a.body.type!==t)return!1;if(!a.buffered)return!1;var n=a.body;return n.startPTS<=e&&e<=n.endPTS}));if(0===i.length)return null;var a=i.pop();return r[a].body},a.detectEvictedFragments=function(e,t){var r=this;Object.keys(this.fragments).forEach((function(i){var a=r.fragments[i];if(a&&a.buffered){var n=a.range[e];if(n)for(var s=n.time,o=0;o<s.length;o++){var l=s[o];if(!r.isTimeBuffered(l.startPTS,l.endPTS,t)){r.removeFragment(a.body);break}}}}))},a.detectPartialFragments=function(e){var t=this,r=this.getFragmentKey(e),i=this.fragments[r];i&&(i.buffered=!0,Object.keys(this.timeRanges).forEach((function(r){if(e.hasElementaryStream(r)){var a=t.timeRanges[r];i.range[r]=t.getBufferedTimes(e.startPTS,e.endPTS,a)}})))},a.getBufferedTimes=function(e,t,r){for(var i,a,n=[],s=!1,o=0;o<r.length;o++){if(i=r.start(o)-this.bufferPadding,a=r.end(o)+this.bufferPadding,e>=i&&t<=a){n.push({startPTS:Math.max(e,r.start(o)),endPTS:Math.min(t,r.end(o))});break}if(e<a&&t>i)n.push({startPTS:Math.max(e,r.start(o)),endPTS:Math.min(t,r.end(o))}),s=!0;else if(t<=i)break}return{time:n,partial:s}},a.getFragmentKey=function(e){return e.type+"_"+e.level+"_"+e.urlId+"_"+e.sn},a.getPartialFragment=function(e){var t,r,i,a=this,n=null,s=0;return Object.keys(this.fragments).forEach((function(o){var l=a.fragments[o];a.isPartial(l)&&(r=l.body.startPTS-a.bufferPadding,i=l.body.endPTS+a.bufferPadding,e>=r&&e<=i&&(t=Math.min(e-r,i-e),s<=t&&(n=l.body,s=t)))})),n},a.getState=function(e){var t=this.getFragmentKey(e),r=this.fragments[t],i=U;return void 0!==r&&(i=r.buffered?!0===this.isPartial(r)?B:G:N),i},a.isPartial=function(e){return!0===e.buffered&&(void 0!==e.range.video&&!0===e.range.video.partial||void 0!==e.range.audio&&!0===e.range.audio.partial)},a.isTimeBuffered=function(e,t,r){for(var i,a,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,e>=i&&t<=a)return!0;if(t<=i)return!1}return!1},a.onFragLoaded=function(e){var t=e.frag;Object(l.a)(t.sn)&&!t.bitrateTest&&(this.fragments[this.getFragmentKey(t)]={body:t,range:Object.create(null),buffered:!1})},a.onBufferAppended=function(e){var t=this;this.timeRanges=e.timeRanges,Object.keys(this.timeRanges).forEach((function(e){var r=t.timeRanges[e];t.detectEvictedFragments(e,r)}))},a.onFragBuffered=function(e){this.detectPartialFragments(e.frag)},a.hasFragment=function(e){var t=this.getFragmentKey(e);return void 0!==this.fragments[t]},a.removeFragment=function(e){var t=this.getFragmentKey(e);delete this.fragments[t]},a.removeAllFragments=function(){this.fragments=Object.create(null)},i}(h),j={search:function(e,t){for(var r=0,i=e.length-1,a=null,n=null;r<=i;){var s=t(n=e[a=(r+i)/2|0]);if(s>0)r=a+1;else{if(!(s<0))return n;i=a-1}}return null}},H=function(){function e(){}return e.isBuffered=function(e,t){try{if(e)for(var r=e.buffered,i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}catch(e){}return!1},e.bufferInfo=function(e,t,r){try{if(e){var i,a=e.buffered,n=[];for(i=0;i<a.length;i++)n.push({start:a.start(i),end:a.end(i)});return this.bufferedInfo(n,t,r)}}catch(e){}return{len:0,start:t,end:t,nextStart:void 0}},e.bufferedInfo=function(e,t,r){e.sort((function(e,t){var r=e.start-t.start;return r||t.end-e.end}));var i=[];if(r)for(var a=0;a<e.length;a++){var n=i.length;if(n){var s=i[n-1].end;e[a].start-s<r?e[a].end>s&&(i[n-1].end=e[a].end):i.push(e[a])}else i.push(e[a])}else i=e;for(var o,l=0,d=t,u=t,c=0;c<i.length;c++){var h=i[c].start,f=i[c].end;if(t+r>=h&&t<f)d=h,l=(u=f)-t;else if(t+r<h){o=h;break}}return{len:l,start:d,end:u,nextStart:o}},e}(),V=r(8),Y=r(11),W=r(9);function q(){return window.MediaSource||window.WebKitMediaSource}var X=r(5);var z=function(e){var t,r;function i(){return e.apply(this,arguments)||this}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.prototype.trigger=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.emit.apply(this,[e,e].concat(r))},i}(V.EventEmitter),Q=Object(X.a)(),$=q()||{isTypeSupported:function(){return!1}},J=function(){function e(e,t){var r=this;this.hls=e,this.id=t;var i=this.observer=new z,a=e.config,n=function(t,i){(i=i||{}).frag=r.frag,i.id=r.id,e.trigger(t,i)};i.on(d.a.FRAG_DECRYPTED,n),i.on(d.a.FRAG_PARSING_INIT_SEGMENT,n),i.on(d.a.FRAG_PARSING_DATA,n),i.on(d.a.FRAG_PARSED,n),i.on(d.a.ERROR,n),i.on(d.a.FRAG_PARSING_METADATA,n),i.on(d.a.FRAG_PARSING_USERDATA,n),i.on(d.a.INIT_PTS_FOUND,n);var s={mp4:$.isTypeSupported("video/mp4"),mpeg:$.isTypeSupported("audio/mpeg"),mp3:$.isTypeSupported('audio/mp4; codecs="mp3"')},l=navigator.vendor;if(a.enableWorker&&"undefined"!=typeof Worker){var c;u.b.log("demuxing in webworker");try{c=this.w=Y(12),this.onwmsg=this.onWorkerMessage.bind(this),c.addEventListener("message",this.onwmsg),c.onerror=function(t){e.trigger(d.a.ERROR,{type:o.b.OTHER_ERROR,details:o.a.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:t.message+" ("+t.filename+":"+t.lineno+")"}})},c.postMessage({cmd:"init",typeSupported:s,vendor:l,id:t,config:JSON.stringify(a)})}catch(e){u.b.warn("Error in worker:",e),u.b.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),c&&Q.URL.revokeObjectURL(c.objectURL),this.demuxer=new W.a(i,s,a,l),this.w=void 0}}else this.demuxer=new W.a(i,s,a,l)}var t=e.prototype;return t.destroy=function(){var e=this.w;if(e)e.removeEventListener("message",this.onwmsg),e.terminate(),this.w=null;else{var t=this.demuxer;t&&(t.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)},t.push=function(e,t,r,i,a,n,s,o){var d=this.w,c=Object(l.a)(a.startPTS)?a.startPTS:a.start,h=a.decryptdata,f=this.frag,g=!(f&&a.cc===f.cc),p=!(f&&a.level===f.level),v=f&&a.sn===f.sn+1,m=!p&&v;if(g&&u.b.log(this.id+":discontinuity detected"),p&&u.b.log(this.id+":switch detected"),this.frag=a,d)d.postMessage({cmd:"demux",data:e,decryptdata:h,initSegment:t,audioCodec:r,videoCodec:i,timeOffset:c,discontinuity:g,trackSwitch:p,contiguous:m,duration:n,accurateTimeOffset:s,defaultInitPTS:o},e instanceof ArrayBuffer?[e]:[]);else{var y=this.demuxer;y&&y.push(e,h,t,r,i,c,g,p,m,n,s,o)}},t.onWorkerMessage=function(e){var t=e.data,r=this.hls;switch(t.event){case"init":Q.URL.revokeObjectURL(this.w.objectURL);break;case d.a.FRAG_PARSING_DATA:t.data.data1=new Uint8Array(t.data1),t.data2&&(t.data.data2=new Uint8Array(t.data2));default:t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data)}},e}();function Z(e,t,r){switch(t){case"audio":e.audioGroupIds||(e.audioGroupIds=[]),e.audioGroupIds.push(r);break;case"text":e.textGroupIds||(e.textGroupIds=[]),e.textGroupIds.push(r)}}function ee(e,t,r){var i=e[t],a=e[r],n=a.startPTS;if(Object(l.a)(n))r>t?(i.duration=n-i.start,i.duration<0&&u.b.warn("negative duration computed for frag "+i.sn+",level "+i.level+", there should be some duration drift between playlist and fragment!")):(a.duration=i.start-n,a.duration<0&&u.b.warn("negative duration computed for frag "+a.sn+",level "+a.level+", there should be some duration drift between playlist and fragment!"));else if(r>t){var s=i.cc===a.cc;a.start=i.start+(s&&i.minEndPTS?i.minEndPTS-i.start:i.duration)}else a.start=Math.max(i.start-a.duration,0)}function te(e,t,r,i,a,n){var s=r,o=i;if(Object(l.a)(t.startPTS)){var d=Math.abs(t.startPTS-r);Object(l.a)(t.deltaPTS)?t.deltaPTS=Math.max(d,t.deltaPTS):t.deltaPTS=d,s=Math.max(r,t.startPTS),r=Math.min(r,t.startPTS),o=Math.min(i,t.endPTS),i=Math.max(i,t.endPTS),a=Math.min(a,t.startDTS),n=Math.max(n,t.endDTS)}var u=r-t.start;t.start=t.startPTS=r,t.maxStartPTS=s,t.endPTS=i,t.minEndPTS=o,t.startDTS=a,t.endDTS=n,t.duration=i-r;var c,h,f,g=t.sn;if(!e||g<e.startSN||g>e.endSN)return 0;for(c=g-e.startSN,(h=e.fragments)[c]=t,f=c;f>0;f--)ee(h,f,f-1);for(f=c;f<h.length-1;f++)ee(h,f,f+1);return e.PTSKnown=!0,u}function re(e,t){t.initSegment&&e.initSegment&&(t.initSegment=e.initSegment);var r,i=0;if(ie(e,t,(function(e,a){i=e.cc-a.cc,Object(l.a)(e.startPTS)&&(a.start=a.startPTS=e.startPTS,a.endPTS=e.endPTS,a.duration=e.duration,a.backtracked=e.backtracked,a.dropped=e.dropped,r=a),t.PTSKnown=!0})),t.PTSKnown){if(i){u.b.log("discontinuity sliding from playlist, take drift into account");for(var a=t.fragments,n=0;n<a.length;n++)a[n].cc+=i}r?te(t,r,r.startPTS,r.endPTS,r.startDTS,r.endDTS):function(e,t){var r=t.startSN-e.startSN,i=e.fragments,a=t.fragments;if(r<0||r>i.length)return;for(var n=0;n<a.length;n++)a[n].start+=i[r].start}(e,t),t.PTSKnown=e.PTSKnown}}function ie(e,t,r){if(e&&t)for(var i=Math.max(e.startSN,t.startSN)-t.startSN,a=Math.min(e.endSN,t.endSN)-t.startSN,n=t.startSN-e.startSN,s=i;s<=a;s++){var o=e.fragments[n+s],l=t.fragments[s];if(!o||!l)break;r(o,l,s)}}function ae(e,t,r){var i=1e3*(t.averagetargetduration?t.averagetargetduration:t.targetduration),a=i/2;return e&&t.endSN===e.endSN&&(i=a),r&&(i=Math.max(a,i-(window.performance.now()-r))),Math.round(i)}var ne={toString:function(e){for(var t="",r=e.length,i=0;i<r;i++)t+="["+e.start(i).toFixed(3)+","+e.end(i).toFixed(3)+"]";return t}};function se(e,t){t.fragments.forEach((function(t){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}})),t.PTSKnown=!0}function oe(e,t,r){!function(e,t,r){if(function(e,t,r){var i=!1;return t&&t.details&&r&&(r.endCC>r.startCC||e&&e.cc<r.startCC)&&(i=!0),i}(e,r,t)){var i=function(e,t){var r=e.fragments,i=t.fragments;if(i.length&&r.length){var a=function(e,t){for(var r=null,i=0;i<e.length;i+=1){var a=e[i];if(a&&a.cc===t){r=a;break}}return r}(r,i[0].cc);if(a&&(!a||a.startPTS))return a;u.b.log("No frag in previous level to align on")}else u.b.log("No fragments to align")}(r.details,t);i&&(u.b.log("Adjusting PTS using last level due to CC increase within current level"),se(i.start,t))}}(e,r,t),!r.PTSKnown&&t&&function(e,t){if(t&&t.fragments.length){if(!e.hasProgramDateTime||!t.hasProgramDateTime)return;var r=t.fragments[0].programDateTime,i=(e.fragments[0].programDateTime-r)/1e3+t.fragments[0].start;Object(l.a)(i)&&(u.b.log("adjusting PTS using programDateTime delta, sliding:"+i.toFixed(3)),se(i,e))}}(r,t.details)}function le(e,t,r){if(null===t||!Array.isArray(e)||!e.length||!Object(l.a)(t))return null;if(t<(e[0].programDateTime||0))return null;if(t>=(e[e.length-1].endProgramDateTime||0))return null;r=r||0;for(var i=0;i<e.length;++i){var a=e[i];if(ce(t,r,a))return a}return null}function de(e,t,r,i){void 0===r&&(r=0),void 0===i&&(i=0);var a=null;if(e?a=t[e.sn-t[0].sn+1]:0===r&&0===t[0].start&&(a=t[0]),a&&0===ue(r,i,a))return a;var n=j.search(t,ue.bind(null,r,i));return n||a}function ue(e,t,r){void 0===e&&(e=0),void 0===t&&(t=0);var i=Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=e?1:r.start-i>e&&r.start?-1:0}function ce(e,t,r){var i=1e3*Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return(r.endProgramDateTime||0)-i>e}var he=function(){function e(e,t,r,i){this.config=e,this.media=t,this.fragmentTracker=r,this.hls=i,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1}var t=e.prototype;return t.poll=function(e){var t=this.config,r=this.media,i=this.stalled,a=r.currentTime,n=r.seeking,s=this.seeking&&!n,o=!this.seeking&&n;if(this.seeking=n,a===e){if((o||s)&&(this.stalled=null),!r.paused&&!r.ended&&0!==r.playbackRate&&r.buffered.length){var l=H.bufferInfo(r,a,0),d=l.len>0,c=l.nextStart||0;if(d||c){if(n){var h=l.len>2,f=!c||c-a>2&&!this.fragmentTracker.getPartialFragment(a);if(h||f)return;this.moved=!1}if(!this.moved&&this.stalled){var g=Math.max(c,l.start||0)-a;if(g>0&&g<=2)return void this._trySkipBufferHole(null)}var p=self.performance.now();if(null!==i){var v=p-i;!n&&v>=250&&this._reportStall(l.len);var m=H.bufferInfo(r,a,t.maxBufferHole);this._tryFixBufferStall(m,v)}else this.stalled=p}}}else if(this.moved=!0,null!==i){if(this.stallReported){var y=self.performance.now()-i;u.b.warn("playback not stuck anymore @"+a+", after "+Math.round(y)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}},t._tryFixBufferStall=function(e,t){var r=this.config,i=this.fragmentTracker,a=this.media.currentTime,n=i.getPartialFragment(a);if(n&&this._trySkipBufferHole(n))return;e.len>r.maxBufferHole&&t>1e3*r.highBufferWatchdogPeriod&&(u.b.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())},t._reportStall=function(e){var t=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,u.b.warn("Playback stalling at @"+r.currentTime+" due to low buffer (buffer="+e+")"),t.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:e}))},t._trySkipBufferHole=function(e){for(var t=this.config,r=this.hls,i=this.media,a=i.currentTime,n=0,s=0;s<i.buffered.length;s++){var l=i.buffered.start(s);if(a+t.maxBufferHole>=n&&a<l){var c=Math.max(l+.05,i.currentTime+.1);return u.b.warn("skipping hole, adjusting currentTime from "+a+" to "+c),this.moved=!0,this.stalled=null,i.currentTime=c,e&&r.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+a+" to "+c,frag:e}),c}n=i.buffered.end(s)}return 0},t._tryNudgeBuffer=function(){var e=this.config,t=this.hls,r=this.media,i=r.currentTime,a=(this.nudgeRetry||0)+1;if(this.nudgeRetry=a,a<e.nudgeMaxRetry){var n=i+a*e.nudgeOffset;u.b.warn("Nudging 'currentTime' from "+i+" to "+n),r.currentTime=n,t.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_NUDGE_ON_STALL,fatal:!1})}else u.b.error("Playhead still not moving while enough data buffered @"+i+" after "+e.nudgeMaxRetry+" nudges"),t.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_STALLED_ERROR,fatal:!0})},e}();function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ge=function(e){var t,r;function i(t){for(var r,i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];return(r=e.call.apply(e,[this,t].concat(a))||this)._boundTick=void 0,r._tickTimer=null,r._tickInterval=null,r._tickCallCount=0,r._boundTick=r.tick.bind(fe(r)),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},a.hasInterval=function(){return!!this._tickInterval},a.hasNextTick=function(){return!!this._tickTimer},a.setInterval=function(e){return!this._tickInterval&&(this._tickInterval=self.setInterval(this._boundTick,e),!0)},a.clearInterval=function(){return!!this._tickInterval&&(self.clearInterval(this._tickInterval),this._tickInterval=null,!0)},a.clearNextTick=function(){return!!this._tickTimer&&(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0)},a.tick=function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&(this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)),this._tickCallCount=0)},a.doTick=function(){},i}(h);var pe="STOPPED",ve="STARTING",me="IDLE",ye="PAUSED",be="KEY_LOADING",Te="FRAG_LOADING",Ee="FRAG_LOADING_WAITING_RETRY",Se="WAITING_TRACK",_e="PARSING",Re="PARSED",Ae="BUFFER_FLUSHING",ke="ENDED",we="ERROR",Le="WAITING_INIT_PTS",De="WAITING_LEVEL",Oe=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.doTick=function(){},a.startLoad=function(){},a.stopLoad=function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragmentTracker.removeFragment(e)),this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=pe},a._streamEnded=function(e,t){var r=this.fragCurrent,i=this.fragmentTracker;if(!t.live&&r&&!r.backtracked&&r.sn===t.endSN&&!e.nextStart){var a=i.getState(r);return a===B||a===G}return!1},a.onMediaSeeking=function(){var e=this.config,t=this.media,r=this.mediaBuffer,i=this.state,a=t?t.currentTime:null,n=H.bufferInfo(r||t,a,this.config.maxBufferHole);if(u.b.log("media seeking to "+(Object(l.a)(a)?a.toFixed(3):a)),i===Te){var s=this.fragCurrent;if(0===n.len&&s){var o=e.maxFragLookUpTolerance,d=s.start-o,c=s.start+s.duration+o;a<d||a>c?(s.loader&&(u.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),s.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=me):u.b.log("seeking outside of buffer but within currently loaded fragment range")}}else i===ke&&(0===n.len&&(this.fragPrevious=null,this.fragCurrent=null),this.state=me);t&&(this.lastCurrentTime=a),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=a),this.tick()},a.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},a.onHandlerDestroying=function(){this.stopLoad(),e.prototype.onHandlerDestroying.call(this)},a.onHandlerDestroyed=function(){this.state=pe,this.fragmentTracker=null},a.computeLivePosition=function(e,t){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,t.totalduration-r)},i}(ge);function Ce(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Ie,Pe=function(e){var t,r;function i(t,r){var i;return(i=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.MANIFEST_LOADING,d.a.MANIFEST_PARSED,d.a.LEVEL_LOADED,d.a.LEVELS_UPDATED,d.a.KEY_LOADED,d.a.FRAG_LOADED,d.a.FRAG_LOAD_EMERGENCY_ABORTED,d.a.FRAG_PARSING_INIT_SEGMENT,d.a.FRAG_PARSING_DATA,d.a.FRAG_PARSED,d.a.ERROR,d.a.AUDIO_TRACK_SWITCHING,d.a.AUDIO_TRACK_SWITCHED,d.a.BUFFER_CREATED,d.a.BUFFER_APPENDED,d.a.BUFFER_FLUSHED)||this).fragmentTracker=r,i.config=t.config,i.audioCodecSwap=!1,i._state=pe,i.stallReported=!1,i.gapController=null,i.altAudio=!1,i.audioOnly=!1,i.bitrateTest=!1,i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,s,c,h=i.prototype;return h.startLoad=function(e){if(this.levels){var t=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(r.config.testBandwidth?(i=0,this.bitrateTest=!0):i=r.nextAutoLevel),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}t>0&&-1===e&&(u.b.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),e=t),this.state=me,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this.forceStartLoad=!0,this.state=pe},h.stopLoad=function(){this.forceStartLoad=!1,e.prototype.stopLoad.call(this)},h.doTick=function(){switch(this.state){case Ae:this.fragLoadError=0;break;case me:this._doTickIdle();break;case De:var e=this.levels[this.level];e&&e.details&&(this.state=me);break;case Ee:var t=window.performance.now(),r=this.retryDate;(!r||t>=r||this.media&&this.media.seeking)&&(u.b.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=me)}this._checkBuffer(),this._checkFragmentChanged()},h._doTickIdle=function(){var e=this.hls,t=e.config,r=this.media;if(void 0!==this.levelLastLoaded&&(r||!this.startFragRequested&&t.startFragPrefetch))if(this.altAudio&&this.audioOnly)this.demuxer.frag=null;else{var i;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=e.nextLoadLevel,n=this.levels[a];if(n){var s,o=n.bitrate;s=o?Math.max(8*t.maxBufferSize/o,t.maxBufferLength):t.maxBufferLength,s=Math.min(s,t.maxMaxBufferLength);var l=i<t.maxBufferHole?Math.max(2,t.maxBufferHole):t.maxBufferHole,c=H.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,l),h=c.len;if(!(h>=s)){u.b.trace("buffer length of "+h.toFixed(3)+" is below max of "+s.toFixed(3)+". checking for more payload ..."),this.level=e.nextLoadLevel=a;var f=n.details;if(!f||f.live&&this.levelLastLoaded!==a)this.state=De;else{if(this._streamEnded(c,f)){var g={};return this.altAudio&&(g.type="video"),this.hls.trigger(d.a.BUFFER_EOS,g),void(this.state=ke)}this._fetchPayloadOrEos(i,c,f)}}}}},h._fetchPayloadOrEos=function(e,t,r){var i=this.fragPrevious,a=(this.level,r.fragments),n=a.length;if(0!==n){var s,o=a[0].start,l=a[n-1].start+a[n-1].duration,d=t.end;if(r.initSegment&&!r.initSegment.data)s=r.initSegment;else if(r.live){var c=this.config.initialLiveManifestSize;if(n<c)return void u.b.warn("Can not start playback of a level, reason: not enough fragments "+n+" < "+c);if(null===(s=this._ensureFragmentAtLivePoint(r,d,o,l,i,a)))return}else d<o&&(s=a[0]);s||(s=this._findFragment(o,i,n,a,d,l,r)),s&&(s.encrypted?this._loadKey(s,r):this._loadFragment(s,r,e,d))}},h._ensureFragmentAtLivePoint=function(e,t,r,i,a,n){var s,o=this.hls.config,d=this.media,c=1/0;if(void 0!==o.liveMaxLatencyDuration?c=o.liveMaxLatencyDuration:Object(l.a)(o.liveMaxLatencyDurationCount)&&(c=o.liveMaxLatencyDurationCount*e.targetduration),t<Math.max(r-o.maxFragLookUpTolerance,i-c)){var h=this.liveSyncPosition=this.computeLivePosition(r,e);t=h,d&&!d.paused&&d.readyState&&d.duration>h&&h>d.currentTime&&(u.b.log("buffer end: "+t.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+h.toFixed(3)),d.currentTime=h),this.nextLoadPosition=h}if(e.PTSKnown&&t>i&&d&&d.readyState)return null;if(this.startFragRequested&&!e.PTSKnown&&a)if(e.hasProgramDateTime)u.b.log("live playlist, switching playlist, load frag with same PDT: "+a.programDateTime),s=le(n,a.endProgramDateTime,o.maxFragLookUpTolerance);else{var f=a.sn+1;if(f>=e.startSN&&f<=e.endSN){var g=n[f-e.startSN];a.cc===g.cc&&(s=g,u.b.log("live playlist, switching playlist, load frag with next SN: "+s.sn))}s||(s=j.search(n,(function(e){return a.cc-e.cc})))&&u.b.log("live playlist, switching playlist, load frag with same CC: "+s.sn)}return s},h._findFragment=function(e,t,r,i,a,n,s){var o,l=this.hls.config;a<n?o=de(t,i,a,a>n-l.maxFragLookUpTolerance?0:l.maxFragLookUpTolerance):o=i[r-1];if(o){var d=o.sn-s.startSN,c=t&&o.level===t.level,h=i[d-1],f=i[d+1];if(t&&o.sn===t.sn)if(c&&!o.backtracked)if(o.sn<s.endSN){var g=t.deltaPTS;g&&g>l.maxBufferHole&&t.dropped&&d?(o=h,u.b.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")):(o=f,this.fragmentTracker.getState(o)!==G&&u.b.log("Re-loading fragment with SN: "+o.sn))}else o=null;else o.backtracked&&(f&&f.backtracked?(u.b.warn("Already backtracked from fragment "+f.sn+", will not backtrack to fragment "+o.sn+". Loading fragment "+f.sn),o=f):(u.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),o.dropped=0,h?(o=h).backtracked=!0:d&&(o=null)))}return o},h._loadKey=function(e,t){u.b.log("Loading key for "+e.sn+" of ["+t.startSN+"-"+t.endSN+"], level "+this.level),this.state=be,this.hls.trigger(d.a.KEY_LOADING,{frag:e})},h._loadFragment=function(e,t,r,i){var a=this.fragmentTracker.getState(e);this.fragCurrent=e,"initSegment"!==e.sn&&(this.startFragRequested=!0),Object(l.a)(e.sn)&&!e.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),e.backtracked||a===U||a===B?(e.autoLevel=this.hls.autoLevelEnabled,e.bitrateTest=this.bitrateTest,u.b.log("Loading "+e.sn+" of ["+t.startSN+"-"+t.endSN+"], level "+this.level+", "+(this.loadedmetadata?"currentTime":"nextLoadPosition")+": "+parseFloat(r.toFixed(3))+", bufferEnd: "+parseFloat(i.toFixed(3))),this.hls.trigger(d.a.FRAG_LOADING,{frag:e}),this.demuxer||(this.demuxer=new J(this.hls,"main")),this.state=Te):a===N&&this._reduceMaxBufferLength(e.duration)&&this.fragmentTracker.removeFragment(e)},h.getBufferedFrag=function(e){return this.fragmentTracker.getBufferedFrag(e,n.MAIN)},h.followingBufferedFrag=function(e){return e?this.getBufferedFrag(e.endPTS+.5):null},h._checkFragmentChanged=function(){var e,t,r=this.media;if(r&&r.readyState&&!1===r.seeking&&((t=r.currentTime)>this.lastCurrentTime&&(this.lastCurrentTime=t),H.isBuffered(r,t)?e=this.getBufferedFrag(t):H.isBuffered(r,t+.1)&&(e=this.getBufferedFrag(t+.1)),e)){var i=e;if(i!==this.fragPlaying){this.hls.trigger(d.a.FRAG_CHANGED,{frag:i});var a=i.level;this.fragPlaying&&this.fragPlaying.level===a||this.hls.trigger(d.a.LEVEL_SWITCHED,{level:a}),this.fragPlaying=i}}},h.immediateLevelSwitch=function(){if(u.b.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var e,t=this.media;t?(e=t.paused)||t.pause():e=!0,this.previouslyPaused=e}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},h.immediateLevelSwitchEnd=function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,e.currentTime>0&&H.isBuffered(e,e.currentTime)&&(e.currentTime-=1e-4),this.previouslyPaused||e.play())},h.nextLevelSwitch=function(){var e=this.media;if(e&&e.readyState){var t,r=this.getBufferedFrag(e.currentTime);if(r&&r.startPTS>1&&this.flushMainBuffer(0,r.startPTS-1),e.paused)t=0;else{var i=this.hls.nextLoadLevel,a=this.levels[i],n=this.fragLastKbps;t=n&&this.fragCurrent?this.fragCurrent.duration*a.bitrate/(1e3*n)+1:0}var s=this.getBufferedFrag(e.currentTime+t);if(s){var o=this.followingBufferedFrag(s);if(o){var l=this.fragCurrent;l&&l.loader&&l.loader.abort(),this.fragCurrent=null;var d=Math.max(s.endPTS,o.maxStartPTS+Math.min(this.config.maxFragLookUpTolerance,o.duration));this.flushMainBuffer(d,Number.POSITIVE_INFINITY)}}}},h.flushMainBuffer=function(e,t){this.state=Ae;var r={startOffset:e,endOffset:t};this.altAudio&&(r.type="video"),this.hls.trigger(d.a.BUFFER_FLUSHING,r)},h.onMediaAttached=function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("seeked",this.onvseeked),t.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition),this.gapController=new he(r,t,this.fragmentTracker,this.hls)},h.onMediaDetaching=function(){var e=this.media;e&&e.ended&&(u.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach((function(e){e.details&&e.details.fragments.forEach((function(e){e.backtracked=void 0}))})),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.fragmentTracker.removeAllFragments(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()},h.onMediaSeeked=function(){var e=this.media,t=e?e.currentTime:void 0;Object(l.a)(t)&&u.b.log("media seeked to "+t.toFixed(3)),this.tick()},h.onManifestLoading=function(){u.b.log("trigger BUFFER_RESET"),this.hls.trigger(d.a.BUFFER_RESET),this.fragmentTracker.removeAllFragments(),this.stalled=!1,this.startPosition=this.lastCurrentTime=0},h.onManifestParsed=function(e){var t,r=!1,i=!1;e.levels.forEach((function(e){(t=e.audioCodec)&&(-1!==t.indexOf("mp4a.40.2")&&(r=!0),-1!==t.indexOf("mp4a.40.5")&&(i=!0))})),this.audioCodecSwitch=r&&i,this.audioCodecSwitch&&u.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.altAudio=e.altAudio,this.levels=e.levels,this.startFragRequested=!1;var a=this.config;(a.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(a.startPosition)},h.onLevelLoaded=function(e){var t=e.details,r=e.level,i=this.levels[this.levelLastLoaded],a=this.levels[r],n=t.totalduration,s=0;if(u.b.log("level "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+n),t.live){var o=a.details;o&&t.fragments.length>0?(re(o,t),s=t.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(s,o),t.PTSKnown&&Object(l.a)(s)?u.b.log("live playlist sliding:"+s.toFixed(3)):(u.b.log("live playlist - outdated PTS, unknown sliding"),oe(this.fragPrevious,i,t))):(u.b.log("live playlist - first load, unknown sliding"),t.PTSKnown=!1,oe(this.fragPrevious,i,t))}else t.PTSKnown=!1;if(a.details=t,this.levelLastLoaded=r,this.hls.trigger(d.a.LEVEL_UPDATED,{details:t,level:r}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var c=t.startTimeOffset;Object(l.a)(c)?(c<0&&(u.b.log("negative start time offset "+c+", count from end of last fragment"),c=s+n+c),u.b.log("start time offset found in playlist, adjust startPosition to "+c),this.startPosition=c):t.live?(this.startPosition=this.computeLivePosition(s,t),u.b.log("configure startPosition to "+this.startPosition)):this.startPosition=0,this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===De&&(this.state=me),this.tick()},h.onKeyLoaded=function(){this.state===be&&(this.state=me,this.tick())},h.onFragLoaded=function(e){var t=this.fragCurrent,r=this.hls,i=this.levels,a=this.media,n=e.frag;if(this.state===Te&&t&&"main"===n.type&&n.level===t.level&&n.sn===t.sn){var s=e.stats,o=i[t.level],l=o.details;if(this.bitrateTest=!1,this.stats=s,u.b.log("Loaded "+t.sn+" of ["+l.startSN+" ,"+l.endSN+"],level "+t.level),n.bitrateTest&&r.nextLoadLevel)this.state=me,this.startFragRequested=!1,s.tparsed=s.tbuffered=window.performance.now(),r.trigger(d.a.FRAG_BUFFERED,{stats:s,frag:t,id:"main"}),this.tick();else if("initSegment"===n.sn)this.state=me,s.tparsed=s.tbuffered=window.performance.now(),l.initSegment.data=e.payload,r.trigger(d.a.FRAG_BUFFERED,{stats:s,frag:t,id:"main"}),this.tick();else{u.b.log("Parsing "+t.sn+" of ["+l.startSN+" ,"+l.endSN+"],level "+t.level+", cc "+t.cc),this.state=_e,this.pendingBuffering=!0,this.appended=!1,n.bitrateTest&&(n.bitrateTest=!1,this.fragmentTracker.onFragLoaded({frag:n}));var c=!(a&&a.seeking)&&(l.PTSKnown||!l.live),h=l.initSegment?l.initSegment.data:[],f=this._getAudioCodec(o);(this.demuxer=this.demuxer||new J(this.hls,"main")).push(e.payload,h,f,o.videoCodec,t,l.totalduration,c)}}this.fragLoadError=0},h.onFragParsingInitSegment=function(e){var t=this.fragCurrent,r=e.frag;if(t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e){var i,a,n=e.tracks;if(this.audioOnly=n.audio&&!n.video,this.altAudio&&!this.audioOnly&&delete n.audio,a=n.audio){var s=this.levels[this.level].audioCodec,o=navigator.userAgent.toLowerCase();s&&this.audioCodecSwap&&(u.b.log("swapping playlist audio codec"),s=-1!==s.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==a.metadata.channelCount&&-1===o.indexOf("firefox")&&(s="mp4a.40.5"),-1!==o.indexOf("android")&&"audio/mpeg"!==a.container&&(s="mp4a.40.2",u.b.log("Android: force audio codec to "+s)),a.levelCodec=s,a.id=e.id}for(i in(a=n.video)&&(a.levelCodec=this.levels[this.level].videoCodec,a.id=e.id),this.hls.trigger(d.a.BUFFER_CODECS,n),n){a=n[i],u.b.log("main track:"+i+",container:"+a.container+",codecs[level/parsed]=["+a.levelCodec+"/"+a.codec+"]");var l=a.initSegment;l&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(d.a.BUFFER_APPENDING,{type:i,data:l,parent:"main",content:"initSegment"}))}this.tick()}},h.onFragParsingData=function(e){var t=this,r=this.fragCurrent,i=e.frag;if(r&&"main"===e.id&&i.sn===r.sn&&i.level===r.level&&("audio"!==e.type||!this.altAudio)&&this.state===_e){var a=this.levels[this.level],n=r;if(Object(l.a)(e.endPTS)||(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),!0===e.hasAudio&&n.addElementaryStream(p.AUDIO),!0===e.hasVideo&&n.addElementaryStream(p.VIDEO),u.b.log("Parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb+",dropped:"+(e.dropped||0)),"video"===e.type)if(n.dropped=e.dropped,n.dropped)if(n.backtracked)u.b.warn("Already backtracked on this fragment, appending with the gap",n.sn);else{var s=a.details;if(!s||n.sn!==s.startSN)return u.b.warn("missing video frame(s), backtracking fragment",n.sn),this.fragmentTracker.removeFragment(n),n.backtracked=!0,this.nextLoadPosition=e.startPTS,this.state=me,this.fragPrevious=n,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),void this.tick();u.b.warn("missing video frame(s) on first frag, appending with gap",n.sn)}else n.backtracked=!1;var o=te(a.details,n,e.startPTS,e.endPTS,e.startDTS,e.endDTS),c=this.hls;c.trigger(d.a.LEVEL_PTS_UPDATED,{details:a.details,level:this.level,drift:o,type:e.type,start:e.startPTS,end:e.endPTS}),[e.data1,e.data2].forEach((function(r){r&&r.length&&t.state===_e&&(t.appended=!0,t.pendingBuffering=!0,c.trigger(d.a.BUFFER_APPENDING,{type:e.type,data:r,parent:"main",content:"data"}))})),this.tick()}},h.onFragParsed=function(e){var t=this.fragCurrent,r=e.frag;t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e&&(this.stats.tparsed=window.performance.now(),this.state=Re,this._checkAppendedParsed())},h.onAudioTrackSwitching=function(e){var t=this.altAudio,r=!!e.url,i=e.id;if(!r){if(this.mediaBuffer!==this.media){u.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var a=this.fragCurrent;a.loader&&(u.b.log("switching to main audio track, cancel main fragment load"),a.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=me}var n=this.hls;t&&n.trigger(d.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),n.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:i})}},h.onAudioTrackSwitched=function(e){var t=e.id,r=!!this.hls.audioTracks[t].url;if(r){var i=this.videoBuffer;i&&this.mediaBuffer!==i&&(u.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()},h.onBufferCreated=function(e){var t,r,i=e.tracks,a=!1;for(var n in i){var s=i[n];"main"===s.id?(r=n,t=s,"video"===n&&(this.videoBuffer=i[n].buffer)):a=!0}a&&t?(u.b.log("alternate track found, use "+r+".buffered to schedule main fragment loading"),this.mediaBuffer=t.buffer):this.mediaBuffer=this.media},h.onBufferAppended=function(e){if("main"===e.parent){var t=this.state;t!==_e&&t!==Re||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}},h._checkAppendedParsed=function(){if(!(this.state!==Re||this.appended&&this.pendingBuffering)){var e=this.fragCurrent;if(e){var t=this.mediaBuffer?this.mediaBuffer:this.media;u.b.log("main buffered : "+ne.toString(t.buffered)),this.fragPrevious=e;var r=this.stats;r.tbuffered=window.performance.now(),this.fragLastKbps=Math.round(8*r.total/(r.tbuffered-r.tfirst)),this.hls.trigger(d.a.FRAG_BUFFERED,{stats:r,frag:e,id:"main"}),this.state=me}(this.loadedmetadata||this.startPosition<=0)&&this.tick()}},h.onError=function(e){var t=e.frag||this.fragCurrent;if(!t||"main"===t.type){var r=!!this.media&&H.isBuffered(this.media,this.media.currentTime)&&H.isBuffered(this.media,this.media.currentTime+.5);switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:case o.a.KEY_LOAD_ERROR:case o.a.KEY_LOAD_TIMEOUT:if(!e.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var i=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);u.b.warn("mediaController: frag loading failed, retry in "+i+" ms"),this.retryDate=window.performance.now()+i,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=Ee}else u.b.error("mediaController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=we;break;case o.a.LEVEL_LOAD_ERROR:case o.a.LEVEL_LOAD_TIMEOUT:this.state!==we&&(e.fatal?(this.state=we,u.b.warn("streamController: "+e.details+",switch to "+this.state+" state ...")):e.levelRetry||this.state!==De||(this.state=me));break;case o.a.BUFFER_FULL_ERROR:"main"!==e.parent||this.state!==_e&&this.state!==Re||(r?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=me):(u.b.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)))}}},h._reduceMaxBufferLength=function(e){var t=this.config;return t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,u.b.warn("main:reduce max buffer length to "+t.maxMaxBufferLength+"s"),!0)},h._checkBuffer=function(){var e=this.media;if(e&&0!==e.readyState){var t=(this.mediaBuffer?this.mediaBuffer:e).buffered;!this.loadedmetadata&&t.length?(this.loadedmetadata=!0,this._seekToStartPos()):this.immediateSwitch?this.immediateLevelSwitchEnd():this.gapController.poll(this.lastCurrentTime,t)}},h.onFragLoadEmergencyAborted=function(){this.state=me,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()},h.onBufferFlushed=function(){var e=this.mediaBuffer?this.mediaBuffer:this.media;if(e){var t=this.audioOnly?p.AUDIO:p.VIDEO;this.fragmentTracker.detectEvictedFragments(t,e.buffered)}this.state=me,this.fragPrevious=null},h.onLevelsUpdated=function(e){this.levels=e.levels},h.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},h._seekToStartPos=function(){var e=this.media,t=e.currentTime,r=this.startPosition;if(t!==r&&r>=0){if(e.seeking)return void u.b.log("could not seek to "+r+", already seeking at "+t);var i=(e.buffered.length?e.buffered.start(0):0)-r;i>0&&i<this.config.maxBufferHole&&(u.b.log("adjusting start position by "+i+" to match buffer start"),r+=i,this.startPosition=r),u.b.log("seek to target start position "+r+" from current time "+t+". ready state "+e.readyState),e.currentTime=r}},h._getAudioCodec=function(e){var t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&(u.b.log("swapping playlist audio codec"),t&&(t=-1!==t.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),t},a=i,(s=[{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,u.b.log("main stream-controller: "+t+"->"+e),this.hls.trigger(d.a.STREAM_STATE_TRANSITION,{previousState:t,nextState:e})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var e=this.media;if(e){var t=this.getBufferedFrag(e.currentTime);if(t)return t.level}return-1}},{key:"nextBufferedFrag",get:function(){var e=this.media;return e?this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)):null}},{key:"nextLevel",get:function(){var e=this.nextBufferedFrag;return e?e.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(e){this._liveSyncPosition=e}}])&&Ce(a.prototype,s),c&&Ce(a,c),i}(Oe);function xe(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Me=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MANIFEST_LOADED,d.a.LEVEL_LOADED,d.a.AUDIO_TRACK_SWITCHED,d.a.FRAG_LOADED,d.a.ERROR)||this).canload=!1,r.currentLevelIndex=null,r.manualLevelIndex=-1,r.timer=null,Ie=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,l=i.prototype;return l.onHandlerDestroying=function(){this.clearTimer(),this.manualLevelIndex=-1},l.clearTimer=function(){null!==this.timer&&(clearTimeout(this.timer),this.timer=null)},l.startLoad=function(){var e=this._levels;this.canload=!0,this.levelRetryCount=0,e&&e.forEach((function(e){e.loadError=0;var t=e.details;t&&t.live&&(e.details=void 0)})),null!==this.timer&&this.loadLevel()},l.stopLoad=function(){this.canload=!1},l.onManifestLoaded=function(e){var t,r=[],i=[],a={},n=null,s=!1,l=!1;if(e.levels.forEach((function(e){var t=e.attrs;e.loadError=0,e.fragmentError=!1,s=s||!!e.videoCodec,l=l||!!e.audioCodec,Ie&&e.audioCodec&&-1!==e.audioCodec.indexOf("mp4a.40.34")&&(e.audioCodec=void 0),(n=a[e.bitrate])?n.url.push(e.url):(e.url=[e.url],e.urlId=0,a[e.bitrate]=e,r.push(e)),t&&(t.AUDIO&&Z(n||e,"audio",t.AUDIO),t.SUBTITLES&&Z(n||e,"text",t.SUBTITLES))})),s&&l&&(r=r.filter((function(e){return!!e.videoCodec}))),r=r.filter((function(e){var t=e.audioCodec,r=e.videoCodec;return(!t||A(t,"audio"))&&(!r||A(r,"video"))})),e.audioTracks&&(i=e.audioTracks.filter((function(e){return!e.audioCodec||A(e.audioCodec,"audio")}))).forEach((function(e,t){e.id=t})),r.length>0){t=r[0].bitrate,r.sort((function(e,t){return e.bitrate-t.bitrate})),this._levels=r;for(var c=0;c<r.length;c++)if(r[c].bitrate===t){this._firstLevel=c,u.b.log("manifest loaded,"+r.length+" level(s) found, first bitrate:"+t);break}var h=l&&!s;this.hls.trigger(d.a.MANIFEST_PARSED,{levels:r,audioTracks:i,firstLevel:this._firstLevel,stats:e.stats,audio:l,video:s,altAudio:!h&&i.some((function(e){return!!e.url}))})}else this.hls.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:this.hls.url,reason:"no level with compatible codecs found in manifest"})},l.setLevelInternal=function(e){var t=this._levels,r=this.hls;if(e>=0&&e<t.length){if(this.clearTimer(),this.currentLevelIndex!==e){u.b.log("switching to level "+e),this.currentLevelIndex=e;var i=t[e];i.level=e,r.trigger(d.a.LEVEL_SWITCHING,i)}var a=t[e],n=a.details;if(!n||n.live){var s=a.urlId;r.trigger(d.a.LEVEL_LOADING,{url:a.url[s],level:e,id:s})}}else r.trigger(d.a.ERROR,{type:o.b.OTHER_ERROR,details:o.a.LEVEL_SWITCH_ERROR,level:e,fatal:!1,reason:"invalid level idx"})},l.onError=function(e){if(e.fatal)e.type===o.b.NETWORK_ERROR&&this.clearTimer();else{var t,r=!1,i=!1;switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:case o.a.KEY_LOAD_ERROR:case o.a.KEY_LOAD_TIMEOUT:t=e.frag.level,i=!0;break;case o.a.LEVEL_LOAD_ERROR:case o.a.LEVEL_LOAD_TIMEOUT:t=e.context.level,r=!0;break;case o.a.REMUX_ALLOC_ERROR:t=e.level,r=!0}void 0!==t&&this.recoverLevel(e,t,r,i)}},l.recoverLevel=function(e,t,r,i){var a,n,s,o=this,l=this.hls.config,d=e.details,c=this._levels[t];if(c.loadError++,c.fragmentError=i,r){if(!(this.levelRetryCount+1<=l.levelLoadingMaxRetry))return u.b.error("level controller, cannot recover from "+d+" error"),this.currentLevelIndex=null,this.clearTimer(),void(e.fatal=!0);n=Math.min(Math.pow(2,this.levelRetryCount)*l.levelLoadingRetryDelay,l.levelLoadingMaxRetryTimeout),this.timer=setTimeout((function(){return o.loadLevel()}),n),e.levelRetry=!0,this.levelRetryCount++,u.b.warn("level controller, "+d+", retry in "+n+" ms, current retry count is "+this.levelRetryCount)}(r||i)&&((a=c.url.length)>1&&c.loadError<a?(c.urlId=(c.urlId+1)%a,c.details=void 0,u.b.warn("level controller, "+d+" for level "+t+": switching to redundant URL-id "+c.urlId)):-1===this.manualLevelIndex?(s=0===t?this._levels.length-1:t-1,u.b.warn("level controller, "+d+": switch to "+s),this.hls.nextAutoLevel=this.currentLevelIndex=s):i&&(u.b.warn("level controller, "+d+": reload a fragment"),this.currentLevelIndex=null))},l.onFragLoaded=function(e){var t=e.frag;if(void 0!==t&&"main"===t.type){var r=this._levels[t.level];void 0!==r&&(r.fragmentError=!1,r.loadError=0,this.levelRetryCount=0)}},l.onLevelLoaded=function(e){var t=this,r=e.level,i=e.details;if(r===this.currentLevelIndex){var a=this._levels[r];if(a.fragmentError||(a.loadError=0,this.levelRetryCount=0),i.live){var n=ae(a.details,i,e.stats.trequest);u.b.log("live playlist, reload in "+Math.round(n)+" ms"),this.timer=setTimeout((function(){return t.loadLevel()}),n)}else this.clearTimer()}},l.onAudioTrackSwitched=function(e){var t=this.hls.audioTracks[e.id].groupId,r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){for(var i=-1,a=0;a<r.audioGroupIds.length;a++)if(r.audioGroupIds[a]===t){i=a;break}i!==r.urlId&&(r.urlId=i,this.startLoad())}},l.loadLevel=function(){if(u.b.debug("call to loadLevel"),null!==this.currentLevelIndex&&this.canload){var e=this._levels[this.currentLevelIndex];if("object"==typeof e&&e.url.length>0){var t=this.currentLevelIndex,r=e.urlId,i=e.url[r];u.b.log("Attempt loading level index "+t+" with URL-id "+r),this.hls.trigger(d.a.LEVEL_LOADING,{url:i,level:t,id:r})}}},l.removeLevel=function(e,t){var r=this.levels.filter((function(r,i){return i!==e||r.url.length>1&&void 0!==t&&(r.url=r.url.filter((function(e,r){return r!==t})),r.urlId=0,!0)})).map((function(e,t){var r=e.details;return r&&r.fragments&&r.fragments.forEach((function(e){e.level=t})),e}));this._levels=r,this.hls.trigger(d.a.LEVELS_UPDATED,{levels:r})},a=i,(n=[{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(e){var t=this._levels;t&&(e=Math.min(e,t.length-1),this.currentLevelIndex===e&&t[e].details||this.setLevelInternal(e))}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(e){this.manualLevelIndex=e,void 0===this._startLevel&&(this._startLevel=e),-1!==e&&(this.level=e)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(e){this._firstLevel=e}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var e=this.hls.config.startLevel;return void 0!==e?e:this._firstLevel}return this._startLevel},set:function(e){this._startLevel=e}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(e){this.level=e,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=e)}}])&&xe(a.prototype,n),s&&xe(a,s),i}(h),Fe=r(4);function Ue(e,t){var r;try{r=new Event("addtrack")}catch(e){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=e,t.dispatchEvent(r)}function Ne(e){if(null==e?void 0:e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[0])}var Be=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.FRAG_PARSING_METADATA,d.a.LIVE_BACK_BUFFER_REACHED)||this).id3Track=void 0,r.media=void 0,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){h.prototype.destroy.call(this)},a.onMediaAttached=function(e){this.media=e.media,this.media},a.onMediaDetaching=function(){Ne(this.id3Track),this.id3Track=void 0,this.media=void 0},a.getID3Track=function(e){for(var t=0;t<e.length;t++){var r=e[t];if("metadata"===r.kind&&"id3"===r.label)return Ue(r,this.media),r}return this.media.addTextTrack("metadata","id3")},a.onFragParsingMetadata=function(e){var t=e.frag,r=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var i=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,a=0;a<r.length;a++){var n=Fe.a.getID3Frames(r[a].data);if(n){var s=Math.max(r[a].pts,0),o=a<r.length-1?r[a+1].pts:t.endPTS;o||(o=t.start+t.duration),o-s<=0&&(o=s+.25);for(var l=0;l<n.length;l++){var d=n[l];if(!Fe.a.isTimeStampFrame(d)){var u=new i(s,o,"");u.value=d,this.id3Track.addCue(u)}}}}},a.onLiveBackBufferReached=function(e){var t=e.bufferEnd,r=this.id3Track;if(r&&r.cues&&r.cues.length){var i=function(e,t){if(t<e[0].endTime)return e[0];if(t>e[e.length-1].endTime)return e[e.length-1];for(var r=0,i=e.length-1;r<=i;){var a=Math.floor((i+r)/2);if(t<e[a].endTime)i=a-1;else{if(!(t>e[a].endTime))return e[a];r=a+1}}return e[r].endTime-t<t-e[i].endTime?e[r]:e[i]}(r.cues,t);if(i)for(;r.cues[0]!==i;)r.removeCue(r.cues[0])}},i}(h);var Ge=function(){function e(e){this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}var t=e.prototype;return t.sample=function(e,t){var r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e},t.getTotalWeight=function(){return this.totalWeight_},t.getEstimate=function(){if(this.alpha_){var e=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/e}return this.estimate_},e}(),Ke=function(){function e(e,t,r,i){this.hls=void 0,this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.hls=e,this.defaultEstimate_=i,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new Ge(t),this.fast_=new Ge(r)}var t=e.prototype;return t.sample=function(e,t){var r=(e=Math.max(e,this.minDelayMs_))/1e3,i=8*t/r;this.fast_.sample(r,i),this.slow_.sample(r,i)},t.canEstimate=function(){var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_},t.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},t.destroy=function(){},e}();function je(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var He=window.performance,Ve=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.FRAG_LOADING,d.a.FRAG_LOADED,d.a.FRAG_BUFFERED,d.a.ERROR)||this).lastLoadedFragLevel=0,r._nextAutoLevel=-1,r.hls=t,r.timer=null,r._bwEstimator=null,r.onCheck=r._abandonRulesCheck.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,c=i.prototype;return c.destroy=function(){this.clearTimer(),h.prototype.destroy.call(this)},c.onFragLoading=function(e){var t=e.frag;if("main"===t.type&&(this.timer||(this.fragCurrent=t,this.timer=setInterval(this.onCheck,100)),!this._bwEstimator)){var r,i,a=this.hls,n=a.config,s=t.level;a.levels[s].details.live?(r=n.abrEwmaFastLive,i=n.abrEwmaSlowLive):(r=n.abrEwmaFastVoD,i=n.abrEwmaSlowVoD),this._bwEstimator=new Ke(a,i,r,n.abrEwmaDefaultEstimate)}},c._abandonRulesCheck=function(){var e=this.hls,t=e.media,r=this.fragCurrent;if(r){var i=r.loader;if(!i||i.stats&&i.stats.aborted)return u.b.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);var a=i.stats;if(t&&a&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&r.autoLevel&&r.level){var n=He.now()-a.trequest,s=Math.abs(t.playbackRate);if(n>500*r.duration/s){var o=e.levels,l=Math.max(1,a.bw?a.bw/8:1e3*a.loaded/n),c=o[r.level];if(!c)return;var h=c.realBitrate?Math.max(c.realBitrate,c.bitrate):c.bitrate,f=a.total?a.total:Math.max(a.loaded,Math.round(r.duration*h/8)),g=t.currentTime,p=(f-a.loaded)/l,v=(H.bufferInfo(t,g,e.config.maxBufferHole).end-g)/s;if(v<2*r.duration/s&&p>v){var m,y=e.minAutoLevel;for(m=r.level-1;m>y;m--){var b=o[m].realBitrate?Math.max(o[m].realBitrate,o[m].bitrate):o[m].bitrate;if(r.duration*b/(6.4*l)<v)break}void 0<p&&(u.b.warn("loading too slow, abort fragment loading and switch to level "+m+":fragLoadedDelay["+m+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+(void 0).toFixed(1)+"<"+p.toFixed(1)+":"+v.toFixed(1)),e.nextLoadLevel=m,this._bwEstimator.sample(n,a.loaded),i.abort(),this.clearTimer(),e.trigger(d.a.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:a}))}}}}},c.onFragLoaded=function(e){var t=e.frag;if("main"===t.type&&Object(l.a)(t.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=t.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var r=this.hls.levels[t.level],i=(r.loaded?r.loaded.bytes:0)+e.stats.loaded,a=(r.loaded?r.loaded.duration:0)+e.frag.duration;r.loaded={bytes:i,duration:a},r.realBitrate=Math.round(8*i/a)}if(e.frag.bitrateTest){var n=e.stats;n.tparsed=n.tbuffered=n.tload,this.onFragBuffered(e)}}},c.onFragBuffered=function(e){var t=e.stats,r=e.frag;if(!0!==t.aborted&&"main"===r.type&&Object(l.a)(r.sn)&&(!r.bitrateTest||t.tload===t.tbuffered)){var i=t.tparsed-t.trequest;u.b.log("latency/loading/parsing/append/kbps:"+Math.round(t.tfirst-t.trequest)+"/"+Math.round(t.tload-t.tfirst)+"/"+Math.round(t.tparsed-t.tload)+"/"+Math.round(t.tbuffered-t.tparsed)+"/"+Math.round(8*t.loaded/(t.tbuffered-t.trequest))),this._bwEstimator.sample(i,t.loaded),t.bwEstimate=this._bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=i/1e3:this.bitrateTestDelay=0}},c.onError=function(e){switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:this.clearTimer()}},c.clearTimer=function(){clearInterval(this.timer),this.timer=null},c._findBestLevel=function(e,t,r,i,a,n,s,o,l){for(var d=a;d>=i;d--){var c=l[d];if(c){var h=c.details,f=h?h.totalduration/h.fragments.length:t,g=!!h&&h.live,p=void 0;p=d<=e?s*r:o*r;var v=l[d].realBitrate?Math.max(l[d].realBitrate,l[d].bitrate):l[d].bitrate,m=v*f/p;if(u.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+d+"/"+Math.round(p)+"/"+v+"/"+f+"/"+n+"/"+m),p>v&&(!m||g&&!this.bitrateTestDelay||m<n))return d}}return-1},a=i,(n=[{key:"nextAutoLevel",get:function(){var e=this._nextAutoLevel,t=this._bwEstimator;if(!(-1===e||t&&t.canEstimate()))return e;var r=this._nextABRAutoLevel;return-1!==e&&(r=Math.min(e,r)),r},set:function(e){this._nextAutoLevel=e}},{key:"_nextABRAutoLevel",get:function(){var e=this.hls,t=e.maxAutoLevel,r=e.levels,i=e.config,a=e.minAutoLevel,n=e.media,s=this.lastLoadedFragLevel,o=this.fragCurrent?this.fragCurrent.duration:0,l=n?n.currentTime:0,d=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,c=this._bwEstimator?this._bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,h=(H.bufferInfo(n,l,i.maxBufferHole).end-l)/d,f=this._findBestLevel(s,o,c,a,t,h,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(f>=0)return f;u.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var g=o?Math.min(o,i.maxStarvationDelay):i.maxStarvationDelay,p=i.abrBandWidthFactor,v=i.abrBandWidthUpFactor;if(0===h){var m=this.bitrateTestDelay;m&&(g=(o?Math.min(o,i.maxLoadingDelay):i.maxLoadingDelay)-m,u.b.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*g)+" ms"),p=v=1)}return f=this._findBestLevel(s,o,c,a,t,h+g,p,v,r),Math.max(f,0)}}])&&je(a.prototype,n),s&&je(a,s),i}(h);var Ye=q(),We=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MEDIA_ATTACHING,d.a.MEDIA_DETACHING,d.a.MANIFEST_PARSED,d.a.BUFFER_RESET,d.a.BUFFER_APPENDING,d.a.BUFFER_CODECS,d.a.BUFFER_EOS,d.a.BUFFER_FLUSHING,d.a.LEVEL_PTS_UPDATED,d.a.LEVEL_UPDATED)||this)._msDuration=null,r._levelDuration=null,r._levelTargetDuration=10,r._live=null,r._objectUrl=null,r._needsFlush=!1,r._needsEos=!1,r.config=void 0,r.audioTimestampOffset=void 0,r.bufferCodecEventsExpected=0,r._bufferCodecEventsTotal=0,r.media=null,r.mediaSource=null,r.segments=[],r.parent=void 0,r.appending=!1,r.appended=0,r.appendError=0,r.flushBufferCounter=0,r.tracks={},r.pendingTracks={},r.sourceBuffer={},r.flushRange=[],r._onMediaSourceOpen=function(){u.b.log("media source opened"),r.hls.trigger(d.a.MEDIA_ATTACHED,{media:r.media});var e=r.mediaSource;e&&e.removeEventListener("sourceopen",r._onMediaSourceOpen),r.checkPendingTracks()},r._onMediaSourceClose=function(){u.b.log("media source closed")},r._onMediaSourceEnded=function(){u.b.log("media source ended")},r._onSBUpdateEnd=function(){if(r.audioTimestampOffset&&r.sourceBuffer.audio){var e=r.sourceBuffer.audio;u.b.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+r.audioTimestampOffset),e.timestampOffset=r.audioTimestampOffset,delete r.audioTimestampOffset}r._needsFlush&&r.doFlush(),r._needsEos&&r.checkEos(),r.appending=!1;var t=r.parent,i=r.segments.reduce((function(e,r){return r.parent===t?e+1:e}),0),a={},n=r.sourceBuffer;for(var s in n){var o=n[s];if(!o)throw Error("handling source buffer update end error: source buffer for "+s+" uninitilized and unable to update buffered TimeRanges.");a[s]=o.buffered}r.hls.trigger(d.a.BUFFER_APPENDED,{parent:t,pending:i,timeRanges:a}),r._needsFlush||r.doAppending(),r.updateMediaElementDuration(),0===i&&r.flushLiveBackBuffer()},r._onSBUpdateError=function(e){u.b.error("sourceBuffer error:",e),r.hls.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_APPENDING_ERROR,fatal:!1})},r.config=t.config,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){h.prototype.destroy.call(this)},a.onLevelPtsUpdated=function(e){var t=e.type,r=this.tracks.audio;if("audio"===t&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio;if(!i)throw Error("Level PTS Updated and source buffer for audio uninitalized");if(Math.abs(i.timestampOffset-e.start)>.1){var a=i.updating;try{i.abort()}catch(e){u.b.warn("can not abort audio buffer: "+e)}a?this.audioTimestampOffset=e.start:(u.b.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+e.start),i.timestampOffset=e.start)}}},a.onManifestParsed=function(e){var t=2;(e.audio&&!e.video||!e.altAudio)&&(t=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=t,u.b.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},a.onMediaAttaching=function(e){var t=this.media=e.media;if(t&&Ye){var r=this.mediaSource=new Ye;r.addEventListener("sourceopen",this._onMediaSourceOpen),r.addEventListener("sourceended",this._onMediaSourceEnded),r.addEventListener("sourceclose",this._onMediaSourceClose),t.src=window.URL.createObjectURL(r),this._objectUrl=t.src}},a.onMediaDetaching=function(){u.b.log("media source detaching");var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){u.b.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener("sourceopen",this._onMediaSourceOpen),e.removeEventListener("sourceended",this._onMediaSourceEnded),e.removeEventListener("sourceclose",this._onMediaSourceClose),this.media&&(this._objectUrl&&window.URL.revokeObjectURL(this._objectUrl),this.media.src===this._objectUrl?(this.media.removeAttribute("src"),this.media.load()):u.b.warn("media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.hls.trigger(d.a.MEDIA_DETACHED)},a.checkPendingTracks=function(){var e=this.bufferCodecEventsExpected,t=this.pendingTracks,r=Object.keys(t).length;(r&&!e||2===r)&&(this.createSourceBuffers(t),this.pendingTracks={},this.doAppending())},a.onBufferReset=function(){var e=this.sourceBuffer;for(var t in e){var r=e[t];try{r&&(this.mediaSource&&this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this._onSBUpdateEnd),r.removeEventListener("error",this._onSBUpdateError))}catch(e){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0},a.onBufferCodecs=function(e){var t=this;Object.keys(this.sourceBuffer).length||(Object.keys(e).forEach((function(r){t.pendingTracks[r]=e[r]})),this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&"open"===this.mediaSource.readyState&&this.checkPendingTracks())},a.createSourceBuffers=function(e){var t=this.sourceBuffer,r=this.mediaSource;if(!r)throw Error("createSourceBuffers called when mediaSource was null");for(var i in e)if(!t[i]){var a=e[i];if(!a)throw Error("source buffer exists for track "+i+", however track does not");var n=a.levelCodec||a.codec,s=a.container+";codecs="+n;u.b.log("creating sourceBuffer("+s+")");try{var l=t[i]=r.addSourceBuffer(s);l.addEventListener("updateend",this._onSBUpdateEnd),l.addEventListener("error",this._onSBUpdateError),this.tracks[i]={buffer:l,codec:n,id:a.id,container:a.container,levelCodec:a.levelCodec}}catch(e){u.b.error("error while trying to add sourceBuffer:"+e.message),this.hls.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:e,mimeType:s})}}this.hls.trigger(d.a.BUFFER_CREATED,{tracks:this.tracks})},a.onBufferAppending=function(e){this._needsFlush||(this.segments?this.segments.push(e):this.segments=[e],this.doAppending())},a.onBufferEos=function(e){for(var t in this.sourceBuffer)if(!e.type||e.type===t){var r=this.sourceBuffer[t];r&&!r.ended&&(r.ended=!0,u.b.log(t+" sourceBuffer now EOS"))}this.checkEos()},a.checkEos=function(){var e=this.sourceBuffer,t=this.mediaSource;if(t&&"open"===t.readyState){for(var r in e){var i=e[r];if(i){if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}}u.b.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){u.b.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}else this._needsEos=!1},a.onBufferFlushing=function(e){e.type?this.flushRange.push({start:e.startOffset,end:e.endOffset,type:e.type}):(this.flushRange.push({start:e.startOffset,end:e.endOffset,type:"video"}),this.flushRange.push({start:e.startOffset,end:e.endOffset,type:"audio"})),this.flushBufferCounter=0,this.doFlush()},a.flushLiveBackBuffer=function(){if(this._live){var e=this.config.liveBackBufferLength;if(isFinite(e)&&!(e<0))if(this.media)for(var t=this.media.currentTime,r=this.sourceBuffer,i=Object.keys(r),a=t-Math.max(e,this._levelTargetDuration),n=i.length-1;n>=0;n--){var s=i[n],o=r[s];if(o){var l=o.buffered;l.length>0&&a>l.start(0)&&this.removeBufferRange(s,o,0,a)&&this.hls.trigger(d.a.LIVE_BACK_BUFFER_REACHED,{bufferEnd:a})}}else u.b.error("flushLiveBackBuffer called without attaching media")}},a.onLevelUpdated=function(e){var t=e.details;t.fragments.length>0&&(this._levelDuration=t.totalduration+t.fragments[0].start,this._levelTargetDuration=t.averagetargetduration||t.targetduration||10,this._live=t.live,this.updateMediaElementDuration())},a.updateMediaElementDuration=function(){var e,t=this.config;if(null!==this._levelDuration&&this.media&&this.mediaSource&&this.sourceBuffer&&0!==this.media.readyState&&"open"===this.mediaSource.readyState){for(var r in this.sourceBuffer){var i=this.sourceBuffer[r];if(i&&!0===i.updating)return}e=this.media.duration,null===this._msDuration&&(this._msDuration=this.mediaSource.duration),!0===this._live&&!0===t.liveDurationInfinity?(u.b.log("Media Source duration is set to Infinity"),this._msDuration=this.mediaSource.duration=1/0):(this._levelDuration>this._msDuration&&this._levelDuration>e||!Object(l.a)(e))&&(u.b.log("Updating Media Source duration to "+this._levelDuration.toFixed(3)),this._msDuration=this.mediaSource.duration=this._levelDuration)}},a.doFlush=function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var i in r){var a=r[i];a&&(t+=a.buffered.length)}}catch(e){u.b.error("error while accessing sourceBuffer.buffered")}this.appended=t,this.hls.trigger(d.a.BUFFER_FLUSHED)}},a.doAppending=function(){var e=this.config,t=this.hls,r=this.segments,i=this.sourceBuffer;if(Object.keys(i).length){if(!this.media||this.media.error)return this.segments=[],void u.b.error("trying to append although a media error occured, flush segment and abort");if(!this.appending){var a=r.shift();if(a)try{var n=i[a.type];if(!n)return void this._onSBUpdateEnd();if(n.updating)return void r.unshift(a);n.ended=!1,this.parent=a.parent,n.appendBuffer(a.data),this.appendError=0,this.appended++,this.appending=!0}catch(i){u.b.error("error while trying to append buffer:"+i.message),r.unshift(a);var s={type:o.b.MEDIA_ERROR,parent:a.parent,details:"",fatal:!1};22===i.code?(this.segments=[],s.details=o.a.BUFFER_FULL_ERROR):(this.appendError++,s.details=o.a.BUFFER_APPEND_ERROR,this.appendError>e.appendErrorMaxRetry&&(u.b.log("fail "+e.appendErrorMaxRetry+" times to append segment in sourceBuffer"),this.segments=[],s.fatal=!0)),t.trigger(d.a.ERROR,s)}}}},a.flushBuffer=function(e,t,r){var i=this.sourceBuffer;if(!Object.keys(i).length)return!0;var a="null";if(this.media&&(a=this.media.currentTime.toFixed(3)),u.b.log("flushBuffer,pos/start/end: "+a+"/"+e+"/"+t),this.flushBufferCounter>=this.appended)return u.b.warn("abort flushing too many retries"),!0;var n=i[r];if(n){if(n.ended=!1,n.updating)return u.b.warn("cannot flush, sb updating in progress"),!1;if(this.removeBufferRange(r,n,e,t))return this.flushBufferCounter++,!1}return u.b.log("buffer flushed"),!0},a.removeBufferRange=function(e,t,r,i){try{for(var a=0;a<t.buffered.length;a++){var n=t.buffered.start(a),s=t.buffered.end(a),o=Math.max(n,r),l=Math.min(s,i);if(Math.min(l,s)-o>.5){var d="null";return this.media&&(d=this.media.currentTime.toString()),u.b.log("sb remove "+e+" ["+o+","+l+"], of ["+n+","+s+"], pos:"+d),t.remove(o,l),!0}}}catch(e){u.b.warn("removeBufferRange failed",e)}return!1},i}(h);function qe(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Xe=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.FPS_DROP_LEVEL_CAPPING,d.a.MEDIA_ATTACHING,d.a.MANIFEST_PARSED,d.a.LEVELS_UPDATED,d.a.BUFFER_CODECS,d.a.MEDIA_DETACHING)||this).autoLevelCapping=Number.POSITIVE_INFINITY,r.firstLevel=null,r.levels=[],r.media=null,r.restrictedLevels=[],r.timer=null,r.clientRect=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,o=i.prototype;return o.destroy=function(){this.hls.config.capLevelToPlayerSize&&(this.media=null,this.clientRect=null,this.stopCapping())},o.onFpsDropLevelCapping=function(e){i.isLevelAllowed(e.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(e.droppedLevel)},o.onMediaAttaching=function(e){this.media=e.media instanceof window.HTMLVideoElement?e.media:null},o.onManifestParsed=function(e){var t=this.hls;this.restrictedLevels=[],this.levels=e.levels,this.firstLevel=e.firstLevel,t.config.capLevelToPlayerSize&&e.video&&this.startCapping()},o.onBufferCodecs=function(e){this.hls.config.capLevelToPlayerSize&&e.video&&this.startCapping()},o.onLevelsUpdated=function(e){this.levels=e.levels},o.onMediaDetaching=function(){this.stopCapping()},o.detectPlayerSize=function(){if(this.media){var e=this.levels?this.levels.length:0;if(e){var t=this.hls;t.autoLevelCapping=this.getMaxLevel(e-1),t.autoLevelCapping>this.autoLevelCapping&&t.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}},o.getMaxLevel=function(e){var t=this;if(!this.levels)return-1;var r=this.levels.filter((function(r,a){return i.isLevelAllowed(a,t.restrictedLevels)&&a<=e}));return this.clientRect=null,i.getMaxLevelByMediaSize(r,this.mediaWidth,this.mediaHeight)},o.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},o.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer),this.timer=null)},o.getDimensions=function(){if(this.clientRect)return this.clientRect;var e=this.media,t={width:0,height:0};if(e){var r=e.getBoundingClientRect();t.width=r.width,t.height=r.height,t.width||t.height||(t.width=r.right-r.left||e.width||0,t.height=r.bottom-r.top||e.height||0)}return this.clientRect=t,t},i.isLevelAllowed=function(e,t){return void 0===t&&(t=[]),-1===t.indexOf(e)},i.getMaxLevelByMediaSize=function(e,t,r){if(!e||e&&!e.length)return-1;for(var i,a,n=e.length-1,s=0;s<e.length;s+=1){var o=e[s];if((o.width>=t||o.height>=r)&&(i=o,!(a=e[s+1])||i.width!==a.width||i.height!==a.height)){n=s;break}}return n},a=i,s=[{key:"contentScaleFactor",get:function(){var e=1;try{e=window.devicePixelRatio}catch(e){}return e}}],(n=[{key:"mediaWidth",get:function(){return this.getDimensions().width*i.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*i.contentScaleFactor}}])&&qe(a.prototype,n),s&&qe(a,s),i}(h);var ze=window.performance,Qe=function(e){var t,r;function i(t){return e.call(this,t,d.a.MEDIA_ATTACHING)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1},a.onMediaAttaching=function(e){var t=this.hls.config;t.capLevelOnFPSDrop&&("function"==typeof(this.video=e.media instanceof window.HTMLVideoElement?e.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),t.fpsDroppedMonitoringPeriod))},a.checkFPS=function(e,t,r){var i=ze.now();if(t){if(this.lastTime){var a=i-this.lastTime,n=r-this.lastDroppedFrames,s=t-this.lastDecodedFrames,o=1e3*n/a,l=this.hls;if(l.trigger(d.a.FPS_DROP,{currentDropped:n,currentDecoded:s,totalDroppedFrames:r}),o>0&&n>l.config.fpsDroppedMonitoringThreshold*s){var c=l.currentLevel;u.b.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(-1===l.autoLevelCapping||l.autoLevelCapping>=c)&&(c-=1,l.trigger(d.a.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:l.currentLevel}),l.autoLevelCapping=c,l.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}},a.checkFPSInterval=function(){var e=this.video;if(e)if(this.isVideoPlaybackQualityAvailable){var t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)},i}(h),$e=function(){function e(e){e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}var t=e.prototype;return t.destroy=function(){this.abort(),this.loader=null},t.abort=function(){var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null},t.load=function(e,t,r){this.context=e,this.config=t,this.callbacks=r,this.stats={trequest:window.performance.now(),retry:0},this.retryDelay=t.retryDelay,this.loadInternal()},t.loadInternal=function(){var e,t=this.context;e=this.loader=new window.XMLHttpRequest;var r=this.stats;r.tfirst=0,r.loaded=0;var i=this.xhrSetup;try{if(i)try{i(e,t.url)}catch(r){e.open("GET",t.url,!0),i(e,t.url)}e.readyState||e.open("GET",t.url,!0)}catch(r){return void this.callbacks.onError({code:e.status,text:r.message},t,e)}t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),e.send()},t.readystatechange=function(e){var t=e.currentTarget,r=t.readyState,i=this.stats,a=this.context,n=this.config;if(!i.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===i.tfirst&&(i.tfirst=Math.max(window.performance.now(),i.trequest)),4===r){var s=t.status;if(s>=200&&s<300){var o,l;i.tload=Math.max(i.tfirst,window.performance.now()),l="arraybuffer"===a.responseType?(o=t.response).byteLength:(o=t.responseText).length,i.loaded=i.total=l;var d={url:t.responseURL,data:o};this.callbacks.onSuccess(d,i,a,t)}else i.retry>=n.maxRetry||s>=400&&s<499?(u.b.error(s+" while loading "+a.url),this.callbacks.onError({code:s,text:t.statusText},a,t)):(u.b.warn(s+" while loading "+a.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,n.maxRetryDelay),i.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),n.timeout)},t.loadtimeout=function(){u.b.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)},t.loadprogress=function(e){var t=e.currentTarget,r=this.stats;r.loaded=e.loaded,e.lengthComputable&&(r.total=e.total);var i=this.callbacks.onProgress;i&&i(r,this.context,null,t)},e}();function Je(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Ze=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MANIFEST_LOADING,d.a.MANIFEST_PARSED,d.a.AUDIO_TRACK_LOADED,d.a.AUDIO_TRACK_SWITCHED,d.a.LEVEL_LOADED,d.a.ERROR)||this)._trackId=-1,r._selectDefaultTrack=!0,r.tracks=[],r.trackIdBlacklist=Object.create(null),r.audioGroupId=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,l=i.prototype;return l.onManifestLoading=function(){this.tracks=[],this._trackId=-1,this._selectDefaultTrack=!0},l.onManifestParsed=function(e){var t=this.tracks=e.audioTracks||[];this.hls.trigger(d.a.AUDIO_TRACKS_UPDATED,{audioTracks:t}),this._selectAudioGroup(this.hls.nextLoadLevel)},l.onAudioTrackLoaded=function(e){if(e.id>=this.tracks.length)u.b.warn("Invalid audio track id:",e.id);else{if(u.b.log("audioTrack "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.hasInterval()){var t=1e3*e.details.targetduration;this.setInterval(t)}!e.details.live&&this.hasInterval()&&this.clearInterval()}},l.onAudioTrackSwitched=function(e){var t=this.tracks[e.id].groupId;t&&this.audioGroupId!==t&&(this.audioGroupId=t)},l.onLevelLoaded=function(e){this._selectAudioGroup(e.level)},l.onError=function(e){e.type===o.b.NETWORK_ERROR&&(e.fatal&&this.clearInterval(),e.details===o.a.AUDIO_TRACK_LOAD_ERROR&&(u.b.warn("Network failure on audio-track id:",e.context.id),this._handleLoadError()))},l._setAudioTrack=function(e){if(this._trackId===e&&this.tracks[this._trackId].details)u.b.debug("Same id as current audio-track passed, and track details available -> no-op");else if(e<0||e>=this.tracks.length)u.b.warn("Invalid id passed to audio-track controller");else{var t=this.tracks[e];u.b.log("Now switching to audio-track index "+e),this.clearInterval(),this._trackId=e;var r=t.url,i=t.type,a=t.id;this.hls.trigger(d.a.AUDIO_TRACK_SWITCHING,{id:a,type:i,url:r}),this._loadTrackDetailsIfNeeded(t)}},l.doTick=function(){this._updateTrack(this._trackId)},l._selectAudioGroup=function(e){var t=this.hls.levels[e];if(t&&t.audioGroupIds){var r=t.audioGroupIds[t.urlId];this.audioGroupId!==r&&(this.audioGroupId=r,this._selectInitialAudioTrack())}},l._selectInitialAudioTrack=function(){var e=this,t=this.tracks;if(t.length){var r=this.tracks[this._trackId],i=null;if(r&&(i=r.name),this._selectDefaultTrack){var a=t.filter((function(e){return e.default}));a.length?t=a:u.b.warn("No default audio tracks defined")}var n=!1,s=function(){t.forEach((function(t){n||e.audioGroupId&&t.groupId!==e.audioGroupId||i&&i!==t.name||(e._setAudioTrack(t.id),n=!0)}))};s(),n||(i=null,s()),n||(u.b.error("No track found for running audio group-ID: "+this.audioGroupId),this.hls.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))}},l._needsTrackLoading=function(e){var t=e.details,r=e.url;return!(t&&!t.live)&&!!r},l._loadTrackDetailsIfNeeded=function(e){if(this._needsTrackLoading(e)){var t=e.url,r=e.id;u.b.log("loading audio-track playlist for id: "+r),this.hls.trigger(d.a.AUDIO_TRACK_LOADING,{url:t,id:r})}},l._updateTrack=function(e){if(!(e<0||e>=this.tracks.length)){this.clearInterval(),this._trackId=e,u.b.log("trying to update audio-track "+e);var t=this.tracks[e];this._loadTrackDetailsIfNeeded(t)}},l._handleLoadError=function(){this.trackIdBlacklist[this._trackId]=!0;var e=this._trackId,t=this.tracks[e],r=t.name,i=t.language,a=t.groupId;u.b.warn("Loading failed on audio track id: "+e+", group-id: "+a+', name/language: "'+r+'" / "'+i+'"');for(var n=e,s=0;s<this.tracks.length;s++){if(!this.trackIdBlacklist[s])if(this.tracks[s].name===r){n=s;break}}n!==e?(u.b.log("Attempting audio-track fallback id:",n,"group-id:",this.tracks[n].groupId),this._setAudioTrack(n)):u.b.warn('No fallback audio-track found for name/language: "'+r+'" / "'+i+'"')},a=i,(n=[{key:"audioTracks",get:function(){return this.tracks}},{key:"audioTrack",get:function(){return this._trackId},set:function(e){this._setAudioTrack(e),this._selectDefaultTrack=!1}}])&&Je(a.prototype,n),s&&Je(a,s),i}(ge);function et(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var tt=window.performance,rt=function(e){var t,r;function i(t,r){var i;return(i=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.AUDIO_TRACKS_UPDATED,d.a.AUDIO_TRACK_SWITCHING,d.a.AUDIO_TRACK_LOADED,d.a.KEY_LOADED,d.a.FRAG_LOADED,d.a.FRAG_PARSING_INIT_SEGMENT,d.a.FRAG_PARSING_DATA,d.a.FRAG_PARSED,d.a.ERROR,d.a.BUFFER_RESET,d.a.BUFFER_CREATED,d.a.BUFFER_APPENDED,d.a.BUFFER_FLUSHED,d.a.INIT_PTS_FOUND)||this).fragmentTracker=r,i.config=t.config,i.audioCodecSwap=!1,i._state=pe,i.initPTS=[],i.waitingFragment=null,i.videoTrackCC=null,i.waitingVideoCC=null,i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,c=i.prototype;return c.onInitPtsFound=function(e){var t=e.id,r=e.frag.cc,i=e.initPTS;"main"===t&&(this.initPTS[r]=i,this.videoTrackCC=r,u.b.log("InitPTS for cc: "+r+" found from main: "+i),this.state===Le&&this.tick())},c.startLoad=function(e){if(this.tracks){var t=this.lastCurrentTime;this.stopLoad(),this.setInterval(100),this.fragLoadError=0,t>0&&-1===e?(u.b.log("audio:override startPosition with lastCurrentTime @"+t.toFixed(3)),this.state=me):(this.lastCurrentTime=this.startPosition?this.startPosition:e,this.state=ve),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else this.startPosition=e,this.state=pe},c.doTick=function(){var e,t,r,i=this.hls,a=i.config;switch(this.state){case we:case ye:case Ae:break;case ve:this.state=Se,this.loadedmetadata=!1;break;case me:var n=this.tracks;if(!n)break;if(!this.media&&(this.startFragRequested||!a.startFragPrefetch))break;if(this.loadedmetadata)e=this.media.currentTime;else if(void 0===(e=this.nextLoadPosition))break;var s=this.mediaBuffer?this.mediaBuffer:this.media,o=this.videoBuffer?this.videoBuffer:this.media,c=e<a.maxBufferHole?Math.max(2,a.maxBufferHole):a.maxBufferHole,h=H.bufferInfo(s,e,c),f=H.bufferInfo(o,e,c),g=h.len,p=h.end,v=this.fragPrevious,m=Math.min(a.maxBufferLength,a.maxMaxBufferLength),y=Math.max(m,f.len),b=this.audioSwitch,T=this.trackId;if((g<y||b)&&T<n.length){if(void 0===(r=n[T].details)){this.state=Se;break}if(!b&&this._streamEnded(h,r))return this.hls.trigger(d.a.BUFFER_EOS,{type:"audio"}),void(this.state=ke);var E,S=r.fragments,_=S.length,R=S[0].start,A=S[_-1].start+S[_-1].duration;if(b)if(r.live&&!r.PTSKnown)u.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"),p=0;else if(p=e,r.PTSKnown&&e<R){if(!(h.end>R||h.nextStart))return;u.b.log("alt audio track ahead of main track, seek to start of alt audio track"),this.media.currentTime=R+.05}if(r.initSegment&&!r.initSegment.data)E=r.initSegment;else if(p<=R){if(E=S[0],null!==this.videoTrackCC&&E.cc!==this.videoTrackCC&&(E=function(e,t){return j.search(e,(function(e){return e.cc<t?1:e.cc>t?-1:0}))}(S,this.videoTrackCC)),r.live&&E.loadIdx&&E.loadIdx===this.fragLoadIdx){var k=h.nextStart?h.nextStart:R;return u.b.log("no alt audio available @currentTime:"+this.media.currentTime+", seeking @"+(k+.05)),void(this.media.currentTime=k+.05)}}else{var w,L=a.maxFragLookUpTolerance,D=v?S[v.sn-S[0].sn+1]:void 0;p<A?(p>A-L&&(L=0),w=D&&!ue(p,L,D)?D:j.search(S,(function(e){return ue(p,L,e)}))):w=S[_-1],w&&(E=w,R=w.start,v&&E.level===v.level&&E.sn===v.sn&&(E.sn<r.endSN?(E=S[E.sn+1-r.startSN],this.fragmentTracker.getState(E)!==G&&u.b.log("SN just loaded, load next one: "+E.sn)):E=null))}E&&(E.encrypted?(u.b.log("Loading key for "+E.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+T),this.state=be,i.trigger(d.a.KEY_LOADING,{frag:E})):(this.fragCurrent=E,(b||this.fragmentTracker.getState(E)===U)&&(u.b.log("Loading "+E.sn+", cc: "+E.cc+" of ["+r.startSN+" ,"+r.endSN+"],track "+T+", "+(this.loadedmetadata?"currentTime":"nextLoadPosition")+": "+e+", bufferEnd: "+p.toFixed(3)),"initSegment"!==E.sn&&(this.startFragRequested=!0),Object(l.a)(E.sn)&&(this.nextLoadPosition=E.start+E.duration),i.trigger(d.a.FRAG_LOADING,{frag:E}),this.state=Te)))}break;case Se:(t=this.tracks[this.trackId])&&t.details&&(this.state=me);break;case Ee:var O=tt.now(),C=this.retryDate,I=(s=this.media)&&s.seeking;(!C||O>=C||I)&&(u.b.log("audioStreamController: retryDate reached, switch back to IDLE state"),this.state=me);break;case Le:var P=this.waitingFragment;if(P){var x=P.frag.cc;if(void 0!==this.initPTS[x])this.waitingFragment=null,this.state=Te,this.onFragLoaded(P);else if(this.videoTrackCC!==this.waitingVideoCC)u.b.log("Waiting fragment cc ("+x+") cancelled because video is at cc "+this.videoTrackCC),this.clearWaitingFragment();else{var M=H.bufferInfo(this.mediaBuffer,this.media.currentTime,a.maxBufferHole);ue(M.end,a.maxFragLookUpTolerance,P.frag)<0&&(u.b.log("Waiting fragment cc ("+x+") @ "+P.frag.start+" cancelled because another fragment at "+M.end+" is needed"),this.clearWaitingFragment())}}else this.state=me}},c.clearWaitingFragment=function(){var e=this.waitingFragment;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingFragment=null,this.waitingVideoCC=null,this.state=me)},c.onMediaAttached=function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("ended",this.onvended);var r=this.config;this.tracks&&r.autoStartLoad&&this.startLoad(r.startPosition)},c.onMediaDetaching=function(){var e=this.media;e&&e.ended&&(u.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},c.onAudioTracksUpdated=function(e){u.b.log("audio tracks updated"),this.tracks=e.audioTracks},c.onAudioTrackSwitching=function(e){var t=!!e.url;this.trackId=e.id,this.fragCurrent=null,this.clearWaitingFragment(),this.state=ye,t?this.setInterval(100):this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),t&&(this.audioSwitch=!0,this.state=me),this.tick()},c.onAudioTrackLoaded=function(e){var t=e.details,r=e.id,i=this.tracks[r],a=t.totalduration,n=0;if(u.b.log("track "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+a),t.live){var s=i.details;s&&t.fragments.length>0?(re(s,t),n=t.fragments[0].start,t.PTSKnown?u.b.log("live audio playlist sliding:"+n.toFixed(3)):u.b.log("live audio playlist - outdated PTS, unknown sliding")):(t.PTSKnown=!1,u.b.log("live audio playlist - first load, unknown sliding"))}else t.PTSKnown=!1;if(i.details=t,!this.startFragRequested){if(-1===this.startPosition){var o=t.startTimeOffset;Object(l.a)(o)?(u.b.log("start time offset found in playlist, adjust startPosition to "+o),this.startPosition=o):t.live?(this.startPosition=this.computeLivePosition(n,t),u.b.log("compute startPosition for audio-track to "+this.startPosition)):this.startPosition=0}this.nextLoadPosition=this.startPosition}this.state===Se&&(this.state=me),this.tick()},c.onKeyLoaded=function(){this.state===be&&(this.state=me,this.tick())},c.onFragLoaded=function(e){var t=this.fragCurrent,r=e.frag;if(this.state===Te&&t&&"audio"===r.type&&r.level===t.level&&r.sn===t.sn){var i=this.tracks[this.trackId],a=i.details,n=a.totalduration,s=t.level,o=t.sn,l=t.cc,c=this.config.defaultAudioCodec||i.audioCodec||"mp4a.40.2",h=this.stats=e.stats;if("initSegment"===o)this.state=me,h.tparsed=h.tbuffered=tt.now(),a.initSegment.data=e.payload,this.hls.trigger(d.a.FRAG_BUFFERED,{stats:h,frag:t,id:"audio"}),this.tick();else{this.state=_e,this.appended=!1,this.demuxer||(this.demuxer=new J(this.hls,"audio"));var f=this.initPTS[l],g=a.initSegment?a.initSegment.data:[];if(void 0!==f){this.pendingBuffering=!0,u.b.log("Demuxing "+o+" of ["+a.startSN+" ,"+a.endSN+"],track "+s);this.demuxer.push(e.payload,g,c,null,t,n,!1,f)}else u.b.log("Unknown video PTS for cc "+l+", waiting for video PTS before demuxing audio frag "+o+" of ["+a.startSN+" ,"+a.endSN+"],track "+s),this.waitingFragment=e,this.waitingVideoCC=this.videoTrackCC,this.state=Le}}this.fragLoadError=0},c.onFragParsingInitSegment=function(e){var t=this.fragCurrent,r=e.frag;if(t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e){var i,a=e.tracks;if(a.video&&delete a.video,i=a.audio){i.levelCodec=i.codec,i.id=e.id,this.hls.trigger(d.a.BUFFER_CODECS,a),u.b.log("audio track:audio,container:"+i.container+",codecs[level/parsed]=["+i.levelCodec+"/"+i.codec+"]");var n=i.initSegment;if(n){var s={type:"audio",data:n,parent:"audio",content:"initSegment"};this.audioSwitch?this.pendingData=[s]:(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(d.a.BUFFER_APPENDING,s))}this.tick()}}},c.onFragParsingData=function(e){var t=this,r=this.fragCurrent,i=e.frag;if(r&&"audio"===e.id&&"audio"===e.type&&i.sn===r.sn&&i.level===r.level&&this.state===_e){var a=this.trackId,n=this.tracks[a],s=this.hls;Object(l.a)(e.endPTS)||(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),r.addElementaryStream(p.AUDIO),u.b.log("parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb),te(n.details,r,e.startPTS,e.endPTS);var c=this.media,h=!1;if(this.audioSwitch)if(c&&c.readyState){var f=c.currentTime;u.b.log("switching audio track : currentTime:"+f),f>=e.startPTS&&(u.b.log("switching audio track : flushing all audio"),this.state=Ae,s.trigger(d.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),h=!0,this.audioSwitch=!1,s.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:a}))}else this.audioSwitch=!1,s.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:a});var g=this.pendingData;if(!g)return u.b.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),void s.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:null,fatal:!0});this.audioSwitch||([e.data1,e.data2].forEach((function(t){t&&t.length&&g.push({type:e.type,data:t,parent:"audio",content:"data"})})),!h&&g.length&&(g.forEach((function(e){t.state===_e&&(t.pendingBuffering=!0,t.hls.trigger(d.a.BUFFER_APPENDING,e))})),this.pendingData=[],this.appended=!0)),this.tick()}},c.onFragParsed=function(e){var t=this.fragCurrent,r=e.frag;t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e&&(this.stats.tparsed=tt.now(),this.state=Re,this._checkAppendedParsed())},c.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},c.onBufferCreated=function(e){var t=e.tracks.audio;t&&(this.mediaBuffer=t.buffer,this.loadedmetadata=!0),e.tracks.video&&(this.videoBuffer=e.tracks.video.buffer)},c.onBufferAppended=function(e){if("audio"===e.parent){var t=this.state;t!==_e&&t!==Re||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}},c._checkAppendedParsed=function(){if(!(this.state!==Re||this.appended&&this.pendingBuffering)){var e=this.fragCurrent,t=this.stats,r=this.hls;if(e){this.fragPrevious=e,t.tbuffered=tt.now(),r.trigger(d.a.FRAG_BUFFERED,{stats:t,frag:e,id:"audio"});var i=this.mediaBuffer?this.mediaBuffer:this.media;i&&u.b.log("audio buffered : "+ne.toString(i.buffered)),this.audioSwitch&&this.appended&&(this.audioSwitch=!1,r.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:this.trackId})),this.state=me}this.tick()}},c.onError=function(e){var t=e.frag;if(!t||"audio"===t.type)switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:var r=e.frag;if(r&&"audio"!==r.type)break;if(!e.fatal){var i=this.fragLoadError;i?i++:i=1;var a=this.config;if(i<=a.fragLoadingMaxRetry){this.fragLoadError=i;var n=Math.min(Math.pow(2,i-1)*a.fragLoadingRetryDelay,a.fragLoadingMaxRetryTimeout);u.b.warn("AudioStreamController: frag loading failed, retry in "+n+" ms"),this.retryDate=tt.now()+n,this.state=Ee}else u.b.error("AudioStreamController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=we}break;case o.a.AUDIO_TRACK_LOAD_ERROR:case o.a.AUDIO_TRACK_LOAD_TIMEOUT:case o.a.KEY_LOAD_ERROR:case o.a.KEY_LOAD_TIMEOUT:this.state!==we&&(this.state=e.fatal?we:me,u.b.warn("AudioStreamController: "+e.details+" while loading frag, now switching to "+this.state+" state ..."));break;case o.a.BUFFER_FULL_ERROR:if("audio"===e.parent&&(this.state===_e||this.state===Re)){var s=this.mediaBuffer,l=this.media.currentTime;if(s&&H.isBuffered(s,l)&&H.isBuffered(s,l+.5)){var c=this.config;c.maxMaxBufferLength>=c.maxBufferLength&&(c.maxMaxBufferLength/=2,u.b.warn("AudioStreamController: reduce max buffer length to "+c.maxMaxBufferLength+"s")),this.state=me}else u.b.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,this.state=Ae,this.hls.trigger(d.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"})}}},c.onBufferFlushed=function(){var e=this,t=this.pendingData;t&&t.length?(u.b.log("AudioStreamController: appending pending audio data after buffer flushed"),t.forEach((function(t){e.hls.trigger(d.a.BUFFER_APPENDING,t)})),this.appended=!0,this.pendingData=[],this.state=Re):(this.state=me,this.fragPrevious=null,this.tick())},a=i,(n=[{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,u.b.log("audio stream:"+t+"->"+e)}},get:function(){return this._state}}])&&et(a.prototype,n),s&&et(a,s),i}(Oe),it=function(){if("undefined"!=typeof window&&window.VTTCue)return window.VTTCue;var e={"":!0,lr:!0,rl:!0},t={start:!0,middle:!0,end:!0,left:!0,right:!0};function r(e){return"string"==typeof e&&(!!t[e.toLowerCase()]&&e.toLowerCase())}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]=r[i]}return e}function a(t,a,n){var s=this,o={enumerable:!0};s.hasBeenReset=!1;var l="",d=!1,u=t,c=a,h=n,f=null,g="",p=!0,v="auto",m="start",y=50,b="middle",T=50,E="middle";Object.defineProperty(s,"id",i({},o,{get:function(){return l},set:function(e){l=""+e}})),Object.defineProperty(s,"pauseOnExit",i({},o,{get:function(){return d},set:function(e){d=!!e}})),Object.defineProperty(s,"startTime",i({},o,{get:function(){return u},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");u=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"endTime",i({},o,{get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");c=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"text",i({},o,{get:function(){return h},set:function(e){h=""+e,this.hasBeenReset=!0}})),Object.defineProperty(s,"region",i({},o,{get:function(){return f},set:function(e){f=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"vertical",i({},o,{get:function(){return g},set:function(t){var r=function(t){return"string"==typeof t&&(!!e[t.toLowerCase()]&&t.toLowerCase())}(t);if(!1===r)throw new SyntaxError("An invalid or illegal string was specified.");g=r,this.hasBeenReset=!0}})),Object.defineProperty(s,"snapToLines",i({},o,{get:function(){return p},set:function(e){p=!!e,this.hasBeenReset=!0}})),Object.defineProperty(s,"line",i({},o,{get:function(){return v},set:function(e){if("number"!=typeof e&&"auto"!==e)throw new SyntaxError("An invalid number or illegal string was specified.");v=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"lineAlign",i({},o,{get:function(){return m},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");m=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"position",i({},o,{get:function(){return y},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");y=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"positionAlign",i({},o,{get:function(){return b},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");b=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"size",i({},o,{get:function(){return T},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");T=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"align",i({},o,{get:function(){return E},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");E=t,this.hasBeenReset=!0}})),s.displayState=void 0}return a.prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)},a}(),at=function(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}};function nt(){this.window=window,this.state="INITIAL",this.buffer="",this.decoder=new at,this.regionList=[]}function st(){this.values=Object.create(null)}function ot(e,t,r,i){var a=i?e.split(i):[e];for(var n in a)if("string"==typeof a[n]){var s=a[n].split(r);if(2===s.length)t(s[0],s[1])}}st.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var i=0;i<r.length;++i)if(t===r[i]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return!!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t))>=0&&t<=100)&&(this.set(e,t),!0)}};var lt=new it(0,0,0),dt="middle"===lt.align?"middle":"center";function ut(e,t,r){var i=e;function a(){var t=function(e){function t(e,t,r,i){return 3600*(0|e)+60*(0|t)+(0|r)+(0|i)/1e3}var r=e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}(e);if(null===t)throw new Error("Malformed timestamp: "+i);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function n(){e=e.replace(/^\s+/,"")}if(n(),t.startTime=a(),n(),"--\x3e"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+i);e=e.substr(3),n(),t.endTime=a(),n(),function(e,t){var i=new st;ot(e,(function(e,t){switch(e){case"region":for(var a=r.length-1;a>=0;a--)if(r[a].id===t){i.set(e,r[a].region);break}break;case"vertical":i.alt(e,t,["rl","lr"]);break;case"line":var n=t.split(","),s=n[0];i.integer(e,s),i.percent(e,s)&&i.set("snapToLines",!1),i.alt(e,s,["auto"]),2===n.length&&i.alt("lineAlign",n[1],["start",dt,"end"]);break;case"position":n=t.split(","),i.percent(e,n[0]),2===n.length&&i.alt("positionAlign",n[1],["start",dt,"end","line-left","line-right","auto"]);break;case"size":i.percent(e,t);break;case"align":i.alt(e,t,["start",dt,"end","left","right"])}}),/:/,/\s/),t.region=i.get("region",null),t.vertical=i.get("vertical","");var a=i.get("line","auto");"auto"===a&&-1===lt.line&&(a=-1),t.line=a,t.lineAlign=i.get("lineAlign","start"),t.snapToLines=i.get("snapToLines",!0),t.size=i.get("size",100),t.align=i.get("align",dt);var n=i.get("position","auto");"auto"===n&&50===lt.position&&(n="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=n}(e,t)}function ct(e){return e.replace(/<br(?: \/)?>/gi,"\n")}nt.prototype={parse:function(e){var t=this;function r(){var e=t.buffer,r=0;for(e=ct(e);r<e.length&&"\r"!==e[r]&&"\n"!==e[r];)++r;var i=e.substr(0,r);return"\r"===e[r]&&++r,"\n"===e[r]&&++r,t.buffer=e.substr(r),i}e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));try{var i;if("INITIAL"===t.state){if(!/\r\n|\n/.test(t.buffer))return this;var a=(i=r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!a||!a[0])throw new Error("Malformed WebVTT signature.");t.state="HEADER"}for(var n=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(n?n=!1:i=r(),t.state){case"HEADER":/:/.test(i)?ot(i,(function(e,t){}),/:/):i||(t.state="ID");continue;case"NOTE":i||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(i)){t.state="NOTE";break}if(!i)continue;if(t.cue=new it(0,0,""),t.state="CUE",-1===i.indexOf("--\x3e")){t.cue.id=i;continue}case"CUE":try{ut(i,t.cue,t.regionList)}catch(e){t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var s=-1!==i.indexOf("--\x3e");if(!i||s&&(n=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+="\n"),t.cue.text+=i;continue;case"BADCUE":i||(t.state="ID");continue}}}catch(e){"CUETEXT"===t.state&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state="INITIAL"===t.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){try{if(this.buffer+=this.decoder.decode(),(this.cue||"HEADER"===this.state)&&(this.buffer+="\n\n",this.parse()),"INITIAL"===this.state)throw new Error("Malformed WebVTT signature.")}catch(e){throw e}return this.onflush&&this.onflush(),this}};var ht=nt;function ft(e,t,r,i){for(var a,n,s,o,l,d=[],u=window.VTTCue||TextTrackCue,c=0;c<i.rows.length;c++)if(s=!0,o=0,l="",!(a=i.rows[c]).isEmpty()){for(var h=0;h<a.chars.length;h++)a.chars[h].uchar.match(/\s/)&&s?o++:(l+=a.chars[h].uchar,s=!1);a.cueStartTime=t,t===r&&(r+=1e-4),n=new u(t,r,ct(l.trim())),o>=16?o--:o++,navigator.userAgent.match(/Firefox\//)?n.line=c+1:n.line=c>7?c-2:c+1,n.align="left",n.position=Math.max(0,Math.min(100,o/32*100)),d.push(n),e&&e.addCue(n)}return d}var gt,pt={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},vt=function(e){var t=e;return pt.hasOwnProperty(e)&&(t=pt[e]),String.fromCharCode(t)},mt={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},yt={17:2,18:4,21:6,22:8,23:10,19:13,20:15},bt={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},Tt={25:2,26:4,29:6,30:8,31:10,27:13,28:15},Et=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];!function(e){e[e.ERROR=0]="ERROR",e[e.TEXT=1]="TEXT",e[e.WARNING=2]="WARNING",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG",e[e.DATA=3]="DATA"}(gt||(gt={}));var St=function(){function e(){this.time=null,this.verboseLevel=gt.ERROR}return e.prototype.log=function(e,t){this.verboseLevel>=e&&u.b.log(this.time+" ["+e+"] "+t)},e}(),_t=function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].toString(16));return t},Rt=function(){function e(e,t,r,i,a){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=e||"white",this.underline=t||!1,this.italics=r||!1,this.background=i||"black",this.flash=a||!1}var t=e.prototype;return t.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},t.setStyles=function(e){for(var t=["foreground","underline","italics","background","flash"],r=0;r<t.length;r++){var i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}},t.isDefault=function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash},t.equals=function(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash},t.copy=function(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash},t.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},e}(),At=function(){function e(e,t,r,i,a,n){this.uchar=void 0,this.penState=void 0,this.uchar=e||" ",this.penState=new Rt(t,r,i,a,n)}var t=e.prototype;return t.reset=function(){this.uchar=" ",this.penState.reset()},t.setChar=function(e,t){this.uchar=e,this.penState.copy(t)},t.setPenState=function(e){this.penState.copy(e)},t.equals=function(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)},t.copy=function(e){this.uchar=e.uchar,this.penState.copy(e.penState)},t.isEmpty=function(){return" "===this.uchar&&this.penState.isDefault()},e}(),kt=function(){function e(e){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var t=0;t<100;t++)this.chars.push(new At);this.logger=e,this.pos=0,this.currPenState=new Rt}var t=e.prototype;return t.equals=function(e){for(var t=!0,r=0;r<100;r++)if(!this.chars[r].equals(e.chars[r])){t=!1;break}return t},t.copy=function(e){for(var t=0;t<100;t++)this.chars[t].copy(e.chars[t])},t.isEmpty=function(){for(var e=!0,t=0;t<100;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e},t.setCursor=function(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(gt.DEBUG,"Negative cursor position "+this.pos),this.pos=0):this.pos>100&&(this.logger.log(gt.DEBUG,"Too large cursor position "+this.pos),this.pos=100)},t.moveCursor=function(e){var t=this.pos+e;if(e>1)for(var r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)},t.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},t.insertChar=function(e){e>=144&&this.backSpace();var t=vt(e);this.pos>=100?this.logger.log(gt.ERROR,"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1))},t.clearFromPos=function(e){var t;for(t=e;t<100;t++)this.chars[t].reset()},t.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},t.clearToEndOfRow=function(){this.clearFromPos(this.pos)},t.getTextString=function(){for(var e=[],t=!0,r=0;r<100;r++){var i=this.chars[r].uchar;" "!==i&&(t=!1),e.push(i)}return t?"":e.join("")},t.setPenStyles=function(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)},e}(),wt=function(){function e(e){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var t=0;t<15;t++)this.rows.push(new kt(e));this.logger=e,this.currRow=14,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var t=e.prototype;return t.reset=function(){for(var e=0;e<15;e++)this.rows[e].clear();this.currRow=14},t.equals=function(e){for(var t=!0,r=0;r<15;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t},t.copy=function(e){for(var t=0;t<15;t++)this.rows[t].copy(e.rows[t])},t.isEmpty=function(){for(var e=!0,t=0;t<15;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e},t.backSpace=function(){this.rows[this.currRow].backSpace()},t.clearToEndOfRow=function(){this.rows[this.currRow].clearToEndOfRow()},t.insertChar=function(e){this.rows[this.currRow].insertChar(e)},t.setPen=function(e){this.rows[this.currRow].setPenStyles(e)},t.moveCursor=function(e){this.rows[this.currRow].moveCursor(e)},t.setCursor=function(e){this.logger.log(gt.INFO,"setCursor: "+e),this.rows[this.currRow].setCursor(e)},t.setPAC=function(e){this.logger.log(gt.INFO,"pacData = "+JSON.stringify(e));var t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(var r=0;r<15;r++)this.rows[r].clear();var i=this.currRow+1-this.nrRollUpRows,a=this.lastOutputScreen;if(a){var n=a.rows[i].cueStartTime,s=this.logger.time;if(n&&null!==s&&n<s)for(var o=0;o<this.nrRollUpRows;o++)this.rows[t-this.nrRollUpRows+o+1].copy(a.rows[i+o])}}this.currRow=t;var l=this.rows[this.currRow];if(null!==e.indent){var d=e.indent,u=Math.max(d-1,0);l.setCursor(e.indent),e.color=l.chars[u].penState.foreground}var c={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(c)},t.setBkgData=function(e){this.logger.log(gt.INFO,"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)},t.setRollUpRows=function(e){this.nrRollUpRows=e},t.rollUp=function(){if(null!==this.nrRollUpRows){this.logger.log(gt.TEXT,this.getDisplayText());var e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(gt.INFO,"Rolling up")}else this.logger.log(gt.DEBUG,"roll_up but nrRollUpRows not set yet")},t.getDisplayText=function(e){e=e||!1;for(var t=[],r="",i=-1,a=0;a<15;a++){var n=this.rows[a].getTextString();n&&(i=a+1,e?t.push("Row "+i+": '"+n+"'"):t.push(n.trim()))}return t.length>0&&(r=e?"["+t.join(" | ")+"]":t.join("\n")),r},t.getTextAndFormat=function(){return this.rows},e}(),Lt=function(){function e(e,t,r){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new wt(r),this.nonDisplayedMemory=new wt(r),this.lastOutputScreen=new wt(r),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=r}var t=e.prototype;return t.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},t.getHandler=function(){return this.outputFilter},t.setHandler=function(e){this.outputFilter=e},t.setPAC=function(e){this.writeScreen.setPAC(e)},t.setBkgData=function(e){this.writeScreen.setBkgData(e)},t.setMode=function(e){e!==this.mode&&(this.mode=e,this.logger.log(gt.INFO,"MODE="+e),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)},t.insertChars=function(e){for(var t=0;t<e.length;t++)this.writeScreen.insertChar(e[t]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(gt.INFO,r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(this.logger.log(gt.TEXT,"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},t.ccRCL=function(){this.logger.log(gt.INFO,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},t.ccBS=function(){this.logger.log(gt.INFO,"BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},t.ccAOF=function(){},t.ccAON=function(){},t.ccDER=function(){this.logger.log(gt.INFO,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},t.ccRU=function(e){this.logger.log(gt.INFO,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)},t.ccFON=function(){this.logger.log(gt.INFO,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},t.ccRDC=function(){this.logger.log(gt.INFO,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},t.ccTR=function(){this.logger.log(gt.INFO,"TR"),this.setMode("MODE_TEXT")},t.ccRTD=function(){this.logger.log(gt.INFO,"RTD"),this.setMode("MODE_TEXT")},t.ccEDM=function(){this.logger.log(gt.INFO,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},t.ccCR=function(){this.logger.log(gt.INFO,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},t.ccENM=function(){this.logger.log(gt.INFO,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},t.ccEOC=function(){if(this.logger.log(gt.INFO,"EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(gt.TEXT,"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)},t.ccTO=function(e){this.logger.log(gt.INFO,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)},t.ccMIDROW=function(e){var t={flash:!1};if(t.underline=e%2==1,t.italics=e>=46,t.italics)t.foreground="white";else{var r=Math.floor(e/2)-16;t.foreground=["white","green","blue","cyan","red","yellow","magenta"][r]}this.logger.log(gt.INFO,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)},t.outputDataUpdate=function(e){void 0===e&&(e=!1);var t=this.logger.time;null!==t&&this.outputFilter&&(null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t):this.cueStartTime=t,this.lastOutputScreen.copy(this.displayedMemory))},t.cueSplitAtTime=function(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))},e}();function Dt(e,t,r){r.a=e,r.b=t}function Ot(e,t,r){return r.a===e&&r.b===t}var Ct=function(){function e(e,t,r){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var i=new St;this.channels=[null,new Lt(e,t,i),new Lt(e+1,r,i)],this.cmdHistory={a:null,b:null},this.logger=i}var t=e.prototype;return t.getHandler=function(e){return this.channels[e].getHandler()},t.setHandler=function(e,t){this.channels[e].setHandler(t)},t.addData=function(e,t){var r,i,a,n=!1;this.logger.time=e;for(var s=0;s<t.length;s+=2)if(i=127&t[s],a=127&t[s+1],0!==i||0!==a){if(this.logger.log(gt.DATA,"["+_t([t[s],t[s+1]])+"] -> ("+_t([i,a])+")"),(r=this.parseCmd(i,a))||(r=this.parseMidrow(i,a)),r||(r=this.parsePAC(i,a)),r||(r=this.parseBackgroundAttributes(i,a)),!r&&(n=this.parseChars(i,a))){var o=this.currentChannel;if(o&&o>0)this.channels[o].insertChars(n);else this.logger.log(gt.WARNING,"No channel found yet. TEXT-MODE?")}r||n||this.logger.log(gt.WARNING,"Couldn't parse cleaned data "+_t([i,a])+" orig: "+_t([t[s],t[s+1]]))}},t.parseCmd=function(e,t){var r=this.cmdHistory;if(!((20===e||28===e||21===e||29===e)&&t>=32&&t<=47)&&!((23===e||31===e)&&t>=33&&t<=35))return!1;if(Ot(e,t,r))return Dt(null,null,r),this.logger.log(gt.DEBUG,"Repeated command ("+_t([e,t])+") is dropped"),!0;var i=20===e||21===e||23===e?1:2,a=this.channels[i];return 20===e||21===e||28===e||29===e?32===t?a.ccRCL():33===t?a.ccBS():34===t?a.ccAOF():35===t?a.ccAON():36===t?a.ccDER():37===t?a.ccRU(2):38===t?a.ccRU(3):39===t?a.ccRU(4):40===t?a.ccFON():41===t?a.ccRDC():42===t?a.ccTR():43===t?a.ccRTD():44===t?a.ccEDM():45===t?a.ccCR():46===t?a.ccENM():47===t&&a.ccEOC():a.ccTO(t-32),Dt(e,t,r),this.currentChannel=i,!0},t.parseMidrow=function(e,t){var r=0;if((17===e||25===e)&&t>=32&&t<=47){if((r=17===e?1:2)!==this.currentChannel)return this.logger.log(gt.ERROR,"Mismatch channel in midrow parsing"),!1;var i=this.channels[r];return!!i&&(i.ccMIDROW(t),this.logger.log(gt.DEBUG,"MIDROW ("+_t([e,t])+")"),!0)}return!1},t.parsePAC=function(e,t){var r,i=this.cmdHistory;if(!((e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127)&&!((16===e||24===e)&&t>=64&&t<=95))return!1;if(Ot(e,t,i))return Dt(null,null,i),!0;var a=e<=23?1:2;r=t>=64&&t<=95?1===a?mt[e]:bt[e]:1===a?yt[e]:Tt[e];var n=this.channels[a];return!!n&&(n.setPAC(this.interpretPAC(r,t)),Dt(e,t,i),this.currentChannel=a,!0)},t.interpretPAC=function(e,t){var r=t,i={color:null,italics:!1,indent:null,underline:!1,row:e};return r=t>95?t-96:t-64,i.underline=1==(1&r),r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=4*Math.floor((r-16)/2),i},t.parseChars=function(e,t){var r,i=null,a=null;if(e>=25?(r=2,a=e-8):(r=1,a=e),a>=17&&a<=19){var n=t;n=17===a?t+80:18===a?t+112:t+144,this.logger.log(gt.INFO,"Special char '"+vt(n)+"' in channel "+r),i=[n]}else e>=32&&e<=127&&(i=0===t?[e]:[e,t]);if(i){var s=_t(i);this.logger.log(gt.DEBUG,"Char codes =  "+s.join(",")),Dt(e,t,this.cmdHistory)}return i},t.parseBackgroundAttributes=function(e,t){var r;if(!((16===e||24===e)&&t>=32&&t<=47)&&!((23===e||31===e)&&t>=45&&t<=47))return!1;var i={};16===e||24===e?(r=Math.floor((t-32)/2),i.background=Et[r],t%2==1&&(i.background=i.background+"_semi")):45===t?i.background="transparent":(i.foreground="black",47===t&&(i.underline=!0));var a=e<=23?1:2;return this.channels[a].setBkgData(i),Dt(e,t,this.cmdHistory),!0},t.reset=function(){for(var e=0;e<Object.keys(this.channels).length;e++){var t=this.channels[e];t&&t.reset()}this.cmdHistory={a:null,b:null}},t.cueSplitAtTime=function(e){for(var t=0;t<this.channels.length;t++){var r=this.channels[t];r&&r.cueSplitAtTime(e)}},e}(),It=function(){function e(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}var t=e.prototype;return t.dispatchCue=function(){null!==this.startTime&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},t.newCue=function(e,t,r){(null===this.startTime||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)},t.reset=function(){this.cueRanges=[]},e}(),Pt=function(e,t,r){return e.substr(r||0,t.length)===t},xt=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return(t>>>0).toString()},Mt={parse:function(e,t,r,i,a,n){var s,o=Object(Fe.b)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g,"\n").split("\n"),d="00:00.000",u=0,c=0,h=0,f=[],g=!0,p=!1,v=new ht;v.oncue=function(e){var t=r[i],a=r.ccOffset;t&&t.new&&(void 0!==c?a=r.ccOffset=t.start:function(e,t,r){var i=e[t],a=e[i.prevCC];if(!a||!a.new&&i.new)return e.ccOffset=e.presentationOffset=i.start,void(i.new=!1);for(;a&&a.new;)e.ccOffset+=i.start-a.start,i.new=!1,a=e[(i=a).prevCC];e.presentationOffset=r}(r,i,h)),h&&(a=h-r.presentationOffset),p&&(e.startTime+=a-c,e.endTime+=a-c),e.id=xt(e.startTime.toString())+xt(e.endTime.toString())+xt(e.text),e.text=decodeURIComponent(encodeURIComponent(e.text)),e.endTime>0&&f.push(e)},v.onparsingerror=function(e){s=e},v.onflush=function(){s&&n?n(s):a(f)},o.forEach((function(e){if(g){if(Pt(e,"X-TIMESTAMP-MAP=")){g=!1,p=!0,e.substr(16).split(",").forEach((function(e){Pt(e,"LOCAL:")?d=e.substr(6):Pt(e,"MPEGTS:")&&(u=parseInt(e.substr(7)))}));try{t+(9e4*r[i].start||0)<0&&(t+=8589934592),u-=t,c=function(e){var t=parseInt(e.substr(-3)),r=parseInt(e.substr(-6,2)),i=parseInt(e.substr(-9,2)),a=e.length>9?parseInt(e.substr(0,e.indexOf(":"))):0;if(!(Object(l.a)(t)&&Object(l.a)(r)&&Object(l.a)(i)&&Object(l.a)(a)))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+e);return t+=1e3*r,t+=6e4*i,t+=36e5*a}(d)/1e3,h=u/9e4}catch(e){p=!1,s=e}return}""===e&&(g=!1)}v.parse(e+"\n")})),v.flush()}};function Ft(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ut(e,t){return e&&e.label===t.name&&!(e.textTrack1||e.textTrack2)}var Nt=function(e){var t,r;function i(t){var r;if((r=e.call(this,t,d.a.MEDIA_ATTACHING,d.a.MEDIA_DETACHING,d.a.FRAG_PARSING_USERDATA,d.a.FRAG_DECRYPTED,d.a.MANIFEST_LOADING,d.a.MANIFEST_LOADED,d.a.FRAG_LOADED,d.a.INIT_PTS_FOUND)||this).media=null,r.config=void 0,r.enabled=!0,r.Cues=void 0,r.textTracks=[],r.tracks=[],r.initPTS=[],r.unparsedVttFrags=[],r.captionsTracks={},r.nonNativeCaptionsTracks={},r.captionsProperties=void 0,r.cea608Parser1=void 0,r.cea608Parser2=void 0,r.lastSn=-1,r.prevCC=-1,r.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},r.hls=t,r.config=t.config,r.Cues=t.config.cueHandler,r.captionsProperties={textTrack1:{label:r.config.captionsTextTrack1Label,languageCode:r.config.captionsTextTrack1LanguageCode},textTrack2:{label:r.config.captionsTextTrack2Label,languageCode:r.config.captionsTextTrack2LanguageCode},textTrack3:{label:r.config.captionsTextTrack3Label,languageCode:r.config.captionsTextTrack3LanguageCode},textTrack4:{label:r.config.captionsTextTrack4Label,languageCode:r.config.captionsTextTrack4LanguageCode}},r.config.enableCEA708Captions){var i=new It(Ft(r),"textTrack1"),a=new It(Ft(r),"textTrack2"),n=new It(Ft(r),"textTrack3"),s=new It(Ft(r),"textTrack4");r.cea608Parser1=new Ct(1,i,a),r.cea608Parser2=new Ct(3,n,s)}return r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.addCues=function(e,t,r,i,a){for(var n,s,o,l,u=!1,c=a.length;c--;){var h=a[c],f=(n=h[0],s=h[1],o=t,l=r,Math.min(s,l)-Math.max(n,o));if(f>=0&&(h[0]=Math.min(h[0],t),h[1]=Math.max(h[1],r),u=!0,f/(r-t)>.5))return}if(u||a.push([t,r]),this.config.renderTextTracksNatively)this.Cues.newCue(this.captionsTracks[e],t,r,i);else{var g=this.Cues.newCue(null,t,r,i);this.hls.trigger(d.a.CUES_PARSED,{type:"captions",cues:g,track:e})}},a.onInitPtsFound=function(e){var t=this,r=e.frag,i=e.id,a=e.initPTS,n=this.unparsedVttFrags;"main"===i&&(this.initPTS[r.cc]=a),n.length&&(this.unparsedVttFrags=[],n.forEach((function(e){t.onFragLoaded(e)})))},a.getExistingTrack=function(e){var t=this.media;if(t)for(var r=0;r<t.textTracks.length;r++){var i=t.textTracks[r];if(i[e])return i}return null},a.createCaptionsTrack=function(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)},a.createNativeTrack=function(e){if(!this.captionsTracks[e]){var t=this.captionsProperties,r=this.captionsTracks,i=this.media,a=t[e],n=a.label,s=a.languageCode,o=this.getExistingTrack(e);if(o)r[e]=o,Ne(r[e]),Ue(r[e],i);else{var l=this.createTextTrack("captions",n,s);l&&(l[e]=!0,r[e]=l)}}},a.createNonNativeTrack=function(e){if(!this.nonNativeCaptionsTracks[e]){var t=this.captionsProperties[e];if(t){var r={_id:e,label:t.label,kind:"captions",default:!!t.media&&!!t.media.default,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=r,this.hls.trigger(d.a.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[r]})}}},a.createTextTrack=function(e,t,r){var i=this.media;if(i)return i.addTextTrack(e,t,r)},a.destroy=function(){e.prototype.destroy.call(this)},a.onMediaAttaching=function(e){this.media=e.media,this._cleanTracks()},a.onMediaDetaching=function(){var e=this.captionsTracks;Object.keys(e).forEach((function(t){Ne(e[t]),delete e[t]})),this.nonNativeCaptionsTracks={}},a.onManifestLoading=function(){this.lastSn=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={}},a._cleanTracks=function(){var e=this.media;if(e){var t=e.textTracks;if(t)for(var r=0;r<t.length;r++)Ne(t[r])}},a.onManifestLoaded=function(e){var t=this;if(this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset()),this.config.enableWebVTT){var r=e.subtitles||[],i=this.tracks&&r&&this.tracks.length===r.length;if(this.tracks=e.subtitles||[],this.config.renderTextTracksNatively){var a=this.media?this.media.textTracks:[];this.tracks.forEach((function(e,r){var i;if(r<a.length){for(var n=null,s=0;s<a.length;s++)if(Ut(a[s],e)){n=a[s];break}n&&(i=n)}i||(i=t.createTextTrack("subtitles",e.name,e.lang)),e.default?i.mode=t.hls.subtitleDisplay?"showing":"hidden":i.mode="disabled",t.textTracks.push(i)}))}else if(!i&&this.tracks&&this.tracks.length){var n=this.tracks.map((function(e){return{label:e.name,kind:e.type.toLowerCase(),default:e.default,subtitleTrack:e}}));this.hls.trigger(d.a.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:n})}}this.config.enableCEA708Captions&&e.captions&&e.captions.forEach((function(e){var r=/(?:CC|SERVICE)([1-4])/.exec(e.instreamId);if(r){var i="textTrack"+r[1],a=t.captionsProperties[i];a&&(a.label=e.name,e.lang&&(a.languageCode=e.lang),a.media=e)}}))},a.onFragLoaded=function(e){var t=e.frag,r=e.payload,i=this.cea608Parser1,a=this.cea608Parser2,n=this.initPTS,s=this.lastSn,o=this.unparsedVttFrags;if("main"===t.type){var u=t.sn;t.sn!==s+1&&i&&a&&(i.reset(),a.reset()),this.lastSn=u}else if("subtitle"===t.type)if(r.byteLength){if(!Object(l.a)(n[t.cc]))return o.push(e),void(n.length&&this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t}));var c=t.decryptdata;null!=c&&null!=c.key&&"AES-128"===c.method||this._parseVTTs(t,r)}else this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t})},a._parseVTTs=function(e,t){var r=this,i=this.hls,a=this.prevCC,n=this.textTracks,s=this.vttCCs;s[e.cc]||(s[e.cc]={start:e.start,prevCC:a,new:!0},this.prevCC=e.cc),Mt.parse(t,this.initPTS[e.cc],s,e.cc,(function(t){if(r.config.renderTextTracksNatively){var a=n[e.level];if("disabled"===a.mode)return void i.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e});t.forEach((function(e){if(!a.cues.getCueById(e.id))try{if(a.addCue(e),!a.cues.getCueById(e.id))throw new Error("addCue is failed for: "+e)}catch(r){u.b.debug("Failed occurred on adding cues: "+r);var t=new window.TextTrackCue(e.startTime,e.endTime,e.text);t.id=e.id,a.addCue(t)}}))}else{var s=r.tracks[e.level].default?"default":"subtitles"+e.level;i.trigger(d.a.CUES_PARSED,{type:"subtitles",cues:t,track:s})}i.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})}),(function(t){u.b.log("Failed to parse VTT cue: "+t),i.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e})}))},a.onFragDecrypted=function(e){var t=e.frag,r=e.payload;if("subtitle"===t.type){if(!Object(l.a)(this.initPTS[t.cc]))return void this.unparsedVttFrags.push(e);this._parseVTTs(t,r)}},a.onFragParsingUserdata=function(e){var t=this.cea608Parser1,r=this.cea608Parser2;if(this.enabled&&t&&r)for(var i=0;i<e.samples.length;i++){var a=e.samples[i].bytes;if(a){var n=this.extractCea608Data(a);t.addData(e.samples[i].pts,n[0]),r.addData(e.samples[i].pts,n[1])}}},a.extractCea608Data=function(e){for(var t=31&e[0],r=2,i=[[],[]],a=0;a<t;a++){var n=e[r++],s=127&e[r++],o=127&e[r++],l=3&n;0===s&&0===o||0!=(4&n)&&(0!==l&&1!==l||(i[l].push(s),i[l].push(o)))}return i},i}(h);function Bt(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Gt(e){for(var t=[],r=0;r<e.length;r++){var i=e[r];"subtitles"===i.kind&&i.label&&t.push(e[r])}return t}var Kt=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.MANIFEST_LOADED,d.a.SUBTITLE_TRACK_LOADED)||this).tracks=[],r.trackId=-1,r.media=null,r.stopped=!0,r.subtitleDisplay=!0,r.queuedDefaultTrack=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,o=i.prototype;return o.destroy=function(){h.prototype.destroy.call(this)},o.onMediaAttached=function(e){var t=this;this.media=e.media,this.media&&(Object(l.a)(this.queuedDefaultTrack)&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=null),this.trackChangeListener=this._onTextTracksChanged.bind(this),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.subtitlePollingInterval=setInterval((function(){t.trackChangeListener()}),500):this.media.textTracks.addEventListener("change",this.trackChangeListener))},o.onMediaDetaching=function(){this.media&&(this.useTextTrackPolling?clearInterval(this.subtitlePollingInterval):this.media.textTracks.removeEventListener("change",this.trackChangeListener),Object(l.a)(this.subtitleTrack)&&(this.queuedDefaultTrack=this.subtitleTrack),Gt(this.media.textTracks).forEach((function(e){Ne(e)})),this.subtitleTrack=-1,this.media=null)},o.onManifestLoaded=function(e){var t=this,r=e.subtitles||[];this.tracks=r,this.hls.trigger(d.a.SUBTITLE_TRACKS_UPDATED,{subtitleTracks:r}),r.forEach((function(e){e.default&&(t.media?t.subtitleTrack=e.id:t.queuedDefaultTrack=e.id)}))},o.onSubtitleTrackLoaded=function(e){var t=this,r=e.id,i=e.details,a=this.trackId,n=this.tracks,s=n[a];if(r>=n.length||r!==a||!s||this.stopped)this._clearReloadTimer();else if(u.b.log("subtitle track "+r+" loaded"),i.live){var o=ae(s.details,i,e.stats.trequest);u.b.log("Reloading live subtitle playlist in "+o+"ms"),this.timer=setTimeout((function(){t._loadCurrentTrack()}),o)}else this._clearReloadTimer()},o.startLoad=function(){this.stopped=!1,this._loadCurrentTrack()},o.stopLoad=function(){this.stopped=!0,this._clearReloadTimer()},o._clearReloadTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},o._loadCurrentTrack=function(){var e=this.trackId,t=this.tracks,r=this.hls,i=t[e];e<0||!i||i.details&&!i.details.live||(u.b.log("Loading subtitle track "+e),r.trigger(d.a.SUBTITLE_TRACK_LOADING,{url:i.url,id:e}))},o._toggleTrackModes=function(e){var t=this.media,r=this.subtitleDisplay,i=this.trackId;if(t){var a=Gt(t.textTracks);if(-1===e)[].slice.call(a).forEach((function(e){e.mode="disabled"}));else{var n=a[i];n&&(n.mode="disabled")}var s=a[e];s&&(s.mode=r?"showing":"hidden")}},o._setSubtitleTrackInternal=function(e){var t=this.hls,r=this.tracks;!Object(l.a)(e)||e<-1||e>=r.length||(this.trackId=e,u.b.log("Switching to subtitle track "+e),t.trigger(d.a.SUBTITLE_TRACK_SWITCH,{id:e}),this._loadCurrentTrack())},o._onTextTracksChanged=function(){if(this.media&&this.hls.config.renderTextTracksNatively){for(var e=-1,t=Gt(this.media.textTracks),r=0;r<t.length;r++)if("hidden"===t[r].mode)e=r;else if("showing"===t[r].mode){e=r;break}this.subtitleTrack=e}},a=i,(n=[{key:"subtitleTracks",get:function(){return this.tracks}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(e){this.trackId!==e&&(this._toggleTrackModes(e),this._setSubtitleTrackInternal(e))}}])&&Bt(a.prototype,n),s&&Bt(a,s),i}(h),jt=r(7);var Ht,Vt=window.performance,Yt=function(e){var t,r;function i(t,r){var i;return(i=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.ERROR,d.a.KEY_LOADED,d.a.FRAG_LOADED,d.a.SUBTITLE_TRACKS_UPDATED,d.a.SUBTITLE_TRACK_SWITCH,d.a.SUBTITLE_TRACK_LOADED,d.a.SUBTITLE_FRAG_PROCESSED,d.a.LEVEL_UPDATED)||this).fragmentTracker=r,i.config=t.config,i.state=pe,i.tracks=[],i.tracksBuffered=[],i.currentTrackId=-1,i.decrypter=new jt.a(t,t.config),i.lastAVStart=0,i._onMediaSeeking=i.onMediaSeeking.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i)),i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.onSubtitleFragProcessed=function(e){var t=e.frag,r=e.success;if(this.fragPrevious=t,this.state=me,r){var i=this.tracksBuffered[this.currentTrackId];if(i){for(var a,n=t.start,s=0;s<i.length;s++)if(n>=i[s].start&&n<=i[s].end){a=i[s];break}var o=t.start+t.duration;a?a.end=o:(a={start:n,end:o},i.push(a))}}},a.onMediaAttached=function(e){var t=e.media;this.media=t,t.addEventListener("seeking",this._onMediaSeeking),this.state=me},a.onMediaDetaching=function(){var e=this;this.media&&(this.media.removeEventListener("seeking",this._onMediaSeeking),this.fragmentTracker.removeAllFragments(),this.currentTrackId=-1,this.tracks.forEach((function(t){e.tracksBuffered[t.id]=[]})),this.media=null,this.state=pe)},a.onError=function(e){var t=e.frag;t&&"subtitle"===t.type&&(this.state=me)},a.onSubtitleTracksUpdated=function(e){var t=this;u.b.log("subtitle tracks updated"),this.tracksBuffered=[],this.tracks=e.subtitleTracks,this.tracks.forEach((function(e){t.tracksBuffered[e.id]=[]}))},a.onSubtitleTrackSwitch=function(e){if(this.currentTrackId=e.id,this.tracks&&this.tracks.length&&-1!==this.currentTrackId){var t=this.tracks[this.currentTrackId];t&&t.details&&this.setInterval(500)}else this.clearInterval()},a.onSubtitleTrackLoaded=function(e){var t=e.id,r=e.details,i=this.currentTrackId,a=this.tracks,n=a[i];t>=a.length||t!==i||!n||(r.live&&function(e,t,r){void 0===r&&(r=0);var i=-1;ie(e,t,(function(e,t,r){t.start=e.start,i=r}));var a=t.fragments;if(i<0)a.forEach((function(e){e.start+=r}));else for(var n=i+1;n<a.length;n++)a[n].start=a[n-1].start+a[n-1].duration}(n.details,r,this.lastAVStart),n.details=r,this.setInterval(500))},a.onKeyLoaded=function(){this.state===be&&(this.state=me)},a.onFragLoaded=function(e){var t=this.fragCurrent,r=e.frag.decryptdata,i=e.frag,a=this.hls;if(this.state===Te&&t&&"subtitle"===e.frag.type&&t.sn===e.frag.sn&&e.payload.byteLength>0&&r&&r.key&&"AES-128"===r.method){var n=Vt.now();this.decrypter.decrypt(e.payload,r.key.buffer,r.iv.buffer,(function(e){var t=Vt.now();a.trigger(d.a.FRAG_DECRYPTED,{frag:i,payload:e,stats:{tstart:n,tdecrypt:t}})}))}},a.onLevelUpdated=function(e){var t=e.details.fragments;this.lastAVStart=t.length?t[0].start:0},a.doTick=function(){if(this.media)switch(this.state){case me:var e=this.config,t=this.currentTrackId,r=this.fragmentTracker,i=this.media,a=this.tracks;if(!a||!a[t]||!a[t].details)break;var n,s=e.maxBufferHole,o=e.maxFragLookUpTolerance,l=Math.min(e.maxBufferLength,e.maxMaxBufferLength),c=H.bufferedInfo(this._getBuffered(),i.currentTime,s),h=c.end,f=c.len,g=a[t].details,p=g.fragments,v=p.length,m=p[v-1].start+p[v-1].duration;if(f>l)return;var y=this.fragPrevious;h<m?(y&&g.hasProgramDateTime&&(n=le(p,y.endProgramDateTime,o)),n||(n=de(y,p,h,o))):n=p[v-1],n&&n.encrypted?(u.b.log("Loading key for "+n.sn),this.state=be,this.hls.trigger(d.a.KEY_LOADING,{frag:n})):n&&r.getState(n)===U&&(this.fragCurrent=n,this.state=Te,this.hls.trigger(d.a.FRAG_LOADING,{frag:n}))}else this.state=me},a.stopLoad=function(){this.lastAVStart=0,e.prototype.stopLoad.call(this)},a._getBuffered=function(){return this.tracksBuffered[this.currentTrackId]||[]},a.onMediaSeeking=function(){this.fragPrevious=null},i}(Oe);!function(e){e.WIDEVINE="com.widevine.alpha",e.PLAYREADY="com.microsoft.playready"}(Ht||(Ht={}));var Wt="undefined"!=typeof window&&window.navigator&&window.navigator.requestMediaKeySystemAccess?window.navigator.requestMediaKeySystemAccess.bind(window.navigator):null;function qt(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Xt=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHED,d.a.MANIFEST_PARSED)||this)._widevineLicenseUrl=void 0,r._licenseXhrSetup=void 0,r._emeEnabled=void 0,r._requestMediaKeySystemAccess=void 0,r._drmSystemOptions=void 0,r._config=void 0,r._mediaKeysList=[],r._media=null,r._hasSetMediaKeys=!1,r._requestLicenseFailureCount=0,r.mediaKeysPromise=null,r._onMediaEncrypted=function(e){if(u.b.log('Media is encrypted using "'+e.initDataType+'" init data type'),!r.mediaKeysPromise)return u.b.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),void r.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_KEYS,fatal:!0});var t=function(t){r._media&&(r._attemptSetMediaKeys(t),r._generateRequestWithPreferredKeySession(e.initDataType,e.initData))};r.mediaKeysPromise.then(t).catch(t)},r._config=t.config,r._widevineLicenseUrl=r._config.widevineLicenseUrl,r._licenseXhrSetup=r._config.licenseXhrSetup,r._emeEnabled=r._config.emeEnabled,r._requestMediaKeySystemAccess=r._config.requestMediaKeySystemAccessFunc,r._drmSystemOptions=t.config.drmSystemOptions,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,l=i.prototype;return l.getLicenseServerUrl=function(e){switch(e){case Ht.WIDEVINE:if(!this._widevineLicenseUrl)break;return this._widevineLicenseUrl}throw new Error('no license server URL configured for key-system "'+e+'"')},l._attemptKeySystemAccess=function(e,t,r){var i=this,a=function(e,t,r,i){switch(e){case Ht.WIDEVINE:return function(e,t,r){var i={audioCapabilities:[],videoCapabilities:[]};return e.forEach((function(e){i.audioCapabilities.push({contentType:'audio/mp4; codecs="'+e+'"',robustness:r.audioRobustness||""})})),t.forEach((function(e){i.videoCapabilities.push({contentType:'video/mp4; codecs="'+e+'"',robustness:r.videoRobustness||""})})),[i]}(t,r,i);default:throw new Error("Unknown key-system: "+e)}}(e,t,r,this._drmSystemOptions);u.b.log("Requesting encrypted media key-system access");var n=this.requestMediaKeySystemAccess(e,a);this.mediaKeysPromise=n.then((function(t){return i._onMediaKeySystemAccessObtained(e,t)})),n.catch((function(t){u.b.error('Failed to obtain key-system "'+e+'" access:',t)}))},l._onMediaKeySystemAccessObtained=function(e,t){var r=this;u.b.log('Access for key-system "'+e+'" obtained');var i={mediaKeysSessionInitialized:!1,mediaKeySystemAccess:t,mediaKeySystemDomain:e};this._mediaKeysList.push(i);var a=Promise.resolve().then((function(){return t.createMediaKeys()})).then((function(t){return i.mediaKeys=t,u.b.log('Media-keys created for key-system "'+e+'"'),r._onMediaKeysCreated(),t}));return a.catch((function(e){u.b.error("Failed to create media-keys:",e)})),a},l._onMediaKeysCreated=function(){var e=this;this._mediaKeysList.forEach((function(t){t.mediaKeysSession||(t.mediaKeysSession=t.mediaKeys.createSession(),e._onNewMediaKeySession(t.mediaKeysSession))}))},l._onNewMediaKeySession=function(e){var t=this;u.b.log("New key-system session "+e.sessionId),e.addEventListener("message",(function(r){t._onKeySessionMessage(e,r.message)}),!1)},l._onKeySessionMessage=function(e,t){u.b.log("Got EME message event, creating license request"),this._requestLicense(t,(function(t){u.b.log("Received license data (length: "+(t?t.byteLength:t)+"), updating key-session"),e.update(t)}))},l._attemptSetMediaKeys=function(e){if(!this._media)throw new Error("Attempted to set mediaKeys without first attaching a media element");if(!this._hasSetMediaKeys){var t=this._mediaKeysList[0];if(!t||!t.mediaKeys)return u.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_KEYS,fatal:!0});u.b.log("Setting keys for encrypted media"),this._media.setMediaKeys(t.mediaKeys),this._hasSetMediaKeys=!0}},l._generateRequestWithPreferredKeySession=function(e,t){var r=this,i=this._mediaKeysList[0];if(!i)return u.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_ACCESS,fatal:!0});if(i.mediaKeysSessionInitialized)u.b.warn("Key-Session already initialized but requested again");else{var a=i.mediaKeysSession;if(!a)return u.b.error("Fatal: Media is encrypted but no key-session existing"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_SESSION,fatal:!0});if(!t)return u.b.warn("Fatal: initData required for generating a key session is null"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_INIT_DATA,fatal:!0});u.b.log('Generating key-session request for "'+e+'" init data type'),i.mediaKeysSessionInitialized=!0,a.generateRequest(e,t).then((function(){u.b.debug("Key-session generation succeeded")})).catch((function(e){u.b.error("Error generating key-session request:",e),r.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_SESSION,fatal:!1})}))}},l._createLicenseXhr=function(e,t,r){var i=new XMLHttpRequest,a=this._licenseXhrSetup;try{if(a)try{a(i,e)}catch(t){i.open("POST",e,!0),a(i,e)}i.readyState||i.open("POST",e,!0)}catch(e){throw new Error("issue setting up KeySystem license XHR "+e)}return i.responseType="arraybuffer",i.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,i,e,t,r),i},l._onLicenseRequestReadyStageChange=function(e,t,r,i){switch(e.readyState){case 4:if(200===e.status)this._requestLicenseFailureCount=0,u.b.log("License request succeeded"),"arraybuffer"!==e.responseType&&u.b.warn("xhr response type was not set to the expected arraybuffer for license request"),i(e.response);else{if(u.b.error("License Request XHR failed ("+t+"). Status: "+e.status+" ("+e.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount>3)return void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0});var a=3-this._requestLicenseFailureCount+1;u.b.warn("Retrying license request, "+a+" attempts left"),this._requestLicense(r,i)}}},l._generateLicenseRequestChallenge=function(e,t){switch(e.mediaKeySystemDomain){case Ht.WIDEVINE:return t}throw new Error("unsupported key-system: "+e.mediaKeySystemDomain)},l._requestLicense=function(e,t){u.b.log("Requesting content license for key-system");var r=this._mediaKeysList[0];if(!r)return u.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_ACCESS,fatal:!0});try{var i=this.getLicenseServerUrl(r.mediaKeySystemDomain),a=this._createLicenseXhr(i,e,t);u.b.log("Sending license request to URL: "+i);var n=this._generateLicenseRequestChallenge(r,e);a.send(n)}catch(e){u.b.error("Failure requesting DRM license: "+e),this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}},l.onMediaAttached=function(e){if(this._emeEnabled){var t=e.media;this._media=t,t.addEventListener("encrypted",this._onMediaEncrypted)}},l.onMediaDetached=function(){var e=this._media,t=this._mediaKeysList;e&&(e.removeEventListener("encrypted",this._onMediaEncrypted),this._media=null,this._mediaKeysList=[],Promise.all(t.map((function(e){if(e.mediaKeysSession)return e.mediaKeysSession.close().catch((function(){}))}))).then((function(){return e.setMediaKeys(null)})).catch((function(){})))},l.onManifestParsed=function(e){if(this._emeEnabled){var t=e.levels.map((function(e){return e.audioCodec})),r=e.levels.map((function(e){return e.videoCodec}));this._attemptKeySystemAccess(Ht.WIDEVINE,t,r)}},a=i,(n=[{key:"requestMediaKeySystemAccess",get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess}}])&&qt(a.prototype,n),s&&qt(a,s),i}(h);function zt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function Qt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?zt(Object(r),!0).forEach((function(t){$t(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Jt=Qt(Qt({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,liveDurationInfinity:!1,liveBackBufferLength:1/0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:$e,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,abrController:Ve,bufferController:We,capLevelController:Xe,fpsController:Qe,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:Wt,testBandwidth:!0},{cueHandler:i,enableCEA708Captions:!0,enableWebVTT:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}),{},{subtitleStreamController:Yt,subtitleTrackController:Kt,timelineController:Nt,audioStreamController:rt,audioTrackController:Ze,emeController:Xt});function Zt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function er(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Zt(Object(r),!0).forEach((function(t){tr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Zt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function tr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function rr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ir(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ar(e,t,r){return t&&ir(e.prototype,t),r&&ir(e,r),e}var nr=function(e){var t,r;function i(t){var r;void 0===t&&(t={}),(r=e.call(this)||this).config=void 0,r._autoLevelCapping=void 0,r.abrController=void 0,r.capLevelController=void 0,r.levelController=void 0,r.streamController=void 0,r.networkControllers=void 0,r.audioTrackController=void 0,r.subtitleTrackController=void 0,r.emeController=void 0,r.coreComponents=void 0,r.media=null,r.url=null;var a=i.DefaultConfig;if((t.liveSyncDurationCount||t.liveMaxLatencyDurationCount)&&(t.liveSyncDuration||t.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");r.config=er(er({},a),t);var n=rr(r).config;if(void 0!==n.liveMaxLatencyDurationCount&&n.liveMaxLatencyDurationCount<=n.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==n.liveMaxLatencyDuration&&(void 0===n.liveSyncDuration||n.liveMaxLatencyDuration<=n.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');Object(u.a)(n.debug),r._autoLevelCapping=-1;var s=r.abrController=new n.abrController(rr(r)),o=new n.bufferController(rr(r)),l=r.capLevelController=new n.capLevelController(rr(r)),d=new n.fpsController(rr(r)),c=new x(rr(r)),h=new M(rr(r)),f=new F(rr(r)),g=new Be(rr(r)),p=r.levelController=new Me(rr(r)),v=new K(rr(r)),m=[p,r.streamController=new Pe(rr(r),v)],y=n.audioStreamController;y&&m.push(new y(rr(r),v)),r.networkControllers=m;var b=[c,h,f,s,o,l,d,g,v];if(y=n.audioTrackController){var T=new y(rr(r));r.audioTrackController=T,b.push(T)}if(y=n.subtitleTrackController){var E=new y(rr(r));r.subtitleTrackController=E,m.push(E)}if(y=n.emeController){var S=new y(rr(r));r.emeController=S,b.push(S)}return(y=n.subtitleStreamController)&&m.push(new y(rr(r),v)),(y=n.timelineController)&&b.push(new y(rr(r))),r.coreComponents=b,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.isSupported=function(){return function(){var e=q();if(!e)return!1;var t=self.SourceBuffer||self.WebKitSourceBuffer,r=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return!!r&&!!i}()},ar(i,null,[{key:"version",get:function(){return"0.14.13"}},{key:"Events",get:function(){return d.a}},{key:"ErrorTypes",get:function(){return o.b}},{key:"ErrorDetails",get:function(){return o.a}},{key:"DefaultConfig",get:function(){return i.defaultConfig?i.defaultConfig:Jt},set:function(e){i.defaultConfig=e}}]);var a=i.prototype;return a.destroy=function(){u.b.log("destroy"),this.trigger(d.a.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach((function(e){e.destroy()})),this.url=null,this.removeAllListeners(),this._autoLevelCapping=-1},a.attachMedia=function(e){u.b.log("attachMedia"),this.media=e,this.trigger(d.a.MEDIA_ATTACHING,{media:e})},a.detachMedia=function(){u.b.log("detachMedia"),this.trigger(d.a.MEDIA_DETACHING),this.media=null},a.loadSource=function(e){e=s.buildAbsoluteURL(window.location.href,e,{alwaysNormalize:!0}),u.b.log("loadSource:"+e),this.url=e,this.trigger(d.a.MANIFEST_LOADING,{url:e})},a.startLoad=function(e){void 0===e&&(e=-1),u.b.log("startLoad("+e+")"),this.networkControllers.forEach((function(t){t.startLoad(e)}))},a.stopLoad=function(){u.b.log("stopLoad"),this.networkControllers.forEach((function(e){e.stopLoad()}))},a.swapAudioCodec=function(){u.b.log("swapAudioCodec"),this.streamController.swapAudioCodec()},a.recoverMediaError=function(){u.b.log("recoverMediaError");var e=this.media;this.detachMedia(),e&&this.attachMedia(e)},a.removeLevel=function(e,t){void 0===t&&(t=0),this.levelController.removeLevel(e,t)},ar(i,[{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(e){u.b.log("set currentLevel:"+e),this.loadLevel=e,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(e){u.b.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(e){u.b.log("set loadLevel:"+e),this.levelController.manualLevel=e}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){u.b.log("set firstLevel:"+e),this.levelController.firstLevel=e}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(e){u.b.log("set startLevel:"+e),-1!==e&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}},{key:"capLevelToPlayerSize",set:function(e){var t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){u.b.log("set autoLevelCapping:"+e),this._autoLevelCapping=e}},{key:"bandwidthEstimate",get:function(){var e=this.abrController._bwEstimator;return e?e.getEstimate():NaN}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){for(var e=this.levels,t=this.config.minAutoBitrate,r=e?e.length:0,i=0;i<r;i++){if((e[i].realBitrate?Math.max(e[i].realBitrate,e[i].bitrate):e[i].bitrate)>t)return i}return 0}},{key:"maxAutoLevel",get:function(){var e=this.levels,t=this.autoLevelCapping;return-1===t&&e&&e.length?e.length-1:t}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)}},{key:"audioTracks",get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]}},{key:"audioTrack",get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var t=this.audioTrackController;t&&(t.audioTrack=e)}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}},{key:"subtitleTracks",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}},{key:"subtitleDisplay",get:function(){var e=this.subtitleTrackController;return!!e&&e.subtitleDisplay},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}}]),i}(z);nr.defaultConfig=void 0}]).default}));

/**
 * Swiper 5.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 16, 2020
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Swiper = factory());
}(this, (function () { 'use strict';

    /**
     * SSR Window 2.0.0
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: May 12, 2020
     */
    /* eslint-disable no-param-reassign */
    function isObject(obj) {
        return (obj !== null &&
            typeof obj === 'object' &&
            'constructor' in obj &&
            obj.constructor === Object);
    }
    function extend(target, src) {
        if (target === void 0) { target = {}; }
        if (src === void 0) { src = {}; }
        Object.keys(src).forEach(function (key) {
            if (typeof target[key] === 'undefined')
                { target[key] = src[key]; }
            else if (isObject(src[key]) &&
                isObject(target[key]) &&
                Object.keys(src[key]).length > 0) {
                extend(target[key], src[key]);
            }
        });
    }

    var doc = typeof document !== 'undefined' ? document : {};
    var ssrDocument = {
        body: {},
        addEventListener: function () { },
        removeEventListener: function () { },
        activeElement: {
            blur: function () { },
            nodeName: '',
        },
        querySelector: function () {
            return null;
        },
        querySelectorAll: function () {
            return [];
        },
        getElementById: function () {
            return null;
        },
        createEvent: function () {
            return {
                initEvent: function () { },
            };
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () { },
                getElementsByTagName: function () {
                    return [];
                },
            };
        },
        createElementNS: function () {
            return {};
        },
        importNode: function () {
            return null;
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: '',
        },
    };
    extend(doc, ssrDocument);

    var win = typeof window !== 'undefined' ? window : {};
    var ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: '',
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: '',
        },
        history: {
            replaceState: function () { },
            pushState: function () { },
            go: function () { },
            back: function () { },
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener: function () { },
        removeEventListener: function () { },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return '';
                },
            };
        },
        Image: function () { },
        Date: function () { },
        screen: {},
        setTimeout: function () { },
        clearTimeout: function () { },
        matchMedia: function () {
            return {};
        },
    };
    extend(win, ssrWindow);

    /**
     * Dom7 2.1.5
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * http://framework7.io/docs/dom.html
     *
     * Copyright 2020, Vladimir Kharlampidi
     * The iDangero.us
     * http://www.idangero.us/
     *
     * Licensed under MIT
     *
     * Released on: May 15, 2020
     */

    var Dom7 = function Dom7(arr) {
      var self = this;
      // Create array-like object
      for (var i = 0; i < arr.length; i += 1) {
        self[i] = arr[i];
      }
      self.length = arr.length;
      // Return collection with methods
      return this;
    };

    function $(selector, context) {
      var arr = [];
      var i = 0;
      if (selector && !context) {
        if (selector instanceof Dom7) {
          return selector;
        }
      }
      if (selector) {
          // String
        if (typeof selector === 'string') {
          var els;
          var tempParent;
          var html = selector.trim();
          if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
            var toCreate = 'div';
            if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
            if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
            if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
            if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
            if (html.indexOf('<option') === 0) { toCreate = 'select'; }
            tempParent = doc.createElement(toCreate);
            tempParent.innerHTML = html;
            for (i = 0; i < tempParent.childNodes.length; i += 1) {
              arr.push(tempParent.childNodes[i]);
            }
          } else {
            if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
              // Pure ID selector
              els = [doc.getElementById(selector.trim().split('#')[1])];
            } else {
              // Other selectors
              els = (context || doc).querySelectorAll(selector.trim());
            }
            for (i = 0; i < els.length; i += 1) {
              if (els[i]) { arr.push(els[i]); }
            }
          }
        } else if (selector.nodeType || selector === win || selector === doc) {
          // Node/element
          arr.push(selector);
        } else if (selector.length > 0 && selector[0].nodeType) {
          // Array of elements or instance of Dom
          for (i = 0; i < selector.length; i += 1) {
            arr.push(selector[i]);
          }
        }
      }
      return new Dom7(arr);
    }

    $.fn = Dom7.prototype;
    $.Class = Dom7;
    $.Dom7 = Dom7;

    function unique(arr) {
      var uniqueArray = [];
      for (var i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
      }
      return uniqueArray;
    }

    // Classes and attributes
    function addClass(className) {
      if (typeof className === 'undefined') {
        return this;
      }
      var classes = className.split(' ');
      for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
          if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
        }
      }
      return this;
    }
    function removeClass(className) {
      var classes = className.split(' ');
      for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
          if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
        }
      }
      return this;
    }
    function hasClass(className) {
      if (!this[0]) { return false; }
      return this[0].classList.contains(className);
    }
    function toggleClass(className) {
      var classes = className.split(' ');
      for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
          if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
        }
      }
      return this;
    }
    function attr(attrs, value) {
      var arguments$1 = arguments;

      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) { return this[0].getAttribute(attrs); }
        return undefined;
      }

      // Set attrs
      for (var i = 0; i < this.length; i += 1) {
        if (arguments$1.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          // eslint-disable-next-line
          for (var attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }
      return this;
    }
    // eslint-disable-next-line
    function removeAttr(attr) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }
      return this;
    }
    function data(key, value) {
      var el;
      if (typeof value === 'undefined') {
        el = this[0];
        // Get value
        if (el) {
          if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
            return el.dom7ElementDataStorage[key];
          }

          var dataKey = el.getAttribute(("data-" + key));
          if (dataKey) {
            return dataKey;
          }
          return undefined;
        }
        return undefined;
      }

      // Set value
      for (var i = 0; i < this.length; i += 1) {
        el = this[i];
        if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
        el.dom7ElementDataStorage[key] = value;
      }
      return this;
    }
    // Transforms
    // eslint-disable-next-line
    function transform(transform) {
      for (var i = 0; i < this.length; i += 1) {
        var elStyle = this[i].style;
        elStyle.webkitTransform = transform;
        elStyle.transform = transform;
      }
      return this;
    }
    function transition(duration) {
      if (typeof duration !== 'string') {
        duration = duration + "ms"; // eslint-disable-line
      }
      for (var i = 0; i < this.length; i += 1) {
        var elStyle = this[i].style;
        elStyle.webkitTransitionDuration = duration;
        elStyle.transitionDuration = duration;
      }
      return this;
    }
    // Events
    function on() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var eventType = args[0];
      var targetSelector = args[1];
      var listener = args[2];
      var capture = args[3];
      if (typeof args[1] === 'function') {
        (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
        targetSelector = undefined;
      }
      if (!capture) { capture = false; }

      function handleLiveEvent(e) {
        var target = e.target;
        if (!target) { return; }
        var eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }
        if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
        else {
          var parents = $(target).parents(); // eslint-disable-line
          for (var k = 0; k < parents.length; k += 1) {
            if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
          }
        }
      }
      function handleEvent(e) {
        var eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }
        listener.apply(this, eventData);
      }
      var events = eventType.split(' ');
      var j;
      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];
        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            var event = events[j];
            if (!el.dom7Listeners) { el.dom7Listeners = {}; }
            if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
            el.dom7Listeners[event].push({
              listener: listener,
              proxyListener: handleEvent,
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            var event$1 = events[j];
            if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
            if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
            el.dom7LiveListeners[event$1].push({
              listener: listener,
              proxyListener: handleLiveEvent,
            });
            el.addEventListener(event$1, handleLiveEvent, capture);
          }
        }
      }
      return this;
    }
    function off() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var eventType = args[0];
      var targetSelector = args[1];
      var listener = args[2];
      var capture = args[3];
      if (typeof args[1] === 'function') {
        (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
        targetSelector = undefined;
      }
      if (!capture) { capture = false; }

      var events = eventType.split(' ');
      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];
        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
          var handlers = (void 0);
          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }
          if (handlers && handlers.length) {
            for (var k = handlers.length - 1; k >= 0; k -= 1) {
              var handler = handlers[k];
              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }
      return this;
    }
    function trigger() {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var events = args[0].split(' ');
      var eventData = args[1];
      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];
        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
          var evt = (void 0);
          try {
            evt = new win.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true,
            });
          } catch (e) {
            evt = doc.createEvent('Event');
            evt.initEvent(event, true, true);
            evt.detail = eventData;
          }
          // eslint-disable-next-line
          el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
      return this;
    }
    function transitionEnd(callback) {
      var events = ['webkitTransitionEnd', 'transitionend'];
      var dom = this;
      var i;
      function fireCallBack(e) {
        /* jshint validthis:true */
        if (e.target !== this) { return; }
        callback.call(this, e);
        for (i = 0; i < events.length; i += 1) {
          dom.off(events[i], fireCallBack);
        }
      }
      if (callback) {
        for (i = 0; i < events.length; i += 1) {
          dom.on(events[i], fireCallBack);
        }
      }
      return this;
    }
    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          // eslint-disable-next-line
          var styles = this.styles();
          return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
      }
      return null;
    }
    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          // eslint-disable-next-line
          var styles = this.styles();
          return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
      }
      return null;
    }
    function offset() {
      if (this.length > 0) {
        var el = this[0];
        var box = el.getBoundingClientRect();
        var body = doc.body;
        var clientTop = el.clientTop || body.clientTop || 0;
        var clientLeft = el.clientLeft || body.clientLeft || 0;
        var scrollTop = el === win ? win.scrollY : el.scrollTop;
        var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
        return {
          top: (box.top + scrollTop) - clientTop,
          left: (box.left + scrollLeft) - clientLeft,
        };
      }

      return null;
    }
    function styles() {
      if (this[0]) { return win.getComputedStyle(this[0], null); }
      return {};
    }
    function css(props, value) {
      var i;
      if (arguments.length === 1) {
        if (typeof props === 'string') {
          if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
        } else {
          for (i = 0; i < this.length; i += 1) {
            // eslint-disable-next-line
            for (var prop in props) {
              this[i].style[prop] = props[prop];
            }
          }
          return this;
        }
      }
      if (arguments.length === 2 && typeof props === 'string') {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }
        return this;
      }
      return this;
    }
    // Iterate over the collection passing elements to `callback`
    function each(callback) {
      // Don't bother continuing without a callback
      if (!callback) { return this; }
      // Iterate over the current collection
      for (var i = 0; i < this.length; i += 1) {
        // If the callback returns false
        if (callback.call(this[i], i, this[i]) === false) {
          // End the loop early
          return this;
        }
      }
      // Return `this` to allow chained DOM operations
      return this;
    }
    function filter(callback) {
      var matchedItems = [];
      var dom = this;
      for (var i = 0; i < dom.length; i += 1) {
        if (callback.call(dom[i], i, dom[i])) { matchedItems.push(dom[i]); }
      }
      return new Dom7(matchedItems);
    }
    // eslint-disable-next-line
    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : undefined;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }
      return this;
    }
    // eslint-disable-next-line
    function text(text) {
      if (typeof text === 'undefined') {
        if (this[0]) {
          return this[0].textContent.trim();
        }
        return null;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }
      return this;
    }
    function is(selector) {
      var el = this[0];
      var compareWith;
      var i;
      if (!el || typeof selector === 'undefined') { return false; }
      if (typeof selector === 'string') {
        if (el.matches) { return el.matches(selector); }
        else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
        else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

        compareWith = $(selector);
        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) { return true; }
        }
        return false;
      } else if (selector === doc) { return el === doc; }
      else if (selector === win) { return el === win; }

      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;
        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) { return true; }
        }
        return false;
      }
      return false;
    }
    function index() {
      var child = this[0];
      var i;
      if (child) {
        i = 0;
        // eslint-disable-next-line
        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) { i += 1; }
        }
        return i;
      }
      return undefined;
    }
    // eslint-disable-next-line
    function eq(index) {
      if (typeof index === 'undefined') { return this; }
      var length = this.length;
      var returnIndex;
      if (index > length - 1) {
        return new Dom7([]);
      }
      if (index < 0) {
        returnIndex = length + index;
        if (returnIndex < 0) { return new Dom7([]); }
        return new Dom7([this[returnIndex]]);
      }
      return new Dom7([this[index]]);
    }
    function append() {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var newChild;

      for (var k = 0; k < args.length; k += 1) {
        newChild = args[k];
        for (var i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            var tempDiv = doc.createElement('div');
            tempDiv.innerHTML = newChild;
            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (var j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }

      return this;
    }
    function prepend(newChild) {
      var i;
      var j;
      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }
      return this;
    }
    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return new Dom7([this[0].nextElementSibling]);
          }
          return new Dom7([]);
        }

        if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
        return new Dom7([]);
      }
      return new Dom7([]);
    }
    function nextAll(selector) {
      var nextEls = [];
      var el = this[0];
      if (!el) { return new Dom7([]); }
      while (el.nextElementSibling) {
        var next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
          if ($(next).is(selector)) { nextEls.push(next); }
        } else { nextEls.push(next); }
        el = next;
      }
      return new Dom7(nextEls);
    }
    function prev(selector) {
      if (this.length > 0) {
        var el = this[0];
        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return new Dom7([el.previousElementSibling]);
          }
          return new Dom7([]);
        }

        if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
        return new Dom7([]);
      }
      return new Dom7([]);
    }
    function prevAll(selector) {
      var prevEls = [];
      var el = this[0];
      if (!el) { return new Dom7([]); }
      while (el.previousElementSibling) {
        var prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
          if ($(prev).is(selector)) { prevEls.push(prev); }
        } else { prevEls.push(prev); }
        el = prev;
      }
      return new Dom7(prevEls);
    }
    function parent(selector) {
      var parents = []; // eslint-disable-line
      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }
      return $(unique(parents));
    }
    function parents(selector) {
      var parents = []; // eslint-disable-line
      for (var i = 0; i < this.length; i += 1) {
        var parent = this[i].parentNode; // eslint-disable-line
        while (parent) {
          if (selector) {
            if ($(parent).is(selector)) { parents.push(parent); }
          } else {
            parents.push(parent);
          }
          parent = parent.parentNode;
        }
      }
      return $(unique(parents));
    }
    function closest(selector) {
      var closest = this; // eslint-disable-line
      if (typeof selector === 'undefined') {
        return new Dom7([]);
      }
      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }
      return closest;
    }
    function find(selector) {
      var foundElements = [];
      for (var i = 0; i < this.length; i += 1) {
        var found = this[i].querySelectorAll(selector);
        for (var j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }
      return new Dom7(foundElements);
    }
    function children(selector) {
      var children = []; // eslint-disable-line
      for (var i = 0; i < this.length; i += 1) {
        var childNodes = this[i].childNodes;

        for (var j = 0; j < childNodes.length; j += 1) {
          if (!selector) {
            if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
          } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }
      return new Dom7(unique(children));
    }
    function remove() {
      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
      }
      return this;
    }
    function add() {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dom = this;
      var i;
      var j;
      for (i = 0; i < args.length; i += 1) {
        var toAdd = $(args[i]);
        for (j = 0; j < toAdd.length; j += 1) {
          dom[dom.length] = toAdd[j];
          dom.length += 1;
        }
      }
      return dom;
    }

    var Methods = {
      addClass: addClass,
      removeClass: removeClass,
      hasClass: hasClass,
      toggleClass: toggleClass,
      attr: attr,
      removeAttr: removeAttr,
      data: data,
      transform: transform,
      transition: transition,
      on: on,
      off: off,
      trigger: trigger,
      transitionEnd: transitionEnd,
      outerWidth: outerWidth,
      outerHeight: outerHeight,
      offset: offset,
      css: css,
      each: each,
      html: html,
      text: text,
      is: is,
      index: index,
      eq: eq,
      append: append,
      prepend: prepend,
      next: next,
      nextAll: nextAll,
      prev: prev,
      prevAll: prevAll,
      parent: parent,
      parents: parents,
      closest: closest,
      find: find,
      children: children,
      filter: filter,
      remove: remove,
      add: add,
      styles: styles,
    };

    Object.keys(Methods).forEach(function (methodName) {
      $.fn[methodName] = $.fn[methodName] || Methods[methodName];
    });

    var Utils = {
      deleteProps: function deleteProps(obj) {
        var object = obj;
        Object.keys(object).forEach(function (key) {
          try {
            object[key] = null;
          } catch (e) {
            // no getter for object
          }
          try {
            delete object[key];
          } catch (e) {
            // something got wrong
          }
        });
      },
      nextTick: function nextTick(callback, delay) {
        if ( delay === void 0 ) delay = 0;

        return setTimeout(callback, delay);
      },
      now: function now() {
        return Date.now();
      },
      getTranslate: function getTranslate(el, axis) {
        if ( axis === void 0 ) axis = 'x';

        var matrix;
        var curTransform;
        var transformMatrix;

        var curStyle = win.getComputedStyle(el, null);

        if (win.WebKitCSSMatrix) {
          curTransform = curStyle.transform || curStyle.webkitTransform;
          if (curTransform.split(',').length > 6) {
            curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
          }
          // Some old versions of Webkit choke when 'none' is passed; pass
          // empty string instead in this case
          transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
          transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
          matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
          // Latest Chrome and webkits Fix
          if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
          // Crazy IE10 Matrix
          else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
          // Normal Browsers
          else { curTransform = parseFloat(matrix[4]); }
        }
        if (axis === 'y') {
          // Latest Chrome and webkits Fix
          if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
          // Crazy IE10 Matrix
          else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
          // Normal Browsers
          else { curTransform = parseFloat(matrix[5]); }
        }
        return curTransform || 0;
      },
      parseUrlQuery: function parseUrlQuery(url) {
        var query = {};
        var urlToParse = url || win.location.href;
        var i;
        var params;
        var param;
        var length;
        if (typeof urlToParse === 'string' && urlToParse.length) {
          urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
          params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
          length = params.length;

          for (i = 0; i < length; i += 1) {
            param = params[i].replace(/#\S+/g, '').split('=');
            query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
          }
        }
        return query;
      },
      isObject: function isObject(o) {
        return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
      },
      extend: function extend() {
        var args = [], len$1 = arguments.length;
        while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

        var to = Object(args[0]);
        for (var i = 1; i < args.length; i += 1) {
          var nextSource = args[i];
          if (nextSource !== undefined && nextSource !== null) {
            var keysArray = Object.keys(Object(nextSource));
            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
              var nextKey = keysArray[nextIndex];
              var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
              if (desc !== undefined && desc.enumerable) {
                if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                  Utils.extend(to[nextKey], nextSource[nextKey]);
                } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                  to[nextKey] = {};
                  Utils.extend(to[nextKey], nextSource[nextKey]);
                } else {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
        }
        return to;
      },
    };

    var Support = (function Support() {
      return {
        touch: !!(('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch)),

        pointerEvents: !!win.PointerEvent && ('maxTouchPoints' in win.navigator) && win.navigator.maxTouchPoints >= 0,

        observer: (function checkObserver() {
          return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
        }()),

        passiveListener: (function checkPassiveListener() {
          var supportsPassive = false;
          try {
            var opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get: function get() {
                supportsPassive = true;
              },
            });
            win.addEventListener('testPassiveListener', null, opts);
          } catch (e) {
            // No support
          }
          return supportsPassive;
        }()),

        gestures: (function checkGestures() {
          return 'ongesturestart' in win;
        }()),
      };
    }());

    var SwiperClass = function SwiperClass(params) {
      if ( params === void 0 ) params = {};

      var self = this;
      self.params = params;

      // Events
      self.eventsListeners = {};

      if (self.params && self.params.on) {
        Object.keys(self.params.on).forEach(function (eventName) {
          self.on(eventName, self.params.on[eventName]);
        });
      }
    };

    var staticAccessors = { components: { configurable: true } };

    SwiperClass.prototype.on = function on (events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') { return self; }
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
        self.eventsListeners[event][method](handler);
      });
      return self;
    };

    SwiperClass.prototype.once = function once (events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') { return self; }
      function onceHandler() {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

        self.off(events, onceHandler);
        if (onceHandler.f7proxy) {
          delete onceHandler.f7proxy;
        }
        handler.apply(self, args);
      }
      onceHandler.f7proxy = handler;
      return self.on(events, onceHandler, priority);
    };

    SwiperClass.prototype.off = function off (events, handler) {
      var self = this;
      if (!self.eventsListeners) { return self; }
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    };

    SwiperClass.prototype.emit = function emit () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      var self = this;
      if (!self.eventsListeners) { return self; }
      var events;
      var data;
      var context;
      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsListeners && self.eventsListeners[event]) {
          var handlers = [];
          self.eventsListeners[event].forEach(function (eventHandler) {
            handlers.push(eventHandler);
          });
          handlers.forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    };

    SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
      var instance = this;
      if (!instance.modules) { return; }
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        // Extend params
        if (module.params) {
          Utils.extend(instanceParams, module.params);
        }
      });
    };

    SwiperClass.prototype.useModules = function useModules (modulesParams) {
        if ( modulesParams === void 0 ) modulesParams = {};

      var instance = this;
      if (!instance.modules) { return; }
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {};
        // Extend instance methods and props
        if (module.instance) {
          Object.keys(module.instance).forEach(function (modulePropName) {
            var moduleProp = module.instance[modulePropName];
            if (typeof moduleProp === 'function') {
              instance[modulePropName] = moduleProp.bind(instance);
            } else {
              instance[modulePropName] = moduleProp;
            }
          });
        }
        // Add event listeners
        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        }

        // Module create callback
        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    };

    staticAccessors.components.set = function (components) {
      var Class = this;
      if (!Class.use) { return; }
      Class.use(components);
    };

    SwiperClass.installModule = function installModule (module) {
        var params = [], len = arguments.length - 1;
        while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

      var Class = this;
      if (!Class.prototype.modules) { Class.prototype.modules = {}; }
      var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
      Class.prototype.modules[name] = module;
      // Prototype
      if (module.proto) {
        Object.keys(module.proto).forEach(function (key) {
          Class.prototype[key] = module.proto[key];
        });
      }
      // Class
      if (module.static) {
        Object.keys(module.static).forEach(function (key) {
          Class[key] = module.static[key];
        });
      }
      // Callback
      if (module.install) {
        module.install.apply(Class, params);
      }
      return Class;
    };

    SwiperClass.use = function use (module) {
        var params = [], len = arguments.length - 1;
        while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

      var Class = this;
      if (Array.isArray(module)) {
        module.forEach(function (m) { return Class.installModule(m); });
        return Class;
      }
      return Class.installModule.apply(Class, [ module ].concat( params ));
    };

    Object.defineProperties( SwiperClass, staticAccessors );

    function updateSize () {
      var swiper = this;
      var width;
      var height;
      var $el = swiper.$el;
      if (typeof swiper.params.width !== 'undefined') {
        width = swiper.params.width;
      } else {
        width = $el[0].clientWidth;
      }
      if (typeof swiper.params.height !== 'undefined') {
        height = swiper.params.height;
      } else {
        height = $el[0].clientHeight;
      }
      if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
        return;
      }

      // Subtract paddings
      width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
      height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

      Utils.extend(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height,
      });
    }

    function updateSlides () {
      var swiper = this;
      var params = swiper.params;

      var $wrapperEl = swiper.$wrapperEl;
      var swiperSize = swiper.size;
      var rtl = swiper.rtlTranslate;
      var wrongRTL = swiper.wrongRTL;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
      var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      var snapGrid = [];
      var slidesGrid = [];
      var slidesSizesGrid = [];

      function slidesForMargin(slideIndex) {
        if (!params.cssMode) { return true; }
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }

      var offsetBefore = params.slidesOffsetBefore;
      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }

      var offsetAfter = params.slidesOffsetAfter;
      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }

      var previousSnapGridLength = swiper.snapGrid.length;
      var previousSlidesGridLength = swiper.snapGrid.length;

      var spaceBetween = params.spaceBetween;
      var slidePosition = -offsetBefore;
      var prevSlideSize = 0;
      var index = 0;
      if (typeof swiperSize === 'undefined') {
        return;
      }
      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
      }

      swiper.virtualSize = -spaceBetween;

      // reset margins
      if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
      else { slides.css({ marginRight: '', marginBottom: '' }); }

      var slidesNumberEvenToRows;
      if (params.slidesPerColumn > 1) {
        if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
        }
        if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
        }
      }

      // Calc slides
      var slideSize;
      var slidesPerColumn = params.slidesPerColumn;
      var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
      var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
      for (var i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        var slide = slides.eq(i);
        if (params.slidesPerColumn > 1) {
          // Set slides order
          var newSlideOrderIndex = (void 0);
          var column = (void 0);
          var row = (void 0);
          if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
            var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
            var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
            var columnsInGroup = groupIndex === 0
              ? params.slidesPerGroup
              : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = (slideIndexInGroup - row * columnsInGroup) + groupIndex * params.slidesPerGroup;

            newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
            slide
              .css({
                '-webkit-box-ordinal-group': newSlideOrderIndex,
                '-moz-box-ordinal-group': newSlideOrderIndex,
                '-ms-flex-order': newSlideOrderIndex,
                '-webkit-order': newSlideOrderIndex,
                order: newSlideOrderIndex,
              });
          } else if (params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - (column * slidesPerColumn);
            if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
              row += 1;
              if (row >= slidesPerColumn) {
                row = 0;
                column += 1;
              }
            }
          } else {
            row = Math.floor(i / slidesPerRow);
            column = i - (row * slidesPerRow);
          }
          slide.css(
            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
          );
        }
        if (slide.css('display') === 'none') { continue; } // eslint-disable-line

        if (params.slidesPerView === 'auto') {
          var slideStyles = win.getComputedStyle(slide[0], null);
          var currentTransform = slide[0].style.transform;
          var currentWebKitTransform = slide[0].style.webkitTransform;
          if (currentTransform) {
            slide[0].style.transform = 'none';
          }
          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = 'none';
          }
          if (params.roundLengths) {
            slideSize = swiper.isHorizontal()
              ? slide.outerWidth(true)
              : slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            if (swiper.isHorizontal()) {
              var width = parseFloat(slideStyles.getPropertyValue('width'));
              var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
              var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
              var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
              var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
              var boxSizing = slideStyles.getPropertyValue('box-sizing');
              if (boxSizing && boxSizing === 'border-box') {
                slideSize = width + marginLeft + marginRight;
              } else {
                slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
              }
            } else {
              var height = parseFloat(slideStyles.getPropertyValue('height'));
              var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
              var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
              var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
              var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
              var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
              if (boxSizing$1 && boxSizing$1 === 'border-box') {
                slideSize = height + marginTop + marginBottom;
              } else {
                slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
              }
            }
          }
          if (currentTransform) {
            slide[0].style.transform = currentTransform;
          }
          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = currentWebKitTransform;
          }
          if (params.roundLengths) { slideSize = Math.floor(slideSize); }
        } else {
          slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
          if (params.roundLengths) { slideSize = Math.floor(slideSize); }

          if (slides[i]) {
            if (swiper.isHorizontal()) {
              slides[i].style.width = slideSize + "px";
            } else {
              slides[i].style.height = slideSize + "px";
            }
          }
        }
        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }
        slidesSizesGrid.push(slideSize);


        if (params.centeredSlides) {
          slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
          if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
          if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
          if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
          if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }

        swiper.virtualSize += slideSize + spaceBetween;

        prevSlideSize = slideSize;

        index += 1;
      }
      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
      var newSlidesGrid;

      if (
        rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
      }
      if (params.setWrapperSize) {
        if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
        else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      }

      if (params.slidesPerColumn > 1) {
        swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
        if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
        else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
        if (params.centeredSlides) {
          newSlidesGrid = [];
          for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
            var slidesGridItem = snapGrid[i$1];
            if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
            if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
          }
          snapGrid = newSlidesGrid;
        }
      }

      // Remove last grid elements depending on width
      if (!params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
          var slidesGridItem$1 = snapGrid[i$2];
          if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
          if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(slidesGridItem$1);
          }
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }
      if (snapGrid.length === 0) { snapGrid = [0]; }

      if (params.spaceBetween !== 0) {
        if (swiper.isHorizontal()) {
          if (rtl) { slides.filter(slidesForMargin).css({ marginLeft: (spaceBetween + "px") }); }
          else { slides.filter(slidesForMargin).css({ marginRight: (spaceBetween + "px") }); }
        } else { slides.filter(slidesForMargin).css({ marginBottom: (spaceBetween + "px") }); }
      }

      if (params.centeredSlides && params.centeredSlidesBounds) {
        var allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        var maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(function (snap) {
          if (snap < 0) { return -offsetBefore; }
          if (snap > maxSnap) { return maxSnap + offsetAfter; }
          return snap;
        });
      }

      if (params.centerInsufficientSlides) {
        var allSlidesSize$1 = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          allSlidesSize$1 += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize$1 -= params.spaceBetween;
        if (allSlidesSize$1 < swiperSize) {
          var allSlidesOffset = (swiperSize - allSlidesSize$1) / 2;
          snapGrid.forEach(function (snap, snapIndex) {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach(function (snap, snapIndex) {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }

      Utils.extend(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid,
      });

      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }
      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
        swiper.emit('snapGridLengthChange');
      }
      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }

      if (params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateSlidesOffset();
      }
    }

    function updateAutoHeight (speed) {
      var swiper = this;
      var activeSlides = [];
      var newHeight = 0;
      var i;
      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      }
      // Find slides currently in view
      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          swiper.visibleSlides.each(function (index, slide) {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            var index = swiper.activeIndex + i;
            if (index > swiper.slides.length) { break; }
            activeSlides.push(swiper.slides.eq(index)[0]);
          }
        }
      } else {
        activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
      }

      // Find new height from highest slide in view
      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          var height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      }

      // Update Height
      if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
    }

    function updateSlidesOffset () {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }

    function updateSlidesProgress (translate) {
      if ( translate === void 0 ) translate = (this && this.translate) || 0;

      var swiper = this;
      var params = swiper.params;

      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;

      if (slides.length === 0) { return; }
      if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

      var offsetCenter = -translate;
      if (rtl) { offsetCenter = translate; }

      // Visible Slides
      slides.removeClass(params.slideVisibleClass);

      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];

      for (var i = 0; i < slides.length; i += 1) {
        var slide = slides[i];
        var slideProgress = (
          (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
        ) / (slide.swiperSlideSize + params.spaceBetween);
        if (params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) {
          var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
          var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
          var isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
                    || (slideAfter > 1 && slideAfter <= swiper.size)
                    || (slideBefore <= 0 && slideAfter >= swiper.size);
          if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
          }
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
      }
      swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress (translate) {
      var swiper = this;
      if (typeof translate === 'undefined') {
        var multiplier = swiper.rtlTranslate ? -1 : 1;
        // eslint-disable-next-line
        translate = (swiper && swiper.translate && (swiper.translate * multiplier)) || 0;
      }
      var params = swiper.params;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      var progress = swiper.progress;
      var isBeginning = swiper.isBeginning;
      var isEnd = swiper.isEnd;
      var wasBeginning = isBeginning;
      var wasEnd = isEnd;
      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / (translatesDiff);
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }
      Utils.extend(swiper, {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd,
      });

      if (params.watchSlidesProgress || params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) { swiper.updateSlidesProgress(translate); }

      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }
      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }
      if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
        swiper.emit('fromEdge');
      }

      swiper.emit('progress', progress);
    }

    function updateSlidesClasses () {
      var swiper = this;

      var slides = swiper.slides;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var activeIndex = swiper.activeIndex;
      var realIndex = swiper.realIndex;
      var isVirtual = swiper.virtual && params.virtual.enabled;

      slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

      var activeSlide;
      if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
      } else {
        activeSlide = slides.eq(activeIndex);
      }

      // Active classes
      activeSlide.addClass(params.slideActiveClass);

      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl
            .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
            .addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl
            .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
            .addClass(params.slideDuplicateActiveClass);
        }
      }
      // Next Slide
      var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      }
      // Prev Slide
      var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }
      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl
            .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
            .addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl
            .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
            .addClass(params.slideDuplicateNextClass);
        }
        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl
            .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
            .addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl
            .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
            .addClass(params.slideDuplicatePrevClass);
        }
      }
    }

    function updateActiveIndex (newActiveIndex) {
      var swiper = this;
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      var slidesGrid = swiper.slidesGrid;
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      var previousIndex = swiper.activeIndex;
      var previousRealIndex = swiper.realIndex;
      var previousSnapIndex = swiper.snapIndex;
      var activeIndex = newActiveIndex;
      var snapIndex;
      if (typeof activeIndex === 'undefined') {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        }
        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
        }
      }
      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }
      if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }
        return;
      }

      // Get real index
      var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

      Utils.extend(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex,
      });
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');
      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }
      if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }

    function updateClickedSlide (e) {
      var swiper = this;
      var params = swiper.params;
      var slide = $(e.target).closest(("." + (params.slideClass)))[0];
      var slideFound = false;
      if (slide) {
        for (var i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) { slideFound = true; }
        }
      }

      if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = $(slide).index();
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }
      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }

    var update = {
      updateSize: updateSize,
      updateSlides: updateSlides,
      updateAutoHeight: updateAutoHeight,
      updateSlidesOffset: updateSlidesOffset,
      updateSlidesProgress: updateSlidesProgress,
      updateProgress: updateProgress,
      updateSlidesClasses: updateSlidesClasses,
      updateActiveIndex: updateActiveIndex,
      updateClickedSlide: updateClickedSlide,
    };

    function getTranslate (axis) {
      if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

      var swiper = this;

      var params = swiper.params;
      var rtl = swiper.rtlTranslate;
      var translate = swiper.translate;
      var $wrapperEl = swiper.$wrapperEl;

      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }
      if (params.cssMode) {
        return translate;
      }

      var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
      if (rtl) { currentTranslate = -currentTranslate; }

      return currentTranslate || 0;
    }

    function setTranslate (translate, byController) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var wrapperEl = swiper.wrapperEl;
      var progress = swiper.progress;
      var x = 0;
      var y = 0;
      var z = 0;

      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }

      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)"));
      }
      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y;

      // Check if we need to update progress
      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
      }
      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }

      swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate () {
      return (-this.snapGrid[0]);
    }

    function maxTranslate () {
      return (-this.snapGrid[this.snapGrid.length - 1]);
    }

    function translateTo (translate, speed, runCallbacks, translateBounds, internal) {
      var obj;

      if ( translate === void 0 ) translate = 0;
      if ( speed === void 0 ) speed = this.params.speed;
      if ( runCallbacks === void 0 ) runCallbacks = true;
      if ( translateBounds === void 0 ) translateBounds = true;
      var swiper = this;

      var params = swiper.params;
      var wrapperEl = swiper.wrapperEl;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      var minTranslate = swiper.minTranslate();
      var maxTranslate = swiper.maxTranslate();
      var newTranslate;
      if (translateBounds && translate > minTranslate) { newTranslate = minTranslate; }
      else if (translateBounds && translate < maxTranslate) { newTranslate = maxTranslate; }
      else { newTranslate = translate; }

      // Update progress
      swiper.updateProgress(newTranslate);

      if (params.cssMode) {
        var isH = swiper.isHorizontal();
        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            wrapperEl.scrollTo(( obj = {}, obj[isH ? 'left' : 'top'] = -newTranslate, obj.behavior = 'smooth', obj ));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
          }
        }
        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
          swiper.animating = true;
          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) { return; }
              if (e.target !== this) { return; }
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;
              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
      }

      return true;
    }

    var translate = {
      getTranslate: getTranslate,
      setTranslate: setTranslate,
      minTranslate: minTranslate,
      maxTranslate: maxTranslate,
      translateTo: translateTo,
    };

    function setTransition (duration, byController) {
      var swiper = this;

      if (!swiper.params.cssMode) {
        swiper.$wrapperEl.transition(duration);
      }

      swiper.emit('setTransition', duration, byController);
    }

    function transitionStart (runCallbacks, direction) {
      if ( runCallbacks === void 0 ) runCallbacks = true;

      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var params = swiper.params;
      var previousIndex = swiper.previousIndex;
      if (params.cssMode) { return; }
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      var dir = direction;
      if (!dir) {
        if (activeIndex > previousIndex) { dir = 'next'; }
        else if (activeIndex < previousIndex) { dir = 'prev'; }
        else { dir = 'reset'; }
      }

      swiper.emit('transitionStart');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionStart');
          return;
        }
        swiper.emit('slideChangeTransitionStart');
        if (dir === 'next') {
          swiper.emit('slideNextTransitionStart');
        } else {
          swiper.emit('slidePrevTransitionStart');
        }
      }
    }

    function transitionEnd$1 (runCallbacks, direction) {
      if ( runCallbacks === void 0 ) runCallbacks = true;

      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var previousIndex = swiper.previousIndex;
      var params = swiper.params;
      swiper.animating = false;
      if (params.cssMode) { return; }
      swiper.setTransition(0);

      var dir = direction;
      if (!dir) {
        if (activeIndex > previousIndex) { dir = 'next'; }
        else if (activeIndex < previousIndex) { dir = 'prev'; }
        else { dir = 'reset'; }
      }

      swiper.emit('transitionEnd');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionEnd');
          return;
        }
        swiper.emit('slideChangeTransitionEnd');
        if (dir === 'next') {
          swiper.emit('slideNextTransitionEnd');
        } else {
          swiper.emit('slidePrevTransitionEnd');
        }
      }
    }

    var transition$1 = {
      setTransition: setTransition,
      transitionStart: transitionStart,
      transitionEnd: transitionEnd$1,
    };

    function slideTo (index, speed, runCallbacks, internal) {
      var obj;

      if ( index === void 0 ) index = 0;
      if ( speed === void 0 ) speed = this.params.speed;
      if ( runCallbacks === void 0 ) runCallbacks = true;
      var swiper = this;
      var slideIndex = index;
      if (slideIndex < 0) { slideIndex = 0; }

      var params = swiper.params;
      var snapGrid = swiper.snapGrid;
      var slidesGrid = swiper.slidesGrid;
      var previousIndex = swiper.previousIndex;
      var activeIndex = swiper.activeIndex;
      var rtl = swiper.rtlTranslate;
      var wrapperEl = swiper.wrapperEl;
      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

      if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }

      var translate = -snapGrid[snapIndex];

      // Update progress
      swiper.updateProgress(translate);

      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
            slideIndex = i;
          }
        }
      }
      // Directions locks
      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
          return false;
        }
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) { return false; }
        }
      }

      var direction;
      if (slideIndex > activeIndex) { direction = 'next'; }
      else if (slideIndex < activeIndex) { direction = 'prev'; }
      else { direction = 'reset'; }


      // Update Index
      if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }
        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
      }
      if (params.cssMode) {
        var isH = swiper.isHorizontal();
        var t = -translate;
        if (rtl) {
          t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
        }
        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            wrapperEl.scrollTo(( obj = {}, obj[isH ? 'left' : 'top'] = t, obj.behavior = 'smooth', obj ));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          }
        }
        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (!swiper.animating) {
          swiper.animating = true;
          if (!swiper.onSlideToWrapperTransitionEnd) {
            swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) { return; }
              if (e.target !== this) { return; }
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
              swiper.onSlideToWrapperTransitionEnd = null;
              delete swiper.onSlideToWrapperTransitionEnd;
              swiper.transitionEnd(runCallbacks, direction);
            };
          }
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
      }

      return true;
    }

    function slideToLoop (index, speed, runCallbacks, internal) {
      if ( index === void 0 ) index = 0;
      if ( speed === void 0 ) speed = this.params.speed;
      if ( runCallbacks === void 0 ) runCallbacks = true;

      var swiper = this;
      var newIndex = index;
      if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
      }

      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext (speed, runCallbacks, internal) {
      if ( speed === void 0 ) speed = this.params.speed;
      if ( runCallbacks === void 0 ) runCallbacks = true;

      var swiper = this;
      var params = swiper.params;
      var animating = swiper.animating;
      var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
      if (params.loop) {
        if (animating) { return false; }
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }
      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev (speed, runCallbacks, internal) {
      if ( speed === void 0 ) speed = this.params.speed;
      if ( runCallbacks === void 0 ) runCallbacks = true;

      var swiper = this;
      var params = swiper.params;
      var animating = swiper.animating;
      var snapGrid = swiper.snapGrid;
      var slidesGrid = swiper.slidesGrid;
      var rtlTranslate = swiper.rtlTranslate;

      if (params.loop) {
        if (animating) { return false; }
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }
      var translate = rtlTranslate ? swiper.translate : -swiper.translate;
      function normalize(val) {
        if (val < 0) { return -Math.floor(Math.abs(val)); }
        return Math.floor(val);
      }
      var normalizedTranslate = normalize(translate);
      var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
      var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

      var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
      var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
      if (typeof prevSnap === 'undefined' && params.cssMode) {
        snapGrid.forEach(function (snap) {
          if (!prevSnap && normalizedTranslate >= snap) { prevSnap = snap; }
        });
      }
      var prevIndex;
      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
      }
      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset (speed, runCallbacks, internal) {
      if ( speed === void 0 ) speed = this.params.speed;
      if ( runCallbacks === void 0 ) runCallbacks = true;

      var swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest (speed, runCallbacks, internal, threshold) {
      if ( speed === void 0 ) speed = this.params.speed;
      if ( runCallbacks === void 0 ) runCallbacks = true;
      if ( threshold === void 0 ) threshold = 0.5;

      var swiper = this;
      var index = swiper.activeIndex;
      var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);

      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        var currentSnap = swiper.snapGrid[snapIndex];
        var nextSnap = swiper.snapGrid[snapIndex + 1];
        if ((translate - currentSnap) > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        var prevSnap = swiper.snapGrid[snapIndex - 1];
        var currentSnap$1 = swiper.snapGrid[snapIndex];
        if ((translate - prevSnap) <= (currentSnap$1 - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }
      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);

      return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide () {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;

      var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      var slideToIndex = swiper.clickedIndex;
      var realIndex;
      if (params.loop) {
        if (swiper.animating) { return; }
        realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
          if (
            (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
            || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
          ) {
            swiper.loopFix();
            slideToIndex = $wrapperEl
              .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
              .eq(0)
              .index();

            Utils.nextTick(function () {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }

    var slide = {
      slideTo: slideTo,
      slideToLoop: slideToLoop,
      slideNext: slideNext,
      slidePrev: slidePrev,
      slideReset: slideReset,
      slideToClosest: slideToClosest,
      slideToClickedSlide: slideToClickedSlide,
    };

    function loopCreate () {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      // Remove duplicated slides
      $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

      var slides = $wrapperEl.children(("." + (params.slideClass)));

      if (params.loopFillGroupWithBlank) {
        var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
        if (blankSlidesNum !== params.slidesPerGroup) {
          for (var i = 0; i < blankSlidesNum; i += 1) {
            var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
            $wrapperEl.append(blankNode);
          }
          slides = $wrapperEl.children(("." + (params.slideClass)));
        }
      }

      if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

      swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper.loopedSlides += params.loopAdditionalSlides;
      if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
      }

      var prependSlides = [];
      var appendSlides = [];
      slides.each(function (index, el) {
        var slide = $(el);
        if (index < swiper.loopedSlides) { appendSlides.push(el); }
        if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
        slide.attr('data-swiper-slide-index', index);
      });
      for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
        $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
      for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
        $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }

    function loopFix () {
      var swiper = this;

      swiper.emit('beforeLoopFix');

      var activeIndex = swiper.activeIndex;
      var slides = swiper.slides;
      var loopedSlides = swiper.loopedSlides;
      var allowSlidePrev = swiper.allowSlidePrev;
      var allowSlideNext = swiper.allowSlideNext;
      var snapGrid = swiper.snapGrid;
      var rtl = swiper.rtlTranslate;
      var newIndex;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;

      var snapTranslate = -snapGrid[activeIndex];
      var diff = snapTranslate - swiper.getTranslate();

      // Fix For Negative Oversliding
      if (activeIndex < loopedSlides) {
        newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
        newIndex += loopedSlides;
        var slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged$1 && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;

      swiper.emit('loopFix');
    }

    function loopDestroy () {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var params = swiper.params;
      var slides = swiper.slides;
      $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
      slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
      loopCreate: loopCreate,
      loopFix: loopFix,
      loopDestroy: loopDestroy,
    };

    function setGrabCursor (moving) {
      var swiper = this;
      if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) { return; }
      var el = swiper.el;
      el.style.cursor = 'move';
      el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
      el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor () {
      var swiper = this;
      if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) { return; }
      swiper.el.style.cursor = '';
    }

    var grabCursor = {
      setGrabCursor: setGrabCursor,
      unsetGrabCursor: unsetGrabCursor,
    };

    function appendSlide (slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var params = swiper.params;
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { $wrapperEl.append(slides[i]); }
        }
      } else {
        $wrapperEl.append(slides);
      }
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!(params.observer && Support.observer)) {
        swiper.update();
      }
    }

    function prependSlide (slides) {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var activeIndex = swiper.activeIndex;

      if (params.loop) {
        swiper.loopDestroy();
      }
      var newActiveIndex = activeIndex + 1;
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { $wrapperEl.prepend(slides[i]); }
        }
        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!(params.observer && Support.observer)) {
        swiper.update();
      }
      swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide (index, slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var params = swiper.params;
      var activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;
      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
      }
      var baseLength = swiper.slides.length;
      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }
      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }
      var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

      var slidesBuffer = [];
      for (var i = baseLength - 1; i >= index; i -= 1) {
        var currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
          if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
        }
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }

      for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
        $wrapperEl.append(slidesBuffer[i$2]);
      }

      if (params.loop) {
        swiper.loopCreate();
      }
      if (!(params.observer && Support.observer)) {
        swiper.update();
      }
      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeSlide (slidesIndexes) {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var activeIndex = swiper.activeIndex;

      var activeIndexBuffer = activeIndex;
      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
      }
      var newActiveIndex = activeIndexBuffer;
      var indexToRemove;

      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (var i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
          if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
        newActiveIndex = Math.max(newActiveIndex, 0);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && Support.observer)) {
        swiper.update();
      }
      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeAllSlides () {
      var swiper = this;

      var slidesIndexes = [];
      for (var i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }
      swiper.removeSlide(slidesIndexes);
    }

    var manipulation = {
      appendSlide: appendSlide,
      prependSlide: prependSlide,
      addSlide: addSlide,
      removeSlide: removeSlide,
      removeAllSlides: removeAllSlides,
    };

    var Device = (function Device() {
      var platform = win.navigator.platform;
      var ua = win.navigator.userAgent;

      var device = {
        ios: false,
        android: false,
        androidChrome: false,
        desktop: false,
        iphone: false,
        ipod: false,
        ipad: false,
        edge: false,
        ie: false,
        firefox: false,
        macos: false,
        windows: false,
        cordova: !!(win.cordova || win.phonegap),
        phonegap: !!(win.cordova || win.phonegap),
        electron: false,
      };

      var screenWidth = win.screen.width;
      var screenHeight = win.screen.height;

      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      var ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
      var edge = ua.indexOf('Edge/') >= 0;
      var firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
      var windows = platform === 'Win32';
      var electron = ua.toLowerCase().indexOf('electron') >= 0;
      var macos = platform === 'MacIntel';

      // iPadOs 13 fix
      if (!ipad
        && macos
        && Support.touch
        && (
          (screenWidth === 1024 && screenHeight === 1366) // Pro 12.9
          || (screenWidth === 834 && screenHeight === 1194) // Pro 11
          || (screenWidth === 834 && screenHeight === 1112) // Pro 10.5
          || (screenWidth === 768 && screenHeight === 1024) // other
        )
      ) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        macos = false;
      }

      device.ie = ie;
      device.edge = edge;
      device.firefox = firefox;

      // Android
      if (android && !windows) {
        device.os = 'android';
        device.osVersion = android[2];
        device.android = true;
        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
      }
      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      }
      // iOS
      if (iphone && !ipod) {
        device.osVersion = iphone[2].replace(/_/g, '.');
        device.iphone = true;
      }
      if (ipad) {
        device.osVersion = ipad[2].replace(/_/g, '.');
        device.ipad = true;
      }
      if (ipod) {
        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
        device.ipod = true;
      }
      // iOS 8+ changed UA
      if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
        if (device.osVersion.split('.')[0] === '10') {
          device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
        }
      }

      // Webview
      device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || win.navigator.standalone))
        || (win.matchMedia && win.matchMedia('(display-mode: standalone)').matches);
      device.webview = device.webView;
      device.standalone = device.webView;

      // Desktop
      device.desktop = !(device.ios || device.android) || electron;
      if (device.desktop) {
        device.electron = electron;
        device.macos = macos;
        device.windows = windows;
        if (device.macos) {
          device.os = 'macos';
        }
        if (device.windows) {
          device.os = 'windows';
        }
      }

      // Pixel Ratio
      device.pixelRatio = win.devicePixelRatio || 1;

      // Export object
      return device;
    }());

    function onTouchStart (event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params;
      var touches = swiper.touches;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; }
      var $targetEl = $(e.target);

      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) { return; }
      }
      data.isTouchEvent = e.type === 'touchstart';
      if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
      if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
      if (data.isTouched && data.isMoved) { return; }
      if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
        swiper.allowClick = true;
        return;
      }
      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) { return; }
      }

      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      var startX = touches.currentX;
      var startY = touches.currentY;

      // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

      var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
      if (
        edgeSwipeDetection
        && ((startX <= edgeSwipeThreshold)
        || (startX >= win.screen.width - edgeSwipeThreshold))
      ) {
        return;
      }

      Utils.extend(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined,
      });

      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = Utils.now();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;
      if (params.threshold > 0) { data.allowThresholdMove = false; }
      if (e.type !== 'touchstart') {
        var preventDefault = true;
        if ($targetEl.is(data.formElements)) { preventDefault = false; }
        if (
          doc.activeElement
          && $(doc.activeElement).is(data.formElements)
          && doc.activeElement !== $targetEl[0]
        ) {
          doc.activeElement.blur();
        }

        var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if (params.touchStartForcePreventDefault || shouldPreventDefault) {
          e.preventDefault();
        }
      }
      swiper.emit('touchStart', e);
    }

    function onTouchMove (event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params;
      var touches = swiper.touches;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; }
      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }
        return;
      }
      if (data.isTouchEvent && e.type !== 'touchmove') { return; }
      var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }
      if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;
        if (data.isTouched) {
          Utils.extend(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY,
          });
          data.touchStartTime = Utils.now();
        }
        return;
      }
      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (
            (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
            || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
          ) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (
          (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
          || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
        ) {
          return;
        }
      }
      if (data.isTouchEvent && doc.activeElement) {
        if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }
      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }
      if (e.targetTouches && e.targetTouches.length > 1) { return; }

      touches.currentX = pageX;
      touches.currentY = pageY;

      var diffX = touches.currentX - touches.startX;
      var diffY = touches.currentY - touches.startY;
      if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

      if (typeof data.isScrolling === 'undefined') {
        var touchAngle;
        if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if ((diffX * diffX) + (diffY * diffY) >= 25) {
            touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
          }
        }
      }
      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }
      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }
      if (!data.startMoving) {
        return;
      }
      swiper.allowClick = false;
      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }
      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }

      if (!data.isMoved) {
        if (params.loop) {
          swiper.loopFix();
        }
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }
        swiper.emit('sliderFirstMove', e);
      }
      swiper.emit('sliderMove', e);
      data.isMoved = true;

      var diff = swiper.isHorizontal() ? diffX : diffY;
      touches.diff = diff;

      diff *= params.touchRatio;
      if (rtl) { diff = -diff; }

      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;

      var disableParentSwiper = true;
      var resistanceRatio = params.resistanceRatio;
      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }
      if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
        disableParentSwiper = false;
        if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
      }

      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      }

      // Directions locks
      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }
      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }


      // Threshold
      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }

      if (!params.followFinger || params.cssMode) { return; }

      // Update active index in free mode
      if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      if (params.freeMode) {
        // Velocity
        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime,
          });
        }
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: Utils.now(),
        });
      }
      // Update progress
      swiper.updateProgress(data.currentTranslate);
      // Update translate
      swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd (event) {
      var swiper = this;
      var data = swiper.touchEventsData;

      var params = swiper.params;
      var touches = swiper.touches;
      var rtl = swiper.rtlTranslate;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesGrid = swiper.slidesGrid;
      var snapGrid = swiper.snapGrid;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; }
      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }
      data.allowTouchCallbacks = false;
      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }
        data.isMoved = false;
        data.startMoving = false;
        return;
      }
      // Return Grab Cursor
      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      }

      // Time diff
      var touchEndTime = Utils.now();
      var timeDiff = touchEndTime - data.touchStartTime;

      // Tap, doubleTap, Click
      if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }

      data.lastClickTime = Utils.now();
      Utils.nextTick(function () {
        if (!swiper.destroyed) { swiper.allowClick = true; }
      });

      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;

      var currentPos;
      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }

      if (params.cssMode) {
        return;
      }

      if (params.freeMode) {
        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }
          return;
        }

        if (params.freeModeMomentum) {
          if (data.velocities.length > 1) {
            var lastMoveEvent = data.velocities.pop();
            var velocityEvent = data.velocities.pop();

            var distance = lastMoveEvent.position - velocityEvent.position;
            var time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;
            if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
              swiper.velocity = 0;
            }
            // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.
            if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }
          swiper.velocity *= params.freeModeMomentumVelocityRatio;

          data.velocities.length = 0;
          var momentumDuration = 1000 * params.freeModeMomentumRatio;
          var momentumDistance = swiper.velocity * momentumDuration;

          var newPosition = swiper.translate + momentumDistance;
          if (rtl) { newPosition = -newPosition; }

          var doBounce = false;
          var afterBouncePosition;
          var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
          var needsLoopFix;
          if (newPosition < swiper.maxTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }
              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }
            if (params.loop && params.centeredSlides) { needsLoopFix = true; }
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }
              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }
            if (params.loop && params.centeredSlides) { needsLoopFix = true; }
          } else if (params.freeModeSticky) {
            var nextSlide;
            for (var j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }

            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }
            newPosition = -newPosition;
          }
          if (needsLoopFix) {
            swiper.once('transitionEnd', function () {
              swiper.loopFix();
            });
          }
          // Fix duration
          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }
            if (params.freeModeSticky) {
              // If freeModeSticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeModeSticky) {
            swiper.slideToClosest();
            return;
          }

          if (params.freeModeMomentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
              swiper.emit('momentumBounce');
              swiper.setTransition(params.speed);
              setTimeout(function () {
                swiper.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(function () {
                  if (!swiper || swiper.destroyed) { return; }
                  swiper.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper.velocity) {
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            if (!swiper.animating) {
              swiper.animating = true;
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) { return; }
                swiper.transitionEnd();
              });
            }
          } else {
            swiper.updateProgress(newPosition);
          }

          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
        return;
      }

      // Find current slide
      var stopIndex = 0;
      var groupSize = swiper.slidesSizesGrid[0];
      for (var i = 0; i < slidesGrid.length; i += (i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup)) {
        var increment$1 = (i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup);
        if (typeof slidesGrid[i + increment$1] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment$1]) {
            stopIndex = i;
            groupSize = slidesGrid[i + increment$1] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      }

      // Find current slide size
      var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      var increment = (stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup);

      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + increment); }
          else { swiper.slideTo(stopIndex); }
        }
        if (swiper.swipeDirection === 'prev') {
          if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + increment); }
          else { swiper.slideTo(stopIndex); }
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
        var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(stopIndex + increment);
          }
          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }

    function onResize () {
      var swiper = this;

      var params = swiper.params;
      var el = swiper.el;

      if (el && el.offsetWidth === 0) { return; }

      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Save locks
      var allowSlideNext = swiper.allowSlideNext;
      var allowSlidePrev = swiper.allowSlidePrev;
      var snapGrid = swiper.snapGrid;

      // Disable locks on resize
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;

      swiper.updateSize();
      swiper.updateSlides();

      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
      }
      // Return locks after resize
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;

      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }

    function onClick (e) {
      var swiper = this;
      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) { e.preventDefault(); }
        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }

    function onScroll () {
      var swiper = this;
      var wrapperEl = swiper.wrapperEl;
      var rtlTranslate = swiper.rtlTranslate;
      swiper.previousTranslate = swiper.translate;
      if (swiper.isHorizontal()) {
        if (rtlTranslate) {
          swiper.translate = ((wrapperEl.scrollWidth - wrapperEl.offsetWidth) - wrapperEl.scrollLeft);
        } else {
          swiper.translate = -wrapperEl.scrollLeft;
        }
      } else {
        swiper.translate = -wrapperEl.scrollTop;
      }
      // eslint-disable-next-line
      if (swiper.translate === -0) { swiper.translate = 0; }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / (translatesDiff);
      }
      if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
      }

      swiper.emit('setTranslate', swiper.translate, false);
    }

    var dummyEventAttached = false;
    function dummyEventListener() {}

    function attachEvents() {
      var swiper = this;
      var params = swiper.params;
      var touchEvents = swiper.touchEvents;
      var el = swiper.el;
      var wrapperEl = swiper.wrapperEl;

      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
      if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
      }

      swiper.onClick = onClick.bind(swiper);

      var capture = !!params.nested;

      // Touch Events
      if (!Support.touch && Support.pointerEvents) {
        el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
          el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
          if (touchEvents.cancel) {
            el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }
          if (!dummyEventAttached) {
            doc.addEventListener('touchstart', dummyEventListener);
            dummyEventAttached = true;
          }
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          el.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        el.addEventListener('click', swiper.onClick, true);
      }
      if (params.cssMode) {
        wrapperEl.addEventListener('scroll', swiper.onScroll);
      }

      // Resize handler
      if (params.updateOnWindowResize) {
        swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
      } else {
        swiper.on('observerUpdate', onResize, true);
      }
    }

    function detachEvents() {
      var swiper = this;

      var params = swiper.params;
      var touchEvents = swiper.touchEvents;
      var el = swiper.el;
      var wrapperEl = swiper.wrapperEl;

      var capture = !!params.nested;

      // Touch Events
      if (!Support.touch && Support.pointerEvents) {
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
          if (touchEvents.cancel) {
            el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          el.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        el.removeEventListener('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl.removeEventListener('scroll', swiper.onScroll);
      }

      // Resize handler
      swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
    }

    var events = {
      attachEvents: attachEvents,
      detachEvents: detachEvents,
    };

    function setBreakpoint () {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var initialized = swiper.initialized;
      var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
      var params = swiper.params;
      var $el = swiper.$el;
      var breakpoints = params.breakpoints;
      if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

      // Get breakpoint for window width and update parameters
      var breakpoint = swiper.getBreakpoint(breakpoints);

      if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
        var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
        if (breakpointOnlyParams) {
          ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
            var paramValue = breakpointOnlyParams[param];
            if (typeof paramValue === 'undefined') { return; }
            if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
              breakpointOnlyParams[param] = 'auto';
            } else if (param === 'slidesPerView') {
              breakpointOnlyParams[param] = parseFloat(paramValue);
            } else {
              breakpointOnlyParams[param] = parseInt(paramValue, 10);
            }
          });
        }

        var breakpointParams = breakpointOnlyParams || swiper.originalParams;
        var wasMultiRow = params.slidesPerColumn > 1;
        var isMultiRow = breakpointParams.slidesPerColumn > 1;
        if (wasMultiRow && !isMultiRow) {
          $el.removeClass(((params.containerModifierClass) + "multirow " + (params.containerModifierClass) + "multirow-column"));
        } else if (!wasMultiRow && isMultiRow) {
          $el.addClass(((params.containerModifierClass) + "multirow"));
          if (breakpointParams.slidesPerColumnFill === 'column') {
            $el.addClass(((params.containerModifierClass) + "multirow-column"));
          }
        }

        var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

        if (directionChanged && initialized) {
          swiper.changeDirection();
        }

        Utils.extend(swiper.params, breakpointParams);

        Utils.extend(swiper, {
          allowTouchMove: swiper.params.allowTouchMove,
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
        });

        swiper.currentBreakpoint = breakpoint;

        if (needsReLoop && initialized) {
          swiper.loopDestroy();
          swiper.loopCreate();
          swiper.updateSlides();
          swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
        }

        swiper.emit('breakpoint', breakpointParams);
      }
    }

    function getBreakpoint (breakpoints) {
      // Get breakpoint for window width
      if (!breakpoints) { return undefined; }
      var breakpoint = false;

      var points = Object.keys(breakpoints).map(function (point) {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          var minRatio = parseFloat(point.substr(1));
          var value = win.innerHeight * minRatio;
          return { value: value, point: point };
        }
        return { value: point, point: point };
      });

      points.sort(function (a, b) { return parseInt(a.value, 10) - parseInt(b.value, 10); });
      for (var i = 0; i < points.length; i += 1) {
        var ref = points[i];
        var point = ref.point;
        var value = ref.value;
        if (value <= win.innerWidth) {
          breakpoint = point;
        }
      }
      return breakpoint || 'max';
    }

    var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

    function addClasses () {
      var swiper = this;
      var classNames = swiper.classNames;
      var params = swiper.params;
      var rtl = swiper.rtl;
      var $el = swiper.$el;
      var suffixes = [];

      suffixes.push('initialized');
      suffixes.push(params.direction);

      if (params.freeMode) {
        suffixes.push('free-mode');
      }
      if (params.autoHeight) {
        suffixes.push('autoheight');
      }
      if (rtl) {
        suffixes.push('rtl');
      }
      if (params.slidesPerColumn > 1) {
        suffixes.push('multirow');
        if (params.slidesPerColumnFill === 'column') {
          suffixes.push('multirow-column');
        }
      }
      if (Device.android) {
        suffixes.push('android');
      }
      if (Device.ios) {
        suffixes.push('ios');
      }

      if (params.cssMode) {
        suffixes.push('css-mode');
      }

      suffixes.forEach(function (suffix) {
        classNames.push(params.containerModifierClass + suffix);
      });

      $el.addClass(classNames.join(' '));
    }

    function removeClasses () {
      var swiper = this;
      var $el = swiper.$el;
      var classNames = swiper.classNames;

      $el.removeClass(classNames.join(' '));
    }

    var classes = { addClasses: addClasses, removeClasses: removeClasses };

    function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
      var image;
      function onReady() {
        if (callback) { callback(); }
      }
      var isPicture = $(imageEl).parent('picture')[0];

      if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
          image = new win.Image();
          image.onload = onReady;
          image.onerror = onReady;
          if (sizes) {
            image.sizes = sizes;
          }
          if (srcset) {
            image.srcset = srcset;
          }
          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }

    function preloadImages () {
      var swiper = this;
      swiper.imagesToLoad = swiper.$el.find('img');
      function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
        if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) { swiper.update(); }
          swiper.emit('imagesReady');
        }
      }
      for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
        var imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(
          imageEl,
          imageEl.currentSrc || imageEl.getAttribute('src'),
          imageEl.srcset || imageEl.getAttribute('srcset'),
          imageEl.sizes || imageEl.getAttribute('sizes'),
          true,
          onReady
        );
      }
    }

    var images = {
      loadImage: loadImage,
      preloadImages: preloadImages,
    };

    function checkOverflow() {
      var swiper = this;
      var params = swiper.params;
      var wasLocked = swiper.isLocked;
      var lastSlidePosition = swiper.slides.length > 0 && (params.slidesOffsetBefore + (params.spaceBetween * (swiper.slides.length - 1)) + ((swiper.slides[0]).offsetWidth) * swiper.slides.length);

      if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
        swiper.isLocked = lastSlidePosition <= swiper.size;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }

      swiper.allowSlideNext = !swiper.isLocked;
      swiper.allowSlidePrev = !swiper.isLocked;

      // events
      if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
        if (swiper.navigation) { swiper.navigation.update(); }
      }
    }

    var checkOverflow$1 = { checkOverflow: checkOverflow };

    var defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      //
      preventInteractionOnTransition: false,

      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,

      // Free mode
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: false,
      freeModeMinimumVelocity: 0.02,

      // Autoheight
      autoHeight: false,

      // Set wrapper width
      setWrapperSize: false,

      // Virtual Translate
      virtualTranslate: false,

      // Effects
      effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

      // Breakpoints
      breakpoints: undefined,

      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0, // in px
      slidesOffsetAfter: 0, // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,

      // Disable swiper and hide navigation when container not overflow
      watchOverflow: false,

      // Round length
      roundLengths: false,

      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,

      // Unique Navigation Elements
      uniqueNavElements: true,

      // Resistance
      resistance: true,
      resistanceRatio: 0.85,

      // Progress
      watchSlidesProgress: false,
      watchSlidesVisibility: false,

      // Cursor
      grabCursor: false,

      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,

      // Images
      preloadImages: true,
      updateOnImagesReady: true,

      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: false,

      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null, // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,

      // Passive Listeners
      passiveListeners: true,

      // NS
      containerModifierClass: 'swiper-container-', // NEW
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',

      // Callbacks
      runCallbacksOnInit: true,
    };

    /* eslint no-param-reassign: "off" */

    var prototypes = {
      update: update,
      translate: translate,
      transition: transition$1,
      slide: slide,
      loop: loop,
      grabCursor: grabCursor,
      manipulation: manipulation,
      events: events,
      breakpoints: breakpoints,
      checkOverflow: checkOverflow$1,
      classes: classes,
      images: images,
    };

    var extendedDefaults = {};

    var Swiper = /*@__PURE__*/(function (SwiperClass) {
      function Swiper() {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        var el;
        var params;
        if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
          params = args[0];
        } else {
          (assign = args, el = assign[0], params = assign[1]);
        }
        if (!params) { params = {}; }

        params = Utils.extend({}, params);
        if (el && !params.el) { params.el = el; }

        SwiperClass.call(this, params);

        Object.keys(prototypes).forEach(function (prototypeGroup) {
          Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
            if (!Swiper.prototype[protoMethod]) {
              Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }
          });
        });

        // Swiper Instance
        var swiper = this;
        if (typeof swiper.modules === 'undefined') {
          swiper.modules = {};
        }
        Object.keys(swiper.modules).forEach(function (moduleName) {
          var module = swiper.modules[moduleName];
          if (module.params) {
            var moduleParamName = Object.keys(module.params)[0];
            var moduleParams = module.params[moduleParamName];
            if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
            if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
            if (params[moduleParamName] === true) {
              params[moduleParamName] = { enabled: true };
            }
            if (
              typeof params[moduleParamName] === 'object'
              && !('enabled' in params[moduleParamName])
            ) {
              params[moduleParamName].enabled = true;
            }
            if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
          }
        });

        // Extend defaults with modules params
        var swiperParams = Utils.extend({}, defaults);
        swiper.useModulesParams(swiperParams);

        // Extend defaults with passed params
        swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = Utils.extend({}, swiper.params);
        swiper.passedParams = Utils.extend({}, params);

        // Save Dom lib
        swiper.$ = $;

        // Find el
        var $el = $(swiper.params.el);
        el = $el[0];

        if (!el) {
          return undefined;
        }

        if ($el.length > 1) {
          var swipers = [];
          $el.each(function (index, containerEl) {
            var newParams = Utils.extend({}, params, { el: containerEl });
            swipers.push(new Swiper(newParams));
          });
          return swipers;
        }

        el.swiper = swiper;
        $el.data('swiper', swiper);

        // Find Wrapper
        var $wrapperEl;
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          $wrapperEl = $(el.shadowRoot.querySelector(("." + (swiper.params.wrapperClass))));
          // Children needs to return slot items
          $wrapperEl.children = function (options) { return $el.children(options); };
        } else {
          $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));
        }
        // Extend Swiper
        Utils.extend(swiper, {
          $el: $el,
          el: el,
          $wrapperEl: $wrapperEl,
          wrapperEl: $wrapperEl[0],

          // Classes
          classNames: [],

          // Slides
          slides: $(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],

          // isDirection
          isHorizontal: function isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },
          isVertical: function isVertical() {
            return swiper.params.direction === 'vertical';
          },
          // RTL
          rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box',

          // Indexes
          activeIndex: 0,
          realIndex: 0,

          //
          isBeginning: true,
          isEnd: false,

          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,

          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,

          // Touch Events
          touchEvents: (function touchEvents() {
            var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            var desktop = ['mousedown', 'mousemove', 'mouseup'];
            if (Support.pointerEvents) {
              desktop = ['pointerdown', 'pointermove', 'pointerup'];
            }
            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3],
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2],
            };
            return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }()),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            formElements: 'input, select, option, textarea, button, video, label',
            // Last click time
            lastClickTime: Utils.now(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined,
          },

          // Clicks
          allowClick: true,

          // Touches
          allowTouchMove: swiper.params.allowTouchMove,

          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
          },

          // Images
          imagesToLoad: [],
          imagesLoaded: 0,

        });

        // Install Modules
        swiper.useModules();

        // Init
        if (swiper.params.init) {
          swiper.init();
        }

        // Return app instance
        return swiper;
      }

      if ( SwiperClass ) Swiper.__proto__ = SwiperClass;
      Swiper.prototype = Object.create( SwiperClass && SwiperClass.prototype );
      Swiper.prototype.constructor = Swiper;

      var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

      Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
        var swiper = this;
        var params = swiper.params;
        var slides = swiper.slides;
        var slidesGrid = swiper.slidesGrid;
        var swiperSize = swiper.size;
        var activeIndex = swiper.activeIndex;
        var spv = 1;
        if (params.centeredSlides) {
          var slideSize = slides[activeIndex].swiperSlideSize;
          var breakLoop;
          for (var i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) { breakLoop = true; }
            }
          }
          for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
            if (slides[i$1] && !breakLoop) {
              slideSize += slides[i$1].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) { breakLoop = true; }
            }
          }
        } else {
          for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
            if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
              spv += 1;
            }
          }
        }
        return spv;
      };

      Swiper.prototype.update = function update () {
        var swiper = this;
        if (!swiper || swiper.destroyed) { return; }
        var snapGrid = swiper.snapGrid;
        var params = swiper.params;
        // Breakpoints
        if (params.breakpoints) {
          swiper.setBreakpoint();
        }
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        function setTranslate() {
          var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
        var translated;
        if (swiper.params.freeMode) {
          setTranslate();
          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }
          if (!translated) {
            setTranslate();
          }
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }
        swiper.emit('update');
      };

      Swiper.prototype.changeDirection = function changeDirection (newDirection, needUpdate) {
        if ( needUpdate === void 0 ) needUpdate = true;

        var swiper = this;
        var currentDirection = swiper.params.direction;
        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }
        if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
          return swiper;
        }

        swiper.$el
          .removeClass(("" + (swiper.params.containerModifierClass) + currentDirection))
          .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

        swiper.params.direction = newDirection;

        swiper.slides.each(function (slideIndex, slideEl) {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });

        swiper.emit('changeDirection');
        if (needUpdate) { swiper.update(); }

        return swiper;
      };

      Swiper.prototype.init = function init () {
        var swiper = this;
        if (swiper.initialized) { return; }

        swiper.emit('beforeInit');

        // Set breakpoint
        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        }

        // Add Classes
        swiper.addClasses();

        // Create loop
        if (swiper.params.loop) {
          swiper.loopCreate();
        }

        // Update size
        swiper.updateSize();

        // Update slides
        swiper.updateSlides();

        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        }

        // Set Grab Cursor
        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }

        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        }

        // Slide To Initial Slide
        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
        }

        // Attach events
        swiper.attachEvents();

        // Init Flag
        swiper.initialized = true;

        // Emit
        swiper.emit('init');
      };

      Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
        if ( deleteInstance === void 0 ) deleteInstance = true;
        if ( cleanStyles === void 0 ) cleanStyles = true;

        var swiper = this;
        var params = swiper.params;
        var $el = swiper.$el;
        var $wrapperEl = swiper.$wrapperEl;
        var slides = swiper.slides;

        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }

        swiper.emit('beforeDestroy');

        // Init Flag
        swiper.initialized = false;

        // Detach events
        swiper.detachEvents();

        // Destroy loop
        if (params.loop) {
          swiper.loopDestroy();
        }

        // Cleanup styles
        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');
          if (slides && slides.length) {
            slides
              .removeClass([
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass ].join(' '))
              .removeAttr('style')
              .removeAttr('data-swiper-slide-index');
          }
        }

        swiper.emit('destroy');

        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach(function (eventName) {
          swiper.off(eventName);
        });

        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          swiper.$el.data('swiper', null);
          Utils.deleteProps(swiper);
        }
        swiper.destroyed = true;

        return null;
      };

      Swiper.extendDefaults = function extendDefaults (newDefaults) {
        Utils.extend(extendedDefaults, newDefaults);
      };

      staticAccessors.extendedDefaults.get = function () {
        return extendedDefaults;
      };

      staticAccessors.defaults.get = function () {
        return defaults;
      };

      staticAccessors.Class.get = function () {
        return SwiperClass;
      };

      staticAccessors.$.get = function () {
        return $;
      };

      Object.defineProperties( Swiper, staticAccessors );

      return Swiper;
    }(SwiperClass));

    var Device$1 = {
      name: 'device',
      proto: {
        device: Device,
      },
      static: {
        device: Device,
      },
    };

    var Support$1 = {
      name: 'support',
      proto: {
        support: Support,
      },
      static: {
        support: Support,
      },
    };

    var Browser = (function Browser() {
      function isSafari() {
        var ua = win.navigator.userAgent.toLowerCase();
        return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
      }
      return {
        isEdge: !!win.navigator.userAgent.match(/Edge/g),
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
      };
    }());

    var Browser$1 = {
      name: 'browser',
      proto: {
        browser: Browser,
      },
      static: {
        browser: Browser,
      },
    };

    var Resize = {
      name: 'resize',
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          resize: {
            resizeHandler: function resizeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
              swiper.emit('beforeResize');
              swiper.emit('resize');
            },
            orientationChangeHandler: function orientationChangeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
              swiper.emit('orientationchange');
            },
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          // Emit resize
          win.addEventListener('resize', swiper.resize.resizeHandler);

          // Emit orientationchange
          win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
        destroy: function destroy() {
          var swiper = this;
          win.removeEventListener('resize', swiper.resize.resizeHandler);
          win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
      },
    };

    var Observer = {
      func: win.MutationObserver || win.WebkitMutationObserver,
      attach: function attach(target, options) {
        if ( options === void 0 ) options = {};

        var swiper = this;

        var ObserverFunc = Observer.func;
        var observer = new ObserverFunc(function (mutations) {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            swiper.emit('observerUpdate', mutations[0]);
            return;
          }
          var observerUpdate = function observerUpdate() {
            swiper.emit('observerUpdate', mutations[0]);
          };

          if (win.requestAnimationFrame) {
            win.requestAnimationFrame(observerUpdate);
          } else {
            win.setTimeout(observerUpdate, 0);
          }
        });

        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
        });

        swiper.observer.observers.push(observer);
      },
      init: function init() {
        var swiper = this;
        if (!Support.observer || !swiper.params.observer) { return; }
        if (swiper.params.observeParents) {
          var containerParents = swiper.$el.parents();
          for (var i = 0; i < containerParents.length; i += 1) {
            swiper.observer.attach(containerParents[i]);
          }
        }
        // Observe container
        swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

        // Observe wrapper
        swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.observers.forEach(function (observer) {
          observer.disconnect();
        });
        swiper.observer.observers = [];
      },
    };

    var Observer$1 = {
      name: 'observer',
      params: {
        observer: false,
        observeParents: false,
        observeSlideChildren: false,
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          observer: {
            init: Observer.init.bind(swiper),
            attach: Observer.attach.bind(swiper),
            destroy: Observer.destroy.bind(swiper),
            observers: [],
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.observer.init();
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.observer.destroy();
        },
      },
    };

    var Virtual = {
      update: function update(force) {
        var swiper = this;
        var ref = swiper.params;
        var slidesPerView = ref.slidesPerView;
        var slidesPerGroup = ref.slidesPerGroup;
        var centeredSlides = ref.centeredSlides;
        var ref$1 = swiper.params.virtual;
        var addSlidesBefore = ref$1.addSlidesBefore;
        var addSlidesAfter = ref$1.addSlidesAfter;
        var ref$2 = swiper.virtual;
        var previousFrom = ref$2.from;
        var previousTo = ref$2.to;
        var slides = ref$2.slides;
        var previousSlidesGrid = ref$2.slidesGrid;
        var renderSlide = ref$2.renderSlide;
        var previousOffset = ref$2.offset;
        swiper.updateActiveIndex();
        var activeIndex = swiper.activeIndex || 0;

        var offsetProp;
        if (swiper.rtlTranslate) { offsetProp = 'right'; }
        else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

        var slidesAfter;
        var slidesBefore;
        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
          slidesBefore = slidesPerGroup + addSlidesAfter;
        }
        var from = Math.max((activeIndex || 0) - slidesBefore, 0);
        var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

        Utils.extend(swiper.virtual, {
          from: from,
          to: to,
          offset: offset,
          slidesGrid: swiper.slidesGrid,
        });

        function onRendered() {
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();
          if (swiper.lazy && swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        }

        if (previousFrom === from && previousTo === to && !force) {
          if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper.slides.css(offsetProp, (offset + "px"));
          }
          swiper.updateProgress();
          return;
        }
        if (swiper.params.virtual.renderExternal) {
          swiper.params.virtual.renderExternal.call(swiper, {
            offset: offset,
            from: from,
            to: to,
            slides: (function getSlides() {
              var slidesToRender = [];
              for (var i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }
              return slidesToRender;
            }()),
          });
          onRendered();
          return;
        }
        var prependIndexes = [];
        var appendIndexes = [];
        if (force) {
          swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
        } else {
          for (var i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
            }
          }
        }
        for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
          if (i$1 >= from && i$1 <= to) {
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(i$1);
            } else {
              if (i$1 > previousTo) { appendIndexes.push(i$1); }
              if (i$1 < previousFrom) { prependIndexes.push(i$1); }
            }
          }
        }
        appendIndexes.forEach(function (index) {
          swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
        onRendered();
      },
      renderSlide: function renderSlide(slide, index) {
        var swiper = this;
        var params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) {
          return swiper.virtual.cache[index];
        }
        var $slideEl = params.renderSlide
          ? $(params.renderSlide.call(swiper, slide, index))
          : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
        if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
        if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
        return $slideEl;
      },
      appendSlide: function appendSlide(slides) {
        var swiper = this;
        if (typeof slides === 'object' && 'length' in slides) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) { swiper.virtual.slides.push(slides[i]); }
          }
        } else {
          swiper.virtual.slides.push(slides);
        }
        swiper.virtual.update(true);
      },
      prependSlide: function prependSlide(slides) {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var newActiveIndex = activeIndex + 1;
        var numberOfNewSlides = 1;

        if (Array.isArray(slides)) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) { swiper.virtual.slides.unshift(slides[i]); }
          }
          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper.virtual.slides.unshift(slides);
        }
        if (swiper.params.virtual.cache) {
          var cache = swiper.virtual.cache;
          var newCache = {};
          Object.keys(cache).forEach(function (cachedIndex) {
            var $cachedEl = cache[cachedIndex];
            var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
            if (cachedElIndex) {
              $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
            }
            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
          });
          swiper.virtual.cache = newCache;
        }
        swiper.virtual.update(true);
        swiper.slideTo(newActiveIndex, 0);
      },
      removeSlide: function removeSlide(slidesIndexes) {
        var swiper = this;
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) { return; }
        var activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) {
          for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes[i]];
            }
            if (slidesIndexes[i] < activeIndex) { activeIndex -= 1; }
            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper.virtual.slides.splice(slidesIndexes, 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes];
          }
          if (slidesIndexes < activeIndex) { activeIndex -= 1; }
          activeIndex = Math.max(activeIndex, 0);
        }
        swiper.virtual.update(true);
        swiper.slideTo(activeIndex, 0);
      },
      removeAllSlides: function removeAllSlides() {
        var swiper = this;
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) {
          swiper.virtual.cache = {};
        }
        swiper.virtual.update(true);
        swiper.slideTo(0, 0);
      },
    };

    var Virtual$1 = {
      name: 'virtual',
      params: {
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          virtual: {
            update: Virtual.update.bind(swiper),
            appendSlide: Virtual.appendSlide.bind(swiper),
            prependSlide: Virtual.prependSlide.bind(swiper),
            removeSlide: Virtual.removeSlide.bind(swiper),
            removeAllSlides: Virtual.removeAllSlides.bind(swiper),
            renderSlide: Virtual.renderSlide.bind(swiper),
            slides: swiper.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (!swiper.params.virtual.enabled) { return; }
          swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
          var overwriteParams = {
            watchSlidesProgress: true,
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);

          if (!swiper.params.initialSlide) {
            swiper.virtual.update();
          }
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (!swiper.params.virtual.enabled) { return; }
          swiper.virtual.update();
        },
      },
    };

    var Keyboard = {
      handle: function handle(event) {
        var swiper = this;
        var rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; } // jquery fix
        var kc = e.keyCode || e.charCode;
        var pageUpDown = swiper.params.keyboard.pageUpDown;
        var isPageUp = pageUpDown && kc === 33;
        var isPageDown = pageUpDown && kc === 34;
        var isArrowLeft = kc === 37;
        var isArrowRight = kc === 39;
        var isArrowUp = kc === 38;
        var isArrowDown = kc === 40;
        // Directions locks
        if (!swiper.allowSlideNext && ((swiper.isHorizontal() && isArrowRight) || (swiper.isVertical() && isArrowDown) || isPageDown)) {
          return false;
        }
        if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && isArrowLeft) || (swiper.isVertical() && isArrowUp) || isPageUp)) {
          return false;
        }
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }
        if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
          var inView = false;
          // Check that swiper should be inside of visible area of window
          if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
            return undefined;
          }
          var windowWidth = win.innerWidth;
          var windowHeight = win.innerHeight;
          var swiperOffset = swiper.$el.offset();
          if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
          var swiperCoord = [
            [swiperOffset.left, swiperOffset.top],
            [swiperOffset.left + swiper.width, swiperOffset.top],
            [swiperOffset.left, swiperOffset.top + swiper.height],
            [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
          for (var i = 0; i < swiperCoord.length; i += 1) {
            var point = swiperCoord[i];
            if (
              point[0] >= 0 && point[0] <= windowWidth
              && point[1] >= 0 && point[1] <= windowHeight
            ) {
              inView = true;
            }
          }
          if (!inView) { return undefined; }
        }
        if (swiper.isHorizontal()) {
          if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
            if (e.preventDefault) { e.preventDefault(); }
            else { e.returnValue = false; }
          }
          if (((isPageDown || isArrowRight) && !rtl) || ((isPageUp || isArrowLeft) && rtl)) { swiper.slideNext(); }
          if (((isPageUp || isArrowLeft) && !rtl) || ((isPageDown || isArrowRight) && rtl)) { swiper.slidePrev(); }
        } else {
          if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
            if (e.preventDefault) { e.preventDefault(); }
            else { e.returnValue = false; }
          }
          if (isPageDown || isArrowDown) { swiper.slideNext(); }
          if (isPageUp || isArrowUp) { swiper.slidePrev(); }
        }
        swiper.emit('keyPress', kc);
        return undefined;
      },
      enable: function enable() {
        var swiper = this;
        if (swiper.keyboard.enabled) { return; }
        $(doc).on('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = true;
      },
      disable: function disable() {
        var swiper = this;
        if (!swiper.keyboard.enabled) { return; }
        $(doc).off('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = false;
      },
    };

    var Keyboard$1 = {
      name: 'keyboard',
      params: {
        keyboard: {
          enabled: false,
          onlyInViewport: true,
          pageUpDown: true,
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          keyboard: {
            enabled: false,
            enable: Keyboard.enable.bind(swiper),
            disable: Keyboard.disable.bind(swiper),
            handle: Keyboard.handle.bind(swiper),
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          if (swiper.params.keyboard.enabled) {
            swiper.keyboard.enable();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          if (swiper.keyboard.enabled) {
            swiper.keyboard.disable();
          }
        },
      },
    };

    function isEventSupported() {
      var eventName = 'onwheel';
      var isSupported = eventName in doc;

      if (!isSupported) {
        var element = doc.createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
      }

      if (!isSupported
        && doc.implementation
        && doc.implementation.hasFeature
        // always returns true in newer browsers as per the standard.
        // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
        && doc.implementation.hasFeature('', '') !== true
      ) {
        // This is the only way to test support for the `wheel` event in IE9+.
        isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
      }

      return isSupported;
    }
    var Mousewheel = {
      lastScrollTime: Utils.now(),
      lastEventBeforeSnap: undefined,
      recentWheelEvents: [],
      event: function event() {
        if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
        return isEventSupported() ? 'wheel' : 'mousewheel';
      },
      normalize: function normalize(e) {
        // Reasonable defaults
        var PIXEL_STEP = 10;
        var LINE_HEIGHT = 40;
        var PAGE_HEIGHT = 800;

        var sX = 0;
        var sY = 0; // spinX, spinY
        var pX = 0;
        var pY = 0; // pixelX, pixelY

        // Legacy
        if ('detail' in e) {
          sY = e.detail;
        }
        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }
        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }
        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        }

        // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }

        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;

        if ('deltaY' in e) {
          pY = e.deltaY;
        }
        if ('deltaX' in e) {
          pX = e.deltaX;
        }

        if (e.shiftKey && !pX) { // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }

        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) { // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else { // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        }

        // Fall-back if spin cannot be determined
        if (pX && !sX) {
          sX = (pX < 1) ? -1 : 1;
        }
        if (pY && !sY) {
          sY = (pY < 1) ? -1 : 1;
        }

        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY,
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        var swiper = this;
        swiper.mouseEntered = true;
      },
      handleMouseLeave: function handleMouseLeave() {
        var swiper = this;
        swiper.mouseEntered = false;
      },
      handle: function handle(event) {
        var e = event;
        var swiper = this;
        var params = swiper.params.mousewheel;

        if (swiper.params.cssMode) {
          e.preventDefault();
        }

        var target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarged !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarged);
        }
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) { return true; }

        if (e.originalEvent) { e = e.originalEvent; } // jquery fix
        var delta = 0;
        var rtlFactor = swiper.rtlTranslate ? -1 : 1;

        var data = Mousewheel.normalize(e);

        if (params.forceToAxis) {
          if (swiper.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = -data.pixelX * rtlFactor; }
            else { return true; }
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = -data.pixelY; }
          else { return true; }
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }

        if (delta === 0) { return true; }

        if (params.invert) { delta = -delta; }

        if (!swiper.params.freeMode) {
          // Register the new event in a variable which stores the relevant data
          var newEvent = {
            time: Utils.now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event,
          };

          // Keep the most recent events
          var recentWheelEvents = swiper.mousewheel.recentWheelEvents;
          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }
          var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent);

          // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.
          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              swiper.mousewheel.animateSlider(newEvent);
            }
          } else {
            swiper.mousewheel.animateSlider(newEvent);
          }

          // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.
          if (swiper.mousewheel.releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:

          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          var newEvent$1 = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta) };
          var ref = swiper.mousewheel;
          var lastEventBeforeSnap = ref.lastEventBeforeSnap;
          var ignoreWheelEvents = lastEventBeforeSnap
            && newEvent$1.time < lastEventBeforeSnap.time + 500
            && newEvent$1.delta <= lastEventBeforeSnap.delta
            && newEvent$1.direction === lastEventBeforeSnap.direction;
          if (!ignoreWheelEvents) {
            swiper.mousewheel.lastEventBeforeSnap = undefined;

            if (swiper.params.loop) {
              swiper.loopFix();
            }
            var position = swiper.getTranslate() + (delta * params.sensitivity);
            var wasBeginning = swiper.isBeginning;
            var wasEnd = swiper.isEnd;

            if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
            if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
              swiper.updateSlidesClasses();
            }

            if (swiper.params.freeModeSticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(swiper.mousewheel.timeout);
              swiper.mousewheel.timeout = undefined;
              var recentWheelEvents$1 = swiper.mousewheel.recentWheelEvents;
              if (recentWheelEvents$1.length >= 15) {
                recentWheelEvents$1.shift(); // only store the last N events
              }
              var prevEvent$1 = recentWheelEvents$1.length ? recentWheelEvents$1[recentWheelEvents$1.length - 1] : undefined;
              var firstEvent = recentWheelEvents$1[0];
              recentWheelEvents$1.push(newEvent$1);
              if (prevEvent$1 && (newEvent$1.delta > prevEvent$1.delta || newEvent$1.direction !== prevEvent$1.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                recentWheelEvents$1.splice(0);
              } else if (recentWheelEvents$1.length >= 15
                  && newEvent$1.time - firstEvent.time < 500
                  && firstEvent.delta - newEvent$1.delta >= 1
                  && newEvent$1.delta <= 6
              ) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
                recentWheelEvents$1.splice(0);
                swiper.mousewheel.timeout = Utils.nextTick(function () {
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }
              if (!swiper.mousewheel.timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                swiper.mousewheel.timeout = Utils.nextTick(function () {
                  var snapToThreshold = 0.5;
                  swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
                  recentWheelEvents$1.splice(0);
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            }

            // Emit event
            if (!ignoreWheelEvents) { swiper.emit('scroll', e); }

            // Stop autoplay
            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
            // Return page scroll on edge positions
            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
          }
        }

        if (e.preventDefault) { e.preventDefault(); }
        else { e.returnValue = false; }
        return false;
      },
      animateSlider: function animateSlider(newEvent) {
        var swiper = this;
        // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
          // Return false as a default
          return true;
        }
        // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', newEvent.raw);
          }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', newEvent.raw);
        }
        // If you got here is because an animation has been triggered so store the current time
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
        // Return false as a default
        return false;
      },
      releaseScroll: function releaseScroll(newEvent) {
        var swiper = this;
        var params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
        return false;
      },
      enable: function enable() {
        var swiper = this;
        var event = Mousewheel.event();
        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
          return true;
        }
        if (!event) { return false; }
        if (swiper.mousewheel.enabled) { return false; }
        var target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarged !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarged);
        }
        target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
        target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
        target.on(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = true;
        return true;
      },
      disable: function disable() {
        var swiper = this;
        var event = Mousewheel.event();
        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
          return true;
        }
        if (!event) { return false; }
        if (!swiper.mousewheel.enabled) { return false; }
        var target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarged !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarged);
        }
        target.off(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = false;
        return true;
      },
    };

    var Mousewheel$1 = {
      name: 'mousewheel',
      params: {
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarged: 'container',
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          mousewheel: {
            enabled: false,
            enable: Mousewheel.enable.bind(swiper),
            disable: Mousewheel.disable.bind(swiper),
            handle: Mousewheel.handle.bind(swiper),
            handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
            handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
            animateSlider: Mousewheel.animateSlider.bind(swiper),
            releaseScroll: Mousewheel.releaseScroll.bind(swiper),
            lastScrollTime: Utils.now(),
            lastEventBeforeSnap: undefined,
            recentWheelEvents: [],
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
            swiper.mousewheel.disable();
          }
          if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
        },
        destroy: function destroy() {
          var swiper = this;
          if (swiper.params.cssMode) {
            swiper.mousewheel.enable();
          }
          if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
        },
      },
    };

    var Navigation = {
      update: function update() {
        // Update Navigation Buttons
        var swiper = this;
        var params = swiper.params.navigation;

        if (swiper.params.loop) { return; }
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            $prevEl.addClass(params.disabledClass);
          } else {
            $prevEl.removeClass(params.disabledClass);
          }
          $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            $nextEl.addClass(params.disabledClass);
          } else {
            $nextEl.removeClass(params.disabledClass);
          }
          $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      },
      onPrevClick: function onPrevClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) { return; }
        swiper.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) { return; }
        swiper.slideNext();
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.navigation;
        if (!(params.nextEl || params.prevEl)) { return; }

        var $nextEl;
        var $prevEl;
        if (params.nextEl) {
          $nextEl = $(params.nextEl);
          if (
            swiper.params.uniqueNavElements
            && typeof params.nextEl === 'string'
            && $nextEl.length > 1
            && swiper.$el.find(params.nextEl).length === 1
          ) {
            $nextEl = swiper.$el.find(params.nextEl);
          }
        }
        if (params.prevEl) {
          $prevEl = $(params.prevEl);
          if (
            swiper.params.uniqueNavElements
            && typeof params.prevEl === 'string'
            && $prevEl.length > 1
            && swiper.$el.find(params.prevEl).length === 1
          ) {
            $prevEl = swiper.$el.find(params.prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', swiper.navigation.onNextClick);
        }
        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', swiper.navigation.onPrevClick);
        }

        Utils.extend(swiper.navigation, {
          $nextEl: $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl: $prevEl,
          prevEl: $prevEl && $prevEl[0],
        });
      },
      destroy: function destroy() {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', swiper.navigation.onNextClick);
          $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', swiper.navigation.onPrevClick);
          $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
      },
    };

    var Navigation$1 = {
      name: 'navigation',
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,

          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          navigation: {
            init: Navigation.init.bind(swiper),
            update: Navigation.update.bind(swiper),
            destroy: Navigation.destroy.bind(swiper),
            onNextClick: Navigation.onNextClick.bind(swiper),
            onPrevClick: Navigation.onPrevClick.bind(swiper),
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.navigation.init();
          swiper.navigation.update();
        },
        toEdge: function toEdge() {
          var swiper = this;
          swiper.navigation.update();
        },
        fromEdge: function fromEdge() {
          var swiper = this;
          swiper.navigation.update();
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.navigation.destroy();
        },
        click: function click(e) {
          var swiper = this;
          var ref = swiper.navigation;
          var $nextEl = ref.$nextEl;
          var $prevEl = ref.$prevEl;
          if (
            swiper.params.navigation.hideOnClick
            && !$(e.target).is($prevEl)
            && !$(e.target).is($nextEl)
          ) {
            var isHidden;
            if ($nextEl) {
              isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            } else if ($prevEl) {
              isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            }
            if (isHidden === true) {
              swiper.emit('navigationShow', swiper);
            } else {
              swiper.emit('navigationHide', swiper);
            }
            if ($nextEl) {
              $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
            if ($prevEl) {
              $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
          }
        },
      },
    };

    var Pagination = {
      update: function update() {
        // Render || Update Pagination bullets/items
        var swiper = this;
        var rtl = swiper.rtl;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el;
        // Current/Total
        var current;
        var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
          current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
          if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
            current -= (slidesLength - (swiper.loopedSlides * 2));
          }
          if (current > total - 1) { current -= total; }
          if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
        } else {
          current = swiper.activeIndex || 0;
        }
        // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          var bullets = swiper.pagination.bullets;
          var firstIndex;
          var lastIndex;
          var midIndex;
          if (params.dynamicBullets) {
            swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
              swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
              if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
                swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (swiper.pagination.dynamicBulletIndex < 0) {
                swiper.pagination.dynamicBulletIndex = 0;
              }
            }
            firstIndex = current - swiper.pagination.dynamicBulletIndex;
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }
          bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
          if ($el.length > 1) {
            bullets.each(function (index, bullet) {
              var $bullet = $(bullet);
              var bulletIndex = $bullet.index();
              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }
              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass(((params.bulletActiveClass) + "-main"));
                }
                if (bulletIndex === firstIndex) {
                  $bullet
                    .prev()
                    .addClass(((params.bulletActiveClass) + "-prev"))
                    .prev()
                    .addClass(((params.bulletActiveClass) + "-prev-prev"));
                }
                if (bulletIndex === lastIndex) {
                  $bullet
                    .next()
                    .addClass(((params.bulletActiveClass) + "-next"))
                    .next()
                    .addClass(((params.bulletActiveClass) + "-next-next"));
                }
              }
            });
          } else {
            var $bullet = bullets.eq(current);
            var bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);
            if (params.dynamicBullets) {
              var $firstDisplayedBullet = bullets.eq(firstIndex);
              var $lastDisplayedBullet = bullets.eq(lastIndex);
              for (var i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
              }
              if (swiper.params.loop) {
                if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                  for (var i$1 = params.dynamicMainBullets; i$1 >= 0; i$1 -= 1) {
                    bullets.eq(bullets.length - i$1).addClass(((params.bulletActiveClass) + "-main"));
                  }
                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(((params.bulletActiveClass) + "-prev"));
                } else {
                  $firstDisplayedBullet
                    .prev()
                    .addClass(((params.bulletActiveClass) + "-prev"))
                    .prev()
                    .addClass(((params.bulletActiveClass) + "-prev-prev"));
                  $lastDisplayedBullet
                    .next()
                    .addClass(((params.bulletActiveClass) + "-next"))
                    .next()
                    .addClass(((params.bulletActiveClass) + "-next-next"));
                }
              } else {
                $firstDisplayedBullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
                $lastDisplayedBullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          }
          if (params.dynamicBullets) {
            var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
            var offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
          }
        }
        if (params.type === 'fraction') {
          $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
          $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
        }
        if (params.type === 'progressbar') {
          var progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }
          var scale = (current + 1) / total;
          var scaleX = 1;
          var scaleY = 1;
          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
        }
        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper, current + 1, total));
          swiper.emit('paginationRender', swiper, $el[0]);
        } else {
          swiper.emit('paginationUpdate', swiper, $el[0]);
        }
        $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      },
      render: function render() {
        // Render Container
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

        var $el = swiper.pagination.$el;
        var paginationHTML = '';
        if (params.type === 'bullets') {
          var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
          for (var i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
            }
          }
          $el.html(paginationHTML);
          swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
        }
        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
            + ' / '
            + "<span class=\"" + (params.totalClass) + "\"></span>";
          }
          $el.html(paginationHTML);
        }
        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
          }
          $el.html(paginationHTML);
        }
        if (params.type !== 'custom') {
          swiper.emit('paginationRender', swiper.pagination.$el[0]);
        }
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el) { return; }

        var $el = $(params.el);
        if ($el.length === 0) { return; }

        if (
          swiper.params.uniqueNavElements
          && typeof params.el === 'string'
          && $el.length > 1
        ) {
          $el = swiper.$el.find(params.el);
        }

        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }

        $el.addClass(params.modifierClass + params.type);

        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
          swiper.pagination.dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }

        if (params.clickable) {
          $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
            e.preventDefault();
            var index = $(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) { index += swiper.loopedSlides; }
            swiper.slideTo(index);
          });
        }

        Utils.extend(swiper.pagination, {
          $el: $el,
          el: $el[0],
        });
      },
      destroy: function destroy() {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
        var $el = swiper.pagination.$el;

        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
        if (params.clickable) {
          $el.off('click', ("." + (params.bulletClass)));
        }
      },
    };

    var Pagination$1 = {
      name: 'pagination',
      params: {
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: function (number) { return number; },
          formatFractionTotal: function (number) { return number; },
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          modifierClass: 'swiper-pagination-', // NEW
          currentClass: 'swiper-pagination-current',
          totalClass: 'swiper-pagination-total',
          hiddenClass: 'swiper-pagination-hidden',
          progressbarFillClass: 'swiper-pagination-progressbar-fill',
          progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
          clickableClass: 'swiper-pagination-clickable', // NEW
          lockClass: 'swiper-pagination-lock',
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          pagination: {
            init: Pagination.init.bind(swiper),
            render: Pagination.render.bind(swiper),
            update: Pagination.update.bind(swiper),
            destroy: Pagination.destroy.bind(swiper),
            dynamicBulletIndex: 0,
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        },
        activeIndexChange: function activeIndexChange() {
          var swiper = this;
          if (swiper.params.loop) {
            swiper.pagination.update();
          } else if (typeof swiper.snapIndex === 'undefined') {
            swiper.pagination.update();
          }
        },
        snapIndexChange: function snapIndexChange() {
          var swiper = this;
          if (!swiper.params.loop) {
            swiper.pagination.update();
          }
        },
        slidesLengthChange: function slidesLengthChange() {
          var swiper = this;
          if (swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        snapGridLengthChange: function snapGridLengthChange() {
          var swiper = this;
          if (!swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.pagination.destroy();
        },
        click: function click(e) {
          var swiper = this;
          if (
            swiper.params.pagination.el
            && swiper.params.pagination.hideOnClick
            && swiper.pagination.$el.length > 0
            && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
          ) {
            var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
            if (isHidden === true) {
              swiper.emit('paginationShow', swiper);
            } else {
              swiper.emit('paginationHide', swiper);
            }
            swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
          }
        },
      },
    };

    var Scrollbar = {
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
        var scrollbar = swiper.scrollbar;
        var rtl = swiper.rtlTranslate;
        var progress = swiper.progress;
        var dragSize = scrollbar.dragSize;
        var trackSize = scrollbar.trackSize;
        var $dragEl = scrollbar.$dragEl;
        var $el = scrollbar.$el;
        var params = swiper.params.scrollbar;

        var newSize = dragSize;
        var newPos = (trackSize - dragSize) * progress;
        if (rtl) {
          newPos = -newPos;
          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }
        if (swiper.isHorizontal()) {
          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
          $dragEl[0].style.width = newSize + "px";
        } else {
          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
          $dragEl[0].style.height = newSize + "px";
        }
        if (params.hide) {
          clearTimeout(swiper.scrollbar.timeout);
          $el[0].style.opacity = 1;
          swiper.scrollbar.timeout = setTimeout(function () {
            $el[0].style.opacity = 0;
            $el.transition(400);
          }, 1000);
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
        swiper.scrollbar.$dragEl.transition(duration);
      },
      updateSize: function updateSize() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

        var scrollbar = swiper.scrollbar;
        var $dragEl = scrollbar.$dragEl;
        var $el = scrollbar.$el;

        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

        var divider = swiper.size / swiper.virtualSize;
        var moveDivider = divider * (trackSize / swiper.size);
        var dragSize;
        if (swiper.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }

        if (swiper.isHorizontal()) {
          $dragEl[0].style.width = dragSize + "px";
        } else {
          $dragEl[0].style.height = dragSize + "px";
        }

        if (divider >= 1) {
          $el[0].style.display = 'none';
        } else {
          $el[0].style.display = '';
        }
        if (swiper.params.scrollbar.hide) {
          $el[0].style.opacity = 0;
        }
        Utils.extend(scrollbar, {
          trackSize: trackSize,
          divider: divider,
          moveDivider: moveDivider,
          dragSize: dragSize,
        });
        scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
      },
      getPointerPosition: function getPointerPosition(e) {
        var swiper = this;
        if (swiper.isHorizontal()) {
          return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientX : e.clientX);
        }
        return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientY : e.clientY);
      },
      setDragPosition: function setDragPosition(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar;
        var rtl = swiper.rtlTranslate;
        var $el = scrollbar.$el;
        var dragSize = scrollbar.dragSize;
        var trackSize = scrollbar.trackSize;
        var dragStartPos = scrollbar.dragStartPos;

        var positionRatio;
        positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
          - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) {
          positionRatio = 1 - positionRatio;
        }

        var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar;
        var $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;
        var $dragEl = scrollbar.$dragEl;
        swiper.scrollbar.isTouched = true;
        swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
          ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();

        $wrapperEl.transition(100);
        $dragEl.transition(100);
        scrollbar.setDragPosition(e);

        clearTimeout(swiper.scrollbar.dragTimeout);

        $el.transition(0);
        if (params.hide) {
          $el.css('opacity', 1);
        }
        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', 'none');
        }
        swiper.emit('scrollbarDragStart', e);
      },
      onDragMove: function onDragMove(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar;
        var $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;
        var $dragEl = scrollbar.$dragEl;

        if (!swiper.scrollbar.isTouched) { return; }
        if (e.preventDefault) { e.preventDefault(); }
        else { e.returnValue = false; }
        scrollbar.setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        swiper.emit('scrollbarDragMove', e);
      },
      onDragEnd: function onDragEnd(e) {
        var swiper = this;

        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar;
        var $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;

        if (!swiper.scrollbar.isTouched) { return; }
        swiper.scrollbar.isTouched = false;
        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', '');
          $wrapperEl.transition('');
        }
        if (params.hide) {
          clearTimeout(swiper.scrollbar.dragTimeout);
          swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
            $el.css('opacity', 0);
            $el.transition(400);
          }, 1000);
        }
        swiper.emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) {
          swiper.slideToClosest();
        }
      },
      enableDraggable: function enableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) { return; }
        var scrollbar = swiper.scrollbar;
        var touchEventsTouch = swiper.touchEventsTouch;
        var touchEventsDesktop = swiper.touchEventsDesktop;
        var params = swiper.params;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
        var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        if (!Support.touch) {
          target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      disableDraggable: function disableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) { return; }
        var scrollbar = swiper.scrollbar;
        var touchEventsTouch = swiper.touchEventsTouch;
        var touchEventsDesktop = swiper.touchEventsDesktop;
        var params = swiper.params;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
        var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        if (!Support.touch) {
          target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) { return; }
        var scrollbar = swiper.scrollbar;
        var $swiperEl = swiper.$el;
        var params = swiper.params.scrollbar;

        var $el = $(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
          $el = $swiperEl.find(params.el);
        }

        var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
        if ($dragEl.length === 0) {
          $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
          $el.append($dragEl);
        }

        Utils.extend(scrollbar, {
          $el: $el,
          el: $el[0],
          $dragEl: $dragEl,
          dragEl: $dragEl[0],
        });

        if (params.draggable) {
          scrollbar.enableDraggable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.disableDraggable();
      },
    };

    var Scrollbar$1 = {
      name: 'scrollbar',
      params: {
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag',
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          scrollbar: {
            init: Scrollbar.init.bind(swiper),
            destroy: Scrollbar.destroy.bind(swiper),
            updateSize: Scrollbar.updateSize.bind(swiper),
            setTranslate: Scrollbar.setTranslate.bind(swiper),
            setTransition: Scrollbar.setTransition.bind(swiper),
            enableDraggable: Scrollbar.enableDraggable.bind(swiper),
            disableDraggable: Scrollbar.disableDraggable.bind(swiper),
            setDragPosition: Scrollbar.setDragPosition.bind(swiper),
            getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
            onDragStart: Scrollbar.onDragStart.bind(swiper),
            onDragMove: Scrollbar.onDragMove.bind(swiper),
            onDragEnd: Scrollbar.onDragEnd.bind(swiper),
            isTouched: false,
            timeout: null,
            dragTimeout: null,
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.scrollbar.init();
          swiper.scrollbar.updateSize();
          swiper.scrollbar.setTranslate();
        },
        update: function update() {
          var swiper = this;
          swiper.scrollbar.updateSize();
        },
        resize: function resize() {
          var swiper = this;
          swiper.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate() {
          var swiper = this;
          swiper.scrollbar.updateSize();
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          swiper.scrollbar.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          swiper.scrollbar.setTransition(duration);
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.scrollbar.destroy();
        },
      },
    };

    var Parallax = {
      setTransform: function setTransform(el, progress) {
        var swiper = this;
        var rtl = swiper.rtl;

        var $el = $(el);
        var rtlFactor = rtl ? -1 : 1;

        var p = $el.attr('data-swiper-parallax') || '0';
        var x = $el.attr('data-swiper-parallax-x');
        var y = $el.attr('data-swiper-parallax-y');
        var scale = $el.attr('data-swiper-parallax-scale');
        var opacity = $el.attr('data-swiper-parallax-opacity');

        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }

        if ((x).indexOf('%') >= 0) {
          x = (parseInt(x, 10) * progress * rtlFactor) + "%";
        } else {
          x = (x * progress * rtlFactor) + "px";
        }
        if ((y).indexOf('%') >= 0) {
          y = (parseInt(y, 10) * progress) + "%";
        } else {
          y = (y * progress) + "px";
        }

        if (typeof opacity !== 'undefined' && opacity !== null) {
          var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
          $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === 'undefined' || scale === null) {
          $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
        } else {
          var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
          $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el;
        var slides = swiper.slides;
        var progress = swiper.progress;
        var snapGrid = swiper.snapGrid;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, progress);
          });
        slides.each(function (slideIndex, slideEl) {
          var slideProgress = slideEl.progress;
          if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
          }
          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
            .each(function (index, el) {
              swiper.parallax.setTransform(el, slideProgress);
            });
        });
      },
      setTransition: function setTransition(duration) {
        if ( duration === void 0 ) duration = this.params.speed;

        var swiper = this;
        var $el = swiper.$el;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
          .each(function (index, parallaxEl) {
            var $parallaxEl = $(parallaxEl);
            var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) { parallaxDuration = 0; }
            $parallaxEl.transition(parallaxDuration);
          });
      },
    };

    var Parallax$1 = {
      name: 'parallax',
      params: {
        parallax: {
          enabled: false,
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          parallax: {
            setTransform: Parallax.setTransform.bind(swiper),
            setTranslate: Parallax.setTranslate.bind(swiper),
            setTransition: Parallax.setTransition.bind(swiper),
          },
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (!swiper.params.parallax.enabled) { return; }
          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        init: function init() {
          var swiper = this;
          if (!swiper.params.parallax.enabled) { return; }
          swiper.parallax.setTranslate();
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (!swiper.params.parallax.enabled) { return; }
          swiper.parallax.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (!swiper.params.parallax.enabled) { return; }
          swiper.parallax.setTransition(duration);
        },
      },
    };

    var Zoom = {
      // Calc Scale From Multi-touches
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) { return 1; }
        var x1 = e.targetTouches[0].pageX;
        var y1 = e.targetTouches[0].pageY;
        var x2 = e.targetTouches[1].pageX;
        var y2 = e.targetTouches[1].pageY;
        var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
        return distance;
      },
      // Events
      onGestureStart: function onGestureStart(e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
        if (!Support.gestures) {
          if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
            return;
          }
          zoom.fakeGestureTouched = true;
          gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
          gesture.$slideEl = $(e.target).closest(("." + (swiper.params.slideClass)));
          if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
          gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
          if (gesture.$imageWrapEl.length === 0) {
            gesture.$imageEl = undefined;
            return;
          }
        }
        if (gesture.$imageEl) {
          gesture.$imageEl.transition(0);
        }
        swiper.zoom.isScaling = true;
      },
      onGestureChange: function onGestureChange(e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        if (!Support.gestures) {
          if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
            return;
          }
          zoom.fakeGestureMoved = true;
          gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
        if (Support.gestures) {
          zoom.scale = e.scale * zoom.currentScale;
        } else {
          zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
        }
        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
        }
        if (zoom.scale < params.minRatio) {
          zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
        }
        gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      },
      onGestureEnd: function onGestureEnd(e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        if (!Support.gestures) {
          if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
            return;
          }
          if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
            return;
          }
          zoom.fakeGestureTouched = false;
          zoom.fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        zoom.currentScale = zoom.scale;
        zoom.isScaling = false;
        if (zoom.scale === 1) { gesture.$slideEl = undefined; }
      },
      onTouchStart: function onTouchStart(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        var image = zoom.image;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
        if (image.isTouched) { return; }
        if (Device.android && e.cancelable) { e.preventDefault(); }
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      },
      onTouchMove: function onTouchMove(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        var image = zoom.image;
        var velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) { return; }

        if (!image.isMoved) {
          image.width = gesture.$imageEl[0].offsetWidth;
          image.height = gesture.$imageEl[0].offsetHeight;
          image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
          image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
          gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
          gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
          gesture.$imageWrapEl.transition(0);
          if (swiper.rtl) {
            image.startX = -image.startX;
            image.startY = -image.startY;
          }
        }
        // Define if we need image drag
        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;

        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

        image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
        image.maxX = -image.minX;
        image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
        image.maxY = -image.minY;

        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

        if (!image.isMoved && !zoom.isScaling) {
          if (
            swiper.isHorizontal()
            && (
              (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
              || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
            )
          ) {
            image.isTouched = false;
            return;
          } if (
            !swiper.isHorizontal()
            && (
              (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
              || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
            )
          ) {
            image.isTouched = false;
            return;
          }
        }
        if (e.cancelable) {
          e.preventDefault();
        }
        e.stopPropagation();

        image.isMoved = true;
        image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
        image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

        if (image.currentX < image.minX) {
          image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
        }
        if (image.currentX > image.maxX) {
          image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
        }

        if (image.currentY < image.minY) {
          image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
        }
        if (image.currentY > image.maxY) {
          image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
        }

        // Velocity
        if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
        if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
        if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();

        gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
      },
      onTouchEnd: function onTouchEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        var image = zoom.image;
        var velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }
        image.isTouched = false;
        image.isMoved = false;
        var momentumDurationX = 300;
        var momentumDurationY = 300;
        var momentumDistanceX = velocity.x * momentumDurationX;
        var newPositionX = image.currentX + momentumDistanceX;
        var momentumDistanceY = velocity.y * momentumDurationY;
        var newPositionY = image.currentY + momentumDistanceY;

        // Fix duration
        if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
        if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
        var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

        image.currentX = newPositionX;
        image.currentY = newPositionY;

        // Define if we need image drag
        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
        image.maxX = -image.minX;
        image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

        gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
      },
      onTransitionEnd: function onTransitionEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
          if (gesture.$imageEl) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
          }
          if (gesture.$imageWrapEl) {
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
          }

          zoom.scale = 1;
          zoom.currentScale = 1;

          gesture.$slideEl = undefined;
          gesture.$imageEl = undefined;
          gesture.$imageWrapEl = undefined;
        }
      },
      // Toggle Zoom
      toggle: function toggle(e) {
        var swiper = this;
        var zoom = swiper.zoom;

        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoom.out();
        } else {
          // Zoom In
          zoom.in(e);
        }
      },
      in: function in$1(e) {
        var swiper = this;

        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture;
        var image = zoom.image;

        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children(("." + (swiper.params.slideActiveClass)));
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

        gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

        var touchX;
        var touchY;
        var offsetX;
        var offsetY;
        var diffX;
        var diffY;
        var translateX;
        var translateY;
        var imageWidth;
        var imageHeight;
        var scaledWidth;
        var scaledHeight;
        var translateMinX;
        var translateMinY;
        var translateMaxX;
        var translateMaxY;
        var slideWidth;
        var slideHeight;

        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
          touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }

        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (e) {
          slideWidth = gesture.$slideEl[0].offsetWidth;
          slideHeight = gesture.$slideEl[0].offsetHeight;
          offsetX = gesture.$slideEl.offset().left;
          offsetY = gesture.$slideEl.offset().top;
          diffX = (offsetX + (slideWidth / 2)) - touchX;
          diffY = (offsetY + (slideHeight / 2)) - touchY;

          imageWidth = gesture.$imageEl[0].offsetWidth;
          imageHeight = gesture.$imageEl[0].offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;

          translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
          translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;

          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;

          if (translateX < translateMinX) {
            translateX = translateMinX;
          }
          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }

          if (translateY < translateMinY) {
            translateY = translateMinY;
          }
          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
        gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      },
      out: function out() {
        var swiper = this;

        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture;

        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children(("." + (swiper.params.slideActiveClass)));
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
        gesture.$slideEl = undefined;
      },
      // Attach/Detach Events
      enable: function enable() {
        var swiper = this;
        var zoom = swiper.zoom;
        if (zoom.enabled) { return; }
        zoom.enabled = true;

        var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
        var activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

        var slideSelector = "." + (swiper.params.slideClass);

        // Scale image
        if (Support.gestures) {
          swiper.$wrapperEl.on('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.on('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
          swiper.$wrapperEl.on('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        }

        // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove, activeListenerWithCapture);
      },
      disable: function disable() {
        var swiper = this;
        var zoom = swiper.zoom;
        if (!zoom.enabled) { return; }

        swiper.zoom.enabled = false;

        var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
        var activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

        var slideSelector = "." + (swiper.params.slideClass);

        // Scale image
        if (Support.gestures) {
          swiper.$wrapperEl.off('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.off('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
          swiper.$wrapperEl.off('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        }

        // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove, activeListenerWithCapture);
      },
    };

    var Zoom$1 = {
      name: 'zoom',
      params: {
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed',
        },
      },
      create: function create() {
        var swiper = this;
        var zoom = {
          enabled: false,
          scale: 1,
          currentScale: 1,
          isScaling: false,
          gesture: {
            $slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            $imageEl: undefined,
            $imageWrapEl: undefined,
            maxRatio: 3,
          },
          image: {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {},
          },
          velocity: {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined,
          },
        };

        ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
          zoom[methodName] = Zoom[methodName].bind(swiper);
        });
        Utils.extend(swiper, {
          zoom: zoom,
        });

        var scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
          get: function get() {
            return scale;
          },
          set: function set(value) {
            if (scale !== value) {
              var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
              var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
              swiper.emit('zoomChange', value, imageEl, slideEl);
            }
            scale = value;
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          if (swiper.params.zoom.enabled) {
            swiper.zoom.enable();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.zoom.disable();
        },
        touchStart: function touchStart(e) {
          var swiper = this;
          if (!swiper.zoom.enabled) { return; }
          swiper.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(e) {
          var swiper = this;
          if (!swiper.zoom.enabled) { return; }
          swiper.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(e) {
          var swiper = this;
          if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
            swiper.zoom.toggle(e);
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;
          if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
            swiper.zoom.onTransitionEnd();
          }
        },
        slideChange: function slideChange() {
          var swiper = this;
          if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
            swiper.zoom.onTransitionEnd();
          }
        },
      },
    };

    var Lazy = {
      loadInSlide: function loadInSlide(index, loadInDuplicate) {
        if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

        var swiper = this;
        var params = swiper.params.lazy;
        if (typeof index === 'undefined') { return; }
        if (swiper.slides.length === 0) { return; }
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

        var $slideEl = isVirtual
          ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
          : swiper.slides.eq(index);

        var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
          $images = $images.add($slideEl[0]);
        }
        if ($images.length === 0) { return; }

        $images.each(function (imageIndex, imageEl) {
          var $imageEl = $(imageEl);
          $imageEl.addClass(params.loadingClass);

          var background = $imageEl.attr('data-background');
          var src = $imageEl.attr('data-src');
          var srcset = $imageEl.attr('data-srcset');
          var sizes = $imageEl.attr('data-sizes');
          var $pictureEl = $imageEl.parent('picture');

          swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
            if (background) {
              $imageEl.css('background-image', ("url(\"" + background + "\")"));
              $imageEl.removeAttr('data-background');
            } else {
              if (srcset) {
                $imageEl.attr('srcset', srcset);
                $imageEl.removeAttr('data-srcset');
              }
              if (sizes) {
                $imageEl.attr('sizes', sizes);
                $imageEl.removeAttr('data-sizes');
              }
              if ($pictureEl.length) {
                $pictureEl.children('source').each(function (sourceIndex, sourceEl) {
                  var $source = $(sourceEl);

                  if ($source.attr('data-srcset')) {
                    $source.attr('srcset', $source.attr('data-srcset'));
                    $source.removeAttr('data-srcset');
                  }
                });
              }
              if (src) {
                $imageEl.attr('src', src);
                $imageEl.removeAttr('data-src');
              }
            }

            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
            $slideEl.find(("." + (params.preloaderClass))).remove();
            if (swiper.params.loop && loadInDuplicate) {
              var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
                swiper.lazy.loadInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
              }
            }
            swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          });

          swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
      },
      load: function load() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var swiperParams = swiper.params;
        var slides = swiper.slides;
        var activeIndex = swiper.activeIndex;
        var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        var params = swiperParams.lazy;

        var slidesPerView = swiperParams.slidesPerView;
        if (slidesPerView === 'auto') {
          slidesPerView = 0;
        }

        function slideExist(index) {
          if (isVirtual) {
            if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
              return true;
            }
          } else if (slides[index]) { return true; }
          return false;
        }

        function slideIndex(slideEl) {
          if (isVirtual) {
            return $(slideEl).attr('data-swiper-slide-index');
          }
          return $(slideEl).index();
        }

        if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
        if (swiper.params.watchSlidesVisibility) {
          $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
            var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
            swiper.lazy.loadInSlide(index);
          });
        } else if (slidesPerView > 1) {
          for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
            if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
          }
        } else {
          swiper.lazy.loadInSlide(activeIndex);
        }
        if (params.loadPrevNext) {
          if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
            var amount = params.loadPrevNextAmount;
            var spv = slidesPerView;
            var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
            var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
            // Next Slides
            for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
              if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
            }
            // Prev Slides
            for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
              if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
            }
          } else {
            var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
            if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

            var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
            if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
          }
        }
      },
    };

    var Lazy$1 = {
      name: 'lazy',
      params: {
        lazy: {
          enabled: false,
          loadPrevNext: false,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: false,

          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader',
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          lazy: {
            initialImageLoaded: false,
            load: Lazy.load.bind(swiper),
            loadInSlide: Lazy.loadInSlide.bind(swiper),
          },
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
            swiper.params.preloadImages = false;
          }
        },
        init: function init() {
          var swiper = this;
          if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
            swiper.lazy.load();
          }
        },
        scroll: function scroll() {
          var swiper = this;
          if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
            swiper.lazy.load();
          }
        },
        resize: function resize() {
          var swiper = this;
          if (swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        },
        scrollbarDragMove: function scrollbarDragMove() {
          var swiper = this;
          if (swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        },
        transitionStart: function transitionStart() {
          var swiper = this;
          if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
              swiper.lazy.load();
            }
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;
          if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            swiper.lazy.load();
          }
        },
        slideChange: function slideChange() {
          var swiper = this;
          if (swiper.params.lazy.enabled && swiper.params.cssMode) {
            swiper.lazy.load();
          }
        },
      },
    };

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

    var Controller = {
      LinearSpline: function LinearSpline(x, y) {
        var binarySearch = (function search() {
          var maxIndex;
          var minIndex;
          var guess;
          return function (array, val) {
            minIndex = -1;
            maxIndex = array.length;
            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;
              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }
            return maxIndex;
          };
        }());
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1;
        // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        var i1;
        var i3;

        this.interpolate = function interpolate(x2) {
          if (!x2) { return 0; }

          // Get the indexes of x1 and x3 (the array indexes before and after given x2):
          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1;

          // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
          return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
        };
        return this;
      },
      // xxx: for now i will just save one spline function to to
      getInterpolateFunction: function getInterpolateFunction(c) {
        var swiper = this;
        if (!swiper.controller.spline) {
          swiper.controller.spline = swiper.params.loop
            ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
            : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
        }
      },
      setTranslate: function setTranslate(setTranslate$1, byController) {
        var swiper = this;
        var controlled = swiper.controller.control;
        var multiplier;
        var controlledTranslate;
        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
          if (swiper.params.controller.by === 'slide') {
            swiper.controller.getInterpolateFunction(c);
            // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out
            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
          }

          if (!controlledTranslate || swiper.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
            controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
          }

          if (swiper.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }
          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
          for (var i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        var controlled = swiper.controller.control;
        var i;
        function setControlledTransition(c) {
          c.setTransition(duration, swiper);
          if (duration !== 0) {
            c.transitionStart();
            if (c.params.autoHeight) {
              Utils.nextTick(function () {
                c.updateAutoHeight();
              });
            }
            c.$wrapperEl.transitionEnd(function () {
              if (!controlled) { return; }
              if (c.params.loop && swiper.params.controller.by === 'slide') {
                c.loopFix();
              }
              c.transitionEnd();
            });
          }
        }
        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      },
    };
    var Controller$1 = {
      name: 'controller',
      params: {
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide', // or 'container'
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          controller: {
            control: swiper.params.controller.control,
            getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
            setTranslate: Controller.setTranslate.bind(swiper),
            setTransition: Controller.setTransition.bind(swiper),
          },
        });
      },
      on: {
        update: function update() {
          var swiper = this;
          if (!swiper.controller.control) { return; }
          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        resize: function resize() {
          var swiper = this;
          if (!swiper.controller.control) { return; }
          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        observerUpdate: function observerUpdate() {
          var swiper = this;
          if (!swiper.controller.control) { return; }
          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        setTranslate: function setTranslate(translate, byController) {
          var swiper = this;
          if (!swiper.controller.control) { return; }
          swiper.controller.setTranslate(translate, byController);
        },
        setTransition: function setTransition(duration, byController) {
          var swiper = this;
          if (!swiper.controller.control) { return; }
          swiper.controller.setTransition(duration, byController);
        },
      },
    };

    var a11y = {
      makeElFocusable: function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
        return $el;
      },
      makeElNotFocusable: function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
        return $el;
      },
      addElRole: function addElRole($el, role) {
        $el.attr('role', role);
        return $el;
      },
      addElLabel: function addElLabel($el, label) {
        $el.attr('aria-label', label);
        return $el;
      },
      disableEl: function disableEl($el) {
        $el.attr('aria-disabled', true);
        return $el;
      },
      enableEl: function enableEl($el) {
        $el.attr('aria-disabled', false);
        return $el;
      },
      onEnterKey: function onEnterKey(e) {
        var swiper = this;
        var params = swiper.params.a11y;
        if (e.keyCode !== 13) { return; }
        var $targetEl = $(e.target);
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }
          if (swiper.isEnd) {
            swiper.a11y.notify(params.lastSlideMessage);
          } else {
            swiper.a11y.notify(params.nextSlideMessage);
          }
        }
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }
          if (swiper.isBeginning) {
            swiper.a11y.notify(params.firstSlideMessage);
          } else {
            swiper.a11y.notify(params.prevSlideMessage);
          }
        }
        if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
          $targetEl[0].click();
        }
      },
      notify: function notify(message) {
        var swiper = this;
        var notification = swiper.a11y.liveRegion;
        if (notification.length === 0) { return; }
        notification.html('');
        notification.html(message);
      },
      updateNavigation: function updateNavigation() {
        var swiper = this;

        if (swiper.params.loop || !swiper.navigation) { return; }
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            swiper.a11y.disableEl($prevEl);
            swiper.a11y.makeElNotFocusable($prevEl);
          } else {
            swiper.a11y.enableEl($prevEl);
            swiper.a11y.makeElFocusable($prevEl);
          }
        }
        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            swiper.a11y.disableEl($nextEl);
            swiper.a11y.makeElNotFocusable($nextEl);
          } else {
            swiper.a11y.enableEl($nextEl);
            swiper.a11y.makeElFocusable($nextEl);
          }
        }
      },
      updatePagination: function updatePagination() {
        var swiper = this;
        var params = swiper.params.a11y;
        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
            var $bulletEl = $(bulletEl);
            swiper.a11y.makeElFocusable($bulletEl);
            swiper.a11y.addElRole($bulletEl, 'button');
            swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
          });
        }
      },
      init: function init() {
        var swiper = this;

        swiper.$el.append(swiper.a11y.liveRegion);

        // Navigation
        var params = swiper.params.a11y;
        var $nextEl;
        var $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }
        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }
        if ($nextEl) {
          swiper.a11y.makeElFocusable($nextEl);
          swiper.a11y.addElRole($nextEl, 'button');
          swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
          $nextEl.on('keydown', swiper.a11y.onEnterKey);
        }
        if ($prevEl) {
          swiper.a11y.makeElFocusable($prevEl);
          swiper.a11y.addElRole($prevEl, 'button');
          swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
          $prevEl.on('keydown', swiper.a11y.onEnterKey);
        }

        // Pagination
        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

        var $nextEl;
        var $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }
        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }
        if ($nextEl) {
          $nextEl.off('keydown', swiper.a11y.onEnterKey);
        }
        if ($prevEl) {
          $prevEl.off('keydown', swiper.a11y.onEnterKey);
        }

        // Pagination
        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
        }
      },
    };
    var A11y = {
      name: 'a11y',
      params: {
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          a11y: {
            liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
          },
        });
        Object.keys(a11y).forEach(function (methodName) {
          swiper.a11y[methodName] = a11y[methodName].bind(swiper);
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) { return; }
          swiper.a11y.init();
          swiper.a11y.updateNavigation();
        },
        toEdge: function toEdge() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) { return; }
          swiper.a11y.updateNavigation();
        },
        fromEdge: function fromEdge() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) { return; }
          swiper.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) { return; }
          swiper.a11y.updatePagination();
        },
        destroy: function destroy() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) { return; }
          swiper.a11y.destroy();
        },
      },
    };

    var History = {
      init: function init() {
        var swiper = this;
        if (!swiper.params.history) { return; }
        if (!win.history || !win.history.pushState) {
          swiper.params.history.enabled = false;
          swiper.params.hashNavigation.enabled = true;
          return;
        }
        var history = swiper.history;
        history.initialized = true;
        history.paths = History.getPathValues();
        if (!history.paths.key && !history.paths.value) { return; }
        history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) {
          win.addEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.history.replaceState) {
          win.removeEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      setHistoryPopState: function setHistoryPopState() {
        var swiper = this;
        swiper.history.paths = History.getPathValues();
        swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
      },
      getPathValues: function getPathValues() {
        var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
        var total = pathArray.length;
        var key = pathArray[total - 2];
        var value = pathArray[total - 1];
        return { key: key, value: value };
      },
      setHistory: function setHistory(key, index) {
        var swiper = this;
        if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
        var slide = swiper.slides.eq(index);
        var value = History.slugify(slide.attr('data-history'));
        if (!win.location.pathname.includes(key)) {
          value = key + "/" + value;
        }
        var currentState = win.history.state;
        if (currentState && currentState.value === value) {
          return;
        }
        if (swiper.params.history.replaceState) {
          win.history.replaceState({ value: value }, null, value);
        } else {
          win.history.pushState({ value: value }, null, value);
        }
      },
      slugify: function slugify(text) {
        return text.toString()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/--+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
      },
      scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
        var swiper = this;
        if (value) {
          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var slide = swiper.slides.eq(i);
            var slideHistory = History.slugify(slide.attr('data-history'));
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              var index = slide.index();
              swiper.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper.slideTo(0, speed, runCallbacks);
        }
      },
    };

    var History$1 = {
      name: 'history',
      params: {
        history: {
          enabled: false,
          replaceState: false,
          key: 'slides',
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          history: {
            init: History.init.bind(swiper),
            setHistory: History.setHistory.bind(swiper),
            setHistoryPopState: History.setHistoryPopState.bind(swiper),
            scrollToSlide: History.scrollToSlide.bind(swiper),
            destroy: History.destroy.bind(swiper),
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          if (swiper.params.history.enabled) {
            swiper.history.init();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          if (swiper.params.history.enabled) {
            swiper.history.destroy();
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;
          if (swiper.history.initialized) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        },
        slideChange: function slideChange() {
          var swiper = this;
          if (swiper.history.initialized && swiper.params.cssMode) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        },
      },
    };

    var HashNavigation = {
      onHashCange: function onHashCange() {
        var swiper = this;
        swiper.emit('hashChange');
        var newHash = doc.location.hash.replace('#', '');
        var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
        if (newHash !== activeSlideHash) {
          var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
          if (typeof newIndex === 'undefined') { return; }
          swiper.slideTo(newIndex);
        }
      },
      setHash: function setHash() {
        var swiper = this;
        if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
        if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
          win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
          swiper.emit('hashSet');
        } else {
          var slide = swiper.slides.eq(swiper.activeIndex);
          var hash = slide.attr('data-hash') || slide.attr('data-history');
          doc.location.hash = hash || '';
          swiper.emit('hashSet');
        }
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
        swiper.hashNavigation.initialized = true;
        var hash = doc.location.hash.replace('#', '');
        if (hash) {
          var speed = 0;
          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var slide = swiper.slides.eq(i);
            var slideHash = slide.attr('data-hash') || slide.attr('data-history');
            if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              var index = slide.index();
              swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
            }
          }
        }
        if (swiper.params.hashNavigation.watchState) {
          $(win).on('hashchange', swiper.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.watchState) {
          $(win).off('hashchange', swiper.hashNavigation.onHashCange);
        }
      },
    };
    var HashNavigation$1 = {
      name: 'hash-navigation',
      params: {
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false,
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          hashNavigation: {
            initialized: false,
            init: HashNavigation.init.bind(swiper),
            destroy: HashNavigation.destroy.bind(swiper),
            setHash: HashNavigation.setHash.bind(swiper),
            onHashCange: HashNavigation.onHashCange.bind(swiper),
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.init();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.destroy();
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;
          if (swiper.hashNavigation.initialized) {
            swiper.hashNavigation.setHash();
          }
        },
        slideChange: function slideChange() {
          var swiper = this;
          if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
            swiper.hashNavigation.setHash();
          }
        },
      },
    };

    /* eslint no-underscore-dangle: "off" */

    var Autoplay = {
      run: function run() {
        var swiper = this;
        var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        var delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr('data-swiper-autoplay')) {
          delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        }
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = Utils.nextTick(function () {
          if (swiper.params.autoplay.reverseDirection) {
            if (swiper.params.loop) {
              swiper.loopFix();
              swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.isBeginning) {
              swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else {
              swiper.autoplay.stop();
            }
          } else if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isEnd) {
            swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
          if (swiper.params.cssMode && swiper.autoplay.running) { swiper.autoplay.run(); }
        }, delay);
      },
      start: function start() {
        var swiper = this;
        if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
        if (swiper.autoplay.running) { return false; }
        swiper.autoplay.running = true;
        swiper.emit('autoplayStart');
        swiper.autoplay.run();
        return true;
      },
      stop: function stop() {
        var swiper = this;
        if (!swiper.autoplay.running) { return false; }
        if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

        if (swiper.autoplay.timeout) {
          clearTimeout(swiper.autoplay.timeout);
          swiper.autoplay.timeout = undefined;
        }
        swiper.autoplay.running = false;
        swiper.emit('autoplayStop');
        return true;
      },
      pause: function pause(speed) {
        var swiper = this;
        if (!swiper.autoplay.running) { return; }
        if (swiper.autoplay.paused) { return; }
        if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
          swiper.autoplay.paused = false;
          swiper.autoplay.run();
        } else {
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
        }
      },
    };

    var Autoplay$1 = {
      name: 'autoplay',
      params: {
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false,
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          autoplay: {
            running: false,
            paused: false,
            run: Autoplay.run.bind(swiper),
            start: Autoplay.start.bind(swiper),
            stop: Autoplay.stop.bind(swiper),
            pause: Autoplay.pause.bind(swiper),
            onVisibilityChange: function onVisibilityChange() {
              if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                swiper.autoplay.pause();
              }
              if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                swiper.autoplay.run();
                swiper.autoplay.paused = false;
              }
            },
            onTransitionEnd: function onTransitionEnd(e) {
              if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
              if (e.target !== this) { return; }
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
              swiper.autoplay.paused = false;
              if (!swiper.autoplay.running) {
                swiper.autoplay.stop();
              } else {
                swiper.autoplay.run();
              }
            },
          },
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          if (swiper.params.autoplay.enabled) {
            swiper.autoplay.start();
            document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
          }
        },
        beforeTransitionStart: function beforeTransitionStart(speed, internal) {
          var swiper = this;
          if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.pause(speed);
            } else {
              swiper.autoplay.stop();
            }
          }
        },
        sliderFirstMove: function sliderFirstMove() {
          var swiper = this;
          if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.pause();
            }
          }
        },
        touchEnd: function touchEnd() {
          var swiper = this;
          if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.run();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          if (swiper.autoplay.running) {
            swiper.autoplay.stop();
          }
          document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        },
      },
    };

    var Fade = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides;
        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = swiper.slides.eq(i);
          var offset = $slideEl[0].swiperSlideOffset;
          var tx = -offset;
          if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
          var ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          var slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides;
        var $wrapperEl = swiper.$wrapperEl;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          var eventTriggered = false;
          slides.transitionEnd(function () {
            if (eventTriggered) { return; }
            if (!swiper || swiper.destroyed) { return; }
            eventTriggered = true;
            swiper.animating = false;
            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (var i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    };

    var EffectFade = {
      name: 'effect-fade',
      params: {
        fadeEffect: {
          crossFade: false,
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          fadeEffect: {
            setTranslate: Fade.setTranslate.bind(swiper),
            setTransition: Fade.setTransition.bind(swiper),
          },
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (swiper.params.effect !== 'fade') { return; }
          swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true,
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (swiper.params.effect !== 'fade') { return; }
          swiper.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (swiper.params.effect !== 'fade') { return; }
          swiper.fadeEffect.setTransition(duration);
        },
      },
    };

    var Cube = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el;
        var $wrapperEl = swiper.$wrapperEl;
        var slides = swiper.slides;
        var swiperWidth = swiper.width;
        var swiperHeight = swiper.height;
        var rtl = swiper.rtlTranslate;
        var swiperSize = swiper.size;
        var params = swiper.params.cubeEffect;
        var isHorizontal = swiper.isHorizontal();
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var wrapperRotate = 0;
        var $cubeShadowEl;
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }
            $cubeShadowEl.css({ height: (swiperWidth + "px") });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }
        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideIndex = i;
          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }
          var slideAngle = slideIndex * 90;
          var round = Math.floor(slideAngle / 360);
          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }
          var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          var tx = 0;
          var ty = 0;
          var tz = 0;
          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + (round * 4 * swiperSize);
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = (3 * swiperSize) + (swiperSize * 4 * round);
          }
          if (rtl) {
            tx = -tx;
          }

          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

          var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
          if (progress <= 1 && progress > -1) {
            wrapperRotate = (slideIndex * 90) + (progress * 90);
            if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
          }
          $slideEl.transform(transform);
          if (params.slideShadows) {
            // Set shadows
            var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
            if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
          }
        }
        $wrapperEl.css({
          '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
          '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
          '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
          'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        });

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
          } else {
            var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
            var multiplier = 1.5 - (
              (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
              + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
            );
            var scale1 = params.shadowScale;
            var scale2 = params.shadowScale / multiplier;
            var offset = params.shadowOffset;
            $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
          }
        }
        var zFactor = (Browser.isSafari || Browser.isWebView) ? (-swiperSize / 2) : 0;
        $wrapperEl
          .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var $el = swiper.$el;
        var slides = swiper.slides;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      },
    };

    var EffectCube = {
      name: 'effect-cube',
      params: {
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          cubeEffect: {
            setTranslate: Cube.setTranslate.bind(swiper),
            setTransition: Cube.setTransition.bind(swiper),
          },
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (swiper.params.effect !== 'cube') { return; }
          swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
          swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: false,
            virtualTranslate: true,
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (swiper.params.effect !== 'cube') { return; }
          swiper.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (swiper.params.effect !== 'cube') { return; }
          swiper.cubeEffect.setTransition(duration);
        },
      },
    };

    var Flip = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides;
        var rtl = swiper.rtlTranslate;
        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          var offset = $slideEl[0].swiperSlideOffset;
          var rotate = -180 * progress;
          var rotateY = rotate;
          var rotateX = 0;
          var tx = -offset;
          var ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
            if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
          }
          $slideEl
            .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides;
        var activeIndex = swiper.activeIndex;
        var $wrapperEl = swiper.$wrapperEl;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          var eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) { return; }
            if (!swiper || swiper.destroyed) { return; }
            // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
            eventTriggered = true;
            swiper.animating = false;
            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (var i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    };

    var EffectFlip = {
      name: 'effect-flip',
      params: {
        flipEffect: {
          slideShadows: true,
          limitRotation: true,
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          flipEffect: {
            setTranslate: Flip.setTranslate.bind(swiper),
            setTransition: Flip.setTransition.bind(swiper),
          },
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (swiper.params.effect !== 'flip') { return; }
          swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
          swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true,
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (swiper.params.effect !== 'flip') { return; }
          swiper.flipEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (swiper.params.effect !== 'flip') { return; }
          swiper.flipEffect.setTransition(duration);
        },
      },
    };

    var Coverflow = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var swiperWidth = swiper.width;
        var swiperHeight = swiper.height;
        var slides = swiper.slides;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesSizesGrid = swiper.slidesSizesGrid;
        var params = swiper.params.coverflowEffect;
        var isHorizontal = swiper.isHorizontal();
        var transform = swiper.translate;
        var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
        var rotate = isHorizontal ? params.rotate : -params.rotate;
        var translate = params.depth;
        // Each slide offset from center
        for (var i = 0, length = slides.length; i < length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideSize = slidesSizesGrid[i];
          var slideOffset = $slideEl[0].swiperSlideOffset;
          var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

          var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          var translateZ = -translate * Math.abs(offsetMultiplier);

          var stretch = params.stretch;
          // Allow percentage to make a relative stretch for responsive sliders
          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = ((parseFloat(params.stretch) / 100) * slideSize);
          }
          var translateY = isHorizontal ? 0 : stretch * (offsetMultiplier);
          var translateX = isHorizontal ? stretch * (offsetMultiplier) : 0;

          var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) { translateX = 0; }
          if (Math.abs(translateY) < 0.001) { translateY = 0; }
          if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
          if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
          if (Math.abs(rotateX) < 0.001) { rotateX = 0; }
          if (Math.abs(scale) < 0.001) { scale = 0; }

          var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
            if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
          }
        }

        // Set correct perspective for IE10
        if (Support.pointerEvents || Support.prefixedPointerEvents) {
          var ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = center + "px 50%";
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
      },
    };

    var EffectCoverflow = {
      name: 'effect-coverflow',
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true,
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          coverflowEffect: {
            setTranslate: Coverflow.setTranslate.bind(swiper),
            setTransition: Coverflow.setTransition.bind(swiper),
          },
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (swiper.params.effect !== 'coverflow') { return; }

          swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
          swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (swiper.params.effect !== 'coverflow') { return; }
          swiper.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (swiper.params.effect !== 'coverflow') { return; }
          swiper.coverflowEffect.setTransition(duration);
        },
      },
    };

    var Thumbs = {
      init: function init() {
        var swiper = this;
        var ref = swiper.params;
        var thumbsParams = ref.thumbs;
        var SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper;
          Utils.extend(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          });
          Utils.extend(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          });
        } else if (Utils.isObject(thumbsParams.swiper)) {
          swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          }));
          swiper.thumbs.swiperCreated = true;
        }
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
      },
      onThumbClick: function onThumbClick() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        var clickedIndex = thumbsSwiper.clickedIndex;
        var clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
        var slideToIndex;
        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }
        if (swiper.params.loop) {
          var currentIndex = swiper.activeIndex;
          if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
            swiper.loopFix();
            // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            currentIndex = swiper.activeIndex;
          }
          var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
          var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
          if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
          else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
          else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
          else { slideToIndex = prevIndex; }
        }
        swiper.slideTo(slideToIndex);
      },
      update: function update(initial) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }

        var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
          ? thumbsSwiper.slidesPerViewDynamic()
          : thumbsSwiper.params.slidesPerView;

        var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
          var currentThumbsIndex = thumbsSwiper.activeIndex;
          var newThumbsIndex;
          var direction;
          if (thumbsSwiper.params.loop) {
            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
              thumbsSwiper.loopFix();
              // eslint-disable-next-line
              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
              currentThumbsIndex = thumbsSwiper.activeIndex;
            }
            // Find actual thumbs index to slide to
            var prevThumbsIndex = thumbsSwiper.slides
              .eq(currentThumbsIndex)
              .prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0)
              .index();
            var nextThumbsIndex = thumbsSwiper.slides
              .eq(currentThumbsIndex)
              .nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0)
              .index();
            if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
            else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
            else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
            else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
            else { newThumbsIndex = prevThumbsIndex; }
            direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
          } else {
            newThumbsIndex = swiper.realIndex;
            direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
          }
          if (useOffset) {
            newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
          }

          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - slidesPerView + 1;
            }
            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        }

        // Activate thumbs
        var thumbsToActivate = 1;
        var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
          thumbsToActivate = swiper.params.slidesPerView;
        }

        if (!swiper.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }

        thumbsToActivate = Math.floor(thumbsToActivate);

        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)) {
          for (var i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
          }
        } else {
          for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
            thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
          }
        }
      },
    };
    var Thumbs$1 = {
      name: 'thumbs',
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-container-thumbs',
        },
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          thumbs: {
            swiper: null,
            init: Thumbs.init.bind(swiper),
            update: Thumbs.update.bind(swiper),
            onThumbClick: Thumbs.onThumbClick.bind(swiper),
          },
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          var ref = swiper.params;
          var thumbs = ref.thumbs;
          if (!thumbs || !thumbs.swiper) { return; }
          swiper.thumbs.init();
          swiper.thumbs.update(true);
        },
        slideChange: function slideChange() {
          var swiper = this;
          if (!swiper.thumbs.swiper) { return; }
          swiper.thumbs.update();
        },
        update: function update() {
          var swiper = this;
          if (!swiper.thumbs.swiper) { return; }
          swiper.thumbs.update();
        },
        resize: function resize() {
          var swiper = this;
          if (!swiper.thumbs.swiper) { return; }
          swiper.thumbs.update();
        },
        observerUpdate: function observerUpdate() {
          var swiper = this;
          if (!swiper.thumbs.swiper) { return; }
          swiper.thumbs.update();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          var thumbsSwiper = swiper.thumbs.swiper;
          if (!thumbsSwiper) { return; }
          thumbsSwiper.setTransition(duration);
        },
        beforeDestroy: function beforeDestroy() {
          var swiper = this;
          var thumbsSwiper = swiper.thumbs.swiper;
          if (!thumbsSwiper) { return; }
          if (swiper.thumbs.swiperCreated && thumbsSwiper) {
            thumbsSwiper.destroy();
          }
        },
      },
    };

    // Swiper Class

    var components = [
      Device$1,
      Support$1,
      Browser$1,
      Resize,
      Observer$1,
      Virtual$1,
      Keyboard$1,
      Mousewheel$1,
      Navigation$1,
      Pagination$1,
      Scrollbar$1,
      Parallax$1,
      Zoom$1,
      Lazy$1,
      Controller$1,
      A11y,
      History$1,
      HashNavigation$1,
      Autoplay$1,
      EffectFade,
      EffectCube,
      EffectFlip,
      EffectCoverflow,
      Thumbs$1
    ];

    if (typeof Swiper.use === 'undefined') {
      Swiper.use = Swiper.Class.use;
      Swiper.installModule = Swiper.Class.installModule;
    }

    Swiper.use(components);

    return Swiper;

})));
//# sourceMappingURL=swiper.js.map

"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PREVIEW_URL = 'https://img.youtube.com/vi';
var PreviewUrls = {
  DEFAULT: 'default.jpg',
  //
  HIGH: 'hqdefault.jpg',
  // For the high quality version of the thumbnail use a URL similar to this
  MEDIUM: 'mqdefault.jpg',
  //  There is also a medium quality version of the thumbnail, using a URL similar to the HQ
  STANDART: 'sddefault.jpg',
  // For the standard definition version of the thumbnail, use a URL similar to this
  MAX: 'maxresdefault.jpg' // For the maximum resolution version of the thumbnail use a URL similar to this

};
var PLAYER_IMAGE = PreviewUrls.STANDART;
var SLIDE_IMAGE = PreviewUrls.MEDIUM;
var BACKGROUND_IMAGE = PreviewUrls.STANDART;
var ACTIVE_BUTTON_CLASS = 'videos__video-button--active';
var videos = [{
  shortTitle: "Linkin Park - Final Masquerade",
  title: "Linkin Park - Final Masquerade (RUS COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
  href: "https://www.youtube.com/watch?v=48f-fqXrKIc",
  file: 'audio/covers/39 - Ai Mori - Final Masquerade (Linkin Park rus cover).mp3'
}, {
  shortTitle: "Dead by April - Calling",
  title: "Dead by April - Calling (RUS COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
  href: "https://www.youtube.com/watch?v=tLN1rEbmkww",
  file: 'audio/covers/38 - Ai Mori - Calling (Dead by April rus cover).mp3'
}, {
  shortTitle: "Bring Me The Horizon - Teardrops",
  title: "Bring Me The Horizon - Teardrops (RUS COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
  href: "https://www.youtube.com/watch?v=79d_bXhij3I",
  file: 'audio/covers/37 - Ai Mori - Teardrops (Bring Me The Horizon rus cover).mp3'
}, {
  shortTitle: "Limp Bizkit - My Way",
  title: "Limp Bizkit - My Way (RUS HOT COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
  href: "https://www.youtube.com/watch?v=avcWtIj2utM",
  file: 'audio/covers/36 - Ai Mori - My Way (Limp Bizkit rus cover).mp3'
}, {
  shortTitle: "Naruto Shippuden Opening 3 Blue Bird",
  title: "Naruto Shippuden Opening 3 Blue Bird ",
  href: "https://www.youtube.com/watch?v=MVflf25ykP8",
  file: 'audio/covers/35 - Ai Mori - Blue bird (Naruto Shippuden Opening 3 Blue Bird rus cover).mp3'
}, {
  shortTitle: "Slipknot - The Devil In I",
  title: "Slipknot - The Devil In I RUS COVER/КАВЕР НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=Mgr4WURCvTI",
  file: 'audio/covers/34 - Ai Mori - The Devil in I (Slipknot rus cover).mp3'
}, {
  shortTitle: "SABATON - Bismarck",
  title: "SABATON - Bismarck RUS COVER/НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=ISP-ZR2uzvA",
  file: 'audio/covers/33 - Ai Mori - Bismark (Sabaton rus cover).mp3'
}, {
  shortTitle: "Disturbed - Down With The Sickness",
  title: "Disturbed - Down With The Sickness",
  href: "https://www.youtube.com/watch?v=ei3IaJDgZGk",
  file: 'audio/covers/32 - Ai Mori - Down With The Sickness (Disturbed cover feat. Violet Orlandi).mp3'
}, {
  shortTitle: "Nirvana - Rape me (ft. Violet Orlandi)",
  title: "Nirvana - Rape me cover (ft. Violet Orlandi)",
  href: "https://www.youtube.com/watch?v=_117HNT_Tvg",
  file: 'audio/covers/31 - Ai Mori - Rape me (Nirvana cover feat. Violet Orlandi).mp3'
}, {
  shortTitle: "No Doubt - Don't Speak",
  title: "No Doubt - Don't Speak RUS COVER/НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=qRLaYz4Azf8",
  file: 'audio/covers/30 - Ai Mori - Dont Speak (No Doubt rus cover).mp3'
}, {
  shortTitle: "Motionless In White - Voices (feat. Ник Черников)",
  title: "Motionless In White - Voices RUS COVER/КАВЕР НА РУССКОМ (feat. Ник Черников)",
  href: "https://www.youtube.com/watch?v=iTLK1gMf-LE",
  file: 'audio/covers/29 - Ai Mori - Voices (Motionless In White rus cover feat. Ник Черников).mp3'
}, {
  shortTitle: "LINKIN PARK - One More Light",
  title: "LINKIN PARK - One More Light RUS COVER/КАВЕР НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=-v_MEQ6naJA",
  file: 'audio/covers/28 - Ai Mori - One more light (Linkin Park rus cover).mp3'
}, {
  shortTitle: "Skillet - Hero (feat. BugaGamesTV)",
  title: "Skillet - Hero RUS COVER/КАВЕР НА РУССКОМ (feat. BugaGamesTV)",
  href: "https://www.youtube.com/watch?v=a-1y-p52gwQ",
  file: 'audio/covers/27 - Ai Mori - Hero (Skillet rus cover feat. BugaGamesTV).mp3'
}, {
  shortTitle: "Rag'n'Bone Man - Human",
  title: "Rag'n'Bone Man - Human RUS COVER/ НА РУССКОМ КАВЕР",
  href: "https://www.youtube.com/watch?v=pYp9y2NZURc",
  file: 'audio/covers/25 - Ai Mori - Human (Rag\'n\'Bone Man rus cover).mp3'
}, {
  shortTitle: "LINKIN PARK - GIVEN UP",
  title: "LINKIN PARK - GIVEN UP RUS/ НА РУССКОМ КАВЕР",
  href: "https://www.youtube.com/watch?v=m2leRAXFbAc",
  file: 'audio/covers/26 - Ai Mori - Given up (Linkin Park rus cover).mp3'
}, {
  shortTitle: "Three Days Grace - Over and Over",
  title: "Three Days Grace - Over and Over RUS COVER/ КАВЕР НА РУССКОМ ЯЗЫКЕ",
  href: "https://www.youtube.com/watch?v=-efKUN4XIoM",
  file: 'audio/covers/24 - Ai Mori - Over and over (Three Days Grace rus cover).mp3'
}, {
  shortTitle: "BRING ME THE HORIZON - SHADOW MOSES",
  title: "BRING ME THE HORIZON - SHADOW MOSES RUS COVER/НА РУССКОМ В ЖЕНСКОЙ ВЕРСИИ",
  href: "https://www.youtube.com/watch?v=r-X6ZNPqhbc",
  file: 'audio/covers/23 - Ai Mori - Shadow moses (Bring Me The Horizon rus cover).mp3'
}, // {
// title: "КАРАНТИНО (Веселая песня про карантин by Ai Mori) #карантиновидение2020",
// href: "https://www.youtube.com/watch?v=GOsa15ZPeNI"},
{
  shortTitle: "The Killers - Mr. Brightside",
  title: "The Killers - Mr. Brightside RUS/НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=BbjdNQQpT7o",
  file: 'audio/covers/22 - Ai Mori - Mr. Brightside (The Killers rus cover).mp3'
}, {
  shortTitle: "Drowning Pool - Tear Away",
  title: "Drowning Pool - Tear Away RUS/ РУССКИЙ КАВЕР",
  href: "https://www.youtube.com/watch?v=PosxJAVMCMo",
  file: 'audio/covers/21 - Ai Mori - Tear away (Drowning Pool rus cover).mp3'
}, {
  shortTitle: "30  Seconds To Mars - The Kill",
  title: "30  Seconds To Mars - The Kill RUS cover НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=hz0bmNkyyUs",
  file: 'audio/covers/20 - Ai Mori - The Kill (30  Seconds To Mars rus cover).mp3'
}, {
  shortTitle: "The Rasmus - In the Shadows",
  title: "The Rasmus - In the Shadows RUS/РУССКИЙ КАВЕР",
  href: "https://www.youtube.com/watch?v=KUz7SQaaxWc",
  file: 'audio/covers/19 - Ai Mori - In the shadows (The Rasmus rus cover).mp3'
}, {
  shortTitle: "Tokio Hotel - Monsoon",
  title: "Tokio Hotel - Monsoon RUS/РУССКИЙ КАВЕР",
  href: "https://www.youtube.com/watch?v=lJlaZmL37kY",
  file: 'audio/covers/18 - Ai Mori - Monsoon (Tokio Hotel rus cover).mp3'
}, {
  shortTitle: "The Pretty Reckless - Just Tonight",
  title: "The Pretty Reckless - Just Tonight RUS/РУССКИЙ КАВЕР",
  href: "https://www.youtube.com/watch?v=YbKMQJ1-xwE",
  file: 'audio/covers/17 - Ai Mori - Just Tonight (The Pretty Reckless rus cover).mp3'
}, {
  shortTitle: "Mike Shinoda - Open Door feat. Ai Mori",
  title: "Open Door - Mike Shinoda feat. Ai Mori #SingOpenDoor",
  href: "https://www.youtube.com/watch?v=M6IachIhOb8"
}, {
  shortTitle: "Breaking The Habit - Linkin Park",
  title: "Breaking The Habit - Linkin Park  НА РУССКОМ/ RUS COVER",
  href: "https://www.youtube.com/watch?v=9vdpNoarFJU",
  file: 'audio/covers/16 - Ai Mori - Breaking the habit (Linkin Park rus cover).mp3'
}, {
  shortTitle: "My Heart Will Go On (OST ТИТАНИК)",
  title: "My Heart Will Go On (Céline Dion RUS COVER / РУССКАЯ ВЕРСИЯ OST ТИТАНИК)",
  href: "https://www.youtube.com/watch?v=pEN2dCahQXg",
  file: 'audio/covers/15 - Ai Mori - My Heart Will Go On (OST Titanic rus cover).mp3'
}, {
  shortTitle: "Architects - Royal Beggars",
  title: "Architects - Royal Beggars RUS COVER / РУССКАЯ ВЕРСИЯ",
  href: "https://www.youtube.com/watch?v=FRupDpVDJiQ",
  file: 'audio/covers/14 - Ai Mori - Royal Beggars (Architects rus cover).mp3'
}, {
  shortTitle: "Green Day - Boulevard Of Broken Dreams",
  title: "Green Day - Boulevard Of Broken Dreams (RUS COVER/ НА РУССКОМ КАВЕР)",
  href: "https://www.youtube.com/watch?v=Mc62sKuhSLs",
  file: 'audio/covers/13 - Ai Mori - Boulevard Of Broken Dreams (Green Day rus cover).mp3'
}, {
  shortTitle: "Roxette - Listen To Your Heart",
  title: "Roxette - Listen To Your Heart (ROCK RUS COVER / НА РУССКОМ РОК )",
  href: "https://www.youtube.com/watch?v=NOCYGQaWCMM",
  file: 'audio/covers/12 - Ai Mori - Listen to your heart (Roxette rus cover).mp3'
}, {
  shortTitle: "LINKIN PARK - CRAWLING",
  title: "LINKIN PARK - CRAWLING RUS COVER / РУССКАЯ ВЕРСИЯ",
  href: "https://www.youtube.com/watch?v=rGy1UgqmBzQ",
  file: 'audio/covers/11 - Ai Mori - Crawling (Linkin Park rus cover).mp3'
}, {
  shortTitle: "BRITNEY SPEARS - TOXIC",
  title: "BRITNEY SPEARS - TOXIC  РОК ВЕРСИЯ НА РУССКОМ/ ROCK RUSSIAN VERSION",
  href: "https://www.youtube.com/watch?v=A26wP9LqG84",
  file: 'audio/covers/10 - Ai Mori - Toxic (Britney Spears rus cover).mp3'
}, {
  shortTitle: "Flyleaf - I'm So Sick",
  title: "Flyleaf - I'm So Sick  RUS COVER / РУССКАЯ ВЕРСИЯ",
  href: "https://www.youtube.com/watch?v=5KCMOVjez64",
  file: 'audio/covers/09 - Ai Mori - I\'m So Sick (Flyleaf).mp3'
}, {
  shortTitle: "BRING ME THE HORIZON - SLEEPWALKING",
  title: "BRING ME THE HORIZON -  SLEEPWALKING | RUS COVER / НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ",
  href: "https://www.youtube.com/watch?v=EmOdHWz-vtw",
  file: 'audio/covers/08 - Ai Mori - Sleepwalking (Bring Me The Horizon rus cover).mp3'
}, {
  shortTitle: "ВЕДЬМАКУ ЗАПЛАТИТЕ ЧЕКАННОЙ МОНЕТОЙ",
  title: "ВЕДЬМАКУ ЗАПЛАТИТЕ ЧЕКАННОЙ МОНЕТОЙ укулеле ( Ft. Глад Валакас, Геральт из Ривии)",
  href: "https://www.youtube.com/watch?v=vPVQZJwPLLo"
}, {
  shortTitle: "В ЛЕСУ РОДИЛАСЬ ЕЛОЧКА| Rock версия",
  title: "В ЛЕСУ РОДИЛАСЬ ЕЛОЧКА| Rock версия",
  href: "https://www.youtube.com/watch?v=MfOvc50foQM",
  file: 'audio/covers/07 - Ai Mori - В лесу родилась елочка.mp3'
}, {
  shortTitle: "MAD WORLD НА РУССКОМ",
  title: "MAD WORLD НА РУССКОМ (RUSSIAN VERSION)",
  href: "https://www.youtube.com/watch?v=DSwoYP90xRE",
  file: 'audio/covers/06 - Ai Mori - Mad world (Gary Jules cover).mp3'
}, {
  shortTitle: "EVANESCENCE - Going under",
  title: "EVANESCENCE Going under НА РУССКОМ (RUSSIAN VERSION)",
  href: "https://www.youtube.com/watch?v=4_Pj9idMxGI",
  file: 'audio/covers/05 - Ai Mori - Going under (Evanescence rus cover).mp3'
}, {
  shortTitle: "LINKIN PARK - RUNAWAY",
  title: "LINKIN PARK НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ",
  href: "https://www.youtube.com/watch?v=1PCKOis6EQY",
  file: 'audio/covers/04 - Ai Mori - Runaway (Linkin Park rus cover).mp3'
}, {
  shortTitle: "KATY PERRY (ft. Женя Hawk) - E.T.",
  title: "KATY PERRY E.T. НА РУССКОМ ЯЗЫКЕ (ft. Женя Hawk)",
  href: "https://www.youtube.com/watch?v=jxcFI3Qnkus",
  file: 'audio/covers/03 - Ai Mori - E.T. (Katy Perry rus cover feat. Женя Hawk).mp3'
}, {
  shortTitle: "AVRIL LAVIGNE - Losing grip",
  title: "AVRIL LAVIGNE Losing grip НА РУССКОМ ЯЗЫКЕ",
  href: "https://www.youtube.com/watch?v=UXlpXwP0LoU",
  file: 'audio/covers/02 - Ai Mori - Losing grip (Avril Lavigne rus cover).mp3'
}, {
  shortTitle: "Billie Eilish - Bellyache",
  title: "Billie Eilish Bellyache НА РУССКОМ ЯЗЫКЕ",
  href: "https://www.youtube.com/watch?v=FxaA4R4YHmo",
  file: 'audio/covers/01 - Ai Mori - Bellyache (Billie Eilish rus cover).mp3'
}, // Блогеры
{
  shortTitle: "Ai Mori ft. HEYLEE, ДНК, INS1DE - BAN TWITCH",
  title: "Ai Mori ft. HEYLEE, ДНК, INS1DE - BAN TWITCH",
  href: "https://www.youtube.com/watch?v=K7mXZXePMZ4"
}, {
  shortTitle: "itpedia : 50 ОТТЕНКОВ ШЕВЦОВА",
  title: "itpedia : 50 ОТТЕНКОВ ШЕВЦОВА",
  href: "https://www.youtube.com/watch?v=b__rJ_yAcSk"
}, {
  shortTitle: "Ai Mori и Глад Валакас (Feat. Midix)",
  title: "Ai Mori и Глад Валакас (Feat. Midix)",
  href: "https://www.youtube.com/watch?v=PIh7aMRBaJI"
}, {
  shortTitle: "Ai Mori и olyashaa",
  title: "Ai Mori и olyashaa",
  href: "https://www.youtube.com/watch?v=ZwJ9G-nhRjU"
}];
var SONGS = [{
  title: 'Невеста',
  file: '/audio/AiMori-Nevesta.mp3',
  poster: 'images/covers/nevesta_thumb.jpg'
}, {
  title: 'Джин Тоник',
  file: '/audio/AiMori-JinTonic.mp3',
  poster: 'images/covers/jin_thumb.jpg'
}, {
  title: 'Пластилин',
  file: '/audio/AiMori-Plastilin.mp3',
  poster: 'images/covers/plastilin_thumb.jpg'
}, {
  title: 'Капелька летней грусти',
  file: '/audio/AiMori-Kapelka.mp3',
  poster: 'images/covers/kapelka_thumb.jpg'
}, {
  title: 'Электро',
  file: 'audio/AiMori-Elektro.mp3',
  poster: 'images/covers/electro_thumb.jpg'
}, {
  title: 'Тройничек',
  file: '/audio/AiMori-Troinichek.mp3',
  poster: 'images/covers/troinichek_thumb.jpg'
}, {
  title: 'Дым',
  file: '/audio/monada/dym.mp3',
  poster: 'images/covers/monada/dym_cover.jpg'
}, {
  title: 'Кислород',
  file: '/audio/monada/kislorod.mp3',
  poster: 'images/covers/monada/kislorod_cover.jpg'
}, {
  title: 'В моих венах',
  file: '/audio/monada/v_moih_venah.mp3',
  poster: 'images/covers/monada/v_venah_cover.jpg'
}, {
  title: 'Летели на юг (Альбом)',
  folder: [{
    title: 'SOS',
    file: '/audio/monada/leteli_na_yug/01_sos.mp3',
    poster: 'images/covers/monada/leteli_na_yug.jpg'
  }, {
    title: 'Все не так',
    file: '/audio/monada/leteli_na_yug/02_vse_ne_tak.mp3',
    poster: 'images/covers/monada/leteli_na_yug.jpg'
  }, {
    title: 'Стены знают',
    file: '/audio/monada/leteli_na_yug/03_steni_znayut.mp3',
    poster: 'images/covers/monada/leteli_na_yug.jpg'
  }, {
    title: 'Вакуум',
    file: '/audio/monada/leteli_na_yug/04_vakuum.mp3',
    poster: 'images/covers/monada/leteli_na_yug.jpg'
  }, {
    title: 'Летели на юг',
    file: '/audio/monada/leteli_na_yug/05_leteli_na_yug.mp3',
    poster: 'images/covers/monada/leteli_na_yug.jpg'
  }, {
    title: 'Молчим',
    file: '/audio/monada/leteli_na_yug/06_molchim.mp3',
    poster: 'images/covers/monada/leteli_na_yug.jpg'
  }, {
    title: 'Теплые ночи',
    file: '/audio/monada/leteli_na_yug/06_molchim.mp3',
    poster: 'images/covers/monada/leteli_na_yug.jpg'
  }, {
    title: 'Чайф',
    file: '/audio/monada/leteli_na_yug/08_chayf.mp3',
    poster: 'images/covers/monada/leteli_na_yug.jpg'
  }]
}];
var videoPlayer = document.querySelector('.video-container');
var playOverlay = document.querySelector('.videos__play-overlay');
var videoPreloader = document.querySelector('.videos__preloader');
var videoBackground = document.querySelector('.videos__background');

function parseVideoId(video) {
  return video.href.split('v=').pop();
}

function generateSlides(videos) {
  return videos.reduce(function (acc, video) {
    var videoId = parseVideoId(video);
    return acc + "<div class=\"swiper-slide\">\n        <button type=\"button\" data-id=\"".concat(videoId, "\" class=\"videos__video-button\">\n          <span class=\"videos__image swiper-lazy\" data-background=\"").concat(PREVIEW_URL, "/").concat(videoId, "/").concat(SLIDE_IMAGE, "\">\n            <span class=\"swiper-lazy-preloader\"></span>\n          </span>\n          <span class=\"videos__description\">").concat(video.shortTitle, "</span>\n        </button>\n      </div>");
  }, '');
}

function fillVideoSlider(videos) {
  var slider = document.querySelector('.swiper-wrapper');
  var markup = generateSlides(videos);
  slider.insertAdjacentHTML('afterbegin', markup);
}

function initVideoSlider() {
  var videosButtons = document.querySelectorAll('.videos__video-button');
  videosButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var activeButton = document.querySelector(".".concat(ACTIVE_BUTTON_CLASS));
      var target = event.currentTarget;
      var videoId = target.dataset.id;
      var title = target.querySelector('.videos__description').text;
      hideOverlay();

      if (activeButton) {
        activeButton.classList.remove(ACTIVE_BUTTON_CLASS);
      }

      target.classList.add(ACTIVE_BUTTON_CLASS);
      runVideo(videoId, title);
    });
  });
  var DEFAULT_VIDEO_INDEX = 0;
  var defaultVideo = videos[DEFAULT_VIDEO_INDEX];
  videosButtons[DEFAULT_VIDEO_INDEX].classList.add(ACTIVE_BUTTON_CLASS);
  videoBackground.style.backgroundImage = "url(".concat(PREVIEW_URL, "/").concat(parseVideoId(defaultVideo), "/").concat(BACKGROUND_IMAGE, ")");
  playOverlay.addEventListener('click', function () {
    runVideo(parseVideoId(defaultVideo), defaultVideo.title);
    hideOverlay();
  });
  var mySwiper = new Swiper('.swiper-container', {
    preloadImages: false,
    lazy: true,
    slidesPerView: 2,
    spaceBetween: 4,
    freeMode: false,
    slidesPerGroup: 2,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 2,
        freeMode: true
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}

function runVideo(id, title) {
  var iframe = "<iframe title=\"".concat(title || 'Youtube Video', "\" src=\"https://www.youtube.com/embed/").concat(id, "?autoplay=1\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"allowfullscreen\"></iframe>");
  videoBackground.style.backgroundImage = "url(".concat(PREVIEW_URL, "/").concat(id, "/").concat(BACKGROUND_IMAGE, ")");
  videoPlayer.innerHTML = '';
  videoPlayer.insertAdjacentHTML('afterbegin', iframe);
}

function hideOverlay() {
  playOverlay.classList.add('videos__play-overlay--hidden');
  videoPreloader.classList.add('videos__preloader--visible');
}

function initPlayers() {
  /*
  function PlayerjsEvents(event, id, data) {
    if (event === "new") {
      console.log('new');
    }
    if (event === "audiotrack") {
      console.log('event -> ', event);
    }
  }
   window.playerCovers.api("playlist_id") // получаем проигрываем трек
  */
  window.playerSelf = new Playerjs({
    id: 'self',
    file: SONGS
  });
  window.playerCovers = new Playerjs({
    id: 'covers',
    file: videos.map(function (video) {
      var videoId = parseVideoId(video);
      return _objectSpread({}, video, {
        title: video.shortTitle,
        poster: "".concat(PREVIEW_URL, "/").concat(videoId, "/").concat(PLAYER_IMAGE)
      });
    })
  });
  var playerEl = document.getElementById('player');
}

(function () {
  initPlayers();
  fillVideoSlider(videos);
  initVideoSlider();
  jarallax(document.querySelectorAll('.jarallax'), {
    imgPosition: '50% 10%',
    speed: 0.5
  });
})();