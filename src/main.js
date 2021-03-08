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
//	Playerjs.com 13.17.6
//	08.03.2021 15:04:18
//	API - https://playerjs.com/docs/q=api

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('B 7k=[];B fY;if(1V[\'wN\']){1I(wN,1)};E zO(3B){B o={1L:J,m8:[],pV:[],ht:\'Y0\',Y5:E7,Y8:Ec,7S:\'13.17.6\',fx:[\'7h\',\'\'],hv:\'\',2o:J,7J:J,df:J,XW:J,dr:J,5K:J,8b:J,9l:J,u:\'#Yb#Yr#Yq#dW#Yp#Ys#Yn#X1#X0#X4#X5#X9#X8#XJ#Xy#Yy#ZA#Zy#10i#YG#YK#Zd#Z0#dW#Z4#dW#Z8#UR#UQ#dW#UW#UV#UZ#Vh#V3#V5#dW#V9#U3#U6#U8#Uq#dW#Up#Uo\',u2:\'\',u3:\'\',u4:\'\',u5:\'\',u6:\'\',u7:\'\',u8:\'\',u9:\'\',y:\'xx??x?=xx????=\',p:\'{Uh}\',Vm:-1,ul:"wO",fs:"//wO.7r",7M:[],dt:H,pr:H,ga:J,ab:J,iL:[],Ws:J,ci:\'//.7D//\',2l:[],6o:[],8i:[],3i:[],ja:[],bK:[],l3:0,pK:J,6c:J,1H:J,r8:J,bI:J,ni:\'<wR>\',gt:\'</wR>\',jN:1V.as.Y<2A&&1V.as.1a<2A,wl:[],Wy:[],vm:0,8M:J,e4:J,kK:J,Wx:[],bU:J,b5:0,h1:J,oe:2g,hN:2g,oZ:J,wK:E(x){B a;P a},Wv:0,ox:4Y,62:J,cI:J,nv:1S.nv,d:9C.tj,hI:9C.tj,8D:9C.8D,8f:9C.8D.O("8f")==0,Wn:{},tA:\'ip-wL.7r/wL.js\',fd:["wK","wF"],4W:[],Ct:[],Wg:[],dq:1,kH:[],wF:E(x){B a;P a},1d:0,na:0,5V:J,dk:-1,8W:3,Wf:0,qo:0,9Z:0,3Q:{x:1,y:1,x0:1,y0:1},aN:["h4","dO","dU","lX","lY","m0","lR","cC","do","uM"],bL:0,We:0,fq:0,de:0,Bb:[],bA:[\'7l\',\'dn\',\'jx\',\'9p\'],Wc:[],nC:H,qX:[],mx:0,ws:"w"+"s",mN:J,mX:[J,J,J]};B fg={U:{w:20,h:20,1j:"-",Wd:"-",a:1,6S:-1,1B:"3U",1G:"",1D:1,fS:-1,9T:0,2p:1,1p:"",1F:"",4a:"Wh",b3:12,g8:0,1k:"V",2B:"0 3 0 3",cH:"0 0 0 0",2E:1,j3:"0 0 0 0",Wi:0,iZ:1,bg:0,mK:0,Ex:0,5Z:1,7R:-1,4E:"3P",9o:-1,ff:"0 0 0 0",rB:-1,rF:"3U",cq:-1,o6:-1,5J:"1N",4h:"ne",2p:0,iT:"3P",hB:0.7,sN:0,sQ:"3U",ic:"3 5 3 5",Wm:"0 0 0 0",sT:1,sR:"lf-lc",jH:11,sU:0,3d:"",FA:5,Fz:0,3t:0,Wl:2,Wk:2,EO:0.2,EM:0,EK:0.1,im:0,Fi:"Wj",Fg:1,Fe:5,EX:"3P",EP:"3U",EL:"3U",EY:1,Ez:1,rD:1,6F:0,3H:0,dM:20,cE:"<1Y Y=\'20\' 1a=\'20\'><g><cn ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 3j=\'#fI\'/></g></1Y>",tV:1,jE:-1,iR:0,nG:1,rP:-1,Wz:0.1,fJ:0,2S:"",D6:0,D8:"ne",2R:"",CW:wT,CS:wT,F2:0,51:0,5A:"3U",EU:0,ES:"3P",EW:9,rf:"0 0 10 0",ra:"0 0 0 0",EV:0}};E HK(){P H;o.DA=H}E aS(s){if(s.O(\'.\')==-1){s=s.1u(1);s2=\'\';X(i=0;i<s.S;i+=3){s2+=\'%u0\'+s.6r(i,i+3)}s=WA(s2)}P s};E Dn(){if(o.u!=\'\'){v=8T(v,4w.6i(d0(o.u)))}if(3B.O("#"+v.aD)==0){3p{3B=4w.6i(o[o.fd[0]](3B))}2Y(e){}}F{if(3B.O("#"+v.dR)==0){3p{3B=4w.6i(o[o.fd[1]](3B))}2Y(e){}}}}E 8C(x){if(x==\'HO\'){v.l4=\' \';v.l0=\' \'}if(x==\'xs\'){P[\'WQ\',\'WP\',2G(\'7Q\')]}if(x==\'1L\'){if(v.l4!=\' \'&&v.l0!=\' \'){B d=1C 6B();B hr=d.WO();B mn=d.WN();if(hr==v.l4&&mn==v.l0){1x(\'Al\');o.2o?o.W.8O():\'\';o.W.2Z();v.l4=\' \';v.l0=\' \';o.V.FH(\'v0\')}}}if(x==\'xr\'){P[\'WR\',\'WS\',2G(\'7Q\')]}if(x==\'oA\'){B s=v.hn*60+v.ho*1;if(s>0){v.1H=o.2w=s}}if(x==\'rJ\'){if(v.d1){3w.7w(\'wb\'+v.d1,v.hn+\':\'+v.ho)}}if(x==\'WW\'){v.hn=\'0\';v.ho=\'0\'}if(x==\'If\'){v.hn=\'0\';v.ho=\'0\';if(v.d1){if(3w.5D(\'wb\'+v.d1)!=2e){B 1O=3w.5D(\'wb\'+v.d1);B dH=1O.2I(\':\');if(dH.S==2){v.hn=dH[0];v.ho=dH[1]}}}}}E kr(y,1i){}B vV=E(){B bd=1K("1R");o.1Q.1J(bd);K(bd,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'Y\':\'100%\',\'1a\':30,\'2v-1B\':v.ya,\'1w\':v.xY,\'2q\':\'1N\'});B x=1K("1R");o.1Q.1J(x);K(x,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'Y\':\'100%\',\'1B\':v.yd,\'4a-3M\':v.y6,\'3e\':(v.ye+\'px \'+v.y8+\'px\'),\'2q\':\'1N\'});G.7D=E(1F,n){x.1U=1F;6h(x);K(bd,{\'1a\':x.2V,\'2q\':\'47\'});bd.C.4A="WT";X(B i=0;i<x.d9(\'a\').S;i++){x.d9(\'a\')[i].C.1B=\'#fI\'}if(n){1I(G.8x,2A*n)}x.C.4A="WM"};G.8x=E(){3c(x);3c(bd)}};2t(E(w,i,s,e){B 91=0;B 8A=0;B e0=0;B dA=[];B d2=[];ju(H){if(91<5)d2.2W(w.6l(91));F if(91<w.S)dA.2W(w.6l(91));91++;if(8A<5)d2.2W(i.6l(8A));F if(8A<i.S)dA.2W(i.6l(8A));8A++;if(e0<5)d2.2W(s.6l(e0));F if(e0<s.S)dA.2W(s.6l(e0));e0++;if(w.S+i.S+s.S+e.S==dA.S+d2.S+e.S)1n}B wZ=dA.lC(\'\');B x5=d2.lC(\'\');8A=0;B vd=[];X(91=0;91<dA.S;91+=2){B vr=-1;if(x5.a3(8A)%2)vr=1;vd.2W(7f.q6(2z(wZ.1u(91,2),36)-vr));8A++;if(8A>=d2.S)8A=0}P vd.lC(\'\')}(\'WF\',\'WI\',\'VD\',\'VG\'));B v={1x:0,vU:0,lT:"#3P",3g:0,Ij:1,8V:"#3P",4E:"#3U",6F:0,dD:1,jU:1,3q:0,yw:1,bP:0,1A:{VH:0,1B:"3P",a:"0.4",h:34,gL:1,1t:1,hY:1,eX:0,hq:3,8B:0,l9:3,5J:"1N",1k:"2K",2B:"0 0 0 0",6F:0,iO:0,aJ:\'\'},2c:{on:1,f:1,r:1,m:1,4d:5,uz:"4d",7Y:1,uS:"1W",nT:0,G3:1,qH:1,cD:0.2},1f:{4E:"3P",9o:"ll",5Z:0.9,7R:-1,1k:"1e",2B:"0 0 0 0",3e:"7 15 7 15",1B:"3U",4a:"wy, wt, lf-lc",b3:12,4I:10,g8:0,5A:"wv",sq:1,8V:"VL",a:1,6S:-1,VM:0,W0:100,10l:Au,W5:1,rT:1,yr:"VS",rS:"3P",rL:-1,VV:-1,yx:0,6u:3,ik:16,sH:"15k",6F:0,j2:1,jn:1,ko:"3U",rd:0,rc:"3P",xg:1,xi:0,xp:"ll",j6:0,hF:4Y,fu:0,9a:0,CM:0,CL:0,e7:1,3J:0,iP:50,sK:0,jr:1,ds:170,lx:0,vg:"ll",v9:"0 0 0 0",kS:30,8V:"yA"},1l:{4E:"3P",9o:"14Y",5Z:0.7,7R:-1,4a:"wy, wt, lf-lc",1k:"2K-2j",2B:"0 0 0 0",3e:"7 10 7 15",1B:"3U",b3:12,ik:16,4I:10,g8:0,15D:"3U",5A:"wv",a:1,1D:5,6S:-1,tu:1,6u:3,j2:1,jn:1,ko:"3U",j6:0,hF:4Y,6F:0,15H:1,15x:"5a",5d:1,15r:"6G",14s:1,14v:"2u",14d:0,14b:"6J",14J:0,14H:"5h",kS:30,8V:"yA"},Fr:{1k:"2K-2j",2B:"0 10 50 0"},1W:0.8,sG:1,nc:1,9H:0,5i:0,BY:1,5o:0,4i:0,HE:0,q5:0,44:0,DZ:1,o1:0,vK:0,vB:0,gd:\',\',hg:\';\',j0:\'//\',hV:\'3j\',lk:1,le:-1,I6:0,yJ:\'20 0 0 20\',dy:\'1g-1e\',vH:100,vJ:100,vG:-1,pE:0,xC:1,ya:"mw",yd:"3U",ye:5,y8:10,xY:1,y6:10,l3:0,uT:1,su:1,hS:1,4R:\'15P\',Cw:0,hL:\'8e\',iH:1,H6:0,GV:0,Dq:0,8m:1,bZ:1,HN:5,8Y:0,Bu:1,pv:0,pO:5,Il:0,GL:0,qJ:0,9O:1,e9:1,Dm:0,zd:0,Dj:0,rh:1,kN:0,2F:"Ag",15O:Ev,mA:\'100%\',ga:0,Ai:{9k:1,2b:0,jX:0,4F:0,1L:1,pb:0,oV:0,oU:0,15V:0,15U:0,15T:0},An:{9k:1,2b:0,jX:0,4F:0,1L:1,pb:0,oV:0,oU:0},16c:100,pu:1,eD:1,ny:14,h4:\'100%\',zn:1,ns:20,zp:1,lY:0.7,zl:2,vT:3,cC:10,dO:"3U",dU:"xI",lX:"3P",m0:0,lR:iF,s9:1,do:0,sk:1,8H:1,wG:1,wH:0.3,g5:3,jM:4,wQ:5,tl:0,Ce:16B,AZ:EZ,zb:0,zg:1,qs:1,nV:1,HF:1,rl:0,iA:160,t6:90,t8:0,CD:1,CC:"ll",CI:0,Cx:1,aD:\'2\',dR:\'3\',16e:10,16j:1,16m:1,16l:-1,11G:1,11E:1,fv:-1,11C:0,11M:1,11p:0,11t:1,11x:0,11v:1,12f:0,12i:1,12h:0,10p:1,10o:0,10m:1,10n:0,q3:1,10r:0,10s:0,10x:1,10w:0,10v:1,10u:"#3U",10X:"#3P",10W:"#3P",10U:"#3U",10V:"#3P",13E:"#3U",13h:"#3P",13i:"#3U",145:"#3P",12P:"#3U",12N:"#3P",12W:"#3U",12U:1,Lv:0,M4:1,M2:0.5,KT:"#3U",KF:"#3P",KH:1,Lg:1,MZ:1,Jj:1,IO:1,Kx:10,Jz:-1,JP:1,JU:1,JC:0,lF:0,Km:"or",Kj:"or",Kq:"or",Kc:"or",RK:"50%",RI:-1,RM:0,RP:-1,RG:0,RA:0,Hb:1,GW:0,z8:30,S5:2,xz:10,Bq:0,S4:30,CF:1,CE:1,6m:0,2m:{on:0,4E:"3P",3g:0,bY:2,8V:"3P",1k:"1e",2B:"20 0 0 20",Y:150,1t:0}};v.bG="ru";B 7t=E(is){B i;B C=[];B f=[];B b8=[];B S9=[];B 5P=[];B 7A=[];B 26=[];B f2=[];B gx=[];B Sa=[];B 4L=[];B 6K=[];B 3O=[];B dw=[];B dj=J;B 2U;B jl=-1;B 4u=H;B 1h=is;B 1f;B 5i=[];B dI=[];B 3T=\'\';B fN=\'\';B 5W=-1;B h7=J;B S3=J;B kv=J;B lP=J;B hk=J;B hD=J;B n0;B uI;B lL;B hq;B tX;B lb=-1;B a8=0;B 6a="2E";B ax=(o.1r.2C?"e2":"m9");B aI=(o.1r.2C?"cV":"o7");C=8T(C,v[is]);C=4s(v[is],\'2B\',\'2B\');if(C.lx==0){C.v9="0 0 0 0"}C=4s(v[is],\'ff\',\'v9\');C=4s(v[is],\'3e\',\'3e\');C.kX=0;B i1="<1Y C=\'2B-1g:cB\' Y=\'"+C.6u*2+"\' 1a=\'"+(C.6u*2>C.4I?(C.6u*2):C.4I)+"\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'><g><cn ry=\'"+(C.6u)+"\' rx=\'"+C.6u+"\' cy=\'"+(C.6u*2>C.4I?(C.6u):(C.4I/2))+"\' cx=\'"+C.6u+"\' 3j=\'#"+C.5A+"\'/></g></1Y>";B xm="<1Y Y=\'"+C.6u*2+"\' 1a=\'"+C.4I+"\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\' ><g><cn ry=\'"+(C.6u-1)+"\' rx=\'"+(C.6u-1)+"\' cy=\'"+(C.4I/2+2)+"\' cx=\'"+C.6u+"\' 3G=\'#"+C.5A+"\' 3G=\'1\' 3j-1w=\'0\'/></g></1Y>";B xx=4;B xl="<1Y Y=\'"+(xx+2)+"\' 1a=\'"+(C.4I)+"\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'><g><2M x1=\'1\' y1=\'"+(C.4I/2-xx)+"\' x2=\'"+xx+"\' y2=\'"+(C.4I/2)+"\' 3G=\'#"+C.1B+"\' 3G-Y=\'1\' 3G-aZ=\'5b\'/><2M x1=\'"+xx+"\' y1=\'"+(C.4I/2)+"\' x2=\'1\' y2=\'"+(C.4I/2+xx)+"\' 3G=\'#"+C.1B+"\' 3G-Y=\'1\' 3G-aZ=\'5b\'/></g></1Y>";B mP="<1Y Y=\'"+(xx+10)+"\' 1a=\'"+(C.4I+2)+"\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\' C=\'gg:1e\'><g><2M x1=\'1\' y1=\'"+(C.4I/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.4I/2-xx+2)+"\' 3G=\'#"+C.1B+"\' 3G-Y=\'1\' 3G-aZ=\'5b\' /><2M x1=\'1\' y1=\'"+(C.4I/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.4I/2+xx+2)+"\' 3G=\'#"+C.1B+"\' 3G-Y=\'1\' 3G-aZ=\'5b\'/></g></1Y>";B 1E=1K("1R");o.1Q.1J(1E);K(1E,{\'6w\':\'3t\',\'2q\':\'47\',\'1w\':0,\'3g-6n\':C.6F});if(is=="1l"){1E.C.4A=100}F{1E.C.4A=99}B 1b=1K("1R");if(o.jN){C.xe>0?C.b3=C.xe:\'\';C.yh>0?C.ds=C.yh:\'\';C.yu>0?C.iP=C.yu:\'\'}K(1b,{\'1k\':\'fl\',\'1g\':0,\'1e\':0,\'2q\':\'47\',\'Y\':\'100%\',\'3e-1g\':C.9j,\'3e-2j\':C.6Q+20,\'3e-2K\':C.9x,\'3e-1e\':C.6N,\'1B\':C.1B,\'4a-3M\':C.b3,\'4a-io\':C.4a,\'fy-dv\':C.g8+\'px\'});if(o.1r.6y){K(1b,{\'7P-Y\':yt})}if(is!=="1f"){K(1b,{\'6w-y\':\'9B\'})}1E.1J(1b);if(C.3J!=1){B 7p=1K("1R");K(7p,{\'2q\':\'47\',\'6w\':\'3t\',\'3g-6n\':C.6F});if(C.3J!=1){if(o.1r.6y){K(7p,{\'7P-Y\':yt})}}1b.1J(7p)}if(is=="1f"){4t(1b,{id:(v.id+"7e"+is)});if(C.3J==1){K(1b,{\'Y\':\'100%\',\'3e-2j\':C.6Q,\'3e-2K\':C.9x+20,\'6w-x\':\'9B\',\'92-7Y\':\'bF\'});K(1E,{\'Y\':o.3V-C.4k-C.3K,\'1a\':C.iP+C.9j+C.9x})}F{K(1b,{\'6w-y\':\'9B\'});if(C.xX==1){lh()}}if(C.lx==1){K(1E,{\'2v-1B\':C.vg})}if(v.1f.3n==1){3c(1E)}}if(C.j2==1){B 5f=1K("1R");B aC=mq(C.lx==1?C.vg:C.4E);if(C.3J==1){iW(5f,\'to 2j, 4B(\'+aC+\',\'+(C.5Z*1+0.3)+\'), 4B(\'+aC+\',0)\',\'1e\',12,5,7,10,7,10,12,15);5f.1z(6a,yn)}F{iW(5f,\'to 2K, 4B(\'+aC+\',\'+(C.5Z*1+0.3)+\'), 4B(\'+aC+\',0)\',\'1g\',5,12,10,7,10,7,15,12);5f.1z(6a,xT)}B 5t=1K("1R");if(C.3J==1){iW(5t,\'to 1e, 4B(\'+aC+\',\'+(C.5Z*1+0.3)+\'), 4B(\'+aC+\',0)\',\'2j\',8,5,13,10,13,10,8,15);5t.1z(6a,yp)}F{iW(5t,\'to 2K, 4B(\'+aC+\',0), 4B(\'+aC+\',\'+(C.5Z*1+0.3)+\')\',\'2K\',5,8,10,13,10,13,15,8);5t.1z(6a,xS)}5f.1z("m9",j4);5f.1z("o7",j4);5t.1z("m9",j4);5t.1z("o7",j4);1b.1z("qI",yl);5f.1z("9q",aK);5t.1z("9q",aK);1E.1J(5f);1E.1J(5t);4f(uI);uI=7q(xt,2A)}1b.1z(ax,yk);1b.1z(aI,uw);if(is=="1l"){X(B i=1;i<11;i++){if(I(v["9f"+is][is+i])){v.1l[is+i]=v["9f"+is][is+i];if(I(v["9f"+is][is+i+"1T"])){v.1l[is+i+"1T"]=v["9f"+is][is+i+"1T"]}if(I(v["9f"+is][is+i+"1j"])){v.1l[is+i+"1j"]=v["9f"+is][is+i+"1j"]}}if(I(v.1l[is+i])){if(v.1l[is+i]==1){ba(\'f\',i);bb(f[i],b8[i],5P[i],7A[i]);5P[i].1U=2G(v.1l[is+i+"1j"]);if(I(v.1l[is+i+"1T"])){if(v.1l[is+i+"1T"]!=\'\'){5P[i].1U=v.1l[is+i+"1T"]}}if(I(v.1l[is+i+"1j"])){26[i]=v.1l[is+i+"1j"];8n(i);if(26[i]==\'1D\'){lb=i}}f[i].1z(ax,5w);f[i].1z(aI,5p);f[i].1z(6a,8v);f[i].1z("9q",aK);if(v.1l[is+i+"1t"]==1){K(f[i],{"1a":0})}}}}}E yl(x){if(is=="1f"&&C.3J==1&&x){if(x.oj==0&&x.eg!=0){1b.9W-=x.eg;x.8Q()}}4f(lL);lL=7q(uw,du);am()}E yk(){o.3D=H}E uw(){if(C.hy==1){3k(o.dY);o.dY=1I(E(){if(!o.3D){c9()}},(v.1l.eW>0?v.1l.eW*2A:(o.1r.tv?3L:2A)))}o.3D=J}E 5w(1i){if(o.2o){o.59?o.W.59(J):\'\'}B i=1i.4h.7W(\'nZ\');B x;if(i){x=\'f\'}F{if(1i.4h.7W(\'b9\')){i=1i.4h.7W(\'b9\');x=\'f2\'}}if(i){i=2z(i);B fe=J;if(I(2t(x)[i])){if(C.7R>-1){K(2t(x+\'bg\')[i],{\'1w\':C.7R})}if(C.6S>-1){K(2t(x+\'1T\')[i],{\'1w\':C.6S});K(2t(x+\'51\')[i],{\'1w\':C.6S})}if(is=="1f"){if(26[i].O("1f")==0){B id=26[i].1u(8);if(3T==id||fN==id){K(2t(x+\'1T\')[i],{\'1B\':C.5A});K(2t(x+\'51\')[i],{\'1B\':C.5A});fe=H}F{K(2t(x+\'1T\')[i],{\'1B\':C.1B})}}}if(C.sm==1&&I(C.np)&&fe){}F{K(2t(x+\'bg\')[i],{\'6A\':C.9o})}}}};E 5p(1i){if(o.2o){o.59?o.W.59(H):\'\'}B i=1i.4h.7W(\'nZ\');B x;B fe=J;am();if(i){x=\'f\'}F{if(1i.4h.7W(\'b9\')){i=1i.4h.7W(\'b9\');x=\'f2\'}}if(i){if(I(2t(x)[i])){if(C.7R>-1){K(2t(x+\'bg\')[i],{\'1w\':C.5Z,"4M":"1w 0.1s 2T"})}if(C.6S>-1){K(2t(x+\'1T\')[i],{\'1w\':C.a,"4M":"1w 0.1s 2T"});K(2t(x+\'51\')[i],{\'1w\':C.a,"4M":"1w 0.1s 2T"})}if(is=="1f"){if(26[i].O("1f")==0){B id=26[i].1u(8);if(3T==id||fN==id){K(2t(x+\'1T\')[i],{\'1B\':C.5A});K(2t(x+\'51\')[i],{\'1B\':C.5A});fe=H}F{if(I(o.bK[id])){ia(i)}F{K(2t(x+\'1T\')[i],{\'1B\':C.1B})}}}}if(C.sm==1&&I(C.np)&&fe){}F{K(2t(x+\'bg\')[i],{\'6A\':o.bK[id]?C.rS:C.4E})}}}}E 8v(1i){if(!hk){B d=1C 6B();o.9u=d.9s();B i=1i.4h.7W(\'nZ\');if(i){if(I(f[i])){if(I(26[i])){5e(i,0)}}}}}E aK(1i){1i.6g=H;am()}E wf(1i){if(!hk){B d=1C 6B();o.9u=d.9s();B i=1i.4h.7W(\'b9\');if(i){if(i==0){fp()}F{if(I(3O[i])){yz(i)}}}}}E nI(1i){B x=1i.4h.7W(\'xB\');if(x){wh(x)}}E xE(1i){am();B i=1i.4h.7W(\'b9\');if(I(3O[i])){if(3O[i].O("=")>0){B x=3O[i].1u(0,3O[i].O("="));B y=3O[i].1u(3O[i].O("=")+1);B z=2U+\'xL\';if(!v[z]){v[z]=[]}if(!I(v[z][x])){v[z][x]=v[x]+\'\'}wk(x,y)}}}E wk(x,y){v[x]=y;if(o.5r&&v.s9==1&&x!="do"){3w.7w("nf"+x,y)}o.W.lm();wh(x)}E xF(1i){B i=1i.4h.7W(\'b9\');B x=3O[i];if(I(x)){if(x.O("=")>0){B z=x.1u(0,x.O("="));B y=x.1u(x.O("=")+1);v[z]=y;um();8n(o[2U+\'oa\']);if(2U=="lD"){8C("rJ")}}}}E 8n(i){if(I(26[i])){B aw=J;B 8g=J;B 5Q=\'\';if(is=="1l"){if(26[i]=="5a"){5Q=o.R.pi()}if(26[i]=="6G"){5Q=o.R.py()}if(26[i]=="dg"){if(o.7j){5Q=o.ja[o.P8]}}if(26[i]=="6G"||26[i]=="dg"||26[i]=="5a"){if(o[\'fH\'+26[i]].S==0){aw=H}F{if(o[\'fH\'+26[i]].S==1&&(C.xb!=1||o[\'fH\'+26[i]][0]==1)){aw=H}F{8g=H}}}if(26[i]=="5K"){if(!o.5K){aw=H}F{8g=H}}if(26[i]=="6J"){if(o.2x!=\'ar\'&&!v.6J){aw=H}F{8g=H}}if(26[i]=="2u"){if(I(o.2f)){8g=H;if(o.8M||v.8H==1){if(o.4P){5Q=o.3i[!o.8M?o.4P.8N():o.3F]}}F{5Q=\'\'}B hH=0;X(B s=0;s<o.2f.S;s++){if(o.2f[s]!=\'\'){hH++}}if(hH==1&&o.gI==1){hH=0}if(v.oL==1&&v.GH==1){}F{if(hH==0){aw=H;8g=J}}}F{aw=H}}if(26[i]=="5h"){5Q=o.4W[o.8W];5Q==1?5Q=2G(\'hZ\'):\'\';8g=H;if(o.2x=="aH"||(o.R.5v()&&v.QE!=1)){aw=H;8g=J}}if(26[i]=="1D"){5Q=2P.5b(o.3Q.x*100)+\'%\';8g=H}if(26[i].O("7y")>0){B x=\' \';B y=[\'xR\',\'xK\',\'xG\'];X(B z=0;z<y.S;z++){if(I(v[26[i]+y[z]])){if(v[26[i]+y[z]]!=\' \'){x+=(x!=\' \'?\':\':\'\')+v[26[i]+y[z]]}}}5Q=x!=\' 0:0\'&&x.O(":")>-1?x:\' \';8g=H}}7A[i].1U=5Q+(5Q!=\'\'&&C.Qx!=1?\' &cv;<1Y Y="hz" 1a="F5" td="-1 -1 5 8" 7S="1.1" 3E="3o://3A.w3.3x/3L/1Y" 3E:3C="3o://3A.w3.3x/6t/3C"><mU 3G="#\'+C.5A+\'" 3G-Y="1" 3j="1N" 3b="0 0 3 3 0 6"></mU></1Y>\':\'\');if(aw){1t(f[i]);if(is=="1l"){dw[i]?3k(dw[i]):\'\';if(o.V){o.V.hC(i,J,5Q)}F{dw[i]=1I(E(){o.V.hC(i,J,5Q)},4Y)}}K(f[i],{\'1k\':\'1X\',\'2j\':0,\'1g\':-100})}if(8g){if(C.3J==1){K(f[i],{\'2q\':\'ch-47\'})}F{1v(f[i])}if(is=="1l"){dw[i]?3k(dw[i]):\'\';if(o.V){o.V.hC(i,H,5Q)}F{dw[i]=1I(E(){o.V.hC(i,H,5Q)},4c)}}K(f[i],{\'1k\':\'fl\',\'2j\':0,\'1g\':0})}2L()}X(B j=1;j<f.S;j++){if(f[j]){if(6b(f[j])){B 4r=J;4u?4r=H:\'\';4u=J;4r&&o.V?o.V.4r():\'\'}}}};E 5e(i,xf){if(I(26[i])){o.vp=H;am();B x=uq();if(2U!=26[i]){2U=26[i];if(2U==\'5a\'||2U==\'6G\'||2U==\'2u\'||2U==\'5h\'||2U==\'dg\'||2U==\'1D\'||2U.O("7y")>0){jl=i;B z=nN(o[\'fH\'+2U]);if(2U=="v0"){z=8C("xs")}if(2U=="lD"){z=8C("xr")}B es=o[\'Pj\'+2U];B xn=o[\'Pn\'+2U];X(B j=1;j<f.S;j++){if(f[j]){f[j].C.2q="1N"}}f2=[];ba(\'f2\',0);bb(f2[0],gx[0],4L[0],6K[0]);K(f2[0],{"3g-2K":"5u 6M "+(C.xO==1?"#"+C.8V.22("#",""):"4B(100,100,100,0.7)")});a8=xf;B jQ=J;4L[0].1U=(x[0]<2||a8==1||C.sA==1?\'\':mP)+(v.1l[is+i+"1T"]&&v.1l[is+i+"1T"]!=\'\'?v.1l[is+i+"1T"]:2G(v.1l[is+i+"1j"]));if(2U==\'2u\'&&!o.k8&&!o.lE){B fT=1K("1R");fT.1U=2G("3B");K(fT,{\'1B\':C.1B,\'6L\':\'2y\',\'5R\':\'3I\'});6K[0].1J(fT);fT.1z(6a,xV);jQ=H}if(2U==\'2u\'&&v.oL==1&&!o.1r.tv&&I(1V.zs)){B uf=1K("1R");!o.4P?o.4P=1C iG():\'\';uf.1U="<ro 1G=\'3r\' id=\'"+v.id+"xj\' Pl=\'.rW,.rY,.g1\' C=\'2q:1N\'/>"+2G(\'Pk\');K(uf,{\'1B\':C.1B,\'6L\':\'2y\',\'5R\':\'3I\',\'2B-1e\':(jQ?\'cZ\':0)});6K[0].1J(uf);o.eE=1S.7N(v.id+"xj");o.eE.PD=o.4P.vQ;uf.1z(6a,o.4P.vQ)}if(jQ){if(h7){if(a8==2){z=[];3c(f2[0])}X(j=0;j<o.aN.S;j++){if(v.nW==0&&o.aN[j]=="dU"){}F{z.2W("PE"+o.aN[j])}}}}if(2U==\'1D\'){aQ();K(6K[0],{\'Y\':C.4I*2.5,\'1F-6Z\':\'2j\'})}K(4L[0],{\'4a-3M\':C.ik});3O[0]="B0";if(a8!=1&&x[0]>1){f2[0].1z(ax,5w);f2[0].1z(aI,5p);f2[0].1z(6a,wf);f2[0].1z("9q",aK)}F{K(f2[0],{"5R":\'7c\'})}if(C.xU==1){3c(f2[0])}if(I(z)){B zz=\'\';X(j=0;j<z.S;j++){B y=j+1;B dB=0;B 7Q=J;if(z[j]&&4p(z[j])!=\'\'){if(2U==\'5a\'){if(z[j]==2G("2y")){dB=1}if(o.2x=="1M"&&v.Ph==1){B iz=4V(z[j]);if(iz&&iz<zz){dB=2}zz=4V(z[j])}}ba(\'f2\',y,dB);bb(f2[y],gx[y],4L[y],6K[y],26[i]);if(2U==\'5h\'){z[j]==1?z[j]=2G(\'hZ\'):\'\'}if(1Z(z[j])==\'5c\'){if(z[j].O("<<<")==0){z[j]=z[j].22(\'<<<\',\'\');7Q=H}if(z[j].O(\'7y\')>0){o[2U+\'oa\']=i}if(z[j].O("w7")==0){B 1O=z[j];if(1O.O("7y")>0){4L[y].1U=2G(z[j].1u(1O.O("7y")+5))}F{4L[y].1U=2G(z[j].1u(7))}if(z[j]==\'St\'){K(f2[y],{"3g-1g":"5u 6M 4B(100,100,100,0.7)"})}}F{4L[y].1U=z[j]}}F{4L[y].1U=z[j]}3O[y]=2U+j;if(es==j||xn==j){6K[y].1U=es==j?i1:xm;es==j?K(4L[y],{\'1B\':C.5A}):\'\'}if(1Z(z[j])==\'5c\'){if(z[j].O("w7")==0){B t=z[j].1u(7);if(t.O("1B")>0){6K[y].1U="<1R C=\'"+(v[t]=="3P"?\'3g:5u 6M #iU;1a:fM;Y:fM;\':\'1a:cZ;Y:cZ;\')+";2v-1B:"+(v[t].O("#")==-1?\'#\':\'\')+v[t]+";3g-6n:cZ;\'></1R>"}F{if(I(v[z[j].1u(7)])){6K[y].1U=v[z[j].1u(7)]}}}}if(2U==\'5a\'){if(z[j]==2G("2y")&&o.R.hi()){K(4L[y],{\'1B\':C.5A})}if(I(v.jj)){if(v.jj.O(z[j])>-1){3c(f2[y])}}}B w4="";if(1Z(z[j])==\'5c\'){if(z[j].O("w7")==0){4t(f2[y],{\'Tk\':i,\'xB\':z[j].1u(7)});w4="nI"}}if(!7Q){f2[y].1z(ax,5w);f2[y].1z(aI,5p);if(w4=="nI"){f2[y].1z(6a,nI)}F{f2[y].1z(6a,wf)}f2[y].1z("9q",aK)}F{K(f2[y],{"5R":"7c"})}}}}2L()}if(26[i]==\'6J\'){o.W.l8()}if(26[i].O(\'1f\')>-1){B id=26[i].1u(8);if(I(o.1y[id])){if(I(o.1y[id][\'3r\'])){o.2w=2g;dF(i);s6(id);8C("oA");if(I(o.1y[id][\'7L\'])&&v.7L==1&&v.Ro==1){7L(o.1y[id][\'7L\'])}F{l5(id);o.W.cz(o.1y[id][\'3r\'],(v.1f.h8==1?1:2g));v.1f.9a==0&&v.1f.e7==1?1I(c9,4Y):\'\';kv=J;lP=J;kx(id)}}F{if(I(o.1y[id][\'4X\'])){6k(id);if(kv){5W==-1?5e(0,0):\'\'}F if(lP){5W==-1?5e(2z(f.S)-2,0):\'\'}}}}if(o.3n){o.3n.jd()}}if(26[i]==\'5K\'){o.R.fb()}}}};G.G1=E(x){8n(o[x+\'oa\'])};E wh(x){if(x=="uM"){B z=2U+\'xL\';if(v[z]){X(B y in v[z]){if(v[z].2J(y)){wk(y,v[z][y])}}h9()}P}am();X(B i=0;i<f2.S;i++){if(f2[i]){f2[i].C.2q="1N"}}f2=[];ba(\'f2\',0);bb(f2[0],gx[0],4L[0],6K[0]);K(f2[0],{"3g-2K":"5u 6M "+(C.xO==1?"#"+C.8V.22("#",""):"4B(100,100,100,0.7)")});if(x.O("7y")>0){f2[0].1z(6a,um);4L[0].1U=2G(x.1u(x.O("7y")+5))}F{f2[0].1z(6a,h9);4L[0].1U=(C.sA!=1?mP:\'\')+2G(x)}K(4L[0],{\'4a-3M\':C.ik});f2[0].1z(ax,5w);f2[0].1z(aI,5p);f2[0].1z("9q",aK);B 4J=[];B vR=J;if(x.O("3M")>0){4J=[\'50%\',\'75%\',\'100%\',\'125%\',\'150%\',\'175%\',\'4Y%\',\'K7%\',\'ce%\',\'iF%\']}if(x.O("5Z")>0){4J=[\'0\',\'0.2\',\'0.3\',\'0.4\',\'0.5\',\'0.6\',\'0.7\',\'0.8\',\'0.9\',\'1\']}if(x.O("h0")>0){X(i=-5;i<5.5;i+=0.5){4J.2W(2P.5b(i*100)/100)}}if(x.O("gi")>0){4J=[4Y,iF,bj]}if(x.O("2K")>0){X(i=0;i<21;i++){4J[i]=i*10}}if(x.O("xR")>0){X(i=0;i<24;i++){4J[i]=i}}if(x.O("xK")>0||x.O("xG")>0){X(i=0;i<60;i++){4J[i]=i}}if(x.O("bY")>0){vR=H;4J=[0,1]}if(x.O("1B")>0){4J=[\'3U\',\'xI\',\'ND\',\'MG\',\'MA\',\'Mv\',\'Mw\',\'Nm\',\'Ns\',\'La\',\'L5\',\'Li\',\'KW\',\'KJ\',\'KE\',\'13t\',\'KL\',\'3P\'];B vx=v[x].22("#","");if(4J.O(vx)==-1){4J[8]=vx}}X(y=1;y<=4J.S;y++){ba(\'f2\',y,0);bb(f2[y],gx[y],4L[y],6K[y]);K(6K[y],{\'3e-1e\':0});if(x.O("1B")>0||x.O("2K")>0||x.O("7y")>0||x.O("h0")>0){y%3!=0?K(f2[y],{\'gg\':\'1e\'}):\'\';K(f2[y],{\'Y\':\'33.3%\'});if(x.O("1B")>0){4L[y].1U="<1R C=\'"+(4J[y-1]=="3P"?\'3g:5u 6M #iU;1a:xH;Y:xH;\':\'1a:fK;Y:fK;\')+";2v-1B:#"+4J[y-1]+";3g-6n:fK;\'></1R>";K(f2[y],{\'2M-1a\':1})}F{4L[y].1U=4J[y-1]}}F{if(x.O("gi")>0){4L[y].1U=4J[y-1]}F{y%2!=0?K(f2[y],{\'gg\':\'1e\'}):\'\';K(f2[y],{\'Y\':\'50%\'});if(vR){4L[y].1U=2G(4J[y-1]+\'9D\')}F{4L[y].1U=4J[y-1]}}}3O[y]=x+\'=\'+4J[y-1];if((4J[y-1]==v[x]&&7f(v[x])!=" ")||v[x]==\'#\'+4J[y-1]){6K[y].1U=i1;K(4L[y],{\'1B\':C.5A})}f2[y].1z(ax,5w);f2[y].1z(aI,5p);if(x.O("7y")>0){f2[y].1z(6a,xF)}F{f2[y].1z(6a,xE)}f2[y].1z("9q",aK)}2L()}E l5(id){if(I(o.1y[id][\'29\'])){v.29=o.1y[id][\'29\'];I(v.29)?o.R.9A(v.29):\'\'}if(I(o.1y[id][\'1T\'])){o.f8=o.1y[id][\'1T\']}}E kx(id){if(I(o.1y[id][\'1T\'])){if(v.o1==1){if(o.W.jo(o.1y[id])){}F{v.1T=(v.vB==1&&I(o.uE)?o.uE+(v.vK==1?\'<br>\':\' \'):\'\')+o.1y[id][\'1T\']}o.W.aF(\'1T\')}}if(v.im==1){if(I(o.1y[id][\'3b\'])){v.3b=o.1y[id][\'3b\']}F{v.3b=[]}o.V.iS()}v.6V=2g;B xv=[\'1c\',\'z3\',\'z4\',\'ob\',\'7O\',\'4F\',\'6V\',\'4o\',\'iK\',\'6J\',\'bx\',\'bq\',\'nM\'];X(B i=0;i<xv.S;i++){if(I(o.1y[id][xv[i]])){v[xv[i]]=o.1y[id][xv[i]]}}v.1H=0;s6(id);if(I(o.1y[id][\'3h\'])){o.1y[id][\'2u\']=o.1y[id][\'3h\']}if(I(o.1y[id][\'2u\'])){o.W.gZ(o.1y[id][\'2u\'])}if(I(o.1y[id][\'cl\'])){6D(\'cl\',o.1y[id][\'cl\'])}}E s6(id){B x=o.1y[id][\'1H\'];if(I(x)){if(x=="3v"){if(o.R.1d()>0){v.1H=o.2w=o.R.1d()}}F{v.1H=o.2w=x}}}E dF(x){if(5W==0&&!o.1H){K(5P[5W],{\'1B\':C.1B});K(b8[5W],{\'6A\':C.4E});7A[5W].1U=\'\'}F{o.uv=x;if(5W>-1){ia(5W)}if(3T!=\'\'){o.bK[3T]=H;5i=oq(5i,3T)}}if(26[x]){B id=26[x].1u(8);7A[x].1U=i1;K(5P[x],{\'1B\':C.5A,\'1F-nQ\':\'1N\',\'1w\':C.a});if(C.sm==1&&I(C.np)){K(b8[x],{\'6A\':C.np})}5W=x;3T=id;o.3T=3T;v.56=3T;o.kZ=5P[x].1U;o.uv=3T;fN=o.1y[id][\'go\'];if(o.V){o.V.i5()}}}E 6k(id){B x=id==0?o.1f:o.1y[id];o.uv=id;X(B i=0;i<f.S;i++){if(C.3J==1){1b.3a(f[i])}F{7p.3a(f[i])}f[i]=2e}f=[];5W=-1;if(I(x[\'4X\'])){B y=4y.3Z(x[\'4X\']).S;ba(\'f\',y);26[y]="wA";bb(f[y],b8[y],5P[y],7A[y]);if(C.3J==1){K(f[y],{"Y":(C.jr==1?C.ds:"2y"),"1a":C.iP})}if(C.sq==1){if(C.3J==1){K(f[y],{"Nd":"5u 6M #"+C.sH})}F{K(f[y],{"N6":"5u 6M #"+C.sH})}}B 1O=x.1T;if(C.sA!=1){1O=mP+1O}5P[y].1U=1O;K(5P[y],{\'4a-3M\':C.ik});B p=x[\'go\'];f[y].1z(ax,5w);f[y].1z(aI,5p);f[y].1z(6a,E(){ym(p)});x=x[\'4X\']}B y=4y.3Z(x).S;5i=[];dI=[];X(B i=0;i<y;i++){ba(\'f\',i);26[i]="1f"+x[i].id;if(!I(o.bK[x[i].id])&&!I(x[i].4X)){5i[x[i].id]=i;dI[x[i].id]=i}bb(f[i],b8[i],5P[i],7A[i]);if(C.3J==1){if(C.6u==0){K(5P[i],{\'Y\':C.ds-C.tP-C.tQ});3c(7A[i])}K(f[i],{"Y":(C.jr==1?C.ds:"2y"),"1a":C.iP})}if(C.sq==1&&i<y-1){B jR=1K("1R");f[i].1J(jR);if(C.3J==1){K(jR,{"1k":"1X","1g":0,"2j":0,"Y":1,"1a":"100%","2v":"#"+C.8V,"6L":"1N"})}F{K(jR,{"1k":"1X","2K":0,"1e":0,"Y":"100%","1a":1,"2v":"#"+C.8V,"6L":"1N"})}}5P[i].1U=x[i].1T?x[i].1T:\'&cv;\';if(v.c7==1&&v.Bp==1&&x[i].id){if(o.xM){if(o.xM.O(x[i].id)>-1){x[i].rr=1}}}if(I(x[i].rr)){if(x[i].rr==1){o.bK[x[i].id]=H;ia(i)}}if(I(x[i].4X)){7A[i].1U=xl;K(7A[i],{"1B":C.1B})}f[i].1z(ax,5w);f[i].1z(aI,5p);f[i].1z(6a,8v);f[i].1z("9q",aK);if(I(o.bK[x[i].id])){ia(i)}if(3T==x[i].id){dF(i)}if(fN==x[i].id){K(5P[i],{\'1B\':C.5A});K(7A[i],{\'1B\':C.5A})}}2L();4u=J;o.V?o.V.4r():\'\'}E iW(x,y,z,x1,y1,x2,y2,x3,y3,x4,y4){B ww=(C.3J==1?\'xk\':\'100%\');B hh=(C.3J==1?\'100%\':\'xk\');K(x,{\'1k\':\'1X\',\'2q\':\'ch-47\',\'Y\':ww,\'1a\':hh,\'1F-6Z\':\'7g\'});if(C.xg==1){K(x,{\'2v\':\'-jP-2T-5l(\'+y+\')\',\'2v\':\'-3N-2T-5l(\'+y+\')\',\'2v\':\'-ms-2T-5l(\'+y+\')\',\'2v\':\'-o-2T-5l(\'+y+\')\',\'2v\':\'2T-5l(\'+y+\')\',})}if(C.3J==1||o.1r.2C){K(x,{\'5R\':\'3I\'})}F{K(x,{\'3I-2F\':\'1N\'})}if(C.j6==1){K(x,{\'5L-Y\':C.hF+\'px!5C\'})}if(z=="1g"){K(x,{\'1g\':-1,\'1e\':0})}if(z=="2K"){K(x,{\'2K\':-1,\'1e\':0})}if(z=="1e"){K(x,{\'1g\':0,\'1e\':0})}if(z=="2j"){K(x,{\'1g\':0,\'2j\':0})}if(z=="2j"||z=="1e"){K(x,{\'1F-6Z\':\'1e\',\'3e-1g\':1E.2V/2-10})}x.1U="<7g><1R "+(C.xi==1?"Ml=\'G.C.6A=\\"#"+C.xp+"\\"\' MJ=\'"+(C.rd==1?"G.C.6A=\\"#"+C.rc:"G.C.2v=\\"1N")+"\\"\'":"")+" C=\'3I-2F:2y;5R:3I;Y:fK;1a:fK;3g-6n:fK;"+(C.rd==1?"2v-1B:#"+C.rc+";":"")+(z=="1g"?"2B-1g:cZ;":"")+(z=="2K"?"2B-1g:cZ;":"")+(z=="2j"?"2B-1e:lp;":"")+(z=="1e"?"2B-2j:lp;":"")+"\'><1Y Y=\'20\' 1a=\'20\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'><g><2M x1=\'"+x1+"\' y1=\'"+y1+"\' x2=\'"+x2+"\' y2=\'"+y2+"\' 3G=\'#"+C.ko+"\' 3G-Y=\'"+C.jn+"\' 3G-aZ=\'5b\'/><2M x1=\'"+x3+"\' y1=\'"+y3+"\' x2=\'"+x4+"\' y2=\'"+y4+"\' 3G=\'#"+C.ko+"\' 3G-Y=\'"+C.jn+"\' 3G-aZ=\'5b\'/></g></1Y></1R></7g>"}G.8Z=E(){if(C.j2==1){8Z()}};E xt(){if(dj){8Z()}}E 8Z(e){if(C.j2==1&&!hD){if(C.3J==1){B h=1b.K8;B m=1E.2k+C.6N+C.6Q;B t=1b.9W}F{B h=1b.x6;B m=1E.2V;B t=1b.cG}if(h>m){if(t>0){if(!6b(5f)){1v(5f);B m1=1C 5x({"mc":5f,"1G":"7E","to":1,"1d":0.3,"me":"5f"})}}F{if(6b(5f)){B m2=1C 5x({"mc":5f,"1G":"7E","to":0,"1d":0.3,"me":"5f","1t":H})}if(e){e.eg<0?e.8Q():\'\'}}if(t<h-m-10){if(!6b(5t)){1v(5t);B m3=1C 5x({"mc":5t,"1G":"7E","to":1,"1d":0.3,"me":"5t"})}}F{if(6b(5t)){B m4=1C 5x({"mc":5t,"1G":"7E","to":0,"1d":0.3,"me":"5t","1t":H})}if(e){e.eg>0?e.8Q():\'\'}}}F{1t(5f);1t(5t)}}}E xS(){B x=1b.cG+1E.2V-60;B m=1C 5x({"mc":1b,"1G":"9B","to":x,"1d":0.3,"me":"xd","8I":"bM"});1I(8Z,2A)}E xT(){B x=1b.cG-1E.2V+60;B m=1C 5x({"mc":1b,"1G":"9B","to":x,"1d":0.3,"me":"JO","8I":"bM"});1I(8Z,2A)}E j4(1i){3k(o.dY);1i.an()}E yp(){B x=1b.9W+(1E.2k+C.6N+C.6Q)-60;B m=1C 5x({"mc":1b,"1G":"g7","to":x,"1d":0.3,"me":"Jo","8I":"bM"});1I(8Z,2A)}E yn(){B x=1b.9W-(1E.2k+C.6N+C.6Q)+60;B m=1C 5x({"mc":1b,"1G":"g7","to":x,"1d":0.3,"me":"wu","8I":"bM"});1I(8Z,2A)}E ym(x){if(x==\'\'){6k(0)}F{if(I(o.1y[x])){6k(x)}}2U=\'\'}E ia(x){7A[x].1U=\'\';K(5P[x],{\'1B\':C.yr});if(C.yx==1){K(5P[x],{\'1F-nQ\':\'2M-JY\'})}if(C.rT>-1){K(5P[x],{\'1w\':C.rT})}K(b8[x],{\'6A\':C.rS});if(C.rL>-1){K(b8[x],{\'1w\':C.rL})}}E yz(i){if(I(3O[i])){am();if(3O[i].O("5a")==0){o.W.5S(3O[i].1u(7))}if(3O[i].O("6G")==0){o.W.da(3O[i].1u(10))}if(3O[i].O("2u")==0){!o.4P?o.4P=1C iG():\'\';o.4P.9G(3O[i].1u(8))}if(3O[i].O("dg")==0&&v.7j==1){o.7j.zG(3O[i].1u(7))}if(3O[i].O("1D")==0){if(3O[i]==\'IN\'){o.R.1D(C.1D/100)}if(3O[i]==\'IM\'){o.R.1D(\'-\'+C.1D/100)}if(3O[i]==\'IZ\'){o.R.qA()}}if(3O[i].O("7y")>0){if(3O[i].O("J1")>0){8C(2U+\'0\');8n(o[2U+\'oa\']);if(2U=="lD"){8C("rJ")}fp()}}if(3O[i].O("5h")==0){o.W.8y(3O[i].1u(5));i6();1I(c9,4Y)}}};G.i6=E(){i6()};G.G2=E(x){X(B i=0;i<26.S;i++){if(26[i]==x){P H}}P J};E i6(){X(B i=0;i<26.S;i++){if(26[i]=="5h"){8n(i);if(2U==\'5h\'){fL();5e(i,0)}}}}E ba(x,i,dB){if(I(2t(x))){2t(x)[i]=1K("1R");if(i<2||x=="f"||2U!=\'5a\'||dB==1){if(C.3J==1){1b.1J(2t(x)[i])}F{7p.1J(2t(x)[i])}}F{if(C.3J==1){1b.ou(2t(x)[i],2t(x)[i-1])}F{7p.ou(2t(x)[i],2t(x)[dB==2?i-2:i-1])}}if(x==\'f\'){4t(2t(x)[i],{\'nZ\':i})}if(x==\'f2\'){4t(2t(x)[i],{\'b9\':i})}2t(x+\'bg\')[i]=1K("1R");2t(x)[i].1J(2t(x+\'bg\')[i]);2t(x+\'41\')[i]=1K("1R");2t(x)[i].1J(2t(x+\'41\')[i]);K(2t(x+\'41\')[i],{\'1k\':\'1X\',\'2j\':0,\'1g\':0,\'Y\':\'100%\',\'1a\':\'100%\',\'6L\':\'1N\'});2t(x+\'1T\')[i]=1K("1R");2t(x)[i].1J(2t(x+\'1T\')[i]);2t(x+\'51\')[i]=1K("1R");2t(x)[i].1J(2t(x+\'51\')[i]);if(x=="f2"&&is=="1l"&&C.tu==0){3c(2t(x+\'51\')[i])}}};E bb(x,bd,i7,tI,RT){K(x,{\'1k\':\'fl\',\'2j\':0,\'1g\':0,\'5R\':\'3I\',\'1a\':\'2y\',\'Y\':\'100%\',\'6w\':\'3t\',\'2q\':\'47\',\'2M-1a\':\'1.RZ\'});if(C.sK&&C.3J==1){K(x,{\'R0\':C.sK})}if(C.3J==1){K(x,{\'2q\':\'ch-47\',\'9S-6Z\':\'1g\',\'92-7Y\':\'hZ\'})}K(bd,{\'1k\':\'1X\',\'2j\':0,\'1g\':0,\'Y\':\'100%\',\'1a\':\'100%\',\'6A\':C.4E,\'1w\':C.5Z,\'6L\':\'1N\',\'4M\':\'1w 0.2s 2T,2v .2s 2T\'});K(i7,{\'1k\':\'fl\',\'2j\':0,\'1g\':0,\'gg\':(C.6Z?C.6Z:\'1e\'),\'1B\':C.1B,\'3e-1g\':C.gM,\'3e-2j\':C.tQ,\'3e-2K\':C.QS,\'3e-1e\':C.tP,\'6L\':\'1N\',\'1w\':C.a,\'4M\':\'1w 0.2s 2T,1B 0.2s 2T\',});K(tI,{\'1k\':\'fl\',\'2j\':0,\'1g\':0,\'gg\':(C.y5?C.y5:\'2j\'),\'3e-1g\':C.gM+(C.4I<C.b3?(C.b3-C.4I)/2:0),\'3e-2j\':C.tQ,\'3e-1e\':C.tP,\'6L\':\'1N\',\'4a-3M\':C.4I,\'1w\':C.a,\'1B\':C.5A,\'4M\':\'1w 0.2s 2T,1B 0.2s 2T\'});if(C.j6==1){K(x,{\'5L-Y\':C.hF+\'px!5C\'});K(i7,{\'5L-Y\':(C.hF-70)+\'px!5C\'})}F{if(C.3J==1){if(C.jr==1){K(x,{\'Y\':C.ds});K(i7,{\'Y\':C.ds-70})}}F{K(i7,{\'92-7Y\':\'bF\'});K(tI,{\'92-7Y\':\'bF\'})}}}E fp(){X(B i=1;i<f.S;i++){if(I(f[i])){if(C.3J==1){f[i].C.2q="ch-47"}F{f[i].C.2q="47"}}}am();fL();2L();2U=\'\';jl=-1};E fL(){X(B j=0;j<f2.S;j++){if(f2[j]){if(C.3J==1){1b.3a(f2[j])}F{7p.3a(f2[j])}f2[j]=2e}}f2=[];2U=\'\'}E wV(){P 1b.2k};G.hw=E(){lh()};E lh(){if(is=="1f"){if(C.3J==1||C.xX==1){B x=o.3V-C.4k-C.3K;K(1E,{\'Y\':x});K(1b,{\'Y\':x});7p?K(7p,{\'Y\':x}):\'\'}}}E 2L(){if(!hD){if(is=="1l"){o.V?o.V.vh():\'\';B x=C.xU==1&&f.S>1?f[1]:f[0]}if(is=="1f"){lh();o.V?o.V.hw():\'\';B x=f[0];if(v.E1==1){kg()}}f.S>1&&!x?(f[1]?x=f[1]:\'\'):\'\';f.S>2&&!x?(f[2]?x=f[2]:\'\'):\'\';if(x){x.2k==0&&f2.S>0?x=f2[0]:\'\'}if(1b.2k-1b.kU>0&&x&&C.3J!=1){if(I(5f)){K(5f,{"Y":7p.2k})}if(I(5t)){K(5t,{"Y":7p.2k})}C.kX=(1b.2k-x.2k)-(1b.kU-x.kU)}F{C.kX=0}}};E uq(){B x=0;B y=0;B z=\'\';X(B i=1;i<f.S;i++){if(I(f[i])){if(f[i].C.5F=="46"){x++;y=i;z=26[i]}}}P[x,y,z]}G.vj=E(){h7=H;G.1v();a8=2;h9()};E xV(x){h7=!h7;h9(x)}E h9(){fp();X(B i=0;i<26.S;i++){if(26[i]=="2u"){5e(i,a8)}}}E am(){3k(tX);tX=1I(E(){o.vp=J},3L)}E um(){B x=2U;fp();X(B i=0;i<26.S;i++){if(26[i]==x){5e(i,0)}}}E c9(x){if(is==\'1l\'&&v.1l.9a==1){}F{if(is==\'1f\'&&v.1f.3n==1&&v.1f.SC!=1){o.3n?o.3n.eo():\'\';dj=J}F{if((x!=1||(C.SX==1&&C.9a==1))&&!o.1r.tv){B m=1C 5x({"mc":1E,"1G":"7E","to":0,"1d":0.1,"me":is,"8I":"yG"});hq=1I(E(){K(1E,{"5F":"3t","1w":0,"1g":-3L});dj=J},4Y)}F{K(1E,{"5F":"3t","1w":0,"1g":-3L});dj=J}}if(is==\'1f\'){if(v.1f.y9==1&&o.V){o.V.p5("1j","1f",H)}}4f(lL)}};G.c=E(){P 1E};G.co=E(){if(1E.SO(1b)){P 1b}};G.s=E(1h){P C[1h]};G.ss=E(1h){P C};G.1v=E(){fp();3k(hq);dj=H;if(is==\'1f\'&&v.1f.3n==1){o.3n?o.3n.hm():\'\'}F{K(1E,{"5F":"46","1w":1,"4M":"1w 0.2s 2T"});B x=uq();if(x[0]==1){if(x[2]=="5a"||x[2]=="6G"||x[2]=="2u"||x[2]=="5h"||x[2]=="1D"||x[2].O("7y")>0){5e(x[1],0)}}}if(o.V){is==\'1l\'?o.V.vh():\'\';if(is==\'1f\'){o.V.hw();if(v.1f.y9==1){o.V.p5("1j","1f",J)}}}if(o.1r.6y){K(1b,{\'7P-Y\':\'2y\'});if(C.3J!=1){K(7p,{\'7P-Y\':\'2y\'})}}hk=H;4f(n0);n0=7q(yb,100)};E yb(){4f(n0);hk=J}G.5Y=E(i){5e(i,1)};G.1t=E(x){c9(x)};G.5S=E(){X(B i=0;i<26.S;i++){if(26[i]=="5a"){8n(i);if(o.2l.S>1){1v(f[i])}if(2U==\'5a\'){fL();5e(i,a8)}}}};G.fb=E(){X(B i=0;i<26.S;i++){if(26[i]=="5K"){8n(i)}}};G.hA=E(x){X(B i=0;i<26.S;i++){if(26[i]==x){8n(i);if(o[\'fH\'+x]){if(o[\'fH\'+x].S>1){1v(f[i])}}if(2U==x){fL();5e(i,a8)}}}};G.9G=E(){X(B i=0;i<26.S;i++){if(26[i]=="2u"){8n(i);if(o.3i){if(o.3i.S>0){B x=J;if(o.2f){X(B y=0;y<o.2f.S;y++){if(o.2f[y]!=\'\'){x=H;1n}}}F{x=H}x?1v(f[i]):\'\'}}if(2U==\'2u\'){fL();5e(i,0)}}}};G.v4=E(x){o.1f=x;6k(0);if(I(v.56)){if(v.56.O("x-")!=0){X(B y in o.1y){if(o.1y.2J(y)){if(o.1y[y].cO==v.56){v.56=y}}}}if(I(o.1y[v.56])){fj(o.1y[v.56]);B y=o.1y[v.56][\'bt\'];dF(y);if(v.1f.vA==1&&C.3n!=1){6k(0);1I(E(){2L()},4c)}F{1I(E(){dm(y);2L()},4c)}v.56=2g}F{dF(0)}}F{dF(0)}if(C.3n==1){if(!I(o.3n)){o.3n=1C P5()}}};G.i2=E(x){if(I(o.1y[x])){fj(o.1y[x]);5e(o.1y[x][\'bt\'],0);dm(o.1y[x][\'bt\'])}};G.jh=E(x){if(I(o.1y[x])){fj(o.1y[x]);if(o.1y[x]["3r"]){dF(o.1y[x][\'bt\']);l5(x);o.W.cz(o.1y[x]["3r"],1);kx(x);dm(o.1y[x][\'bt\']);if(o.3n){o.3n.jd()}}F if(o.1y[x]["4X"]){6k(x)}}};E wU(x){if(I(o.1y[x])){fN=\'\';6k(0);fj(o.1y[x]);l5(x);5e(o.1y[x][\'bt\'],0);kx(x)}};G.d8=E(){kv=H;x=2z(5W)+1;if(3T!=\'\'){o.bK[3T]=H;5i=oq(5i,3T)}if(v.5i==1){x=sP(5i);if(x==2e){if(v.NI==1||v.1f.fu==1){dI.Cr(E(a,b){P 2P.5U()-0.5});X(B x in dI){if(dI.2J(x)){5i[x]=dI[x]}}x=sP(5i)}F{o.W.xq()}}}F{if((26[x]=="wA"||5W==-1)&&3T!=\'\'){B y=4y.3Z(o.1y).O(3T);if(y<4y.3Z(o.1y).S){B z=o.1y[4y.3Z(o.1y)[y+1]];if(z){if(I(z.4X)){z=o.1y[4y.3Z(o.1y)[y+2]]}G.jh(z.id);x=-1;o.W.2N()}}}}if(x>-1){5e(x,0);dm(x)}};E dm(x){if(f[x]&&!hD){if(C.3J==1){B to=f[x].kR-20;B m=1C 5x({"mc":1b,"1G":"g7","to":to,"1d":0.3,"me":"wu","8I":"bM"})}F{B to=f[x].wC-1E.2V/2+20;B m=1C 5x({"mc":1b,"1G":"9B","to":to,"1d":0.3,"me":"xd","8I":"bM"})}1I(8Z,2A)}}E sP(4e){B 3Z=4y.3Z(4e);B x;X(B i=0;i<3Z.S;i++){x=4e[3Z[3Z.S*2P.5U()<<0]];if(x){1n}}P x};G.aQ=E(){aQ()};E aQ(){if(lb>-1){8n(lb);if(2U==\'1D\'){6K[0].1U=2P.5b(o.3Q.x*100)+\'%\'}}};G.f1=E(){if(v.5i==1){P 4y.3Z(5i).S>0}B x=J;if(o.1y){x=4y.3Z(o.1y).O(3T)<4y.3Z(o.1y).S-1}P x};G.jk=E(){if(I(o.gJ)){wU(o.gJ)}};G.v6=E(){B x=5W>0;if(o.1y){B y=4y.3Z(o.1y);B z=y.O(3T);x=z>0;if(z==1){if(I(o.1y[y[0]].4X)){x=J}}}P x};G.jm=E(){P I(o.1y)};G.f7=E(){lP=H;if(G.v6()){B x=2z(5W)-1;if(x<0){B y=4y.3Z(o.1y).O(3T);if(y>0){B z=o.1y[4y.3Z(o.1y)[y-1]];if(z){if(I(z.4X)){z=o.1y[4y.3Z(o.1y)[y-2]]}if(z){G.jh(z.id);o.W.2N()}}}}F{5e(x,0);dm(x)}}};G.ji=E(){if(5W>0){dm(5W)}};E fj(x){if(x[\'qK\']!=-1){fj(o.1y[x[\'go\']]);6k(x[\'go\'])}F{6k(0)}};G.g=E(x){a6(x){1o"Y":P wV();1n;1o"1a":P 1E.2V;1n;1o"1g":P 1E.wC;1n;1o"Eb":P 1b.x6;1n;1o"Ea":P C.9b;1n;1o"x":P 4V(1E.C.1e);1n;1o"y":P 4V(1E.C.1g);1n;1o"1w":P 1E.C.1w;1n;1o"1v":P dj;1n;1o"5Y":P jl;1n;1o"1h":P 1h;1n;1o"a7":P 1h+a7;1n;1o"4u":P 4u;1n;1o"1f":P is=="1f";1n;1o"tu":P i1;1n;1o"bi":P o.1y[o.bi]?o.1y[o.bi].1T:\'\';1o"bq":P v.bq?v.bq:\'\'}};G.4u=E(){if(is=="1l"){B x=0;X(B i=1;i<11;i++){if(26[i]=="5a"){B y=o.2l.S;if(I(v.jj)){B z=v.jj.2I(",");X(B j=0;j<z.S;j++){if(o.2l.O(z[j])>-1){y--}}}if(y>0){if(y>1||(y==1&&o.2l!=1&&C.xb==1)){x++}}}if(26[i]=="5K"){if(o.5K){x++}}if(26[i]=="6J"){if(o.2x==\'ar\'||v.6J){x++}}if(26[i]=="6G"){if(o.6o.S>0){x++}}if(26[i]=="dg"&&v.7j==1){if(o.ja.S>0){x++}}if(26[i]=="2u"){if(I(o.2f)){X(B s=0;s<o.2f.S;s++){if(o.2f[s]!=\'\'){x++;1n}}}if(x==1&&o.gI==1){x=0}}if(26[i]=="5h"){if(o.2x!="aH"){x++}}if(26[i]=="1D"){x++}if(26[i]){if(26[i].O("7y")>0){x++}}if(v.1l[is+i+\'1t\']==1){x--}}P x==0}F if(is=="1f"){P f.S==0}F{P 4u}};G.43=E(){if(1E.5g==o.1Q){1E.3a(1b);o.1Q.3a(1E);o.3n?o.3n.43():\'\';1E=2e;1b=2e;hD=H}}};B ol=E(1c){B 1b;B 1p;B fD;B 8S=J;B 5Y=J;B 4m=v.xa==1&&I(v.xc)?cS(v.xc):"#3U";B x7=v.xa==1&&I(v.x9)?cS(v.x9):"#3P";B sh=[];B e6=["BR","PS","PV","PU","PN","PM","PF","ok"];X(B i=1;i<=15;i++){if(I(v["2X"+i])){uk(v["2X"+i])}}G.hm=E(){if(!8S){1b=1K("1R");K(1b,{"1k":"1X","Y":"100%","1a":"100%","2v":nR(x7,0.8),"1B":4m});1b.C.4A="3L";B 8x=1K("1R");K(8x,{"1k":"1X","1g":15,"2j":15,"5R":"3I","3e":5});8x.1U="<1Y Y=\'20\' 1a=\'20\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'><g><4b d=\'PG.5,3.5 L3.5,16.5 wS.5,3.5 Z\' 3G=\'"+4m+"\' 3G-Y=\'3\' 3G-aZ=\'wI\'></4b><4b d=\'M3.5,3.5 wS.5,16.5 L3.5,3.5 Z\' 3G=\'"+4m+"\' 3G-Y=\'3\' 3G-aZ=\'wI\'></4b></g></1Y>";if(o.1r.2C){8x.1z("cV",E(1i){aA()})}F{8x.aX=aA}8x.C.4A=10;B 2H=1K("1R");K(2H,{"1k":"1X","1g":((v.wH*100)+\'%\'),"1e":0,"Y":"100%","1F-6Z":"7g","1B":4m});2H.1U=(v.wG==1?2G("2X")+\'<br><br>\':\'\')+(I(v.1c)?\'<a 8D="\'+v.1c+\'" C="1F-nQ:1N;1B:\'+4m+\';Gt:0;92-7Y: bF;fy-dv:5u;2q:47" 4h="ne" id="o5\'+v.id+\'">\'+v.1c+\'</a>\':\'\');o.1Q.1J(1b);1b.1J(8x);1b.1J(2H);K(o.1E,{\'-3N-dl-fk\':\'2y\'});if(I(v.1c)){mp("o5"+v.id)}1p=[];if(!I(v.wD)){v.wD="ng"}if(!I(v.wE)){v.wE="mb"}if(!I(v.te)){if(v.bG=="ru"){v.te="vk"}if(v.bG=="en"){v.te="ip"}}if(I(v.7O)){v.PJ="7O"}B 1Y;X(B i=1;i<=15;i++){if(I(v["2X"+i])){1Y=Bf(v["2X"+i]);if(v["2X"+i]!=""&&1Y&&1Y!=\'\'){1p[i]=1K("1R");K(1p[i],{"2q":"ch-47","5R":"3I"});B m=((v.g5*20-20)+v.wQ*1)/2;B m6=0;if(v["2X"+i]=="vk"||v["2X"+i]=="7O"){m6=v.g5*3}K(1p[i],{"2B-1e":m+m6,"2B-2j":m+m6,"2B-1g":m+20,"Y":20,"1a":20});1p[i].1U="<1Y Y=\'20\' 1a=\'20\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'><g>"+1Y+"</g></1Y>";2H.1J(1p[i]);1D(i,v.g5);1p[i].i="i"+i;1p[i].fP=5w;1p[i].fO=5p;1p[i].aX=8v}}}fD=1K("1R");K(fD,{"2q":"47","Y":"100%","1F-6Z":"7g","2B-1g":m+15});2H.1J(fD);8S=H}F{6h(1b);K(o.1E,{\'-3N-dl-fk\':\'2y\'});if(I(v.1c)){mp("o5"+v.id)}}if(o.1L){o.bU=H;o.W.2Z()}5Y=H};E aA(){if(o.bU){o.W.2N()}eo()}E eo(){if(I(1b)){3c(1b);o.bU=J;5Y=J;fD.1U=\'\';K(o.1E,{\'-3N-dl-fk\':\'1N\'})}}G.eo=E(){eo()};E 5w(){if(I(G.i)){B i=G.i.1u(1)*1;if(v.jM>-1){1D(i,v.jM)}}}E 5p(){if(I(G.i)){B i=G.i.1u(1)*1;if(v.jM>-1){1D(i,v.g5)}}}E 8v(e){if(I(G.i)){B i=G.i.1u(1)*1;tm(v["2X"+i])}}G.2Q=E(x){if(x.O("1c")>-1){if(v[x]){B y=v[x].22("{1d}",2z(o.R.1d()));k4(y);o.8d.7D(2G("lO"),2)}}tm(x,H)};E uk(x){if(1c(x)==\'\'){3p{sh[x]=2t(\'1C PC\'+x+\'()\')}2Y(e){}}}E tm(y,z){B x=1c(y);if(e6.O(y)>-1){if(sh[y]){x=sh[y].2X()}}if(y=="7O"&&I(v.7O)){if(I(v.ge)){v.ge=v.ge.22(/7K\'qt/ig,\'"\')}k4((I(v.wM)?v.wM.22(/7K\'qt/ig,\'"\'):\'\')+\'<bP Y="\'+(v.tl==1?v.Ce:2z(o.9v))+\'" 1a="\'+(v.tl==1?v.AZ:2z(o.az))+\'" 2R="\'+v.7O+\'" PT="0" tD\'+(I(v.ge)?\' \'+v.ge:\'\')+\'></bP>\'+(I(v.AY)?v.AY.22(/7K\'qt/ig,\'"\'):\'\'));if(z){o.8d.7D(2G("lO"),2)}F{fD.1U=2G("lO");if(I(v.1c)){mp("o5"+v.id)}}}x!=\'\'?AX(x,\'ol\',4c,4c):\'\'}E 1c(y){B x=\'\';if(y=="ng"){x="8f://3A.ng.7r/ti/ti.B2?u="}if(y=="mb"){x="8f://mb.7r/B0?5N="}if(y=="ip"){x="8f://PA.ip.7r/2X?1c="}if(y=="vk"){x="8f://vk.7r/2X.B2?1c="}P x}E 1D(i,x){K(1p[i],{"2O-GJ":\'50% 50% lp\'});K(1p[i],{"2O":"1D("+x+")","4M":"2O 0.1s 2T"})}E AX(1c,1T,tq,tr){B AR=(as.1a/2)-(tr/2);B AT=(as.Y/2)-(tq/2);1V.5Y(1c+zK(I(v.1c)?v.1c:o.8D),\'ti\',\'1g=\'+AR+\',1e=\'+AT+\',1A=0,5N=0,Y=\'+tq+\',1a=\'+tr)}E mp(AV){B tz=1S,1F=tz.7N(AV),cY,mS;if(1F){if(tz.7H.Bc){cY=1S.7H.Bc();cY.Pg(1F);cY.fk()}F if(1V.Bd){mS=1V.Bd();cY=1S.Pp();cY.Py(1F);mS.Pz();mS.Pu(cY)}}}E Bf(x){if(x=="ng"){P"<4b d=\'BS,6.g2 gP.gD,6.g2 gP.gD,5.Ps eT.gD,4.Pt 12.PX,4.ty 12.PY,4.ty ts.Ba,4.ty ts.Ba,2.Qv gP.Qw,2 C9.Qs,2 8.gr,3.Qr 8.gr,5.Qn L8.gr,6.g2 L7,6.g2 L7,9.n2 L8.gr,9.n2 L8.gr,17.B6 gP.gD,17.B6 gP.gD,9.n2 ts.QG,9.n2 Cd,6.g2 Z\' 3j=\'"+4m+"\' 3j-al=\'cX\'></4b>"}if(x=="mb"){P"<4b d=\'M7.Az,15.jg ei.QD,15.jg 15.md,11.Qz 15.md,7.QA 96.md,7.QB 15.md,7.Qm 15.Ql,7.Q6 96.Q7,7.Q8 16.B7,6.Q9 16.Q5,6.Q4 96.PZ,6.Q1 15.Q2,6.Q3 14.Qa,6.Qb 96.Qi,6.Qj 15.Qk,5.Qh 16.B7,5.Qc 96.Qd,5.Qe 15.Qf,5.Pd 14.Pc,5.Oa aT.Ob,4.Oc 11.Od,4.O9 10.O8,5.O4 mG.O5,6.O6 9.O7,7.Oe 10.Of,8.Om C8.Oo,8.Op 6.Ol,7.Ok 4.Og,5.Oh C4.Oi,6.Oj 4.O3,8.O2 5.NL,8.NM C5.NN,8.NO 4.NK,8.NJ 4.tw,8.NF L4.tw,8.NG C4.tw,9.NQ 5.NY,10.NZ 6.O0,11.O1 C6.NW,11.NR 5.NS,11.NU 5.NV,11.Oq C5.Or,12.OX 6.OY,12.OZ 7.P0,12.OV C6.OQ,13.OR 5.OT,13.sS 4.OU,13.sS C4.P1,13.sS 4.P2,13.P9 4,13.Pa C5.P7,14.P3 6.P4,15.jg 7.Az,15.jg\' 3j=\'"+4m+"\' 3j-al=\'cX\'></4b>"}if(x=="ip"){P"<4b d=\'OP.fo,8.sY ut.fo,11.AA mG.fo,11.AA 12.Oy,11.AB 13.Oz,11.AB ei.OA,12.OB 11.Ox,13.t9 10.fo,13.t9 C8.Ow,13.t9 6.ta,11.Ot 6.ta,10 C6.ta,8.Ou 8.Ov,6.t7 10.fo,6.t7 eT.OC,6.t7 11.OL,6.OM 12.ON,7.OJ ei.OI,6.OE 12.OF,6.OG 14.OH,5.QI aT.QJ,4.SJ 11.SK,4 10.Ar,4 C6.Av,4 4,6.SL 4,10 C4,13.SM 6.Av,16 10.Ar,16 96.SE,16 16.SF,11.SG 15.SN,8.sY ut.fo,8.sY Z\' 3j=\'"+4m+"\' 3j-al=\'cX\'></4b>"}if(x=="vk"){P"<4b d=\'SV.uj,13.SU-0.ST-0.SP-1.SQ-1.SR-1.SS-2.SB-0.Sl-0.Sm-0.As-0.Sn-0.we-0.So-0.Sk c-1.Sj-1.Sf,3.121-3.Sg,2.Sh-5.Si-0.ir-0.Sp-0.Sq-0.Sx-3.Sy-0.21-3.Sz-0.SA-0.Sw,0.A6-0.127,0.Sv-0.ij,0.136 c-0.z2,1.Sr-1.164,2.Su-2.E6,3.SY-0.uc,0.Aq-0.173,0.111-0.Tt,0.Tu-0.ir-0.Tv-0.1-0.uh-0.148-0.kw c-0.Tw-0.Ts-0.Tn-3.To-0.Tp-4.Tq-0.kw-0.u1-0.uc-0.161-0.ij-0.Tx-0.Aq-0.At-0.174-0.u1-0.TF-0.124 c-1.102-0.18-2.TG-0.146-3.TH,0.TD.Tz,5.TA,7.84,5.36,7.TB,5.TC.63,5.Tm,7.Tl,5.T6,7.T7,5.T8 c0.As,0.ir,0.we,0.ij,0.T9,0.T5.T4,7.T0,8.hK,8.54,8.yZ,9.T1.T2,9.58,8.Ta,9.Tb,8.yO,9.Ti C8.36,9.Tj,8.Th,9.Tg,8.Tc,9.Td.135,9.Te,7.Tf,9.Se,7.Sd,9.Re.Rh,9.Rd,7.Rc,9.R8,7.R9,9.Ra C6.Rb,8.Ri,6.zw,7.Rj,5.Rq,5.Rr-0.ir-0.124-0.124-0.AC-0.21-0.Rs.Rp,5.Rk,5.13,5.Rl,4.yW,5.Rm.Rn,5.R7 c-0.QQ,0-0.QR,0.ub-0.QT,0.QP.uh,5.QO.yP,5.QK,1.QL,5.93,2.At,6.QM.QN,3.101,3.QU,7.yY,6.QV,8.R2 c0.R3,0.G4,1.R4,0.Au,2.R5,0.R1.QW-0.QX,0.QY-0.QZ,0.Rt-0.Ru.kw-0.RY.uh-0.kw,0.ir-0.u1,0.ub-0.16 c0.149-0.RW,0.RS-0.RU,0.RV-1.S2.ub-0.uc,0.124-0.ij,0.ij-0.NE.Sb-0.Sc,0.133-0.127,0.AC-0.148 c0.S6-0.S7,2.RR,1.RQ,2.RB,2.RC.RD,14.RE,19.Rz,15.yS,18.uj,13.Rv.Rw,13.Rx,18.Ry,13.RF,18.uj,13.RN\' 3j=\'"+4m+"\' 3j-al=\'cX\'/></4b>"}if(e6.O(x)>-1){if(!sh[x]){uk(x)}P sh[x]?sh[x].1p(4m):\'\'}if(x=="7O"){P"<4b d=\'M7.iD,13.tM L1,10.AK L1,9.AN L7.iD,5.RL L7.iD,7.RH L2.RJ,9.tO L7.iD,12.AI L7.iD,13.tM Z BM.AM,4 L9.TI,16 L7.Jd,16 ut.J5,4 eO.AM,4 Z IR.Bg,9.tO eO.jw,7.It eO.jw,5.Is AO,9.AN AO,10.AK eO.jw,13.tM eO.jw,12.AI Kt.Bg,9.tO Z\' 3j=\'"+4m+"\' 3j-al=\'cX\'></4b>"}}E k4(x){B eb=1S.1K(\'rq\');eb.5X(\'C\',\'Y:5u;3g:0;1w:0;\');1S.7H.1J(eb);eb.51=x;eb.fk();1S.Ku(\'k4\');1S.7H.3a(eb)};G.4u=E(){B x=H;X(B i=1;i<=15;i++){if(I(v["2X"+i])){if(v["2X"+i]!=""){x=J}}F{i<4?x=J:\'\'}}if(I(v["7O"])){v["7O"]!=\'\'?x=J:\'\'}if(I(v["1c"])){v["1c"]!=\'\'?x=J:\'\'}P x};G.43=E(){if(8S){o.1Q.3a(1b);1b=2e;8S=J}};G.zh=E(){P 5Y}};E Kp(){G.2X=E(){P(o.1r.2C?"8f://wa.me/?":"8f://Kk.BR.7r/9J?")+"1F="};G.1p=E(4m){P"<4b d=\'BS.BJ,5.BL aT.JB,4.JA 11.Ju,3.Jt 10.Jl,3.BT C6.Js,3.BT 4.JH,6.JG 4.JM,9.JL C4.K0,10.JK 4.JJ,11.JI 4.JF,12.JN L4.JV,15.JT L7.JQ,14.JR C8.JE,15.JD 9.Jr,15.Jp 10.Jm,15.BP aT.Jn,15.BP 15.Jy,12.Jv 15.Jw,9.Jx JW.JX,7.Kn 15.Kl,6.Kh 14.BJ,5.BL Z BM.Cb,11.Cc ei.Kv,11.Kr 12.Ks,12.Kg 11.Kf,12.K3 eT.K4,12.K5 11.K2,12.JZ 10.Jk,11.K6 C8.Kd,11.Ke 7.K9,9.Ka 7.Ky,9.IW C7.IG,9.IE 6.rH,8.II 6.rH,8.IJ C6.rH,7.IA 7.IK,7.IL 7.IQ,6.Iw C7.Ir,6.Iy 7.Iv,6.nL 7.Ix,6.nL C7.Jb,6.nL 8.Ji,6.nL 8.Je,6.Jf C8.J6,6.IU 8.IS,6.IY 8.J3,6.J0 C8.Ja,7.J2 8.BN,8.IT 8.IV,8.IX C9.Jg,8.Jc 9.J8,8.J7 8.J9,8.Iu C8.BN,8.IC 8.IB,8.IH 8.MH,8.MI C8.MF,8.ME 8.MB,8.MD 8.MK,8.MS C8.MT,8.MQ 8.MP,9.ML 8.MM,9.MN C8.MO,9.Mz 8.My,9.Mj 9.Mk,10.Mm C9.Mi,10.Mh 10.Md,10.Me 10.Mf,10.Kz mG.Mg,11.Mn 10.Mo,11.Mx 10.Mu,10.BV mG.Mr,10.BU 11.Ms,10.MV 11.Np,10.Nq eT.Nr,10.Nn 11.Nk,10.Nl 11.NC,10.Nz eT.Ny,10.Nu 12.Nv,10.Nw 12.Nx,10.Nh ei.Ng,10.BU 12.N3,10.N4 13.N1,10.BV aT.Ca,10.MX 13.Ca,11.N5 12.Cb,11.Cc Z\' 3j=\'"+4m+"\' 3j-al=\'cX\'></4b>"}};E Ne(){G.2X=E(){P"8f://t.me/2X/1c?1c="};G.1p=E(4m){P"<4b d=\'Nf.Bo,4.Bj 96.Nc,4.Nb 15.N7,4.N8 14.C2,4.BX Cd.C2,4.BX rj.Na,4.Mc 11.Mb,5.Lb 8.Lc,6.Ld C6.L6,7.KX 4.KY,8.KZ 4.Le,8.Lf C4.BZ,8.Lm 3.Ln,9.Lo 3.Ll,9.Lk C3.Lh,9.Lj 3.KV,10.KG 4.BZ,10.KI C4.KA,10.KB 6.KC,11.KD 6.KK,11.KS C6.KU,11.KR 13.KQ,6.KM 13.BH,6.KN aT.KO,7.KP 8.Lp,11.Lq 8.LU,11.LV C8.LW,11.LT 7.LS,14.LO 8.LP,14.LQ C8.LR,14.LX 8.LY,14.M8 8.M9,14.Br C8.M6,14.M5 8.LZ,14.C0 8.M1,14.C0 C9.LN,14.LM 9.Lx,13.Ly 10.Lz,13.Lw eT.Lr,14.Ls 12.Lt,15.Lu 12.LA,15.LB eO.LK,15.LL ei.LH,15.LC 13.LD,15.rN 13.LE,15.rN aT.LF,15.rN 13.SZ,15.W4 13.BH,15.12V aT.12X,15.12T 13.12S,15.12O 14.Bs,14.Br rj.Bs,14.12Q 14.12R,14.12Y 14.12Z,14.13b rj.13c,12.13d 14.13e,10.13a 15.139,9.131 96.130,7.132 15.137,6.138 15.12M,5.12L 96.12u,5.12t 15.12v,5.12w 15.12x,5.12s 96.12r,5.12n 15.12m,4.12o 15.Bo,4.Bj Z\' 3j=\'"+4m+"\' 3j-al=\'cX\'></4b>"}};B qO=E(1c,gp){B 6W=J;if(1c.O(\'6W\')==0){6W=H;1c=1c.1u(5)}B nz=lK(1c);B 2b;B 3q;B 8S=J;B 3S=J;B kq=J;B mk=J;B 2y=H;B sy=[];B b4=1;B gb=J;B rt;B cM=0;B ml=0;B mv=J;B n7=\'Hp\'+v.id+(6W?\'6W\':\'\');B 1E=1K(\'1R\');1E.5X(\'id\',n7);gp.1J(1E);o.5K=J;!6W?o.W.hE():\'\';if(o.1r.2C){v.4i=1}if(v.Bm!=1){B 7x=1K(\'1R\');gp.1J(7x);K(7x,{1k:"1X",1g:0,1e:0,"2v-1B":"#mw",1a:"100%",Y:"100%","1w":0});7x.1z("GU",E(1i){1i.6g=H});if(o.1r.2C){7x.1z("e2",E(1i){1i.6g=H});7x.1z("2E",E(1i){1i.6g=H});7x.1z("cV",E(1i){1i.6g=H;eH(1i);if(v.dD==1){1I(Bi,100);1I(nb,2A)}})}F{7x.1z("rw",E(1i){B x=H;if(v.2i==1){if(I(v.7l)&&!kq){x=J}if(I(v.nk)&&aB()=="8X"&&1d()>0){x=J}}if(x&&v.dD==1&&v.Bk!=1){3c(G);1I(nb,3L)}})}v.dD==1&&v.12y!=1?3c(7x):\'\'}E nb(){6h(7x)}E Bi(){if(v.Bk!=1){3c(7x)}}if(v.4i==1&&v.44==0){8a()}if(!1V[\'YT\']){1V.12I=E(){nl();X(B i=0;i<7k.S;i++){if(7k[i].2Q("id")!=v.id){if(7k[i].2Q(\'zB\')){7k[i].2Q(\'zC\')}}}};B fF=k5("4j.7r/Bl","4j.7r/Bl","12K");if(fF){fF.nA=E(e){o.W.ae();if(v.Bx!=1){2b=\'GO 12G eF\';o.R.5z()}}}}F{nl()}E nl(){if(v.4i==1||6W){!8S?94():\'\'}F{o.W.ae()}}E 94(){if("YT"in 1V){if(I(YT.jf)&&!8S){1x("Bv 94");B rb=0;if(v.Bm==1){rb=1}o.2w>0?cM=2z(o.2w):\'\';3q=1C YT.jf(n7,{1a:o.a0,Y:o.a2,12B:nz,12A:{12C:1,12D:n7,12E:1,13f:1,e7:1,H0:((v.pu==0||(v.13g!=1&&o.1r.9y))&&o.1r.2C?0:1),13P:3,V:rb,13Q:0,13R:1,zQ:0,44:0,9H:0},2F:{\'13S\':rk,\'13O\':BE,\'5z\':5z,\'13N\':Bw}});if(o.2w>0){o.2w=2g}2L();8S=H}F{1I(94,4c)}}F{1I(94,4c)}}B g6;E rk(){1x("Bv gK");3S=H;3k(rt);o.W.6O();if(6W){if(o.1r.v3){o.W.4Z()}3q.nn();o.2i.13J()}F{if(v.44==1&&o.1r.v3&&!o.mN){o.W.4Z();if(o.1r.2C){4f(g6);g6=7q(BD,ce)}}if(v.4i==0){3q.nn()}F{o.W.ae()}o.R.a5();if(b4!=1){8y(b4)}bE();2L()}}E BD(){B x=3q.Ao();if(x==2||x==-1){o.V.2Z();o.V.6O();4f(g6)}if(x==1){4f(g6)}}E BE(1i){if(v.13K==1){1x(\'YT\',1i.1P)}if(6W){if(1i.1P==YT.cF.BG){o.2i.13L()}if(1i.1P==YT.cF.BF){}}F{if(1i.1P==YT.cF.BF){if(ml==1){ml=0;rk()}if(!o.1L){o.W.2N()}if(cM>0){3q.ze(cM,H);cM=0;o.2w=2g}nb();kq=H;3S=H;if(mk){3q.sw()}F{o.R.8U();o.R.bH()}By();if(I(v.4g)){X(B i=0;i<o.2l.S;i++){if(v.4g==o.2l[i]){5S(i)}}v.4g=2e}F{if(I(o.4g)){X(B i=0;i<o.2l.S;i++){if(o.4g==o.2l[i]){5S(i)}}o.4g=2e}}gb=J}if(1i.1P==-1&&gb&&o.1L){o.W.6O();gb=J;di()}if(1i.1P==YT.cF.13T){}if(1i.1P==YT.cF.BG){8o()}if(1i.1P==YT.cF.13U){if(!o.1L){}if(o.1L){gb=H;8a()}}if(1i.1P==YT.cF.143){}}}E 5z(1i){if(6W){o.2i.144()}F{if(1i.1P==2){2b="Dz 4j id"}if(1i.1P==5){2b="DB 4u"}if(1i.1P==101||1i.1P==150||1i.1P==100){2b="G 6j is 141"}if(v.140==1){I(v.BC)?2b=v.BC:\'\'}if(v.Bx!=1){o.R.5z()}F{1t(o.29)}}}E 8o(){v.1H>0?cM=v.1H:\'\';o.R.8o();o.R.a5()}E di(){if(!o.Dy&&o.1L){o.W.2Z()}}E bH(){o.R.bH()}E bE(){o.R.bE();o.W.pI()}E a5(){o.R.a5()}E d4(){o.R.d4()}E 8a(){if(o.R){o.R.8a()}F{rt=1I(8a,100)}}E Bw(1i){rs(1i.1P)}E By(){if(!mv){B x=3q.13X()+\'\';if(x!=\'\'&&x!=2g){o.2l=x.2I(\',\');o.2l=o.2l.zo();if(v.su==0){B y=o.2l.O(\'2y\');if(y>-1){o.2l.r3(y,1)}}X(B i=0;i<o.2l.S;i++){o.2l[i]=rp(o.2l[i])}mv=H;rs(3q.13Y())}}}E rs(x){o.3f=o.2l.O(rp(x+\'\'));o.V.vt(o.3f)}G.3M=E(){P{"Y":0,"1a":0}};G.2R=E(x){nz=lK(x);if(o.2w>0){cM=2z(o.2w)}i2(nz)};E aB(){B 6H=-1;if(3S){6H=3q.Ao()}B x=\'\';if(6H==-1){x="8X"}if(6H==1||6H==3){x="7a"}if(6H==2){x="8X";if(o.1L){o.V.2Z();o.W.6O()}}if(6H==5){x="8X"}if(6H==0){x="ah"}P x}E 2L(){3q?3q.13H(o.3V,o.4S):\'\'}E rp(x){B y=x;if(x=="13G"){y="pD"}if(x=="jN"){y="mV"}if(x=="13p"){y="n4"}if(x=="13o"){y="jL"}if(x=="13q"){y="n8"}if(x=="13r"){y="n5"}if(v.zd==1){y=2G(y)}if(x=="2y"){y=2G("2y")}sy[y]=x;P y}E 1d(){P 3S?3q.13s():0};E 8y(x){3q?3q.13n(x):\'\';b4=x};G.kE=E(){nl()};G.2N=E(){if(3S){3q.nn()}F{if(!8S){94()}F{}}};G.2Z=E(){if(3S){3q.sw()}};G.d5=E(){if(3S){aB()==\'7a\'?3q.sw():3q.nn()}};G.3X=E(x){3S?3q.ze(x,H):\'\'};G.9M=E(){P J};G.4Z=E(){3S?3q.5o():\'\'};G.6T=E(){3S?3q.13j():\'\'};G.42=E(x){3S?3q.zJ(x*100):\'\'};G.mR=E(){P aB()==\'7a\'};G.5v=E(){P J};G.wz=E(x){5S(x)};E 5S(x){if(3S){if(I(o.2l[x])){B y=sy[o.2l[x]];2y=y==\'2y\';B z=1d();3q.13l(y)}}}G.fc=E(x){8y(x)};G.3S=E(){P 3S};G.5N=E(){P aB()};G.1d=E(){P 1d()};G.1q=E(){B x=3S?3q.zf():0;if(I(v.4F)){x=v.4F}P x};G.ak=E(){B x=0;if(3S){x=3q.TJ()*3q.zf()}P x};G.4T=E(){2L()};G.ly=E(){P 2b};G.2y=E(){P v.su==1?2y:J};G.wB=E(x){i2(x)};E i2(x){1c=x;if(3q){ml=1;3q.13C(x,0)}}G.mT=E(){if(o.1r.2C&&o.1r.9m){G.2N();mk=H}F{if(aB()=="7a"){G.2Z()}}};G.eN=E(){mk=J};G.qg=E(){P H};G.43=E(){3S?3q.9z():\'\';3S=J;mv=J;3p{if(1E){gp.3a(1E)}gp.3a(7x)}2Y(e){}}};B iG=E(){B 3h=[];B aa=[];B 4u=H;B 8N;B 8r=-1;G.1H=E(x){cW(x)};E cW(x){!x?x=\'\':\'\';if(x!=\'11\'){B 1H=0;B sl=H;B gN=\'\';o.2f=x.2I(",");o.3i=[];o.3F=-1;if(rO()&&v.sk==1){if(3w.5D("sb")!=2e){gN=3w.5D("sb")}}F{if(o.uu){gN=o.uu}}X(B i=0;i<o.2f.S;i++){if(o.2f[i].O("#0")==0){o.2f[i]=aS(o.2f[i])}if(o.2f[i].O("#"+v.aD)==0){o.2f[i]=o[o.fd[0]](o.2f[i])}if(o.2f[i].O("[")==0&&o.2f[i].O("]")>1){o.3i[i]=o.2f[i].1u(o.2f[i].O("[")+1,o.2f[i].O("]")-1);o.2f[i]=o.2f[i].1u(o.2f[i].O("]")+1);sl=J}F{o.3i[i]=o.2f[i].1u(o.2f[i].z5("/")+1);o.3i[i]=o.3i[i].1u(0,o.3i[i].z5("."))}if(o.2f[i].O("#0")==0){o.2f[i]=aS(o.2f[i])}if(o.2f[i].O("#"+v.aD)==0){o.2f[i]=o[o.fd[0]](o.2f[i])}}if(o.3i.S>1&&v.nW==1){o.3i.2W(ln(\'13F\',2G(\'Ak\')));o.2f.2W("8z")}if(o.3i.S>0&&v.8H==1){if(v.zt==1){8N=0;1H++;o.3i.i9(ln(\'z7\',2G(\'7Q\')));o.2f.i9("")}F{o.3i.2W(ln(\'z7\',2G(\'7Q\')));o.2f.2W("");8N=o.3i.S-1}}X(B i=0;i<o.2f.S;i++){if(I(v.z9)){if(v.z9==o.3i[i]){1H=i;o.3F=i;v.eD=1}}if(gN!=\'\'){if(gN==o.3i[i]){1H=i;o.3F=i}}}if(v.8H==1&&v.eD==0){o.3F=8N}I(o.V)?o.V.aO():\'\';if(v.eD==1){o.3F=1H;if(v.nW==1&&o.2f[1H]=="8z"){v7(o.3F)}F{fU(o.3F)}}F{if(sl&&o.2f.S<3){fU(8N==0?1:0)}v.8H!=1?o.3F=-1:\'\'}}F{43()}}E fU(x){if(I(o.2f[x])){if(o.2f[x].O(".")>-1){o.mL=o.2f[x].2I(" or ");o.ez=0;mJ(x)}F{if(o.2f[x].O(\'aa\')==0){if(aa[o.2f[x].1u(4)]){s0(o.3i[x],aa[o.2f[x].1u(4)])}}}}}E v7(x){3h[x]=4y();3h[x][0]=9w();3h[x][1]=9w();X(B i=0;i<o.2f.S;i++){1I(fU,i*4c,i)}}E mJ(x){B 1c=4p(o.mL[o.ez]);B 4D=eS(1c);8r=x;o.gI=1;4D.c8=E(){o.gI=0;if(G.dP==4&&G.5N==4Y){o.8M=H;s0(1c,G.cu,x)}F{if(o.ez+1<o.mL.S){o.ez++;mJ(8r)}F{mz("gn")}}};4D.nA=E(e){o.gI=0;if(o.ez+1<o.mL.S){o.ez++;mJ(8r)}F{mz("gn")}};4D.9J()};E mz(x){1x("2u aP fB or xN op");if(o.3i[o.3F]){if(o.3i[o.3F].O(2G("gn"))==-1){o.3i[o.3F]=o.3i[o.3F]+\' (\'+2G(x)+\')\'}}if(v.13A==1&&8r>-1){o.2f[8r]=\'\';o.3i[8r]=\'\'}o.3F=-1;o.8M=J;if(o.13w){o.V.aO();o.V.4r()}F{1I(E(){o.V.aO();o.V.4r()},100)}if(I(o.2u)){o.1Q.3a(o.2u);o.2u=2e}}E s0(1c,x,y){if(1c.O(\'.g1\')>-1||1c.O(\'.rY\')>-1||1c.O(\'.mH\')>-1||1c.O(\'.rW\')>-1){B l=o.3F;if(I(3h[l])&&o.2f[l]=="8z"){}F{3h[l]=4y();3h[l][0]=9w();3h[l][1]=9w()}B 3Y=9w();3Y=x.2I(/\\r|\\n/);B rX=1;B t1=0;B t2=0;B eI=(I(v.zq)?v.zq:0);if(1c.O(\'h0=\')>0){eI=1c.1u(1c.O(\'h0=\')+6)*1}X(i=0;i<3Y.S;i++){if(1c.O(\'.g1\')>-1||1c.O(\'.rW\')>-1){if(3Y[i].O(\'-->\')>-1&&3Y[i].O(\':\')>-1){t1=g0(3Y[i].1u(0,3Y[i].O(\'-->\')))*1+eI;t1==0?t1=1:\'\';t2=g0(3Y[i].1u(3Y[i].O(\'-->\')+4,12))*1+eI;I(3h[l][0][t1])?\'\':3h[l][0][t1]=\'\';X(B j=t1;j<t2;j++){3h[l][1][j]=t1}rX++}F{3Y[i]=4p(3Y[i]);if(3Y[i]!=\'\'&&3Y[i].S>0&&3Y[i]!=rX&&3Y[i]!=\'13z\'){3h[l][0][t1]=(3h[l][0][t1]&&3h[l][0][t1]!=\'\'?3h[l][0][t1]+\'<br>\':\'\')+(o.2f[l]=="8z"&&y>0?\'[eB]\':\'\')+3Y[i]+(o.2f[l]=="8z"&&y>0?\'[/eB]\':\'\')}}}if(1c.O(\'.rY\')>-1||1c.O(\'.mH\')>-1){if(3Y[i].O(\'12k:\')>-1){t1=g0(3Y[i].1u((1c.O(\'.mH\')>-1?3Y[i].O(\'=0\')+3:12),12))*1+eI;t2=g0(3Y[i].1u((1c.O(\'.mH\')>-1?3Y[i].O(\'=0\')+14:23),10))*1+eI;B p=\'\';if(3Y[i].O(\'0,,\')>0){p=3Y[i].1u(3Y[i].O(\'0,,\')+3)}F{if(3Y[i].O(\'zr,\')>0){p=3Y[i].1u(3Y[i].O(\'zr,\')+6)}}if(3h[l][0][t1]!=2g){3h[l][0][t1]+=\'\\n\'+(o.2f[l]=="8z"&&y>0?\'[eB]\':\'\')+p+(o.2f[l]=="8z"&&y>0?\'[/eB]\':\'\')}F{3h[l][0][t1]=p}3h[l][0][t1]=3h[l][0][t1].22(/{.*?}/,\'\');3h[l][0][t1]=3h[l][0][t1].22(/\\\\\\\\N/,\'<br>\');3h[l][0][t1]=3h[l][0][t1].22(/\\\\N/,\'<br>\');X(B j=t1;j<t2;j++){3h[l][1][j]=t1}}}}o.V.aO();o.W.lm();o.V.4r()}F{if(x!=\'\'){if(x.O(\'[\')==0){cW(x)}F{mz("2b")}}F{43();o.V.4r()}}}E g0(g1){B 1O=g1.2I(\':\');B 6z=0;1O.S==2?1O.i9("b7"):\'\';1O[0]!=\'b7\'?6z+=1O[0]*p4:\'\';1O[1]!=\'b7\'?6z+=1O[1]*60:\'\';6z+=1O[2].1u(0,2)*1;6z=6z*10+1O[2].1u(3,1)*1;P 6z};E 9G(x){if(I(o.3F)){if(o.3F!=x){if(x==-1||(v.8H==1&&x==8N)){vM()}F{v.do=0;o.3F=x;o.8M=H;v.eD=1;vN(x);js("2u",o.3i[x]);o.V.aO()}}F{if(v.8H!=1){vM()}}}}E vN(x){if(I(o.2f[x])){1x("gZ",x);o.3F=x;if(I(o.3i[x])){if(o.5r&&v.sk==1){3w.7w("sb",o.3i[x])}F{o.uu=o.3i[x]}}if(o.2x=="1M"&&o.k8==H){o.R.gR(x,"1M")}F{if(o.2x=="2h"&&o.lE==H){o.R.gR(x,"2h")}F{if(o.2f[x]=="8z"){v7(o.3F)}F{fU(o.3F)}}}}};G.vQ=E(){if(o.eE){B x=o.eE.3W;if(x[0]){B y=1C zs();y.c8=E(e){B z=e.4h.gc;aa.2W(z);o.3F=-1;if(v.8H==1&&v.zt==1){o.2f.2W(\'aa\'+(aa.S-1));o.3i.2W(x[0].6Y+\'\');9G(o.2f.S-1)}F{o.2f.i9(\'aa\'+(aa.S-1));o.3i.i9(x[0].6Y+\'\');v.8H==1?8N++:\'\';9G(0)}o.eE.51=""};y.10N(x[0])}F{o.eE.2E()}}};G.9G=E(x){9G(x)};G.8N=E(){P 8N};G.1v=E(x){hm(x)};G.C=E(){vz()};G.6V=E(){43()};E vM(){js("2u","7Q");o.3F=v.8H==1?8N:-1;v.eD=0;o.8M=J;o.V.aO();o.k8||o.lE?vN(o.3F):\'\';I(o.2u)?o.1Q.3a(o.2u):\'\';o.2u=2e}E hm(1d){if(v.do){1d=1d-v.do*1}if(o.8M&&I(o.2f)){if(3h){B x=o.3F;if(I(3h[x])){if(I(3h[x][1])){B t=2z(1d*10);if(I(3h[x][1][t])){B y=\'\';y=3h[x][0][3h[x][1][t]];if(!I(o.2u)){o.2u=1K(\'1R\');o.1Q.1J(o.2u);vz()}if(4u){6h(o.2u)}yK();if(v.11a==1){y=11i(y)}if(v.nW==1){y=y.22(/\\[eB\\]/gm,\'<6P C="1B:\'+(v.dU.O("#")==-1?\'#\':\'\')+v.dU+\'">\');y=y.22(/\\[\\/eB\\]/gm,\'</6P>\')}o.2u.1U=\'<6P C="\'+(v.zp==1?\'2v-1B:\'+A3(v.lX,v.lY)+\';\':\'\')+\'-3N-5y-nQ-1n: 11k;1B:\'+(v.dO.O("#")==-1?\'#\':\'\')+v.dO+\';3e:\'+v.vT+\'px \'+v.vT*2+\'px;3g-6n:\'+v.zl+\'px;2B:0 0;2M-1a:\'+(v.zm?v.zm:1.8)+\';4a-gi:\'+v.lR+\'">\'+4p(y)+\'</6P>\';if(v.zn==1){if(o.2o){K(o.2u,{"4a-3M":((v.ns+((2z(v.h4)-100)*v.ns/100))+"px")})}F{K(o.2u,{"4a-3M":((v.ny+((2z(v.h4)-100)*v.ny/100))+"px")})}}4u=J}F{if(!4u&&I(o.2u)){o.2u.1U=\'\';4u=H;3c(o.2u)}}}}}}}E vz(){if(o.2u){K(o.2u,{"1k":"1X","Y":"100%","3e-1e":"10%","3e-2j":"10%","1e":0,"1B":v.dO,"1F-6Z":"7g","5y-gW":"3g-5y"});if(v.11h==1&&I(v.vD)){v.vD!=\'\'?K(o.2u,{"4a-io":v.vD}):\'\'}if(v.m0==1){K(o.2u,{"1F-bY":"5u 5u 11g 11c"})}F{K(o.2u,{"1F-bY":"1N"})}if(v.11b==1){Hq(o.2u,\'o.ks\')}F{K(o.2u,{"3I-2F":"1N"})}}}E yK(){if(!o.ks){if(o.V.mF()||v.cC>v.1A.h){K(o.2u,{"1k":"1X","1g":"2y","1e":0,"2K":(v.cC*1)})}F{K(o.2u,{"1k":"1X","1g":"2y","1e":0,"2K":(v.cC*1+v.1A.h*1)})}}}E 43(){o.3F=-1;o.8M=J;o.kK=J;v.2u=2e;v.nM=2e;o.3h=2e;o.2f=2e;if(I(o.V)){o.V.aO()}o.3i=2e;if(I(o.2u)){o.1Q.3a(o.2u);o.2u=2e}o.3F=2e;o.8M=J}};B HI=E(){v.11e==1?o.29.C.4A=100:\'\';K(o.29,{\'Y\':v.vH,\'1a\':v.vJ});B x={"2B":v.yJ};x=4s(x,\'2B\',\'2B\');if(v.dy.O("2j")>-1){ck=1;K(o.29,{\'1k\':\'1X\',\'2j\':x.4k-x.3K})}F{K(o.29,{\'1k\':\'1X\',\'1e\':x.3K-x.4k})}if(v.dy.O("1g")>-1){K(o.29,{\'1g\':x.7s-x.9b})}if(v.dy.O("2K")>-1){K(o.29,{\'2K\':x.9b-x.7s})}if(v.dy=="2j"||v.dy=="1e"){K(o.29,{\'1g\':\'50%\',\'2B-1g\':-v.vJ/2+x.7s-x.9b})}if(v.dy=="1g"){K(o.29,{\'1k\':\'1X\',\'1e\':\'50%\',\'2B-1e\':-v.vH/2+x.4k-x.3K})}if(v.yL>0){K(o.29,{\'3g-6n\':v.yL})}if(v.vG!=-1){K(o.29,{\'2v\':v.vG})}if(v.10t==1){B sh=(v.yM?v.yM:10);K(o.29,{"5y-bY":sh/2+"px "+sh/3+"px "+sh+"px 4B(0,0,0,0.3)"})}};B Gy=E(){o.oo=1K("1R");B r=v.6F;B oo=[];oo[1]=1K(\'1R\');oo[1].1U=\'<1Y><4b d="M0,0 L\'+r+\',0 Q0,0 0,\'+r+\' Z" 3j="\'+v.4E+\'"/></1Y>\';oo[2]=1K(\'1R\');oo[2].1U=\'<1Y><4b d="M0,0 L\'+r+\',0 L\'+r+\',\'+r+\' Q\'+r+\',0 0,0 Z" 3j="\'+v.4E+\'"/></1Y>\';oo[3]=1K(\'1R\');oo[3].1U=\'<1Y><4b d="M\'+r+\',0 L\'+r+\',\'+r+\' L0,\'+r+\' Q\'+r+\',\'+r+\' \'+r+\',0 Z" 3j="\'+v.4E+\'"/></1Y>\';oo[4]=1K(\'1R\');oo[4].1U=\'<1Y><4b d="M0,0 Q0,\'+r+\' \'+r+\',\'+r+\' L0,\'+r+\' Z" 3j="\'+v.4E+\'"/></1Y>\';K(o.oo,{\'1k\':\'1X\',\'1g\':0,\'1e\':0,\'3I-2F\':\'1N\',\'1a\':\'2y\',\'6w\':\'3t\',\'Y\':\'100%\',\'1a\':\'100%\'});o.oo.C.4A=3L;K(oo[1],{\'1k\':\'1X\',\'1g\':0,\'1e\':0});K(oo[2],{\'1k\':\'1X\',\'1g\':0,\'2j\':0});K(oo[3],{\'1k\':\'1X\',\'2K\':0,\'2j\':0});K(oo[4],{\'1k\':\'1X\',\'2K\':0,\'1e\':0});X(B i=1;i<5;i++){K(oo[i],{\'Y\':r,\'1a\':r,\'2M-1a\':0});o.oo.1J(oo[i])}o.1E.1J(o.oo)};B 5x=E(2n){B ej;B 10q;B 3l;B 4N;B 4n;B jW;B ew=0;B b4;B wi=J;B jT;if(2n.me!=2g&&2n.mc!=2g&&2n.1G!=2g&&2n.to!=2g){if(2n.1d==2e){if(2n.1G.O("h5")>-1){2n.to==0?2n.1d=0.5:2n.1d=0.2}F{2n.1d=0.15}}ej=yE(2n.8I);if(2n.1G.O("1D")==-1){if(I(o.7M[2n.me])){o.7M[2n.me].vb()}}if(2n.1G.O("1D")==-1){o.7M[2n.me]=G}if(2n.1v==1){2n.mc.2a("2q",H)}3l=2n.1G.2I(\'|\');4n=7f(2n.to).2I(\'|\');4N=1C 9w();X(B i=0;i<3l.S;i++){if(!4n[i]){4n[i]=4n[0]}if(3l[i]=="h5"){4N[i]=2n.mc.g("1w")}if(3l[i]=="7E"){4N[i]=2n.mc.C.1w}if(3l[i]=="y"){4N[i]=2n.mc.g("y")}if(3l[i]=="x"){4N[i]=2n.mc.g("x")}if(3l[i]=="1e"){4N[i]=2z(2n.mc.C.1e)}if(3l[i]=="1D"){4N[i]=2n.mc.g("3u")}if(3l[i]=="9B"){4N[i]=2n.mc.cG}if(3l[i]=="g7"){4N[i]=2n.mc.9W}if(3l[i]=="3m"){4N[i]=2n.mc.g("3m")}if(3l[i]=="3u"){4N[i]=2n.mc.g("3u")}if(3l[i]=="Y"){4N[i]=2n.mc.g("Y")}if(3l[i]=="yI"){4N[i]=2n.mc.2k;4n[i]=2P.7T(4n[i]);2n.me=="10y"?1x("Y",2n.me,4N[i],4n[i],2n.mc.2k):\'\'}if(3l[i]=="1a"){4N[i]=2n.mc.g("1a")}if(3l[i]=="yC"){4N[i]=2n.mc.2V}4n[i]=yN(4n[i]);4N[i]=yN(4N[i])}b4=2n.1d*2A/ej.S;jW=ej.S;if(3l.S==1&&4N[0]==4n[0]){ay()}F{1I(jV,2P.5b(b4))}}E jV(){X(B i=0;i<3l.S;i++){B 1O=4N[i]+(4n[i]-4N[i])*(ej[ew]?ej[ew]:0);if(3l[i]=="h5"){2n.mc.2a("1w",1O)}if(3l[i]=="7E"){2n.mc.C.1w=1O}if(3l[i]=="y"){2n.mc.2a("1g",1O)}if(3l[i]=="x"){2n.mc.2a("1e",1O)}if(3l[i]=="1e"){2n.mc.C.1e=1O+"px"}if(3l[i]=="1D"){2n.mc.2a("1D",1O)}if(3l[i]=="3m"){2n.mc.2a("3m",1O)}if(3l[i]=="3u"){2n.mc.2a("3u",1O)}if(3l[i]=="9B"){2n.mc.cG=1O}if(3l[i]=="g7"){2n.mc.9W=1O}if(3l[i]=="Y"){2n.mc.2a("Y",1O)}if(3l[i]=="yI"){K(2n.mc,{"Y":1O})}if(3l[i]=="1a"){2n.mc.2a("1a",1O)}if(3l[i]=="yC"){K(2n.mc,{"1a":1O})}}ew++;if(!wi){if(ew==jW){ay()}F{jT=1I(jV,2P.5b(b4))}}}E ay(){wi=H;if(2n.1t){if(3l[0]=="7E"||3l[0]=="1e"){1t(2n.mc)}F{2n.mc.2a("2q",J)}}if(2n.1G.O("1D")==-1){o.7M[2n.me]=2e;4o o.7M[2n.me]}};G.vb=E(){3k(jT);ay()};G.C1=E(){3k(jT);ew=jW-1;jV();ay()};E yE(yF){a6(yF){1o"yG":P[0,0.10B,0.10A,1.10C,1.yO,1.10D,1.102,0.10E,0.11m,0.87,0.11n,0.11W,1.yQ,1.11X,1.11Y,1.11Z,0.11V,0.yP,0.11Q,0.11P,1.11R,1.yX,1.A7,1.yX,1.A8,0.iU,0.hK,0.hK,0.hK,0.hK,1];1n;1o"bM":P[0,0.11T,0.123,0.126,0.12g,0.yY,0.yZ,0.12j,0.we,0.12e,0.12a,0.129,0.12b,0.12c,0.yV,0.12d,0.11O,0.11N,0.11w,0.95,0.z2,0.11y,0.11z,0.11u,0.99,0.yW,0.yR,0.iU,1];1n;1o"D4":P[0,0.146,0.28,0.11o,0.11q,0.11r,0.11s,0.78,0.yV,0.11A,0.11B,0.yR,1.yQ,1.11K,1.zu,1.11L,1.yS,1.yU,1.yU,1.14a,1.11H,1.11D,1.zu,1.zw,1.11F,1.A6,1.147,1.14S,1.A7,1.A8];1n;7c:P[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];1n}}};B HQ=E(){B N=hQ.16n,ua=hQ.16o,uH;B M=ua.lr(/(jz|i0|6y|uF|A9)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);B M=ua.lr(/(jz|i0|6y|uF|A9|16k|nt)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);if(M&&(uH=ua.lr(/7S\\/([\\.\\d]+)/i))!=2e)M[2]=uH[1];B ve=hQ.16f;G.bn=M?M[1]:N;G.7S=M?M[2]:hQ.16g;G.jz=G.bn=="16h";G.oh=G.bn=="A5 9.0";G.ie=G.bn=="A5"||G.bn=="16p"||G.bn=="16q";G.nt=ua.aY(/(nt)\\/?\\s*/i)>-1;G.uF=G.bn=="16y";G.6y=G.bn=="16z";G.i0=1V.i0;G.ix=ua.aY("16A NT")>-1;G.5H=(ua.aY(/(9y|fV|16x)\\/?\\s*/i)>-1)||(hQ.16s===\'16r\'&&ve>1);G.tv=v.A1!=1&&ua.aY(/(16t|16u|LG A2|16v|16d|TV 15S)\\/?\\s*/i)>-1;G.lg=v.A1!=1&&ua.aY(/(LG A2)\\/?\\s*/i)>-1;G.9y=ua.aY(/(9y)\\/?\\s*/i)>-1;G.fV=G.5H&&!G.9y;G.3N=\'15Q\'in 1S.lM.C;if(ua.aY(/(9m)\\/?\\s*/i)>-1){ve>0?G.9m=H:G.tv=H}G.2C=(G.5H||G.9m||(ua.aY(/(15M|15L|jz lI)\\/?\\s*/i)>-1))&&!G.tv;G.v3=G.6y||G.i0;G.w6=!G.2C;G.rK=G.2C||G.tv;G.2o=J;if(G.5H){G.15N=4G(ua.1u(ua.O(\'OS \')+3,4).22(\'7e\',\'.\'));if(G.fV&&!\'15W\'in 1V){G.2C=G.5H=J;G.tv=H}}if(o.1Q.qU||o.1Q.qx||o.1Q.qi||o.1Q.pR||o.1Q.pk){G.2o=H}};E 8T(4e,6C){X(B s in 6C){if(1Z(6C[s])==\'3z\'){if(s=="2F"||s=="3r"){4e[s]=6C[s]}F{X(B s2 in 6C[s]){if(1Z(4e[s])!=\'3z\'){4e[s]={}}if(1Z(6C[s][s2])==\'3z\'){X(B s3 in 6C[s][s2]){if(1Z(4e[s][s2])!=\'3z\'){4e[s][s2]={}}if(1Z(6C[s][s2][s3])==\'3z\'){X(B s4 in 6C[s][s2][s3]){if(1Z(4e[s][s2][s3])!=\'3z\'){4e[s][s2][s3]={}}4e[s][s2][s3][s4]=6C[s][s2][s3][s4];if(s3==\'3e\'||s3==\'2B\'){4e[s][s2][s3][s4]=2z(4e[s][s2][s3][s4])}}}F{4e[s][s2][s3]=6C[s][s2][s3];if(s2==\'3e\'||s2==\'2B\'){4e[s][s2][s3]=2z(4e[s][s2][s3])}}}}F{4e[s][s2]=6C[s][s2];if(s==\'3e\'||s==\'2B\'){4e[s][s2]=2z(4e[s][s2])}}}}}F{if(s.O("168")>0&&4p(6C[s])===""){}F{4e[s]=sV(s,6C[s])}}}P 4e};B sV=E(1h,51){if(1Z(51)==\'5c\'){51=4p(51);if(1h.O("1B")>-1&&51!=-1){51=cS(51)}}P 51};E A3(d6,1w){P\'4B(\'+(d6=d6.22(\'#\',\'\')).lr(1C 16a(\'(.{\'+d6.S/3+\'})\',\'g\')).16b(E(l){P 2z(d6.S%2?l+l:l,16)}).8c(1w||1).lC(\',\')+\')\'}E rO(){3p{B 5r=1V[\'3w\'],x=\'166\';5r.7w(x,x);5r.vL(x);P H}2Y(e){P J}};E lZ(a7){if(a7){if(I(o.7M[a7])){o.7M[a7].vb()}}};B 2G=E(x){B y=x;if(y){y=x.6l(0).15Y()+x.6r(1);if(y.O("7e")>-1){y=y.22(/7e/ig," ")}}B en={"of":"of","cL":"cL","162":"Aa on Ab","163":"Aa 2b on Ab","Ak":"16C at 171","7z":"mj","16Y":"No","v0":"Al","lD":"16Z","16X":"16V","cC":"16J 2B","lR":"16K gi","m0":"16L","lY":"9U 1w","lX":"9U 1B","h4":"uK 3M","dO":"uK 1B","dU":"uK 1B 2","do":"4O h0","uM":"16F","f0":"16G","lO":"16N to 16T","pD":"16U","mV":"16S","n4":"16R","jL":"Am","E5":"Am","n8":"HD","n5":"16P HD","16Q":"15Z HD","oP":"15J HD","pa":"14G HD 4K","14I":"Ad","14F":"Go to 14E 14A\'s 14B","6G":"14C","8L":"14D","2o":"14K 2o","D5":"14L 2o"};if(I(en[x])){y=en[x]}if(I(o[\'vw\'+v.bG])){if(I(o[\'vw\'+v.bG][x])){y=o[\'vw\'+v.bG][x]}}if(v.vF){if(v.vF[x]){y=v.vF[x]}}P y};B au=E(x,y,z){if(!I(o.iL[y])&&v.oR!=1){B t=o.f8?o.f8:(v.1T?v.1T:\'\');I(v.bx)?t=v.bx:\'\';if(v.An[x]==1&&v.BB==1&&I(v.gV)){if(x=="9k"){7q(Ac,14U)}if(I(1V["kD"+v.gV])){1V["kD"+v.gV].Af(\'wq\'+x,{1T:t});1x("Aj",\'wq\'+x)}F{1x("Aj 14R 2b")}}if(v.Ai[x]==1){if(v.ga==1){if(v.I3==1){if(1V.Ae){Ae(\'1i\',\'wq\'+x,{\'bx\':t})}}F{if(1V.ga){B kF={HW:\'jf\',I2:y};if(t!=\'\'){kF.I5=t}if(v.14N==1&&!o.9u){kF.14O=1}ga(\'dl.9J\',\'1i\',kF)}}}}}z?o.iL[y]=H:\'\'};E Ac(){if(I(1V["kD"+v.gV])){1V["kD"+v.gV].Af(\'14j\')}};B lK=E(1c){B x=\'\';1c=1c.22("v=","{=");if(1c.O(\'kL.be/\')>-1){x=1c.1u(1c.O(".be/")+4);x.22("/","")}F{x=1c.2I(/(kL.be\\/|v\\/|7O\\/|14k\\?|4j.14l\\/dl\\/[^#]*#([^\\/]*?\\/)*)\\??{?=?([^#\\&\\?]*)/)[3]}if(x!=\'\'){if(x.O("?t=")>0){v.1H=x.1u(x.O("?t=")+3);B h=0;B m=0;B s=0;if(v.1H.O("h")>0){h=v.1H.1u(0,v.1H.O("h"));v.1H=v.1H.1u(v.1H.O("h")+1)}if(v.1H.O("m")>0){m=v.1H.1u(0,v.1H.O("m"));v.1H=v.1H.1u(v.1H.O("m")+1)}if(v.1H.O("s")>0){s=v.1H.1u(0,v.1H.O("s"));v.1H=v.1H.1u(v.1H.O("s")+1)}if(h>0||m>0||s>0){v.1H=h*p4+m*60+s*1}x=x.1u(0,x.O("?t="))}}P x};B js=E(x,y,li,ev){if(x=="9k"){o.9k=H}if(ev==1){X(B yi in y){if(y.2J(yi)){if(1Z(y[yi])=="3z"){y[yi]=\'\'}}}}if(v.kN==1&&o.9k){if(v.14h==1||li==1){uQ(x,y)}F{if(y!=2g){if(1Z(y)==\'3z\'){3p{y=4w.p8(y)}2Y(e){}}}if(1Z(v.2F)==\'5c\'){if(v.2F.O("{")==0){3p{v.2F=v.2F.22(/\\\'/ig,\'"\');v.2F=4w.6i(v.2F)}2Y(e){bs.1x(e)}}}if(1Z(v.2F)==\'3z\'){if(I(v.2F[x])||I(v.2F[\'e6\'])){B z=x;if(!I(v.2F[x])&&I(v.2F[\'e6\'])){z=\'e6\'}if(x.O("7G")==0){if(I(v.2F[\'2i\'])){z=\'2i\'}}3p{if(y!==2g){2t(v.2F[z]+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2t(v.2F[z]+"(\'"+x+"\',\'"+v.id+"\')")}}2Y(e){1x("2F",e,x)}}}F{if(v.2F==\'\'){v.2F="Ag"}3p{if(y!==2g){2t(v.2F+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2t(v.2F+"(\'"+x+"\',\'"+v.id+"\')")}}2Y(e){1x("2F",e,x,y)}}}}if(v.Dg==1&&li!==1){B zv={1i:x,1d:o.R?(x=="4d"?o.BA:o.R.1d()):0};if(y!=2g){zv["1P"]=y}if(x=="1q"||x=="1d"){zv["1q"]=o.R.1q()}if(x=="1W"||x=="c5"){zv["1W"]=v.1W}if(x=="1C"){zv["id"]=6D("zW")}1V.bX.Ah(zv,\'*\');B z=x;x=="9k"||x=="1H"||x=="4F"?z=x+"ed":\'\';x=="1L"?z="14e":\'\';x=="5q"?z="8X":\'\';x=="5o"?z="3R":\'\';x=="c5"?z="14f":\'\';x=="4d"?z="14m":\'\';x=="14n"?z="14u":\'\';zv["1i"]=z;if(z!=\'\'&&z!=x){zv=4w.6i(4w.p8(zv));1V.bX.Ah(zv,\'*\')}}};B uQ=E(x,y){B ev=1S.14w(\'7C\');if(y!==2g){ev.9Q=y}ev.14x(x,H,H);o.1E.14t(ev)};G.1i=E(x,y){o.2F[x]=y};B 2Q=E(x,y,U){P 6D(x,y,U)};G.2Q=E(x,y,U){P 6D(x,y,U)};E 6D(x,y,U){if(I(o.W)){if(o.wd==1){P}if(U){if(1Z(U)==\'5c\'){if(U.O("id:")==0){U=o.V.tJ(U.1u(3),"4x");if(U){if(x=="nF"&&y=="14o"){U.EE()}}}}}if(x=="1L"){if(I(y)){if(1Z(y)==\'5c\'){y=y.22(/(\\r\\n|\\n|\\r)/gm,"");B 2w=-1;if(y.O("[4d:")>-1&&y.O("]")==y.S-1){2w=y.1u(y.O("[4d:")+6,y.S-1);2w=2z(2w.1u(0,2w.S-1));y=y.1u(0,y.O("[4d:"));if(y==\'\'){o.W.3X(2w);o.W.2N();P}F{o.2w=2w}}if(y.O("#"+v.aD)==0){y=o[o.fd[0]](y)}if(y.O("#"+v.dR)==0&&y.O(v.j0)>0){y=o[o.fd[1]](y)}if(y.O("#0")==0){y=aS(y)}if(v.dZ==1){y=dZ(y)}if(y.O(".7D")==y.S-4){B 4D=eS(y);4D.c8=E(){if(G.dP==4&&G.5N==4Y){3p{6D(\'1L\',4w.6i(G.cu))}2Y(e){}}};4D.9J();P}if(y.O("id:")==0&&I(o.1y)){B z=wo(y);if(I(o.1y[z])){o.V.FZ(z);2w>-1?o.2w=2w:\'\';P H}F{P J}}if(y.O("14p:")==0){B z=y.1u(10);if(o.2x=="4j"){o.R.yc(z);P H}F{y=\'//kL.be/\'+z}}}o.W.cz(y)}F{o.W.2N()}}if(x=="3r"&&I(y)){o.kC=H;if(y.O("id:")==0&&I(o.1y)){B z=wo(y);if(I(o.1y[z])){o.V.v5(z);2w>-1?o.2w=2w:\'\';P H}F{P J}}F{o.W.cz(y,1);o.V.4l(0,0)}}F{1Z zY==\'E\'?zY():\'\'}if(x=="4i"){if(I(y)){o.kC=H;o.W.cz(y,1,1)}F{o.R.qZ()}}if(x=="5q"){if(o.1L){o.W.2Z();o.W.lm()}}if(x=="dg"&&I(y)){o.1H&&o.7j?o.7j.zG(y):\'\'}if(x.O("14W")==0){if(o.2i){o.2i.14X(x.1u(6),y)}}if(x=="8d"){o.8d.8x();o.8d=1C vV();if(v.xD==1){o.8d.7D(v.xJ)}F{o.8d.7D("15t 9E")}if(v.xQ==1&&I(v.xP)){o.ep=1C Cf()}}if(x=="9F"){o.V.8P();o.V.Fn("sd")}if(x=="nx"){o.1L?o.W.2Z():o.W.2N()}if(x=="2D"){v.4i=0;v.44=0;o.R.mE();o.W.aE()}if(x=="8Y"){o.1d=o.R.1d();o.W.em()}if(x=="6J"){if(v.vW){if(v.vW.on==1&&v.vW.15v==1){o.W.l8()}}}if(x=="uN"&&I(y)){if(o.5O){o.5O.2Q(y)}}if(x=="2X"){o.V.CY()}if(x=="15w"&&I(y)){if(v.2i==1&&o.p!=\'\'){B sv=4w.6i(d0(o.p));X(B l in sv){if(sv.2J(l)){if(I(sv[l].id)){if(y==sv[l].id){v.9p=\'15s\'+(I(sv[l][\'uA\'])?\'uA\'+sv[l][\'uA\']:\'\')+y+\'7e\'+sv[l].7l;v.p9=H;o.W.B8("9p")}}}}}}if(x=="15n"){1Z zI=="E"?zI():\'\'}if(x=="d1"&&y){v.d1=y;o.3v?o.3v.15o():\'\'}if(x=="5o"){o.W.4Z()}if(x=="5h"){if(I(y)){o.W.8y(y)}F{P o.4W[o.8W]}}if(x=="gY"){P o.4W}if(x=="c5"){o.W.6T()}if(x=="nM"){if(I(y)){v[x]=y;o.W.gj()}}if(x=="bc"){P o.2l}if(x=="z6"){P o.ab?H:J}if(x=="8L"){P o.R?o.R.5v():J}if(x=="Cz"){P v.8H==1?o.3i.6r(0,-1):o.3i}if(x=="9d"){P o.6o}if(x=="1W"||x=="zJ"){if(I(y)){if(y>=0&&y<=1){o.W.42(y)}}P o.3R?0:v.1W}if(x=="3R"){P I(o.3R)?o.3R:J}if(x=="15q"){o.V?o.V.FX(y):\'\'}if(x=="cl"){y<2?y=\'\':\'\';if(o[\'u\'+y]!=\'\'){B x2=4w.6i(d0(o[\'u\'+y]));B v2=[];X(B l in v){if(v.2J(l)){if(l.O("9f")==0){v[l]=2e}}}if(1Z x2=="3z"){X(B k in x2){if(x2.2J(k)){if(k.O("9f")==0){v[k]=x2[k]}if(k=="1A"){v2[k]=x2[k]}}}}v=8T(v,v2);B wj=J;if(o.V.bO()){o.V.7t();wj=H}B w1=J;if(o.V.dh()){o.V.aU();w1=H}o.V.43();o.V=2e;o.V=1C sI();if(o.R.5N()=="7a"){o.V.2N()}o.V.42(v.1W);if(I(v.1T)){aF(v.1T)}if(wj){o.V.7t()}if(w1){o.V.aU()}if(o.2o){o.V.7B()}if(1h!=\'Er\'){o.V.4l(o.R.1d(),o.R.1q())}hP()}}if(x=="ob"){P v.ob}if(x=="4T"){o.V.4T(H)}if(x=="4d"){if(I(y)){if(1Z y=="5c"){if(y.O("%")>-1){y=2z(y.1u(0,y.O("%")));y=o.R.1q()*y/100}F{B kB=o.R.1d();if(o.3v&&!o.1H){if(!o.3v.lN){B f=o.3v.av();if(f.t&&f.d){kB=f.t;o.3v.lN=H}}}if(y.O("+")==0){y=kB+2z(y.1u(1))}F{if(y.O("-")==0){y=kB-2z(y.1u(1))}}}}y=y*1;y<0?y=0:\'\';if(o.R.1q()>0){y>o.R.1q()?y=0:\'\'}if(!I(o.2i)&&!I(o.5E)&&o.R.1q()>0){o.2w=2g;o.W.3X(y,H);o.W.oT()}F{o.2w=y}}}if(x=="2o"){!o.2o?o.W.7B():\'\'}if(x=="pZ"){o.2o?o.W.8O():\'\'}if(x=="15F"){P o.2o}if(x=="3M"){P o.3V+\'/\'+o.4S}if(x=="15G"){if(I(o.fE)){o.fE.Do()}}if(x=="FF"||x=="15I"){if(I(o.fE)){o.fE.Un()}}if(x=="1d"){B kA=o.R?o.R.1d():0;if(o.3v&&v.c7==1&&!o.1H&&kA==0){B f=o.3v.av();if(f.t){kA=f.t}}P kA}if(x=="15z"){if(o.bi){6D("1L","id:"+o.bi)}if(o.zx){6D("4d",o.zx);6D("1L")}}if(x=="1q"){P o.R?o.R.1q():0}if(x=="3b"){if(y){v.3b=y;o.V.iS()}}if(x=="5a"){if(I(y)){if(U){v.hd=9P(v.hd,y,U);if(o.2l.S==2){o.W.5S(v.hd)}}F{o.W.5S(y)}}F{P o.R?o.R.pi():0}}if(x=="6G"){if(I(y)){if(U){v.vf=9P(v.vf,y,U);if(o.6o.S==2){o.W.da(v.vf)}}F{o.W.da(y)}}F{P o.R?o.R.py():0}}if(x=="zB"){P o.2x=="4j"}if(x=="D0"){if(o.5B>0){o.lQ=o.5B}o.W.cz(v.3r)}if(x=="7a"){P o.1L}if(x=="kq"){P o.1H}if(x=="1r"){P o.1r[y]}if(x=="zC"){o.wd!=1?o.R.qu():\'\'}if(x=="id"){P v.id}if(x=="1x"){v.1x=y}if(x=="kN"){v.kN=y}if(x=="2m"){o.R.Gq()}if(x=="15l"){o.R.Gv();if(U){o.vm=9P(o.vm,y,U)}}if(x=="5K"){o.R.fb()}if(x=="8b"){o.R.dC()}if(x=="3B"&&v.oR!=1){bs.1x(3B)}if(x=="2u"){v.2u=y;if(I(y)){if(y.6v().S<3&&o.4P){o.4P.9G(y*1)}F{o.W.gZ(y)}}}if(x=="aW"){if(I(o.aW)){if(I(y)){o.aW.2Q(y)}F{P o.aW.155()}}}if(x=="rv"){if(o.zL){P o.zL}F{P J}}if(x=="5y"){B 5y=1K("1R");5y.id=y;5y.C.4A=Gr;o.1Q.1J(5y)}if(x=="D7"){if(o.62){B 5M=1K("5M");o.1E.1J(5M);B 9r=5M.zU(\'2d\');B 3M=o.R.3M();5M.Y=3M.Y>0?3M.Y:o.9v;5M.1a=3M.1a>0?3M.1a:o.az;9r.uR(o.R.9M(),0,0,5M.Y,5M.1a);5a=2;B hc=1S.1K("5M");hc.Y=5M.Y*5a;hc.1a=5M.1a*5a;B hf=hc.zU("2d");hf.uR(o.R.9M(),0,0,5M.Y*5a,5M.1a*5a);if(v.157==1&&I(v.uX)){!I(v.he)?v.he=20:\'\';!I(v.uW)?v.uW="3U":\'\';hf.4a=v.he+"px 158, 154";hf.153=cS(v.uW);hf.14Z((v.uX=="hI"?o.hI:v.uX),v.he,5M.1a*5a-v.he-5)}9r.uR(hc,0,0,5M.Y,5M.1a);B 41;3p{41=5M.159("aJ/15a")}2Y(e){bs.1x(e.9E);P J}P 41}F{P J}}if(x=="2h"){P o.2x==x?o.R.km():2g}if(x=="1M"){P o.2x==x?o.R.jY():2g}if(x=="29"){if(!o.1L){o.R.9A(y);P H}F{P J}}if(x=="1D"){if(y){o.R.1D(y)}F{P[o.3Q.x,o.3Q.y,o.4q.C.1e,o.4q.C.1g]}}if(x=="1T"){if(I(y)){I(y)?v.1T=y:\'\';o.W.aF(\'1T\');P H}F{P v.1T}}if(x=="15h"){o.W.zk()}if(x=="2W"){if(y){!o.g3?o.g3=[]:\'\';if(1Z(y)==\'3z\'){y=o.g3.8c(y);x="1f"}}}if(x=="1f"){if(y){if(1Z(y)==\'3z\'){3p{o.W.6k(y);P H}2Y(e){P J}}F{if(y.O(".7D")==y.S-4||y.O(".7D?")>0){B 4D=eS(y);4D.c8=E(){if(G.dP==4&&G.5N==4Y){3p{6D(\'1f\',4w.6i(G.cu))}2Y(e){}}};4D.9J();P H}}}}if(x=="8e"){o.V.d8()}if(x=="f0"){o.V.f7()}if(x=="nJ"){if(I(y)&&I(o.1y)){!o.1L?v.44=0:\'\';X(B j in o.1y){if(o.1y.2J(j)){if(o.1y[j].cO==y){y=j}}}if(I(o.1y[y])){o.V.v5(y);P H}F{P J}}}if(x=="15i"){B 1O=[];if(I(o.1y)){X(B j in o.1y){if(o.1y[j].4X&&o.1y[j].qK==-1){1O.2W({1T:o.1y[j].1T,id:o.1y[j].id})}}}P 1O}if(x=="zW"){if(o.3T){P o.1y[o.3T].cO?o.1y[o.3T].cO:o.3T}}if(x=="15j"){if(o.1y){P 4y.3Z(o.1y).S}F{P-1}}if(x=="kZ"){if(I(o.kZ)){P o.kZ}}if(x=="15g"){o.V.jy()}if(x=="1A"){o.V.hM()}if(x=="15f"){if(o.2i){P H}F{P J}}if(x=="15b"){if(o.2i){P zS()}F{P J}}if(x=="15c"){if(o.2i){P o.2i.5q()}F{P J}}if(x=="15d"){if(o.2i){P o.2i.za()}F{P J}}if(x=="15e"){if(o.2i){o.2i.11I()}F{P J}}if(x=="10k"){if(o.2i){o.2i.5o()}F{P J}}if(x=="6m"){v.6m=9P(v.6m,y,U);o.R.6m()}if(x=="9H"){if(I(U)){v.9H=9P(v.9H,y,U)}F{if(I(y)){y==\'0/1\'?y=1-v.9H:\'\';v.9H=y}F{P v.9H}}}if(x=="5i"){if(I(U)){v.5i=9P(v.5i,y,U)}F{if(I(y)){v.5i=y}F{P v.5i}}}if(x=="rR"||x=="mg"){B z="fu";x=="mg"?z="mf":"";if(I(U)){v.1f[z]=9P(v.1f[z],y,U)}F{if(I(y)){y==\'0/1\'?y=1-v.1f[z]:\'\';v.1f[z]=y}}P v.1f[z]}if(x=="hd"){if(o.2l.S==2){v.hd=o.2l[o.3f];v.hd=9P(v.hd,y,U);if(o.2l[0]==v.hd){o.W.5S(0)}F{o.W.5S(1)}}}if(x=="v"&&y){if(y.O(\'3r\')==0||y.O(\'bk\')==0){P}P v[y]}if(x.O("hG:")==0){B xx=x.1u(7);if(1Z(y)==\'3z\'&&1Z(v[xx])==\'3z\'){X(B yy in y){if(y.2J(yy)){v[xx][yy]=y[yy]}}}F{if(x.O(\'Ds\')==-1){v[xx]=y}}P H}if(x.O("1F:")==0){o.V.CP(x.1u(5),y)}if(x=="VW"){P o.R?o.R.bS():\'\'}if(x=="VX"){P o.7S+\' \'+o.ht}if(x=="ht"){P o.ht}if(x=="qE"){P o.qE}if(x=="i4"){P o.i4}if(x=="5F"){P o.5F}if(x=="VT"){P o.2i?o.zN:2g}if(x=="9z"){o.W.p2();o.wd=1;v.2c.on=0;o.1E.1U=\'\'}}F{P J}};E 9P(x,y,U){B z=4p(y)+\'\';if(y.O("/")>0){B y2=y.2I("/");if(y2.S==2){if(x==4p(y2[0])){z=4p(y2[1]);if(U){U.bh(1)}}F{z=4p(y2[0]);if(U){U.bh(0)}}}}P z}E eS(x){B 4D=1C zH();4D.5Y(\'zF\',x,H);P 4D}E wo(y){B z=y.1u(3);if(o.1y){X(B j in o.1y){if(o.1y.2J(j)){if(o.1y[j].cO==z){z=j}}}}P z}E zS(){B x;if(o.2i){if(o.2i.t0()){x=o.2i}}if(!x&&o.5E){x=o.5E}if(x){B y={is:o.4U,1r:x.9Q("VN"),7S:x.9Q("7S"),VP:x.9Q("B3"),1c:o.Be+(x.9Q("zR")?x.9Q("VQ")+x.9Q("zR"):\'\'),1G:x.9Q("VY"),3r:x.9Q("3r"),1d:o.R.1d(),1W:x.VZ(),id:o.zN};if(o.4U=="9p"){y.W7=o.W8}P y}}B 1K=E(x){B y=x;x==\'1R\'||x==\'uo\'?y=\'7o\':\'\';B z=1S.1K(y);if(x==\'uo\'){K(z,{"5R":"3I","2q":"47"})}P z};B 1x=E(a,b,c,d,e,f,g){if(v.1x==1||v.vU==1){B x=a+(b!=2g?" "+b:"")+(c!=2g?" "+c:"")+(d!=2g?" "+d:"")+(e!=2g?" "+e:"")+(f!=2g?" "+f:"")+(g!=2g?" "+g:"");bs.1x("zO"+(v.tk==1?"2":"")+": "+x);if(v.vU==1&&I(1S.7N("zP"))){1S.7N("zP").1U+=x+\'<br/>\'}}};B Io=E(){if(v.wm==1&&I(v.pG)&&v.pG!=\'\'){B x=1S.1K(\'fJ\');x.zQ=\'W1\';x.8D=\'8f://wm.W2.7r/K?io=\'+v.pG.22(/,/ig,"|").22(/ /ig,"+");1S.W3.1J(x)}};B F9=E(1R,4m){B x=["4b","fn","mU","ib","cn"];X(B y=0;y<x.S;y++){B z=1R.rM("1Y "+x[y]);if(z.S>0){X(B y2=0;y2<z.S;y2++){z[y2].C.3j=4m}}}};B 4O=E(1d){1d<0?1d=0:\'\';B zV=o.R.1q>=bj?H:J;B zM=o.R.1q>=p4?H:J;B 6f=2P.7T(1d/60);B 7n=2P.7T(1d-6f*60);B 7U=2P.7T(6f/60);B hj=2P.7T(7U/24);6f=6f-7U*60;if(hj>0){7U=7U-hj*24}if(v.jS==1&&o.R.5v()){B d=1C 6B();P 7f(1C 6B(d.9s()+1d*2A).zT())}F{P 7f((hj>0?hj+\':\':\'\')+(7U>0||zM?7U+\':\':\'\')+((7U>0||zV)&&6f<10?\'0\':\'\')+6f+\':\'+(7n<10?\'0\':\'\')+7n)}};B it=E(x){B 7n=2P.7T(x);B 6f=2P.7T(7n/60);B 7U=2P.7T(6f/60);6f=2P.7T(6f%60);7n=2P.7T(7n%60);7U>0&&6f<10?6f="0"+6f:"";7n=7n>=0?((7n>=10)?7n:"0"+7n):"b7";B 6z=(7U>0?7U+":":"")+(6f>=0?6f:"0")+":"+7n;if(v.jS==1&&o.R.5v()){B d=1C 6B();P 7f(1C 6B(d.9s()+x*2A).zT())}F{P 6z}};B Vx=E(){P zK((1V.9C!=1V.bX.9C)?1S.tg:1S.9C.8D)};B k5=E(x,y,z){B t;if(!zA(x)&&y){t=1S.1K(\'oi\');y=="Vu"?y=x:\'\';t.2R=y.O(\'//\')==-1?\'//\'+y:y;t.Vt=1;if(z){t.6Y=z}B s=1S.d9(\'oi\')[0];s.5g.ou(t,s)}P t};B zA=E(y){B x=J;B kY=1S.d9(\'oi\');X(B i=0;i<kY.S;i++){if(kY[i].2R.O(y)>-1){x=H}}P x};B nR=E(x,y){x=x.22(\'#\',\'\');B r=2z(x.S==3?x.6r(0,1).eV(2):x.6r(0,2),16);B g=2z(x.S==3?x.6r(1,2).eV(2):x.6r(2,4),16);B b=2z(x.S==3?x.6r(2,3).eV(2):x.6r(4,6),16);if(y){P\'4B(\'+r+\', \'+g+\', \'+b+\', \'+y+\')\'}F{P\'Vr(\'+r+\', \'+g+\', \'+b+\')\'}};B K=E(e,o){if(I(e)){X(B 1h in o){if(o.2J(1h)){if(o[1h]!=\'Vs\'&&o[1h]!=2g){if(1Z o[1h]==\'Vz\'&&1h!=\'1w\'&&1h!=\'4A\'){o[1h]+=\'px\'}if((1h.O("1B")>-1||1h.O("F7")>-1)&&o[1h].O("#")==-1&&o[1h].O("4B")==-1){o[1h]=\'#\'+o[1h]}if(1h=="2O"){e.C[\'-ms-\'+1h]=o[1h];e.C[\'-jP-\'+1h]=o[1h];e.C[\'-3N-\'+1h]=o[1h];e.C[\'-o-\'+1h]=o[1h]}if(1h=="tc"){if(o[1h].O(" ")>-1){o[1h]=\'"\'+o[1h]+\'"\'}}if(1h=="5y-gW"){e.C.VA(1h,o[1h],\'5C\')}F{e.C[1h]=o[1h]}}}}}};B Ew=E(x,4m,b1,b2){B y=9c(b1,1)*1;B z=9c(b2,1)*1;K(x,{"2v":"VI-2T-5l(-VJ,"+4m+","+4m+" "+y+"px,4B(0,0,0,0),"+y+"px,4B(0,0,0,0) "+(y+z)+"px)"})};B cS=E(c){P c.1u(0,1)!=\'#\'?c="#"+c:c};B FU=E(x,1B,y){!1B?1B=\'#fI\':\'\';1B=cS(1B);B r=5U(n1,VK);x=x.22(/\\(Iq\\)/g,r);x=x.22(/\\(1B\\)/g,1B);B zD=x.1u(0,x.O(\'|||\'));B oy=x.1u(x.O(\'|||\')+3);B af=\'\';if(o.1r.3N){af=oy.22(/5J:/g,"-3N-5J:");af=af.22(/5J-/g,"-3N-5J-");af=af.22(/@zy/g,"@-3N-zy");af=af.22(/2O/g,"-3N-2O")}y.1U=zD;sM(af+oy)};B sM=E(x){if(o.K){if(o.K.zE){o.K.zE.VB=x}F{o.K.1J(1S.Ic(x))}}};B 4D=E(y,z){B x=1C zH();x.5Y(\'zF\',y,H);x.c8=z;x.9J()};B VE=E(x){if(x){X(B i=0;i<5;i++){if(x.Wa=="Wb"){1n}F{if(x.zX){x=x.zX}}}}P x};B 8E=E(z){B 8E=1S.1K("41");if(o.kH.O(z)>-1){o.kH.2W(z);if(z.O("?")>0){z=z+\'&\'+2P.5U()}F{z=z+\'?\'+2P.5U()}}F{o.kH.2W(z)}8E.5X(\'2R\',z);8E.5X(\'1a\',\'5u\');8E.5X(\'Y\',\'5u\')};B 4t=E(e,o){X(B 1h in o){if(o.2J(1h)){e.5X(1h,o[1h])}}};B 9z=E(e){if(e){3p{e.5g.3a(e);e=2e}2Y(e){}}};B 5U=E(7P,5L){P 2P.7T(WH.S>1?(5L-7P+1)*2P.5U()+7P:(7P+1)*2P.5U())};B nw=E(){P 2P.5U().6v(36).WJ(2,12)};B oq=E(x,y){x=4y.3Z(x).WK(E(4e,1h){if(1h!=y){4e[1h]=x[1h]}P 4e},{});P x};B 4p=E(x){if(1Z x=="5c"){P x.22(/^\\s+|\\s+$/gm,\'\')}F{P x}};B WG=E(x,n){if(n==0){P"#0"+aM.e(x)}if(n==-1){P aM.e(x)}if(n==1){P"#1"+pH(aM.e(x),1)}};B vE=E(x){if(v[x]!=""){if(1Z v[x]!="5c"){o[x+\'o\']=v[x]}F{if(v[x].O("[{")==0){3p{v[x]=v[x].22(/7K\'qt/ig,\'"\');o[x+\'o\']=2t(v[x])}2Y(e){}}}}};B 5I=E(x){P 7f.q6(x)};B d0=E(x){if(x.1u(0,2)=="#1"){P aM.d(pH(x.1u(2),-1))}F if(x.1u(0,2)=="#0"){P aM.d(x.1u(2))}F{P x}};B uP=E(x){if(x){if(x.O(\'3o\')==-1&&x.O(\'.\')==-1&&x.S>100&&x.O(\'1P:\')==-1){x=\'1P:aJ/tB;gz,\'+x}}P x};B 1t=E(x){x.C.5F="3t"};B 1v=E(x){x.C.5F="46"};B 3c=E(x){x?x.C.2q="1N":\'\'};B 6h=E(x){x?x.C.2q="47":\'\'};B 6b=E(x){P x?x.C.5F!="3t"&&x.C.2q!="1N":J};B 4V=E(s){if(1Z s=="5c"){if(s.O("px")>0){s=s.1u(0,s.O("px"))}}P 2z(s)};B 3t=E(x){P x.C.2q=="1N"};B mq=E(d6){B lJ=2z(d6,16);B r=(lJ>>16)&qW;B g=(lJ>>8)&qW;B b=lJ&qW;P r+","+g+","+b};B 4s=E(o,x,y){o[x+\'1g\']=0;o[x+\'2j\']=0;o[x+\'2K\']=0;o[x+\'1e\']=0;if(I(o[y])){B z=o[y].2I(" ");if(z.S==4){o[x+\'1g\']=z[0]?4G(z[0]):0;o[x+\'2j\']=z[1]?4G(z[1]):0;o[x+\'2K\']=z[2]?4G(z[2]):0;o[x+\'1e\']=z[3]?4G(z[3]):0}}P o};B WB=E(x){if(x){x=x.22(/ /ig,\'px \')}P x+\'px\'};B ln=E(x,y){P v[x]&&v[x]!=\'\'?v[x]:y};B f3=7f.q6(65,66,67,68,69,70,71,72,73,74,75,76,77,97,98,99,100,101,102,103,104,105,106,107,108,109,78,79,80,81,82,83,84,85,86,87,88,89,90,110,111,112,113,114,115,116,117,118,119,120,121,122);B aM={ai:f3+"Wo+/=",e:E(e){B t="";B n,r,i,s,o,u,a;B f=0;e=aM.zZ(e);ju(f<e.S){n=e.a3(f++);r=e.a3(f++);i=e.a3(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(qb(r)){u=a=64}F if(qb(i)){a=64}t=t+G.ai.6l(s)+G.ai.6l(o)+G.ai.6l(u)+G.ai.6l(a)}P t},d:E(e){B t="";B n,r,i;B s,o,u,a;B f=0;e=e.22(/[^A-Za-z0-9\\+\\/\\=]/g,"");ju(f<e.S){s=G.ai.O(e.6l(f++));o=G.ai.O(e.6l(f++));u=G.ai.O(e.6l(f++));a=G.ai.O(e.6l(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+5I(n);if(u!=64){t=t+5I(r)}if(a!=64){t=t+5I(i)}}t=aM.A0(t);P t},zZ:E(e){e=e.22(/\\r\\n/g,"\\n");B t="";X(B n=0;n<e.S;n++){B r=e.a3(n);if(r<128){t+=5I(r)}F if(r>127&&r<Wu){t+=5I(r>>6|Wt);t+=5I(r&63|128)}F{t+=5I(r>>12|A4);t+=5I(r>>6&63|128);t+=5I(r&63|128)}}P t},A0:E(e){B t="";B n=0;B r=0;B c1=0;B c2=0;ju(n<e.S){r=e.a3(n);if(r<128){t+=5I(r);n++}F if(r>Wq&&r<A4){c2=e.a3(n+1);t+=5I((r&31)<<6|c2&63);n+=2}F{c2=e.a3(n+1);c3=e.a3(n+2);t+=5I((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}P t}};B pH=E(s,n){s=s.22(/\\+/g,"#");s=s.22(/#/g,"+");B a=yT(o.y)*n;if(n<0)a+=f3.S/2;B r=f3.1u(a*2)+f3.1u(0,a*2);P s.22(/[A-Za-z]/g,E(c){P r.6l(f3.O(c))})};B yT=E(x){x=x.2I(5I(61));B gc=\'\';B c1=5I(120);B oQ;X(B i in x){if(x.2J(i)){B qD=\'\';X(B j in x[i]){if(x[i].2J(j)){qD+=(x[i][j]==c1)?5I(49):5I(48)}}oQ=2z(qD,2);gc+=5I(oQ.6v(10))}}P gc.1u(0,gc.S-1)};B I=E(x){P x!=2e&&1Z(x)!=\'2g\'&&x!=\'2g\'};B 9c=E(x,y){P I(x)?x:y};B 6q=E(x){P I(x)&&x!=-1&&x!=\'\'};B nN=E(x){if(1Z x=="3z"){x=4w.6i(4w.p8(x))}P x};B ex=E(el){P el.yH().1e+(1V.yD?1V.yD:1V.Ub)};B hs=E(el){Ua ib=el.yH();P ib.1g+1V.Ud};B 7L=E(x){if(x!=\'\'){if(v.Ue==1){1V.5Y(x)}F{1V.9C.8D=x}x=\'\'}};B tF=E(){if(v.4v==1){o.4v?o.1Q.3a(o.4v):\'\';o.4v=2e}};B HU=E(){B l6=J;if(o.1r.tv){1x("tv")}G.aF=E(x){o.V?o.V.1T(x):\'\'};G.6x=E(x){if(x){if(1Z(x)==\'5c\'){x=x.22(/(\\r\\n|\\n|\\r)/gm,"");if(x.O("[{")==0){3p{x=x.22(/7K\'qt/ig,\'"\');x=4w.6i(x)}2Y(e){x="qP 4w"}}}if(1Z(x)==\'3z\'){o.1y=[];o.g3=nN(x);o.1f=q7(x);if(v.1f.Ul==1&&!v.56){B 3Z=4y.3Z(o.1y);B ot=3Z.6r(-1)[0];ot?v.56=ot:\'\'}B y=yj();if(y){x=y.3r;o.f8=y.1T;o.V?o.V.D9(y.1T):\'\';if(I(y.29)){if(o.R){o.R.9A(y.29)}F{v.29=y.29}}if(I(y.3h)){y.2u=y.3h}if(I(y.1H)){v.1H=o.2w=y.1H}8C("oA");if(I(y.id)){o.3T=y.id}B sx=["2u","ob","7O","1c","z3","z4","iK","nM","bx","6J","3b","6V","4F","4o","bq"];if(I(v.c6)){if(v.c6.Us==1&&v.c6.o1==1){sx.2W("1T");sx.2W("t1");sx.2W("t2");sx.2W("t3");sx.2W("t4");sx.2W("t5")}}X(B i=0;i<sx.S;i++){if(I(y[sx[i]])){v[sx[i]]=y[sx[i]]}}if(sx.O(\'1T\')>0){if(v.c6.Ge==1){o.m7=v.c6.Gd;o.W.jo(y)}o.W.aF(\'1T\')}if(o.V){o.V.6k(o.1f)}if(o.3n){o.3n.jd()}}F{}}if(1Z(x)==\'5c\'){x=oD(x);if(x.O("#"+v.aD)==0){x=o[o.fd[0]](x)}if(x.O("#"+v.dR)==0&&x.O(v.j0)>0){x=o[o.fd[1]](x)}if(x.O("#0")==0){x=aS(x)}x=oD(x);if(v.dZ==1){x=dZ(x)}if(x==\'\'){1x("4u 3r");o.ac=H;js("2b","4u")}o.2l=[];o.8i=[];o.6o=[];o.qL=0;o.3f=0;o.5B=0;v.gd==\'\'?v.gd=\',\':\'\';if((x.O("]")>-1&&x.O("[")>-1)||I(v.bc)){o.3W=x.2I(v.gd)}F{o.3W=[x]}o.9d=[];if(I(v.bc)){B bc=v.bc.2I(v.gd)}if(o.3W.S>0){B q=-1;X(B i=0;i<o.3W.S;i++){o.3W[i]=4p(o.3W[i]);if(o.3W[i]!=\'\'){if(o.3W[i].O("[")==0&&o.3W[i].O("]")>1){o.2l[i]=o.3W[i].1u(o.3W[i].O("[")+1,o.3W[i].O("]")-1);o.3W[i]=o.3W[i].1u(o.3W[i].O("]")+1)}F{if(I(v.bc)){o.2l[i]=I(bc[i])?bc[i]:\'\'}F{o.2l[i]=i+1}}B is=0;if(I(v.4g)&&q==-1){if(7f(v.4g).O("kn:")==0){if(v.4g.1u(4)*1==i){is=1}}if(v.4g==o.2l[i]){is=1}if(v.4g=="5L"&&i==o.3W.S-1){is=1}}if(I(o.4g)){if(o.4g==o.2l[i]){is=1;q=i}}if(is==1){o.qL=i;o.3f=i}o.3W[i]=r6(o.3W[i])}}}F{o.3W[0]=r6(o.3W[0])}P o.3W[o.qL]}}F{P x}};E r6(x){if(I(v.zj)&&x.O("//")==-1){x=v.zj+x}P x};G.zk=E(){if(o.1f){B x=o.1f.zo();X(B i=0;i<x.S;i++){x[i].bt=i}o.1f=x;o.V.6k(o.1f)}};G.6k=E(x){if(1Z(x)==\'3z\'){o.1y=[];o.g3=nN(x);o.1f=q7(x);if(o.V){o.V.6k(o.1f)}}};G.cz=E(x,y,z){!I(y)?v.44=1:\'\';!I(z)?v.4i=0:\'\';v.1q=2g;v.4F=2g;v.4o=2g;o.ac!=2?o.ac=J:\'\';o.bI=J;o.8b=J;o.9Z=0;o.iL=[];o.qc=J;o.pJ=J;o.Gc=J;o.mX=[J,J,J];o.TM=nw();o.HV=0;o.2x!=\'7K\'&&o.4P?o.4P.6V():\'\';if(v.q3>1){if(I(o.q9)&&v.p9==1){X(B i in o.q9){o.q9[i].oN=2g}v.q3--}}if(o.ep){o.ep.6V()}if(o.R.5N()=="7a"){G.aE()}if(I(o.2X)){o.2X.43()}if(I(o.gC)){3k(o.gC)}js("1C");o.W.iY();x=G.6x(x);if(y==1){o.2x=\'\'}o.R.6x(x);if((o.1r.2C||o.1r.6y)&&!I(y)){o.W.2N()}if(I(o.hR)){o.3Q={x:1,y:1,x0:1,y0:1};o.R.qA()}au("1L","2N");o.R.hO();o.V.dp();o.V.j5();o.V.4r();o.eP?o.eP.Gb():\'\'};G.jo=E(x){B y=J;if(x&&o.m7){v.1T=o.m7;X(B i=1;i<6;i++){if(I(x[\'t\'+i])){v.1T=v.1T.22("{"+i+"}",x[\'t\'+i]);y=H}}}P y};G.ae=E(){if(v.44==1){if(v.lG==1){1I(E(){o.W.2N()},4c)}F{G.2N()}v.TO=1}gj()};G.gj=E(){gj()};E gj(){if(v.rl==1){if(1Z zi!=="2g"){o.th=1C zi()}}}G.hO=E(){B x=J;if(o.1r.2C){x=H;if(v.HX==1&&o.1r.9y){x=J}if(v.HJ==1&&o.1r.fV){x=J}if(v.HH==1&&o.1r.5H){x=J}if(v.TX==1&&o.1r.9m){x=J}}if(v.U4==1&&o.1r.tv){x=H}P x};G.pQ=E(){o.R.42(v.1W);if(o.3R){o.R.4Z()}o.bI=H;o.V.4r();if(!o.1L&&!o.1H){v.5O==1?o.5O.2Q("5q"):\'\'}if(o.5V&&o.62){o.52.Go()}};G.xy=E(){!o.jA?8U(H):\'\'};E 8U(x){o.jA=H;if(o.V){if(o.V.bO()){o.V.7t()}}if(o.3n){o.3n.aA()}!x?o.R.2N():\'\';if(!o.qc){1I(E(){o.R.hO()},4c)}!o.1L?o.V.2N():\'\';v.5O==1?o.5O.2Q("1L"):\'\';v.2i==1?o.W.iY(\'dn\'):\'\';if(o.1r.2C){o.V.et()}if(I(o.2X)){o.2X.zh()?o.2X.eo():\'\'}if(v.U5==1&&I(v.iK)&&o.dt){if(v.iK!=\'\'&&!I(o.iw)){o.iw=7q(oC,v.z8*2A);oC()}}}G.2N=E(bU){if(!o.1L){B 2D=J;if(o.2x=="4j"){if(!o.R.kE()&&v.44!=1&&v.4i==1){2D=H;if(1V[\'YT\']){v.44=1;o.R.qu()}}}if(v.7z==1&&v.Bn==0){o.W.mj();2D=H}if(o.ac||2D){if(o.ac){8J("7l")?l2(2):\'\'}}F{o.kC=J;yv(!o.1H);o.8d.8x();if(!o.1H){js("1H");o.1H=H;if(v.1A.vC==1){1I(E(){o.V.uV()},100)}if(v.1A.8B>0&&v.44==1){o.e4=H;1I(oH,v.1A.8B*2A)}if(v.TY==1&&v.TZ){U0()}X(B i=0;i<o.bA.S;i++){if(v[\'I8\'+o.bA[i]]==1){3w.7w("HP"+o.bA[i],6B.9t())}}if(v.U1==1&&v.Uy){Uz("1H")}js("1C");o.V.4r();au("1L","2N");o.ab?au("z6","V7",1):\'\'}F{au("za","V8")}if(v.zb==1&&!o.2o){B dd=1C 6B();B tt=dd.9s();if(tt-o.9u<ce){if(v.zg==1){o.1r.2C?G.7B():\'\'}F{G.7B()}}}if(o.ep){o.ep.6V()}if(bU!=1&&8J("7l")||8J("6W")){l2(2)}F{if(v.7L==1&&I(v.zc)&&!I(3B.7L)){7L(v.zc);2D=H}if(!2D){1x("2N");if(o.2x!=\'V1\'){o.R.1q()>0?o.V.4l(o.R.1d(),o.R.1q()):\'\'}if(!o.r8){o.r8=H;if(v.1A.8B>0&&v.44==1){o.e4=H;1I(oH,v.1A.8B*2A)}}B nk=J;if(o.R.1d()>1&&v.lF==1&&bU!=1&&!9V()&&!I(o.2i)&&!I(o.5E)){nk=8J("dn")}if(nk){9V()?8U(J):\'\'}F{8U(J)}}}}}F{o.R?o.R.2N():\'\'}};E oH(){o.e4=J;o.V.4r()}G.2Z=E(){if(o.1L){1x("2Z");o.R.2Z();o.V.2Z();js("5q");v.pE?7V():\'\';v.p6==1?o2():\'\';v.5O==1?o.5O.2Q("5q"):\'\';if(!I(o.2i)&&!I(o.5E)&&v.lF==0){8J("dn")}o.jA=J}};G.4Z=E(){o.R.4Z();o.V.4Z();o.3R=H;js("5o")};G.6T=E(){o.R.6T();o.3R=J;o.V.6T();js("c5")};G.42=E(x,y){x<0.Va?x=0:\'\';x>1?x=1:\'\';if(x<=0){G.4Z();v.1W=0;x=0}F{if(o.3R){G.6T()}v.1W=x}js("1W",x);o.V.42(x,y);o.R.42(x)};G.8P=E(){o.V.8P()};G.6O=E(){o.V?o.V.6O():\'\'};G.Vb=E(){G.6O()};G.pY=E(){o.W.6U();G.6O()};G.4l=E(1d,1q){if(o.3v&&!o.1H){B f=o.3v.av();if(f.t&&f.d){1d=f.t}}o.V.4l(1d,1q)};G.pI=E(1d,1q){if(I(o.2w)&&o.2x!="4j"&&!o.R.5v()){o.W.3X(o.2w,J);o.2w=2g}};G.eH=E(){B d=1C 6B();o.9u=d.9s();B x=J;if(o.V.bO()&&v.1l.9a!=1){o.V.7t();x=H}if(o.3n){if(o.3n.Vi()){o.3n.aA();x=H}}if(v.1f.9a==0){if(o.V.dh()&&v.1f.e7==1){o.V.aU();x=H}}if(v.7L==1&&I(v.Ap)&&!I(3B.7L)){7L(v.Ap);x=H}if(!x){if(v.2c.on==1&&v.2c.2H==1&&v.2c.p1==1){7i(\'1L\',(o.1L?0:1))}G.d5()}};G.Cq=E(){if(o.V.bO()){o.V.7t()}};G.d5=E(){if(o.R.5N()=="7a"){G.2Z()}F{G.2N()}bz()};G.3X=E(aL,iZ){if(aL<o.R.1q()){if(v.dK.Vk==1){if(aL>o.R.1d()){P}}if(v.4o>0){aL<v.4o?aL=v.4o:\'\'}o.BA=aL;o.R.3X(aL);if(iZ){o.V.3X(aL,o.R.1q())}o.gU=H;o.hX=o.R.1d();bz(o.hX)}};G.Vg=E(1c,4h,Bz){if(o.R.5N()=="7a"&&o.i3!=\'a9\'){2Z();if(o.2o&&Bz){o.V.8O()}}1V.5Y(1c,4h)};G.l8=E(){B x=o.R.bS();if(I(v.6J)){x=v.6J}if(x!=\'\'){js("6J");B ix=1V.5Y(x,(v.Vd==1?\'Ve\':\'ne\'));ix.6c()}};G.6U=E(){B 1d=o.R.1d();B 1q=o.R.1q();o.V.gw(1d,1q)};G.oT=E(){B 1d=o.R.1d();B 1q=o.R.1q();B c4=1q>0?1d/1q:0;if(!o.gU){o.V?o.V.gw((o.2w>0?o.2w:1d),1q):\'\'}F{1d!=o.hX?o.gU=J:\'\'}if((v.ga==1||v.BB==1)&&1q>0){mZ("pb","2N 25%",c4,0.25);mZ("oV","2N 50%",c4,0.50);mZ("oU","2N 75%",c4,0.75)}X(B i=0;i<3;i++){if(!o.mX[i]){if(c4>=i*0.25+0.25){Bt(i)}}}v.p7==1?1x(1,1d,1q):\'\';if(v.8Y==1){if(o.1L){B z=J;B n6=J;if(v.Bu==1){if(!o.R.5v()){z=H}}if(1d>0){if(1d==o.1d&&!z){n6=H}F{o.9Z=0}o.1d=1d}F{if(v.UL==1){B ld=o.R.ak();v.p7==1?1x(2,ld,o.na):\'\';if(!z){if(ld==o.na){n6=H}F{o.9Z=0}}o.na=ld}}if(n6){o.9Z++;v.p7==1?1x(3,o.9Z):\'\';if(o.9Z==v.pO*(2A/o.ox)){o.W.em()}}}}if(v.2i==1){v.UB!=1&&v.p9==1?qj("9p",1d,1q):\'\';v.UE!=1&&v.qX==1?qj("eu",1d,1q):\'\'}if(v.BW==1&&v.p3>0){if(1d>=v.p3){if(!I(o.2i)){if(8J("6W")){o.R.2Z();o.V.2Z()}v.p3=0}}}8C("1L");if(v.7z==1&&v.Bn>-1){UN(1d,1q)}if(o.8M){bz(1d)}if(o.5r&&v.c7==1){if(o.3v){o.3v.tK(1d,1q)}}if(I(v.4F)){if(v.4F>0&&1d>v.4F){if(o.2x=="4j"){o.R.2Z();o.R.3X(v.1H>0?v.1H:0)}F{o.R.mE();o.W.aE()}v.1H>0?o.2w=v.1H:\'\';o.W.jO()}}if(I(v.6V)){B r1=v.6V.2I(",");X(B i=0;i<r1.S;i++){B r2=r1[i].2I("-");if(r2.S==2){if(1d>r2[0]&&1d<r2[1]){o.R.3X(r2[1])}}}}};E Bt(x){o.mX[x]=H;if(v.c7==1&&v.Bp==1&&v.Bq==x){if(o.5r&&o.3T){o.3v?o.3v.UT(o.3T):\'\'}}}E mZ(x,y,t,p){if(!I(o.iL[y])){if(t>p){au(x,y,1)}}};G.em=E(){o.9Z=0;if(v.US==1){js("8Y")}F{o.2w>0||o.R.5v()?\'\':o.2w=o.R.1d();B BI=o.V.dh();js("8Y");o.R.8Y();BI&&v.1f.e7==1?o.V.jy():\'\'}};G.Aw=E(){o.V.gw(0,0);o.V.vc(0,0);o.W.4l(0,0);o.V.6O()};G.uD=E(){B 1d=o.R.ak();if(v.UO==1){js("ak",1d)}B 1q=o.R.1q();o.V?o.V.vc(1d,1q):\'\'};G.jO=E(){js("UP");if(v.9H==1){if(o.2x=="4j"){G.aE()}v.2i==1?o.W.iY(\'7l\'):\'\';if(v.1H>0){o.W.3X(v.1H)}G.2N()}F{if(o.R.5v()||o.2x=="4j"){G.aE()}F{if(v.BY==1){o.W.3X((v.1H>0?v.1H:0),H);if(o.1r.ie){o.R.2Z()}}}o.V.8o();v.BW==1?v.WX=1:\'\';if(8J("jx")||8J("pX")){}F{ay()}}};G.7B=E(){B 2D=J;B 2b=J;o.BO=J;o.bm=H;1I(E(){o.bm=J},du);X(B x in o.7M){if(o.7M.2J(x)){if(I(o.7M[x])){3p{o.7M[x].C1()}2Y(e){}}}}3p{o.dr=H;if(((o.1r.5H&&v.nV==1)||(o.1r.9m&&v.Gg==1))&&o.62&&!o.df){B x=o.R.9M();if(x){if(x.Z7){oS();2D=H}}}if(!2D){B mu;B y=o.1Q;if(y.qx){o.7J=H;mu=y.qx({nE:"1t"});if(mu!==2g){mu.bw(E(){}).2Y(E(2b){})}}F if(y.qU){y.qU({nE:"1t"});o.7J=H}F if(o.1Q.qi){y.qi({nE:"1t"});o.7J=H}F if(y.pR){y.pR({nE:"1t"});o.7J=H}F if(y.pk){y.pk();o.7J=H}}}2Y(e){2b=H;1x(e)}if(!o.7J&&!2D){if(o.1r.3N&&o.ki){oS()}F{G.vy()}}if(!2b){1I(BK,4Y)}};E oS(){B x=o.R.9M();if(x){o.fW=H;o.R.wY();x.Z1();x.1z("Z2",BQ)}}E mm(){B x=o.R.9M();if(x){x.Z3()}};G.mm=E(){mm()};E BK(){if(o.BO!=H){if(o.9l){o.R.dC()}if(v.2c.qH==1){l7(H);o.59=H}v.5O==1?o.5O.2Q("jX"):\'\';js("2o");au("jX","7B",1)}};B iq;B 9Y={x:0,y:0};E qr(e){if(o.3n){if(o.3n.Zc()){P}}o.8s=H;4f(iq);iq=7q(E(){o.8s=J;o.V.4T();9Y={x:0,y:0};4f(iq)},3L);o.V.4T();e.8Q();e.oj!=0?9Y.x++:9Y.x--;e.eg!=0?9Y.y++:9Y.y--;if(e.Zj!=0){if(9Y.x>9Y.y){if(e.oj>0){o.W.42(4G(v.1W)-v.2c.cD/10,"no")}F{o.W.42(4G(v.1W)+v.2c.cD/10,"no")}}F{if(e.eg>0){o.W.42(4G(v.1W)+(o.1r.ix?-v.2c.cD/10:v.2c.cD/10),"no")}F{o.W.42(4G(v.1W)-(o.1r.ix?-v.2c.cD/10:v.2c.cD/10),"no")}}o.V.hT()}}E BQ(){if(o.1r.5H){o.R.wW();js("pZ")}o.fW=J}G.vy=E(){if(o.dr){o.2o=H;o.V.7B();if(!o.7J){if(I(o.7F)){3p{K(o.7F,{\'Y\':\'100%\',\'1a\':\'100%\',\'1k\':\'w0\',\'1e\':0,\'1g\':0,\'4A\':"n1"})}2Y(cQ){}}K(o.1Q,{\'Y\':\'100%\',\'1a\':\'100%\',\'1k\':\'w0\',\'1e\':0,\'1g\':0,\'4A\':"n1"});o.3V=o.1Q.2k;o.4S=o.1Q.2V;3p{1S.7H.C.6w=\'3t\';if(!I(o.1f)){1S.AD=E(e){e.8Q()}}}2Y(cQ){}}if(v.qs==1){K(o.1Q,{\'6A\':\'#3P\'})}if(o.3n){o.3n.aA()}bz();o.dr=J}};G.8O=E(){l6=H;if(1S.Bh){1S.Bh()}F if(1S.AH){1S.AH()}F if(1S.AG){1S.AG()}F if(1S.AE){1S.AE()}F if(1S.yB){1S.yB()}F if(1S.AF){1S.AF()}if(!o.7J){G.vZ(J)}};G.Dx=E(x,y){qR(x,y)};E qR(x,AJ){if(I(o.2i)&&!AJ){o.lv=x}F{B 2D=J;B e3=o.a2/x;if(I(o.7F)&&v.DD!=1){3p{K(o.7F,{\'1a\':e3})}2Y(cQ){2D=H;1x("bP Zi Zh")}}if(!2D){o.4R=x;o.a0=e3;if(o.4R>0){K(o.1E,{\'1a\':e3})}js("1a",e3)}if(o.2i&&!o.2o){o.4S=e3;o.2i.2L()}}};G.vZ=E(x){if(l6||x){o.2o=J;o.fW=J;if(!o.7J){if(I(o.7F)){3p{K(o.7F,{\'1k\':\'sO\',\'1e\':0,\'1g\':0,\'4A\':\'AL\'});K(o.7F,o.Dw);K(o.7F,{\'Y\':o.9v,\'1a\':o.az})}2Y(cQ){}}K(o.1Q,{\'Y\':o.9v,\'1a\':o.az,\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'4A\':\'AL\'});3p{1S.7H.C.6w=\'2y\';1S.AD=E(e){P H}}2Y(cQ){}}o.V.8O();if(v.qs==1){K(o.1Q,{\'6A\':v.lT});if(v.fR==1){o.1Q.C.6A=\'fR\'}F{K(o.1Q,{\'6A\':v.lT})}}if(v.2c.qH==1){l7(J);o.59=J}if(o.3n){o.3n.aA()}bz();o.ks?o.ks=J:\'\';o.V.ji();l6=J;js("pZ");o.7J=J;o.bm=J}};G.59=E(x){l7(x)};E l7(x){9Y={x:0,y:0};if(x){1V.1z("qI",qr)}F{4f(iq);1V.6s("qI",qr)}}G.aE=E(){v.4i=0;o.V.2Z();o.W.Aw();o.R.42(v.1W);if(o.V.bO()){o.V.7t()}if(o.3R){G.4Z()}if(I(o.iw)){4f(o.iw);o.iw=2e}bz(0);1x("2D");js("2D")};G.p2=E(){v.4i=0;v.44=0;o.R.mE();o.W.aE()};G.5S=E(x){if(I(o.3f)){if(o.3f!=x){o.3f=x;if(v.rh==1){o.4g=o.2l[x];if(o.5r){3w.7w("ri",o.4g)}}o.R.5S(x);js("5a",o.2l[x]);o.V.vt(x)}}};G.hE=E(){o.V?o.V.hE():\'\'};G.da=E(x){if(I(o.5B)){if(o.5B!=x){o.5B=x;if(v.I7==1){o.9g=v.9g=o.6o[x];if(o.5r){3w.7w("rg",o.9g)}}o.R.da(x);js("6G",x);o.V.jt("6G")}}};G.8y=E(x,z){B y=x;7f(y).O(\'.\')>0?z=1:\'\';if(!z){y=x==o.ha?1:o.4W[x];o.8W=x}if(o.eR){if(x==o.dq){P}o.dq=y;X(B i=0;i<o.4W.S;i++){if(y<=o.4W[i]){o.8W=i;1n}}}if(o.5r&&v.Gk==1){3w.7w("Gx",y)}js("5h",y);o.R.8y(y);o.V.jt("5h")};E bz(x){o.4P?o.4P.1v(I(x)?x:o.R.1d()):\'\'};G.lm=E(){if(o.4P){bz();o.4P.C()}};G.gZ=E(x){if(1Z(iG)==\'E\'){!o.4P?o.4P=1C iG():\'\';o.4P.1H(x)}};B 6E;B 8k;B kP;B 2r;E 8J(x){if(v["7G"+x+"Ay"]>0&&o.5r){B tb=3w.5D("nf"+x+"7e"+o.d);if(tb){B ct=1C 6B();o.9u=ct.9s();B Ax=(ct.9s()-tb)/YF;if(Ax<v["7G"+x+"Ay"]){P J}}}if(v["7G"+x+"AP"]>0){if(o.R.1q()>0){if(o.R.1q()<v["7G"+x+"AP"]*60){if(v["7G"+x+"AQ"]>0){v.fv=v["7G"+x+"AQ"]}F{P J}}}}if(o.hv.O("a4")!=-1&&v.2i==1&&!o.bU&&v[x+\'s\']==1){if(1Z r7=="2g"){P J}if(x=="6W"||x=="pX"){if(1Z B9!=="2g"){2r=[];P B9(x)}}if(I(o.2i)||I(o.5E)){if(!6b(o.r5)){P J}F{P H}}F{if(I(v[x])){if(v[x].6v().O(".")>-1||v[x].6v().O(":")>-1||v[x].6v().O("[YC]")>-1){js("YD",x);if(!9V(x)&&x!="eu"){1I(E(){!o.1L?o.W.8P():\'\'},10);ey()}6E=0;8k=0;kP=x;2r=v[x].2I(" kW ");o.5j=[];o.YE=2r.S;o.x8=1;o.nC=H;X(B i=0;i<2r.S;i++){2r[i]=2r[i].2I(" or ")}v[x.8c("7e","fG")]=v[x];v[x]=2e;o.4U=x;if(x!=\'eu\'){o.2i=1C r7()}o.5E=1C lo();X(B i=0;i<2r.S;i++){X(B j=0;j<2r[i].S;j++){B 6X=4p(2r[i][j]);if(6X.O("[50%]")>0){B 1O=5U(1,2);2r[i][j]=2r[i][j].22("[50%]","");if(1O==2){2r[i][j]=\'\'}}}}if(v.qv==1){X(B i=0;i<2r.S;i++){B n=i==0?1:0;if(2r[i].S>n){X(B j=n;j<2r[i].S;j++){B 6X=4p(2r[i][j]);if(o.1r.oh){fi(6X)}F{1I(fi,i*100,6X)}}}}}if(2r[0][0]==\'\'){fC()}F{o.5E.lH(4p(2r[0][0]),x)}P H}F{P J}}F{P J}}}F{P J}};G.B8=E(x){8J(x)};E qj(w,x,d){if(I(o[w+\'o\'])&&v[w+\'s\']==1){B y;X(B i in o[w+\'o\']){if(o[w+\'o\'].2J(i)){if(!I(o[w+\'o\'][i].oN)&&I(o[w+\'o\'][i].1d)&&I(o[w+\'o\'][i].2i)){B z=o[w+\'o\'][i].1d.6v();if(z){if(z.O("%")>0){if(d>0){z=2z(z.1u(0,z.O("%")))*d/100}F{z=-1}}F{z=2z(z)}if(x>=z){if(v[\'7G\'+w+\'B5\']>0&&z>-1){if(x-z>=v[\'7G\'+w+\'B5\']){z=-1}}if(z>-1){y=o[w+\'o\'][i].2i;v[w]=o[w+\'o\'][i].2i;o[w+\'YU\']=o[w+\'o\'][i].1d;o[w+\'YV\']=o[w+\'o\'][i].YW;if(8J(w)){o[w+\'o\'][i].oN=H;1n}}}}}}}}};E 9V(z){B y=J;B x=[\'9p\',\'dn\'];X(B i=0;i<x.S;i++){if(o.4U==x[i]||z==x[i]){if(v[\'7G\'+x[i]+\'YS\']==1){y=H}}}P y};G.9V=E(x){P 9V(x)};G.YR=E(){qG();o.4U=="9p"?o.Bb.2W(o.Be):\'\'};G.YO=E(){qG()};E qG(){if(9V()){if(o.1L){o.R.2Z();o.V.2Z()}K(o.r5,{"1w":1,"5F":"46","1g":0});o.ov=1}if(o.fW&&!o.7J){mm()}};G.Zo=E(x){o.5E=2e;o.ov=0;1x("a4 3S");js("ZU",o.4U);if(x.1G=="eu"){B B4=1C ZV(x);o.qX.2W(B4)}F{if(I(o.2i)){if(v.4i==0&&v.ZT==1&&o.R.1d()==0&&o.R.1q()==0){v.4i=1;o.R.qZ()}if((!o.2i.ZS()||x.B3)&&o.qo>0){1x("a4 ZP");o.2i.43();o.2i=2e;o.2i=1C r7()}if(9V()){if(o.bL==0){K(o.r5,{"1w":0,"5F":"3t","1g":3L})}}F{if(o.1L){o.R.2Z();o.V.2Z()}}o.qo++;if(o.nC&&v.de>0){3k(o.de);o.de=1I(AW,v.de*2A*60);if(I(v.AU)){if(v.AU!=\'\'){o.gX?o.gX.6V():\'\';o.gX=1C ZY()}}}o.nC=J;if(v.AS>0){1x("a4 ZZ");js("10g");1I(pN,v.AS*2A,x)}F{pN(x)}}F{1x("a4 10h")}}};E pN(x){o.2i.Go(x)}E AW(){if(I(o.2i)){if(o.2i.t0()&&o.bL==0){o.2i.pL();1x("a4 Dd "+v.de);2r=[];bD()}}}G.10f=E(){js(\'10e\',o.4U);1x("a4 2b");fC()};G.fC=E(){B 2D=J;B fw=J;if(o.4U=="7l"){if(v.kl>0&&o.fq>0){fw=H;if(o.bL>=v.kl){2D=H}}if(v.fv>0&&!fw){if(v.wJ==1&&o.fq==0){}F{if(o.bL>=v.fv){2D=H}}}}!2D?fC():bD()};G.10a=E(x){if(v[o.4U+"qm"]){X(B i=0;i<3;i++){v[o.4U+"qm"]=v[o.4U+"qm"].22(x+(i==0?\' kW \':(i==1?\' or \':\'\')),\'\')}}};E fC(){if(2r.S>0&&2r[6E]){if(8k<2r[6E].S-1){o.2i?o.2i.pL():\'\';8k++;B 6X=4p(2r[6E][8k]);B fr=qh(6X);if(fr==\'qf\'){o.5E=1C lo();o.5E.lH(6X,o.4U)}if(fr==\'2b\'){fC()}}F{bD()}}F{bD()}}E qh(6X){B x=\'qf\';if(v.qv==1&&o.5j){B nJ=J;B n=0;X(B i=0;i<o.5j.S;i++){if(o.5j[i].kd==0){if(o.5j[i].bv.B1(6X)){o.5j[i].kd=1;B y=o.5j[i].bv.aB();if(y==\'3S\'){o.5E=o.5j[i].bv;1x("a4 B1");o.5j[i].bv.gK();x=y}F{if(y==\'\'){x=\'ok\';1x("a4 ZM");o.5E=o.5j[i].bv;o.5j[i].bv.Zw()}if(y==\'2b\'){x=\'2b\'}}nJ=H}if(nJ&&o.5j[i].er==0){n++;if(n<6){qM(o.5j[i])}F{1n}}}}}P x}G.Zx=E(x,y){if(x!=\'\'){B z=6E;B pB=J;if(y){X(B j=0;j<2r.S;j++){2r[j]==y?z=j:\'\'}}if(2r.S==1){if(2r[0].S>1&&8k<2r[0].S-1&&2r[8k]){B wP=2r[8k].6r(1,99);2r[0].r3(8k+1,99);pB=H}}if(1Z(x)=="3z"){X(B i=0;i<x.S;i++){2r.r3(z+i+1,0,[x[i]]);if(o.1r.oh){fi(x[i])}F{1I(fi,i*100,x[i])}}}F{if(1Z(x)=="5c"){2r.2W([x]);fi(x)}}if(pB){2r[2r.S-1]=2r[2r.S-1].8c(wP)}}};G.Zq=E(x,y){if(x!=\'\'){B z=6E;if(y){X(B j=0;j<2r.S;j++){2r[j]==y?z=j:\'\'}}if(2r[z]){if(1Z(x)=="3z"){X(B i=0;i<x.S;i++){2r[z].2W(x[i])}}F{if(1Z(x)=="5c"){2r[z].2W(x)}}}}};G.bD=E(x){bD(x)};E fi(x){if(v.qv==1&&o.5j){B i=0;X(B i=0;i<2r.S;i++){if(2r[i]==x){if(6E>=i){P}F{}}}if(2r.S==1&&2r[0].S>1){}F{B n=0;X(i=0;i<o.5j.S;i++){o.5j[i].kd==0?n++:\'\'}o.5j.2W({er:0,kd:0,x:4p(x),t:o.4U,bv:1C lo(H)});n<5?qM(o.5j[o.5j.S-1]):\'\'}}}E qM(x){if(x){x.er=1;x.bv.lH(x.x,x.t)}}E bD(h8){B 2D=J;B fw=J;if(o.4U=="7l"){if(v.kl>0&&o.fq>0){fw=H;if(o.bL>=v.kl){2D=H}}if(v.fv>0&&!fw){if(v.wJ==1&&o.fq==0){}F{if(o.bL>=v.fv){2D=H}}}}if(2r.S>0&&6E==2r.S-1){if(2r[0][0].O("js:")==0){6E=-1;2r=[[2r[0][0]]]}}if(o.ZI==2){2D=H}if(2r.S>6E+1&&!2D){o.2i.pL();6E++;o.x8++;8k=0;B 6X=4p(2r[6E][0]);B fr=qh(6X);if(fr==\'qf\'){o.5E=1C lo();o.5E.lH(6X,kP)}if(fr==\'2b\'){bD(h8)}}F{ec();o.V.6O();if(I(o.2i)){o.2i.43();o.2i=2e}o.5E=2e;2r=[];8k=0;6E=0;o.wx!=1?js("ZD",o.4U):\'\';o.wx=0;if(v.ZF==1){if(o.ow){o.ow.vY();o.ow=2g}}kP=\'\';o.bL=0;3k(o.de);o.gX?o.gX.6V():\'\';o.fq++;if(o.4U=="7l"||(o.4U=="dn"&&v.lF==1)||o.4U=="9p"){if(v.3r!=\'?\'){o.R.eN();B re;if(o.2x=="4j"&&!o.pK&&o.1r.5H){re=H;o.4U=="7l"?o.R.Gn():\'\'}if(re||h8==\'h8\'||v.Xt==1){}F{o.W.2N(1)}}}if(o.lv>0){qR(o.lv);o.lv=0}if(o.4U=="jx"){ay()}o.pK=J;o.4U=2e}};G.Xr=E(){2r=[[\'\']]};G.iY=E(y){B x=[\'7l\',\'dn\',\'jx\',\'6W\',\'pX\'];B z;X(B i=0;i<x.S;i++){z=J;if(y){y!=x[i]?z=H:\'\'}if(!z&&I(v[x[i].8c("7e","fG")])){v[\'7G\'+x[i].8c("7e","xZ")]--;if(v[\'7G\'+x[i].8c("7e","xZ")]>0){v[x[i]]=v[x[i].8c("7e","fG")];v[x[i].8c("7e","fG")]=2e}}}};G.mj=E(){ey();if(I(o.7z)){o.7z.43();o.7z=2e}o.7z=1C XG()};G.XF=E(){ec();o.7z.43();o.7z=2e};G.ey=E(){ey()};G.ec=E(){ec()};E ey(){if(o.b0){}F{o.b0=1K("1R");o.1Q.1J(o.b0);K(o.b0,{"Y":"100%","1a":"100%","1k":"1X","1g":0,"1e":0,"2v":"#3P","1w":0.1});o.b0.C.4A=Db}};E ec(){if(o.b0){o.1Q.3a(o.b0);o.b0=2e}};E 7V(){if(I(o.29)){if(v.29!=o.vv){9A(v.29,o.29,v.hV)}1v(o.29);K(o.29,{"1w":v.lk});o.V.4r()}};G.jb=E(){if(I(o.29)){if(6b(o.29)){B t=o.R.1d();if(t==0&&v.xW==1){}F{if(v.yg>0){3k(o.pP);o.pP=1I(o2,v.yg*2A)}F{o2()}}}}};E o2(){3k(o.pP);if(v.pE==1&&!o.1L){}F{K(o.29,{"1w":0});1I(ys,4c)}}E ys(){if(!o.1L&&v.hS==1){}F{1t(o.29)}}G.7V=E(){7V()};E yv(x){if(v.yw==1){X(B i=0;i<7k.S;i++){if(7k[i].2Q("id")!=v.id){7k[i].2Q(\'5q\')}}}fY=v.id}E q7(x){B y=4y.3Z(x).S;if(y>0){x=pc(x,y,\'\',-1)}P x}E pc(x,y,p,j){B x2=[];B 2D;if(I(x[\'1f\'])){x=x[\'1f\'];y=x.S}B ii=0;X(B i=0;i<y;i++){2D=J;if(I(x[i][\'id\'])){x[i][\'cO\']=x[i][\'id\']}x[i][\'id\']="x"+p+\'-\'+i+(I(x[i][\'id\'])?\'-\'+x[i][\'id\']:\'\');j==-1&&i==0&&!I(x[i][\'4X\'])?o.gJ=x[i][\'id\']:\'\';if(!I(o.gJ)){j==0&&!I(x[i][\'4X\'])?o.gJ=x[i][\'id\']:\'\'}x[i][\'go\']=p;x[i][\'qK\']=j;x[i][\'bt\']=ii;if(I(x[i][\'yq\'])){x[i][\'1T\']=x[i][\'yq\'];B q1=x[i][\'3r\']?x[i][\'3r\'].O(\'[\'):0;B q2=x[i][\'3r\']?x[i][\'3r\'].O(\']\'):0;if(q1>0&&q2>0){B s1=x[i][\'3r\'].1u(q1+1,q2-q1-1);B s2=s1.2I(",");B s3=\'\';X(B k=0;k<s2.S;k++){s3+="["+s2[k]+"]"+x[i][\'3r\'].22("["+s1+"]",s2[k])+(k<s2.S-1?",":\'\')}x[i][\'3r\']=s3}}if(I(x[i][\'1f\'])){x[i][\'4X\']=x[i][\'1f\']}if(!I(x[i][\'4X\'])){if(I(x[i][\'3r\'])){if(x[i][\'3r\']==\'\'&&!I(x[i][\'7L\'])){2D=H}}F{2D=H}}if(!2D){o.1y[x[i][\'id\']]=x[i];ii+=1}if(I(x[i][\'4X\'])){B z=4y.3Z(x[i][\'4X\']).S;if(z>0){x[i][\'4X\']=pc(x[i][\'4X\'],z,x[i][\'id\'],i)}}if(!2D){x2.2W(x[i])}}P x2}E yj(){B x=[];if(I(v.56)){if(v.56.O("x-")!=0){X(B y in o.1y){if(o.1y.2J(y)){if(o.1y[y].cO==v.56){v.56=y}}}}if(I(o.1y[v.56])){v.1f.Xa==1?v.1f.vA=0:\'\';x=o.1y[v.56]}F{x=o.1f[0];if(v.56==o.yo){o.2w=2g}}}F{x=o.1f[0]}if(x){X(B i=0;i<10;i++){if(I(x[\'4X\'])){x=x[\'4X\'][0]}F{1n}}v.56=x.id;if(v.56==o.yo){x.1H=2g}}P x}E ay(){au("4F","ay",1);o.W.iY();if(o.5r&&v.c7==1){o.3v.tK(0,o.R.1q())}if(o.V.jm()){if(v.1f.fu==1&&o.V.f1()){o.V.d8();if(o.1L&&o.1r.5H&&o.2x!="ar"){}}F{pt()}}F{7V();js("xu")}}G.xq=E(){pt()};E pt(){if(v.1f.mf==1&&!o.V.f1()){o.V.jk();P}if(v.1f.FR==1){!o.V.dh()?o.V.aU():\'\'}7V();js("xu")}E oD(x){if(x.O(\'js:\')==0){3p{x=2t(x.1u(3))}2Y(e){bs.1x(e.9E)}}P x?x:\'\'}E oC(){B pq=2P.7T(6B.9t()/2A);B pd=(I(v.xo)?v.xo:0)+2z(o.R.1d());B 1G=0;o.1r.w6?1G=1:\'\';o.1r.5H?1G=2:\'\';o.1r.9m?1G=3:\'\';o.1r.Xe?1G=4:\'\';o.1r.tv?1G=5:\'\';B 1c=v.iK.22("[pq]",pq);1c=1c.22("[pd]",pd);1c=1c.22("[XM]",1G);B 8E=1S.1K("41");8E.5X(\'2R\',1c);8E.5X(\'1a\',\'5u\');8E.5X(\'Y\',\'5u\');o.1Q.1J(8E)}};B H9=E(1c){B 1c;B 4Q;B kO;B 7Z;B eJ="";B dL=0;B mQ=J;B mD=J;B pz;B R;B 3y;o.3Q={x:1,y:1,x0:1,y0:1};B jp;B j7;B kc=0;B bW=0;if(1Z(1c)==\'5c\'){1c=4p(1c);if(1c.O("[{")==0){3p{1c=1c.22(/7K\'qt/ig,\'"\');1c=4w.6i(1c);jp?1c=o.W.6x(1c):\'\'}2Y(e){bs.1x(e);1c="qP 4w"}}if(1c.O("#"+v.aD)==0){1c=o[o.fd[0]](1c)}if(1c){if(1c.O("#"+v.dR)==0&&1c.O(v.j0)>0){1c=o[o.fd[1]](1c)}}if(1c){if(1c.O("#0")==0){if(1c.O(o.ci)>0){1c=aS(1c.22(o.ci,\'\'))+o.ci}F{1c=aS(1c)}}}if(v.dZ==1){1c=dZ(1c)}if(1Z(1c)==\'5c\'){if(1c.O(".aq")==1c.S-4||1c.O(".7D")>0){j7=1c.2I(" or ");oE()}}}o.4q=1K("1R");K(o.4q,{"1k":"1X","1g":0,"1e":0,"Y":"100%","1a":"100%","4M":"2O 0.2s 2T","1F-6Z":"7g"});o.1Q.1J(o.4q);if(!jp){cW()}E oE(){1c=j7[kc];if(1c.O(o.ci)>0){1c=1c.22(o.ci,\'\');v.3r=1c}B 4D=eS(1c);4D.c8=E(){if(G.dP==4&&G.5N==4Y){aU(G)}F{nm(1)}};4D.nA=E(e){nm(1)};4D.9J();jp=H}E nm(x){if(kc+1<j7.S){kc++;oE();x=0}if(x==1){5z("1f aP fB or xN op")}if(x==2){5z("Yc 4w")}}E aU(x){if(x.cu){B y=x.cu;if(y.O("#"+v.aD)==0){y=o[o.fd[0]](y)}if(y.O("#"+v.dR)==0&&y.O(v.j0)>0){y=o[o.fd[1]](y)}if(1c.O(".aq")==1c.S-4){B aq=y.2I(/(\\r\\n\\t|\\n|\\r\\t)/gm);1c=[];B pW=1;B gy=\'\';X(B i=0;i<aq.S;i++){if(aq[i].O("#Ye")>-1){if(aq[i].O(" - ")>-1){B 1O=aq[i].2I(" - ");gy=1O[1O.S-1]}}if(aq[i].O("3o")>-1){1c.2W({1T:""+(gy!=\'\'?gy:pW),3r:aq[i]});pW++;gy=\'\'}}}F{y=y.22(/(\\r\\n\\t|\\n|\\r\\t)/gm,"");3p{1c=4w.6i(y)}2Y(e){nm(2)}}if(I(1c.cN)){1c=Yu(1c)}if(o.V){if(v.1f.o4==1){if(!o.V.dh()){o.V.jy()}}}cW();hP();1I(E(){js("1f")},1)}}E cW(){1c=o.W.6x(1c);1c&&1c!=\'?\'?6x(1c):\'\'}E 5z(x){1x("eF: "+x);B y=H;B yy=H;js("Yv",x);if(4Q){if(4Q.S>0){7Z++;y=7Z>4Q.S-1;if(y&&v.Yw==1){if(o.3W.S>1&&o.3f>0){if(o.2l[o.3f].O(2G("gn"))==-1){o.2l[o.3f]=o.2l[o.3f]+\' (\'+2G("gn")+\')\'}yy=J;o.W.5S(o.3f-1);k9()}}if(!y){B z=J;o.2w>0||!o.1H||R.5v()?\'\':o.2w=4O();if(o.2x!=lV(4Q[7Z])||o.2x!=\'ar\'){if(o.1L){o.W.aE();z=H}}1x("Yt cd",o.2w);6x(\'or\');o.1H&&!o.2i?R.2N():\'\';k9()}F{if(v.8Y==1&&yy){y=J;oJ()}}}}if(y&&yy){pj(x,H)}};E pj(x,mr){au("2b","eF",H);if(v.xC&&!o.ac){if(v.xD==1&&x=="aP fB"){o.8d.7D(v.xJ)}F{o.8d.7D(x)}if(v.xQ==1&&I(v.xP)){o.ep=1C Cf()}}mr?o.ac=H:\'\';if(o.1L){o.W.6O();o.V.2Z()}I(o.29)?o.W.7V():\'\';js("2b",x)}E oJ(){bW++;1x("eF em Gu "+bW);I(o.gC)?3k(o.gC):\'\';o.gC=1I(xA,v.pO*2A)}E xA(){B x=9c(v.XT,10);if(o.1L){if(bW<x){o.W.em()}F{pj(\'em eF \'+R.ly())}}}G.5z=E(){5z(R.ly())};G.8o=E(y){1x("jO");mQ=H;B x=J;if(4l()>0&&!o.5V&&!y){B 1d=o.Hm;if(1d+10<4l()){1x(\'XS (qp)\');js("qp");R.2N();R.3X(1d);x=H}}if(!x){o.W.jO();js("4F")}};G.8U=E(){if(v.p6==1){I(o.29)?o.W.7V():\'\'}v.hS==1?o.W.jb():\'\';o.V.2N();o.W.xy();if(v.XO==1&&I(v.p0)){if(v.p0.S>5){pC();4f(pz);pz=7q(pC,v.xz*2A)}}if(v.8Y==1){if(bW>0&&o.R.1q()==0){bW=0;oJ()}}js("1L")};G.hO=E(){if(v.jD==1&&o.62){if(o.W.hO()){o.df=R.qg();o.V.4r()}}o.qc=H};G.di=E(){o.W.2Z()};G.gT=E(){1x("XP")};G.gS=E(){1x("pY");o.W.pY();o.hX?js("4d",o.hX):\'\'};G.bE=E(){1x("pQ");bW=0;o.W.pQ()};G.a5=E(){if(R){1x("4l",4l());o.W.4l(4O(),4l());js("1q",4l());bW=0;if(I(o.lQ)){o.W.da(o.lQ);o.lQ=2e}}};E 4O(){B x=R.1d();P x}E 4l(){B x=R.1q();P x}G.d4=E(){};G.8a=E(){1x("8P");o.W.8P();js("9F")};G.bH=E(){if(dL!=4O()){o.W.6O();if(dL==0){if(v.hS==1&&v.xW==1){o.W.jb()}}}dL=4O();js("1d",dL);if(v.2m.on==1){if(1Z(yf)==\'E\'){if(!3y&&v.2m.4C!=1&&v.y7&&v.y7!=\'\'&&dL>0){o.dG=1C yf();3y=o.dG.fA()}}}};G.qu=E(){if(o.2x=="4j"){R?R.kE():\'\'}};G.yc=E(x){o.W.aE();R.wB(x)};G.kE=E(){if(o.2x=="4j"&&R){P R.3S()}F{P H}};G.jY=E(){P R.jY()};G.km=E(){P R.km()};G.5S=E(x){1x("Y4",x);if((o.2x=="ar"||o.2x==o.ws||(o.2x=="1M"&&(v.8m==0||9i()<2))||(o.2x=="2h"&&(v.9O==0||bp()<2)))&&I(o.3W[x])){B 1d=G.1d();o.2w>0?\'\':o.2w=1d;o.W.3X(1d,J);6x(o.3W[x],H);o.W.2N()}if(o.2x=="1M"&&v.8m==1&&9i()>1){R.DU(x)}F if(o.2x=="2h"&&v.9O==1&&bp()>1){R.DX(x)}F if(o.2x=="4j"){R.wz(x)}};E wX(){if(o.62&&o.2f){R.q8();X(B i=0;i<o.2f.S;i++){R.CA(o.2f[i],o.3i[i],(i==o.3F))}}}G.8y=E(x){1x("Y1",x);R?R.fc(x):\'\';if(v.2m.on==1){if(3y){3y.fc(x)}}};G.wY=E(){wX()};G.wW=E(){R.q8()};G.da=E(x){1x("Y3",x);if(o.9d.S>0){if(o.9d[x]){B 1d=G.1d();o.2w>0?\'\':o.2w=1d;o.W.3X(1d,J);6x(o.9d[x],H);o.W.2N()}}F{if(o.2x=="1M"&&v.bZ==1){R.De(x)}F if(o.2x=="2h"&&v.e9==1){R.DV(x)}}};G.pi=E(){B x=o.2l[o.3f];x==2g?x=\'\':\'\';B y=hi()&&v.iH==1&&v.8m==1&&x!=2G("2y");P(y?\'\'+2G("2y")+\' \':\'\')+x};G.py=E(){B x=o.6o[o.5B];x==2g?x=\'\':\'\';P x};G.hi=E(){P hi()};E hi(){B x=J;if(R){if(o.2x=="4j"){x=R.2y()}if(o.2x=="1M"&&v.8m==1&&9i()>1&&v.iH==1){x=R.2y()}if(o.2x=="2h"&&v.9O==1&&bp()>1){x=R.2y()}}P x}E 9i(){if(o.2x=="1M"){P R.9i()}F{P 0}}E bp(){if(o.2x=="2h"){P R.bp()}F{P 0}}G.4T=E(x){if(R&&(o.2x=="4j"||o.2x=="aH"||I(v.f9))){R.4T()}if(v.uB>0){K(o.4q,{"1a":(o.2o?"100%":o.az-v.uB)})}if(o.3y&&v.2m.Gs==1){o.dG.4T()}};G.3M=E(){P R.3M()};G.8Y=E(){1x(\'8Y\');o.9Z=0;o.1H?v.44=1:\'\';o.W.8P();if(1c&&v.Ma!=1){if(1c.O(\'(5U)\')==-1){1c=1c+(1c.O(\'?\')==-1?\'?\':\'&\')+\'Iq=(5U)\'}}if(o.2x=="1M"||o.2x=="ar"){R.2R(1c)}F{6x(1c)}};if(!I(o.29)){qN()}if(I(v.29)){if(v.29!=\'\'){9A(v.29,o.29,v.hV);if(v.p6==1&&!o.1H){1t(o.29)}}F{v.29=2e}}E aB(){eJ=R?R.5N():\'\'}E HC(1c){4Q=1c.2I(" or ");X(B i=0;i<4Q.S;i++){if(4Q[i].O(" kW ")>-1){kO=4Q[i].2I(" kW ");4Q[i]=kO[5U(0,kO.S-1)]}}7Z=0}E GF(){aB();if(eJ=="7a"||o.5V){o.W.oT()}if(eJ!=""){o.W.uD()}}E qN(){if(o.29){o.1Q.3a(o.29)}o.29=1K("1R");K(o.29,{"3I-2F":"1N","1w":v.lk,4M:"1w 0.5s"});if(v.I6==1){HI()}F{K(o.29,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'Y\':\'100%\',\'1a\':\'100%\'})}o.1Q.1J(o.29)}E 6x(x,y,Ie){v.hg==\'\'?v.hg=\';\':\'\';if(x.O(\'{\')>-1&&x.O(\'}\')>-1&&x.O(v.hg)>-1){B z=x.2I(v.hg);o.9d=[];X(B i=0;i<z.S;i++){o.6o[i]=z[i].1u(z[i].O("{")+1,z[i].O("}")-1);o.9d[i]=z[i].1u(z[i].O("}")+1);if(I(v.9g)){if(v.9g==o.6o[i]){o.5B=i}}}x=o.9d[o.5B]}!I(4Q)?4Q=[]:\'\';o.k3?3k(o.k3):\'\';x&&x!=\'or\'&&x!=\'x\'?HC(x):\'\';B ft=o.2x;if(4Q.S>0){o.2x=lV(4Q[7Z]);B fA=J;if(Ie){fA=H}1c=4Q[7Z];if(1c){1c=1c.22(/\\(5U\\)/g,2P.5U())}if(!fA&&x!=\'x\'&&R&&o.2x==ft&&(ft=="ar"||ft=="aH"||(ft=="4j"&&o.1H&&!mD)||ft=="1M"||ft=="2h")){R.2R(1c);1x("2R")}F{1x("Y2");lq();Gj(1c)}if(o.ha){if(o.eR){R.fc(o.dq)}F{if(o.8W!=o.ha){R.fc(o.4W[o.8W])}}}}if(!y){4f(o.oe);o.oe=7q(GF,o.ox);if(!I(v.2u)&&v.oL==1&&v.GH==1){v.2u=\'\'}if(I(v.2u)){o.W.gZ(v.2u)}if(v.gs==1){if(v.jD==1&&o.1r.2C){}F{if(o.2x=="4j"){K(o.4q,{"1g":-du,"1e":-du})}F{3c(o.4q)}v.1A.1t=0}}}}E lV(x){B 1G="ar";if(x){if(x.O(".HT")>0){1G="1M"}F if(x.O(".Ib")>0){1G="2h"}F if(x.O("ws://")==0){1G=o.ws}F if(x.O(\'4j.7r/\')>-1||x.O(\'kL.be/\')>-1){if(1Z(qO)==\'E\'){1G="4j";if(v.uT==1){B y=\'8f://41.4j.7r/vi/\'+lK(x)+\'/\';GN(y+\'GI.lz\',E(z){z>100?v.29=y+\'GI.lz\':v.29=y+\'Y9.lz\';if(o.1y){o.1y[o.3T][\'29\']=v.29}v.44==1||o.1H?\'\':9A(v.29,o.29,v.hV)})}}F{1x("No GO")}}F if(v.aH==1&&x.O(\'aH.7r/\')>-1){1G="aH"}F if(v.Y7==1){Y6(x)?1G="7K":\'\'}}o.62=1G=="ar"||1G=="1M"||1G=="2h"||1G==o.ws;P 1G}E GN(1c,Gi){B 41=1C XZ();41.c8=E(){Gi(G.1a)};41.2R=1c}E Gj(x){o.2x=lV(x);if(o.62){R=1C Hf(x,o.4q,J)}if(o.2x=="4j"){R=1C qO(x,o.4q)}if(v.aH==1&&o.2x=="aH"){R=1C XY(x,o.4q)}if(o.2x=="7K"){R=1C XR(x)}o.V?o.V.FY():\'\';B t=0;if(I(v.1q)){if(o.3v&&v.c7==1&&!o.1H){t=o.3v.av().t}1I(E(){o.W.4l(t,v.1q)},100)}}E lq(){if(R){R.43();R=2e;eJ="ah"}if(3y){3y.43();3y=2e;3y=2g;o.dG.6V();o.3y=2e;o.dG=2e}};G.43=E(){lq()};G.XQ=E(){4Q=[];lq()};G.6x=E(x,y,z){6x(x,y,z)};G.9A=E(x){9A(x,o.29,v.hV)};G.2N=E(){if(R){mQ=J;mD=J;if(o.5V){o.52.2N()}F{R.2N();v.hS==1?o.W.jb():\'\'}if(I(3y)){3y.2N()}if(o.7j){if(o.62){if(o.9u>0&&!o.7j.XN()){o.7j.jd()}}F{o.ja=[];o.V.jt("dg")}}if(o.62&&v.DO>-1&&!o.pJ&&!o.1r.5H){if(o.9u>0){R.DQ()}}k9()}F{1I(G.2N,4c)}};E k9(){if(v.Gl>0&&4Q.S>1){if(4l()==0){3k(o.k3);o.k3=1I(Gm,v.Gl*2A)}}}E Gm(){if(o.1L&&4l()==0&&4O()==0){if(R){if(R.ak()==0&&7Z!=4Q.S-1){5z(\'6x Gu\')}}}}G.Gv=E(1i){if(o.3y){if(v.2m.Gs==1){if(o.wl[o.3y]>2){P}}if(1i){1i.an();1V.1i?1V.1i.6g=H:\'\'}B 1O=R;R.qe(H,o.3y);3y.qe(J,o.4q);R=3y;3y=1O;R.2N();3y.2N();js("2m")}};G.Gn=E(){R.2R(1c)};G.w8=E(){v.5O==1?o.5O.2Q("1t"):\'\';o.oZ=H};G.hW=E(){if(v.1A.uY){v.1A.uY=J;if(o.V){o.V.st(1);o.V.uV()}}o.oZ=J};G.Gq=E(){if(o.3y&&o.dG){o.dG.nx()}};G.fb=E(){if(o.62&&o.5K){o.h1=H;R.5K()}};G.dC=E(){if(o.62&&o.8b){R.8b()}};G.mT=E(){if(v.aG==1&&I(v.GT)){if(!I(o.aG)){o.aG=1K("1R");K(o.aG,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'Y\':\'100%\',\'1a\':\'100%\',"3I-2F":"1N","4A":Gr});o.1Q.1J(o.aG)}6h(o.aG);9A(v.GT,o.aG,\'3j\')}if(R){l2(0);R.mT()}};G.eN=E(){if(o.aG){3c(o.aG)}R?R.eN():\'\'};G.2Z=E(){if(o.5V){o.52.2Z()}F{R?R.2Z():1x("XX")}if(I(o.3y)){3y.2Z()}};G.mE=E(){mD=H;o.W.3X(0,J);I(o.29)?o.W.7V():\'\';6x(\'x\')};G.d5=E(){R?R.d5():\'\'};G.3X=E(x){if(R){if(o.5V){o.52.3X(x)}F{R.3X(x);if(v.2m.on==1){if(3y){3y.3X(x)}}}}};G.4Z=E(){if(R){R.4Z();o.5V?o.52.4Z():\'\'}if(v.2m.on==1&&v.2m.eL==1){if(3y){3y.4Z()}}};G.6T=E(){if(R){R.6T();o.5V?o.52.6T():\'\'}if(v.2m.on==1&&v.2m.eL==1){if(3y){3y.6T()}}};G.42=E(x){R?R.42(x):\'\';if(v.2m.on==1){if(v.2m.eL==1&&3y){3y.42(x)}}if(o.5V){o.52.42(x)}};G.mR=E(){P R?R.mR():J};G.5v=E(){P R?R.5v():J};G.5N=E(){P eJ};G.ah=E(){P mQ};G.1d=E(){B x=0;if(R){x=4O();if(o.5V){B y=o.52.4O();y?x=y:\'\'}F{if(4l()>0&&x!=4l()){o.Hm=x+0.XU}}P x}F{P 0}};G.1q=E(){B x=0;if(R){x=4l();x==0&&I(v.1q)?x=v.1q*1:\'\';if(o.5V){B y=o.52.4l();y?x=y:\'\'}}P x};G.ak=E(){P R?R.ak():0};G.Ya=E(){qN()};G.qZ=E(){if(o.62){R.4i()}};G.1D=E(x){if(7f(x).O(":")>0){B y=x.2I(":");B z0=o.3V/o.4S;B z1=o.R.3M();if(z1.Y>0){z0=z1.Y/z1.1a}B z=y[0]/y[1];if(z0!=z){if(o.62){R.f5()}B w2=o.4S*z;B x2=w2/o.3V;B h2=o.3V/z;B y2=h2/o.4S;if(x2<1){o.3Q.x0=o.3Q.x=4G(x2);o.3Q.y=1}F{o.3Q.x=1;o.3Q.y0=o.3Q.y=4G(y2)}K(o.4q,{"2O":"3u("+o.3Q.x+") 3m("+o.3Q.y+")"});o.hR=x}}F{o.3Q.x+=4G(x);o.3Q.y+=4G(x);K(o.4q,{"2O":"3u("+o.3Q.x+") 3m("+o.3Q.y+")"})}if(v.2c.Yo==1){if(!o.Hv){if(o.3Q.x>0||o.3Q.y>1){Hq(o.4q,\'o.Yx\');o.Hv=H}}F{if(o.3Q.x==1&&o.3Q.y==1){K(o.4q,{"1g":0,"1e":0})}}}o.V.v1()};G.qA=E(){if(o.62){R.f5()}o.3Q.x=o.3Q.x0;o.3Q.y=o.3Q.y0;K(o.4q,{"2O":"3u("+o.3Q.x+") 3m("+o.3Q.y+")"});o.V.v1();o.hR=2e};G.gR=E(x,y){R.gR(x,y)};G.Ym=E(){B x=2g;I(o.2f)?I(o.2f[o.3F])?x=o.2f[o.3F]:\'\':\'\';P x};G.bS=E(){P bS()};E bS(){P 4Q.S>0?(4Q[7Z]?4Q[7Z]:\'\'):\'\'};G.9M=E(){P R?R.9M():J};G.6m=E(){if(o.62){R.6m()}};E pC(){B 4D=eS(v.p0+\'?1c=\'+4Q[7Z]);4D.c8=E(){if(G.dP==4&&G.5N==4Y){if(G.cu){v.1T=G.cu;o.W.aF(\'1T\')}}};4D.9J()}};B Hf=E(1c,1E,2m){B 1m=1K("6j");B gf;B qw=0;if(v.Yf==1){B cP=1K("bP");4t(cP,{"Hz":"no","tD":"H","Hw":"H","2R":""});K(cP,{"1k":"1X","Y":"100%","1a":"100%","3g":0});1E.1J(cP);B He=1V.7q(E(){if(cP.o9.1S.dP==="Yd"){1V.4f(He);K(cP.oM.7H,{"3e":0,"2B":0});cP.oM.7H.1J(1m)}},100)}F{1E.1J(1m)}B 1M;B 4z=J;B oW=J;B pn=J;B ad=J;B eq=-1;B 2h;B 7X=J;B qC=J;B om=J;B ws;B ph=J;B 6d=J;B 9I=J;B 7v=0;B 8u=J;B 2b;B Yg;B mo=J;B fX=-1;B b6=-1;B qV;B k2;B k6;B gl;B Yh;B DF=\'6j/Yl; Yk="Yj.Yi, XL.40.2"\';K(1m,{\'1k\':\'1X\',\'1g\':0,\'1e\':0,\'Y\':\'100%\',\'1a\':\'100%\',\'3z-kk\':\'vq\',\'4M\':"El 0.2s 2T",\'7P-1a\':\'2y\',\'5L-1a\':\'1N\',\'7P-Y\':\'2y\',\'5L-Y\':\'1N\'});f5();if(v.pu==1&&o.1r.2C){4t(1m,{\'H0\':\'1\'})}if(v.Xf==1){4t(1m,{"Xd":"Hn","Xc":"Hn"})}4t(1m,{\'2R\':1c,\'x-3N-5K\':\'H2\'});if(v.Xg==1){4t(1m,{\'2m\':\'J\'})}if(2m){1m.44=H;if(v.2m.eL!=1||v.44==1){1m.3R=H}}if(v.Xh==1){4t(1m,{\'Xl\':\'Xk\'})}if(!o.1r.tv){4t(1m,{\'4i\':(v.4i==1&&v.44==0?\'bI\':\'1N\')})}pF();if(!I(1c)){1c=\'\'}if(1c.O(".Ib")>0){6d=H;if(!I(1V.7d)){B fF=k5("Ii.7d.3x","Ii.7d.3x/Xj/2h.8z.7P.js","Xi");if(fF){o.lB=7q(I9,100);fF.nA=E(e){4f(o.lB);o.W.ae();2b=\'ca Xb aP fB\';o.R.5z()}}}F{qz()}}F if(((3B.1M==1&&v.oR!=1)||1c.O(".HT")>0)&&(o.fx.O("7h")!=-1||I(1V.5n))){4z=H;oW=H;3p{if(I(5n)){if(!5n.HG()||(o.1r.6y&&v.X3==1&&!o.1r.5H)||(o.1r.6y&&o.1r.5H&&v.X2==1)||(o.1r.nt&&v.WZ==1)){1x(\'7h X7 \',5n.HG());4z=J}F{if(v.4i==1||v.44==1||v.HE==1||2m){cj(J)}}}F{4z=J}}2Y(2b){4z=J}}F if(1c.O("ws://")==0&&v.X6==1){8u=H;oB()}if(o.1r.tv&&v.44==1&&!4z&&!6d&&!8u){1I(E(){o.W.ae()},100)}if(v.7j==1){I(o.7j)?o.7j.aA():\'\';o.7j=1C Xm()}E I9(){if(I(1V.7d)){4f(o.lB);qz()}}E qz(){6d=H;if(q0()){v.4i==1||v.44==1||v.q5==1?mI(J):\'\'}F{6d=J;1x("ca aP HR")}}E mI(x){1x("ca");v.q5=1;B dz={dJ:60};if(o.3W.S>1){v.9O=0;v.In=H}F{v.In?v.9O=1:\'\'}if(o.9d.S>1){v.e9=0;v.Hg=H}F{v.Hg?v.e9=1:\'\'}if(I(v.cp)){if(I(v.cp.dJ)){if(v.cp.dJ>bj){v.cp.dJ=bj}}if(1Z v.cp=="3z"){X(B 1h in v.cp){dz[1h]=v.cp[1h]}}}2h=7d.aR().fA();js("2h",2h,1);v.Il==1&&!2m?2h.ag({\'pg\':{\'Xn\':7d.XE.XD}}):\'\';B ap=(v.44==1||2m||x);2h.XC(1m,1c,ap);if(v.XB==1){B ao=v.XK;if(ao){if(1Z(ao)=="5c"){3p{ao=ao.22(/7K\'qt/ig,\'"\');ao=4w.6i(ao)}2Y(e){1x("qP ca XI 4w")}}if(1Z(ao)=="3z"){2h.XH(ao)}}}2h.ag({\'aj\':{\'XA\':H,\'Hl\':(dz.Ho==1&&!ap?0:dz.dJ)}});2h.ag({\'aj\':{\'Xz\':dz.dJ}});2h.ag({\'aj\':{\'Xs.qT\':J}});2h.ag({\'aj\':{\'Xq.qT\':J}});if(v.GL==1){2h.Xo(2g,H)}if(v.qJ==1){2h.ag({\'aj\':{\'nS\':{\'nY\':{\'a9\':J,\'6j\':J}}}})}2h.on(7d.aR.2F.Xp,E(1P){if(!qC){1x("ca Hx");B q=Du();Di();o.lE=J;if(v.Xu==1){k6=1C Xx(2h,2m)}9I=2h.Xw();9I?1x("Gw"):\'\';if(v.9O==1){if(v.qJ==1||q>0){o.3f=q;2h.ag({\'aj\':{\'nS\':{\'nY\':{\'a9\':J,\'6j\':J}}}})}F{o.3f=2h.kj("6j").S-1}o.V.dp(o.3f);2h.od("6j",o.3f);2h.od("a9",o.3f)}o.W.ae();qC=H}});2h.on(7d.aR.2F.Xv,E(1P){if(dz.Ho==1&&!ap){2h.ag({\'aj\':{\'Hl\':dz.dJ}})}if(!om){B 7m=2z(o.5B);if(7m>0&&v.e9==1){2h.DT(2h.oX("a9")[7m])}om=H}});2h.on(7d.aR.2F.Yz,E(1P){if(9I){o.W.4l(2h.1d(),2h.1q())}});2h.on(7d.aR.2F.ZE,E(1P){2h.ZC(-1)});2h.on(7d.aR.2F.ZG,E(1P){if(1P.ZH=="6j"&&1P.ZL!=1P.Hc&&v.9O==1){o.3f=1P.Hc;o.V.dp(o.3f);1x("ca I4 "+o.3f)}});2h.on(7d.aR.2F.ZK,E(1P){if(I(1P.pS)){if(1P.pS.1G=="ZJ"){js("GC",1P.pS.1c)}}});2h.on(7d.aR.2F.I1,E(1P){if(1P.2b){if(1Z 1P.2b=="3z"){o.i4=1P.2b.9E}F{o.i4=1P.2b}}2b="ca "+o.i4;o.R.5z()});7X=H}E cj(x){1x("7h");if(o.3W.S>1){v.8m=0;v.Hd=H}F{v.Hd?v.8m=1:\'\'}if(o.9d.S>1){v.bZ=0;v.H7=H}F{v.H7?v.bZ=1:\'\'}o.k8=J;eq=-1;B pT=J;if(v.7l&&v.H8==1){pT=H;v.H8=0}gf={pg:(v.H6==1&&!2m),ZB:(v.4i==1||v.44==1||2m||x)&&!pT,fz:60,pw:60,Zt:(v.H4>0?v.H4*2A:GX),Zs:(v.GY>0?v.GY*2A:GX),Zr:J};if(v.GV==1){gf[\'Zp\']=E(4D,1c){4D.Zu=H}}if(I(v.7u)){if(I(v.7u.fz)){if(v.7u.fz>bj){v.7u.fz=bj}v.7u.pw=v.7u.fz}if(I(v.7u.H3)){v.7u.pw=v.7u.fz=v.7u.H3}if(1Z v.7u=="3z"){X(B 1h in v.7u){gf[1h]=v.7u[1h]}}}1M=1C 5n(gf);js("1M",1M,1);1M.Ik(1c);1M.Zv(1m);1M.on(5n.7C.Zz,E(){1x("7h Hx")});1M.on(5n.7C.ZN,E(1i,1P){!2m?o.W.ae():\'\'});1M.on(5n.7C.10d,E(1i,1P){if(!2m&&v.8m==1&&9i()>1){Dl();o.V?o.V.dp(o.3f):\'\'}});1M.on(5n.7C.10c,E(1i,1P){po()});1M.on(5n.7C.10b,E(1i,1P){po()});1M.on(5n.7C.10j,E(1i,1P){if(!2m){if(1P.gH.8L!=9I){9I=1P.gH.8L;o.V.4r()}9I=1P.gH.8L;if(9I){1x("Gw");o.Gc=1c.O("?us")>-1;if(1m.1q>0&&1m.ek>0){if(1m.1q-1m.ek<10){if(o.gA>0){if(o.gA==1m.ek&&o.GR==1m.1q){o.mx++;if(o.mx>2){o.mx=0;o.gA=-1;1M.9z();cj(H);8o()}}F{o.gA=-1}}F{o.gA=1m.ek;o.GR=1m.1q}}}}}if(v.8m==1){o.3f=1M.jJ;o.V?o.V.dp(o.3f):\'\'}jI()});1M.on(5n.7C.ZR,E(1i,1P){if(I(1P.GD)&&!2m){js("GC",1P.GD.ZQ)}if(eq>-1){1M.DP=eq;eq=-1}pn=H;HM()});1M.on(5n.7C.ZO,E(1i,1P){js("ZX",1P,1)});1M.on(5n.7C.ZW,E(1i,1P){!2m&&v.bZ==1?qk():\'\'});1M.on(5n.7C.Zn,E(1i,1P){if(!2m&&v.bZ==1){pM()}});if(v.YQ==1){k2=1C YP(1M,2m)}F{1M.YN=J}1M.on(5n.7C.I1,E(1i,1P){v.1x==1?bs.1x(1P):\'\';js(1P.1G+\'5n\',1P,0,H);o.qE=1P;if(1P.iy){a6(1P.1G){1o 5n.I0.YX:if(v.pv==1){pe()}F{2b=1P.gH+\' (\'+1P.1G+\')\';o.2w>0||2m||v.8L==1||8u?\'\':o.2w=4O();1M.9z();if(!2m){o.R.5z()}}1n;1o 5n.I0.YM:Id();1n;7c:2b="7h iy 2b, 9z";1M.9z();!2m?o.R.5z():\'\';1n}}F{1x("7h ",1P.1G,1P.gH,(1P.o0?1P.o0.kM:\'\'));js("YL",(1P.o0?1P.o0.kM:\'\'));if(7v>0){7v=2;pf()}}});ad=H}E po(){if(!2m&&v.8m==1&&9i()>1){if(o.3f!=1M.jJ){o.3f=1M.jJ;o.V?o.V.dp(o.3f):\'\';1x("7h I4 "+o.3f)}}}E oB(){if(I(1V.Ia)){if(q0()){if(!I(o.ws)){o.ws=1C YA()}ws=1C Ia(1m,1c,{pg:H});ph=H}F{8u=J;1x("aP HR")}}}E HM(){oG()};G.6m=E(){oG()};E oG(){if(v.FL){if(1m.eC.S>0){if(v.6m==1){1m.eC[1m.eC.S-1].i3="Cv"}F{1m.eC[1m.eC.S-1].i3="3t"}if(!o.6m){o.6m=H;o.V.4r()}}F{if(o.6m){o.6m=J;o.V.4r()}}}}E pe(){1x("YB");!2m&&o.1L?o.W.2Z():\'\';o.W.7V();7v=1;pf(o.1L)}E pf(x){if(7v>0){3k(qV);qV=1I(Ig,v.HN*2A)}}E Ig(){if(7v>0){1x("YJ");if(4z){if(7v==1){1M.Ik(1c)}if(7v==2){1M.9z();cj(H);1m.1L()}}F{4t(1m,{\'2R\':1c})}}}B lU=0;B lW=0;E Id(){B 9t=r4.9t();if(!lU||(9t-lU)>du){lU=r4.9t();1x("7h iy R 2b, 3p to fG");1M.Im();1M.oO();if(o.1L){gk()}}F{if(!lW||(9t-lW)>du){lW=r4.9t();1x("7h iy R 2b, 3p to fG");1M.YI();1M.Im()}F{1x("7h iy R 2b, qp YH")}}}1m.1z(\'YY\',Ga);1m.1z(\'2b\',qY);1m.1z(\'ah\',8o);1m.1z(\'1L\',8U);1m.1z(\'5q\',di);1m.1z(\'Cl\',bH);1m.1z(\'gU\',gT);1m.1z(\'lN\',gS);1m.1z(\'Cj\',bE);1m.1z(\'Ci\',d4);1m.1z(\'9F\',8a);1m.1z(\'Cg\',a5);1m.1z(\'YZ\',DC);1m.1z(\'Cn\',og);1m.1z(\'Cs\',oI);E Ga(){if(!4z&&!6d){!2m?o.W.ae():\'\'}}E qY(){if(!4z&&!6d){if(1m.2b){1x(1m.2b,1m.2b.kM,1m.2b.9E);B x=1m.2b.kM;2b=2g;if(x==1){2b="Zg"}if(x==2){2b="DB"}if(x==3){2b="d0"}if(x==4){2b="aP fB"}1x("Zf eF: ",2b)}if(oW&&v.pv==1){2b=2g;pe()}if(2b!=2g){5z()}}}E 5z(){!2m?o.R.5z():\'\'}E 8o(){!2m?o.R.8o():\'\'}E 8U(){if(!o.1H&&v.7l){1x(\'Dz 1L\');5q();o.W.2N();P}if(4z&&7v>0){}F{if(!2m){B os=o.W.9V()&&o.ov!=1;if(os||b6==-1){B x=J;if(4z){if(I(o.2i)||I(o.5E)){if(os){}F{5q();x=H}}}if(!x){o.R.8U()}}}}}E di(){!2m&&!o.Dy?o.R.di():\'\'}E bH(){!2m?o.R.bH():\'\';if(b6>-1){if(4O()>b6){5q();b6=-1}}}E gT(){!2m?o.R.gT():\'\'}E gS(){!2m?o.R.gS():\'\'}E bE(){if(2m){mB()}F{o.R.bE();q4();if(4z&&7v>0){7v=0;1x("Ze up");1M.oO();gk();o.V.2N()}if(I(v.f9)){2L()}}}G.f9=E(){P(1m.o8/1m.eA)};E mB(){if(1m.eA>0){K(1E,{"1a":1E.2k/(1m.o8/1m.eA)-2z(v.2m.3g)})}F{if(qw<20){1I(mB,100);qw++}}}E q4(){if(v.lw==1){4f(o.pU);o.pU=7q(r0,100);r0()}}E r0(){if(1m){if(1m.eA>0){o.W.Dx(1m.o8/1m.eA);4f(o.pU)}}}E a5(){!2m&&!8u?o.R.a5():\'\'}E d4(){!2m?o.R.d4():\'\'}E 8a(){if(4z&&7v>0){}F{!2m?o.R.8a():\'\'}}E DC(){o.W.pI()}E q0(){B j9=1V.DH=1V.DH||1V.Zm;B iQ=1V.DE=1V.DE||1V.Zl;B jv=j9&&1Z j9.jv===\'E\'&&j9.jv(DF);B Dv=!iQ||iQ.qd&&1Z iQ.qd.Zk===\'E\'&&1Z iQ.qd.6V===\'E\';P jv&&Dv}E Du(){B q=0;if(!2m&&v.9O==1){o.2l=[];B x=2h.kj("6j");if(x.S>1){B y=\'\';X(B i=0;i<x.S;i++){o.2l[i]=I(x[i].1a)?qq(x[i],v.Dj):i;if(o.2l[i]==y||v.Dk==1){y=o.2l[i];if(I(x[i].aV)){o.2l[i]+=" "+iN+" &cv;"+2z(x[i].aV/2A)+\' \'+2G(\'cL\')+\'</6P>\';v.Dk!=1?o.2l[i-1]+=" "+iN+" &cv;"+2z(x[i-1].aV/2A)+\' \'+2G(\'cL\')+\'</6P>\':\'\';y=\'\'}}F{y=o.2l[i]}if(I(v.4g)&&q==0){if(v.4g==o.2l[i]){q=i}}if(I(o.4g)){if(o.4g==o.2l[i]){q=i}}}o.2l[x.S]=2G("2y")}}P q}E Di(){if(!2m&&v.e9==1){o.5B=0;B x=2h.oX("a9");if(x.S>1){X(B i=0;i<x.S;i++){o.6o[i]=i;if(I(x[i].bG)){o.6o[i]=qQ(x[i].bG)}F{if(I(x[i].Dh)){o.6o[i]=2G("6G")+" "+x[i].Dh}}if(I(o.9g)){if(o.9g==o.6o[i]){o.5B=i}}}}1x("ca Dp ",o.5B);o.V.j5(o.5B)}}B iN="<6P C=\'1w:0.5\'>";E Dl(){if(!2m&&v.8m==1){B x=1M.f6;B q=0;o.2l=[];if(x.S>1){X(B i=0;i<x.S;i++){if(I(x[i].1a)){B y=qq(x[i],v.Dm);if(o.2l.O(y)>-1||v.Zb==1){if(I(x[i].aV)){B yi=o.2l.O(y);yi>-1?o.2l[yi]+=" "+iN+" &cv;"+2z(x[yi].aV/2A)+\' \'+2G(\'cL\')+\'</6P>\':\'\';o.2l[i]=y+" "+iN+" &cv;"+2z(x[i].aV/2A)+\' \'+2G(\'cL\')+\'</6P>\'}}F{o.2l[i]=y}if(I(x[i].Dr)){o.8i[i]=x[i].Dr[0]}}F if(I(x[i].6Y)){o.2l[i]=x[i].6Y}F{o.2l[i]=i}if(I(v.4g)&&q==0){if(v.4g==o.2l[i]){q=i}}if(I(o.4g)){if(o.4g==o.2l[i]){q=i}}}if(v.iH==1){o.2l[x.S]=2G("2y")}F{1M.DR=0;1M.i8=0}if(v.Dq==1||q>0){1M.i8=0;if(v.hL=="8e"||(!o.1H&&v.4i==0)){1M.qB=q}F{if(v.hL=="es"){1M.jF=q}}}F{v.iH==1?o.3f=1M.f6.S-1:o.3f=1M.Z5}jI()}o.V?o.V.4r():\'\'}}E jI(){if(o.8i.S>0&&v.bZ==1){qk();pM()}}E qk(){if(!2m&&v.bZ==1){B x=1M.qS;o.6o=[];B 2D;if(x.S>1){X(B i=0;i<x.S;i++){2D=J;if(I(x[i].dN)&&o.8i.S>0){if(x[i].dN!=o.8i[o.3f]){X(B j=0;j<o.8i.S;j++){if(o.8i[j]==x[i].dN){2D=H}}}}if(!2D){o.6o[i]=I(x[i].6Y)?qQ(x[i].6Y):i;if(I(v.9g)){if(v.9g==o.6o[i]){o.5B=i;1M.kb=i}}}}}}}E pM(){if(!2m){B x=1M.qS;B y=1M.kb;if(x[y].dN){if(o.8i.S>0){if(o.8i[o.3f]!=x[y].dN){X(B i=0;i<x.S;i++){if(x[i].6Y==x[y].6Y&&x[i].dN==o.8i[o.3f]){1M.kb=i;y=i;1n}}}}}o.5B=y;1x("7h Dp ",o.5B);o.V.j5(o.5B)}};E qQ(x){B r=x.ka();if(r=="Z9"||r=="en"){x="Z6"}F if(r=="WY"||r=="ru"){x="Русский"}if(1Z(v.E4)=="3z"){x=9c(v.E4[x],x)}P x};E qq(x,y){B r=x.1a+\'p\';if(x.1a<4Y){r=\'pD\'}F if(x.1a>=4Y&&x.1a<=ce){r=\'mV\'}F if(x.1a>ce&&x.1a<=iF){r=\'n4\'}F if(x.1a>iF&&x.1a<=4c){r=\'jL\'}F if(x.1a>4c&&x.1a<=bj){r=\'E5\'}F if(x.1a>bj&&x.1a<=E3){r=\'n8\'}F if(x.1a>E3&&x.1a<=E2){r=\'n5\'}F if(x.1a>E2&&x.1a<=E0){r=\'oP\'}F if(x.1a>E0){r=\'pa\'}if(x.Y==E6&&x.1a<=UX){r=\'mV\'}F if(x.Y==E7&&x.1a<=Ec){r=\'n4\'}F if(x.Y==UU&&x.1a<=UM){r=\'jL\'}F if(x.Y==UF&&x.1a<=UD){r=\'n8\'}F if(x.Y==UC&&x.1a<=UG){r=\'n5\'}F if(x.Y==UH&&x.1a<=UK){r=\'oP\'}F if(x.Y==UJ&&x.1a<=UI){r=\'pa\'}if(v.1l.UY==1&&I(v.1l[\'6Y\'+r])){r=v.1l[\'6Y\'+r]}F{if(y==1){r=2G(r)}if(y==2&&I(x.aV)){r=2z(x.aV/2A)+\' \'+2G(\'cL\')}}P r};E 4O(){if(6d){P 7X?2h.1d():0}F{P 1m.ek}};G.2N=E(){B p=H;if(4z&&!pn){if(!ad){cj(H)}1M.oO()}if(6d&&!7X){mI(H);p=J}if(8u){if(!ph){oB()}ws.1L();p=J}if(1m.C.1g=="-Vf"){G.eN()}p?gk():\'\'};B Vc;E gk(){if(1c!="1N"){B pp=1m.1L();if(pp!==2g){pp.bw(E(){}).2Y(E(2b){1x("Vl",2b.9E);if(2b.9E.O(\'cd\')==-1&&2b.9E.O(\'Vj by\')==-1){if(!o.1r.rK||2b.9E.O(\'dl op V2\')==-1){if(v.DZ==1&&!o.3R){o.W.4Z();B qF=1m.1L();if(qF){qF.bw(E(){}).2Y(E(e){bs.1x(e)})}}F{o.V.2Z();o.W.7V()}}F{if(o.1r.tv&&(4z||6d)){}F{o.V.2Z();o.W.7V();js("V0")}}}})}}}G.mT=E(){if(o.5E||o.2i){if(o.9l){dC()}if(!o.h1&&o.1r.2C&&o.1r.3N){if(!1m.3R){1m.3R=H;mo=H}K(1m,{"1k":"1X","1e":-3L,"1g":-3L});b6=4O();if(!8u){1m.1L()}if(b6==0&&o.2w>0){gl=o.2w}}}};G.eN=E(){if(!o.h1&&(o.1r.2C||o.1r.3N)){K(1m,{"1k":"sO","1e":0,"1g":0});if(I(v.f9)){2L()}if(mo){!o.3R?1m.3R=J:\'\';mo=J}if(gl>0){o.2w=gl;gl=0}b6=-1}};G.2Z=E(){5q()};E 5q(){if(8u){ws.5q()}F{1m.5q()}};G.d5=E(){!1m.8X?2Z():gk()};G.3X=E(x){if(6d&&7X){2h.4d(x)}F{if(4z){if(v.V4==1&&x>0&&qa()){eq=1M.jF;1M.DP=0}}1m.ek=x}};G.4Z=E(){1m.3R=H};G.6T=E(){1m.3R=J};G.42=E(x){1m.1W=x};G.DQ=E(){if(o.DM!=1m){B cd;B 9r;if(o.m8[1m]){cd=o.m8[1m];9r=o.pV[1m]}F{1V.qn=1V.qn||1V.V6;9r=1C qn();cd=9r.U2(1m);o.m8[1m]=cd;o.pV[1m]=9r}B gO=9r.U7();gO.gO.51=v.DO;cd.DN(gO);gO.DN(9r.TW);o.pJ=H;o.DM=1m}};G.mR=E(){P!1m.8X};G.5v=E(){P v.8L==1||8u?H:9I};G.9M=E(){P 1m};G.qg=E(){4t(1m,{\'V\':\'1\'});P H};G.4i=E(){4t(1m,{\'4i\':\'bI\'});if(4z&&!ad){cj(J)}if(6d&&!7X){mI(J)}};G.5N=E(){B 6H="7a";if(1m.8X){6H="8X"}if(1m.ah){6H="ah"}P 6H};G.qe=E(x,y){2m=x;y.1J(1m);1E=y;if(x){if(v.2m.eL!=1){1m.3R=H}F{if(!o.3R){1m.3R=J}}mB();if(o.2l.S>0){if(4z){fX=o.3f;1M.i8=0;1M.jF=0}}}F{if(!o.3R&&v.2m.eL!=1){1m.3R=J}1m.1W=v.1W;q4();if(o.2l.S>0){if(4z){1M.i8=-1;if(fX>-1){fX<1M.f6.S?1M.qB=fX:\'\'}}}}};G.1d=E(){P 4O()};G.1q=E(){B x=1m.1q;if(6d&&7X){x=2h.1q()}if(I(v.4F)){x=v.4F}P x!=TN&&!qb(x)?x:0};G.ak=E(){B x=0;if(1m.8h){if(1m.8h.S>0){B y=4O();X(B i=0;i<1m.8h.S;i++){if((y>=1m.8h.1H(i)||y>=1m.8h.1H(i)-100)&&y<=1m.8h.4F(i)){x=1m.8h.4F(i)}}x==0?x=1m.8h.4F(1m.8h.S-1):\'\'}}if(I(v.4F)){x>v.4F?x=v.4F:\'\'}P x};G.2y=E(){P qa()};E qa(){B x=J;if(4z){if(ad){x=1M.DR}}F if(6d){if(7X){B y=2h.TK();x=y.aj.nS.nY.6j}}P x}G.3M=E(){P{"Y":1m.o8,"1a":1m.eA}};G.2R=E(x){1c=x;o.ac!=2?o.ac=J:\'\';if(6d){if(2h){2h.TL(x)}}F if(4z){4z&&1M?1M.9z():\'\';cj(H);qy()}F{4t(1m,{\'2R\':x,\'44\':0});pF();5q()}};E pF(){if(o.1r.6y){B y=1m.eC;if(y){X(B i=0;i<y.S;i++){y[i].i3="TP"}}y=1m.qS;if(y){X(i=0;i<y.S;i++){y[i].qT=(i==0?1:0)}}if(1V.TQ){1m.1z(\'TU\',E(1i){o.5K=1i.TT=="TS";!2m?o.W.hE():\'\'})}}qy()}G.5K=E(){1m.TR()};G.8b=E(){dC()};E qy(){if(o.1r.3N){if(I(1m.U9)&&!o.1r.9y){o.8b=H}if(1S.Ur&&!1m.Ut){o.8b=H}}}E dC(){if(o.1r.6y){if(1m.Ux==="nK-in-nK"){1m.DS("ch");o.9l=J}F{1m.DS("nK-in-nK");o.9l=H}}F{if(!1S.Uw){2t(\'1m.Uv().bw(p => {o.9l = H;}).2Y(2b => {o.9l = J;});\')}F{2t(\'1S.Uu().bw(ok =>{o.9l = J;}).2Y(2b => {});\')}}};E og(){o.9l=H};E oI(){o.9l=J};G.DX=E(x){if(7X){B x=2z(x);if(x==2h.kj("6j").S){o.3f=2h.Um(\'6j\')}F{2h.ag({\'aj\':{\'nS\':{\'nY\':{\'a9\':J,\'6j\':J}}}});2h.od(\'6j\',x);2h.od(\'a9\',x)}}};G.Uc=E(x){if(o.ws){o.ws.DW(ws,x,-1)}};G.Uf=E(x){if(o.ws){o.ws.DW(ws,-1,x)}};G.DV=E(x){if(7X){if(1m.8h.S>0){2h.DT(2h.oX(\'a9\')[2z(x)])}}};G.DU=E(x){if(ad){B y=2z(x);if(x==1M.f6.S){y=-1;1M.i8=-1}if(v.hL=="es"){1I(8a,4c);1M.jF=y}if(v.hL=="8e"){1x("7h 8e Ug "+y);1M.qB=y}if(y==-1){o.3f=1M.jJ}jI()}};G.jY=E(){P 1M};G.km=E(){P 2h};G.9i=E(){P 9i()};E 9i(){B x=0;if(ad){if(1M.f6){x=1M.f6.S}}P x}G.bp=E(){P bp()};G.f5=E(){f5()};E f5(){if(1m){if(v.Uk==1||v.3j==1){if(v.Uj==1||v.3j==1){K(1m,{\'3z-kk\':\'3j\'})}F{K(1m,{\'3z-kk\':\'CN\'})}}F{K(1m,{\'3z-kk\':\'vq\'})}}}G.4T=E(){2L()};E 2L(){if(v.f9){2Q(\'1D\',7f(v.f9).22(\'/\',\':\'))}}E bp(){B x=0;if(7X){x=2h.kj("6j").S}P x}G.De=E(x){if(ad){1M.kb=2z(x)}};G.gR=E(x,y){if(y=="1M"&&ad&&k2){k2.Ui(x)}if(y=="2h"&&7X&&k6){k6.Vn(x)}};G.fc=E(x){if(x){1m.Wr=x}};G.q8=E(){B x=1m.Wp;B y=[];X(B i=0;i<x.S;i++){if(x[i].j8.ka()==\'7m\'){x[i].6s("er",ql);y.2W(x[i])}}X(B i=0;i<y.S;i++){1m.3a(y[i])}};G.CA=E(x,y,z){if(x!=\'\'){if(x.O(\' or \')>0){B xx=x.2I(\' or \');x=xx[0]}B 7m=1S.1K(\'7m\');7m.5X(\'2R\',x);7m.5X(\'bx\',y);7m.5X(\'Ww\',\'Cz\');7m.5X(\'i3\',\'Cv\');if(z){7m.5X(\'7c\',\'\')}1m.1J(7m);7m.1z("er",ql)}};E ql(e){if(e.4h.bx&&o.4P){X(B i=0;i<o.3i.S;i++){if(o.3i[i]==e.4h.bx){o.4P.9G(i)}}}};G.ly=E(){P 2b?2b:\'\'};G.43=E(){4f(o.lB);4z&&1M?1M.9z():\'\';6d&&2h?2h.WC():\'\';8u&&ws?ws.2D():\'\';1m.6s(\'2b\',qY);1m.6s(\'ah\',8o);1m.6s(\'1L\',8U);1m.6s(\'5q\',di);1m.6s(\'Cl\',bH);1m.6s(\'gU\',gT);1m.6s(\'lN\',gS);1m.6s(\'Cj\',bE);1m.6s(\'Ci\',d4);1m.6s(\'9F\',8a);1m.6s(\'Cg\',a5);1m.6s(\'Cn\',og);1m.6s(\'Cs\',oI);1m.2R=\'\';if(1E.j8=="DI"){1E.oM.7H.3a(1m)}F{1E.3a(1m)}1m=2e}};B sI=E(){B b=[];B eM=[];B 53=[];B 9F=J;B ls;B 9h=J;B 1l;B 1f;if(o.5d){o.5d.1t();o.5d=2e}B lS;o.4W=[0.25,0.5,0.75,1,1.25,1.5,2];if(v.1l.VC==1&&I(v.1l.gY)){v.1l.gY=v.1l.gY.22(/\\n/ig,\'\');o.4W=v.1l.gY.2I(",")}o.ha=o.4W.O(\'1\')>-1?o.4W.O(\'1\'):o.4W.O(1);o.8W==3?o.8W=o.ha:\'\';!I(v.1l.1D)?v.1l.1D=5:\'\';o.Ct=[\'+ \'+v.1l.1D+\'%\',\'&VF; \'+v.1l.1D+\'%\',\'100%\'];B kp=J;B 8q=0;B ky=0;B ef=J;B wc=H;B bg=1C E8();B 1l;B 6e=[];B oF=J;B oK=J;B hb=0;B bB=[];if(v.dK.1k=="V-2j"){v.dK.1k="V"}X(B y in v){if(v.2J(y)){if(y.O("9f")==0&&v[y]){!I(v[y].oz)?v[y].oz=v[y].6e:v[y].6e=v[y].oz;6e[v[y].6e]=y;if(v.dK.1k!="V"){if(v[y].1k=="V-2j"){bB.2W([y,v[y].6e]);oF=H}F{if(v[y].1k=="V"||v[y].1k==2g){oF?oK=H:\'\'}}}hb<v[y].6e?hb=v[y].6e:\'\'}}}if(oK){bB.Cr(E(a,b){P a[1]-b[1]});X(B i=0;i<bB.S;i++){6e[v[bB[i][0]].6e]=2e;v[bB[i][0]].6e=hb+1;hb++;6e[v[bB[i][0]].6e]=bB[i][0]}}if(v.1A.1t==1&&v.1A.cJ==1){o.1A=1K("1R");o.1Q.1J(o.1A);K(o.1A,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'Y\':\'100%\',\'1a\':\'100%\',\'4M\':\'1g 0.3s 8I-6z\',\'3I-2F\':\'1N\'})}B 7b=1K("1R");if(v.1A.1t==1&&v.1A.cJ==1){o.1A.1J(7b)}F{o.1Q.1J(7b)}K(7b,{\'1k\':\'1X\',\'1e\':0,\'2K\':0,\'Y\':\'100%\',\'1a\':v.1A.h});7b.aX=E(){!o.1r.2C?o.W.Cq():\'\'};if(o.tf){3c(bg.c());3c(7b)}X(B i=1;i<6e.S;i++){if(6e[i]){B y=6e[i];if(y){if(o.1r.2C){if(v[y].1j=="1W"&&v.Vq==1&&o.1r.9m){v[y].iJ=0}F{if(v[y].1j=="1W"||(v[y].1j=="2o"&&v.Vo)){v[y].on=0}}}if(o.tf){v[y].on=0}if(v[y].on==1){B 1j=v[y].1j;if(1j=="2M"||1j=="1W"){b[y]=1C F8(y,1j);b[y].2L(b[y].s("w"))}F{b[y]=1C G6(y)}eM.2W(y);if(b[y].g("1j")=="1T"){if(b[y].s("1F")==\'\'){if(b[y].s("B")!=\'\'){if(!I(v[b[y].s("B")])){b[y].2a("2q",J)}}F{b[y].2a("2q",J)}}}if(b[y].g("1j")=="4C"){B lu=b[y].s("2S");if(lu){if(lu.O("2Q:")==0&&lu.O(",0/1")>0){B z=lu.2I(",");2Q(z[0].1u(4))==0?b[y].bh(0):\'\'}}}b[y].2a("1D",b[y].s("1D"))}}}}if(I(v.1l)){if(1Z(7t)==\'E\'){1l=1C 7t("1l");v.1l.9a==1?1l.1v():1l.1t()}F{o.Vp=H}}if(I(v.1f)){if(1Z(7t)==\'E\'){1f=1C 7t("1f");if(I(o.1f)){1f.v4(o.1f);if(v.1f.o4==0||!I(v.1f.o4)){v.1f.9a==0?1f.1t():\'\'}F{1f.1v()}}F{1f.1t(1)}i5()}}if(o.wr){o.2X=1C ol()}uZ();2L(H);4H();vo();wc=J;E CJ(U){B x=0;B Vy=J;if(U){if(U.g("1j")==\'2M\'){x=53.1e+U.s("3K");if(53.ee!=2e){}F{53.ee=[]}}F{if(53.ee!=2e){B bR=U.g("Y")+U.s("4k")+U.s("3K");if(kI(U)){bR=0}if(U.s("3t")==1&&!U.g("1v")){bR=0}if(U.s("9S")>0){bR=0}x=bg.g("w")-v.1A.l9*1-bR+U.g("Y")/2+U.s("3K");B i=0;53.2j-=bR;X(i=0;i<53.ee.S;i++){B bT=b[53.ee[i]];if(bT.s("9S")>0){K(bT.c(),{"1e":(bT.g("x0")-bR)})}F{K(bT.c(),{"1e":(bT.g("x")-bR)})}bT.2a("x0",bT.g("x"))}53.ee.2W(U.g("1h"));U.2a(\'ck\',1)}F{if(U.s("3t")==1&&!U.g("1v")){if(U.g("1j")=="1W"){if(U.s("1t")==1&&U.s("iJ")==1&&ef){8q+=U.g("Y")+U.s("3K")+U.s("4k");ef=J}}}F{if(U.s("9S")>0){x=53.1e+U.s("3K")+U.s("4k")}F{B 2D=J;if(U.g("1j")=="1W"){if(U.s("1t")==1&&U.s("iJ")==1){if(!o.cA&&!o.8s){2D=H;ef=J}F{if(!ef){8q-=U.g("Y")+U.s("3K")+U.s("4k");ef=H}}}}if(kI(U)){2D=H}if(!2D){53.1e+=U.g("Y")/2+U.s("3K");x=53.1e;53.1e+=U.g("Y")/2+U.s("4k")}F{x=53.1e}}}}}}P x}E w9(U){B Y=o.2o&&v.1A.gL==0?o.9v:o.3V;B 1a=o.4S;B 9N=0;if(U!=bg){9N=Y/2+U.s("3K")-U.s("4k")}B dE=1a/2;B pA=U.g("Y");B l1=U.g("1a");B 1k=U.s("1k");if(1k.O("7g")>-1){9N=o.3V/2+U.s("3K")-U.s("4k")}if(1k.O("1g")==0){dE=l1/2+(U.s("Cp")*o.4S/100)}if(1k.O("2K")==0){dE=o.4S-(U==bg?l1:l1/2)-(U.s("Co")*o.4S/100)}if(1k.O("2j")>-1){9N=o.3V-pA/2+U.s("3K")-U.s("4k")-(U.s("Vw")*o.3V/100)}if(1k.O("1e")>-1){9N=pA/2+U.s("3K")-U.s("4k")+(U.s("nU")*o.3V/100)}if(1k=="cK"){9N=-o.rI/2+(U.s("nU")*o.rI/100)+U.s("3K")-U.s("4k");dE=-o.n3/2-(U.s("Co")*o.n3/100)+(U.s("Cp")*o.n3/100)}if(1k.O("V")>-1){B cx=CJ(U);9N=(bg?(bg.c()?4V(bg.c().kR):0):0)+cx;if(1k=="V-2j"){9N+=8q}if(v.1A.1k=="1g"){dE=v.1A.h/2-(v.cR<0?v.cR:0)}F{dE=1a-v.1A.h/2}}P{x:9N,y:dE+U.s("7s")-U.s("9b")}}E 2L(8z){B w=o.2o&&v.1A.gL==0?o.9v:o.3V;B h=o.4S;K(bg.c(),{\'1g\':(v.1A.1k=="1g"?0:o.4S-v.1A.h)-v.cR});bg.2a("y0",(o.4S-v.1A.h-v.cR));if(v.1A.gL==0&&bg){K(bg.c(),{\'Y\':w,\'1e\':0,\'2B-1e\':0});bg.2a("w",w);if(o.2o){K(bg.c(),{\'1e\':\'50%\',\'2B-1e\':-w/2})}}53={"1e":v.1A.l9*1,"2j":(bg.g("w")-v.1A.l9*1)};B oY=J;if(!bg.g("1v")){bg.2a("2q",H);oY=H}B 1h;X(B i=0;i<eM.S;i++){1h=eM[i];if(b[1h]){B cc=w9(b[1h]);if(cc){if(b[1h].s("5J")=="1k"){if(b[1h].g("x0")!=cc.x||b[1h].g("y0")!=cc.y){lZ(1h)}}b[1h].2a("x0",cc.x);b[1h].2a("y0",cc.y);if(b[1h].s("3t")==1&&!b[1h].g("1v")&&!8z){ux(b[1h])}F{K(b[1h].c(),{"1k":"1X","1e":b[1h].g("x0"),"1g":b[1h].g("y0")})}}}}if(oY){bg.2a("2q",J)}8q=0;X(1h in b){if(b.2J(1h)){if(b[1h].s("1k")=="V-2j"&&b[1h].g("1j")!="2M"&&8q>-1){8q=53.2j-53.1e}if(b[1h].g("1j")=="2M"&&bg){B dx;if(b[1h].s("Vv")==1){dx=b[1h].s("w")}F{if(b[1h].s("1k").O("V")>-1){dx=53.2j-53.1e-b[1h].s("3K")-b[1h].s("4k");K(b[1h].c(),{"1e":(4V(bg.c().kR)+53.1e+b[1h].s("3K")+dx/2)});8q=-1}F{dx=bg.g("w")-b[1h].s("3K")-b[1h].s("4k");K(b[1h].c(),{"1e":(4V(bg.c().kR)+b[1h].s("3K")+dx/2)})}}b[1h].2a("x0",b[1h].g("x"));b[1h].2L(dx)}}}if(1l){hu(1l)}if(1f){hu(1f)}if(kp||o.2o||ky!=8q){4H()}}E ux(b){B 1e=0;B 1g=0;if(b.s("1k").O("2j")>-1&&b.s("1k").O("V")==-1){1e=o.3V+b.g("Y")+10}if(b.s("1k").O("1e")>-1){1e=-b.g("Y")-10}if(b.s("1k").O("1g")>-1){1g=-b.g("1a")*2}if(b.s("1k").O("2K")>-1||b.s("1k").O("V")>-1){1g=o.4S+b.g("1a")+b.g("Y")+10}if(1e>0){K(b.c(),{"1e":1e})}if(1g>0){K(b.c(),{"1g":1g})}}E hu(x){B 1g=-3L;x.hw();B y=o.4S-v.1A.h*(x.s("1k").O("1g")>-1?1:2);B hl=y-(o.2o&&!o.1r.2C?(100+x.s("kS")*1):x.s("kS"));hl<100?hl=100:\'\';K(x.c(),{\'5L-1a\':hl});x.co()?K(x.co(),{\'5L-1a\':hl}):\'\';if(x.g("1v")){1g=o.4S/2-x.g("1a")/2+x.s("7s")-x.s("9b");if(x.s("1k").O("1g")>-1){1g=x.s("7s")-x.s("9b")}if(x.s("1k").O("2K")>-1){1g=o.4S-v.1A.h-x.g("1a")+x.s("7s")-x.s("9b")}1g<0?1g=0:\'\'}if(x.s("1k").O("2j")>-1){K(x.c(),{"1k":"1X","2j":x.s("4k")-x.s("kX"),"1g":1g})}F if(x.s("1k").O("1e")>-1){K(x.c(),{"1k":"1X","1e":x.s("3K"),"1g":1g})}F{if(x.g("1h")=="1f"&&x.s("3J")==1){K(x.c(),{"1k":"1X","1e":o.3V/2-x.g("Y")/2+x.s("3K")/2-x.s("4k")/2,"1g":1g})}F{B l=o.3V/2-x.g("Y")/2+x.s("3K")-x.s("4k");K(x.c(),{"1k":"1X","1e":(l>0?l:0),"1g":1g})}}x.8Z()};G.dQ=E(1h){B U=b[1h];B 1j=U.g("1j");if(1j){B d=1C 6B();o.9u=d.9s();if(1j&&1j!=""){5e(U)}}};G.p5=E(z,x,y){X(B 1h in b){if(b.2J(1h)){if(b[1h].s(z)==x){b[1h].2a(y?"6h":"3c")}}}};G.tJ=E(x,s){B y=7I(s,x);P y};E 5e(U,1G){o.mN=H;lS=U;B a=U.g("1j");if(a=="1L"){o.W.2N();if(v.2c.on==1&&v.2c.2H==1&&v.2c.p1==1){7i(\'1L\',1)}}F{if(a=="5q"){o.W.2Z();if(v.2c.on==1&&v.2c.2H==1&&v.2c.p1==1){7i(\'1L\',0)}}if(a=="2D"){o.W.p2()}}if(a=="D4"){o.W.3X(0,J)}if(a=="2o"){!o.5V?o.W.7B():\'\'}F{if(a=="D5"){o.W.8O()}}if(a=="2M"){B ld=o.R.1q();B lt=U.g("2E")*ld;if(v.4o>0){ld-=v.4o;lt=U.g("2E")*ld+v.4o}if(v.D3>0){if(v.D3/ld<=1-U.g("2E")){P}}o.W.3X(lt,H);if(o.3v){o.3v.tK(lt,ld);o.2w>0?o.2w=2g:\'\'}}if(a=="1W"){B x=U.g("2E");x<0.W9?x=0:\'\';x>1?x=1:\'\';if(U.s("eY")=="5h"){x=4G(x*o.4W.6r(-1)[0]).ur(1);o.W.8y(x,1)}F{if(o.5r&&v.sG==1){3w.7w("sD",x);if(U.g("2E")>0||o.1r.9y||v.nc==0){3w.vL("il")}F{3w.7w("il",1)}}o.W.42(x)}}if(a=="5o"){if(o.5r&&!o.1r.9y&&v.nc==1){3w.7w("il",1)}o.W.4Z();if(v.2c.2H==1&&v.2c.D2==1){7i(\'5o\',0)}}F{if(a=="c5"){if(o.5r){3w.vL("il")}o.W.6T();if(v.2c.2H==1&&v.2c.D2==1){7i(\'5o\',1)}}}if(a.O("1d")==0){U.W6()?U.gu():U.On()}if(a=="nr"){o.R.sC()}if(a=="1D+"){o.R.aQ(0.1)}if(a=="1D-"){o.R.aQ(-0.1)}if(a=="1D"){o.R.aQ(0)}if(a=="8L"){2Q("D0");U.2a("s8",1);U.2a("mM",1)}if(a=="2X"){js("2X");uJ()}if(a=="1l"){if(1l){if(!1l.g("1v")){1l.1v()}F{1l.1t()}}}if(a=="1f"){if(o.dT==a){P}if(I(v.1f)){if(1f.g("1v")){1f.1t()}F{1I(E(){1f.1v()},100)}}}if(a=="8e"){o.V.d8()}if(a=="f0"){o.V.f7()}if(a=="4C"){if(U.s("fJ")==1&&U.s("2S")!=""){B x=4p(U.s("2S"));if(o.dT==a+x){P}if(x.O(\'{1d}\')>-1){x=x.22(\'{1d}\',(I(o.3v)?o.3v.av().t:o.R.1d()))}if(x.O(\'{3r}\')>-1){x=x.22(\'{3r}\',o.R.bS())}if(x.O(\'{1T}\')>-1){x=x.22(\'{1T}\',v.1T.22(/,/ig," "))}if(x=="5K"){o.R.fb()}if(x=="VR"){o.W.3X(U.s("nU")*o.R.1q()/100);!o.1L?o.W.2N():\'\'}U.s("D6")==1?o.W.2Z():\'\';B y=x.2I(",");if(x.O("2Q:")==0){B z=x.1u(4).2I(";");X(B i=0;i<z.S;i++){y=z[i].2I(",");if(y.S>1){if(y[0]==\'4d\'){if(v.2c.2H==1&&v.2c.uO==1){7i(\'4d\',y[1]>0?1:0)}}2Q(y[0],y[1],U);y[1]==\'0/1\'?tF():\'\'}F{if(y[0]=="D7"&&v.VO==1){B ss=2Q(y[0]);if(ss){if(ss.O("1P")>-1){B 41=1S.1K(\'41\');41.5X(\'2R\',ss);K(41,{1k:"w0",2j:(I(v.kQ)?v.kQ:20),2K:(I(v.kQ)?v.kQ:20),Y:0,4M:"Y 0.5s bM-VU(.75,-0.5,0,1.75)"});41.C.4A=Db;1S.7H.1J(41);1I(E(){K(41,{Y:(I(v.Da)?v.Da:4Y)})},1);41.aX=E(){G.5g.3a(G)}}}F{1x(y[0]+" 2b")}}F{2Q(y[0])}}}}F{if(x.O("js:")==0){if(x.O("(")>0&&x.O(")")>0){2t(x.1u(3))}F{2t(y[0].1u(3)+\'(\'+(I(y[1])?\'"\'+y[1]+\'"\':\'\')+(I(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}}if(x.O("1i:")==0){uQ(x.1u(6),o.R.1d())}if(x.O("2X:")==0&&o.2X){o.2X.2Q(x.1u(6))}if(x.O("uN:")==0&&o.5O){2Q("uN",x.1u(7))}if(x.O("3o")==0||x.O("/")==0||x.O("?")==0||x.O("1c:")==0){x.O("1c:")==0?x=x.1u(4):\'\';1V.5Y(x,U.s("D8"))}if(x.O("6J")==0){o.W.l8()}if(x=="2Q:8b"){o.R.dC()}}if(x.O("1l#")>-1){if(1l){B si=x.1u(9).2I(",");if(1l.g("1v")&&1l.g("5Y")==si[0]){1l.1t()}F{X(B i=0;i<si.S;i++){i==0?1l.1v():\'\';1l.5Y(si[i])}}}}if(x.O("1l:")>-1&&v.1l.152==1){if(!o.5d){o.5d=1C 151()}if(1G=="8R"){o.5d.1v(x)}F{o.5d.nx(x)}}if(x=="FS"){o.W.ec();o.vI=0;U.2a("3c");B bl=7I("2S","47");if(bl){bl.2a("3c")}}if(x=="47"){U.6p("OK");U.s("nB")?1V.9C.8D=4p(U.s("nB")):\'\'}}}};G.1T=E(t){B y=J;X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="1T"){if(b[x].s("B")==t||t=="1T"){if(b[x].s("1t")==1&&b[x].s("sc")==1&&o.1L){y=H}if(v[t]==\'\'||b[x].s("1p")==\'\'||y){b[x].2a("2q",J)}F{b[x].2a("2q",H)}b[x].6p(v[t])}}}}uU()};G.D9=E(){uU()};G.uV=E(){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="4C"){if(b[x].s("1G")=="1F"){b[x].8t()}}}}};E uU(){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="4C"){if(b[x].s("1G")=="1F"){b[x].Eq(H)}}}}}E uJ(){if(I(o.2X)){o.2X.hm()}}G.CY=E(){uJ()};G.CK=E(){if(v.1T!=\'\'){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="1T"){B y=J;if(!b[x].g("1v")){y=H;b[x].2a("2q",H)}b[x].6p(v.1T);if(y){b[x].2a("2q",J)}}}}}};G.156=E(){uZ()};E uZ(){if(v.cf){if(1Z(v.cf)=="3z"){X(B x in v.cf){if(v.cf.2J(x)){gB(x,v.cf[x])}}}}};G.CP=E(y,z){gB(y,z)};E gB(y,z){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="4C"&&b[x].s("1G")=="1F"){if(b[x].s("4x")==y){if(!b[x].g("1v")||b[x].s("3t")==1){b[x].2a("Ef");b[x].2a("2q",H)}b[x].gB(z)}}}}};G.4T=E(){2L()};G.15m=E(){2L(H)};G.vh=E(){hu(1l)};G.hw=E(){hu(1f)};G.2N=E(){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="1L"){b[x].On()}}}if(G.dh()&&v.1f.e7==1){G.aU()}o.1L=H;4H()};G.2Z=E(){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="5q"||b[x].g("1j")=="2D"){b[x].gu()}}}if(1f){if(v.1f.Fd==1&&!1f.4u()){1f.1v()}}o.1L=J;G.6O();4H();if(v.1A.1t==1&&v.1A.eU==1){hJ(H)}};G.4Z=E(){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="5o"){b[x].On()}G.42(0)}}4H()};G.6T=E(){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="c5"){b[x].gu()}}}if(v.1W<0.1){v.1W=0.5;o.W.42(v.1W)}F{G.42(v.1W)}4H()};G.42=E(1W,y){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="1W"){if(b[x].s("eY")!="5h"){b[x].6U(1W,1,(y=="no"?y:H))}}if(b[x].g("1j")=="5o"){b[x].r9(1W)}}}4H()};G.7B=E(){B bl=7I("1j","2o");if(bl){bl.On();bl.2a("1D",bl.s("1D"))}4H();kp?1I(4H,4c):\'\';et()};G.8O=E(){B bl=7I("1j","2o");if(bl){bl.gu()}2L();4f(o.hN);4H()};G.8o=E(){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="1L"){b[x].rU()}}}};G.Hs=E(){4H()};E 4H(){X(B x in b){if(b.2J(x)){if(b[x].g("1j")!="eK"){bo(b[x])}}}bo(bg);if(ky!=8q){ky=8q;2L()}if(v.1A.1t==1&&v.1A.cJ==1){eZ(!o.e4&&!o.5m&&!o.2o&&o.1L&&v.1A.eX!=1&&!o.5V)}};E hM(){B 1v=9h&&v.1A.hY==1;if(!o.1L&&v.1A.1t==1&&v.1A.eU==1){1v=J}if(1v){X(B x in b){if(b.2J(x)){if(b[x].g("1j")!="eK"){bo(b[x],J)}}}K(o.1Q,{"5R":"7c"});o.ku=H;bo(bg,J);if(bg.g("1v")){hW()}eZ(J)}}E hJ(){B 1t=o.1L&&v.1A.hY==1&&!o.3D&&!o.cI;if(!o.1L&&v.1A.1t==1&&v.1A.eU==1){1t=H}if(1l){if(1l.g("1v")&&o.vp){1t=J}}if(1t){X(B x in b){if(b.2J(x)){if(b[x].g("1j")!="eK"){bo(b[x],H)}}}bo(bg,H);if(!bg.g("1v")){9h=H;o.R.w8();if(o.1L){K(o.1Q,{"5R":"1N"});o.ku=J}}eZ(H)}}E et(){if(v.1A.hY==1){if(v.1A.eX==1&&!o.2o&&!o.bm){}F{4f(o.hN);o.hN=7q(hJ,((v.1A.8B>0?v.1A.8B:v.1A.hq)*2A))}}}E bo(U,dc){B 1t=J;B 1v=J;B db=J;if(v.1A.1t==1){if(!o.e4&&!o.5m&&!o.2o&&o.1L&&v.1A.eX!=1&&!o.5V){1t=H;1v=J;db=H}F{1t=J;1v=H}if(I(dc)&&!o.5V){1t=dc;1v=!1t}if(v.1A.1t==1&&v.1A.cJ==1&&(U.s("1k").O("V")==0||U.s("1j")=="2M")){1t=J;1v=H}if(v.1A.eU==1&&!o.1L){1t=H;1v=J;db=J}}F{if(U.s("1t")!=1){1v=H}}if(1v&&!o.ku){K(o.1Q,{"5R":"7c"});o.ku=H}B a=U.g("1j");if(a=="4C"&&U.s("1k").O("V")==-1){1t=J;1v=H}if(o.5V){if(a=="2M"){if(o.R.1q()==-1){1t=H;1v=J}}}B uL=J;B hp=kI(U);if(U.s("1t")==1){if(U.s("15C")==1){if(db||dc||(o.1L&&!o.5m)){!db&&!dc?\'\':hp=H}}if(U.s("15B")==1){if(o.1L&&!o.5m){hp=H}}if(U.s("CX")==1||U.s("CR")==1||U.s("Fy")==1){kp=H}}if(hp){1t=H;1v=J}F{!1t?1v=H:\'\'}if(U.s("1j")=="1W"){if(U.s("1t")==1&&U.s("iJ")==1){1t=H;1v=J;if(!db&&(o.8s||o.cA)&&!dc&&U.s("cm")!=1){1t=J;1v=H}F{uL=H}}}if(o.df||(!o.1H&&v.1A.1t==1&&v.1A.vC==1)||(!o.bI&&v.1A.1t==1&&v.1A.Fv==1)){if(U.s("1k").O("V")>-1||U.s("1k").O("2K")>-1){1t=H;1v=J}if(v.1A.eX==1&&!o.2o){1t=J;1v=H}}if(1l){if(1l.g("1v")&&v.1l.9a!=1){db=J;dc=J}}if(a=="2X"){if(I(o.2X)){if(o.2X.4u()){1t=H;1v=J;U.2a("5J","1N")}}}if(a=="1f"||a=="8e"||a=="f0"||U.s("CO")==1){if(1f){if(1f.4u()&&U.s("CO")!=0){1t=H;1v=J;U.2a("5J","1N")}}F{1t=H;1v=J}}if(o.15A==1){1t=H;1v=J}if(uL){B cc=w9(U);if(cc){cc.y>0?U.2a("y0",cc.y):\'\';K(U.c(),{"1k":"1X","1g":U.g("y0")})}}if(1t){c9(U,(wc?H:J))}if(1v){FD(U)}if(U==bg){if(!1t&&1v){hW();6h(7b);9h=J}if(1t&&!1v){o.R.w8();cg();3c(7b);9h=H}if(1f){if(v.1f.9a==1&&!1f.4u()){if(1v||o.df){if(v.1f.CL==1&&o.2o){}F{if(!1f.g("1v")){if(v.1f.CM==1){!o.1L?1f.1v():\'\'}F{1f.1v()}}}}F{if(1t&&1f.g("1v")){1f.1t()}}}}}};E kI(U){B x=J;B a=U.g("1j");if(U.s("1t")==1){if(U.s("sc")==1){o.1L?x=H:\'\'}if(U.s("eU")==1){!o.1L?x=H:\'\'}if(U.s("15y")==1){o.1r.w6?x=H:\'\'}if(U.s("15p")==1){o.1r.2C?x=H:\'\'}if(U.s("CR")==1){if(o.3V>U.s("CS")){U.2a("cm",1);x=H}F{U.2a("cm",0)}}if(U.s("CX")==1){if(o.3V<=U.s("CW")){U.2a("cm",1);x=H}F{U.2a("cm",0)}}if(U.s("15u")==1){o.1H?x=H:\'\'}if(U.s("14r")==1){if(o.1H||!o.3v||o.R.5v()){x=H}if(o.3v){if(o.3v.av().t==0){x=H}}}if(U.s("vC")==1){!o.1H?x=H:\'\'}if(U.s("nD")>0){x=H}if(U.s("14q")==1){if(I(U.s("CU"))){3B[U.s("CU")]?x=H:\'\'}}if(U.s("14c")==1){if(!I(U.s("cf"))){x=H}}if(U.s("14g")==1){if(I(U.s("Ee"))){!3B[U.s("Ee")]?x=H:\'\'}}if(U.s("14i")==1&&o.1r.5H){!o.1H||o.kC?x=H:\'\'}if(U.s("14y")==1){!o.R.ah()?x=H:\'\'}if(U.s("14z")==1){!o.R.5v()?x=H:\'\'}if(U.s("14P")==1){!o.5m?x=H:\'\'}if(U.s("14M")==1){!o.2o?x=H:\'\'}if(U.s("Fy")==1){o.2o?x=H:\'\'}if(U.s("14Q")==1){!o.3R?x=H:\'\'}if(U.s("14V")==1){o.R.5v()&&o.R.bS().O("?us")==-1?x=H:\'\'}if(U.s("Fb")==1){6b(o.29)?x=H:\'\'}if(U.s("Fv")==1){!o.bI?x=H:\'\'}if(U.s("14T")==1){o.bI?x=H:\'\'}if(U.s("15K")==1){o.lI?x=H:\'\'}if(U.s("16O")==1){!o.lI?x=H:\'\'}if(U.s("ED")==1){if(U.g("gG")){x=H}}if(U.s("16M")==1){!o.ab?x=H:\'\'}if(U.s("16E")==1){o.ab?x=H:\'\'}if(U.s("16H")==1){if(v.4i==1&&v.dD==1){if(o.2x=="4j"&&!I(v.29)&&v.uT==0){if(!o.1H||o.R.5N()=="ah"){if(v.29==\'\'){}F{x=H}}}}}}if(a=="4C"){if(U.s("2S")){if(U.s("2S")=="2Q:5K"||U.s("2S")=="5K"){if(!o.5K&&!o.h1){x=H}}if(U.s("2S")=="2Q:8b"){if(!o.8b||(!o.1H&&v.4i==0)){x=H}}if(U.s("2S")=="2Q:FF"){if(!o.lI){x=H}}if(U.s("2S").O("6m")>-1){if(!o.6m){x=H}}}}if(a=="1f"||a=="8e"||a=="f0"){if(1f){if(1f.4u()){x=H}}F{x=H}}if(a=="1l"){if(1l){if(1l.4u()){x=H;U.2a("5J","1N")}}F{x=H}}if(U.g("1G")=="1F"){if(U.g("S")==0){x=H}}if(U.g("1l#")){if(!U.g("2a#46")){x=H}}if(U.s("52")==1){B cb=1S.7N("16I"+v.id);if((o.R.1q()==0&&o.R.1d()==0)||!o.62||!6b(cb)||!o.16W){x=H}}if(U.s("s5")==1){!x?U.2a("s5",1):\'\'}if(a=="1q"){if(o.R.5v()){x=H}}if(U.g("1h")=="sd"&&o.1r.2C){if(o.df&&o.1r.9m){x=H}}P x}E c9(U,uG){if(U.g("1v")){if(o.bm||U.s("5J")=="1N"||uG){U.2a("2q",J)}F{FB(U)}U.2a("1v",J)}};E FD(U){if(!U.g("1v")){if(U.s("5J")=="1N"||o.bm){U.2a("2q",H);if(o.bm){U.2a("1w",1)}if(U.g("1j")=="1W"){if(o.iE){ux(U)}}}F{FC(U)}if(U.s("1j")=="1W"){o.V.42(o.3R?0:v.1W)}if(U.s("1j")=="2M"){o.W.uD()}U.2a("1v",H)}};E FB(U){lZ(U.g("1h"));B 5G="h5|";B 5k="0|";B 1t=1;B a=U.s("5J");B p=U.s("1k");if(a=="1D"){5G+="1D|";5k+="0|"}if(a=="1k"){if(p.O("2j")>-1&&p.O("V")==-1){5G+="x|";5k+=4V(o.3V+U.g("Y"))+"|"}if(p.O("1e")>-1){5G+="x|";5k+=4V(-U.g("Y"))+"|"}if(p.O("1g")>-1){5G+="y|";5k+="0|"+(-U.g("1a"))+"|"}if(p.O("2K")>-1||p.O("V")>-1||p=="cK"){5G+="y|";if(U.g("1j")=="2M"||U.g("1j")=="1W"){5k+=4V(o.4S+U.s("h")+(U.s("h")<20?20-U.s("h"):0))+"|"}F{5k+=4V(o.4S+U.g("1a"))+"|"}}if(p=="7g"){5G+="1D|";5k+="0|"}}B m=1C 5x({"mc":U,"me":U.g("1h"),"1G":5G.1u(0,5G.S-1),"to":5k.1u(0,5k.S-1),"1t":1t})};E FC(U){lZ(U.g("1h"));B 5G="";B 5k="";B a=U.s("5J");B p=U.s("1k");if(U.g("1w")!=1){5G="h5|";5k=(U.g("1h")==\'bg\'?v.1A.a:"1")+"|"}if(a=="1D"){if(U.g("3u")!=U.s("1D")){U.2a("1D",0);5G+="1D|";5k+=U.s("1D")+"|"}}if(a=="1k"){if(p=="7g"){if(U.g("3u")!=U.s("1D")){5G+="1D|";5k+=U.s("1D")+"|"}}F{if(p.O("V")>-1){if(U.g("y")!=U.g("y0")){5G+="y|";5k+=U.g("y0")+"|"}}F{5G+="x|y|";5k+=U.g("x0")+"|"+U.g("y0")+"|"}}}if(5G!=""&&5k!=""){B m=1C 5x({mc:U,me:U.g("1h"),1G:5G.1u(0,5G.S-1),to:5k.1u(0,5k.S-1),1v:1})}F{U.2a("2q",H)}};G.iv=E(1h,1G,uG){B 4T=J;B 2D=J;B U=b[1h];B 1j=U.g("1j");B 2S=U.s("2S");if(1G=="8R"){if(o.iE){if(1j=="1W"||1j=="5o"||1j=="c5"){o.8s=H;o.cA=H;4T=H;4H();if(v.dK.Fj==1){B bl=7I("1j","2M");if(bl){3c(bl.c())}}}}if(1l&&((v.1l.hy==1&&(1j=="1l"||2S.O("Fh")==0))||2S.O("1l:")==0)){3k(o.dY);if(!1l.g("1v")||lS!=U){5e(U,1G);o.dT=1j+2S;1I(E(){o.dT=2e},4c)}}if(1f&&v.1f.hy==1&&1j=="1f"){3k(o.vs);if(!1f.g("1v")||lS!=U){5e(U,1G);o.dT=1j;1I(E(){o.dT=2e},4c)}}}if(1G=="6z"){if(o.iE){if(1j=="1W"||1j=="5o"||1j=="c5"){o.8s=J;o.cA=H;1I(E(){if(!o.8s){o.cA=J;X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="1W"){c9(b[x]);2L()}if(b[x].g("1j")=="2M"){if(v.dK.Fj==1){6h(b[x].c())}}}}}},4c)}}if((v.1l.hy==1&&(1j=="1l"||2S.O("Fh")==0))||2S.O("1l:")==0){3k(o.dY);o.dY=1I(E(){if(!o.3D){cg(1)}},(v.1l.eW>0?v.1l.eW*2A:2A))}if(1f&&v.1f.hy==1&&1j=="1f"){3k(o.vs);o.vs=1I(E(){if(!o.3D){1f.g("1v")?1f.1t(1):\'\'}},(v.1f.eW>0?v.1f.eW*2A:2A))}}if(4T){1I(2L,10)}};G.kG=E(){if(o.59&&!o.2o){o.W.59(J);o.59=J}if(o.29){if(v.le>-1&&6b(o.29)){K(o.29,{1w:v.lk})}}if(o.1L&&v.Fl==1&&v.172!=0){o.W.2Z()}if(v.1A.8B>0){3k(o.Fk);o.Fk=1I(4H,v.1A.8B*2A)}F{4H()}};G.Ha=E(){if(o.29){if(v.le>-1&&6b(o.29)){K(o.29,{1w:v.le})}}if(!o.1L&&v.Fl==1){o.W.2N()}4H();eZ(J)};G.e5=E(9K,9X){B y;X(B x in b){if(b.2J(x)){y=b[x].g("1j");if(y=="2M"||y=="1W"){b[x].e5(9K,9X)}}}};G.w5=E(){if(v.1A.1t==1){if(v.1A.eX==1&&!o.2o){P}if(!o.5m&&o.R.5N()=="7a"){o.5m=H;4H();o.1r.2C?1I(E(){o.5m=J},4c):\'\'}if(v.1A.hY==1){hM();et()}eZ(J)}};G.eh=E(9K,9X){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="2M"||b[x].g("1j")=="1W"){b[x].eh(9K,9X)}}}};G.gw=E(1d,1q){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="2M"){b[x].6U(1d,1q)}if(b[x].g("1j")=="1d"){m5(b[x],1d,1q)}if(b[x].s("FJ")==1){b[x].sC()}}}};E eZ(x){if(v.1A.1t==1){x?cg():\'\';if(v.1A.cJ==1){if(!o.1L&&v.1A.eU==1){x=H}if(x&&!o.va){K(o.1A,{"1g":bg.h()})}if(!x&&o.va){K(o.1A,{"1g":0})}o.va=x}}}E hW(){9h=J;o.R.hW();if(o.vn){o.vn=J;2L();1I(2L,ce)}}E m5(x,1d,1q){if(v.4o>0){1d-=v.4o;1q-=v.4o}B y=4O(1d);if(x.s("FK")=="1"){y=4O(1q-1d)}if(x.s("165")=="1"){if(x.s("16D")=="1"){y=y+(1q>0?\' \'+2G(x.s("167"))+\' \'+4O(1q):\'\')}F{1d==0?y=4O(1q):\'\'}}x.6p(y)}G.vc=E(1d,1q){B x=7I("1j","2M");if(x){x.Ch(1d,1q)}};G.8P=E(){if(!9F){if(v.gs==1){3k(ls);ls=1I(8P,4c)}F{8P()}}};E 8P(){if(!9F){js("169");B x=7I("1j","eK");if(x){x.F6();9F=H}}}G.Fn=E(y){X(B x in b){if(x==y){b[x].2a("3c")}}};G.6O=E(1d,1q){3k(ls);if(9F){js("8h");B x=7I("1j","eK");if(x){x.gF();9F=J}}};G.hT=E(){B x=7I("2S","1W 9B");if(x){x.2a("6h");x.6p(2G(\'1W\')+\' \'+(o.3R?0:2P.kV(v.1W*100))+\'%\');3k(o.hT);o.hT=1I(FG,2A)}};E FG(){B x=7I("2S","1W 9B");if(x){x.6p(\'\');x.2a("3c");3k(o.hT)}}G.3X=E(1d,1q){if(v.4o>0){1d-=v.4o;1q-=v.4o}X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="2M"){1q>0?b[x].2a("2E",1d/1q):\'\';b[x].Cm()}if(b[x].g("1j")=="1d"){m5(b[x],1d,1q)}if(b[x].g("1j")=="8L"){b[x].2a("s8",0.5);b[x].2a("mM",0)}}}};G.4l=E(1d,1q){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="1q"){if(v.4o>0){1q-=v.4o}b[x].6p(4O(1q))}if(b[x].g("1j")=="2M"){b[x].6U(1d,1q);b[x].e8(1q)}if(b[x].g("1j")=="1d"){m5(b[x],1d,1q)}}}};G.7t=E(){1l.g("1v")?1l.1t():1l.1v()};G.bO=E(){if(1l){P 1l.g("1v")?H:J}F{P J}};G.v1=E(){if(1l){1l.aQ()}};G.cg=E(){cg()};G.FH=E(x){if(1l){1l.G1(x)}};G.GP=E(){if(1l){1l.i6()}};G.GK=E(x){if(1l){P 1l.G2(x)}};E cg(x){if(1l){1l.g("1v")?1l.1t(x):\'\'}o.5d?o.5d.1t():\'\'};G.aU=E(){if(1f){if(1f.g("1v")){1f.1t(1)}F{1f.1v()}}};G.jy=E(){if(1f){1I(E(){1f.1v()},100)}};G.dh=E(){if(1f){P 1f.g("1v")?H:J}F{P J}};G.d7=E(x){P 1f?1f.g(x):\'\'};G.6k=E(x){if(1f){1f.v4(x)}};G.d8=E(){if(1f){1f.d8()}};G.ji=E(){if(1f){1f.ji()}};G.i5=E(){i5()};E i5(){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="8e"){K(b[x].c(),{"1w":(!1f.f1()?0.5:1)})}if(b[x].g("1j")=="f0"){K(b[x].c(),{"1w":(!1f.v6()?0.5:1)})}}}}G.f1=E(){if(1f){P 1f.f1()}F{P J}};G.jm=E(){if(1f){P 1f.jm()}F{P J}};G.jk=E(){if(1f){1f.jk()}};G.f7=E(){if(1f){1f.f7()}};G.FZ=E(x){if(x&&1f){1f.i2(x)}};G.v5=E(x){if(x&&1f){1f.jh(x)}};G.FX=E(x){if(x&&1f){K(1f.co(),{"15R":"1N","3e-2j":1f.s("6Q")});1S.7N(x).1J(1f.co());3c(1f.c())}};G.16w=E(){};G.vt=E(x){if(1l){1l.5S();1l.g("1v")?1I(E(){1l.1t()},4Y):\'\'}};G.dp=E(x){if(1l){1l.5S()}if(o.5d){o.5d.hG()}};G.hE=E(x){if(1l){1l.fb()}2L();4H()};G.jt=E(x){if(1l){1l.hA(x);1l.g("1v")?1l.1t():\'\'}if(o.5d){o.5d.hG()}x=="5h"?vo():\'\'};E vo(){if(o.eR){B y=o.4W.6r(-1)[0];X(B i in b){if(b.2J(i)){if(b[i].s("eY")=="5h"&&o.dq){b[i].6U(o.dq,y)}if(b[i].s("2S")=="2Q:5h,1.0"){b[i].r9(4G(o.dq/y,1).ur(1))}}}}}G.j5=E(x){if(1l){1l.hA("6G")}if(o.5d){o.5d.hG()}};G.aO=E(){if(1l){1l.9G();1l.g("1v")?1I(E(){1l.1t()},4Y):\'\'}if(o.5d){o.5d.hG()}};G.vj=E(){o.5d?o.5d.1t():\'\';if(1l){1l.vj()}};G.hC=E(kn,2q,9D){X(B x in b){if(b.2J(x)){if(b[x].g("1j")=="1l"){if(b[x].s("f4")==1){b[x].Fa()}}if(b[x].g("Ei")=="1l#"+kn){b[x].2a("2a#46",2q);if(b[x].g("1G")=="1F"){if(9D){9D=9D.6v();B vl=9D.O(" <6P C=\'1w");if(vl>-1){9D=9D.1u(0,vl)}b[x].6p(9D)}}F{if(v.1l[\'1l\'+kn+\'1j\']=="2u"){if(9D==2G("7Q")){b[x].bh(0)}F{b[x].bh(1)}}2L()}bo(b[x])}}}};G.FY=E(){if(1l){1l.5S();1l.hA("6G");1l.hA("6J")}};G.iS=E(){B x=7I("1j","2M");if(x){x.iS()}};G.4T=E(){2L();if(9h){o.vn=H}};G.st=E(x){if(!9h||x==1){2L();4H()}F{v.1A.uY=H}};G.4r=E(){4H();2L();4H();if(o.df){3c(7b)}F{!9h?6h(7b):\'\'}};G.Hj=E(1i){if(fY==v.id&&v.2c.on==1){B x=1i.G8;B y=J;if(x==2g){x=1i.G7}if(I(o.2i)||I(o.7z)||o.vI==1){P J}if(o.1L&&v.2c.jA==1){y=H}if(((v.2c.7Y==1&&x==32)||(v.2c.16i==1&&x==13))&&(o.6c||o.5m||y)){if(v.2c.2H==1){7i(\'1L\',o.1L?0:1)}o.W.d5();1i.8Q();P J}!v.2c.jZ?v.2c.jZ=0.2:\'\';!v.2c.1D?v.2c.1D=5:\'\';if(v.2c.G3==1&&(o.6c||y)){if(o.R.1q()>0){X(B i=48;i<58;i++){if(x==i){o.W.3X((o.R.1q()*(x-48)*10)/100,H)}}}}if(x==39&&(o.6c||y)){kh(v.2c.uz)}if(x==37&&(o.6c||y)){ke(v.2c.uz)}if(x==38&&(o.6c||y)){kh(v.2c.uS)}if(x==40&&(o.6c||y)){ke(v.2c.uS)}if(x==G4&&(o.6c||y)){kh(v.2c.G9)}if(x==11J&&(o.6c||y)){ke(v.2c.G9)}}};E 7I(y,z){X(B x in b){if(b.2J(x)){if(b[x].s(y)==z){P b[x]}}}}E kh(x){if(x=="8e"){if(o.1f){o.V.d8()}F{x="4d"}}if(x=="4d"){if(o.R.1q()>0){if(o.R.1d()+4G(v.2c.4d)<o.R.1q()){o.W.3X(o.R.1d()+4G(v.2c.4d),H)}}}if(x=="1W"){o.W.42(4G(v.1W)+4G(v.2c.jZ));1i.8Q()}if(x=="1D"){o.R.1D(v.2c.1D/100);1i.8Q()}if(v.2c.2H==1){7i(x,1)}}E ke(x){if(x=="8e"){if(o.1f){o.V.f7()}F{x="4d"}}if(x=="4d"){if(o.R.1q()>0&&o.1H){o.W.3X((o.R.1d()-v.2c.4d>=0?o.R.1d()-v.2c.4d:0),H)}}if(x=="1W"){o.W.42(4G(v.1W)-4G(v.2c.jZ));1i.8Q()}if(x=="1D"){o.R.1D(-v.2c.1D/100);1i.8Q()}if(v.2c.2H==1){7i(x,0)}};G.Hk=E(1i){if(fY==v.id){B x=1i.G8;if(x==2g){x=1i.G7}if(x==57){if(v.1x==1){}}if(o.2o&&x==27){o.W.8O()}if(I(o.2i)||I(o.7z)){P J}if(v.2c.f==1&&x==70&&v.gs!=1&&(o.6c||o.5m)){if(v.2c.2H==1){7i(\'2o\',o.2o?0:1)}o.2o?o.W.8O():o.W.7B()}if(v.2c.m==1&&x==77&&(o.6c||o.5m)){if(v.2c.2H==1){7i(\'5o\',o.3R?1:0)}o.3R?o.W.6T():o.W.4Z()}}};G.43=E(){4f(o.hN);X(B x in o){if(x.O("1b")==0&&x.O("Cy")>-1){4f(o[x])}}X(B i=0;i<eM.S;i++){1h=eM[i];if(b[1h]){b[1h].43()}}if(1l){1l.43()}if(1f){1f.43()}bg.43();if(7b.5g==o.1Q){o.1Q.3a(7b)}F{o.1A?o.1A.3a(7b):\'\'}};G.hM=E(){hM()};G.hJ=E(){hJ();4H()};G.et=E(){et()};G.mF=E(){P 9h}};B G6=E(1h){B i;B C=[];B w;B h;B sn=0;B bg;B nH;B 8p;B la=0;B 46=H;B EF=J;B 3u=1;B 3m=1;B 2p;B 9e;B 3d;B 8F;B 1j;B 9R=\'\';B x0;B y0;B on;B 8R=J;B bJ=J;B cs=0;B 11S;B 11U=0;B ck=0;B FQ=0;B gh=0;B mh=J;B sF=J;B gG=J;B 3t=J;B gE;B f4;B mC;B s7=J;C=8T(C,fg.U);C=8T(C,v[1h]);B W=[C.1j];1j=W[0];I(C.FV)?W[1]=C.FV:\'\';I(C.FM)?W[1]=C.FM:\'\';I(C.1T)?C.1F=C.1T:\'\';if(6q(C.FN)){o.jN?C.1D=C.FN:\'\'}if(1j=="2X"){o.wr=H}if(I(C.2S)){if(C.1G=="1F"&&C.2S!=\'\'){if(I(v[C.2S+\'1F\'])){C.1F=v[C.2S+\'1F\']}}if(C.2S.O("1l#")==0){9R=C.2S;if(C.3d==\'\'&&9R.O(",")==-1){C.3d=2G(v.1l[\'1l\'+9R.1u(9)+\'1j\'])}}if(C.2S.O("6m")>-1){v.FL=H}if(C.2S.O("2X:")>-1){o.wr=H}if(C.2S=="10F"){C.10G=1C 10K(C)}}B 6R=C.3d?C.3d.2I("///"):[];B vX=0;B 2H=1C 9w();B 1p=1C 9w();B cr=1C 9w();B 10J=1C 9w();B gv=0;B a1;if(C.1G=="1F"){if(C.4x){if(I(v[C.4x+\'1F\'])){C.1F=v[C.4x+\'1F\']}}if(I(C.1F)){2H[0]=4p(C.1F);C.mt=C.1F.S;B wn=[\'/\',\'|\',\'-\'];wn.O(C.1F.1u(-1))>-1?C.sr=C.1F.1u(-1):\'\';wn.O(C.1F.1u(0,1))>-1?C.sB=C.1F.1u(0,1):\'\';if(1j=="1d"||1j=="1q"){if(C.1F.O(\'0:\')==0){C.mi=H}if(C.1F.2I(":").S==3){C.Ep=H}F{if(C.1F.O(\'b7:b7\')>-1){C.En=H}}if(C.jS==1){v.jS=1}}if(C.FK==1&&C.1F.O("-")==0){C.Eo=H}if(C.1F.O("///")>0&&1j=="4C"){C.eG=C.1F.2I("///");C.1F=2H[0]=C.eG[0]}}if(v.wm==1){1I(8t,100);1I(8t,4c);1I(8t,2A)}}F{if(I(C.1p)){2H[0]=C.1p;if(2H[0].O("///")>0&&2H[0].O("gz")==-1){2H=C.1p.2I("///")}if(I(C.oc)){2H[1]=C.oc}if(C.nh==1){if(6q(C.FI)){2H.2W(C.FI);gv=2H.S-1}}}}if(1j=="4C"){if(C.10I==1&&I(C.nB)){C.se=C.2S}}B 1b=1K("1R");if(C.1k==\'cK\'){o.cK.1J(1b)}F{if(C.1k.O(\'V\')>-1&&v.1A.1t==1&&v.1A.cJ==1){o.1A.1J(1b)}F{o.1Q.1J(1b)}}B nH=1K("1R");1b.1J(nH);K(1b,{"1k":"1X","1e":0,"1g":0,"1w":1,"fh":"h3","tx":"h6"});if(6q(C.4x)){4t(1b,{"id":(v.id+"7e"+"9f"+C.4x)})}if(C.FJ==1){K(1b,{"4M":"2O 0.2s 2T"})}if(2H.S>0){X(i=0;i<2H.S;i++){1p[i]=1K("1R");K(1p[i],{"1k":"1X","1g":0,"1e":0,"6L":"1N","1w":C.a,"4M":"1w 0.1s 2T,2O 0.1s 2T"});if(C.1G=="eQ"&&C.2R!=\'\'){if(6q(C.4x)){4t(1p[i],{"id":(v.id+"fZ"+C.4x+"FT")});if(v[C.4x+\'2R\']){C.2R=v[C.4x+\'2R\']}}if(C.2R.O(".tB")>-1||C.2R.O(".lz")>-1||C.2R.O(".8E")>-1||C.2R.O("gz")>-1){C.2R.O("//")==-1&&C.2R.O("gz")==-1?C.2R=\'//\'+C.2R:\'\';B z=1K("41");C.8r=1;z.1z("er",sg);z.2R=C.2R;1p[i].1J(z);C.w=1p[i].2k;C.h=1p[i].2V;if(C.FO>0){K(z,{1a:C.FO})}}}if(C.1G=="1F"){K(1p[i],{"1B":(C.1B),"fh":C.b3,"tc":C.4a,"fy-dv":C.g8+\'px\',"3e":"0 cB 0 cB","92-7Y":"bF"});if(C.2E==1){if(C.1F.O("<a ")>-1||1h=="c6"){K(1p[i],{"6L":"2y"})}}if(C.FP==1){K(1p[i],{"4a-gi":"FP"})}2H[i]==\'8L\'?2H[i]=2G("8L"):\'\';1p[i].1U=rn(2H[i]);1I(so,100);C.w=1p[i].2k;C.h=1p[i].2V;if(6q(C.4x)){4t(1p[i],{"id":(v.id+"fZ"+C.4x+"10H")})}}if(C.1G=="K"){FU(2H[i],C.1B,1p[i])}B 8j=2H[i].6v();if(8j.O(\'B:\')==0){8j=9c(1V[8j.1u(4)],\'\')}B nO=8j.O(\'<1Y\')>-1||8j.O(\'<10z\')>-1;if(C.1G=="1Y"&&(8j.O(\'<g>\')>-1||nO)){if(1j=="5o"||1j=="4C"){8j=8j.22(/nq/g,\'nq\'+v.id+1h)}if(8j.O(\'3I\')>-1){bf(1p[i])}1p[i].1U=(!nO?"<1Y Y=\'20\' 1a=\'20\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'>":\'\')+8j+(!nO?"</1Y>":\'\');1p[i].2k>20?C.w=1p[i].2k:\'\';1p[i].2V>20?C.h=1p[i].2V:\'\';K(1p[i],{"Y":C.w,"1a":C.h});if(C.cq!=-1){nu(1p,C.cq)}if(6q(C.4x)){4t(1p[i],{"id":(v.id+"fZ"+C.4x+"FT"+i)})}}1b.1J(1p[i]);i>0?1t(1p[i]):\'\'}9U();mC?sg():\'\';if(C.2S=="52"){C.52=1;C.1t=1;o.52?1p[0].1U=o.52.nF(C.cq!=-1?C.cq:\'#3U\'):\'\';1p[0].fP=5w;1p[0].fO=5p;1p[0].hx=cU}F{if((bg.2k*C.1D<35||bg.2V*C.1D<35)&&C.1G!=\'1F\'){sa();bf(8p)}F{bf(bg)}}if(1j=="4C"){if(C.fJ==1&&I(C.2S)){B lu=C.2S;if(lu.O("2Q:")==0){B 1O=lu.1u(4).2I(",");if(1O.S==2){B dH=1O[1].2I("/");if(dH.S==2){1O[0]==\'hd\'?1O[0]="4g":\'\';if(v[1O[0]]==dH[1]){C.a=1;K(1p[0],{"1w":C.a})}}}}if(lu=="FS"||lu=="47"){o.W.ey();1b.C.4A=10L;o.vI=1}}}if(1j=="1l"&&C.f4==1){f4=1C 10M(1b,bg,C)}if(C.2E==0){K(1b,{"6L":"1N"})}if(C.8r==1){1t(bg)}if(C.2p==1){k0()}if(C.1k.O("2j")>-1){ck=1}if(C.1k.O("1g")>-1){FQ=1}if(C.1k.O("2K")>-1||C.1k.O("1b")>-1){gh=1}2L();B t=\'\';if(C.9T!=0){t+="nr("+C.9T+"rQ)"}if(C.11f==1){t+=" 3u(-1)"}if(C.11d==1){t+=" 3m(-1)"}if(t!=\'\'){K(1b,{"2O":t})}if(1j=="eK"){gF()}B 1O=[];B i;if(1j=="1f"){1O=[\'fu\',\'FR\',\'o4\',\'Fd\',\'vA\',\'mf\'];X(i=0;i<1O.S;i++){if(I(C[1O[i]])&&!I(v.1f[1O[i]])){v.1f[1O[i]]=C[1O[i]]}}}if(1j=="1T"){1O=[\'o1\',\'vB\',\'vK\'];X(i=0;i<1O.S;i++){if(I(C[1O[i]])&&!I(3B[1O[i]])){v[1O[i]]=C[1O[i]]}}}C.cw==1?bu():\'\';if(1j=="4C"&&C.on==0){3c(1b)}if(C.1t==1&&C.nD>0){1I(Fc,C.nD*2A)}}E Fc(){C.nD=-1;o.V.4r()}E sa(){if(8p){8p.5g.3a(8p)}8p=1K("1R");K(8p,{"1k":"1X","1g":0,"1e":0,"Y":C.1G=="eQ"?bg.2k:(bg.2k>35?bg.2k:35)*C.Ez,"1a":C.1G=="eQ"?bg.2V:(bg.2V>35?bg.2V:35)*C.rD});C=4s(C,\'j3\',\'j3\');1b.1J(8p)}E bf(x){if(1j.O("1d")==0&&W.S==1){C.2E=0}if(1j=="4C"&&C.fJ==0){C.2E=0}if(C.2E==1){if(C.iZ==1){K(x,{"5R":"3I"})}K(x,{"6L":"2y"});if(o.1r.2C){x.1z("bJ",E(1i){1i.an();bJ=H});x.1z("e2",E(1i){C.EA==1?5w():\'\';1i.an()});x.1z("cV",E(1i){1i.an();1i.8Q();C.EA==1?5p():\'\';if(!bJ){8v(1i)}bJ=J})}F{x.aX=8v}if(v.1A.iO==1||C.iO==1){K(x,{"2v-1B":"#mw","1w":0.5})}}F{K(x,{"5R":"7c"})}if(!o.1r.2C){x.fP=5w;x.fO=5p}if(C.3t==1||C.2p==1){x.hx=cU}}E 9U(){if(bg){bg.5g.3a(bg)}bg=1K("1R");K(bg,{"1k":"1X","1g":0,"1e":0});if(6q(C.4x)){4t(bg,{"id":(v.id+"fZ"+C.4x+"11l")})}w=C.w;h=C.h;C=4s(C,\'2B\',\'2B\');C=4s(C,\'cH\',\'cH\');if(C.1G=="1F"){w=1p[vX].2k;h=1p[vX].2V;if(C.vS>0){w<C.vS?w=C.vS:\'\'}}C=4s(C,\'ff\',\'ff\');C=4s(C,\'Ey\',\'Ey\');if(o.1r.6y){C.EH/=C.1D;C.EG/=C.1D;C.EB/=C.1D;C.EC/=C.1D}if(6q(C.4x)&&I(v.4C)&&C.1j=="4C"){if(1Z(v.4C)==\'3z\'){X(B i=0;i<4y.3Z(v.4C).S;i++){if(v.4C[i][C.4x]){if(v.4C[i][C.4x]=="7Q"){C.on=0}F{B 1O=v.4C[i][C.4x].2I(":");if(1O[0]=="2B-1e"){if(1O[1].O("%")>0){C.nU=2z(1O[1])}F{C.3K=2z(1O[1])}}}}}}}C.h=h;C.w=w;if(C.bg==1){h=h+C.9j+C.9x;w=w+C.6N+C.6Q;C.h=h;C.w=w;if(C.1G=="1F"){C.mO=1p[0].2V}}F{C.5Z=0}K(bg,{"Y":(C.Ex==1?Ev:w),"1a":h,"rC":(C.mK*h)/2,"2v":C.4E,"1w":C.5Z,"4M":"1w .1s 2T, 2v .1s 2T, 2O .1s 2T"});if(C.1G=="eQ"){K(bg,{"Y":w,"1a":h,"rC":(C.mK*h/C.1D)/2,})}if(C.11j==1){Ew(bg,C.4E,C.10Z,C.10R)}if(C.rB==1){K(bg,{"3g":"5u 6M "+C.rF})}nH.1J(bg)}E 2L(){K(bg,{"1g":(-bg.2V/2),"1e":(-bg.2k/2)});if(8p){B x=C.1G=="eQ"?bg.2k:(bg.2k>35?bg.2k:35);B y=C.1G=="eQ"?bg.2V:(bg.2V>35?bg.2V:35);K(8p,{"1g":(-y/2)+C.FW-C.G5,"1e":(-x/2)+C.10Q-C.10P})}X(i=0;i<2H.S;i++){if(C.1G=="1Y"){K(1p[i],{"1g":-2P.5b(2z(1p[i].C.1a))/2,"1e":-2z(1p[i].C.Y)/2})}F{K(1p[i],{"1g":-2P.5b(1p[i].2V)/2,"1e":-1p[i].2k/2})}if(bg){K(1p[i],{"1g":(4V(1p[i].C.1g)+C.9j/2-C.9x/2+C.EB/2+C.EC/2),"1e":(4V(1p[i].C.1e)+C.6N/2-C.6Q/2+C.EH/2+C.EG/2)})}}}E 5w(){B i;8R=H;if(C.cr==1){if(on&&I(C.oc)){i=1}F{i=0}if(a1&&cr.S>2){i=2}if(cr[i]){nj();1v(1p[cr[i]])}}if(C.bg==1){if(C.7R!=-1){K(bg,{"1w":C.7R})}if(C.9o!=-1){K(bg,{"2v":C.9o})}}if(C.6S>-1&&!EF){X(i=0;i<2H.S;i++){if(1p[i].C.5F!="3t"){K(1p[i],{"1w":C.6S})}}}if(C.o6!=-1){nu(1p,C.o6)}if(C.10O==1){cs=cs+45;gq(1p[0],cs)}if(C.fS>C.1D&&C.fS>-1){1D(C.fS)}if(1j=="1l"&&o.V.bO()){}F{if(C.2p==1&&C.cw!=1){B x=6R.S>1&&!on?6R[1]:6R[0];if(x){if(x.O(\'B:\')==0){3d.1U=1V[x.1u(4)];bu()}}1v(2p);K(2p,{"1w":1})}}if(1j=="5o"){o.W.59(H);o.59=H}o.cI=H;o.V.iv(1h,"8R")}E 5p(){8R=J;B i;if(C.cr==1){if(on&&I(C.oc)){i=1}F{i=0}if(a1&&cr.S>2){i=2}nj();1v(1p[i])}if(C.bg==1){if(C.7R!=-1){K(bg,{"1w":C.5Z})}if(C.9o!=-1){K(bg,{"2v":C.4E})}}if(C.6S>-1){X(i=0;i<2H.S;i++){if(1p[i].C.5F!="3t"){K(1p[i],{"1w":C.a})}}}if(C.fS>-1){1D(C.1D)}if(C.o6!=-1){nu(1p,(C.cq==-1?\'#3U\':C.cq))}if(1j=="5o"&&!o.2o){o.W.59(J);o.59=J}if(C.2p==1&&C.cw!=1){1t(2p);K(2p,{"1w":0})}o.cI=J;o.V?o.V.iv(1h,"6z"):\'\'}E 8v(e){e?e.6g=H:\'\';if(!mh){o.V.dQ(1h);if(1j=="4C"){ma()}if(C.2p==1&&C.cw!=1){1t(2p);K(2p,{"1w":0})}if(C.10S==1){cs=cs+45;gq(1p[0],cs)}gG=H;if(C.ED==1||(1h=="sd"&&C.1t==1&&C.sc==1)){o.V.4r()}}};G.EE=E(){8v()};E ma(){if(2H){if(2H.S>1){if(on==H){1v(1p[0]);1t(1p[1])}F{1v(1p[1]);1t(1p[0])}}if(C.2p==1&&6R.S>1){3d.1U=o.ni+(on==H?6R[0]:6R[1])+o.gt;bu()}}if(I(C.se)){if(on==H){C.2S=C.se}F{C.2S=C.nB}}if(I(C.eG)){if(C.eG.S>1){if(on==H){6p(C.eG[0])}F{6p(C.eG[1])}}}on=on!=H;if(C.2S){if(C.2S.O(",0/1")>-1){js(C.2S,on?1:0)}}if(C.bg==1&&I(C.sf)){if(C.sf!=-1){if(on){C.Eu=C.4E;C.4E=C.sf}F{C.4E=C.Eu}9U();bf(bg);2L();if(C.1G=="1F"){8t()}F{1D(C.1D)}}}}E rU(1i){1i.6g=H;o.V.dQ(1h)}E nj(){X(B i=0;i<2H.S;i++){if(1p[i].C.5F!="3t"){K(1p[i],{"1w":C.a});1t(1p[i])}}}E so(1F){if(1p[0]){if(1p[0].2k>o.3V-C.3K-C.4k-C.6N-C.6Q){if(C.sj==1){if(!1F){1F=1p[0].1U}1p[0].1U=\'<sj>\'+1F+\'</sj>\'}F{K(1p[0],{"92-7Y":"hZ"})}K(1p[0],{"Y":o.3V-C.3K-C.4k-C.6N-C.6Q})}}}E sg(){if(bg){mC=J;C.8r=0;1t(bg);if(1p[0]){C.w=1p[0].2k*C.1D;C.h=1p[0].2V*C.1D;1D(C.1D)}C.ak=0;9U();sa();bf(8p);1v(bg);2L();o.V.4T();if(!6b(1b)){3c(1b)}}F{mC=H}}E Fo(1i){1i.6g=H}E cU(){if(!o.1r.2C&&!o.cI){5w()}bu()}E 1D(x){if(x>0){if(o.1r.6y&&C.cw!=1){K(bg,{"Et":x+""})}F{K(bg,{"2O":"1D("+x+")"})}X(i=0;i<2H.S;i++){if(o.1r.6y&&C.cw!=1){K(1p[i],{"Et":x+""});sF=H}F{K(1p[i],{"2O":"1D("+x+")"})}}3u=x;3m=x}}E k0(){2p=1K("1R");K(2p,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'1a\':\'2y\',"1w":0,"4M":"1w 0.1s 2T"});9e=1K("1R");C=4s(C,\'ic\',\'ic\');C=4s(C,\'Ej\',\'Ej\');K(9e,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'Y\':\'100%\',\'1a\':30,\'2v-1B\':C.iT,\'1w\':C.hB,\'3g-6n\':C.sN});3d=1K("1R");K(3d,{\'1k\':\'1X\',\'1e\':C.k7,\'1g\':C.k1,\'1B\':C.sQ,\'4a-io\':C.sR,\'4a-3M\':C.jH,"fy-dv":C.sU+\'px\',\'1w\':C.sT,"2M-1a":"1"});if(C.3d){if(C.3d.O("B:")==0){C.Ek=H}}if(!C.Ek){K(3d,{\'92-7Y\':\'bF\'})}if(C.iu==1){8F=1K("1R");8F.1U=\'<1Y Y="fM" 1a="mY" td="0 0 8 6" 7S="1.1" 3E="3o://3A.w3.3x/3L/1Y" 3E:3C="3o://3A.w3.3x/6t/3C"><fn id="DL" 3G="1N" 3j="#\'+C.iT.22("#","")+\'" 3j-al="DY" 3b="0 0 8 0 4 6"></fn></1Y>\'}if(C.cw==1){K(2p,{"1w":1});bf(2p)}F{K(2p,{"6L":"1N"})}1b.1J(2p);3d.1U=o.ni+(C.3d==\'\'?2G(1j):6R[0])+o.gt;2p.1J(9e);2p.1J(3d);if(C.iu==1){2p.1J(8F);B rZ=o.nv?\'-fM\':\'-mY\';B ps=C.10T;if(!I(ps)){ps=\'\'}B tp=ps.O("1g")>-1;if(tp){gq(8F,\'-10Y\')}K(8F,{\'1k\':\'1X\',\'2j\':(ps.O("2j")>-1?10*C.1D:\'2y\'),\'1e\':(ps.O("1e")>-1?10*C.1D:(ps==\'\'||ps==\'1g\'?\'50%\':\'2y\')),\'2B-1e\':(ps==\'\'||ps==\'1g\'?\'-tT\':0),\'2K\':(tp?\'2y\':rZ),\'1g\':(tp?rZ:\'2y\'),\'1w\':C.hB})}bu()}E bu(){if(C.2p==1){K(2p,{"1g":(gh==1?-h-2p.2V+3:-2p.2V/2)+C.12l-C.13y,"1e":(ck==1?-3d.2k:(gh==1?-w/2:+3d.2k))-(gh==1?0:3d.2k/2+5)+C.13x-C.13v,"1a":C.k1+3d.2V+C.Fu,"Y":C.k7+3d.2k+C.Fw});K(9e,{\'1a\':2p.2V});2p.C.4A="2A"}}G.c=E(){P 1b};G.s=E(x){P C[x]};G.ss=E(x,x2){P I(C[x])?C[x][x2]:J};G.g=E(x){a6(x){1o"Y":P w;1n;1o"1a":P h;1n;1o"x":P 4V(1b.C.1e);1n;1o"y":P 4V(1b.C.1g);1n;1o"1w":P 1b.C.1w?1b.C.1w:1;1n;1o"1v":P 46;1n;1o"3u":P 3u;1n;1o"3m":P 3m;1n;1o"1j":P 1j;1n;1o"Ei":P 9R;1n;1o"gG":P gG;1n;1o"1G":P C.1G;1n;1o"S":P C.mt?C.mt:0;1n;1o"1h":P 1h;1n;1o"x0":P x0;1n;1o"y0":P y0;1n;1o"8R":P 8R;1n;1o"1l#":P 9R.O("1l#")==0;1n;1o"1l:":P 9R.O("1l:")==0;1n;1o"2a#46":P s7;1n;7c:P J}};G.2a=E(k,x){a6(k){1o"1v":8R?5p():\'\';46=x;1n;1o"2q":Em(x);1n;1o"6h":6h(1b);1n;1o"3c":3c(1b);1n;1o"Ef":C.3t=0;1n;1o"s5":if(C.Eg>0&&C.3t!=1&&!gE){3k(gE);gE=1I(E(){3c(1b);C.3t=1;gE=2g},C.Eg*2A)}1n;1o"1D":1D(x);1n;1o"3u":K(1b,{"2O":"3u("+x+")"});3u=x;1n;1o"3m":K(1b,{"2O":"3m("+x+")"});3m=x;1n;1o"1w":K(1b,{"1w":x});1n;1o"s8":K(1p[0],{"1w":x});1n;1o"mM":K(1p[0],{"El":"mM("+x+")"});1n;1o"1e":K(1b,{"1e":x});1n;1o"1g":K(1b,{"1g":x});1n;1o"Y":K(1b,{"Y":x});1n;1o"1a":K(1b,{"1a":x});1n;1o"tZ":C.tZ=x;1n;1o"ck":ck=x;1n;1o"2a#46":s7=x;1n;1o"x":K(1b,{"1e":x});1n;1o"y":K(1b,{"1g":x});1n;1o"5J":C.5J=x;1n;1o"x0":x0=x;1n;1o"y0":y0=x;1n;7c:P J}};E Em(x){if(x&&o.1r.2C){mh=H;1I(Es,ce)}if(!x){if(C.nh==1&&a1){1t(1p[gv]);1v(1p[0]);a1=J}}if(C.8r==1){x?1v(1b):1t(1b)}F{if(1h=="13B"||1h=="Er"){x?1v(1b):1t(1b)}F{K(1b,{"2q":(x?"47":"1N")})}46=x;x?1v(1b):\'\'}if(x&&C.sE){C.sE=J;1I(8t,100)}}E Es(){mh=J}G.6p=E(x){6p(x);!6b(1b)?C.sE=H:\'\'};G.gB=E(x){C.cf=x;6p(x);o.V.4T()};G.sC=E(){gq(1b,la);la+=20};E gq(x,y){K(x,{"2O":"nr("+y+"rQ)"+(x==1p[0]&&!sF&&3u!=1?\' 1D(\'+3u+\')\':\'\')})};G.Eq=E(x){if(C.1F.O("{1T")>-1){6p(C.1F)}};G.ma=E(){ma()};E 6p(1F){if(C.1G=="1F"){if(I(1F)){if(C.Ep){if(1F.S==4){1F=(C.mi?\'0:0\':\'b7:0\')+1F}if(1F.S==5){1F=(C.mi?\'0:\':\'b7:\')+1F}if(1F.S==7){1F=(C.mi?\'\':\'0\')+1F}}if(C.En){if(1F.S==4){1F=\'0\'+1F}}C.mt=1F.S}1F=(C.sB?C.sB+(C.Eo?\'\':\' \'):\'\')+1F+(C.sr?\' \'+C.sr:\'\');B EJ=1p[0].2k+(C.bg==1?C.9j+C.9x:0);B F4=1p[0].2V+(C.bg==1?C.9j+C.9x:0);1p[0].1U=o.ni+(1j=="4C"?rn(1F):1F)+o.gt;if(C.13D==1){1p[0].1U+=\'<6P C="2q:ch-47;Y:cZ"></6P><6P C="3g-1g: cB 6M #fI;3g-1e: cB 6M fR;3g-2j: cB 6M fR;1k: 1X;2j:cB;1g: 50%;2B-1g: -5u;"></6P>\'}if(1j=="1T"){K(1p[0],{"Y":"2y","92-7Y":"bF"});so(1F)}C.w=1p[0].2k+(C.bg==1?C.9j+C.9x:0);C.h=1p[0].2V+(C.bg==1?C.9j+C.9x:0);if(EJ!=C.w||F4!=C.h||(C.w>0&&sn==0)){8t()}if(1p[0].2k>0){sn=C.w}F{9R!=\'\'?1t(1p[0]):\'\';if(1F!=\'\'){1I(8t,10)}}}}G.8t=E(){8t()};E 8t(){if(C.1G=="1F"){if(1p[0]){if(1p[0].2k>0){9R!=\'\'?1v(1p[0]):\'\';w=C.w=1p[0].2k;h=C.h=1p[0].2V;9U();bf(bg);2L();o.V?o.V.st():\'\'}}}}G.r9=E(x){if(C.F2==1){B n=4;if(1h=="13u"){if(o.1r.2C){P}}F{n=8}B y=\'nq\';B z=[];X(B i=1;i<n;i++){z[i]=1S.7N(y.8c(v.id,1h,\'13k\',i))}if(z[1]){X(B i=1;i<n;i++){z[i]?1t(z[i]):\'\'}if(n==4){X(B i=1;i<n;i++){x>(i/n)&&z[i]?1v(z[i]):\'\'}}F{X(B i=n;i>0;i--){if(x*1+(1/n)>=(i/n)&&z[i]){1v(z[i]);1n}}}}}};G.On=E(){if(!on){if(2H){if(2H.S>1&&W.S>1){1t(1p[0]);1v(1p[1])}}if(W.S>1){1j=W[1];if(C.2p==1){3d.1U=rV(1);bu()}}if(C.nh==1&&a1){1t(1p[gv]);a1=J}on=H}};E rV(x){P o.ni+(C.3d==\'\'?2G(W[x]):(6R.S>1?6R[x]:6R[0]))+o.gt}G.bh=E(x){bh(x)};E bh(x){B y=\'nq\';B z=1S.7N(y.8c(v.id,1h,\'13m\'));if(z){K(z,{"4M":"2O 0.1s 8I-6z"});if(x==1){z.C.2O=\'F0(0, 0)\'}F{z.C.2O=\'F0(-F5, 0)\'}}F{if(x==1){C.a=1}F{C.a=0.5}}on=x==1;if(C.2p==1&&6R.S>1){3d.1U=(on?6R[0]:6R[1])}K(1p[0],{"1w":C.a})};G.gu=E(){if(on){if(2H){if(2H.S>1&&W.S>1){1v(1p[0]);1t(1p[1])}}1j=W[0];if(W.S>1){if(C.2p==1){3d.1U=rV(0);bu()}}on=J;a1=J}};G.rU=E(){if(C.nh==1){nj();1v(1p[gv]);a1=H}};G.F6=E(){B 2D=J;if(C.1t==1&&C.Fb==1){if(6b(o.29)){2D=H}}if(!2D){6h(1b);B cN=1b.d9("*");X(B i=cN.S;i--;){K(cN[i],{"5J-1L-6H":"13Z"})}46=H}};G.gF=E(){gF()};E gF(){3c(1b);B cN=1b.d9("*");X(B i=cN.S;i--;){K(cN[i],{"5J-1L-6H":"8X"})}46=J}G.43=E(){if(2H.S>0){X(i=0;i<2H.S;i++){1b.3a(1p[i]);1p[i]=2e}}if(bg){bg.fQ("aX");bg.fQ("fP");bg.fQ("fO");bg.5g.3a(bg);bg=2e}if(C.1k==\'cK\'){o.cK.3a(1b)}F{if(1b.5g==o.1Q){o.1Q.3a(1b)}F{if(o.1A){if(1b.5g==o.1A){o.1A.3a(1b)}}}}if(2p){1b.3a(2p)}1b=2e};G.Fa=E(){f4?f4.nx():\'\'};E rn(x){B z=x+\'\';if(x.O(\'{1d}\')>-1&&I(o.3v)){x=x.22(\'{1d}\',it(o.3v.av().t))}if(x.O(\'{1T\')>-1){B y=o.f8?o.f8:(v.1T?v.1T:\'\');if(x.O(\'{bq}\')>-1&&o.V){x=x.22(\'{bq}\',o.V.d7(\'bq\'))}if(o.bi&&o.V){y=o.V.d7(\'bi\')}x=x.22(\'{1T}\',y);if(o.bi&&!o.V){1I(6p,100,z)}}P x}E nu(1p,4m){X(B i=0;i<1p.S;i++){F9(1p[i],4m)}if(C.2S=="52"){if(o.52){o.52.F7(1p[0],4m)}}}};B F8=E(1h,1j){B i;B C=[];B w;B h;B bg;B 46=H;B x0;B y0;B 3u=1;B 3m=1;B ea=0;B 9n=0;B 13V;B 3D;B jc;B 2E;B 3H;B Ck;B Dc;B sX;B D1;B 2p;B 9e;B 3d;B 8F;B 3b=[];o.Fm=-1;B o3;B 8R;B tH;X(i in fg.U){C[i]=fg.U[i]}B 1j=v[1h].1j;B 1G=v[1h].1G;X(i in fg[1j]){C[i]=fg[1j][i]}X(i in v[1h]){C[i]=v[1h][i]}C.w=2z(C.w);C.h=2z(C.h);C=4s(C,\'2B\',\'2B\');C=4s(C,\'cH\',\'cH\');B 1b=1K("1R");if(v.1A.cJ==1&&v.1A.1t==1){o.1A.1J(1b)}F{o.1Q.1J(1b)}1j=="2M"?o.cK=1b:\'\';B 9L=J;if(C.eY){if(C.eY!=\'1W\'){9L=H}}K(1b,{"1k":"1X","1g":0,"1e":0,"1w":1,"fh":"h3","tx":"h6"});if(C.EY==1){1b.C.4A=5}9U();B 8G=1K("1R");K(8G,{"1k":"1X","2K":2P.5b(-C.h/2),"1e":2P.5b(-C.w/2)});if(C.F3==1){K(8G,{"3g-6n":C.6F*C.h/2,"1a":C.h,"6w":"3t","3I-2F":"1N"})}if(6q(C.4x)){4t(1b,{"id":(v.id+"fZ"+C.4x)})}1b.1J(8G);if(1j==\'2M\'&&v.rl==1){Cu()}if(C.2p==1){k0()}B 8l=1K("1R");iI(0,8l,0.3,(C.5l==1?"2T-5l(#"+C.EX+", #"+C.mW+")":C.mW),C.w,C.13W);if(C.EQ==1&&I(C.nd)){B g4=1K("1R");g4.1U=C.nd.22(/\\#ER/g,"#"+C.mW);8l.1J(g4);K(g4,{"1k":"1X","2K":-2P.5b(C.h/2),"1e":0,"3I-2F":"1N"});K(8l,{"6w":"3t","2v":"1N"});B x=["4b","fn","mU","ib","cn"];X(B y=0;y<x.S;y++){B z=g4.rM("1Y "+x[y]);if(z.S>0){X(B y2=0;y2<z.S;y2++){z[y2].C.3j=C.mW}}}}8G.1J(8l);B 142=[];B bQ=1K("1R");iI(1,bQ,C.EO,(C.5l==1?"2T-5l(#"+C.EP+", #"+C.EN+")":C.EN),0,C.13M);8G.1J(bQ);if(C.6S>0){B cT=1K("1R");iI(2,cT,C.EM,C.13I,0,C.6S);8G.1J(cT)}B 6I=1K("1R");iI(3,6I,C.EK,(C.5l==1?"2T-5l(#"+C.EL+", #"+C.1B+")":C.1B),0,C.a);if(C.EQ==1&&I(C.nd)){B n9=1K("1R");n9.1U=C.nd.22(/\\#ER/g,"#"+C.1B);K(n9,{"1k":"1X","2K":-2P.5b(C.h/2),"1e":0,"3I-2F":"1N"});K(6I,{"6w":"3t","2v":"1N"});6I.1J(n9)}if(C.51==1){B 8K=1K("1R");C=4s(C,\'ra\',\'ra\');C=4s(C,\'rf\',\'rf\');K(8K,{"1k":"1X","2K":C.h/2,"2j":0,"3I-2F":"1N","4a-3M":(C.EW+"px"),"1B":C.5A,"2M-1a":"100%","3e-1g":C.12F,"3e-2K":C.12J,"3e-1e":C.12H,"3e-2j":C.12z,"2B-1g":C.12q,"2B-2K":C.12p,"2B-1e":C.CV,"2B-2j":C.CT,"3g-6n":(C.EV+"px"),"2q":"1N"});if(C.EU==1){K(8K,{"2v":"#"+C.ES})}6I.1J(8K);B iX=J;B iV=J}o.n3=C.h;8G.1J(6I);if(C.im==1){v.im=1;B ih=1K("1R");K(ih,{"1k":"1X","1g":0,"1e":0});1b.1J(ih);I(v.3b)?un(v.3b):\'\'}if(C.3H==1){if(C.cE.6v().O(\'<1Y\')==-1){C.cE==\'\'?C.cE="<1Y Y=\'20\' 1a=\'20\'><g><cn ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 3j=\'#fI\'/></g></1Y>":\'\'}3H=1K("1R");3H.1U=C.cE.6v();C=4s(C,\'ET\',\'ET\');K(3H,{"1k":"1X","1g":-10+C.LI-C.LJ,"1e":-2A,"3I-2F":"1N","1a":20,"Y":C.dM,"1w":C.tV,"4M":"2O 0.1s 2T, 1w 0.1s 2T"});if(C.iR==1||C.ue==1){K(3H,{"2O":"1D(0)"})}F{if(C.nG!=1){K(3H,{"2O":"1D("+C.nG+")"})}}1b.1J(3H);if(C.rP!=-1){B x=["4b","ib","cn"];X(B y=0;y<x.S;y++){B z=3H.rM("1Y "+x[y]);if(z.S>0){X(B y2=0;y2<z.S;y2++){z[y2].C.3j="#"+C.rP}}}}C.dV=3H.2k}if(C.9T!=0){K(1b,{"2O":"nr("+C.9T+"rQ)"})}if(C.3t==1){1t(1b);46=J}if(1j=="1W"){if(C.1t==1&&C.iJ==1){o.iE=H;C.3t=H}F{o.iE=J}}C.9S=0;if(C.9T!=0){C.iB=2P.CZ(C.9T);if(C.iB>45&&C.iB<135){C.9S=90}if(C.iB>N9&&C.iB<EZ){C.9S=Ff}}if(9L){o.eR=C.eY=="5h";w=C.w;6U(1,o.4W.6r(-1)[0],"no")}E iI(n,x,y,z,F1,EI){K(x,{"1k":"1X","2K":0,"1e":0,"Y":F1,"1a":(C[\'h\'+n]>0?C[\'h\'+n]:C.h),"2v":z?(z.O("2T")>-1?z:\'#\'+z):\'\',"3g-6n":(C.F3==1?1:C.6F*C.h/2),"1w":EI,"3I-2F":"1N","4M":"2O 0.2s 8I-in-6z"})}E 9U(){bg=1K("1R");C=4s(C,\'ff\',\'ff\');B mO=C.h+C.9j+C.9x;B Eh=C.w+C.6N+C.6Q;if(C.bg==1){}F{C.5Z=0}C=4s(C,\'j3\',\'j3\');if(v.1A.iO==1||C.iO==1){C.4E=\'#mw\';C.bg=1;C.5Z=0.5}K(bg,{"1k":"1X","1g":0,"1e":0,"Y":Eh,"1a":mO*C.rD,"rC":(C.mK*mO)/2,"6A":C.4E,"1w":C.5Z,"6L":"2y","4M":"1w .1s 2T, 2v .1s 2T"});if(C.rB==1){K(bg,{"3g":"5u 6M #"+C.rF})}if(C.2E==1){if(C.iZ==1){K(bg,{"5R":"3I"})}if(!o.1r.2C){bg.aX=8v;bg.N2=tN;bg.Mq=kt;bg.hx=cU}}F{K(bg,{"5R":"7c"})}if(!o.1r.2C){bg.fP=5w;bg.hx=cU;bg.fO=5p}if(o.1r.2C){bg.1z("e2",E(1i){1i.6g=H;if(!I(1i.5T)&&1i.bV.S>0){1i.5T=1i.bV[0].g9;1i.8w=1i.bV[0].je}o3=1i;5w(1i);kt(1i)});bg.1z("cV",E(1i){1i.6g=H;5p(1i);tN(o3)});bg.1z("2E",E(1i){1i.6g=H});bg.1z("bJ",E(1i){if(!I(1i.5T)&&1i.bV.S>0){1i.5T=1i.bV[0].g9;1i.8w=1i.bV[0].je}o3=1i;cU(1i)})}K(bg,{"1e":2P.kV(-C.w/2-C.6N)});K(bg,{"1g":2P.kV(-C.h/2-C.9j+C.FW-C.G5)});1b.1J(bg)}E 2L(Y){if(Y!=w){w=Y;o.rI=w;B c4=w/8l.2k;K(bg,{"Y":(w+C.6N+C.6Q),"1e":-w/2-C.6N,});K(8G,{"1e":-w/2});K(8l,{"Y":w});K(8G,{"Y":w});B xx=bQ.2k*c4;if(xx>8l.2k){xx=8l.2k}K(bQ,{"Y":xx});B wp=6I.2k*c4;K(6I,{"Y":wp});ug(wp,J);if(1j=="2M"){E9()}if(C.im==1){e8()}}}E ug(x,1N){if(C.3H==1){if(x<C.dV/2&&C.dM!=20){x=C.dV/2}if(x>w-C.dV/2&&C.dM!=20){x=w-C.dV/2}B y=x-w/2-C.dV/2+C.Kw-C.Ki;K(3H,{"1e":y})}}E ui(){K(3H,{"2O":"1D("+C.nG+")"})}E 5w(1i){o.V.iv(1h,"8R");if(C.bg==1){if(C.7R!=-1){B m=1C 5x({"mc":bg,"1G":"7E","to":C.7R,"1d":0.1,"me":(1h+"bg")})}if(6q(C.9o)){K(bg,{"2v-1B":C.9o})}}if(6q(C.tR)){K(6I,{"2v-1B":C.tR})}if(C.3H==1){if(C.G0==1&&I(C.tS)){if(C.jq==1&&3D){}F{3H.1U="<1Y Y=\'"+C.dM+"\' 1a=\'20\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'>"+C.tS.6v()+"</1Y>"}}if(C.iR==1){if(C.ue==1&&!o.1H){}F{ui()}}F{if(C.jE!=-1){B m2=1C 5x({"mc":3H,"1G":"7E","to":C.jE,"1d":0.1,"me":(1h+"3H")})}}}if(C.2p==1&&(o.R.1q()>0||1j=="1W"||9L)){1v(2p);K(2p,{"1w":1})}if(C.dX>0){K(bg,{"2O":"3m("+((C.dX-1)/5+1)+")"});tU(C.dX)}if(1j=="1W"){o.W.59(H);o.59=H}o.cI=H}E tU(x){K(8l,{"2O":"3m("+x+")"});K(bQ,{"2O":"3m("+x+")"});cT?K(cT,{"2O":"3m("+x+")"}):\'\';K(6I,{"2O":"3m("+x+")"})}E 5p(){if(!jc){if(C.6S>0){K(cT,{"Y":0})}if(6q(C.tR)){K(6I,{"2v-1B":C.1B})}if(C.bg==1){if(C.7R!=-1){B m=1C 5x({"mc":bg,"1G":"7E","to":C.5Z,"1d":0.1,"me":(1h+"bg")})}if(6q(C.9o)){K(bg,{"2v-1B":C.4E})}}if(C.3H==1){if(C.G0==1&&I(C.tS)){if(C.jq==1&&3D){}F{3H.1U="<1Y Y=\'"+C.dM+"\' 1a=\'20\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'>"+C.cE.6v()+"</1Y>"}}if(C.iR==1){K(3H,{"2O":"1D(0)"})}F{if(C.jE!=-1){B m2=1C 5x({"mc":3H,"1G":"7E","to":C.tV,"1d":0.1,"me":(1h+"3H")})}}}if(C.dX>0){K(bg,{"2O":"3m(1)"});tU(1)}if(1j=="1W"&&!o.2o){o.W.59(J);o.59=J}o.V.iv(1h,"6z")}if(C.2p==1&&(o.R.1q()>0||1j=="1W")){1t(2p);K(2p,{"1w":0})}if(o.kK&&1j=="2M"){o.th.1t();o.Fm=-1}o.cI=J}E 8v(1i){1i.6g=H}E Fo(1i){1i.6g=H}E tN(1i){if(1j=="1W"){if(o.8s){jc=H;3k(tH);tH=1I(E(){jc=J;5p()},2A)}}ud();o.3D=J;if(C.3H==1){if(C.jq==1&&I(C.tE)){3H.1U="<1Y Y=\'20\' 1a=\'20\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'>"+C.cE.6v()+"</1Y>"}}bN(1i.5T,1i.8w);o.V.dQ(1h);o.V.eh(1i.5T,1i.8w);1i.6g=H}E kt(1i){3D=H;if(C.3H==1){if(C.jq==1&&I(C.tE)){3H.1U="<1Y Y=\'20\' 1a=\'20\' 3E:3C=\'3o://3A.w3.3x/6t/3C\' 3E=\'3o://3A.w3.3x/3L/1Y\'>"+C.tE.6v()+"</1Y>"}}ea=hs(bg);9n=ex(bg);bN(1i.5T,1i.8w);6U(2E,1,"no")}E bN(j1,iM){B x;B Fq=2P.5L(1S.lM.9W,1S.7H.9W);B Fp=2P.5L(1S.lM.cG,1S.7H.cG);if(o.1r.2C){}F{iM=iM+Fp;j1=j1+Fq}if(C.9S>0){x=iM-ea-C.6Q;2E=x/w;if(C.9S==Ff){x=iM-ea-C.6N;2E=x/w;2E=(2E-1)*-1}}F{x=j1-9n-C.6N;2E=x/w;if(C.9T>134&&C.9T<Kb){x=j1-9n-C.6Q;2E=x/w;2E=(2E-1)*-1}}2E>1?2E=1:\'\';2E<0?2E=0:\'\'}G.e8=E(){e8()};G.iS=E(){un()};E un(){if(3b){X(B i=0;i<3b.S;i++){ih.3a(3b[i])}}3b=[];if(v.3b){if(1Z(v.3b)=="5c"){v.3b=2t(v.3b)}X(B i=0;i<4y.3Z(v.3b).S;i++){if(v.3b[i].1d){3b[i]=1K("1R");K(3b[i],{\'1k\':\'1X\',\'1e\':0,\'1g\':-C.h/2,\'Y\':(I(v.3b[i].Y)?v.3b[i].Y:C.Fe),\'1a\':C.h,\'1w\':(I(v.3b[i].1w)?v.3b[i].1w:C.Fg),\'3I-2F\':\'1N\',\'2q\':\'1N\',\'2v-1B\':(I(v.3b[i].1B)?v.3b[i].1B:C.Fi)});3b[i].1d=v.3b[i].1d;ih.1J(3b[i])}}e8()}}E e8(){B x=o.R.1q();X(B i=0;i<3b.S;i++){if(x>0){K(3b[i],{\'1e\':w*(3b[i].1d/x)-w/2,\'2q\':\'47\'})}F{3c(3b[i])}}}E ud(){3D=J}E cU(1i){9n=ex(bg);if(C.6S>0){if(o.1H||1j!=\'2M\'){K(cT,{"Y":1i.5T-9n})}}if(C.2p==1&&(o.R.1q()>0||1j=="1W"||9L)){!6b(2p)?1v(2p):\'\';ea=hs(bg);bN(1i.5T,1i.8w);if(1j=="2M"){if(v.J4==1){if(o.R.5v()&&o.R.bS().O("?us")>0){3d.1U=\'- \'+it((1-2E)*o.R.1q(H))}F{3d.1U=it(2E*o.R.1q())}}F{B d=o.R.1q();if(v.4o>0){d=d-v.4o}3d.1U=it(2E*d)}}if(1j=="1W"||9L){3d.1U=2P.5b(2E*100);if(9L){if(o.eR){3d.1U=(9L&&6q(C.3d)?C.3d+\'&cv;\':\'\')+4G(2E*o.4W.6r(-1)[0]).ur(1)}}}K(2p,{"1g":(-3d.2V*2-C.FA*1)-(C.Fz==1?(C.h/2)*(C.dX>0?C.dX:1):0),"1e":(-w/2+(1i.5T+1S.lM.9W-9n)-2p.2k/2),"1a":C.k1+C.jH+C.Fu,"Y":C.k7+3d.2k+C.Fw,});K(9e,{\'1a\':2p.2V});2p.C.4A="2A"}if(o.kK&&1j=="2M"&&o.th){if(o.R.1q()>0){if(C.2p==0){ea=hs(bg);9n=ex(bg);bN(1i.5T,1i.8w)}B 1e=(-w/2+(1i.5T-9n)-v.iA/2);1e>w/2-v.iA?1e=w/2-v.iA:\'\';K(o.bC,{"1g":(-v.t6-(v.Fx>0?v.Fx*1:5)-v.t8),"1e":(1e<-w/2?-w/2:1e)});o.th.1d(2E*o.R.1q(),1i.5T,9n,w)}}if(o.1r.2C){kt(1i)}}G.c=E(){P 1b};G.s=E(1h){P C[1h]};G.ss=E(x,x2){P C[x][x2]};G.g=E(x){a6(x){1o"Y":P w;1n;1o"S1":P 8l.2k;1n;1o"1a":P C.h;1n;1o"x":P 4V(1b.C.1e);1n;1o"y":P 4V(1b.C.1g);1n;1o"1w":P 1b.C.1w?1b.C.1w:1;1n;1o"1v":P 46;1n;1o"3u":P 3u;1n;1o"3m":P 3m;1n;1o"1j":P 1j;1n;1o"1h":P 1h;1n;1o"x0":P x0;1n;1o"y0":P y0;1n;1o"2E":P 2E;1n;7c:P J}};G.2a=E(1h,x){a6(1h){1o"1v":46=x;1n;1o"3D":3D=x;1n;1o"2q":1j=="2M"||C.1t==1?K(1b,{"5F":(x?"46":"3t")}):K(1b,{"2q":(x?"47":"1N")});46=x;1n;1o"3u":K(1b,{"2O":"3u("+x+")"});3u=x;1n;1o"3m":K(1b,{"2O":"3m("+x+")"});3m=x;1n;1o"1w":K(1b,{"1w":x});1n;1o"1e":K(1b,{"1e":x});1n;1o"1g":K(1b,{"1g":x});1n;1o"2E":2E=x;1n;1o"cm":C.cm=x;1n;1o"Y":K(1b,{"Y":x});1n;1o"1a":K(1b,{"1a":x});1n;1o"tZ":C.S0=x;1n;1o"x":K(1b,{"1e":x});1n;1o"y":K(1b,{"1g":x});1n;1o"x0":x0=x;1n;1o"y0":y0=x;1n}};G.2L=E(x){2L(x)};G.kG=E(x){};G.e5=E(9K,9X){if(3D){if(1j=="1W"||9L){bN(9K,9X);o.V.dQ(1h)}if(1j=="1W"){o.8s=H}bN(9K,9X);6U(2E,1,"no")}};G.eh=E(9K,9X){if(3D){ud();3D=J;bN(9K,9X);o.V.dQ(1h);6U(2E,1,"no")}};E 6U(1d,1q,sZ){1d<0?1d=0:\'\';if(v.4o>0&&1q>1){1q=1q-v.4o;1d=1d-v.4o}if(C.3H==1&&C.ue==1&&C.iR!=1){if(!C.Ed&&1d>0){ui();C.Ed=H}}if(3D&&1q!=1){}F{B 4n;if(1q>0&&1d>0){if(1d>1q){1d=1q}4n=w*(1d/1q);if(4n==6I.2k){4n=-1}}F{4n=0}if(4n>=0){K(6I,{"Y":4n});ug(4n,H)}if(I(8K)){if(1q<2&&1j=="2M"){if(iX){3c(8K);iX=J}}F{if(!iX){6h(8K);iX=H}8K.1U=1j=="2M"?4O(1d==0?1q:1d):2P.kV(1d*100);if(4n<8K.kU+C.CT+C.CV){if(!iV){K(8K,{"1e":0,"2j":"2y"});iV=H}}F{if(iV){K(8K,{"2j":0,"1e":"2y"});iV=J}}}}}};G.6U=E(1d,1q,sZ){if(1q!=Dc||1d!=D1){6U(1d,1q,sZ)}};G.Cm=E(){2E>1?2E=1:\'\';2E<0?2E=0:\'\';K(6I,{"Y":(2E*w)})};G.Ch=E(1d,1q){if(1q>0&&1d>0){B 4n=w*(1d/1q);K(bQ,{"Y":4V(4n)});Ck=1q;sX=1d}F{sX=0;K(bQ,{"Y":0})}};E Cu(){o.bC=1K("1R");K(o.bC,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'Y\':v.iA,\'1a\':v.t6,\'6w\':\'3t\',"3I-2F":"1N","2v-1B":"#OD","3g-6n":v.CI+\'px\',"2q":"1N"});o.bC.id="Os"+v.id;if(v.t8==1){K(o.bC,{"3g":v.CD+"px 6M "+sV(\'1B\',v.CC)})}if(v.Cx==1){K(o.bC,{"5y-bY":"lp 5u hz 4B(0,0,0,0.5)"})}o.bC.C.4A="iU";1b.1J(o.bC)}E k0(){2p=1K("1R");K(2p,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'1a\':\'2y\',"3I-2F":"1N","1w":0,"4M":"1w 0.1s 2T"});9e=1K("1R");C=4s(C,\'ic\',\'ic\');K(9e,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'Y\':\'100%\',\'1a\':30,\'2v-1B\':C.iT,\'1w\':C.hB,\'3g-6n\':C.sN});3d=1K("1R");K(3d,{\'1k\':\'1X\',\'1e\':C.k7,\'1g\':C.k1,\'1B\':C.sQ,\'4a-io\':C.sR,\'4a-3M\':C.jH,"fy-dv":C.sU+\'px\',"2M-1a":"1",\'1w\':C.sT});C.CB?C.iu=C.CB:\'\';if(C.iu==1){8F=1K("1R");8F.1U=\'<1Y Y="fM" 1a="mY" td="0 0 8 6" 7S="1.1" 3E="3o://3A.w3.3x/3L/1Y" 3E:3C="3o://3A.w3.3x/6t/3C"><fn id="DL" 3G="1N" 3j="\'+cS(C.iT)+\'" 3j-al="DY" 3b="0 0 8 0 4 6"></fn></1Y>\'}1b.1J(2p);2p.1J(9e);2p.1J(3d);if(C.iu==1){2p.1J(8F);K(8F,{\'1k\':\'1X\',\'1e\':\'50%\',\'2B-1e\':\'-tT\',\'2K\':(o.nv?\'-fM\':\'-mY\'),\'1w\':C.hB})}};E E9(){if(o.3v&&v.c7==1&&!o.1H){B f=o.3v.av();if(f.t&&f.d){6U(f.t,f.d)}}};G.43=E(){1b.3a(8G);if(bg){bg.fQ("aX");bg.fQ("fP");bg.fQ("fO");bg.5g.3a(bg);bg=2e}if(3H){1b.3a(3H)}if(1b.5g==o.1Q){o.1Q.3a(1b)}F{if(o.1A){if(1b.5g==o.1A){o.1A.3a(1b)}}}1b=2e}};B E8=E(){B i;B C=[];B w;B h;B 46=H;B 3u=1;B 3m=1;B x0=0;B y0=0;B a7=5U(n1,QF);B 1j,1h="bg";B 1G="Qy";C["1k"]=v.1A.1k;X(B k in v.1A){if(v.1A.2J(k)){C[k]=v.1A[k]}}if(C.1v==0){v.1A.h=C.h=0;C.3e=C.2B="0 0 0 0";C.5l=0}C["1D"]=1;C=4s(C,\'2B\',\'2B\');C=4s(C,\'cH\',\'cH\');if(I(C.gM)){if(C.gM!=20&&C.2B=="-20 0 0 0"){C.7s=C.gM}}B 1b=1K("1R");K(1b,{\'1k\':\'1X\',\'1e\':0,\'1g\':0,\'Y\':(C.gL==1?\'100%\':o.9v),\'1a\':C.h-(C.1k!=\'1g\'?C.7s:0),\'Qq\':C.a,\'3I-2F\':\'1N\',\'fh\':\'h3\',\'tx\':\'h6\'});o.1Q.1J(1b);B bg=1K("1R");K(bg,{\'Qo\':\'1X\',\'Qu\':0,\'Qt\':0,\'Pr\':\'100%\',\'1a\':C.h-(C.1k!=\'1g\'?C.9b+C.7s:0),\'1w\':C.a,\'2q\':\'47\',\'2B-1e\':C.3K,\'2B-2j\':C.4k,\'3g-6n\':C.6F});1b.1J(bg);w=1b.2k;v.cR=-C.7s;if(C.5l==1){if(C.1B==\'3P\'||v.1A.aJ!=\'\'){if(C.1k!=\'1g\'){v.cR=98-C.h}B 41=\'1P:aJ/tB;gz,Pq+Pv/T/D+Pf/Pe/Pi==\';if(v.1A.aJ.O("1P:aJ")>-1){41=v.1A.aJ}K(bg,{\'1a\':C.h+(C.1k!=\'1g\'?v.cR:0),\'2v\':\'1c(\'+41+\') eV-x 50% 100%\',\'2v-3M\':\'2y\'})}F{B fm=\'to 2K, 4B(\'+mq(C.1B)+\',0), 4B(\'+mq(C.1B)+\',1)\';K(bg,{\'2v\':\'-jP-2T-5l(\'+fm+\')\',\'2v\':\'-3N-2T-5l(\'+fm+\')\',\'2v\':\'-ms-2T-5l(\'+fm+\')\',\'2v\':\'-o-2T-5l(\'+fm+\')\',\'2v\':\'2T-5l(\'+fm+\')\'})}}F{K(bg,{\'2v-1B\':C.1B})}G.h=E(){P C.h-(C.1k!=\'1g\'?C.7s:0)};G.c=E(){P 1b};G.s=E(1h){P C[1h]};G.g=E(x){if(1b){a6(x){1o"w":1b.2k>0?w=1b.2k:\'\';P w;1n;1o"Y":P 1b.2k;1n;1o"1a":P 1b.2V;1n;1o"x":P 4V(1b.C.1e);1n;1o"y":P 4V(1b.C.1g);1n;1o"1w":P 1b.C.1w?1b.C.1w:1;1n;1o"1v":P 46;1n;1o"3u":P 3u;1n;1o"3m":P 3m;1n;1o"1h":P 1h;1n;1o"x0":P x0;1n;1o"y0":P y0;1n;1o"a7":P 1h+a7;1n;7c:P J}}F{P J}};G.2a=E(1h,x){a6(1h){1o"1v":46=x;1n;1o"w":w=x;1n;1o"2q":K(1b,{"2q":(x&&!o.tf?"47":"1N")});46=x;1n;1o"1D":K(1b,{"2O":"1D("+x+")"});3u=x;3m=x;1n;1o"3u":K(1b,{"2O":"3u("+x+")"});3u=x;1n;1o"3m":K(1b,{"2O":"3m("+x+")"});3m=x;1n;1o"1w":K(1b,{"1w":x});1n;1o"1e":K(1b,{"1e":x});1n;1o"1g":K(1b,{"1g":x});1n;1o"Y":K(1b,{"Y":x});1n;1o"1a":K(1b,{"1a":x});1n;1o"x":K(1b,{"1e":x});1n;1o"y":K(1b,{"1g":x});1n;1o"x0":x0=x;1n;1o"y0":y0=x;1n}};G.43=E(){o.1Q.3a(1b);1b=2e}};if(1Z(3B)=="5c"){Dn()}o.G=G;if(3B.id){if(1S.7N(3B.id)){tn()}F{1S.1z(\'PB\',94)}}F{1Z Dt==\'E\'?Dt():\'\'}E tn(){if(I(3B.id)){if(1S.7N(3B.id)){if(!CH(1S.7N(3B.id))||3B.46==1){94()}F{1I(tn,50)}}}}E 94(){X(B i=0;i<7k.S;i++){if(7k[i].2Q("id")==3B.id){if(7k[i].2Q("7a")){7k[i].2Q(\'2D\')}}}7k.2W(o.G);B 2D=J;if(I(3B.3q)){X(B i=2;i<10;i++){if(3B.3q==i&&o[\'u\'+i]!=\'\'){v=8T(v,4w.6i(d0(o[\'u\'+i])));2D=H}}}if(o.u!=\'\'&&!2D){v=8T(v,(1Z o.u!="3z"?4w.6i(d0(o.u)):o.u))}if(1Z(PO)!="E"){X(B 1h in 3B){if(3B.2J(1h)){if(1h.O("Ds")==0){3B[1h]=2e}}}}v=8T(v,3B);if((!I(v.3r)||v.3r==\'\')&&v.PW==1){1x(\'6V\');P}if(v.Dg==1||v.tk==1){1V.1z(\'9E\',E(1i){B x=2g;B y;I(1i.1P.1d)?x=1i.1P.1d:\'\';I(1i.1P.1W)?x=1i.1P.1W:\'\';I(1i.1P.Df)?y=1i.1P.Df:\'\';I(1i.1P.2Q)?y=1i.1P.2Q:\'\';if(y&&v.sJ){if(v.sJ!=\'\'){B pm=v.sJ.22(/\\s+/ig,\'\').2I(\',\');if(pm.O(y)==-1){P}}}if(v.tk==1){if(1Z(DG)=="E"){DG(1i)}}if(y&&o.9k){if(I(1i.1P.2a)){x=1i.1P.2a}6D(y,x)}})}X(B 1h in o.fx){if(o.fx.2J(1h)){o.fx[1h]!=\'\'?o.hv+=o.fx[1h]+\' \':\'\'}}1x(o.7S+\' \'+o.hv);fY=v.id;o.d=9C.tj;if(bX){B kf=J;3p{if(bX){if(bX.1S){B jC=bX.1S.d9("DI");X(B i=0;i<jC.S;i++){if(jC[i].o9===1V){o.7F=jC[i];o.ki=H;v.DD!=1?K(o.7F,{"3g":"1N"}):\'\';o.Dw=o.7F.C;1x("bP")}}}F{kf=H}}}2Y(cQ){kf=H}if(kf){o.ki=H;1x("PI-hI")}}o.ki&&1S.tg?o.hI=1S.tg.2I(\'/\')[2]:\'\';!o.DA?HK():\'\';if(1Z(Ih)=="E"){if(Ih()){P}}o.9k=H;Io();B Ip=1C 6B();if(Ip.PK()==20){if(5U(1,20)==10&&v.PL!=0){k5(o.tA,o.tA);1I(E(){if(1V.ga){ga(\'fA\',\'UA-PP-6\',\'2y\',{\'6Y\':\'7K\',\'PQ\':H});ga(\'PR\',\'HY\');ga(\'HY:Pm\',[o.d]);ga(\'7K.9J\',\'1i\',{HW:\'jf\',I2:\'94\',I5:o.d})}},du)}}if(v.ga==1&&v.I3!=1){if(1Z HS==\'E\'){o.ga=1C HS()}}o.1E=1S.7N(v.id);if(!o.1E){v.1x=1;1x(\'id "\'+v.id+\'" aP fB\');P J}o.1E.1U=\'\';K(o.1E,{\'3e\':0,\'Po-dv\':\'hZ\'});o.a0=o.1E.2V;o.a2=o.1E.2k;if(I(v.hU)&&!I(v.4R)){if(I(v.hU.4R)){v.4R=v.hU.4R}if(I(v.hU.lw)){v.lw=v.hU.lw}}if(o.1E.C.Y.O("%")>-1){o.Pw=o.1E.C.Y}if(v.4R=="7Q"||o.1E.C.1a.O("%")>-1){v.4R="%";o.mA=o.1E.C.1a;o.a0=0}if(o.a2==0){if(o.1E.C.Y.O("px")>0){o.a2=2z(o.1E.C.Y)}F{if(o.1E.5g.C.Y.O("px")>0){o.a2=2z(o.1E.5g.C.Y)}F{if(o.1E.5g.5g.C.Y.O("px")>0){o.a2=2z(o.1E.5g.5g.C.Y)}}}}if(7f(v.4R).O("x")>0){o.4R=v.4R.2I("x")[0]/v.4R.2I("x")[1];if(o.a0==0){o.a0=o.a2/o.4R}}F{o.4R=0}K(o.1E,{\'1k\':\'fl\',\'5y-gW\':\'sW-5y\',\'1F-6Z\':\'1e\',\'-3N-dl-fk\':\'1N\',\'tc\':\'lf-lc\',\'7P-1a\':15,\'fh\':\'h3\',\'2M-1a\':\'h6\',\'GG\':\'GE\'});if(v.bY==1){K(o.1E,{\'5y-bY\':\' 0 HL Px 4B(50,50,93,.1), 0 hz HL 4B(0,0,0,.Qp)\'})}if(o.4R>0){K(o.1E,{\'1a\':o.a0})}F{K(o.1E,{\'1a\':o.a0==0?o.mA:o.a0})}if(o.a2==0){K(o.1E,{\'Y\':\'100%\'})}o.1Q=1K("1R");K(o.1Q,{\'1k\':\'1X\',\'5y-gW\':\'sW-5y\',\'6A\':v.lT,\'1B\':\'#3U\',\'Y\':\'100%\',\'1a\':\'100%\',\'1e\':0,\'1g\':0,\'fh\':\'h3\',\'2M-1a\':\'h6\'});if(v.H1!=1){o.1Q.C.6w=\'3t\'}if(v.QH==1){o.1Q.C.6A=\'fR\'}if(v.3g==1){K(o.1E,{\'3g\':v.Ij+\'px 6M \'+v.8V})}o.K=1S.1K(\'C\');o.K.1G=\'1F/K\';o.1Q.1J(o.K);o.1Q.5X("id",\'QC\'+v.id);sM("7o, 7o > *{1k: sO;1g: 2y;1e: 2y;6w:46;GG:GE!5C;5L-Y:1N!5C;lA-1j: Qg;2O-GJ: 7g 7g;5y-gW:sW-5y!5C;-3N-GS-Gh-1B: 4B(0,0,0,0);-3N-GS-Gh-1B: fR;1F-NH:0!5C} 7o 41{5L-Y:1N} 7o > *:6c {Gt: 1N} 7o,7o a,7o a:NX,7o a:OW,7o a:fJ,7o a:t0,7o a:6c{1B:#fI;4a-3M:100%;}#Hp"+v.id+"{Y:100%!5C;1a:100%!5C;5L-Y:1N!5C;5L-1a:1N!5C}7o bP{2q:47!5C;5L-1a:1N!5C}");l2(1);if(1V.Hh){B Hi=1C Hh(E(e){if(e[0].tC.S>0){X(B i=0;i<e[0].tC.S;i++){if(e[0].tC[i]==o.1Q){vY()}}}});Hi.Pb(o.1E,{P6:H})}o.dS=1K(\'bP\');4t(o.dS,{"id":"OO"+v.id,"Hz":"no","1T":"","tD":"H","Hw":"H","H2-kY":"H"});K(o.dS,{\'1k\':\'1X\',\'Y\':\'100%\',\'1a\':\'100%\',\'3g\':0,\'3I-2F\':\'1N\'});o.1Q.1J(o.dS);o.1E.SI=E SH(e){o.l3++;if(o.l3==5){v.1x=1;1x(o.7S+\' \'+o.hv+\' \'+o.ht)}if(!e)B e=1V.1i;e.6g=H;if(e.an)e.an();B x=e.g9-ex(o.1Q);B y=e.je-hs(o.1Q);if(v.SD==1){if(I(v.kJ)){if(4p(v.kJ)!=\'\'){o.ul=v.kJ;I(v.GZ)?o.fs=v.GZ:\'\';v.kJ==\'1N\'?o.fs=o.d:\'\'}}}tG(x,y);P J};E tG(x,y){if(o.fs.O(o.d)==-1||v.GW==1||v.4v==1){if(!I(o.4v)){!v.nP?v.nP="3P":\'\';!v.sL?v.sL="3U":\'\';o.4v=1K(\'1R\');B 1O;B n=0;X(B i=0;i<10;i++){if((v[\'rm\'+i]==1&&v.4v==1)||i==9){if((I(v[\'rm\'+i+\'t\'])&&I(v[\'rm\'+i+\'a\'])||i==9)){1O=1K("uo");if(i==9){if(v.SW!=1){1O.tY=o.ul+(v.Hb==1?" "+o.7S:\'\')}F{1n}}F{1O.tY=v[\'rm\'+i+\'t\']}if(i!=9){if(v[\'rm\'+i+\'a\'].O(",0/1")>-1){B z=v[\'rm\'+i+\'a\'].2I(\',\');1O.tY+=\' (\'+(2Q(z[0].1u(4))==1?2G(\'on\'):2G(\'7Q\'))+\')\'}}1O.5X("i",i);HB(1O);1O.1z("2E",Hr);o.4v.1J(1O);n++}}}K(o.4v,{"1F-2O":"Ss","2M-1a":"1","92-7Y":"bF","2v":nR(v.nP,0.7)});if(n>1){K(o.4v,{"3e":"hz"})}o.4v.C.4A="Tr";o.4v.hx=Ht;o.1Q.1J(o.4v)}F{6h(o.4v)}K(o.4v,{"1k":"1X","1g":y,"1e":x,"1F-6Z":"1e"});B tL=J;if(o.3V-x<o.4v.2k-20&&v.H1!=1){K(o.4v,{"1e":x-o.4v.2k});tL=H}if(v.Ty==1||tL){K(o.4v,{"1F-6Z":"2j"})}o.Gp=x;o.Gf=y;3k(o.lj);o.lj=1I(E(){3c(o.4v)},3L)}}E Ht(){3k(o.lj);o.lj=1I(E(){3c(o.4v)},3L)}E Hr(e){B i=e.4h.7W("i");B y;B tW=J;if(i>0){if(i==9){o.fs!=\'\'?1V.5Y(o.fs):\'\'}F{B x=v[\'rm\'+i+\'a\'];if(x){if(x.O("2Q:")==0){if(x.O(",0/1")>-1){B z=x.2I(\',\');B b=o.V.tJ(x,"2S");B u=2Q(z[0].1u(4),z[1],b);js(z,u);tF();tG(o.Gp,o.Gf);tW=H}F{y=x.2I(",");2Q(y[0].1u(4),(I(y[1])?y[1]:2e))}}if(x.O("2X:")==0&&o.2X){o.2X.2Q(x.1u(6))}if(x.O("js:")==0){y=x.2I(",");2t(y[0].1u(3)+\'(\'+(I(y[1])?\'"\'+y[1]+\'"\':\'\')+(I(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}if(x.O("1c:")==0){1V.5Y(x.1u(4))}}}!tW?3c(o.4v):\'\'}}E HB(x){K(x,{"3e":"tT hz","4a-3M":(v.GM?v.GM:"55")+"%","fy-dv":"0.R6","1w":0.9,"1B":v.sL});x.1z("m9",GQ);x.1z("o7",Gz)}E GQ(e){K(e.4h,{"1w":1});K(e.4h,{"2v":nR(v.nP,0.5)})}E Gz(e){K(e.4h,{"1w":0.9});K(e.4h,{"2v":"1N"})}o.1r=1C HQ();if(o.1r.5H){B rE=(v.HF==1?\'*::-3N-R-V-1H-S8-nF {2q: 1N!5C;-3N-rG: 1N;}\':\'\');if(v.jD==1&&v.HH!=1&&(v.HX!=1||!o.1r.9y)&&(v.HJ!=1||!o.1r.fV)){}F{if(o.1r.5H&&v.nV==1){}F{rE+=\'6j::-3N-R-V {2q:1N !5C;}*::-3N-R-V-RO {2q: 1N!5C;-3N-rG: 1N;}*::--3N-R-V-1L-nF {2q: 1N!5C;-3N-rG: 1N;}\'}}B 1O=1S.1K(\'C\');1O.1G=\'1F/K\';1O.1J(1S.Ic(rE));o.1Q.1J(1O)}if(o.1r.rK){v.44==1&&v.IF==1?v.44=0:\'\'}if(o.4R==0){if(o.1Q.2V==15&&!o.mA&&v.HZ>0){K(o.1E,{"1a":v.HZ})}}if(I(v.rR)){v.1f.fu=v.rR}if(I(v.mg)){v.1f.mf=v.mg}if(I(v.1H)){o.2w=v.1H}gK();1I(E(){js("9k");if(v.3S){if(1Z v.3S==\'E\'){v.3S=v.3S.6Y};2t(v.3S+(v.3S.O(\'()\')==-1?\'("\'+v.id+\'")\':\'\'))}},1)}E gK(){1x("gK");o.W=1C HU();if(!v.3r){v.3r="?"}if(v.pl){v.3r=v.pl+o.ci}o.K1=nw();o.HV=0;o.5r=rO();if(o.5r){if(3w.5D("rA")!=2e){o.rz=3w.5D("rA")}F{o.rz=nw();3w.7w("rA",o.rz)}if(v.rh==1){if(3w.5D("ri")!=2e){o.4g=3w.5D("ri")}}if(v.I7==1){if(3w.5D("rg")!=2e){v.9g=3w.5D("rg")}}X(B i=0;i<o.bA.S;i++){if(v[\'I8\'+o.bA[i]]==1){if(3w.5D("HP"+o.bA[i])!=2e){}F{v[o.bA[i]+\'s\']=0}}}8C("HO");8C("If")}o.iC=o.8D.1u(o.8D.O("://")+3);if(o.iC.O("#")>0){o.iC=o.iC.1u(0,o.iC.O("#"))}if(o.5r&&v.c7==1){o.3v=1C JS()}if(v.lG==1){o.5F=v.Jq;Ft(o.1E,"5F",H)}v.fE==1&&v.lG==1?o.fE=1C Ko():\'\';v.ab==1?Jh():\'\';if(v.Iz==1){o.aW=1C IP();o.aW.cW()}o.R=1C H9(v.3r);if(!o.1r.2C){o.1Q.1z("MC",E(){o.5m=H;o.kT=H;o.V?o.V.Ha():\'\'});o.1Q.1z("MR",E(e){if(!o.3D){if(v.1A.8B>0){3k(o.Hu);o.Hu=1I(E(){if(o.5m!=o.kT){o.5m=o.kT;o.V.Hs()}},v.1A.8B*2A)}F{o.5m=J}o.kT=J;if(o.V){o.V.kG()}}});o.1Q.1z("Mt",E(e){o.3D=H});o.1Q.1z("9q",E(e){o.3D=J;if(!o.59){o.8s=J;o.cA=J}1I(E(){o.6c=H},4c);if(o.1r.2C&&o.V.mF()){}F{o.V?o.V.eh(e.5T,e.8w):\'\'}if(v.gs==1){if(o.V.bO()){o.V.7t()}}});o.1Q.1z("rw",E(e){if(I(o.V)){if(o.3D){o.V.e5(e.5T,e.8w)}F{o.V.w5()}}})}F{1V.1z("Mp",CQ,J)}v.rv==1&&1Z Hy==\'E\'?o.rv=1C Hy():\'\';o.4q.1z("e2",E(e){o.3D=H;o.5m=H;o.kz=J;kr("1H",e)},{e1:H});o.4q.1z("bJ",E(e){if(o.3D){o.kz=H;kr("MU",e)}},{e1:H});o.4q.1z("cV",E(e){o.3D=J;1I(E(){o.5m=J},4c);if(v.my==1){B 9t=1C 6B().9s();if(9t-o.9u<(v.gQ?v.gQ:0.3)*2A){nX(e)}}!o.kz?eH(e):\'\';o.kz=J;kr("4F",e)},{e1:H});3p{1V.1S.1z("9q",E(e){o.6c=J;if(!o.59){o.8s=J;o.cA=J}if(o.3D&&o.V){o.3D=J;o.V.eh(e.5T,e.8w);o.V.kG()}if(!o.5m&&!o.1r.2C&&!o.1r.tv){o.V.cg();if(o.3n){o.3n.aA()}}})}2Y(cQ){}1V.1S.1z("rw",E(e){o.V&&o.3D?o.V.e5(e.5T,e.8w):\'\'});o.1Q.1z("e2",E(e){o.lA=H;o.3D=H},{e1:H});o.1Q.1z("cV",E(e){o.lA=J;o.3D=J},{e1:H});1V.1S.1z("bJ",E(e){if(o.V&&o.lA){o.V.e5(e.bV[0].g9,e.bV[0].je)}},{e1:H});1V.1S.1z("Ni",E(e){B x=e.4h.j8.ka();if(x==\'ro\'||x==\'rq\'){P}F{o.V?o.V.Hk(e):\'\'}});1V.1S.1z("Nj",E(e){B x=e.4h.j8.ka();if(x==\'ro\'||x==\'rq\'||x==\'1R\'){P}F{o.V?o.V.Hj(e):\'\'}});if(o.7F){sz(bX.1S,FE)}sz(1S,Fs);E sz(x,z){B y=[\'\',\'jP\',\'3N\',\'ms\',\'Nt\'];if(x){X(B i=0;i<y.S;i++){x.1z(y[i]+(i<y.S-1?"NA":\'\'),z,J)}}}if(!I(o.dS.o9)){1x("NB");P}F{o.dS.o9.1z(\'4T\',jK,H)}if(!o.1r.2C){o.4q.1z("2E",eH,J);if(v.jU==1&&v.my==1){o.4q.1z("GU",nX,J)}}kg();if(v.52){v.52.on==1?o.52=1C N0():\'\'}v.5O==1?o.5O=1C MW():\'\';v.eP==1?o.eP=1C MY():\'\';o.V=1C sI();if(v.c6.Ge){o.m7=v.c6.Gd}aF();hP();if(o.5r){if(v.sG==1&&v.1W!=0&&!o.1r.2C){if(3w.5D("sD")!=2e){v.1W=3w.5D("sD")}if(3w.5D("il")==1&&v.nc==1){v.5o=1}}if(v.Gk==1){B sp=3w.5D("Gx");if(I(sp)){if(sp.O(\'.\')>0&&o.eR){o.W.8y(sp,1)}F{if(o.4W){B fa=o.4W.O(sp);fa==-1?fa=o.4W.O(sp*1):\'\';if(fa!=-1&&o.V.GK(\'5h\')){o.8W=fa;o.R.8y(o.4W[fa])}o.V.GP()}}}}B vP=J;if(v.s9==1){X(B j=0;j<o.aN.S;j++){if(3w.5D("nf"+o.aN[j])!=2e){v[o.aN[j]]=3w.5D("nf"+o.aN[j]);vP=H}}}if(o.1r.2C){if(!vP){v.vO&&v.vO>-1?v.cC=v.vO:\'\'}if(I(v.GB)){v.ny=v.GB;6q(v.GA)?v.ns=v.GA:\'\'}}}if(o.3v){B f=o.3v.av();if(f.t&&f.d){o.V.gw(f.t,f.d);o.V.4l(f.t,f.d);v.1q=f.d}}o.W.42(v.1W);if(v.5o==1){o.W.4Z();o.V.4r()}o.8d=1C vV();if(v.6F>0){if(v.gs==1||o.az<120){K(o.1E,{"3g-6n":(v.6F+"px")});K(o.1Q,{"3g-6n":(v.6F+"px")})}F{Gy()}}if(I(v.9p)){vE("9p")}if(I(v.eu)){vE("eu")}if(I(o.1f)){js("1f")}if(v.7z==1&&v.ID==1){o.W.mj()}X(B i=2;i<10;i++){if(I(v["cl"+i])){if(v["cl"+i]=="2C"&&o.1r.2C){6D("cl",i)}}}1I(jK,4c,H)}E eH(e){if(o.wl[o.4q]>2){P}o.mN=H;v.gQ==0?v.my=1:\'\';if(o.jG&&v.dD==1&&!o.1r.tv){nX(e)}F{B t=(v.gQ?v.gQ:0.35)*2A;jB();3k(o.HA);o.HA=1I(E(){o.b5=0},t+4Y);if(v.my==1||(v.jU==0&&v.2c.nT!=1)){wg()}F{o.jG=1I(wg,t)}}o.b5++}E wg(){jB();if(o.1r.2C){if(o.V.mF()){o.V.w5();P}if(o.fW){if(v.Gg==1&&v.Rg==1&&o.1r.9m){P}if(v.nV==1&&v.Rf==1&&o.1r.5H){P}}}if(o.b5>1&&v.2c.nT==1){o.b5=0;P}o.b5=0;v.dD==1?o.W.eH():\'\'}E nX(e){jB();B y=J;if(v.2c.nT==1){if(e){if(v.2c.T3==1&&!o.1r.2C){}F{B x;if(o.1r.2C){x=e.TE;if(!x){if(e.H5){x=e.H5[0].g9-ex(o.1Q)}}}F{x=e.PH}if(x){if(x<o.3V/2){if(x<o.3V*20/100){6D("4d","-"+9c(v.2c.DJ,10)*o.b5);v.2c.2H==1&&v.2c.uO==1?7i(\'4d\',0):\'\';y=H}}F{if(x>o.3V-o.3V*20/100){6D("4d","+"+9c(v.2c.DJ,10)*o.b5);v.2c.2H==1&&v.2c.uO==1?7i(\'4d\',1):\'\';y=H}}if(y){if(e.an)e.an()}}}}}if(!y){if(v.jU==1){if(v.jD==1&&o.1r.2C){}F{o.2o?o.W.8O():o.W.7B()}}}}E jB(){3k(o.jG);o.jG=2g}E jK(x){if(o.DK!=o.1Q.2k){x?o.DK=o.1Q.2k:\'\';jK()}F{hP()}}E hP(){B y=J;if(o.9v!=o.1Q.2k||o.az!=o.1Q.2V){y=H}kg();o.V?o.V.4T():\'\';o.R.4T();y&&!o.2o?js("4T",o.9v+\',\'+o.az):\'\'}E kg(){B xw=o.1Q.2k;B xh=o.1Q.2V;if(o.V){if(v.E1==1){if(v.1f.1k!="2K"&&o.V.d7("1g")>0){B x=o.V.d7("Eb")+o.V.d7("1g")+5+o.V.d7("Ea")+9c(v.NP,0);K(o.1E,{"1a":x})}}}if(o.4R>0&&!o.2o&&!o.dr){xh=xw/o.4R+9c(v.uB,0);K(o.1E,{"1a":xh})}if(!o.2o&&!o.dr&&!o.bm){o.9v=2P.5b(xw);o.az=2P.5b(xh)}if(o.1r.2C&&o.2o&&v.Cw==1&&v.vu!=1&&as.d3){if(o.4R>0){if(o.4R<1){B sp=as.d3.uy(\'CG\');if(sp!==2g){sp.bw(E(){}).2Y(E(2b){})}}F{B sp=as.d3.uy(\'v8\');if(sp!==2g){sp.bw(E(){}).2Y(E(2b){})}}}F{B sp=as.d3.uy(\'v8\');if(sp!==2g){sp.bw(E(){}).2Y(E(2b){})}}}o.3V=xw;o.4S=xh;if(I(v.1T)&&o.V){v.1T!=\'\'?o.V.CK():\'\'}if(I(o.hR)){o.R.1D(o.hR)}if(o.2i&&!o.2o){o.2i.2L()}o.3n?o.3n.2L():\'\';o.aW?o.aW.2L():\'\';o.5O?o.5O.2Q(\'4T\'):\'\'}E aF(){o.W.jo(v);X(B x in v){if(v.2J(x)){if(x.O("1T")==0){if(v[x]!=\'\'){o.uE=v[x];o.W.aF(x)}}}}o.eP?o.eP.Gb():\'\'}E 9A(1c,1E,1D){if(1c){if(1c!=\'\'){if(1E==o.29&&1c==o.vv){}F{if(1c.O("#"+v.aD)==0){1c=o[o.fd[0]](1c)}if(1c.O("#0")==0){1c=aS(1c)}1c=uP(1c);1c=1c.22(/\\s/g,\'%20\');B s="vq";if(1D=="3j"){s="CN"}if(1D=="1N"){s="2y"}if(1D=="RX"){s="100% 100%"}K(1E,{\'2v-aJ\':\'1c(\'+1c+\')\',\'2v-eV\':\'no-eV\',\'2v-1k\':\'7g\',\'2v-3M\':s});1v(1E);1E==o.29?o.vv=1c:\'\'}}}};E 15X(x){if(x.on==1&&I(x.2R)){x.2R=uP(x.2R);B y=1K("1R");if(x.2R.O("3o")>-1||x.2R.O("//")==0){B z=1K("41");z.2R=x.2R;y.1J(z)}x=8T(x,v.Fr);x=4s(x,\'2B\',\'2B\');K(y,{\'1k\':\'1X\'});if(x.1k.O("2K")>-1){K(y,{\'2K\':x.9b})}if(x.1k.O("2j")>-1){K(y,{\'2j\':x.4k})}if(x.1k.O("1g")>-1){K(y,{\'1g\':x.7s})}if(x.1k.O("1e")>-1){K(y,{\'1e\':x.3K})}o.1E.1J(y)}};E Fs(){if(o.2o&&!uC()){o.W.vZ(H)}F{if(o.dr||o.5m){uC()?o.2o=H:\'\';o.W.vy()}}1x("2o",o.2o)}E FE(){if(v.lG==1){Ft(o.1E,"5F",H)}}E 15E(){1x("d3 "+as.d3.la)}E CQ(){if(2P.CZ(1V.d3)===90){1x("v8");if(v.vu==1){B ok=H;if(v.CF==1&&!o.1H){ok=J}if(v.CE==1&&!o.1L){ok=J}if(o.2i){ok=H}!o.2o&&ok?o.W.7B():\'\'}}F{1x("CG");if(v.vu==1){o.2o?o.W.8O():\'\'}}}E uC(x){!x?x=1S:\'\';B y=J;3p{y=!!(x.WD||x.WE||x.WL||x.WU||(x.WV!=2g))}2Y(e){y=J}P y}E CH(x){P x.2k==0&&x.2V==0};E vY(){X(B x in o){if(x.O("Cy")>-1){4f(o[x])}if(x.O("Dd")>-1){3k(o[x])}}1x("XV")}}',62,4284,'|||||||||||||||||||||||||||||||||||||var|style||function|else|this|true|exist|false|css||||indexOf|return||media|length||but|controls|actions|for|width||||||||||||height|control|url|time|left|playlist|top|key|event|action|position|settings|pjstg|break|case|icon|duration|system||hide|substr|show|opacity|log|playlist_dic|addEventListener|toolbar|color|new|scale|container|text|type|start|setTimeout|appendChild|createElement|play|hls|none|tmp|data|frame|div|document|title|innerHTML|window|volume|absolute|svg|typeof|||replace||||faction|||poster|set|error|hotkey||null|subs|undefined|dash|vast|right|offsetWidth|files_quality|pip|_o|fullscreen|tip|display|vasturl||eval|subtitle|background|seekto|file_type|auto|parseInt|1000|margin|mobile|stop|click|events|Lang|icons|split|hasOwnProperty|bottom|Resize|line|Play|transform|Math|api|src|linkurl|linear|open_action|offsetHeight|push|share|catch|Pause|||||||||||removeChild|points|hide2|tiptext|padding|current_quality|border|sub|files_subtitle|fill|clearTimeout|_type|scaleY|droplist|http|try|player|file||hidden|scaleX|continue|localStorage|org|media2|object|www|options|xlink|mouseDown|xmlns|current_subtitle|stroke|handle|pointer|floatleft|marginleft|2000|size|webkit|f2action|000000|mediascale|muted|ready|plid|ffffff|screen_w|files|Seek|rows|keys||img|Volume|Remove|autoplay||visible|block|||font|path|500|seek|obj|clearInterval|default_quality|target|preload|youtube|marginright|Duration|clr|_to|delete|trim|mediacontainer|refresh|MarginPadding|attr|empty|rightmenu|JSON|dom|Object|is_hls|zIndex|rgba|custom|xhr|bgcolor|end|parseFloat|ShowOrHide|valuefontsize|values||f2title|transition|_from|Time|sbt|urls|aspect|screen_h|resize|vasttype|int|files_speed|folder|200|Mute||value|chromecast|butPosition|||plstart|||volumewheel|quality|round|string|settings2|Action|arr_up|parentNode|speed|shuffle|vast_loaders|m_to|gradient|mouseHere|Hls|mute|onOut|pause|storage||arr_down|1px|isLive|onOver|Motion|box|onError|valuecolor|current_audiotrack|important|getItem|vastloader|visibility|m_type|ios|dechar|animation|airplay|max|canvas|status|effects|ftitle|_value|cursor|SetQuality|clientX|random|casting|plx|setAttribute|open|bga|||tagvideo||||||||evntclk|isVisible|focus|is_dash|order|minutes|cancelBubble|show2|parse|video|UpdatePlaylist|charAt|captions|radius|files_audiotrack|UpdateText|exist2|slice|removeEventListener|1999|activeiconsize|toString|overflow|File|safari|out|backgroundColor|Date|obj2|apiProcessor|vast_and|rounding|audiotrack|state|line3|download|f2value|pointerEvents|solid|bgpaddingleft|StopWaiting|span|bgpaddingright|tips|aover|Unmute|UpdatePlay|remove|intro|_url|name|align|||||||||||playing|bg2|default|dashjs|_|String|center|HLS|PluginHotIcon|channels|pljssglobal|preroll|track|seconds|pjsdiv|control2|setInterval|com|margintop|Settings|hlsconfig|is_sleep|setItem|layer|timer|pass|fvalue|Fullscreen|Events|txt|alpha_div|parentIframe|vast_|body|FindBut|realfullscreen|pjs|redirect|motions|getElementById|embed|min|off|bgaover|version|floor|hours|ShowPoster|getAttribute|dash_created|space|current_url|||||||||||onWaiting|pipwebkit|concat|alert|next|https|_show|buffered|files_quality_ag|icn|vast_or|line0|hlsquality|Value|onEnded|area|stretch_width|loading|hidden_volume_over|ResizeText|is_ws|onClick|clientY|close|SetSpeed|all|ll1I|hideleavetimeout|SettingsTimers|href|gif|tipcrn|lines|sub_off|ease|Advertising|line3value|live|subtitle_on|ioff|Normalscreen|Waiting|preventDefault|over|created|UpdateObject|onPlay|bordercolor|current_speed|paused|reload|Arrows||lIll|white||Init||C15||||always|marginbottom|existv|audiotracks|tipbg|control_|default_audio|toolbarHidden|HlsLevelsLength|bgpaddingtop|init|ispipkit|android|leftBg|bgcolorover|midroll|mouseup|ctx|getTime|now|clicktime|normal_w|Array|bgpaddingbottom|iphone|destroy|Poster|scroll|location|val|message|waiting|SetSubtitle|loop|is_live|send|stage_x|_cul|tag|but_x|dashquality|Switcher|info|actionstt|vertical|rotation|Background|isVastBgLoad|scrollLeft|stage_y|lastwheel|reloadTimer|container_h|replay|container_w|charCodeAt|VAST|onDuration|switch|motion_id|_cstm|audio|upld||media_error|hls_created|MediaReady|_css2|updateSettings|ended|_keyStr|streaming|loaded|rule|Retimer|stopPropagation|ddj||m3u|native|screen||gaTracker|flag|_hide|evntovr|End|normal_h|Close|Status|scrollbgcolor|enc2|Stop|Title|vast_poster|vimeo|evntout|image|onMouseUp|sec|salt|sub_options|SubtitleChanged|not|Scale|MediaPlayer|fd0|C13|Playlist|bitrate|quiz|onclick|search|linecap|curtain|||fontsize|_speed|clicks|pause_before_vast|00|fbg|f2id|CreateItem|StyleItem|qualities|xbg||Clickable||CustomSwitch|butplstart|600|||fullscreen_process|browser|ShowOrHideProcessor|DashLevelsLength|title2||console|pjs_i|Tip|ldr|then|label||Sub|vsts|_rb|thumb|VastRemoveAndPlay|onMeta|nowrap|lang|onTimeupdate|metadata|touchmove|plhistory|vast_impressions|cubic|CalculateClick|SettingsVisible|iframe|line1|but_space|currentFile|but2|noads|touches|rldcnt|parent|shadow|hlsaudio|||||delta|unmute|control_title|timestore|onload|HideControl|DASH|||source|300|customtext|SettingsClose|inline|pltxt|CreateHLS|rightside|design|hiddenwidth|ellipse||dashconfig|iconscolor|iconsover|iconangle||responseText|nbsp|tipalways|||NewFile|hidden_volume_over_process|3px|sub_bottom|wheelstep|handleicon|PlayerState|scrollTop|marginproc|controlover|hidedown|timeline|kbps|_start|items|pjs_id|tagframe|err|toolbar_margintop|CheckColor|line2|onMove|touchend|Start|nonzero|range|10px|decode|cuid|l1lI|orientation|onVolume|Toggle|hex|PlaylistG|PlaylistNext|getElementsByTagName|SetAudioTrack|toolbar_hide|forcehide||vast_longtimeout|nativecontrols|channel|PlaylistVisible|onPause|is_visible||user|ScrollTo|pauseroll|sub_shift|QualityChangedNoHand|custom_speed|fullscreen_start|floatwidth||3000|spacing|stout|line_width|poster_floatposition|dash_config|ll1l|toend|PipWebkit|screenclick|but_y|ActionPlaylist|mediapip|tmp2|shuffle_|bufferLength|control_line|_lastime|handle_width|groupId|sub_color|readyState|ControlClick|enc3|frameresize|overopentimeout|sub_color2|handlewidth|Dq9neNd|expand|settingsovertimer|fplace|Il1l|passive|touchstart|coh|starttimeout|StageMove|other|autohide|PlacePoints|dashaudio|topBg|textArea|RemoveCurtain||rightbs|stretch_with_volume|deltaY|StageMouseUp|C12|_ease|currentTime||Reload||Hide|err404v|hls_force|load|current|HideInterval|overlay||_step|findLeft|Curtain|sub_or|videoHeight|sub2|textTracks|subtitle_start|subupld|Error|texts|ScreenClick|url_shift|_status|buffer|nomute|butNames|AfterVast|L12|mediatags|pic|line_speed|XHR|C11|hideonpause|repeat|showoverto|hidejustfull|customline|ToolbarDown|prev|PlaylistNextExist||abc|hdicon|ObjectFit|levels|PlaylistPrev|titlestore|ratio|spd|Airplay|setSpeed||opn|bgpadding|default_style|fontSize|VastAddPreload|FindPlStart|select|relative|bgg|polygon|0259804|Home|vast_starts|_preloaded|brandurl||autoplaylist|vast_preroll_andlimit|nolimit|compilation|letter|maxBufferLength|create|found|VastNext|answer|minify|scrpt|recover|files_|fff|link|20px|Remove2|8px|plfolder|onmouseout|onmouseover|removeAttribute|transparent|scaleover|prm|SubtitleLoad|ipad|nativefull|pip_quality|pljssglobalid|_control_|TimeSub|srt|87798468|playlist_source|svg0|shareiconscale|_play_i|scrollleft|letterspacing|pageX||_wait|result|file_separator|embedvars|hls_config|float|bottomside|weight|Thumbs|TagPlay|_seekaftervast||loading_error|pjs_parent|parentcontainer|Rot|48743763|hidevideo|ni2|Off|iconreplay|Played|f2bg|m3ut|base64|hls_stuck_time|CustomText|reloadErrorTimeout|616046|htto|BufferStop|clicked|details|subload|pl_first_id|Ready|stretchonfullscreen|paddingtop|memory|gain|L11|dclckto|hlsDashSub|onSeeked|onSeeking|seeking|yamtrid|sizing|vast_longtomsg|speeds|Subtitle|shift|airplayed||14px|sub_sizeproc|alpha|1em|sub_settings_on|dontplay|SubtitleSettingsMenu|speed1|_max_order|canvas2||ssfontsize|ctx2|file2_separator||autoQuality|days|justshow|ymax|Show|offsettimerminute|offsettimersecond||hidetimeout||findTop|playerid|ResizeSettings|compilations|resizePlaylist|onmousemove|showovercontrol|5px|SetSetting|tipbga|SettingsN|removed|AirplayChanged|limitmaxwidth|update|sxs|domain|HideForce|998|hlschangequality|ShowForce|toolbarInterval|NativeControls|MainResize|navigator|custom_aspect|posterhide|volumescroll|playersize|poster_scale|ToolbarShow|seeking_time|hidewithoutmoving|normal|chrome|_activeIcon|playById|mode|dasherror|PlaylistControls|UpdateSpeed|xtitle|autoLevelCapping|unshift|HistoryPlaylist|rect|tippadding|||||pointscontrol||186|headfontsize|pljsmute|pointed||family|google|volumewheelin|05||timeFormat|tippointer|Mouse|heartbeatInterval|win|fatal||thumb_width|rotation2|href2|33571875|hidden_volume|400|PluginSub|hlsautoquality|StyleLine|hideoutmute|heartbeat|gatracked|event_y|span05|clickarea|floatheight|sourceBuffer|handlehide|RenewPoints|tipbgcolor|999|l3v_left|StyleArrow|l3v_show|VastRecover|hand|file3_separator|event_x|scrollarrows|clickmargin|ScrollOverOut|AudioTrackChangedNoHand|limitwidth|plurls|tagName|mediaSource|files_channel|HidePoster|mouseUp|Update|pageY|Player|0933314|openById|PlaylistHere|forbidden_quality|PlaylistRewind|open_settings|PlaylistExist|scrollarrowsize|TitleTemplate|wait|handleiconspress|floatlimitwidth||SettingChanged|while|isTypeSupported|6642813|postroll|PlaylistShow|opera|onplay|ClearClick|frames|nativecontrolsmobile|handleaover|currentLevel|click_t|tipfontsize|HlsUpdateAudio|loadLevel|FrameResizer|480p|shareiconscaleover|small|Ended|moz|suboptns|brd|dvrtime|_timeout|doubleclick|onStep|_steps|full|getHLS|vol|CreateTip|tippaddingtop|_hlssubtracks|fileTimeout|copy|Script|_dashsubtracks|tippaddingleft|hls_subs|FileTo|toLowerCase|audioTrack|current_plurl|done|KeyPlusDown|exception|MainUpdateSize|KeyPlusUp|iniframe|getBitrateInfoListFor|fit|vast_preroll_and2limit|getDASH|num|scrollarrowcolor|resizeonwidth|started|Touch|subdrag|onDown|fcdef|autonextopenfolder|037|UpdateVars|stretch_width_last|mouseMove|_t|omt|newfile|yaCounter|YoutubeReady|gao|StageLeave|gifed|HideProof|rc_label|thumbs_on|youtu|code|eventstracker|urls_and|vast_type|ssflyp|offsetLeft|hmaxk|mouseHere2|clientWidth|ceil|and|scrollwidth|scripts|playlist_title|sleeptimerminute|but_h|datetime|rightclick|sleeptimerhour|UpdateVars0|_fullscreen_end|VolumeWheelX|Download|leftandrightpadding|angle|scale_i|serif||poster_aover|sans||ResizePlaylist||rightout|poster_a|333333|RenewSubtitle|StringVar|VastLoader|0px|RemoveMedia|match|wait_to|||resizeonplay|changeheight|marginbg|errorMessage|jpg|touch|dashInterval|join|offsettimer|dash_subs|pauserollonplay|observer|Load|mini|bigint|YoutubeID|wheelinterval|documentElement|seeked|copied|autoprevopenfolder|restart_audio|sub_weight|_lastactbut|screencolor|recover_decoding_error_date|FileType|recover_swap_audio_codec_date|sub_bgcolor|sub_bga|killMotion|sub_shadow|||||UpdateTime|mlr|title_template|audiosrc|mouseover|CustomToogle|twitter||153204||playlistrewind|playlistloop|noclick|timeshort|Password|vastonmobile|_readyonplay|NativeExitFs||unmuteplease|SelectText|hexToRgb|||lngth|fspr|quality_received|ff0000|stuck|click0timeout|SubtitleError|container_h_procent|PipSize|imgldd|_stopped|Recover|ToolbarHidden|C10|ssa|CreateDASH|SubtitleLoad2|bgo|subsor|saturate|acted|bgh|_prevIcon|_ended|isPlaying|selection|BeforeVast|polyline|240p|colorbg|quartile|6px|gaTrackPlay|showinterval|100000|53790984|timeline_h|360p|1080p|rld|container_id|720p|svg3|timeld|ShowLayer|mutestore|customdesignsvg|_blank|pljs|facebook|iconsreplay||hideAllIcons|playroll|YouTubeIframeAPIReady|PlaylistError|playVideo||playbgcolor|pjs_|rotate|sub_size_fullscreen|edge|IconsColor|doctype|randomstr|toggle|sub_size|youtube_id|onerror|linkurl2|adsfirst|hideuntilto|navigationUI|button|handlescale|bgcontainer|onClickSubtitle|find|picture|72532408|thumbnails|copyObject|isvg|rmbgcolor|decoration|hex2rgb|abr|seeksides|marginprocleft|nativefullios|sub_all|DoubleClick|autoSwitchBitrate|fid|response|showtitleplaylist|HidePoster2|lastTouch|openplaylistbefore|pjs_share_link_|iconscolorover|mouseout|videoWidth|contentWindow|_i|vars|icon2|setQualityFor|timerInterval||onPipEnter|ie9|script|deltaX||Share|dash_play|||denied|removebykey||bgl|last|insertBefore|vastfrombg|ima|timerTime|_css|order0|offset|CreateWS|Heartbeat|fjs|PlaylistLoad|_rights|Captions|StartTimeout|onPipLeave|ErrorReload|_move_rights|sub_upload|contentDocument|worked|startLoad|1440p|chr|playerjscom|NativeEnterFs|Playing|play75|play50|is_hls2|getTracksFor|bg_hide|toolbarhidden|tagsurl|playiconbut|StopMedia|introstart|3600|toggleControl|posterhidepause|reloadlog|stringify|midrolls|2160p|play25|IndexPlaylistProcessor|fts|HlsSleep0|HlsSleep|debug|ws_created|getQuality|ErrorMsg|msRequestFullscreen|||hls_started|HlsLevel||vts|||End2|playsinlineonmobile|livewakeup|maxMaxBufferLength||getAudioTrack|_tags|but_w|moveOr2end|RadioTags|160p|posteronpause|tagSrc|fontnames|pepper|LoadedData|gained|vastclick|RemoveForNextAd|HlsAudioTrack|VastGo|reloadtimeout|pstr_to|Metadata|webkitRequestFullScreen|request|dontload|heightInterval|audioctx|m3ui|outro|Seeked|exitfullscreen|MseIsSupported|||vast_midroll_limit|PlayerSize|preloaddash|fromCharCode|IndexPlaylist|removeTracks|midrollo|isAuto|isNaN|checknative|prototype|ChangePip|skip|nativeControls|VastPreloaded|mozRequestFullScreen|MidrollOverlay|HlsAudioTracks|iOSTrackLoaded|_recover|AudioContext|vastgo|recovery|MseRenameQualities|VolumeWheel|fullblack||onYoutubeReady|vast_preload|pipto|requestFullscreen|CheckPip|Dashed|normalscale|nextLevel|dash_init|encoded|hlserror|pp2|VastVisible|volumewheelfull|wheel|dashlowquality|pjs_parent_i|current_file|VastPreloadLoad|CreatePoster|MediaYoutube|incorrect|RenameTracks|NewAspect|audioTracks|enabled|requestFullScreen|sleep_timeout|255|overlays|onTagError|Preload|WaitSize|||splice|performance|vastcontainer|Prefile|VastVideo|start2|UpdateVolume|valuepadding|cntrls|scrollarrowbgcolor|scrollarrowbg||valuemargin|pljstrack|qualitystore|pljsquality|C14|onYtPlayerReady|thumbs||Places|input|RenameQualities|textarea|played|SetCurrentQuality|startwait_t||geo|mousemove|||userid|pljsuserid|bgborder|borderRadius|clickscaley|ioscss|bgbordercolor|appearance|96189913|timeline_w|offsetwrite|mobiletv|historybga|querySelectorAll|5017903|StorageSupport|handlecolor|deg|autonext|historybgcolor|historytitlea|ReplayIcon|TipText|vtt|cnt|ass|btm|SubtitleParse|||||hidetime|UpdateStart|settingsNumberVisible|iconopacity|sub_designstore|ClickArea|pljssubtitle|hideonplay|control_start|linkurl0|bgcolorlink2|imageLoaded|||marquee|sub_store|urlcnfg|playbgcolored|last_text_w|Marquee||borderbottom|postsmbl||resizeFromText|ytautoquality||pauseVideo||_set_quality|FSL|noprevicon|presmbl|Rotate|pljsvolume|resizetxt|zoomed|volumestore|headbordercolor|Controls|postmessages|floatmarginright|rmcolor|pushCSS|tipbgrounding|static|Shuffle|tipcolor|tipfont|9830753|tipa|tipletterspacing|SettingsParser|content|_time_load|81389961|animate|active||||||thumb_height|43706564|thumb_border|5629344|50539216||fontFamily|viewBox|share3|hidecontrols|referrer||sharer|hostname|pjsframed|embedsize|ClickAction|VisibleCheck|||winWidth|winHeight|L13||activeicon||49474569|lineHeight|59038667|doc|gaurl|png|removedNodes|allowfullscreen|handleiconpress|reRightMenu|RightMenu|onup_to|xvalue|butByS|write|tmpr|976|onUp|91628571|paddingleft|paddingright|coloroverplay|handleiconover|4px|LineScale|handlea|dont|settimer|innerText|over_final||086||||||||||062|099|EndMove|handlehideinit||HandleWidth|025|ShowHandle|927|AddPlgn|brand|SubtitleTimerMenu|UpdatePoints|div2||VisibleItems|toFixed|DVR|L10|remember_sub|plopenid|ControlOut|HidePositionControl|lock|leftright|cpm|screenmarginbottom|isFullscreen|Loading|maintitle|firefox|quick|tem|arrinterval|ShowShare|Text|re_y|sub_reset|effect|seekiconbut|checkBase64|JsEvent|drawImage|updown|youtubeposter|TitlePl|resizetext|ssfontcolor|sstext|resizeme|CustomTextButs|sleeptimer|SettingsScale||mutedautoplay|updatePlaylist|PlaylistOpenId|PlaylistPrevExist|SubtitleLoadAll|landscape|marginbgpadding|toolbarisdown|TheEnd|Loaded|l1ll|mtp|ahd|marginbgcolor|resizeSettings||SubOpt||spn|piped|resizeonmouse|SpeedChanged|setaction|contain|ll11|playlistovertimer|QualityChanged|landscapefull|currentposter|lang_||FullscreenUI|Style|openplaylistroot|addtitleplaylist|hideuntilstarted|sub_font|str2obj|rename|poster_floatbgcolor|poster_floatwidth|stopkeys|poster_floatheight|addtitleplaylistbr|removeItem|SubtitleOff|SetSubtitle2|sub_bottommob|substore|SubUpload|valuefromlang|minw|sub_bgpadding|logout|Alert|apiprm|_currentIcon|Destroy|NormalscreenUI|fixed|show_playlist|||clck|StageMove2|desktop|pjslng|ToolbarHide|ControlCoordinate||pjsoffsettimer|firstly|destroyed|606|onClick2|ScreenClick2|ActionOptions|_stop|show_settings|StyleSubtitle|moving|fonts|smbls|FindIdPl||playerjs_|shareme||helvetica|scroll_left|ffdd1f||shwvstfnsh|arial|setQuality|playlistfolder|playId|offsetTop|share1|share2|rTZbQKSn|sharetitle|sharetop|square|vast_preroll_2andlimit|NfnAtfDA|analytics|embedhtmlstart|PlayerjsAsync|playerjs|last_ors|shareiconmargin|noindex|L16|700|showById|Width|removeNativeSubtitle|NativeSubtitle|nativeSubtitle|lI1l||||||I1lI|scrollHeight|bgclr|adscounter|sharebgcolor|shareclred|show1value|sharecolor|scroll_down|smallfontsize|cstm|scrollarrowgradient||scrollarrowbgover|_subfile|40px|_nextIcon|_xIcon|pressed|livets|scrollarrowbgovercolor|ShuffleEnd|offsetoptions|sleepoptions|ArrowsInterval|finish||||onPlayTag|tagsinterval|ReloadTimeout|setupx|alerts|alert404|onClickSubtitle2|onClickTimer2|second|18px|ffeeab|alert404text|minute|_reset|playedstored|access|bordercolored|alert404video|alert404v|hour|ScrollDown|ScrollUp|nohead|SubtitleSettings|posterhidestart|width100|alertsbga|limit||||||valuealign|alertsfontsize|file2|alertspaddingh|hidecontrol|alertsbgcolor|ShowTimeout|playByYoutubeId|alertscolor|alertspaddingv|PluginPip|posterhidetime|floatwidthsmall||FindFileInPlaylist|ControlOver|Wheel|PlaylistBack|ScrollLeft|plcontinue|ScrollRight|comment|historycolor|HidePoster3|220|floatheightsmall|StopOtherPlayer|stopotherplayers|historytitlestrike||Action2|666666|webkitCancelFullScreen|height_div|scrollX|Ease|str|elastic|getBoundingClientRect|width_div|poster_floatmargin|SubtitleBottom|poster_floatrounding|poster_floatshadowpx|Number|372|984|029|997|092|sugar|095|848|994|006|416|483|||962|url2|url3|lastIndexOf|adblock|sub_off_title|heartbeatinterval|default_subtitle|resume|fullonplay|redirectonplay|nameofyoutubequality|seekTo|getDuration|fullonplaymobile|isOpen|PluginThumbs|prefile|InvertPlaylist|sub_bgo|sub_lineheight|sub_big_fullscreen|reverse|sub_bg|subshift|ffect|FileReader|sub_off0|072||06|butseekto|keyframes||Scripted|isyoutube|youtubeready|_html|styleSheet|GET|SetChannel|XMLHttpRequest|VastBreak|setVolume|encodeURIComponent|geobj|full_hours|vast_adid|Playerjs|pjslog|rel|wrapper|VastInfo|toLocaleTimeString|getContext|full_minutes|playlist_id|parentElement|Papi41|_ue|_ud|notv|Browser|hexToRGBA|224|MSIE|033|007|003|msie|Playback|device|yaHit||gtag|reachGoal|PlayerjsEvents|postMessage|ga_event|Yandex|together|Sleep|High|yamtr_event|getPlayerState|redirectonclick|074|0306373|358|049|177|70098039|Stopped|ct2|timebreak|90342661|1907336|1861004|223|ontouchmove|mozCancelFullScreen|msExitFullscreen|cancelFullscreen|exitFullscreen|0785714|frmvst|6265714|unset|1411563|16114286|L19|timelimit|timelimited|winTop|vast_prestarttimeout|winLeft|vast_longtimemsg|element|VastLongTimeout|Pop|embedhtmlend|embedheight|home|preloaded|php|isVpaid|ovr|rest|0645937|0725739|advertising|PluginIntro|9616447|midrollimprsd|createTextRange|getSelection|current_vast_url|IconSVG|0956563|cancelFullScreen|HideLayer|61928677|ytcl|iframe_api|youtubecontrols|passontime|774328|playedstore|playedquartile|7378707|0454574|Quartile|reloadlive|Youtube|onQualityChanged|yterrors|Qualities|endfull|seeked_time|yamtr|customyterror|PlayingChecker|onYtPlayerStateChange|PLAYING|ENDED|4959714|openpl|2464991|PostFullscreen|25712408|M12|93409913|fs_error|4877241|iosExitFullscreen|whatsapp|M14|50032408|8215241|9211241|intros|60588467|finishrewind|14130702|8345227|TheEnd2|8361812||||||||0638991|9390991|6327241|L14|embedwidth|PluginErrorVideo|durationchange|UpdateLoad|volumechange|loadedmetadata|_duration_load|timeupdate|UpdatePlaySeek|enterpictureinpicture|marginprocbottom|marginproctop|ControlsBgClick|sort|leavepictureinpicture|files_scale|CreateThumb|showing|landfullmobile|thumb_shadow|Interval|subtitles|addTrack|linetippointer|thumb_bordercolor|thumb_borderwidth|lsfullplay|lsfullstart|portrait|isHidden|thumb_radius|ControlX|updateTitle|alwaysnotfullscreen|alwaysjustpause|cover|hidewithoutplaylist|customText|OrientationChange|hideoverwidth|hideoverwidthlimit|valuemarginright|hidevar|valuemarginleft|hideonwidthlimit|hideonwidth|showShare|abs|restart|_time_play|muteiconbut|seekwindow|back|normalscreen|linkpause|screenshot|linktarget|titlepl|ssflyw|1001|_duration_play|timeout|setHlsAudioTrack|method|postmessage|index|DashAudioTracks|nameofdashquality|dashaddbitrate|HlsQualityLevels|nameofhlsquality|optStr||AudioTrack|hlslowquality|audioGroupIds|rc_|PluginReplace|DashQualityLevels|sourceBufferValidAPI|parentIframe_style|changeAspect|nopause|wrong|prted|network|onLoadedData|notframe|SourceBuffer|mimeCodec|PjsFrMsg|MediaSource|IFRAME|seeksidesec|screen_lw|Rectangle|gainedsource|connect|volumegain|nextAutoLevel|Gain|autoLevelEnabled|webkitSetPresentationMode|setCurrentTrack|setHlsQuality|setDashAudioTrack|setTracks|setDashQuality|evenodd|autoplaymute|1800|change2playlist|1200|900|rename_audio|540p|426|640|ControlsBg|Continue|margin_bottom|scroll_height|360|handleinit|hidevar2|unhidden|hidesec|bgw|action_settings|tipmargin|tipvar|filter|DisplayControl|with_min|minus4back|with_hours|RenewFromTitle|control_duration|noClickTimeout|zoom|bgcolorlink0|5000|Bglines|bgstretch|iconmargin|clickscalex|mobileover|iconmargintop|iconmarginbottom|hideafterclick|Click|selectOpen|iconmarginright|iconmarginleft|_a|prevorius_default_w|linespeed3|gradientcolor|linespeed2|colorload|linespeed1|gradientcolorload|customdesign|FFFFFF|valuebgcolor|handlemargin|valuebg|valuerounding|valuesize|gradientcolorbg|ontop|315|translate|_w|displayvolume|roundout|prevorius_default_h|7px|Buffer|Color|ControlLine|SvgColor|HdIcon|hidewithposter|Hideuntilto|openplaylistpause|pointw|270|pointa|setting|pointcolor|hideonvolume|leavetimeout|playonhover|current_thumb|HideElement|CancelBubble|yOffset|xOffset|logo|FullscreenChange|Visibility|tippaddingbottom|hideuntilmeta|tippaddingright|thumb_bottom|hideonfullscreen|toptip|linetipmarginbottom|HideAnimate|ShowAnimate|ShowControl|ParentFS|unfixing|Volumescrolled|SettingsTimer|icon3|rotateplaying|inversetime|hlscaptions|opposite|scalesmall|picheight|bold|topside|openplaylistafter|unblock|_icon|controlCSS|action2|clickmargintop|PlaylistMove|UpdateSettings|PlaylistPlayId|handleiconsover|UpdateTimer|Exist|nums|187|clickmarginbottom|Control|keyCode|which|plusminus|onLoadStart|read|dvr|template|templated|right_y|nativefulldroid|highlight|callback|CreateMedia|speedstore|fileto|FileTimeout|reYT||right_x|PipToggle|10000|movable|outline|Timeout|PipSwitch|Live|pljsspeed|PluginRounding|RightOut|sub_sizemobfull|sub_sizemob|fragment|frag|ltr|Timer|direction|sub_upload0|maxresdefault|origin|SettingsExist|dashcookies|rmsize|imageExists|YouTube|SettingsSpeed|RightOver|hls_stuck_duration|tap|vast_posterurl|dblclick|hlscookies|rc_anyway|40000|hlsfto|rc_labelurl|playsinline|notofh|allow|customBuffer|hlsmto|changedTouches|hlsdebug|hlsaudio_off|hlsvastwait|Media|StageOver|rc_version|newQuality|hlsquality_off|framei|MediaVideo|dashaudio_off|MutationObserver|obsrvr|KeyDown|KeyUp|stableBufferTime|current_time|anonymous|buffer0|pljs_yt_|PluginMovable|RightClick|Review|RightMove|leavetimeout2|mediadrag|allowtransparency|attached|PluginGeo|scrolling|click_t2|RightCSS|ParseUrl||preloadhls|hidestartbutios|isSupported|nativenotios|PluginFloatPoster|nativenotipad|prtObj|15px|hlsTextTracks|livewakeuptime|sleeptimer0|pljsfirst|System|supported|PluginOldGA|m3u8|Actions|sesstime|eventCategory|nativenotiphone|linker|playerheight|ErrorTypes|ERROR|eventAction|ga4|Level|eventLabel|poster_float|trackstore|vast_nofirst|WaitDash|FlussonicMsePlayer|mpd|createTextNode|HlsRecoverMediaError|crt|offsettimerinit|HlsLiveWaiting|PjsFr|cdn|bordersize|loadSource|dashdebug|recoverMediaError|dashquality_off|CustomFonts|today|rand|62369913|79828571|69428571|36152408|78569913|91252408|88589913|76252408|quizes|42432408|90889913|46112408|passonstart|60952408|autoplaynomobiletv|49829913|52352408|89792408|16112408|34889913|06192408|scale1|scale0|vast_midroll_vmap|PluginQuiz|48629913|M17|39769913|02432408|73312408|97129913|70972408|09932408|73852408|scale2|98752408|timer2|28392408|50989913|hlsdvrtime|5723438|27949913|26192408|03369913|98389913|64309913|98549913|17432408|883875|17269913|72892408|00849913|PluginBlock|08569913|vast_postroll_vmap|1310991|0068991|0038991|3092991|scroll_right|4871241|startvisibility|00069913|70329913|50092408|6100991|7997241|9996991|49672408|9978991|vpaid_timeout2|12492408|1148991|eventstrackervast|2357241|01549913|81329913|18772408|01469913|5781241|28889913|5473241|49132408|01349913|4865241|scroll_up|vast_resound|14009913|7581241|TimeStore|5003241|vpaid_slotinframe|00029913|C16|0008991|through|4685241|01289913|sessid|3958991|3443241|6532991|3695241|9699241|250|scrollWidth|64769913|80932408|235|partnermidrollor|60889913|3699241|9280991|3197241|38992408|handlemarginright|partnerpauserollor|web|3780991|partnerprerollor|89532408|PluginMini|PluginShare_whatsapp|partnerpostrollor|9825241|2028991|L17|execCommand|8142991|handlemarginleft|vpaid_timeout|57329913|9589241|55677205|4089931|39285947|0254896|073DA0|vast_unmutebutcolor|0203322|vast_openclick|1945595|D90000|78152031|644082|66394451|82476969|5495798|06600745|4557651|6017798|1461085|vast_unmutebutbgcolor|91554129|75264618|FEF370|90280076|62378254|76053503||||||b3fee8|54028255||||d9bb8c|83887768|89905178|92444761|39594688|86775181|vast_preroll_vmap|55161471|4bd9ac|80589866|5646609|56501681|9481644|591821|18940216|27203981|6399635|2176147|1213742|3701951|046119|vast_unmutehover|2904441|91761122|545084|158849|4774119|1533357|3811714|0134958|2547336|3351462||7454539|handlemargintop|handlemarginbottom|490814|1667378|4324598|01249004|3468113|00668076|3602134|04688705|97987656|706974|3524524|6935719|3658545|3870176|0174202|2536879||51661242|vast_default_volume||vast_unmutebutonce|8450875|25694808||6306539|13718414|rldnornd|525863|71310145|4310991|8833241|5810991|7310991|7255241|94929913|81892408|37689913|onMouseOver|2155241|0339241|8180991|orientationchange|onmousedown|9932991|2800991|mousedown|9056991|feba54|e8bbff|0213241|93169913|32872408|faed54|67729913|mouseenter|80612408|69872408|75949913|62de50|83449913|61112408|onMouseOut|61009913|02932408|54409913|17872408|63169913|45709913|94772408|mouseleave|87332408|53509913|move|4843241|PluginEffects|9829241|PluginMediaTags|vast_pauseroll_vmap|ChromeCast|0266991|onmouseup|9894991|8587241|2829241|borderBottom|3186567|45846159|225|5011287|47186369|6001007|borderRight|PluginShare_telegram|M15|8898991|7465241|keyup|keydown|5794991|2095241|ffc7d1|1843241||3796991|3343241|4792991|aaaaaa|MSFullscreenChange|3091241|5904991|6715241|7398991|8542991|2593241|fullscreenchange|Local|7168991|72ccf8|26c0|54866401|5798291|indent|shuffle8|74734142|84924851|65174939|86810611|24660331|85641921|change2playlist_bottom|79137169|1782179|77251408||1938004|39074182|16597325|visited|35178546|835402|53995424|0769314|12014413|53370204|69316331|1901646|31646496|90967882|8524226|72704574|8022411|4897677|777689|8769747|24362617|1161475|86483105|46721646|1869905|63201142|05663568|15818198|1279354||0670433|02664888|1197833|72576646|pjs_thumbnail_|969112|03088803|05147059|04681373|9818627|3404412|2857843|7735294|7243243|0737745|000|81698842|8247549|74749035|0867647|8666667|31274131||7490196|8030888|3683824|pjsfrrs|M10|86718761|5974074||7530359|60771911|8884018|hover|1560223|68019712|8689236|77097501|40514608|20257304|6959766|51658043|PluginDroplist|childList|16089933|current_channel|9713884|9480146|observe|4558853|68926767|RWAlnQyyazA4aoAB4FsBSA|kbq|moveToElementText|hlsqhsort|bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg|current_|upload|accept|autoLink|pressed_|word|createRange|iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT|width_|31446009|72728083|addRange|OqFAAAAdklEQVQoz42QQQ7AIAgEF|container_w_procent|35px|selectNodeContents|removeAllRanges|plus|DOMContentLoaded|PluginShare_|onchange|pjslng_|pinterest|M16|offsetX|Cross|share15|getDate|srvsga|tumblr|webshare|pljscom|88484718|allowLinker|require|viber|frameborder|reddit|telegram|emptyremove|005212|2793122|9518092||3982733|4570635|53462054|19180463|4153898|51242501|644054|15013093|7060285|950631|59305507|18283508|5739326|47890336|024648|manipulation|77497165|484333|27361297|8816878|1454127|62539844|15729686|position_|07|opacity_|92524947|0727459|top_|left_|00904312|6447345|hidearrow|shape|209383|84355402|73447623|oframe|5898759|speed4live|200000|7271472|transbg|56138996|0156863|806|993|053c1|343|682C1|173L2|248|421|paddingbottom|507|321|966|211|013|359|087|marginRight|148c0|439|676|577|301|15em|459|443|419|307|629|556|555|641C7|nfsclios|nfscldr|667|357|026|534|474|447L2|569|redirectplaylist|261|588|892c|285C5|471|198l0|749C18|902|699|951|585|introtxt|896|203C15|941|808|799|introtitle|694|introskiptime|90490625|midrollpoint|798|introclickable|749z|panel|introclosetime|913|035|022|actn|938|247|455|stretch|05c0|5em|roundingver_final|offsetwidth|387c0|sub_settings|minivis|default_channel|786|282|playback|fimg|f2img|059|078|791|777|356|642|562|222l|075|729|012c|371|619|718|087c|446|291|uppercase|pjslng_sub_sizeproc|901|077|073|593|051|675|136c|104h|dropnohide|rc_custom|0088235|2242647|6864865|ContextMenu|oncontextmenu|59305019|5906863|68725869|3127413|8191176|contains|825|079|521|782|404|749c|M18|rc_nobrand|hidesmoothly|997c|4155588|021|468C8|434|seeksidesmob|759|384C8|669|692|682|754|397|641|323|715C8|802|958|703|335|666|691|f2parent|618|595|054|303|396|219c|99999|546|234|099c|012|963|21c|rmright|952|273|741|472C7|099C7|layerX|297|203|304|4526875|getVideoLoadedFraction|getSettings|attachSource|sess|Infinity|autoplayed|disabled|WebKitPlaybackTargetAvailabilityEvent|webkitShowPlaybackTargetPicker|available|availability|webkitplaybacktargetavailabilitychanged||destination|nativenotandroid|water|wid|PluginWater|pjsstat|createMediaElementSource|Dvpieuhhar0OHHsYzkl5AHsYBkITBZ4YAkIhHrsTBZ4YAkIhHroVCrd1zrdhHroVCrd1zrMhHrsTBG44BnIhHrsYzkl5AHsYBkITBG44BnIhHrdVBno0BHo0CrdTAG41CrhnCrhnBGpABZ43ArE1ArE4BZXYzkEYAHMYAHM1wsX4zkEYAHMYAHM1zroVBno0BHo0CrdYwsX4zkI4CrA4CrA1zroVBno0BHo0CrdYwsXYBq4ZCHI0CHIYzrMVBrsYBksYBkIhHrs0zkw5BHE5BHsTBj41wsXYBq4ZCHI0CHIYzrMVBHh4Anh4AnIhHrhVBHh4Anh4AnITAHwVAkl1Brl1AGpACq40AHs2AHs2BGXYAj4ZCHI0CHIYwsX3zkdXBrIXBrh3zrsYzkI4CrA4CrAhHrdVBno0BHo0CrdTAHsVBrsYBksYBZpAAHsVCHlYAHs2BGX3zksZBGpbxZpNbKYTDGdkaNaNaNaNxZ8|nativeontv|heartbeats|Dq9ODkXWd3aODjwTwNtkeumWcjw6wN5mfvEjzqx0fLpmwkPjd3aOwjXjd2BicuIjCksVAjXjdu9nbLFQc24jCjx0c3ojzqxUMLxObK4jCjwZArohAqoXwrlXwjXjbKBWcOBkc2YWdjw6wNaNaNaNajx9zqxkc250dN9TL3BPMLxmwkQ7wN9ZauJZwkPYAjXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|createGain|DudhaNmTcr0OwnoXAroXAqdhevxicOBNc3xUDGe0dNtVd2YieuIPAGXhAqlODkYXMLFPwuE9x001zkd3Ars2Crh5zrsZzkAZBHM5AHlhEnIVAHh0AndnArhTAHwVCrl3BHh4Cqo0zkA4AnA0AHI3zrsnzkw1wrAVBGXYAZ4ZBGprAG43ArIXBnE1BjXYAZ4ZBGoXzkw1zrsYzkd5BrlZBHEhAq4ZBGXYAqprAq4ZBGX4zkwXBHo3BrI2wrsVBno1Ard0BHMTBj43BGonzkITBj43BGprBq4nBnsnAnd2AGX2zkd1wrIVAHMZBHh3ArATBZ4XCHw4CHhnAGo1zkd0Bks2CrETBZ42BHsYAHIXBZpAAHsVAnh3AkwnAGX0zkoYAroXCHA3wsXYAj4ZAro2CrETBG4ZBnoZBnl3AGpABj41Bkw1Ano3BGX4zklXCHIYAkMnwsA2zkM4AnlYAHl1zrlVAkIXAnd2AHAhBj43BGX5zkMYBnE3ArwZwrMVBnITAHohEnMVBnITAHoVAndXBndZAGo2zkM4BnlYAks1zrsXzkdZBno0AklhBj41BnA1BkMZBqXYAG4XBHh5Crw1wsXYAj4ZBrh3Akhnzrs0zkM2Ars3BnAhHrsYzkE0BHo0BnATAHIVCHw2Bno2CqpABG43BnoYBkh4CGXYAj4nAkI2CHs5wtPhHHsnzkITBj43BGprAHsVBno1Ard0BjX2zkd1wrsXzkw1zrIVAkl0CHw1BrEhAHoVAkITAZ41wsAYAq4ZBGXYzkdXBHo3BrI2wrsYzkdXBHo3BrMTAq4ZBGoYAZ41zroVAkIhEns1zkw5BrlZBHETAq4ZBGoYBj43BGXYzkdXBHo3BrI2wrs2zkd1zrAVBGprAHMVBnITBG4ZCHE5AkI0BqoYBG4ZCHE5AkI0zrMVBnIhAHAVBGX2zkd1wtPhHHAVBGXYAG43BGprBq40BkM0CHhnAGXYAG43BGo1zkw1zrsXzkl2BkE5CrAhBG4ZBGXYAqprBG4ZBGX5zkonAnIXAHM5wrEVBrM2Brl4AnsTCq4ZBGonzkITCq4ZBGprAj41AnA1Ars2CGX4zkw1wrsVBnITCG4XAnA1Ars2CGoYzkd1zrsXwsAYzkd1zrsXzkl2BkE5CrAhAj41AnA1Ars2CGXYAG43BGonzkITAHsVBnIhKjpBAHAVBGX1zkw1wsAYBq40BkM0CHhnzrIVAkIhAHIVAkITBq40BkM0CHhnAGoYBG4ZBGXnzkIhEns1zkw1zrwVBHAnBHoYBklhAHEVBrM2Brl4AZXYzkd1wrsnzkITAG43BGprAHwVBHAnBHoYBZXYzkd1wrsYzkd1zrwVBHAnBHoYBklhAHsVBnITAZ41wsAYAG43BGX0zkE2BkE5CrAYwrsZzkInAnIXAHdTBG4ZBGoYAZ41zrIVAkIhKjpBAHAVBGXYCG43BGprAHsVBno1Ard0BjXYCG43BGoYAq4ZBGXYCq4ZCHE5AkI0wrsXzkw1zrs2zkIhEnsXzkw1zrs0zkdXBHo3BrMhAHsVBno1Ard0BjXYAZ4ZBGoYAZ41zrsnzkw1wsAYBG4ZCHE5AkI0zrsnzkw1wrs2zkd1zrs0zkdXBHo3BrMhAHMVBnITAHMVBGprAHMVBnITAHhVAkl0CHw1BqoYBG4ZCHE5AkI0zrs5zkd1wrsnzkITAHlVBnIhKjpBAHAVBGXYCq4ZBGprAHEVBrM2Brl4AZXYCq4ZBGoYBG4ZBGXYBZ40BkM0CHhnwrs1zkw1zrs2zkIhEns1zkw1zrs1zkInAnIXAHdhAHEVBrM2Brl4AZXYBq43BGoYAZ41zrs0zkd1wsAYAj41AnA1Ars3zrs0zkd1wrsYzkd1zrs1zkInAnIXAHdhAHsVBnITAHMVBGprAHsVBnITAHdVBrM2Brl4AZoYAj41AnA1Ars3zrs4zkw1wrsnzkITAHhVAkIhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxiM3FQc24jCjxnbutZaGwTwOF5duIjCjxneNdjzqxXc3BQeumWcjw6wOFWdq1ZbKePeqwTwN1idNeQcjw6wkIXwrsnwrohAqwTwNxOwkPXzqxja28jCksTwOBkMKYmwkPjAq44wjXjMNeXMKFlbK5OwkPjBjo2wrMhBjwTwNxOMGw6Aq4nzqxja2tWeNJZwkPXzkMTwNtVbK1ieumWcjw6wN5WcNIjzqxmMLBmwkPjaKYid3FQMZwTwNsjCjwXzkMjzqxic3amdjw6wksjzqx0bLojCkoTwNxOM29Tc3wjCjwXAroXArojzqx0bLpja2BWcu9ZwkPjaNaNaNaNwjXjd2BicuJWeNJZwkPjzHsjzqxQM29Vd2BWcu9ZwkPjaNaNaNaNwjXjeumXM29Tc3wjCjxiArA3Bksjzqx0bLpja2sjCjwYwO0TwNYicNdjCjxmcjwTwNiTdZw6AGXjd2J0eumVa3AjCOTjd2J0eumVa3A0wkPYzqxnaLF0bK5OdnFiM3FQc24jCjxlc3eVcu9iaqwTwOaicvJmM29Tc3wjCjwXAroXArojzqxkeLB0c21nduJmavAjCkoTwOpiauFQcNdjCjw1wrdhBGo3wjXjcN9PaKtlwkPXzqxNc250d2m6aGw6AHwTwNBWcu9ZwkPjAroXAroXwjXjMNekc2YWdjw6wNamMns2AZwTwNxOMGw6wksjzqxXc3BQeumWcjw6wOFWdq1ZbKePeqwTwN1idNeQcjw6wkE1wrs1wrohAqwTwOxWeK5lbK5OwkP1zqxja2BWcu9Zc3amdjw6wNamard5MGwTwOBmevFQcNenAKtkeumWcjw6wOBXaKJlwjXjd2J0eumVa3AZMKB0bK9VwkPjd2YmaLp0bK1mdjwTwOBmevFQcNenA2tkeumWcjw6wN9NaOBmevFQcKJZwjXjMN9ZauJZM29Tc3xmaqw6AGXjMN9ZauJZM29Tc3wjCjxmANtkBHhjzqx0bLFTaKBWcu9ZwkPjaNMXAroXwjXjbuJiauaWcOFnbLQmwkPYBqXjd2J0eumVa3AYwkPYgGXjd2iidNJQM29Vd2BicuIjCjwZwjXjd2iidNJQM29Vd2BicuJWeNJZwkPjAZ41wjXjd2iidNJQM29VcKtZa2mVwkPYAqXjduYifKYQd3EjCOTjeNtTeKJkc2YWdjw6wNaNaNaNajwTwOeQavFPAHoXwkPYzqxicveifLAjCksTwN1idNeQcjw6wkAXAqoXwrwhAHojzqxZc3JVaumVaZw6AqXjMNeiwkPjAqwTwNxOM29Tc3wjCjxNaNaNaNMjzqxPbLB0c3x5eum0cuJnevxQb2IjCkoTwNiQd3FWdOmja2BWcu9ZwkPjakeNB2M3wjXjaN9Veqw6wl9XaK4hI2tVdZwTwNiQd3FWdOmkc2YWdjw6wNaNaNaNajwTwNt1eu9Xcut5cumneqw6AGXjdu9nbLFQc24jCjx0c3ojzqxPcKt4bZw6AqXjM29Tc3wjCjxNaNaNaNMjzqxja2BWcu9Zc3amdjw6wNaNaNaNajwTwNxWdNFmdNBWcu9ZwkPjBkM1CHFiwjXjbuJiauxWdNFmdNBWcu9ZwkPjaNJkAHMnwjXjaNYWMLFTaKa0wkPXzqxTbK1QeveQavFPwkPXzqxnM3xWcuYidOxWe3AjCksTwOBkdN9TcutZdN93a3xiaummcOEjCksTwOBkdN9TcutZdN93M29Tc3wjCjxNaNaNaNMjzqxnM3xWcuYidOxWe2xOwkPXzqxnM3xWcuYidOxWe2xOM29Tc3wjCjxNaNaNaNMjzqxnM3xWcuYidOxWe2xOc3amdjw6AqXjd2BZc2YTMLxZc3eja292aLxkc2YWdjw6wNaNaNaNajx9zqx2MLB0wkPXzqxXdNJZc2YTdZw6AqXjd2iidNI0wkPjeuJTaKeZMK0jzqxnbutZaHIjCjx3but0d2tXdqwTwNiQauJ2bKFmcZw6AGXjduYifKJZbuJQa2i0wkPnAnMTwNtnduJkeqw6wN9NajwTwOBPMLxmeum0cuIjCksTwOBPMLxmeu9XwkPjAq4ZwjXjcu9Wdqw6AqXjd2i1aNaTaGw6AqXjdN91cNFQcNdjCksXzqxkbutVa2IZduYifKYQd3EjCksTwNaQcuIjCjxcf3pRdZeYevFQeuYmduQnx3t0COpRdZeYeBqi0zLFhBq40M8YduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6zZ9XcvxRdZ5kc20Wd2tUduYmzN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYeBqi0zLFhBq40M8ZduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6zZ9XcvxRdZ5kc20Wd2tUduYmzN1XBvpRdZeYev1ewjXjduYifKJZe2mleuhjCkw4AqXjaN9VevAjCksTwNaWcOFVMK1mdZw6wl9XaK4hI2tVdZwTwNxWdNFmdjw6AqXjMN9ZauJZM29Tc3wjCjxlaKFmauIjzqxXc3B0aLxgaNYWMLEjCksTwOpWd3Fmdm9Ncu9ievxWeK5lbK5OwkPYAqXjdu9neuJZbumlaGw6AqXjdu9neuJZL2aTc2t0cKtZa2mVwkPjAkohAqoXwrojzqxXc3B0aLxgaNYWMLFPaKmObvEjCksnAqXjdu9neuJZL2aTc2t0e2mleuhjCksnAqXjdu9neuJZL2aTc2t0MNekc2YWdjw6wkhXBkl1AGwTwNBWcOFZc2YgH0xNEI0jCOTjc24jCksTwN9ZauJZwkPYCqXjMKB0bK9VwkPjM3Jneu9UwjXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwuaQcuX9xZBNaNaNaNMOwvFZMK5naN9ZcH0OevxicOBTMLFmyroVBGXhAqlODkYXMLFPwuE9x004zksnAnhXCHITAHwVCHdXBkM2BZpACq4YAnA4Arl1zrhVAHEZCrI3AHEhHrdVAkA1AnhYzrhVAHEZCrI3AHEhHrIVBns1AnhYzrlVBkdXArl1AkEhHrMVAnoYBkM2BZXYAq4ZCrInAnAnwsX3zksXBHo5BHwTCG40Bkd0Akh1BZpABZ4YArIXCHIZzrsZzkl3ArM2BkdhHrhVAHAnCro5BGXYAj45Bno2BkM3wtPhHHsXzkhZBHE3BkwTAHAVArI3BHwnCqprAHsVCHlXCro5BGXYAZ4XBHd1AkA4wrsZzkd1Cro0BnMTAHwVBrsnAnAnAZoYAj43BHhXBrd2zrsYzkA4BHIZAnhhEnsZzkd1Cro0BnMTAHoVBro4AnhYwrsZzkoZBnlXBrhTCG44AkwXCHIZBqoYAG4ZAHo5ArE4zrlVCrwZArl1AkEhEnsXzkd2BnI3AHETCG44AkwXCHIZBqoYAq4nBnh1AkA4zrlVCHl1Cro5BHwhAHoVAHE2zrsXzkwZBnEZCrMhHrsXzks0BjX5zko0BnMYCHo1wsXYAj40AnAZAnhYzrlVArE3Bks5ArIhHrsZzkEnAnwnCrsTCq4YBrw4BHdYBqpACG4YAHlXCHIZzrhVAHEZCrI3AHEhHrlVAHs5Arl1AjXYAq45AHIXBrd2wsX5zkhnBHM2BkdTAHsVAHonAkA4AGprAHoVAHw1AHlXBGXYAq44AkhYCHo1wrsXzkE1ArlXBrhTAHoVBnsZAnhYwrsXzkh0CGXYAq43AHwnCrshEnsYzkA5Crs5ArITAHoVBnsZAnhYwrsYzkdYBnI3AHETAHsVAroYCHo0CqoYAG43AHd1Bns0zrsYzkEZCrl1AkEhEnsYzkdYBnI3AHETAHsVCrs5Cro5BGoYAG4nCHs4BHdYzrsZzks0BHIZAnhhAHoVCrs5AHEZCGXYAj4YBrI1AkA4wsAYAq4nAHw0BnMZzrsZzks0BHIZAnhhCG44BkA3AHEnzrsYzkl1BnAnAnAhCG41AnhTAHsVBks3AHEZCGpACq45BkhTAHwVAnAnBns0AZprCG4nBnl2BkM3zrsZzkd4AkE3BkwhCG45Crd2BkM3zrsnzko1BnIZAnhhAHoVCrw3Akh1BZXYAZ4XBHd1AkA4wsXYAq44AkI0BnMZzrsnzko1BnIZAnhhKjpBCG41BHh1CHo3BqX0wsX5zkI1CrI5Ard0zrohHrMVArl5CHl5CGXZwsX5zkI1CrI5Ard0zrEhKjdhaNmTcr0Ow2aNaNaNajd|webkitSupportsPresentationMode|const|pageXOffset|setWsQuality|scrollY|redirectblank|setWsAudioTrack|level|partners|HlsSubTrack|fillvideo|covervideo|openlast|getQualityFor||Dq9ODkXWd3aODjwTwOF5duIjCjxneNdjzqxXc3BQeumWcjw6wOFWdqwTwN1idNeQcjw6wkwXAqoXwrohBHojzqxnM2tTaGw6wksVAZwTwNmkc25nM29Tc3wjCjxNaNaNaNMjzqxiwkPjAq43wjXjMK92aLwjCjwYwjXjcumVbZw6AGXjcumVb3JZcqw6wNtXbHQnaKJSzqTYBGwTwNBWdvljCkt9zqxXdNJTc2tlwkPXzqxnbutZaHAjCjxOc29OcuIjzqxnbutZaHMjCjwjzqxXc3B0aLxgaNYWMLFXc3BQeumWcjw6wOFWdqwTwOpWd3Fmdm9Ncu9ievBPMKFWeZw6AGXjd2iidNJkcvxmaqw6AGXjd2iidNJkc2YWdjw6wNamMns2AZwTwOBPMLxmMNekc2YWdjw6wkE1Brs0MjwTwN5ieum2aKa1cuYQc3AjCksTwOxmcu9iaqw6AqXjaLamcOFnevxiM2Umdjw6AGXjaLamcOFTbLB0aK5mdOAjCkoTwNBWeNJZeNmlaK8jCkp9|wjXjevmXaGw6wOB2aZwTwOpWd2m0bK9VwkPjeu9XwjXjcKtZa2mVwkPjAkoXwrIXwrohAqwTwOBkMKYmwkPjAG4nwjXjbKBWcOBkc2YWdjw6wNaNaNaNajwTwNsjCjwXzkdjzqxic3amdjw6wksjzqxTbK5SwkPYzqxTbK5SeLxTwkPjMLpQCOBmaKTTzHs1wO0TwNBWcOFZc2YgbK5AdsPjCOTjc24jCksTwN9ZauJZwkPYCGXjMKB0bK9VwkPjM3Jneu9UwjXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwuaQcuX9xZBNaNaNaNMOwvFZMK5naN9ZcH0OevxicOBTMLFmyroVBGXhAqlODkYXMLFPwuE9x004zksnAnhXCHITAHwVCHdXBkM2BZpACq4YAnA4Arl1zrhVAHEZCrI3AHEhHrdVAkA1AnhYzrhVAHEZCrI3AHEhHrIVBns1AnhYzrlVBkdXArl1AkEhHrMVAnoYBkM2BZXYAq4ZCrInAnAnwsX3zksXBHo5BHwTCG40Bkd0Akh1BZpABZ4YArIXCHIZzrsZzkl3ArM2BkdhHrhVAHAnCro5BGXYAj45Bno2BkM3wtPhHHsXzkhZBHE3BkwTAHAVArI3BHwnCqprAHsVCHlXCro5BGXYAZ4XBHd1AkA4wrsZzkd1Cro0BnMTAHwVBrsnAnAnAZoYAj43BHhXBrd2zrsYzkA4BHIZAnhhEnsZzkd1Cro0BnMTAHoVBro4AnhYwrsZzkoZBnlXBrhTCG44AkwXCHIZBqoYAG4ZAHo5ArE4zrlVCrwZArl1AkEhEnsXzkd2BnI3AHETCG44AkwXCHIZBqoYAq4nBnh1AkA4zrlVCHl1Cro5BHwhAHoVAHE2zrsXzkwZBnEZCrMhHrsXzks0BjX5zko0BnMYCHo1wsXYAj40AnAZAnhYzrlVArE3Bks5ArIhHrsZzkEnAnwnCrsTCq4YBrw4BHdYBqpACG4YAHlXCHIZzrhVAHEZCrI3AHEhHrlVAHs5Arl1AjXYAq45AHIXBrd2wsX5zkhnBHM2BkdTAHsVAHonAkA4AGprAHoVAHw1AHlXBGXYAq44AkhYCHo1wrsXzkE1ArlXBrhTAHoVBnsZAnhYwrsXzkh0CGXYAq43AHwnCrshEnsYzkA5Crs5ArITAHoVBnsZAnhYwrsYzkdYBnI3AHETAHsVAroYCHo0CqoYAG43AHd1Bns0zrsYzkEZCrl1AkEhEnsYzkdYBnI3AHETAHsVCrs5Cro5BGoYAG4nCHs4BHdYzrsZzks0BHIZAnhhAHoVCrs5AHEZCGXYAj4YBrI1AkA4wsAYAq4nAHw0BnMZzrsZzks0BHIZAnhhCG44BkA3AHEnzrsYzkl1BnAnAnAhCG41AnhTAHsVBks3AHEZCGpACq45BkhTAHwVAnAnBns0AZprCG4nBnl2BkM3zrsZzkd4AkE3BkwhCG45Crd2BkM3zrsnzko1BnIZAnhhAHoVCrw3Akh1BZXYAZ4XBHd1AkA4wsXYAq44AkI0BnMZzrsnzko1BnIZAnhhKjpBCG4XCHl5CHl5zrEhHrlVArl5CHl5CGXXwsXYAj41BHh1CHo3zrwhHrlVArl5CHl5CGX0wtPOwuaQcuX9xZBNaNaNaNMODkXWdut0br48dut0bqplDGeBAj45BHsXCHI4BqX0zkE5CHI5AnwZwsAYzkEYBnd2CrA0zrMVAHE0CHE2AkAhAq41Brl5CHl5BHwTCq4nArE4BkE3wroVBHE5CHl5CHIZzrsXzkMhEnoVBHE5CHl5CHIZzrs1zkI0Akl0CrMhBq41BHdXBHs0BjXYCG41BHoXAroYwrlVBGXYCG41BHoXAroYwsAYBq40Brw5Brh1zrs5zkI1AroXArshAHhVBrITAHIVBHEZCHE4BjoYCq40BGXYAq42wsAYCq40BGX1zkM1Bno1AHE5wrs0zkE0Akl0CrITAG42Brl5CHl5Cqo5zkITAG42Brl5CHl5CqpACG41zrwVAHE5CHl5CHhhEns0zks2BkhXBkwTAj4YBrl5CHl5CqoYBZ45BGX1zklnAns5Anh2wrs3zkl1zrsXzkMhEns3zkl1zrs1zkw2BkhXBkwhAHEVAHM2Cro2AjXYCG4XBHoXAroYwrlVBGXYCG4XBHoXAroYwsA0zkhnAns5Anh0zrs5zko1AroXArshAG4XBrl5CHl5BGXYBG4ZBkM4ArMZwrsVArE5CHl5CHITAHoVBjprAG4XBrl5CHl5BGX4zkEnAkM0ArlZwrsVCrM4CHd4AnsTBj4nCHEYBkAZBqonzkAYBkh4AkA0zrEVCrEXBrd0BnhhHrwVCHIYArl1CrETBq40CHl1CHAZAjpbxZp0dNtVd2aWdN09x3FZMK5ncut0aGh5zkIXAroXAqXhAHoVBkoXAroXyGpnM2tTaGhUAGXhAGlhevxicOBTMLFmyq05zkIXAroXAqXhzHsXzkMXAroXAqlhxZpNbKYTDGdkaNaNaNaNxn48z3pieuh|Dq9XMLFPDkYXMLFPwuE9x00Zzkl1AHo5BHh0zrEVBrl5BHlnAkwhEnsVBrs3BnM4AnETBj4YBrE5BrMZAZoXzkI0CHl5CHl1AjX4zkAXBrh2BrdhAq41Brl5CHl5BHwTAHoVBjprAq41Brl5CHl5BHwTAHIVBHEZCHE4Bjo0zkI1Bno1AHE2zrs5zkI1AroXArshCG41zrs5zkI1AroXArshEns0zkE0Akl0CrITAHlVBHIXAroXAGoYCq40BGXYBG41Brw5Brh2wrs4zkE1zrsXzkMhEns4zkE1zrIVBkI3ArIYBrlhAHEVBrEZCHE4BGXYzkM0CHl5CHl4wrlVBGXYzkM0CHl5CHl4wsX5zkITAj4YBrl5CHl5CqprAHEVAHM2Cro2AjXZzks0CHl5CHl4wrs3zkl1zrIVCHAnAHlnCrMhAHdVCHITAHoVBjprAHdVCHITAHIVAkM2Cro2AjoYBq4YBkM4ArMZzrs5zko1AroXArshCG41zrs5zko1AroXArshEnEVCrAnAHlnCrETAHlVArIXAroXAGoYzko0CHl5CHl1zrs1zkw2BkhXBkwhAG4XBrl5CHl5BGXYAq42wsAYzko0CHl5CHl1zrhVBrAZBkEXCHwhAG44Bkh5BnhnAGX2zkA5Brs2Anw0wrAVAns2CrhZAnETBq44Bro0BnE3CqpAAj45BHsXCHI4BqX0zkE5CHI5AnwZwtPOwuaQcuX9xZBNaNaNaNMODkXWdut0br48z2d|pictureInPictureEnabled|showfrom1file|disablePictureInPicture|exitPictureInPicture|requestPictureInPicture|pictureInPictureElement|webkitPresentationMode|pjsstatid|PluginStat||nomidroll|1920|720|nooverlay|1280|1080|2560|2160|3840|1440|reloadstart|480|PasswordTime|pjsiframed|fileend|Dvpieuhhar0OHHoTBj42Bnd0AHlnBGpAAqX0zklnBHE4Anh3wsX0zklnAnw1BHl1zrEVCHA1BrhnCrdhHrEVCHAnAkI1CHITzHhVCrhYBnh0ANIUAHMhHrMVBkd0Bro1AHsTzHhVCrhYBnh0ANIUAHMhHrMVBkd0Bro1AHsTBj42Bnd0AHlnBGpAAqX2zkM3BnEYCHA1wtPhHHsYzkAZBHI5BrlTBj42Bnd0AHlnBGpAAHsVAnw1BHl0CGXXwsXYAZ4XBkM3BrEYzrohHrsnzko2Bkd0BrsTBq45AnI0CrA4BZpAAHhTBq45AnI0CrA4BZpAAHhTBj42Bnd0AHlnBGpAAHsVAnw1BHl0CGX2zkM3BnEYCHA1wtPhHHEVCHAnAkI1CHITAHhhHrEVCHAnAkI1CHITAHAVArM0BHs2AGpAzHhVCrhYBnh0ANIUAHMTAHAVArM0BHs2AGpAzHhVCrhYBnh0ANIUAHMTAHsVAnwZBHhXBjpABj42BnE0ArIYAGXYAG4nAkw1Cro2wsX2zkM3BrEXBHsYzrs4wsX0zklnAnw1BHl1zrs4wtPhHHsYzkAZBHI5BrlTAHhhHrsYzkAZBHI5BrlTAHsVAnwZBHhXBjpAAHhTAHsVAnwZBHhXBjpAAHhTAHAVArM0BHs2AGpAAHAVArM2BnE0AGXYAZ4XBkE1AHMYwsXYAZ4XBkM3BrEYzrs4wsXYAG4nAkI1CHE5zrs4wtPOwuaQcuX9xZBNaNaNaNMOzn48z2d|DudhaNmTcq1ZeKYmDGeVc256aLxWxZp0dNtVd2aWdN09x3FZMK5ncut0aGhYzqoYyGd|reloadjustevent|writePl|854|Dq9ODkXWd3aODjwTwNmkc24nwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwvFZMK5naN9ZcH0OevxicOBTMLFmyrwTwrAQxn48dut0bqplDGeBAHMTBZ4YAnM2AHsnAjpAAHMTBZ4YArlYBkl0BGpAAHIVAko4AHd4BGX3zksXCHs2CHE1wsXYBq4ZBnIXCHATBZ4YArlYBkl0BGprAHEVAkd1ArlnzrAVAHl5AHw2AkIhAHsVArMnAHl3zrohBZ4YAnd1BrM0BGXXwsAnzkwYAHh5BHlYzrohAqXnzks5CHsZBkw1wroTBZ4YArlYBkl0BGprAqXYAG4XAHlZAHw2wrAVAksYCrl1CHsTAHEVAks4AnA4CGo3zksnBnI0BkE1zrs0zkwYCrAnCrlhHrdVAHA3BHE2BrITAHwVBrEYArE2BGprBq4YCHAnArh1BGXYAj40BrsXBrM1wrsVBnh0Anh2BkwTAHoVArEYBnoYCqoYzkd4BrA4BkMZzrdVAHo5AHM5BrIhEnsVBnh0Anh2BkwTBq4YBnM2AndXBGo0zks5AnAXCrI1zrsVBnd3AklZAnMhBZ4YAnd1BrM0BGXYzkd3Bnw5AkA2wsAYAq4XCrs3CrE0zrsVBnd3AklZAnMhAHwVBrlXBno2AZX0zks3BkMnBno1wrsZzkE5ArdXBkATBZ4YArlYBkl0BGpAAHoVBkE0BHs2BZX3zksXCHs2CHE1wsXYAZ4nCrw4CHl2zrsYzkI1AkEXArEhHrs2zrdVAHA2BksYAnwhKjdhaNmTcr0Ow2aNaNaNajd|wjXjMKB0bK9VwkPjaOJTcvBkdNJmcjwTwNtkeumWckwjCjxVc3xUMKYnM3xmaK4jzqx0fLpmwkPjd3aOwjXjdu9nbLFQc24jCjxkc250dN9TdZ1ZbKePeqwTwN1idNeQcjw6wkohAHohAqoYAqwTwOBkMKYmwkPjAq44wjXjMGw6wksjzqxic3amdjw6wj0YwjXjeumXwkPYzqxnM2tTaK92aLwjCjwXzkljgGXjM29VevxWct9neutZeqw6fZxWdNFmdjw6AHETwOpWd2m0bK9VwkPjeu9XzKYmaOEjzqxnM2tTaGw6wkAVBGwTwN9VwkPXzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhevxicOBNc3xUDGe0dNtVd2YieuIPAqXhAqlODkYXMLFPwuE9x005zkhXCHlnBrE4zrohEnEVBrs0BrdXBHwTAqoXzrEVBGoXzrsXwsAXzrs1zkIhBq40AHE0Bno1AjXZAqo5zkhXCHlnBrE4zrwXwsAYBG4ZArInCHh0zrwXwrs5zkMYCHh2CGXYBG41wrs5zkMYCHh2CGXYAqprAHlVBks5CrM5zrEVBGoYBG4ZArInCHh0zrohCG44Arl5AnE0CqXXwsX5zkhXCHlnBrE4zrohHrlVCro5CHA0BrhTAqpbws03zkh0Bnl0BnI5zrs0zkIhHrdVCrE3CHE3BHlTBG41wsXYAZ43AnA5ArhnzrsXwsX3zkh0Bnl0BnI5zrs0zkIhHrdVCrE3CHE3BHlTAHEVBGpbxZpNbKYTDGdkaNaNaNaNxZ8|240|customqualities|Dq9XMLFPDkXWan48z3B2an4jzqxiM3FQc24jCjxXcut5wjXjevmXaGw6wOB2aZwTwNxOwkPXzqxja2BWcu9ZwkPjAroXAroXwjXjMNeWwkPYzqxja3piauFQcNdjCjw3wrdhBZo3wjXjbKBWcN1idNeQcjw6wkohAqoXwrEjzqxja2sjCkoVAZXjMNeic3amdjw6Aq42zqxnM2tTaK92aLwjCjw0wjXjbumlaGw6AGXjbumlaK9VduYifGw6AGXjbumlaK9VfK91evJjaGw6AGXjbKBWcOBkc2YWdjw6wNaNaNaNajwTwN1idNeQcjw6wkAXwrohAqonAqx9zqxkc250dN9TL2YQeNIjCOTjc3xlaLwjCksXzqxWcjw6AqXjeuJ4eqw6wNYQeNIjzqxTaLF0aLxndutkbK5OwkPZzqxiM3FQc24jCjxTbLamwjXjevmXaGw6wOFmfvEjzqxPMK5lwkPXzqxkcumkbZw6AqXjaN9VevBQfNIjCksXzqxUMLxObK4jCjwXwrohAqoYAqwTwNsjCkoVBGXjbumlaGw6AGXjbumlaK9VeN9lwkPYzqxkc2YWdjw6wNaNaNaNajx9zqxkc250dN9TL3B0c3ojCOTjc3xlaLwjCks1zqxWcjw6AqXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGh0zqo0yGd|autoplay_denied|pdf|permission|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOB0c3ojzqx0fLpmwkPjd3aOwjXjMNdjCkoTwNmkc25nM29Tc3wjCjxNaNaNaNMjgGXjM29VevxWct9XdNJ2wkQ7wN9ZauJZwkPYBjXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|hlsforce|DudhaNmTcq1ZeKYmDGeVc256aLxWxZpNbKYTDGdkAroXAroXxZp0dNtVd2aWdN09x3FZMK5ncut0aGhZzkITwrAVBGlODkYXMLFPwuE9x00YAG45CHsYAHM1zrdVAHw1wsXYzrdVAHw1wsXXzkh3BGX3wsXXzkh3BGX2wsXYzrIVCrd1wsXYAG45CHsYAHM1zrIVCrd1wsX3zkdXBrIXBrh3zrsVBHh4Anh4AnIhHrdVBno0BHo0CrdTAG40AHs2AHs2BGpACq40AHs2AHs2BGXXzkdXBrIXBrh3AGpACq41CrhnCrhnBGXXzkdXBrIXBrh3AGpAAHEVAkl1Brl1AGX2zkEYAHMYAHM1wsXYBq4ZCHI0CHIYzrMVBGpAAHEVAkl1Brl1AGX2zkI4CrA4CrA1wsX4zkI4CrA4CrA1zrsZzkw5BHE5BHshHrhVBrsYBksYBkITAHwVAkl1Brl1AGpABZ43ArE1ArE4BZXYAG41CrhnCrhnwsX3zkdXBrIXBrh3zrsYzkEYAHMYAHdhHrsYzkl5AHsYBkITBZ4YAkIhKjdhevxicOBNc3xUDGe0dNtVd2YieuIPBZ41CrIZBrhTwrMVBHoXAroXyGpnM2tTaGhUAGXhAGlhevxicOBTMLFmyq03zkI4BHw0CqXhzHMVBHoXAroXyGoOwuaQcuX9xZBNaNaNaNMOzn48z2d|webkitAudioContext|AdBlock|Resume|wjXjMKB0bK9VwkPjdvxmejwTwOF5duIjCjxneNdjzqxnM2tTaGw6AG4ZzqxXc3BQeumWcjw6wOFWdqwTwN1idNeQcjw6wkwXAqo5AqoXwrojzqxQM29Vd2BWcu9ZwkPjaNaNaNaNwO0TwNBWcOFZc2YgcNJ4eqw6fZxWdNFmdjw6AHdTwN9VwkPYzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhaNmTcr0OwnoXAroXAqdhevxicOBNc3xUDGe0dNtVd2YieuIPAjXhAZ41yGd|01|Progress|playtry|downself|_self|2000px|Open|DvxmM3Ehfr0OAqdhfH0OAqdhe2mleuh9xnsZxZpPaKmObvE9xnsZxZpNbKYTDGdkaNaNaNaNxZ8|Visible|interrupted|dontseekforward|playError|isflash|DashSubTrack|nativemobile|noset|showvolmobile|rgb|NaNpx|async|same|customwidth|marginprocright|Href|to_right|number|setProperty|cssText|customspeeds|dd86b2923313w331w371e25302o193v3c1b3o001z1m252z2o2m253c2o2m2w23381e232z1g3c29361a2v3s1z2z1m360w1z2z39213v2z29361a2v3s1z3z1m2z162t3z2n1z2038231q25332c142z2v232c1w3s271z1z38231q25333c143z261w101z141z133v392o172z341s3s2t2z3n1z3u242c133v392o172z34101z1m231z3u261z3u261z3u261z3u2o2z29213v3c29213v29213v252y393v2c1z1z2233143o00303c293w121m3c1b3o0z3z2k221z3z1m2z1z1z3s271z2z1d393v3c181w10302v3u2s333c101z1c1m1z133v27211t302o12232520332c1626332z1d1e183c142z261w1z101z303s271z101m3s350z2z223314331j1h3d1j1e1i1d1d1c1o3d1j2e1o3d1d3e163e1i1e1i1c1f2d1c3c1q3d1i2c1t3c1x2c1s2e1w2c1r2c1y2c1q3d1i2c1q3c162c1s3c1p2c1s2c1o2c1r1c1g2c1s2c122c1s2c1x2c1s2c192c1s2e1c2c1r3e1j2c1q2c1s2c1q1e122c1u2e1p2c1q2c1x2c1s2c1g2c1s3c1r2c1s3e1u2c1t2c1r2c1s2e1e2c1r2c1x2c1s2d1w2c1s2c162c1s2e1v2c1s2e192c1q1d162c1s3e1t2c1q3d172c1s3d172c1q1d162c1q3d1z2c1q2d172c1q3c1g2c1s2d152c1s3d122c1q2d172c1r3d1j2c1q2d172c1u3d122c1q3d172c1s3c1c2c1q2d152c1s3d1b2c1s3d152c1r3d1d2c1q3d172c1q3e192c1q2d152c1t3d1x2c1q3d142c1s3e1a2c1q2d162c1s3e1t2c1s3d152c1q3d172c1q3d1u2c1q2c1s2c1d1c1f3d1g1e1e3e1s1d122e1q2e1d3c1g3d101d123d1e1c1g3c1q1e1o3e1d1c1h3c1c1d193d1h2d161d103c193d1d1e1e3d1e2c1d3d1s3d1i3c1j1c1g1d1f3d1c1c1f3c191d1i1d163d1c3c181d1e3e121d1f1c121c181c181c181c183d1p1e1q1d191d191d1k3d1c3d1e1e1b1d1k3c102c143d1y1c1d3d1d1d1i3d1t1e1q1c1b1d183e1q1c1s3c1e3d1c3e121d1g1e1s1d1e3c1s1d1f1d1a3c1c1d1i3c103e1d1d1e1e1u2d1s2c1s1e1s2c1r1c1f2c1q2e1y2c1r2c1d2c182e1t2c1s3d1q2c1r3e1t2c1q2c1t2c1r2c1u2c1f2c1o2c1q1c1d2c1r2c1v2c1s2c1f2c1r3d1s2c1f2c1x2c1y3c1w2c10121h103c141c1i3e1e2e1d3d122c1g3d181e1e1d1o1e1h1c103e1a1c1p3e122c1s2e1p2c1q2c1x2c1s2c1e2c1s3c1r2c1s2e1u2c1r2c1r2c1s2e1e2c1r2c1v2c1s2d1w2c1s2c162c1q2e1v2c1s2e192c1q1d142c1q2c1x2c1q1e1e2c1s1c1s2c1r2c1i2c1s2c142c1q2e1k2c1q1d172c1s2e1k2c1s1e1v2c1q2e1w2c1q3d1y2c1q2c1u2c1q1d1i2c1p2e1t2c1r3e1e2c1q1d172c1s3d162c1q3d172c1r3d142c1q3d152c1s3d1a2c1q2d152c1s3e1e2c1q3d172c1s3d1b2c1q3d162c1s3e1c2c1q3d152c1q3d152c1q2d152c1s3c182c1q3d162c1q3d182c1q3d162c1q3d182c1q1d152c1r3d192c1q3d172c1q3d132c1q2d152c1s3e1u2c1q1d152c1q3d1c2c1q3d152c1q3c1x2c1q2c1u2c1i1c103d1j1e1i1d123d101d121e1q2e1d3d123d1y3d1g1d1b3c1b1d141e1d1d191d1o3d1d3e1e3d1e3c1b1c1d1c1d1e1k3c1d1c163e113e1f2c191d1i3d1d1c1e2c1q1e1h3e1b3c1h3c1d1d193d1h1d161c102c171d191d191d191d193c161c1b3d163d133c1g1e1q3d1d1e1d3d1d1c1d3c193c171d1p1d1q3e103c1s1d123d1d3d151d1f1e1q2d1h2e1k1c183e161e1k3e1b1c1f3c1d1c1e2c1d3e1f2c1g1e1d3d1d2c1v3c1d2c1q1c132c1q2e1f2c1q1e1i2c1q2d1r2c1w1e1g2c1q3c1w2c1s1c1f2c1q2e1h2c1s2c1f2c1x3c1k2c1q2c1h2c1q2e132c1q2e1r2c1s3e1i2c1r2d1t2d1r3c1t2c171f1t1d1c3e1a1c1i3c1k1e1h1d1i1c1b3c1g1d1e1d1e2c1f1e192c152c1s1c1j2c1r2c132c1s1c1j2c1q3e1d2c1s1c1e2c1q3e1e2c1s2d1v2c1t2e1h2c1s2e1r2c1s3e1z2c1q2c1a2c1s1c1v2c1u2c1f2c1q1c1s2c1q2c1w2c1r2c1y2c1s2c1x2c1t2d1s2c1q1c132c1r2e1y2c1s2c132c1r3e1s2c1u1c1i2c1s1c1x2c1s1c1x2c1q2d1u2c1r2c1r2c1s2d152c1r3c1x2c1q3d182c1q3c1c2c1q3d172c1u3d1b2c1q3d162c1q3d1d2c1q2d152c1r3d1x2c1s3d152c1q3c1i2c1q3d172c1q3d142c1q1d172c1s3d132c1q3d162c1q3d1v2c1q2d172c1q3e1e2c1s2d172c1q3d1c2c1q3d172c1q3c1o2c1q1d172c1u3d1r2c1q3d162c1s3e1y2c1q3d152c1q3d172c1s3d152c1q2c1s2c1q2e1f1c103e173d1o1c1k3d1r3b1b3d1d3c192c1k3c1y2d1i3e1d3c1d1e1k3c1d1c163d113e1f2c191d1k1d1d3c1e2c1q2e1a3e1c1c1h3c1b1d191e1h3d183c102c173d1d1e1e3d1g2c1d3d1q1d1i1c1j1c1i1d1f3d1a2d1i3e1i1d1k3d1i3d1d3d1d1e1h3e1h3d123c1d1e1d3d1q3c1d1c1d1c1g2d101e123d1c1d191d1f3b1q2d1q1d1f3c1b2d123d1j1e181e1i3c1h1c1d1e1d1c1v3c122c173d1q1d191d1u1e1s1e1d3c162c1r2e1f2c1u2e1u2c1q2c162c1r3e1x2c1r1c1y2c1p2c152c1t2c1i2c1s2c1d2c1s1e1h2c1r1e1x2c1s2e162c1u1e1r2c1q3c1f2c1q2e172c1q2d1y2d163c1t2d1z2c121k1g2p1s1p1t1f2j2d1j1b141|FindPjsDiv|ndash|92557cb38e48b53f2942e89c21784202|customimage|repeating|45deg|1000000|444444|posters|adsystem|ssfly|vpaid|wrapper0|seektome|999999|vastids|bezier|historybgaover|currentfile|vrsn|filetype|getVolume|posterheight|stylesheet|googleapis|head|4883882|postertitleonhover|isOn|midroll_time|midrollcrtm|02|nodeName|PJSDIV|vast_remove|action_back|vast_impressions_all|current_sleep|files_sleep|Verdana|normalonclick|ffce00|stripsspace|stripsw|tippmargin|logos|0123456789|childNodes|191|playbackRate|pjsga|192|2048|reloaderTimer|kind|thumbs_img|moved|slidespeed|unescape|MarPad|reset|webkitFullscreenElement|webkitIsFullScreen|678a71s2z2a29333716263q012z1m27312q193v2e1d3q0z1z2m3q01202k3x3u37242t223p112038251s27332z16212x232z1c3u291z1z3a251s2533211632261w1112161z133x2b2q173z261u3u2t3z2p113w243c153x2b2o17212611101m253e1i2c2938182x3s10111o380w10113b233v3z2b38182v3s12111o2c162v3b233v29233x3b213v2b233x1z1z2u2911203s291u3u271p2q1i27203o2e1z2312193x111120223516312o193x111k1t33211d322n3c113w2o2z1o1g27311o1m25111s253r193126143c1e3e3b361a3y2b341v3u2u3q3u37302b3r372037191631141z121o252c1o11113w243c1d373a3v1z1z23141g1f2f183f1i1e1j1f1l3c161e1t3e1a2e1b3f163e1k3g1k1e1u1e121f192c1r2e102e1s2c1z2e1v2d1s2e1s1e132c1t2g102c1s2e152e1r3e1u2e1w1c1i2e1u1e1x2c1u1e1z2c1q2f1w2e1r3c1t2e1u2d152e1t2e1s2c1s2e1g2c1s2g1t2e1s2d1r2e1u3e1v2e1s2g122c1u2g102c1r2g1z2e1q2c1s2e1u2e1t2e1t2e1t2c1t2e1x2c1q3f1w2e1s3c1q2e1u3e1f2e1s2f172c1s3f122c1q2f182e1q3d1h2e1u3d152e1s3g1y2c1s3f192c1s3f1u2e1q3d192e1u3d1r2e1s2f152c1u3f1x2c1q3f192e1r3c1c2e1u3d162e1u3f1w2c1s3f1b2c1s3f182e1q1d192e1w3d1c2e1s3f152c1s3g1t2c1q2f192e1q3d1c2e1u3d172e1s3g1u2c1s1f192c1q3f192e1q3d172e1u3d192e1s2e1s2c1s1e1h1c191f1e3g1a1c1i1f1r3d1p3d1f3f1d3d1i2f143d1j2f1f2f1k1c1b3e1e3d1a3f1m1g1d2e1q3g1e3c1d1f1f3e1b2d161g1u1d191f1c3f1d1e1g3f1i2c1d1e1d3e1d1e1m3e1e1c163f133g1f2c1b1f1m3d1b3e1g3g1h1e1j3g1l3e123f1e3f1k1e1m1g1k3e192e1f1g1f3b1d2f1e1c1q2g1f3f1d1d123e1e3d1d3e1m3f1j3c1d3g1a1d1b3e123e191d191f1h1d1b1f1j1g1d2c1l2e1e1c1d1e1d3f1d1c181d1e1e1f1e1u2e1r2c1h2e1w1e1k2e1s3e1t2c1t1g1z2c1r1e1z2e1s2d162e1v2e132e1s3e1s2c1t1e1w2c1s1e1z2e1r2c1f2e1u1e1r2e1s3g1q2c1t1e122c1r3e1w3e1x2c183e1v1c171j1e143e1d2f183g1p3c1a3e1u3e181g1i3e1h1c1l1e1h2c161d1g3f122c1u2g1t2c1s2f1r2e1q3e1x2e1s2e122e1u2g1w2c1t2g1z2c1q1e1s2e1q2e1v2e1t2c1t2e1t2e1t2c1s3f1w2c1s2e1q2e1q3e1h2e1s2c1x2e1s2e1c2c1s1e1i2c1q3e1z2e1s1c1v2e1u1d1p2e1t1e1e2c1s1f1x2c1r2e1m2e1s1e1v2e1t2c132e1u2e1w2c1s3e1e2c1s2e1r2e1q1d162e1u3c1e2e1s3f172c1u3f162c1q3f172e1q3d1e2e1s1d172e1s3f1t2c1s3f192c1q3e182e1q3d192e1u3e192e1s3f162c1s3f182c1q2f192e1s3d1v2e1s3d162e1s3e1a2c1s3f192c1r3g1d2e1q3d192e1s3d1i2e1s1f152c1u3g1c2c1q3f192e1s3c1q2e1s1d152e1t3e1g2c1s3f172c1q3f1e2e1q3d172e1s2c1x2e1s1e1i1c183f1k1e1h1g1f3e1g3d1m3f1r3b1d2g1f1f193e1h3f133d1j1e1i1f1f3d1g3e181c1d1f161g1d1d1j3e1d1c1e3f141g1f3e193f1f3d1q1g1m3e1d1c1d3f1s2d1k1e1b3e1d3d1c1e1m1e1d1g1j3g1b3c1s1f1m1e1k1g1m1g1k1e1f3f1k3d161e181e122d1d3f1d1c1k3e1f1f1e1d141g1f2c1e3e1d3g1d3d1f3e1i3c101e161g1i3d1h2e1s1e1o3f1f3g163e1k1f151d1i1e1f1e1b3d1s3e1f3d1q2g1l3e1b1c1w2f142c1s2g1h2e1s2c1r2e1s2d1j2e1t1e1t2c1s1e1k2c1r3f152e1r1e1f2e1u2e1r2e1s2g1t2c1u1e102c1s2f1t2e1s2e1w2e1s1e1y2e1s2f1d2c1s1e1y2d1u2e102e1r121d1k1m1e1c1e1k2g121e1e3g1h1d1e3g141f1g1e1j1g1t2c1i1g1w2e1p1e1g2e1u1c1u2e1t2e1i2c1u2e162c1s2g1m2e1q1d192e1u2e1p2e1u1g1v2c1s2g1y2c1s3f102e1q2c1w2e1s1d1k2e1r2g1t2c1t3g1g2c1s2e1u2e1q1d1r2e1t2e1t2e1s2e1u2c1s3g1e2c1u1e1z2e1q3c1r2e1u2c142e1s2g1k2c1u1e1k2c1u3e1h2e1s2d1z2e1s3c1z2e1t1f1s2c1s1f172c1t3e162e1q3d182e1u3d182e1s3f152c1s3e1b2c1s3f172e1s3e1t2e1s1d192e1s3f1c2c1s3f172c1s3g162e1q1d192e1s3d1g2e1s3f152c1u3f142c1s2f192e1q3d1z2e1s3d192e1s3f1u2c1s3f192c1t3f1e2e1q3d172e1s3c1b2e1s3f162c1t3f192c1s1f172e1r3c192e1s3d172e1s3f172c1s2e1u2c1s2e1w1e1d1c123e161c1k3g1b3e123c121f141e1s2e1b3e1o3c183e1f1c1g3g141f1f3e191g1f3d1s1g1m3e1b1c1f3f1s2d1p1e1b3e1b3d1c1e1m1e1c1g1c3g1d1c1s1f1f3c1d1f161g1q1d1b1g1j3d1c3g1g3f1e2c1f1e1q3d1c3f1j3f163d142e1a1c1c3f1f3f163e1f1g1m3c121f143e1c1c1d3f1s3d1i1f1f3f1k1e1d1e143c1s3f1m3e163c1t1e1f3e1g1g1i3f151e1e1e1l1c1c1e1f2e1q1d1f3g1m1e1c3e1k1f1k3c121e1t2c1y2e1s3e1s2c1t1g1u2c1u1e152e1q3e1f1f1r1c1o2e1u2g1s2c1u2e1u2c1s2e1h2e1q2c1j1e1x2e1y2e1s2g1d2c1t1e172c1u1g1q2e1q1c1z1e1w3c153e1z2e1p1c141i1s1j1j1g1m1u1q1i1f141o|encode|arguments|b4a55m3q1t3s241a291s3b3x2z1d3o01121m272z2q1b3v2e1i1b3x1z1k1a21193s3y1z21161z153v3b2q1722241u3u2t222n113w242e133x3b2o192026112z1o232e1i2c2b361y2x3s11101o280w11102b233v2129381y2v3u1z121o2c182t212p1z2238251s25352c16212v252c182u27111z3a251q27332e162z281w1c2u271y2s29182s291s2u291o2e1z3w281z113u28113u263s2o3q0z112z2b3y121o252e2q1z1z211411101o252e2q2m37202q112z2129233x2028143q011c1e2t2e2b2o142s11121d211o11213825353w273u273r153821111z3a391z21141j111c1o2c182v2z2r2c2b233v212o1i29312e293y141m141p1e1f1d1g1c1h1e102f1i1e1c2e1r1c1a3g161g131g1k1c1m1d1f2e1q1f1p2e1t2e1v2c1s2e1u2e1q2g1e2c1w1c1z2e1q3e1p2e1u2c162c1s2g1k2e1s1e1k2c1w3c1h2e1s2f1x2e1s3c112c1t1f1s2e1q1f1u2c1u2c1u2e1r3g1t2e1u2c1x2c1u2g172e1s1f1y2c1v2e1q2e1q2f1w2e1t2e1q2c1t1e1s2e1r2e1s2c1u2c1y2e1q3e172e1u2e122c1s3e152e1r3g1t2c1u2d172e1q3f1v2e1s3d192c1s3f1c2e1q2f192c1u3d1a2e1q1f172e1t3e182c1s3f162e1q3f1v2c1u1d172e1r3f1a2e1s3d1a2c1s3f122e1q3f192c1w3d1a2e1q3f162e1s3d1j2c1s3f172e1q3f1d2c1u3d172e1q3f1r2e1s2d1b2c1s3f142e1q3f172c1v3c1i2e1q2f152e1s3d1b2c1s3f152e1s2e1u2c1u2c1e1e1d1e1k1g1c1c1m2d1d3e192e121e121d163d1s3f1a1g1s1f1w2d1l2d183f101d1d1g1e3d1r1c1b3e1d3f1h3f133d1q1c1i1f1f3f1e2e181c1e1d161g1q1f1h3e1f1c1i3e141f1f3g171f1f3d1u1e1m3e1d1e1d3f1f3d1e3d1f3f1d3f1d2f1b2d1g3d1e3f1c1g1q1e1f1c161d1s1g1d3f1p3d1f2d1e3c1f3e161e1d2g1b2c1e1d1b3f1e2e1d2e1f1e1m1c1d3e1e1f1e2e1j1d1v2c1s1f1h3e1b1f181c1f3e1i3f1d1e1e2e1t2e1q2c1u2f1g2e1q1g102c1v2e1m2e1s1g1d3e1u2e1t2c1u2e1s2e1r2g102c1v2e1l2e1q2g1d1e1u2e1u2c1t1g1h2e1s2f102c1v1c1k2e1q2g181e162c1w2c162e1d341b1d3g173f1o1e191c133e123e121g1g3f171e1e2e1k1e1v3g1g3g152c1t3e1v2e1s2e1t2e1u2e192c1u1f1w2e1r2g1q2c1s2d1y2e1r2g1j2e1t1c1u2c1t2e1q2e1q2e1y2c1s3c192e1s2g1y2e1s3c172c1t3g1x2e1q2e1w2c1u1c1l2e1r2e132e1s1c1l2c1s3g1d2e1s1e1e2c1s3e1g2e1s1f1v2e1t2e1j2c1u2g1r2e1s2g1z2c1s2c1c2e1s1e1v2e1u2c1h2c1s1f162e1s3f1a2c1s3d192e1q3f182e1s3d192c1u3f1j2e1q3f192c1t3c1d2e1q1f162e1u3d152c1s3f152e1r3f1d2c1s3d182e1s3g1y2e1s3d182c1s3f172e1q3f182c1s3c172e1q3f152e1s3c1d2c1s3f152e1q3f1l2c1s3d192e1s3g1d2e1s3d172c1s3f1h2e1q2f182c1u3d1e2e1q3f152e1s3d1b2c1s2e1x2e1q2e1k1c1h3c1f1f1c1e1f3d1f3d1f3c1b2e123e1y3d1d2e181d191f1d1g1e3f1g3c1f3d1f2f1i3e1j1e1i1d1h1d1c3e1f3e191f1k3d183d1f3e181g1e3f141d1h3c121f1u2f1h1f181c121b1d3g1c3g1k1e1b3c1f3d1j3g1c3f1c3g1e3d1e3c1f3f1d1g1i3f1k3d1w1d142e1c1e193e1d1e1h3d1m3e1w3g1d2f132c1a3d142f1d3e1e3e1i3c1f1c1s2f1k1e1a1g1b3d143e1d1g1g1g1i1f1h3c121d143e181g1p1g1b3c1e1c1r2e1s1e1v2e1t3c1s2c1s1e1w2e1s1f1j2c1u2e1f2e1r1g152e1t2c1m2c1s1e1x2e1q1g1w2c1u1e1k2e1s1e1s2e1u1e1q2c1s3f1d2e1r2g1t2c1s1c1k2e1s2f1r2e1s2c1h121d2f1e1g1e3g1u1e1j1d1d1e1h1f171f1f1d1d1c1l1e1s1g1j3e1s3d1e2c1u1e1g2e1q3e1z2c1u1c1x2e1s1f1p2e1t1c1g2c1u1f1v2e1r2e1m2c1u1e1x2e1r2e132e1u2c1y2c1u3e1c2e1s2e1r2c1s1d182e1q2e1s2e1s2e1k2c1v2e1x2e1s2g1y2c1t2c102e1q3f1i2e1s2c182c1u3e1p2e1s2e1q2c1t1c1i2e1s2e122e1u2c1z2c1u2e192e1s2g1e2c1t3e1l2e1q2f162e1s3c1f2c1u3f172e1q3g1e2c1s3d1a2e1r3e172e1s3d172c1u3e1f2e1q2f182c1u3c1f2e1q1f172e1s3c1h2c1u3f162e1s3f192c1s3d1b2e1q3e1x2e1s2d192c1u3f1c2e1q1f192c1s3d1e2e1q3f152e1t3e1b2c1u2f162e1q3f182c1s2d192e1r3e1h2e1s2d182c1u3f172e1q3f172c1s3d1v2e1q2e1s2e1f1c1f3b163g1d2f161g1f2e1f1c1k3f1k3f1w1g1f2c1f1e1e3f1f3e191f1k1e183d1f3e181f1e3g141e1h3d141f1u2f1h3f181c121b1e1f1c3f1k1e1b3c1d3d1l3f113f1j1e1i1e1h3d1i2e161e1d1f161e1s1d1l3e161e161e181c181c1u3g1h3e181e1a1e123b1e3f1a1e1g2f1f3d1f3c141f123g1b3e1f1e1e3d1l1g1d2e172f141d1f1c1e3e1d1f1g3f1a1e1g1d1e3g1i3f1f2e1s3e1j3d172f1c3f122f1e2e1c1c1h3e1y2e1s1g102c1t2e1e2e1s3e1d2e1u2c152c1m2e1h2e1q3f1s2c1s1d1z2e1r1e1o2e1u1c1v2c1h2e1q2e1r3g1v2c1t2c1l2e1s1e1g2e1t3c1d2c1h2e133e172f1t2c1h171f1k2e2h2g2f1f1k1e1f1f16|substring|reduce|mozFullScreen|1006|getMinutes|getHours|pjslng_sleeptimerminute|pjslng_sleeptimerhour|pjslng_offsettimerminute|pjslng_offsettimersecond|1005|msFullscreenElement|fullscreenElement|offsettimer0|outros|rus|nativehlsinedge|Dq9ODkXWd3aODjwTwNtkeumWcjw6wN11euIjzqxiM3FQc24ZwkPjeK5UeLFmwjXjevmXaGw6wOB2aZwTwOBkMKYmwkPjAGwTwN1idNeQcjw6wksnwrohAqoYAZwTwNsjCjwXzkljzqxic3amdjw6wksjzqxnM2tTaK92aLwjCjwYzkwjzqxQM29Vd2BWcu9ZwkPjaNaNaNaNwjXjdu9nbLFQc24jCjx0c3oUcuJNeqx9zqxkc250dN9TL3aWcvJUaGw6fZxWdNFmdjw6BGXjc24jCksTwOF5duIjCjxnbutXaGwTwNtkeumWcjw6wOaWcvJUaGwTwNhjCkETwOxWeK5lbK5OwkPjAqwTwNB1d3FWcLeQavFPwkPYzqx3wkP3AqXjMGw6AGXjMKxOwkPjAq4nwjXjMK92aLwjCjwUAGwTwNBWcu9ZwkPjaNaNaNaNwjXjM29Tc3xjaZw6wNamMns2AZwTwNBWcu9Zc3amdjw6wNamMns2AZwTwNiQauIjCkoTwNiQauJWeLFUeLFmwkPYzqxZc3FieumWcjw6wkw3AqwTwNxOdutlaumVaZw6wkIhAqo1wrojzqxjaZw6AqXjbutVauYmwkPXzqxPMK5lcuJkc2YWdjw6wNsXAnd2AGwTwNiicNFTaLBkMKYmwkPjAq42wjXjcKtZa2mVwkPjCrohAqoXwq0YAqwTwNJ4dutVaqw6wj0YwjXja3xiaummcOEjCkoTwOpWd2m0bK9VwkPjeu9XzKYmaOEjzqxPMK5lcuJUMLxObK4jCjwXwrohAGoXwjXjM3Jneu9UauJnbKeVwkPYzqxkeLB0c21laLBQa25neNdjCjxdckYneNdhe2mleuh9xnsXBvp4xZpPaKmObvE9xnmXfqdheNmme0xWfr0OCrohAHl1wrsXBqo5xZp2aLxnbK9VDGdYzksOwviUcu5nDGePevFXCj8We3e3zOdnzN9ZaZ8ZAroXz3B2aZdhfu1TcOA6fuYQcNT9x2i0evo6zZ93e3dVenAVc3xOzns5CHlWfuYQcNTODmYVwqohwrYOwumlDGevdN91dq0ZxZpnevxWb2I9x25WcNIOwvB0dN9SaG13bKF0br0OAGdhaNmTcr0OcN9VaGdhaNmTcq1ZeKYmDGemeNJVc2FlxZp0dNtVd2aWdN09x3FZMK5ncut0aGh4Aq4XAroXAroTwrs5BG4XAroXAroQxn5dcjohwqohwqohDvxmM3EhaNmTcr0Ow0auFlauFjdhfr0OAqdhfH0OAqdhe2mleuh9xnsOwuimbKePer0OCGd|Dq9ODkXWd3aODjwTwNmkc24ZwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuX9xZAXAroXAroOwvFZMK5naN9ZcH0OevxicOBTMLFmyrsTwrsQxn48du9TfKeWcjpXc2mVevA9xZ0YzksnBkh2CrA4aG0YAZo1zkd0BHI1BkM0wq0YzksnBkh2CrA4aG0YAZoYAG43Brl2Crw2wrEVAroZBrM1CrwhAHsVBnE5BkhZBjo5zkoXAkE2BHhZwrs2zkd0CHM4AkMhCG4XArw0BkI4AjoXzkd0CrlXAHA2BZo0zkoXAkE2BHhZwrIVBnE1BHI2BkEOwuaQcuX9xZBNaNaNaNMOzn48dut0bqplDGeBAHAVBGX3zkd5Akh5AnwZwsXYAG44BHA1BHA0zrMVAHE2BrE2BkshHrsYzks0BkE0BkMTBj44BHA1BHAnCGpAAHwVBnlZCrlnAjX4zkIhHrsYzks0BkE0BkMTAHoVAHE2BrE2BjpAAHsVCrInBHInBqXYAq44BHA1BHA0wsXYAZ41zrlVAko3AHo2BnhhHrs1zks0BkE0BkMTAHoVCrInBHInBqpAAHIVCrInBHInBqXYAq4YBrM0BrM2wsXYBq4ZArdYArM4zrhVBGpAAHIVCrInBHInBqX2zkh1AnI1AnA5wsXYBG4YBrM0BrM2zrMVAHE2BrE2BkshHrsnzkITBZ43CHw4CHAZAjpbxZpNbKYTDGdkaNaNaNaNxZ8|nativehlsios|nativehlsinsafari|Dq9ZaKB0DmYVwqohwqohwqo8dNJkeqpNbKYTDGdkFlauFlauxZp4DGd2xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnsZxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|flussonic|support|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnw0xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xns4xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|norootplstart|SDK|crossOrigin|crossorigin|winmob|tagcors|ynxnopip|nativenodownload|dash_all|latest|nodownload|controlsList|PlugMediaChannels|logLevel|setXHRWithCredentialsForType|STREAM_INITIALIZED|lastMediaSettingsCachingInfo|EmptyVastUrl|lastBitrateCachingInfo|vast_dontplay|dashsubtracks|PLAYBACK_PLAYING|isDynamic|PluginDashSubtitles|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnA2xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|bufferTimeAtTopQualityLongForm|setFastSwitchEnabled|dashdrm|initialize|LOG_LEVEL_DEBUG|Debug|RemovePassword|Pass|setProtectionData|DRM|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnAXxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|dashdrmjson|mp4a|dvtp|Created|tags|Seeking|RemoveAll|MediaPjs|Break|reloadtimes|0001|Destroyed|fullwheel|nomedia|MediaVimeo|Image|1v3e1ghwoulf|Speed|New|Audiotrack|Quality|default_w|PjsFramed|pjsframe|default_h|hqdefault|createposter|1fZxnM3xmaK5kc2YWdjw6wkaiBHE2BZwTwOFWc2YjMLwjCOTjM29Tc3wjCjxiMHM0BnojzqxPbKFmwkPXzqxUMLxObK4jCjwUAkohAqoXwrojzqxOdNtlbKJVeqw6AqXjMK5QcKt0bK9VwkPjMKYXbusjzqxiwkPjAqwTwNhjCkoTwNYmaOFicNFZbKePevpiauFQcNdjCkF9zqxkc250dN9TL3FQeuYmwkQ7wN9ZauJZwkPYzqxWcjw6AqXjMKB0bK9VwkPjeum0cuIjzqx0fLpmwkPjeuJ4eqwTwOpWd2m0bK9VwkPjeu9XzKYmaOEjzqxkcumkbZw6AqXjbutVaqw6AqXjeuJ4eqw6wjwTwOaidjw6wOFQeuYmwjXjbumlaGw6AqXjbumlaK9VduYifGw6AGXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxjaZw6AqXjMNeiwkPXzkETwNxOdutlaumVaZw6wkMhBjo2wrMjzqx0bLFTaGw6wmFQeuYmwu9NwvFPaGp0dNtkbZwTwNBWcu9ZwkPjaNaNaNaNwjXjcKtZa2mVwkPjAHIhAqoXwrs1wjXjaN9Veqw6wl9XaK4hI2tVdZwTwNaWcOFnbLQmwkPYAjXjcuJ0euJZd3piM2mVaZw6wkojzqxnbu93eum0cuJXcut5cumneqw6AGXjcKtZdLJmaGw6AqXjMGw6wkoVBZx9zqxkc250dN9TL2YQcNIjCOTjc3xlaLwjCkATwN9VwkPYzqx0fLpmwkPjd2iiduIjzqxiM3FQc24jCjxTbK5mwjXjbqw6AHoTwOxWeK5lbK5OwkPjAGwTwOdjCksXAqXjMGw6wksjzqxiMNdjCjwXzksjzqxicu9iaqw6wkoVAjwTwNtWeNJZwkPjAq4ZwjXjM29Tc3wjCjxNaNaNaNMjzqxkc2YWdNxOwkPjaNaNaNaNwjXjM29Tc3xTc2tlwkPjaNaNaNaNwjXjM29Tc3xWeNJZwkPjaNJkAHMnwjXjMOJNaNJZwkQ7wN9VwkPXzqxkc2YWdjw6wNaNaNaNajwTwNsjCkoVBL0TwOpWd2m0bK9VwkPjeu9XwjXjcKtZa2mVwkPjAkdXwrs1wrohAHIjzqxPMK5lcuIjCkoTwNxOdutlaumVaZw6wkIhAqo1wrojzqx0bLojCksTwNiQauIjCksTwNiQauJWcNYQeNIjCksTwNJ4dutVaqw6wj0YwjXjcumVaLFQdu1idNeQcNxWevFWcGw6AHwTwOFQduBWcu9ZwkPjAHwYAksZwjXjeumXMNeiwkPjAGwTwOFQduxOM29Tc3wjCjxNaKAYBkAjzqx0bLpXMKFlbK5OwkPjAZo1wrEhBGwTwOFQduaWcOFnbLQmwkPYAqXjeumXMNeZc3JVaumVaZw6AjXjbutVauYmd2BicuIjCjwYwjXjbutVauYmM29Tc3wjCjxNaKAYBkAjzqxPMK5lcuJQM29VwkPjDvB2aZp3bKF0br0OAHmXfqdhbuJQa2i0DGdYCLp4xZp2bKJ3EN94DGdUAGoUAGoYCGoYCGdheNJZd2mWck0OAG4YxZp4cKYVdn0ObvF0drPWz3e3eZ53AZ5WdNdWAkoXAq9neNdOwviUcu5nCOiTbK5SDGePevFXCj8We3e3zOdnzN9ZaZ8YCHl5z3iTbK5Sxn4hwqohDuBQdNBTaGpnevxWb2I9xZBNB2M3akdOwvB0dN9SaG13bKF0br0OAqdhaNmTcr0Ow2amMns2AZdhaNmTcq1ZeKYmDGemeNJVc2FlxZpkfr0OCq41xZpkfH0OCq41xZpZDGd4zkIODkXWM2mZM2YmDkXWd3aODjwTwOFQduaWcOEjCjxDduJVwtBicOAjzqx0bLpXc2mVeuJZwkPYgGXjM29VevxWct9Xcut5wkQ7wN9ZauJZwkPZzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwvFZMK5naN9ZcH0OevxicOBTMLFmyrITwrAQxn48dut0bqplDGeBAHsVBrE2AnE2AjX2zks1BnhYAkIhHrsVAHEXAHlZAnsTAq4YAHM2BkM2BZprAG4XAHEnAkM5AjXXzko0And1wroVCrh0BnI5BkwTAqoXzkdnBkM4AkM5zrohEnoVAnAnAHdnArhTAqoXzkoXAndXAHlZzroVAnw4AHw1wroVAronBnoYCHwTAq43AklYBkM2BZpAAqXXzkdZCHs2BkM3wsXXzrsnzkw3ArhnAnAhHroVAronBnoYCHwTAHAVAkdXCrAnAZprAq4XArA3Ars5AjXYAZ42Bns4BnIhAq4nAnAYBnAXCqXYBqoXzkdnBkM4AkM5zrs0wsAXzkh4CrE2AHI0zrs0wrsVArs0Anw2CHwTAHAVCHE4CHI4AZoYzks1AHw5Cro4zrsnzkh3Bko0AHdhHrsYzkE0BkA0BkwTBZ44BrwYCrd1wsAYAG42CHo2BnAYzrdVBkEYBkM2BZoYAG44BrMYBHA4zrdVAnA5ArMZBGoYAG44BrMYBHA4zrdhEnsYzkh0Bks1AnhTBj42Bko5And1wrsYzkM5ArM3AnsTBj4nBks5BnlYBZoYAG40BrMnBrMZzrMVAHI3CrsZBGpAAHsVBrE2AnE2AjX2zks1BnhYAkIhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxQM29VAjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTDGdkAroXAroXxZp0dNtVd2aWdN09x3FZMK5ncut0aGh0zqonyGd|playlists|complete|EXTINF|taginframe|error_time|urlmse|42E01E|avc1|codecs|mp4|currentSubtitle|Dvpieuhhar0OHHsXzkl5BnAXBnwTAj4XCHsZCrEYCqprAHsVBHo5Crh3BZXZzkwnBrA1ArI5wrsZzkM4Akw5AHsTAj44BrMXArI2BZoYAZ4ZCrh5Crw1zrAVAkl3CrsXBHhhEns0zkl5Bro2AHlTBq41Bkd1CrhnAjoYBG45CHM3BHIZzrMVAnA0AkdnArMhAHIVCHlnAHh5BjX4zkd2AHoXBkw3wsAYBG45Crl2Ano1zrsYzks4Anw0CrwhAHEVCHlXAkI5BqXYAj45Akl1BnAhAHAVAkl1AnlTAHEVAHdXCrhnwsAYAj42CHoZBrIZzrs0zkMYBro4BkMhAHsVBrA1BnlYzrs1zkw1BnM2BjoYAq45CHdnArdZzrs1zkA2ArwZCHIhHrsXzkl5BnAXBnwTAHdVBrA4Anw5CqprAHsVCrl3AHE3CGXYBZ4ZAndnBrA5wrsnzks4And5BrlTAHMVBnAYBkE1BZoYBq40BndYAnoZzrs1zkd4BrEYBkEhEns2zkM1Crl2BnMTAHEVAHh2BrI0BjoYBZ45Crh2AnETAHsVCrMZCHM0AGoYBZ45CHAYCrd0zrhVBnMnCHE0CGprAHdVCHl3BnE0BjX1zkM2AkA0BkM2wrs2zkM2CHo4AHsTAZ4nAksnAkwYAZoYBq40CrA1And2zrsVBklnBnEYAnhhEnsnzks5Akd5BnlTAq43Anw1AkA2AnAhAHsVCrl1AHAXCqXXzkwYAnAZAko0BGoYAq45CHdnArdZzrohHrsXzkl5BnAXBnwTAj4XCHsZCrEYCqpbxZpQar0OduQnL3aWcvJUaJ9mcuJUaK50AjdhaNmTcq1ZeKYmDGeVc256aLxWxZpNbKYTDGdkaNaNaNaNxZ8|scaledrag|wjXjMKB0bK9VwkPjduYifGwTwNtkeumWckwjCjxXMLJnaGwTwOF5duIjCjxneNdjzqxnM2tTaGw6wkwVAjwTwOBkMKYmc3amdjw6wkwVBGwTwN1idNeQcjw6wkwXAqoXwrohArojzqxiwkPjAGwTwNtWeNJZwkPjzHsjzqxXc3BQeumWcjw6wOFWdqwTwNmkc25nM29Tc3wjCjxNaNaNaNMjzqxjaZw6AqXjMNekc2YWdjw6wkBNMHijAZwTwNxOcZw6wksjzqxja3piauFQcNdjCjw3wrdhBZo3wO0TwNBWcOFZc2YgcLJ0aGw6fZxWdNFmdjw6BqXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|Dvpieuhhar0OHHs2zrdVAHA2BksYAnwhHrs2zrdVAHo5AHM5BrIhHrs1zkwXCrs3CrITBZ4YArlYBkl0BGpAAHEVAkd1ArlnzrdVAHo5AHM5BrIhEns0zkw3BHo5AZXnzks5CHsZBkw1wrsYzko2Ans5BZXXwrdVAHA3BHE2BrITAqprAZ4ZAHs4CHI5AGXXwroTAZ4YCHlYAkMZBGoXzrdVAHo5AHM5BrIhEnoTAHsVArs5AksZBjonzkwYAHh5BHlYzrs0zkwYCrAnCrlhBZ4YAnd1BrM0BGXYBq4ZAHhnAnh5wsX3zksnBnI0BkE1zrsZzkE0AHo0BkIhEnEVAHlnAno4BHITAHwVBrEYArE2BGoYzkd4BrA4BkMZzrsXzko0AHdXAHhhAG43CrEnCrM2AjX3zksXCHs2CHE1wsAYzkd4BrA4BkMZzrEVAHd2BkA3ArIhBq4YCHAnArh1BGXYzkd3Bnw5AkA2wrdVAHA3BHE2BrITAG43BndZCHwnBjprAHoVArhYBnh0BqXYzkd3Bnw5AkA2wrsZzkE5ArdXBkATBq4YBnM2AndXBGoYAj40CHo3ArMnzrdVAHo5AHM5BrIhHrsXzkM0BrIYBkdTBZ4YArlYBkl0BGpAAHAVAnhZCrl5BjXYAG41BHw0Aro0wsXYBjX3zksnBkMYAHAZwtPOwuaQcuX9xZBNaNaNaNMODkXWdut0br48z2d|Dvpieuhhar0OHHdVBno3BklZAkhTAq43Bnd3BnhXBkdhHrdVBno3BklZAkhTAHAVAkwZAkwZAjprBZ43Ard2CHwZCqXYAZ42BHs3BndhCq4XCHsYAkoZAGXYBqo4zkI2BrsXAkInzrs0wsXYAG4YAnAnAnAnzrs0wsAYAG42ArMnAHI2zrs0wrsYzkl4CHd0AnITAHAVBkIYBnd3wrsYzkl4CHd0AnITAHAVAkwZAkwZAjpAAHsVCHh5BnEnBGXXzkd3Bnd3Bnd3CqprAHsVCHh5BnEnBGXXzkA0CrwZAkl3AjoYAG42ArMnAHI2zrohAHsVAHAnAnAnAZXXwsX4zkI2BrsXAkInzrohEnhVArlYAHwXAksTAqo3zkdXBnM5Akw4zroVAnE4AkwZCHdZwrdVBno3BklZAkhTAq43Bnd3Bnd3BnhhKjpBAZ40AkI2BrsXAGXYBqpAAq44BHM0AHoZBHATAHEhEnoVAnhnBrw3CHAYzrs0wroTAHAVBkIYBnd3wroTAHAVAkwZAkwZAjpAAqXXzkd3Bnd3BnlYAZprAqXXzkA0CrwZAkl3AjoXzkA4AnEZBnlnAGXXwroVCrI2BrsXAkInzrohHrAVBrw1BkEYArsTAqprAZ44CHh2AkAnBqXXwrEVAkhZArIYAkdTAq4nBrhZAkw5BnwhBq4ZCrwXBHsZBZXXzkd3Bnd3Bnd3CqpABq4ZCrwXBHsZBZXYAZ4ZAkwZAkwZwsA0zkw4Ako1AHw3zrsnzkM1AHd3BZonzkh5CrMZAnA0zrs0wrAVBrw1BkEYArsTAHEhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxQM29VAZw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGhZzqonyGd|DudhaNmTcr0OwnoXAroXAqdhevxicOBNc3xUDGe0dNtVd2YieuIPAGXhAGlODkYXc2Y5a29VwvpWbK50dn0OzHsVAHA2CrM4AnimzHsnwrIVBnE1BHI2BkEhzHsVAHA2CrM4AnimzHsnwrsYzkd0CHM4AkMhBq4XArw0BkI4AjoYAG43Brl2Crw2wrlVAroZBrM1CrwhAHMVBnE5BkhZBjo5zkoXAkE2BHhZwroVBnE4CHoYAnM3wrEVAroZBrM1CrwhBG43BrI1BHM2BqdhaNmTcr0Ow2aNaNaNajdWDkYXMLFPwuE9x00YAG4XArw0BkI4zrEVBnE5BkhZBkwhHrsYzkoXAkE2BHhTAHwVBnE5BkhZBjprAHsVAroZBrM1CqXYAj43Brl2Crw2wrsnzkInBrM5AkETAHsVBrwYCHE4AjoYAZ41AnE2CHw0zrhVBnE5BkhZBkwhEnsnzkInBrM5AkETBj4XBnd0AHM5CGoYAG4XArw0BkI4zrEVBnE5BkhZBkwhAHsVAroZBrM1CqX0zkd0CHM4AkMZwtPOwumlDGeXbOBgeN9TeK1mL2JTaK1mcOEYxZpNbKYTDGdkaNaNaNaNxZ8|Alternative|YoutubePlaylist|loaderror|tryotherquality|dragging|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnEZxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|PLAYBACK_TIME_UPDATED|PluginWS|sleep|yandex|vast_init|adsinchain|3600000|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnM2xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|failed|swapAudioCodec|watching|Lu4hwqohDq9ODmYVDq9neNd|hls_error|MEDIA_ERROR|subtitleDisplay|VpaidStarted|PluginHlsSubtitles|hlssubtracks|VastImpression|bgload||crtm|skipimprsd|skipimpessed|NETWORK_ERROR|loadstart|loadeddata|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOBmevFQcNenwjXjdu9nbLFQc24jCjx0c3oUdNmObvEjzqxUMLxObK4jCjwYAZoYAZoXwrojzqx0fLpmwkPjd3aOwjXjd2BicuIjCjwYwjXjMGw6wksjzqxic3amdjw6wksjzqx0bLojCkoTwOBkMKYmc3amdjw6wksVAjwTwNmkc25nM29Tc3wjCjxNaNaNaNMjzqx0bLpja2BWcu9ZwkPjaNJkAHMnwjXjeumXM29Tc3wjCjwXakpNAuMjzqx0bLpja3xWeK5lbK5OwkPnzqx0bLpja2sjCjwYwjXjeumXaN9VevBQfNIjCksYzqx0bLpXc2mVeuJZwkPXzqx0bLpXc2mVeuJZMKYQa24jCjxZbKePeqwTwOFQdvpiauFQcNdjCjw1wrdhBGo3wO0TwNBWcOFZc2YgduYifKYQd3EjCOTjc3xlaLwjCklTwN9VwkPXzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhevxicOBNc3xUDGe0dNtVd2YieuIPAjXhAZlODkYXMLFPwuE9x00XzrohHrs2zrohHrs2zrwhHroTAjpAAqXXwtPhHHoTBjpAAHMTBjpAAHMTCqpAAqX4wsXXzrMhKjpBAqXYAjpAAHMTAHwhHrs2zrs0wsXXzrs0wsXXzrsZwtPOwuaQcuX9xZBNaNaNaNMOzn48z2d|webkitEnterFullScreen|webkitendfullscreen|webkitExitFullscreen|wjXjMKB0bK9VwkPjduYifKYQd3EjzqxXc3BQeumWcjw6wNYmaOEjzqxUMLxObK4jCjwXwrohAqo2wjXjMNdjCksTwOBkMKYmwkPjAq42wjXjevmXaGw6wOB2aZwTwNtVbK1ieumWcjw6wOpWd2m0bK9VwjXjMNeXMKFlbK5OwkPjAZonwrAhAZwTwNxOMGw6Aq40zqxja2tWeNJZwkPXzkhTwOFQdqw6AqXjd2BicuJWeNJZwkPjAGwTwNxOM29Tc3wjCjwXBrelaHojzqxQM29Vd2BWcu9ZwkPjaNaNaNaNwO0TwNBWcOFZc2YgaOJTcqw6fZxWdNFmdjw6AHATwN9VwkPXzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhevxicOBNc3xUDGe0dNtVd2YieuIPAGXhAGlODkYXMLFPwuE9x002zkM3BrEXBHsYzrohHrMVBkd0Bro1AHsTAG43Brs5AnI0CqpAAG43BrsYBrlYBjXYzkd0AHlnBHE4wsXYzkd0AHs0CHs2zrMVBkd3Brs5AnIhHroTBj42Bnd0AHlnBGpAAqXXwsX2zkM3BrEXBHsYzrohKjpBAHhTAqpAAHhTBj42Bnd0AHlnBGpAAHMVAkI4CrIXCqX2zkM3BnEYCHA1wsXYBj4ZBHh4BHo4zrsVBnEYCHA1BrhhHrsYzkAZBHI5BrlTAG43Brs5AnI0CqpAAHsVAnw1BHl0CGXXwsXYCqXXwtPhHHsVBnEYAHE5AHMTAHsVAnwZBHhXBjpAAG43BrsYBrlYBjXYBj4ZBHhXBkE1wsX2zkM3BrEXBHsYzrs2zkw1Cro2BrIhHrMVBkd0Bro1AHsTAHhhHroTAHhhHroTAHsVAnwZBHhXBjpAAG43BrsYBrlYBjXYAG4nAkw1Cro2wtPhHHs4zrsYzkAZAkI4ArMhHrs4zrs4wsXYAG4nAkI1CHE5zrs4wsXYAG4nAkI1CHE5zrs2zkw1Cro2BrIhHrs2zkw1Crh1ArhTAHMVAkI4ArM0BGpAAHMVAkI4CrIXCqXYAG4nAkw1Cro2wsXYCqXYAG4nAkw1Cro2wtPOwuaQcuX9xZBNaNaNaNMOzn48z2d|firstLevel|English|webkitSupportsFullscreen|wjXjbKBWckwjCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|eng||hlsaddbitrate|OpenScroll|wO0TwNBWcOFZc2YgeumUaGw6fZxWdNFmdjw6BjXjc24jCksTwNtkeumWcjw6wOFQcKIjzqx0fLpmwkPjeuJ4eqwTwOFmfvEjCjwXCkoXwjXjaN9VevBQfNIjCklTwN1idNeQcjw6wkw1AqoXwrohAHAjzqxkcumkbZw6AqXjd2JXMLxieu9ZwkPjzZwTwNaWcOEjCjxIMKiWcKsTELxQMKXjzqxTaLF0aLxndutkbK5OwkPjAGwTwNsjCjwXzkdjzqxXc3BQeumWcjw6wOFWdq1TaKa0wjXjM29Tc3wjCjxNaNaNaNMjzqxnbu93avJZMLFQc24jCkoTwOBPc3ejc3FPwkPYgGXjM29VevxWct9leLxieumWcjw6fZxWdNFmdjw6BZXjc24jCksTwNtkeumWcjw6wNF1dNt0bK9VwjXjevmXaGw6wOFmfvEjzqx0aLi0wkPjArPXAqwTwNaWcOFnbLQmwkPYAqXjcKtZa2mVwkPjAkIXwrsnwrohAqwTwNBTbKBSwkPXzqxNc250wkPjJutPc21izstZbKtTwjXjcuJ0euJZd3piM2mVaZw6AqXjMGw6wkoVBZwTwNBWcu9ZwkPjaNaNaNaNwjXjdu9nbLFQc24jCjx0c3oUdNmObvEjgGXjM29VevxWct9jeKaNaLwjCOTjc3xlaLwjCkhTwN9VwkPYzqxQM29VwkPjDvpRd2FQejpkcutndn0Ocu9iauJZyvxicNEQxn48z3pRd2FQek58gvXVcu9iauJZyvxicNEQzqoVcu9iauJZyvxicNEQCNxmaN9ZaGXhzNYWMKFmdjiZMK5lyHQiaOFmdjp7wuFQd3pTMLl6MNYWM2T7MN9ZauJZzLxiaum1dnPhBHomCZp3bKF0brPhAHJXfrThbuJQa2i0CjoYBLp4CZoUe2Jjb2m0zKtVbK1ieumWcj1NbKYTzK1WauI6wuxWeuh7wutVbK1ieumWcj1NbKYTzK1WauI6wuxWeuh7wq13aKxSbLEUMK5QcKt0bK9VCjpicNmUMLFQc24PdNtVaqlhAG44dZpQcNaQcNm0aGpmMLBmzKmVzK91erThMK5QcKt0bK9VCjpicNmUMLFQc24PdNtVaqlhAG44dZpQcNaQcNm0aGpmMLBmzKmVzK91erU9wq5Tc2tlaLwPdNtVaqlhf3pWd2m0bK9VCjpZaKYieum2aHThzLemMNUQeq1icNmUMLFQc24UauJTMLl6wq0Xzks2dnThMK5QcKt0bK9VzKFmcut5CjoUAq4YBOA7gGoVcu9iauJZyvxicNEQCNxmaN9ZaGXhzNYWMKFmdjiZMK5lyHQiaOFmdjp7wuBWcOFmcOE6wqdOCZpXc3BQeumWckPhMKxnc2Y1euI7wvFWdrPXgGoVcu9iauJZyvxicNEQCNxmaN9ZaGp7cuJNerPhzHAXdvh7wutVbK1ieumWcj1laKYifHPhzHoVAnxnCZp9wq5Tc2tlaLwPdNtVaql6MKa0aLwhfZpTaKa0CjonAvp4CZp9wspSaLmNdNtUaLAhMK5QcKt0bK9VyvxicNEQwvThAqITwrhXxGXhAHoXxGp7wuxWfq1nbutlc3d6wrohAkohAqoUAG4naK0hyuBWcu9ZyHThgGo0AqIhfZpjc3hUd2iiau93CjoXwrwVBKJUwrohAqoPM29Tc3wQCZp9wv0jzqxiM3FQc24jCjxjeKaNaLwjzqx0fLpmwkPjM3BnwjXjdu9nbLFQc24jCjx0c3ojzqxnM2tTaGw6wkoVBZwTwNBTbKBSwkPXzqxPbKFmwkPYzqxkc2YWdjw6wNaNaNaNajwTwN1idNeQcjw6wkIXwrohAqoXwjXjcNmkcjw6wks0wO0TwNBWcOFZc2Ygd2J0eumVa3AjCOTjc3xlaLwjCksYzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwvFZMK5naN9ZcH0OevxicOBTMLFmyrsTwrsQxn48dut0bqplDGeBCG45BHlZAHMnBjXXwsXYAG4XBnA0AnIZzrwVBrwZCHhXBnIhHrsZzko4Brw3CqXZzkl3BkhnBkd1wsXYBq41BkI0AkMnzrsVCrM5AHw0BnIhHrs2zkoXAHA1BHATAZ4nBHd2BkM4CGpAAHIVAHl3AkM0BZX1zkh0AHEYBno5wsXYBG40AHI0BnI2zrMVCrAXBkh0AnIhHrs3zkh3AndXBkATBZ43CrhnCHsYwsXYCqX5zkh0Akw5CHI0wsXYBG41BHAnBHs0zrsXzkhXAroXBkAhHrs1zko3Arh0BndTAHsVCrA4Bro4CGpAAHMVArhYBklXBGXYBq4nBrwZArlnwsXYBq42BHM2ArEZzrs1zkhYAnI0BnlhHrsZzks1Ans1BrATAHEVBnM5Ako0BGpAAHsVArw3Brd2BjXYBG4ZBrwZBro4wsXYAq4XCrI1AHoYzrs3zkMXBnM3wsX4zko2AnhZBrI0zrs3zkdhHrMVCHh0AHo1BrdTAHIVAkh4Bro1CqpABG44AHw0BklZzrs0zkd4ArdYBrhhHrAVBrE2AHI1BnETAHIVCrInBndZAGpAAG45BkEZBkhYAGXYBq40AnE1AnlnwsXZzklZCHw3BHIYzrsYzkh4BrI3AnlhHrwVAnM2AnsnBrITAHoVCrwnArw2CGpAAqX5zkh5CHl3BrhnwsXXzkoZAno0ArlXBklTBZ44AkAXBrI3CqpAAj40BrM3Bns4AGX2zkh0AkAYCrEZwsXZzkl0ArdnBrA1zrIVCrEYBrs3ArlhHrsVCrhnCHAZCHdTAZ4nBHd2BkM4CGpAAZ4nAnsnAko4BGXYzkh5Akw2CHsnwsX1zkh2CHh4BkM0zrwVCrl2AHEXCrMhHrMVCHdZBkE2BkwTAj40Cro3Bnl4wsX3zklnBnInArhTAq4XBrMXBrsZAHA2wsX5zkl1CHwYBkA2zrohKjpBCq44Brl5Anh3AZX2wsA3zkw3BkonAnE1zrMhBjX3zkw3BkoYAnw4wrMTCq44Brl5Anl3BqprBjXYAq40AkA5CrM3wrdVAkd2ArAnBrITAHsVBZo4zkh0CHlnCrdnzrsYzkdhEnsXzkEZAnl2BkMTAHsVBZoYAG43zrsXzkEZAnl4BkdhAHsVBZX4zkh0CHlnCHd0wsAYAG43zrdVAkd2ArsnAkhhAHoVBrwnCHM2BjX2wrhVCrE5CHA4BnATBjpbxZpNbKYTDGdkaNaNaNaNxZ8|wake|Video|aborted|issue|crossdomain|wheelDelta|appendBuffer|WebKitSourceBuffer|WebKitMediaSource|AUDIO_TRACK_SWITCHING|VastReady|xhrSetup|VastInsertOr|enableWorker|fragLoadingTimeOut|manifestLoadingTimeOut|withCredentials|attachMedia|disablePreload|VastInsertAnd|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnI0xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|MEDIA_ATTACHED|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnE4xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|autoStartLoad|setTextTrack|vast_finish|TEXT_TRACKS_ADDED|vast_ima|QUALITY_CHANGE_REQUESTED|mediaType|vast_stop|MediaSegment|FRAGMENT_LOADING_COMPLETED|oldQuality|preloading|MANIFEST_LOADED|FRAG_PARSING_METADATA|renew|relurl|FRAG_CHANGED|tagLive|vastbgpreload|vast_ready|VastOverlay|AUDIO_TRACKS_UPDATED|fragdata|PluginVastTimeMsg|startdelay|||||||||||VastRemoveUrl|LEVEL_SWITCHED|LEVEL_SWITCH|MANIFEST_PARSED|vast_error|VastError|vast_startdelay|alarm|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnMXxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|LEVEL_LOADED|vastmute|posterwidth|vast_playroll_limit|vast_playroll_counter|vast_postroll_counter|vast_postrolltbimp|_timer|vast_midroll_counter|vast_midrolltimebreak|poster_floatshadow|vast_linktxtbgcolor|vast_introtbimp|vast_introtimebreak|vast_midrolltbimp|line_play|SVG|857|432|275|296|957|countdown|counter|_text|link2|iconspress|PluginCountdown|2001|PluginHdIcon|readAsText|rotateonhover|clickmarginright|clickmarginleft|bgline2|rotateonclick|tippointeralign|vast_skipcolor|vast_titlebgcolor|vast_skipbgcolor|vast_linktxtcolor|180|bgline1|||||||||||sub_split2words|sub_drag|black|flipy|posterontop|flipx|2px|sub_fonted|PluginSubword|bglines|clone|_bg|883|914|403|vast_preroll_counter|513|613|702|vast_pauseroll_limit|985|vast_pauserolltbimp|935|vast_pauserolltimebreak|971|979|907|956|vast_prerolltimebreak|081|vast_preroll_limit|046|vast_title|088|startAd|189|055|084|vast_prerolltbimp|918|897|988|981|001|bufferInterval|096|bufferDeg|996|992|041|036|019||||185|||267|||747|705|785|818|874|659|vast_pauseroll_counter|344|vast_postrolltimebreak|vast_postroll_limit|547|Dialogue|tipmargintop|9753595|10176229|79351404|valuemarginbottom|valuemargintop|9485553|36980425|61104201|8681427|8949469|46361894|908349|ytcl1|valuepaddingright|playerVars|videoId|enablejsapi|playerapiid|html5|valuepaddingtop|API|valuepaddingleft|onYouTubeIframeAPIReady|valuepaddingbottom|youtube_iframe_api|79867139|8413385|vast_volumebgcolor|0997273|vast_progresscolor|7244686|0588595|9784469|3677693|vast_linktxtonmobile|461584|vast_volumecolor|7774154|6708602|0856637|4794819|39043363|95640915|||||7073175|54918887|1980378|8512623|5770455|541335|593535|9031916|disablekb|playsinlineonmobileiphone|vast_xbgcolor|vast_xcolor|unMute|volume_element|setPlaybackQuality|slider|setPlaybackRate|large|medium|hd720|hd1080|getCurrentTime|409829|control_mute|tipmarginright|constrols|tipmarginleft|tipmarginbottom|WEBVTT|subtitle_errdel|control_time|loadVideoById|triangle|vast_titlecolor|sub_all_title|tiny|setSize|colorover|ytReady|ytlog|ytEnded|aload|onPlaybackQualityChange|onStateChange|iv_load_policy|showinfo|modestbranding|onReady|PAUSED|BUFFERING|alphas|abg|getAvailableQualityLevels|getPlaybackQuality|running|customyterrors|unavailable|lines1|CUED|ytError|vast_progressbgcolor||023|||093|settings4action|hideuntiltext|settings4|resumed|unmuted|hidewovar|eventlisteners|hideuntilstartedios|playerjs_hit|watch|capiom|rewound|vast_Impression|toogle|youtubeid|hideonvar|hide0timestore|settings3|dispatchEvent|adShown|settings3action|createEvent|initEvent|hideuntilended|hideonvod|advertiser|website|Audio|LIVE|the|adsinvitation|Ultra|settings5action|ads|settings5|Enter|Exit|hidenormscreen|gainact|nonInteraction|hideonleave|hideonunmute|Metric|014|hideonmeta|300000|hideonlive|vpaid_|VpaidSet|222222|fillText||PluginSettings2|combined|fillStyle|Arial|Active|customTextPl|sscopyright|Courier|toDataURL|jpeg|vastinfo|vastpause|vastresume|vaststart|vastnow|showplaylist|invert|playlist_folders|playlist_length|888888|switchpip|resize2|vastbreak|updateCuid|hideonmobile|moveplaylist|settings2action|prt|Test|hideafterstart|dwn|startvast|settings1action|hideondesktop|timeplay|hideall|hidelap|hideonleaveandplay|titlecolor|Orientation|isfullscreen|fix|settings1|unfix|Quad|hidemini|iemobile|blackberry|iosv|errortimeout|16x9|WebkitAppearance|maxHeight|Build|vast_impression|vast_click|vast_skip|ontouchstart|Logo|toUpperCase|Super|||castdevice|casterror||showduration|__storage_test__|separator|roll|buffering|RegExp|map|ga_proc|Philips|vast_timeout|maxTouchPoints|appVersion|Opera|enter|vast_pauseonclick|trident|vast_volume|vast_closeonclick|appName|userAgent|Trident|Edge|MacIntel|platform|Tizen|MiTV|SmartTV|ShowSettingsBut|ipod|Firefox|Safari|Windows|560|All|showboth|hideab|Reset|Previous|hideonyoutube|pjs_cast_button_|Bottom|Font|Shadow|hidenoab|Copied|hidenomini|Full|1296p|Medium|Small|clipboard|Tiny|Yes|cast_available|1val|0val|Skip||once|pauseonhover|||'.split('|'),0,{}))
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
  shortTitle: "Halestorm - I Miss The Misery",
  title: "Halestorm - I Miss The Misery RUS COVER/НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=1NL0-OLccPw",
  file: 'audio/covers/43 - Ai Mori - I Miss The Misery (Halestorm rus cover).mp3'
}, {
  shortTitle: "The Weeknd - Blinding Lights (ft. Utopia Show)",
  title: "The Weeknd - Blinding Lights RUS COVER НА РУССКОМ (ft. Utopia Show)",
  href: "https://www.youtube.com/watch?v=hoSMiVZjW04",
  file: 'audio/covers/42 - Ai Mori - Blinding Lights (The Weeknd rus cover feat Utopia).mp3'
}, {
  shortTitle: "Guano Apes - Open Your Eyes НА РУССКОМ/RUS COVER",
  title: "Guano Apes - Open Your Eyes НА РУССКОМ/RUS COVER",
  href: "https://www.youtube.com/watch?v=Ew5iNUlv-aw",
  file: 'audio/covers/41 - Ai Mori - Open Your Eyes (Guano Apes rus cover).mp3'
}, {
  shortTitle: "Evanescence - Bring Me To Life",
  title: "Evanescence - Bring Me To Life НА РУССКОМ/RUS COVER ft MULTIVERSE & Tashdrummer",
  href: "https://www.youtube.com/watch?v=QODn6OwRrOE",
  file: 'audio/covers/40 - Ai Mori - Bring me to live (Evanescence rus cover).mp3'
}, {
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
  file: 'audio/covers/24 - Ai Mori - OverAndOver (Three Days Grace rus cover).mp3'
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
  title: 'TOXIC CANDY (Альбом 2021)',
  folder: [{
    title: 'Капитан Америка',
    file: '/audio/toxic-candy/01 - Капитан Америка.mp3',
    poster: 'images/tc_small.jpg'
  }, {
    title: 'Капелька летней грусти',
    file: '/audio/toxic-candy/02 - Капелька летней грусти.mp3',
    poster: 'images/tc_small.jpg'
  }, {
    title: 'Джин Тоник',
    file: '/audio/toxic-candy/03 - Джин-тоник.mp3',
    poster: 'images/tc_small.jpg'
  }, {
    title: 'Фанфик',
    file: '/audio/toxic-candy/04 - Фанфик.mp3',
    poster: 'images/tc_small.jpg'
  }, {
    title: 'Пластилин',
    file: '/audio/toxic-candy/05 - Пластилин.mp3',
    poster: 'images/tc_small.jpg'
  }, {
    title: 'Невеста',
    file: '/audio/toxic-candy/06 - Невеста.mp3',
    poster: 'images/tc_small.jpg'
  }]
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
  title: 'Стример (Альбом 2020)',
  folder: [{
    title: 'Стример',
    file: '/audio/strimer/01_strimer.mp3',
    poster: 'images/covers/strimer.jpg'
  }, {
    title: 'Глад Валакас',
    file: '/audio/strimer/02_valakas.mp3',
    poster: 'images/covers/strimer.jpg'
  }, {
    title: 'Вове Братишкину',
    file: '/audio/strimer/03_bratishkin.mp3',
    poster: 'images/covers/strimer.jpg'
  }, {
    title: '50 оттенков Шевцова',
    file: '/audio/strimer/04_shevcov.mp3',
    poster: 'images/covers/strimer.jpg'
  }, {
    title: 'Hardplay',
    file: '/audio/strimer/05_hardplay.mp3',
    poster: 'images/covers/strimer.jpg'
  }, {
    title: 'Бл*дский Twitch',
    file: '/audio/strimer/06_twitch.mp3',
    poster: 'images/covers/strimer.jpg'
  }, {
    title: 'Оляша',
    file: '/audio/strimer/07_olyasha.mp3',
    poster: 'images/covers/strimer.jpg'
  }, {
    title: 'Бан',
    file: '/audio/strimer/08_ban.mp3',
    poster: 'images/covers/strimer.jpg'
  }]
}, {
  title: 'Летели на юг (Альбом 2019)',
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
var coversSection = document.querySelector('.videos--covers');
var videoPlayer = coversSection.querySelector('.video-container');
var playOverlay = coversSection.querySelector('.videos__play-overlay');
var videoPreloader = coversSection.querySelector('.videos__preloader');
var videoBackground = coversSection.querySelector('.videos__background');

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