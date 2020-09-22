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
//	Playerjs.com 12.4.4
//	20.09.2020 08:15:00
//	API - http://bit.ly/plrjsapi

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('B 7a=[];B i0;if(2a[\'xy\']){1O(xy,1)};E Hr(3w){B o={1R:K,kC:[],pP:[],hG:\'Oe\',Od:vn,Of:vy,7B:\'12.4.4\',bQ:[\'7g\',\'\',\'\'],ht:\'\',2l:K,8a:K,de:K,Og:K,eS:K,5e:K,8m:K,92:K,u:\'#Oi#Oh#Oc#m0#Ob#O6#O5#O4#O7#O8#Oa#O9#Oj#Ok#Ow#Ov#Ox#Oy#OA#Oz#Ou#Ot#Oo#Om#Ol#Op#Oq#Os#m0#Or#O3#O2#NF#NE#ND#NG#m0#NH#NJ#NI#NC#NB#Nw#Nv#Nu#m0#Nx=\',u2:\'\',u3:\'\',u4:\'\',u5:\'\',u6:\'\',u7:\'\',u8:\'\',u9:\'\',y:\'xx??x?=xx????=\',p:\'{Ny}\',NA:-1,tV:"EX",eT:"//EX.6X",7p:[],dt:H,pr:H,ga:K,ab:K,i3:[],DN:K,d5:\'//.7D//\',2f:[],5Z:[],7Z:[],3l:[],kK:[],c6:[],kb:0,sa:K,5R:K,1E:K,oz:K,b4:K,pV:[],Nz:[],uj:0,8u:K,ei:K,jZ:K,NK:[],ax:K,f1:K,v4:29,gy:29,us:K,FH:E(x){B a;O a},NL:0,uW:4Y,5L:K,cO:K,kd:1G.kd,d:9X.sG,fB:9X.sG,8V:9X.8V,6K:9X.8V.L("6K")==0,NX:{},fd:["FH","FB"],6d:[],Fx:[],NW:[],kM:[],FB:E(x){B a;O a},1a:0,kx:0,5Q:K,dk:-1,ag:3,NY:0,rX:0,9t:0,3J:{x:1,y:1,x0:1,y0:1},aY:["fI","dB","eP","ni","n7","l2","n5","cj","dc"],ch:0,NZ:0,et:0,cd:0,bc:[\'7h\',\'dS\',\'m8\',\'96\'],O1:[],l9:H,rN:[],iG:0,mH:K,jq:[K,K,K]};B ew={R:{w:20,h:20,1d:"-",O0:"-",a:1,6B:-1,1y:"3P",1F:"",1A:1,g5:-1,9N:0,2j:1,1o:"",1C:"",43:"NV",aC:12,gi:0,1l:"S",2x:"0 3 0 3",d7:"0 0 0 0",2B:1,hD:"0 0 0 0",NU:0,hq:1,bg:0,k6:0,BG:0,5z:1,7G:-1,5P:"3H",7s:-1,dQ:"0 0 0 0",tC:-1,t7:"3P",cK:-1,jt:-1,5M:"1M",4f:"jU",2j:0,fD:"3H",gU:0.7,vf:0,vb:"3P",fz:"5 5 5 5",NO:"0 0 0 0",uB:1,va:"kg-kf",fJ:10,uU:0,3F:"",An:5,Ao:0,3U:0,NN:2,NM:2,BX:0.2,BS:0,BY:0.1,gK:0,Ag:"NP",Aj:1,Ak:5,BW:"3H",BV:"3P",BZ:"3P",Cd:1,EB:1,ud:1,6Z:0,3y:0,eR:20,cP:"<2k W=\'20\' X=\'20\'><g><cU ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 2V=\'#fl\'/></g></2k>",sY:1,k3:-1,fR:0,jY:1,tY:-1,NQ:0.1,fe:0,2Z:"",G0:0,Ft:"jU",3b:"",EM:Fc,EO:Fc,Cj:0,4S:0,5o:"3P",C1:0,Bj:"3H",Ca:9,uk:"0 0 10 0",tX:"0 0 0 0",C0:0}};E CE(){O H}E bz(s){if(s.L(\'.\')==-1){s=s.1z(1);s2=\'\';U(i=0;i<s.Q;i+=3){s2+=\'%u0\'+s.7P(i,i+3)}s=NS(s2)}O s};E D8(){if(o.u!=\'\'){v=9l(v,6g.7L(bW(o.u)))}if(3w.L("#"+v.9y)==0){3B{3w=6g.7L(o[o.fd[0]](3w))}3g(e){}}F{if(3w.L("#"+v.dJ)==0){3B{3w=6g.7L(o[o.fd[1]](3w))}3g(e){}}}}E 8j(x){if(x==\'Fq\'){v.j3=\' \';v.iP=\' \'}if(x==\'DF\'){O[\'NR\',\'OB\',2I(\'8w\')]}if(x==\'1R\'){if(v.j3!=\' \'&&v.iP!=\' \'){B d=1D 7y();B hr=d.OC();B mn=d.Pn();if(hr==v.j3&&mn==v.iP){1v(\'Dv\');o.2l?o.V.7T():\'\';o.V.2P();v.j3=\' \';v.iP=\' \';o.S.Hp(\'qU\')}}}if(x==\'DG\'){O[\'Pm\',\'Po\',2I(\'8w\')]}if(x==\'ri\'){B s=v.i9*60+v.ic*1;if(s>0){v.1E=o.2E=s}}if(x==\'sK\'){if(v.dm){3j.7n(\'ph\'+v.dm,v.i9+\':\'+v.ic)}}if(x==\'Pp\'){v.i9=\'0\';v.ic=\'0\'}if(x==\'Fm\'){v.i9=\'0\';v.ic=\'0\';if(v.dm){if(3j.5d(\'ph\'+v.dm)!=1V){B 1L=3j.5d(\'ph\'+v.dm);B d4=1L.2y(\':\');if(d4.Q==2){v.i9=d4[0];v.ic=d4[1]}}}}}E jj(y,1c){}B tQ=E(){B ay=1K("1S");o.1I.1J(ay);J(ay,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'W\':\'100%\',\'X\':30,\'2w-1y\':v.Ek,\'1r\':v.CM,\'2m\':\'1M\'});B x=1K("1S");o.1I.1J(x);J(x,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'W\':\'100%\',\'1y\':v.Ei,\'43-3C\':v.CV,\'2U\':(v.Ef+\'px \'+v.CO+\'px\'),\'2m\':\'1M\'});G.7D=E(1C,n){x.1X=1C;6l(x);J(ay,{\'X\':x.2Q,\'2m\':\'4z\'});ay.C.4J="Pr";U(B i=0;i<x.av(\'a\').Q;i++){x.av(\'a\')[i].C.1y=\'#fl\'}if(n){1O(G.8d,2M*n)}x.C.4J="Pq"};G.8d=E(){3k(x);3k(ay)}};2o(E(w,i,s,e){B 8H=0;B 7X=0;B fj=0;B cN=[];B df=[];g1(H){if(8H<5)df.2X(w.6c(8H));F if(8H<w.Q)cN.2X(w.6c(8H));8H++;if(7X<5)df.2X(i.6c(7X));F if(7X<i.Q)cN.2X(i.6c(7X));7X++;if(fj<5)df.2X(s.6c(fj));F if(fj<s.Q)cN.2X(s.6c(fj));fj++;if(w.Q+i.Q+s.Q+e.Q==cN.Q+df.Q+e.Q)1k}B EC=cN.mD(\'\');B Cl=df.mD(\'\');7X=0;B sR=[];U(8H=0;8H<cN.Q;8H+=2){B tN=-1;if(Cl.9C(7X)%2)tN=1;sR.2X(aI.nH(2t(EC.1z(8H,2),36)-tN));7X++;if(7X>=df.Q)7X=0}O sR.mD(\'\')}(\'Pl\',\'Pk\',\'Pf\',\'Pe\'));B v={1v:0,oR:0,kc:"#3H",2W:0,AN:1,8B:"#3H",5P:"#3P",6Z:0,ci:1,gD:1,3i:0,ye:1,bG:0,1x:{Pd:0,1y:"3H",a:"0.4",h:34,ha:1,1p:1,fy:1,ef:0,i5:3,8t:0,l4:3,5M:"1M",1l:"2K",2x:"0 0 0 0",6Z:0,hK:0,aH:\'\'},1Z:{on:1,f:1,r:1,m:1,4l:5,oQ:"4l",7I:1,oS:"1W",yO:0,Hb:1,uN:1,bY:0.2},1e:{5P:"3H",7s:"lF",5z:0.9,7G:-1,1l:"1b",2x:"0 0 0 0",2U:"7 15 7 15",1y:"3P",43:"DU, DX, kg-kf",aC:12,4A:10,gi:0,5o:"E2",qh:1,8B:"Pg",a:1,6B:-1,Ph:0,Pj:100,Pi:xM,Ps:1,sf:1,D0:"Pt",Dn:"3H",se:-1,PE:-1,D1:0,6m:3,fG:16,qd:"PD",6Z:0,g6:1,lU:1,lV:"3P",qx:0,qy:"3H",CY:1,CZ:0,CX:"lF",lO:0,hM:4Y,f5:0,8Y:0,EE:0,ED:0,eJ:1,3O:0,ln:50,sA:0,lP:1,eI:PF,j5:0,ut:"lF",uL:"0 0 0 0",ma:30,8B:"Ed"},1j:{5P:"3H",7s:"PG",5z:0.7,7G:-1,43:"DU, DX, kg-kf",1l:"2K-2e",2x:"0 0 0 0",2U:"7 10 7 15",1y:"3P",aC:12,fG:16,4A:10,gi:0,PI:"3P",5o:"E2",a:1,1A:5,6B:-1,rY:1,6m:3,g6:1,lU:1,lV:"3P",lO:0,hM:4Y,6Z:0,PH:1,PC:"4X",5k:1,PB:"6I",Pw:1,Pv:"2z",Pu:0,Px:"6L",Py:0,PA:"7J",ma:30,8B:"Ed"},wy:{1l:"2K-2e",2x:"0 10 50 0"},1W:0.8,rO:1,lJ:1,aO:0,5f:0,zw:1,5u:0,4g:0,zo:0,qO:0,4b:0,vw:1,nh:0,qk:0,ql:0,hJ:\',\',gw:\';\',gQ:\'//\',gl:\'2V\',kN:1,kL:-1,w8:0,EP:\'20 0 0 20\',bX:\'1h-1b\',ob:100,nB:100,oG:-1,sn:0,xT:1,Ek:"kr",Ei:"3P",Ef:5,CO:10,CM:1,CV:10,kb:0,pE:1,GJ:1,pN:1,gn:1,4M:\'Pz\',zJ:0,fK:\'9V\',hH:1,A9:0,zR:0,yP:0,8f:1,bL:1,ym:5,9M:0,A4:1,yF:0,r9:5,zs:0,A5:0,o3:0,9O:1,dp:1,yR:0,FK:0,ze:0,q0:1,ki:0,2L:"Eg",Pc:BE,n6:\'100%\',ga:0,Cv:{8p:1,1N:0,jP:0,4E:0,1R:1,pD:0,pw:0,q8:0,Pb:0,OO:0,ON:0},Cw:{8p:1,1N:0,jP:0,4E:0,1R:1,pD:0,pw:0,q8:0},vc:100,r8:1,fV:1,hb:14,fI:\'100%\',xK:1,xJ:20,wm:1,n7:0.7,xQ:2,rd:3,cj:10,dB:"3P",eP:"Et",ni:"3H",l2:0,n5:cT,rl:1,dc:0,ve:1,ai:1,Ex:1,Ev:0.3,gI:3,nb:4,Eu:5,qQ:0,DC:OM,DD:AB,yD:0,zX:1,uT:1,oW:1,Gn:1,tG:0,fv:160,v3:90,uX:0,B3:1,B2:"lF",Bd:0,AS:1,9y:\'2\',dJ:\'3\',OP:10,OQ:1,OT:1,OR:-1,OL:1,OK:1,eB:-1,OF:0,OE:1,OD:0,OG:1,OH:0,OJ:1,OI:0,OU:1,OV:0,P6:1,P5:0,P7:1,P8:0,pe:1,Pa:0,P9:0,P4:1,P3:0,OY:1,OX:"#3P",OW:"#3H",OZ:"#3H",P0:"#3P",P2:"#3H",P1:"#3P",Nt:"#3H",Ns:"#3P",LW:"#3H",LV:"#3P",LX:"#3H",LY:"#3P",M0:1,LZ:0,LU:1,LT:0.5,LO:"#3P",LN:"#3H",LM:1,LP:1,LQ:1,LS:1,LR:1,M1:10,M2:-1,Mf:1,Me:1,Mg:0,lD:0,Mh:"or",Mj:"or",Mi:"or",Md:"or",Mc:"50%",M6:-1,M5:0,M4:-1,M8:0,M9:0,Cs:1,Co:0,yl:30,Mb:2,wl:10,zq:0,Ma:30,xY:1,y6:1,6f:0,2v:{on:0,5P:"3H",2W:0,aD:2,8B:"3H",1l:"1b",2x:"20 0 0 20",W:150,1p:0}};v.bF="ru";B oT=E(1g){B Y;B 1o;B eE;B 8M=K;B 5G=K;B 4B=v.Ec==1&&I(v.Ea)?fF(v.Ea):"#3P";B El=v.Ec==1&&I(v.Eb)?fF(v.Eb):"#3H";G.rv=E(){if(!8M){Y=1K("1S");J(Y,{"1l":"1Y","W":"100%","X":"100%","2w":jg(El,0.8),"1y":4B});Y.C.4J="3S";B 8d=1K("1S");J(8d,{"1l":"1Y","1h":15,"2e":15,"5Y":"3T","2U":5});8d.1X="<2k W=\'20\' X=\'20\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'><g><4r d=\'LL.5,3.5 L3.5,16.5 Em.5,3.5 Z\' 3u=\'"+4B+"\' 3u-W=\'3\' 3u-ao=\'Ew\'></4r><4r d=\'M3.5,3.5 Em.5,16.5 L3.5,3.5 Z\' 3u=\'"+4B+"\' 3u-W=\'3\' 3u-ao=\'Ew\'></4r></g></2k>";if(o.1q.2C){8d.1u("cv",E(1c){al()})}F{8d.bJ=al}8d.C.4J=10;B 2A=1K("1S");J(2A,{"1l":"1Y","1h":((v.Ev*100)+\'%\'),"1b":0,"W":"100%","1C-7e":"6u","1y":4B});2A.1X=(v.Ex==1?2I("3I")+\'<br><br>\':\'\')+(I(v.1g)?\'<a 8V="\'+v.1g+\'" C="1C-gP:1M;1y:\'+4B+\';Aq:0;8F-7I: aZ;fb-cR:52;2m:4z" 4f="jU" id="jL\'+v.id+\'">\'+v.1g+\'</a>\':\'\');o.1I.1J(Y);Y.1J(8d);Y.1J(2A);J(o.1B,{\'-3N-ap-eW\':\'2F\'});if(I(v.1g)){jn("jL"+v.id)}1o=[];if(I(v.6D)){v["Ez"]="6D"}if(!I(v.Ey)){v.Ey="iJ"}if(!I(v.EA)){v.EA="jS"}if(!I(v.r7)){if(v.bF=="ru"){v.r7="vk"}if(v.bF=="en"){v.r7="fU"}}if(I(v.6D)){v.Ez="6D"}U(B i=1;i<11;i++){if(I(v["3I"+i])){if(v["3I"+i]!=""){1o[i]=1K("1S");J(1o[i],{"2m":"cr-4z","5Y":"3T"});if(!o.1q.5A){B m=((v.gI*20-20)+v.Eu*1)/2;B n2=0;if(v["3I"+i]=="vk"||v["3I"+i]=="6D"){n2=v.gI*3}J(1o[i],{"2x-1b":m+n2,"2x-2e":m+n2,"2x-1h":m+20,"W":20,"X":20})}1o[i].1X="<2k W=\'20\' X=\'20\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'><g>"+B1(v["3I"+i])+"</g></2k>";2A.1J(1o[i]);1A(i,v.gI);1o[i].i="i"+i;1o[i].eo=5E;1o[i].dA=5n;1o[i].bJ=9m}}}eE=1K("1S");J(eE,{"2m":"4z","W":"100%","1C-7e":"6u","2x-1h":m+15});2A.1J(eE);8M=H}F{6l(Y);J(o.1B,{\'-3N-ap-eW\':\'2F\'});if(I(v.1g)){jn("jL"+v.id)}}if(o.1R){o.ax=H;o.V.2P()}5G=H};E al(){if(o.ax){o.V.2H()}eO()}E eO(){if(I(Y)){3k(Y);o.ax=K;5G=K;eE.1X=\'\';J(o.1B,{\'-3N-ap-eW\':\'1M\'})}}G.eO=E(){eO()};E 5E(){if(I(G.i)){B i=G.i.1z(1)*1;if(v.nb>-1){1A(i,v.nb)}}}E 5n(){if(I(G.i)){B i=G.i.1z(1)*1;if(v.nb>-1){1A(i,v.gI)}}}E 9m(e){if(I(G.i)){B i=G.i.1z(1)*1;rf(v["3I"+i])}}G.3d=E(x){if(x.L("1g")>-1){if(v[x]){B y=v[x].26("{1a}",2t(o.P.1a()));j9(y);o.7S.7D(2I("mh"),2)}}rf(x,H)};E rf(y,z){B x=\'\';if(y=="iJ"){x="6K://3m.iJ.6X/uD/uD.E6?u="}if(y=="jS"){x="6K://jS.6X/DB?5I="}if(y=="fU"){x="6K://LK.fU.6X/3I?1g="}if(y=="vk"){x="6K://vk.6X/3I.E6?1g="}if(y=="ok"){x="6K://q3.ok.ru/Ln?1g="}if(y=="FJ"){x="6K://t.me/3I/1g?1g="}if(y=="qC"){x=(o.1q.2C?"6K://wa.me/?":"6K://Lm.qC.6X/a1?")+"1C="}if(y=="qn"){x="qn://Ll?1C="}if(y=="6D"&&I(v.6D)){if(I(v.gC)){v.gC=v.gC.26(/9o\'qt/ig,\'"\')}j9((I(v.DM)?v.DM.26(/9o\'qt/ig,\'"\'):\'\')+\'<bG W="\'+(v.qQ==1?v.DC:2t(o.8S))+\'" X="\'+(v.qQ==1?v.DD:2t(o.bu))+\'" 3b="\'+v.6D+\'" Lo="0" tc\'+(I(v.gC)?\' \'+v.gC:\'\')+\'></bG>\'+(I(v.E0)?v.E0.26(/9o\'qt/ig,\'"\'):\'\'));if(z){o.7S.7D(2I("mh"),2)}F{eE.1X=2I("mh");if(I(v.1g)){jn("jL"+v.id)}}}x!=\'\'?E3(x,\'oT\',4i,4i):\'\'}E 1A(i,x){J(1o[i],{"2G-B6":\'50% 50% l1\'});if(o.1q.5A){J(1o[i],{"pf":""+x+""})}F{J(1o[i],{"2G":"1A("+x+")","4y":"2G 0.1s 2R"})}}E E3(1g,1Q,uQ,uJ){B DW=(bT.X/2)-(uJ/2);B AX=(bT.W/2)-(uQ/2);2a.5G(1g+Hw(I(v.1g)?v.1g:o.8V),\'uD\',\'1h=\'+DW+\',1b=\'+AX+\',1x=0,5I=0,W=\'+uQ+\',X=\'+uJ)}E jn(AW){B uM=1G,1C=uM.8g(AW),dj,iy;if(1C){if(uM.7z.AY){dj=1G.7z.AY();dj.Lp(1C);dj.eW()}F if(2a.AZ){iy=2a.AZ();dj=1G.Lr();dj.Lq(1C);iy.Lk();iy.Lj(dj)}}}E B1(x){if(x=="iJ"){O"<4r d=\'FM,6.fn eM.fS,6.fn eM.fS,5.Le di.fS,4.Ld 12.Lc,4.uG 12.Lf,4.uG tj.B0,4.uG tj.B0,2.Lg eM.Li,2 C9.Lh,2 8.fH,3.Ls 8.fH,5.Lt L8.fH,6.fn L7,6.fn L7,9.k2 L8.fH,9.k2 L8.fH,17.Bc eM.fS,17.Bc eM.fS,9.k2 tj.LE,9.k2 G8,6.fn Z\' 2V=\'"+4B+"\' 2V-8C=\'ba\'></4r>"}if(x=="jS"){O"<4r d=\'M7.EK,15.lY 9L.LD,15.lY 15.jC,11.LF 15.jC,7.LH 8P.jC,7.LJ 15.jC,7.LI 15.LC,7.LB 8P.Lw,7.Lv 16.Ck,6.Lu 16.Lx,6.Ly 8P.LA,6.Lz 15.Mk,6.Ml 14.N5,6.N4 8P.N6,6.N7 15.N9,5.N8 16.Ck,5.N3 8P.N2,5.MX 15.MW,5.MV 14.MY,5.MZ 8Z.N1,4.N0 11.Na,4.Nb 10.Nm,5.Nl fc.Nn,6.Np 9.Nr,7.Nq 10.Nk,8.Nj C8.Ne,8.Nd 6.Nc,7.Nf 4.Ng,5.Ni C4.Nh,6.MU 4.MT,8.Mx 5.Mw,8.Mv C5.My,8.Mz 4.MB,8.Lb 4.oY,8.Mu L4.oY,8.Mt C4.oY,9.Mo 5.Mn,10.Mm 6.Mp,11.Mq C6.Ms,11.Mr 5.MC,11.MD 5.MO,11.MN C5.MP,12.MQ 6.MS,12.MR 7.MM,12.ML C6.MG,13.MF 5.ME,13.nu 4.MH,13.nu C4.MI,13.nu 4.MK,13.MJ 4,13.PJ C5.PK,14.SI 6.SH,15.lY 7.EK,15.lY\' 2V=\'"+4B+"\' 2V-8C=\'ba\'></4r>"}if(x=="fU"){O"<4r d=\'sV.e8,8.tE nk.e8,11.EI fc.e8,11.EI 12.SJ,11.EQ 13.SK,11.EQ 9L.SM,12.SL 11.SG,13.ny 10.e8,13.ny C8.SF,13.ny 6.nv,11.SA 6.nv,10 C6.nv,8.Sz 8.Sy,6.nr 10.e8,6.nr di.SB,6.nr 11.SC,6.SE 12.SD,7.SN 9L.SO,6.SZ 12.SY,6.T0 14.T1,5.T3 8Z.T2,4.SX 11.SW,4 10.FO,4 C6.FS,4 4,6.SR 4,10 C4,13.SQ 6.FS,16 10.FO,16 8P.SP,16 16.SS,11.ST 15.SV,8.tE nk.e8,8.tE Z\' 2V=\'"+4B+"\' 2V-8C=\'ba\'></4r>"}if(x=="FJ"){O"<4r d=\'SU.zN,4.zM 8P.Sx,4.Sw 15.Sa,4.S9 14.Ge,4.G6 G8.Ge,4.G6 gA.S8,4.Sb 11.Sc,5.Se 8.Sd,6.S7 C6.S6,7.S1 4.S0,8.RZ 4.S2,8.S3 C4.Hl,8.S5 3.S4,9.Sf 3.Sg,9.Sr C3.Sq,9.Ss 3.St,10.Sv 4.Hl,10.Su C4.Sp,10.So 6.Sj,11.Si 6.Sh,11.Sk C6.Sl,11.Sn 13.Sm,6.T4 13.yU,6.T5 8Z.TP,7.TO 8.TQ,11.TR 8.TT,11.TS C8.TN,11.TM 7.TH,14.TG 8.TF,14.TI C8.TJ,14.TL 8.TK,14.TU 8.TW,14.z4 C8.U7,14.U6 8.U8,14.vo 8.U9,14.vo C9.Ub,14.Ua 9.U5,13.U4 10.TZ,13.TY di.TX,14.U0 12.U1,15.U3 12.U2,15.TE cC.TD,15.Th 9L.Tg,15.Tf 13.Ti,15.nA 13.Tj,15.nA 8Z.Tl,15.nA 13.Tk,15.Te 13.yU,15.Td 8Z.T8,15.T7 13.T6,15.T9 14.z7,14.z4 gA.z7,14.Ta 14.Tc,14.Tb 14.Tm,14.Tn gA.Ty,12.Tx 14.Tz,10.TA 15.TC,9.TB 8P.Tw,7.Tv 15.Tq,6.Tp 15.To,5.Tr 8P.Ts,5.Tu 15.Tt,5.RY 15.RX,5.Qu 8P.Qt,5.Qv 15.Qw,4.Qy 15.zN,4.zM Z\' 2V=\'"+4B+"\' 2V-8C=\'ba\'></4r>"}if(x=="vk"){O"<4r d=\'Qx.sw,13.Qs-0.Qr-0.Qm-1.Ql-1.Qk-1.Qn-2.Qo-0.Qq-0.Qp-0.w4-0.Qz-0.sI-0.QA-0.QL c-1.QK-1.QM,3.121-3.QN,2.QP-5.QO-0.g9-0.QJ-0.QI-0.QD-3.QC-0.21-3.QB-0.QE-0.QF,0.vz-0.127,0.QH-0.hx,0.136 c-0.wb,1.QG-1.164,2.Qj-2.vI,3.Qi-0.rK,0.zl-0.PW,0.111-0.PV,0.PU-0.g9-0.PX-0.1-0.sq-0.148-0.mb c-0.PY-0.Q0-0.PZ-3.PT-0.PS-4.PN-0.mb-0.sd-0.rK-0.161-0.hx-0.PM-0.zl-0.xU-0.PL-0.sd-0.PO-0.124 c-1.102-0.18-2.PP-0.146-3.PR,0.PQ.Q1,5.Q2,7.84,5.36,7.Qd,5.Qc.63,5.Qe,7.Qf,5.Qh,7.Qg,5.Qb c0.w4,0.g9,0.sI,0.hx,0.Qa,0.Q5.Q4,7.Q3,8.hX,8.54,8.xj,9.Q6.Q7,9.58,8.Q9,9.Q8,8.wX,9.QQ C8.36,9.QR,8.RB,9.RA,8.RC,9.RD.135,9.RF,7.RE,9.Rz,7.Ry,9.Rt.Rs,9.Rr,7.Ru,9.Rv,7.Rx,9.Rw C6.RG,8.RH,6.vM,7.RS,5.RR,5.RT-0.g9-0.124-0.124-0.xC-0.21-0.RU.RW,5.RV,5.13,5.RQ,4.wY,5.RP.RK,5.RJ c-0.RI,0-0.RL,0.rE-0.RM,0.RO.sq,5.RN.xl,5.Rq,1.Rp,5.93,2.xU,6.R3.R2,3.101,3.R1,7.xc,6.R4,8.R5 c0.R7,0.H9,1.R6,0.xM,2.R0,0.QZ.QU-0.QT,0.QS-0.QV,0.QW-0.QY.mb-0.QX.sq-0.mb,0.g9-0.sd,0.rE-0.16 c0.149-0.R8,0.R9-0.Rk,0.Rj-1.Rl.rE-0.rK,0.124-0.hx,0.hx-0.Rm.Ro-0.Rn,0.133-0.127,0.xC-0.148 c0.Ri-0.Rh,2.Rc,1.Rb,2.Ra,2.Rd.Re,14.Rg,19.Rf,15.yN,18.sw,13.Uc.J9,13.HZ,18.HA,13.HL,18.sw,13.IF\' 2V=\'"+4B+"\' 2V-8C=\'ba\'/></4r>"}if(x=="ok"){O"<4r d=\'sV.cm,4.kv fc.yc,4.kv 11.qA,5.wv 11.qA,6.ix di.qA,7.xV 10.yc,8.qv 10.cm,8.qv C9.x7,8.qv 8.qP,7.xV 8.qP,6.ix C8.qP,5.wv 9.x7,4.kv 10.cm,4.kv Z sV.cm,10.iW 9L.zB,10.iW 13.t8,8.Jb 13.t8,6.ix 8Z.t8,4.zF 12.zB,2.tI 10.cm,2.tI C7.zk,2.tI 6.tF,4.zF 6.tF,6.ix C6.tF,8.IX 7.zk,10.iW 10.cm,10.iW Z Jn.GS,13.rP 9L.Jo,13.yS 13.JM,12.ys 13.JK,12.yp gA.JG,12.yI 14.JH,11.yK 14.JT,10.yz 8Z.JQ,10.yA 13.Ju,10.yC 12.Jv,10.zT fc.Js,11.zZ 9.JC,11.zZ 7.JA,10.zT C6.JE,10.yC 6.JO,10.yA 5.JI,10.yz C5.JJ,11.yK 5.J1,12.yI 6.IW,12.yp C6.J6,12.ys 7.Jf,13.yS 8.KJ,13.rP L6.Kx,15.zI C5.vA,16.vP 5.vA,16.vq 6.IP,17.jo C6.K8,17.vR 6.K7,17.om 7.K6,17.om C7.Ka,17.om 7.K3,17.vR 7.Ke,17.jo nk.cm,15.HW cC.IA,17.jo 9L.IB,17.vr 13.Iy,17.vr 13.vs,17.jo gA.vp,16.vq 14.vp,16.vP 13.vs,15.zI eM.GS,13.rP Z\' 2V=\'"+4B+"\' 2V-8C=\'ba\'></4r>"}if(x=="qC"){O Fo(4B)}if(x=="qn"){O HV(4B)}if(x=="6D"){O"<4r d=\'M7.h7,13.uP L1,10.G4 L1,9.EZ L7.h7,5.HJ L7.h7,7.HI L2.Iu,9.uf L7.h7,12.FX L7.h7,13.uP Z H1.EF,4 L9.IL,16 L7.I8,16 nk.Ia,4 cC.EF,4 Z Ir.Fw,9.uf cC.kh,7.Iq cC.kh,5.Ip ET,9.EZ ET,10.G4 cC.kh,13.uP cC.kh,12.FX I0.Fw,9.uf Z\' 2V=\'"+4B+"\' 2V-8C=\'ba\'></4r>"}}E j9(x){B e9=1G.1K(\'uF\');e9.5B(\'C\',\'W:52;2W:0;1r:0;\');1G.7z.1J(e9);e9.4S=x;e9.eW();1G.HU(\'j9\');1G.7z.2T(e9)};G.5p=E(){B x=H;U(B i=1;i<11;i++){if(I(v["3I"+i])){if(v["3I"+i]!=""){x=K}}F{i<4?x=K:\'\'}}if(I(v["6D"])){v["6D"]!=\'\'?x=K:\'\'}if(I(v["1g"])){v["1g"]!=\'\'?x=K:\'\'}O x};G.4C=E(){if(8M){o.1I.2T(Y);Y=1V;8M=K}};G.yu=E(){O 5G}};E Fo(4B){O"<4r d=\'FM.Gr,5.Gs 8Z.Kl,4.Ki 11.Kf,3.Kg 10.Kh,3.Fz C6.Km,3.Fz 4.Kr,6.Kq 4.Kp,9.K2 C4.JX,10.Kb 4.Kc,11.K9 4.KT,12.KQ L4.KL,15.KA L7.Kw,14.KE C8.KI,15.KH 9.KF,15.KG 10.JW,15.Ff 8Z.JV,15.Ff 15.Jd,12.Je 15.Jl,9.Jk IT.IS,7.IY 15.J5,6.J2 14.Gr,5.Gs Z H1.Ht,11.Fb 9L.JU,11.Jt 12.Jp,12.Jr 11.Jw,12.Jx di.JD,12.Ku 11.Jy,12.JB 10.Jq,11.JF C8.JP,11.JR 7.JS,9.JN 7.J0,9.J3 C7.J4,9.IR 6.ui,8.IQ 6.ui,8.IV C6.ui,7.J7 7.Ji,7.Jh 7.Jj,6.Jg C7.Ja,6.KM 7.KX,6.iw 7.KW,6.iw C7.KZ,6.iw 8.L5,6.iw 8.L0,6.KU C8.KP,6.KO 8.KN,6.K0 8.Ko,6.Kt C8.Kn,7.Kj 8.CW,8.Kk 8.La,8.I4 C9.HX,8.Hz 9.I7,8.Iv 8.Ix,8.ID C8.CW,8.IG 8.II,8.Is 8.Ib,8.Ih C8.Il,8.Ie 8.IC,8.I5 8.HS,8.HK C8.HM,8.HN 8.HH,9.IO 8.IH,9.It C8.Ik,9.I9 8.Id,9.IJ 9.IE,10.HC C9.HB,10.HE 10.HF,10.I2 10.HO,10.HP fc.HT,11.I3 10.HG,11.Iz 10.IN,10.Bz fc.Ii,10.Ar 11.Ic,10.HY 11.Io,10.Ig di.IK,10.HQ 11.JY,10.JZ 11.K4,10.K5 di.Kv,10.KR 12.KV,10.KY 12.KC,10.Kz 9L.KK,10.Ar 12.Jc,10.IZ 13.JL,10.Bz 8Z.GB,10.Jz 13.GB,11.IU 12.Ht,11.Fb Z\' 2V=\'"+4B+"\' 2V-8C=\'ba\'></4r>"};B w7=E(){v.Ky==1?o.1U.C.4J=100:\'\';J(o.1U,{\'W\':v.ob,\'X\':v.nB});B x={"2x":v.EP};x=4n(x,\'2x\',\'2x\');if(v.bX.L("2e")>-1){cZ=1;J(o.1U,{\'1l\':\'1Y\',\'2e\':x.4e-x.3G})}F{J(o.1U,{\'1l\':\'1Y\',\'1b\':x.3G-x.4e})}if(v.bX.L("1h")>-1){J(o.1U,{\'1h\':x.6Q-x.9g})}if(v.bX.L("2K")>-1){J(o.1U,{\'2K\':x.9g-x.6Q})}if(v.bX=="2e"||v.bX=="1b"){J(o.1U,{\'1h\':\'50%\',\'2x-1h\':-v.nB/2+x.6Q-x.9g})}if(v.bX=="1h"){J(o.1U,{\'1l\':\'1Y\',\'1b\':\'50%\',\'2x-1b\':-v.ob/2+x.4e-x.3G})}if(v.F0>0){J(o.1U,{\'2W-5S\':v.F0})}if(v.oG!=-1){J(o.1U,{\'2w\':v.oG})}if(v.Ks==1){B sh=(v.FP?v.FP:10);J(o.1U,{"5x-aD":sh/2+"px "+sh/3+"px "+sh+"px 4I(0,0,0,0.3)"})}};B 5v=E(2c){B f8;B I6;B 3c;B 4x;B 4q;B iV;B fh=0;B bj;B pa=K;B lm;if(2c.me!=29&&2c.mc!=29&&2c.1F!=29&&2c.to!=29){if(2c.1a==1V){if(2c.1F.L("hf")>-1){2c.to==0?2c.1a=0.5:2c.1a=0.2}F{2c.1a=0.15}}f8=zz(2c.7O);if(2c.1F.L("1A")==-1){if(I(o.7p[2c.me])){o.7p[2c.me].r3()}}if(2c.1F.L("1A")==-1){o.7p[2c.me]=G}if(2c.1t==1){2c.mc.22("2m",H)}3c=2c.1F.2y(\'|\');4q=aI(2c.to).2y(\'|\');4x=1D 9i();U(B i=0;i<3c.Q;i++){if(!4q[i]){4q[i]=4q[0]}if(3c[i]=="hf"){4x[i]=2c.mc.g("1r")}if(3c[i]=="7q"){4x[i]=2c.mc.C.1r}if(3c[i]=="y"){4x[i]=2c.mc.g("y")}if(3c[i]=="x"){4x[i]=2c.mc.g("x")}if(3c[i]=="1b"){4x[i]=2t(2c.mc.C.1b)}if(3c[i]=="1A"){4x[i]=2c.mc.g("3p")}if(3c[i]=="9h"){4x[i]=2c.mc.bN}if(3c[i]=="ij"){4x[i]=2c.mc.aJ}if(3c[i]=="3f"){4x[i]=2c.mc.g("3f")}if(3c[i]=="3p"){4x[i]=2c.mc.g("3p")}if(3c[i]=="W"){4x[i]=2c.mc.g("W")}if(3c[i]=="vG"){4x[i]=2c.mc.2b;4q[i]=2N.7w(4q[i]);2c.me=="In"?1v("W",2c.me,4x[i],4q[i],2c.mc.2b):\'\'}if(3c[i]=="X"){4x[i]=2c.mc.g("X")}if(3c[i]=="vE"){4x[i]=2c.mc.2Q}4q[i]=Hh(4q[i]);4x[i]=Hh(4x[i])}bj=2c.1a*2M/f8.Q;iV=f8.Q;if(3c.Q==1&&4x[0]==4q[0]){9B()}F{1O(jN,2N.4W(bj))}}E jN(){U(B i=0;i<3c.Q;i++){B 1L=4x[i]+(4q[i]-4x[i])*(f8[fh]?f8[fh]:0);if(3c[i]=="hf"){2c.mc.22("1r",1L)}if(3c[i]=="7q"){2c.mc.C.1r=1L}if(3c[i]=="y"){2c.mc.22("1h",1L)}if(3c[i]=="x"){2c.mc.22("1b",1L)}if(3c[i]=="1b"){2c.mc.C.1b=1L+"px"}if(3c[i]=="1A"){2c.mc.22("1A",1L)}if(3c[i]=="3f"){2c.mc.22("3f",1L)}if(3c[i]=="3p"){2c.mc.22("3p",1L)}if(3c[i]=="9h"){2c.mc.bN=1L}if(3c[i]=="ij"){2c.mc.aJ=1L}if(3c[i]=="W"){2c.mc.22("W",1L)}if(3c[i]=="vG"){J(2c.mc,{"W":1L})}if(3c[i]=="X"){2c.mc.22("X",1L)}if(3c[i]=="vE"){J(2c.mc,{"X":1L})}}fh++;if(!pa){if(fh==iV){9B()}F{lm=1O(jN,2N.4W(bj))}}}E 9B(){pa=H;if(2c.1p){if(3c[0]=="7q"||3c[0]=="1b"){1p(2c.mc)}F{2c.mc.22("2m",K)}}if(2c.1F.L("1A")==-1){o.7p[2c.me]=1V;4o o.7p[2c.me]}};G.r3=E(){3q(lm);9B()};G.zG=E(){3q(lm);fh=iV-1;jN();9B()};E zz(zy){9G(zy){1m"D6":O[0,0.Jm,0.J8,1.KD,1.wX,1.KB,1.102,0.KS,0.K1,0.87,0.Kd,0.I1,1.zf,1.Iw,1.Ij,1.Im,0.Hy,0.xl,0.HR,0.If,1.IM,1.xg,1.Gp,1.xg,1.GI,0.gX,0.hX,0.hX,0.hX,0.hX,1];1k;1m"as":O[0,0.MA,0.X2,0.13B,0.13C,0.xc,0.xj,0.13D,0.sI,0.13A,0.13z,0.13v,0.13w,0.13x,0.zP,0.13y,0.13E,0.13F,0.13L,0.95,0.wb,0.13M,0.13N,0.13K,0.99,0.wY,0.yL,0.gX,1];1k;1m"Gf":O[0,0.146,0.28,0.13J,0.13G,0.13H,0.13I,0.78,0.zP,0.13u,0.13t,0.yL,1.zf,1.13f,1.vB,1.13g,1.yN,1.vN,1.vN,1.13h,1.13e,1.13d,1.vB,1.vM,1.139,1.vz,1.13a,1.13b,1.Gp,1.GI];1k;7b:O[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];1k}}};B Gl=E(){B N=gO.13c,ua=gO.13i,tM;B M=ua.mI(/(k9|gJ|5A|nY|FC)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);B M=ua.mI(/(k9|gJ|5A|nY|FC|13j|iR)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);if(M&&(tM=ua.mI(/7B\\/([\\.\\d]+)/i))!=1V)M[2]=tM[1];G.b7=M?M[1]:N;G.7B=M?M[2]:gO.13q;G.k9=G.b7=="13r";G.rF=G.b7=="Gh 9.0";G.ie=G.b7=="Gh"||G.b7=="13s"||G.b7=="13p";G.iR=ua.bM(/(iR)\\/?\\s*/i)>-1;G.nY=G.b7=="13o";G.5A=G.b7=="13k";G.gJ=2a.gJ;G.fu=ua.bM("13l NT")>-1;G.5C=(ua.bM(/(9f|gu|13m)\\/?\\s*/i)>-1)||(gO.13n===\'13O\'&&gO.13P>1);G.tv=v.AG!=1&&ua.bM(/(14l|14m|LG Ap|14n|14k|TV 14j)\\/?\\s*/i)>-1;G.lg=v.AG!=1&&ua.bM(/(LG Ap)\\/?\\s*/i)>-1;G.9f=ua.bM(/(9f)\\/?\\s*/i)>-1;G.gu=G.5C&&!G.9f;G.3N=\'14f\'in 1G.k1.C;G.a3=ua.bM(/(a3)\\/?\\s*/i)>-1;G.2C=(G.5C||G.a3||(ua.bM(/(14g|14h|k9 lB)\\/?\\s*/i)>-1))&&!G.tv;G.qN=G.5A||G.gJ;G.nO=!G.2C;G.ov=G.2C||G.tv;G.2l=K;if(G.5C){G.14i=51(ua.1z(ua.L(\'OS \')+3,4).26(\'7E\',\'.\'));if(G.gu&&!\'14o\'in 2a){G.2C=G.5C=K;G.tv=H}}if(o.1I.tK||o.1I.tL||o.1I.tJ||o.1I.tW||o.1I.un){G.2l=H}};E 9l(44,6w){U(B s in 6w){if(2p(6w[s])==\'3K\'){if(s=="2L"||s=="3o"){44[s]=6w[s]}F{U(B s2 in 6w[s]){if(2p(44[s])!=\'3K\'){44[s]={}}if(2p(6w[s][s2])==\'3K\'){U(B s3 in 6w[s][s2]){if(2p(44[s][s2])!=\'3K\'){44[s][s2]={}}if(2p(6w[s][s2][s3])==\'3K\'){U(B s4 in 6w[s][s2][s3]){if(2p(44[s][s2][s3])!=\'3K\'){44[s][s2][s3]={}}44[s][s2][s3][s4]=6w[s][s2][s3][s4];if(s3==\'2U\'||s3==\'2x\'){44[s][s2][s3][s4]=2t(44[s][s2][s3][s4])}}}F{44[s][s2][s3]=6w[s][s2][s3];if(s2==\'2U\'||s2==\'2x\'){44[s][s2][s3]=2t(44[s][s2][s3])}}}}F{44[s][s2]=6w[s][s2];if(s==\'2U\'||s==\'2x\'){44[s][s2]=2t(44[s][s2])}}}}}F{if(s.L("14p")>0&&4v(6w[s])===""){}F{44[s]=v9(s,6w[s])}}}O 44};B v9=E(1f,4S){if(2p(4S)==\'5w\'){4S=4v(4S);if(1f.L("1y")>-1&&4S.L("#")!=0&&4S!=-1){4S="#"+4S}}O 4S};E wn(c5,1r){O\'4I(\'+(c5=c5.26(\'#\',\'\')).mI(1D 14v(\'(.{\'+c5.Q/3+\'})\',\'g\')).14w(E(l){O 2t(c5.Q%2?l+l:l,16)}).8I(1r||1).mD(\',\')+\')\'}E pK(){3B{B 53=2a[\'3j\'],x=\'14x\';53.7n(x,x);53.nw(x);O H}3g(e){O K}};E pX(9F){if(9F){if(o.7p[9F]){o.7p[9F].r3()}}};B 2I=E(x){B y=x;if(y){y=x.6c(0).14u()+x.7P(1);if(y.L("7E")>-1){y=y.26(/7E/ig," ")}}B en={"of":"of","cl":"cl","14t":"CB on Cz","14q":"CB 1N on Cz","wE":"14r at 14s","7A":"iU","14e":"No","qU":"Dv","lK":"14d","13W":"13X","cj":"13Y 2x","n5":"13V gN","l2":"13U","n7":"9R 1r","ni":"9R 1y","fI":"rQ 3C","dB":"rQ 1y","eP":"rQ 1y 2","dc":"4F f9","ep":"13Q","mh":"13R to 13S","um":"13T","iz":"13Z","iB":"140","iC":"D5","yX":"D5","jc":"HD","jm":"14a HD","14b":"14c HD","nF":"147 HD","pv":"145 HD 4K","141":"Ad","142":"Go to 143 144\'s 138","6I":"137","7N":"129","2l":"12a 2l","nZ":"12b 2l"};if(I(en[x])){y=en[x]}if(I(o[\'sb\'+v.bF])){if(I(o[\'sb\'+v.bF][x])){y=o[\'sb\'+v.bF][x]}}if(v.st){if(v.st[x]){y=v.st[x]}}O y};B 8J=E(x,y,z){if(!I(o.i3[y])&&v.tT!=1){B t=o.eq?o.eq:(v.1Q?v.1Q:\'\');if(v.Cw[x]==1&&v.A3==1&&I(v.fN)){if(x=="8p"){7i(CA,126)}if(I(2a["lX"+v.fN])){2a["lX"+v.fN].CK(\'rp\'+x,{1Q:t});1v("rq",\'rp\'+x)}F{1v("rq 123 1N")}}if(v.Cv[x]==1){if(v.ga==1){B so={DZ:\'kZ\',E1:y};if(t!=\'\'){so.E4=t}ga(\'ap.a1\',\'1c\',so)}}}z?o.i3[y]=H:\'\'};E CA(){if(I(2a["lX"+v.fN])){2a["lX"+v.fN].CK(\'11W\');1v("rq",\'rp\'+x)}};B jX=E(1g){B x=\'\';1g=1g.26("v=","{=");if(1g.L(\'iS.be/\')>-1){x=1g.1z(1g.L(".be/")+4);x.26("/","")}F{x=1g.2y(/(iS.be\\/|v\\/|6D\\/|11X\\?|4d.11Y\\/ap\\/[^#]*#([^\\/]*?\\/)*)\\??{?=?([^#\\&\\?]*)/)[3]}if(x!=\'\'){if(x.L("?t=")>0){v.1E=x.1z(x.L("?t=")+3);B h=0;B m=0;B s=0;if(v.1E.L("h")>0){h=v.1E.1z(0,v.1E.L("h"));v.1E=v.1E.1z(v.1E.L("h")+1)}if(v.1E.L("m")>0){m=v.1E.1z(0,v.1E.L("m"));v.1E=v.1E.1z(v.1E.L("m")+1)}if(v.1E.L("s")>0){s=v.1E.1z(0,v.1E.L("s"));v.1E=v.1E.1z(v.1E.L("s")+1)}if(h>0||m>0||s>0){v.1E=h*ug+m*60+s*1}x=x.1z(0,x.L("?t="))}}O x};B js=E(x,y,li){if(x=="8p"){o.8p=H}if(v.ki==1&&o.8p){if(v.11Z==1||li==1){B ev=1G.12c(\'7C\');if(y!==29){ev.9W=y}ev.12d(x,H,H);o.1B.12j(ev)}F{if(y!==29){if(2p(y)==\'3K\'){y=6g.12k(y)}}if(2p(v.2L)==\'3K\'){if(I(v.2L[x])||I(v.2L[\'qb\'])){B z=x;if(!I(v.2L[x])&&I(v.2L[\'qb\'])){z=\'qb\'}if(x.L("8h")==0){if(I(v.2L[\'2i\'])){z=\'2i\'}}3B{if(y!==29){2o(v.2L[z]+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2o(v.2L[z]+"(\'"+x+"\',\'"+v.id+"\')")}}3g(e){1v("2L",e,x)}}}F{if(v.2L==\'\'){v.2L="Eg"}3B{if(y!==29){2o(v.2L+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2o(v.2L+"(\'"+x+"\',\'"+v.id+"\')")}}3g(e){1v("2L",e,x,y)}}}}if(v.Di==1&&li!==1){B zv={1c:x,1a:o.P?(x=="4l"?o.A7:o.P.1a()):0};if(y!==29){zv["1H"]=y}if(x=="1n"||x=="1a"){zv["1n"]=o.P.1n()}if(x=="1W"||x=="bb"){zv["1W"]=v.1W}if(x=="1D"){zv["id"]=6M("BO")}2a.bO.E5(zv,\'*\');B z=x;x=="8p"||x=="1E"||x=="4E"?z=x+"ed":\'\';x=="1R"?z="12l":\'\';x=="5j"?z="8E":\'\';x=="5u"?z="3Y":\'\';x=="bb"?z="12i":\'\';x=="4l"?z="12h":\'\';x=="12e"?z="12f":\'\';zv["1c"]=z;if(z!=\'\'&&z!=x){2a.bO.E5(zv,\'*\')}}};G.1c=E(x,y){o.2L[x]=y};B 3d=E(x,y,R){O 6M(x,y,R)};G.3d=E(x,y,R){O 6M(x,y,R)};E 6M(x,y,R){if(I(o.V)){if(o.p2==1){O}if(R){if(2p(R)==\'5w\'){if(R.L("id:")==0){R=o.S.nL(R.1z(3),"4c");if(R){if(x=="mA"&&y=="12g"){R.hm()}}}}}if(x=="1R"){if(I(y)){if(2p(y)==\'5w\'){y=y.26(/(\\r\\n|\\n|\\r)/gm,"");B 2E=-1;if(y.L("[4l:")>-1&&y.L("]")==y.Q-1){2E=y.1z(y.L("[4l:")+6,y.Q-1);o.2E=2E=2t(2E.1z(0,2E.Q-1));y=y.1z(0,y.L("[4l:"))}if(y.L("#"+v.9y)==0){y=o[o.fd[0]](y)}if(y.L("#"+v.dJ)==0&&y.L(v.gQ)>0){y=o[o.fd[1]](y)}if(y.L("#0")==0){y=bz(y)}if(v.dH==1){y=dH(y)}if(y.L(".7D")==y.Q-4){B 4k=dT(y);4k.bR=E(){if(G.dY==4&&G.5I==4Y){3B{6M(\'1R\',6g.7L(G.cF))}3g(e){}}};4k.a1();O}if(y.L("id:")==0&&I(o.1w)){B z=y.1z(3);U(B j in o.1w){if(o.1w.2n(j)){if(o.1w[j].cA==z){z=j}}}if(I(o.1w[z])){o.S.Hc(z);2E>-1?o.2E=2E:\'\';O H}F{O K}}if(y.L("11V:")==0){B z=y.1z(10);if(o.2D=="4d"){o.P.wz(z);O H}F{y=\'//iS.be/\'+z}}}o.V.dU(y)}F{o.V.2H()}}if(x=="3o"&&I(y)){o.nm=H;o.V.dU(y,1);o.S.4s(0,0)}if(x=="5j"){if(o.1R){o.V.2P();o.V.iX()}}if(x=="ck"&&I(y)){o.1E&&o.6W?o.6W.Dm(y):\'\'}if(x.L("11U")==0){if(o.2i){o.2i.11G(x.1z(6),y)}}if(x=="4g"){o.P.v8()}if(x=="7S"){o.7S.8d();o.7S=1D tQ();if(v.xR==1){o.7S.7D(v.xS)}F{o.7S.7D("11H 94")}if(v.xa==1&&I(v.x9)){o.dK=1D wq()}}if(x=="a2"){o.S.9n();o.S.Hm("q5")}if(x=="tO"){o.1R?o.V.2P():o.V.2H()}if(x=="2u"){v.4g=0;v.4b=0;o.P.k8();o.V.9K()}if(x=="9M"){o.1a=o.P.1a();o.V.h5()}if(x=="3I"){o.S.F1()}if(x=="11I"&&I(y)){if(v.2i==1&&o.p!=\'\'){B sv=6g.7L(bW(o.p));U(B l in sv){if(sv.2n(l)){if(I(sv[l].id)){if(y==sv[l].id){v.96=\'11F\'+(I(sv[l][\'uS\'])?\'uS\'+sv[l][\'uS\']:\'\')+y+\'7E\'+sv[l].7h;v.nW=H;o.V.xA("96")}}}}}}if(x=="11E"){2p AV=="E"?AV():\'\'}if(x=="dm"&&y){v.dm=y;o.3r?o.3r.11A():\'\'}if(x=="5u"){o.V.5c()}if(x=="7J"){if(I(y)){o.V.af(y)}F{O o.6d[o.ag]}}if(x=="gZ"){O o.6d}if(x=="bb"){o.V.6Y()}if(x=="lb"){if(I(y)){v[x]=y;o.V.fx()}}if(x=="bI"){O o.2f}if(x=="yx"){O o.ab?H:K}if(x=="7N"){O o.P?o.P.5V():K}if(x=="GR"){O v.ai==1?o.3l.7P(0,-1):o.3l}if(x=="8N"){O o.5Z}if(x=="1W"||x=="FI"){if(I(y)){if(y>=0&&y<=1){o.V.42(y)}}O o.3Y?0:v.1W}if(x=="3Y"){O I(o.3Y)?o.3Y:K}if(x=="11B"){o.S?o.S.Hj(y):\'\'}if(x=="cu"){y<2?y=\'\':\'\';if(o[\'u\'+y]!=\'\'){B x2=6g.7L(bW(o[\'u\'+y]));B v2=[];U(B l in v){if(v.2n(l)){if(l.L("9S")==0){v[l]=1V}}}if(2p x2=="3K"){U(B k in x2){if(x2.2n(k)){if(k.L("9S")==0){v[k]=x2[k]}if(k=="1x"){v2[k]=x2[k]}}}}v=9l(v,v2);B tr=K;if(o.S.bn()){o.S.8v();tr=H}B td=K;if(o.S.da()){o.S.b8();td=H}o.S.4C();o.S=1V;o.S=1D rs();if(o.P.5I()=="6e"){o.S.2H()}o.S.42(v.1W);if(I(v.1Q)){9q(v.1Q)}if(tr){o.S.8v()}if(td){o.S.b8()}if(o.2l){o.S.7o()}if(1f!=\'Bl\'){o.S.4s(o.P.1a(),o.P.1n())}2r()}}if(x=="ne"){O v.ne}if(x=="4R"){o.S.4R(H)}if(x=="4l"){if(I(y)){if(2p y=="5w"){if(y.L("%")>-1){y=2t(y.1z(0,y.L("%")));y=o.P.1n()*y/100}F{B jy=o.P.1a();if(o.3r&&!o.1E){if(!o.3r.lx){B f=o.3r.9v();if(f.t&&f.d){jy=f.t;o.3r.lx=H}}}if(y.L("+")==0){y=jy+2t(y.1z(1))}F{if(y.L("-")==0){y=jy-2t(y.1z(1))}}}}y=y*1;y<0?y=0:\'\';if(o.P.1n()>0){y>o.P.1n()?y=0:\'\'}if(!I(o.2i)&&!I(o.6b)&&o.P.1n()>0){o.2E=29;o.V.3X(y,H);o.V.qZ()}F{o.2E=y}}}if(x=="2l"){!o.2l?o.V.7o():\'\'}if(x=="uK"){o.2l?o.V.7T():\'\'}if(x=="11C"){O o.2l}if(x=="3C"){O o.3n+\'/\'+o.4h}if(x=="11D"){if(I(o.eY)){o.eY.Do()}}if(x=="Fg"||x=="11J"){if(I(o.eY)){o.eY.Un()}}if(x=="1a"){B u1=o.P?o.P.1a():0;if(o.3r&&v.bd==1&&!o.1E){B f=o.3r.9v();if(f.t){u1=f.t}}O u1}if(x=="11K"){if(o.az){6M("1R","id:"+o.az)}if(o.C2){6M("4l",o.C2);6M("1R")}}if(x=="1n"){O o.P?o.P.1n():0}if(x=="2S"){if(y){v.2S=y;o.S.gc()}}if(x=="4X"){if(I(y)){if(R){v.hd=aj(v.hd,y,R);if(o.2f.Q==2){o.V.5H(v.hd)}}F{o.V.5H(y)}}F{O o.P?o.P.sO():0}}if(x=="6I"){if(I(y)){if(R){v.ul=aj(v.ul,y,R);if(o.5Z.Q==2){o.V.c4(v.ul)}}F{o.V.c4(y)}}F{O o.P?o.P.qY():0}}if(x=="GD"){O o.2D=="4d"}if(x=="FW"){if(o.5t>0){o.ml=o.5t}o.V.dU(v.3o)}if(x=="6e"){O o.1R}if(x=="jk"){O o.1E}if(x=="1q"){O o.1q[y]}if(x=="Hn"){o.p2!=1?o.P.qT():\'\'}if(x=="id"){O v.id}if(x=="1v"){v.1v=y}if(x=="ki"){v.ki=y}if(x=="2v"){o.P.wV()}if(x=="11R"){o.P.wB();if(R){o.uj=aj(o.uj,y,R)}}if(x=="5e"){o.P.dq()}if(x=="8m"){o.P.cH()}if(x=="3w"&&v.tT!=1){dv.1v(3w)}if(x=="2z"){v.2z=y;if(I(y)){if(y.6x().Q<3){o.V.9D(y*1)}F{o.P.ea(y)}}}if(x=="bB"){if(I(o.bB)){if(I(y)){o.bB.3d(y)}F{O o.bB.11S()}}}if(x=="oO"){if(o.BT){O o.BT}F{O K}}if(x=="5x"){B 5x=1K("1S");5x.id=y;5x.C.4J=wU;o.1I.1J(5x)}if(x=="G1"){if(o.5L){B 5F=1K("5F");o.1B.1J(5F);B 9a=5F.BR(\'2d\');B 3C=o.P.3C();5F.W=3C.W>0?3C.W:o.8S;5F.X=3C.X>0?3C.X:o.bu;9a.pA(o.P.6a(),0,0,5F.W,5F.X);4X=2;B ib=1G.1K("5F");ib.W=5F.W*4X;ib.X=5F.X*4X;B i8=ib.BR("2d");i8.pA(o.P.6a(),0,0,5F.W*4X,5F.X*4X);if(v.11T==1&&I(v.nE)){!I(v.hY)?v.hY=20:\'\';!I(v.nl)?v.nl="3P":\'\';i8.43=v.hY+"px 11Q, 11P";i8.11L="#"+v.nl;i8.11M((v.nE=="fB"?o.fB:v.nE),v.hY,5F.X*4X-v.hY-5)}9a.pA(ib,0,0,5F.W,5F.X);B 3Z;3B{3Z=5F.11N("aH/11O")}3g(e){dv.1v(e.94);O K}O 3Z}F{O K}}if(x=="1A"){}if(x=="2h"){O o.2D==x?o.P.ls():29}if(x=="1P"){O o.2D==x?o.P.kW():29}if(x=="1U"){if(!o.1R){o.P.9c(y);O H}F{O K}}if(x=="1A"){if(y){o.P.1A(y)}F{O[o.3J.x,o.3J.y,o.4m.C.1b,o.4m.C.1h]}}if(x=="1Q"){if(I(y)){I(y)?v.1Q=y:\'\';o.V.9q(\'1Q\');O H}F{O v.1Q}}if(x=="12m"){o.V.yZ()}if(x=="1e"){if(y){if(2p(y)==\'3K\'){3B{o.V.5W(y);O H}3g(e){O K}}F{if(y.L(".7D")==y.Q-4||y.L(".7D?")>0){B 4k=dT(y);4k.bR=E(){if(G.dY==4&&G.5I==4Y){3B{6M(\'1e\',6g.7L(G.cF))}3g(e){}}};4k.a1();O H}}}}if(x=="9V"){o.S.dL()}if(x=="ep"){o.S.hi()}if(x=="lR"){if(I(y)&&I(o.1w)){!o.1R?v.4b=0:\'\';U(B j in o.1w){if(o.1w.2n(j)){if(o.1w[j].cA==y){y=j}}}if(I(o.1w[y])){o.S.Hf(y);O H}F{O K}}}if(x=="12n"){B 1L=[];if(I(o.1w)){U(B j in o.1w){if(o.1w[j].4G&&o.1w[j].rZ==-1){1L.2X({1Q:o.1w[j].1Q,id:o.1w[j].id})}}}O 1L}if(x=="BO"){if(o.3L){O o.1w[o.3L].cA?o.1w[o.3L].cA:o.3L}}if(x=="12Q"){if(o.1w){O 4a.3V(o.1w).Q}F{O-1}}if(x=="l7"){if(I(o.l7)){O o.l7}}if(x=="12R"){o.S.mY()}if(x=="12S"){if(o.2i){O H}F{O K}}if(x=="14z"){if(o.2i){O H0()}F{O K}}if(x=="12O"){if(o.2i){O o.2i.5j()}F{O K}}if(x=="12K"){if(o.2i){O o.2i.yB()}F{O K}}if(x=="6f"){v.6f=aj(v.6f,y,R);o.P.6f()}if(x=="aO"){if(I(R)){v.aO=aj(v.aO,y,R)}F{if(I(y)){v.aO=y}F{O v.aO}}}if(x=="5f"){if(I(R)){v.5f=aj(v.5f,y,R)}F{if(I(y)){v.5f=y}F{O v.5f}}}if(x=="oy"||x=="lh"){B z="f5";x=="lh"?z="l8":"";if(I(R)){v.1e[z]=aj(v.1e[z],y,R)}F{if(I(y)){y==\'0/1\'?y=1-v.1e[z]:\'\';v.1e[z]=y}F{O v.1e[z]}}}if(x=="hd"){if(o.2f.Q==2){v.hd=o.2f[o.2Y];v.hd=aj(v.hd,y,R);if(o.2f[0]==v.hd){o.V.5H(0)}F{o.V.5H(1)}}}if(x=="v"&&y){if(y.L(\'3o\')==0||y.L(\'bk\')==0){O}O v[y]}if(x.L("gH:")==0){B xx=x.1z(7);if(2p(y)==\'3K\'&&2p(v[xx])==\'3K\'){U(B yy in y){if(y.2n(yy)){v[xx][yy]=y[yy]}}}F{if(x.L(\'Dr\')==-1){v[xx]=y}}O H}if(x=="12L"){O o.P?o.P.bA():\'\'}if(x=="12M"){O o.7B+\' \'+o.hG}if(x=="hG"){O o.hG}if(x=="oV"){O o.oV}if(x=="oi"){O o.oi}if(x=="6k"){O o.6k}if(x=="12N"){O o.2i?o.Hu:29}if(x=="8O"){o.V.pj();o.p2=1;v.1Z.on=0;o.1B.1X=\'\'}}F{O K}};E aj(x,y,R){B z=4v(y)+\'\';if(y.L("/")>0){B y2=y.2y("/");if(y2.Q==2){if(x==4v(y2[0])){z=4v(y2[1]);if(R){R.eN(1)}}F{z=4v(y2[0]);if(R){R.eN(0)}}}}O z}E dT(x){B 4k=1D Fk();4k.5G(\'Fl\',x,H);O 4k}E H0(){B x;if(o.2i){if(o.2i.tA()){x=o.2i}}if(!x&&o.6b){x=o.6b}if(x){O{1q:x.9W("12T"),7B:x.9W("7B"),12U:x.9W("xs"),1g:o.130+(x.9W("GH")?x.9W("131")+x.9W("GH"):\'\'),1F:x.9W("132"),3o:x.9W("3o"),1W:x.12Z(),id:o.Hu}}}B 1K=E(x){B y=x;x==\'1S\'||x==\'tU\'?y=\'6N\':\'\';B z=1G.1K(y);if(x==\'tU\'){J(z,{"5Y":"3T","2m":"4z"})}O z};B 1v=E(a,b,c,d,e,f,g){if(v.1v==1||v.oR==1){B x=a+(b!=29?" "+b:"")+(c!=29?" "+c:"")+(d!=29?" "+d:"")+(e!=29?" "+e:"")+(f!=29?" "+f:"")+(g!=29?" "+g:"");dv.1v("Hr"+(v.sE==1?"2":"")+": "+x);if(v.oR==1&&I(1G.8g("Ho"))){1G.8g("Ho").1X+=x+\'<br/>\'}}};B CI=E(){if(v.p5==1&&I(v.p4)&&v.p4!=\'\'){B x=1G.1K(\'fe\');x.EH=\'12Y\';x.8V=\'6K://p5.12V.6X/J?gg=\'+v.p4.26(/,/ig,"|").26(/ /ig,"+");1G.12W.1J(x)}};B Cq=E(1S,4B){B x=["4r","dF","mG","hz","cU"];U(B y=0;y<x.Q;y++){B z=1S.tZ("2k "+x[y]);if(z.Q>0){U(B y2=0;y2<z.Q;y2++){z[y2].C.2V=4B}}}};B 4F=E(1a){1a<0?1a=0:\'\';B He=o.P.1n>=aq?H:K;B Hg=o.P.1n>=ug?H:K;B 5U=2N.7w(1a/60);B 6o=2N.7w(1a-5U*60);B 7v=2N.7w(5U/60);B hc=2N.7w(7v/24);5U=5U-7v*60;if(hc>0){7v=7v-hc*24}O aI((hc>0?hc+\':\':\'\')+(7v>0||Hg?7v+\':\':\'\')+((7v>0||He)&&5U<10?\'0\':\'\')+5U+\':\'+(6o<10?\'0\':\'\')+6o)};B 12X=E(){O Hw((2a.9X!=2a.bO.9X)?1G.sc:1G.9X.8V)};B Hk=E(y){B x=K;B kF=1G.av(\'mi\');U(B i=0;i<kF.Q;i++){if(kF[i].3b.L(y)>-1){x=H}}O x};B jg=E(x,y){x=x.26(\'#\',\'\');B r=2t(x.Q==3?x.7P(0,1).gW(2):x.7P(0,2),16);B g=2t(x.Q==3?x.7P(1,2).gW(2):x.7P(2,4),16);B b=2t(x.Q==3?x.7P(2,3).gW(2):x.7P(4,6),16);if(y){O\'4I(\'+r+\', \'+g+\', \'+b+\', \'+y+\')\'}F{O\'12J(\'+r+\', \'+g+\', \'+b+\')\'}};B J=E(e,o){if(I(e)){U(B 1f in o){if(o.2n(1f)){if(o[1f]!=\'12I\'&&o[1f]!=29){if(2p o[1f]==\'12u\'&&1f!=\'1r\'&&1f!=\'4J\'){o[1f]+=\'px\'}if((1f.L("1y")>-1||1f.L("Cp")>-1)&&o[1f].L("#")==-1&&o[1f].L("4I")==-1){o[1f]=\'#\'+o[1f]}if(1f=="2G"){e.C[\'-ms-\'+1f]=o[1f];e.C[\'-qH-\'+1f]=o[1f];e.C[\'-3N-\'+1f]=o[1f];e.C[\'-o-\'+1f]=o[1f]}if(1f=="uu"){if(o[1f].L(" ")>-1){o[1f]=\'"\'+o[1f]+\'"\'}}if(1f=="5x-g7"){e.C.12v(1f,o[1f],\'5O\')}F{e.C[1f]=o[1f]}}}}}};B fF=E(c){O c.1z(0,1)!=\'#\'?c="#"+c:c};B GQ=E(x,1y,y){!1y?1y=\'#fl\':\'\';1y=fF(1y);B r=6A(kn,12w);x=x.26(/\\(12t\\)/g,r);x=x.26(/\\(1y\\)/g,1y);B Fn=x.1z(0,x.L(\'|||\'));B pz=x.1z(x.L(\'|||\')+3);B a6=\'\';if(o.1q.3N){a6=pz.26(/5M:/g,"-3N-5M:");a6=a6.26(/5M-/g,"-3N-5M-");a6=a6.26(/@Fr/g,"@-3N-Fr");a6=a6.26(/2G/g,"-3N-2G")}y.1X=Fn;uA(a6+pz)};B uA=E(x){if(o.J){if(o.J.Fh){o.J.Fh.12s=x}F{o.J.1J(1G.Hv(x))}}};B 4k=E(y,z){B x=1D Fk();x.5G(\'Fl\',y,H);x.bR=z;x.a1()};B 12o=E(x){if(x){U(B i=0;i<5;i++){if(x.12p=="12q"){1k}F{if(x.Af){x=x.Af}}}}O x};B 9k=E(z){B 9k=1G.1K("3Z");if(o.kM.L(z)>-1){o.kM.2X(z);if(z.L("?")>0){z=z+\'&\'+2N.6A()}F{z=z+\'?\'+2N.6A()}}F{o.kM.2X(z)}9k.5B(\'3b\',z);9k.5B(\'X\',\'52\');9k.5B(\'W\',\'52\')};B 4L=E(e,o){U(B 1f in o){if(o.2n(1f)){e.5B(1f,o[1f])}}};B 8O=E(e){if(e){3B{e.4Z.2T(e);e=1V}3g(e){}}};B 6A=E(7U,5N){O 2N.7w(Eh.Q>1?(5N-7U+1)*2N.6A()+7U:(7U+1)*2N.6A())};B kV=E(){O 2N.6A().6x(36).12r(2,12)};B rU=E(x,y){x=4a.3V(x).12x(E(44,1f){if(1f!=y){44[1f]=x[1f]}O 44},{});O x};B 4v=E(x){if(2p x=="5w"){O x.26(/^\\s+|\\s+$/gm,\'\')}F{O x}};B 12y=E(x,n){if(n==0){O"#0"+aW.e(x)}if(n==-1){O aW.e(x)}if(n==1){O"#1"+qX(aW.e(x),1)}};B q4=E(x){if(v[x]!=""){if(2p v[x]!="5w"){o[x+\'o\']=v[x]}F{if(v[x].L("[{")==0){3B{v[x]=v[x].26(/9o\'qt/ig,\'"\');o[x+\'o\']=2o(v[x])}3g(e){}}}}};B 5r=E(x){O aI.nH(x)};B bW=E(x){if(x.1z(0,2)=="#1"){O aW.d(qX(x.1z(2),-1))}F if(x.1z(0,2)=="#0"){O aW.d(x.1z(2))}F{O x}};B qV=E(x){if(x){if(x.L(\'3e\')==-1&&x.L(\'.\')==-1&&x.Q>100){x=\'1H:aH/uR;h4,\'+x}}O x};B 1p=E(x){x.C.6k="3U"};B 1t=E(x){x.C.6k="47"};B 3k=E(x){x?x.C.2m="1M":\'\'};B 6l=E(x){x?x.C.2m="4z":\'\'};B 6i=E(x){O x?x.C.6k!="3U"&&x.C.2m!="1M":K};B 5a=E(s){if(2p s=="5w"){if(s.L("px")>0){s=s.1z(0,s.L("px"))}}O 2t(s)};B 3U=E(x){O x.C.2m=="1M"};B j6=E(c5){B lj=2t(c5,16);B r=(lj>>16)&o9;B g=(lj>>8)&o9;B b=lj&o9;O r+","+g+","+b};B 4n=E(o,x,y){o[x+\'1h\']=0;o[x+\'2e\']=0;o[x+\'2K\']=0;o[x+\'1b\']=0;if(I(o[y])){B z=o[y].2y(" ");if(z.Q==4){o[x+\'1h\']=z[0]?51(z[0]):0;o[x+\'2e\']=z[1]?51(z[1]):0;o[x+\'2K\']=z[2]?51(z[2]):0;o[x+\'1b\']=z[3]?51(z[3]):0}}O o};B 12F=E(x){if(x){x=x.26(/ /ig,\'px \')}O x+\'px\'};B tk=E(x,y){O v[x]&&v[x]!=\'\'?v[x]:y};B eu=aI.nH(65,66,67,68,69,70,71,72,73,74,75,76,77,97,98,99,100,101,102,103,104,105,106,107,108,109,78,79,80,81,82,83,84,85,86,87,88,89,90,110,111,112,113,114,115,116,117,118,119,120,121,122);B aW={aa:eu+"12G+/=",e:E(e){B t="";B n,r,i,s,o,u,a;B f=0;e=aW.GY(e);g1(f<e.Q){n=e.9C(f++);r=e.9C(f++);i=e.9C(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(tw(r)){u=a=64}F if(tw(i)){a=64}t=t+G.aa.6c(s)+G.aa.6c(o)+G.aa.6c(u)+G.aa.6c(a)}O t},d:E(e){B t="";B n,r,i;B s,o,u,a;B f=0;e=e.26(/[^A-Za-z0-9\\+\\/\\=]/g,"");g1(f<e.Q){s=G.aa.L(e.6c(f++));o=G.aa.L(e.6c(f++));u=G.aa.L(e.6c(f++));a=G.aa.L(e.6c(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+5r(n);if(u!=64){t=t+5r(r)}if(a!=64){t=t+5r(i)}}t=aW.Cm(t);O t},GY:E(e){e=e.26(/\\r\\n/g,"\\n");B t="";U(B n=0;n<e.Q;n++){B r=e.9C(n);if(r<128){t+=5r(r)}F if(r>127&&r<12H){t+=5r(r>>6|12E);t+=5r(r&63|128)}F{t+=5r(r>>12|vH);t+=5r(r>>6&63|128);t+=5r(r&63|128)}}O t},Cm:E(e){B t="";B n=0;B r=0;B c1=0;B c2=0;g1(n<e.Q){r=e.9C(n);if(r<128){t+=5r(r);n++}F if(r>12D&&r<vH){c2=e.9C(n+1);t+=5r((r&31)<<6|c2&63);n+=2}F{c2=e.9C(n+1);c3=e.9C(n+2);t+=5r((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}O t}};B qX=E(s,n){s=s.26(/\\+/g,"#");s=s.26(/#/g,"+");B a=vX(o.y)*n;if(n<0)a+=eu.Q/2;B r=eu.1z(a*2)+eu.1z(0,a*2);O s.26(/[A-Za-z]/g,E(c){O r.6c(eu.L(c))})};B vX=E(x){x=x.2y(5r(61));B kl=\'\';B c1=5r(120);B tf;U(B i in x){if(x.2n(i)){B v1=\'\';U(B j in x[i]){if(x[i].2n(j)){v1+=(x[i][j]==c1)?5r(49):5r(48)}}tf=2t(v1,2);kl+=5r(tf.6x(10))}}O kl.1z(0,kl.Q-1)};B I=E(x){O x!=1V&&2p(x)!=\'29\'&&x!=\'29\'};B op=E(x,y){O I(x)?x:y};B DP=E(y){B x=[];if(I(4a.vK)){x=4a.vK([],y)}F{U(B z in y){if(y.2n(z)){x[z]=y[z]}}}O x};B eZ=E(el){O el.vV().1b+(2a.vW?2a.vW:2a.12z)};B hF=E(el){12A hz=el.vV();O hz.1h+2a.12B};B 7F=E(x){if(x!=\'\'){if(v.12C==1){2a.5G(x)}F{2a.9X.8V=x}x=\'\'}};B fO=E(6o){B 6o=2N.7w(6o);B 5U=2N.7w(6o/60);B 7v=2N.7w(5U/60);5U=2N.7w(5U%60);6o=2N.7w(6o%60);7v>0&&5U<10?5U="0"+5U:"";6o=6o>=0?((6o>=10)?6o:"0"+6o):"aR";B 6p=(7v>0?7v+":":"")+(5U>=0?5U:"0")+":"+6o;O 6p};B nK=E(){if(v.4p==1){o.4p?o.1I.2T(o.4p):\'\';o.4p=1V}};B Gj=E(){B iL=K;B l3=H;if(o.1q.tv){1v("tv")}G.9q=E(x){o.S?o.S.1Q(x):\'\'};G.6F=E(x){if(x){if(2p(x)==\'5w\'){x=x.26(/(\\r\\n|\\n|\\r)/gm,"");if(x.L("[{")==0){3B{x=x.26(/9o\'qt/ig,\'"\');x=6g.7L(x)}3g(e){x="xL 6g"}}}if(2p(x)==\'3K\'){o.1w=[];o.1e=qz(x);if(v.1e.14y==1&&!v.4V){B 3V=4a.3V(o.1w);B pu=3V.7P(-1)[0];pu?v.4V=pu:\'\'}B y=ya();if(y){x=y.3o;o.eq=y.1Q;o.S?o.S.EV(y.1Q):\'\';if(I(y.1U)){if(o.P){o.P.9c(y.1U)}F{v.1U=y.1U}}if(I(y.2O)){y.2z=y.2O}if(I(y.1E)){v.1E=o.2E=y.1E}8j("ri");if(I(y.id)){o.3L=y.id}B sx=["2z","ne","6D","1g","Ee","Ej","gT","lb","6L","2S","7t","4E","4o","aA"];if(I(v.b3)){if(v.b3.14Q==1&&v.b3.nh==1){sx.2X("1Q");sx.2X("t1");sx.2X("t2");sx.2X("t3");sx.2X("t4");sx.2X("t5")}}U(B i=0;i<sx.Q;i++){if(I(y[sx[i]])){v[sx[i]]=y[sx[i]]}}if(sx.L(\'1Q\')>0){if(v.b3.GP==1){o.mg=v.b3.GV;o.V.jz(y)}o.V.9q(\'1Q\')}if(o.S){o.S.5W(o.1e)}if(o.3h){o.3h.mx()}}F{}}if(2p(x)==\'5w\'){x=qE(x);if(x.L("#"+v.9y)==0){x=o[o.fd[0]](x)}if(x.L("#"+v.dJ)==0&&x.L(v.gQ)>0){x=o[o.fd[1]](x)}if(x.L("#0")==0){x=bz(x)}x=qE(x);if(v.dH==1){x=dH(x)}if(x==\'\'){1v("5p 3o");o.9s=H;js("1N","5p")}o.2f=[];o.7Z=[];o.5Z=[];o.oa=0;o.2Y=0;o.5t=0;v.hJ==\'\'?v.hJ=\',\':\'\';if((x.L("]")>-1&&x.L("[")>-1)||I(v.bI)){o.41=x.2y(v.hJ)}F{o.41=[x]}o.8N=[];if(I(v.bI)){B bI=v.bI.2y(v.hJ)}if(o.41.Q>0){B q=0;U(B i=0;i<o.41.Q;i++){o.41[i]=4v(o.41[i]);if(o.41[i]!=\'\'){if(o.41[i].L("[")==0&&o.41[i].L("]")>1){o.2f[i]=o.41[i].1z(o.41[i].L("[")+1,o.41[i].L("]")-1);o.41[i]=o.41[i].1z(o.41[i].L("]")+1)}F{if(I(v.bI)){o.2f[i]=I(bI[i])?bI[i]:\'\'}F{o.2f[i]=i+1}}B is=0;if(I(v.46)&&q==0){if(v.46.L("ng:")==0){if(v.46.1z(4)*1==i){is=1}}if(v.46==o.2f[i]){is=1}if(v.46=="5N"&&i==o.41.Q-1){is=1}}if(I(o.46)){if(o.46==o.2f[i]){is=1;q=i}}if(is==1){o.oa=i;o.2Y=i}o.41[i]=np(o.41[i])}}}F{o.41[0]=np(o.41[0])}O o.41[o.oa]}}F{O x}};E np(x){if(I(v.yY)&&x.L("//")==-1){x=v.yY+x}O x};G.yZ=E(){if(o.1e){B x=o.1e.16n();U(B i=0;i<x.Q;i++){x[i].aM=i}o.1e=x;o.S.5W(o.1e)}};G.5W=E(x){if(2p(x)==\'3K\'){o.1w=[];o.16m=x;o.1e=qz(x);if(o.S){o.S.5W(o.1e)}}};G.dU=E(x,y){!I(y)?v.4b=1:\'\';v.4g=0;v.1n=29;v.4E=29;v.4o=29;o.9s!=2?o.9s=K:\'\';o.b4=K;o.8m=K;o.9t=0;o.i3=[];o.ro=K;o.o1=K;o.zU=K;o.jq=[K,K,K];o.16s=kV();o.Fa=0;fM();if(v.pe>1){if(I(o.nn)&&v.nW==1){U(B i in o.nn){o.nn[i].rS=29}v.pe--}}if(o.dK){o.dK.7t()}if(o.P.5I()=="6e"){G.9K()}if(I(o.3I)){o.3I.4C()}if(I(o.h3)){3q(o.h3)}js("1D");o.V.kP();x=G.6F(x);if(y==1){o.2D=\'\'}o.P.6F(x);if((o.1q.2C||o.1q.5A)&&!I(y)){o.V.2H()}if(I(o.hO)){o.3J={x:1,y:1,x0:1,y0:1};o.P.sH()}8J("1R","2H",K);o.P.go();o.S.d9();o.S.mZ();o.S.4P()};G.fM=E(){fM()};E fM(){o.3E=-1;o.8u=K;o.jZ=K;v.2z=1V;v.lb=1V;o.2O=1V;o.2g=1V;if(I(o.S)){o.S.b9()}o.3l=1V;if(I(o.2z)){o.1I.2T(o.2z);o.2z=1V}o.3E=1V;o.8u=K}G.jz=E(x){B y=K;if(x&&o.mg){v.1Q=o.mg;U(B i=1;i<6;i++){if(I(x[\'t\'+i])){v.1Q=v.1Q.26("{"+i+"}",x[\'t\'+i]);y=H}}}O y};G.aS=E(){if(v.4b==1){if(v.nI==1){1O(E(){o.V.2H()},4i)}F{G.2H()}v.16p=1}fx()};G.fx=E(){fx()};E fx(){if(v.tG==1){if(2p yq!=="29"){o.th=1D yq()}}}G.go=E(){B x=K;if(o.1q.2C){x=H;if(v.GG==1&&o.1q.9f){x=K}if(v.Ha==1&&o.1q.gu){x=K}if(v.Gy==1&&o.1q.5C){x=K}if(v.16o==1&&o.1q.a3){x=K}}if(v.16r==1&&o.1q.tv){x=H}O x};G.qR=E(){o.P.42(v.1W);if(o.3Y){o.P.5c()}o.b4=H;o.S.4P();if(o.5Q&&o.5L){o.4T.Go()}};G.wo=E(){!o.oD?9b(H):\'\'};E 9b(x){o.oD=H;if(o.S){if(o.S.bn()){o.S.8v()}}if(o.3h){o.3h.al()}!x?o.P.2H():\'\';if(!o.ro){1O(E(){o.P.go()},4i)}!o.1R?o.S.2H():\'\';v.9d==1?o.9d.3d("1R"):\'\';v.2i==1?o.V.kP(\'dS\'):\'\';if(o.1q.2C){o.S.e3()}if(I(o.3I)){o.3I.yu()?o.3I.eO():\'\'}if(v.16q==1&&I(v.gT)&&o.dt){if(v.gT!=\'\'&&!I(o.gv)){o.gv=7i(qF,v.yl*2M);qF()}}}G.2H=E(ax){if(!o.1R){B 2u=K;if(o.2D=="4d"){if(!o.P.j0()&&v.4b!=1&&v.4g==1){2u=H;if(2a[\'YT\']){v.4b=1;o.P.qT()}}}if(v.7A==1&&v.zL==0){o.V.iU();2u=H}if(o.9s||2u){if(o.9s){8e("7h")?jV(2):\'\'}}F{o.nm=K;y9(!o.1E);o.7S.8d();if(!o.1E){js("1E");o.1E=H;if(v.1x.oh==1){1O(E(){o.S.ES()},100)}if(v.1x.8t>0&&v.4b==1){o.ei=H;1O(oA,v.1x.8t*2M)}if(v.16k==1&&v.159){15a()}U(B i=0;i<o.bc.Q;i++){if(v[\'Gk\'+o.bc[i]]==1){3j.7n("Fp"+o.bc[i],7y.8Q())}}if(v.15b==1&&v.15c){158("1E")}js("1D");o.S.4P();8J("1R","2H",K);o.ab?8J("yx","157",H):\'\'}F{8J("yB","153")}if(v.yD==1&&!o.2l){B dd=1D 7y();B tt=dd.bi();if(tt-o.a9<d0){if(v.zX==1){o.1q.2C?G.7o():\'\'}F{G.7o()}}}if(o.dK){o.dK.7t()}if(ax!=1&&8e("7h")||8e("6z")){jV(2)}F{if(v.7F==1&&I(v.zY)&&!I(3w.7F)){7F(v.zY);2u=H}if(!2u){1v("2H");if(o.2D!=\'152\'){o.P.1n()>0?o.S.4s(o.P.1a(),o.P.1n()):\'\'}if(!o.oz){o.oz=H;if(v.1x.8t>0&&v.4b==1){o.ei=H;1O(oA,v.1x.8t*2M)}}B lW=K;if(o.P.1a()>1&&v.lD==1&&ax!=1){lW=8e("dS")}if(lW){}F{9b(K)}}}}}F{o.P?o.P.2H():\'\'}};E oA(){o.ei=K;o.S.4P()}G.2P=E(){if(o.1R){1v("2P");o.P.2P();o.S.2P();js("5j");v.sn?7u():\'\';v.r0==1?lT():\'\';v.9d==1?o.9d.3d("5j"):\'\';if(!I(o.2i)&&v.lD==0){8e("dS")}o.oD=K}};G.5c=E(){o.P.5c();o.S.5c();o.3Y=H;js("5u")};G.6Y=E(){o.P.6Y();o.3Y=K;o.S.6Y();js("bb")};G.42=E(x,y){x<0.154?x=0:\'\';x>1?x=1:\'\';if(x<=0){G.5c();v.1W=0;x=0}F{if(o.3Y){G.6Y()}v.1W=x}js("1W",x);o.S.42(x,y);o.P.42(x)};G.9n=E(){o.S.9n()};G.6V=E(){o.S?o.S.6V():\'\'};G.155=E(){G.6V()};G.rh=E(){o.V.7j();G.6V()};G.4s=E(1a,1n){if(o.3r&&!o.1E){B f=o.3r.9v();if(f.t&&f.d){1a=f.t}}o.S.4s(1a,1n)};G.vm=E(1a,1n){if(I(o.2E)&&o.2D!="4d"&&!o.P.5V()){o.V.3X(o.2E,K);o.2E=29}};G.f3=E(){B d=1D 7y();o.a9=d.bi();B x=K;if(o.S.bn()&&v.1j.8Y!=1){o.S.8v();x=H}if(o.3h){if(o.3h.156()){o.3h.al();x=H}}if(v.1e.8Y==0){if(o.S.da()&&v.1e.eJ==1){o.S.b8();x=H}}if(v.7F==1&&I(v.A0)&&!I(3w.7F)){7F(v.A0);x=H}if(!x){if(v.1Z.on==1&&v.1Z.2A==1&&v.1Z.po==1){6O(\'1R\',(o.1R?0:1))}G.dl()}};G.Fu=E(){if(o.S.bn()){o.S.8v()}};G.dl=E(){if(o.P.5I()=="6e"){G.2P()}F{G.2H()}9H(o.P.1a())};G.3X=E(bx,hq){if(bx<o.P.1n()){if(v.eh.15d==1){if(bx>o.P.1a()){O}}if(v.4o>0){bx<v.4o?bx=v.4o:\'\'}o.A7=bx;o.P.3X(bx);if(hq){o.S.3X(bx,o.P.1n())}o.hB=H;o.gk=o.P.1a();9H(o.gk)}};G.15e=E(1g,4f,A2){if(o.P.5I()=="6e"&&o.hC!=\'a0\'){2P();if(o.2l&&A2){o.S.7T()}}2a.5G(1g,4f)};G.rj=E(){B x=o.P.bA();if(I(v.6L)){x=v.6L}if(x!=\'\'){js("6L");B fu=2a.5G(x,(v.15m==1?\'15n\':\'jU\'));fu.5R()}};G.7j=E(){B 1a=o.P.1a();B 1n=o.P.1n();o.S.fL(1a,1n)};G.qZ=E(){B 1a=o.P.1a();B 1n=o.P.1n();B bw=1n>0?1a/1n:0;if(!o.hB){o.S?o.S.fL((o.2E>0?o.2E:1a),1n):\'\'}F{1a!=o.gk?o.hB=K:\'\'}if((v.ga==1||v.A3==1)&&1n>0){j1("pD","2H 25%",bw,0.25);j1("pw","2H 50%",bw,0.50);j1("q8","2H 75%",bw,0.75)}U(B i=0;i<3;i++){if(!o.jq[i]){if(bw>=i*0.25+0.25){zr(i)}}}v.nQ==1?1v(1,1a,1n):\'\';if(v.9M==1){if(o.1R){B z=K;B jr=K;if(v.A4==1){if(!o.P.5V()){z=H}}if(1a>0){if(1a==o.1a&&!z){jr=H}F{o.9t=0}o.1a=1a}F{if(v.15o==1){B ld=o.P.aU();v.nQ==1?1v(2,ld,o.kx):\'\';if(!z){if(ld==o.kx){jr=H}F{o.9t=0}}o.kx=ld}}if(jr){o.9t++;v.nQ==1?1v(3,o.9t):\'\';if(o.9t==v.r9*(2M/o.uW)){o.V.h5()}}}}if(v.2i==1){v.15p!=1&&v.nW==1?rV("96",1a,1n):\'\';v.15l!=1&&v.rN==1?rV("fa",1a,1n):\'\'}if(v.zx==1&&v.nU>0){if(1a>=v.nU){if(!I(o.2i)){if(8e("6z")){o.P.2P();o.S.2P()}v.nU=0}}}8j("1R");if(v.7A==1&&v.zL>-1){15k(1a,1n)}if(o.8u){9H(1a)}if(o.53&&v.bd==1){if(o.3r){o.3r.pB(1a,1n)}}if(I(v.4E)){if(v.4E>0&&1a>v.4E){if(o.2D=="4d"){o.P.2P();o.P.3X(v.1E>0?v.1E:0)}F{o.P.k8();o.V.9K()}v.1E>0?o.2E=v.1E:\'\';o.V.nj()}}if(I(v.7t)){B r1=v.7t.2y(",");U(B i=0;i<r1.Q;i++){B r2=r1[i].2y("-");if(r2.Q==2){if(1a>r2[0]&&1a<r2[1]){o.P.3X(r2[1])}}}}};E zr(x){o.jq[x]=H;if(v.bd==1&&v.CQ==1&&v.zq==x){if(o.53&&o.3L){o.3r?o.3r.15g(o.3L):\'\'}}}E j1(x,y,t,p){if(!I(o.i3[y])){if(t>p){8J(x,y,H)}}};G.h5=E(){o.9t=0;if(v.15f==1){js("9M")}F{o.2E>0||o.P.5V()?\'\':o.2E=o.P.1a();B zi=o.S.da();js("9M");o.P.9M();zi&&v.1e.eJ==1?o.S.mY():\'\'}};G.wc=E(){o.S.fL(0,0);o.S.oK(0,0);o.V.4s(0,0);o.S.6V()};G.pZ=E(){B 1a=o.P.aU();if(v.15h==1){js("aU",1a)}B 1n=o.P.1n();o.S?o.S.oK(1a,1n):\'\'};G.nj=E(){js("15i");if(v.aO==1){if(o.2D=="4d"){G.9K()}if(v.1E>0){o.V.3X(v.1E)}G.2H()}F{if(o.P.5V()||o.2D=="4d"){G.9K()}F{if(v.zw==1){o.V.3X((v.1E>0?v.1E:0),H);if(o.1q.ie){o.P.2P()}}}o.S.8s();v.zx==1?v.15j=1:\'\';if(8e("m8")||8e("sj")){}F{9B()}}};G.7o=E(){o.aP.f6.H7=2r;B 2u=K;B 1N=K;o.yf=K;o.bt=H;1O(E(){o.bt=K},dO);U(B x in o.7p){if(o.7p.2n(x)){if(I(o.7p[x])){3B{o.7p[x].zG()}3g(e){}}}}3B{o.eS=H;if(((o.1q.5C&&v.oW==1)||(o.1q.a3&&v.151==1))&&o.5L&&!o.de){B x=o.P.6a();if(x){if(x.14Z){ub();2u=H}}}if(!2u){B iH;if(o.1I.tL){o.8a=H;iH=o.1I.tL({kk:"1p"});if(iH!==29){iH.cs(E(){}).3g(E(1N){})}}F if(o.1I.tK){o.1I.tK({kk:"1p"});o.8a=H}F if(o.1I.tJ){o.1I.tJ({kk:"1p"});o.8a=H}F if(o.1I.tW){o.1I.tW({kk:"1p"});o.8a=H}F if(o.1I.un){o.1I.un();o.8a=H}}}3g(e){1N=H;1v(e)}if(!o.8a&&!2u){if(o.1q.3N&&o.lA){ub()}F{G.qm()}}if(!1N){1O(zC,4Y)}};E ub(){B x=o.P.6a();if(x){o.P.wx();x.14I();x.1u("14H",wD)}}E zC(){if(o.yf!=H){if(o.92){o.P.cH()}if(v.1Z.uN==1){ji(H);o.4O=H}v.9d==1?o.9d.3d("jP"):\'\';js("2l");8J("jP","7o",H)}};B gs;B 9x={x:0,y:0};E uz(e){if(o.3h){if(o.3h.14J()){O}}o.8y=H;4t(gs);gs=7i(E(){o.8y=K;o.S.4R();9x={x:0,y:0};4t(gs)},3S);o.S.4R();e.a7();e.wP!=0?9x.x++:9x.x--;e.md!=0?9x.y++:9x.y--;if(e.14K!=0){if(9x.x>9x.y){if(e.wP>0){o.V.42(51(v.1W)-v.1Z.bY/10,"no")}F{o.V.42(51(v.1W)+v.1Z.bY/10,"no")}}F{if(e.md>0){o.V.42(51(v.1W)+(o.1q.fu?-v.1Z.bY/10:v.1Z.bY/10),"no")}F{o.V.42(51(v.1W)-(o.1q.fu?-v.1Z.bY/10:v.1Z.bY/10),"no")}}o.S.gV()}}E wD(){if(o.1q.5C){o.P.wj();js("uK")}}G.qm=E(){if(o.eS){o.2l=H;o.S.7o();if(!o.8a){if(I(o.8z)){3B{J(o.8z,{\'W\':\'100%\',\'X\':\'100%\',\'1l\':\'nJ\',\'1b\':0,\'1h\':0,\'4J\':"kn"})}3g(cz){}}J(o.1I,{\'W\':\'100%\',\'X\':\'100%\',\'1l\':\'nJ\',\'1b\':0,\'1h\':0,\'4J\':"kn"});o.3n=o.1I.2b;o.4h=o.1I.2Q;3B{1G.7z.C.6H=\'3U\';if(!I(o.1e)){1G.wf=E(e){e.a7()}}}3g(cz){}}if(v.uT==1){J(o.1I,{\'6q\':\'#3H\'})}if(o.3h){o.3h.al()}9H(o.P.1a());o.eS=K}};G.7T=E(){iL=H;if(1G.wG){1G.wG()}F if(1G.wH){1G.wH()}F if(1G.wQ){1G.wQ()}F if(1G.wR){1G.wR()}F if(1G.x5){1G.x5()}F if(1G.wZ){1G.wZ()}if(!o.8a){G.ra(K)}};G.yr=E(x,y){s9(x,y)};E s9(x,x6){if(I(o.2i)&&!x6){o.m6=x}F{B 2u=K;B dD=o.aG/x;if(I(o.8z)&&v.Dk!=1){3B{J(o.8z,{\'X\':dD})}3g(cz){2u=H;1v("bG 14L 14G")}}if(!2u){o.4M=x;o.9A=dD;if(o.4M>0){J(o.1B,{\'X\':dD})}js("X",dD)}if(o.2i&&!o.2l){o.4h=dD;o.2i.2r()}}};G.ra=E(x){if(iL||x){o.2l=K;if(!o.8a){if(I(o.8z)){3B{J(o.8z,{\'1l\':\'vg\',\'1b\':0,\'1h\':0,\'4J\':\'wT\'});J(o.8z,o.Dl);J(o.8z,{\'W\':o.8S,\'X\':o.bu})}3g(cz){}}J(o.1I,{\'W\':o.8S,\'X\':o.bu,\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'4J\':\'wT\'});3B{1G.7z.C.6H=\'2F\';1G.wf=E(e){O H}}3g(cz){}}o.S.7T();if(v.uT==1){J(o.1I,{\'6q\':v.kc});if(v.ff==1){o.1I.C.6q=\'ff\'}F{J(o.1I,{\'6q\':v.kc})}}if(v.1Z.uN==1){ji(K);o.4O=K}if(o.3h){o.3h.al()}9H(o.P.1a());o.S.n4();iL=K;js("uK");o.8a=K;o.bt=K}};G.4O=E(x){ji(x)};E ji(x){9x={x:0,y:0};if(x){2a.1u("uY",uz,{ac:K})}F{4t(gs);2a.6j("uY",uz,{ac:K})}}G.9K=E(){v.4g=0;o.S.2P();o.V.wc();o.P.42(v.1W);if(o.S.bn()){o.S.8v()}if(o.3Y){G.5c()}if(I(o.gv)){4t(o.gv);o.gv=1V}9H(0);1v("2u");js("2u")};G.pj=E(){v.4g=0;v.4b=0;o.P.k8();o.V.9K()};G.5H=E(x){if(I(o.2Y)){if(o.2Y!=x){o.2Y=x;if(v.q0==1){o.46=o.2f[x];if(o.53){3j.7n("pn",o.46)}}o.P.5H(x);js("4X",o.2f[x]);o.S.ow(x)}}};G.h6=E(){o.S?o.S.h6():\'\'};G.c4=E(x){if(I(o.5t)){if(o.5t!=x){o.5t=x;if(v.F8==1){o.8T=v.8T=o.5Z[x];if(o.53){3j.7n("pd",o.8T)}}o.P.c4(x);js("6I",x);o.S.n3("6I")}}};G.9D=E(x){if(I(o.3E)){if(o.3E!=x){if(x==-1||(v.ai==1&&x==o.3l.Q-1)){sP()}F{v.dc=0;o.3E=x;o.8u=H;v.fV=1;o.P.9D(x);js("2z",o.3l[x]);o.S.b9()}}F{if(v.ai!=1){sP()}}}};E sP(){js("2z","8w");o.3E=v.ai==1?o.3l.Q-1:-1;v.fV=0;o.8u=K;o.S.b9();o.mT||o.mR?o.P.9D(o.3E):\'\';I(o.2z)?o.1I.2T(o.2z):\'\';o.2z=1V}G.af=E(x){B y=x==o.h1?1:o.6d[x];if(o.53&&v.vF==1){3j.7n("sl",y)}js("7J",o.6d[x]);o.P.af(y);o.ag=x;o.S.n3("7J")};G.iX=E(){9H(o.P.1a());qJ()};E 9H(1a){if(v.dc){1a=1a-v.dc*1}if(o.8u&&I(o.2g)){B 2O=o.P.2O();if(2O){B x=o.3E;if(I(2O[x])){if(I(2O[x][1])){B t=2t(1a*10);if(I(2O[x][1][t])){B y=\'\';y=2O[x][0][2O[x][1][t]];if(!I(o.2z)){o.2z=1K(\'1S\');o.1I.1J(o.2z);qJ()}if(o.S.lL()||v.cj>v.1x.h){J(o.2z,{"1l":"1Y","2K":(v.cj*1)})}F{J(o.2z,{"1l":"1Y","2K":(v.cj*1+v.1x.h*1)})}if(v.14F==1){y=14B(y)}if(v.mN==1){y=y.26(/\\[dX\\]/gm,\'<6R C="1y:\'+(v.eP.L("#")==-1?\'#\':\'\')+v.eP+\'">\');y=y.26(/\\[\\/dX\\]/gm,\'</6R>\')}o.2z.1X=\'<6R C="\'+(v.wm==1?\'2w-1y:\'+wn(v.ni,v.n7)+\';\':\'\')+\'-3N-5x-gP-1k: 14A;1y:\'+(v.dB.L("#")==-1?\'#\':\'\')+v.dB+\';2U:\'+v.rd+\'px \'+v.rd*2+\'px;2W-5S:\'+v.xQ+\'px;2x:0 0;2J-X:\'+(v.xP?v.xP:1.8)+\';43-gN:\'+v.n5+\'">\'+4v(y)+\'</6R>\';if(v.xK==1){if(o.2l){J(o.2z,{"43-3C":((v.xJ+((2t(v.fI)-100)*v.hb/100))+"px")})}F{J(o.2z,{"43-3C":((v.hb+((2t(v.fI)-100)*v.hb/100))+"px")})}}l3=K}F{if(!l3&&I(o.2z)){o.2z.1X=\'\';l3=H}}}}}}}E qJ(){if(o.2z){J(o.2z,{"1l":"1Y","W":"100%","2U-1b":"10%","2U-2e":"10%","1b":0,"1y":v.dB,"1C-7e":"6u","5x-g7":"2W-5x","3T-2L":"1M"});if(v.14C==1&&I(v.qu)){v.qu!=\'\'?J(o.2z,{"43-gg":v.qu}):\'\'}if(v.l2==1){J(o.2z,{"1C-aD":"52 52 14D 14E"})}F{J(o.2z,{"1C-aD":"1M"})}}}B 6v;B 8k;B lz;B 2q;E 8e(x){if(v["8h"+x+"xb"]>0&&o.53){B tb=3j.5d("mB"+x+"7E"+o.d);if(tb){B ct=1D 7y();o.a9=ct.bi();B xn=(ct.bi()-tb)/14M;if(xn<v["8h"+x+"xb"]){O K}}}if(v["8h"+x+"xp"]>0){if(o.P.1n()>0){if(o.P.1n()<v["8h"+x+"xp"]*60){if(v["8h"+x+"xq"]>0){v.eB=v["8h"+x+"xq"]}F{O K}}}}if(o.ht.L("9z")!=-1&&v.2i==1&&!o.ax&&v[x+\'s\']==1){if(2p rW=="29"){O K}if(x=="6z"||x=="sj"){if(2p xE!=="29"){2q=[];O xE(x)}}if(I(o.2i)||I(o.6b)){js("xG",x);O H}F{if(I(v[x])){if(v[x].6x().L(".")>-1||v[x].6x().L(":")>-1||v[x].6x().L("[14N]")>-1){js("xG",x);if(x!="96"&&x!="fa"){o.V.9n();g0()}6v=0;8k=0;lz=x;2q=v[x].2y(" mK ");o.5g=[];o.14V=2q.Q;o.xm=1;o.l9=H;U(B i=0;i<2q.Q;i++){2q[i]=2q[i].2y(" or ")}v[x.8I("7E","dy")]=v[x];v[x]=1V;o.5b=x;if(x!=\'fa\'){o.2i=1D rW()}o.6b=1D lG();U(B i=0;i<2q.Q;i++){U(B j=0;j<2q[i].Q;j++){B 6T=4v(2q[i][j]);if(6T.L("[50%]")>0){B 1L=6A(1,2);2q[i][j]=2q[i][j].26("[50%]","");if(1L==2){2q[i][j]=\'\'}}}}if(v.sy==1){U(B i=0;i<2q.Q;i++){B n=i==0?1:0;if(2q[i].Q>n){U(B j=n;j<2q[i].Q;j++){B 6T=4v(2q[i][j]);if(o.1q.rF){eH(6T)}F{1O(eH,i*100,6T)}}}}}o.6b.lM(4v(2q[0][0]),x);O H}F{O K}}F{O K}}}F{O K}};G.xA=E(x){8e(x)};E rV(w,x,d){if(I(o[w+\'o\'])&&v[w+\'s\']==1){B y;U(B i in o[w+\'o\']){if(o[w+\'o\'].2n(i)){if(!I(o[w+\'o\'][i].rS)&&I(o[w+\'o\'][i].1a)&&I(o[w+\'o\'][i].2i)){B z=o[w+\'o\'][i].1a.6x();if(z){if(z.L("%")>0){if(d>0){z=2t(z.1z(0,z.L("%")))*d/100}F{z=-1}}F{z=2t(z)}if(x>=z){if(v[\'8h\'+w+\'xr\']>0&&z>-1){if(x-z>=v[\'8h\'+w+\'xr\']){z=-1}}if(z>-1){y=o[w+\'o\'][i].2i;v[w]=o[w+\'o\'][i].2i;if(8e(w)){o[w+\'o\'][i].rS=H;1k}}}}}}}}};G.14W=E(){if(o.5b=="96"&&v.xu==1){if(o.1R){o.P.2P();o.S.2P()}J(o.xt,{"1r":1})}};G.14X=E(x){o.6b=1V;1v("9z 3Q");js("14Y",o.5b);if(x.1F=="fa"){B xz=1D 14U(x);o.rN.2X(xz)}F{if(I(o.2i)){if(o.5b=="96"&&v.xu==1){J(o.xt,{"1r":0})}F{if(o.1R){o.P.2P();o.S.2P()}}if(v.4g==0&&v.14T==1&&o.P.1a()==0&&o.P.1n()==0){v.4g=1;o.P.v8()}if((!o.2i.14P()||x.xs)&&o.rX>0){1v("9z 14O");o.2i.4C();o.2i=1V;o.2i=1D rW()}o.rX++;if(o.l9&&v.cd>0){3q(o.cd);o.cd=1O(xD,v.cd*2M*60);if(I(v.xB)){if(v.xB!=\'\'){o.hj?o.hj.7t():\'\';o.hj=1D 16l()}}}o.l9=K;if(v.xF>0){1v("9z 14R");js("14S");1O(rw,v.xF*2M,x)}F{rw(x)}}F{1v("9z 15q")}}};E rw(x){o.2i.Go(x)}E xD(){if(I(o.2i)){if(o.2i.tA()&&o.ch==0){o.2i.sM();1v("9z xe "+v.cd);2q=[];bh()}}}G.15r=E(){js(\'162\',o.5b);1v("9z 1N");io()};G.io=E(){B 2u=K;B dr=K;if(o.5b=="7h"){if(v.lE>0&&o.et>0){dr=H;if(o.ch>=v.lE){2u=H}}if(v.eB>0&&!dr){if(v.xo==1&&o.et==0){}F{if(o.ch>=v.eB){2u=H}}}}!2u?io():bh()};G.163=E(x){if(v[o.5b+"rt"]){U(B i=0;i<3;i++){v[o.5b+"rt"]=v[o.5b+"rt"].26(x+(i==0?\' mK \':(i==1?\' or \':\'\')),\'\')}}};E io(){if(2q.Q>0&&2q[6v]){if(8k<2q[6v].Q-1){o.2i?o.2i.sM():\'\';8k++;B 6T=4v(2q[6v][8k]);B e2=sN(6T);if(e2==\'sL\'){o.6b=1D lG();o.6b.lM(6T,o.5b)}if(e2==\'1N\'){io()}}F{bh()}}F{bh()}}E sN(6T){B x=\'sL\';if(v.sy==1&&o.5g){B lR=K;B n=0;U(B i=0;i<o.5g.Q;i++){if(o.5g[i].lw==0){if(o.5g[i].bD.xf(6T)){o.5g[i].lw=1;B y=o.5g[i].bD.ak();if(y==\'3Q\'){o.6b=o.5g[i].bD;1v("9z xf");o.5g[i].bD.fp();x=y}F{if(y==\'\'){x=\'ok\';1v("9z 165");o.6b=o.5g[i].bD;o.5g[i].bD.166()}if(y==\'1N\'){x=\'1N\'}}lR=H}if(lR&&o.5g[i].e0==0){n++;if(n<6){sz(o.5g[i])}F{1k}}}}}O x}G.15Z=E(x,y){if(x!=\'\'){B z=6v;B rG=K;if(y){U(B j=0;j<2q.Q;j++){2q[j]==y?z=j:\'\'}}if(2q.Q==1){if(2q[0].Q>1&&8k<2q[0].Q-1&&2q[8k]){B xd=2q[8k].7P(1,99);2q[0].tx(8k+1,99);rG=H}}if(2p(x)=="3K"){U(B i=0;i<x.Q;i++){2q.tx(z+i+1,0,[x[i]]);if(o.1q.rF){eH(x[i])}F{1O(eH,i*100,x[i])}}}F{if(2p(x)=="5w"){2q.2X([x]);eH(x)}}if(rG){2q[2q.Q-1]=2q[2q.Q-1].8I(xd)}}};G.15Y=E(x,y){if(x!=\'\'){B z=6v;if(y){U(B j=0;j<2q.Q;j++){2q[j]==y?z=j:\'\'}}if(2q[z]){if(2p(x)=="3K"){U(B i=0;i<x.Q;i++){2q[z].2X(x[i])}}F{if(2p(x)=="5w"){2q[z].2X(x)}}}}};G.bh=E(x){bh(x)};E eH(x){if(v.sy==1&&o.5g){B i=0;U(B i=0;i<2q.Q;i++){if(2q[i]==x){if(6v>=i){O}F{}}}if(2q.Q==1&&2q[0].Q>1){}F{B n=0;U(i=0;i<o.5g.Q;i++){o.5g[i].lw==0?n++:\'\'}o.5g.2X({e0:0,lw:0,x:4v(x),t:o.5b,bD:1D lG(H)});n<5?sz(o.5g[o.5g.Q-1]):\'\'}}}E sz(x){if(x){x.e0=1;x.bD.lM(x.x,x.t)}}E bh(lC){B 2u=K;B dr=K;if(o.5b=="7h"){if(v.lE>0&&o.et>0){dr=H;if(o.ch>=v.lE){2u=H}}if(v.eB>0&&!dr){if(v.xo==1&&o.et==0){}F{if(o.ch>=v.eB){2u=H}}}}if(2q.Q>0&&6v==2q.Q-1){if(2q[0][0].L("js:")==0){6v=-1;2q=[[2q[0][0]]]}}if(o.15U==2){2u=H}if(2q.Q>6v+1&&!2u){o.2i.sM();6v++;o.xm++;8k=0;B 6T=4v(2q[6v][0]);B e2=sN(6T);if(e2==\'sL\'){o.6b=1D lG();o.6b.lM(6T,lz)}if(e2==\'1N\'){bh(lC)}}F{fA();o.S.6V();if(I(o.2i)){o.2i.4C();o.2i=1V}o.6b=1V;2q=[];8k=0;6v=0;o.xH!=1?js("15T",o.5b):\'\';o.xH=0;if(v.15V==1){if(o.su){o.su.sF();o.su=29}}lz=\'\';o.ch=0;3q(o.cd);o.hj?o.hj.7t():\'\';o.et++;if(o.5b=="7h"||(o.5b=="dS"&&v.lD==1)||o.5b=="96"){if(v.3o!=\'?\'){o.P.e5();B re;if(o.2D=="4d"&&!o.sa&&o.1q.5C){re=H;o.5b=="7h"?o.P.wW():\'\'}if(re||lC==\'lC\'||v.15W==1){}F{o.V.2H(1)}}}if(o.m6>0){s9(o.m6);o.m6=0}if(o.5b=="m8"){9B()}o.sa=K;o.5b=1V}};G.15X=E(){2q=[[\'\']]};G.kP=E(y){B x=[\'7h\',\'dS\',\'m8\',\'6z\',\'sj\'];B z;U(B i=0;i<x.Q;i++){z=K;if(y){y!=x[i]?z=H:\'\'}if(!z&&I(v[x[i].8I("7E","dy")])){v[\'8h\'+x[i].8I("7E","y5")]--;if(v[\'8h\'+x[i].8I("7E","y5")]>0){v[x[i]]=v[x[i].8I("7E","dy")];v[x[i].8I("7E","dy")]=1V}}}};G.iU=E(){g0();if(I(o.7A)){o.7A.4C();o.7A=1V}o.7A=1D 167()};G.168=E(){fA();o.7A.4C();o.7A=1V};G.g0=E(){g0()};G.fA=E(){fA()};E g0(){if(o.bH){}F{o.bH=1K("1S");o.1I.1J(o.bH);J(o.bH,{"W":"100%","X":"100%","1l":"1Y","1h":0,"1b":0,"2w":"#3H","1r":0.1});o.bH.C.4J=G3}};E fA(){if(o.bH){o.1I.2T(o.bH);o.bH=1V}};E 7u(){if(I(o.1U)){if(v.1U!=o.ux){9c(v.1U,o.1U,v.gl)}1t(o.1U);J(o.1U,{"1r":v.kN});o.S.4P()}};G.iv=E(){if(I(o.1U)){if(6i(o.1U)){B t=o.P.1a();if(t==0&&v.wt==1){}F{if(v.xZ>0){3q(o.sm);o.sm=1O(lT,v.xZ*2M)}F{lT()}}}}};E lT(){3q(o.sm);if(v.sn==1&&!o.1R){}F{J(o.1U,{"1r":0});1O(y8,4i)}}E y8(){if(!o.1R&&v.gn==1){}F{1p(o.1U)}}G.7u=E(){7u()};E y9(x){if(v.ye==1){U(B i=0;i<7a.Q;i++){if(7a[i].3d("id")!=v.id){7a[i].3d(\'5j\')}}}i0=v.id}E qz(x){B y=4a.3V(x).Q;if(y>0){x=qB(x,y,\'\',-1)}O x}E qB(x,y,p,j){B x2=[];B 2u;if(I(x[\'1e\'])){x=x[\'1e\'];y=x.Q}B ii=0;U(B i=0;i<y;i++){2u=K;if(I(x[i][\'id\'])){x[i][\'cA\']=x[i][\'id\']}x[i][\'id\']="x"+p+\'-\'+i+(I(x[i][\'id\'])?\'-\'+x[i][\'id\']:\'\');j==-1&&i==0&&!I(x[i][\'4G\'])?o.hw=x[i][\'id\']:\'\';if(!I(o.hw)){j==0&&!I(x[i][\'4G\'])?o.hw=x[i][\'id\']:\'\'}x[i][\'hI\']=p;x[i][\'rZ\']=j;x[i][\'aM\']=ii;if(I(x[i][\'yd\'])){x[i][\'1Q\']=x[i][\'yd\'];B q1=x[i][\'3o\']?x[i][\'3o\'].L(\'[\'):0;B q2=x[i][\'3o\']?x[i][\'3o\'].L(\']\'):0;if(q1>0&&q2>0){B s1=x[i][\'3o\'].1z(q1+1,q2-q1-1);B s2=s1.2y(",");B s3=\'\';U(B k=0;k<s2.Q;k++){s3+="["+s2[k]+"]"+x[i][\'3o\'].26("["+s1+"]",s2[k])+(k<s2.Q-1?",":\'\')}x[i][\'3o\']=s3}}if(I(x[i][\'1e\'])){x[i][\'4G\']=x[i][\'1e\']}if(!I(x[i][\'4G\'])){if(I(x[i][\'3o\'])){if(x[i][\'3o\']==\'\'&&!I(x[i][\'7F\'])){2u=H}}F{2u=H}}if(!2u){o.1w[x[i][\'id\']]=x[i];ii+=1}if(I(x[i][\'4G\'])){B z=4a.3V(x[i][\'4G\']).Q;if(z>0){x[i][\'4G\']=qB(x[i][\'4G\'],z,x[i][\'id\'],i)}}if(!2u){x2.2X(x[i])}}O x2}E ya(){B x=[];if(I(v.4V)){if(v.4V.L("x-")!=0){U(B y in o.1w){if(o.1w.2n(y)){if(o.1w[y].cA==v.4V){v.4V=y}}}}if(I(o.1w[v.4V])){v.1e.16g==1?v.1e.s6=0:\'\';x=o.1w[v.4V]}F{x=o.1e[0];if(v.4V==o.yb){o.2E=29}}}F{x=o.1e[0]}if(x){U(B i=0;i<10;i++){if(I(x[\'4G\'])){x=x[\'4G\'][0]}F{1k}}v.4V=x.id;if(v.4V==o.yb){x.1E=29}}O x}E 9B(){8J("4E","9B",H);o.V.kP();if(o.53&&v.bd==1){o.3r.pB(0,o.P.1n())}if(o.S.mr()){if(v.1e.f5==1&&o.S.fi()){o.S.dL();if(o.1R&&o.1q.5C&&o.2D!="aB"){}}F{qG()}}F{7u();js("xX")}}G.Dd=E(){qG()};E qG(){if(v.1e.l8==1&&!o.S.fi()){o.S.mk();O}if(v.1e.GU==1){!o.S.da()?o.S.b8():\'\'}7u();js("xX")}E qE(x){if(x.L(\'js:\')==0){3B{x=2o(x.1z(3))}3g(e){dv.1v(e.94)}}O x}E qF(){B qf=2N.7w(7y.8Q()/2M);B qg=(I(v.xN)?v.xN:0)+2t(o.P.1a());B 1F=0;o.1q.nO?1F=1:\'\';o.1q.5C?1F=2:\'\';o.1q.a3?1F=3:\'\';o.1q.16h?1F=4:\'\';o.1q.tv?1F=5:\'\';B 1g=v.gT.26("[qf]",qf);1g=1g.26("[qg]",qg);1g=1g.26("[16i]",1F);B 9k=1G.1K("3Z");9k.5B(\'3b\',1g);9k.5B(\'X\',\'52\');9k.5B(\'W\',\'52\');o.1I.1J(9k)}};B Gg=E(1g){B 1g;B 4U;B mJ;B 8U;B dC="";B dG=0;B kD=K;B ka=K;B rg;B P;B 3R;o.3J={x:1,y:1,x0:1,y0:1};B le;B lc;B mf=0;B 2O=[];if(2p(1g)==\'5w\'){1g=4v(1g);if(1g.L("[{")==0){3B{1g=1g.26(/9o\'qt/ig,\'"\');1g=6g.7L(1g);le?1g=o.V.6F(1g):\'\'}3g(e){dv.1v(e);1g="xL 6g"}}if(1g.L("#"+v.9y)==0){1g=o[o.fd[0]](1g)}if(1g){if(1g.L("#"+v.dJ)==0&&1g.L(v.gQ)>0){1g=o[o.fd[1]](1g)}}if(1g){if(1g.L("#0")==0){if(1g.L(o.d5)>0){1g=bz(1g.26(o.d5,\'\'))+o.d5}F{1g=bz(1g)}}}if(v.dH==1){1g=dH(1g)}if(2p(1g)==\'5w\'){if(1g.L(".9p")==1g.Q-4||1g.L(".7D")>0){lc=1g.2y(" or ");qp()}}}o.4m=1K("1S");J(o.4m,{"1l":"1Y","W":"100%","X":"100%","4y":"2G 0.2s 2R","1C-7e":"6u"});o.1I.1J(o.4m);if(!le){mL()}E qp(){1g=lc[mf];if(1g.L(o.d5)>0){1g=1g.26(o.d5,\'\');v.3o=1g}B 4k=dT(1g);4k.bR=E(){if(G.dY==4&&G.5I==4Y){b8(G)}F{n1(1)}};4k.qc=E(e){n1(1)};4k.a1();le=H}E n1(x){if(mf+1<lc.Q){mf++;qp();x=0}if(x==1){5i("1e cX gh or wK p8")}if(x==2){5i("16j 6g")}}E b8(x){if(x.cF){B y=x.cF;if(y.L("#"+v.9y)==0){y=o[o.fd[0]](y)}if(y.L("#"+v.dJ)==0&&y.L(v.gQ)>0){y=o[o.fd[1]](y)}if(1g.L(".9p")==1g.Q-4){B 9p=y.2y(/(\\r\\n\\t|\\n|\\r\\t)/gm);1g=[];B qK=1;B gL=\'\';U(B i=0;i<9p.Q;i++){if(9p[i].L("#16f")>-1){if(9p[i].L(" - ")>-1){B 1L=9p[i].2y(" - ");gL=1L[1L.Q-1]}}if(9p[i].L("3e")>-1){1g.2X({1Q:""+(gL!=\'\'?gL:qK),3o:9p[i]});qK++;gL=\'\'}}}F{y=y.26(/(\\r\\n\\t|\\n|\\r\\t)/gm,"");3B{1g=6g.7L(y)}3g(e){n1(2)}}if(I(1g.d1)){1g=16e(1g)}if(o.S){if(v.1e.kH==1){if(!o.S.da()){o.S.mY()}}}mL();2r();1O(E(){js("1e")},1)}}E mL(){1g=o.V.6F(1g);1g&&1g!=\'?\'?6F(1g):\'\'}E 5i(x){1v("gY: "+x);B y=H;B yy=H;js("16a",x);if(4U){if(4U.Q>0){8U++;y=8U>4U.Q-1;if(y&&v.169==1){if(o.41.Q>1&&o.2Y>0){if(o.2f[o.2Y].L(2I("fw"))==-1){o.2f[o.2Y]=o.2f[o.2Y]+\' (\'+2I("fw")+\')\'}yy=K;o.V.5H(o.2Y-1)}}if(!y){B z=K;o.2E>0||!o.1E||P.5V()?\'\':o.2E=4F();if(o.2D!=ja(4U[8U])||o.2D!=\'aB\'){if(o.1R){o.V.9K();z=H}}1v("16b cn",o.2E);6F(\'or\');o.1E&&!o.2i?P.2H():\'\'}F{if(v.9M==1&&yy){y=K;wr()}}}}if(y&&yy){8J("1N","gY",H);if(v.xT&&!o.9s){if(v.xR==1&&x=="cX gh"){o.7S.7D(v.xS)}F{o.7S.7D(x)}if(v.xa==1&&I(v.x9)){o.dK=1D wq()}}o.9s=H;if(o.1R){o.V.6V();o.S.2P()}I(o.1U)?o.V.7u():\'\';js("1N",x)}};E wr(){1v("gY h5 16c");I(o.h3)?3q(o.h3):\'\';o.h3=1O(E(){o.V.h5()},v.r9*2M)}G.5i=E(){5i(P.pM())};G.8s=E(y){1v("nj");kD=H;B x=K;if(4s()>0&&!o.5Q&&!y){B 1a=o.x8;if(1a+10<4s()){1v(\'16d (oH)\');js("oH");P.2H();P.3X(1a);x=H}}if(!x){o.V.nj();js("4E")}};G.9b=E(){if(v.r0==1){I(o.1U)?o.V.7u():\'\'}v.gn==1?o.V.iv():\'\';o.S.2H();o.V.wo();if(v.15S==1&&I(v.ue)){if(v.ue.Q>5){t6();4t(rg);rg=7i(t6,v.wl*2M)}}js("1R")};G.go=E(){if(v.iE==1&&o.5L){if(o.V.go()){o.de=P.oJ();o.S.4P()}}o.ro=H};G.aV=E(){o.V.2P()};G.hy=E(){1v("15R")};G.hT=E(){1v("rh");o.V.rh();o.gk?js("4l",o.gk):\'\'};G.b5=E(){1v("qR");o.V.qR()};G.ah=E(){if(P){1v("4s",4s());o.V.4s(4F(),4s());js("1n",4s());if(I(o.ml)){o.V.c4(o.ml);o.ml=1V}}};E 4F(){B x=P.1a();O x}E 4s(){B x=P.1n();O x}G.ca=E(){};G.7V=E(){1v("9n");o.V.9n();js("a2")};G.aT=E(){if(dG!=4F()){o.V.6V();if(dG==0){if(v.gn==1&&v.wt==1){o.V.iv()}}}dG=4F();js("1a",dG);if(v.2v.on==1){if(2p(wA)==\'E\'){if(!3R&&v.2v.4j!=1&&v.wu&&v.wu!=\'\'&&dG>0){o.ge=1D wA();3R=o.ge.d3()}}}};G.qT=E(){if(o.2D=="4d"){P?P.j0():\'\'}};G.wz=E(x){o.V.9K();P.FQ(x)};G.j0=E(){if(o.2D=="4d"&&P){O P.3Q()}F{O H}};G.kW=E(){O P.kW()};G.ls=E(){O P.ls()};G.5H=E(x){1v("15A",x);if((o.2D=="aB"||o.2D=="ws"||(o.2D=="1P"&&(v.8f==0||91()<2))||(o.2D=="2h"&&(v.9O==0||bs()<2)))&&I(o.41[x])){B 1a=G.1a();o.2E>0?\'\':o.2E=1a;o.V.3X(1a,K);6F(o.41[x],H);o.V.2H()}if(o.2D=="1P"&&v.8f==1&&91()>1){P.vY(x)}F if(o.2D=="2h"&&v.9O==1&&bs()>1){P.vu(x)}F if(o.2D=="4d"){P.FN(x)}};G.9D=E(x){if(I(o.2g[x])){1v("9H",x);o.3E=x;if(I(o.3l[x])){if(o.53&&v.ve==1){3j.7n("uv",o.3l[x])}F{o.uq=o.3l[x]}}if(o.2D=="1P"&&o.mT==H){P.w1(x)}F{if(o.2D=="2h"&&o.mR==H){P.vv(x)}F{if(o.2g[x]=="8R"){ts(o.3E)}F{k0(o.3E)}}}}};E ts(x){2O[x]=4a();2O[x][0]=9i();2O[x][1]=9i();U(B i=0;i<o.2g.Q;i++){1O(k0,i*4i,i)}}G.af=E(x){1v("15z",x);P.fX(x);if(v.2v.on==1){if(3R){3R.fX(x)}}};G.wx=E(){wk()};E wk(){if(o.5L&&o.2g){P.rT();U(B i=0;i<o.2g.Q;i++){P.GW(o.2g[i],o.3l[i],(i==o.3E))}}}G.wj=E(){P.rT()};G.c4=E(x){1v("15B",x);if(o.8N.Q>0){if(o.8N[x]){B 1a=G.1a();o.2E>0?\'\':o.2E=1a;o.V.3X(1a,K);6F(o.8N[x],H);o.V.2H()}}F{if(o.2D=="1P"&&v.bL==1){P.vS(x)}F if(o.2D=="2h"&&v.dp==1){P.vU(x)}}};G.sO=E(){B x=o.2f[o.2Y];x==29?x=\'\':\'\';B y=gf()&&v.hH==1&&v.8f==1;O(y?\'\'+2I("2F")+\' \':\'\')+x};G.qY=E(){B x=o.5Z[o.5t];x==29?x=\'\':\'\';O x};G.gf=E(){O gf()};E gf(){B x=K;if(P){if(o.2D=="4d"){x=P.2F()}if(o.2D=="1P"&&v.8f==1&&91()>1&&v.hH==1){x=P.2F()}if(o.2D=="2h"&&v.9O==1&&bs()>1){x=P.2F()}}O x}E 91(){if(o.2D=="1P"){O P.91()}F{O 0}}E bs(){if(o.2D=="2h"){O P.bs()}F{O 0}}G.4R=E(x){if(P&&(o.2D=="4d"||o.2D=="9r"||I(v.i4))){P.4R()}if(v.w9>0){J(o.4m,{"X":(o.2l?"100%":o.bu-v.w9)})}if(o.3R&&v.2v.wC==1){o.ge.4R()}};G.3C=E(){O P.3C()};G.9M=E(){1v(\'9M\');o.9t=0;o.1E?v.4b=1:\'\';6F(1g)};if(!I(o.1U)){vj()}if(I(v.1U)){if(v.1U!=\'\'){9c(v.1U,o.1U,v.gl);if(v.r0==1&&!o.1E){1p(o.1U)}}F{v.1U=1V}}E ak(){dC=P?P.5I():\'\'}E w5(1g){4U=1g.2y(" or ");U(B i=0;i<4U.Q;i++){if(4U[i].L(" mK ")>-1){mJ=4U[i].2y(" mK ");4U[i]=mJ[6A(0,mJ.Q-1)]}}8U=0}E wd(){ak();if(dC=="6e"||o.5Q){o.V.qZ()}if(dC!=""){o.V.pZ()}}E vj(){if(o.1U){o.1I.2T(o.1U)}o.1U=1K("1S");J(o.1U,{"3T-2L":"1M","1r":v.kN,4y:"1r 0.5s"});if(v.w8==1){w7()}F{J(o.1U,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'W\':\'100%\',\'X\':\'100%\'})}o.1I.1J(o.1U)}E 6F(x,y,w6){v.gw==\'\'?v.gw=\';\':\'\';if(x.L(\'{\')>-1&&x.L(\'}\')>-1&&x.L(v.gw)>-1){B z=x.2y(v.gw);o.8N=[];U(B i=0;i<z.Q;i++){o.5Z[i]=z[i].1z(z[i].L("{")+1,z[i].L("}")-1);o.8N[i]=z[i].1z(z[i].L("}")+1);if(I(v.8T)){if(v.8T==o.5Z[i]){o.5t=i}}}x=o.8N[o.5t]}!I(4U)?4U=[]:\'\';x&&x!=\'or\'&&x!=\'x\'?w5(x):\'\';B ft=o.2D;if(4U.Q>0){o.2D=ja(4U[8U]);B d3=K;if(w6){d3=H}1g=4U[8U];if(!d3&&x!=\'x\'&&P&&o.2D==ft&&(ft=="aB"||ft=="9r"||(ft=="4d"&&o.1E&&!ka)||(ft=="1P"))){P.3b(1g);1v("3b")}F{1v("15C");jd();we(1g)}if(o.h1){if(o.ag!=o.h1){P.fX(o.6d[o.ag])}}}if(!y){4t(o.v4);o.v4=7i(wd,o.uW);if(I(v.2z)){if(v.2z!=\'\'){ea(v.2z)}}if(v.mC==1){if(v.iE==1&&o.1q.2C){}F{if(o.2D=="4d"){J(o.4m,{"1h":-dO,"1b":-dO})}F{3k(o.4m)}v.1x.1p=0}}}}E ja(x){B 1F="aB";if(x){if(x.L(".zn")>0){1F="1P"}F if(x.L(".zm")>0){1F="2h"}F if(x.L("ws://")==0){1F="ws"}F if(x.L(\'4d.6X/\')>-1||x.L(\'iS.be/\')>-1){1F="4d";if(v.pE==1){B y=\'6K://3Z.4d.6X/vi/\'+jX(x)+\'/\';wh(y+\'wi.je\',E(z){z>100?v.1U=y+\'wi.je\':v.1U=y+\'15D.je\';if(o.1w){o.1w[o.3L][\'1U\']=v.1U}v.4b==1||o.1E?\'\':9c(v.1U,o.1U,v.gl)})}}F if(v.9r==1&&x.L(\'9r.6X/\')>-1){1F="9r"}F if(v.15y==1){15x(x)?1F="9o":\'\'}}o.5L=1F=="aB"||1F=="1P"||1F=="2h"||1F=="ws";O 1F}E wh(1g,wg){B 3Z=1D 15t();3Z.bR=E(){wg(G.X)};3Z.3b=1g}E we(x){o.2D=ja(x);o.o2=K;if(o.5L){P=1D zD(x,o.4m,K)}if(o.2D=="4d"){P=1D Gx(x,o.4m)}if(v.9r==1&&o.2D=="9r"){P=1D 15s(x,o.4m)}if(o.2D=="9o"){P=1D 15u(x)}o.S?o.S.Hq():\'\';B t=0;if(I(v.1n)){if(o.3r&&v.bd==1&&!o.1E){t=o.3r.9v().t}1O(E(){o.V.4s(t,v.1n)},100)}}E jd(){if(P){P.4C();P=1V;dC="a5"}if(3R){3R.4C();3R=1V;3R=29;o.ge.7t();o.3R=1V;o.ge=1V}};G.4C=E(){jd()};G.15v=E(){4U=[];jd()};G.6F=E(x,y,z){6F(x,y,z)};G.9c=E(x){9c(x,o.1U,v.gl)};G.2H=E(){if(P){kD=K;ka=K;if(o.5Q){o.4T.2H()}F{P.2H();v.gn==1?o.V.iv():\'\'}if(I(3R)){3R.2H()}if(o.6W){if(o.5L){if(o.a9>0&&!o.6W.15w()){o.6W.mx()}}F{o.kK=[];o.S.n3("ck")}}if(o.5L&&v.vJ>-1&&!o.o1&&!o.1q.5C){if(o.a9>0){P.vT()}}}F{1O(G.2H,4i)}};G.wB=E(1c){if(o.3R){if(v.2v.wC==1){if(o.pV[o.3R]>2){O}}if(1c){1c.9P();2a.1c?2a.1c.6h=H:\'\'}B 1L=P;P.tS(H,o.3R);3R.tS(K,o.4m);P=3R;3R=1L;P.2H();3R.2H();js("2v")}};G.wW=E(){P.3b(1g)};G.nV=E(){v.9d==1?o.9d.3d("1p"):\'\';o.us=H};G.fr=E(){if(v.1x.oL){v.1x.oL=K;o.S?o.S.nP(1):\'\'}o.us=K};G.wV=E(){if(I(o.3R)){6i(o.3R)?1p(o.3R):1t(o.3R)}};G.dq=E(){if(o.5L&&o.5e){o.f1=H;P.5e()}};G.cH=E(){if(o.5L&&o.8m){P.8m()}};G.jD=E(){if(v.9Q==1&&I(v.wS)){if(!I(o.9Q)){o.9Q=1K("1S");J(o.9Q,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'W\':\'100%\',\'X\':\'100%\',"3T-2L":"1M","4J":wU});o.1I.1J(o.9Q)}6l(o.9Q);9c(v.wS,o.9Q,\'2V\')}if(P){jV(0);P.jD()}};G.e5=E(){if(o.9Q){3k(o.9Q)}P?P.e5():\'\'};G.2P=E(){if(o.5Q){o.4T.2P()}F{P?P.2P():1v("15E")}if(I(o.3R)){3R.2P()}};G.k8=E(){ka=H;o.V.3X(0,K);I(o.1U)?o.V.7u():\'\';6F(\'x\')};G.dl=E(){P?P.dl():\'\'};G.3X=E(x){if(P){if(o.5Q){o.4T.3X(x)}F{P.3X(x);if(v.2v.on==1){if(3R){3R.3X(x)}}}}};G.5c=E(){if(P){P.5c();o.5Q?o.4T.5c():\'\'}};G.6Y=E(){if(P){P.6Y();o.5Q?o.4T.6Y():\'\'}};G.42=E(x){P?P.42(x):\'\';if(o.5Q){o.4T.42(x)}};G.jx=E(){O P?P.jx():K};G.5V=E(){O P?P.5V():K};G.5I=E(){O dC};G.a5=E(){O kD};G.1a=E(){B x=0;if(P){x=4F();if(o.5Q){B y=o.4T.4F();y?x=y:\'\'}F{if(4s()>0&&x!=4s()){o.x8=x+0.15F}}O x}F{O 0}};G.1n=E(){B x=0;if(P){x=4s();x==0&&I(v.1n)?x=v.1n*1:\'\';if(o.5Q){B y=o.4T.4s();y?x=y:\'\'}}O x};G.aU=E(){O P?P.aU():0};G.15N=E(){vj()};G.v8=E(){if(o.5L){P.4g()}};G.1A=E(x){if(aI(x).L(":")>0){B y=x.2y(":");B z0=o.3n/o.4h;B z1=o.P.3C();if(z1.W>0){z0=z1.W/z1.X}B z=y[0]/y[1];if(z0!=z){if(o.5L){if(v.zH==1){J(P.6a(),{\'3K-b2\':\'ur\'})}F{J(P.6a(),{\'3K-b2\':\'2V\'})}}B w2=o.4h*z;B x2=w2/o.3n;B h2=o.3n/z;B y2=h2/o.4h;if(x2<1){o.3J.x0=o.3J.x=51(x2);o.3J.y=1}F{o.3J.x=1;o.3J.y0=o.3J.y=51(y2)}J(o.4m,{"2G":"3p("+o.3J.x+") 3f("+o.3J.y+")"});o.hO=x}}F{o.3J.x+=51(x);o.3J.y+=51(x);J(o.4m,{"2G":"3p("+o.3J.x+") 3f("+o.3J.y+")"})}if(v.1Z.15O==1){if(!o.wI){if(o.3J.x>0||o.3J.y>1){15P(o.4m,\'o.15Q\');o.wI=H}}F{if(o.3J.x==1&&o.3J.y==1){J(o.4m,{"1h":0,"1b":0})}}}o.S.oo()};G.sH=E(){if(o.5L){J(P.6a(),{\'3K-b2\':\'tB\'})}o.3J.x=o.3J.x0;o.3J.y=o.3J.y0;J(o.4m,{"2G":"3p("+o.3J.x+") 3f("+o.3J.y+")"});o.S.oo();o.hO=1V};G.15M=E(){B x=29;I(o.2g)?I(o.2g[o.3E])?x=o.2g[o.3E]:\'\':\'\';O x};G.bA=E(){O bA()};E bA(){O 4U.Q>0?(4U[8U]?4U[8U]:\'\'):\'\'};G.6a=E(){O P?P.6a():K};G.ea=E(x){ea(x)};G.6f=E(){if(o.5L){P.6f()}};E ea(x){if(x!=\'\'){B 1E=0;B gb=\'\';o.2g=x.2y(",");o.3l=[];o.3E=-1;if(pK()&&v.ve==1){if(3j.5d("uv")!=1V){gb=3j.5d("uv")}}F{if(o.uq){gb=o.uq}}U(B i=0;i<o.2g.Q;i++){if(o.2g[i].L("#0")==0){o.2g[i]=bz(o.2g[i])}if(o.2g[i].L("#"+v.9y)==0){o.2g[i]=o[o.fd[0]](o.2g[i])}if(o.2g[i].L("[")==0&&o.2g[i].L("]")>1){o.3l[i]=o.2g[i].1z(o.2g[i].L("[")+1,o.2g[i].L("]")-1);o.2g[i]=o.2g[i].1z(o.2g[i].L("]")+1)}F{o.3l[i]=o.2g[i].1z(o.2g[i].wF("/")+1);o.3l[i]=o.3l[i].1z(0,o.3l[i].wF("."))}if(o.2g[i].L("#0")==0){o.2g[i]=bz(o.2g[i])}if(o.2g[i].L("#"+v.9y)==0){o.2g[i]=o[o.fd[0]](o.2g[i])}}if(o.3l.Q>1&&v.mN==1){o.3l.2X(tk(\'15L\',2I(\'wE\')));o.2g.2X("8R")}if(o.3l.Q>0&&v.ai==1){o.3l.2X(tk(\'15H\',2I(\'8w\')));o.2g.2X("")}U(B i=0;i<o.2g.Q;i++){if(I(v.wJ)){if(v.wJ==o.3l[i]){1E=i;o.3E=i}}if(gb!=\'\'){if(gb==o.3l[i]){1E=i;o.3E=i}}}if(v.ai==1&&v.fV==0){o.3E=o.3l.Q-1}I(o.S)?o.S.b9():\'\';if(v.fV==1){o.3E=1E;if(v.mN==1&&o.2g[1E]=="8R"){ts(o.3E)}F{k0(o.3E)}}F{v.ai!=1?o.3E=-1:\'\'}}F{o.V.fM()}}E k0(x){if(I(o.2g[x])){if(o.2g[x].L(".")>-1){o.k4=o.2g[x].2y(" or ");o.dE=0;jW()}}}E jW(x){B 1g=4v(o.k4[o.dE]);B 4k=dT(1g);4k.bR=E(){if(G.dY==4&&G.5I==4Y){o.8u=H;wO(1g,G.cF,x)}F{if(o.dE+1<o.k4.Q){o.dE++;jW()}F{hU("fw")}}};4k.qc=E(e){if(o.dE+1<o.k4.Q){o.dE++;jW()}F{hU("fw")}};4k.a1()}E hU(x){1v("2z cX gh or wK p8");if(o.3l[o.3E].L(2I("fw"))==-1){o.3l[o.3E]=o.3l[o.3E]+\' (\'+2I(x)+\')\'}v.15G==1?o.2g[o.3E]=\'\':\'\';o.3E=-1;o.8u=K;if(o.15I){o.S.b9();o.S.4P()}F{1O(E(){o.S.b9();o.S.4P()},100)}if(I(o.2z)){o.1I.2T(o.2z);o.2z=1V}}E wO(1g,x,y){if(1g.L(\'.kp\')>-1||1g.L(\'.wM\')>-1||1g.L(\'.jO\')>-1||1g.L(\'.wL\')>-1){B l=o.3E;if(I(2O[l])&&o.2g[l]=="8R"){}F{2O[l]=4a();2O[l][0]=9i();2O[l][1]=9i()}B 3W=9i();3W=x.2y(/\\r|\\n/);B te=1;B t1=0;B t2=0;3B{B dW=(I(v.wN)?v.wN:0);if(1g.L(\'f9=\')>0){dW=1g.1z(1g.L(\'f9=\')+6)*1}U(i=0;i<3W.Q;i++){if(1g.L(\'.kp\')>-1||1g.L(\'.wL\')>-1){if(3W[i].L(\'-->\')>-1&&3W[i].L(\':\')>-1){t1=hA(3W[i].1z(0,3W[i].L(\'-->\')))*1+dW;t1==0?t1=1:\'\';t2=hA(3W[i].1z(3W[i].L(\'-->\')+4,12))*1+dW;I(2O[l][0][t1])?\'\':2O[l][0][t1]=\'\';U(B j=t1;j<t2;j++){2O[l][1][j]=t1}te++}F{3W[i]=4v(3W[i]);if(3W[i]!=\'\'&&3W[i].Q>0&&3W[i]!=te&&3W[i]!=\'15J\'){2O[l][0][t1]=(2O[l][0][t1]&&2O[l][0][t1]!=\'\'?2O[l][0][t1]+\'<br>\':\'\')+(o.2g[l]=="8R"&&y>0?\'[dX]\':\'\')+3W[i]+(o.2g[l]=="8R"&&y>0?\'[/dX]\':\'\')}}}if(1g.L(\'.wM\')>-1||1g.L(\'.jO\')>-1){if(3W[i].L(\'15K:\')>-1){t1=hA(3W[i].1z((1g.L(\'.jO\')>-1?3W[i].L(\'=0\')+3:12),12))*1+dW;t2=hA(3W[i].1z((1g.L(\'.jO\')>-1?3W[i].L(\'=0\')+14:23),10))*1+dW;B p=\'\';if(3W[i].L(\'0,,\')>0){p=3W[i].1z(3W[i].L(\'0,,\')+3)}F{if(3W[i].L(\'yg,\')>0){p=3W[i].1z(3W[i].L(\'yg,\')+6)}}if(2O[l][0][t1]!=29){2O[l][0][t1]+=\'\\n\'+(o.2g[l]=="8R"&&y>0?\'[dX]\':\'\')+p+(o.2g[l]=="8R"&&y>0?\'[/dX]\':\'\')}F{2O[l][0][t1]=p}2O[l][0][t1]=2O[l][0][t1].26(/{.*?}/,\'\');2O[l][0][t1]=2O[l][0][t1].26(/\\\\\\\\N/,\'<br>\');2O[l][0][t1]=2O[l][0][t1].26(/\\\\N/,\'<br>\');U(B j=t1;j<t2;j++){2O[l][1][j]=t1}}}}o.S.b9();o.V.iX()}3g(e){hU("1N")}}F{hU("1N")}}G.2O=E(){O 2O};E t6(){B 4k=dT(v.ue+\'?1g=\'+4U[8U]);4k.bR=E(){if(G.dY==4&&G.5I==4Y){if(G.cF){v.1Q=G.cF;o.V.9q(\'1Q\')}}};4k.a1()}};E hA(kp){B 1L=kp.2y(\':\');B 6p=0;1L.Q==2?1L.12P("aR"):\'\';1L[0]!=\'aR\'?6p+=1L[0]*ug:\'\';1L[1]!=\'aR\'?6p+=1L[1]*60:\'\';6p+=1L[2].1z(0,2)*1;6p=6p*10+1L[2].1z(3,1)*1;O 6p}B zD=E(1g,1B,2v){B 1i=1K("5X");if(v.11y==1){B cE=1K("bG");4L(cE,{"AI":"no","tc":"H","AJ":"H","3b":""});J(cE,{"1l":"1Y","W":"100%","X":"100%","2W":0});1B.1J(cE);B zE=2a.7i(E(){if(cE.f6.1G.dY==="Wz"){2a.4t(zE);J(cE.sr.7z,{"2U":0,"2x":0});cE.sr.7z.1J(1i)}},100)}F{1B.1J(1i)}B 1P;B 4H=K;B pJ=K;B ae=K;B 2h;B 7r=K;B ws;B oE=K;B 6E=K;B 9u=K;B 7H=0;B 7W=K;B 1N;B Wy;B iY=K;B jG=K;B hL=-1;B bq=-1;B p3;B n8;B mO;B gE;B WA;B z5=\'5X/WB; WC="Wx.Ww, Ws.40.2"\';J(1i,{\'W\':\'100%\',\'X\':\'100%\',\'3K-b2\':\'tB\',\'4y\':"Bn 0.2s 2R",\'7U-X\':\'2F\',\'5N-X\':\'1M\',\'7U-W\':\'2F\',\'5N-W\':\'1M\'});if(v.zH==1||v.2V==1){if(v.Wr==1||v.2V==1){J(1i,{\'3K-b2\':\'2V\'})}F{J(1i,{\'3K-b2\':\'ur\'})}}if(v.r8==1&&o.1q.2C){4L(1i,{\'F3\':\'1\'})}v.Wt==1?1i.Wu=\'Wv\':\'\';4L(1i,{\'3b\':1g,\'x-3N-5e\':\'AE\'});if(v.WD==1){4L(1i,{\'2v\':\'K\'})}if(v.WE==1){4L(1i,{\'WM\':\'WN\'})}if(!o.1q.tv){4L(1i,{\'4g\':(v.4g==1&&v.4b==0?\'b4\':\'1M\')})}v6();if(2v){1i.4b=H;1i.3Y=H}if(!I(1g)){1g=\'\'}if(1g.L(".zm")>0&&o.bQ.L("8W")!=-1){6E=H;B o7=K;B nD=K;if(pI()){v.4g==1||v.4b==1||v.qO==1?iN(K):\'\'}F{6E=K;1v("8W cX yw")}}F if(((3w.1P==1&&v.tT!=1)||1g.L(".zn")>0)&&(o.bQ.L("7g")!=-1||I(2a.5q))){4H=H;3B{if(I(5q)){if(!5q.zj()||(o.1q.5A&&v.WO==1&&!o.1q.5C)||(o.1q.5A&&o.1q.5C&&v.WP==1)||(o.1q.iR&&v.WL==1)){1v(\'7g WK \',5q.zj());4H=K}F{if(v.4g==1||v.4b==1||v.zo==1||2v){cp(K)}}}F{4H=K}}3g(1N){4H=K}}F if(1g.L("ws://")==0&&v.WG==1){7W=H;oI()}if(o.1q.tv&&v.4b==1&&!4H&&!6E&&!7W){1O(E(){o.V.aS()},100)}if(v.6W==1){I(o.6W)?o.6W.al():\'\';o.6W=1D WF()}E iN(x){1v("8W");v.qO=1;B iF={ds:60};if(o.41.Q>1){v.9O=0;v.zp=H}F{v.zp?v.9O=1:\'\'}if(o.8N.Q>1){v.dp=0;v.zu=H}F{v.zu?v.dp=1:\'\'}if(I(v.cg)){if(I(v.cg.ds)){if(v.cg.ds>aq){v.cg.ds=aq}}if(2p v.cg=="3K"){U(B 1f in v.cg){iF[1f]=v.cg[1f]}}}2h=9E.bv().d3();js("2h",2h,1);v.zs==1&&!2v?2h.b0({\'oP\':{\'WH\':9E.WI.WJ}}):\'\';2h.Wq(1i,1g,(v.4b==1||2v||x));if(I(v.nq)){if(2p(v.nq)=="3K"){2h.Wp(v.nq)}}2h.b0({\'b1\':{\'W8\':iF.ds}});2h.b0({\'b1\':{\'W7\':iF.ds}});2h.b0({\'b1\':{\'W9.uV\':K}});2h.b0({\'b1\':{\'Wa.uV\':K}});if(v.A5==1){2h.Wb(29,H)}if(v.o3==1){2h.b0({\'b1\':{\'mm\':{\'mo\':{\'a0\':K,\'5X\':K}}}})}2h.on(9E.bv.2L.W6,E(1H){if(!o7){1v("8W zS");B q=za();zb();o.mR=K;if(v.W5==1){mO=1D W1(2h,2v)}9u=2h.W0();9u?1v("zW"):\'\';if(v.9O==1){if(v.o3==1||q>0){o.2Y=q;2h.b0({\'b1\':{\'mm\':{\'mo\':{\'a0\':K,\'5X\':K}}}})}F{o.2Y=2h.m7("5X").Q-1}o.S.d9(o.2Y);2h.mp("5X",o.2Y);2h.mp("a0",o.2Y)}o.V.aS();o7=H}});2h.on(9E.bv.2L.W2,E(1H){if(!nD){B 7d=2t(o.5t);if(7d>0&&v.dp==1){2h.w0(2h.rb("a0")[7d])}nD=H}});2h.on(9E.bv.2L.W3,E(1H){if(9u){o.V.4s(2h.1a(),2h.1n())}});2h.on(9E.bv.2L.W4,E(1H){2h.Wc(-1)});2h.on(9E.bv.2L.Wd,E(1H){if(1H.Wl=="5X"&&1H.Wm!=1H.A1&&v.9O==1){o.2Y=1H.A1;o.S.d9(o.2Y);1v("8W yG "+o.2Y)}});2h.on(9E.bv.2L.Wn,E(1H){if(I(1H.pq)){if(1H.pq.1F=="Wo"){js("zh",1H.pq.1g)}}});2h.on(9E.bv.2L.yE,E(1H){o.oi=1H;if(1H.1N=="Wk"){1N="8W "+1H.1N+": "+1H.1c.94+", "+1H.1c.1c;1v(1N);o.P.5i()}F if(1H.1N=="Wj"||1H.1N=="Wf"){1N="8W "+1H.1N+" 1N: "+1H.1c;1v(1N);o.P.5i()}F if(1H.1N=="We"||1H.1N=="Wg"){1N="8W "+1H.1N+" 1N: "+1H.1c;1v(1N);o.P.5i()}F if(1H.1N=="6L"){1N="8W do uE 1N Wh";1v(1N);o.P.5i()}});7r=H}E cp(x){1v("7g");if(o.41.Q>1){v.8f=0;v.Ab=H}F{v.Ab?v.8f=1:\'\'}if(o.8N.Q>1){v.bL=0;v.Aa=H}F{v.Aa?v.bL=1:\'\'}o.mT=K;B pS=K;if(v.7h&&v.A8==1){pS=H;v.A8=0}B kB={oP:(v.A9==1&&!2v),Wi:(v.4g==1||v.4b==1||2v||x)&&!pS,du:60,oF:60,WQ:zQ,WR:zQ,Xr:K};if(v.zR==1){kB[\'Xq\']=E(4k,1g){4k.Xs=H}}if(I(v.6U)){if(I(v.6U.du)){if(v.6U.du>aq){v.6U.du=aq}v.6U.oF=v.6U.du}if(I(v.6U.zO)){v.6U.oF=v.6U.du=v.6U.zO}if(2p v.6U=="3K"){U(B 1f in v.6U){kB[1f]=v.6U[1f]}}}1P=1D 5q(kB);js("1P",1P,1);1P.yk(1g);1P.Xt(1i);1P.on(5q.7C.Xu,E(){1v("7g zS")});1P.on(5q.7C.Xp,E(1c,1H){!2v?o.V.aS():\'\'});1P.on(5q.7C.Xo,E(1c,1H){if(!2v&&v.8f==1&&91()>1){z3();o.S?o.S.d9(o.2Y):\'\'}});1P.on(5q.7C.Xk,E(1c,1H){oX()});1P.on(5q.7C.Xj,E(1c,1H){oX()});1P.on(5q.7C.Xl,E(1c,1H){if(!2v){if(1H.gx.7N!=9u){9u=1H.gx.7N;o.S.4P()}9u=1H.gx.7N;if(9u){1v("zW");o.zU=1g.L("?tz")>-1;if(1i.1n>0&&1i.eD>0){if(1i.1n-1i.eD<10){if(o.gr>0){if(o.gr==1i.eD&&o.zV==1i.1n){o.iG++;if(o.iG>2){o.iG=0;o.gr=-1;1P.8O();cp(H);8s()}}F{o.gr=-1}}F{o.gr=1i.eD;o.zV=1i.1n}}}}}if(v.8f==1){o.2Y=1P.kO;o.S?o.S.d9(o.2Y):\'\'}kY()});1P.on(5q.7C.Xm,E(1c,1H){if(I(1H.zg)&&!2v){js("zh",1H.zg.Xn)}pJ=H;yv()});1P.on(5q.7C.Xv,E(1c,1H){js("Xw",1H,1)});1P.on(5q.7C.XE,E(1c,1H){!2v&&v.bL==1?o8():\'\'});1P.on(5q.7C.XF,E(1c,1H){if(!2v&&v.bL==1){nN()}});if(v.XG==1){n8=1D XH(1P,2v)}F{1P.XD=K}1P.on(5q.7C.yE,E(1c,1H){v.1v==1?dv.1v(1H):\'\';o.oV=1H;if(1H.do){9G(1H.1F){1m 5q.yJ.XC:if(v.yF==1){1v("Xy");B 6e=o.1R;!2v&&6e?o.V.2P():\'\';o.V.7u();7H=1;p0(6e)}F{1N=1H.gx;o.2E>0||2v||v.7N==1||7W?\'\':o.2E=4F();1P.8O();if(!2v){o.P.5i()}}1k;1m 5q.yJ.Xx:yh();1k;7b:1N="7g do 1N, 8O";1P.8O();!2v?o.P.5i():\'\';1k}}F{1v("7g ",1H.1F,1H.gx,(1H.mE?1H.mE.ll:\'\'));js("Xz",(1H.mE?1H.mE.ll:\'\'));if(7H>0){7H=2;p0()}}});ae=H}E oX(){if(!2v&&v.8f==1&&91()>1){if(o.2Y!=1P.kO){o.2Y=1P.kO;o.S?o.S.d9(o.2Y):\'\';1v("7g yG "+o.2Y)}}}E oI(){if(I(2a.yH)){if(pI()){if(!I(o.ws)){o.ws=1D XA()}ws=1D yH(1i,1g,{oP:H});oE=H}F{7W=K;1v("cX yw")}}}E yv(){p6()};G.6f=E(){p6()};E p6(){if(v.H2){if(1i.dZ.Q>0){if(v.6f==1){1i.dZ[1i.dZ.Q-1].hC="GM"}F{1i.dZ[1i.dZ.Q-1].hC="3U"}if(!o.6f){o.6f=H;o.S.4P()}}F{if(o.6f){o.6f=K;o.S.4P()}}}}E p0(x){if(7H>0){3q(p3);p3=1O(yn,v.ym*2M)}}E yn(){if(7H>0){1v("XB")}if(7H==1){1P.yk(1g)}if(7H==2){1P.8O();cp(H);1i.1R()}}B n0=0;B n9=0;E yh(){B 8Q=os.8Q();if(!n0||(8Q-n0)>dO){n0=os.8Q();1v("7g do P 1N, 3B to dy");1P.yo();1P.pR();if(o.1R){gt()}}F{if(!n9||(8Q-n9)>dO){n9=os.8Q();1v("7g do P 1N, 3B to dy");1P.Xi();1P.yo()}F{1v("7g do P 1N, oH Xh")}}}1i.1u(\'X0\',yt);1i.1u(\'1N\',s7);1i.1u(\'a5\',8s);1i.1u(\'1R\',9b);1i.1u(\'5j\',aV);1i.1u(\'H3\',aT);1i.1u(\'hB\',hy);1i.1u(\'lx\',hT);1i.1u(\'GZ\',b5);1i.1u(\'GL\',ca);1i.1u(\'a2\',7V);1i.1u(\'Gv\',ah);1i.1u(\'WZ\',yM);1i.1u(\'Gw\',sJ);1i.1u(\'Gq\',sk);E yt(){if(!4H&&!6E){!2v?o.V.aS():\'\'}}E s7(){if(!4H&&!6E){if(1i.1N){1v(1i.1N,1i.1N.ll,1i.1N.94);B x=1i.1N.ll;1N=29;if(x==1){1N="X1"}if(x==2){1N="uE"}if(x==3){1N="bW"}if(x==4){1N="cX gh"}1v("11z gY: ",1N)}if(1N!=29){5i()}}}E 5i(){!2v?o.P.5i():\'\'}E 8s(){!2v?o.P.8s():\'\'}E 9b(){if(!o.1E&&v.7h){1v(\'FY 1R\');5j();o.V.2H();O}if(4H&&7H>0){}F{if(!2v){if(bq==-1){B x=K;if(4H){if(I(o.2i)||I(o.6b)){5j();x=H}}if(!x){jG=H;o.P.9b()}}}}}E aV(){!2v&&!o.FD?o.P.aV():\'\'}E aT(){!2v?o.P.aT():\'\';if(bq>-1){if(4F()>bq){5j();bq=-1}}}E hy(){!2v?o.P.hy():\'\'}E hT(){!2v?o.P.hT():\'\'}E b5(){if(2v){tH()}F{o.P.b5();uh();if(4H&&7H>0){7H=0;1v("X3 up");1P.pR();gt();o.S.2H()}if(I(v.i4)){2r()}}}G.i4=E(){O(1i.g8/1i.ce)};E tH(){if(1i.ce>0){J(1B,{"X":1B.2b/(1i.g8/1i.ce)-2t(v.2v.2W)})}}E uh(){if(v.jb==1){4t(o.pQ);o.pQ=7i(pb,100);pb()}}E pb(){if(1i.ce>0){o.V.yr(1i.g8/1i.ce);4t(o.pQ)}}E ah(){!2v&&!7W?o.P.ah():\'\'}E ca(){!2v?o.P.ca():\'\'}E 7V(){if(4H&&7H>0){}F{!2v?o.P.7V():\'\'}}E yM(){o.V.vm()}E pI(){B m5=2a.z8=2a.z8||2a.WY;B fC=2a.z6=2a.z6||2a.WX;B lv=m5&&2p m5.lv===\'E\'&&m5.lv(z5);B z9=!fC||fC.pg&&2p fC.pg.WT===\'E\'&&2p fC.pg.7t===\'E\';O lv&&z9}E za(){B q=0;if(!2v&&v.9O==1){o.2f=[];B x=2h.m7("5X");if(x.Q>1){B y=\'\';U(B i=0;i<x.Q;i++){o.2f[i]=I(x[i].X)?oe(x[i],v.ze):i;if(o.2f[i]==y||v.zd==1){y=o.2f[i];if(I(x[i].bK)){o.2f[i]+=" "+hS+" &e1;"+2t(x[i].bK/2M)+\' \'+2I(\'cl\')+\'</6R>\';v.zd!=1?o.2f[i-1]+=" "+hS+" &e1;"+2t(x[i-1].bK/2M)+\' \'+2I(\'cl\')+\'</6R>\':\'\';y=\'\'}}F{y=o.2f[i]}if(I(v.46)&&q==0){if(v.46==o.2f[i]){q=i}}if(I(o.46)){if(o.46==o.2f[i]){q=i}}}o.2f[x.Q]=2I("2F")}o.o2=H}O q}E zb(){if(!2v&&v.dp==1){o.5t=0;B x=2h.rb("a0");if(x.Q>1){U(B i=0;i<x.Q;i++){o.5Z[i]=i;if(I(x[i].bF)){o.5Z[i]=oc(x[i].bF)}F{if(I(x[i].zc)){o.5Z[i]=2I("6I")+" "+x[i].zc}}if(I(o.8T)){if(o.8T==o.5Z[i]){o.5t=i}}}}1v("8W yT ",o.5t);o.S.mZ(o.5t)}}B hS="<6R C=\'1r:0.5\'>";E z3(){if(!2v&&v.8f==1){B x=1P.eF;B q=0;o.2f=[];if(x.Q>1){U(B i=0;i<x.Q;i++){if(I(x[i].X)){B y=oe(x[i],v.yR);if(o.2f.L(y)>-1||v.WS==1){if(I(x[i].bK)){B yi=o.2f.L(y);yi>-1?o.2f[yi]+=" "+hS+" &e1;"+2t(x[yi].bK/2M)+\' \'+2I(\'cl\')+\'</6R>\':\'\';o.2f[i]=y+" "+hS+" &e1;"+2t(x[i].bK/2M)+\' \'+2I(\'cl\')+\'</6R>\'}}F{o.2f[i]=y}if(I(x[i].yQ)){o.7Z[i]=x[i].yQ[0]}}F if(I(x[i].7k)){o.2f[i]=x[i].7k}F{o.2f[i]=i}if(I(v.46)&&q==0){if(v.46==o.2f[i]){q=i}}if(I(o.46)){if(o.46==o.2f[i]){q=i}}}if(v.hH==1){o.2f[x.Q]=2I("2F")}F{1P.vD=0;1P.h8=0}if(v.yP==1||q>0){1P.h8=0;if(v.fK=="9V"||(!o.1E&&v.4g==0)){1P.qD=q}F{if(v.fK=="eL"){1P.qq=q}}}F{v.hH==1?o.2Y=1P.eF.Q-1:o.2Y=1P.WU}kY()}o.o2=H;o.S?o.S.4P():\'\'}}E kY(){if(o.7Z.Q>0&&v.bL==1){o8();nN()}}E o8(){if(!2v&&v.bL==1){B x=1P.vl;o.5Z=[];B 2u;if(x.Q>1){U(B i=0;i<x.Q;i++){2u=K;if(I(x[i].eQ)&&o.7Z.Q>0){if(x[i].eQ!=o.7Z[o.2Y]){U(B j=0;j<o.7Z.Q;j++){if(o.7Z[j]==x[i].eQ){2u=H}}}}if(!2u){o.5Z[i]=I(x[i].7k)?oc(x[i].7k):i;if(I(v.8T)){if(v.8T==o.5Z[i]){o.5t=i;1P.l0=i}}}}}}}E nN(){if(!2v){B x=1P.vl;B y=1P.l0;if(x[y].eQ){if(o.7Z.Q>0){if(o.7Z[o.2Y]!=x[y].eQ){U(B i=0;i<x.Q;i++){if(x[i].7k==x[y].7k&&x[i].eQ==o.7Z[o.2Y]){1P.l0=i;y=i;1k}}}}}o.5t=y;1v("7g yT ",o.5t);o.S.mZ(o.5t)}};E oc(x){B r=x.ko();if(r=="WV"||r=="en"){x="WW"}F if(r=="X4"||r=="ru"){x="Русский"}O x};E oe(x,y){B r=x.X+\'p\';if(x.X<4Y){r=\'um\'}F if(x.X>=4Y&&x.X<=d0){r=\'iz\'}F if(x.X>d0&&x.X<=cT){r=\'iB\'}F if(x.X>cT&&x.X<=4i){r=\'iC\'}F if(x.X>4i&&x.X<=aq){r=\'yX\'}F if(x.X>aq&&x.X<=yV){r=\'jc\'}F if(x.X>yV&&x.X<=yW){r=\'jm\'}F if(x.X>yW&&x.X<=Ae){r=\'nF\'}F if(x.X>Ae){r=\'pv\'}if(x.W==vI&&x.X<=X5){r=\'iz\'}F if(x.W==vn&&x.X<=vy){r=\'iB\'}F if(x.W==Ud&&x.X<=Xe){r=\'iC\'}F if(x.W==Xf&&x.X<=Xg){r=\'jc\'}F if(x.W==Xc&&x.X<=Xb){r=\'jm\'}F if(x.W==X7&&x.X<=X6){r=\'nF\'}F if(x.W==X8&&x.X<=X9){r=\'pv\'}if(v.1j.Xa==1&&I(v.1j[\'7k\'+r])){r=v.1j[\'7k\'+r]}F{if(y==1){r=2I(r)}if(y==2&&I(x.bK)){r=2t(x.bK/2M)+\' \'+2I(\'cl\')}}O r};E 4F(){if(6E){O 7r?2h.1a():0}F{O 1i.eD}};G.2H=E(){B p=H;if(4H&&!pJ){if(!ae){cp(H)}!jG?o.P.9b():\'\';1P.pR()}if(6E&&!7r){iN(H);p=K}if(7W){if(!oE){oI()}ws.1R();p=K}if(1i.C.1h=="-VZ"){G.e5()}p?gt():\'\'};B VY;E gt(){if(1g!="1M"){B ol=1i.1R();if(ol!==29){ol.cs(E(){}).3g(E(1N){1v("UP",1N.94);if(1N.94.L(\'cn\')==-1&&1N.94.L(\'UO by\')==-1){if(!o.1q.ov||1N.94.L(\'ap p8 UQ\')==-1){if(v.vw==1&&!o.3Y){o.V.5c();1i.1R()}F{o.S.2P();o.V.7u()}}F{if(o.1q.tv&&(4H||6E)){}F{o.S.2P();o.V.7u();js("UR")}}}})}}}G.jD=E(){if(o.6b||o.2i){if(o.92){cH()}if(!o.f1&&o.1q.2C&&o.1q.3N){if(!1i.3Y){1i.3Y=H;iY=H}J(1i,{"1l":"1Y","1b":-3S,"1h":-3S});bq=4F();if(!7W){1i.1R()}if(bq==0&&o.2E>0){gE=o.2E}}}};G.e5=E(){if(!o.f1&&(o.1q.2C||o.1q.3N)){J(1i,{"1l":"vg","1b":0,"1h":0});if(I(v.i4)){2r()}if(iY){!o.3Y?1i.3Y=K:\'\';iY=K}if(gE>0){o.2E=gE;gE=0}bq=-1}};G.2P=E(){5j()};E 5j(){if(7W){ws.5j()}F{1i.5j()}};G.dl=E(){!1i.8E?2P():gt()};G.3X=E(x){if(6E&&7r){2h.4l(x)}F{1i.eD=x}};G.5c=E(){1i.3Y=H};G.6Y=E(){1i.3Y=K};G.42=E(x){1i.1W=x};G.vT=E(){if(o.vt!=1i){B cn;B 9a;if(o.kC[1i]){cn=o.kC[1i];9a=o.pP[1i]}F{2a.oq=2a.oq||2a.US;9a=1D oq();cn=9a.UN(1i);o.kC[1i]=cn;o.pP[1i]=9a}B fQ=9a.UM();fQ.fQ.4S=v.vJ;cn.q3(fQ);fQ.q3(9a.UI);o.o1=H;o.vt=1i}};G.jx=E(){O!1i.8E};G.5V=E(){O v.7N==1||7W?H:9u};G.6a=E(){O 1i};G.oJ=E(){4L(1i,{\'S\':\'1\'});O H};G.4g=E(){4L(1i,{\'4g\':\'b4\'});if(4H&&!ae){cp(K)}if(6E&&!7r){iN(K)}};G.5I=E(){B 6G="6e";if(1i.8E){6G="8E"}if(1i.a5){6G="a5"}O 6G};G.tS=E(x,y){2v=x;y.1J(1i);1B=y;if(x){1i.3Y=H;tH();if(o.2f.Q>0){if(4H){hL=o.2Y;1P.h8=0;1P.qq=0}}}F{if(!o.3Y){1i.3Y=K}1i.1W=v.1W;uh();if(o.2f.Q>0){if(4H){1P.h8=-1;if(hL>-1){hL<1P.eF.Q?1P.qD=hL:\'\'}}}}};G.1a=E(){O 4F()};G.1n=E(){B x=1i.1n;if(6E&&7r){x=2h.1n()}if(I(v.4E)){x=v.4E}O x!=UH&&!tw(x)?x:0};G.aU=E(){B x=0;if(1i.8o){if(1i.8o.Q>0){B y=4F();U(B i=0;i<1i.8o.Q;i++){if((y>=1i.8o.1E(i)||y>=1i.8o.1E(i)-100)&&y<=1i.8o.4E(i)){x=1i.8o.4E(i)}}x==0?x=1i.8o.4E(1i.8o.Q-1):\'\'}}if(I(v.4E)){x>v.4E?x=v.4E:\'\'}O x};G.2F=E(){B x=K;if(4H){if(ae){x=1P.vD}}F if(6E){if(7r){B y=2h.UJ();x=y.b1.mm.mo.5X}}O x};G.3C=E(){O{"W":1i.g8,"X":1i.ce}};G.3b=E(x){1g=x;jG=K;o.9s!=2?o.9s=K:\'\';if(4H){4H&&1P?1P.8O():\'\';cp(H);uy()}F{4L(1i,{\'3b\':x,\'4b\':0});v6();5j()}};E v6(){if(o.1q.5A){B y=1i.dZ;if(y){U(B i=0;i<y.Q;i++){y[i].hC="UK"}}y=1i.vl;if(y){U(i=0;i<y.Q;i++){y[i].uV=(i==0?1:0)}}if(2a.UL){1i.1u(\'UT\',E(1c){o.5e=1c.UU=="V2";!2v?o.V.h6():\'\'})}}uy()}G.5e=E(){1i.V3()};G.8m=E(){cH()};E uy(){if(o.1q.3N){if(I(1i.V4)&&!o.1q.9f){o.8m=H}if(1G.V5&&!1i.V1){o.8m=H}}}E cH(){if(o.1q.5A){if(1i.V0==="j4-in-j4"){1i.vL("cr");o.92=K}F{1i.vL("j4-in-j4");o.92=H}}F{if(!1G.UW){2o(\'1i.UV().cs(p => {o.92 = H;}).3g(1N => {o.92 = K;});\')}F{2o(\'1G.UX().cs(ok =>{o.92 = K;}).3g(1N => {});\')}}};E sJ(){o.92=H};E sk(){o.92=K};G.vu=E(x){if(7r){B x=2t(x);if(x==2h.m7("5X").Q){o.2Y=2h.UY(\'5X\')}F{2h.b0({\'b1\':{\'mm\':{\'mo\':{\'a0\':K,\'5X\':K}}}});2h.mp(\'5X\',x);2h.mp(\'a0\',x)}}};G.UZ=E(x){if(o.ws){o.ws.vQ(ws,x,-1)}};G.UG=E(x){if(o.ws){o.ws.vQ(ws,-1,x)}};G.vU=E(x){if(7r){if(1i.8o.Q>0){2h.w0(2h.rb(\'a0\')[2t(x)])}}};G.vY=E(x){if(ae){B y=2t(x);if(x==1P.eF.Q){y=-1;1P.h8=-1}if(v.fK=="eL"){1O(7V,4i);1P.qq=y}if(v.fK=="9V"){1v("7g 9V UF "+y);1P.qD=y}if(y==-1){o.2Y=1P.kO}kY()}};G.kW=E(){O 1P};G.ls=E(){O 2h};G.91=E(){O 91()};E 91(){B x=0;if(ae){if(1P.eF){x=1P.eF.Q}}O x}G.bs=E(){O bs()};G.4R=E(){2r()};E 2r(){B x=1i.g8/1i.ce;if(x){x=(x).vO(2);B z=2o(v.i4).vO(2);if(z!=x){if(o.3n>o.4h){J(1i,{\'3K-b2\':\'2V\',\'X\':\'100%\',\'W\':o.4h*z})}F{J(1i,{\'3K-b2\':\'2V\',\'W\':\'100%\',"X":(o.3n/z),"1l":"1Y","1h":"50%","1b":"50%","2G":"od(-50%, -50%)"})}}}}E bs(){B x=0;if(7r){x=2h.m7("5X").Q}O x}G.vS=E(x){if(ae){1P.l0=2t(x)}};G.w1=E(x){if(ae&&n8){n8.Um(x)}};G.vv=E(x){if(7r&&mO){mO.Ul(x)}};G.fX=E(x){if(x){1i.Uo=x}};G.rT=E(){B x=1i.Up;B y=[];U(B i=0;i<x.Q;i++){if(x[i].jF.ko()==\'7d\'){x[i].6j("e0",rL);y.2X(x[i])}}U(B i=0;i<y.Q;i++){1i.2T(y[i])}};G.GW=E(x,y,z){if(x!=\'\'){if(x.L(\' or \')>0){B xx=x.2y(\' or \');x=xx[0]}B 7d=1G.1K(\'7d\');7d.5B(\'3b\',x);7d.5B(\'rB\',y);7d.5B(\'Uq\',\'GR\');7d.5B(\'hC\',\'GM\');if(z){7d.5B(\'7b\',\'\')}1i.1J(7d);7d.1u("e0",rL)}};E rL(e){if(e.4f.rB){U(B i=0;i<o.3l.Q;i++){if(o.3l[i]==e.4f.rB){o.V.9D(i)}}}};G.pM=E(){O 1N};G.4C=E(){4H&&1P?1P.8O():\'\';6E&&2h?2h.Uk():\'\';7W&&ws?ws.2u():\'\';1i.6j(\'1N\',s7);1i.6j(\'a5\',8s);1i.6j(\'1R\',9b);1i.6j(\'5j\',aV);1i.6j(\'H3\',aT);1i.6j(\'hB\',hy);1i.6j(\'lx\',hT);1i.6j(\'GZ\',b5);1i.6j(\'GL\',ca);1i.6j(\'a2\',7V);1i.6j(\'Gv\',ah);1i.6j(\'Gw\',sJ);1i.6j(\'Gq\',sk);1i.3b=\'\';if(1B.jF=="Dq"){1B.sr.7z.2T(1i)}F{1B.2T(1i)}1i=1V}};B Gx=E(1g,fP){B 6z=K;if(1g.L(\'6z\')==0){6z=H;1g=1g.1z(5)}B jw=jX(1g);B 1N;B 3i;B 8M=K;B 3Q=K;B jk=K;B ku=K;B 2F=H;B pt=[];B bj=1;B h0=K;B tn;B cw=0;B jH=0;B kq=K;B na=\'Ai\'+v.id+(6z?\'6z\':\'\');B 1B=1K(\'1S\');1B.5B(\'id\',na);fP.1J(1B);o.5e=K;!6z?o.V.h6():\'\';if(o.1q.2C){v.4g=1}if(v.Hi!=1){B 7x=1K(\'1S\');fP.1J(7x);J(7x,{1l:"1Y",1h:0,1b:0,"2w-1y":"#kr",X:"100%",W:"100%","1r":0});7x.1u("GX",E(1c){1c.6h=H});if(o.1q.2C){7x.1u("fg",E(1c){1c.6h=H});7x.1u("2B",E(1c){1c.6h=H});7x.1u("cv",E(1c){1c.6h=H;f3(1c);if(v.ci==1){1O(GF,100);1O(iO,2M)}})}F{7x.1u("t9",E(1c){B x=H;if(v.2i==1){if(I(v.7h)&&!jk){x=K}if(I(v.lW)&&ak()=="8E"&&1a()>0){x=K}}if(x&&v.ci==1&&v.GJ==1&&v.GA!=1){3k(G);1O(iO,3S)}})}v.ci==1?3k(7x):\'\'}E iO(){6l(7x)}E GF(){if(v.GA!=1){3k(7x)}}if(v.4g==1&&v.4b==0){7V()}if(!2a[\'YT\']){2a.Uj=E(){iT();U(B i=0;i<7a.Q;i++){if(7a[i].3d("id")!=v.id){if(7a[i].3d(\'GD\')){7a[i].3d(\'Hn\')}}}};if(!Hk("4d.6X/Hs")){B 6a=1G.1K(\'mi\');6a.3b="6K://3m.4d.6X/Hs";6a.7k="Uf";B qa=1G.av(\'mi\')[0];qa.4Z.mw(6a,qa);6a.qc=E(e){o.V.aS();if(v.FU!=1){1N=\'Ue Ug gY\';o.P.5i()}}}}F{iT()}E iT(){if(v.4g==1||6z){!8M?7Y():\'\'}F{o.V.aS()}}E 7Y(){if("YT"in 2a){if(I(YT.kZ)&&!8M){1v("EY 7Y");B rn=0;if(v.Hi==1){rn=1}o.2E>0?cw=2t(o.2E):\'\';3i=1D YT.kZ(na,{X:o.9A,W:o.aG,Uh:jw,Ui:{Ur:1,Us:na,UB:1,UC:1,eJ:1,F3:((v.r8==0||(v.UD!=1&&o.1q.9f))&&o.1q.2C?0:1),UE:3,S:rn,Uz:0,Uy:1,EH:0,4b:0,aO:0},2L:{\'Uu\':v0,\'Ut\':ER,\'5i\':5i,\'Uv\':FA}});if(o.2E>0){o.2E=29}2r();8M=H}F{1O(7Y,4i)}}F{1O(7Y,4i)}}B gz;E v0(){1v("EY fp");3Q=H;3q(tn);o.V.6V();if(6z){if(o.1q.qN){o.V.5c()}3i.jf();o.2i.Uw()}F{if(v.4b==1&&o.1q.qN&&!o.mH){o.V.5c();if(o.1q.2C){4t(gz);gz=7i(EW,d0)}}if(v.4g==0){3i.jf()}F{o.V.aS()}o.P.ah();if(bj!=1){af(bj)}b5();2r()}}E EW(){B x=3i.Fy();if(x==2||x==-1){o.S.2P();o.S.6V();4t(gz)}if(x==1){4t(gz)}}E ER(1c){if(6z){if(1c.1H==YT.cD.G5){o.2i.Ux()}if(1c.1H==YT.cD.EU){}}F{if(1c.1H==YT.cD.EU){if(jH==1){jH=0;v0()}o.V.2H();if(cw>0){3i.FL(cw,H);cw=0;o.2E=29}iO();jk=H;3Q=H;if(ku){3i.nS()}F{o.P.9b();o.P.aT()}Fv();if(I(v.46)){U(B i=0;i<o.2f.Q;i++){if(v.46==o.2f[i]){5H(i)}}v.46=1V}F{if(I(o.46)){U(B i=0;i<o.2f.Q;i++){if(o.46==o.2f[i]){5H(i)}}o.46=1V}}h0=K}if(1c.1H==-1&&h0&&o.1R){o.V.6V();h0=K;aV()}if(1c.1H==YT.cD.V6){aV()}if(1c.1H==YT.cD.G5){8s()}if(1c.1H==YT.cD.V7){if(!o.1R){o.V.2H()}h0=H;7V()}if(1c.1H==YT.cD.VH){}}}E 5i(1c){if(6z){o.2i.VG()}F{if(1c.1H==2){1N="FY 4d id"}if(1c.1H==5){1N="uE 5p"}if(1c.1H==101||1c.1H==150||1c.1H==100){1N="G 5X is VI"}if(v.VJ==1){I(v.Gc)?1N=v.Gc:\'\'}if(v.FU!=1){o.P.5i()}F{1p(o.1U)}}}E 8s(){v.1E>0?cw=v.1E:\'\';o.P.8s();o.P.ah()}E aV(){if(!o.FD){o.V.2P()}}E aT(){o.P.aT()}E b5(){o.P.b5();o.V.vm()}E ah(){o.P.ah()}E ca(){o.P.ca()}E 7V(){if(o.P){o.P.7V()}F{tn=1O(7V,100)}}E FA(1c){sU(1c.1H)}E Fv(){if(!kq){B x=3i.VK()+\'\';if(x!=\'\'&&x!=29){o.2f=x.2y(\',\');if(v.pN==0){B y=o.2f.L(\'2F\');if(y>-1){o.2f.tx(y,1)}}U(B i=0;i<o.2f.Q;i++){o.2f[i]=uc(o.2f[i])}kq=H;sU(3i.VF())}}}E sU(x){o.2Y=o.2f.L(uc(x+\'\'));o.S.ow(o.2Y)}G.3C=E(){O{"W":0,"X":0}};G.3b=E(x){jw=jX(x);if(o.2E>0){cw=2t(o.2E)}hQ(jw)};E ak(){B 6G=-1;if(3Q){6G=3i.Fy()}B x=\'\';if(6G==-1){x="8E"}if(6G==1||6G==3){x="6e"}if(6G==2){x="8E";if(o.1R){o.S.2P();o.V.6V()}}if(6G==5){x="8E"}if(6G==0){x="a5"}O x}E 2r(){3i?3i.VE(o.3n,o.4h):\'\'}E uc(x){B y=x;if(x=="VA"){y="um"}if(x=="Vz"){y="iz"}if(x=="VB"){y="iB"}if(x=="VC"){y="iC"}if(x=="VD"){y="jc"}if(x=="VL"){y="jm"}if(v.FK==1){y=2I(y)}if(x=="2F"){y=2I("2F")}pt[y]=x;O y}E 1a(){O 3Q?3i.VM():0};E af(x){3i?3i.VU(x):\'\';bj=x};G.j0=E(){iT()};G.2H=E(){if(3Q){3i.jf()}F{if(!8M){7Y()}F{}}};G.2P=E(){if(3Q){3i.nS()}};G.dl=E(){if(3Q){ak()==\'6e\'?3i.nS():3i.jf()}};G.3X=E(x){3Q?3i.FL(x,H):\'\'};G.6a=E(){O K};G.5c=E(){3Q?3i.5u():\'\'};G.6Y=E(){3Q?3i.VV():\'\'};G.42=E(x){3Q?3i.FI(x*100):\'\'};G.jx=E(){O ak()==\'6e\'};G.5V=E(){O K};G.FN=E(x){5H(x)};E 5H(x){if(3Q){if(I(o.2f[x])){B y=pt[o.2f[x]];2F=y==\'2F\';B z=1a();3i.VW(y)}}}G.fX=E(x){af(x)};G.3Q=E(){O 3Q};G.5I=E(){O ak()};G.1a=E(){O 1a()};G.1n=E(){B x=3Q?3i.FR():0;if(I(v.4E)){x=v.4E}O x};G.aU=E(){B x=0;if(3Q){x=3i.VX()*3i.FR()}O x};G.4R=E(){2r()};G.pM=E(){O 1N};G.2F=E(){O v.pN==1?2F:K};G.FQ=E(x){hQ(x)};E hQ(x){1g=x;if(3i){jH=1;3i.VT(x,0)}}G.jD=E(){if(o.1q.2C&&o.1q.a3){G.2H();ku=H}F{if(ak()=="6e"){G.2P()}}};G.e5=E(){ku=K};G.oJ=E(){O H};G.4C=E(){3Q?3i.8O():\'\';3Q=K;kq=K;3B{if(1B){fP.2T(1B)}fP.2T(7x)}3g(e){}}};B rs=E(){B b=[];B e4=[];B 4N=[];B a2=K;B lf;B 9e=K;B 1j;B 1e;if(o.5k){o.5k.1p();o.5k=1V}B kX;o.6d=[0.25,0.5,0.75,1,1.25,1.5,2];if(v.1j.VS==1&&I(v.1j.gZ)){v.1j.gZ=v.1j.gZ.26(/\\n/ig,\'\');o.6d=v.1j.gZ.2y(",")}o.h1=o.6d.L(\'1\')>-1?o.6d.L(\'1\'):o.6d.L(1);o.ag==3?o.ag=o.h1:\'\';!I(v.1j.1A)?v.1j.1A=5:\'\';o.Fx=[\'+ \'+v.1j.1A+\'%\',\'&VO; \'+v.1j.1A+\'%\',\'100%\'];B l6=K;B 8r=0;B mv=0;B ec=K;B nT=H;B bg=1D AU();B 1j;B 62=[];B p7=K;B oZ=K;B gd=0;B bm=[];if(v.eh.1l=="S-2e"){v.eh.1l="S"}U(B y in v){if(v.2n(y)){if(y.L("9S")==0&&v[y]){!I(v[y].p9)?v[y].p9=v[y].62:v[y].62=v[y].p9;62[v[y].62]=y;if(v.eh.1l!="S"){if(v[y].1l=="S-2e"){bm.2X([y,v[y].62]);p7=H}F{if(v[y].1l=="S"||v[y].1l==29){p7?oZ=H:\'\'}}}gd<v[y].62?gd=v[y].62:\'\'}}}if(oZ){bm.De(E(a,b){O a[1]-b[1]});U(B i=0;i<bm.Q;i++){62[v[bm[i][0]].62]=1V;v[bm[i][0]].62=gd+1;gd++;62[v[bm[i][0]].62]=bm[i][0]}}if(v.1x.1p==1&&v.1x.dh==1){o.1x=1K("1S");o.1I.1J(o.1x);J(o.1x,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'W\':\'100%\',\'X\':\'100%\',\'4y\':\'1h 0.3s 7O-6p\',\'3T-2L\':\'1M\'})}B 6S=1K("1S");if(v.1x.1p==1&&v.1x.dh==1){o.1x.1J(6S)}F{o.1I.1J(6S)}J(6S,{\'1l\':\'1Y\',\'1b\':0,\'2K\':0,\'W\':\'100%\',\'X\':v.1x.h});6S.bJ=E(){!o.1q.2C?o.V.Fu():\'\'};if(o.uO){3k(bg.c());3k(6S)}U(B i=1;i<62.Q;i++){if(62[i]){B y=62[i];if(y){if(o.1q.2C){if(v[y].1d=="1W"&&v.VN==1&&o.1q.a3){v[y].ho=0}F{if(v[y].1d=="1W"||(v[y].1d=="2l"&&v.VP)){v[y].on=0}}}if(o.uO){v[y].on=0}if(v[y].on==1){B 1d=v[y].1d;if(1d=="2J"||1d=="1W"){b[y]=1D Cn(y,1d);b[y].2r(b[y].s("w"))}F{b[y]=1D Gm(y)}e4.2X(y);if(b[y].g("1d")=="1Q"){if(b[y].s("1C")==\'\'){if(b[y].s("B")!=\'\'){if(!I(v[b[y].s("B")])){b[y].22("2m",K)}}F{b[y].22("2m",K)}}}if(b[y].g("1d")=="4j"){B lu=b[y].s("2Z");if(lu){if(lu.L("3d:")==0&&lu.L(",0/1")>0){B z=lu.2y(",");3d(z[0].1z(4))==0?b[y].eN(0):\'\'}}}b[y].22("1A",b[y].s("1A"))}}}}if(I(v.1j)){1j=1D 8v("1j");v.1j.8Y==1?1j.1t():1j.1p()}if(I(v.1e)){1e=1D 8v("1e");if(I(o.1e)){1e.s0(o.1e);if(v.1e.kH==0||!I(v.1e.kH)){v.1e.8Y==0?1e.1p():\'\'}F{1e.1t()}}F{1e.1p(1)}}if(I(v.FE)){if(v.FE.on==1){o.3I=1D oT()}}fE();2r(H);4D();nT=K;E G9(R){B x=0;B VQ=K;if(R){if(R.g("1d")==\'2J\'){x=4N.1b+R.s("3G");if(4N.eb!=1V){}F{4N.eb=[]}}F{if(4N.eb!=1V){B bp=R.g("W")+R.s("4e")+R.s("3G");if(lr(R)){bp=0}if(R.s("3U")==1&&!R.g("1t")){bp=0}if(R.s("9Z")>0){bp=0}x=bg.g("w")-v.1x.l4*1-bp+R.g("W")/2+R.s("3G");B i=0;4N.2e-=bp;U(i=0;i<4N.eb.Q;i++){B bo=b[4N.eb[i]];if(bo.s("9Z")>0){J(bo.c(),{"1b":(bo.g("x0")-bp)})}F{J(bo.c(),{"1b":(bo.g("x")-bp)})}bo.22("x0",bo.g("x"))}4N.eb.2X(R.g("1f"));R.22(\'cZ\',1)}F{if(R.s("3U")==1&&!R.g("1t")){if(R.g("1d")=="1W"){if(R.s("1p")==1&&R.s("ho")==1&&ec){8r+=R.g("W")+R.s("3G")+R.s("4e");ec=K}}}F{if(R.s("9Z")>0){x=4N.1b+R.s("3G")+R.s("4e")}F{B 2u=K;if(R.g("1d")=="1W"){if(R.s("1p")==1&&R.s("ho")==1){if(!o.bS&&!o.8y){2u=H;ec=K}F{if(!ec){8r-=R.g("W")+R.s("3G")+R.s("4e");ec=H}}}}if(lr(R)){2u=H}if(!2u){4N.1b+=R.g("W")/2+R.s("3G");x=4N.1b;4N.1b+=R.g("W")/2+R.s("4e")}F{x=4N.1b}}}}}}O x}E nX(R){B W=o.2l&&v.1x.ha==0?o.8S:o.3n;B X=o.4h;B 9U=0;if(R!=bg){9U=W/2+R.s("3G")-R.s("4e")}B bV=X/2;B ox=R.g("W");B mU=R.g("X");B 1l=R.s("1l");if(1l.L("6u")>-1){9U=o.3n/2+R.s("3G")-R.s("4e")}if(1l.L("1h")==0){bV=mU/2+(R.s("Ga")*o.4h/100)}if(1l.L("2K")==0){bV=o.4h-(R==bg?mU:mU/2)-(R.s("Gb")*o.4h/100)}if(1l.L("2e")>-1){9U=o.3n-ox/2+R.s("3G")-R.s("4e")-(R.s("VR")*o.3n/100)}if(1l.L("1b")>-1){9U=ox/2+R.s("3G")-R.s("4e")+(R.s("ks")*o.3n/100)}if(1l=="d8"){9U=-o.t0/2+(R.s("ks")*o.t0/100)+R.s("3G")-R.s("4e");bV=-o.km/2-(R.s("Gb")*o.km/100)+(R.s("Ga")*o.km/100)}if(1l.L("S")>-1){B cx=G9(R);9U=(bg?(bg.c()?5a(bg.c().mP):0):0)+cx;if(1l=="S-2e"){9U+=8r}if(v.1x.1l=="1h"){bV=v.1x.h/2}F{bV=X-v.1x.h/2}}O{x:9U,y:bV+R.s("6Q")-R.s("9g")}}E 2r(8R){B w=o.2l&&v.1x.ha==0?o.8S:o.3n;B h=o.4h;J(bg.c(),{\'1h\':(v.1x.1l=="1h"?0:o.4h-v.1x.h)-v.gp});bg.22("y0",(o.4h-v.1x.h-v.gp));if(v.1x.ha==0&&bg){J(bg.c(),{\'W\':w,\'1b\':0,\'2x-1b\':0});bg.22("w",w);if(o.2l){J(bg.c(),{\'1b\':\'50%\',\'2x-1b\':-w/2})}}4N={"1b":v.1x.l4*1,"2e":(bg.g("w")-v.1x.l4*1)};B pc=K;if(!bg.g("1t")){bg.22("2m",H);pc=H}B 1f;U(B i=0;i<e4.Q;i++){1f=e4[i];if(b[1f]){B cc=nX(b[1f]);if(cc){b[1f].22("x0",cc.x);b[1f].22("y0",cc.y);if(b[1f].s("3U")==1&&!b[1f].g("1t")&&!8R){pk(b[1f])}F{J(b[1f].c(),{"1l":"1Y","1b":b[1f].g("x0"),"1h":b[1f].g("y0")})}}}}if(pc){bg.22("2m",K)}8r=0;U(1f in b){if(b.2n(1f)){if(b[1f].s("1l")=="S-2e"&&b[1f].g("1d")!="2J"&&8r>-1){8r=4N.2e-4N.1b}if(b[1f].g("1d")=="2J"&&bg){B c7;if(b[1f].s("Vy")==1){c7=b[1f].s("w")}F{if(b[1f].s("1l").L("S")>-1){c7=4N.2e-4N.1b-b[1f].s("3G")-b[1f].s("4e");J(b[1f].c(),{"1b":(5a(bg.c().mP)+4N.1b+b[1f].s("3G")+c7/2)});8r=-1}F{c7=bg.g("w")-b[1f].s("3G")-b[1f].s("4e");J(b[1f].c(),{"1b":(5a(bg.c().mP)+b[1f].s("3G")+c7/2)})}}b[1f].22("x0",b[1f].g("x"));b[1f].2r(c7)}}}if(1j){ir(1j)}if(I(v.1e)){ir(1e)}l6||o.2l||mv!=8r?4D():\'\'}E pk(b){B 1b=0;B 1h=0;if(b.s("1l").L("2e")>-1&&b.s("1l").L("S")==-1){1b=o.3n+b.g("W")+10}if(b.s("1l").L("1b")>-1){1b=-b.g("W")-10}if(b.s("1l").L("1h")>-1){1h=-b.g("X")*2}if(b.s("1l").L("2K")>-1||b.s("1l").L("S")>-1){1h=o.4h+b.g("X")+b.g("W")+10}if(1b>0){J(b.c(),{"1b":1b})}if(1h>0){J(b.c(),{"1h":1h})}}E ir(x){B 1h=-3S;x.il();B y=o.4h-v.1x.h*(x.s("1l").L("1h")>-1?1:2);B fW=y-(o.2l&&!o.1q.2C?(100+x.s("ma")*1):x.s("ma"));fW<100?fW=100:\'\';J(x.c(),{\'5N-X\':fW});x.co()?J(x.co(),{\'5N-X\':fW}):\'\';if(x.g("1t")){1h=o.4h/2-x.g("X")/2+x.s("6Q")-x.s("9g");if(x.s("1l").L("1h")>-1){1h=x.s("6Q")-x.s("9g")}if(x.s("1l").L("2K")>-1){1h=o.4h-v.1x.h-x.g("X")+x.s("6Q")-x.s("9g")}1h<0?1h=0:\'\'}if(x.s("1l").L("2e")>-1){J(x.c(),{"1l":"1Y","2e":x.s("4e")-x.s("lS"),"1h":1h})}F if(x.s("1l").L("1b")>-1){J(x.c(),{"1l":"1Y","1b":x.s("3G"),"1h":1h})}F{if(x.g("1f")=="1e"&&x.s("3O")==1){J(x.c(),{"1l":"1Y","1b":o.3n/2-x.g("W")/2+x.s("3G")/2-x.s("4e")/2,"1h":1h})}F{J(x.c(),{"1l":"1Y","1b":o.3n/2-x.g("W")/2+x.s("3G")-x.s("4e"),"1h":1h})}}x.9j()};G.dV=E(1f){B R=b[1f];B 1d=R.g("1d");if(1d){B d=1D 7y();o.a9=d.bi();if(1d&&1d!=""){4Q(R)}}};G.rM=E(z,x,y){U(B 1f in b){if(b.2n(1f)){if(b[1f].s(z)==x){b[1f].22(y?"6l":"3k")}}}};G.nL=E(x,s){B y;U(B 1f in b){if(b.2n(1f)){if(b[1f].s(s)==x){y=b[1f]}}}O y};E 4Q(R,1F){o.mH=H;kX=R;B a=R.g("1d");if(a=="1R"){o.V.2H();if(v.1Z.on==1&&v.1Z.2A==1&&v.1Z.po==1){6O(\'1R\',1)}}F{if(a=="5j"){o.V.2P();if(v.1Z.on==1&&v.1Z.2A==1&&v.1Z.po==1){6O(\'1R\',0)}}if(a=="2u"){o.V.pj()}}if(a=="Gf"){o.V.3X(0,K)}if(a=="2l"){!o.5Q?o.V.7o():\'\'}F{if(a=="nZ"){o.V.7T()}}if(a=="2J"){B ld=o.P.1n();B lt=R.g("2B")*ld;if(v.4o>0){ld-=v.4o;lt=R.g("2B")*ld+v.4o}if(v.G7>0){if(v.G7/ld<=1-R.g("2B")){O}}o.V.3X(lt,H);if(o.3r){o.3r.pB(lt,ld);o.2E>0?o.2E=29:\'\'}}if(a=="1W"){B x=R.g("2B");x<0.Vx?x=0:\'\';x>1?x=1:\'\';if(o.53&&v.rO==1){3j.7n("rr",x);if(R.g("2B")>0||o.1q.9f||v.lJ==0){3j.nw("ip")}F{3j.7n("ip",1)}}o.V.42(x)}if(a=="5u"){if(o.53&&!o.1q.9f&&v.lJ==1){3j.7n("ip",1)}o.V.5c();if(v.1Z.2A==1&&v.1Z.FZ==1){6O(\'5u\',0)}}F{if(a=="bb"){if(o.53){3j.nw("ip")}o.V.6Y();if(v.1Z.2A==1&&v.1Z.FZ==1){6O(\'5u\',1)}}}if(a.L("1a")==0){R.Vg()?R.ih():R.On()}if(a=="d6"){o.P.o4()}if(a=="1A+"){o.P.ar(0.1)}if(a=="1A-"){o.P.ar(-0.1)}if(a=="1A"){o.P.ar(0)}if(a=="7N"){3d("FW");R.22("py",1);R.22("jM",1)}if(a=="3I"){js("3I");nG()}if(a=="1j"){if(1j){if(!1j.g("1t")){1j.1t()}F{1j.1p()}}}if(a=="1e"){if(o.es==a){O}if(I(v.1e)){if(1e.g("1t")){1e.1p()}F{1O(E(){1e.1t()},100)}}}if(a=="9V"){o.S.dL()}if(a=="ep"){o.S.hi()}if(a=="4j"){if(R.s("fe")==1&&R.s("2Z")!=""){B x=4v(R.s("2Z"));if(o.es==a+x){O}if(x.L(\'{1a}\')>-1){x=x.26(\'{1a}\',(I(o.3r)?o.3r.9v().t:o.P.1a()))}if(x.L(\'{3o}\')>-1){x=x.26(\'{3o}\',o.P.bA())}if(x.L(\'{1Q}\')>-1){x=x.26(\'{1Q}\',v.1Q.26(/,/ig," "))}if(x=="5e"){o.P.dq()}if(x=="Vf"){o.V.3X(R.s("ks")*o.P.1n()/100);!o.1R?o.V.2H():\'\'}R.s("G0")==1?o.V.2P():\'\';B y=x.2y(",");if(x.L("3d:")==0){B z=x.1z(4).2y(";");U(B i=0;i<z.Q;i++){y=z[i].2y(",");if(y.Q>1){if(y[0]==\'4l\'){if(v.1Z.2A==1&&v.1Z.oU==1){6O(\'4l\',y[1]>0?1:0)}}3d(y[0],y[1],R);y[1]==\'0/1\'?nK():\'\'}F{if(y[0]=="G1"&&v.Vh==1){B ss=3d(y[0]);if(ss){if(ss.L("1H")>-1){B 3Z=1G.1K(\'3Z\');3Z.5B(\'3b\',ss);J(3Z,{1l:"nJ",2e:(I(v.kS)?v.kS:20),2K:(I(v.kS)?v.kS:20),W:0,4y:"W 0.5s as-Vi(.75,-0.5,0,1.75)"});3Z.C.4J=G3;1G.7z.1J(3Z);1O(E(){J(3Z,{W:(I(v.G2)?v.G2:4Y)})},1);3Z.bJ=E(){G.4Z.2T(G)}}}F{1v(y[0]+" 1N")}}F{3d(y[0])}}}}F{if(x.L("js:")==0){if(x.L("(")>0&&x.L(")")>0){2o(x.1z(3))}F{2o(y[0].1z(3)+\'(\'+(I(y[1])?\'"\'+y[1]+\'"\':\'\')+(I(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}}if(x.L("3e")==0||x.L("/")==0||x.L("?")==0||x.L("1g:")==0){x.L("1g:")==0?x=x.1z(4):\'\';2a.5G(x,R.s("Ft"))}if(x.L("6L")==0){o.V.rj()}if(x=="3d:8m"){o.P.cH()}}if(x.L("1j#")>-1){if(1j){B si=x.1z(9).2y(",");if(1j.g("1t")&&1j.g("5G")==si[0]){1j.1p()}F{U(B i=0;i<si.Q;i++){i==0?1j.1t():\'\';1j.5G(si[i])}}}}if(x.L("1j:")>-1&&v.1j.Vj==1){if(!o.5k){o.5k=1D Ve()}if(1F=="7Q"){o.5k.1t(x)}F{o.5k.tO(x)}}}}};G.1Q=E(t){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="1Q"){if(b[x].s("B")==t||t=="1Q"){if(v[t]!=\'\'||b[x].s("1o")!=\'\'){b[x].22("2m",H)}F{b[x].22("2m",K)}b[x].6n(v[t])}}}}nC()};G.EV=E(){nC()};G.ES=E(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="4j"){if(b[x].s("1F")=="1C"){b[x].8G()}}}}};E nC(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="4j"){if(b[x].s("1F")=="1C"){b[x].Br(H)}}}}}E nG(){if(I(o.3I)){o.3I.rv()}}G.F1=E(){nG()};G.zA=E(){if(v.1Q!=\'\'){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="1Q"){B y=K;if(!b[x].g("1t")){y=H;b[x].22("2m",H)}b[x].6n(v.1Q);if(y){b[x].22("2m",K)}}}}}};G.Vd=E(y,z){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="4j"&&b[x].s("1F")=="1C"){if(b[x].s("4c")==y){if(!b[x].g("1t")){b[x].22("2m",H)}b[x].6n(z)}}}}};G.4R=E(){2r()};G.V9=E(){2r(H)};G.rz=E(){ir(1j)};G.il=E(){ir(1e)};G.2H=E(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="1R"){b[x].On()}}}if(G.da()&&v.1e.eJ==1){G.b8()}o.1R=H;4D()};G.2P=E(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="5j"||b[x].g("1d")=="2u"){b[x].ih()}}}if(1e){if(v.1e.GT==1&&!1e.5p()){1e.1t()}}o.1R=K;4D();if(v.1x.1p==1&&v.1x.ej==1){gB(H)}};G.5c=E(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="5u"){b[x].On()}G.42(0)}}4D()};G.6Y=E(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="bb"){b[x].ih()}}}if(v.1W<0.1){v.1W=0.5;o.V.42(v.1W)}F{G.42(v.1W)}4D()};G.42=E(1W,y){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="1W"){b[x].7j(1W,1,(y=="no"?y:H))}if(b[x].g("1d")=="5u"){b[x].BQ(1W)}}}4D()};G.7o=E(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="2l"){b[x].On();b[x].22("1A",b[x].s("1A"))}}}4D();l6?1O(4D,4i):\'\';e3()};G.7T=E(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="nZ"){b[x].ih()}}}2r();4t(o.gy);4D()};G.8s=E(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="1R"){b[x].nt()}}}};G.FT=E(){4D()};E 4D(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")!="e6"){bf(b[x])}}}bf(bg);if(mv!=8r){mv=8r;2r()}if(v.1x.1p==1&&v.1x.dh==1){ee(!o.ei&&!o.5J&&!o.2l&&o.1R&&v.1x.ef!=1&&!o.5Q)}};E j2(){B 1t=9e&&v.1x.fy==1;if(!o.1R&&v.1x.1p==1&&v.1x.ej==1){1t=K}if(1t){U(B x in b){if(b.2n(x)){if(b[x].g("1d")!="e6"){bf(b[x],K)}}}J(o.1I,{"5Y":"7b"});o.mX=H;bf(bg,K);if(bg.g("1t")){fr()}ee(K)}}E gB(){B 1p=o.1R&&v.1x.fy==1&&!o.3x&&!o.cO;if(!o.1R&&v.1x.1p==1&&v.1x.ej==1){1p=H}if(1j){if(1j.g("1t")&&o.rD){1p=K}}if(1p){U(B x in b){if(b.2n(x)){if(b[x].g("1d")!="e6"){bf(b[x],H)}}}bf(bg,H);if(!bg.g("1t")){9e=H;o.P.nV();if(o.1R){J(o.1I,{"5Y":"1M"});o.mX=K}}ee(H)}}E e3(){if(v.1x.fy==1){if(v.1x.ef==1&&!o.2l&&!o.bt){}F{4t(o.gy);o.gy=7i(gB,((v.1x.8t>0?v.1x.8t:v.1x.i5)*2M))}}}E bf(R,c9){B 1p=K;B 1t=K;B bZ=K;if(v.1x.1p==1){if(!o.ei&&!o.5J&&!o.2l&&o.1R&&v.1x.ef!=1&&!o.5Q){1p=H;1t=K;bZ=H}F{1p=K;1t=H}if(I(c9)&&!o.5Q){1p=c9;1t=!1p}if(v.1x.1p==1&&v.1x.dh==1&&(R.s("1l").L("S")==0||R.s("1d")=="2J")){1p=K;1t=H}if(v.1x.ej==1&&!o.1R){1p=H;1t=K;bZ=K}}F{if(R.s("1p")!=1){1t=H}}if(1t&&!o.mX){J(o.1I,{"5Y":"7b"});o.mX=H}if(R.s("1d")=="4j"&&R.s("1l").L("S")==-1){1p=K;1t=H}if(o.5Q){if(R.s("1d")=="2J"){if(o.P.1n()==-1){1p=H;1t=K}}}B nR=K;B hp=lr(R);if(R.s("1p")==1){if(R.s("V8")==1){if(bZ||c9||(o.1R&&!o.5J)){!bZ&&!c9?\'\':hp=H}}if(R.s("Va")==1){if(o.1R&&!o.5J){hp=H}}if(R.s("EN")==1||R.s("EJ")==1||R.s("Fj")==1){l6=H}}if(hp){1p=H;1t=K}F{!1p?1t=H:\'\'}if(R.s("1d")=="1W"){if(R.s("1p")==1&&R.s("ho")==1){1p=H;1t=K;if(!bZ&&(o.8y||o.bS)&&!c9&&R.s("cQ")!=1){1p=K;1t=H}F{nR=H}}}if(o.de||(!o.1E&&v.1x.1p==1&&v.1x.oh==1)||(!o.b4&&v.1x.1p==1&&v.1x.Fi==1)){if(R.s("1l").L("S")>-1||R.s("1l").L("2K")>-1){1p=H;1t=K}if(v.1x.ef==1&&!o.2l){1p=K;1t=H}}if(1j){if(1j.g("1t")&&v.1j.8Y!=1){bZ=K;c9=K}}if(R.g("1d")=="3I"){if(I(o.3I)){if(o.3I.5p()){1p=H;1t=K;R.22("5M","1M")}}}if(R.g("1d")=="1e"||R.g("1d")=="9V"||R.g("1d")=="ep"||R.s("EG")==1){if(1e.5p()&&R.s("EG")!=0){1p=H;1t=K;R.22("5M","1M")}}if(o.Vb==1){1p=H;1t=K}if(nR){B cc=nX(R);if(cc){cc.y>0?R.22("y0",cc.y):\'\';J(R.c(),{"1l":"1Y","1h":R.g("y0")})}}if(1p){aF(R,(nT?H:K))}if(1t){F7(R)}if(R==bg){if(!1p&&1t){fr();6l(6S);9e=K}if(1p&&!1t){o.P.nV();cG();3k(6S);9e=H}if(1e){if(v.1e.8Y==1&&!1e.5p()){if(1t||o.de){if(v.1e.ED==1&&o.2l){}F{if(!1e.g("1t")){if(v.1e.EE==1){!o.1R?1e.1t():\'\'}F{1e.1t()}}}}F{if(1p&&1e.g("1t")){1e.1p()}}}}}};E lr(R){B x=K;if(R.s("1p")==1){if(R.s("BL")==1){o.1R?x=H:\'\'}if(R.s("ej")==1){!o.1R?x=H:\'\'}if(R.s("Vc")==1){o.1q.nO?x=H:\'\'}if(R.s("Vk")==1){o.1q.2C?x=H:\'\'}if(R.s("EJ")==1){if(o.3n>R.s("EO")){R.22("cQ",1);x=H}F{R.22("cQ",0)}}if(R.s("EN")==1){if(o.3n<=R.s("EM")){R.22("cQ",1);x=H}F{R.22("cQ",0)}}if(R.s("Vl")==1){o.1E?x=H:\'\'}if(R.s("Vt")==1){if(o.1E||!o.3r||o.P.5V()){x=H}if(o.3r){if(o.3r.9v().t==0){x=H}}}if(R.s("oh")==1){!o.1E?x=H:\'\'}if(R.s("Vu")==1){if(I(R.s("F2"))){3w[R.s("F2")]?x=H:\'\'}}if(R.s("Vv")==1&&o.1q.5C){!o.1E||o.nm?x=H:\'\'}if(R.s("Vw")==1){!o.P.a5()?x=H:\'\'}if(R.s("Vs")==1){!o.P.5V()?x=H:\'\'}if(R.s("Vr")==1){!o.5J?x=H:\'\'}if(R.s("Vn")==1){!o.2l?x=H:\'\'}if(R.s("Fj")==1){o.2l?x=H:\'\'}if(R.s("Vm")==1){!o.3Y?x=H:\'\'}if(R.s("Vo")==1){o.P.5V()&&o.P.bA().L("?tz")==-1?x=H:\'\'}if(R.s("Cg")==1){6i(o.1U)?x=H:\'\'}if(R.s("Fi")==1){!o.b4?x=H:\'\'}if(R.s("Vp")==1){o.b4?x=H:\'\'}if(R.s("Vq")==1){o.lB?x=H:\'\'}if(R.s("XI")==1){!o.lB?x=H:\'\'}if(R.s("BM")==1){if(R.g("hZ")){x=H}}if(R.s("XJ")==1){!o.ab?x=H:\'\'}if(R.s("10f")==1){o.ab?x=H:\'\'}if(R.s("10e")==1){if(v.4g==1&&v.ci==1){if(o.2D=="4d"&&!I(v.1U)&&v.pE==0){if(!o.1E||o.P.5I()=="a5"){if(v.1U==\'\'){}F{x=H}}}}}}if(R.g("1d")=="4j"){if(R.s("2Z")){if(R.s("2Z")=="3d:5e"||R.s("2Z")=="5e"){if(!o.5e&&!o.f1){x=H}}if(R.s("2Z")=="3d:8m"){if(!o.8m||(!o.1E&&v.4g==0)){x=H}}if(R.s("2Z")=="3d:Fg"){if(!o.lB){x=H}}if(R.s("2Z").L("6f")>-1){if(!o.6f){x=H}}}}if(R.g("1d")=="1e"||R.g("1d")=="9V"||R.g("1d")=="ep"){if(1e.5p()){x=H}}if(R.g("1d")=="1j"){if(1j.5p()){x=H;R.22("5M","1M")}}if(R.g("1F")=="1C"){if(R.g("Q")==0){x=H}}if(R.g("1j#")){if(!R.g("22#47")){x=H}}if(R.s("4T")==1){B cb=1G.8g("10g"+v.id);if((o.P.1n()==0&&o.P.1a()==0)||!o.5L||!6i(cb)||!o.10h){x=H}}if(R.g("1d")=="1n"){if(o.P.5V()){x=H}}if(R.g("1f")=="q5"&&o.1q.2C){if(o.de&&o.1q.a3){x=H}}O x}E aF(R,pT){if(R.g("1t")){if(o.bt||R.s("5M")=="1M"||pT){R.22("2m",K)}F{F6(R)}R.22("1t",K)}};E F7(R){if(!R.g("1t")){if(R.s("5M")=="1M"||o.bt){R.22("2m",H);if(o.bt){R.22("1r",1)}if(R.g("1d")=="1W"){if(o.hn){pk(R)}}}F{F4(R)}if(R.s("1d")=="1W"){o.S.42(o.3Y?0:v.1W)}if(R.s("1d")=="2J"){o.V.pZ()}R.22("1t",H)}};E F6(R){pX(R.g("1f"));B 5m="hf|";B 5h="0|";B 1p=1;B a=R.s("5M");B p=R.s("1l");if(a=="1A"){5m+="1A|";5h+="0|"}if(a=="1l"){if(p.L("2e")>-1&&p.L("S")==-1){5m+="x|";5h+=5a(o.3n+R.g("W"))+"|"}if(p.L("1b")>-1){5m+="x|";5h+=5a(-R.g("W"))+"|"}if(p.L("1h")>-1){5m+="y|";5h+="0|"+(-R.g("X"))+"|"}if(p.L("2K")>-1||p.L("S")>-1||p=="d8"){5m+="y|";if(R.g("1d")=="2J"||R.g("1d")=="1W"){5h+=5a(o.4h+R.s("h")+(R.s("h")<20?20-R.s("h"):0))+"|"}F{5h+=5a(o.4h+R.g("X"))+"|"}}if(p=="6u"){5m+="1A|";5h+="0|"}}B m=1D 5v({"mc":R,"me":R.g("1f"),"1F":5m.1z(0,5m.Q-1),"to":5h.1z(0,5h.Q-1),"1p":1p})};E F4(R){pX(R.g("1f"));B 5m="";B 5h="";B a=R.s("5M");B p=R.s("1l");if(R.g("1r")!=1){5m="hf|";5h=(R.g("1f")==\'bg\'?v.1x.a:"1")+"|"}if(a=="1A"){if(R.g("3p")!=R.s("1A")){R.22("1A",0);5m+="1A|";5h+=R.s("1A")+"|"}}if(a=="1l"){if(p=="6u"){if(R.g("3p")!=R.s("1A")){5m+="1A|";5h+=R.s("1A")+"|"}}F{if(p.L("S")>-1){if(R.g("y")!=R.g("y0")){5m+="y|";5h+=R.g("y0")+"|"}}F{5m+="x|y|";5h+=R.g("x0")+"|"+R.g("y0")+"|"}}}if(5m!=""&&5h!=""){B m=1D 5v({mc:R,me:R.g("1f"),1F:5m.1z(0,5m.Q-1),to:5h.1z(0,5h.Q-1),1t:1})}F{R.22("2m",H)}};G.hW=E(1f,1F,pT){B 4R=K;B 2u=K;B R=b[1f];B 1d=R.g("1d");B 2Z=R.s("2Z");if(1F=="7Q"){if(o.hn){if(1d=="1W"||1d=="5u"||1d=="bb"){o.8y=H;o.bS=H;4R=H;4D();if(v.eh.F5==1){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="2J"){3k(b[x].c())}}}}}}if((v.1j.gF==1&&(1d=="1j"||2Z.L("F9")==0))||2Z.L("1j:")==0){3q(o.eg);if(!1j.g("1t")||kX!=R){4Q(R,1F);o.es=1d+2Z;1O(E(){o.es=1V},4i)}}if(v.1e.gF==1&&1d=="1e"){3q(o.pO);if(!1e.g("1t")||kX!=R){4Q(R,1F);o.es=1d;1O(E(){o.es=1V},4i)}}}if(1F=="6p"){if(o.hn){if(1d=="1W"||1d=="5u"||1d=="bb"){o.8y=K;o.bS=H;1O(E(){if(!o.8y){o.bS=K;U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="1W"){aF(b[x]);2r()}if(b[x].g("1d")=="2J"){if(v.eh.F5==1){6l(b[x].c())}}}}}},4i)}}if((v.1j.gF==1&&(1d=="1j"||2Z.L("F9")==0))||2Z.L("1j:")==0){3q(o.eg);o.eg=1O(E(){if(!o.3x){cG(1)}},(v.1j.eA>0?v.1j.eA*2M:2M))}if(v.1e.gF==1&&1d=="1e"){3q(o.pO);o.pO=1O(E(){if(!o.3x){1e.g("1t")?1e.1p(1):\'\'}},(v.1e.eA>0?v.1e.eA*2M:2M))}}if(4R){1O(2r,10)}};G.jp=E(){if(o.4O&&!o.2l){o.V.4O(K);o.4O=K}if(o.1U){if(v.kL>-1&&6i(o.1U)){J(o.1U,{1r:v.kN})}}if(o.1R&&v.Fd==1){o.V.2P()}if(v.1x.8t>0){3q(o.Fe);o.Fe=1O(4D,v.1x.8t*2M)}F{4D()}};G.Gi=E(){if(o.1U){if(v.kL>-1&&6i(o.1U)){J(o.1U,{1r:v.kL})}}if(!o.1R&&v.Fd==1){o.V.2H()}4D();ee(K)};G.eU=E(9J,9I){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="2J"||b[x].g("1d")=="1W"){b[x].eU(9J,9I)}}}};G.o6=E(){if(v.1x.1p==1){if(v.1x.ef==1&&!o.2l){O}if(!o.5J&&o.P.5I()=="6e"){o.5J=H;4D()}if(v.1x.fy==1){j2();e3()}ee(K)}};G.fm=E(9J,9I){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="2J"||b[x].g("1d")=="1W"){b[x].fm(9J,9I)}}}};G.fL=E(1a,1n){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="2J"){b[x].7j(1a,1n)}if(b[x].g("1d")=="1a"){nd(b[x],1a,1n)}if(b[x].s("H8")==1){b[x].o4()}}}};E ee(x){if(v.1x.1p==1){x?cG():\'\';if(v.1x.dh==1){if(!o.1R&&v.1x.ej==1){x=H}if(x&&!o.oC){J(o.1x,{"1h":bg.h()})}if(!x&&o.oC){J(o.1x,{"1h":0})}o.oC=x}}}E fr(){9e=K;o.P.fr();if(o.ou){o.ou=K;2r();1O(2r,d0)}}E nd(x,1a,1n){if(v.4o>0){1a-=v.4o;1n-=v.4o}B y=4F(1a);if(x.s("H4")=="1"){y=4F(1n-1a)}if(x.s("10i")=="1"){if(x.s("10d")=="1"){y=y+(1n>0?\' \'+2I(x.s("10c"))+\' \'+4F(1n):\'\')}F{1a==0?y=4F(1n):\'\'}}x.6n(y)}G.oK=E(1a,1n){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="2J"){b[x].Bb(1a,1n)}}}};G.9n=E(){if(v.mC==1){3q(lf);lf=1O(9n,4i)}F{9n()}};E 9n(){if(!a2){js("ZY");U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="e6"){b[x].Cf();a2=H}}}}}G.Hm=E(y){U(B x in b){if(x==y){b[x].22("3k")}}};G.6V=E(1a,1n){3q(lf);if(a2){js("8o");U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="e6"){b[x].hV();a2=K}}}}};G.gV=E(){U(B x in b){if(b.2n(x)){if(b[x].s("2Z")=="1W 9h"){b[x].22("6l");b[x].6n(2I(\'1W\')+\' \'+(o.3Y?0:2N.jB(v.1W*100))+\'%\');3q(o.gV);o.gV=1O(Hx,2M)}}}};E Hx(){U(B x in b){if(b.2n(x)){if(b[x].s("2Z")=="1W 9h"){b[x].6n(\'\');b[x].22("3k");3q(o.gV)}}}}G.3X=E(1a,1n){if(v.4o>0){1a-=v.4o;1n-=v.4o}U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="2J"){1n>0?b[x].22("2B",1a/1n):\'\';b[x].Ba()}if(b[x].g("1d")=="1a"){nd(b[x],1a,1n)}if(b[x].g("1d")=="7N"){b[x].22("py",0.5);b[x].22("jM",0)}}}};G.4s=E(1a,1n){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="1n"){if(v.4o>0){1n-=v.4o}b[x].6n(4F(1n))}if(b[x].g("1d")=="2J"){b[x].7j(1a,1n);b[x].dn(1n)}if(b[x].g("1d")=="1a"){nd(b[x],1a,1n)}}}};G.8v=E(){1j.g("1t")?1j.1p():1j.1t()};G.bn=E(){if(1j){O 1j.g("1t")?H:K}F{O K}};G.oo=E(){if(1j){1j.ar()}};G.cG=E(){cG()};G.Hp=E(x){if(1j){1j.DJ(x)}};G.vZ=E(){if(1j){1j.it()}};G.vC=E(x){if(1j){O 1j.Dj(x)}};E cG(x){if(1j){1j.g("1t")?1j.1p(x):\'\'}o.5k?o.5k.1p():\'\'};G.b8=E(){if(1e){if(1e.g("1t")){1e.1p(1)}F{1e.1t()}}};G.mY=E(){if(1e){1O(E(){1e.1t()},100)}};G.da=E(){if(1e){O 1e.g("1t")?H:K}F{O K}};G.fk=E(x){O 1e?1e.g(x):\'\'};G.5W=E(x){if(1e){1e.s0(x)}};G.dL=E(){if(1e){1e.dL()}};G.n4=E(){if(1e){1e.n4()}};G.fE=E(){fE()};E fE(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="9V"){J(b[x].c(),{"1r":(!1e.fi()?0.5:1)})}if(b[x].g("1d")=="ep"){J(b[x].c(),{"1r":(!1e.s5()?0.5:1)})}}}}G.fi=E(){if(1e){O 1e.fi()}F{O K}};G.mr=E(){if(1e){O 1e.mr()}F{O K}};G.mk=E(){if(1e){1e.mk()}};G.hi=E(){if(1e){1e.hi()}};G.Hc=E(x){if(x&&1e){1e.hQ(x)}};G.Hf=E(x){if(x&&1e){1e.mW(x)}};G.Hj=E(x){if(x&&1e){J(1e.co(),{"ZX":"1M"});1G.8g(x).1J(1e.co());3k(1e.c())}};G.ZZ=E(){};G.ow=E(x){if(1j){1j.5H();1j.g("1t")?1O(E(){1j.1p()},4Y):\'\'}};G.d9=E(x){if(1j){1j.5H()}if(o.5k){o.5k.gH()}};G.h6=E(x){if(1j){1j.dq()}2r();4D()};G.n3=E(x){if(1j){1j.hP(x);1j.g("1t")?1j.1p():\'\'}if(o.5k){o.5k.gH()}};G.mZ=E(x){if(1j){1j.hP("6I")}if(o.5k){o.5k.gH()}};G.b9=E(){if(1j){1j.9D();1j.g("1t")?1O(E(){1j.1p()},4Y):\'\'}if(o.5k){o.5k.gH()}};G.gG=E(ng,2m,gM){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="1j"){if(b[x].s("ex")==1){b[x].Cr()}}if(b[x].g("an")=="1j#"+ng){b[x].22("22#47",2m);if(b[x].g("1F")=="1C"){if(gM){b[x].6n(gM)}}F{if(v.1j[\'1j\'+ng+\'1d\']=="2z"){if(gM==2I("8w")){b[x].eN(0)}F{b[x].eN(1)}}2r()}bf(b[x])}}}};G.Hq=E(){if(1j){1j.5H();1j.hP("6I");1j.hP("6L")}};G.gc=E(){U(B x in b){if(b.2n(x)){if(b[x].g("1d")=="2J"){b[x].gc()}}}};G.4R=E(){2r();if(9e){o.ou=H}};G.nP=E(x){if(!9e||x==1){2r();4D()}F{v.1x.oL=H}};G.4P=E(){4D();2r();4D();if(o.de){3k(6S)}F{!9e?6l(6S):\'\'}};G.Fs=E(1c){if(i0==v.id&&v.1Z.on==1){B x=1c.Gz;if(x==29){x=1c.GE}if(I(o.2i)||I(o.7A)||o.10a==1){O K}if(((v.1Z.7I==1&&x==32)||(v.1Z.10b==1&&x==13))&&(o.5R||o.5J)){if(v.1Z.2A==1){6O(\'1R\',o.1R?0:1)}o.V.dl();1c.a7();O K}!v.1Z.mF?v.1Z.mF=0.2:\'\';!v.1Z.1A?v.1Z.1A=5:\'\';if(v.1Z.Hb==1&&o.5R){if(o.P.1n()>0){U(B i=48;i<58;i++){if(x==i){o.V.3X((o.P.1n()*(x-48)*10)/100,H)}}}}if(x==39&&o.5R){mS(v.1Z.oQ)}if(x==37&&o.5R){kJ(v.1Z.oQ)}if(x==38&&o.5R){mS(v.1Z.oS)}if(x==40&&o.5R){kJ(v.1Z.oS)}if(x==H9&&o.5R){mS(v.1Z.GC)}if(x==10j&&o.5R){kJ(v.1Z.GC)}}};E mS(x){if(x=="4l"){if(o.P.1n()>0){if(o.P.1a()+51(v.1Z.4l)<o.P.1n()){o.V.3X(o.P.1a()+51(v.1Z.4l),H)}}}if(x=="1W"){o.V.42(51(v.1W)+51(v.1Z.mF));1c.a7()}if(x=="1A"){o.P.1A(v.1Z.1A/100);1c.a7()}if(v.1Z.2A==1){6O(x,1)}}E kJ(x){if(x=="4l"){if(o.P.1n()>0&&o.1E){o.V.3X((o.P.1a()-v.1Z.4l>=0?o.P.1a()-v.1Z.4l:0),H)}}if(x=="1W"){o.V.42(51(v.1W)-51(v.1Z.mF));1c.a7()}if(x=="1A"){o.P.1A(-v.1Z.1A/100);1c.a7()}if(v.1Z.2A==1){6O(x,0)}};G.FF=E(1c){if(i0==v.id){B x=1c.Gz;if(x==29){x=1c.GE}if(x==57){if(v.1v==1){}}if(o.2l&&x==27){o.V.7T()}if(I(o.2i)||I(o.7A)){O K}if(v.1Z.f==1&&x==70&&v.mC!=1&&(o.5R||o.5J)){if(v.1Z.2A==1){6O(\'2l\',o.2l?0:1)}o.2l?o.V.7T():o.V.7o()}if(v.1Z.m==1&&x==77&&(o.5R||o.5J)){if(v.1Z.2A==1){6O(\'5u\',o.3Y?1:0)}o.3Y?o.V.6Y():o.V.5c()}}};G.4C=E(){4t(o.gy);U(B x in o){if(x.L("Y")==0&&x.L("xi")>-1){4t(o[x])}}U(B i=0;i<e4.Q;i++){1f=e4[i];if(b[1f]){b[1f].4C()}}if(1j){1j.4C()}if(1e){1e.4C()}bg.4C();if(6S.4Z==o.1I){o.1I.2T(6S)}F{o.1x?o.1x.2T(6S):\'\'}};G.j2=E(){j2()};G.gB=E(){gB();4D()};G.e3=E(){e3()};G.lL=E(){O 9e}};B Gm=E(1f){B i;B C=[];B w;B h;B ns=0;B bg;B kw;B 7l;B la=0;B 47=H;B BI=K;B 3p=1;B 3f=1;B 2j;B 8A;B 3F;B 8l;B 1d;B an=\'\';B x0;B y0;B on;B 7Q=K;B bl=K;B cL=0;B 10k;B 10s=0;B cZ=0;B GN=0;B ia=0;B ky=K;B hZ=K;B ex;B jT;B nx=K;C=9l(C,ew.R);C=9l(C,v[1f]);B V=[C.1d];1d=V[0];I(C.Gu)?V[1]=C.Gu:\'\';I(C.Gt)?V[1]=C.Gt:\'\';I(C.1Q)?C.1C=C.1Q:\'\';if(I(C.oN)){C.oN!=-1&&o.3n<cT?C.1A=C.oN:\'\'}if(I(C.2Z)){if(C.1F=="1C"&&C.2Z!=\'\'){if(I(v[C.2Z+\'1C\'])){C.1C=v[C.2Z+\'1C\']}}if(C.2Z.L("1j#")==0){an=C.2Z;if(C.3F==\'\'&&an.L(",")==-1){C.3F=2I(v.1j[\'1j\'+an.1z(9)+\'1d\'])}}if(C.2Z.L("6f")>0){v.H2=H}if(C.2Z=="10t"){C.10u=1D 10v(C)}}B aX=C.3F?C.3F.2y("///"):[];B oB=0;B 2A=1D 9i();B 1o=1D 9i();B cJ=1D 9i();B 10r=1D 9i();B i7=0;B 9Y;if(C.1F=="1C"){if(I(C.1C)){2A[0]=4v(C.1C);C.k7=C.1C.Q;if(C.1C.L("/")==0){C.Bw=1}if(C.1C.L("|")==0){C.By=1}if(C.1C.L("-")==0){C.Bt=1}if(1d=="1a"||1d=="1n"){if(C.1C.L(\'0:\')==0){C.nM=H}if(C.1C.2y(":").Q==3){C.Bs=H}F{if(C.1C.L(\'aR:aR\')>-1){C.Bx=H}}}if(C.H4==1&&C.1C.L("-")==0){C.Bv=1}if(C.1C.L("///")>0&&1d=="4j"){C.er=C.1C.2y("///");C.1C=2A[0]=C.er[0]}}if(v.p5==1){1O(8G,100);1O(8G,4i);1O(8G,2M)}}F{if(I(C.1o)){2A[0]=C.1o;if(2A[0].L("///")>0&&2A[0].L("h4")==-1){2A=C.1o.2y("///")}if(I(C.jK)){2A[1]=C.jK}if(C.mM==1){if(I(C.p1)){if(C.p1!=\'\'){2A.2X(C.p1);i7=2A.Q-1}}}}}if(1d=="4j"){if(C.10q==1&&I(C.BJ)){C.q6=C.2Z}}B Y=1K("1S");if(C.1l==\'d8\'){o.d8.1J(Y)}F{if(C.1l.L(\'S\')>-1&&v.1x.1p==1&&v.1x.dh==1){o.1x.1J(Y)}F{o.1I.1J(Y)}}B kw=1K("1S");Y.1J(kw);J(Y,{"1l":"1Y","1b":0,"1h":0,"1r":1,"f7":"gS","uw":"he"});if(I(C.4c)){if(C.4c!=\'\'){4L(Y,{"id":(v.id+"eC"+C.4c)})}F{}}if(C.H8==1){J(Y,{"4y":"2G 0.2s 2R"})}if(2A.Q>0){U(i=0;i<2A.Q;i++){1o[i]=1K("1S");J(1o[i],{"1l":"1Y","1h":0,"1b":0,"7c":"1M","1r":C.a,"4y":"1r 0.1s 2R,2G 0.1s 2R"});if(C.1F=="e7"&&C.3b!=\'\'){if(C.3b.L(".uR")>-1||C.3b.L(".je")>-1||C.3b.L("h4")>-1){C.3b.L("//")==-1&&C.3b.L("h4")==-1?C.3b=\'//\'+C.3b:\'\';B z=1K("3Z");C.jv=1;z.1u("e0",pH);z.3b=C.3b;1o[i].1J(z);C.w=1o[i].2b;C.h=1o[i].2Q;if(I(C.4c)){if(C.4c!=\'\'){4L(1o[i],{"id":(v.id+"eC"+C.4c+"GO")})}}}}if(C.1F=="1C"){J(1o[i],{"1y":(C.1y),"f7":C.aC,"uu":C.43,"fb-cR":C.gi+\'px\',"2U":"0 eG 0 eG","8F-7I":"aZ"});if(C.2B==1){if(C.1C.L("<a ")>-1||1f=="b3"){J(1o[i],{"7c":"2F"})}}if(C.H5==1){J(1o[i],{"43-gN":"H5"})}2A[i]==\'7N\'?2A[i]=2I("7N"):\'\';1o[i].1X=tR(2A[i]);1O(o0,100);C.w=1o[i].2b;C.h=1o[i].2Q;if(I(C.4c)){if(C.4c!=\'\'){4L(1o[i],{"id":(v.id+"eC"+C.4c+"10m")})}}}if(C.1F=="J"){GQ(2A[i],C.1y,1o[i])}B aN=2A[i].6x();B kj=aN.L(\'<2k\')>-1||aN.L(\'<10l\')>-1;if(C.1F=="2k"&&(aN.L(\'<g>\')>-1||kj)){if(1d=="5u"||1d=="4j"){aN=aN.26(/jl/g,\'jl\'+v.id+1f)}if(aN.L(\'3T\')>-1){aQ(1o[i])}1o[i].1X=(!kj?"<2k W=\'20\' X=\'20\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'>":\'\')+aN+(!kj?"</2k>":\'\');1o[i].2b>20?C.w=1o[i].2b:\'\';1o[i].2Q>20?C.h=1o[i].2Q:\'\';J(1o[i],{"W":C.w,"X":C.h});if(C.cK!=-1){iQ(1o,C.cK)}if(I(C.4c)){if(C.4c!=\'\'){4L(1o[i],{"id":(v.id+"eC"+C.4c+"GO"+i)})}}}Y.1J(1o[i]);i>0?1p(1o[i]):\'\'}9R();jT?pH():\'\';if(C.2Z=="4T"){C.4T=1;C.1p=1;o.4T?1o[0].1X=o.4T.mA(C.cK!=-1?C.cK:\'#3P\'):\'\';1o[0].eo=5E;1o[0].dA=5n;1o[0].i2=cV}F{if((bg.2b*C.1A<35||bg.2Q*C.1A<35)&&C.1F!=\'1C\'){pi();aQ(7l)}F{aQ(bg)}}if(1d=="4j"){if(C.fe==1&&I(C.2Z)){if(C.2Z.L("3d:")==0){B 1L=C.2Z.1z(4).2y(",");if(1L.Q==2){B d4=1L[1].2y("/");if(d4.Q==2){1L[0]==\'hd\'?1L[0]="46":\'\';if(v[1L[0]]==d4[1]){C.a=1;J(1o[0],{"1r":C.a})}}}}}}if(1d=="1j"&&C.ex==1){ex=1D 10n(Y,bg)}if(C.2B==0){J(Y,{"7c":"1M"})}if(C.jv==1){1p(bg)}if(C.2j==1){kt()}if(C.1l.L("2e")>-1){cZ=1}if(C.1l.L("1h")>-1){GN=1}if(C.1l.L("2K")>-1||C.1l.L("Y")>-1){ia=1}2r();B t=\'\';if(C.9N!=0){t+="d6("+C.9N+"hg)"}if(C.10o==1){t+=" 3p(-1)"}if(C.10p==1){t+=" 3f(-1)"}if(t!=\'\'){J(Y,{"2G":t})}if(1d=="e6"){hV()}B 1L=[];B i;if(1d=="1e"){1L=[\'f5\',\'GU\',\'kH\',\'GT\',\'s6\',\'l8\'];U(i=0;i<1L.Q;i++){if(I(C[1L[i]])&&!I(v.1e[1L[i]])){v.1e[1L[i]]=C[1L[i]]}}}if(1d=="1Q"){1L=[\'nh\',\'ql\',\'qk\'];U(i=0;i<1L.Q;i++){if(I(C[1L[i]])&&!I(3w[1L[i]])){v[1L[i]]=C[1L[i]]}}}C.cS==1?d2():\'\';if(1d=="4j"&&C.on==0){3k(Y)}}E pi(){if(7l){7l.4Z.2T(7l)}7l=1K("1S");J(7l,{"1l":"1Y","1h":0,"1b":0,"W":C.1F=="e7"?bg.2b:(bg.2b>35?bg.2b:35)*C.EB,"X":C.1F=="e7"?bg.2Q:(bg.2Q>35?bg.2Q:35)*C.ud});C=4n(C,\'hD\',\'hD\');if(v.1x.hK==1||C.hK==1){J(7l,{"2w-1y":"#kr","1r":0.5})}Y.1J(7l)}E aQ(x){if(1d.L("1a")==0&&V.Q==1){C.2B=0}if(1d=="4j"&&C.fe==0){C.2B=0}if(C.2B==1){if(C.hq==1){J(x,{"5Y":"3T"})}J(x,{"7c":"2F"});if(o.1q.2C){x.1u("bl",E(1c){1c.9P();bl=H});x.1u("fg",E(1c){1c.9P()});x.1u("cv",E(1c){1c.9P();if(!bl){9m(1c)}bl=K})}F{x.bJ=9m}}F{J(x,{"5Y":"7b"})}if(!o.1q.2C){x.eo=5E;x.dA=5n}if(C.3U==1||C.2j==1){x.i2=cV}}E 9R(){if(bg){bg.4Z.2T(bg)}bg=1K("1S");J(bg,{"1l":"1Y","1h":0,"1b":0});if(I(C.4c)){if(C.4c!=\'\'){4L(bg,{"id":(v.id+"eC"+C.4c+"ZW")})}}w=C.w;h=C.h;C=4n(C,\'2x\',\'2x\');C=4n(C,\'d7\',\'d7\');if(C.1F=="1C"){w=1o[oB].2b;h=1o[oB].2Q}C=4n(C,\'dQ\',\'dQ\');C=4n(C,\'BF\',\'BF\');if(o.1q.5A){C.BC/=C.1A;C.BH/=C.1A;C.BD/=C.1A;C.BB/=C.1A}if(I(C.4c)&&I(v.4j)&&C.1d=="4j"){if(C.4c!=\'\'&&2p(v.4j)==\'3K\'){U(B i=0;i<4a.3V(v.4j).Q;i++){if(v.4j[i][C.4c]){if(v.4j[i][C.4c]=="8w"){C.on=0}F{B 1L=v.4j[i][C.4c].2y(":");if(1L[0]=="2x-1b"){if(1L[1].L("%")>0){C.ks=2t(1L[1])}F{C.3G=2t(1L[1])}}}}}}}C.h=h;C.w=w;if(C.bg==1){h=h+C.8K+C.8D;w=w+C.6C+C.6P;C.h=h;C.w=w;if(C.1F=="1C"){C.k5=1o[0].2Q}}F{C.5z=0}J(bg,{"W":(C.BG==1?BE:w),"X":h,"tD":(C.k6*h)/2,"2w":C.5P,"1r":C.5z,"4y":"1r .1s 2R, 2w .1s 2R, 2G .1s 2R"});if(C.1F=="e7"){J(bg,{"W":w,"X":h,"tD":(C.k6*h/C.1A)/2,})}if(C.tC==1){J(bg,{"2W":"52 6y "+C.t7})}kw.1J(bg)}E 2r(){J(bg,{"1h":(-bg.2Q/2),"1b":(-bg.2b/2)});if(7l){B x=C.1F=="e7"?bg.2b:(bg.2b>35?bg.2b:35);B y=C.1F=="e7"?bg.2Q:(bg.2Q>35?bg.2Q:35);J(7l,{"1h":(-y/2)+C.Ay-C.AD,"1b":(-x/2)+C.ZV-C.ZE})}U(i=0;i<2A.Q;i++){if(C.1F=="2k"){J(1o[i],{"1h":-2N.4W(2t(1o[i].C.X))/2,"1b":-2t(1o[i].C.W)/2})}F{J(1o[i],{"1h":-2N.4W(1o[i].2Q)/2,"1b":-1o[i].2b/2})}if(bg){J(1o[i],{"1h":(5a(1o[i].C.1h)+C.8K/2-C.8D/2+C.BD/2+C.BB/2),"1b":(5a(1o[i].C.1b)+C.6C/2-C.6P/2+C.BC/2+C.BH/2)})}}}E 5E(){B i;7Q=H;if(C.cJ==1){if(on&&I(C.jK)){i=1}F{i=0}if(9Y&&cJ.Q>2){i=2}if(cJ[i]){iZ();1t(1o[cJ[i]])}}if(C.bg==1){if(C.7G!=-1){J(bg,{"1r":C.7G})}if(C.7s!=-1){J(bg,{"2w":C.7s})}}if(C.6B>-1&&!BI){U(i=0;i<2A.Q;i++){if(1o[i].C.6k!="3U"){J(1o[i],{"1r":C.6B})}}}if(C.jt!=-1){iQ(1o,C.jt)}if(C.ZD==1){cL=cL+45;J(1o[0],{"2G":"d6("+cL+"hg)"})}if(C.g5>C.1A&&C.g5>-1){1A(C.g5)}if(1d=="1j"&&o.S.bn()){}F{if(C.2j==1&&C.cS!=1){1t(2j);J(2j,{"1r":1})}}if(1d=="5u"){o.V.4O(H);o.4O=H}o.cO=H;o.S.hW(1f,"7Q")}E 5n(){7Q=K;B i;if(C.cJ==1){if(on&&I(C.jK)){i=1}F{i=0}if(9Y&&cJ.Q>2){i=2}iZ();1t(1o[i])}if(C.bg==1){if(C.7G!=-1){J(bg,{"1r":C.5z})}if(C.7s!=-1){J(bg,{"2w":C.5P})}}if(C.6B>-1){U(i=0;i<2A.Q;i++){if(1o[i].C.6k!="3U"){J(1o[i],{"1r":C.a})}}}if(C.g5>-1){1A(C.1A)}if(C.jt!=-1){iQ(1o,(C.cK==-1?\'#3P\':C.cK))}if(1d=="5u"&&!o.2l){o.V.4O(K);o.4O=K}if(C.2j==1&&C.cS!=1){1p(2j);J(2j,{"1r":0})}o.cO=K;o.S?o.S.hW(1f,"6p"):\'\'}E 9m(1c){1c.6h=H;if(!ky){o.S.dV(1f);if(1d=="4j"){hm()}if(C.2j==1&&C.cS!=1){1p(2j);J(2j,{"1r":0})}if(C.ZF==1){cL=cL+45;J(1o[0],{"2G":"d6("+cL+"hg)"})}hZ=H;if(C.BM==1||(1f=="q5"&&C.1p==1&&C.BL==1)){o.S.4P()}}}E hm(){if(2A){if(2A.Q>1){if(on==H){1t(1o[0]);1p(1o[1])}F{1t(1o[1]);1p(1o[0])}}if(C.2j==1&&aX.Q>1){3F.1X=(on==H?aX[0]:aX[1]);d2()}}if(I(C.q6)){if(on==H){C.2Z=C.q6}F{C.2Z=C.BJ}}if(I(C.er)){if(C.er.Q>1){if(on==H){6n(C.er[0])}F{6n(C.er[1])}}}on=on!=H;if(C.bg==1&&I(C.pW)){if(C.pW!=-1){if(on){C.BA=C.5P;C.5P=C.pW}F{C.5P=C.BA}9R();aQ(bg);2r();if(C.1F=="1C"){8G()}F{1A(C.1A)}}}}E nt(1c){1c.6h=H;o.S.dV(1f)}E iZ(){U(B i=0;i<2A.Q;i++){if(1o[i].C.6k!="3U"){J(1o[i],{"1r":C.a});1p(1o[i])}}}E o0(1C){if(1o[0]){if(1o[0].2b>o.3n-C.3G-C.4e-C.6C-C.6P){if(C.pY==1){if(!1C){1C=1o[0].1X}1o[0].1X=\'<pY>\'+1C+\'</pY>\'}F{J(1o[0],{"8F-7I":"uH"})}J(1o[0],{"W":o.3n-C.3G-C.4e-C.6C-C.6P})}}}E pH(){if(bg){jT=K;C.jv=0;1p(bg);if(1o[0]){C.w=1o[0].2b*C.1A;C.h=1o[0].2Q*C.1A;if(C.pG>0){C.h=C.pG*C.1A;J(1o[0],{X:C.pG})}1A(C.1A)}C.aU=0;9R();pi();aQ(7l);1t(bg);2r();o.S.4R();if(!6i(Y)){3k(Y)}}F{jT=H}}E AF(1c){1c.6h=H}E cV(){if(!o.cO){5E()}d2()}E 1A(x){if(x>0){if(o.1q.5A&&C.cS!=1){J(bg,{"pf":x+""})}F{J(bg,{"2G":"1A("+x+")"})}U(i=0;i<2A.Q;i++){if(o.1q.5A&&C.cS!=1){J(1o[i],{"pf":x+""})}F{J(1o[i],{"2G":"1A("+x+")"})}}3p=x;3f=x}}E kt(){2j=1K("1S");J(2j,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'X\':\'2F\',"1r":0,"4y":"1r 0.1s 2R"});8A=1K("1S");C=4n(C,\'fz\',\'fz\');C=4n(C,\'Bp\',\'Bp\');J(8A,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'W\':\'100%\',\'X\':30,\'2w-1y\':C.fD,\'1r\':C.gU,\'2W-5S\':C.vf});3F=1K("1S");J(3F,{\'1l\':\'1Y\',\'1b\':C.kA,\'1h\':C.kG,\'1y\':C.vb,\'43-gg\':C.va,\'43-3C\':C.fJ,"fb-cR":C.uU+\'px\',\'1r\':C.uB,"2J-X":"1",\'8F-7I\':\'aZ\'});if(C.gR==1){8l=1K("1S");8l.1X=\'<2k W="eK" X="ke" r4="0 0 8 6" 7B="1.1" 3A="3e://3m.w3.3v/3S/2k" 3A:3z="3e://3m.w3.3v/6s/3z"><dF id="AR" 3u="1M" 2V="#\'+C.fD.26("#","")+\'" 2V-8C="AQ" 2S="0 0 8 0 4 6"></dF></2k>\'}if(C.cS==1){J(2j,{"1r":1});aQ(2j)}F{J(2j,{"7c":"1M"})}Y.1J(2j);3F.1X=C.3F==\'\'?2I(1d):aX[0];2j.1J(8A);2j.1J(3F);if(C.gR==1){2j.1J(8l);B pC=o.kd?\'-eK\':\'-ke\';B ps=C.ZG;if(!I(ps)){ps=\'\'}B tp=ps.L("1h")>-1;if(tp){J(8l,{"2G":"d6(-ZH)"})}J(8l,{\'1l\':\'1Y\',\'2e\':(ps.L("2e")>-1?10*C.1A:\'2F\'),\'1b\':(ps.L("1b")>-1?10*C.1A:(ps==\'\'||ps==\'1h\'?\'50%\':\'2F\')),\'2x-1b\':(ps==\'\'||ps==\'1h\'?\'-pU\':0),\'2K\':(tp?\'2F\':pC),\'1h\':(tp?pC:\'2F\'),\'1r\':C.gU})}d2()}E d2(){if(C.2j==1){J(2j,{"1h":(ia==1?-h-2j.2Q+3:-2j.2Q/2)+C.ZC-C.ZB,"1b":(cZ==1?-3F.2b:(ia==1?-w/2:+3F.2b))-(ia==1?0:3F.2b/2+5)+C.Zx-C.Zw,"X":C.kG+C.fJ+C.At,"W":C.Au+3F.2b+C.kA});J(8A,{\'X\':2j.2Q});2j.C.4J="2M"}}G.c=E(){O Y};G.s=E(x){O C[x]};G.ss=E(x,x2){O I(C[x])?C[x][x2]:K};G.g=E(x){9G(x){1m"W":O w;1k;1m"X":O h;1k;1m"x":O 5a(Y.C.1b);1k;1m"y":O 5a(Y.C.1h);1k;1m"1r":O Y.C.1r?Y.C.1r:1;1k;1m"1t":O 47;1k;1m"3p":O 3p;1k;1m"3f":O 3f;1k;1m"1d":O 1d;1k;1m"an":O an;1k;1m"hZ":O hZ;1k;1m"1F":O C.1F;1k;1m"Q":O C.k7?C.k7:0;1k;1m"1f":O 1f;1k;1m"x0":O x0;1k;1m"y0":O y0;1k;1m"7Q":O 7Q;1k;1m"1j#":O an.L("1j#")==0;1k;1m"1j:":O an.L("1j:")==0;1k;1m"22#47":O nx;1k;7b:O K}};G.22=E(k,x){9G(k){1m"1t":7Q?5n():\'\';47=x;1k;1m"2m":Bk(x);1k;1m"6l":6l(Y);1k;1m"3k":3k(Y);1k;1m"1A":1A(x);1k;1m"3p":J(Y,{"2G":"3p("+x+")"});3p=x;1k;1m"3f":J(Y,{"2G":"3f("+x+")"});3f=x;1k;1m"1r":J(Y,{"1r":x});1k;1m"py":J(1o[0],{"1r":x});1k;1m"jM":J(1o[0],{"Bn":"jM("+x+")"});1k;1m"1b":J(Y,{"1b":x});1k;1m"1h":J(Y,{"1h":x});1k;1m"W":J(Y,{"W":x});1k;1m"X":J(Y,{"X":x});1k;1m"ti":C.ti=x;1k;1m"cZ":cZ=x;1k;1m"22#47":nx=x;1k;1m"x":J(Y,{"1b":x});1k;1m"y":J(Y,{"1h":x});1k;1m"5M":C.5M=x;1k;1m"x0":x0=x;1k;1m"y0":y0=x;1k;7b:O K}};E Bk(x){if(x&&o.1q.2C){ky=H;1O(Bm,d0)}if(!x){if(C.mM==1&&9Y){1p(1o[i7]);1t(1o[0]);9Y=K}}if(C.jv==1){x?1t(Y):1p(Y)}F{if(1f=="Zy"||1f=="Bl"){x?1t(Y):1p(Y)}F{J(Y,{"2m":(x?"4z":"1M")})}47=x;x?1t(Y):\'\'}}E Bm(){ky=K}G.6n=E(1C){6n(1C);C.Zz=1C};G.o4=E(){J(Y,{"2G":"d6("+la+"hg)"});la+=20};G.Br=E(x){if(C.1C.L("{1Q")>-1){6n(C.1C)}};G.hm=E(){hm()};E 6n(1C){if(C.1F=="1C"){if(I(1C)){if(C.Bs){if(1C.Q==4){1C=(C.nM?\'0:0\':\'aR:0\')+1C}if(1C.Q==5){1C=(C.nM?\'0:\':\'aR:\')+1C}}if(C.Bx){if(1C.Q==4){1C=\'0\'+1C}}C.k7=1C.Q}1C=(C.By==1?\'| \':\'\')+(C.Bw==1?\'/ \':\'\')+(C.Bv==1?\'-\':(C.Bt==1?\'- \':\'\'))+1C;B Bu=1o[0].2b+(C.bg==1?C.8K+C.8D:0);B BP=1o[0].2Q+(C.bg==1?C.8K+C.8D:0);1o[0].1X=(1d=="4j"?tR(1C):1C);if(C.ZA==1){1o[0].1X+=\'<6R C="2m:cr-4z;W:em"></6R><6R C="2W-1h: eG 6y #fl;2W-1b: eG 6y ff;2W-2e: eG 6y ff;1l: 1Y;2e:eG;1h: 50%;2x-1h: -52;"></6R>\'}if(1d=="1Q"){J(1o[0],{"W":"2F","8F-7I":"aZ"});o0(1C)}C.w=1o[0].2b+(C.bg==1?C.8K+C.8D:0);C.h=1o[0].2Q+(C.bg==1?C.8K+C.8D:0);if(Bu!=C.w||BP!=C.h||(C.w>0&&ns==0)){8G()}if(1o[0].2b>0){ns=C.w}F{if(1C!=\'\'){1O(8G,100)}}}}G.8G=E(){8G()};E 8G(){if(C.1F=="1C"){if(1o[0]){if(1o[0].2b>0){w=C.w=1o[0].2b;h=C.h=1o[0].2Q;9R();aQ(bg);2r();o.S.nP()}}}}G.BQ=E(x){if(C.Cj==1&&!o.1q.2C){B y=\'jl\';B z=[];U(B i=1;i<4;i++){z[i]=1G.8g(y.8I(v.id,1f,\'ZI\',i))}if(z[1]){if(x<=0.2){z[3]?1p(z[3]):\'\';z[2]?1p(z[2]):\'\';z[1]?1p(z[1]):\'\'}if(x>0.2&&x<=0.5){z[3]?1p(z[3]):\'\';z[2]?1p(z[2]):\'\'}if(x>0.2){z[1]?1t(z[1]):\'\'}if(x>0.5){z[2]?1t(z[2]):\'\'}if(x>0.5&&x<=0.8){z[3]?1p(z[3]):\'\'}if(x>0.8){z[3]?1t(z[3]):\'\'}}}};G.On=E(){if(!on){if(2A){if(2A.Q>1&&V.Q>1){1p(1o[0]);1t(1o[1])}}if(V.Q>1){1d=V[1];if(C.2j==1){3F.1X=og(1);d2()}}if(C.mM==1&&9Y){1p(1o[i7]);9Y=K}on=H}};E og(x){O C.3F==\'\'?2I(V[x]):(aX.Q>1?aX[x]:aX[0])}G.eN=E(x){B y=\'jl\';B z=1G.8g(y.8I(v.id,1f,\'ZJ\'));if(z){J(z,{"4y":"2G 0.1s 7O-6p"});if(x==1){z.C.2G=\'od(0, 0)\'}F{z.C.2G=\'od(-DQ, 0)\'}}F{if(x==1){C.a=1}F{C.a=0.5}}J(1o[0],{"1r":C.a})};G.ih=E(){if(on){if(2A){if(2A.Q>1&&V.Q>1){1t(1o[0]);1p(1o[1])}}1d=V[0];if(V.Q>1){if(C.2j==1){3F.1X=og(0);d2()}}on=K;9Y=K}};G.nt=E(){if(C.mM==1){iZ();1t(1o[i7]);9Y=H}};G.Cf=E(){B 2u=K;if(C.1p==1&&C.Cg==1){if(6i(o.1U)){2u=H}}if(!2u){6l(Y);B d1=Y.av("*");U(B i=d1.Q;i--;){J(d1[i],{"5M-1R-6G":"ZR"})}47=H}};G.hV=E(){hV()};E hV(){3k(Y);B d1=Y.av("*");U(B i=d1.Q;i--;){J(d1[i],{"5M-1R-6G":"8E"})}47=K}G.4C=E(){if(2A.Q>0){U(i=0;i<2A.Q;i++){Y.2T(1o[i]);1o[i]=1V}}if(bg){bg.dI("bJ");bg.dI("eo");bg.dI("dA");bg.4Z.2T(bg);bg=1V}if(C.1l==\'d8\'){o.d8.2T(Y)}F{if(Y.4Z==o.1I){o.1I.2T(Y)}F{if(o.1x){if(Y.4Z==o.1x){o.1x.2T(Y)}}}}if(2j){Y.2T(2j)}Y=1V};G.Cr=E(){ex?ex.tO():\'\'};E tR(x){B z=x+\'\';if(x.L(\'{1a}\')>-1&&I(o.3r)){x=x.26(\'{1a}\',fO(o.3r.9v().t))}if(x.L(\'{1Q\')>-1){B y=o.eq?o.eq:(v.1Q?v.1Q:\'\');if(x.L(\'{aA}\')>-1&&o.S){x=x.26(\'{aA}\',o.S.fk(\'aA\'))}if(o.az&&o.S){y=o.S.fk(\'az\')}x=x.26(\'{1Q}\',y);if(o.az&&!o.S){1O(6n,100,z)}}O x}E iQ(1o,4B){U(B i=0;i<1o.Q;i++){Cq(1o[i],4B)}if(C.2Z=="4T"){if(o.4T){o.4T.Cp(1o[0],4B)}}}};B Cn=E(1f,1d){B i;B C=[];B w;B h;B bg;B 47=H;B x0;B y0;B 3p=1;B 3f=1;B dN=0;B 8L=0;B ZS;B 3x;B jQ;B 2B;B 3y;B Bh;B B4;B v7;B B5;B 2j;B 8A;B 3F;B 8l;B 2S=[];o.AH=-1;B ju;B 7Q;B sT;U(i in ew.R){C[i]=ew.R[i]}B 1d=v[1f].1d;B 1F=v[1f].1F;U(i in ew[1d]){C[i]=ew[1d][i]}U(i in v[1f]){C[i]=v[1f][i]}C.w=2t(C.w);C.h=2t(C.h);C=4n(C,\'2x\',\'2x\');C=4n(C,\'d7\',\'d7\');B Y=1K("1S");if(v.1x.dh==1&&v.1x.1p==1){o.1x.1J(Y)}F{o.1I.1J(Y)}1d=="2J"?o.d8=Y:\'\';J(Y,{"1l":"1Y","1h":0,"1b":0,"1r":1,"f7":"gS","uw":"he"});if(C.Cd==1){Y.C.4J=5}9R();B 8n=1K("1S");J(8n,{"1l":"1Y","2K":2N.4W(-C.h/2),"1b":2N.4W(-C.w/2)});if(C.AA==1){J(8n,{"2W-5S":C.6Z*C.h/2,"X":C.h,"6H":"3U","3T-2L":"1M"})}if(I(C.4c)){if(C.4c!=\'\'){4L(Y,{"id":(v.id+"eC"+C.4c)})}}Y.1J(8n);if(1d==\'2J\'&&v.tG==1){Be()}if(C.2j==1){kt()}B 8b=1K("1S");hR(8b,0.3,(C.5l==1?"2R-5l(#"+C.BW+", #"+C.iK+")":C.iK),C.w,C.ZT);if(C.Cb==1&&I(C.iA)){B hk=1K("1S");hk.1X=C.iA.26(/\\#Cc/g,"#"+C.iK);8b.1J(hk);J(hk,{"1l":"1Y","2K":-2N.4W(C.h/2),"1b":0,"3T-2L":"1M"});J(8b,{"6H":"3U","2w":"1M"});B x=["4r","dF","mG","hz","cU"];U(B y=0;y<x.Q;y++){B z=hk.tZ("2k "+x[y]);if(z.Q>0){U(B y2=0;y2<z.Q;y2++){z[y2].C.2V=C.iK}}}}8n.1J(8b);B ZU=[];B bE=1K("1S");hR(bE,C.BX,(C.5l==1?"2R-5l(#"+C.BV+", #"+C.BU+")":C.BU),0,C.ZQ);8n.1J(bE);if(C.6B>0){B cW=1K("1S");hR(cW,C.BS,C.ZP,0,C.6B);8n.1J(cW)}B 6J=1K("1S");hR(6J,C.BY,(C.5l==1?"2R-5l(#"+C.BZ+", #"+C.1y+")":C.1y),0,C.a);if(C.Cb==1&&I(C.iA)){B iI=1K("1S");iI.1X=C.iA.26(/\\#Cc/g,"#"+C.1y);J(iI,{"1l":"1Y","2K":-2N.4W(C.h/2),"1b":0,"3T-2L":"1M"});J(6J,{"6H":"3U","2w":"1M"});6J.1J(iI)}if(C.4S==1){B 8c=1K("1S");C=4n(C,\'tX\',\'tX\');C=4n(C,\'uk\',\'uk\');J(8c,{"1l":"1Y","2K":C.h/2,"2e":0,"3T-2L":"1M","43-3C":(C.Ca+"px"),"1y":C.5o,"2J-X":"100%","2U-1h":C.ZL,"2U-2K":C.ZK,"2U-1b":C.ZM,"2U-2e":C.ZN,"2x-1h":C.ZO,"2x-2K":C.10w,"2x-1b":C.B7,"2x-2e":C.B9,"2W-5S":(C.C0+"px"),"2m":"1M"});if(C.C1==1){J(8c,{"2w":"#"+C.Bj})}6J.1J(8c);B fZ=K;B g2=K}o.km=C.h;8n.1J(6J);if(C.gK==1){v.gK=1;B g4=1K("1S");J(g4,{"1l":"1Y","1h":0,"1b":0});Y.1J(g4);I(v.2S)?ty(v.2S):\'\'}if(C.3y==1){if(C.cP.6x().L(\'<2k\')==-1){C.cP==\'\'?C.cP="<2k W=\'20\' X=\'20\'><g><cU ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 2V=\'#fl\'/></g></2k>":\'\'}3y=1K("1S");3y.1X=C.cP.6x();C=4n(C,\'Bi\',\'Bi\');J(3y,{"1l":"1Y","1h":-10+C.10x-C.11h,"1b":-2M,"3T-2L":"1M","X":20,"W":C.eR,"1r":C.sY,"4y":"2G 0.1s 2R, 1r 0.1s 2R"});if(C.fR==1||C.tl==1){J(3y,{"2G":"1A(0)"})}F{if(C.jY!=1){J(3y,{"2G":"1A("+C.jY+")"})}}Y.1J(3y);if(C.tY!=-1){B x=["4r","hz","cU"];U(B y=0;y<x.Q;y++){B z=3y.tZ("2k "+x[y]);if(z.Q>0){U(B y2=0;y2<z.Q;y2++){z[y2].C.2V="#"+C.tY}}}}C.dx=3y.2b}if(C.9N!=0){J(Y,{"2G":"d6("+C.9N+"hg)"})}if(C.3U==1){1p(Y);47=K}if(1d=="1W"){if(C.1p==1&&C.ho==1){o.hn=H;C.3U=H}F{o.hn=K}}C.9Z=0;if(C.9N!=0){C.hN=2N.xW(C.9N);if(C.hN>45&&C.hN<135){C.9Z=90}if(C.hN>11g&&C.hN<AB){C.9Z=Am}}E hR(x,y,z,AC,Az){J(x,{"1l":"1Y","2K":0,"1b":0,"W":AC,"X":C.h,"2w":z?(z.L("2R")>-1?z:\'#\'+z):\'\',"2W-5S":(C.AA==1?1:C.6Z*C.h/2),"1r":Az,"3T-2L":"1M","4y":"2G 0.2s 7O-in-6p"})}E 9R(){bg=1K("1S");C=4n(C,\'dQ\',\'dQ\');B k5=C.h+C.8K+C.8D;B Ax=C.w+C.6C+C.6P;if(C.bg==1){}F{C.5z=0}C=4n(C,\'hD\',\'hD\');if(v.1x.hK==1||C.hK==1){C.5P=\'#kr\';C.bg=1;C.5z=0.5}J(bg,{"1l":"1Y","1h":0,"1b":0,"W":Ax,"X":k5*C.ud,"tD":(C.k6*k5)/2,"6q":C.5P,"1r":C.5z,"7c":"2F","4y":"1r .1s 2R, 2w .1s 2R"});if(C.tC==1){J(bg,{"2W":"52 6y #"+C.t7})}if(C.2B==1){if(C.hq==1){J(bg,{"5Y":"3T"})}if(!o.1q.2C){bg.bJ=9m;bg.11i=sQ;bg.11j=sX;bg.i2=cV}}F{J(bg,{"5Y":"7b"})}if(!o.1q.2C){bg.eo=5E;bg.i2=cV;bg.dA=5n}if(o.1q.2C){bg.1u("fg",E(1c){1c.6h=H;if(!I(1c.5y)&&1c.b6.Q>0){1c.5y=1c.b6[0].hv;1c.8i=1c.b6[0].jI}ju=1c;5E(1c);sX(1c)});bg.1u("cv",E(1c){1c.6h=H;5n(1c);sQ(ju)});bg.1u("2B",E(1c){1c.6h=H});bg.1u("bl",E(1c){if(!I(1c.5y)&&1c.b6.Q>0){1c.5y=1c.b6[0].hv;1c.8i=1c.b6[0].jI}ju=1c;cV(1c)})}J(bg,{"1b":2N.jB(-C.w/2-C.6C)});J(bg,{"1h":2N.jB(-C.h/2-C.8K+C.Ay-C.AD)});Y.1J(bg)}E 2r(W){if(W!=w){w=W;o.t0=w;B bw=w/8b.2b;J(bg,{"W":(w+C.6C+C.6P),"1b":-w/2-C.6C,});J(8n,{"1b":-w/2});J(8b,{"W":w});J(8n,{"W":w});B xx=bE.2b*bw;if(xx>8b.2b){xx=8b.2b}J(bE,{"W":xx});B wp=6J.2b*bw;J(6J,{"W":wp});tm(wp,K);if(1d=="2J"){AO()}if(C.gK==1){dn()}}}E tm(x,1M){if(C.3y==1){if(x<C.dx/2&&C.eR!=20){x=C.dx/2}if(x>w-C.dx/2&&C.eR!=20){x=w-C.dx/2}B y=x-w/2-C.dx/2+C.11k-C.11f;J(3y,{"1b":y})}}E tq(){J(3y,{"2G":"1A("+C.jY+")"})}E 5E(1c){o.S.hW(1f,"7Q");if(C.bg==1){if(C.7G!=-1){B m=1D 5v({"mc":bg,"1F":"7q","to":C.7G,"1a":0.1,"me":(1f+"bg")})}if(I(C.7s)){if(C.7s!=-1){J(bg,{"2w-1y":C.7s})}}}if(I(C.iu)){if(C.iu!=-1){J(6J,{"2w-1y":C.iu})}}if(C.3y==1){if(C.AK==1&&I(C.ta)){if(C.jR==1&&3x){}F{3y.1X="<2k W=\'"+C.eR+"\' X=\'20\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'>"+C.ta.6x()+"</2k>"}}if(C.fR==1){if(C.tl==1&&!o.1E){}F{tq()}}F{if(C.k3!=-1){B m2=1D 5v({"mc":3y,"1F":"7q","to":C.k3,"1a":0.1,"me":(1f+"3y")})}}}if(C.2j==1&&(o.P.1n()>0||1d=="1W")){1t(2j);J(2j,{"1r":1})}if(C.dP>0){J(bg,{"2G":"3f("+((C.dP-1)/5+1)+")"});sS(C.dP)}if(1d=="1W"){o.V.4O(H);o.4O=H}o.cO=H}E sS(x){J(8b,{"2G":"3f("+x+")"});J(bE,{"2G":"3f("+x+")"});cW?J(cW,{"2G":"3f("+x+")"}):\'\';J(6J,{"2G":"3f("+x+")"})}E 5n(){if(!jQ){if(C.6B>0){J(cW,{"W":0})}if(I(C.iu)){if(C.iu!=-1){J(6J,{"2w-1y":C.1y})}}if(C.bg==1){if(C.7G!=-1){B m=1D 5v({"mc":bg,"1F":"7q","to":C.5z,"1a":0.1,"me":(1f+"bg")})}if(I(C.7s)){if(C.7s!=-1){J(bg,{"2w-1y":C.5P})}}}if(C.3y==1){if(C.AK==1&&I(C.ta)){if(C.jR==1&&3x){}F{3y.1X="<2k W=\'"+C.eR+"\' X=\'20\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'>"+C.cP.6x()+"</2k>"}}if(C.fR==1){J(3y,{"2G":"1A(0)"})}F{if(C.k3!=-1){B m2=1D 5v({"mc":3y,"1F":"7q","to":C.sY,"1a":0.1,"me":(1f+"3y")})}}}if(C.dP>0){J(bg,{"2G":"3f(1)"});sS(1)}if(1d=="1W"&&!o.2l){o.V.4O(K);o.4O=K}o.S.hW(1f,"6p")}if(C.2j==1&&(o.P.1n()>0||1d=="1W")){1p(2j);J(2j,{"1r":0})}if(o.jZ&&1d=="2J"){o.th.1p();o.AH=-1}o.cO=K}E 9m(1c){1c.6h=H}E AF(1c){1c.6h=H}E sQ(1c){if(1d=="1W"){if(o.8y){jQ=H;3q(sT);sT=1O(E(){jQ=K;5n()},2M)}}tg();o.3x=K;if(C.3y==1){if(C.jR==1&&I(C.sW)){3y.1X="<2k W=\'20\' X=\'20\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'>"+C.cP.6x()+"</2k>"}}bC(1c.5y,1c.8i);o.S.dV(1f);o.S.fm(1c.5y,1c.8i);1c.6h=H}E sX(1c){3x=H;if(C.3y==1){if(C.jR==1&&I(C.sW)){3y.1X="<2k W=\'20\' X=\'20\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'>"+C.sW.6x()+"</2k>"}}dN=hF(bg);8L=eZ(bg);bC(1c.5y,1c.8i);7j(2B,1,"no")}E bC(fo,i6){B x;B Al=2N.5N(1G.k1.aJ,1G.7z.aJ);B Av=2N.5N(1G.k1.bN,1G.7z.bN);if(o.1q.2C){}F{i6=i6+Av;fo=fo+Al}if(C.9Z>0){x=i6-dN-C.6P;2B=x/w;if(C.9Z==Am){x=i6-dN-C.6C;2B=x/w;2B=(2B-1)*-1}}F{x=fo-8L-C.6C;2B=x/w;if(C.9N>134&&C.9N<11e){x=fo-8L-C.6P;2B=x/w;2B=(2B-1)*-1}}2B>1?2B=1:\'\';2B<0?2B=0:\'\'}G.dn=E(){dn()};G.gc=E(){ty()};E ty(){if(2S){U(B i=0;i<2S.Q;i++){g4.2T(2S[i])}}2S=[];if(v.2S){if(2p(v.2S)=="5w"){v.2S=2o(v.2S)}U(B i=0;i<4a.3V(v.2S).Q;i++){if(v.2S[i].1a){2S[i]=1K("1S");J(2S[i],{\'1l\':\'1Y\',\'1b\':0,\'1h\':-C.h/2,\'W\':(I(v.2S[i].W)?v.2S[i].W:C.Ak),\'X\':C.h,\'1r\':(I(v.2S[i].1r)?v.2S[i].1r:C.Aj),\'3T-2L\':\'1M\',\'2m\':\'1M\',\'2w-1y\':(I(v.2S[i].1y)?v.2S[i].1y:C.Ag)});2S[i].1a=v.2S[i].1a;g4.1J(2S[i])}}dn()}}E dn(){B x=o.P.1n();U(B i=0;i<2S.Q;i++){if(x>0){J(2S[i],{\'1b\':w*(2S[i].1a/x)-w/2,\'2m\':\'4z\'})}F{3k(2S[i])}}}E tg(){3x=K}E cV(1c){if(C.6B>0){if(o.1E||1d!=\'2J\'){J(cW,{"W":1c.5y-8L})}}if(C.2j==1&&(o.P.1n()>0||1d=="1W")){!6i(2j)?1t(2j):\'\';dN=hF(bg);8L=eZ(bg);bC(1c.5y,1c.8i);if(1d=="2J"){if(v.11a==1){if(o.P.5V()&&o.P.bA().L("?tz")>0){3F.1X=\'- \'+fO((1-2B)*o.P.1n(H))}F{3F.1X=fO(2B*o.P.1n())}}F{B d=o.P.1n();if(v.4o>0){d=d-v.4o}3F.1X=fO(2B*d)}}if(1d=="1W"){3F.1X=2N.4W(2B*100)}J(2j,{"1h":(-3F.2Q*2-C.An*1)-(C.Ao==1?(C.h/2)*(C.dP>0?C.dP:1):0),"1b":(-w/2+(1c.5y+1G.k1.aJ-8L)-2j.2b/2),"X":C.kG+C.fJ+C.At,"W":C.Au+3F.2b+C.kA,});J(8A,{\'X\':2j.2Q});2j.C.4J="2M"}if(o.jZ&&1d=="2J"&&o.th){if(o.P.1n()>0){if(C.2j==0){dN=hF(bg);8L=eZ(bg);bC(1c.5y,1c.8i)}B 1b=(-w/2+(1c.5y-8L)-v.fv/2);1b>w/2-v.fv?1b=w/2-v.fv:\'\';J(o.dg,{"1h":(-v.v3-(v.As>0?v.As*1:5)-v.uX),"1b":(1b<-w/2?-w/2:1b)});o.th.1a(2B*o.P.1n(),1c.5y,8L,w)}}}G.c=E(){O Y};G.s=E(1f){O C[1f]};G.ss=E(x,x2){O C[x][x2]};G.g=E(x){9G(x){1m"W":O w;1k;1m"10Z":O 8b.2b;1k;1m"X":O C.h;1k;1m"x":O 5a(Y.C.1b);1k;1m"y":O 5a(Y.C.1h);1k;1m"1r":O Y.C.1r?Y.C.1r:1;1k;1m"1t":O 47;1k;1m"3p":O 3p;1k;1m"3f":O 3f;1k;1m"1d":O 1d;1k;1m"1f":O 1f;1k;1m"x0":O x0;1k;1m"y0":O y0;1k;1m"2B":O 2B;1k;7b:O K}};G.22=E(1f,x){9G(1f){1m"1t":47=x;1k;1m"3x":3x=x;1k;1m"2m":1d=="2J"||C.1p==1?J(Y,{"6k":(x?"47":"3U")}):J(Y,{"2m":(x?"4z":"1M")});47=x;1k;1m"3p":J(Y,{"2G":"3p("+x+")"});3p=x;1k;1m"3f":J(Y,{"2G":"3f("+x+")"});3f=x;1k;1m"1r":J(Y,{"1r":x});1k;1m"1b":J(Y,{"1b":x});1k;1m"1h":J(Y,{"1h":x});1k;1m"2B":2B=x;1k;1m"cQ":C.cQ=x;1k;1m"W":J(Y,{"W":x});1k;1m"X":J(Y,{"X":x});1k;1m"ti":C.11b=x;1k;1m"x":J(Y,{"1b":x});1k;1m"y":J(Y,{"1h":x});1k;1m"x0":x0=x;1k;1m"y0":y0=x;1k}};G.2r=E(x){2r(x)};G.jp=E(x){};G.eU=E(9J,9I){if(3x){if(1d=="1W"){bC(9J,9I);o.S.dV(1f);o.8y=H}bC(9J,9I);7j(2B,1,"no")}};G.fm=E(9J,9I){if(3x){tg();3x=K;bC(9J,9I);o.S.dV(1f);7j(2B,1,"no")}};E 7j(1a,1n,vd){1a<0?1a=0:\'\';if(v.4o>0&&1n>1){1n=1n-v.4o;1a=1a-v.4o}if(C.3y==1&&C.tl==1&&C.fR!=1){if(!C.B8&&1a>0){tq();C.B8=H}}if(3x&&1n!=1){}F{B 4q;if(1n>0&&1a>0){if(1a>1n){1a=1n}4q=w*(1a/1n);if(4q==6J.2b){4q=-1}}F{4q=0}if(4q>=0){J(6J,{"W":4q});tm(4q,H)}if(I(8c)){if(1n<2&&1d=="2J"){if(fZ){3k(8c);fZ=K}}F{if(!fZ){6l(8c);fZ=H}8c.1X=1d=="2J"?4F(1a==0?1n:1a):2N.jB(1a*100);if(4q<8c.lZ+C.B9+C.B7){if(!g2){J(8c,{"1b":0,"2e":"2F"});g2=H}}F{if(g2){J(8c,{"2e":0,"1b":"2F"});g2=K}}}}}};G.7j=E(1a,1n,vd){if(1n!=B4||1a!=B5){7j(1a,1n,vd)}};G.Ba=E(){2B>1?2B=1:\'\';2B<0?2B=0:\'\';J(6J,{"W":(2B*w)})};G.Bb=E(1a,1n){if(1n>0&&1a>0){B 4q=w*(1a/1n);J(bE,{"W":5a(4q)});Bh=1n;v7=1a}F{v7=0;J(bE,{"W":0})}};E Be(){o.dg=1K("1S");J(o.dg,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'W\':v.fv,\'X\':v.v3,\'6H\':\'3U\',"3T-2L":"1M","2w-1y":"#11c","2W-5S":v.Bd+\'px\',"2m":"1M"});if(v.uX==1){J(o.dg,{"2W":v.B3+"px 6y "+v9(\'1y\',v.B2)})}if(v.AS==1){J(o.dg,{"5x-aD":"l1 52 fY 4I(0,0,0,0.5)"})}o.dg.C.4J="gX";Y.1J(o.dg)}E kt(){2j=1K("1S");J(2j,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'X\':\'2F\',"3T-2L":"1M","1r":0,"4y":"1r 0.1s 2R"});8A=1K("1S");C=4n(C,\'fz\',\'fz\');J(8A,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'W\':\'100%\',\'X\':30,\'2w-1y\':C.fD,\'1r\':C.gU,\'2W-5S\':C.vf});3F=1K("1S");J(3F,{\'1l\':\'1Y\',\'1b\':C.kA,\'1h\':C.kG,\'1y\':C.vb,\'43-gg\':C.va,\'43-3C\':C.fJ,"fb-cR":C.uU+\'px\',"2J-X":"1",\'1r\':C.uB});C.AT?C.gR=C.AT:\'\';if(C.gR==1){8l=1K("1S");8l.1X=\'<2k W="eK" X="ke" r4="0 0 8 6" 7B="1.1" 3A="3e://3m.w3.3v/3S/2k" 3A:3z="3e://3m.w3.3v/6s/3z"><dF id="AR" 3u="1M" 2V="\'+fF(C.fD)+\'" 2V-8C="AQ" 2S="0 0 8 0 4 6"></dF></2k>\'}Y.1J(2j);2j.1J(8A);2j.1J(3F);if(C.gR==1){2j.1J(8l);J(8l,{\'1l\':\'1Y\',\'1b\':\'50%\',\'2x-1b\':\'-pU\',\'2K\':(o.kd?\'-eK\':\'-ke\'),\'1r\':C.gU})}};E AO(){if(o.3r&&v.bd==1&&!o.1E){B f=o.3r.9v();if(f.t&&f.d){7j(f.t,f.d)}}};G.4C=E(){Y.2T(8n);if(bg){bg.dI("bJ");bg.dI("eo");bg.dI("dA");bg.4Z.2T(bg);bg=1V}if(3y){Y.2T(3y)}if(Y.4Z==o.1I){o.1I.2T(Y)}F{if(o.1x){if(Y.4Z==o.1x){o.1x.2T(Y)}}}Y=1V}};B AU=E(){B i;B C=[];B w;B h;B 47=H;B 3p=1;B 3f=1;B x0=0;B y0=0;B 9F=6A(kn,11d);B 1d,1f="bg";B 1F="11l";C["1l"]=v.1x.1l;U(B k in v.1x){if(v.1x.2n(k)){C[k]=v.1x[k]}}if(C.1t==0){v.1x.h=C.h=0;C.2U=C.2x="0 0 0 0";C.5l=0}C["1A"]=1;C=4n(C,\'2x\',\'2x\');C=4n(C,\'d7\',\'d7\');if(I(C.hl)){if(C.hl!=20&&C.2x=="-20 0 0 0"){C.6Q=C.hl}}B Y=1K("1S");J(Y,{\'1l\':\'1Y\',\'1b\':0,\'1h\':0,\'W\':(C.ha==1?\'100%\':o.8S),\'X\':C.h-C.6Q,\'11m\':C.a,\'3T-2L\':\'1M\',\'f7\':\'gS\',\'uw\':\'he\'});o.1I.1J(Y);B bg=1K("1S");J(bg,{\'11u\':\'1Y\',\'11v\':0,\'11w\':0,\'11x\':\'100%\',\'X\':C.h-C.9g-C.6Q,\'1r\':C.a,\'2m\':\'4z\',\'2x-1b\':C.3G,\'2x-2e\':C.4e,\'2W-5S\':C.6Z});Y.1J(bg);w=Y.2b;v.gp=-C.6Q;if(C.5l==1){if(C.1y==\'3H\'||v.1x.aH!=\'\'){v.gp=98-C.h;B 3Z=\'1H:aH/uR;h4,11t+11s/T/D+11o/11n/11p==\';if(v.1x.aH.L("1H:aH")>-1){3Z=v.1x.aH}J(bg,{\'X\':C.h+v.gp,\'2w\':\'1g(\'+3Z+\') gW-x 50% 100%\',\'2w-3C\':\'2F\'})}F{B dz=\'to 2K, 4I(\'+j6(C.1y)+\',0), 4I(\'+j6(C.1y)+\',1)\';J(bg,{\'2w\':\'-qH-2R-5l(\'+dz+\')\',\'2w\':\'-3N-2R-5l(\'+dz+\')\',\'2w\':\'-ms-2R-5l(\'+dz+\')\',\'2w\':\'-o-2R-5l(\'+dz+\')\',\'2w\':\'2R-5l(\'+dz+\')\'})}}F{J(bg,{\'2w-1y\':C.1y})}G.h=E(){O C.h-C.6Q};G.c=E(){O Y};G.s=E(1f){O C[1f]};G.g=E(x){if(Y){9G(x){1m"w":Y.2b>0?w=Y.2b:\'\';O w;1k;1m"W":O Y.2b;1k;1m"X":O Y.2Q;1k;1m"x":O 5a(Y.C.1b);1k;1m"y":O 5a(Y.C.1h);1k;1m"1r":O Y.C.1r?Y.C.1r:1;1k;1m"1t":O 47;1k;1m"3p":O 3p;1k;1m"3f":O 3f;1k;1m"1f":O 1f;1k;1m"x0":O x0;1k;1m"y0":O y0;1k;1m"9F":O 1f+9F;1k;7b:O K}}F{O K}};G.22=E(1f,x){9G(1f){1m"1t":47=x;1k;1m"w":w=x;1k;1m"2m":J(Y,{"2m":(x&&!o.uO?"4z":"1M")});47=x;1k;1m"1A":J(Y,{"2G":"1A("+x+")"});3p=x;3f=x;1k;1m"3p":J(Y,{"2G":"3p("+x+")"});3p=x;1k;1m"3f":J(Y,{"2G":"3f("+x+")"});3f=x;1k;1m"1r":J(Y,{"1r":x});1k;1m"1b":J(Y,{"1b":x});1k;1m"1h":J(Y,{"1h":x});1k;1m"W":J(Y,{"W":x});1k;1m"X":J(Y,{"X":x});1k;1m"x":J(Y,{"1b":x});1k;1m"y":J(Y,{"1h":x});1k;1m"x0":x0=x;1k;1m"y0":y0=x;1k}};G.4C=E(){o.1I.2T(Y);Y=1V}};B 8v=E(is){B i;B C=[];B f=[];B aw=[];B 11q=[];B 5D=[];B 7K=[];B 1T=[];B f2=[];B h9=[];B 11r=[];B 4w=[];B 6t=[];B 3D=[];B cY=[];B cf=K;B 3a;B nf=-1;B 5p=H;B 1f=is;B 1e;B 5f=[];B c8=[];B 3L=\'\';B dM=\'\';B 5K=-1;B lQ=K;B 10Y=K;B mj=K;B mt=K;B hu=K;B im=K;B nc;B uZ;B kT;B i5;B rJ;B mQ=-1;B cq=0;B 5T="2B";B am=(o.1q.2C?"fg":"kI");B a8=(o.1q.2C?"cv":"iD");C=9l(C,v[is]);C=4n(v[is],\'2x\',\'2x\');if(C.j5==0){C.uL="0 0 0 0"}C=4n(v[is],\'dQ\',\'uL\');C=4n(v[is],\'2U\',\'2U\');C.lS=0;B ik="<2k W=\'"+C.6m*2+"\' X=\'"+(C.6m*2>C.4A?(C.6m*2):C.4A)+"\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'><g><cU ry=\'"+(C.6m)+"\' rx=\'"+C.6m+"\' cy=\'"+(C.6m*2>C.4A?(C.6m):(C.4A/2))+"\' cx=\'"+C.6m+"\' 2V=\'#"+C.5o+"\'/></g></2k>";B DI="<2k W=\'"+C.6m*2+"\' X=\'"+C.4A+"\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\' ><g><cU ry=\'"+(C.6m-1)+"\' rx=\'"+(C.6m-1)+"\' cy=\'"+(C.4A/2+2)+"\' cx=\'"+C.6m+"\' 3u=\'#"+C.5o+"\' 3u=\'1\' 2V-1r=\'0\'/></g></2k>";B xx=4;B CP="<2k W=\'"+(xx+2)+"\' X=\'"+(C.4A)+"\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'><g><2J x1=\'1\' y1=\'"+(C.4A/2-xx)+"\' x2=\'"+xx+"\' y2=\'"+(C.4A/2)+"\' 3u=\'#"+C.1y+"\' 3u-W=\'1\' 3u-ao=\'4W\'/><2J x1=\'"+xx+"\' y1=\'"+(C.4A/2)+"\' x2=\'1\' y2=\'"+(C.4A/2+xx)+"\' 3u=\'#"+C.1y+"\' 3u-W=\'1\' 3u-ao=\'4W\'/></g></2k>";B lp="<2k W=\'"+(xx+10)+"\' X=\'"+(C.4A+2)+"\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\' C=\'hs:1b\'><g><2J x1=\'1\' y1=\'"+(C.4A/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.4A/2-xx+2)+"\' 3u=\'#"+C.1y+"\' 3u-W=\'1\' 3u-ao=\'4W\' /><2J x1=\'1\' y1=\'"+(C.4A/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.4A/2+xx+2)+"\' 3u=\'#"+C.1y+"\' 3u-W=\'1\' 3u-ao=\'4W\'/></g></2k>";B 1B=1K("1S");o.1I.1J(1B);J(1B,{\'6H\':\'3U\',\'2m\':\'4z\',\'1r\':0,\'2W-5S\':C.6Z});if(is=="1j"){1B.C.4J=100}F{1B.C.4J=99}B Y=1K("1S");if(C.Ct>0&&o.3n<cT){C.aC=C.Ct}J(Y,{\'1l\':\'f0\',\'1h\':0,\'1b\':0,\'2m\':\'4z\',\'W\':\'100%\',\'2U-1h\':C.8K,\'2U-2e\':C.6P+20,\'2U-2K\':C.8D,\'2U-1b\':C.6C,\'1y\':C.1y,\'43-3C\':C.aC,\'43-gg\':C.43,\'fb-cR\':C.gi+\'px\'});if(o.1q.5A){J(Y,{\'7U-W\':Cu})}if(is!=="1e"){J(Y,{\'6H-y\':\'9h\'})}1B.1J(Y);if(C.3O!=1){B 7f=1K("1S");J(7f,{\'2m\':\'4z\',\'6H\':\'3U\',\'2W-5S\':C.6Z});if(C.3O!=1){if(o.1q.5A){J(7f,{\'7U-W\':Cu})}}Y.1J(7f)}if(is=="1e"){4L(Y,{id:(v.id+"7E"+is)});if(C.3O==1){J(Y,{\'W\':\'100%\',\'2U-2e\':C.6P,\'2U-2K\':C.8D+20,\'6H-x\':\'9h\',\'8F-7I\':\'aZ\'});J(1B,{\'W\':o.3n-C.4e-C.3G,\'X\':C.ln+C.8K+C.8D})}F{J(Y,{\'6H-y\':\'9h\'});if(C.Ds==1){m9()}}if(C.j5==1){J(1B,{\'2w-1y\':C.ut})}if(v.1e.3h==1){3k(1B)}}if(C.g6==1){B 59=1K("1S");B 9w=j6(C.j5==1?C.ut:C.5P);if(C.3O==1){fs(59,\'to 2e, 4I(\'+9w+\',\'+(C.5z*1+0.3)+\'), 4I(\'+9w+\',0)\',\'1b\',12,5,7,10,7,10,12,15);59.1u(5T,CH)}F{fs(59,\'to 2K, 4I(\'+9w+\',\'+(C.5z*1+0.3)+\'), 4I(\'+9w+\',0)\',\'1h\',5,12,10,7,10,7,15,12);59.1u(5T,CD)}B 56=1K("1S");if(C.3O==1){fs(56,\'to 1b, 4I(\'+9w+\',\'+(C.5z*1+0.3)+\'), 4I(\'+9w+\',0)\',\'2e\',8,5,13,10,13,10,8,15);56.1u(5T,CJ)}F{fs(56,\'to 2K, 4I(\'+9w+\',0), 4I(\'+9w+\',\'+(C.5z*1+0.3)+\')\',\'2K\',5,8,10,13,10,13,15,8);56.1u(5T,CC)}59.1u("kI",fT);59.1u("iD",fT);56.1u("kI",fT);56.1u("iD",fT);Y.1u("uY",DT,{ac:H});59.1u("8X",9T);56.1u("8X",9T);1B.1J(59);1B.1J(56);4t(uZ);uZ=7i(Cy,2M)}Y.1u(am,DS);Y.1u(a8,v5);if(is=="1j"){U(B i=1;i<11;i++){if(I(v["9S"+is][is+i])){v.1j[is+i]=v["9S"+is][is+i];if(I(v["9S"+is][is+i+"1Q"])){v.1j[is+i+"1Q"]=v["9S"+is][is+i+"1Q"]}if(I(v["9S"+is][is+i+"1d"])){v.1j[is+i+"1d"]=v["9S"+is][is+i+"1d"]}}if(I(v.1j[is+i])){if(v.1j[is+i]==1){aL(\'f\',i);aE(f[i],aw[i],5D[i],7K[i]);5D[i].1X=2I(v.1j[is+i+"1d"]);if(I(v.1j[is+i+"1Q"])){if(v.1j[is+i+"1Q"]!=\'\'){5D[i].1X=v.1j[is+i+"1Q"]}}if(I(v.1j[is+i+"1d"])){1T[i]=v.1j[is+i+"1d"];8x(i);if(1T[i]==\'1A\'){mQ=i}}f[i].1u(am,5E);f[i].1u(a8,5n);f[i].1u(5T,9m);f[i].1u("8X",9T);if(v.1j[is+i+"1p"]==1){J(f[i],{"X":0})}}}}}E DT(){4t(kT);kT=7i(v5,dO);ad()}E DS(){o.3x=H}E v5(){if(C.gF==1){3q(o.eg);o.eg=1O(E(){if(!o.3x){aF()}},(v.1j.eA>0?v.1j.eA*2M:2M))}o.3x=K}E 5E(1c){if(o.2l){o.4O?o.V.4O(K):\'\'}B i=1c.4f.7m(\'lI\');B x;if(i){x=\'f\'}F{if(1c.4f.7m(\'aK\')){i=1c.4f.7m(\'aK\');x=\'f2\'}}if(i){i=2t(i);B ez=K;if(I(2o(x)[i])){if(C.7G>-1){J(2o(x+\'bg\')[i],{\'1r\':C.7G})}if(C.6B>-1){J(2o(x+\'1Q\')[i],{\'1r\':C.6B});J(2o(x+\'4S\')[i],{\'1r\':C.6B})}if(is=="1e"){if(1T[i].L("1e")==0){B id=1T[i].1z(8);if(3L==id||dM==id){J(2o(x+\'1Q\')[i],{\'1y\':C.5o});J(2o(x+\'4S\')[i],{\'1y\':C.5o});ez=H}F{J(2o(x+\'1Q\')[i],{\'1y\':C.1y})}}}if(C.qj==1&&I(C.l5)&&ez){}F{J(2o(x+\'bg\')[i],{\'6q\':C.7s})}}}};E 5n(1c){if(o.2l){o.4O?o.V.4O(H):\'\'}B i=1c.4f.7m(\'lI\');B x;B ez=K;ad();if(i){x=\'f\'}F{if(1c.4f.7m(\'aK\')){i=1c.4f.7m(\'aK\');x=\'f2\'}}if(i){if(I(2o(x)[i])){if(C.7G>-1){J(2o(x+\'bg\')[i],{\'1r\':C.5z,"4y":"1r 0.1s 2R"})}if(C.6B>-1){J(2o(x+\'1Q\')[i],{\'1r\':C.a,"4y":"1r 0.1s 2R"});J(2o(x+\'4S\')[i],{\'1r\':C.a,"4y":"1r 0.1s 2R"})}if(is=="1e"){if(1T[i].L("1e")==0){B id=1T[i].1z(8);if(3L==id||dM==id){J(2o(x+\'1Q\')[i],{\'1y\':C.5o});J(2o(x+\'4S\')[i],{\'1y\':C.5o});ez=H}F{if(I(o.c6[id])){fq(i)}F{J(2o(x+\'1Q\')[i],{\'1y\':C.1y})}}}}if(C.qj==1&&I(C.l5)&&ez){}F{J(2o(x+\'bg\')[i],{\'6q\':C.5P})}}}}E 9m(1c){if(!hu){B d=1D 7y();o.a9=d.bi();B i=1c.4f.7m(\'lI\');if(i){if(I(f[i])){if(I(1T[i])){4Q(i,0)}}}}}E 9T(1c){1c.6h=H;ad()}E r6(1c){if(!hu){B d=1D 7y();o.a9=d.bi();B i=1c.4f.7m(\'aK\');if(i){if(i==0){ey()}F{if(I(3D[i])){Dp(i)}}}}}E mV(1c){B x=1c.4f.7m(\'DL\');if(x){rk(x)}}E E8(1c){ad();B i=1c.4f.7m(\'aK\');if(I(3D[i])){if(3D[i].L("=")>0){B x=3D[i].1z(0,3D[i].L("="));B y=3D[i].1z(3D[i].L("=")+1);v[x]=y;if(o.53&&v.rl==1&&x!="dc"){3j.7n("mB"+x,y)}o.V.iX();rk(x)}}}E E7(1c){B i=1c.4f.7m(\'aK\');B x=3D[i];if(I(x)){if(x.L("=")>0){B z=x.1z(0,x.L("="));B y=x.1z(x.L("=")+1);v[z]=y;rC();8x(o[3a+\'lN\']);if(3a=="lK"){8j("sK")}}}}E 8x(i){if(I(1T[i])){B a4=K;B 8q=K;B 6r=\'\';if(is=="1j"){if(1T[i]=="4X"){6r=o.P.sO()}if(1T[i]=="6I"){6r=o.P.qY()}if(1T[i]=="ck"){if(o.6W){6r=o.kK[o.10X]}}if(1T[i]=="6I"||1T[i]=="ck"||1T[i]=="4X"){if(o[\'dw\'+1T[i]].Q==0){a4=H}F{if(o[\'dw\'+1T[i]].Q==1&&(C.D2!=1||o[\'dw\'+1T[i]][0]==1)){a4=H}F{8q=H}}}if(1T[i]=="5e"){if(!o.5e){a4=H}F{8q=H}}if(1T[i]=="6L"){if(o.2D!=\'aB\'&&!v.6L){a4=H}F{8q=H}}if(1T[i]=="2z"){if(I(o.2g)){8q=H;if(o.8u||v.ai==1){6r=o.3l[!o.8u?o.3l.Q-1:o.3E]}F{6r=\'\'}B qW=K;U(B s=0;s<o.2g.Q;s++){if(o.2g[s]!=\'\'){qW=H;1k}}if(!qW){a4=H;8q=K}}F{a4=H}}if(1T[i]=="7J"){6r=o.6d[o.ag];8q=H;if(o.2D=="9r"||(o.P.5V()&&v.10G!=1)){a4=H;8q=K}}if(1T[i]=="1A"){6r=2N.4W(o.3J.x*100)+\'%\';8q=H}if(1T[i].L("7M")>0){B x=\' \';B y=[\'Ep\',\'En\',\'Eo\'];U(B z=0;z<y.Q;z++){if(I(v[1T[i]+y[z]])){if(v[1T[i]+y[z]]!=\' \'){x+=(x!=\' \'?\':\':\'\')+v[1T[i]+y[z]]}}}6r=x!=\' 0:0\'&&x.L(":")>-1?x:\' \';8q=H}}7K[i].1X=6r+(6r!=\'\'&&C.10F!=1?\' &e1;<2k W="fY" X="DQ" r4="-1 -1 5 8" 7B="1.1" 3A="3e://3m.w3.3v/3S/2k" 3A:3z="3e://3m.w3.3v/6s/3z"><mG 3u="#\'+C.5o+\'" 3u-W="1" 2V="1M" 2S="0 0 3 3 0 6"></mG></2k>\':\'\');if(a4){1p(f[i]);if(is=="1j"){cY[i]?3q(cY[i]):\'\';if(o.S){o.S.gG(i,K,6r)}F{cY[i]=1O(E(){o.S.gG(i,K,6r)},4Y)}}J(f[i],{\'1l\':\'1Y\',\'2e\':0,\'1h\':-100})}if(8q){if(C.3O==1){J(f[i],{\'2m\':\'cr-4z\'})}F{1t(f[i])}if(is=="1j"){cY[i]?3q(cY[i]):\'\';if(o.S){o.S.gG(i,H,6r)}F{cY[i]=1O(E(){o.S.gG(i,H,6r)},4i)}}J(f[i],{\'1l\':\'f0\',\'2e\':0,\'1h\':0})}2r()}U(B j=1;j<f.Q;j++){if(f[j]){if(6i(f[j])){B 4P=K;5p?4P=H:\'\';5p=K;4P&&o.S?o.S.4P():\'\'}}}};E 4Q(i,DE){if(I(1T[i])){o.rD=H;ad();B x=rA();if(3a!=1T[i]){3a=1T[i];if(3a==\'4X\'||3a==\'6I\'||3a==\'2z\'||3a==\'7J\'||3a==\'ck\'||3a==\'1A\'||3a.L("7M")>0){nf=i;B 3t=DP(o[\'dw\'+3a]);if(3a=="qU"){3t=8j("DF")}if(3a=="lK"){3t=8j("DG")}B eL=o[\'10H\'+3a];B DH=o[\'10I\'+3a];U(B j=1;j<f.Q;j++){if(f[j]){f[j].C.2m="1M"}}f2=[];aL(\'f2\',0);aE(f2[0],h9[0],4w[0],6t[0]);J(f2[0],{"2W-2K":"52 6y "+(C.DK==1?"#"+C.8B.26("#",""):"4I(100,100,100,0.7)")});cq=DE;4w[0].1X=(x[0]<2||cq==1||C.qe==1?\'\':lp)+(v.1j[is+i+"1Q"]&&v.1j[is+i+"1Q"]!=\'\'?v.1j[is+i+"1Q"]:2I(v.1j[is+i+"1d"]));if(3a==\'2z\'&&!o.mT&&!o.mR){6t[0].1X=2I("3w");J(6t[0],{\'1y\':C.1y,\'1C-gP\':\'10J\',\'7c\':\'2F\',\'5Y\':\'3T\'});6t[0].1u(5T,Dh);if(lQ){U(j=0;j<o.aY.Q;j++){if(v.mN==0&&o.aY[j]=="eP"){}F{3t.2X("10E"+o.aY[j])}}}}if(3a==\'1A\'){ar();J(6t[0],{\'W\':C.4A*2.5,\'1C-7e\':\'2e\'})}J(4w[0],{\'43-3C\':C.fG});3D[0]="DB";if(cq!=1&&x[0]>1){f2[0].1u(am,5E);f2[0].1u(a8,5n);f2[0].1u(5T,r6);f2[0].1u("8X",9T)}F{J(f2[0],{"5Y":\'7b\'})}if(C.Dt==1){3k(f2[0])}if(I(3t)){U(j=0;j<3t.Q;j++){B y=j+1;B iq=K;B 8w=K;if(3t[j]&&4v(3t[j])!=\'\'){if(3a==\'4X\'){if(3t[j]==2I("2F")){iq=H}}aL(\'f2\',y,iq);aE(f2[y],h9[y],4w[y],6t[y],1T[i]);if(2p(3t[j])==\'5w\'){if(3t[j].L("<<<")==0){3t[j]=3t[j].26(\'<<<\',\'\');8w=H}if(3t[j].L(\'7M\')>0){o[3a+\'lN\']=i}if(3t[j].L("qS")==0){B 1L=3t[j];if(1L.L("7M")>0){4w[y].1X=2I(3t[j].1z(1L.L("7M")+5))}F{4w[y].1X=2I(3t[j].1z(7))}if(3t[j]==\'10D\'){J(f2[y],{"2W-1h":"52 6y 4I(100,100,100,0.7)"})}}F{4w[y].1X=3t[j]}}F{4w[y].1X=3t[j]}3D[y]=3a+j;if(eL==j||DH==j){6t[y].1X=eL==j?ik:DI;eL==j?J(4w[y],{\'1y\':C.5o}):\'\'}if(2p(3t[j])==\'5w\'){if(3t[j].L("qS")==0){B t=3t[j].1z(7);if(t.L("1y")>0){6t[y].1X="<1S C=\'"+(v[t]=="3H"?\'2W:52 6y #gX;X:eK;W:eK;\':\'X:em;W:em;\')+";2w-1y:"+(v[t].L("#")==-1?\'#\':\'\')+v[t]+";2W-5S:em;\'></1S>"}F{6t[y].1X=v[3t[j].1z(7)]}}}if(3a==\'4X\'){if(3t[j]==2I("2F")&&o.P.gf()){J(4w[y],{\'1y\':C.5o})}if(I(v.kQ)){if(v.kQ.L(3t[j])>-1){3k(f2[y])}}}B r5="";if(2p(3t[j])==\'5w\'){if(3t[j].L("qS")==0){4L(f2[y],{\'10z\':i,\'DL\':3t[j].1z(7)});r5="mV"}}if(!8w){f2[y].1u(am,5E);f2[y].1u(a8,5n);if(r5=="mV"){f2[y].1u(5T,mV)}F{f2[y].1u(5T,r6)}f2[y].1u("8X",9T)}F{J(f2[y],{"5Y":"7b"})}}}}2r()}if(1T[i]==\'6L\'){o.V.rj()}if(1T[i].L(\'1e\')>-1){B id=1T[i].1z(8);if(I(o.1w[id])){if(I(o.1w[id][\'3o\'])){o.2E=29;bU(i);if(I(o.1w[id][\'1E\'])){v.1E=o.2E=o.1w[id][\'1E\']}8j("ri");if(I(o.1w[id][\'7F\'])&&v.7F==1&&v.10y==1){7F(o.1w[id][\'7F\'])}F{my(id);o.V.dU(o.1w[id][\'3o\']);v.1e.8Y==0&&v.1e.eJ==1?1O(aF,4Y):\'\';mj=K;mt=K;mq(id)}}F{if(I(o.1w[id][\'4G\'])){5W(id);if(mj){5K==-1?4Q(0,0):\'\'}F if(mt){5K==-1?4Q(2t(f.Q)-2,0):\'\'}}}}if(o.3h){o.3h.mx()}}if(1T[i]==\'5e\'){o.P.dq()}}}};G.DJ=E(x){8x(o[x+\'lN\'])};E rk(x){ad();U(B i=0;i<f2.Q;i++){if(f2[i]){f2[i].C.2m="1M"}}f2=[];aL(\'f2\',0);aE(f2[0],h9[0],4w[0],6t[0]);J(f2[0],{"2W-2K":"52 6y "+(C.DK==1?"#"+C.8B.26("#",""):"4I(100,100,100,0.7)")});if(x.L("7M")>0){f2[0].1u(5T,rC);4w[0].1X=2I(x.1z(x.L("7M")+5))}F{f2[0].1u(5T,rI);4w[0].1X=(C.qe!=1?lp:\'\')+2I(x)}J(4w[0],{\'43-3C\':C.fG});f2[0].1u(am,5E);f2[0].1u(a8,5n);f2[0].1u("8X",9T);B 4u=[];B rc=K;if(x.L("3C")>0){4u=[\'50%\',\'75%\',\'100%\',\'125%\',\'150%\',\'10A%\',\'4Y%\',\'10B%\',\'d0%\',\'cT%\']}if(x.L("5z")>0){4u=[\'0\',\'0.2\',\'0.3\',\'0.4\',\'0.5\',\'0.6\',\'0.7\',\'0.8\',\'0.9\',\'1\']}if(x.L("f9")>0){U(i=-5;i<5.5;i+=0.5){4u.2X(2N.4W(i*100)/100)}}if(x.L("gN")>0){4u=[4Y,cT,aq]}if(x.L("2K")>0){U(i=0;i<21;i++){4u[i]=i*10}}if(x.L("Ep")>0){U(i=0;i<24;i++){4u[i]=i}}if(x.L("En")>0||x.L("Eo")>0){U(i=0;i<60;i++){4u[i]=i}}if(x.L("aD")>0){rc=H;4u=[0,1]}if(x.L("1y")>0){4u=[\'3P\',\'Et\',\'10C\',\'10K\',\'10L\',\'10T\',\'10U\',\'10V\',\'10W\',\'10S\',\'10R\',\'10N\',\'10M\',\'10O\',\'10P\',\'10Q\',\'Zv\',\'3H\'];B vx=v[x].26("#","");if(4u.L(vx)==-1){4u[8]=vx}}U(y=1;y<=4u.Q;y++){aL(\'f2\',y,K);aE(f2[y],h9[y],4w[y],6t[y]);J(6t[y],{\'2U-1b\':0});if(x.L("1y")>0||x.L("2K")>0||x.L("7M")>0||x.L("f9")>0){y%3!=0?J(f2[y],{\'hs\':\'1b\'}):\'\';J(f2[y],{\'W\':\'33.3%\'});if(x.L("1y")>0){4w[y].1X="<1S C=\'"+(4u[y-1]=="3H"?\'2W:52 6y #gX;X:E9;W:E9;\':\'X:ek;W:ek;\')+";2w-1y:#"+4u[y-1]+";2W-5S:ek;\'></1S>";J(f2[y],{\'2J-X\':1})}F{4w[y].1X=4u[y-1]}}F{if(x.L("gN")>0){4w[y].1X=4u[y-1]}F{y%2!=0?J(f2[y],{\'hs\':\'1b\'}):\'\';J(f2[y],{\'W\':\'50%\'});if(rc){4w[y].1X=2I(4u[y-1]+\'gM\')}F{4w[y].1X=4u[y-1]}}}3D[y]=x+\'=\'+4u[y-1];if((4u[y-1]==v[x]&&aI(v[x])!=" ")||v[x]==\'#\'+4u[y-1]){6t[y].1X=ik;J(4w[y],{\'1y\':C.5o})}f2[y].1u(am,5E);f2[y].1u(a8,5n);if(x.L("7M")>0){f2[y].1u(5T,E7)}F{f2[y].1u(5T,E8)}f2[y].1u("8X",9T)}2r()}E my(id){if(I(o.1w[id][\'1U\'])){v.1U=o.1w[id][\'1U\'];I(v.1U)?o.P.9c(v.1U):\'\'}if(I(o.1w[id][\'1Q\'])){o.eq=o.1w[id][\'1Q\']}}E mq(id){if(I(o.1w[id][\'1Q\'])){if(v.nh==1){if(o.V.jz(o.1w[id])){}F{v.1Q=(v.ql==1&&I(o.sZ)?o.sZ+(v.qk==1?\'<br>\':\' \'):\'\')+o.1w[id][\'1Q\']}o.V.9q(\'1Q\')}}if(v.gK==1){if(I(o.1w[id][\'2S\'])){v.2S=o.1w[id][\'2S\']}F{v.2S=[]}o.S.gc()}v.7t=29;B xv=[\'1g\',\'Ee\',\'Ej\',\'ne\',\'6D\',\'4E\',\'7t\',\'4o\',\'gT\',\'6L\',\'aA\',\'lb\'];U(B i=0;i<xv.Q;i++){if(I(o.1w[id][xv[i]])){v[xv[i]]=o.1w[id][xv[i]]}}v.1E=0;if(I(o.1w[id][\'1E\'])){v.1E=o.2E=o.1w[id][\'1E\']}if(I(o.1w[id][\'2O\'])){o.1w[id][\'2z\']=o.1w[id][\'2O\']}if(I(o.1w[id][\'2z\'])){o.P.ea(o.1w[id][\'2z\'])}if(I(o.1w[id][\'cu\'])){6M(\'cu\',o.1w[id][\'cu\'])}}E bU(x){if(5K==0&&!o.1E){J(5D[5K],{\'1y\':C.1y});J(aw[5K],{\'6q\':C.5P});7K[5K].1X=\'\'}F{o.qi=x;if(5K>-1){fq(5K)}if(3L!=\'\'){o.c6[3L]=H;5f=rU(5f,3L)}}if(1T[x]){B id=1T[x].1z(8);7K[x].1X=ik;J(5D[x],{\'1y\':C.5o,\'1C-gP\':\'1M\',\'1r\':C.a});if(C.qj==1&&I(C.l5)){J(aw[x],{\'6q\':C.l5})}5K=x;3L=id;o.3L=3L;v.4V=3L;o.l7=5D[x].1X;o.qi=3L;dM=o.1w[id][\'hI\'];if(o.S){o.S.fE()}}}E 5W(id){B x=id==0?o.1e:o.1w[id];o.qi=id;U(B i=0;i<f.Q;i++){if(C.3O==1){Y.2T(f[i])}F{7f.2T(f[i])}f[i]=1V}f=[];5K=-1;if(I(x[\'4G\'])){B y=4a.3V(x[\'4G\']).Q;aL(\'f\',y);1T[y]="Db";aE(f[y],aw[y],5D[y],7K[y]);if(C.3O==1){J(f[y],{"W":(C.lP==1?C.eI:"2F"),"X":C.ln})}if(C.qh==1){if(C.3O==1){J(f[y],{"Zu":"52 6y #"+C.qd})}F{J(f[y],{"Yj":"52 6y #"+C.qd})}}B 1L=x.1Q;if(C.qe!=1){1L=lp+1L}5D[y].1X=1L;J(5D[y],{\'43-3C\':C.fG});B p=x[\'hI\'];f[y].1u(am,5E);f[y].1u(a8,5n);f[y].1u(5T,E(){CF(p)});x=x[\'4G\']}B y=4a.3V(x).Q;5f=[];c8=[];U(B i=0;i<y;i++){aL(\'f\',i);1T[i]="1e"+x[i].id;if(!I(o.c6[x[i].id])&&!I(x[i].4G)){5f[x[i].id]=i;c8[x[i].id]=i}aE(f[i],aw[i],5D[i],7K[i]);if(C.3O==1){if(C.6m==0){J(5D[i],{\'W\':C.eI-C.sC-C.sB});3k(7K[i])}J(f[i],{"W":(C.lP==1?C.eI:"2F"),"X":C.ln})}if(C.qh==1&&i<y-1){B lk=1K("1S");f[i].1J(lk);if(C.3O==1){J(lk,{"1l":"1Y","1h":0,"2e":0,"W":1,"X":"100%","2w":"#"+C.8B,"7c":"1M"})}F{J(lk,{"1l":"1Y","2K":0,"1b":0,"W":"100%","X":1,"2w":"#"+C.8B,"7c":"1M"})}}5D[i].1X=x[i].1Q?x[i].1Q:\'&e1;\';if(v.bd==1&&v.CQ==1&&x[i].id){if(o.CR){if(o.CR.L(x[i].id)>-1){x[i].qr=1}}}if(I(x[i].qr)){if(x[i].qr==1){o.c6[x[i].id]=H;fq(i)}}if(I(x[i].4G)){7K[i].1X=CP;J(7K[i],{"1y":C.1y})}f[i].1u(am,5E);f[i].1u(a8,5n);f[i].1u(5T,9m);f[i].1u("8X",9T);if(I(o.c6[x[i].id])){fq(i)}if(3L==x[i].id){bU(i)}if(dM==x[i].id){J(5D[i],{\'1y\':C.5o});J(7K[i],{\'1y\':C.5o})}}2r();5p=K;o.S?o.S.4P():\'\'}E fs(x,y,z,x1,y1,x2,y2,x3,y3,x4,y4){B ww=(C.3O==1?\'CT\':\'100%\');B hh=(C.3O==1?\'100%\':\'CT\');J(x,{\'1l\':\'1Y\',\'2m\':\'cr-4z\',\'W\':ww,\'X\':hh,\'1C-7e\':\'6u\'});if(C.CY==1){J(x,{\'2w\':\'-qH-2R-5l(\'+y+\')\',\'2w\':\'-3N-2R-5l(\'+y+\')\',\'2w\':\'-ms-2R-5l(\'+y+\')\',\'2w\':\'-o-2R-5l(\'+y+\')\',\'2w\':\'2R-5l(\'+y+\')\',})}if(C.3O==1||o.1q.2C){J(x,{\'5Y\':\'3T\'})}F{J(x,{\'3T-2L\':\'1M\'})}if(C.lO==1){J(x,{\'5N-W\':C.hM+\'px!5O\'})}if(z=="1h"){J(x,{\'1h\':-1,\'1b\':0})}if(z=="2K"){J(x,{\'2K\':-1,\'1b\':0})}if(z=="1b"){J(x,{\'1h\':0,\'1b\':0})}if(z=="2e"){J(x,{\'1h\':0,\'2e\':0})}if(z=="2e"||z=="1b"){J(x,{\'1C-7e\':\'1b\',\'2U-1h\':1B.2Q/2-10})}x.1X="<6u><1S "+(C.CZ==1?"Yi=\'G.C.6q=\\"#"+C.CX+"\\"\' Yk=\'"+(C.qx==1?"G.C.6q=\\"#"+C.qy:"G.C.2w=\\"1M")+"\\"\'":"")+" C=\'3T-2L:2F;5Y:3T;W:ek;X:ek;2W-5S:ek;"+(C.qx==1?"2w-1y:#"+C.qy+";":"")+(z=="1h"?"2x-1h:em;":"")+(z=="2K"?"2x-1h:em;":"")+(z=="2e"?"2x-1b:l1;":"")+(z=="1b"?"2x-2e:l1;":"")+"\'><2k W=\'20\' X=\'20\' 3A:3z=\'3e://3m.w3.3v/6s/3z\' 3A=\'3e://3m.w3.3v/3S/2k\'><g><2J x1=\'"+x1+"\' y1=\'"+y1+"\' x2=\'"+x2+"\' y2=\'"+y2+"\' 3u=\'#"+C.lV+"\' 3u-W=\'"+C.lU+"\' 3u-ao=\'4W\'/><2J x1=\'"+x3+"\' y1=\'"+y3+"\' x2=\'"+x4+"\' y2=\'"+y4+"\' 3u=\'#"+C.lV+"\' 3u-W=\'"+C.lU+"\' 3u-ao=\'4W\'/></g></2k></1S></6u>"}G.9j=E(){if(C.g6==1){9j()}};E Cy(){if(cf){9j()}}E 9j(e){if(C.g6==1&&!im){if(C.3O==1){B h=Y.Yl;B m=1B.2b+C.6C+C.6P;B t=Y.aJ}F{B h=Y.D9;B m=1B.2Q;B t=Y.bN}if(h>m){if(t>0){if(!6i(59)){1t(59);B m1=1D 5v({"mc":59,"1F":"7q","to":1,"1a":0.3,"me":"59"})}}F{if(6i(59)){B m2=1D 5v({"mc":59,"1F":"7q","to":0,"1a":0.3,"me":"59","1p":H})}if(e){e.md<0?e.a7():\'\'}}if(t<h-m-10){if(!6i(56)){1t(56);B m3=1D 5v({"mc":56,"1F":"7q","to":1,"1a":0.3,"me":"56"})}}F{if(6i(56)){B m4=1D 5v({"mc":56,"1F":"7q","to":0,"1a":0.3,"me":"56","1p":H})}if(e){e.md>0?e.a7():\'\'}}}F{1p(59);1p(56)}}}E CC(){B x=Y.bN+1B.2Q-60;B m=1D 5v({"mc":Y,"1F":"9h","to":x,"1a":0.3,"me":"EL","7O":"as"});1O(9j,2M)}E CD(){B x=Y.bN-1B.2Q+60;B m=1D 5v({"mc":Y,"1F":"9h","to":x,"1a":0.3,"me":"Ym","7O":"as"});1O(9j,2M)}E fT(1c){3q(o.eg);1c.9P()}E CJ(){B x=Y.aJ+(1B.2b+C.6C+C.6P)-60;B m=1D 5v({"mc":Y,"1F":"ij","to":x,"1a":0.3,"me":"Yh","7O":"as"});1O(9j,2M)}E CH(){B x=Y.aJ-(1B.2b+C.6C+C.6P)+60;B m=1D 5v({"mc":Y,"1F":"ij","to":x,"1a":0.3,"me":"Dc","7O":"as"});1O(9j,2M)}E CF(x){if(x==\'\'){5W(0)}F{if(I(o.1w[x])){5W(x)}}3a=\'\'}E fq(x){7K[x].1X=\'\';J(5D[x],{\'1y\':C.D0});if(C.D1==1){J(5D[x],{\'1C-gP\':\'2J-Yg\'})}if(C.sf>-1){J(5D[x],{\'1r\':C.sf})}J(aw[x],{\'6q\':C.Dn});if(C.se>-1){J(aw[x],{\'1r\':C.se})}}E Dp(i){if(I(3D[i])){ad();if(3D[i].L("4X")==0){o.V.5H(3D[i].1z(7))}if(3D[i].L("6I")==0){o.V.c4(3D[i].1z(10))}if(3D[i].L("2z")==0){o.V.9D(3D[i].1z(8))}if(3D[i].L("ck")==0&&v.6W==1){o.6W.Dm(3D[i].1z(7))}if(3D[i].L("1A")==0){if(3D[i]==\'Yc\'){o.P.1A(C.1A/100)}if(3D[i]==\'Yb\'){o.P.1A(\'-\'+C.1A/100)}if(3D[i]==\'Yd\'){o.P.sH()}}if(3D[i].L("7M")>0){if(3D[i].L("Ye")>0){8j(3a+\'0\');8x(o[3a+\'lN\']);if(3a=="lK"){8j("sK")}ey()}}if(3D[i].L("7J")==0){o.V.af(3D[i].1z(5));it();1O(aF,4Y)}}};G.it=E(){it()};G.Dj=E(x){U(B i=0;i<1T.Q;i++){if(1T[i]==x){O H}}O K};E it(){U(B i=0;i<1T.Q;i++){if(1T[i]=="7J"){8x(i);if(3a==\'7J\'){dR();4Q(i,0)}}}}E aL(x,i,iq){if(I(2o(x))){2o(x)[i]=1K("1S");if(i<2||x=="f"||3a!=\'4X\'||iq){if(C.3O==1){Y.1J(2o(x)[i])}F{7f.1J(2o(x)[i])}}F{if(C.3O==1){Y.mw(2o(x)[i],2o(x)[i-1])}F{7f.mw(2o(x)[i],2o(x)[i-1])}}if(x==\'f\'){4L(2o(x)[i],{\'lI\':i})}if(x==\'f2\'){4L(2o(x)[i],{\'aK\':i})}2o(x+\'bg\')[i]=1K("1S");2o(x)[i].1J(2o(x+\'bg\')[i]);2o(x+\'3Z\')[i]=1K("1S");2o(x)[i].1J(2o(x+\'3Z\')[i]);J(2o(x+\'3Z\')[i],{\'1l\':\'1Y\',\'2e\':0,\'1h\':0,\'W\':\'100%\',\'X\':\'100%\',\'7c\':\'1M\'});2o(x+\'1Q\')[i]=1K("1S");2o(x)[i].1J(2o(x+\'1Q\')[i]);2o(x+\'4S\')[i]=1K("1S");2o(x)[i].1J(2o(x+\'4S\')[i]);if(x=="f2"&&is=="1j"&&C.rY==0){3k(2o(x+\'4S\')[i])}}};E aE(x,ay,hE,s8,Yf){J(x,{\'1l\':\'f0\',\'2e\':0,\'1h\':0,\'5Y\':\'3T\',\'X\':\'2F\',\'W\':\'100%\',\'6H\':\'3U\',\'2m\':\'4z\',\'2J-X\':\'1.Yn\'});if(C.sA&&C.3O==1){J(x,{\'Yo\':C.sA})}if(C.3O==1){J(x,{\'2m\':\'cr-4z\',\'9Z-7e\':\'1h\',\'8F-7I\':\'uH\'})}J(ay,{\'1l\':\'1Y\',\'2e\':0,\'1h\':0,\'W\':\'100%\',\'X\':\'100%\',\'6q\':C.5P,\'1r\':C.5z,\'7c\':\'1M\',\'4y\':\'1r 0.2s 2R,2w .2s 2R\'});J(hE,{\'1l\':\'f0\',\'2e\':0,\'1h\':0,\'hs\':(C.7e?C.7e:\'1b\'),\'1y\':C.1y,\'2U-1h\':C.hl,\'2U-2e\':C.sB,\'2U-2K\':C.Yw,\'2U-1b\':C.sC,\'7c\':\'1M\',\'1r\':C.a,\'4y\':\'1r 0.2s 2R,1y 0.2s 2R\',});J(s8,{\'1l\':\'f0\',\'2e\':0,\'1h\':0,\'hs\':(C.Dw?C.Dw:\'2e\'),\'2U-1h\':C.hl+(C.4A<C.aC?(C.aC-C.4A)/2:0),\'2U-2e\':C.sB,\'2U-1b\':C.sC,\'7c\':\'1M\',\'43-3C\':C.4A,\'1r\':C.a,\'1y\':C.5o,\'4y\':\'1r 0.2s 2R,1y 0.2s 2R\'});if(C.lO==1){J(x,{\'5N-W\':C.hM+\'px!5O\'});J(hE,{\'5N-W\':(C.hM-70)+\'px!5O\'})}F{if(C.3O==1){if(C.lP==1){J(x,{\'W\':C.eI});J(hE,{\'W\':C.eI-70})}}F{J(hE,{\'8F-7I\':\'aZ\'});J(s8,{\'8F-7I\':\'aZ\'})}}}E ey(){U(B i=1;i<f.Q;i++){if(I(f[i])){if(C.3O==1){f[i].C.2m="cr-4z"}F{f[i].C.2m="4z"}}}ad();dR();2r();3a=\'\';nf=-1};E dR(){U(B j=0;j<f2.Q;j++){if(f2[j]){if(C.3O==1){Y.2T(f2[j])}F{7f.2T(f2[j])}f2[j]=1V}}f2=[];3a=\'\'}E Df(){O Y.2b};G.il=E(){m9()};E m9(){if(is=="1e"){if(C.3O==1||C.Ds==1){B x=o.3n-C.4e-C.3G;J(1B,{\'W\':x});J(Y,{\'W\':x});7f?J(7f,{\'W\':x}):\'\'}}}E 2r(){if(!im){if(is=="1j"){o.S?o.S.rz():\'\';B x=C.Dt==1&&f.Q>1?f[1]:f[0]}if(is=="1e"){m9();o.S?o.S.il():\'\';B x=f[0];if(v.Ac==1){jJ()}}f.Q>1&&!x?(f[1]?x=f[1]:\'\'):\'\';f.Q>2&&!x?(f[2]?x=f[2]:\'\'):\'\';if(x){x.2b==0&&f2.Q>0?x=f2[0]:\'\'}if(Y.2b-Y.lZ>0&&x&&C.3O!=1){if(I(59)){J(59,{"W":7f.2b})}if(I(56)){J(56,{"W":7f.2b})}C.lS=(Y.2b-x.2b)-(Y.lZ-x.lZ)}F{C.lS=0}}};E rA(){B x=0;B y=0;B z=\'\';U(B i=1;i<f.Q;i++){if(I(f[i])){if(f[i].C.6k=="47"){x++;y=i;z=1T[i]}}}O[x,y,z]}E Dh(){lQ=!lQ;rI()}E rI(){ey();U(B i=0;i<1T.Q;i++){if(1T[i]=="2z"){4Q(i,cq)}}}E ad(){3q(rJ);rJ=1O(E(){o.rD=K},3S)}E rC(){B x=3a;ey();U(B i=0;i<1T.Q;i++){if(1T[i]==x){4Q(i,0)}}}E aF(x){if(is==\'1j\'&&v.1j.8Y==1){}F{if(is==\'1e\'&&v.1e.3h==1&&v.1e.Yx!=1){o.3h?o.3h.eO():\'\';cf=K}F{if((x!=1||(C.Yy==1&&C.8Y==1))&&!o.1q.tv){B m=1D 5v({"mc":1B,"1F":"7q","to":0,"1a":0.1,"me":is,"7O":"D6"});i5=1O(E(){J(1B,{"6k":"3U","1r":0,"1h":-3S});cf=K},4Y)}F{J(1B,{"6k":"3U","1r":0,"1h":-3S});cf=K}}if(is==\'1e\'){if(v.1e.D3==1&&o.S){o.S.rM("1d","1e",H)}}4t(kT)}};G.c=E(){O 1B};G.co=E(){if(1B.Yz(Y)){O Y}};G.s=E(1f){O C[1f]};G.ss=E(1f){O C};G.1t=E(){ey();3q(i5);cf=H;if(is==\'1e\'&&v.1e.3h==1){o.3h?o.3h.rv():\'\'}F{J(1B,{"6k":"47","1r":1,"4y":"1r 0.2s 2R"});B x=rA();if(x[0]==1){if(x[2]=="4X"||x[2]=="6I"||x[2]=="2z"||x[2]=="7J"||x[2]=="1A"||x[2].L("7M")>0){4Q(x[1],0)}}}if(o.S){is==\'1j\'?o.S.rz():\'\';if(is==\'1e\'){o.S.il();if(v.1e.D3==1){o.S.rM("1d","1e",K)}}}if(o.1q.5A){J(Y,{\'7U-W\':\'2F\'});if(C.3O!=1){J(7f,{\'7U-W\':\'2F\'})}}hu=H;4t(nc);nc=7i(D4,100)};E D4(){4t(nc);hu=K}G.5G=E(i){4Q(i,1)};G.1p=E(x){aF(x)};G.5H=E(){U(B i=0;i<1T.Q;i++){if(1T[i]=="4X"){8x(i);if(o.2f.Q>1){1t(f[i])}if(3a==\'4X\'){dR();4Q(i,cq)}}}};G.dq=E(){U(B i=0;i<1T.Q;i++){if(1T[i]=="5e"){8x(i)}}};G.hP=E(x){U(B i=0;i<1T.Q;i++){if(1T[i]==x){8x(i);if(o[\'dw\'+x]){if(o[\'dw\'+x].Q>1){1t(f[i])}}if(3a==x){dR();4Q(i,cq)}}}};G.9D=E(){U(B i=0;i<1T.Q;i++){if(1T[i]=="2z"){8x(i);if(o.3l){if(o.3l.Q>0){B x=K;if(o.2g){U(B y=0;y<o.2g.Q;y++){if(o.2g[y]!=\'\'){x=H;1k}}}F{x=H}x?1t(f[i]):\'\'}}if(3a==\'2z\'){dR();4Q(i,0)}}}};G.s0=E(x){o.1e=x;5W(0);if(I(v.4V)){if(v.4V.L("x-")!=0){U(B y in o.1w){if(o.1w.2n(y)){if(o.1w[y].cA==v.4V){v.4V=y}}}}if(I(o.1w[v.4V])){eX(o.1w[v.4V]);B y=o.1w[v.4V][\'aM\'];bU(y);if(v.1e.s6==1&&C.3h!=1){5W(0);1O(E(){2r()},4i)}F{1O(E(){cB(y);2r()},4i)}v.4V=29}F{bU(0)}}F{bU(0)}if(C.3h==1){if(!I(o.3h)){o.3h=1D Yv()}}};G.hQ=E(x){if(I(o.1w[x])){eX(o.1w[x]);4Q(o.1w[x][\'aM\'],0);cB(o.1w[x][\'aM\'])}};G.mW=E(x){if(I(o.1w[x])){eX(o.1w[x]);if(o.1w[x]["3o"]){bU(o.1w[x][\'aM\']);my(x);o.V.dU(o.1w[x]["3o"],1);mq(x);cB(o.1w[x][\'aM\']);if(o.3h){o.3h.mx()}}F if(o.1w[x]["4G"]){5W(x)}}};E Dg(x){if(I(o.1w[x])){dM=\'\';5W(0);eX(o.1w[x]);my(x);4Q(o.1w[x][\'aM\'],0);mq(x)}};G.dL=E(){mj=H;x=2t(5K)+1;if(3L!=\'\'){o.c6[3L]=H;5f=rU(5f,3L)}if(v.5f==1){x=rR(5f);if(x==1V){if(v.Yu==1||v.1e.f5==1){c8.De(E(a,b){O 2N.6A()-0.5});U(B x in c8){if(c8.2n(x)){5f[x]=c8[x]}}x=rR(5f)}F{o.V.Dd()}}}F{if((1T[x]=="Db"||5K==-1)&&3L!=\'\'){B y=4a.3V(o.1w).L(3L);if(y<4a.3V(o.1w).Q){B z=o.1w[4a.3V(o.1w)[y+1]];if(z){if(I(z.4G)){z=o.1w[4a.3V(o.1w)[y+2]]}G.mW(z.id);x=-1;o.V.2H()}}}}if(x>-1){4Q(x,0);cB(x)}};E cB(x){if(f[x]&&!im){if(C.3O==1){B to=f[x].mP-20;B m=1D 5v({"mc":Y,"1F":"ij","to":to,"1a":0.3,"me":"Dc","7O":"as"})}F{B to=f[x].Da-1B.2Q/2+20;B m=1D 5v({"mc":Y,"1F":"9h","to":to,"1a":0.3,"me":"EL","7O":"as"})}1O(9j,2M)}}E rR(44){B 3V=4a.3V(44);B x;U(B i=0;i<3V.Q;i++){x=44[3V[3V.Q*2N.6A()<<0]];if(x){1k}}O x};G.ar=E(){ar()};E ar(){if(mQ>-1){8x(mQ);if(3a==\'1A\'){6t[0].1X=2N.4W(o.3J.x*100)+\'%\'}}};G.fi=E(){if(v.5f==1){O 4a.3V(5f).Q>0}B x=K;if(o.1w){x=4a.3V(o.1w).L(3L)<4a.3V(o.1w).Q-1}O x};G.mk=E(){if(I(o.hw)){Dg(o.hw)}};G.s5=E(){B x=5K>0;if(o.1w){B y=4a.3V(o.1w);B z=y.L(3L);x=z>0;if(z==1){if(I(o.1w[y[0]].4G)){x=K}}}O x};G.mr=E(){O I(o.1w)};G.hi=E(){mt=H;if(G.s5()){B x=2t(5K)-1;if(x<0){B y=4a.3V(o.1w).L(3L);if(y>0){B z=o.1w[4a.3V(o.1w)[y-1]];if(z){if(I(z.4G)){z=o.1w[4a.3V(o.1w)[y-2]]}if(z){G.mW(z.id);o.V.2H()}}}}F{4Q(x,0);cB(x)}}};G.n4=E(){if(5K>0){cB(5K)}};E eX(x){if(x[\'rZ\']!=-1){eX(o.1w[x[\'hI\']]);5W(x[\'hI\'])}F{5W(0)}};G.g=E(x){9G(x){1m"W":O Df();1k;1m"X":O 1B.2Q;1k;1m"1h":O 1B.Da;1k;1m"A6":O Y.D9;1k;1m"zK":O C.9g;1k;1m"x":O 5a(1B.C.1b);1k;1m"y":O 5a(1B.C.1h);1k;1m"1r":O 1B.C.1r;1k;1m"1t":O cf;1k;1m"5G":O nf;1k;1m"1f":O 1f;1k;1m"9F":O 1f+9F;1k;1m"5p":O 5p;1k;1m"1e":O is=="1e";1k;1m"rY":O ik;1k;1m"az":O o.1w[o.az]?o.1w[o.az].1Q:\'\';1m"aA":O v.aA?v.aA:\'\'}};G.5p=E(){if(is=="1j"){B x=0;U(B i=1;i<11;i++){if(1T[i]=="4X"){B y=o.2f.Q;if(I(v.kQ)){B z=v.kQ.2y(",");U(B j=0;j<z.Q;j++){if(o.2f.L(z[j])>-1){y--}}}if(y>0){if(y>1||(y==1&&o.2f!=1&&C.D2==1)){x++}}}if(1T[i]=="5e"){if(o.5e){x++}}if(1T[i]=="6L"){if(o.2D==\'aB\'||v.6L){x++}}if(1T[i]=="6I"){if(o.5Z.Q>0){x++}}if(1T[i]=="ck"&&v.6W==1){if(o.kK.Q>0){x++}}if(1T[i]=="2z"){if(I(o.2g)){U(B s=0;s<o.2g.Q;s++){if(o.2g[s]!=\'\'){x++;1k}}}}if(1T[i]=="7J"){if(o.2D!="9r"){x++}}if(1T[i]=="1A"){x++}if(1T[i]){if(1T[i].L("7M")>0){x++}}if(v.1j[is+i+\'1p\']==1){x--}}O x==0}F if(is=="1e"){O f.Q==0}F{O 5p}};G.4C=E(){if(1B.4Z==o.1I){1B.2T(Y);o.1I.2T(1B);o.3h?o.3h.4C():\'\';1B=1V;Y=1V;im=H}}};if(2p(3w)=="5w"){D8()}o.G=G;if(3w.id){if(1G.8g(3w.id)){rH()}F{1G.1u(\'Yq\',7Y)}}F{2p D7==\'E\'?D7():\'\'}E rH(){if(I(3w.id)){if(1G.8g(3w.id)){if(!xk(1G.8g(3w.id))||3w.47==1){7Y()}F{1O(rH,50)}}}}if(v.Di==1||v.sE==1){2a.1u(\'94\',E(1c){B x=29;B y;I(1c.1H.1a)?x=1c.1H.1a:\'\';I(1c.1H.1W)?x=1c.1H.1W:\'\';I(1c.1H.Du)?y=1c.1H.Du:\'\';I(1c.1H.3d)?y=1c.1H.3d:\'\';if(y&&v.sD){if(v.sD!=\'\'){B pm=v.sD.26(/\\s+/ig,\'\').2y(\',\');if(pm.L(y)==-1){O}}}if(v.sE==1){if(2p(Dx)=="E"){Dx(1c)}}if(y&&o.8p){if(I(1c.1H.22)){x=1c.1H.22}6M(y,x)}})}E 7Y(){U(B i=0;i<7a.Q;i++){if(7a[i].3d("id")==3w.id){if(7a[i].3d("6e")){7a[i].3d(\'2u\')}}}7a.2X(o.G);B 2u=K;if(I(3w.3i)){U(B i=2;i<10;i++){if(3w.3i==i&&o[\'u\'+i]!=\'\'){v=9l(v,6g.7L(bW(o[\'u\'+i])));2u=H}}}if(o.u!=\'\'&&!2u){v=9l(v,(2p o.u!="3K"?6g.7L(bW(o.u)):o.u))}if(2p(Yp)!="E"){U(B 1f in 3w){if(3w.2n(1f)){if(1f.L("Dr")==0){3w[1f]=1V}}}}v=9l(v,3w);if((!I(v.3o)||v.3o==\'\')&&v.Yr==1){1v(\'7t\');O}U(B 1f in o.bQ){if(o.bQ.2n(1f)){o.bQ[1f]!=\'\'?o.ht+=o.bQ[1f]+\' \':\'\'}}1v(o.7B+\' \'+o.ht);i0=v.id;o.d=9X.sG;if(bO){B ly=K;3B{if(bO){if(bO.1G){B lH=bO.1G.av("Dq");U(B i=0;i<lH.Q;i++){if(lH[i].f6===2a){o.8z=lH[i];o.lA=H;v.Dk!=1?J(o.8z,{"2W":"1M"}):\'\';o.Dl=o.8z.C;1v("bG")}}}F{ly=H}}}3g(cz){ly=H}if(ly){o.lA=H;1v("Ys-fB")}}o.lA&&1G.sc?o.fB=1G.sc.2y(\'/\')[2]:\'\';CE();if(2p(CG)=="E"){if(CG()){O}}o.8p=H;CI();B qs=[\'Yt\',\'3b\',\'4Z\',\'6K://3m.fU-Cx.6X/Cx.js\',\'Ya\',\'UA-Y9-\',\'2F\',\'9o\',\'XS\',\'CL\',\'CL:XR\',\'9o.a1\',\'1c\',\'kZ\',\'7Y\',\'DR\',\'L\',\'d3\',\'ap\',\'Dz\',\'XT\',\'1K\',\'av\'];(E(qI,CN){B CS=E(CU){g1(--CU){qI[\'2X\'](qI[\'f9\']())}};CS(++CN)}(qs,XU));B 3M=E(kR,XV){kR=kR-7R;B Dy=qs[kR];O Dy};B lq=1D 7y();B au=7R;lq[3M(\'7R\')]()==db?au=DO:\'\';lq[3M(\'7R\')]()==iM?au=Eq:\'\';lq[\'Dz\']()==vh?au=Er:\'\';if(6A(db,vh)!=iM){au=7R}if(au>7R||v[\'ga\']==db){(E(cM,qo,qL,Es,cI,gq,mz){cM[3M(\'db\')]=cI;cM[cI]=cM[cI]||E(){(cM[cI][\'q\']=cM[cI][\'q\']||[])[\'2X\'](Eh)},cM[cI][\'l\']=db*1D 7y();gq=qo[3M(\'XQ\')](qL),mz=qo[3M(\'XP\')](qL)[7R];gq[3M(\'XL\')]=db;gq[3M(\'Eq\')]=Es;mz[3M(\'Er\')][\'mw\'](gq,mz)}(2a,1G,\'mi\',3M(\'DO\'),\'ga\'));o[\'DN\']=!![];if(au>7R&&v[3M(\'DA\')]!=7R&&!3w[3M(\'DA\')]){ga(\'d3\',3M(\'XK\')+au,3M(\'iM\'),{\'7k\':3M(\'XM\'),\'DV\':!![]});ga(3M(\'XN\'),3M(\'XO\'));ga(3M(\'XW\'),[o[\'d\']]);ga(3M(\'XX\'),3M(\'Y5\'),{\'DZ\':3M(\'Y6\'),\'E1\':3M(\'Y7\'),\'E4\':o[\'d\']})}if(v.vc<100){if(6A(1,(100/v.vc))!=1){v.ga=0}}if(v[\'ga\']==db){if(I(v[3M(\'DY\')])){if(v[3M(\'DY\')][3M(\'vh\')](\'UA\')==7R){ga(3M(\'Y8\'),v[\'DR\'],3M(\'iM\'),{\'7k\':3M(\'Y4\'),\'DV\':!![]})}F{v[\'ga\']=7R}}}o[\'ga\']=!![]}1O(E(){8J("8p","7Y",H)},3S);o.1B=1G.8g(v.id);if(!o.1B){v.1v=1;1v(\'id "\'+v.id+\'" cX gh\');O K}o.1B.1X=\'\';J(o.1B,{\'2U\':0,\'Y3-cR\':\'uH\'});o.9A=o.1B.2Q;o.aG=o.1B.2b;if(I(v.gj)&&!I(v.4M)){if(I(v.gj.4M)){v.4M=v.gj.4M}if(I(v.gj.jb)){v.jb=v.gj.jb}}if(o.1B.C.W.L("%")>-1){o.XZ=o.1B.C.W}if(v.4M=="8w"||o.1B.C.X.L("%")>-1){v.4M="%";o.n6=o.1B.C.X;o.9A=0}if(o.aG==0){if(o.1B.C.W.L("px")>0){o.aG=2t(o.1B.C.W)}F{if(o.1B.4Z.C.W.L("px")>0){o.aG=2t(o.1B.4Z.C.W)}F{if(o.1B.4Z.4Z.C.W.L("px")>0){o.aG=2t(o.1B.4Z.4Z.C.W)}}}}if(aI(v.4M).L("x")>0){o.4M=v.4M.2y("x")[0]/v.4M.2y("x")[1];if(o.9A==0){o.9A=o.aG/o.4M}}F{o.4M=0}J(o.1B,{\'1l\':\'f0\',\'5x-g7\':\'q9-5x\',\'1C-7e\':\'1b\',\'-3N-ap-eW\':\'1M\',\'XY\':\'3U\',\'uu\':\'kg-kf\',\'7U-X\':15,\'f7\':\'gS\',\'2J-X\':\'he\',\'Bf\':\'Bg\'});if(v.aD==1){J(o.1B,{\'5x-aD\':\' 0 AP Y0 4I(50,50,93,.1), 0 fY AP 4I(0,0,0,.Y1)\'})}if(o.4M>0){J(o.1B,{\'X\':o.9A})}F{J(o.1B,{\'X\':o.9A==0?o.n6:o.9A})}o.1I=1K("1S");J(o.1I,{\'1l\':\'1Y\',\'5x-g7\':\'q9-5x\',\'6q\':v.kc,\'1y\':\'#3P\',\'W\':\'100%\',\'X\':\'100%\',\'6H\':\'3U\',\'1b\':0,\'1h\':0,\'f7\':\'gS\',\'2J-X\':\'he\'});if(v.Y2==1){o.1I.C.6q=\'ff\'}if(v.2W==1){J(o.1B,{\'2W\':v.AN+\'px 6y \'+v.8B})}o.J=1G.1K(\'C\');o.J.1F=\'1C/J\';o.1I.1J(o.J);o.1I.5B("id",\'YA\'+v.id);uA("6N, 6N > *{1l: vg;1h: 2F;1b: 2F;6H:47;Bf:Bg!5O;5N-W:1M!5O;jA-1d: YB;2G-B6: 6u 6u;5x-g7:q9-5x!5O;-3N-AM-AL-1y: 4I(0,0,0,0);-3N-AM-AL-1y: ff;} 6N 3Z{5N-W:1M} 6N > *:5R {Aq: 1M} 6N,6N a,6N a:Zd,6N a:Zc,6N a:fe,6N a:tA,6N a:5R{1y:#fl;43-3C:100%;}#Ai"+v.id+"{W:100%!5O;X:100%!5O;5N-W:1M!5O;5N-X:1M!5O}6N bG{2m:4z!5O;5N-X:1M!5O}");jV(1);if(2a.Ah){B Aw=1D Ah(E(e){if(e[0].tu.Q>0){U(B i=0;i<e[0].tu.Q;i++){if(e[0].tu[i]==o.1I){sF()}}}});Aw.Ze(o.1B,{Zf:H})}o.aP=1K(\'bG\');4L(o.aP,{"id":"Zg"+v.id,"AI":"no","1Q":"","tc":"H","AJ":"H","AE-kF":"H"});J(o.aP,{\'1l\':\'1Y\',\'W\':\'100%\',\'X\':\'100%\',\'2W\':0,\'3T-2L\':\'1M\'});o.1I.1J(o.aP);o.1B.Zb=E Z9(e){o.kb++;if(o.kb==5){v.1v=1;1v(o.7B+\' \'+o.ht+\' \'+o.hG)}if(!e)B e=2a.1c;e.6h=H;if(e.9P)e.9P();B x=e.hv-eZ(o.1I);B y=e.jI-hF(o.1I);if(v.Z5==1){if(I(v.j7)){if(4v(v.j7)!=\'\'){o.tV=v.j7;I(v.Ce)?o.eT=v.Ce:\'\';v.j7==\'1M\'?o.eT=o.d:\'\'}}}nz(x,y);O K};E nz(x,y){if(o.eT.L(o.d)==-1||v.Co==1||v.4p==1){if(!I(o.4p)){!v.jh?v.jh="3H":\'\';!v.oj?v.oj="3P":\'\';o.4p=1K(\'1S\');B 1L;B n=0;U(B i=0;i<10;i++){if((v[\'rm\'+i]==1&&v.4p==1)||i==9){if((I(v[\'rm\'+i+\'t\'])&&I(v[\'rm\'+i+\'a\'])||i==9)){1L=1K("tU");if(i==9){if(v.Z4!=1){1L.tP=o.tV+(v.Cs==1?" "+o.7B:\'\')}F{1k}}F{1L.tP=v[\'rm\'+i+\'t\']}if(i!=9){if(v[\'rm\'+i+\'a\'].L(",0/1")>-1){B z=v[\'rm\'+i+\'a\'].2y(\',\');1L.tP+=\' (\'+(3d(z[0].1z(4))==1?2I(\'on\'):2I(\'8w\'))+\')\'}}1L.5B("i",i);BK(1L);1L.1u("2B",Ci);o.4p.1J(1L);n++}}}J(o.4p,{"1C-2G":"Z6","2J-X":"1","8F-7I":"aZ","2w":jg(v.jh,0.7)});if(n>1){J(o.4p,{"2U":"fY"})}o.4p.C.4J="Z7";o.4p.i2=Ch;o.1I.1J(o.4p)}F{6l(o.4p)}J(o.4p,{"1l":"1Y","1h":y,"1b":x,"1C-7e":"1b"});B o5=K;if(o.3n-x<o.4p.2b-20){J(o.4p,{"1b":x-o.4p.2b});o5=H}if(v.Z8==1||o5){J(o.4p,{"1C-7e":"2e"})}o.Bo=x;o.Bq=y;3q(o.j8);o.j8=1O(E(){3k(o.4p)},3S)}}E Ch(){3q(o.j8);o.j8=1O(E(){3k(o.4p)},3S)}E Ci(e){B i=e.4f.7m("i");B y;B pp=K;if(i>0){if(i==9){o.eT!=\'\'?2a.5G(o.eT):\'\'}F{B x=v[\'rm\'+i+\'a\'];if(x){if(x.L("3d:")==0){if(x.L(",0/1")>-1){B z=x.2y(\',\');B b=o.S.nL(x,"2Z");3d(z[0].1z(4),z[1],b);nK();nz(o.Bo,o.Bq);pp=H}F{y=x.2y(",");3d(y[0].1z(4),(I(y[1])?y[1]:1V))}}if(x.L("3I:")==0&&o.3I){o.3I.3d(x.1z(6))}if(x.L("js:")==0){y=x.2y(",");2o(y[0].1z(3)+\'(\'+(I(y[1])?\'"\'+y[1]+\'"\':\'\')+(I(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}if(x.L("1g:")==0){2a.5G(x.1z(4))}}}!pp?3k(o.4p):\'\'}}E BK(x){J(x,{"2U":"pU fY","43-3C":(v.BN?v.BN:"55")+"%","fb-cR":"0.Zh","1r":0.9,"1y":v.oj});x.1u("kI",H6);x.1u("iD",GK)}E H6(e){J(e.4f,{"1r":1});J(e.4f,{"2w":jg(v.jh,0.5)})}E GK(e){J(e.4f,{"1r":0.9});J(e.4f,{"2w":"1M"})}o.1q=1D Gl();if(o.1q.5C){B ot=(v.Gn==1?\'*::-3N-P-S-1E-Zi-mA {2m: 1M!5O;-3N-oM: 1M;}\':\'\');if(v.iE==1&&v.Gy!=1&&(v.GG!=1||!o.1q.9f)&&(v.Ha!=1||!o.1q.gu)){}F{if(o.1q.5C&&v.oW==1){}F{ot+=\'5X::-3N-P-S {2m:1M !5O;}*::-3N-P-S-Zq {2m: 1M!5O;-3N-oM: 1M;}*::--3N-P-S-1R-mA {2m: 1M!5O;-3N-oM: 1M;}\'}}B 1L=1G.1K(\'C\');1L.1F=\'1C/J\';1L.1J(1G.Hv(ot));o.1I.1J(1L)}if(o.1q.ov){v.4b==1&&v.Zr==1?v.4b=0:\'\'}if(o.4M==0){if(o.1I.2Q==15&&!o.n6&&v.Hd>0){J(o.1B,{"X":v.Hd})}}if(I(v.oy)){v.1e.f5=v.oy}if(I(v.lh)){v.1e.l8=v.lh}if(I(v.1E)){o.2E=v.1E}fp();1O(E(){js("8p");if(v.3Q){if(2p v.3Q==\'E\'){v.3Q=v.3Q.7k};2o(v.3Q+(v.3Q.L(\'()\')==-1?\'("\'+v.id+\'")\':\'\'))}},1)}E fp(){1v("fp");o.V=1D Gj();if(!v.3o){v.3o="?"}if(v.pl){v.3o=v.pl+o.d5}o.Zs=kV();o.Fa=0;o.53=pK();if(o.53){if(3j.5d("pL")!=1V){o.q7=3j.5d("pL")}F{o.q7=kV();3j.7n("pL",o.q7)}if(v.q0==1){if(3j.5d("pn")!=1V){o.46=3j.5d("pn")}}if(v.F8==1){if(3j.5d("pd")!=1V){v.8T=3j.5d("pd")}}U(B i=0;i<o.bc.Q;i++){if(v[\'Gk\'+o.bc[i]]==1){if(3j.5d("Fp"+o.bc[i])!=1V){}F{v[o.bc[i]+\'s\']=0}}}8j("Fq");8j("Fm")}o.i1=o.8V.1z(o.8V.L("://")+3);if(o.i1.L("#")>0){o.i1=o.i1.1z(0,o.i1.L("#"))}if(o.53&&v.bd==1){o.3r=1D Zt()}if(v.nI==1){o.6k=v.Zp;Zo(o.1B,"6k",H)}v.9d==1?o.9d=1D Zk():\'\';v.eY==1&&v.nI==1?o.eY=1D Zj():\'\';v.ab==1?Zl():\'\';if(v.Zm==1){o.bB=1D Zn();o.bB.mL()}o.P=1D Gg(v.3o);if(!o.1q.2C){o.1I.1u("Z3",E(){o.5J=H;o.mu=H;o.S?o.S.Gi():\'\'});o.1I.1u("Z2",E(e){if(!o.3x){if(v.1x.8t>0){3q(o.Gd);o.Gd=1O(E(){if(o.5J!=o.mu){o.5J=o.mu;o.S.FT()}},v.1x.8t*2M)}F{o.5J=K}o.mu=K;if(o.S){o.S.jp()}}});o.1I.1u("YK",E(e){o.3x=H});o.1I.1u("8X",E(e){o.3x=K;if(!o.4O){o.8y=K;o.bS=K}1O(E(){o.5R=H},4i);if(o.1q.2C&&o.S.lL()){}F{o.S?o.S.fm(e.5y,e.8i):\'\'}if(v.mC==1){if(o.S.bn()){o.S.8v()}}});o.1I.1u("t9",E(e){if(I(o.S)){if(o.3x){o.S.eU(e.5y,e.8i)}F{o.S.o6()}}})}F{2a.1u("YJ",xO,K)}v.oO==1&&2p FG==\'E\'?o.oO=1D FG():\'\';o.4m.1u("fg",E(e){o.3x=H;o.5J=H;o.jE=K;jj("1E",e)},{ac:H});o.4m.1u("bl",E(e){if(o.3x){o.jE=H;jj("YL",e)}},{ac:H});o.4m.1u("cv",E(e){o.3x=K;o.5J=K;if(v.lo==1){B 8Q=1D 7y().bi();if(8Q-o.a9<(v.g3?v.g3:0.3)*2M){kU(e)}}!o.jE?f3(e):\'\';o.jE=K;if(o.5e||o.f1){o.S.4R()}jj("4E",e)},{ac:H});3B{2a.1G.1u("8X",E(e){o.5R=K;if(!o.4O){o.8y=K;o.bS=K}if(o.3x&&o.S){o.3x=K;o.S.fm(e.5y,e.8i);o.S.jp()}if(!o.5J&&!o.1q.2C&&!o.1q.tv){o.S.cG();if(o.3h){o.3h.al()}}})}3g(cz){}2a.1G.1u("t9",E(e){o.S&&o.3x?o.S.eU(e.5y,e.8i):\'\'});o.1I.1u("fg",E(e){o.jA=H;o.3x=H},{ac:H});o.1I.1u("cv",E(e){o.jA=K;o.3x=K},{ac:H});2a.1G.1u("bl",E(e){if(o.S&&o.jA){o.S.eU(e.b6[0].hv,e.b6[0].jI)}},{ac:H});2a.1G.1u("YM",E(e){B x=e.4f.jF.ko();if(x==\'FV\'||x==\'uF\'){O}F{o.S?o.S.FF(e):\'\'}});2a.1G.1u("YN",E(e){B x=e.4f.jF.ko();if(x==\'FV\'||x==\'uF\'||x==\'1S\'){O}F{o.S?o.S.Fs(e):\'\'}});2a.1u(\'YI\',E(e){});1G.1u("YH",eV,K);1G.1u("YD",eV,K);1G.1u("YC",eV,K);1G.1u("YE",eV,K);1G.1u("YF",eV,K);if(!I(o.aP.f6)){1v("YG");O}F{o.aP.f6.1u(\'4R\',2r,H);o.aP.f6.H7=2r}if(!o.1q.2C){o.4m.1u("2B",f3,K);if(v.gD==1&&v.lo==1){o.4m.1u("GX",kU,K)}}jJ();if(v.4T){v.4T.on==1?o.4T=1D YO():\'\'}o.S=1D rs();if(v.b3.GP){o.mg=v.b3.GV}9q();2r();if(o.53){if(v.rO==1&&v.1W!=0&&!o.1q.2C){if(3j.5d("rr")!=1V){v.1W=3j.5d("rr")}if(3j.5d("ip")==1&&v.lJ==1){v.5u=1}}if(o.6d&&v.vF==1){if(3j.5d("sl")!=1V){B sp=3j.5d("sl");B f4=o.6d.L(sp);f4==-1?f4=o.6d.L(sp*1):\'\';if(f4!=-1&&o.S.vC(\'7J\')){o.ag=f4;o.P.af(o.6d[f4]);o.S.vZ()}}}B qM=K;if(v.rl==1){U(B j=0;j<o.aY.Q;j++){if(3j.5d("mB"+o.aY[j])!=1V){v[o.aY[j]]=3j.5d("mB"+o.aY[j]);qM=H}}}if(!qM){if(o.1q.2C&&o.3n<4i){v.uI&&v.uI>-1?v.cj=v.uI:\'\';v.uC&&v.uC>-1?v.hb=v.uC:\'\'}}}if(o.3r){B f=o.3r.9v();if(f.t&&f.d){o.S.fL(f.t,f.d);o.S.4s(f.t,f.d);v.1n=f.d}}o.V.42(v.1W);if(v.5u==1){o.V.5c();o.S.4P()}o.7S=1D tQ();if(v.6Z>0){J(o.1B,{"2W-5S":(v.6Z+"px")});J(o.1I,{"2W-5S":(v.6Z+"px")})}if(I(v.96)){q4("96")}if(I(v.fa)){q4("fa")}if(I(o.1e)){js("1e")}if(v.7A==1&&v.YP==1){o.V.iU()}U(B i=2;i<10;i++){if(I(v["cu"+i])){if(v["cu"+i]=="2C"&&o.1q.2C){6M("cu",i)}}}}E f3(e){if(o.pV[o.4m]>2){O}o.mH=H;v.g3==0?v.lo=1:\'\';if(o.kz&&v.ci==1&&v.gD==1){kU(e)}F{kE();if(v.lo==1||v.gD==0){pF()}F{o.kz=1O(pF,(v.g3?v.g3:0.35)*2M)}}}E pF(){kE();if(o.1q.2C){if(o.S.lL()){o.S.o6();O}}v.ci==1?o.V.f3():\'\'}E kU(e){kE();B y=K;if(v.1Z.yO==1){if(e){if(v.1Z.YY==1&&!o.1q.2C){}F{B x;if(o.1q.2C){x=e.YZ;if(!x){if(e.z2){x=e.z2[0].hv-eZ(o.1I)}}}F{x=e.Z0}if(x){if(x<o.3n/2){if(x<o.3n*20/100){6M("4l","-"+op(v.1Z.yj,10));v.1Z.2A==1&&v.1Z.oU==1?6O(\'4l\',0):\'\';y=H}}F{if(x>o.3n-o.3n*20/100){6M("4l","+"+op(v.1Z.yj,10));v.1Z.2A==1&&v.1Z.oU==1?6O(\'4l\',1):\'\';y=H}}if(y){if(e.9P)e.9P()}}}}}if(!y&&v.gD==1){if(v.iE==1&&o.1q.2C){}F{o.2l?o.V.7T():o.V.7o()}}}E kE(){3q(o.kz);o.kz=29}E 2r(x){B y=K;if(o.8S!=o.1I.2b||o.bu!=o.1I.2Q){y=H}jJ();o.S?o.S.4R():\'\';o.P.4R();y&&!o.2l?js("4R",o.8S+\',\'+o.bu):\'\'}E jJ(){B xw=o.1I.2b;B xh=o.1I.2Q;if(o.S){if(v.Ac==1){if(v.1e.1l!="2K"){B x=o.S.fk("A6")+o.S.fk("1h")+5+o.S.fk("zK")+(v.zt>0?v.zt:0);J(o.1B,{"X":x})}}}if(o.4M>0&&!o.2l&&!o.eS){xh=xw/o.4M;J(o.1B,{"X":xh})}if(!o.2l&&!o.eS&&!o.bt){o.8S=2N.4W(xw);o.bu=2N.4W(xh)}if(o.1q.2C&&o.2l&&v.zJ==1&&v.sg!=1&&bT.bP){if(o.4M>0){if(o.4M<1){B sp=bT.bP.uo(\'y7\');if(sp!==29){sp.cs(E(){}).3g(E(1N){})}}F{B sp=bT.bP.uo(\'qw\');if(sp!==29){sp.cs(E(){}).3g(E(1N){})}}}F{B sp=bT.bP.uo(\'qw\');if(sp!==29){sp.cs(E(){}).3g(E(1N){})}}}o.3n=xw;o.4h=xh;if(I(v.1Q)&&o.S){v.1Q!=\'\'?o.S.zA():\'\'}if(I(o.hO)){o.P.1A(o.hO)}if(o.2i&&!o.2l){o.2i.2r()}o.3h?o.3h.2r():\'\';o.bB?o.bB.2r():\'\'}E 9q(){o.V.jz(v);U(B x in v){if(v.2n(x)){if(x.L("1Q")==0){if(v[x]!=\'\'){o.sZ=v[x];o.V.9q(x)}}}}}E 9c(1g,1B,1A){if(1g){if(1g!=\'\'){if(1B==o.1U&&1g==o.ux){}F{if(1g.L("#"+v.9y)==0){1g=o[o.fd[0]](1g)}if(1g.L("#0")==0){1g=bz(1g)}1g=qV(1g);B s="tB";if(1A=="2V"){s="ur"}if(1A=="1M"){s="2F"}if(1A=="Z1"){s="100% 100%"}J(1B,{\'2w\':\'1g(\'+1g+\') no-gW 6u 6u\',\'2w-3C\':s});1t(1B);1B==o.1U?o.ux=1g:\'\'}}}};E YX(x){if(x.on==1&&I(x.3b)){x.3b=qV(x.3b);B y=1K("1S");if(x.3b.L("3e")>-1||x.3b.L("//")==0){B z=1K("3Z");z.3b=x.3b;y.1J(z)}x=9l(x,v.wy);x=4n(x,\'2x\',\'2x\');J(y,{\'1l\':\'1Y\'});if(x.1l.L("2K")>-1){J(y,{\'2K\':x.9g})}if(x.1l.L("2e")>-1){J(y,{\'2e\':x.4e})}if(x.1l.L("1h")>-1){J(y,{\'1h\':x.6Q})}if(x.1l.L("1b")>-1){J(y,{\'1b\':x.3G})}o.1B.1J(y)}};E eV(){if(o.2l&&!xI()){o.V.ra(H)}F{o.V.qm()}1v("2l",o.2l)}E YW(){1v("bP "+bT.bP.la)}E xO(){if(2N.xW(2a.bP)===90){1v("qw");if(v.sg==1){B ok=H;if(v.xY==1&&!o.1E){ok=K}if(v.y6==1&&!o.1R){ok=K}if(o.2i){ok=H}!o.2l&&ok?o.V.7o():\'\'}}F{1v("y7");if(v.sg==1){o.2l?o.V.7T():\'\'}}}E xI(){O!!(1G.YR||1G.YQ||1G.YS||1G.YU||(1G.YV!=29))}E xk(x){O x.2b==0&&x.2Q==0};E sF(){U(B x in o){if(x.L("xi")>-1){4t(o[x])}if(x.L("xe")>-1){3q(o[x])}}1v("Xd")}}',62,4245,'|||||||||||||||||||||||||||||||||||||var|style||function|else|this|true|exist|css|false|indexOf|||return|media|length|but|controls||for|actions|width|height|control||||||||||||time|left|event|action|playlist|key|url|top|pjstg|settings|break|position|case|duration|icon|hide|system|opacity||show|addEventListener|log|playlist_dic|toolbar|color|substr|scale|container|text|new|start|type|document|data|frame|appendChild|createElement|tmp|none|error|setTimeout|hls|title|play|div|faction|poster|null|volume|innerHTML|absolute|hotkey|||set||||replace|||undefined|window|offsetWidth|_o||right|files_quality|subs|dash|vast|tip|svg|fullscreen|display|hasOwnProperty|eval|typeof|vasturl|Resize||parseInt|stop|pip|background|margin|split|subtitle|icons|click|mobile|file_type|seekto|auto|transform|Play|Lang|line|bottom|events|1000|Math|sub|Pause|offsetHeight|linear|points|removeChild|padding|fill|border|push|current_quality|linkurl|||||||||||open_action|src|_type|api|http|scaleY|catch|droplist|player|localStorage|hide2|files_subtitle|www|screen_w|file|scaleX|clearTimeout|continue||files_query|stroke|org|options|mouseDown|handle|xlink|xmlns|try|size|f2action|current_subtitle|tiptext|marginleft|000000|share|mediascale|object|plid|_0x497e|webkit|floatleft|ffffff|ready|media2|2000|pointer|hidden|keys|rows|Seek|muted|img||files|Volume|font|obj||default_quality|visible|||Object|autoplay|dom|youtube|marginright|target|preload|screen_h|500|custom|xhr|seek|mediacontainer|MarginPadding|delete|rightmenu|_to|path|Duration|clearInterval|values|trim|f2title|_from|transition|block|valuefontsize|clr|Remove|ShowOrHide|end|Time|folder|is_hls|rgba|zIndex||attr|aspect|butPosition|volumewheel|refresh|Action|resize|value|chromecast|urls|plstart|round|quality|200|parentNode||parseFloat|1px|storage|||arr_down|||arr_up|int|vasttype|Mute|getItem|airplay|shuffle|vast_loaders|m_to|onError|pause|settings2|gradient|m_type|onOut|valuecolor|empty|Hls|dechar||current_audiotrack|mute|Motion|string|box|clientX|bga|safari|setAttribute|ios|ftitle|onOver|canvas|open|SetQuality|status|mouseHere|plx|tagvideo|animation|max|important|bgcolor|casting|focus|radius|evntclk|minutes|isLive|UpdatePlaylist|video|cursor|files_audiotrack|||order||||||||tag|vastloader|charAt|files_speed|playing|captions|JSON|cancelBubble|isVisible|removeEventListener|visibility|show2|activeiconsize|UpdateText|seconds|out|backgroundColor|_value|1999|f2value|center|vast_and|obj2|toString|solid|intro|random|aover|bgpaddingleft|embed|is_dash|File|state|overflow|audiotrack|line3|https|download|apiProcessor|pjsdiv|PluginHotIcon|bgpaddingright|margintop|span|bg2|_url|hlsconfig|StopWaiting|channels|com|Unmute|rounding|||||||||||pljssglobal|default|pointerEvents|track|align|control2|HLS|preroll|setInterval|UpdatePlay|name|area|getAttribute|setItem|Fullscreen|motions|alpha_div|dash_created|bgcolorover|remove|ShowPoster|hours|floor|layer|Date|body|pass|version|Events|txt|_|redirect|bgaover|is_sleep|space|speed|fvalue|parse|timer|live|ease|slice|over|0x0|alert|Normalscreen|min|onWaiting|is_ws|ll1I|Init|files_quality_ag|||||||||||realfullscreen|line0|line3value|close|Advertising|hlsquality|getElementById|vast_|clientY|SettingsTimers|vast_or|tipcrn|pipwebkit|lines|buffered|init|_show|stretch_width|onEnded|hideleavetimeout|subtitle_on|Settings|off|Value|hidden_volume_over|parentIframe|tipbg|bordercolor|rule|bgpaddingbottom|paused|white|ResizeText|lIll|concat|gaTracker|bgpaddingtop|leftBg|created|audiotracks|destroy|C15|now|all|normal_w|default_audio|current_url|href|DASH|mouseup|always|C13||HlsLevelsLength|ispipkit||message||midroll||||ctx|onPlay|Poster|effects|toolbarHidden|iphone|marginbottom|scroll|Array|Arrows|gif|UpdateObject|onClick|Waiting|pjs|m3u|Title|vimeo|media_error|reloadTimer|is_live|flag|scrollbgcolor|lastwheel|enc2|VAST|container_h|End|charCodeAt|SetSubtitle|dashjs|motion_id|switch|Subtitle|stage_y|stage_x|Stop|C12|reload|rotation|dashquality|stopPropagation|vast_poster|Background|control_|onMouseUp|but_x|next|info|location|replay|vertical|audio|send|waiting|android|_hide|ended|_css2|preventDefault|evntout|clicktime|_keyStr||passive|Retimer|hls_created|SetSpeed|current_speed|onDuration|sub_off|Switcher|Status|Close|evntovr|action_settings|linecap|user|600|Scale|cubic||gax|getElementsByTagName|fbg|noads|xbg|butplstart|title2|native|fontsize|shadow|StyleItem|HideControl|container_w|image|String|scrollLeft|f2id|CreateItem|pjs_i|icn|loop|frameresize|Clickable|00|MediaReady|onTimeupdate|loaded|onPause|salt|tips|sub_options|nowrap|updateSettings|streaming|fit|control_title|metadata|onMeta|touches|browser|Playlist|SubtitleChanged|nonzero|unmute|vsts|timestore||ShowOrHideProcessor||VastRemoveAndPlay|getTime|_speed||touchmove|_rb|SettingsVisible|but2|but_space|pause_before_vast||DashLevelsLength|fullscreen_process|normal_h|MediaPlayer|delta|sec||fd0|currentFile|quiz|CalculateClick|ldr|line1|lang|iframe|curtain|qualities|onclick|bitrate|hlsaudio|search|scrollTop|parent|orientation|compilation|onload|hidden_volume_over_process|screen|ActionPlaylist|but_y|decode|poster_floatposition|wheelstep|toolbar_hide|||||SetAudioTrack|hex|plhistory|line_width|shuffle_|forcehide|onVolume|||vast_longtimeout|videoHeight|is_visible|dashconfig|vast_impressions|screenclick|sub_bottom|channel|kbps|0010577|source||CreateHLS|_cstm|inline|then||design|touchend|_start|||err|pjs_id|ScrollTo|L12|PlayerState|tagframe|responseText|SettingsClose|PipWebkit|_0x31a96f|iconsover|iconscolor|iconangle|_0x44d5d8|ll1l|controlover|handleicon|hiddenwidth|spacing|tipalways|400|ellipse|onMove|line2|not|stout|rightside|300|items|Tip|create|tmp2|pltxt|rotate|marginproc|timeline|QualityChangedNoHand|PlaylistVisible|0x1|sub_shift||nativecontrols|l1lI|thumb|hidedown|C11|range||Toggle|cuid|PlacePoints|fatal|dashaudio|Airplay|nolimit|bufferLength||maxBufferLength|console|files_|handlewidth|recover|bgg|onmouseout|sub_color|_status|coh|sub_or|polygon|_lastime|fplace|removeAttribute|enc3|err404v|PlaylistNext|plfolder|topBg|3000|expand|bgpadding|Remove2|pauseroll|XHR|NewFile|ControlClick|url_shift|sub2|readyState|textTracks|load|nbsp|_preloaded|HideInterval|butNames|AfterVast|buffer|pic|0259804|textArea|SubtitleStart|rightbs|stretch_with_volume||ToolbarDown|hidejustfull|settingsovertimer|control_line|starttimeout|hideonpause|20px||10px||onmouseover|prev|titlestore|texts|overopentimeout|vast_starts|abc||default_style|hdicon|Home|opn|showoverto|vast_preroll_andlimit|_control_|currentTime|answer|levels|3px|VastAddPreload|floatwidth|autohide|8px|current|L11|CustomSwitch|Hide|sub_color2|groupId|handle_width|fullscreen_start|brandurl|StageMove|FullscreenChange|select|FindPlStart|minify|findLeft|relative|airplayed||ScreenClick|spd|autoplaylist|contentWindow|fontSize|_ease|shift|overlay|letter|C10||link|transparent|touchstart|_step|PlaylistNextExist|Il1l|PlaylistG|fff|StageMouseUp|87798468|event_x|Ready|HistoryPlaylist|ToolbarShow|StyleArrow||win|thumb_width|loading_error|Thumbs|hidewithoutmoving|tippadding|RemoveCurtain|domain|sourceBuffer|tipbgcolor|PlaylistControls|CheckColor|headfontsize|48743763|sub_sizeproc|tipfontsize|hlschangequality|Played|RemoveSubtitles|yamtrid|timeFormat|parentcontainer|gain|handlehide|616046|ScrollOverOut|google|subtitle_start|ymax|setSpeed|5px|l3v_show|Curtain|while|l3v_left|dclckto|pointscontrol|scaleover|scrollarrows|sizing|videoWidth|05||memory|RenewPoints|_max_order|mediapip|autoQuality|family|found|letterspacing|playersize|seeking_time|poster_scale||posterhide|NativeControls|toolbar_margintop|_0x4e576a|hls_stuck_time|volumewheelin|TagPlay|ipad|heartbeatInterval|file2_separator|details|toolbarInterval|_play_i|C14|HideForce|embedvars|doubleclick|_seekaftervast|showovercontrol|SettingsN|update|shareiconscale|chrome|pointed|m3ut|val|weight|navigator|decoration|file3_separator|tippointer|14px|heartbeat|tipbga|volumescroll|repeat|999|Error|speeds|_wait|speed1||reloadErrorTimeout|base64|Reload|AirplayChanged|33571875|autoLevelCapping|f2bg|stretchonfullscreen|sub_size|days||1em|alpha|deg||PlaylistPrev|vast_longtomsg|svg0|paddingtop|CustomToogle|hidden_volume|hideoutmute||hand||float|compilations|justshow|pageX|pl_first_id|186|onSeeking|rect|TimeSub|seeking|mode|clickmargin|xtitle|findTop|playerid|hlsautoquality|pjs_parent|file_separator|clickarea|pip_quality|limitmaxwidth|rotation2|custom_aspect|SetSetting|playById|StyleLine|span05|onSeeked|SubtitleError|BufferStop|Mouse|998|ssfontsize|clicked|pljssglobalid|href2|onmousemove|gatracked|ratio|hidetimeout|event_y|iconreplay|ctx2|offsettimerminute|bottomside|canvas2|offsettimersecond|||||Off||scrollleft|_activeIcon|resizePlaylist|removed||VastNext|pljsmute|totheend|ResizeSettings||UpdateSpeed|coloroverplay|HidePoster|72532408|44913473|selection|240p|customdesignsvg|360p|480p|mouseout|nativecontrolsmobile|dash_config|stuck|fspr|svg3|facebook|colorbg|_fullscreen_end|0xa|CreateDASH|ShowLayer|sleeptimerminute|IconsColor|edge|youtu|YouTubeIframeAPIReady|Password|_steps|4007312|RenewSubtitle|unmuteplease|hideAllIcons|YoutubeReady|gaTrackPlay|ShowForce|sleeptimerhour|picture|marginbg|hexToRgb|rc_label|rightout|copy|FileType|changeheight|720p|RemoveMedia|jpg|playVideo|hex2rgb|rmbgcolor|VolumeWheelX|Touch|started|pjs_|1080p|SelectText|1638617|StageLeave|quartile|rld||iconscolorover|lastTouch|loading|youtube_id|isPlaying|omt|TitleTemplate|touch|ceil|153204|BeforeVast|mouseMove|tagName|onplaytag|_readyonplay|pageY|MainUpdateSize|icon2|pjs_share_link_|saturate|onStep|ssa|full|mouseUp|handleiconspress|twitter|imgldd|_blank|datetime|SubtitleLoad2|YoutubeID|handlescale|thumbs_on|SubtitleLoad|documentElement|53790984|handleaover|subsor|bgh|bgo|lngth|Recover|opera|_stopped|rightclick|screencolor|doctype|6px|serif|sans|6642813|eventstracker|isvg|navigationUI|result|timeline_h|100000|toLowerCase|srt|quality_received|ff0000|marginprocleft|CreateTip|vastonmobile|85799141|bgcontainer|timeld|noclick|click_t|tippaddingright|hls_config|audiosrc|_ended|ClearClick|scripts|tippaddingtop|openplaylistbefore|mouseover|KeyPlusDown|files_channel|poster_aover|gifed|poster_a|loadLevel|VastRecover|forbidden_quality|_0xad5257|ssflyp|wheelinterval|DoubleClick|randomstr|getHLS|_lastactbut|HlsUpdateAudio|Player|audioTrack|0px|sub_shadow|_subtitle_empty|leftandrightpadding|playbgcolor|resizeonwidth|playlist_title|playlistrewind|adsfirst|angle|thumbnails|plurls||wait|wait_to||playlistloop||bigint|brd|code|_timeout|floatheight|click0timeout|_prevIcon|today|HideProof|getDASH|||isTypeSupported|done|seeked|exception|vast_type|iniframe|mini|dontplay|pauserollonplay|vast_preroll_and2limit|333333|VastLoader|frames|fid|mutestore|offsettimer|ToolbarHidden|Load|_i|limitwidth|floatlimitwidth|sub_settings_on|find|scrollwidth|HidePoster2|scrollarrowsize|scrollarrowcolor|playroll|yaCounter|0933314|clientWidth|Dq9neNd|||||mediaSource|resizeonplay|getBitrateInfoListFor|postroll|ResizePlaylist|hmaxk|037||deltaY||current_plurl|title_template|copied|script|autonextopenfolder|PlaylistRewind|restart_audio|abr||autoSwitchBitrate|setQualityFor|UpdateVars|PlaylistExist||autoprevopenfolder|mouseHere2|stretch_width_last|insertBefore|Update|UpdateVars0|_0xf83c34|button|pljs|hidevideo|join|response|vol|polyline|acted|match|urls_and|and|Start|iconsreplay|sub_all|_dashsubtracks|offsetLeft|scale_i|dash_subs|KeyPlusUp|hls_subs|but_h|onClickSubtitle|openById|fcdef|PlaylistShow|AudioTrackChangedNoHand|recover_decoding_error_date|PlaylistError|mlr|SettingChanged|PlaylistHere|sub_weight|container_h_procent|sub_bga|_hlssubtracks|recover_swap_audio_codec_date|container_id|shareiconscaleover|showinterval|UpdateTime|vars|open_settings|num|showtitleplaylist|sub_bgcolor|Ended|L10|ssfontcolor|newfile|midrollo||Prefile|drm|43706564|last_text_w|ReplayIcon|9830753|50539216|removeItem|settingsNumberVisible|5629344|RightMenu|5017903|poster_floatheight|TitlePl|dash_play|sstext|1440p|ShowShare|fromCharCode|observer|fixed|reRightMenu|butByS|timeshort|HlsAudioTrack|desktop|resizeFromText|reloadlog|re_y|pauseVideo|firstly|introstart|ToolbarHide|midrolls|ControlCoordinate|firefox|normalscreen|Marquee|gained|reverse_quality|dashlowquality|Rotate|tmpr|StageMove2|dash_init|HlsAudioTracks|255|current_file|poster_floatwidth|RenameTracks|translate|MseRenameQualities||TipText|hideuntilstarted|dasherror|rmcolor||playPromise|4944489||SettingsScale|existv|AudioContext||performance|ioscss|resizeonmouse|mobiletv|QualityChanged|but_w|autonext|start2|StartTimeout|_currentIcon|toolbarisdown|onplay|ws_created|maxMaxBufferLength|poster_floatbgcolor|recovery|CreateWS|nativeControls|Loaded|resizeme|appearance|scalesmall|geo|debug|leftright|logout|updown|Share|seekiconbut|hlserror|nativefullios|HlsLevel|49474569|_move_rights|HlsSleep|icon3|destroyed|sleep_timeout|fontnames|fonts|Captions|_rights|denied|order0|_stop|WaitSize|bg_hide|pljstrack|vast_midroll_limit|zoom|prototype|pjsoffsettimer|ClickArea|StopMedia|HidePositionControl|||pljsquality|playiconbut|dont|request|||_set_quality|last|2160p|play50||iconopacity|_css|drawImage|write|btm|play25|youtubeposter|ScreenClick2|picheight|imageLoaded|MseIsSupported|hls_started|StorageSupport|pljsuserid|errorMessage|ytautoquality|playlistovertimer|audioctx|heightInterval|startLoad|dontload|quick|4px|moving|bgcolorlink2|killMotion|marquee|Loading|qualitystore|||connect|str2obj|control_start|linkurl0|userid|play75|content|firstScriptTag|other|onerror|headbordercolor|noprevicon|vts|fts|borderbottom|plopenid|playbgcolored|addtitleplaylistbr|addtitleplaylist|FullscreenUI|viber|_0x1c746e|PlaylistLoad|currentLevel|played|_0xb263||sub_font|03718787|landscape|scrollarrowbg|scrollarrowbgcolor|IndexPlaylist|5589708|IndexPlaylistProcessor|whatsapp|nextLevel|fjs|Heartbeat|End2|moz|_0x3e3359|StyleSubtitle|m3ui|_0x312a27|substore|mutedautoplay|preloaddash|44314452|embedsize|Metadata|pjslng|onYoutubeReady|sleeptimer|checkBase64|sxs|pepper|getAudioTrack|Playing|posterhidepause|||TheEnd|viewBox|clck|onClick2|share3|playsinlineonmobile|reloadtimeout|NormalscreenUI|getTracksFor|valuefromlang|sub_bgpadding||ClickAction|_tags|Seeked|offset|Download|ActionOptions|sub_designstore||cntrls|checknative|playerjs_|Yandex|pljsvolume|Controls|_recover||Show|VastGo|||resizeSettings|VisibleItems|label|SubtitleTimerMenu|setaction|062|ie9|moveOr2end|VisibleCheck|SubtitleSettingsMenu|settimer|099|iOSTrackLoaded|toggleControl|overlays|volumestore|4223579|Text|Shuffle|worked|removeTracks|removebykey|MidrollOverlay|VastVideo|vastgo|activeicon|pjs_parent_i|updatePlaylist|||||PlaylistPrevExist|openplaylistroot|onTagError|xvalue|NewAspect|vastclick|lang_|referrer|086|historybga|historytitlea|landscapefull|||outro|onPipLeave|pljsspeed|pstr_to|posteronpause|gao||025|contentDocument||rename|ima||927||vast_preload|VastPreloadLoad|floatmarginright|paddingright|paddingleft|postmessages|pjsframed|Destroy|hostname|normalscale|606|onPipEnter|offsetwrite|skip|RemoveForNextAd|VastPreloaded|getQuality|SubtitleOff|onUp|l1ll|LineScale|onup_to|SetCurrentQuality|M10|handleiconpress|onDown|handlea|maintitle|timeline_w||||||RadioTags|bgbordercolor|8701271|mousemove|handleiconover||allowfullscreen|show_playlist|cnt|chr|EndMove||over_final|L13|StringVar|handlehideinit|HandleWidth|startwait_t|||ShowHandle|show_settings|SubtitleLoadAll||removedNodes||isNaN|splice|UpdatePoints|DVR|active|contain|bgborder|borderRadius|81389961|12896333|thumbs|PipSize|49444889|mozRequestFullScreen|requestFullScreen|requestFullscreen|tem|ll11|toggle|innerText|Alert|Places|ChangePip|playerjscom|div2|brand|webkitRequestFullScreen|valuepadding|handlecolor|querySelectorAll||_t||||||||||NativeWebkitFullscreen|RenameQualities|clickscaley|tagsurl|91628571|3600|PlayerSize|96189913|piped|valuemargin|ahd|160p|msRequestFullscreen|lock||remember_sub|cover|toolbarhidden|marginbgcolor|fontFamily|pljssubtitle|lineHeight|currentposter|CheckPip|VolumeWheel|pushCSS|tipa|sub_sizemob|sharer|network|textarea|59038667|normal|sub_bottommob|winHeight|exitfullscreen|marginbgpadding|doc|volumewheelfull|hidecontrols|976|winWidth|png|cpm|fullblack|tipletterspacing|enabled|timerTime|thumb_border|wheel|arrinterval|onYtPlayerReady|encoded||thumb_height|timerInterval|ControlOut|tagSrc|_time_load|Preload|SettingsParser|tipfont|tipcolor|ga_proc|animate|sub_store|tipbgrounding|static|0x14||CreatePoster||audioTracks|LoadedData|640|8345227|0576813|7251383|6025842|6281212|gainedsource|setDashQuality|setDashSubTrack|autoplaymute||360|033|94443403|072|SettingsExist|autoLevelEnabled|height_div|speedstore|width_div|224|426|volumegain|assign|webkitSetPresentationMode|06|095|toFixed|0114417|setTracks|3832234|setHlsAudioTrack|Gain|setDashAudioTrack|getBoundingClientRect|scrollX|sugar|setHlsQuality|SettingsSpeed|setCurrentTrack|setHlsSubTrack|||358|ParseUrl|crt|PluginFloatPoster|poster_float|screenmarginbottom||962|Stopped|Timer|CreateMedia|ontouchmove|callback|imageExists|maxresdefault|removeNativeSubtitle|NativeSubtitle|tagsinterval|sub_bg|hexToRGBA|onPlayTag||PluginErrorVideo|ErrorReload||posterhidestart|file2|57168881||nativeSubtitle|logo|playByYoutubeId|PluginPip|PipSwitch|movable|iosExitFullscreen|together|lastIndexOf|cancelFullScreen|exitFullscreen|mediadrag|default_subtitle|access|vtt|ass|subshift|SubtitleParse|deltaX|cancelFullscreen|mozCancelFullScreen|vast_posterurl|unset|10000|PipToggle|reYT|372|994|msExitFullscreen||||||webkitCancelFullScreen|frmvst|14193674|current_time|alert404video|alert404v|timebreak|416|last_ors|timeout|preloaded|006||Interval|483|isHidden|984|adscounter|ct2|vast_preroll_2andlimit|timelimit|timelimited|rest|isVpaid|vastcontainer|vast_midrollbgload||||PlayerjsAsync|ovr|advertising|vast_longtimemsg|223|VastLongTimeout|PluginIntro|vast_prestarttimeout|vast_init|shwvstfnsh|isFullscreen|sub_size_fullscreen|sub_big_fullscreen|incorrect|177|livets|OrientationChange|sub_lineheight|sub_bgo|alert404|alert404text|alerts|049|32349125|abs|finish|lsfullstart|posterhidetime||||||limit|lsfullplay|portrait|HidePoster3|StopOtherPlayer|FindFileInPlaylist|plcontinue|8601786|comment|stopotherplayers|fs_error|ffect|HlsRecoverMediaError||seeksidesec|loadSource|heartbeatinterval|livewakeuptime|HlsLiveWaiting|recoverMediaError|4985678|PluginThumbs|changeAspect|9372912|onLoadStart|isOpen|hlsTextTracks|supported|adblock||9475899|4223578|resume|2616987|fullonplay|ERROR|livewakeup|Level|FlussonicMsePlayer|1679814|ErrorTypes|4728212|997|onLoadedData|092|seeksides|hlslowquality|audioGroupIds|nameofhlsquality|246251|AudioTrack|4959714|900|1200|540p|prefile|InvertPlaylist|||changedTouches|HlsQualityLevels|7378707|mimeCodec|SourceBuffer|0454574|MediaSource|sourceBufferValidAPI|DashQualityLevels|DashAudioTracks|index|dashaddbitrate|nameofdashquality|029|frag|fragment|openpl|isSupported|86535603|074|mpd|m3u8|preloadhls|dashquality_off|playedquartile|Quartile|dashdebug|change2playlist_bottom|dashaudio_off||finishrewind|intros|str|Ease|updateTitle|1367601|PostFullscreen|MediaVideo|framei|26787793|TheEnd2|covervideo|5727183|landfullmobile|margin_bottom|passontime|61928677|774328|customBuffer|848|40000|hlscookies|attached|5953753|dvr|hls_stuck_duration|Live|fullonplaymobile|redirectonplay|5840467|redirectonclick|newQuality|endfull|yamtr|reloadlive|dashcookies|scroll_height|seeked_time|hlsvastwait|hlsdebug|hlsaudio_off|hlsquality_off|change2playlist||1800|parentElement|pointcolor|MutationObserver|pljs_yt_|pointa|pointw|xOffset|270|linetipmarginbottom|toptip|Browser|outline|8215241|thumb_bottom|tippaddingbottom|tippaddingleft|yOffset|obsrvr|bgw|clickmargintop|_a|roundout|315|_w|clickmarginbottom|allow|CancelBubble|notv|current_thumb|scrolling|allowtransparency|handleiconsover|highlight|tap|bordersize|Continue|15px|evenodd|Rectangle|thumb_shadow|linetippointer|ControlsBg|VastBreak|element|winLeft|createTextRange|getSelection|9616447|IconSVG|thumb_bordercolor|thumb_borderwidth|_duration_play|_time_play|origin|valuemarginleft|handleinit|valuemarginright|UpdatePlaySeek|UpdateLoad|0645937|thumb_radius|CreateThumb|direction|ltr|_duration_load|handlemargin|valuebgcolor|DisplayControl|control_duration|noClickTimeout|filter|right_x|tipmargin|right_y|RenewFromTitle|with_hours|minus4time|prevorius_default_w|minus4back|slash4time|with_min|line4time|9211241|bgcolorlink0|iconmarginbottom|iconmarginleft|iconmargintop|5000|iconmargin|bgstretch|iconmarginright|selectOpen|linkurl2|RightCSS|hideonplay|hideafterclick|rmsize|playlist_id|prevorius_default_h|UpdateVolume|getContext|linespeed2|geobj|colorload|gradientcolorload|gradientcolorbg|linespeed1|linespeed3|gradientcolor|valuerounding|valuebg|butseekto||||||||valuesize|customdesign|FFFFFF|ontop|rc_labelurl|Buffer|hidewithposter|RightMove|RightClick|displayvolume|0725739|I1lI|_ud|ControlLine|rc_anyway|Color|SvgColor|HdIcon|rc_version|smallfontsize|220|ga_event|yamtr_event|analytics|ArrowsInterval|device|yaHit|Playback|ScrollDown|ScrollUp|prtObj|PlaylistBack|PjsFr|ScrollLeft|CustomFonts|ScrollRight|reachGoal|linker|alertsbga|_0x372875|alertspaddingh|_nextIcon|playedstore|playedstored|_0x2131af|40px|_0x2bc3bf|alertsfontsize|93409913|scrollarrowbgovercolor|scrollarrowgradient|scrollarrowbgover|historycolor|historytitlestrike|show1value|hidecontrol|ShowTimeout|High|elastic|PluginReplace|optStr|scrollHeight|offsetTop|playlistfolder|scroll_left|ShuffleEnd|sort|Width|showById|SubtitleSettings|postmessage|Exist|notframe|parentIframe_style|SetChannel|historybgcolor||Action2|IFRAME|rc_|width100|nohead|method|Sleep|valuealign|PjsFrMsg|_0x298796|getDate|0x8|home|embedwidth|embedheight|cstm|sleepoptions|offsetoptions|pressed|_xIcon|UpdateTimer|bordercolored|setupx|embedhtmlstart|pjsga|0x7|copyObject|7px|gaid|ControlOver|Wheel|arial|allowLinker|winTop|helvetica|0x13|eventCategory|embedhtmlend|eventAction|ffdd1f|Pop|eventLabel|postMessage|php|onClickTimer2|onClickSubtitle2|18px|sharecolor|sharebgcolor|shareclred|666666|url2|alertspaddingv|PlayerjsEvents|arguments|alertscolor|url3|alertsbgcolor|bgclr|L16|minute|second|hour|0x5|0x6|_0x593a18|ffeeab|shareiconmargin|sharetop|square|sharetitle|share1|share10|share2|clickscalex|lI1l|alwaysnotfullscreen|alwaysjustpause|1411563|hidewithoutplaylist|rel|1907336|hideoverwidth|90342661|scroll_down|hideonwidthlimit|hideonwidth|hideoverwidthlimit|poster_floatmargin|1861004|onYtPlayerStateChange|resizetext|L19|PLAYING|titlepl|PlayingChecker|playerjs|Youtube|16114286|poster_floatrounding|showShare|hidevar|playsinline|ShowAnimate|hideonvolume|HideAnimate|ShowControl|trackstore|setting|sesstime|6327241|700|playonhover|leavetimeout|4877241|unfixing|styleSheet|hideuntilmeta|hideonfullscreen|XMLHttpRequest|GET|offsettimerinit|_html|PluginShareWhats|pljsfirst|sleeptimer0|keyframes|KeyDown|linktarget|ControlsBgClick|Qualities|0956563|files_scale|getPlayerState|50032408|onQualityChanged|hRHYAebi|msie|nopause|control_share|KeyUp|PluginGeo|kYHDARnQ|setVolume|telegram|nameofyoutubequality|seekTo|M14|setQuality|0306373|poster_floatshadowpx|playId|getDuration|70098039|Review|yterrors|input|restart|0785714|wrong|muteiconbut|linkpause|screenshot|ssflyw|1001|6265714|ENDED|60588467|seekwindow|L14|ControlX|marginproctop|marginprocbottom|customyterror|leavetimeout2|8361812|back|Media|MSIE|StageOver|Actions|vast_nofirst|System|Control|hidestartbutios||007|leavepictureinpicture|2464991|25712408|opposite|action2|durationchange|enterpictureinpicture|MediaYoutube|nativenotios|which|ytcl|0638991|plusminus|isyoutube|keyCode|HideLayer|nativenotiphone|wrapper|003|youtubelayer|RightOut|volumechange|showing|topside|_icon|templated|controlCSS|subtitles|5226699|openplaylistpause|openplaylistafter|template|addTrack|dblclick|_ue|loadedmetadata|VastInfo|M12|hlscaptions|timeupdate|inversetime|bold|RightOver|onresize|rotateplaying|187|nativenotipad|nums|PlaylistPlayId|playerheight|full_minutes|PlaylistOpenId|full_hours|Number|youtubecontrols|PlaylistMove|Scripted|14130702|HideElement|youtubeready|pjslog|SettingsTimer|UpdateSettings|Playerjs|iframe_api|9390991|vast_adid|createTextNode|encodeURIComponent|Volumescrolled|996|17432408|951|94929913|2155241||7255241|4310991|8180991|45709913|694|798|87332408|799|53509913|94772408|5810991|9589241|1843241|981|61009913|7310991|execCommand|PluginShareViber|0536658|00849913|4843241|699|L17|992|8833241|0339241|09932408|80612408|_timer|03369913|883875|32872408|5723438|83449913|2800991|93169913|69872408|988|3343241|61112408|9932991|036|63169913|75949913|019|line_play|3796991|79828571|69428571|M17|52352408|17872408|90490625|26192408|041|98389913|1955355|0213241|0702081|4997689|67729913|36152408|37689913|749z|46112408|54409913|90889913|81892408|4792991|4526875|001|9056991|02932408|37701976|89792408|60952408|0008991|C16|2829241|16112408|29534258|62730135|89532408|8587241|57329913|77805478|38992408|70972408|49829913|3780991|97295909|42432408|857|902|62369913|63039075|9894991|9978991|7997241|71410195|91252408|06192408|34889913|48629913|49672408|9996991|432|M11|2880134|2028991|1310991|3197241|990257|9825241|0473071|5330442|9280991|3443241|3958991|9829241|46907118|4685241|0088335|6532991|95178338|9699241|2210357|3753146|94745891|62377583|7067728|0266991|0261314|80932408|27114199|60889913|7279485|3699241|64769913|0516316|8142991|3092991|0038991|01289913|5794991|2095241|73852408|883|49132408|72015249|7168991|2593241|15446351|87313185|59179941|5781241|43579517|5473241|28889913|914|93493214|6100991|50092408|0068991|12492408|28392408|02432408|1148991|70329913|64309913|50989913|01349913|18772408|01469913|poster_floatshadow|98752408|3695241|8542991|14009913|37399411|posterontop|7465241|5003241|296|7398991|275|7581241|00069913|4871241|2357241|01549913|47944541|8898991|00029913|76252408|39769913|73312408|27949913|4865241|3091241|957|81329913|72892408|5904991|88589913|78569913|6715241|98549913|17269913|||||08569913|||||97129913|74734142|005212|72728083|31446009|2793122|00904312|0727459|6447345|addRange|removeAllRanges|forward|web|offer|frameborder|moveToElementText|selectNodeContents|createRange|92524947|15729686|7060285|15013093|644054|4153898|19180463|3982733|9518092|51242501|1454127|5898759|7271472|209383||84355402|62539844|73447623|plus|M16|vast_openclick|vast_unmutebutcolor|vast_unmutebutbgcolor|vast_preroll_vmap|vast_pauseroll_vmap|vast_midroll_vmap|vast_postroll_vmap|vast_default_volume|vast_unmutebutonce|vast_progresscolor|vast_progressbgcolor|vast_volumebgcolor|vast_volumecolor|vast_unmutehover|vast_linktxtonmobile|vpaid_timeout|vpaid_timeout2||introclosetime|introclickable|introskiptime||introtitle|introtxt|minivis|default_channel|midrollpoint|partnermidrollor|vpaid_slotinframe|vast_resound|eventstrackervast|partnerprerollor|partnerpostrollor|partnerpauserollor|4570635|53462054|835402|35178546|79137169|53995424|0769314|1782179|16597325|5798291|54866401|86810611|65174939|12014413|24660331|85641921|096|84924851|77251408|1938004|7530359|5974074|86718761|60771911|40514608|9713884|20257304|8884018|77097501|1197833|39074182|72576646|1560223|8689236|68019712|53370204|63201142|68926767|024648|47890336|4558853|8022411|777689|4897677|5739326|18283508|59305507|950631|484333|27361297|77497165|8816878|8769747|72704574|15818198|02664888|0670433|05663568|86483105|1869905|46721646|1279354|1161475|69316331|8524226|1901646||31646496|24362617|90967882|vast_xcolor|vast_xbgcolor|Dq9XMLFPDkYXMLFPwuE9x00Zzkl1AHo5BHh0zrEVBrl5BHlnAkwhEnsVBrs3BnM4AnETBj4YBrE5BrMZAZoXzkI0CHl5CHl1AjX4zkAXBrh2BrdhAq41Brl5CHl5BHwTAHoVBjprAq41Brl5CHl5BHwTAHIVBHEZCHE4Bjo0zkI1Bno1AHE2zrs5zkI1AroXArshCG41zrs5zkI1AroXArshEns0zkE0Akl0CrITAHlVBHIXAroXAGoYCq40BGXYBG41Brw5Brh2wrs4zkE1zrsXzkMhEns4zkE1zrIVBkI3ArIYBrlhAHEVBrEZCHE4BGXYzkM0CHl5CHl4wrlVBGXYzkM0CHl5CHl4wsX5zkITAj4YBrl5CHl5CqprAHEVAHM2Cro2AjXZzks0CHl5CHl4wrs3zkl1zrIVCHAnAHlnCrMhAHdVCHITAHoVBjprAHdVCHITAHIVAkM2Cro2AjoYBq4YBkM4ArMZzrs5zko1AroXArshCG41zrs5zko1AroXArshEnEVCrAnAHlnCrETAHlVArIXAroXAGoYzko0CHl5CHl1zrs1zkw2BkhXBkwhAG4XBrl5CHl5BGXYAq42wsAYzko0CHl5CHl1zrhVBrAZBkEXCHwhAG44Bkh5BnhnAGX2zkA5Brs2Anw0wrAVAns2CrhZAnETBq44Bro0BnE3CqpAAj45BHsXCHI4BqX0zkE5CHI5AnwZwtPOwvFZMK5naN9ZcH0OevxicOBTMLFmyrlVBHoXAroXzqoYAq42AroXAroQwvBkMKYmyq0YzqoYyGp0dNtVd2YieuIPzHlVBHoXAroXzqoUAHoVBkoXAroXyGoOwuaQcuX9xZBNaNaNaNMODkXWdut0br48z2d|Dvpieuhhar0OHHhVAHAnCro5BGXYAj45Bno2BkM3wsX4zksnAnhXCHITCq4YBrw4BHdYBqpABZ4ZAnInCrsTCq4YBrw4BHdYBqpABG43AHInCrsTCG42BnoXCHIZBqpABj4nArs2BkM3zrsXzkw4BHAnAnAhHrdVAHo1Arl1AjX5zkE2BnEZCrI3wsX3zksXBHo5BHwTAHwVCHdXBkM2BZpACq4YAnA4Arl1zrsZzkl3ArM2BkdhKjpBAHoVCrw1Brd2AjXYAZ4XBHd1AkA4wsAYAG45CHo4Arl1zrsnzko1BnIZAnhhAHwVBnI4ArE3BjXYAj40AHAnAnAnwrsZzkd1Cro0BnMTAHsVAnh1BHwnCqprAHwVBnI4ArE3BjXYAq40ArhnCrshAHwVArw3CHo0CqX5zkhZAko5BHw0wrsYzkwYArlXBrhTCG44AkwXCHIZBqprAHoVBnM3BHdYBqX5zkhZAko5BHw0wrsXzkA3CrIZAnhTCG45CHI4Arl1AjoYAq4YBrMTAHoVAkw3Brw4BjpAAHoVAHE2zrlVArE3Bks5ArIhHrsZzkEnAnwnCrsTCG4XBrd2AHlXBGpAAHwVBrAnAkA4AGX4zks0Akh1Bns0wsX5zksYCHo5BHwTCq4YBrw4BHdYBqpACG4YAHlXCHIZzrsXzklYBHo0BnMhHrlVCrA1BkM2BZXYAG4YArAZAnhYwsAYAq4YAkIYCHo1zrsXzkhZCrs5ArIhAHoVBrIXCHo0CqXYAq43AHwnCrshAHoVCrE5zrsXzkdYAkA4AGprAHsVAnl4AHlXBGXYAq43AHwnCrshAHsVBns3BHdYBqXYAG4XArs5ArE4wrsYzkdYBnI3AHETAHsVBrw4CHIZBqprAHsVBns3BHdYBqXYAG44AHl4Arl1wrsYzkA5AHh1BnsTAHwVAHE1BHwnCqoYAq44AHlYBrw5zrsZzks0BHIZAnhhEnsXzkAYAkE3BkwTAHwVAHE1BHwnCqo5zkh2AndYBrATAHsVCHI3AnAnAZo5zkInCqXYAG42AHdYBrw5wsX4zkl2CqXYAj4nAnA3AHEnwsA5zkA3CHM2BkdTAHwVBnhZBrd2Ajo5zkl4BnM2BkdTAHAVArI3BHwnCqoYAq44AkdZCrI3zrsnzko1BnIZAnhhHrsXzkhZBHE3BkwTAHAVArI3BHwnCqpbws05zko5CHl5CHlTBqpACG4XCHl5CHl5zrohHrsZzkI1CrI5ArdTAjpACG4XCHl5CHl5zrEhKjdhaNmTcr0Ow2aNaNaNajd|Dq9XMLFPDkXWan48z3B2an4jzqx0fLpmwkPjd3aOwjXjdu9nbLFQc24jCjx0c3ojzqxUMLxObK4jCjwZArohBHohAqoXwjXjd2BicuIjCjwYzkAjzqxQM29Vd2BWcu9ZwkPjaNJkAHMnwjXjMGw6wkoVBZwTwNtWeNJZwkPjAGwTwNYQcNTjCksTwNYQcNU1dNXjCjxidul6d2JmbZXUAHIjgGXjM29VevxWct9QclYXGjw6fZxWcjw6AGXjc3xlaLwjCks5zqxiM3FQc24jCjxkeLB0c20jzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhaNmTcr0Ow2aNaNaNajdhevxicOBNc3xUDGe0dNtVd2YieuIPAq41zqoXyGd|wjXjevmXaGw6wOB2aZwTwOpWd2m0bK9VwkPjeu9XwjXjcKtZa2mVwkPjAkoXwrohAqo1AqwTwOBkMKYmwkPjAG4nwjXjbKBWcOBkc2YWdjw6wNamMns2AZwTwNsjCjwXzkdjzqxic3amdjw6wksjzqxTbK5SwkPYzqxTbK5SeLxTwkPjMLpQCOBmaKTTyns1wjXjM29XfGw6AL0TwOpZaKYWMKEjCkoTwOBPMLxmAZw6wNeWc2eTaGwTwOBPMLxmBjw6wjwTwOpWd3Fmdm9Ncu9ievpWd2m0bK9VwkPjeu9XwjXjdu9neuJZL2aTc2t0d2iiau93wkPYzqxnbutZaKBTdNJlwkPYzqxnbutZaKBWcu9ZwkPjaNJkAHMnwjXjd2iidNJja2BWcu9ZwkPjBrI0AHFjwO0|partners|moved|isflash|Dvpieuhhar0OHHwVCHIYArl1CrETBq40CHl1CHAZAjprAG40AHd3BkhnBqX2zks0Brl0BkwnwroVBHE5CHl5CHIZzrhVAno0CrM0BZoXzkI0CHl5CHl1AjXYAq42wsAXzkI0CHl5CHl1AjXYBG41Brw5Brh2wrEVBHI3ArIYBrMTAHlVBHIXAroXAGo5zkITAHlVBHIXAroXAGprAHEVBrEZCHE4BGXYCG41BHoXAroYwrs4zkE1zrs1zkI0Akl0CrMhAHhVBrITAHoVBjprAHhVBrITBG42BHdXBHs0CGoYBq40Brw5Brh1zrsVBkE5CHl5CHhhCG41zrsVBkE5CHl5CHhhHrlVBGXZzks0CHl5CHl4wsAYBq4YBkM4ArMZzrwVAHE5CHl5CHhhAHdVCHITBG45AnAYCHA4BjoYBZ45BGXYAq42wsAYBZ45BGXYBG4ZBkM4ArMZwrs0zks2BkhXBkwTAHlVArIXAroXAGo5zkITAHlVArIXAroXAGprBq44AnAYCHA4BqXYCG4XBHoXAroYwrsVArE5CHl5CHITAHIVAkM2Cro2AjoYzko0CHl5CHl1zrsXzkMhEnsVArE5CHl5CHITCq40Anw2Bro5AjoYzkh2Crl3CrAYzrMVAnl0AHMnAkEhAZ4nAHM4CrwnBqX0zkh0ArE3Brd4wsXZzkl1AHo5BHh0zrEVBrl5BHlnAkwhKjdhaNmTcr0Ow2aNaNaNajd|Dvpieuhhar0OHHhVAHAnCro5BGXYAj45Bno2BkM3wsX4zksnAnhXCHITCq4YBrw4BHdYBqpABZ4ZAnInCrsTCq4YBrw4BHdYBqpABG43AHInCrsTCG42BnoXCHIZBqpABj4nArs2BkM3zrsXzkw4BHAnAnAhHrdVAHo1Arl1AjX5zkE2BnEZCrI3wsX3zksXBHo5BHwTAHwVCHdXBkM2BZpACq4YAnA4Arl1zrsZzkl3ArM2BkdhKjpBAHoVCrw1Brd2AjXYAZ4XBHd1AkA4wsAYAG45CHo4Arl1zrsnzko1BnIZAnhhAHwVBnI4ArE3BjXYAj40AHAnAnAnwrsZzkd1Cro0BnMTAHsVAnh1BHwnCqprAHwVBnI4ArE3BjXYAq40ArhnCrshAHwVArw3CHo0CqX5zkhZAko5BHw0wrsYzkwYArlXBrhTCG44AkwXCHIZBqprAHoVBnM3BHdYBqX5zkhZAko5BHw0wrsXzkA3CrIZAnhTCG45CHI4Arl1AjoYAq4YBrMTAHoVAkw3Brw4BjpAAHoVAHE2zrlVArE3Bks5ArIhHrsZzkEnAnwnCrsTCG4XBrd2AHlXBGpAAHwVBrAnAkA4AGX4zks0Akh1Bns0wsX5zksYCHo5BHwTCq4YBrw4BHdYBqpACG4YAHlXCHIZzrsXzklYBHo0BnMhHrlVCrA1BkM2BZXYAG4YArAZAnhYwsAYAq4YAkIYCHo1zrsXzkhZCrs5ArIhAHoVBrIXCHo0CqXYAq43AHwnCrshAHoVCrE5zrsXzkdYAkA4AGprAHsVAnl4AHlXBGXYAq43AHwnCrshAHsVBns3BHdYBqXYAG4XArs5ArE4wrsYzkdYBnI3AHETAHsVBrw4CHIZBqprAHsVBns3BHdYBqXYAG44AHl4Arl1wrsYzkA5AHh1BnsTAHwVAHE1BHwnCqoYAq44AHlYBrw5zrsZzks0BHIZAnhhEnsXzkAYAkE3BkwTAHwVAHE1BHwnCqo5zkh2AndYBrATAHsVCHI3AnAnAZo5zkInCqXYAG42AHdYBrw5wsX4zkl2CqXYAj4nAnA3AHEnwsA5zkA3CHM2BkdTAHwVBnhZBrd2Ajo5zkl4BnM2BkdTAHAVArI3BHwnCqoYAq44AkdZCrI3zrsnzko1BnIZAnhhHrsXzkhZBHE3BkwTAHAVArI3BHwnCqpbws05zkI1CrI5Ard0zrEhHrlVBHI4BHlXBnETAqpABj4XCHl5CHl5zrwhHrlVBHI4BHlXBnETBqpbxZpNbKYTDGdkaNaNaNaNxn48z3pieuh|Dvpieuhhar0OHHsYzkl5AHsYBkITBZ4YAkIhHrsTBZ4YAkIhHroVCrd1zrdhHroVCrd1zrMhHrsTBG44BnIhHrsYzkl5AHsYBkITBG44BnIhHrdVBno0BHo0CrdTAG41CrhnCrhnBGpABZ43ArE1ArE4BZXYzkEYAHMYAHM1wsX4zkEYAHMYAHM1zroVBno0BHo0CrdYwsX4zkI4CrA4CrA1zroVBno0BHo0CrdYwsXYBq4ZCHI0CHIYzrMVBrsYBksYBkIhHrs0zkw5BHE5BHsTBj41wsXYBq4ZCHI0CHIYzrMVBHh4Anh4AnIhHrhVBHh4Anh4AnITAHwVAkl1Brl1AGpACq40AHs2AHs2BGXYAj4ZCHI0CHIYwsX3zkdXBrIXBrh3zrsYzkI4CrA4CrAhHrdVBno0BHo0CrdTAHsVBrsYBksYBZpAAHsVCHlYAHs2BGX3zksZBGpbxZp0dNtVd2aWdN09x3FZMK5ncut0aGh3zkI4BHw0CqXhBj41AroXAroQwvBkMKYmyq0YzqoYyGp0dNtVd2YieuIPzHdVBHh1AkE4zqoUBj41AroXAroQwqdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxiM3FQc24jCjxXdNJ2wjXjevmXaGw6wOB2aZwTwOBkMKYmwkPYzkwTwOpWd2m0bK9VwkPjeu9XwjXjcKtZa2mVwkPjAkoXwrlXwrohAqwTwNmkc25nM29Tc3wjCjxNaKAYBkAjgGXjM29VevxWct9VaLi0wkQ7wN9ZauJZwkPYBZXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOB0c3ojzqx0fLpmwkPjd3aOwjXjMNdjCkp9zqxkc250dN9TL3pZaLMjCOTjc3xlaLwjCks2zqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwuaQcuX9xZAXAroXAroOwvFZMK5naN9ZcH0OevxicOBTMLFmyrwVBGXhAZ41yGd|DvxmM3Ehfr0OAqdhfH0OAqdhe2mleuh9xnsZxZpPaKmObvE9xnsZxZpNbKYTDGdkaNaNaNaNxZ8|DudhaNmTcq1ZeKYmDGeVc256aLxWxZpNbKYTDGdkAroXAroXxZp0dNtVd2aWdN09x3FZMK5ncut0aGhZzqonzkIQxn48dut0bqplDGeBAHsVCHlYAHs2BGX3zksZBGpAAGX3zksZBGpAAq44BnITBZpAAq44BnITBjpAAGX1zkh3BGpAAHsVCHlYAHs2BGX1zkh3BGpABZ43ArE1ArE4BZXYzkI4CrA4CrA1wsX3zkdXBrIXBrh3zrsVBrsYBksYBkIhHrhVBrsYBksYBkITAq43ArE1ArE4BnshHrhVBHh4Anh4AnITAq43ArE1ArE4BnshHrs0zkw5BHE5BHsTBj40AHs2AHs2BGpAAHEVAkl1Brl1AGX2zkIhHrs0zkw5BHE5BHsTBj41CrhnCrhnBGpACq41CrhnCrhnBGXYAj4ZCHI0CHIYwsX4zkEYAHMYAHM1zrsZzkw5BHE5BHshHrdVBno0BHo0CrdTAHsVBHh4Anh4AZpABZ43ArE1ArE4BZXYAG40AHs2AHs3wsXYAG45CHsYAHM1zrdVAHw1wtPOwuaQcuX9xZBNaNaNaNMOzn48z2d|wjXjMKB0bK9VwkPjcNJ4eqwTwOF5duIjCjxneNdjzqxnM2tTaGw6AG4ZzqxXc3BQeumWcjw6wOFWdqwTwN1idNeQcjw6wkwXAqoXwrohCHojzqxQM29Vd2BWcu9ZwkPjaNJkAHMnwO0TwNBWcOFZc2Ygd2iidNIjCOTjc3xlaLwjCksZzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTDGdkAroXAroXxZp0dNtVd2aWdN09x3FZMK5ncut0aGhYzqoXyGd|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOBPMLxmwjXjevmXaGw6wOB2aZwTwOpWd2m0bK9VwkPjeu9XzLxQa2i0wjXjcKtZa2mVwkPjBHohAHAhAqoXwjXjMNdjCkoTwNxOcZw6AGXjd2BicuIjCjwXzkhjzqxja3piauFQcNdjCjw2wrMhBjo2wjXjMNeiwkPXzkATwNxOMK92aLwjCkoVBjXjMK5QcKt0bK9VwkPjcN9VaGwTwNJid2IjCjxmcutneumkwjXjMGw6wkoVBjwTwNtWeNJZwkPjAGwTwOFQdqw6AqXjMNekc2YWdjw6wkoXAroXAqwTwOFQduxOM29Tc3wjCjxNaNaNaNMjzqxnM2tTaK92aLwjCjwUAGwTwNmkc25nM29Tc3wjCjxNaKAYBkAjzqx0bLpkc2YWdjw6wNsXAnd2AGwTwOFQduxOMGw6wksjgGXjcutVaZw6wNJVwjXjbuYnwkPYzqxnaLF0bK5OdZw6fZxnaLF0bK5OdnEjCksTwOBmevFQcNenButkeumWcjw6wNFWe25Tc2tlwjXjeNtTeKJkc2YWdjw6wkoXAroXAqwTwNB1d3FWcLBXaKJldZw6AqXjdutlaumVaZw6wkIhBZo1wrdjzqxVc2imMKEjCkoTwNaWcOFnbLQmwkPYAjXjM29Tc3wjCjwXAroXArojzqxja2BWcu9ZwkPjaNJkAHMnwjXjMNeiwkPjAGwTwOpWd2m0bK9VwkPjeu9XzLxQa2i0wjXjcKtZa2mVwkPjBrIhAHIhAqoXwjXjdN91cNFQcNdjCkITwNxOM29Tc3xWeNJZwkPjaNJlBnmiwjXjd2J0eumVa3AYMKB0bK9VwkPjd3pmaKEjzqxnaLF0bK5OdnxiM3FQc24jCjxncuJmdvFQcKJZwjXjd2J0eumVa3AnMKB0bK9VwkPjc2aNd2J0eumUaLwjzqxjc3xlaLxkc2YWdNJlwkPYzqxjc3xlaLxkc2YWdjw6wNIZMKA1CqwTwOFQeuYmM29Tc3wjCjxNakoXArojzqxPaKtlaN9VevBQfNIjCks0gGXjd2iidNJQM29Vd2BicuIjCjwZwjXjd2iidNJQM29Vd2BicuJWeNJZwkPjAZ41wjXjd2iidNJQM29VcKtZa2mVwkPYAqXjduYifKYQd3EjCOTjeNtTeKJkc2YWdjw6wNamMns2AZwTwOeQavFPAHoXwkPYzqxicveifLAjCksTwN1idNeQcjw6wkAXAqoXwrwhAHojzqxZc3JVaumVaZw6AqXjMNeiwkPjAqwTwNxOM29Tc3wjCjxNB2M3akdjzqxPbLB0c3x5eum0cuJnevxQb2IjCksTwNiQd3FWdOmja2BWcu9ZwkPjakeNB2M3wjXjaN9Veqw6wl9XaK4hI2tVdZwTwNiQd3FWdOmkc2YWdjw6wNamMns2AZwTwNt1eu9Xcut5cumneqw6AGXjdu9nbLFQc24jCjx0c3ojzqxPcKt4bZw6AqXjM29Tc3wjCjxNaKAYBkAjzqxja2BWcu9Zc3amdjw6wNM3akeNBZwTwNxWdNFmdNBWcu9ZwkPjBkM1CHFiwjXjbuJiauxWdNFmdNBWcu9ZwkPjaNJkAHMnwO0TwOaid3EjCkoTwOpZaLxWcuYnwkPXzqxnbutZaHEjCjx0aKYma3xicGwTwOBPMLxmBGw6wOePMLFnMLpXwjXjbumlaLaQauJWwkPYzqxXcut5aLxPaKmObvEjCks1AqXjMLBXaKB0wkPjc2aNwjXjd2iidNJ0bLFTaGw6AGXjd2iidNJ0c3ojCjwXzkwjzqxTc29XwkPXzqxnbvJNaNYmwkPXzqxZc3JVaumVaZw6AHoTwNBPMK5OaHxXcut5cumneqw6AGXjaNmTaGw6wmU7duQnx3t0eum0cuJXbOAOdLE6duQnx3t00yvEUeuo0zkFkntXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnPWz3pTdNQnzNBWcG9nMK1XcuIVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t00yvEUeuo0zkFknxXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnPWz3pTdNQnzNBWcG9nMK1XcuIVcLo0duQnx3t0gJ0jzqxXcut5aLx3bKF0bqw6AkhXzqxNc250dZw6AGXjaN9Veu5icKJnwkPjH3pmcjpHMK5nwjXjMN9ZauJZwkPXzqxjc3xlaLxkc2YWdjw6wNFmauJlaGwTwOpWd3Fmdm9Ncu9ieqw6AGXjdu9neuJZL2aTc2t0dN91cNFQcNdjCksXzqxXc3B0aLxPbKFmwkPXzqxXc3B0aLxgaNYWMLFUMLxObK4jCjwZAqoXwrohAqwTwOpWd3Fmdm9Ncu9ieuimbKePeqw6AHAXzqxXc3B0aLxgaNYWMLF3bKF0bqw6AHAXzqxXc3B0aLxgaNYWMLFja2BWcu9ZwkPjCro2CHIYwjXjM29VevxWct9DENapHGw6fZxWcjw6AGXjc3xlaLwjCks4zqxiM3FQc24jCjxkeLB0c20jzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhaNmTcr0Ow2aNaNaNajdhevxicOBNc3xUDGe0dNtVd2YieuIPAq41zqoXyGd|Dvpieuhhar0OHHIVBndXAHM4CrlTAHwVAnw1BklYCGprBG4YCrEnBnAXCqXYAj44CHd1Crh4wrEVAnhnAnEYBHdTAHAVAkIhAZ41zrsnzkw1wsAYzkdXBHo3BrI2zrsnzkw1wroVAkITAHsVBnl0CHw1BqoXzkw1zrsXwsAXzkw1zrhVAko1Ard0BHMhAG43ArIXBnE1BjX2zkd1wrAVBGX2zkd1wsA0zkA3AHAnBnMYzrMVBnIhBG4YBkw1CrdXAZX3zko5Akh5CrAYwrIVBnE2AHM4BqX3zkM1AHsYBHo3wsXYAG4nCrdZAkAYzrEVArsXAro5AndhHrsZzkwXArM4BqX1zkw3Arw3CHdYwsX2zkI2AkInArd1zrhVCHo5BHsZBkAhEnMVBkhnCHsYCHITCG4ZBHonBnMYAZo2zkd1zrlVBks3BrdXAkwhBj43BGXYAqprBj43BGXYAq4nBno3BnwYwrMVBkh3CHsZAHITAHoVBnw3ArEZCGo2zkI3AnI2Bkw0zrsYzko1Crl4AkIhHrsZzkw0CrdZCrATAHEVBkMXAHd3AZpAAHsVBrE1ArE3AZXYBG45AkM3ArM4wsX1zkd3Ars2Crh5zrsZzkAZBHM5AHlhKjpBAHAVBGX2zkd1wsAYAG43ArIXBnE2zrMVBnIhAHoVAkITBG4ZCHE5AkI0BqoYAq4ZBGXnzkIhEnsXzkw1zrsVBno1Ard0BHMhAHsVBno1Ard0BjXXzkw1wrsnzkITAq4ZBGprAHIVAkl0CHw1BqXXzkw1wrs2zkd1zrsVBno1Ard0BHMhAHMVBnITAZ41wsAYBj43BGX1zkw5BrlZBHE0wrs1zkw5BrlZBHETBj43BGoYAZ41zrMVBnIhKjpBAZ41zrsYzkd1wsA0zkE2BkE5CrAYzrsYzkd1wrIVAkITAHoVCHM2Brl4AZo1zkw1zrsXwsA1zkw1zrlVArAnBHoYBklhBq40BkM0CHhnAGX4zkw1wrAVBGX4zkw1wsAZzkInAnIXAHM5zrhVAkIhAG43BGX5zkonAnIXAHM5wrsVBnITAHohEnsVBnITAHoVCHM2Brl4AZoZzkInAnIXAHM5zrsYzkd1wrAVBGXYAG43BGpbws0YAZ41zrIVAkIhEns0zkE2BkE5CrATBG4ZBGoYBG4ZBGX0zkE2BkE5CrAYwrs1zkw1zrAVBGprAHIVAkITAj41AnA1Ars2CGoYBq40BkM0CHhnzrsVBnIhAHAVBGXYzkd1wsAYAj41AnA1Ars3zrsVBnIhAHsVBnITAj41AnA1Ars2CGoYAG43BGXnzkIhEnsYzkd1zrEVBrM2Brl4AnshAHwVBHAnBHoYBZX1zkw1wrsnzkITBG4ZBGpbws0YAZ41zrs5zkd1wsAYAG43ArIXBnE2zrs5zkd1wrsXzkw1zrs4zkw5BrlZBHEhAHoVAkITAHMVBGprAHoVAkITAHEVBno1Ard0BjoYAG43ArIXBnE2zrsnzkw1wrsnzkITAHAVAkIhEns1zkw5BrlZBHETAHAVAkIhAHMVBnITAHEVBno1Ard0BjoYBj43BGXYBj41wsAYBj43BGXYCq4ZCHE5AkI0wrs1zkw5BrlZBHETAHlVBnIhAHAVBGXYCG43BGpbws0YAZ41zrs4zkw1wsAYBq40BkM0CHhnzrs4zkw1wrs1zkw1zrs3zkE2BkE5CrAhAHIVAkITAHMVBGprAHIVAkITAHIVBHAnBHoYBZoYBq40BkM0CHhnzrs0zkd1wrsnzkITAHEVBnIhEnsZzkInAnIXAHdTAHEVBnIhAHsVBnITAHIVBHAnBHoYBZoYAG43BGXYBj41wsAYAG43BGXYBZ40BkM0CHhnwrsZzkInAnIXAHdTAHhVAkIhAHAVBGXYCq4ZBGpbxZpNbKYTDGdkaNaNaNaNxZ8|thumbs_img|reloaderTimer|stripsspace|stripsw|tippmargin|ffce00|slidespeed|pjslng_sleeptimerhour|unescape||normalonclick|Verdana|files_sleep|logos|current_sleep|vast_impressions_all|action_back|vast_remove|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOpTMLljzqx0fLpmwkPjd3aOwjXjMNdjCkoTwNxOM29Tc3wjCjwXAroXArojzqxja28jCksTwNxOdutlaumVaZw6wkdhBZo3wrdjzqxQM29VcKtZa2mVwkPjAqoXwrohBqwTwNxOMGw6Aq4nzqxja2tWeNJZwkPXzkMTwOBkMKYmc3amdjw6wkEjzqxPbKFmwkPYzqxPbKFmc25Xcut5wkPYzqxPbKFmc255c3J0eKxmwkPYzqxQM29Vd2BWcu9ZwkPjMHonBnMYwjXjcKtZa2mVwkPjAnohAqoXwrAXwO0TwNBWcOFZc2Ygcum2aGw6fZxWdNFmdjw6AHoTwN9VwkPXzqx0aLi0wkPjcum2aGwTwNYmevFmdOBXMKBQcNdjCkwTwNtkeumWcjw6wNYQeNIjzqx0fLpmwkPjeuJ4eqwTwNiicNEjCkoTwNBTbKBSwkPXzqxNc250d2m6aGw6AHoTwN1idNeQcjw6wkohAqoXwrsXwjXjMGw6Aq41zqxPbKFmwkPYzqxPbKFmc252c2EjCkt9zqxkc250dN9TL3B0c3ojCOTjc3xlaLwjCks1zqxWcjw6AqXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGh0zqo0yGd|DudhevxicOBNc3xUDGe0dNtVd2YieuIPAjXhAZlODkYXMLFPwuE9x00YBjX3zksnBkMYAHAZwsXYBjX3zksXCHs2CHE1wsXYBG4ZArhYBnh1zrdVAHo5AHM5BrIhHrs0zkw3BHo5AZX3zksXCHs2CHE1wsAYBq4ZBnIXCHATAZ4YCHlYAkMZBGoYAG4XBkAYCHdTAqo3zksnBnI0BkE1zrohEnAVAksYCrl1CHsTAqoXzrAVAHl5AHw2AkIhAqX3zksXCHs2CHE1wsAXzrsYzkoYCHwYAkMhAZ4ZAHs4CHI5AGXYBq4ZAHhnAnh5wrdVAHA3BHE2BrITAHEVAks4AnA4CGpABZ4YAnd1BrM0BGXYAj40BrsXBrM1wsA0zks5AnAXCrI1zrsZzkE0AHo0BkIhAG43CrEnCrM2AjXYAq4XBrs3Ars4wrsVBnh0Anh2BkwTBZ4YArlYBkl0BGprAG43CrEnCrM2AjX0zks3BkMnBno1wrEVAHlnAno4BHITAG43BndZCHwnBjo3zksnBnI0BkE1zrsVBnd3AklZAnMhEnsXzko4AHd4BrETAG43BndZCHwnBjoYAj40CHo3ArMnzrEVAHd2BkA3ArIhAHwVBrlXBno2AZX3zksXCHs2CHE1wsXYAq42BrE1AHM3zrdVAHo5AHM5BrIhHrsnzkA4Akh5CHMTAHsVBHIZBroXBqpAAHMTBZ4YAnM2AHsnAjpbxZpNbKYTDGdkaNaNaNaNxn48z3pieuh|Dq9ODkXWd3aODjwTwNmkc24ZwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuX9xZAXAroXAroOwvFZMK5naN9ZcH0OevxicOBTMLFmyrsTwrsQxn48du9TfKeWcjpXc2mVevA9xZ0YzksnBkh2CrA4aG0YAZo1zkd0BHI1BkM0wq0YzksnBkh2CrA4aG0YAZoYAG43Brl2Crw2wrEVAroZBrM1CrwhAHsVBnE5BkhZBjo5zkoXAkE2BHhZwrs2zkd0CHM4AkMhCG4XArw0BkI4AjoXzkd0CrlXAHA2BZo0zkoXAkE2BHhZwrIVBnE1BHI2BkEOwuaQcuX9xZBNaNaNaNMOzn48dut0bqplDGeBAHAVBGX3zkd5Akh5AnwZwsXYAG44BHA1BHA0zrMVAHE2BrE2BkshHrsYzks0BkE0BkMTBj44BHA1BHAnCGpAAHwVBnlZCrlnAjX4zkIhHrsYzks0BkE0BkMTAHoVAHE2BrE2BjpAAHsVCrInBHInBqXYAq44BHA1BHA0wsXYAZ41zrlVAko3AHo2BnhhHrs1zks0BkE0BkMTAHoVCrInBHInBqpAAHIVCrInBHInBqXYAq4YBrM0BrM2wsXYBq4ZArdYArM4zrhVBGpAAHIVCrInBHInBqX2zkh1AnI1AnA5wsXYBG4YBrM0BrM2zrMVAHE2BrE2BkshHrsnzkITBZ43CHw4CHAZAjpbxZpNbKYTDGdkaNaNaNaNxZ8|Dvpieuhhar0OHHsXzkl5BnAXBnwTAj4XCHsZCrEYCqprAHsVBHo5Crh3BZXZzkwnBrA1ArI5wrsZzkM4Akw5AHsTAj44BrMXArI2BZoYAZ4ZCrh5Crw1zrAVAkl3CrsXBHhhEns0zkl5Bro2AHlTBq41Bkd1CrhnAjoYBG45CHM3BHIZzrMVAnA0AkdnArMhAHIVCHlnAHh5BjX4zkd2AHoXBkw3wsAYBG45Crl2Ano1zrsYzks4Anw0CrwhAHEVCHlXAkI5BqXYAj45Akl1BnAhAHAVAkl1AnlTAHEVAHdXCrhnwsAYAj42CHoZBrIZzrs0zkMYBro4BkMhAHsVBrA1BnlYzrs1zkw1BnM2BjoYAq45CHdnArdZzrs1zkA2ArwZCHIhHrsXzkl5BnAXBnwTAHdVBrA4Anw5CqprAHsVCrl3AHE3CGXYBZ4ZAndnBrA5wrsnzks4And5BrlTAHMVBnAYBkE1BZoYBq40BndYAnoZzrs1zkd4BrEYBkEhEns2zkM1Crl2BnMTAHEVAHh2BrI0BjoYBZ45Crh2AnETAHsVCrMZCHM0AGoYBZ45CHAYCrd0zrhVBnMnCHE0CGprAHdVCHl3BnE0BjX1zkM2AkA0BkM2wrs2zkM2CHo4AHsTAZ4nAksnAkwYAZoYBq40CrA1And2zrsVBklnBnEYAnhhEnsnzks5Akd5BnlTAq43Anw1AkA2AnAhAHsVCrl1AHAXCqXXzkwYAnAZAko0BGoYAq45CHdnArdZzrohHrsXzkl5BnAXBnwTAj4XCHsZCrEYCqpbxZpQar0OduQnL3aWcvJUaJ9mcuJUaK50AjdhaNmTcq1ZeKYmDGeVc256aLxWxZpNbKYTDGdkaNaNaNaNxZ8|DudhaNmTcr0OwnoXAroXAqdhevxicOBNc3xUDGe0dNtVd2YieuIPAGXhAGlODkYXc2Y5a29VwvpWbK50dn0OzHsVAHA2CrM4AnimzHsnwrIVBnE1BHI2BkEhzHsVAHA2CrM4AnimzHsnwrsYzkd0CHM4AkMhBq4XArw0BkI4AjoYAG43Brl2Crw2wrlVAroZBrM1CrwhAHMVBnE5BkhZBjo5zkoXAkE2BHhZwroVBnE4CHoYAnM3wrEVAroZBrM1CrwhBG43BrI1BHM2BqdhaNmTcr0Ow2aNaNaNajdWDkYXMLFPwuE9x00YAG4XArw0BkI4zrEVBnE5BkhZBkwhHrsYzkoXAkE2BHhTAHwVBnE5BkhZBjprAHsVAroZBrM1CqXYAj43Brl2Crw2wrsnzkInBrM5AkETAHsVBrwYCHE4AjoYAZ41AnE2CHw0zrhVBnE5BkhZBkwhEnsnzkInBrM5AkETBj4XBnd0AHM5CGoYAG4XArw0BkI4zrEVBnE5BkhZBkwhAHsVAroZBrM1CqX0zkd0CHM4AkMZwtPOwumlDGeXbOBgeN9TeK1mL2JTaK1mcOEYxZpNbKYTDGdkaNaNaNaNxZ8|Dq9ODkXWd3aODjwTwNtkeumWcjw6wN11euIjzqxiM3FQc24ZwkPjeK5UeLFmwjXjevmXaGw6wOB2aZwTwOBkMKYmwkPjAGwTwN1idNeQcjw6wksnwrohAqoYAZwTwNsjCjwXzkljzqxic3amdjw6wksjzqxnM2tTaK92aLwjCjwYzkwjzqxQM29Vd2BWcu9ZwkPjaNJkAHMnwjXjdu9nbLFQc24jCjx0c3oUcuJNeqx9zqxkc250dN9TL3aWcvJUaGw6fZxWdNFmdjw6BGXjc24jCksTwOF5duIjCjxnbutXaGwTwNtkeumWcjw6wOaWcvJUaGwTwNhjCkETwOxWeK5lbK5OwkPjAqwTwNB1d3FWcLeQavFPwkPYzqx3wkP3AqXjMGw6AGXjMKxOwkPjAq4nwjXjMK92aLwjCjwUAGwTwNBWcu9ZwkPjaNJkAHMnwjXjM29Tc3xjaZw6wNamMns2AZwTwNBWcu9Zc3amdjw6wNamMns2AZwTwNiQauIjCkoTwNiQauJWeLFUeLFmwkPYzqxZc3FieumWcjw6wkw3AqwTwNxOdutlaumVaZw6wkIhAqo1wrojzqxjaZw6AqXjbutVauYmwkPXzqxPMK5lcuJkc2YWdjw6wNsXAnd2AGwTwNiicNFTaLBkMKYmwkPjAq42wjXjcKtZa2mVwkPjCrohAqoXwq0YAqwTwNJ4dutVaqw6wj0YwjXja3xiaummcOEjCkoTwOpWd2m0bK9VwkPjeu9XzKYmaOEjzqxPMK5lcuJUMLxObK4jCjwXwrohAGoXwjXjM3Jneu9UauJnbKeVwkPYzqxkeLB0c21laLBQa25neNdjCjxdckYneNdhe2mleuh9xnsXBvp4xZpPaKmObvE9xnmXfqdheNmme0xWfr0OCrohAHl1wrsXBqo5xZp2aLxnbK9VDGdYzksOwviUcu5nDGePevFXCj8We3e3zOdnzN9ZaZ8ZAroXz3B2aZdhfu1TcOA6fuYQcNT9x2i0evo6zZ93e3dVenAVc3xOzns5CHlWfuYQcNTODmYVwqohwrYOwumlDGevdN91dq0ZxZpnevxWb2I9x25WcNIOwvB0dN9SaG13bKF0br0OAGdhaNmTcr0OcN9VaGdhaNmTcq1ZeKYmDGemeNJVc2FlxZp0dNtVd2aWdN09x3FZMK5ncut0aGh4Aq4XAroXAroTwrs5BG4XAroXAroQxn5dcjohwqohwqohDvxmM3EhaNmTcr0Ow0auFlauFjdhfr0OAqdhfH0OAqdhe2mleuh9xnsOwuimbKePer0OCGd|Dq9ZaKB0DmYVwqohwqohwqo8dNJkeqpNbKYTDGdkFlauFlauxZp4DGd2xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xns4xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnsZxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|wjXjMKB0bK9VwkPjduYifGwTwNtkeumWckwjCjxXMLJnaGwTwOF5duIjCjxneNdjzqxnM2tTaGw6wkwVAjwTwOBkMKYmc3amdjw6wkwVBGwTwN1idNeQcjw6wkwXAqoXwrohArojzqxiwkPjAGwTwNtWeNJZwkPjzHsjzqxXc3BQeumWcjw6wOFWdqwTwNmkc25nM29Tc3wjCjxNaKAYBkAjzqxjaZw6AqXjMNekc2YWdjw6wkBNMHijAZwTwNxOcZw6wksjzqxja3piauFQcNdjCjw3wrdhBZo3wO0TwNBWcOFZc2YgcLJ0aGw6fZxWdNFmdjw6BqXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|Dvpieuhhar0OHHs2zrdVAHA2BksYAnwhHrs2zrdVAHo5AHM5BrIhHrs1zkwXCrs3CrITBZ4YArlYBkl0BGpAAHEVAkd1ArlnzrdVAHo5AHM5BrIhEns0zkw3BHo5AZXnzks5CHsZBkw1wrsYzko2Ans5BZXXwrdVAHA3BHE2BrITAqprAZ4ZAHs4CHI5AGXXwroTAZ4YCHlYAkMZBGoXzrdVAHo5AHM5BrIhEnoTAHsVArs5AksZBjonzkwYAHh5BHlYzrs0zkwYCrAnCrlhBZ4YAnd1BrM0BGXYBq4ZAHhnAnh5wsX3zksnBnI0BkE1zrsZzkE0AHo0BkIhEnEVAHlnAno4BHITAHwVBrEYArE2BGoYzkd4BrA4BkMZzrsXzko0AHdXAHhhAG43CrEnCrM2AjX3zksXCHs2CHE1wsAYzkd4BrA4BkMZzrEVAHd2BkA3ArIhBq4YCHAnArh1BGXYzkd3Bnw5AkA2wrdVAHA3BHE2BrITAG43BndZCHwnBjprAHoVArhYBnh0BqXYzkd3Bnw5AkA2wrsZzkE5ArdXBkATBq4YBnM2AndXBGoYAj40CHo3ArMnzrdVAHo5AHM5BrIhHrsXzkM0BrIYBkdTBZ4YArlYBkl0BGpAAHAVAnhZCrl5BjXYAG41BHw0Aro0wsXYBjX3zksnBkMYAHAZwtPOwuaQcuX9xZBNaNaNaNMODkXWdut0br48z2d|default_w|1v3e1ghwoulf|default_h|fullwheel|Dvpieuhhar0OHHdVBno3BklZAkhTAq43Bnd3BnhXBkdhHrdVBno3BklZAkhTAHAVAkwZAkwZAjprBZ43Ard2CHwZCqXYAZ42BHs3BndhCq4XCHsYAkoZAGXYBqo4zkI2BrsXAkInzrs0wsXYAG4YAnAnAnAnzrs0wsAYAG42ArMnAHI2zrs0wrsYzkl4CHd0AnITAHAVBkIYBnd3wrsYzkl4CHd0AnITAHAVAkwZAkwZAjpAAHsVCHh5BnEnBGXXzkd3Bnd3Bnd3CqprAHsVCHh5BnEnBGXXzkA0CrwZAkl3AjoYAG42ArMnAHI2zrohAHsVAHAnAnAnAZXXwsX4zkI2BrsXAkInzrohEnhVArlYAHwXAksTAqo3zkdXBnM5Akw4zroVAnE4AkwZCHdZwrdVBno3BklZAkhTAq43Bnd3Bnd3BnhhKjpBAZ40AkI2BrsXAGXYBqpAAq44BHM0AHoZBHATAHEhEnoVAnhnBrw3CHAYzrs0wroTAHAVBkIYBnd3wroTAHAVAkwZAkwZAjpAAqXXzkd3Bnd3BnlYAZprAqXXzkA0CrwZAkl3AjoXzkA4AnEZBnlnAGXXwroVCrI2BrsXAkInzrohHrAVBrw1BkEYArsTAqprAZ44CHh2AkAnBqXXwrEVAkhZArIYAkdTAq4nBrhZAkw5BnwhBq4ZCrwXBHsZBZXXzkd3Bnd3Bnd3CqpABq4ZCrwXBHsZBZXYAZ4ZAkwZAkwZwsA0zkw4Ako1AHw3zrsnzkM1AHd3BZonzkh5CrMZAnA0zrs0wrAVBrw1BkEYArsTAHEhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxQM29VAZw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGhZzqonyGd|1fZxnM3xmaK5kc2YWdjw6wkE1Brs0MjwTwOFWc2YjMLwjCOTjM29Tc3wjCjwXAroXArojzqxPbKFmwkPXzqxUMLxObK4jCjwUAkohAqoXwrojzqxOdNtlbKJVeqw6AqXjMK5QcKt0bK9VwkPjMKYXbusjzqxiwkPjAqwTwNhjCkoTwNYmaOFicNFZbKePevpiauFQcNdjCkF9zqxkc250dN9TL3FQeuYmwkQ7wN9ZauJZwkPYzqxWcjw6AqXjMKB0bK9VwkPjeum0cuIjzqx0fLpmwkPjeuJ4eqwTwOpWd2m0bK9VwkPjeu9XzKYmaOEjzqxkcumkbZw6AqXjbutVaqw6AqXjeuJ4eqw6wjwTwOaidjw6wOFQeuYmwjXjbumlaGw6AqXjbumlaK9VduYifGw6AGXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxjaZw6AqXjMNeiwkPXzkETwNxOdutlaumVaZw6wkMhBjo2wrMjzqx0bLFTaGw6wmFQeuYmwu9NwvFPaGp0dNtkbZwTwNBWcu9ZwkPjaNJkAHMnwjXjcKtZa2mVwkPjAHIhAqoXwrs1wjXjaN9Veqw6wl9XaK4hI2tVdZwTwNaWcOFnbLQmwkPYAjXjcuJ0euJZd3piM2mVaZw6wkojzqxnbu93eum0cuJXcut5cumneqw6AGXjcKtZdLJmaGw6AqXjMGw6wkoVBZx9zqxkc250dN9TL2YQcNIjCOTjc3xlaLwjCkATwN9VwkPYzqx0fLpmwkPjd2iiduIjzqxiM3FQc24jCjxTbK5mwjXjbqw6AHoTwOxWeK5lbK5OwkPjAGwTwOdjCksXAqXjMGw6wksjzqxiMNdjCjwXzksjzqxicu9iaqw6wkoVAjwTwNtWeNJZwkPjAq4ZwjXjM29Tc3wjCjxNaKAYBkAjzqxkc2YWdNxOwkPjaNJkAHMnwjXjM29Tc3xTc2tlwkPjaNJkAHMnwjXjM29Tc3xWeNJZwkPjaNJkAHMnwjXjMOJNaNJZwkQ7wN9VwkPXzqxkc2YWdjw6wNaNaNaNajwTwNsjCkoVBL0TwOpWd2m0bK9VwkPjeu9XwjXjcKtZa2mVwkPjAkdXwrs1wrohAHIjzqxPMK5lcuIjCkoTwNxOdutlaumVaZw6wkIhAqo1wrojzqx0bLojCksTwNiQauIjCksTwNiQauJWcNYQeNIjCksTwNJ4dutVaqw6wj0YwjXjcumVaLFQdu1idNeQcNxWevFWcGw6AHwTwOFQduBWcu9ZwkPjAHwYAksZwjXjeumXMNeiwkPjAGwTwOFQduxOM29Tc3wjCjxNaKAYBkAjzqx0bLpXMKFlbK5OwkPjAZo1wrEhBGwTwOFQduaWcOFnbLQmwkPYAqXjeumXMNeZc3JVaumVaZw6AjXjbutVauYmd2BicuIjCjwYwjXjbutVauYmM29Tc3wjCjxNaKAYBkAjzqxPMK5lcuJQM29VwkPjDvB2aZp3bKF0br0OAHmXfqdhbuJQa2i0DGdYCLp4xZp2bKJ3EN94DGdUAGoUAGoYCGoYCGdheNJZd2mWck0OAG4YxZp4cKYVdn0ObvF0drPWz3e3eZ53AZ5WdNdWAkoXAq9neNdOwviUcu5nCOiTbK5SDGePevFXCj8We3e3zOdnzN9ZaZ8YCHl5z3iTbK5Sxn4hwqohDuBQdNBTaGpnevxWb2I9xZBNB2M3akdOwvB0dN9SaG13bKF0br0OAqdhaNmTcr0Ow2amMns2AZdhaNmTcq1ZeKYmDGemeNJVc2FlxZpkfr0OCq41xZpkfH0OCq41xZpZDGd4zkIODkXWM2mZM2YmDkXWd3aODjwTwOFQduaWcOEjCjxDduJVwtBicOAjzqx0bLpXc2mVeuJZwkPYgGXjM29VevxWct9Xcut5wkQ7wN9ZauJZwkPZzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwvFZMK5naN9ZcH0OevxicOBTMLFmyrITwrAQxn48dut0bqplDGeBAHsVBrE2AnE2AjX2zks1BnhYAkIhHrsVAHEXAHlZAnsTAq4YAHM2BkM2BZprAG4XAHEnAkM5AjXXzko0And1wroVCrh0BnI5BkwTAqoXzkdnBkM4AkM5zrohEnoVAnAnAHdnArhTAqoXzkoXAndXAHlZzroVAnw4AHw1wroVAronBnoYCHwTAq43AklYBkM2BZpAAqXXzkdZCHs2BkM3wsXXzrsnzkw3ArhnAnAhHroVAronBnoYCHwTAHAVAkdXCrAnAZprAq4XArA3Ars5AjXYAZ42Bns4BnIhAq4nAnAYBnAXCqXYBqoXzkdnBkM4AkM5zrs0wsAXzkh4CrE2AHI0zrs0wrsVArs0Anw2CHwTAHAVCHE4CHI4AZoYzks1AHw5Cro4zrsnzkh3Bko0AHdhHrsYzkE0BkA0BkwTBZ44BrwYCrd1wsAYAG42CHo2BnAYzrdVBkEYBkM2BZoYAG44BrMYBHA4zrdVAnA5ArMZBGoYAG44BrMYBHA4zrdhEnsYzkh0Bks1AnhTBj42Bko5And1wrsYzkM5ArM3AnsTBj4nBks5BnlYBZoYAG40BrMnBrMZzrMVAHI3CrsZBGpAAHsVBrE2AnE2AjX2zks1BnhYAkIhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxQM29VAjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTDGdkAroXAroXxZp0dNtVd2aWdN09x3FZMK5ncut0aGh0zqonyGd|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnw0xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnAXxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|DudhaNmTcq1ZeKYmDGeVc256aLxWxZp0dNtVd2aWdN09x3FZMK5ncut0aGhYzqoYyGd|Dq9ODkXWd3aODjwTwNtkeumWcjw6wOpTMLmTbLB0wjXjdu9nbLFQc24jCjxTaKa0wjXjcKtZa2mVwkPjAqoXwrohBjwTwNxOwkPYzqxnM2tTaGw6AG41zqx0fLpmwkPjd3aOwjXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxja3piauFQcNdjCjwnwrAhAZonwjXjMNeiwkPXzkETwNxOMK92aLwjCkoVCqXjeumXwkPXgGXjM29VevxWct9NeKYTwkQ7wN9ZauJZwkPYAZXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd||Dq9ODkXWd3aODjwTwNtkeumWcjw6wOBmevFQcNenwjXjdu9nbLFQc24jCjx0c3oUdNmObvEjzqxUMLxObK4jCjwYAZoYAZoXwrojzqx0fLpmwkPjd3aOwjXjd2BicuIjCjwYwjXjMGw6wksjzqxic3amdjw6wksjzqx0bLojCkoTwOBkMKYmc3amdjw6wksVAjwTwNmkc25nM29Tc3wjCjxNaKAYBkAjzqx0bLpja2BWcu9ZwkPjaNJkAHMnwjXjeumXM29Tc3wjCjwXakpNAuMjzqx0bLpja3xWeK5lbK5OwkPnzqx0bLpja2sjCjwYwjXjeumXaN9VevBQfNIjCksYzqx0bLpXc2mVeuJZwkPXzqx0bLpXc2mVeuJZMKYQa24jCjxZbKePeqwTwOFQdvpiauFQcNdjCjw1wrdhBGo3wO0TwNBWcOFZc2YgduYifKYQd3EjCOTjc3xlaLwjCklTwN9VwkPXzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwvFZMK5naN9ZcH0OevxicOBTMLFmyrwTwrAQxn48dut0bqplDGeBAqXXwsXYBjXXwsXYBjXZwsXXzrwhHroTAqpbws0XzrMhHrs2zrMhHrs2zrhhHroTCqpAAqX2wtPhHHoTAHwhHrs2zrsZwsXYBjXYBqpAAqXYBqpAAqXYAjpbxZpNbKYTDGdkaNaNaNaNxZ8|Dvpieuhhar0OHHMVBkd0Bro1AHsTAqpABj42BnE0ArIYAGXYzkd0AHlnBHE4wsXYzkd0AHs0CHs2zrsVBnEYCHA1BrhhHrsVBnEYAHE5AHMTBj42Bnd0AHlnBGpAAqX2zkM3BnEYCHA1wsXXzrohHrMVBkd0Bro1AHsTAqpbws0YCqXXwsXYCqX2zkM3BnEYCHA1wsXYBj4ZBHh4BHo4zrMVBkd3Brs5AnIhHrs2zkw1Crh1ArhTAG43Brs5AnI0CqpAAHsVAnw1BHl0CGXYzkd0AHlnBHE4wsXYAG4nAkI1CHE5zrohHrs4zrohKjpBAG43BrsYBrlYBjXYAG4nAkw1Cro2wsXYzkd0AHs0CHs2zrs2zkw1Cro2BrIhHrMVBkd0Bro1AHsTAHMVAkI4ArM0BGpABj42BnE0ArIYAGXYCqpAAqXYCqpAAqXYAG4nAkw1Cro2wsXYzkd0AHs0CHs2zrsYzkAZAkI4ArMhKjpBAHhTAHsVAnwZBHhXBjpAAHhTAHhhHrsYzkAZBHI5BrlTAHhhHrsYzkAZBHI5BrlTAHMVAkI4ArM0BGpAAHMVAkI4CrIXCqXYBj4ZBHhXBkE1wsXYBj4ZBHh4BHo4zrsYzkAZAkI4ArMhHrs4zrsYzkAZAkI4ArMhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxQM29VAjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwvFZMK5naN9ZcH0OevxicOBTMLFmyrsTwrsQxn48dut0bqplDGeBAqX2zkM3BnEYCHA1wsXXzrEVCHA1BrhnCrdhHrEVCHAnAkI1CHITBq45AnI0CrA4BZpABq45AnAZBHI5BGXUCq44Crs3CrEZaG0YBjpABj42BnE0ArIYAGXUCq44Crs3CrEZaG0YBjpABj42BnE0ArIYAGX2zkM3BnEYCHA1wsXXzrMVBkd3Brs5AnIhKjpBAHsVAnw1BHl0CGX2zkM3BnEYCHA1wsXYAG4nAkI1CHE5zrohHrsnzko2Bkd0BrsTAqpAAHAVArM2BnE0AGX0zklnBHE4Anh3wsXYCqX0zklnBHE4Anh3wsXYCqX2zkM3BnEYCHA1wsXYAG4nAkI1CHE5zrMVBkd3Brs5AnIhKjpBBq45AnAZBHI5BGXYCqpABq45AnAZBHI5BGXYAZ4XBkE1AHMYwsXUCq44Crs3CrEZaG0YBjXYAZ4XBkE1AHMYwsXUCq44Crs3CrEZaG0YBjXYAG4nAkw1Cro2wsX2zkM3BrEXBHsYzrsYzkAZAkI4ArMhHrMVBkd0Bro1AHsTAHhhHrEVCHAnAkI1CHITAHhhKjpBAHsVAnw1BHl0CGXYCqpAAHsVAnw1BHl0CGXYAG4nAkw1Cro2wsXYCqXYAG4nAkw1Cro2wsXYCqXYAZ4XBkE1AHMYwsXYAZ4XBkM3BrEYzrsnzko2BrIYBkshHrsnzko2Bkd0BrsTAHhhHrsYzkAZBHI5BrlTAHhhKjdhaNmTcr0Ow2aNaNaNajdWDkXWan48z3B2an4jzqxiM3FQc24jCjxNeKYTd2BZaKJVwjXjMKB0bK9VAjw6wN5WdN1icvBkdNJmcjwTwOF5duIjCjxneNdjzqxXc3BQeumWcjw6wNBWcOFZc2YnzLxQa2i0wjXjcKtZa2mVwkPjAqoYAqoXwrsXwjXjd2BicuIjCjwXzkhjzqxiwkPjAGwTwNtWeNJZwkPjzHsjzqx0bLojCksTwOBkMKYmc3amdjw6wkoVCGx9zqxkc250dN9TL3B0MLx0wkQ7wN9ZauJZwkPYBqXjdu9nbLFQc24jCjx0c3oUcuJNeqwTwOBkMKYmwkPjAZ41wjXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|DudhaNmTcq1ZeKYmDGeVc256aLxWxZp0dNtVd2aWdN09x3FZMK5ncut0aGhXzqoXyGd|wjXjbKBWckAjCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|Dvpieuhhar0OHHlVCro5CHA0BrhTAqprBq40AHE0Bno1AjXXwroTBq41wroTAHohEnoTAHIVBGo0zkEYBrE3ArIZzrwXwrlVCro5CHA0BrhTAkohEns1zkwXBHA5CrETAkohAHlVBks5CrM5zrs1zkIhAHlVBks5CrM5zrsXwsAYCG42AHl4BklTBq41wrs1zkwXBHA5CrETAqo5zkhXCHlnBrE4zrohHrlVCro5CHA0BrhTAqpACG44Arl5AnE0CqXXwtPhHHdVCrE3CHE3BHlTAHEVBGpABZ44Brd5Brd1CGX1zkIhHrsnzkdnAnlXCrATAHohHrdVCrE3CHE3BHlTAHEVBGpABZ44Brd5Brd1CGXYBq41wtPOwuaQcuX9xZBNaNaNaNMOzn48z2d|wO0TwNBWcOFZc2YgeumUaGw6fZxWdNFmdjw6BjXjc24jCksTwNtkeumWcjw6wOFQcKIjzqx0fLpmwkPjeuJ4eqwTwOFmfvEjCjwXCkoXwjXjaN9VevBQfNIjCklTwN1idNeQcjw6wkw1AqoXwrohAHAjzqxkcumkbZw6AqXjd2JXMLxieu9ZwkPjzZwTwNaWcOEjCjxIMKiWcKsTELxQMKXjzqxTaLF0aLxndutkbK5OwkPjAGwTwNsjCjwXzkdjzqxXc3BQeumWcjw6wOFWdq1TaKa0wjXjM29Tc3wjCjxNaKAYBkAjzqxnbu93avJZMLFQc24jCkoTwOBPc3ejc3FPwkPYgGXjM29VevxWct9leLxieumWcjw6fZxWdNFmdjw6BZXjc24jCksTwNtkeumWcjw6wNF1dNt0bK9VwjXjevmXaGw6wOFmfvEjzqx0aLi0wkPjArPXAqwTwNaWcOFnbLQmwkPYAqXjcKtZa2mVwkPjAkIXwrsnwrohAqwTwNBTbKBSwkPXzqxNc250wkPjJutPc21izstZbKtTwjXjcuJ0euJZd3piM2mVaZw6AqXjMGw6wkoVBZwTwNBWcu9ZwkPjaNJkAHMnwjXjdu9nbLFQc24jCjx0c3oUdNmObvEjgGXjM29VevxWct9jeKaNaLwjCOTjc3xlaLwjCkhTwN9VwkPYzqxQM29VwkPjDvpRd2FQejpkcutndn0Ocu9iauJZyvxicNEQxn48z3pRd2FQek58gvXVcu9iauJZyvxicNEQzqoVcu9iauJZyvxicNEQCNxmaN9ZaGXhzNYWMKFmdjiZMK5lyHQiaOFmdjp7wuFQd3pTMLl6MNYWM2T7MN9ZauJZzLxiaum1dnPhBHomCZp3bKF0brPhAHJXfrThbuJQa2i0CjoYBLp4CZoUe2Jjb2m0zKtVbK1ieumWcj1NbKYTzK1WauI6wuxWeuh7wutVbK1ieumWcj1NbKYTzK1WauI6wuxWeuh7wq13aKxSbLEUMK5QcKt0bK9VCjpicNmUMLFQc24PdNtVaqlhAG44dZpQcNaQcNm0aGpmMLBmzKmVzK91erThMK5QcKt0bK9VCjpicNmUMLFQc24PdNtVaqlhAG44dZpQcNaQcNm0aGpmMLBmzKmVzK91erU9wq5Tc2tlaLwPdNtVaqlhf3pWd2m0bK9VCjpZaKYieum2aHThzLemMNUQeq1icNmUMLFQc24UauJTMLl6wq0Xzks2dnThMK5QcKt0bK9VzKFmcut5CjoUAq4YBOA7gGoVcu9iauJZyvxicNEQCNxmaN9ZaGXhzNYWMKFmdjiZMK5lyHQiaOFmdjp7wuBWcOFmcOE6wqdOCZpXc3BQeumWckPhMKxnc2Y1euI7wvFWdrPXgGoVcu9iauJZyvxicNEQCNxmaN9ZaGp7cuJNerPhzHAXdvh7wutVbK1ieumWcj1laKYifHPhzHoVAnxnCZp9wq5Tc2tlaLwPdNtVaql6MKa0aLwhfZpTaKa0CjonAvp4CZp9wspSaLmNdNtUaLAhMK5QcKt0bK9VyvxicNEQwvThAqITwrhXxGXhAHoXxGp7wuxWfq1nbutlc3d6wrohAkohAqoUAG4naK0hyuBWcu9ZyHThgGo0AqIhfZpjc3hUd2iiau93CjoXwrwVBKJUwrohAqoPM29Tc3wQCZp9wv0jzqxiM3FQc24jCjxjeKaNaLwjzqx0fLpmwkPjM3BnwjXjdu9nbLFQc24jCjx0c3ojzqxnM2tTaGw6wkoVBZwTwNBTbKBSwkPXzqxPbKFmwkPYzqxkc2YWdjw6wNamMns2AZwTwN1idNeQcjw6wkIXwrohAqoXwjXjcNmkcjw6wks0wO0TwNBWcOFZc2Ygd2J0eumVa3AjCOTjc3xlaLwjCksYzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZpNbKYTzLx1cuI9x25WcOQmdN8OwvFZMK5naN9ZcH0OevxicOBTMLFmyrsTwrsQxn48dut0bqplDGeBCG45BHlZAHMnBjXXwsXYAG4XBnA0AnIZzrwVBrwZCHhXBnIhHrsZzko4Brw3CqXZzkl3BkhnBkd1wsXYBq41BkI0AkMnzrsVCrM5AHw0BnIhHrs2zkoXAHA1BHATAZ4nBHd2BkM4CGpAAHIVAHl3AkM0BZX1zkh0AHEYBno5wsXYBG40AHI0BnI2zrMVCrAXBkh0AnIhHrs3zkh3AndXBkATBZ43CrhnCHsYwsXYCqX5zkh0Akw5CHI0wsXYBG41BHAnBHs0zrsXzkhXAroXBkAhHrs1zko3Arh0BndTAHsVCrA4Bro4CGpAAHMVArhYBklXBGXYBq4nBrwZArlnwsXYBq42BHM2ArEZzrs1zkhYAnI0BnlhHrsZzks1Ans1BrATAHEVBnM5Ako0BGpAAHsVArw3Brd2BjXYBG4ZBrwZBro4wsXYAq4XCrI1AHoYzrs3zkMXBnM3wsX4zko2AnhZBrI0zrs3zkdhHrMVCHh0AHo1BrdTAHIVAkh4Bro1CqpABG44AHw0BklZzrs0zkd4ArdYBrhhHrAVBrE2AHI1BnETAHIVCrInBndZAGpAAG45BkEZBkhYAGXYBq40AnE1AnlnwsXZzklZCHw3BHIYzrsYzkh4BrI3AnlhHrwVAnM2AnsnBrITAHoVCrwnArw2CGpAAqX5zkh5CHl3BrhnwsXXzkoZAno0ArlXBklTBZ44AkAXBrI3CqpAAj40BrM3Bns4AGX2zkh0AkAYCrEZwsXZzkl0ArdnBrA1zrIVCrEYBrs3ArlhHrsVCrhnCHAZCHdTAZ4nBHd2BkM4CGpAAZ4nAnsnAko4BGXYzkh5Akw2CHsnwsX1zkh2CHh4BkM0zrwVCrl2AHEXCrMhHrMVCHdZBkE2BkwTAj40Cro3Bnl4wsX3zklnBnInArhTAq4XBrMXBrsZAHA2wsX5zkl1CHwYBkA2zrohKjpBCq44Brl5Anh3AZX2wsA3zkw3BkonAnE1zrMhBjX3zkw3BkoYAnw4wrMTCq44Brl5Anl3BqprBjXYAq40AkA5CrM3wrdVAkd2ArAnBrITAHsVBZo4zkh0CHlnCrdnzrsYzkdhEnsXzkEZAnl2BkMTAHsVBZoYAG43zrsXzkEZAnl4BkdhAHsVBZX4zkh0CHlnCHd0wsAYAG43zrdVAkd2ArsnAkhhAHoVBrwnCHM2BjX2wrhVCrE5CHA4BnATBjpbxZpNbKYTDGdkaNaNaNaNxZ8|Lu4hwqohDq9ODmYVDq9neNd|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnEZxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnA2xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnE4xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnI0xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnM2xZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|Lu4hwqohwqohwrYZaKB0wuaQcuX9xZBuFlauFlMOwvh9xnMXxZp5DGdXxZp3bKF0br0OAGdhbuJQa2i0DGd5xn48z3xmM3E|pjslng_sleeptimerminute|getHours|vast_preroll_counter|vast_prerolltbimp|vast_prerolltimebreak|vast_pauseroll_limit|vast_pauserolltimebreak|vast_pauseroll_counter|vast_pauserolltbimp|vast_preroll_limit|vast_title|560|vast_impression|vast_click|vast_timeout|vast_pauseonclick|vast_volume||vast_closeonclick|vast_postroll_limit|vast_postrolltimebreak|vast_linktxtcolor|vast_linktxtbgcolor|vast_introtbimp|vast_skipbgcolor|vast_skipcolor|vast_titlecolor|vast_titlebgcolor|vast_introtimebreak|vast_midrolltbimp|vast_postroll_counter|vast_postrolltbimp|vast_playroll_limit|vast_playroll_counter|vast_midrolltimebreak|vast_midroll_counter|vast_skip|errortimeout|customimage|7de64206b23f6c886bed2cdca04b6d7e|e15222b35333w331y391g25203q1b3x2c1b3q02111m25313q2o252c2q2o2y23381g25211g2c2b381c2v3s11311o260w11313b213v313b381a2v3u11211m2z182v212n1z323a251q25353e162z2v253e1y2s2711113a231q27352e142z281y121z1411153x392o1921261s3s2v212p1z3u263e153v392q19212410111o251z3u28113w261z3w28113u2o313b233v2c2b233x29213x2720393v2e11112233163q02202c2b3y141m2c1d3q012z2k2411211m2z11112u271z311f3b3v2c1a1y12202v3w2u352c10111e1o1z133x29231t302q14252520352e182633211f1g182c1631281w1z1211222s2711121o3s350131243314351h2r3d1j1g1m1f1f1c1q3f1l2e1o3f1h3g183e1k1g1k1c1f2f1g3e1s3d1k2e1v3c1x2e1w2g1y2c1t2e102c1q3f1m2e1s2c182e1u3c1p2e1w2e1q2c1t1e1i2c1s3e162e1u2c1z2e1u2c192e1w2g1e2c1t3g1l2c1q2e1w2e1s1e142e1w2e1p2e1u2e1z2c1u2e1i2c1s3e1v2e1u2e1w2e1v2c1r2e1w2g1g2c1t2e1z2c1s2f102e1u2c182e1u2e1v2e1w2g1b2c1s1f182c1s3g1x2e1s3d192e1u3d172e1u1f182c1s3f112c1q3f1b2e1s3c1i2e1u2d152e1w3f142c1s2f192c1r3f1q2e1s2d192e1w3d122e1u3f192c1u3e1e2c1q3f192e1u3d1d2e1u3d152e1v3f1c2c1s3f192c1q3g1d2e1s2d172e1v3d1x2e1u3f162c1u3g1c2c1q2f1a2e1u3e1v2e1u3d152e1u3f192c1s3f1w2c1q2e1w2e1f1c1h3f1i1e1e3g1w1f142e1s2g1f1c1g1f141f143d1g1e1i1c1q2g1s3g1c1c1j3e1e2d191f1l2f181d123e1b1d1d1g1i3f1g2c1f3f1u3d1i1e1q1e1i1d1h3f1e1c1f1e1d1f1k1d183f1e3c181f1i3g141d1h1e141c181e1c1e1a1c1a3f1r1e1q2f1d1f1b1d1m3f1e1d1e1g1f1f1p3c122e161d1y1e1e3f1c1d1k3f1v2e1q2e1f1f1a3e1s1e1u3c1e3f1g3g141d1i1g1u1d1e1e1w1f1h1d1c3e1e1d1i1e143g1c1d1g1g1a3d1q2e1w1g1u2c1t1e1h2c1q3g1r2e1u1c1f3f1w2e1r2e1w2e1u2c1t2g172c1r2e1y2e1u1c162e1v2c1f2e1u1g1t2c1s3g1l2c1r3g1w2e1f3c153f172d1t3f14141p103e161e1i3e1g2g1f3d122e1i3f181e1g1f1q1e1h1e123g1a1c1r3g142c1s2g1r2e1q2c1z2e1u2c1e2e1u3e1r2c1u2g1w2c1r2e1t2e1s2e1g2e1t2c1v2e1u2f1w2c1u2e182c1q2g1x2e1s2e1b2e1s1d142e1s2e1x2c1s1g1g2c1s1e1u2e1r2c1k2e1u2c142e1s2g1k2c1s1f192c1s2g1m2e1s1e1x2e1s2e1w2e1s3f1y2c1s2e1w2c1q1f1k2e1p2e1v2e1t3e1e2e1s1f172c1u3g182c1q3f192e1r3e162e1s3d152e1u3f1a2c1s2f172c1s3g1g2e1q3d192e1u3d1b2e1s3f162c1u3g1e2c1q3f172e1q3d172e1s2d152e1u3e182c1s3f182c1q3g1a2e1q3d182e1s3d182e1s1f152c1t3f1b2c1q3f192e1q3d152e1s2d152e1u3g1u2c1s1f172c1q3f1e2e1q3d172e1s3c1x2e1s2e1u2c1k1e123d1j1g1k1f123e121g141e1q2g1f3f123e103g1i1d1b3e1d1f141e1f1f1b1d1o3f1f3g1e3d1g3e1d1c1d1e1f1g1k3c1f1e183e113g1h2e191d1k3f1f1c1e2e1s1g1h3e1d3e1j3c1d1f1b3g1h1d181e122c171f1b1f191d1b1f1b3c161e1d3f163d153e1i1e1q3f1f1g1d3e1f1e1f3c193e191f1p1e1s3g123c1s1g143f1d3d171g1h1e1q2g1j2g1k1c1a3g181e1k3g1d1e1f3c1f1e1g2c1d3g1h2e1g1e1f3f1f2c1s3e1h2e1q1c102e1s2e1f2e1u1f1j2c1u2g1f3c1r1g172e1r2c1r2e1s1c1x2e1s2g1t2c1u1e1r2c1s2f1t2e1s1c1y2e1s1e1p2e1u1g1k2c172e1u3c153f1x3e172o2e2f1g3e1c1e1k3e1p1e1l1f1m1c1d3e1i1f1g1d1i2e1j1e1b2e172e1u1c1q2e1v2c152e1u1e1o2c1u3g1h2c1u2e1g2e1s3e1i2e1w2d1x2e1v2g1j2c1w3g1v2c1u3g112e1s2c1e2e1w1c1x2e1w2e1h2c1u1e1w2c1s2e1y2e1t2c122e1w2c1z2e1v2f1u2c1u1e172c1t3g102e1u2c172e1v3e1u2e1w2e1k2c1w1e112c1u1e1z2e1s2d1y2e1v2c1t2e1u2f172c1v3e112c1s3f1a2e1s3c1d2e1u3d192e1w3g1d2c1u3f1a2c1s3f1f2e1s2d192e1v3d1z2e1u1f172c1u3e1m2c1s3f192e1s3d182e1u1d192e1u3f152c1u3f1a2c1s3f1x2e1s2d1b2e1u3e1g2e1u2f192c1u3f1d2c1s1f192e1s3c1s2e1u1d192e1w3f1t2c1u3f1a2c1u3g102e1s3d192e1u3d192e1u3f172c1u2e1w2c1s2g1h1e123e1b3f1s1c1p3f1t3d1d3d1e3e1d2c1p3e102f1k3e1e1e1e1e1p3e1f1e183e151g1j2c1b2f1m1g1c1c1i2e1u2e1c3g1e1e1j3c1f2f1d1e1j3f1a1e122c1b1f1e1e1g3f1i2e1c3d1u1f1m1c1o1e1k1g1h1e1e2f1m3e1k1f1m3g1k3e1e3f1e1e1j1g1j3g141c1e2g1h3d1s3e1f1e1c1c1k2f141e141f1e2f1b1e1j3d1u2d1s2f1h3e1d2e161f1q1e1a1g1k3e1j1c1e2g1e1c1x1e142e191d1u2f1d1d1w1g1u2g1f3c1w2e1v3e1f2e1w2g1w2c1u2f1a2c1u3e172e1k3d1l2e1u3d1u2e1u1f1x2c1v1e1j2c1s2e1q1e1z2e102e1u2e1h2e1v1e172c1u2g1b2c1s2f102e1t2c1a3f172c121k2j1d2d2h1l2u1s2o1p2k161|444444|posters|posterwidth|posterheight|91600m3o1v3s241a271u3b3x2z1b3q01121m25213q1b3v3c1k1b3x1z1i1c21193s3w1131161z133x3b2q1730361u3u2t303p113w243c153x3b2o173236112z1m253e1i2c29381y2x3s1z121o280w1z122b233v3z3b381y2v3s11121o2c162v212p1z303a251s25333e16212v233e182u271z113a251q25353e162z361y1c2u271w3u29182s271u3u291o3c113w281z1z3w28113u243u3o3q0z1z313b3y121m272e2q1z1x231411101m273e2q2m35323q112z3z3b233x2036163q011c1c2v2e2b2o122u11121d3z1q11213823373w273u253t1538211z113a391z3z161j111c1m3e182v2z2p3e2b233v3z2q1i29313c3b3y141m121v2e1f1d1e1e1h1e122d1m1e1c2e1p1e1a3g181e171g1k1c1k1f1f2e1s1d1t2e1t2e1t2e1s2e1w2c1u3g1e2c1u1e1z2e1s3c1t2e1u2c142e1s2g1p2c1w1e1k2c1u3e1h2e1u2d112e1s3c1z2e1t1f1u2c1u1f1u2c1s2e1u2e1t3e1x2e1u2c1v2e1u2g192c1w1f1y2c1t2g1q2e1s2d102e1t2e1o2e1t1e1u2c1v2e1s2c1s3e1y2e1s3c1b2e1u2e102e1s3e172c1v3g1t2c1s2f172e1s3d1z2e1s3d172e1s3f1b2c1u3f192c1s3f1a2e1s1d1b2e1t3e162e1s3f182c1u3f1v2c1s2f172e1t3d1e2e1s3d182e1s3f142c1u3f192c1u3f1a2e1s3d1a2e1s3d1h2e1s1f192c1u3f1d2c1s3f172e1s3d1v2e1s2d192e1s3f162c1u3f172c1t3e1i2e1s2d192e1s3d192e1s3f172c1w2e1u2c1s2e1e1e1f1c1r1g1c1c1k2f1d3e1b2c161e121d143f1s3f1c1e1w1f1w2d1j2f181f121b1e1g1e3d1p1e1b3e1c3d1l3f133d1o1e1i1f1h3d1i2e181c1c2f161g1s1d1l3e1f1c1g3g141f1h3e1b1f1f3d1s1g1m3e1c1c1e3f1f3d1c3f1f3f1c3d1e2f1b2d1e3f1e3f1b1e1u1e1f1c141f1s2g1f3d1t3d1f2d1c1e1f1e181c1e2g1b2c1c1f1b3f1g2c1e2e1f1e1k1e1d3e1g1d1i2e1j1d1t2e1s1f1j3c1f1f181c1d3g1i1f1f1c1i3e1t2e1o2e1u2e1k2c1u1g152c1t2g1v2e1t1c1a2e1u2d182e1t2g152c1u3e1v2c1t2e1y2e1f3c1s2e1s1c1h2e1t2e1t2c1w1e1k2c1s2g1c1f1t3c113f162c1f341m2q3e173f1q1e171c133g123c121g1i3f151e1e2g1k1c1v3g1i3g132c1t3g1v2c1s2e1v2e1s2e192e1u1d1w2e1t2g1o2c1s2f1y2c1r2g1l2e1r1c1u2e1t2c1q2e1s2e1w2c1s3e192c1s2g102e1q3c172e1t3e1x2e1s2e1u2c1u1e1l2c1r2e152e1q1c1l2e1s3e1d2e1u1e1c2c1s3g1g2c1s1f1x2e1r2e1j2e1u2e1r2e1u2g1x2c1s2e1c2c1s1e1x2e1s2c1h2e1s1d162e1u3f182c1s3f192c1q3f1a2e1q3d192e1u3d1j2e1s3f172c1t3e1d2c1q1f182e1s3e152e1s3d152e1t3f1b2c1s3f182c1s3g102e1q3d182e1s3d172e1s3f162c1s3e172c1q3f172e1q3c1d2e1s3d152e1s3g1j2c1s3f192c1s3g1f2e1q3d172e1s3d1h2e1s2f162c1u3f1e2c1q3f172e1q3d1b2e1s2c1x2e1s2e1i1c1h3e1f1d1c1e1h3d1d3d1f3e1b2c123e103d1b3e181f191e1d1g1g3f1e3c1f3f1f2e1i3e1l1e1g1d1h1g1c3c1f3e1b1f1i3d183f1f3c181g1g3f121e1h3e121e1u2f1j1f161c121d1d3e1c3g1m1e193c1f3g1j3e1c3f1e3g1c3d1e3e1f3d1d1g1k3g1i3d1w1g142c1c1e1b3e1b1e1h3f1m3c1w3g1f2g112c1a3f142d1d3e1g3e1g3c1f1e1s2e1k1e1c1g193d143g1d1e1g1g1k1g1f3c121g143c181g1r1g193c1e1e162c1s1e1x2e1r3c1s2e1s1c1y2e1t1e1t2c1s1f1m2c1r3f152e1r2e1h2e1u2e1j2e1u2e1f2c1z2e1r2c1q2e1j2e1q2e172e1s2e1r2e1s1e1i3c1x2e1x3d1p2e1h142q1d1i1g1i3e1u1g1l2f1b1c1l1f1b1d1f1f1f1e1j1c1w1g1q3c1s3f1g2e1s2c1k2e1u3c1z2e1w2e1v2c1w1f1t2c1t1e1i2e1s1d1z2e1v2c1p2e1w1g1v2c1v2e172c1u3e102e1s3c1g2e1w2c1r2e1u1f162c1u2e1w2c1s2g1m2e1t3c112e1w2e1y2e1v2e1y2c1u3f1m2c1s3e1a2e1s3c1t2e1w2c1q2e1v1e1g2c1w3e162c1u2e112e1s2c1d2e1w2e1e2e1v3g1j2c1u3f1a2c1s3e1e2e1s1d1b2e1u3e1b2e1u3f182c1v3e1b2c1s3f192e1s3c1j2e1u2d182e1w3e1d2c1u1f1b2c1s3e1j2e1s3d1a2e1w3d192e1u3f192c1u3e112c1s2f1b2e1s3d1d2e1u1d192e1u3f1c2c1u1f192c1t3g1d2e1s2d1a2e1u3d182e1u2f172c1v3e1l2c1s3f1a2e1s3d1b2e1u3d172e1u3f1t2c1u2e1w2c1f1e1h3d143e1h2f1a2e1c2g1e1e1i1e1r3g102e1c3e1e1g1c1e1j1e1d2d1k1g1a3f1d3c1c1g1i3e141g1j1f121e1y2f1l3d181e141d1c1d1g3g1r1c1b3e1f3f1j3d151g1q1c1i1g1j1f1g2c1a1e1e2d161g1u1f1j3c1a1e1a1c181e1a1e1s1e1l1e1c1c1a1g143d1c1e1e1e1k2d1c3f1h1e121e163g1f3c1c1g1g3f1j1e1e2e1b2d141f1e1e1c3c1e2f1k3d1a1g1i1f1c1e1m1g1j2c1s3g1l3f152d1g3g162d1e2g1e1e1f2d122e1w1e102e1v2g1e2c1w3f172c1s3g1f1f1y1c1q2e1w2e1w2e1w2e1u2c1w1g1j2c1t2g1y2e1u3e1a2e1w1e1s2e1u3f1f2c1v3e1f2c1f3f1t2f1z3c163f1j171r1h1j1g1q1h2t2t2d2h1s16|ffe391u212827313918243o0z211o253z2o1b3x3c1b3o01112k3o0z222m3v3s35262v303n1z223a231q253521142z2v25211a3s27111138231q27352z1430281y1z101411153v292o1921241s3s2v212n1z3u262e133v292q193z241z121o233c1g2e2b36162v3u121z1m360y121z39213x213936162x3u101z1m2e182t39213x2b213v39233x29213v11113s271z222u271s3s291r2o1g25222q3c1x21141b3v1z1z222433143z2q1b3v1z1i1v352z1b302p2e1z3u2m211q1e253z1q1o231z1q273t173z24162e1c3c39381c3w29321x3w2s3o3s3922393p35222917143z1611101m232e1q1z1z3u262e1b35383x111x21121i1d2t183d1m1g1h1d1j3e181c1t3c1e2g193d143g1m3e1k1c1y1g101d172e1t2c102c1w2e1x2c1t2f1u2c1s1c172e1r2e1y2e1u2c152c1v3g1s2c1u2e1k2c1u1c112e1s1c1x2e1s3d1w2c1v2e1r2c1s2f172c1t2c1w2e1q2c1e2e1u2e1t2c1w2f1p2c1s3g1x2c1s2e162e1s2e1y2e1t3e1z2c1u2e1q2c1s2g1v2c1t2c1x2e1r2c1v2e1s3d1w2c1w3e1o2c1s3g1h2c1s2d1b2e1q3d102e1s2d182c1u3f1f2c1s1f172c1s3e122e1q3d172e1u3d1u2c1u3f172c1s3f1t2c1s2d192e1s3d1v2e1s3d192c1v3e1a2c1s3f182c1u3d102e1q3d192e1u3d182c1u1f172c1u3f1e2c1s3d192e1q3e1r2e1s2d192c1u3f1a2c1s3f192c1s3e1y2e1q1d172e1s3d192c1u3f152c1s3f1b2c1s2c1w2e1q1c1f1e1b2d1e3e1e1e1g1d1p3f1r3b1c3d1e3f1g2d123f1l2d1c2d1r1e193c1c3f1c1d1p1e1e2g1o3e1c1e1f1d1c3c1f2f141e1s1f1b1d1c3d1e1g1e3d1g2e1f1c1d3c1e1g1k3c1c1e183d133e1j2e191d1k1f1d1c1g3e1l1g1h3e1j1g141d1e3d1r1g1k1e1i1g1b2c1c1e1j3d1b2d1c1e1s2e1c3d1h1f103c1c3f1f1c1p3d1q3e1b3e181f1d1c123c1d1f171d1f1f1d1d1j1e1e2e1j2c1c1e1f1c1d3d1e1e161b1c1g1h1d162c1v2e1h2c1u1g1k2c1s3c172e1r2c1h2e163e1v2c1w3f1q2c1u3g1v2c1s2e1q2e1q2e1f1e1u2e1q2c1v1g1h2c1u2f152c1t1c102e1s3c182e193c1t3c191e171j2k143g1d2d163g1r3c183c1u3g181e1g3e1j1c1j1c1h2e161b1e3f142c1s2e1t2e1s2d1p2e1s3e1v2c1s2g122c1s2g1y2c1r2e1z2e1q1c1q2e1s2e1t2c1t2e1t2c1r2e1v2c1q3d1w2e1s3c1o2e1s3e1f2c1s2e1x2c1q2e1e2c1q1c1i2e1q3c1x2e1u1c1t2c1u1f1p2c1r1e1g2c1q1d1x2e1r2c1k2e1u1e1t2c1t2e132c1s2e1y2c1q3c1e2e1s2c1p2e1s1d142c1u3e1e2c1q3f192c1s3e162e1q3d152e1s3d1c2c1s1f172c1q3f1v2c1q3d192e1q3c162e1s3d172c1u3g192c1q3f182c1q3d182e1q3d172e1u3d1t2c1s3f162c1q3e1c2c1q3d192e1r3e1b2e1s3d172c1s3g1i2c1q1f172c1s3e1c2e1q3d172e1u3c1o2c1s1f152c1r3e1i2c1q3d172e1q3d1c2e1s3d152c1s2e1x2c1q1e1k1c163d1k1g1h1e1d3e1i3d1k3e1r3d1d3e1d1f1b3e1f3e133g1j1c1g1f1h3d1e3c181e1d1d141g1f1e1h3c1d1e1e3d121g1h3e173d1f3f1q1e1k3e1f1c1b3d1s2g1k1c193e1f3e1a1c1m1g1d1e1h3g1d3c1q1d1m1g1k1e1k1g1m1e1d3e1k3g161c161e142d1b3e1d1e1k3c1d1f1g1e121e1f2e1e3c1b3g1f3d1d3c1i3e101c141g1k3d1f2c1s1g1o3d1d3g183e1i1e151g1i1c1d1e1d3d1q3c1f3f1q2e1j3e1d1c1u3c142e1s2e1h2e1u2c1r2c1s2f1g2c1q2f1s2c131e1k2e1q3c1w2e1u1c1f2c1s1g1w2c1s1g1k2c1s2c1w2e1s1e1j2e1s3d1d2c1s2f1c2c1q1e1v2c142d172f16121q2s1r1e1c1c1m2g141e1e3g1j1d1e3e161f1i1e1j1g1v2c1i2e1y2e1r1e1g2e1w1c1u2c1v2e1k2c1u2e182c1s2e1r2e1s1d192e1w2e1p2c1w2g1x2c1s2g102c1s3d122e1s3c1w2e1u1d1k2c1t2g1v2c1t3g1i2c1s2c1w2e1s1d1r2e1v3e1t2c1u2e1w2c1s2g1g2c1u1c112e1s3c1r2e1w2c142c1u2g1p2c1u1e1m2c1u3c1j2e1u3d1z2e1u3c1z2c1v1f1u2c1s1f192c1t3c182e1s1d182e1w3d182c1u1f172c1s3e1d2c1s3d192e1u3e1t2e1u1d192c1u3f1b2c1s3f192c1s3e182e1s1d192e1u3d1g2c1u3f172c1u3f162c1s3d1b2e1s3d1z2e1u1d192c1u3g1w2c1s3f1b2c1t3d1d2e1s3d172e1u3c1b2c1u3f182c1t3f1b2c1s1d192e1t3c192e1u3d172c1u3f192c1s2e1w2c1s2c1y1e1f1c123e181c1k3e1d1e141c121f162e1s3c1d1e1q1c183e1e1c1g3e161g1h3e191g1e3d1s1e1r3e1d1c1c3f1u2d1p1c1d3e1d3d1c1e1r1e1c2e1e3g1c1c1s1f1e3c1d2d181g1s1d1b1g1l3d1c1e1i3f1g2c1c1e1s3d1c3d1l3f183d142e1c1c1c3d1e3f183e1c1g1r3c121d161e1e1c1d3f1u3d1i1e1e1g1p1e1d1e161c1s3d1r3e181c1t1e1e1e1g1e1k3f171e1e1e1q1c1c1c1e2e1s1d1c3g1r1e1c3c1m1g1p3c121f1v3c102c1u3e1w2c1t1g1u2c1t3e112e1t1c142e1t2c172c1v2e1k2c1u2f1j2c1u1c1x2e1f2d1u2e1v3e1t2c1v2e1j2c1u1g1u2c1s1c1z1e1x2d1x2f183c1y1c142u1d1p1t2l1r2d2q1f1t241m|pjslng_offsettimerminute|getMinutes|pjslng_offsettimersecond|offsettimer0|1006|1005|postertitleonhover|999999|settings4|settings3action|settings3|settings4action|settings5|16x9|settings5action|settings2action|settings1action|888888|historybgaover|170|222222|settings1|titlecolor|9480146|16089933|174|21c|219c|297|203|099C7|304|396|303|099c|234|173|012|963|054|546|952|273|021|759|384C8|468C8|434|641|397|754|682|472C7|741|595|618|692|669|997c|901|521|079|825|782|104h|371|012c|404|749c|9485553|36980425|10176229|9753595|M18|79351404|619|718|675|051|593|136c|073|291|077|446|087c|075|729|356|642|222l|562|666|691|359|013|211|087|471|05c0|198l0|148c0|301|321|343|053c1|966|439|577|676|455|022|896|913|035|203C15|941|585|808|282|786|247|938|387c0|26c0|078|059|993|806|555|667|641C7|556|443|307|419|791|777|703|335|323|715C8|958|802|629|357|248|459|569|421|507|682C1|173L2|447L2|474|588|026|892c|285C5|534|261|908349|46361894|76053503|62378254|90280076|39594688|86775181|591821|9481644|54028255|92444761|5011287|45846159|3186567|71310145|525863|89905178|83887768|18940216|56501681|78152031|0254896|39285947|1461085|91554129|4557651|6017798|4089931|55677205|55161471|5646609|80589866|75264618|1945595|0203322|47186369|6001007|05147059|03088803|969112|0737745|7490196|3683824|8030888|04681373|9818627|51658043|6959766|3404412|2857843|7243243|7735294|31274131|8666667|0088235|3127413|68725869|2242647|6864865|M15|8191176|5906863|59305019|8247549|81698842|74749035|0867647|0156863|56138996|66394451|82476969|9784469|3677693|7774154|0997273|7244686|6708602|0588595|461584|4883882|3811714|7454539|1667378|0134958|2547336|4155588|3351462|0856637|5770455|8413385|54918887|7073175|79867139|8681427|8949469|61104201|95640915|4794819|593535|541335|9031916|8512623|39043363|1980378|490814|1533357|00668076|3468113|97987656|3602134|04688705|0174202|3870176|706974|3658545|06600745|5495798|27203981|6399635|6935719|3524524|6306539||13718414|2176147|2904441|158849|1213742|3701951|4774119|046119|545084|91761122|8450875|25694808|2536879|51661242|4324598|01249004|749C18|854|YouTube|youtube_iframe_api|API|videoId|playerVars|onYouTubeIframeAPIReady|reset|DashSubTrack|HlsSubTrack||playbackRate|childNodes|kind|enablejsapi|playerapiid|onStateChange|onReady|onPlaybackQualityChange|ytReady|ytEnded|modestbranding|showinfo||html5|disablekb|playsinlineonmobileiphone|iv_load_policy|level|setWsAudioTrack|Infinity|destination|getSettings|disabled|WebKitPlaybackTargetAvailabilityEvent|createGain|createMediaElementSource|interrupted|playError|permission|autoplay_denied|webkitAudioContext|webkitplaybacktargetavailabilitychanged|availability|requestPictureInPicture|pictureInPictureElement|exitPictureInPicture|getQualityFor|setWsQuality|webkitPresentationMode|disablePictureInPicture|available|webkitShowPlaybackTargetPicker|webkitSupportsPresentationMode|pictureInPictureEnabled|PAUSED|BUFFERING|hideonleaveandplay|resize2|hidelap|hideall|hideondesktop|customText|PluginSettings2|seektome|isOn|ssfly|bezier|combined|hideonmobile|hideafterstart|hideonunmute|hidenormscreen|hideonlive|hideonmeta|hidemini|hideonleave|hideonvod|hide0timestore|hideonvar|hideuntilstartedios|hideuntilended|02|customwidth|small|tiny|medium|large|hd720|setSize|getPlaybackQuality|ytError|CUED|unavailable|customyterrors|getAvailableQualityLevels|hd1080|getCurrentTime|showvolmobile|ndash|nativemobile|to_right|marginprocright|customspeeds|loadVideoById|setPlaybackRate|unMute|setPlaybackQuality|getVideoLoadedFraction|playtry|2000px|isDynamic|PluginDashSubtitles|PLAYBACK_PLAYING|PLAYBACK_TIME_UPDATED|TEXT_TRACKS_ADDED|dashsubtracks|STREAM_INITIALIZED|bufferTimeAtTopQualityLongForm|stableBufferTime|lastBitrateCachingInfo|lastMediaSettingsCachingInfo|setXHRWithCredentialsForType|setTextTrack|QUALITY_CHANGE_REQUESTED|key_session|mediasource|key_message|encountered|autoStartLoad|capability|manifestError|mediaType|oldQuality|FRAGMENT_LOADING_COMPLETED|MediaSegment|setProtectionData|initialize|fillvideo|mp4a|tagcors|crossorigin|anonymous|42E01E|avc1|error_time|complete|urlmse|mp4|codecs|ynxnopip|nativenodownload|PlugMediaChannels|flussonic|logLevel|Debug|LOG_LEVEL_DEBUG|support|nativehlsinedge|controlsList|nodownload|nativehlsinsafari|nativehlsios|manifestLoadingTimeOut|fragLoadingTimeOut|hlsaddbitrate|appendBuffer|firstLevel|eng|English|WebKitSourceBuffer|WebKitMediaSource|loadeddata|loadstart|aborted|185|wake|rus|240|1440|2560|3840|2160|customqualities|1080|1920|Destroyed|480|1280|720|failed|swapAudioCodec|LEVEL_SWITCHED|LEVEL_SWITCH|LEVEL_LOADED|FRAG_CHANGED|relurl|MANIFEST_PARSED|MANIFEST_LOADED|xhrSetup|enableWorker|withCredentials|attachMedia|MEDIA_ATTACHED|FRAG_PARSING_METADATA|fragdata|MEDIA_ERROR|sleep|hls_error|PluginWS|watching|NETWORK_ERROR|subtitleDisplay|AUDIO_TRACKS_UPDATED|AUDIO_TRACK_SWITCHING|hlssubtracks|PluginHlsSubtitles|hidenomini|hidenoab|0x9|0x4|0xb|0xc|0xd|0x3|0x2|autoLink|require|GoogleAnalyticsObject|0x9d|_0x36c21c|0xe|0xf|overflow_|container_w_procent|35px|07|transbg|word|0x16|0x10|0x11|0x12|0x15|88484718|srvsga|scale1|scale0|scale2|timer2|actn|through|scroll_right|onMouseOver|borderBottom|onMouseOut|scrollWidth|scroll_up|5em|marginRight|pljscom|DOMContentLoaded|emptyremove|Cross|async|shuffle8|PluginDroplist|paddingbottom|dropnohide|hidesmoothly|contains|oframe|manipulation|webkitfullscreenchange|mozfullscreenchange|msfullscreenchange|MSFullscreenChange|Local|fullscreenchange|unhandledrejection|orientationchange|mousedown|move|keyup|keydown|ChromeCast|passonstart|webkitIsFullScreen|webkitFullscreenElement|mozFullScreen||msFullscreenElement|fullscreenElement|Orientation|Logo|seeksidesmob|layerX|offsetX|stretch|mouseleave|mouseenter|rc_nobrand|rc_custom|uppercase|99999|rmright|ContextMenu||oncontextmenu|hover|visited|observe|childList|pjsfrrs|15em|playback|PluginMini|PluginEffects|PluginBlock|quizes|PluginQuiz|Visibility|startvisibility|panel|autoplaynomobiletv|sessid|TimeStore|borderRight|644082|tipmarginright|tipmarginleft|control_time|text33|triangle|tipmarginbottom|tipmargintop|rotateonhover|clickmarginright|rotateonclick|tippointeralign|180deg|volume_element|slider|valuepaddingbottom|valuepaddingtop|valuepaddingleft|valuepaddingright|valuemargintop|colorover|aload|running|alphas|abg|lines1|clickmarginleft|_bg|maxHeight|buffering|ShowSettingsBut|||||||||||stopkeys|enter|separator|showboth|hideonyoutube|hideab|pjs_cast_button_|cast_available|showduration|189|bufferInterval|SVG|_text|PluginHdIcon|flipx|flipy|link2|iconspress|bufferDeg|countdown|counter|PluginCountdown|valuemarginbottom|handlemargintop|redirectplaylist|f2parent|175|250|72ccf8|pjslng_sub_sizeproc|pjslng_|hidearrow|speed4live|current_|pressed_|underline|62de50|faed54|FEF370|4bd9ac|D90000|073DA0|409829|b3fee8|d9bb8c|feba54|e8bbff|ffc7d1|aaaaaa|current_channel|sub_settings|offsetwidth|||||||||||hlsdvrtime|roundingver_final|000|200000|235|handlemarginright|225|handlemarginbottom|onmouseup|onmousedown|handlemarginleft|shape|opacity_|RWAlnQyyazA4aoAB4FsBSA|kbq|bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg|fimg|f2img|OqFAAAAdklEQVQoz42QQQ7AIAgEF|iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT|position_|left_|top_|width_|taginframe|Video|updateCuid|moveplaylist|isfullscreen|fix|vastbreak|prt|VpaidSet|Test|startvast|unfix|timeplay|fillStyle|fillText|toDataURL|jpeg|Arial|Courier|switchpip|Active|sscopyright|vpaid_|youtubeid|playerjs_hit|watch|capiom|eventlisteners||||Metric|||300000|||LIVE|Enter|Exit|createEvent|initEvent|vast_Impression|adShown|toogle|rewound|unmuted|dispatchEvent|stringify|resumed|invert|playlist_folders|FindPjsDiv|nodeName|PJSDIV|substring|cssText|rand|number|setProperty|1000000|reduce|encode|pageXOffset|const|scrollY|redirectblank|191|192|MarPad|0123456789|2048|NaNpx|rgb|vastresume|currentfile|vrsn|vastids|vastpause|unshift|playlist_length|showplaylist|vastnow|adsystem|vpaid|googleapis|head|Href|stylesheet|getVolume|current_vast_url|wrapper0|filetype|||||Audio|website|046|023|014|appName|081|088|055|084|093|userAgent|trident|Safari|Windows|ipod|platform|Firefox|Edge|appVersion|Opera|Trident|956|907|747|785|818|874|705|659|267|344|547|897|918|513|613|702|403|985|935|971|979|MacIntel|maxTouchPoints|Previous|Copied|clipboard|Tiny|Shadow|Font|1val|Yes|Bottom|Small|Medium|ads|adsinvitation|the|advertiser|Ultra||Quad|||Full|1296p|Super|Skip|0val|WebkitAppearance|blackberry|iemobile|iosv|Build|Philips|Tizen|MiTV|SmartTV|ontouchstart|roll|casterror|All|once|castdevice|toUpperCase|RegExp|map|__storage_test__|openlast|vastinfo|clone|PluginSubword|sub_fonted|2px|black|sub_split2words|issue|webkitendfullscreen|webkitEnterFullScreen|OpenScroll|wheelDelta|crossdomain|3600000|yandex|renew|tagLive|showfrom1file|startdelay|vast_startdelay|vastbgpreload|VastOverlay|adsinchain|VastImpression|VastReady|vast_ready|webkitSupportsFullscreen||nativefulldroid|pdf|Resume|01|Progress|Visible|AdBlock|PluginStat|wid|PluginWater|pjsstat|pjsstatid|dontseekforward|Open|reloadjustevent|writePl|pjsiframed|fileend|outros|PasswordTime|nooverlay|downself|_self|reloadstart|nomidroll|alarm|VastError|MediaVimeo|Image|MediaPjs|RemoveAll|Created|PjsFramed|pjsframe|Speed|Quality|Audiotrack|New|hqdefault|nomedia|0001|subtitle_errdel|sub_off_title|constrols|WEBVTT|Dialogue|sub_all_title|currentSubtitle|createposter|scaledrag|PluginMovable|dragging|Seeking|tags|vast_finish|vast_stop|vast_ima|vast_dontplay|EmptyVastUrl|VastInsertOr|VastInsertAnd|||vast_error|VastRemoveUrl||preloading|disablePreload|Pass|RemovePassword|tryotherquality|loaderror|Alternative|Timeout|Break|YoutubePlaylist|EXTINF|norootplstart|winmob|dvtp|playlists|water|PluginVastTimeMsg|playlist_source|reverse|nativenotandroid|autoplayed|heartbeats|nativeontv|sess'.split('|'),0,{}))
"undefined"!=typeof window&&function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Hls=t():e.Hls=t()}(this,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=13)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return c}));var i=r(5);function a(){}var n={trace:a,debug:a,log:a,warn:a,info:a,error:a},s=n;function o(e,t){return t="["+e+"] > "+t}var l=Object(i.a)();function u(e){var t=l.console[e];return t?function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];i[0]&&(i[0]=o(e,i[0])),t.apply(l.console,i)}:a}var d=function(e){if(l.console&&!0===e||"object"==typeof e){!function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];r.forEach((function(t){s[t]=e[t]?e[t].bind(e):u(t)}))}(e,"debug","log","info","warn","error");try{s.log()}catch(e){s=n}}else s=n},c=s},function(e,t,r){"use strict";t.a={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",LEVELS_UPDATED:"hlsLevelsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",CUES_PARSED:"hlsCuesParsed",NON_NATIVE_TEXT_TRACKS_FOUND:"hlsNonNativeTextTracksFound",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition",LIVE_BACK_BUFFER_REACHED:"hlsLiveBackBufferReached"}},function(e,t,r){"use strict";var i,a;r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a})),function(e){e.NETWORK_ERROR="networkError",e.MEDIA_ERROR="mediaError",e.KEY_SYSTEM_ERROR="keySystemError",e.MUX_ERROR="muxError",e.OTHER_ERROR="otherError"}(i||(i={})),function(e){e.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",e.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",e.KEY_SYSTEM_NO_SESSION="keySystemNoSession",e.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",e.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",e.MANIFEST_LOAD_ERROR="manifestLoadError",e.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",e.MANIFEST_PARSING_ERROR="manifestParsingError",e.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",e.LEVEL_EMPTY_ERROR="levelEmptyError",e.LEVEL_LOAD_ERROR="levelLoadError",e.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",e.LEVEL_SWITCH_ERROR="levelSwitchError",e.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",e.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",e.FRAG_LOAD_ERROR="fragLoadError",e.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",e.FRAG_DECRYPT_ERROR="fragDecryptError",e.FRAG_PARSING_ERROR="fragParsingError",e.REMUX_ALLOC_ERROR="remuxAllocError",e.KEY_LOAD_ERROR="keyLoadError",e.KEY_LOAD_TIMEOUT="keyLoadTimeOut",e.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",e.BUFFER_APPEND_ERROR="bufferAppendError",e.BUFFER_APPENDING_ERROR="bufferAppendingError",e.BUFFER_STALLED_ERROR="bufferStalledError",e.BUFFER_FULL_ERROR="bufferFullError",e.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",e.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",e.INTERNAL_EXCEPTION="internalException"}(a||(a={}))},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var i=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)}},function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var i,a=r(5),n=function(){function e(){}return e.isHeader=function(e,t){return t+10<=e.length&&73===e[t]&&68===e[t+1]&&51===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.isFooter=function(e,t){return t+10<=e.length&&51===e[t]&&68===e[t+1]&&73===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.getID3Data=function(t,r){for(var i=r,a=0;e.isHeader(t,r);){a+=10,a+=e._readSize(t,r+6),e.isFooter(t,r+10)&&(a+=10),r+=a}if(a>0)return t.subarray(i,i+a)},e._readSize=function(e,t){var r=0;return r=(127&e[t])<<21,r|=(127&e[t+1])<<14,r|=(127&e[t+2])<<7,r|=127&e[t+3]},e.getTimeStamp=function(t){for(var r=e.getID3Frames(t),i=0;i<r.length;i++){var a=r[i];if(e.isTimeStampFrame(a))return e._readTimeStamp(a)}},e.isTimeStampFrame=function(e){return e&&"PRIV"===e.key&&"com.apple.streaming.transportStreamTimestamp"===e.info},e._getFrameData=function(t){var r=String.fromCharCode(t[0],t[1],t[2],t[3]),i=e._readSize(t,4);return{type:r,size:i,data:t.subarray(10,10+i)}},e.getID3Frames=function(t){for(var r=0,i=[];e.isHeader(t,r);){for(var a=e._readSize(t,r+6),n=(r+=10)+a;r+8<n;){var s=e._getFrameData(t.subarray(r)),o=e._decodeFrame(s);o&&i.push(o),r+=s.size+10}e.isFooter(t,r)&&(r+=10)}return i},e._decodeFrame=function(t){return"PRIV"===t.type?e._decodePrivFrame(t):"T"===t.type[0]?e._decodeTextFrame(t):"W"===t.type[0]?e._decodeURLFrame(t):void 0},e._readTimeStamp=function(e){if(8===e.data.byteLength){var t=new Uint8Array(e.data),r=1&t[3],i=(t[4]<<23)+(t[5]<<15)+(t[6]<<7)+t[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},e._decodePrivFrame=function(t){if(!(t.size<2)){var r=e._utf8ArrayToStr(t.data,!0),i=new Uint8Array(t.data.subarray(r.length+1));return{key:t.type,info:r,data:i.buffer}}},e._decodeTextFrame=function(t){if(!(t.size<2)){if("TXXX"===t.type){var r=1,i=e._utf8ArrayToStr(t.data.subarray(r),!0);r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data.subarray(1));return{key:t.type,data:n}}},e._decodeURLFrame=function(t){if("WXXX"===t.type){if(t.size<2)return;var r=1,i=e._utf8ArrayToStr(t.data.subarray(r));r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data);return{key:t.type,data:n}},e._utf8ArrayToStr=function(e,t){void 0===t&&(t=!1);var r=s();if(r){var i=r.decode(e);if(t){var a=i.indexOf("\0");return-1!==a?i.substring(0,a):i}return i.replace(/\0/g,"")}for(var n,o,l,u=e.length,d="",c=0;c<u;){if(0===(n=e[c++])&&t)return d;if(0!==n&&3!==n)switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:d+=String.fromCharCode(n);break;case 12:case 13:o=e[c++],d+=String.fromCharCode((31&n)<<6|63&o);break;case 14:o=e[c++],l=e[c++],d+=String.fromCharCode((15&n)<<12|(63&o)<<6|(63&l)<<0)}}return d},e}();function s(){var e=Object(a.a)();return i||void 0===e.TextDecoder||(i=new e.TextDecoder("utf-8")),i}var o=n._utf8ArrayToStr;t.a=n},function(e,t,r){"use strict";function i(){return"undefined"==typeof window?self:window}r.d(t,"a",(function(){return i}))},function(e,t,r){var i,a,n,s,o;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,a=/^([^\/?#]*)(.*)$/,n=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(e,t,r){if(r=r||{},e=e.trim(),!(t=t.trim())){if(!r.alwaysNormalize)return e;var i=o.parseURL(e);if(!i)throw new Error("Error trying to parse base URL.");return i.path=o.normalizePath(i.path),o.buildURLFromParts(i)}var n=o.parseURL(t);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):t;var s=o.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=a.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var u={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(u.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var d=s.path,c=d.substring(0,d.lastIndexOf("/")+1)+n.path;u.path=o.normalizePath(c)}else u.path=s.path,n.params||(u.params=s.params,n.query||(u.query=s.query));return null===u.path&&(u.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(u)},parseURL:function(e){var t=i.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(n,"");e.length!==(e=e.replace(s,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}},e.exports=o},function(e,t,r){"use strict";var i=function(){function e(e,t){this.subtle=e,this.aesIV=t}return e.prototype.decrypt=function(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)},e}(),a=function(){function e(e,t){this.subtle=e,this.key=t}return e.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},e}();var n=function(){function e(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}var t=e.prototype;return t.uint8ArrayToUint32Array_=function(e){for(var t=new DataView(e),r=new Uint32Array(4),i=0;i<4;i++)r[i]=t.getUint32(4*i);return r},t.initTable=function(){var e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],s=r[3],o=this.invSubMix,l=o[0],u=o[1],d=o[2],c=o[3],h=new Uint32Array(256),f=0,g=0,p=0;for(p=0;p<256;p++)h[p]=p<128?p<<1:p<<1^283;for(p=0;p<256;p++){var v=g^g<<1^g<<2^g<<3^g<<4;v=v>>>8^255&v^99,e[f]=v,t[v]=f;var m=h[f],y=h[m],b=h[y],T=257*h[v]^16843008*v;i[f]=T<<24|T>>>8,a[f]=T<<16|T>>>16,n[f]=T<<8|T>>>24,s[f]=T,T=16843009*b^65537*y^257*m^16843008*f,l[v]=T<<24|T>>>8,u[v]=T<<16|T>>>16,d[v]=T<<8|T>>>24,c[v]=T,f?(f=m^h[h[h[b^m]]],g^=h[h[g]]):f=g=1}},t.expandKey=function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,i=0;i<t.length&&r;)r=t[i]===this.key[i],i++;if(!r){this.key=t;var a=this.keySize=t.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n,s,o,l,u=this.ksRows=4*(a+6+1),d=this.keySchedule=new Uint32Array(u),c=this.invKeySchedule=new Uint32Array(u),h=this.sBox,f=this.rcon,g=this.invSubMix,p=g[0],v=g[1],m=g[2],y=g[3];for(n=0;n<u;n++)n<a?o=d[n]=t[n]:(l=o,n%a==0?(l=h[(l=l<<8|l>>>24)>>>24]<<24|h[l>>>16&255]<<16|h[l>>>8&255]<<8|h[255&l],l^=f[n/a|0]<<24):a>6&&n%a==4&&(l=h[l>>>24]<<24|h[l>>>16&255]<<16|h[l>>>8&255]<<8|h[255&l]),d[n]=o=(d[n-a]^l)>>>0);for(s=0;s<u;s++)n=u-s,l=3&s?d[n]:d[n-4],c[s]=s<4||n<=4?l:p[h[l>>>24]]^v[h[l>>>16&255]]^m[h[l>>>8&255]]^y[h[255&l]],c[s]=c[s]>>>0}},t.networkToHostOrderSwap=function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24},t.decrypt=function(e,t,r,i){for(var a,n,s,o,l,u,d,c,h,f,g,p,v,m,y,b,T,E=this.keySize+6,S=this.invKeySchedule,_=this.invSBox,R=this.invSubMix,A=R[0],k=R[1],w=R[2],L=R[3],D=this.uint8ArrayToUint32Array_(r),O=D[0],C=D[1],I=D[2],P=D[3],x=new Int32Array(e),M=new Int32Array(x.length),F=this.networkToHostOrderSwap;t<x.length;){for(h=F(x[t]),f=F(x[t+1]),g=F(x[t+2]),p=F(x[t+3]),l=h^S[0],u=p^S[1],d=g^S[2],c=f^S[3],v=4,m=1;m<E;m++)a=A[l>>>24]^k[u>>16&255]^w[d>>8&255]^L[255&c]^S[v],n=A[u>>>24]^k[d>>16&255]^w[c>>8&255]^L[255&l]^S[v+1],s=A[d>>>24]^k[c>>16&255]^w[l>>8&255]^L[255&u]^S[v+2],o=A[c>>>24]^k[l>>16&255]^w[u>>8&255]^L[255&d]^S[v+3],l=a,u=n,d=s,c=o,v+=4;a=_[l>>>24]<<24^_[u>>16&255]<<16^_[d>>8&255]<<8^_[255&c]^S[v],n=_[u>>>24]<<24^_[d>>16&255]<<16^_[c>>8&255]<<8^_[255&l]^S[v+1],s=_[d>>>24]<<24^_[c>>16&255]<<16^_[l>>8&255]<<8^_[255&u]^S[v+2],o=_[c>>>24]<<24^_[l>>16&255]<<16^_[u>>8&255]<<8^_[255&d]^S[v+3],v+=3,M[t]=F(a^O),M[t+1]=F(o^C),M[t+2]=F(s^I),M[t+3]=F(n^P),O=h,C=f,I=g,P=p,t+=4}return i?(y=M.buffer,b=y.byteLength,(T=b&&new DataView(y).getUint8(b-1))?y.slice(0,b-T):y):M.buffer},t.destroy=function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0},e}(),s=r(2),o=r(0),l=r(1),u=r(5),d=Object(u.a)(),c=function(){function e(e,t,r){var i=(void 0===r?{}:r).removePKCS7Padding,a=void 0===i||i;if(this.logEnabled=!0,this.observer=e,this.config=t,this.removePKCS7Padding=a,a)try{var n=d.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch(e){}this.disableWebCrypto=!this.subtle}var t=e.prototype;return t.isSync=function(){return this.disableWebCrypto&&this.config.enableSoftwareAES},t.decrypt=function(e,t,r,s){var l=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(o.b.log("JS AES decrypt"),this.logEnabled=!1);var u=this.decryptor;u||(this.decryptor=u=new n),u.expandKey(t),s(u.decrypt(e,0,r,this.removePKCS7Padding))}else{this.logEnabled&&(o.b.log("WebCrypto AES decrypt"),this.logEnabled=!1);var d=this.subtle;this.key!==t&&(this.key=t,this.fastAesKey=new a(d,t)),this.fastAesKey.expandKey().then((function(a){new i(d,r).decrypt(e,a).catch((function(i){l.onWebCryptoError(i,e,t,r,s)})).then((function(e){s(e)}))})).catch((function(i){l.onWebCryptoError(i,e,t,r,s)}))}},t.onWebCryptoError=function(e,t,r,i,a){this.config.enableSoftwareAES?(o.b.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(t,r,i,a)):(o.b.error("decrypting error : "+e.message),this.observer.trigger(l.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.FRAG_DECRYPT_ERROR,fatal:!0,reason:e.message}))},t.destroy=function(){var e=this.decryptor;e&&(e.destroy(),this.decryptor=void 0)},e}();t.a=c},function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,a="~";function n(){}function s(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,r,i,n){if("function"!=typeof r)throw new TypeError("The listener must be a function");var o=new s(r,i||e,n),l=a?a+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],o]:e._events[l].push(o):(e._events[l]=o,e._eventsCount++),e}function l(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function u(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),u.prototype.eventNames=function(){var e,t,r=[];if(0===this._eventsCount)return r;for(t in e=this._events)i.call(e,t)&&r.push(a?t.slice(1):t);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},u.prototype.listeners=function(e){var t=a?a+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,s=new Array(n);i<n;i++)s[i]=r[i].fn;return s},u.prototype.listenerCount=function(e){var t=a?a+e:e,r=this._events[t];return r?r.fn?1:r.length:0},u.prototype.emit=function(e,t,r,i,n,s){var o=a?a+e:e;if(!this._events[o])return!1;var l,u,d=this._events[o],c=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),c){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,r),!0;case 4:return d.fn.call(d.context,t,r,i),!0;case 5:return d.fn.call(d.context,t,r,i,n),!0;case 6:return d.fn.call(d.context,t,r,i,n,s),!0}for(u=1,l=new Array(c-1);u<c;u++)l[u-1]=arguments[u];d.fn.apply(d.context,l)}else{var h,f=d.length;for(u=0;u<f;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),c){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,t);break;case 3:d[u].fn.call(d[u].context,t,r);break;case 4:d[u].fn.call(d[u].context,t,r,i);break;default:if(!l)for(h=1,l=new Array(c-1);h<c;h++)l[h-1]=arguments[h];d[u].fn.apply(d[u].context,l)}}return!0},u.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},u.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},u.prototype.removeListener=function(e,t,r,i){var n=a?a+e:e;if(!this._events[n])return this;if(!t)return l(this,n),this;var s=this._events[n];if(s.fn)s.fn!==t||i&&!s.once||r&&s.context!==r||l(this,n);else{for(var o=0,u=[],d=s.length;o<d;o++)(s[o].fn!==t||i&&!s[o].once||r&&s[o].context!==r)&&u.push(s[o]);u.length?this._events[n]=1===u.length?u[0]:u:l(this,n)}return this},u.prototype.removeAllListeners=function(e){var t;return e?(t=a?a+e:e,this._events[t]&&l(this,t)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=a,u.EventEmitter=u,e.exports=u},function(e,t,r){"use strict";var i=r(1),a=r(2),n=r(7),s=r(3),o=r(0),l=r(5);function u(e,t){return 255===e[t]&&240==(246&e[t+1])}function d(e,t){return 1&e[t+1]?7:9}function c(e,t){return(3&e[t+3])<<11|e[t+4]<<3|(224&e[t+5])>>>5}function h(e,t){return!!(t+1<e.length&&u(e,t))}function f(e,t){if(h(e,t)){var r=d(e,t);if(t+r>=e.length)return!1;var i=c(e,t);if(i<=r)return!1;var a=t+i;if(a===e.length||a+1<e.length&&u(e,a))return!0}return!1}function g(e,t,r,n,s){if(!e.samplerate){var l=function(e,t,r,n){var s,l,u,d,c,h=navigator.userAgent.toLowerCase(),f=n,g=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];if(s=1+((192&t[r+2])>>>6),!((l=(60&t[r+2])>>>2)>g.length-1))return d=(1&t[r+2])<<2,d|=(192&t[r+3])>>>6,o.b.log("manifest codec:"+n+",ADTS data:type:"+s+",sampleingIndex:"+l+"["+g[l]+"Hz],channelConfig:"+d),/firefox/i.test(h)?l>=6?(s=5,c=new Array(4),u=l-3):(s=2,c=new Array(2),u=l):-1!==h.indexOf("android")?(s=2,c=new Array(2),u=l):(s=5,c=new Array(4),n&&(-1!==n.indexOf("mp4a.40.29")||-1!==n.indexOf("mp4a.40.5"))||!n&&l>=6?u=l-3:((n&&-1!==n.indexOf("mp4a.40.2")&&(l>=6&&1===d||/vivaldi/i.test(h))||!n&&1===d)&&(s=2,c=new Array(2)),u=l)),c[0]=s<<3,c[0]|=(14&l)>>1,c[1]|=(1&l)<<7,c[1]|=d<<3,5===s&&(c[1]|=(14&u)>>1,c[2]=(1&u)<<7,c[2]|=8,c[3]=0),{config:c,samplerate:g[l],channelCount:d,codec:"mp4a.40."+s,manifestCodec:f};e.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+l})}(t,r,n,s);e.config=l.config,e.samplerate=l.samplerate,e.channelCount=l.channelCount,e.codec=l.codec,e.manifestCodec=l.manifestCodec,o.b.log("parsed codec:"+e.codec+",rate:"+l.samplerate+",nb channel:"+l.channelCount)}}function p(e){return 9216e4/e}function v(e,t,r,i,a){var n=function(e,t,r,i,a){var n,s,o=e.length;if(n=d(e,t),s=c(e,t),(s-=n)>0&&t+n+s<=o)return{headerLength:n,frameLength:s,stamp:r+i*a}}(t,r,i,a,p(e.samplerate));if(n){var s=n.stamp,o=n.headerLength,l=n.frameLength,u={unit:t.subarray(r+o,r+o+l),pts:s,dts:s};return e.samples.push(u),{sample:u,length:l+o}}}var m=r(4),y=function(){function e(e,t,r){this.observer=e,this.config=r,this.remuxer=t}var t=e.prototype;return t.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/adts",type:"audio",id:0,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},t.resetTimeStamp=function(){},e.probe=function(e){if(!e)return!1;for(var t=(m.a.getID3Data(e,0)||[]).length,r=e.length;t<r;t++)if(f(e,t))return o.b.log("ADTS sync word found !"),!0;return!1},t.append=function(e,t,r,i){for(var a=this._audioTrack,n=m.a.getID3Data(e,0)||[],l=m.a.getTimeStamp(n),u=Object(s.a)(l)?90*l:9e4*t,d=0,c=u,f=e.length,p=n.length,y=[{pts:c,dts:c,data:n}];p<f-1;)if(h(e,p)&&p+5<f){g(a,this.observer,e,p,a.manifestCodec);var b=v(a,e,p,u,d);if(!b){o.b.log("Unable to parse AAC frame");break}p+=b.length,c=b.sample.pts,d++}else m.a.isHeader(e,p)?(n=m.a.getID3Data(e,p),y.push({pts:c,dts:c,data:n}),p+=n.length):p++;this.remuxer.remux(a,{samples:[]},{samples:y,inputTimeScale:9e4},{samples:[]},t,r,i)},t.destroy=function(){},e}(),b=r(10),T={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],SamplesCoefficients:[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],BytesInSlot:[0,1,1,4],appendFrame:function(e,t,r,i,a){if(!(r+24>t.length)){var n=this.parseHeader(t,r);if(n&&r+n.frameLength<=t.length){var s=i+a*(9e4*n.samplesPerFrame/n.sampleRate),o={unit:t.subarray(r,r+n.frameLength),pts:s,dts:s};return e.config=[],e.channelCount=n.channelCount,e.samplerate=n.sampleRate,e.samples.push(o),{sample:o,length:n.frameLength}}}},parseHeader:function(e,t){var r=e[t+1]>>3&3,i=e[t+1]>>1&3,a=e[t+2]>>4&15,n=e[t+2]>>2&3,s=e[t+2]>>1&1;if(1!==r&&0!==a&&15!==a&&3!==n){var o=3===r?3-i:3===i?3:4,l=1e3*T.BitratesMap[14*o+a-1],u=3===r?0:2===r?1:2,d=T.SamplingRateMap[3*u+n],c=e[t+3]>>6==3?1:2,h=T.SamplesCoefficients[r][i],f=T.BytesInSlot[i],g=8*h*f;return{sampleRate:d,channelCount:c,frameLength:parseInt(h*l/d+s,10)*f,samplesPerFrame:g}}},isHeaderPattern:function(e,t){return 255===e[t]&&224==(224&e[t+1])&&0!=(6&e[t+1])},isHeader:function(e,t){return!!(t+1<e.length&&this.isHeaderPattern(e,t))},probe:function(e,t){if(t+1<e.length&&this.isHeaderPattern(e,t)){var r=this.parseHeader(e,t),i=4;r&&r.frameLength&&(i=r.frameLength);var a=t+i;if(a===e.length||a+1<e.length&&this.isHeaderPattern(e,a))return!0}return!1}},E=T,S=function(){function e(e){this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}var t=e.prototype;return t.loadWord=function(){var e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),a=Math.min(4,t);if(0===a)throw new Error("no bytes available");i.set(e.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},t.skipBits=function(e){var t;this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,e-=(t=e>>3)>>3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)},t.readBits=function(e){var t=Math.min(this.bitsAvailable,e),r=this.word>>>32-t;return e>32&&o.b.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0?this.word<<=t:this.bytesAvailable>0&&this.loadWord(),(t=e-t)>0&&this.bitsAvailable?r<<t|this.readBits(t):r},t.skipLZ=function(){var e;for(e=0;e<this.bitsAvailable;++e)if(0!=(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()},t.skipUEG=function(){this.skipBits(1+this.skipLZ())},t.skipEG=function(){this.skipBits(1+this.skipLZ())},t.readUEG=function(){var e=this.skipLZ();return this.readBits(e+1)-1},t.readEG=function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)},t.readBoolean=function(){return 1===this.readBits(1)},t.readUByte=function(){return this.readBits(8)},t.readUShort=function(){return this.readBits(16)},t.readUInt=function(){return this.readBits(32)},t.skipScalingList=function(e){var t,r=8,i=8;for(t=0;t<e;t++)0!==i&&(i=(r+this.readEG()+256)%256),r=0===i?r:i},t.readSPS=function(){var e,t,r,i,a,n,s,o=0,l=0,u=0,d=0,c=this.readUByte.bind(this),h=this.readBits.bind(this),f=this.readUEG.bind(this),g=this.readBoolean.bind(this),p=this.skipBits.bind(this),v=this.skipEG.bind(this),m=this.skipUEG.bind(this),y=this.skipScalingList.bind(this);if(c(),e=c(),h(5),p(3),c(),m(),100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){var b=f();if(3===b&&p(1),m(),m(),p(1),g())for(n=3!==b?8:12,s=0;s<n;s++)g()&&y(s<6?16:64)}m();var T=f();if(0===T)f();else if(1===T)for(p(1),v(),v(),t=f(),s=0;s<t;s++)v();m(),p(1),r=f(),i=f(),0===(a=h(1))&&p(1),p(1),g()&&(o=f(),l=f(),u=f(),d=f());var E=[1,1];if(g()&&g())switch(c()){case 1:E=[1,1];break;case 2:E=[12,11];break;case 3:E=[10,11];break;case 4:E=[16,11];break;case 5:E=[40,33];break;case 6:E=[24,11];break;case 7:E=[20,11];break;case 8:E=[32,11];break;case 9:E=[80,33];break;case 10:E=[18,11];break;case 11:E=[15,11];break;case 12:E=[64,33];break;case 13:E=[160,99];break;case 14:E=[4,3];break;case 15:E=[3,2];break;case 16:E=[2,1];break;case 255:E=[c()<<8|c(),c()<<8|c()]}return{width:Math.ceil(16*(r+1)-2*o-2*l),height:(2-a)*(i+1)*16-(a?2:4)*(u+d),pixelRatio:E}},t.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},e}(),_=function(){function e(e,t,r,i){this.decryptdata=r,this.discardEPB=i,this.decrypter=new n.a(e,t,{removePKCS7Padding:!1})}var t=e.prototype;return t.decryptBuffer=function(e,t){this.decrypter.decrypt(e,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,t)},t.decryptAacSample=function(e,t,r,i){var a=e[t].unit,n=a.subarray(16,a.length-a.length%16),s=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),o=this;this.decryptBuffer(s,(function(n){n=new Uint8Array(n),a.set(n,16),i||o.decryptAacSamples(e,t+1,r)}))},t.decryptAacSamples=function(e,t,r){for(;;t++){if(t>=e.length)return void r();if(!(e[t].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(e,t,r,i),!i)return}}},t.getAvcEncryptedData=function(e){for(var t=16*Math.floor((e.length-48)/160)+16,r=new Int8Array(t),i=0,a=32;a<=e.length-16;a+=160,i+=16)r.set(e.subarray(a,a+16),i);return r},t.getAvcDecryptedUnit=function(e,t){t=new Uint8Array(t);for(var r=0,i=32;i<=e.length-16;i+=160,r+=16)e.set(t.subarray(r,r+16),i);return e},t.decryptAvcSample=function(e,t,r,i,a,n){var s=this.discardEPB(a.data),o=this.getAvcEncryptedData(s),l=this;this.decryptBuffer(o.buffer,(function(o){a.data=l.getAvcDecryptedUnit(s,o),n||l.decryptAvcSamples(e,t,r+1,i)}))},t.decryptAvcSamples=function(e,t,r,i){for(;;t++,r=0){if(t>=e.length)return void i();for(var a=e[t].units;!(r>=a.length);r++){var n=a[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var s=this.decrypter.isSync();if(this.decryptAvcSample(e,t,r,i,n,s),!s)return}}}},e}(),R={video:1,audio:2,id3:3,text:4},A=function(){function e(e,t,r,i){this.observer=e,this.config=r,this.typeSupported=i,this.remuxer=t,this.sampleAes=null,this.pmtUnknownTypes={}}var t=e.prototype;return t.setDecryptData=function(e){null!=e&&null!=e.key&&"SAMPLE-AES"===e.method?this.sampleAes=new _(this.observer,this.config,e,this.discardEPB):this.sampleAes=null},e.probe=function(t){var r=e._syncOffset(t);return!(r<0)&&(r&&o.b.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)},e._syncOffset=function(e){for(var t=Math.min(1e3,e.length-564),r=0;r<t;){if(71===e[r]&&71===e[r+188]&&71===e[r+376])return r;r++}return-1},e.createTrack=function(e,t){return{container:"video"===e||"audio"===e?"video/mp2t":void 0,type:e,id:R[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:"video"===e?0:void 0,isAAC:"audio"===e||void 0,duration:"audio"===e?t:void 0}},t.resetInitSegment=function(t,r,i,a){this.pmtParsed=!1,this._pmtId=-1,this.pmtUnknownTypes={},this._avcTrack=e.createTrack("video",a),this._audioTrack=e.createTrack("audio",a),this._id3Track=e.createTrack("id3",a),this._txtTrack=e.createTrack("text",a),this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=r,this.videoCodec=i,this._duration=a},t.resetTimeStamp=function(){},t.append=function(t,r,n,s){var l,u,d,c,h,f=t.length,g=!1;this.pmtUnknownTypes={},this.contiguous=n;var p=this.pmtParsed,v=this._avcTrack,m=this._audioTrack,y=this._id3Track,b=v.pid,T=m.pid,E=y.pid,S=this._pmtId,_=v.pesData,R=m.pesData,A=y.pesData,k=this._parsePAT,w=this._parsePMT.bind(this),L=this._parsePES,D=this._parseAVCPES.bind(this),O=this._parseAACPES.bind(this),C=this._parseMPEGPES.bind(this),I=this._parseID3PES.bind(this),P=e._syncOffset(t);for(f-=(f+P)%188,l=P;l<f;l+=188)if(71===t[l]){if(u=!!(64&t[l+1]),d=((31&t[l+1])<<8)+t[l+2],(48&t[l+3])>>4>1){if((c=l+5+t[l+4])===l+188)continue}else c=l+4;switch(d){case b:u&&(_&&(h=L(_))&&D(h,!1),_={data:[],size:0}),_&&(_.data.push(t.subarray(c,l+188)),_.size+=l+188-c);break;case T:u&&(R&&(h=L(R))&&(m.isAAC?O(h):C(h)),R={data:[],size:0}),R&&(R.data.push(t.subarray(c,l+188)),R.size+=l+188-c);break;case E:u&&(A&&(h=L(A))&&I(h),A={data:[],size:0}),A&&(A.data.push(t.subarray(c,l+188)),A.size+=l+188-c);break;case 0:u&&(c+=t[c]+1),S=this._pmtId=k(t,c);break;case S:u&&(c+=t[c]+1);var x=w(t,c,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);(b=x.avc)>0&&(v.pid=b),(T=x.audio)>0&&(m.pid=T,m.isAAC=x.isAAC),(E=x.id3)>0&&(y.pid=E),g&&!p&&(o.b.log("reparse from beginning"),g=!1,l=P-188),p=this.pmtParsed=!0;break;case 17:case 8191:break;default:g=!0}}else this.observer.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});_&&(h=L(_))?(D(h,!0),v.pesData=null):v.pesData=_,R&&(h=L(R))?(m.isAAC?O(h):C(h),m.pesData=null):(R&&R.size&&o.b.log("last AAC PES packet truncated,might overlap between fragments"),m.pesData=R),A&&(h=L(A))?(I(h),y.pesData=null):y.pesData=A,null==this.sampleAes?this.remuxer.remux(m,v,y,this._txtTrack,r,n,s):this.decryptAndRemux(m,v,y,this._txtTrack,r,n,s)},t.decryptAndRemux=function(e,t,r,i,a,n,s){if(e.samples&&e.isAAC){var o=this;this.sampleAes.decryptAacSamples(e.samples,0,(function(){o.decryptAndRemuxAvc(e,t,r,i,a,n,s)}))}else this.decryptAndRemuxAvc(e,t,r,i,a,n,s)},t.decryptAndRemuxAvc=function(e,t,r,i,a,n,s){if(t.samples){var o=this;this.sampleAes.decryptAvcSamples(t.samples,0,0,(function(){o.remuxer.remux(e,t,r,i,a,n,s)}))}else this.remuxer.remux(e,t,r,i,a,n,s)},t.destroy=function(){this._initPTS=this._initDTS=void 0,this._duration=0},t._parsePAT=function(e,t){return(31&e[t+10])<<8|e[t+11]},t._trackUnknownPmt=function(e,t,r){var i=this.pmtUnknownTypes[e]||0;return 0===i&&(this.pmtUnknownTypes[e]=0,t.call(o.b,r)),this.pmtUnknownTypes[e]++,i},t._parsePMT=function(e,t,r,i){var a,n,s={audio:-1,avc:-1,id3:-1,isAAC:!0};for(a=t+3+((15&e[t+1])<<8|e[t+2])-4,t+=12+((15&e[t+10])<<8|e[t+11]);t<a;){switch(n=(31&e[t+1])<<8|e[t+2],e[t]){case 207:if(!i){this._trackUnknownPmt(e[t],o.b.warn,"ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:-1===s.audio&&(s.audio=n);break;case 21:-1===s.id3&&(s.id3=n);break;case 219:if(!i){this._trackUnknownPmt(e[t],o.b.warn,"H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:-1===s.avc&&(s.avc=n);break;case 3:case 4:r?-1===s.audio&&(s.audio=n,s.isAAC=!1):this._trackUnknownPmt(e[t],o.b.warn,"MPEG audio found, not supported in this browser");break;case 36:this._trackUnknownPmt(e[t],o.b.warn,"Unsupported HEVC stream type found");break;default:this._trackUnknownPmt(e[t],o.b.log,"Unknown stream type:"+e[t])}t+=5+((15&e[t+3])<<8|e[t+4])}return s},t._parsePES=function(e){var t,r,i,a,n,s,l,u,d=0,c=e.data;if(!e||0===e.size)return null;for(;c[0].length<19&&c.length>1;){var h=new Uint8Array(c[0].length+c[1].length);h.set(c[0]),h.set(c[1],c[0].length),c[0]=h,c.splice(1,1)}if(1===((t=c[0])[0]<<16)+(t[1]<<8)+t[2]){if((i=(t[4]<<8)+t[5])&&i>e.size-6)return null;if(192&(r=t[7])&&((s=536870912*(14&t[9])+4194304*(255&t[10])+16384*(254&t[11])+128*(255&t[12])+(254&t[13])/2)>4294967295&&(s-=8589934592),64&r?((l=536870912*(14&t[14])+4194304*(255&t[15])+16384*(254&t[16])+128*(255&t[17])+(254&t[18])/2)>4294967295&&(l-=8589934592),s-l>54e5&&(o.b.warn(Math.round((s-l)/9e4)+"s delta between PTS and DTS, align them"),s=l)):l=s),u=(a=t[8])+9,e.size<=u)return null;e.size-=u,n=new Uint8Array(e.size);for(var f=0,g=c.length;f<g;f++){var p=(t=c[f]).byteLength;if(u){if(u>p){u-=p;continue}t=t.subarray(u),p-=u,u=0}n.set(t,d),d+=p}return i&&(i-=a+3),{data:n,pts:s,dts:l,len:i}}return null},t.pushAccesUnit=function(e,t){if(e.units.length&&e.frame){var r=t.samples,i=r.length;if(isNaN(e.pts)){if(!i)return void t.dropped++;var a=r[i-1];e.pts=a.pts,e.dts=a.dts}!this.config.forceKeyFrameOnDiscontinuity||!0===e.key||t.sps&&(i||this.contiguous)?(e.id=i,r.push(e)):t.dropped++}e.debug.length&&o.b.log(e.pts+"/"+e.dts+":"+e.debug)},t._parseAVCPES=function(e,t){var r,i,a,n=this,s=this._avcTrack,o=this._parseAVCNALu(e.data),l=this.avcSample,u=!1,d=this.pushAccesUnit.bind(this),c=function(e,t,r,i){return{key:e,pts:t,dts:r,units:[],debug:i}};e.data=null,l&&o.length&&!s.audFound&&(d(l,s),l=this.avcSample=c(!1,e.pts,e.dts,"")),o.forEach((function(t){switch(t.type){case 1:i=!0,l||(l=n.avcSample=c(!0,e.pts,e.dts,"")),l.frame=!0;var o=t.data;if(u&&o.length>4){var h=new S(o).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(l.key=!0)}break;case 5:i=!0,l||(l=n.avcSample=c(!0,e.pts,e.dts,"")),l.key=!0,l.frame=!0;break;case 6:i=!0,(r=new S(n.discardEPB(t.data))).readUByte();for(var f=0,g=0,p=!1,v=0;!p&&r.bytesAvailable>1;){f=0;do{f+=v=r.readUByte()}while(255===v);g=0;do{g+=v=r.readUByte()}while(255===v);if(4===f&&0!==r.bytesAvailable){if(p=!0,181===r.readUByte())if(49===r.readUShort())if(1195456820===r.readUInt())if(3===r.readUByte()){var y=r.readUByte(),b=31&y,T=[y,r.readUByte()];for(a=0;a<b;a++)T.push(r.readUByte()),T.push(r.readUByte()),T.push(r.readUByte());n._insertSampleInOrder(n._txtTrack.samples,{type:3,pts:e.pts,bytes:T})}}else if(5===f&&0!==r.bytesAvailable){if(p=!0,g>16){var E=[];for(a=0;a<16;a++)E.push(r.readUByte().toString(16)),3!==a&&5!==a&&7!==a&&9!==a||E.push("-");var _=g-16,R=new Uint8Array(_);for(a=0;a<_;a++)R[a]=r.readUByte();n._insertSampleInOrder(n._txtTrack.samples,{pts:e.pts,payloadType:f,uuid:E.join(""),userDataBytes:R,userData:Object(m.b)(R.buffer)})}}else if(g<r.bytesAvailable)for(a=0;a<g;a++)r.readUByte()}break;case 7:if(i=!0,u=!0,!s.sps){var A=(r=new S(t.data)).readSPS();s.width=A.width,s.height=A.height,s.pixelRatio=A.pixelRatio,s.sps=[t.data],s.duration=n._duration;var k=t.data.subarray(1,4),w="avc1.";for(a=0;a<3;a++){var L=k[a].toString(16);L.length<2&&(L="0"+L),w+=L}s.codec=w}break;case 8:i=!0,s.pps||(s.pps=[t.data]);break;case 9:i=!1,s.audFound=!0,l&&d(l,s),l=n.avcSample=c(!1,e.pts,e.dts,"");break;case 12:i=!1;break;default:i=!1,l&&(l.debug+="unknown NAL "+t.type+" ")}l&&i&&l.units.push(t)})),t&&l&&(d(l,s),this.avcSample=null)},t._insertSampleInOrder=function(e,t){var r=e.length;if(r>0){if(t.pts>=e[r-1].pts)e.push(t);else for(var i=r-1;i>=0;i--)if(t.pts<e[i].pts){e.splice(i,0,t);break}}else e.push(t)},t._getLastNalUnit=function(){var e,t=this.avcSample;if(!t||0===t.units.length){var r=this._avcTrack.samples;t=r[r.length-1]}if(t){var i=t.units;e=i[i.length-1]}return e},t._parseAVCNALu=function(e){var t,r,i,a,n=0,s=e.byteLength,o=this._avcTrack,l=o.naluState||0,u=l,d=[],c=-1;for(-1===l&&(c=0,a=31&e[0],l=0,n=1);n<s;)if(t=e[n++],l)if(1!==l)if(t)if(1===t){if(c>=0)i={data:e.subarray(c,n-l-1),type:a},d.push(i);else{var h=this._getLastNalUnit();if(h&&(u&&n<=4-u&&h.state&&(h.data=h.data.subarray(0,h.data.byteLength-u)),(r=n-l-1)>0)){var f=new Uint8Array(h.data.byteLength+r);f.set(h.data,0),f.set(e.subarray(0,r),h.data.byteLength),h.data=f}}n<s?(c=n,a=31&e[n],l=0):l=-1}else l=0;else l=3;else l=t?0:2;else l=t?0:1;if(c>=0&&l>=0&&(i={data:e.subarray(c,s),type:a,state:l},d.push(i)),0===d.length){var g=this._getLastNalUnit();if(g){var p=new Uint8Array(g.data.byteLength+e.byteLength);p.set(g.data,0),p.set(e,g.data.byteLength),g.data=p}}return o.naluState=l,d},t.discardEPB=function(e){for(var t,r,i=e.byteLength,a=[],n=1;n<i-2;)0===e[n]&&0===e[n+1]&&3===e[n+2]?(a.push(n+2),n+=2):n++;if(0===a.length)return e;t=i-a.length,r=new Uint8Array(t);var s=0;for(n=0;n<t;s++,n++)s===a[0]&&(s++,a.shift()),r[n]=e[s];return r},t._parseAACPES=function(e){var t,r,n,s,l,u,d,c=this._audioTrack,f=e.data,m=e.pts,y=this.aacOverFlow,b=this.aacLastPTS;if(y){var T=new Uint8Array(y.byteLength+f.byteLength);T.set(y,0),T.set(f,y.byteLength),f=T}for(n=0,l=f.length;n<l-1&&!h(f,n);n++);if(n&&(n<l-1?(u="AAC PES did not start with ADTS header,offset:"+n,d=!1):(u="no ADTS header found in AAC PES",d=!0),o.b.warn("parsing error:"+u),this.observer.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:d,reason:u}),d))return;if(g(c,this.observer,f,n,this.audioCodec),r=0,t=p(c.samplerate),y&&b){var E=b+t;Math.abs(E-m)>1&&(o.b.log("AAC: align PTS for overlapping frames by "+Math.round((E-m)/90)),m=E)}for(;n<l;){if(h(f,n)){if(n+5<l){var S=v(c,f,n,m,r);if(S){n+=S.length,s=S.sample.pts,r++;continue}}break}n++}y=n<l?f.subarray(n,l):null,this.aacOverFlow=y,this.aacLastPTS=s},t._parseMPEGPES=function(e){for(var t=e.data,r=t.length,i=0,a=0,n=e.pts;a<r;)if(E.isHeader(t,a)){var s=E.appendFrame(this._audioTrack,t,a,n,i);if(!s)break;a+=s.length,i++}else a++},t._parseID3PES=function(e){this._id3Track.samples.push(e)},e}(),k=function(){function e(e,t,r){this.observer=e,this.config=r,this.remuxer=t}var t=e.prototype;return t.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},t.resetTimeStamp=function(){},e.probe=function(e){var t,r,i=m.a.getID3Data(e,0);if(i&&void 0!==m.a.getTimeStamp(i))for(t=i.length,r=Math.min(e.length-1,t+100);t<r;t++)if(E.probe(e,t))return o.b.log("MPEG Audio sync word found !"),!0;return!1},t.append=function(e,t,r,i){for(var a=m.a.getID3Data(e,0),n=m.a.getTimeStamp(a),s=void 0!==n?90*n:9e4*t,o=a.length,l=e.length,u=0,d=0,c=this._audioTrack,h=[{pts:s,dts:s,data:a}];o<l;)if(E.isHeader(e,o)){var f=E.appendFrame(c,e,o,s,u);if(!f)break;o+=f.length,d=f.sample.pts,u++}else m.a.isHeader(e,o)?(a=m.a.getID3Data(e,o),h.push({pts:d,dts:d,data:a}),o+=a.length):o++;this.remuxer.remux(c,{samples:[]},{samples:h,inputTimeScale:9e4},{samples:[]},t,r,i)},t.destroy=function(){},e}(),w=function(){function e(){}return e.getSilentFrame=function(e,t){switch(e){case"mp4a.40.2":if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},e}(),L=Math.pow(2,32)-1,D=function(){function e(){}return e.init=function(){var t;for(t in e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=n,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,s,l,s,o),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,a))},e.box=function(e){for(var t,r=Array.prototype.slice.call(arguments,1),i=8,a=r.length,n=a;a--;)i+=r[a].byteLength;for((t=new Uint8Array(i))[0]=i>>24&255,t[1]=i>>16&255,t[2]=i>>8&255,t[3]=255&i,t.set(e,4),a=0,i=8;a<n;a++)t.set(r[a],i),i+=r[a].byteLength;return t},e.hdlr=function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])},e.mdat=function(t){return e.box(e.types.mdat,t)},e.mdhd=function(t,r){r*=t;var i=Math.floor(r/(L+1)),a=Math.floor(r%(L+1));return e.box(e.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,85,196,0,0]))},e.mdia=function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))},e.mfhd=function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))},e.minf=function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))},e.moof=function(t,r,i){return e.box(e.types.moof,e.mfhd(t),e.traf(i,r))},e.moov=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trak(t[r]);return e.box.apply(null,[e.types.moov,e.mvhd(t[0].timescale,t[0].duration)].concat(i).concat(e.mvex(t)))},e.mvex=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trex(t[r]);return e.box.apply(null,[e.types.mvex].concat(i))},e.mvhd=function(t,r){r*=t;var i=Math.floor(r/(L+1)),a=Math.floor(r%(L+1)),n=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,n)},e.sdtp=function(t){var r,i,a=t.samples||[],n=new Uint8Array(4+a.length);for(i=0;i<a.length;i++)r=a[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return e.box(e.types.sdtp,n)},e.stbl=function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))},e.avc1=function(t){var r,i,a,n=[],s=[];for(r=0;r<t.sps.length;r++)a=(i=t.sps[r]).byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(i));for(r=0;r<t.pps.length;r++)a=(i=t.pps[r]).byteLength,s.push(a>>>8&255),s.push(255&a),s=s.concat(Array.prototype.slice.call(i));var o=e.box(e.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|t.sps.length].concat(n).concat([t.pps.length]).concat(s))),l=t.width,u=t.height,d=t.pixelRatio[0],c=t.pixelRatio[1];return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),e.box(e.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,255&d,c>>24,c>>16&255,c>>8&255,255&c])))},e.esds=function(e){var t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))},e.mp4a=function(t){var r=t.samplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),e.box(e.types.esds,e.esds(t)))},e.mp3=function(t){var r=t.samplerate;return e.box(e.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},e.stsd=function(t){return"audio"===t.type?t.isAAC||"mp3"!==t.codec?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.mp3(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))},e.tkhd=function(t){var r=t.id,i=t.duration*t.timescale,a=t.width,n=t.height,s=Math.floor(i/(L+1)),o=Math.floor(i%(L+1));return e.box(e.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,o>>24,o>>16&255,o>>8&255,255&o,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,255&a,0,0,n>>8&255,255&n,0,0]))},e.traf=function(t,r){var i=e.sdtp(t),a=t.id,n=Math.floor(r/(L+1)),s=Math.floor(r%(L+1));return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,a>>24,a>>16&255,a>>8&255,255&a])),e.box(e.types.tfdt,new Uint8Array([1,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,s>>24,s>>16&255,s>>8&255,255&s])),e.trun(t,i.length+16+20+8+16+8+8),i)},e.trak=function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))},e.trex=function(t){var r=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},e.trun=function(t,r){var i,a,n,s,o,l,u=t.samples||[],d=u.length,c=12+16*d,h=new Uint8Array(c);for(r+=8+c,h.set([0,0,15,1,d>>>24&255,d>>>16&255,d>>>8&255,255&d,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<d;i++)n=(a=u[i]).duration,s=a.size,o=a.flags,l=a.cts,h.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return e.box(e.types.trun,h)},e.initSegment=function(t){e.types||e.init();var r,i=e.moov(t);return(r=new Uint8Array(e.FTYP.byteLength+i.byteLength)).set(e.FTYP),r.set(i,e.FTYP.byteLength),r},e}();function O(e,t,r,i){void 0===r&&(r=1),void 0===i&&(i=!1);var a=e*t*r;return i?Math.round(a):a}function C(e,t){return void 0===t&&(t=!1),O(e,1e3,1/9e4,t)}function I(e,t){return void 0===t&&(t=1),O(e,9e4,1/t)}var P,x=I(10),M=I(.2),F=function(){function e(e,t,r,i){this.observer=e,this.config=t,this.typeSupported=r;var a=navigator.userAgent;this.isSafari=i&&i.indexOf("Apple")>-1&&a&&!a.match("CriOS"),this.ISGenerated=!1}var t=e.prototype;return t.destroy=function(){},t.resetTimeStamp=function(e){this._initPTS=this._initDTS=e},t.resetInitSegment=function(){this.ISGenerated=!1},t.remux=function(e,t,r,a,n,s,l){if(this.ISGenerated||this.generateIS(e,t,n),this.ISGenerated){var u=e.samples.length,d=t.samples.length,c=n,h=n;if(u&&d){var f=(e.samples[0].pts-t.samples[0].pts)/t.inputTimeScale;c+=Math.max(0,f),h+=Math.max(0,-f)}if(u){e.timescale||(o.b.warn("regenerate InitSegment as audio detected"),this.generateIS(e,t,n));var g,p=this.remuxAudio(e,c,s,l);if(d)p&&(g=p.endPTS-p.startPTS),t.timescale||(o.b.warn("regenerate InitSegment as video detected"),this.generateIS(e,t,n)),this.remuxVideo(t,h,s,g,l)}else if(d){var v=this.remuxVideo(t,h,s,0,l);v&&e.codec&&this.remuxEmptyAudio(e,c,s,v)}}r.samples.length&&this.remuxID3(r,n),a.samples.length&&this.remuxText(a,n),this.observer.trigger(i.a.FRAG_PARSED)},t.generateIS=function(e,t,r){var n,s,l=this.observer,u=e.samples,d=t.samples,c=this.typeSupported,h="audio/mp4",f={},g={tracks:f},p=void 0===this._initPTS;if(p&&(n=s=1/0),e.config&&u.length&&(e.timescale=e.samplerate,o.b.log("audio sampling rate : "+e.samplerate),e.isAAC||(c.mpeg?(h="audio/mpeg",e.codec=""):c.mp3&&(e.codec="mp3")),f.audio={container:h,codec:e.codec,initSegment:!e.isAAC&&c.mpeg?new Uint8Array:D.initSegment([e]),metadata:{channelCount:e.channelCount}},p&&(n=s=u[0].pts-e.inputTimeScale*r)),t.sps&&t.pps&&d.length){var v=t.inputTimeScale;t.timescale=v,f.video={container:"video/mp4",codec:t.codec,initSegment:D.initSegment([t]),metadata:{width:t.width,height:t.height}},p&&(n=Math.min(n,d[0].pts-v*r),s=Math.min(s,d[0].dts-v*r),this.observer.trigger(i.a.INIT_PTS_FOUND,{initPTS:n}))}else p&&f.audio&&this.observer.trigger(i.a.INIT_PTS_FOUND,{initPTS:n});Object.keys(f).length?(l.trigger(i.a.FRAG_PARSING_INIT_SEGMENT,g),this.ISGenerated=!0,p&&(this._initPTS=n,this._initDTS=s)):l.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})},t.remuxVideo=function(e,t,r,n,s){var l,u,d,c,h,f,g,p=8,v=e.timescale,m=e.samples,y=[],b=m.length,T=this._PTSNormalize,E=this._initPTS,S=this.nextAvcDts,_=this.isSafari;if(0!==b){_&&(r|=m.length&&S&&(s&&Math.abs(t-S/v)<.1||Math.abs(m[0].pts-S-E)<v/5)),r||(S=t*v),m.forEach((function(e){e.pts=T(e.pts-E,S),e.dts=T(e.dts-E,S)})),m.sort((function(e,t){var r=e.dts-t.dts,i=e.pts-t.pts;return r||i||e.id-t.id}));var R=m.reduce((function(e,t){return Math.max(Math.min(e,t.pts-t.dts),-1*M)}),0);if(R<0){o.b.warn("PTS < DTS detected in video samples, shifting DTS by "+C(R,!0)+" ms to overcome this issue");for(var A=0;A<m.length;A++)m[A].dts+=R}var k=m[0];h=Math.max(k.dts,0),c=Math.max(k.pts,0);var w=h-S;r&&w&&(w>1?o.b.log("AVC: "+C(w,!0)+" ms hole between fragments detected,filling it"):w<-1&&o.b.log("AVC: "+C(-w,!0)+" ms overlapping between fragments detected"),h=S,m[0].dts=h,c=Math.max(c-w,S),m[0].pts=c,o.b.log("Video: PTS/DTS adjusted: "+C(c,!0)+"/"+C(h,!0)+", delta: "+C(w,!0)+" ms")),k=m[m.length-1],g=Math.max(k.dts,0),f=Math.max(k.pts,0,g),_&&(l=Math.round((g-h)/(m.length-1)));for(var L=0,O=0,I=0;I<b;I++){for(var P=m[I],x=P.units,F=x.length,U=0,N=0;N<F;N++)U+=x[N].data.length;O+=U,L+=F,P.length=U,P.dts=_?h+I*l:Math.max(P.dts,h),P.pts=Math.max(P.pts,P.dts)}var B=O+4*L+8;try{u=new Uint8Array(B)}catch(e){return void this.observer.trigger(i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:B,reason:"fail allocating video mdat "+B})}var G=new DataView(u.buffer);G.setUint32(0,B),u.set(D.types.mdat,4);for(var K=0;K<b;K++){for(var j=m[K],H=j.units,V=0,Y=void 0,W=0,q=H.length;W<q;W++){var X=H[W],z=X.data,Q=X.data.byteLength;G.setUint32(p,Q),p+=4,u.set(z,p),p+=Q,V+=4+Q}if(_)Y=Math.max(0,l*Math.round((j.pts-j.dts)/l));else{if(K<b-1)l=m[K+1].dts-j.dts;else{var $=this.config,J=j.dts-m[K>0?K-1:K].dts;if($.stretchShortVideoTrack){var Z=$.maxBufferHole,ee=Math.floor(Z*v),te=(n?c+n*v:this.nextAudioPts)-j.pts;te>ee?((l=te-J)<0&&(l=J),o.b.log("It is approximately "+C(te,!1)+" ms to the next segment; using duration "+C(l,!1)+" ms for the last video frame.")):l=J}else l=J}Y=Math.round(j.pts-j.dts)}y.push({size:V,duration:l,cts:Y,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:j.key?2:1,isNonSync:j.key?0:1}})}this.nextAvcDts=g+l;var re=e.dropped;if(e.nbNalu=0,e.dropped=0,y.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var ie=y[0].flags;ie.dependsOn=2,ie.isNonSync=0}e.samples=y,d=D.moof(e.sequenceNumber++,h,e),e.samples=[];var ae={data1:d,data2:u,startPTS:c/v,endPTS:(f+l)/v,startDTS:h/v,endDTS:this.nextAvcDts/v,type:"video",hasAudio:!1,hasVideo:!0,nb:y.length,dropped:re};return this.observer.trigger(i.a.FRAG_PARSING_DATA,ae),ae}},t.remuxAudio=function(e,t,r,n){var s,l,u,d,c,h,f=e.inputTimeScale,g=e.timescale,p=f/g,v=(e.isAAC?1024:1152)*p,m=this._PTSNormalize,y=this._initPTS,b=!e.isAAC&&this.typeSupported.mpeg,T=b?0:8,E=e.samples,S=[],_=this.nextAudioPts;if(r|=E.length&&_&&(n&&Math.abs(t-_/f)<.1||Math.abs(E[0].pts-_-y)<20*v),E.forEach((function(e){e.pts=e.dts=m(e.pts-y,t*f)})),0!==(E=E.filter((function(e){return e.pts>=0}))).length){if(r||(_=n?t*f:E[0].pts),e.isAAC)for(var R=this.config.maxAudioFramesDrift,A=0,k=_;A<E.length;){var L,O=E[A];if((L=O.pts-k)<=-R*v)o.b.warn("Dropping 1 audio frame @ "+C(k,!0)+" ms due to "+C(L,!0)+" ms overlap."),E.splice(A,1);else if(L>=R*v&&L<x&&k){var I=Math.round(L/v);o.b.warn("Injecting "+I+" audio frames @ "+C(k,!0)+" ms due to "+C(L,!0)+" ms gap.");for(var P=0;P<I;P++){var M=Math.max(k,0);(l=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(o.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),l=O.unit.subarray()),E.splice(A,0,{unit:l,pts:M,dts:M}),k+=v,A++}O.pts=O.dts=k,k+=v,A++}else Math.abs(L),O.pts=O.dts=k,k+=v,A++}for(var F=E.length,U=0;F--;)U+=E[F].unit.byteLength;for(var N=0,B=E.length;N<B;N++){var G=E[N],K=G.unit,j=G.pts;if(void 0!==h)s.duration=Math.round((j-h)/p);else{var H=j-_,V=0;if(r&&e.isAAC&&H){if(H>0&&H<x)V=Math.round((j-_)/v),o.b.log(C(H,!0)+" ms hole between AAC samples detected,filling it"),V>0&&((l=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(l=K.subarray()),U+=V*l.length);else if(H<-12){o.b.log("drop overlapping AAC sample, expected/parsed/delta: "+C(_,!0)+" ms / "+C(j,!0)+" ms / "+C(-H,!0)+" ms"),U-=K.byteLength;continue}j=_}if(c=j,!(U>0))return;U+=T;try{u=new Uint8Array(U)}catch(e){return void this.observer.trigger(i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:U,reason:"fail allocating audio mdat "+U})}b||(new DataView(u.buffer).setUint32(0,U),u.set(D.types.mdat,4));for(var Y=0;Y<V;Y++)(l=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(o.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),l=K.subarray()),u.set(l,T),T+=l.byteLength,s={size:l.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},S.push(s)}u.set(K,T);var W=K.byteLength;T+=W,s={size:W,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},S.push(s),h=j}var q=0;if((F=S.length)>=2&&(q=S[F-2].duration,s.duration=q),F){this.nextAudioPts=_=h+p*q,e.samples=S,d=b?new Uint8Array:D.moof(e.sequenceNumber++,c/p,e),e.samples=[];var X=c/f,z=_/f,Q={data1:d,data2:u,startPTS:X,endPTS:z,startDTS:X,endDTS:z,type:"audio",hasAudio:!0,hasVideo:!1,nb:F};return this.observer.trigger(i.a.FRAG_PARSING_DATA,Q),Q}return null}},t.remuxEmptyAudio=function(e,t,r,i){var a=e.inputTimeScale,n=a/(e.samplerate?e.samplerate:a),s=this.nextAudioPts,l=(void 0!==s?s:i.startDTS*a)+this._initDTS,u=i.endDTS*a+this._initDTS,d=1024*n,c=Math.ceil((u-l)/d),h=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(o.b.warn("remux empty Audio"),h){for(var f=[],g=0;g<c;g++){var p=l+g*d;f.push({unit:h,pts:p,dts:p})}e.samples=f,this.remuxAudio(e,t,r)}else o.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")},t.remuxID3=function(e){var t=e.samples.length;if(t){for(var r=e.inputTimeScale,a=this._initPTS,n=this._initDTS,s=0;s<t;s++){var o=e.samples[s];o.pts=(o.pts-a)/r,o.dts=(o.dts-n)/r}this.observer.trigger(i.a.FRAG_PARSING_METADATA,{samples:e.samples}),e.samples=[]}},t.remuxText=function(e){e.samples.sort((function(e,t){return e.pts-t.pts}));var t,r=e.samples.length,a=e.inputTimeScale,n=this._initPTS;if(r){for(var s=0;s<r;s++)(t=e.samples[s]).pts=(t.pts-n)/a;this.observer.trigger(i.a.FRAG_PARSING_USERDATA,{samples:e.samples})}e.samples=[]},t._PTSNormalize=function(e,t){var r;if(void 0===t)return e;for(r=t<e?-8589934592:8589934592;Math.abs(e-t)>4294967296;)e+=r;return e},e}(),U=function(){function e(e){this.observer=e}var t=e.prototype;return t.destroy=function(){},t.resetTimeStamp=function(){},t.resetInitSegment=function(){},t.remux=function(e,t,r,a,n,s,o,l){var u=this.observer,d="";e&&(d+="audio"),t&&(d+="video"),u.trigger(i.a.FRAG_PARSING_DATA,{data1:l,startPTS:n,startDTS:n,type:d,hasAudio:!!e,hasVideo:!!t,nb:1,dropped:0}),u.trigger(i.a.FRAG_PARSED)},e}(),N=Object(l.a)();try{P=N.performance.now.bind(N.performance)}catch(e){o.b.debug("Unable to use Performance API on this environment"),P=N.Date.now}var B=function(){function e(e,t,r,i){this.observer=e,this.typeSupported=t,this.config=r,this.vendor=i}var t=e.prototype;return t.destroy=function(){var e=this.demuxer;e&&e.destroy()},t.push=function(e,t,r,a,s,o,l,u,d,c,h,f){var g=this;if(e.byteLength>0&&null!=t&&null!=t.key&&"AES-128"===t.method){var p=this.decrypter;null==p&&(p=this.decrypter=new n.a(this.observer,this.config));var v=P();p.decrypt(e,t.key.buffer,t.iv.buffer,(function(e){var n=P();g.observer.trigger(i.a.FRAG_DECRYPTED,{stats:{tstart:v,tdecrypt:n}}),g.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),a,s,o,l,u,d,c,h,f)}))}else this.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),a,s,o,l,u,d,c,h,f)},t.pushDecrypted=function(e,t,r,n,s,o,l,u,d,c,h,f){var g=this.demuxer;if(!g||(l||u)&&!this.probe(e)){for(var p=this.observer,v=this.typeSupported,m=this.config,T=[{demux:A,remux:F},{demux:b.a,remux:U},{demux:y,remux:F},{demux:k,remux:F}],E=0,S=T.length;E<S;E++){var _=T[E],R=_.demux.probe;if(R(e)){var w=this.remuxer=new _.remux(p,m,v,this.vendor);g=new _.demux(p,w,m,v),this.probe=R;break}}if(!g)return void p.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});this.demuxer=g}var L=this.remuxer;(l||u)&&(g.resetInitSegment(r,n,s,c),L.resetInitSegment()),l&&(g.resetTimeStamp(f),L.resetTimeStamp(f)),"function"==typeof g.setDecryptData&&g.setDecryptData(t),g.append(e,o,d,h)},e}();t.a=B},function(e,t,r){"use strict";var i=r(0),a=r(1),n=Math.pow(2,32)-1,s=function(){function e(e,t){this.observer=e,this.remuxer=t}var t=e.prototype;return t.resetTimeStamp=function(e){this.initPTS=e},t.resetInitSegment=function(t,r,i,n){if(t&&t.byteLength){var s=this.initData=e.parseInitSegment(t);null==r&&(r="mp4a.40.5"),null==i&&(i="avc1.42e01e");var o={};s.audio&&s.video?o.audiovideo={container:"video/mp4",codec:r+","+i,initSegment:n?t:null}:(s.audio&&(o.audio={container:"audio/mp4",codec:r,initSegment:n?t:null}),s.video&&(o.video={container:"video/mp4",codec:i,initSegment:n?t:null})),this.observer.trigger(a.a.FRAG_PARSING_INIT_SEGMENT,{tracks:o})}else r&&(this.audioCodec=r),i&&(this.videoCodec=i)},e.probe=function(t){return e.findBox({data:t,start:0,end:Math.min(t.length,16384)},["moof"]).length>0},e.bin2str=function(e){return String.fromCharCode.apply(null,e)},e.readUint16=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<8|e[t+1];return r<0?65536+r:r},e.readUint32=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3];return r<0?4294967296+r:r},e.writeUint32=function(e,t,r){e.data&&(t+=e.start,e=e.data),e[t]=r>>24,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r},e.findBox=function(t,r){var i,a,n,s,o,l,u=[];if(t.data?(o=t.start,n=t.end,t=t.data):(o=0,n=t.byteLength),!r.length)return null;for(i=o;i<n;)l=(a=e.readUint32(t,i))>1?i+a:n,e.bin2str(t.subarray(i+4,i+8))===r[0]&&(1===r.length?u.push({data:t,start:i+8,end:l}):(s=e.findBox({data:t,start:i+8,end:l},r.slice(1))).length&&(u=u.concat(s))),i=l;return u},e.parseSegmentIndex=function(t){var r,i=e.findBox(t,["moov"])[0],a=i?i.end:null,n=0,s=e.findBox(t,["sidx"]);if(!s||!s[0])return null;r=[];var o=(s=s[0]).data[0];n=0===o?8:16;var l=e.readUint32(s,n);n+=4;n+=0===o?8:16,n+=2;var u=s.end+0,d=e.readUint16(s,n);n+=2;for(var c=0;c<d;c++){var h=n,f=e.readUint32(s,h);h+=4;var g=2147483647&f;if(1===(2147483648&f)>>>31)return void console.warn("SIDX has hierarchical references (not supported)");var p=e.readUint32(s,h);h+=4,r.push({referenceSize:g,subsegmentDuration:p,info:{duration:p/l,start:u,end:u+g-1}}),u+=g,n=h+=4}return{earliestPresentationTime:0,timescale:l,version:o,referencesCount:d,references:r,moovEndOffset:a}},e.parseInitSegment=function(t){var r=[];return e.findBox(t,["moov","trak"]).forEach((function(t){var a=e.findBox(t,["tkhd"])[0];if(a){var n=a.data[a.start],s=0===n?12:20,o=e.readUint32(a,s),l=e.findBox(t,["mdia","mdhd"])[0];if(l){s=0===(n=l.data[l.start])?12:20;var u=e.readUint32(l,s),d=e.findBox(t,["mdia","hdlr"])[0];if(d){var c={soun:"audio",vide:"video"}[e.bin2str(d.data.subarray(d.start+8,d.start+12))];if(c){var h=e.findBox(t,["mdia","minf","stbl","stsd"]);if(h.length){h=h[0];var f=e.bin2str(h.data.subarray(h.start+12,h.start+16));i.b.log("MP4Demuxer:"+c+":"+f+" found")}r[o]={timescale:u,type:c},r[c]={timescale:u,id:o}}}}}})),r},e.getStartDTS=function(t,r){var i,a,n;return i=e.findBox(r,["moof","traf"]),a=[].concat.apply([],i.map((function(r){return e.findBox(r,["tfhd"]).map((function(i){var a,n;return a=e.readUint32(i,4),n=t[a].timescale||9e4,e.findBox(r,["tfdt"]).map((function(t){var r,i;return r=t.data[t.start],i=e.readUint32(t,4),1===r&&(i*=Math.pow(2,32),i+=e.readUint32(t,8)),i}))[0]/n}))}))),n=Math.min.apply(null,a),isFinite(n)?n:0},e.offsetStartDTS=function(t,r,i){e.findBox(r,["moof","traf"]).map((function(r){return e.findBox(r,["tfhd"]).map((function(a){var s=e.readUint32(a,4),o=t[s].timescale||9e4;e.findBox(r,["tfdt"]).map((function(t){var r=t.data[t.start],a=e.readUint32(t,4);if(0===r)e.writeUint32(t,4,a-i*o);else{a*=Math.pow(2,32),a+=e.readUint32(t,8),a-=i*o,a=Math.max(a,0);var s=Math.floor(a/(n+1)),l=Math.floor(a%(n+1));e.writeUint32(t,4,s),e.writeUint32(t,8,l)}}))}))}))},t.append=function(t,r,i,n){var s=this.initData;s||(this.resetInitSegment(t,this.audioCodec,this.videoCodec,!1),s=this.initData);var o,l=this.initPTS;if(void 0===l){var u=e.getStartDTS(s,t);this.initPTS=l=u-r,this.observer.trigger(a.a.INIT_PTS_FOUND,{initPTS:l})}e.offsetStartDTS(s,t,l),o=e.getStartDTS(s,t),this.remuxer.remux(s.audio,s.video,null,null,o,i,n,t)},t.destroy=function(){},e}();t.a=s},function(e,t,r){function i(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var i=r(r.s=ENTRY_MODULE);return i.default||i}function a(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function n(e,t,i){var n={};n[i]=[];var s=t.toString(),o=s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!o)return n;for(var l,u=o[1],d=new RegExp("(\\\\n|\\W)"+a(u)+"\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g");l=d.exec(s);)"dll-reference"!==l[3]&&n[i].push(l[3]);for(d=new RegExp("\\("+a(u)+'\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g");l=d.exec(s);)e[l[2]]||(n[i].push(l[1]),e[l[2]]=r(l[1]).m),n[l[2]]=n[l[2]]||[],n[l[2]].push(l[4]);for(var c,h=Object.keys(n),f=0;f<h.length;f++)for(var g=0;g<n[h[f]].length;g++)c=n[h[f]][g],isNaN(1*c)||(n[h[f]][g]=1*n[h[f]][g]);return n}function s(e){return Object.keys(e).reduce((function(t,r){return t||e[r].length>0}),!1)}e.exports=function(e,t){t=t||{};var a={main:r.m},o=t.all?{main:Object.keys(a.main)}:function(e,t){for(var r={main:[t]},i={main:[]},a={main:{}};s(r);)for(var o=Object.keys(r),l=0;l<o.length;l++){var u=o[l],d=r[u].pop();if(a[u]=a[u]||{},!a[u][d]&&e[u][d]){a[u][d]=!0,i[u]=i[u]||[],i[u].push(d);for(var c=n(e,e[u][d],u),h=Object.keys(c),f=0;f<h.length;f++)r[h[f]]=r[h[f]]||[],r[h[f]]=r[h[f]].concat(c[h[f]])}}return i}(a,e),l="";Object.keys(o).filter((function(e){return"main"!==e})).forEach((function(e){for(var t=0;o[e][t];)t++;o[e].push(t),a[e][t]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",l=l+"var "+e+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+o[e].map((function(t){return JSON.stringify(t)+": "+a[e][t].toString()})).join(",")+"});\n"})),l=l+"new (("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+o.main.map((function(e){return JSON.stringify(e)+": "+a.main[e].toString()})).join(",")+"}))(self);";var u=new window.Blob([l],{type:"text/javascript"});if(t.bare)return u;var d=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(u),c=new window.Worker(d);return c.objectURL=d,c}},function(e,t,r){"use strict";r.r(t);var i=r(9),a=r(1),n=r(0),s=r(8);t.default=function(e){var t=new s.EventEmitter;t.trigger=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.emit.apply(t,[e,e].concat(i))},t.off=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.removeListener.apply(t,[e].concat(i))};var r=function(t,r){e.postMessage({event:t,data:r})};e.addEventListener("message",(function(a){var s=a.data;switch(s.cmd){case"init":var o=JSON.parse(s.config);e.demuxer=new i.a(t,s.typeSupported,o,s.vendor),Object(n.a)(o.debug),r("init",null);break;case"demux":e.demuxer.push(s.data,s.decryptdata,s.initSegment,s.audioCodec,s.videoCodec,s.timeOffset,s.discontinuity,s.trackSwitch,s.contiguous,s.duration,s.accurateTimeOffset,s.defaultInitPTS)}})),t.on(a.a.FRAG_DECRYPTED,r),t.on(a.a.FRAG_PARSING_INIT_SEGMENT,r),t.on(a.a.FRAG_PARSED,r),t.on(a.a.ERROR,r),t.on(a.a.FRAG_PARSING_METADATA,r),t.on(a.a.FRAG_PARSING_USERDATA,r),t.on(a.a.INIT_PTS_FOUND,r),t.on(a.a.FRAG_PARSING_DATA,(function(t,r){var i=[],a={event:t,data:r};r.data1&&(a.data1=r.data1.buffer,i.push(r.data1.buffer),delete r.data1),r.data2&&(a.data2=r.data2.buffer,i.push(r.data2.buffer),delete r.data2),e.postMessage(a,i)}))}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return nr}));var i={};r.r(i),r.d(i,"newCue",(function(){return ft}));var a,n,s=r(6),o=r(2),l=r(3),u=r(1),d=r(0),c={hlsEventGeneric:!0,hlsHandlerDestroying:!0,hlsHandlerDestroyed:!0},h=function(){function e(e){this.hls=void 0,this.handledEvents=void 0,this.useGenericHandler=void 0,this.hls=e,this.onEvent=this.onEvent.bind(this);for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.handledEvents=r,this.useGenericHandler=!0,this.registerListeners()}var t=e.prototype;return t.destroy=function(){this.onHandlerDestroying(),this.unregisterListeners(),this.onHandlerDestroyed()},t.onHandlerDestroying=function(){},t.onHandlerDestroyed=function(){},t.isEventHandler=function(){return"object"==typeof this.handledEvents&&this.handledEvents.length&&"function"==typeof this.onEvent},t.registerListeners=function(){this.isEventHandler()&&this.handledEvents.forEach((function(e){if(c[e])throw new Error("Forbidden event-name: "+e);this.hls.on(e,this.onEvent)}),this)},t.unregisterListeners=function(){this.isEventHandler()&&this.handledEvents.forEach((function(e){this.hls.off(e,this.onEvent)}),this)},t.onEvent=function(e,t){this.onEventGeneric(e,t)},t.onEventGeneric=function(e,t){try{(function(e,t){var r="on"+e.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,t)}).call(this,e,t).call()}catch(t){d.b.error("An internal error happened while handling event "+e+'. Error message: "'+t.message+'". Here is a stacktrace:',t),this.hls.trigger(u.a.ERROR,{type:o.b.OTHER_ERROR,details:o.a.INTERNAL_EXCEPTION,fatal:!1,event:e,err:t})}},e}();!function(e){e.MANIFEST="manifest",e.LEVEL="level",e.AUDIO_TRACK="audioTrack",e.SUBTITLE_TRACK="subtitleTrack"}(a||(a={})),function(e){e.MAIN="main",e.AUDIO="audio",e.SUBTITLE="subtitle"}(n||(n={}));var f=r(10);function g(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p,v=function(){function e(e,t){this._uri=null,this.baseuri=void 0,this.reluri=void 0,this.method=null,this.key=null,this.iv=null,this.baseuri=e,this.reluri=t}var t,r,i;return t=e,(r=[{key:"uri",get:function(){return!this._uri&&this.reluri&&(this._uri=Object(s.buildAbsoluteURL)(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri}}])&&g(t.prototype,r),i&&g(t,i),e}();function m(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}!function(e){e.AUDIO="audio",e.VIDEO="video"}(p||(p={}));var y=function(){function e(){var e;this._url=null,this._byteRange=null,this._decryptdata=null,this._elementaryStreams=((e={})[p.AUDIO]=!1,e[p.VIDEO]=!1,e),this.deltaPTS=0,this.rawProgramDateTime=null,this.programDateTime=null,this.title=null,this.tagList=[],this.cc=void 0,this.type=void 0,this.relurl=void 0,this.baseurl=void 0,this.duration=void 0,this.start=void 0,this.sn=0,this.urlId=0,this.level=0,this.levelkey=void 0,this.loader=void 0}var t,r,i,a=e.prototype;return a.setByteRange=function(e,t){var r=e.split("@",2),i=[];1===r.length?i[0]=t?t.byteRangeEndOffset:0:i[0]=parseInt(r[1]),i[1]=parseInt(r[0])+i[0],this._byteRange=i},a.addElementaryStream=function(e){this._elementaryStreams[e]=!0},a.hasElementaryStream=function(e){return!0===this._elementaryStreams[e]},a.createInitializationVector=function(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t},a.setDecryptDataFromLevelKey=function(e,t){var r=e;return(null==e?void 0:e.method)&&e.uri&&!e.iv&&((r=new v(e.baseuri,e.reluri)).method=e.method,r.iv=this.createInitializationVector(t)),r},t=e,(r=[{key:"url",get:function(){return!this._url&&this.relurl&&(this._url=Object(s.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(e){this._url=e}},{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var e=this.sn;"number"!=typeof e&&(this.levelkey&&"AES-128"===this.levelkey.method&&!this.levelkey.iv&&d.b.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),e=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,e)}return this._decryptdata}},{key:"endProgramDateTime",get:function(){if(null===this.programDateTime)return null;if(!Object(l.a)(this.programDateTime))return null;var e=Object(l.a)(this.duration)?this.duration:0;return this.programDateTime+1e3*e}},{key:"encrypted",get:function(){return!(!this.decryptdata||null===this.decryptdata.uri||null!==this.decryptdata.key)}}])&&m(t.prototype,r),i&&m(t,i),e}();function b(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var T=function(){function e(e){this.endCC=0,this.endSN=0,this.fragments=[],this.initSegment=null,this.live=!0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=e,this.version=null}var t,r,i;return t=e,(r=[{key:"hasProgramDateTime",get:function(){return!(!this.fragments[0]||!Object(l.a)(this.fragments[0].programDateTime))}}])&&b(t.prototype,r),i&&b(t,i),e}(),E=/^(\d+)x(\d+)$/,S=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,_=function(){function e(t){for(var r in"string"==typeof t&&(t=e.parseAttrList(t)),t)t.hasOwnProperty(r)&&(this[r]=t[r])}var t=e.prototype;return t.decimalInteger=function(e){var t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t},t.hexadecimalInteger=function(e){if(this[e]){var t=(this[e]||"0x").slice(2);t=(1&t.length?"0":"")+t;for(var r=new Uint8Array(t.length/2),i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(2*i,2*i+2),16);return r}return null},t.hexadecimalIntegerAsNumber=function(e){var t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t},t.decimalFloatingPoint=function(e){return parseFloat(this[e])},t.enumeratedString=function(e){return this[e]},t.decimalResolution=function(e){var t=E.exec(this[e]);if(null!==t)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}},e.parseAttrList=function(e){var t,r={};for(S.lastIndex=0;null!==(t=S.exec(e));){var i=t[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[t[1]]=i}return r},e}(),R={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0}};function A(e,t){return MediaSource.isTypeSupported((t||"video")+'/mp4;codecs="'+e+'"')}var k=/(?:#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+)/g,w=/#EXT-X-MEDIA:(.*)/g,L=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)([\S+ ?]+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),D=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,O=/\.(mp4|m4s|m4v|m4a)$/i,C=function(){function e(){}return e.findGroup=function(e,t){for(var r=0;r<e.length;r++){var i=e[r];if(i.id===t)return i}},e.convertAVC1ToAVCOTI=function(e){var t,r=e.split(".");return r.length>2?(t=r.shift()+".",t+=parseInt(r.shift()).toString(16),t+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):t=e,t},e.resolve=function(e,t){return s.buildAbsoluteURL(t,e,{alwaysNormalize:!0})},e.parseMasterPlaylist=function(t,r){var i,a=[],n={},s=!1;function o(e,t){["video","audio"].forEach((function(r){var i=e.filter((function(e){return function(e,t){var r=R[t];return!!r&&!0===r[e.slice(0,4)]}(e,r)}));if(i.length){var a=i.filter((function(e){return 0===e.lastIndexOf("avc1",0)||0===e.lastIndexOf("mp4a",0)}));t[r+"Codec"]=a.length>0?a[0]:i[0],e=e.filter((function(e){return-1===i.indexOf(e)}))}})),t.unknownCodecs=e}for(k.lastIndex=0;null!=(i=k.exec(t));)if(i[1]){var l={},u=l.attrs=new _(i[1]);l.url=e.resolve(i[2],r);var d=u.decimalResolution("RESOLUTION");d&&(l.width=d.width,l.height=d.height),l.bitrate=u.decimalInteger("AVERAGE-BANDWIDTH")||u.decimalInteger("BANDWIDTH"),l.name=u.NAME,o([].concat((u.CODECS||"").split(/[ ,]+/)),l),l.videoCodec&&-1!==l.videoCodec.indexOf("avc1")&&(l.videoCodec=e.convertAVC1ToAVCOTI(l.videoCodec)),a.push(l)}else if(i[3]){var c=new _(i[3]);c["DATA-ID"]&&(s=!0,n[c["DATA-ID"]]=c)}return{levels:a,sessionData:s?n:null}},e.parseMasterPlaylistMedia=function(t,r,i,a){var n;void 0===a&&(a=[]);var s=[],o=0;for(w.lastIndex=0;null!==(n=w.exec(t));){var l=new _(n[1]);if(l.TYPE===i){var u={attrs:l,id:o++,groupId:l["GROUP-ID"],instreamId:l["INSTREAM-ID"],name:l.NAME||l.LANGUAGE,type:i,default:"YES"===l.DEFAULT,autoselect:"YES"===l.AUTOSELECT,forced:"YES"===l.FORCED,lang:l.LANGUAGE};if(l.URI&&(u.url=e.resolve(l.URI,r)),a.length){var d=e.findGroup(a,u.groupId);u.audioCodec=d?d.codec:a[0].codec}s.push(u)}}return s},e.parseLevelPlaylist=function(e,t,r,i,a){var n,s,o,u=0,c=0,h=new T(t),f=0,g=null,p=new y,m=null;for(L.lastIndex=0;null!==(n=L.exec(e));){var b=n[1];if(b){p.duration=parseFloat(b);var E=(" "+n[2]).slice(1);p.title=E||null,p.tagList.push(E?["INF",b,E]:["INF",b])}else if(n[3]){if(Object(l.a)(p.duration)){var S=u++;p.type=i,p.start=c,o&&(p.levelkey=o),p.sn=S,p.level=r,p.cc=f,p.urlId=a,p.baseurl=t,p.relurl=(" "+n[3]).slice(1),I(p,g),h.fragments.push(p),g=p,c+=p.duration,p=new y}}else if(n[4]){var R=(" "+n[4]).slice(1);g?p.setByteRange(R,g):p.setByteRange(R)}else if(n[5])p.rawProgramDateTime=(" "+n[5]).slice(1),p.tagList.push(["PROGRAM-DATE-TIME",p.rawProgramDateTime]),null===m&&(m=h.fragments.length);else{if(!(n=n[0].match(D))){d.b.warn("No matches on slow regex match for level playlist!");continue}for(s=1;s<n.length&&void 0===n[s];s++);var A=(" "+n[s+1]).slice(1),k=(" "+n[s+2]).slice(1);switch(n[s]){case"#":p.tagList.push(k?[A,k]:[A]);break;case"PLAYLIST-TYPE":h.type=A.toUpperCase();break;case"MEDIA-SEQUENCE":u=h.startSN=parseInt(A);break;case"TARGETDURATION":h.targetduration=parseFloat(A);break;case"VERSION":h.version=parseInt(A);break;case"EXTM3U":break;case"ENDLIST":h.live=!1;break;case"DIS":f++,p.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":f=parseInt(A);break;case"KEY":var w=new _(A),C=w.enumeratedString("METHOD"),P=w.URI,x=w.hexadecimalInteger("IV");if("com.apple.streamingkeydelivery"===(w.KEYFORMAT||"identity")){d.b.warn("Keyformat com.apple.streamingkeydelivery is not supported");continue}C&&(o=new v(t,P),P&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(C)>=0&&(o.method=C,o.key=null,o.iv=x));break;case"START":var M=new _(A).decimalFloatingPoint("TIME-OFFSET");Object(l.a)(M)&&(h.startTimeOffset=M);break;case"MAP":var F=new _(A);p.relurl=F.URI,F.BYTERANGE&&p.setByteRange(F.BYTERANGE),p.baseurl=t,p.level=r,p.type=i,p.sn="initSegment",h.initSegment=p,(p=new y).rawProgramDateTime=h.initSegment.rawProgramDateTime;break;default:d.b.warn("line parsed but not handled: "+n)}}}return(p=g)&&!p.relurl&&(h.fragments.pop(),c-=p.duration),h.totalduration=c,h.averagetargetduration=c/h.fragments.length,h.endSN=u-1,h.startCC=h.fragments[0]?h.fragments[0].cc:0,h.endCC=f,!h.initSegment&&h.fragments.length&&h.fragments.every((function(e){return O.test(e.relurl)}))&&(d.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),(p=new y).relurl=h.fragments[0].relurl,p.baseurl=t,p.level=r,p.type=i,p.sn="initSegment",h.initSegment=p,h.needSidxRanges=!0),m&&function(e,t){for(var r=e[t],i=t-1;i>=0;i--){var a=e[i];a.programDateTime=r.programDateTime-1e3*a.duration,r=a}}(h.fragments,m),h},e}();function I(e,t){e.rawProgramDateTime?e.programDateTime=Date.parse(e.rawProgramDateTime):(null==t?void 0:t.programDateTime)&&(e.programDateTime=t.endProgramDateTime),Object(l.a)(e.programDateTime)||(e.programDateTime=null,e.rawProgramDateTime=null)}var P=window.performance,x=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.MANIFEST_LOADING,u.a.LEVEL_LOADING,u.a.AUDIO_TRACK_LOADING,u.a.SUBTITLE_TRACK_LOADING)||this).loaders={},r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.canHaveQualityLevels=function(e){return e!==a.AUDIO_TRACK&&e!==a.SUBTITLE_TRACK},i.mapContextToLevelType=function(e){switch(e.type){case a.AUDIO_TRACK:return n.AUDIO;case a.SUBTITLE_TRACK:return n.SUBTITLE;default:return n.MAIN}},i.getResponseUrl=function(e,t){var r=e.url;return void 0!==r&&0!==r.indexOf("data:")||(r=t.url),r};var s=i.prototype;return s.createInternalLoader=function(e){var t=this.hls.config,r=t.pLoader,i=t.loader,a=new(r||i)(t);return e.loader=a,this.loaders[e.type]=a,a},s.getInternalLoader=function(e){return this.loaders[e.type]},s.resetInternalLoader=function(e){this.loaders[e]&&delete this.loaders[e]},s.destroyInternalLoaders=function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}},s.destroy=function(){this.destroyInternalLoaders(),e.prototype.destroy.call(this)},s.onManifestLoading=function(e){this.load({url:e.url,type:a.MANIFEST,level:0,id:null,responseType:"text"})},s.onLevelLoading=function(e){this.load({url:e.url,type:a.LEVEL,level:e.level,id:e.id,responseType:"text"})},s.onAudioTrackLoading=function(e){this.load({url:e.url,type:a.AUDIO_TRACK,level:null,id:e.id,responseType:"text"})},s.onSubtitleTrackLoading=function(e){this.load({url:e.url,type:a.SUBTITLE_TRACK,level:null,id:e.id,responseType:"text"})},s.load=function(e){var t=this.hls.config;d.b.debug("Loading playlist of type "+e.type+", level: "+e.level+", id: "+e.id);var r,i,n,s,o=this.getInternalLoader(e);if(o){var l=o.context;if(l&&l.url===e.url)return d.b.trace("playlist request ongoing"),!1;d.b.warn("aborting previous loader for type: "+e.type),o.abort()}switch(e.type){case a.MANIFEST:r=t.manifestLoadingMaxRetry,i=t.manifestLoadingTimeOut,n=t.manifestLoadingRetryDelay,s=t.manifestLoadingMaxRetryTimeout;break;case a.LEVEL:r=0,s=0,n=0,i=t.levelLoadingTimeOut;break;default:r=t.levelLoadingMaxRetry,i=t.levelLoadingTimeOut,n=t.levelLoadingRetryDelay,s=t.levelLoadingMaxRetryTimeout}o=this.createInternalLoader(e);var u={timeout:i,maxRetry:r,retryDelay:n,maxRetryDelay:s},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};return d.b.debug("Calling internal loader delegate for URL: "+e.url),o.load(e,u,c),!0},s.loadsuccess=function(e,t,r,i){if(void 0===i&&(i=null),r.isSidxRequest)return this._handleSidxRequest(e,r),void this._handlePlaylistLoaded(e,t,r,i);if(this.resetInternalLoader(r.type),"string"!=typeof e.data)throw new Error('expected responseType of "text" for PlaylistLoader');var a=e.data;t.tload=P.now(),0===a.indexOf("#EXTM3U")?a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this._handleTrackOrLevelPlaylist(e,t,r,i):this._handleMasterPlaylist(e,t,r,i):this._handleManifestParsingError(e,r,"no EXTM3U delimiter",i)},s.loaderror=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!1,e)},s.loadtimeout=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!0)},s._handleMasterPlaylist=function(e,t,r,a){var n=this.hls,s=e.data,o=i.getResponseUrl(e,r),l=C.parseMasterPlaylist(s,o),c=l.levels,h=l.sessionData;if(c.length){var f=c.map((function(e){return{id:e.attrs.AUDIO,codec:e.audioCodec}})),g=C.parseMasterPlaylistMedia(s,o,"AUDIO",f),p=C.parseMasterPlaylistMedia(s,o,"SUBTITLES"),v=C.parseMasterPlaylistMedia(s,o,"CLOSED-CAPTIONS");if(g.length){var m=!1;g.forEach((function(e){e.url||(m=!0)})),!1===m&&c[0].audioCodec&&!c[0].attrs.AUDIO&&(d.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),g.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:{},url:""}))}n.trigger(u.a.MANIFEST_LOADED,{levels:c,audioTracks:g,subtitles:p,captions:v,url:o,stats:t,networkDetails:a,sessionData:h})}else this._handleManifestParsingError(e,r,"no level found in manifest",a)},s._handleTrackOrLevelPlaylist=function(e,t,r,n){var s=this.hls,d=r.id,c=r.level,h=r.type,f=i.getResponseUrl(e,r),g=Object(l.a)(d)?d:0,p=Object(l.a)(c)?c:g,v=i.mapContextToLevelType(r),m=C.parseLevelPlaylist(e.data,f,p,v,g);if(m.tload=t.tload,m.fragments.length){if(h===a.MANIFEST){var y={url:f,details:m};s.trigger(u.a.MANIFEST_LOADED,{levels:[y],audioTracks:[],url:f,stats:t,networkDetails:n,sessionData:null})}if(t.tparsed=P.now(),m.needSidxRanges){var b=m.initSegment.url;this.load({url:b,isSidxRequest:!0,type:h,level:c,levelDetails:m,id:d,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer"})}else r.levelDetails=m,this._handlePlaylistLoaded(e,t,r,n)}else s.trigger(u.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.LEVEL_EMPTY_ERROR,fatal:!1,url:f,reason:"no fragments found in level",level:"number"==typeof r.level?r.level:void 0})},s._handleSidxRequest=function(e,t){if("string"==typeof e.data)throw new Error("sidx request must be made with responseType of array buffer");var r=f.a.parseSegmentIndex(new Uint8Array(e.data));if(r){var i=r.references,a=t.levelDetails;i.forEach((function(e,t){var r=e.info;if(a){var i=a.fragments[t];0===i.byteRange.length&&i.setByteRange(String(1+r.end-r.start)+"@"+String(r.start))}})),a&&a.initSegment.setByteRange(String(r.moovEndOffset)+"@0")}},s._handleManifestParsingError=function(e,t,r,i){this.hls.trigger(u.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.MANIFEST_PARSING_ERROR,fatal:!0,url:e.url,reason:r,networkDetails:i})},s._handleNetworkError=function(e,t,r,i){var n,s;void 0===r&&(r=!1),void 0===i&&(i=null),d.b.info("A network error occured while loading a "+e.type+"-type playlist");var l=this.getInternalLoader(e);switch(e.type){case a.MANIFEST:n=r?o.a.MANIFEST_LOAD_TIMEOUT:o.a.MANIFEST_LOAD_ERROR,s=!0;break;case a.LEVEL:n=r?o.a.LEVEL_LOAD_TIMEOUT:o.a.LEVEL_LOAD_ERROR,s=!1;break;case a.AUDIO_TRACK:n=r?o.a.AUDIO_TRACK_LOAD_TIMEOUT:o.a.AUDIO_TRACK_LOAD_ERROR,s=!1;break;default:s=!1}l&&(l.abort(),this.resetInternalLoader(e.type));var c={type:o.b.NETWORK_ERROR,details:n,fatal:s,url:e.url,loader:l,context:e,networkDetails:t};i&&(c.response=i),this.hls.trigger(u.a.ERROR,c)},s._handlePlaylistLoaded=function(e,t,r,n){var s=r.type,o=r.level,l=r.id,d=r.levelDetails;if(d&&d.targetduration)if(i.canHaveQualityLevels(r.type))this.hls.trigger(u.a.LEVEL_LOADED,{details:d,level:o||0,id:l||0,stats:t,networkDetails:n});else switch(s){case a.AUDIO_TRACK:this.hls.trigger(u.a.AUDIO_TRACK_LOADED,{details:d,id:l,stats:t,networkDetails:n});break;case a.SUBTITLE_TRACK:this.hls.trigger(u.a.SUBTITLE_TRACK_LOADED,{details:d,id:l,stats:t,networkDetails:n})}else this._handleManifestParsingError(e,r,"invalid target duration",n)},i}(h);var M=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.FRAG_LOADING)||this).loaders={},r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){var t=this.loaders;for(var r in t){var i=t[r];i&&i.destroy()}this.loaders={},e.prototype.destroy.call(this)},a.onFragLoading=function(e){var t=e.frag,r=t.type,i=this.loaders,a=this.hls.config,n=a.fLoader,s=a.loader;t.loaded=0;var o,u,c,h=i[r];h&&(d.b.warn("abort previous fragment loader for type: "+r),h.abort()),h=i[r]=t.loader=a.fLoader?new n(a):new s(a),o={url:t.url,frag:t,responseType:"arraybuffer",progressData:!1};var f=t.byteRangeStartOffset,g=t.byteRangeEndOffset;Object(l.a)(f)&&Object(l.a)(g)&&(o.rangeStart=f,o.rangeEnd=g),u={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},h.load(o,u,c)},a.loadsuccess=function(e,t,r,i){void 0===i&&(i=null);var a=e.data,n=r.frag;n.loader=void 0,this.loaders[n.type]=void 0,this.hls.trigger(u.a.FRAG_LOADED,{payload:a,frag:n,stats:t,networkDetails:i})},a.loaderror=function(e,t,r){void 0===r&&(r=null);var i=t.frag,a=i.loader;a&&a.abort(),this.loaders[i.type]=void 0,this.hls.trigger(u.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.FRAG_LOAD_ERROR,fatal:!1,frag:t.frag,response:e,networkDetails:r})},a.loadtimeout=function(e,t,r){void 0===r&&(r=null);var i=t.frag,a=i.loader;a&&a.abort(),this.loaders[i.type]=void 0,this.hls.trigger(u.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t.frag,networkDetails:r})},a.loadprogress=function(e,t,r,i){void 0===i&&(i=null);var a=t.frag;a.loaded=e.loaded,this.hls.trigger(u.a.FRAG_LOAD_PROGRESS,{frag:a,stats:e,networkDetails:i})},i}(h);var F=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.KEY_LOADING)||this).loaders={},r.decryptkey=null,r.decrypturl=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){for(var t in this.loaders){var r=this.loaders[t];r&&r.destroy()}this.loaders={},e.prototype.destroy.call(this)},a.onKeyLoading=function(e){var t=e.frag,r=t.type,i=this.loaders[r];if(t.decryptdata){var a=t.decryptdata.uri;if(a!==this.decrypturl||null===this.decryptkey){var n=this.hls.config;if(i&&(d.b.warn("abort previous key loader for type:"+r),i.abort()),!a)return void d.b.warn("key uri is falsy");t.loader=this.loaders[r]=new n.loader(n),this.decrypturl=a,this.decryptkey=null;var s={url:a,frag:t,responseType:"arraybuffer"},o={timeout:n.fragLoadingTimeOut,maxRetry:0,retryDelay:n.fragLoadingRetryDelay,maxRetryDelay:n.fragLoadingMaxRetryTimeout},l={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};t.loader.load(s,o,l)}else this.decryptkey&&(t.decryptdata.key=this.decryptkey,this.hls.trigger(u.a.KEY_LOADED,{frag:t}))}else d.b.warn("Missing decryption data on fragment in onKeyLoading")},a.loadsuccess=function(e,t,r){var i=r.frag;i.decryptdata?(this.decryptkey=i.decryptdata.key=new Uint8Array(e.data),i.loader=void 0,delete this.loaders[i.type],this.hls.trigger(u.a.KEY_LOADED,{frag:i})):d.b.error("after key load, decryptdata unset")},a.loaderror=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(u.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.KEY_LOAD_ERROR,fatal:!1,frag:r,response:e})},a.loadtimeout=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(u.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},i}(h);var U="NOT_LOADED",N="APPENDING",B="PARTIAL",G="OK",K=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.BUFFER_APPENDED,u.a.FRAG_BUFFERED,u.a.FRAG_LOADED)||this).bufferPadding=.2,r.fragments=Object.create(null),r.timeRanges=Object.create(null),r.config=t.config,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.config=null,h.prototype.destroy.call(this),e.prototype.destroy.call(this)},a.getBufferedFrag=function(e,t){var r=this.fragments,i=Object.keys(r).filter((function(i){var a=r[i];if(a.body.type!==t)return!1;if(!a.buffered)return!1;var n=a.body;return n.startPTS<=e&&e<=n.endPTS}));if(0===i.length)return null;var a=i.pop();return r[a].body},a.detectEvictedFragments=function(e,t){var r=this;Object.keys(this.fragments).forEach((function(i){var a=r.fragments[i];if(a&&a.buffered){var n=a.range[e];if(n)for(var s=n.time,o=0;o<s.length;o++){var l=s[o];if(!r.isTimeBuffered(l.startPTS,l.endPTS,t)){r.removeFragment(a.body);break}}}}))},a.detectPartialFragments=function(e){var t=this,r=this.getFragmentKey(e),i=this.fragments[r];i&&(i.buffered=!0,Object.keys(this.timeRanges).forEach((function(r){if(e.hasElementaryStream(r)){var a=t.timeRanges[r];i.range[r]=t.getBufferedTimes(e.startPTS,e.endPTS,a)}})))},a.getBufferedTimes=function(e,t,r){for(var i,a,n=[],s=!1,o=0;o<r.length;o++){if(i=r.start(o)-this.bufferPadding,a=r.end(o)+this.bufferPadding,e>=i&&t<=a){n.push({startPTS:Math.max(e,r.start(o)),endPTS:Math.min(t,r.end(o))});break}if(e<a&&t>i)n.push({startPTS:Math.max(e,r.start(o)),endPTS:Math.min(t,r.end(o))}),s=!0;else if(t<=i)break}return{time:n,partial:s}},a.getFragmentKey=function(e){return e.type+"_"+e.level+"_"+e.urlId+"_"+e.sn},a.getPartialFragment=function(e){var t,r,i,a=this,n=null,s=0;return Object.keys(this.fragments).forEach((function(o){var l=a.fragments[o];a.isPartial(l)&&(r=l.body.startPTS-a.bufferPadding,i=l.body.endPTS+a.bufferPadding,e>=r&&e<=i&&(t=Math.min(e-r,i-e),s<=t&&(n=l.body,s=t)))})),n},a.getState=function(e){var t=this.getFragmentKey(e),r=this.fragments[t],i=U;return void 0!==r&&(i=r.buffered?!0===this.isPartial(r)?B:G:N),i},a.isPartial=function(e){return!0===e.buffered&&(void 0!==e.range.video&&!0===e.range.video.partial||void 0!==e.range.audio&&!0===e.range.audio.partial)},a.isTimeBuffered=function(e,t,r){for(var i,a,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,e>=i&&t<=a)return!0;if(t<=i)return!1}return!1},a.onFragLoaded=function(e){var t=e.frag;Object(l.a)(t.sn)&&!t.bitrateTest&&(this.fragments[this.getFragmentKey(t)]={body:t,range:Object.create(null),buffered:!1})},a.onBufferAppended=function(e){var t=this;this.timeRanges=e.timeRanges,Object.keys(this.timeRanges).forEach((function(e){var r=t.timeRanges[e];t.detectEvictedFragments(e,r)}))},a.onFragBuffered=function(e){this.detectPartialFragments(e.frag)},a.hasFragment=function(e){var t=this.getFragmentKey(e);return void 0!==this.fragments[t]},a.removeFragment=function(e){var t=this.getFragmentKey(e);delete this.fragments[t]},a.removeAllFragments=function(){this.fragments=Object.create(null)},i}(h),j={search:function(e,t){for(var r=0,i=e.length-1,a=null,n=null;r<=i;){var s=t(n=e[a=(r+i)/2|0]);if(s>0)r=a+1;else{if(!(s<0))return n;i=a-1}}return null}},H=function(){function e(){}return e.isBuffered=function(e,t){try{if(e)for(var r=e.buffered,i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}catch(e){}return!1},e.bufferInfo=function(e,t,r){try{if(e){var i,a=e.buffered,n=[];for(i=0;i<a.length;i++)n.push({start:a.start(i),end:a.end(i)});return this.bufferedInfo(n,t,r)}}catch(e){}return{len:0,start:t,end:t,nextStart:void 0}},e.bufferedInfo=function(e,t,r){e.sort((function(e,t){var r=e.start-t.start;return r||t.end-e.end}));var i=[];if(r)for(var a=0;a<e.length;a++){var n=i.length;if(n){var s=i[n-1].end;e[a].start-s<r?e[a].end>s&&(i[n-1].end=e[a].end):i.push(e[a])}else i.push(e[a])}else i=e;for(var o,l=0,u=t,d=t,c=0;c<i.length;c++){var h=i[c].start,f=i[c].end;if(t+r>=h&&t<f)u=h,l=(d=f)-t;else if(t+r<h){o=h;break}}return{len:l,start:u,end:d,nextStart:o}},e}(),V=r(8),Y=r(11),W=r(9);function q(){return window.MediaSource||window.WebKitMediaSource}var X=r(5);var z=function(e){var t,r;function i(){return e.apply(this,arguments)||this}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.prototype.trigger=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.emit.apply(this,[e,e].concat(r))},i}(V.EventEmitter),Q=Object(X.a)(),$=q()||{isTypeSupported:function(){return!1}},J=function(){function e(e,t){var r=this;this.hls=e,this.id=t;var i=this.observer=new z,a=e.config,n=function(t,i){(i=i||{}).frag=r.frag,i.id=r.id,e.trigger(t,i)};i.on(u.a.FRAG_DECRYPTED,n),i.on(u.a.FRAG_PARSING_INIT_SEGMENT,n),i.on(u.a.FRAG_PARSING_DATA,n),i.on(u.a.FRAG_PARSED,n),i.on(u.a.ERROR,n),i.on(u.a.FRAG_PARSING_METADATA,n),i.on(u.a.FRAG_PARSING_USERDATA,n),i.on(u.a.INIT_PTS_FOUND,n);var s={mp4:$.isTypeSupported("video/mp4"),mpeg:$.isTypeSupported("audio/mpeg"),mp3:$.isTypeSupported('audio/mp4; codecs="mp3"')},l=navigator.vendor;if(a.enableWorker&&"undefined"!=typeof Worker){var c;d.b.log("demuxing in webworker");try{c=this.w=Y(12),this.onwmsg=this.onWorkerMessage.bind(this),c.addEventListener("message",this.onwmsg),c.onerror=function(t){e.trigger(u.a.ERROR,{type:o.b.OTHER_ERROR,details:o.a.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:t.message+" ("+t.filename+":"+t.lineno+")"}})},c.postMessage({cmd:"init",typeSupported:s,vendor:l,id:t,config:JSON.stringify(a)})}catch(e){d.b.warn("Error in worker:",e),d.b.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),c&&Q.URL.revokeObjectURL(c.objectURL),this.demuxer=new W.a(i,s,a,l),this.w=void 0}}else this.demuxer=new W.a(i,s,a,l)}var t=e.prototype;return t.destroy=function(){var e=this.w;if(e)e.removeEventListener("message",this.onwmsg),e.terminate(),this.w=null;else{var t=this.demuxer;t&&(t.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)},t.push=function(e,t,r,i,a,n,s,o){var u=this.w,c=Object(l.a)(a.startPTS)?a.startPTS:a.start,h=a.decryptdata,f=this.frag,g=!(f&&a.cc===f.cc),p=!(f&&a.level===f.level),v=f&&a.sn===f.sn+1,m=!p&&v;if(g&&d.b.log(this.id+":discontinuity detected"),p&&d.b.log(this.id+":switch detected"),this.frag=a,u)u.postMessage({cmd:"demux",data:e,decryptdata:h,initSegment:t,audioCodec:r,videoCodec:i,timeOffset:c,discontinuity:g,trackSwitch:p,contiguous:m,duration:n,accurateTimeOffset:s,defaultInitPTS:o},e instanceof ArrayBuffer?[e]:[]);else{var y=this.demuxer;y&&y.push(e,h,t,r,i,c,g,p,m,n,s,o)}},t.onWorkerMessage=function(e){var t=e.data,r=this.hls;switch(t.event){case"init":Q.URL.revokeObjectURL(this.w.objectURL);break;case u.a.FRAG_PARSING_DATA:t.data.data1=new Uint8Array(t.data1),t.data2&&(t.data.data2=new Uint8Array(t.data2));default:t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data)}},e}();function Z(e,t,r){switch(t){case"audio":e.audioGroupIds||(e.audioGroupIds=[]),e.audioGroupIds.push(r);break;case"text":e.textGroupIds||(e.textGroupIds=[]),e.textGroupIds.push(r)}}function ee(e,t,r){var i=e[t],a=e[r],n=a.startPTS;Object(l.a)(n)?r>t?(i.duration=n-i.start,i.duration<0&&d.b.warn("negative duration computed for frag "+i.sn+",level "+i.level+", there should be some duration drift between playlist and fragment!")):(a.duration=i.start-n,a.duration<0&&d.b.warn("negative duration computed for frag "+a.sn+",level "+a.level+", there should be some duration drift between playlist and fragment!")):a.start=r>t?i.start+i.duration:Math.max(i.start-a.duration,0)}function te(e,t,r,i,a,n){var s=r;if(Object(l.a)(t.startPTS)){var o=Math.abs(t.startPTS-r);Object(l.a)(t.deltaPTS)?t.deltaPTS=Math.max(o,t.deltaPTS):t.deltaPTS=o,s=Math.max(r,t.startPTS),r=Math.min(r,t.startPTS),i=Math.max(i,t.endPTS),a=Math.min(a,t.startDTS),n=Math.max(n,t.endDTS)}var u=r-t.start;t.start=t.startPTS=r,t.maxStartPTS=s,t.endPTS=i,t.startDTS=a,t.endDTS=n,t.duration=i-r;var d,c,h,f=t.sn;if(!e||f<e.startSN||f>e.endSN)return 0;for(d=f-e.startSN,(c=e.fragments)[d]=t,h=d;h>0;h--)ee(c,h,h-1);for(h=d;h<c.length-1;h++)ee(c,h,h+1);return e.PTSKnown=!0,u}function re(e,t){t.initSegment&&e.initSegment&&(t.initSegment=e.initSegment);var r,i=0;if(ie(e,t,(function(e,a){i=e.cc-a.cc,Object(l.a)(e.startPTS)&&(a.start=a.startPTS=e.startPTS,a.endPTS=e.endPTS,a.duration=e.duration,a.backtracked=e.backtracked,a.dropped=e.dropped,r=a),t.PTSKnown=!0})),t.PTSKnown){if(i){d.b.log("discontinuity sliding from playlist, take drift into account");for(var a=t.fragments,n=0;n<a.length;n++)a[n].cc+=i}r?te(t,r,r.startPTS,r.endPTS,r.startDTS,r.endDTS):function(e,t){var r=t.startSN-e.startSN,i=e.fragments,a=t.fragments;if(r<0||r>i.length)return;for(var n=0;n<a.length;n++)a[n].start+=i[r].start}(e,t),t.PTSKnown=e.PTSKnown}}function ie(e,t,r){if(e&&t)for(var i=Math.max(e.startSN,t.startSN)-t.startSN,a=Math.min(e.endSN,t.endSN)-t.startSN,n=t.startSN-e.startSN,s=i;s<=a;s++){var o=e.fragments[n+s],l=t.fragments[s];if(!o||!l)break;r(o,l,s)}}function ae(e,t,r){var i=1e3*(t.averagetargetduration?t.averagetargetduration:t.targetduration),a=i/2;return e&&t.endSN===e.endSN&&(i=a),r&&(i=Math.max(a,i-(window.performance.now()-r))),Math.round(i)}var ne={toString:function(e){for(var t="",r=e.length,i=0;i<r;i++)t+="["+e.start(i).toFixed(3)+","+e.end(i).toFixed(3)+"]";return t}};function se(e,t){t.fragments.forEach((function(t){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}})),t.PTSKnown=!0}function oe(e,t,r){!function(e,t,r){if(function(e,t,r){var i=!1;return t&&t.details&&r&&(r.endCC>r.startCC||e&&e.cc<r.startCC)&&(i=!0),i}(e,r,t)){var i=function(e,t){var r=e.fragments,i=t.fragments;if(i.length&&r.length){var a=function(e,t){for(var r=null,i=0;i<e.length;i+=1){var a=e[i];if(a&&a.cc===t){r=a;break}}return r}(r,i[0].cc);if(a&&(!a||a.startPTS))return a;d.b.log("No frag in previous level to align on")}else d.b.log("No fragments to align")}(r.details,t);i&&(d.b.log("Adjusting PTS using last level due to CC increase within current level"),se(i.start,t))}}(e,r,t),!r.PTSKnown&&t&&function(e,t){if(t&&t.fragments.length){if(!e.hasProgramDateTime||!t.hasProgramDateTime)return;var r=t.fragments[0].programDateTime,i=(e.fragments[0].programDateTime-r)/1e3+t.fragments[0].start;Object(l.a)(i)&&(d.b.log("adjusting PTS using programDateTime delta, sliding:"+i.toFixed(3)),se(i,e))}}(r,t.details)}function le(e,t,r){if(null===t||!Array.isArray(e)||!e.length||!Object(l.a)(t))return null;if(t<(e[0].programDateTime||0))return null;if(t>=(e[e.length-1].endProgramDateTime||0))return null;r=r||0;for(var i=0;i<e.length;++i){var a=e[i];if(ce(t,r,a))return a}return null}function ue(e,t,r,i){void 0===r&&(r=0),void 0===i&&(i=0);var a=null;if(e?a=t[e.sn-t[0].sn+1]:0===r&&0===t[0].start&&(a=t[0]),a&&0===de(r,i,a))return a;var n=j.search(t,de.bind(null,r,i));return n||a}function de(e,t,r){void 0===e&&(e=0),void 0===t&&(t=0);var i=Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=e?1:r.start-i>e&&r.start?-1:0}function ce(e,t,r){var i=1e3*Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return(r.endProgramDateTime||0)-i>e}var he=function(){function e(e,t,r,i){this.config=e,this.media=t,this.fragmentTracker=r,this.hls=i,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1}var t=e.prototype;return t.poll=function(e){var t=this.config,r=this.media,i=this.stalled,a=r.currentTime,n=r.seeking,s=this.seeking&&!n,o=!this.seeking&&n;if(this.seeking=n,a===e){if((o||s)&&(this.stalled=null),!r.paused&&!r.ended&&0!==r.playbackRate&&r.buffered.length){var l=H.bufferInfo(r,a,0),u=l.len>0,c=l.nextStart||0;if(u||c){if(n){var h=l.len>2,f=!c||c-a>2&&!this.fragmentTracker.getPartialFragment(a);if(h||f)return;this.moved=!1}if(!this.moved&&this.stalled){var g=Math.max(c,l.start||0)-a;if(g>0&&g<=2)return void this._trySkipBufferHole(null)}var p=self.performance.now();if(null!==i){var v=p-i;!n&&v>=250&&this._reportStall(l.len);var m=H.bufferInfo(r,a,t.maxBufferHole);this._tryFixBufferStall(m,v)}else this.stalled=p}}}else if(this.moved=!0,null!==i){if(this.stallReported){var y=self.performance.now()-i;d.b.warn("playback not stuck anymore @"+a+", after "+Math.round(y)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}},t._tryFixBufferStall=function(e,t){var r=this.config,i=this.fragmentTracker,a=this.media.currentTime,n=i.getPartialFragment(a);if(n&&this._trySkipBufferHole(n))return;e.len>r.maxBufferHole&&t>1e3*r.highBufferWatchdogPeriod&&(d.b.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())},t._reportStall=function(e){var t=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,d.b.warn("Playback stalling at @"+r.currentTime+" due to low buffer (buffer="+e+")"),t.trigger(u.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:e}))},t._trySkipBufferHole=function(e){for(var t=this.config,r=this.hls,i=this.media,a=i.currentTime,n=0,s=0;s<i.buffered.length;s++){var l=i.buffered.start(s);if(a+t.maxBufferHole>=n&&a<l){var c=Math.max(l+.05,i.currentTime+.1);return d.b.warn("skipping hole, adjusting currentTime from "+a+" to "+c),this.moved=!0,this.stalled=null,i.currentTime=c,e&&r.trigger(u.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+a+" to "+c,frag:e}),c}n=i.buffered.end(s)}return 0},t._tryNudgeBuffer=function(){var e=this.config,t=this.hls,r=this.media,i=r.currentTime,a=(this.nudgeRetry||0)+1;if(this.nudgeRetry=a,a<e.nudgeMaxRetry){var n=i+a*e.nudgeOffset;d.b.warn("Nudging 'currentTime' from "+i+" to "+n),r.currentTime=n,t.trigger(u.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_NUDGE_ON_STALL,fatal:!1})}else d.b.error("Playhead still not moving while enough data buffered @"+i+" after "+e.nudgeMaxRetry+" nudges"),t.trigger(u.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_STALLED_ERROR,fatal:!0})},e}();function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ge=function(e){var t,r;function i(t){for(var r,i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];return(r=e.call.apply(e,[this,t].concat(a))||this)._boundTick=void 0,r._tickTimer=null,r._tickInterval=null,r._tickCallCount=0,r._boundTick=r.tick.bind(fe(r)),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},a.hasInterval=function(){return!!this._tickInterval},a.hasNextTick=function(){return!!this._tickTimer},a.setInterval=function(e){return!this._tickInterval&&(this._tickInterval=self.setInterval(this._boundTick,e),!0)},a.clearInterval=function(){return!!this._tickInterval&&(self.clearInterval(this._tickInterval),this._tickInterval=null,!0)},a.clearNextTick=function(){return!!this._tickTimer&&(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0)},a.tick=function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&(this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)),this._tickCallCount=0)},a.doTick=function(){},i}(h);var pe="STOPPED",ve="STARTING",me="IDLE",ye="PAUSED",be="KEY_LOADING",Te="FRAG_LOADING",Ee="FRAG_LOADING_WAITING_RETRY",Se="WAITING_TRACK",_e="PARSING",Re="PARSED",Ae="BUFFER_FLUSHING",ke="ENDED",we="ERROR",Le="WAITING_INIT_PTS",De="WAITING_LEVEL",Oe=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.doTick=function(){},a.startLoad=function(){},a.stopLoad=function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragmentTracker.removeFragment(e)),this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=pe},a._streamEnded=function(e,t){var r=this.fragCurrent,i=this.fragmentTracker;if(!t.live&&r&&!r.backtracked&&r.sn===t.endSN&&!e.nextStart){var a=i.getState(r);return a===B||a===G}return!1},a.onMediaSeeking=function(){var e=this.config,t=this.media,r=this.mediaBuffer,i=this.state,a=t?t.currentTime:null,n=H.bufferInfo(r||t,a,this.config.maxBufferHole);if(Object(l.a)(a)&&d.b.log("media seeking to "+a.toFixed(3)),i===Te){var s=this.fragCurrent;if(0===n.len&&s){var o=e.maxFragLookUpTolerance,u=s.start-o,c=s.start+s.duration+o;a<u||a>c?(s.loader&&(d.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),s.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=me):d.b.log("seeking outside of buffer but within currently loaded fragment range")}}else i===ke&&(0===n.len&&(this.fragPrevious=null,this.fragCurrent=null),this.state=me);t&&(this.lastCurrentTime=a),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=a),this.tick()},a.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},a.onHandlerDestroying=function(){this.stopLoad(),e.prototype.onHandlerDestroying.call(this)},a.onHandlerDestroyed=function(){this.state=pe,this.fragmentTracker=null},a.computeLivePosition=function(e,t){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,t.totalduration-r)},i}(ge);function Ce(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Ie,Pe=function(e){var t,r;function i(t,r){var i;return(i=e.call(this,t,u.a.MEDIA_ATTACHED,u.a.MEDIA_DETACHING,u.a.MANIFEST_LOADING,u.a.MANIFEST_PARSED,u.a.LEVEL_LOADED,u.a.LEVELS_UPDATED,u.a.KEY_LOADED,u.a.FRAG_LOADED,u.a.FRAG_LOAD_EMERGENCY_ABORTED,u.a.FRAG_PARSING_INIT_SEGMENT,u.a.FRAG_PARSING_DATA,u.a.FRAG_PARSED,u.a.ERROR,u.a.AUDIO_TRACK_SWITCHING,u.a.AUDIO_TRACK_SWITCHED,u.a.BUFFER_CREATED,u.a.BUFFER_APPENDED,u.a.BUFFER_FLUSHED)||this).fragmentTracker=r,i.config=t.config,i.audioCodecSwap=!1,i._state=pe,i.stallReported=!1,i.gapController=null,i.altAudio=!1,i.audioOnly=!1,i.bitrateTest=!1,i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,s,c,h=i.prototype;return h.startLoad=function(e){if(this.levels){var t=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(r.config.testBandwidth?(i=0,this.bitrateTest=!0):i=r.nextAutoLevel),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}t>0&&-1===e&&(d.b.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),e=t),this.state=me,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this.forceStartLoad=!0,this.state=pe},h.stopLoad=function(){this.forceStartLoad=!1,e.prototype.stopLoad.call(this)},h.doTick=function(){switch(this.state){case Ae:this.fragLoadError=0;break;case me:this._doTickIdle();break;case De:var e=this.levels[this.level];e&&e.details&&(this.state=me);break;case Ee:var t=window.performance.now(),r=this.retryDate;(!r||t>=r||this.media&&this.media.seeking)&&(d.b.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=me)}this._checkBuffer(),this._checkFragmentChanged()},h._doTickIdle=function(){var e=this.hls,t=e.config,r=this.media;if(void 0!==this.levelLastLoaded&&(r||!this.startFragRequested&&t.startFragPrefetch))if(this.altAudio&&this.audioOnly)this.demuxer.frag=null;else{var i;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=e.nextLoadLevel,n=this.levels[a];if(n){var s,o=n.bitrate;s=o?Math.max(8*t.maxBufferSize/o,t.maxBufferLength):t.maxBufferLength,s=Math.min(s,t.maxMaxBufferLength);var l=i<t.maxBufferHole?Math.max(2,t.maxBufferHole):t.maxBufferHole,c=H.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,l),h=c.len;if(!(h>=s)){d.b.trace("buffer length of "+h.toFixed(3)+" is below max of "+s.toFixed(3)+". checking for more payload ..."),this.level=e.nextLoadLevel=a;var f=n.details;if(!f||f.live&&this.levelLastLoaded!==a)this.state=De;else{if(this._streamEnded(c,f)){var g={};return this.altAudio&&(g.type="video"),this.hls.trigger(u.a.BUFFER_EOS,g),void(this.state=ke)}this._fetchPayloadOrEos(i,c,f)}}}}},h._fetchPayloadOrEos=function(e,t,r){var i=this.fragPrevious,a=(this.level,r.fragments),n=a.length;if(0!==n){var s,o=a[0].start,l=a[n-1].start+a[n-1].duration,u=t.end;if(r.initSegment&&!r.initSegment.data)s=r.initSegment;else if(r.live){var c=this.config.initialLiveManifestSize;if(n<c)return void d.b.warn("Can not start playback of a level, reason: not enough fragments "+n+" < "+c);if(null===(s=this._ensureFragmentAtLivePoint(r,u,o,l,i,a)))return}else u<o&&(s=a[0]);s||(s=this._findFragment(o,i,n,a,u,l,r)),s&&(s.encrypted?this._loadKey(s,r):this._loadFragment(s,r,e,u))}},h._ensureFragmentAtLivePoint=function(e,t,r,i,a,n){var s,o=this.hls.config,u=this.media,c=1/0;if(void 0!==o.liveMaxLatencyDuration?c=o.liveMaxLatencyDuration:Object(l.a)(o.liveMaxLatencyDurationCount)&&(c=o.liveMaxLatencyDurationCount*e.targetduration),t<Math.max(r-o.maxFragLookUpTolerance,i-c)){var h=this.liveSyncPosition=this.computeLivePosition(r,e);t=h,u&&!u.paused&&u.readyState&&u.duration>h&&h>u.currentTime&&(d.b.log("buffer end: "+t.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+h.toFixed(3)),u.currentTime=h),this.nextLoadPosition=h}if(e.PTSKnown&&t>i&&u&&u.readyState)return null;if(this.startFragRequested&&!e.PTSKnown&&a)if(e.hasProgramDateTime)d.b.log("live playlist, switching playlist, load frag with same PDT: "+a.programDateTime),s=le(n,a.endProgramDateTime,o.maxFragLookUpTolerance);else{var f=a.sn+1;if(f>=e.startSN&&f<=e.endSN){var g=n[f-e.startSN];a.cc===g.cc&&(s=g,d.b.log("live playlist, switching playlist, load frag with next SN: "+s.sn))}s||(s=j.search(n,(function(e){return a.cc-e.cc})))&&d.b.log("live playlist, switching playlist, load frag with same CC: "+s.sn)}return s},h._findFragment=function(e,t,r,i,a,n,s){var o,l=this.hls.config;a<n?o=ue(t,i,a,a>n-l.maxFragLookUpTolerance?0:l.maxFragLookUpTolerance):o=i[r-1];if(o){var u=o.sn-s.startSN,c=t&&o.level===t.level,h=i[u-1],f=i[u+1];if(t&&o.sn===t.sn)if(c&&!o.backtracked)if(o.sn<s.endSN){var g=t.deltaPTS;g&&g>l.maxBufferHole&&t.dropped&&u?(o=h,d.b.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")):(o=f,d.b.log("Re-loading fragment with SN: "+o.sn))}else o=null;else o.backtracked&&(f&&f.backtracked?(d.b.warn("Already backtracked from fragment "+f.sn+", will not backtrack to fragment "+o.sn+". Loading fragment "+f.sn),o=f):(d.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),o.dropped=0,h?(o=h).backtracked=!0:u&&(o=null)))}return o},h._loadKey=function(e,t){d.b.log("Loading key for "+e.sn+" of ["+t.startSN+" ,"+t.endSN+"],level "+this.level),this.state=be,this.hls.trigger(u.a.KEY_LOADING,{frag:e})},h._loadFragment=function(e,t,r,i){var a=this.fragmentTracker.getState(e);this.fragCurrent=e,"initSegment"!==e.sn&&(this.startFragRequested=!0),Object(l.a)(e.sn)&&!e.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),e.backtracked||a===U||a===B?(e.autoLevel=this.hls.autoLevelEnabled,e.bitrateTest=this.bitrateTest,d.b.log("Loading "+e.sn+" of ["+t.startSN+" ,"+t.endSN+"],level "+this.level+", currentTime:"+r.toFixed(3)+",bufferEnd:"+i.toFixed(3)),this.hls.trigger(u.a.FRAG_LOADING,{frag:e}),this.demuxer||(this.demuxer=new J(this.hls,"main")),this.state=Te):a===N&&this._reduceMaxBufferLength(e.duration)&&this.fragmentTracker.removeFragment(e)},h.getBufferedFrag=function(e){return this.fragmentTracker.getBufferedFrag(e,n.MAIN)},h.followingBufferedFrag=function(e){return e?this.getBufferedFrag(e.endPTS+.5):null},h._checkFragmentChanged=function(){var e,t,r=this.media;if(r&&r.readyState&&!1===r.seeking&&((t=r.currentTime)>this.lastCurrentTime&&(this.lastCurrentTime=t),H.isBuffered(r,t)?e=this.getBufferedFrag(t):H.isBuffered(r,t+.1)&&(e=this.getBufferedFrag(t+.1)),e)){var i=e;if(i!==this.fragPlaying){this.hls.trigger(u.a.FRAG_CHANGED,{frag:i});var a=i.level;this.fragPlaying&&this.fragPlaying.level===a||this.hls.trigger(u.a.LEVEL_SWITCHED,{level:a}),this.fragPlaying=i}}},h.immediateLevelSwitch=function(){if(d.b.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var e,t=this.media;t?(e=t.paused,t.pause()):e=!0,this.previouslyPaused=e}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},h.immediateLevelSwitchEnd=function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,H.isBuffered(e,e.currentTime)&&(e.currentTime-=1e-4),this.previouslyPaused||e.play())},h.nextLevelSwitch=function(){var e=this.media;if(e&&e.readyState){var t,r,i;if((r=this.getBufferedFrag(e.currentTime))&&r.startPTS>1&&this.flushMainBuffer(0,r.startPTS-1),e.paused)t=0;else{var a=this.hls.nextLoadLevel,n=this.levels[a],s=this.fragLastKbps;t=s&&this.fragCurrent?this.fragCurrent.duration*n.bitrate/(1e3*s)+1:0}if((i=this.getBufferedFrag(e.currentTime+t))&&(i=this.followingBufferedFrag(i))){var o=this.fragCurrent;o&&o.loader&&o.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(i.maxStartPTS,Number.POSITIVE_INFINITY)}}},h.flushMainBuffer=function(e,t){this.state=Ae;var r={startOffset:e,endOffset:t};this.altAudio&&(r.type="video"),this.hls.trigger(u.a.BUFFER_FLUSHING,r)},h.onMediaAttached=function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("seeked",this.onvseeked),t.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition),this.gapController=new he(r,t,this.fragmentTracker,this.hls)},h.onMediaDetaching=function(){var e=this.media;e&&e.ended&&(d.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach((function(e){e.details&&e.details.fragments.forEach((function(e){e.backtracked=void 0}))})),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.fragmentTracker.removeAllFragments(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()},h.onMediaSeeked=function(){var e=this.media,t=e?e.currentTime:void 0;Object(l.a)(t)&&d.b.log("media seeked to "+t.toFixed(3)),this.tick()},h.onManifestLoading=function(){d.b.log("trigger BUFFER_RESET"),this.hls.trigger(u.a.BUFFER_RESET),this.fragmentTracker.removeAllFragments(),this.stalled=!1,this.startPosition=this.lastCurrentTime=0},h.onManifestParsed=function(e){var t,r=!1,i=!1;e.levels.forEach((function(e){(t=e.audioCodec)&&(-1!==t.indexOf("mp4a.40.2")&&(r=!0),-1!==t.indexOf("mp4a.40.5")&&(i=!0))})),this.audioCodecSwitch=r&&i,this.audioCodecSwitch&&d.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.altAudio=e.altAudio,this.levels=e.levels,this.startFragRequested=!1;var a=this.config;(a.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(a.startPosition)},h.onLevelLoaded=function(e){var t=e.details,r=e.level,i=this.levels[this.levelLastLoaded],a=this.levels[r],n=t.totalduration,s=0;if(d.b.log("level "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+n),t.live){var o=a.details;o&&t.fragments.length>0?(re(o,t),s=t.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(s,o),t.PTSKnown&&Object(l.a)(s)?d.b.log("live playlist sliding:"+s.toFixed(3)):(d.b.log("live playlist - outdated PTS, unknown sliding"),oe(this.fragPrevious,i,t))):(d.b.log("live playlist - first load, unknown sliding"),t.PTSKnown=!1,oe(this.fragPrevious,i,t))}else t.PTSKnown=!1;if(a.details=t,this.levelLastLoaded=r,this.hls.trigger(u.a.LEVEL_UPDATED,{details:t,level:r}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var c=t.startTimeOffset;Object(l.a)(c)?(c<0&&(d.b.log("negative start time offset "+c+", count from end of last fragment"),c=s+n+c),d.b.log("start time offset found in playlist, adjust startPosition to "+c),this.startPosition=c):t.live?(this.startPosition=this.computeLivePosition(s,t),d.b.log("configure startPosition to "+this.startPosition)):this.startPosition=0,this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===De&&(this.state=me),this.tick()},h.onKeyLoaded=function(){this.state===be&&(this.state=me,this.tick())},h.onFragLoaded=function(e){var t=this.fragCurrent,r=this.hls,i=this.levels,a=this.media,n=e.frag;if(this.state===Te&&t&&"main"===n.type&&n.level===t.level&&n.sn===t.sn){var s=e.stats,o=i[t.level],l=o.details;if(this.bitrateTest=!1,this.stats=s,d.b.log("Loaded "+t.sn+" of ["+l.startSN+" ,"+l.endSN+"],level "+t.level),n.bitrateTest&&r.nextLoadLevel)this.state=me,this.startFragRequested=!1,s.tparsed=s.tbuffered=window.performance.now(),r.trigger(u.a.FRAG_BUFFERED,{stats:s,frag:t,id:"main"}),this.tick();else if("initSegment"===n.sn)this.state=me,s.tparsed=s.tbuffered=window.performance.now(),l.initSegment.data=e.payload,r.trigger(u.a.FRAG_BUFFERED,{stats:s,frag:t,id:"main"}),this.tick();else{d.b.log("Parsing "+t.sn+" of ["+l.startSN+" ,"+l.endSN+"],level "+t.level+", cc "+t.cc),this.state=_e,this.pendingBuffering=!0,this.appended=!1,n.bitrateTest&&(n.bitrateTest=!1,this.fragmentTracker.onFragLoaded({frag:n}));var c=!(a&&a.seeking)&&(l.PTSKnown||!l.live),h=l.initSegment?l.initSegment.data:[],f=this._getAudioCodec(o);(this.demuxer=this.demuxer||new J(this.hls,"main")).push(e.payload,h,f,o.videoCodec,t,l.totalduration,c)}}this.fragLoadError=0},h.onFragParsingInitSegment=function(e){var t=this.fragCurrent,r=e.frag;if(t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e){var i,a,n=e.tracks;if(this.audioOnly=n.audio&&!n.video,this.altAudio&&!this.audioOnly&&delete n.audio,a=n.audio){var s=this.levels[this.level].audioCodec,o=navigator.userAgent.toLowerCase();s&&this.audioCodecSwap&&(d.b.log("swapping playlist audio codec"),s=-1!==s.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==a.metadata.channelCount&&-1===o.indexOf("firefox")&&(s="mp4a.40.5"),-1!==o.indexOf("android")&&"audio/mpeg"!==a.container&&(s="mp4a.40.2",d.b.log("Android: force audio codec to "+s)),a.levelCodec=s,a.id=e.id}for(i in(a=n.video)&&(a.levelCodec=this.levels[this.level].videoCodec,a.id=e.id),this.hls.trigger(u.a.BUFFER_CODECS,n),n){a=n[i],d.b.log("main track:"+i+",container:"+a.container+",codecs[level/parsed]=["+a.levelCodec+"/"+a.codec+"]");var l=a.initSegment;l&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(u.a.BUFFER_APPENDING,{type:i,data:l,parent:"main",content:"initSegment"}))}this.tick()}},h.onFragParsingData=function(e){var t=this,r=this.fragCurrent,i=e.frag;if(r&&"main"===e.id&&i.sn===r.sn&&i.level===r.level&&("audio"!==e.type||!this.altAudio)&&this.state===_e){var a=this.levels[this.level],n=r;if(Object(l.a)(e.endPTS)||(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),!0===e.hasAudio&&n.addElementaryStream(p.AUDIO),!0===e.hasVideo&&n.addElementaryStream(p.VIDEO),d.b.log("Parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb+",dropped:"+(e.dropped||0)),"video"===e.type)if(n.dropped=e.dropped,n.dropped)if(n.backtracked)d.b.warn("Already backtracked on this fragment, appending with the gap",n.sn);else{var s=a.details;if(!s||n.sn!==s.startSN)return d.b.warn("missing video frame(s), backtracking fragment",n.sn),this.fragmentTracker.removeFragment(n),n.backtracked=!0,this.nextLoadPosition=e.startPTS,this.state=me,this.fragPrevious=n,void this.tick();d.b.warn("missing video frame(s) on first frag, appending with gap",n.sn)}else n.backtracked=!1;var o=te(a.details,n,e.startPTS,e.endPTS,e.startDTS,e.endDTS),c=this.hls;c.trigger(u.a.LEVEL_PTS_UPDATED,{details:a.details,level:this.level,drift:o,type:e.type,start:e.startPTS,end:e.endPTS}),[e.data1,e.data2].forEach((function(r){r&&r.length&&t.state===_e&&(t.appended=!0,t.pendingBuffering=!0,c.trigger(u.a.BUFFER_APPENDING,{type:e.type,data:r,parent:"main",content:"data"}))})),this.tick()}},h.onFragParsed=function(e){var t=this.fragCurrent,r=e.frag;t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e&&(this.stats.tparsed=window.performance.now(),this.state=Re,this._checkAppendedParsed())},h.onAudioTrackSwitching=function(e){var t=!!e.url,r=e.id;if(!t){if(this.mediaBuffer!==this.media){d.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var i=this.fragCurrent;i.loader&&(d.b.log("switching to main audio track, cancel main fragment load"),i.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=me}var a=this.hls;a.trigger(u.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),a.trigger(u.a.AUDIO_TRACK_SWITCHED,{id:r}),this.altAudio=!1}},h.onAudioTrackSwitched=function(e){var t=e.id,r=!!this.hls.audioTracks[t].url;if(r){var i=this.videoBuffer;i&&this.mediaBuffer!==i&&(d.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()},h.onBufferCreated=function(e){var t,r,i=e.tracks,a=!1;for(var n in i){var s=i[n];"main"===s.id?(r=n,t=s,"video"===n&&(this.videoBuffer=i[n].buffer)):a=!0}a&&t?(d.b.log("alternate track found, use "+r+".buffered to schedule main fragment loading"),this.mediaBuffer=t.buffer):this.mediaBuffer=this.media},h.onBufferAppended=function(e){if("main"===e.parent){var t=this.state;t!==_e&&t!==Re||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}},h._checkAppendedParsed=function(){if(!(this.state!==Re||this.appended&&this.pendingBuffering)){var e=this.fragCurrent;if(e){var t=this.mediaBuffer?this.mediaBuffer:this.media;d.b.log("main buffered : "+ne.toString(t.buffered)),this.fragPrevious=e;var r=this.stats;r.tbuffered=window.performance.now(),this.fragLastKbps=Math.round(8*r.total/(r.tbuffered-r.tfirst)),this.hls.trigger(u.a.FRAG_BUFFERED,{stats:r,frag:e,id:"main"}),this.state=me}(this.loadedmetadata||this.startPosition<=0)&&this.tick()}},h.onError=function(e){var t=e.frag||this.fragCurrent;if(!t||"main"===t.type){var r=!!this.media&&H.isBuffered(this.media,this.media.currentTime)&&H.isBuffered(this.media,this.media.currentTime+.5);switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:case o.a.KEY_LOAD_ERROR:case o.a.KEY_LOAD_TIMEOUT:if(!e.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var i=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);d.b.warn("mediaController: frag loading failed, retry in "+i+" ms"),this.retryDate=window.performance.now()+i,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=Ee}else d.b.error("mediaController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=we;break;case o.a.LEVEL_LOAD_ERROR:case o.a.LEVEL_LOAD_TIMEOUT:this.state!==we&&(e.fatal?(this.state=we,d.b.warn("streamController: "+e.details+",switch to "+this.state+" state ...")):e.levelRetry||this.state!==De||(this.state=me));break;case o.a.BUFFER_FULL_ERROR:"main"!==e.parent||this.state!==_e&&this.state!==Re||(r?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=me):(d.b.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)))}}},h._reduceMaxBufferLength=function(e){var t=this.config;return t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,d.b.warn("main:reduce max buffer length to "+t.maxMaxBufferLength+"s"),!0)},h._checkBuffer=function(){var e=this.media;if(e&&0!==e.readyState){var t=(this.mediaBuffer?this.mediaBuffer:e).buffered;!this.loadedmetadata&&t.length?(this.loadedmetadata=!0,this._seekToStartPos()):this.immediateSwitch?this.immediateLevelSwitchEnd():this.gapController.poll(this.lastCurrentTime,t)}},h.onFragLoadEmergencyAborted=function(){this.state=me,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()},h.onBufferFlushed=function(){var e=this.mediaBuffer?this.mediaBuffer:this.media;if(e){var t=this.audioOnly?p.AUDIO:p.VIDEO;this.fragmentTracker.detectEvictedFragments(t,e.buffered)}this.state=me,this.fragPrevious=null},h.onLevelsUpdated=function(e){this.levels=e.levels},h.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},h._seekToStartPos=function(){var e=this.media,t=this.startPosition,r=e.currentTime;if(r!==t&&t>=0){if(e.seeking)return void d.b.log("could not seek to "+t+", already seeking at "+r);d.b.log("seek to target start position "+t+" from current time "+r+". ready state "+e.readyState),e.currentTime=t}},h._getAudioCodec=function(e){var t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&(d.b.log("swapping playlist audio codec"),t&&(t=-1!==t.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),t},a=i,(s=[{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,d.b.log("main stream-controller: "+t+"->"+e),this.hls.trigger(u.a.STREAM_STATE_TRANSITION,{previousState:t,nextState:e})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var e=this.media;if(e){var t=this.getBufferedFrag(e.currentTime);if(t)return t.level}return-1}},{key:"nextBufferedFrag",get:function(){var e=this.media;return e?this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)):null}},{key:"nextLevel",get:function(){var e=this.nextBufferedFrag;return e?e.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(e){this._liveSyncPosition=e}}])&&Ce(a.prototype,s),c&&Ce(a,c),i}(Oe);function xe(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Me=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.MANIFEST_LOADED,u.a.LEVEL_LOADED,u.a.AUDIO_TRACK_SWITCHED,u.a.FRAG_LOADED,u.a.ERROR)||this).canload=!1,r.currentLevelIndex=null,r.manualLevelIndex=-1,r.timer=null,Ie=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,l=i.prototype;return l.onHandlerDestroying=function(){this.clearTimer(),this.manualLevelIndex=-1},l.clearTimer=function(){null!==this.timer&&(clearTimeout(this.timer),this.timer=null)},l.startLoad=function(){var e=this._levels;this.canload=!0,this.levelRetryCount=0,e&&e.forEach((function(e){e.loadError=0;var t=e.details;t&&t.live&&(e.details=void 0)})),null!==this.timer&&this.loadLevel()},l.stopLoad=function(){this.canload=!1},l.onManifestLoaded=function(e){var t,r=[],i=[],a={},n=null,s=!1,l=!1;if(e.levels.forEach((function(e){var t=e.attrs;e.loadError=0,e.fragmentError=!1,s=s||!!e.videoCodec,l=l||!!e.audioCodec,Ie&&e.audioCodec&&-1!==e.audioCodec.indexOf("mp4a.40.34")&&(e.audioCodec=void 0),(n=a[e.bitrate])?n.url.push(e.url):(e.url=[e.url],e.urlId=0,a[e.bitrate]=e,r.push(e)),t&&(t.AUDIO&&Z(n||e,"audio",t.AUDIO),t.SUBTITLES&&Z(n||e,"text",t.SUBTITLES))})),s&&l&&(r=r.filter((function(e){return!!e.videoCodec}))),r=r.filter((function(e){var t=e.audioCodec,r=e.videoCodec;return(!t||A(t,"audio"))&&(!r||A(r,"video"))})),e.audioTracks&&(i=e.audioTracks.filter((function(e){return!e.audioCodec||A(e.audioCodec,"audio")}))).forEach((function(e,t){e.id=t})),r.length>0){t=r[0].bitrate,r.sort((function(e,t){return e.bitrate-t.bitrate})),this._levels=r;for(var c=0;c<r.length;c++)if(r[c].bitrate===t){this._firstLevel=c,d.b.log("manifest loaded,"+r.length+" level(s) found, first bitrate:"+t);break}var h=l&&!s;this.hls.trigger(u.a.MANIFEST_PARSED,{levels:r,audioTracks:i,firstLevel:this._firstLevel,stats:e.stats,audio:l,video:s,altAudio:!h&&i.some((function(e){return!!e.url}))})}else this.hls.trigger(u.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:this.hls.url,reason:"no level with compatible codecs found in manifest"})},l.setLevelInternal=function(e){var t=this._levels,r=this.hls;if(e>=0&&e<t.length){if(this.clearTimer(),this.currentLevelIndex!==e){d.b.log("switching to level "+e),this.currentLevelIndex=e;var i=t[e];i.level=e,r.trigger(u.a.LEVEL_SWITCHING,i)}var a=t[e],n=a.details;if(!n||n.live){var s=a.urlId;r.trigger(u.a.LEVEL_LOADING,{url:a.url[s],level:e,id:s})}}else r.trigger(u.a.ERROR,{type:o.b.OTHER_ERROR,details:o.a.LEVEL_SWITCH_ERROR,level:e,fatal:!1,reason:"invalid level idx"})},l.onError=function(e){if(e.fatal)e.type===o.b.NETWORK_ERROR&&this.clearTimer();else{var t,r=!1,i=!1;switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:case o.a.KEY_LOAD_ERROR:case o.a.KEY_LOAD_TIMEOUT:t=e.frag.level,i=!0;break;case o.a.LEVEL_LOAD_ERROR:case o.a.LEVEL_LOAD_TIMEOUT:t=e.context.level,r=!0;break;case o.a.REMUX_ALLOC_ERROR:t=e.level,r=!0}void 0!==t&&this.recoverLevel(e,t,r,i)}},l.recoverLevel=function(e,t,r,i){var a,n,s,o=this,l=this.hls.config,u=e.details,c=this._levels[t];if(c.loadError++,c.fragmentError=i,r){if(!(this.levelRetryCount+1<=l.levelLoadingMaxRetry))return d.b.error("level controller, cannot recover from "+u+" error"),this.currentLevelIndex=null,this.clearTimer(),void(e.fatal=!0);n=Math.min(Math.pow(2,this.levelRetryCount)*l.levelLoadingRetryDelay,l.levelLoadingMaxRetryTimeout),this.timer=setTimeout((function(){return o.loadLevel()}),n),e.levelRetry=!0,this.levelRetryCount++,d.b.warn("level controller, "+u+", retry in "+n+" ms, current retry count is "+this.levelRetryCount)}(r||i)&&((a=c.url.length)>1&&c.loadError<a?(c.urlId=(c.urlId+1)%a,c.details=void 0,d.b.warn("level controller, "+u+" for level "+t+": switching to redundant URL-id "+c.urlId)):-1===this.manualLevelIndex?(s=0===t?this._levels.length-1:t-1,d.b.warn("level controller, "+u+": switch to "+s),this.hls.nextAutoLevel=this.currentLevelIndex=s):i&&(d.b.warn("level controller, "+u+": reload a fragment"),this.currentLevelIndex=null))},l.onFragLoaded=function(e){var t=e.frag;if(void 0!==t&&"main"===t.type){var r=this._levels[t.level];void 0!==r&&(r.fragmentError=!1,r.loadError=0,this.levelRetryCount=0)}},l.onLevelLoaded=function(e){var t=this,r=e.level,i=e.details;if(r===this.currentLevelIndex){var a=this._levels[r];if(a.fragmentError||(a.loadError=0,this.levelRetryCount=0),i.live){var n=ae(a.details,i,e.stats.trequest);d.b.log("live playlist, reload in "+Math.round(n)+" ms"),this.timer=setTimeout((function(){return t.loadLevel()}),n)}else this.clearTimer()}},l.onAudioTrackSwitched=function(e){var t=this.hls.audioTracks[e.id].groupId,r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){for(var i=-1,a=0;a<r.audioGroupIds.length;a++)if(r.audioGroupIds[a]===t){i=a;break}i!==r.urlId&&(r.urlId=i,this.startLoad())}},l.loadLevel=function(){if(d.b.debug("call to loadLevel"),null!==this.currentLevelIndex&&this.canload){var e=this._levels[this.currentLevelIndex];if("object"==typeof e&&e.url.length>0){var t=this.currentLevelIndex,r=e.urlId,i=e.url[r];d.b.log("Attempt loading level index "+t+" with URL-id "+r),this.hls.trigger(u.a.LEVEL_LOADING,{url:i,level:t,id:r})}}},l.removeLevel=function(e,t){var r=this.levels.filter((function(r,i){return i!==e||r.url.length>1&&void 0!==t&&(r.url=r.url.filter((function(e,r){return r!==t})),r.urlId=0,!0)})).map((function(e,t){var r=e.details;return r&&r.fragments&&r.fragments.forEach((function(e){e.level=t})),e}));this._levels=r,this.hls.trigger(u.a.LEVELS_UPDATED,{levels:r})},a=i,(n=[{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(e){var t=this._levels;t&&(e=Math.min(e,t.length-1),this.currentLevelIndex===e&&t[e].details||this.setLevelInternal(e))}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(e){this.manualLevelIndex=e,void 0===this._startLevel&&(this._startLevel=e),-1!==e&&(this.level=e)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(e){this._firstLevel=e}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var e=this.hls.config.startLevel;return void 0!==e?e:this._firstLevel}return this._startLevel},set:function(e){this._startLevel=e}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(e){this.level=e,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=e)}}])&&xe(a.prototype,n),s&&xe(a,s),i}(h),Fe=r(4);function Ue(e,t){var r;try{r=new Event("addtrack")}catch(e){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=e,t.dispatchEvent(r)}function Ne(e){if(null==e?void 0:e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[0])}var Be=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.MEDIA_ATTACHED,u.a.MEDIA_DETACHING,u.a.FRAG_PARSING_METADATA,u.a.LIVE_BACK_BUFFER_REACHED)||this).id3Track=void 0,r.media=void 0,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){h.prototype.destroy.call(this)},a.onMediaAttached=function(e){this.media=e.media,this.media},a.onMediaDetaching=function(){Ne(this.id3Track),this.id3Track=void 0,this.media=void 0},a.getID3Track=function(e){for(var t=0;t<e.length;t++){var r=e[t];if("metadata"===r.kind&&"id3"===r.label)return Ue(r,this.media),r}return this.media.addTextTrack("metadata","id3")},a.onFragParsingMetadata=function(e){var t=e.frag,r=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var i=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,a=0;a<r.length;a++){var n=Fe.a.getID3Frames(r[a].data);if(n){var s=Math.max(r[a].pts,0),o=a<r.length-1?r[a+1].pts:t.endPTS;o||(o=t.start+t.duration),s===o?o+=1e-4:s>o&&(d.b.warn("detected an id3 sample with endTime < startTime, adjusting endTime to (startTime + 0.25)"),o=s+.25);for(var l=0;l<n.length;l++){var u=n[l];if(!Fe.a.isTimeStampFrame(u)){var c=new i(s,o,"");c.value=u,this.id3Track.addCue(c)}}}}},a.onLiveBackBufferReached=function(e){var t=e.bufferEnd,r=this.id3Track;if(r&&r.cues&&r.cues.length){var i=function(e,t){if(t<e[0].endTime)return e[0];if(t>e[e.length-1].endTime)return e[e.length-1];for(var r=0,i=e.length-1;r<=i;){var a=Math.floor((i+r)/2);if(t<e[a].endTime)i=a-1;else{if(!(t>e[a].endTime))return e[a];r=a+1}}return e[r].endTime-t<t-e[i].endTime?e[r]:e[i]}(r.cues,t);if(i)for(;r.cues[0]!==i;)r.removeCue(r.cues[0])}},i}(h);var Ge=function(){function e(e){this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}var t=e.prototype;return t.sample=function(e,t){var r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e},t.getTotalWeight=function(){return this.totalWeight_},t.getEstimate=function(){if(this.alpha_){var e=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/e}return this.estimate_},e}(),Ke=function(){function e(e,t,r,i){this.hls=void 0,this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.hls=e,this.defaultEstimate_=i,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new Ge(t),this.fast_=new Ge(r)}var t=e.prototype;return t.sample=function(e,t){var r=(e=Math.max(e,this.minDelayMs_))/1e3,i=8*t/r;this.fast_.sample(r,i),this.slow_.sample(r,i)},t.canEstimate=function(){var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_},t.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},t.destroy=function(){},e}();function je(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var He=window.performance,Ve=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.FRAG_LOADING,u.a.FRAG_LOADED,u.a.FRAG_BUFFERED,u.a.ERROR)||this).lastLoadedFragLevel=0,r._nextAutoLevel=-1,r.hls=t,r.timer=null,r._bwEstimator=null,r.onCheck=r._abandonRulesCheck.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,c=i.prototype;return c.destroy=function(){this.clearTimer(),h.prototype.destroy.call(this)},c.onFragLoading=function(e){var t=e.frag;if("main"===t.type&&(this.timer||(this.fragCurrent=t,this.timer=setInterval(this.onCheck,100)),!this._bwEstimator)){var r,i,a=this.hls,n=a.config,s=t.level;a.levels[s].details.live?(r=n.abrEwmaFastLive,i=n.abrEwmaSlowLive):(r=n.abrEwmaFastVoD,i=n.abrEwmaSlowVoD),this._bwEstimator=new Ke(a,i,r,n.abrEwmaDefaultEstimate)}},c._abandonRulesCheck=function(){var e=this.hls,t=e.media,r=this.fragCurrent;if(r){var i=r.loader;if(!i||i.stats&&i.stats.aborted)return d.b.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);var a=i.stats;if(t&&a&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&r.autoLevel&&r.level){var n=He.now()-a.trequest,s=Math.abs(t.playbackRate);if(n>500*r.duration/s){var o=e.levels,l=Math.max(1,a.bw?a.bw/8:1e3*a.loaded/n),c=o[r.level];if(!c)return;var h=c.realBitrate?Math.max(c.realBitrate,c.bitrate):c.bitrate,f=a.total?a.total:Math.max(a.loaded,Math.round(r.duration*h/8)),g=t.currentTime,p=(f-a.loaded)/l,v=(H.bufferInfo(t,g,e.config.maxBufferHole).end-g)/s;if(v<2*r.duration/s&&p>v){var m,y=e.minAutoLevel;for(m=r.level-1;m>y;m--){var b=o[m].realBitrate?Math.max(o[m].realBitrate,o[m].bitrate):o[m].bitrate;if(r.duration*b/(6.4*l)<v)break}void 0<p&&(d.b.warn("loading too slow, abort fragment loading and switch to level "+m+":fragLoadedDelay["+m+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+(void 0).toFixed(1)+"<"+p.toFixed(1)+":"+v.toFixed(1)),e.nextLoadLevel=m,this._bwEstimator.sample(n,a.loaded),i.abort(),this.clearTimer(),e.trigger(u.a.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:a}))}}}}},c.onFragLoaded=function(e){var t=e.frag;if("main"===t.type&&Object(l.a)(t.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=t.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var r=this.hls.levels[t.level],i=(r.loaded?r.loaded.bytes:0)+e.stats.loaded,a=(r.loaded?r.loaded.duration:0)+e.frag.duration;r.loaded={bytes:i,duration:a},r.realBitrate=Math.round(8*i/a)}if(e.frag.bitrateTest){var n=e.stats;n.tparsed=n.tbuffered=n.tload,this.onFragBuffered(e)}}},c.onFragBuffered=function(e){var t=e.stats,r=e.frag;if(!0!==t.aborted&&"main"===r.type&&Object(l.a)(r.sn)&&(!r.bitrateTest||t.tload===t.tbuffered)){var i=t.tparsed-t.trequest;d.b.log("latency/loading/parsing/append/kbps:"+Math.round(t.tfirst-t.trequest)+"/"+Math.round(t.tload-t.tfirst)+"/"+Math.round(t.tparsed-t.tload)+"/"+Math.round(t.tbuffered-t.tparsed)+"/"+Math.round(8*t.loaded/(t.tbuffered-t.trequest))),this._bwEstimator.sample(i,t.loaded),t.bwEstimate=this._bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=i/1e3:this.bitrateTestDelay=0}},c.onError=function(e){switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:this.clearTimer()}},c.clearTimer=function(){clearInterval(this.timer),this.timer=null},c._findBestLevel=function(e,t,r,i,a,n,s,o,l){for(var u=a;u>=i;u--){var c=l[u];if(c){var h=c.details,f=h?h.totalduration/h.fragments.length:t,g=!!h&&h.live,p=void 0;p=u<=e?s*r:o*r;var v=l[u].realBitrate?Math.max(l[u].realBitrate,l[u].bitrate):l[u].bitrate,m=v*f/p;if(d.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+u+"/"+Math.round(p)+"/"+v+"/"+f+"/"+n+"/"+m),p>v&&(!m||g&&!this.bitrateTestDelay||m<n))return u}}return-1},a=i,(n=[{key:"nextAutoLevel",get:function(){var e=this._nextAutoLevel,t=this._bwEstimator;if(!(-1===e||t&&t.canEstimate()))return e;var r=this._nextABRAutoLevel;return-1!==e&&(r=Math.min(e,r)),r},set:function(e){this._nextAutoLevel=e}},{key:"_nextABRAutoLevel",get:function(){var e=this.hls,t=e.maxAutoLevel,r=e.levels,i=e.config,a=e.minAutoLevel,n=e.media,s=this.lastLoadedFragLevel,o=this.fragCurrent?this.fragCurrent.duration:0,l=n?n.currentTime:0,u=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,c=this._bwEstimator?this._bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,h=(H.bufferInfo(n,l,i.maxBufferHole).end-l)/u,f=this._findBestLevel(s,o,c,a,t,h,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(f>=0)return f;d.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var g=o?Math.min(o,i.maxStarvationDelay):i.maxStarvationDelay,p=i.abrBandWidthFactor,v=i.abrBandWidthUpFactor;if(0===h){var m=this.bitrateTestDelay;m&&(g=(o?Math.min(o,i.maxLoadingDelay):i.maxLoadingDelay)-m,d.b.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*g)+" ms"),p=v=1)}return f=this._findBestLevel(s,o,c,a,t,h+g,p,v,r),Math.max(f,0)}}])&&je(a.prototype,n),s&&je(a,s),i}(h);var Ye=q(),We=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.MEDIA_ATTACHING,u.a.MEDIA_DETACHING,u.a.MANIFEST_PARSED,u.a.BUFFER_RESET,u.a.BUFFER_APPENDING,u.a.BUFFER_CODECS,u.a.BUFFER_EOS,u.a.BUFFER_FLUSHING,u.a.LEVEL_PTS_UPDATED,u.a.LEVEL_UPDATED)||this)._msDuration=null,r._levelDuration=null,r._levelTargetDuration=10,r._live=null,r._objectUrl=null,r._needsFlush=!1,r._needsEos=!1,r.config=void 0,r.audioTimestampOffset=void 0,r.bufferCodecEventsExpected=0,r._bufferCodecEventsTotal=0,r.media=null,r.mediaSource=null,r.segments=[],r.parent=void 0,r.appending=!1,r.appended=0,r.appendError=0,r.flushBufferCounter=0,r.tracks={},r.pendingTracks={},r.sourceBuffer={},r.flushRange=[],r._onMediaSourceOpen=function(){d.b.log("media source opened"),r.hls.trigger(u.a.MEDIA_ATTACHED,{media:r.media});var e=r.mediaSource;e&&e.removeEventListener("sourceopen",r._onMediaSourceOpen),r.checkPendingTracks()},r._onMediaSourceClose=function(){d.b.log("media source closed")},r._onMediaSourceEnded=function(){d.b.log("media source ended")},r._onSBUpdateEnd=function(){if(r.audioTimestampOffset&&r.sourceBuffer.audio){var e=r.sourceBuffer.audio;d.b.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+r.audioTimestampOffset),e.timestampOffset=r.audioTimestampOffset,delete r.audioTimestampOffset}r._needsFlush&&r.doFlush(),r._needsEos&&r.checkEos(),r.appending=!1;var t=r.parent,i=r.segments.reduce((function(e,r){return r.parent===t?e+1:e}),0),a={},n=r.sourceBuffer;for(var s in n){var o=n[s];if(!o)throw Error("handling source buffer update end error: source buffer for "+s+" uninitilized and unable to update buffered TimeRanges.");a[s]=o.buffered}r.hls.trigger(u.a.BUFFER_APPENDED,{parent:t,pending:i,timeRanges:a}),r._needsFlush||r.doAppending(),r.updateMediaElementDuration(),0===i&&r.flushLiveBackBuffer()},r._onSBUpdateError=function(e){d.b.error("sourceBuffer error:",e),r.hls.trigger(u.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_APPENDING_ERROR,fatal:!1})},r.config=t.config,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){h.prototype.destroy.call(this)},a.onLevelPtsUpdated=function(e){var t=e.type,r=this.tracks.audio;if("audio"===t&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio;if(!i)throw Error("Level PTS Updated and source buffer for audio uninitalized");if(Math.abs(i.timestampOffset-e.start)>.1){var a=i.updating;try{i.abort()}catch(e){d.b.warn("can not abort audio buffer: "+e)}a?this.audioTimestampOffset=e.start:(d.b.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+e.start),i.timestampOffset=e.start)}}},a.onManifestParsed=function(e){var t=2;(e.audio&&!e.video||!e.altAudio)&&(t=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=t,d.b.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},a.onMediaAttaching=function(e){var t=this.media=e.media;if(t&&Ye){var r=this.mediaSource=new Ye;r.addEventListener("sourceopen",this._onMediaSourceOpen),r.addEventListener("sourceended",this._onMediaSourceEnded),r.addEventListener("sourceclose",this._onMediaSourceClose),t.src=window.URL.createObjectURL(r),this._objectUrl=t.src}},a.onMediaDetaching=function(){d.b.log("media source detaching");var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){d.b.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener("sourceopen",this._onMediaSourceOpen),e.removeEventListener("sourceended",this._onMediaSourceEnded),e.removeEventListener("sourceclose",this._onMediaSourceClose),this.media&&(this._objectUrl&&window.URL.revokeObjectURL(this._objectUrl),this.media.src===this._objectUrl?(this.media.removeAttribute("src"),this.media.load()):d.b.warn("media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.hls.trigger(u.a.MEDIA_DETACHED)},a.checkPendingTracks=function(){var e=this.bufferCodecEventsExpected,t=this.pendingTracks,r=Object.keys(t).length;(r&&!e||2===r)&&(this.createSourceBuffers(t),this.pendingTracks={},this.doAppending())},a.onBufferReset=function(){var e=this.sourceBuffer;for(var t in e){var r=e[t];try{r&&(this.mediaSource&&this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this._onSBUpdateEnd),r.removeEventListener("error",this._onSBUpdateError))}catch(e){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0},a.onBufferCodecs=function(e){var t=this;Object.keys(this.sourceBuffer).length||(Object.keys(e).forEach((function(r){t.pendingTracks[r]=e[r]})),this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&"open"===this.mediaSource.readyState&&this.checkPendingTracks())},a.createSourceBuffers=function(e){var t=this.sourceBuffer,r=this.mediaSource;if(!r)throw Error("createSourceBuffers called when mediaSource was null");for(var i in e)if(!t[i]){var a=e[i];if(!a)throw Error("source buffer exists for track "+i+", however track does not");var n=a.levelCodec||a.codec,s=a.container+";codecs="+n;d.b.log("creating sourceBuffer("+s+")");try{var l=t[i]=r.addSourceBuffer(s);l.addEventListener("updateend",this._onSBUpdateEnd),l.addEventListener("error",this._onSBUpdateError),this.tracks[i]={buffer:l,codec:n,id:a.id,container:a.container,levelCodec:a.levelCodec}}catch(e){d.b.error("error while trying to add sourceBuffer:"+e.message),this.hls.trigger(u.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:e,mimeType:s})}}this.hls.trigger(u.a.BUFFER_CREATED,{tracks:this.tracks})},a.onBufferAppending=function(e){this._needsFlush||(this.segments?this.segments.push(e):this.segments=[e],this.doAppending())},a.onBufferEos=function(e){for(var t in this.sourceBuffer)if(!e.type||e.type===t){var r=this.sourceBuffer[t];r&&!r.ended&&(r.ended=!0,d.b.log(t+" sourceBuffer now EOS"))}this.checkEos()},a.checkEos=function(){var e=this.sourceBuffer,t=this.mediaSource;if(t&&"open"===t.readyState){for(var r in e){var i=e[r];if(i){if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}}d.b.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){d.b.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}else this._needsEos=!1},a.onBufferFlushing=function(e){e.type?this.flushRange.push({start:e.startOffset,end:e.endOffset,type:e.type}):(this.flushRange.push({start:e.startOffset,end:e.endOffset,type:"video"}),this.flushRange.push({start:e.startOffset,end:e.endOffset,type:"audio"})),this.flushBufferCounter=0,this.doFlush()},a.flushLiveBackBuffer=function(){if(this._live){var e=this.config.liveBackBufferLength;if(isFinite(e)&&!(e<0))if(this.media)for(var t=this.media.currentTime,r=this.sourceBuffer,i=Object.keys(r),a=t-Math.max(e,this._levelTargetDuration),n=i.length-1;n>=0;n--){var s=i[n],o=r[s];if(o){var l=o.buffered;l.length>0&&a>l.start(0)&&this.removeBufferRange(s,o,0,a)&&this.hls.trigger(u.a.LIVE_BACK_BUFFER_REACHED,{bufferEnd:a})}}else d.b.error("flushLiveBackBuffer called without attaching media")}},a.onLevelUpdated=function(e){var t=e.details;t.fragments.length>0&&(this._levelDuration=t.totalduration+t.fragments[0].start,this._levelTargetDuration=t.averagetargetduration||t.targetduration||10,this._live=t.live,this.updateMediaElementDuration())},a.updateMediaElementDuration=function(){var e,t=this.config;if(null!==this._levelDuration&&this.media&&this.mediaSource&&this.sourceBuffer&&0!==this.media.readyState&&"open"===this.mediaSource.readyState){for(var r in this.sourceBuffer){var i=this.sourceBuffer[r];if(i&&!0===i.updating)return}e=this.media.duration,null===this._msDuration&&(this._msDuration=this.mediaSource.duration),!0===this._live&&!0===t.liveDurationInfinity?(d.b.log("Media Source duration is set to Infinity"),this._msDuration=this.mediaSource.duration=1/0):(this._levelDuration>this._msDuration&&this._levelDuration>e||!Object(l.a)(e))&&(d.b.log("Updating Media Source duration to "+this._levelDuration.toFixed(3)),this._msDuration=this.mediaSource.duration=this._levelDuration)}},a.doFlush=function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var i in r){var a=r[i];a&&(t+=a.buffered.length)}}catch(e){d.b.error("error while accessing sourceBuffer.buffered")}this.appended=t,this.hls.trigger(u.a.BUFFER_FLUSHED)}},a.doAppending=function(){var e=this.config,t=this.hls,r=this.segments,i=this.sourceBuffer;if(Object.keys(i).length){if(!this.media||this.media.error)return this.segments=[],void d.b.error("trying to append although a media error occured, flush segment and abort");if(!this.appending){var a=r.shift();if(a)try{var n=i[a.type];if(!n)return void this._onSBUpdateEnd();if(n.updating)return void r.unshift(a);n.ended=!1,this.parent=a.parent,n.appendBuffer(a.data),this.appendError=0,this.appended++,this.appending=!0}catch(i){d.b.error("error while trying to append buffer:"+i.message),r.unshift(a);var s={type:o.b.MEDIA_ERROR,parent:a.parent,details:"",fatal:!1};22===i.code?(this.segments=[],s.details=o.a.BUFFER_FULL_ERROR):(this.appendError++,s.details=o.a.BUFFER_APPEND_ERROR,this.appendError>e.appendErrorMaxRetry&&(d.b.log("fail "+e.appendErrorMaxRetry+" times to append segment in sourceBuffer"),this.segments=[],s.fatal=!0)),t.trigger(u.a.ERROR,s)}}}},a.flushBuffer=function(e,t,r){var i=this.sourceBuffer;if(!Object.keys(i).length)return!0;var a="null";if(this.media&&(a=this.media.currentTime.toFixed(3)),d.b.log("flushBuffer,pos/start/end: "+a+"/"+e+"/"+t),this.flushBufferCounter>=this.appended)return d.b.warn("abort flushing too many retries"),!0;var n=i[r];if(n){if(n.ended=!1,n.updating)return d.b.warn("cannot flush, sb updating in progress"),!1;if(this.removeBufferRange(r,n,e,t))return this.flushBufferCounter++,!1}return d.b.log("buffer flushed"),!0},a.removeBufferRange=function(e,t,r,i){try{for(var a=0;a<t.buffered.length;a++){var n=t.buffered.start(a),s=t.buffered.end(a),o=Math.max(n,r),l=Math.min(s,i);if(Math.min(l,s)-o>.5){var u="null";return this.media&&(u=this.media.currentTime.toString()),d.b.log("sb remove "+e+" ["+o+","+l+"], of ["+n+","+s+"], pos:"+u),t.remove(o,l),!0}}}catch(e){d.b.warn("removeBufferRange failed",e)}return!1},i}(h);function qe(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Xe=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.FPS_DROP_LEVEL_CAPPING,u.a.MEDIA_ATTACHING,u.a.MANIFEST_PARSED,u.a.LEVELS_UPDATED,u.a.BUFFER_CODECS,u.a.MEDIA_DETACHING)||this).autoLevelCapping=Number.POSITIVE_INFINITY,r.firstLevel=null,r.levels=[],r.media=null,r.restrictedLevels=[],r.timer=null,r.clientRect=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,o=i.prototype;return o.destroy=function(){this.hls.config.capLevelToPlayerSize&&(this.media=null,this.clientRect=null,this.stopCapping())},o.onFpsDropLevelCapping=function(e){i.isLevelAllowed(e.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(e.droppedLevel)},o.onMediaAttaching=function(e){this.media=e.media instanceof window.HTMLVideoElement?e.media:null},o.onManifestParsed=function(e){var t=this.hls;this.restrictedLevels=[],this.levels=e.levels,this.firstLevel=e.firstLevel,t.config.capLevelToPlayerSize&&e.video&&this.startCapping()},o.onBufferCodecs=function(e){this.hls.config.capLevelToPlayerSize&&e.video&&this.startCapping()},o.onLevelsUpdated=function(e){this.levels=e.levels},o.onMediaDetaching=function(){this.stopCapping()},o.detectPlayerSize=function(){if(this.media){var e=this.levels?this.levels.length:0;if(e){var t=this.hls;t.autoLevelCapping=this.getMaxLevel(e-1),t.autoLevelCapping>this.autoLevelCapping&&t.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}},o.getMaxLevel=function(e){var t=this;if(!this.levels)return-1;var r=this.levels.filter((function(r,a){return i.isLevelAllowed(a,t.restrictedLevels)&&a<=e}));return this.clientRect=null,i.getMaxLevelByMediaSize(r,this.mediaWidth,this.mediaHeight)},o.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},o.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer),this.timer=null)},o.getDimensions=function(){if(this.clientRect)return this.clientRect;var e=this.media,t={width:0,height:0};if(e){var r=e.getBoundingClientRect();t.width=r.width,t.height=r.height,t.width||t.height||(t.width=r.right-r.left||e.width||0,t.height=r.bottom-r.top||e.height||0)}return this.clientRect=t,t},i.isLevelAllowed=function(e,t){return void 0===t&&(t=[]),-1===t.indexOf(e)},i.getMaxLevelByMediaSize=function(e,t,r){if(!e||e&&!e.length)return-1;for(var i,a,n=e.length-1,s=0;s<e.length;s+=1){var o=e[s];if((o.width>=t||o.height>=r)&&(i=o,!(a=e[s+1])||i.width!==a.width||i.height!==a.height)){n=s;break}}return n},a=i,s=[{key:"contentScaleFactor",get:function(){var e=1;try{e=window.devicePixelRatio}catch(e){}return e}}],(n=[{key:"mediaWidth",get:function(){return this.getDimensions().width*i.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*i.contentScaleFactor}}])&&qe(a.prototype,n),s&&qe(a,s),i}(h);var ze=window.performance,Qe=function(e){var t,r;function i(t){return e.call(this,t,u.a.MEDIA_ATTACHING)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1},a.onMediaAttaching=function(e){var t=this.hls.config;t.capLevelOnFPSDrop&&("function"==typeof(this.video=e.media instanceof window.HTMLVideoElement?e.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),t.fpsDroppedMonitoringPeriod))},a.checkFPS=function(e,t,r){var i=ze.now();if(t){if(this.lastTime){var a=i-this.lastTime,n=r-this.lastDroppedFrames,s=t-this.lastDecodedFrames,o=1e3*n/a,l=this.hls;if(l.trigger(u.a.FPS_DROP,{currentDropped:n,currentDecoded:s,totalDroppedFrames:r}),o>0&&n>l.config.fpsDroppedMonitoringThreshold*s){var c=l.currentLevel;d.b.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(-1===l.autoLevelCapping||l.autoLevelCapping>=c)&&(c-=1,l.trigger(u.a.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:l.currentLevel}),l.autoLevelCapping=c,l.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}},a.checkFPSInterval=function(){var e=this.video;if(e)if(this.isVideoPlaybackQualityAvailable){var t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)},i}(h),$e=function(){function e(e){e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}var t=e.prototype;return t.destroy=function(){this.abort(),this.loader=null},t.abort=function(){var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null},t.load=function(e,t,r){this.context=e,this.config=t,this.callbacks=r,this.stats={trequest:window.performance.now(),retry:0},this.retryDelay=t.retryDelay,this.loadInternal()},t.loadInternal=function(){var e,t=this.context;e=this.loader=new window.XMLHttpRequest;var r=this.stats;r.tfirst=0,r.loaded=0;var i=this.xhrSetup;try{if(i)try{i(e,t.url)}catch(r){e.open("GET",t.url,!0),i(e,t.url)}e.readyState||e.open("GET",t.url,!0)}catch(r){return void this.callbacks.onError({code:e.status,text:r.message},t,e)}t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),e.send()},t.readystatechange=function(e){var t=e.currentTarget,r=t.readyState,i=this.stats,a=this.context,n=this.config;if(!i.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===i.tfirst&&(i.tfirst=Math.max(window.performance.now(),i.trequest)),4===r){var s=t.status;if(s>=200&&s<300){var o,l;i.tload=Math.max(i.tfirst,window.performance.now()),l="arraybuffer"===a.responseType?(o=t.response).byteLength:(o=t.responseText).length,i.loaded=i.total=l;var u={url:t.responseURL,data:o};this.callbacks.onSuccess(u,i,a,t)}else i.retry>=n.maxRetry||s>=400&&s<499?(d.b.error(s+" while loading "+a.url),this.callbacks.onError({code:s,text:t.statusText},a,t)):(d.b.warn(s+" while loading "+a.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,n.maxRetryDelay),i.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),n.timeout)},t.loadtimeout=function(){d.b.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)},t.loadprogress=function(e){var t=e.currentTarget,r=this.stats;r.loaded=e.loaded,e.lengthComputable&&(r.total=e.total);var i=this.callbacks.onProgress;i&&i(r,this.context,null,t)},e}();function Je(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Ze=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.MANIFEST_LOADING,u.a.MANIFEST_PARSED,u.a.AUDIO_TRACK_LOADED,u.a.AUDIO_TRACK_SWITCHED,u.a.LEVEL_LOADED,u.a.ERROR)||this)._trackId=-1,r._selectDefaultTrack=!0,r.tracks=[],r.trackIdBlacklist=Object.create(null),r.audioGroupId=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,l=i.prototype;return l.onManifestLoading=function(){this.tracks=[],this._trackId=-1,this._selectDefaultTrack=!0},l.onManifestParsed=function(e){var t=this.tracks=e.audioTracks||[];this.hls.trigger(u.a.AUDIO_TRACKS_UPDATED,{audioTracks:t}),this._selectAudioGroup(this.hls.nextLoadLevel)},l.onAudioTrackLoaded=function(e){if(e.id>=this.tracks.length)d.b.warn("Invalid audio track id:",e.id);else{if(d.b.log("audioTrack "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.hasInterval()){var t=1e3*e.details.targetduration;this.setInterval(t)}!e.details.live&&this.hasInterval()&&this.clearInterval()}},l.onAudioTrackSwitched=function(e){var t=this.tracks[e.id].groupId;t&&this.audioGroupId!==t&&(this.audioGroupId=t)},l.onLevelLoaded=function(e){this._selectAudioGroup(e.level)},l.onError=function(e){e.type===o.b.NETWORK_ERROR&&(e.fatal&&this.clearInterval(),e.details===o.a.AUDIO_TRACK_LOAD_ERROR&&(d.b.warn("Network failure on audio-track id:",e.context.id),this._handleLoadError()))},l._setAudioTrack=function(e){if(this._trackId===e&&this.tracks[this._trackId].details)d.b.debug("Same id as current audio-track passed, and track details available -> no-op");else if(e<0||e>=this.tracks.length)d.b.warn("Invalid id passed to audio-track controller");else{var t=this.tracks[e];d.b.log("Now switching to audio-track index "+e),this.clearInterval(),this._trackId=e;var r=t.url,i=t.type,a=t.id;this.hls.trigger(u.a.AUDIO_TRACK_SWITCHING,{id:a,type:i,url:r}),this._loadTrackDetailsIfNeeded(t)}},l.doTick=function(){this._updateTrack(this._trackId)},l._selectAudioGroup=function(e){var t=this.hls.levels[e];if(t&&t.audioGroupIds){var r=t.audioGroupIds[t.urlId];this.audioGroupId!==r&&(this.audioGroupId=r,this._selectInitialAudioTrack())}},l._selectInitialAudioTrack=function(){var e=this,t=this.tracks;if(t.length){var r=this.tracks[this._trackId],i=null;if(r&&(i=r.name),this._selectDefaultTrack){var a=t.filter((function(e){return e.default}));a.length?t=a:d.b.warn("No default audio tracks defined")}var n=!1,s=function(){t.forEach((function(t){n||e.audioGroupId&&t.groupId!==e.audioGroupId||i&&i!==t.name||(e._setAudioTrack(t.id),n=!0)}))};s(),n||(i=null,s()),n||(d.b.error("No track found for running audio group-ID: "+this.audioGroupId),this.hls.trigger(u.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))}},l._needsTrackLoading=function(e){var t=e.details,r=e.url;return!(t&&!t.live)&&!!r},l._loadTrackDetailsIfNeeded=function(e){if(this._needsTrackLoading(e)){var t=e.url,r=e.id;d.b.log("loading audio-track playlist for id: "+r),this.hls.trigger(u.a.AUDIO_TRACK_LOADING,{url:t,id:r})}},l._updateTrack=function(e){if(!(e<0||e>=this.tracks.length)){this.clearInterval(),this._trackId=e,d.b.log("trying to update audio-track "+e);var t=this.tracks[e];this._loadTrackDetailsIfNeeded(t)}},l._handleLoadError=function(){this.trackIdBlacklist[this._trackId]=!0;var e=this._trackId,t=this.tracks[e],r=t.name,i=t.language,a=t.groupId;d.b.warn("Loading failed on audio track id: "+e+", group-id: "+a+', name/language: "'+r+'" / "'+i+'"');for(var n=e,s=0;s<this.tracks.length;s++){if(!this.trackIdBlacklist[s])if(this.tracks[s].name===r){n=s;break}}n!==e?(d.b.log("Attempting audio-track fallback id:",n,"group-id:",this.tracks[n].groupId),this._setAudioTrack(n)):d.b.warn('No fallback audio-track found for name/language: "'+r+'" / "'+i+'"')},a=i,(n=[{key:"audioTracks",get:function(){return this.tracks}},{key:"audioTrack",get:function(){return this._trackId},set:function(e){this._setAudioTrack(e),this._selectDefaultTrack=!1}}])&&Je(a.prototype,n),s&&Je(a,s),i}(ge);function et(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var tt=window.performance,rt=function(e){var t,r;function i(t,r){var i;return(i=e.call(this,t,u.a.MEDIA_ATTACHED,u.a.MEDIA_DETACHING,u.a.AUDIO_TRACKS_UPDATED,u.a.AUDIO_TRACK_SWITCHING,u.a.AUDIO_TRACK_LOADED,u.a.KEY_LOADED,u.a.FRAG_LOADED,u.a.FRAG_PARSING_INIT_SEGMENT,u.a.FRAG_PARSING_DATA,u.a.FRAG_PARSED,u.a.ERROR,u.a.BUFFER_RESET,u.a.BUFFER_CREATED,u.a.BUFFER_APPENDED,u.a.BUFFER_FLUSHED,u.a.INIT_PTS_FOUND)||this).fragmentTracker=r,i.config=t.config,i.audioCodecSwap=!1,i._state=pe,i.initPTS=[],i.waitingFragment=null,i.videoTrackCC=null,i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,c=i.prototype;return c.onInitPtsFound=function(e){var t=e.id,r=e.frag.cc,i=e.initPTS;"main"===t&&(this.initPTS[r]=i,this.videoTrackCC=r,d.b.log("InitPTS for cc: "+r+" found from video track: "+i),this.state===Le&&this.tick())},c.startLoad=function(e){if(this.tracks){var t=this.lastCurrentTime;this.stopLoad(),this.setInterval(100),this.fragLoadError=0,t>0&&-1===e?(d.b.log("audio:override startPosition with lastCurrentTime @"+t.toFixed(3)),this.state=me):(this.lastCurrentTime=this.startPosition?this.startPosition:e,this.state=ve),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else this.startPosition=e,this.state=pe},c.doTick=function(){var e,t,r,i=this.hls,a=i.config;switch(this.state){case we:case ye:case Ae:break;case ve:this.state=Se,this.loadedmetadata=!1;break;case me:var n=this.tracks;if(!n)break;if(!this.media&&(this.startFragRequested||!a.startFragPrefetch))break;if(this.loadedmetadata)e=this.media.currentTime;else if(void 0===(e=this.nextLoadPosition))break;var s=this.mediaBuffer?this.mediaBuffer:this.media,o=this.videoBuffer?this.videoBuffer:this.media,c=e<a.maxBufferHole?Math.max(2,a.maxBufferHole):a.maxBufferHole,h=H.bufferInfo(s,e,c),f=H.bufferInfo(o,e,c),g=h.len,p=h.end,v=this.fragPrevious,m=Math.min(a.maxBufferLength,a.maxMaxBufferLength),y=Math.max(m,f.len),b=this.audioSwitch,T=this.trackId;if((g<y||b)&&T<n.length){if(void 0===(r=n[T].details)){this.state=Se;break}if(!b&&this._streamEnded(h,r))return this.hls.trigger(u.a.BUFFER_EOS,{type:"audio"}),void(this.state=ke);var E,S=r.fragments,_=S.length,R=S[0].start,A=S[_-1].start+S[_-1].duration;if(b)if(r.live&&!r.PTSKnown)d.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"),p=0;else if(p=e,r.PTSKnown&&e<R){if(!(h.end>R||h.nextStart))return;d.b.log("alt audio track ahead of main track, seek to start of alt audio track"),this.media.currentTime=R+.05}if(r.initSegment&&!r.initSegment.data)E=r.initSegment;else if(p<=R){if(E=S[0],null!==this.videoTrackCC&&E.cc!==this.videoTrackCC&&(E=function(e,t){return j.search(e,(function(e){return e.cc<t?1:e.cc>t?-1:0}))}(S,this.videoTrackCC)),r.live&&E.loadIdx&&E.loadIdx===this.fragLoadIdx){var k=h.nextStart?h.nextStart:R;return d.b.log("no alt audio available @currentTime:"+this.media.currentTime+", seeking @"+(k+.05)),void(this.media.currentTime=k+.05)}}else{var w,L=a.maxFragLookUpTolerance,D=v?S[v.sn-S[0].sn+1]:void 0,O=function(e){var t=Math.min(L,e.duration);return e.start+e.duration-t<=p?1:e.start-t>p&&e.start?-1:0};p<A?(p>A-L&&(L=0),w=D&&!O(D)?D:j.search(S,O)):w=S[_-1],w&&(E=w,R=w.start,v&&E.level===v.level&&E.sn===v.sn&&(E.sn<r.endSN?(E=S[E.sn+1-r.startSN],d.b.log("SN just loaded, load next one: "+E.sn)):E=null))}E&&(E.encrypted?(d.b.log("Loading key for "+E.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+T),this.state=be,i.trigger(u.a.KEY_LOADING,{frag:E})):(this.fragCurrent=E,(b||this.fragmentTracker.getState(E)===U)&&(d.b.log("Loading "+E.sn+", cc: "+E.cc+" of ["+r.startSN+" ,"+r.endSN+"],track "+T+", currentTime:"+e+",bufferEnd:"+p.toFixed(3)),"initSegment"!==E.sn&&(this.startFragRequested=!0),Object(l.a)(E.sn)&&(this.nextLoadPosition=E.start+E.duration),i.trigger(u.a.FRAG_LOADING,{frag:E}),this.state=Te)))}break;case Se:(t=this.tracks[this.trackId])&&t.details&&(this.state=me);break;case Ee:var C=tt.now(),I=this.retryDate,P=(s=this.media)&&s.seeking;(!I||C>=I||P)&&(d.b.log("audioStreamController: retryDate reached, switch back to IDLE state"),this.state=me);break;case Le:var x=this.videoTrackCC;if(void 0===this.initPTS[x])break;var M=this.waitingFragment;if(M){var F=M.frag.cc;x!==F?(t=this.tracks[this.trackId]).details&&t.details.live&&(d.b.warn("Waiting fragment CC ("+F+") does not match video track CC ("+x+")"),this.waitingFragment=null,this.state=me):(this.state=Te,this.onFragLoaded(this.waitingFragment),this.waitingFragment=null)}else this.state=me}},c.onMediaAttached=function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("ended",this.onvended);var r=this.config;this.tracks&&r.autoStartLoad&&this.startLoad(r.startPosition)},c.onMediaDetaching=function(){var e=this.media;e&&e.ended&&(d.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},c.onAudioTracksUpdated=function(e){d.b.log("audio tracks updated"),this.tracks=e.audioTracks},c.onAudioTrackSwitching=function(e){var t=!!e.url;this.trackId=e.id,this.fragCurrent=null,this.state=ye,this.waitingFragment=null,t?this.setInterval(100):this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),t&&(this.audioSwitch=!0,this.state=me),this.tick()},c.onAudioTrackLoaded=function(e){var t=e.details,r=e.id,i=this.tracks[r],a=t.totalduration,n=0;if(d.b.log("track "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+a),t.live){var s=i.details;s&&t.fragments.length>0?(re(s,t),n=t.fragments[0].start,t.PTSKnown?d.b.log("live audio playlist sliding:"+n.toFixed(3)):d.b.log("live audio playlist - outdated PTS, unknown sliding")):(t.PTSKnown=!1,d.b.log("live audio playlist - first load, unknown sliding"))}else t.PTSKnown=!1;if(i.details=t,!this.startFragRequested){if(-1===this.startPosition){var o=t.startTimeOffset;Object(l.a)(o)?(d.b.log("start time offset found in playlist, adjust startPosition to "+o),this.startPosition=o):t.live?(this.startPosition=this.computeLivePosition(n,t),d.b.log("compute startPosition for audio-track to "+this.startPosition)):this.startPosition=0}this.nextLoadPosition=this.startPosition}this.state===Se&&(this.state=me),this.tick()},c.onKeyLoaded=function(){this.state===be&&(this.state=me,this.tick())},c.onFragLoaded=function(e){var t=this.fragCurrent,r=e.frag;if(this.state===Te&&t&&"audio"===r.type&&r.level===t.level&&r.sn===t.sn){var i=this.tracks[this.trackId],a=i.details,n=a.totalduration,s=t.level,o=t.sn,l=t.cc,c=this.config.defaultAudioCodec||i.audioCodec||"mp4a.40.2",h=this.stats=e.stats;if("initSegment"===o)this.state=me,h.tparsed=h.tbuffered=tt.now(),a.initSegment.data=e.payload,this.hls.trigger(u.a.FRAG_BUFFERED,{stats:h,frag:t,id:"audio"}),this.tick();else{this.state=_e,this.appended=!1,this.demuxer||(this.demuxer=new J(this.hls,"audio"));var f=this.initPTS[l],g=a.initSegment?a.initSegment.data:[];if(a.initSegment||void 0!==f){this.pendingBuffering=!0,d.b.log("Demuxing "+o+" of ["+a.startSN+" ,"+a.endSN+"],track "+s);this.demuxer.push(e.payload,g,c,null,t,n,!1,f)}else d.b.log("unknown video PTS for continuity counter "+l+", waiting for video PTS before demuxing audio frag "+o+" of ["+a.startSN+" ,"+a.endSN+"],track "+s),this.waitingFragment=e,this.state=Le}}this.fragLoadError=0},c.onFragParsingInitSegment=function(e){var t=this.fragCurrent,r=e.frag;if(t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e){var i,a=e.tracks;if(a.video&&delete a.video,i=a.audio){i.levelCodec=i.codec,i.id=e.id,this.hls.trigger(u.a.BUFFER_CODECS,a),d.b.log("audio track:audio,container:"+i.container+",codecs[level/parsed]=["+i.levelCodec+"/"+i.codec+"]");var n=i.initSegment;if(n){var s={type:"audio",data:n,parent:"audio",content:"initSegment"};this.audioSwitch?this.pendingData=[s]:(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(u.a.BUFFER_APPENDING,s))}this.tick()}}},c.onFragParsingData=function(e){var t=this,r=this.fragCurrent,i=e.frag;if(r&&"audio"===e.id&&"audio"===e.type&&i.sn===r.sn&&i.level===r.level&&this.state===_e){var a=this.trackId,n=this.tracks[a],s=this.hls;Object(l.a)(e.endPTS)||(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),r.addElementaryStream(p.AUDIO),d.b.log("parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb),te(n.details,r,e.startPTS,e.endPTS);var c=this.audioSwitch,h=this.media,f=!1;if(c)if(h&&h.readyState){var g=h.currentTime;d.b.log("switching audio track : currentTime:"+g),g>=e.startPTS&&(d.b.log("switching audio track : flushing all audio"),this.state=Ae,s.trigger(u.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),f=!0,this.audioSwitch=!1,s.trigger(u.a.AUDIO_TRACK_SWITCHED,{id:a}))}else this.audioSwitch=!1,s.trigger(u.a.AUDIO_TRACK_SWITCHED,{id:a});var v=this.pendingData;if(!v)return d.b.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),void s.trigger(u.a.ERROR,{type:o.b.MEDIA_ERROR,details:null,fatal:!0});this.audioSwitch||([e.data1,e.data2].forEach((function(t){t&&t.length&&v.push({type:e.type,data:t,parent:"audio",content:"data"})})),!f&&v.length&&(v.forEach((function(e){t.state===_e&&(t.pendingBuffering=!0,t.hls.trigger(u.a.BUFFER_APPENDING,e))})),this.pendingData=[],this.appended=!0)),this.tick()}},c.onFragParsed=function(e){var t=this.fragCurrent,r=e.frag;t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e&&(this.stats.tparsed=tt.now(),this.state=Re,this._checkAppendedParsed())},c.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},c.onBufferCreated=function(e){var t=e.tracks.audio;t&&(this.mediaBuffer=t.buffer,this.loadedmetadata=!0),e.tracks.video&&(this.videoBuffer=e.tracks.video.buffer)},c.onBufferAppended=function(e){if("audio"===e.parent){var t=this.state;t!==_e&&t!==Re||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}},c._checkAppendedParsed=function(){if(!(this.state!==Re||this.appended&&this.pendingBuffering)){var e=this.fragCurrent,t=this.stats,r=this.hls;if(e){this.fragPrevious=e,t.tbuffered=tt.now(),r.trigger(u.a.FRAG_BUFFERED,{stats:t,frag:e,id:"audio"});var i=this.mediaBuffer?this.mediaBuffer:this.media;i&&d.b.log("audio buffered : "+ne.toString(i.buffered)),this.audioSwitch&&this.appended&&(this.audioSwitch=!1,r.trigger(u.a.AUDIO_TRACK_SWITCHED,{id:this.trackId})),this.state=me}this.tick()}},c.onError=function(e){var t=e.frag;if(!t||"audio"===t.type)switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:var r=e.frag;if(r&&"audio"!==r.type)break;if(!e.fatal){var i=this.fragLoadError;i?i++:i=1;var a=this.config;if(i<=a.fragLoadingMaxRetry){this.fragLoadError=i;var n=Math.min(Math.pow(2,i-1)*a.fragLoadingRetryDelay,a.fragLoadingMaxRetryTimeout);d.b.warn("AudioStreamController: frag loading failed, retry in "+n+" ms"),this.retryDate=tt.now()+n,this.state=Ee}else d.b.error("AudioStreamController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=we}break;case o.a.AUDIO_TRACK_LOAD_ERROR:case o.a.AUDIO_TRACK_LOAD_TIMEOUT:case o.a.KEY_LOAD_ERROR:case o.a.KEY_LOAD_TIMEOUT:this.state!==we&&(this.state=e.fatal?we:me,d.b.warn("AudioStreamController: "+e.details+" while loading frag, now switching to "+this.state+" state ..."));break;case o.a.BUFFER_FULL_ERROR:if("audio"===e.parent&&(this.state===_e||this.state===Re)){var s=this.mediaBuffer,l=this.media.currentTime;if(s&&H.isBuffered(s,l)&&H.isBuffered(s,l+.5)){var c=this.config;c.maxMaxBufferLength>=c.maxBufferLength&&(c.maxMaxBufferLength/=2,d.b.warn("AudioStreamController: reduce max buffer length to "+c.maxMaxBufferLength+"s")),this.state=me}else d.b.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,this.state=Ae,this.hls.trigger(u.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"})}}},c.onBufferFlushed=function(){var e=this,t=this.pendingData;t&&t.length?(d.b.log("AudioStreamController: appending pending audio data after buffer flushed"),t.forEach((function(t){e.hls.trigger(u.a.BUFFER_APPENDING,t)})),this.appended=!0,this.pendingData=[],this.state=Re):(this.state=me,this.fragPrevious=null,this.tick())},a=i,(n=[{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,d.b.log("audio stream:"+t+"->"+e)}},get:function(){return this._state}}])&&et(a.prototype,n),s&&et(a,s),i}(Oe),it=function(){if("undefined"!=typeof window&&window.VTTCue)return window.VTTCue;var e={"":!0,lr:!0,rl:!0},t={start:!0,middle:!0,end:!0,left:!0,right:!0};function r(e){return"string"==typeof e&&(!!t[e.toLowerCase()]&&e.toLowerCase())}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]=r[i]}return e}function a(t,a,n){var s=this,o={enumerable:!0};s.hasBeenReset=!1;var l="",u=!1,d=t,c=a,h=n,f=null,g="",p=!0,v="auto",m="start",y=50,b="middle",T=50,E="middle";Object.defineProperty(s,"id",i({},o,{get:function(){return l},set:function(e){l=""+e}})),Object.defineProperty(s,"pauseOnExit",i({},o,{get:function(){return u},set:function(e){u=!!e}})),Object.defineProperty(s,"startTime",i({},o,{get:function(){return d},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");d=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"endTime",i({},o,{get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");c=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"text",i({},o,{get:function(){return h},set:function(e){h=""+e,this.hasBeenReset=!0}})),Object.defineProperty(s,"region",i({},o,{get:function(){return f},set:function(e){f=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"vertical",i({},o,{get:function(){return g},set:function(t){var r=function(t){return"string"==typeof t&&(!!e[t.toLowerCase()]&&t.toLowerCase())}(t);if(!1===r)throw new SyntaxError("An invalid or illegal string was specified.");g=r,this.hasBeenReset=!0}})),Object.defineProperty(s,"snapToLines",i({},o,{get:function(){return p},set:function(e){p=!!e,this.hasBeenReset=!0}})),Object.defineProperty(s,"line",i({},o,{get:function(){return v},set:function(e){if("number"!=typeof e&&"auto"!==e)throw new SyntaxError("An invalid number or illegal string was specified.");v=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"lineAlign",i({},o,{get:function(){return m},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");m=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"position",i({},o,{get:function(){return y},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");y=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"positionAlign",i({},o,{get:function(){return b},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");b=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"size",i({},o,{get:function(){return T},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");T=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"align",i({},o,{get:function(){return E},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");E=t,this.hasBeenReset=!0}})),s.displayState=void 0}return a.prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)},a}(),at=function(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}};function nt(){this.window=window,this.state="INITIAL",this.buffer="",this.decoder=new at,this.regionList=[]}function st(){this.values=Object.create(null)}function ot(e,t,r,i){var a=i?e.split(i):[e];for(var n in a)if("string"==typeof a[n]){var s=a[n].split(r);if(2===s.length)t(s[0],s[1])}}st.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var i=0;i<r.length;++i)if(t===r[i]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return!!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t))>=0&&t<=100)&&(this.set(e,t),!0)}};var lt=new it(0,0,0),ut="middle"===lt.align?"middle":"center";function dt(e,t,r){var i=e;function a(){var t=function(e){function t(e,t,r,i){return 3600*(0|e)+60*(0|t)+(0|r)+(0|i)/1e3}var r=e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}(e);if(null===t)throw new Error("Malformed timestamp: "+i);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function n(){e=e.replace(/^\s+/,"")}if(n(),t.startTime=a(),n(),"--\x3e"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+i);e=e.substr(3),n(),t.endTime=a(),n(),function(e,t){var i=new st;ot(e,(function(e,t){switch(e){case"region":for(var a=r.length-1;a>=0;a--)if(r[a].id===t){i.set(e,r[a].region);break}break;case"vertical":i.alt(e,t,["rl","lr"]);break;case"line":var n=t.split(","),s=n[0];i.integer(e,s),i.percent(e,s)&&i.set("snapToLines",!1),i.alt(e,s,["auto"]),2===n.length&&i.alt("lineAlign",n[1],["start",ut,"end"]);break;case"position":n=t.split(","),i.percent(e,n[0]),2===n.length&&i.alt("positionAlign",n[1],["start",ut,"end","line-left","line-right","auto"]);break;case"size":i.percent(e,t);break;case"align":i.alt(e,t,["start",ut,"end","left","right"])}}),/:/,/\s/),t.region=i.get("region",null),t.vertical=i.get("vertical","");var a=i.get("line","auto");"auto"===a&&-1===lt.line&&(a=-1),t.line=a,t.lineAlign=i.get("lineAlign","start"),t.snapToLines=i.get("snapToLines",!0),t.size=i.get("size",100),t.align=i.get("align",ut);var n=i.get("position","auto");"auto"===n&&50===lt.position&&(n="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=n}(e,t)}function ct(e){return e.replace(/<br(?: \/)?>/gi,"\n")}nt.prototype={parse:function(e){var t=this;function r(){var e=t.buffer,r=0;for(e=ct(e);r<e.length&&"\r"!==e[r]&&"\n"!==e[r];)++r;var i=e.substr(0,r);return"\r"===e[r]&&++r,"\n"===e[r]&&++r,t.buffer=e.substr(r),i}e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));try{var i;if("INITIAL"===t.state){if(!/\r\n|\n/.test(t.buffer))return this;var a=(i=r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!a||!a[0])throw new Error("Malformed WebVTT signature.");t.state="HEADER"}for(var n=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(n?n=!1:i=r(),t.state){case"HEADER":/:/.test(i)?ot(i,(function(e,t){}),/:/):i||(t.state="ID");continue;case"NOTE":i||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(i)){t.state="NOTE";break}if(!i)continue;if(t.cue=new it(0,0,""),t.state="CUE",-1===i.indexOf("--\x3e")){t.cue.id=i;continue}case"CUE":try{dt(i,t.cue,t.regionList)}catch(e){t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var s=-1!==i.indexOf("--\x3e");if(!i||s&&(n=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+="\n"),t.cue.text+=i;continue;case"BADCUE":i||(t.state="ID");continue}}}catch(e){"CUETEXT"===t.state&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state="INITIAL"===t.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){try{if(this.buffer+=this.decoder.decode(),(this.cue||"HEADER"===this.state)&&(this.buffer+="\n\n",this.parse()),"INITIAL"===this.state)throw new Error("Malformed WebVTT signature.")}catch(e){throw e}return this.onflush&&this.onflush(),this}};var ht=nt;function ft(e,t,r,i){for(var a,n,s,o,l,u=[],d=window.VTTCue||TextTrackCue,c=0;c<i.rows.length;c++)if(s=!0,o=0,l="",!(a=i.rows[c]).isEmpty()){for(var h=0;h<a.chars.length;h++)a.chars[h].uchar.match(/\s/)&&s?o++:(l+=a.chars[h].uchar,s=!1);a.cueStartTime=t,t===r&&(r+=1e-4),n=new d(t,r,ct(l.trim())),o>=16?o--:o++,navigator.userAgent.match(/Firefox\//)?n.line=c+1:n.line=c>7?c-2:c+1,n.align="left",n.position=Math.max(0,Math.min(100,o/32*100)),u.push(n),e&&e.addCue(n)}return u}var gt,pt={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},vt=function(e){var t=e;return pt.hasOwnProperty(e)&&(t=pt[e]),String.fromCharCode(t)},mt={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},yt={17:2,18:4,21:6,22:8,23:10,19:13,20:15},bt={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},Tt={25:2,26:4,29:6,30:8,31:10,27:13,28:15},Et=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];!function(e){e[e.ERROR=0]="ERROR",e[e.TEXT=1]="TEXT",e[e.WARNING=2]="WARNING",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG",e[e.DATA=3]="DATA"}(gt||(gt={}));var St=function(){function e(){this.time=null,this.verboseLevel=gt.ERROR}return e.prototype.log=function(e,t){this.verboseLevel>=e&&d.b.log(this.time+" ["+e+"] "+t)},e}(),_t=function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].toString(16));return t},Rt=function(){function e(e,t,r,i,a){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=e||"white",this.underline=t||!1,this.italics=r||!1,this.background=i||"black",this.flash=a||!1}var t=e.prototype;return t.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},t.setStyles=function(e){for(var t=["foreground","underline","italics","background","flash"],r=0;r<t.length;r++){var i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}},t.isDefault=function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash},t.equals=function(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash},t.copy=function(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash},t.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},e}(),At=function(){function e(e,t,r,i,a,n){this.uchar=void 0,this.penState=void 0,this.uchar=e||" ",this.penState=new Rt(t,r,i,a,n)}var t=e.prototype;return t.reset=function(){this.uchar=" ",this.penState.reset()},t.setChar=function(e,t){this.uchar=e,this.penState.copy(t)},t.setPenState=function(e){this.penState.copy(e)},t.equals=function(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)},t.copy=function(e){this.uchar=e.uchar,this.penState.copy(e.penState)},t.isEmpty=function(){return" "===this.uchar&&this.penState.isDefault()},e}(),kt=function(){function e(e){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var t=0;t<100;t++)this.chars.push(new At);this.logger=e,this.pos=0,this.currPenState=new Rt}var t=e.prototype;return t.equals=function(e){for(var t=!0,r=0;r<100;r++)if(!this.chars[r].equals(e.chars[r])){t=!1;break}return t},t.copy=function(e){for(var t=0;t<100;t++)this.chars[t].copy(e.chars[t])},t.isEmpty=function(){for(var e=!0,t=0;t<100;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e},t.setCursor=function(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(gt.DEBUG,"Negative cursor position "+this.pos),this.pos=0):this.pos>100&&(this.logger.log(gt.DEBUG,"Too large cursor position "+this.pos),this.pos=100)},t.moveCursor=function(e){var t=this.pos+e;if(e>1)for(var r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)},t.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},t.insertChar=function(e){e>=144&&this.backSpace();var t=vt(e);this.pos>=100?this.logger.log(gt.ERROR,"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1))},t.clearFromPos=function(e){var t;for(t=e;t<100;t++)this.chars[t].reset()},t.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},t.clearToEndOfRow=function(){this.clearFromPos(this.pos)},t.getTextString=function(){for(var e=[],t=!0,r=0;r<100;r++){var i=this.chars[r].uchar;" "!==i&&(t=!1),e.push(i)}return t?"":e.join("")},t.setPenStyles=function(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)},e}(),wt=function(){function e(e){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var t=0;t<15;t++)this.rows.push(new kt(e));this.logger=e,this.currRow=14,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var t=e.prototype;return t.reset=function(){for(var e=0;e<15;e++)this.rows[e].clear();this.currRow=14},t.equals=function(e){for(var t=!0,r=0;r<15;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t},t.copy=function(e){for(var t=0;t<15;t++)this.rows[t].copy(e.rows[t])},t.isEmpty=function(){for(var e=!0,t=0;t<15;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e},t.backSpace=function(){this.rows[this.currRow].backSpace()},t.clearToEndOfRow=function(){this.rows[this.currRow].clearToEndOfRow()},t.insertChar=function(e){this.rows[this.currRow].insertChar(e)},t.setPen=function(e){this.rows[this.currRow].setPenStyles(e)},t.moveCursor=function(e){this.rows[this.currRow].moveCursor(e)},t.setCursor=function(e){this.logger.log(gt.INFO,"setCursor: "+e),this.rows[this.currRow].setCursor(e)},t.setPAC=function(e){this.logger.log(gt.INFO,"pacData = "+JSON.stringify(e));var t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(var r=0;r<15;r++)this.rows[r].clear();var i=this.currRow+1-this.nrRollUpRows,a=this.lastOutputScreen;if(a){var n=a.rows[i].cueStartTime,s=this.logger.time;if(n&&null!==s&&n<s)for(var o=0;o<this.nrRollUpRows;o++)this.rows[t-this.nrRollUpRows+o+1].copy(a.rows[i+o])}}this.currRow=t;var l=this.rows[this.currRow];if(null!==e.indent){var u=e.indent,d=Math.max(u-1,0);l.setCursor(e.indent),e.color=l.chars[d].penState.foreground}var c={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(c)},t.setBkgData=function(e){this.logger.log(gt.INFO,"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)},t.setRollUpRows=function(e){this.nrRollUpRows=e},t.rollUp=function(){if(null!==this.nrRollUpRows){this.logger.log(gt.TEXT,this.getDisplayText());var e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(gt.INFO,"Rolling up")}else this.logger.log(gt.DEBUG,"roll_up but nrRollUpRows not set yet")},t.getDisplayText=function(e){e=e||!1;for(var t=[],r="",i=-1,a=0;a<15;a++){var n=this.rows[a].getTextString();n&&(i=a+1,e?t.push("Row "+i+": '"+n+"'"):t.push(n.trim()))}return t.length>0&&(r=e?"["+t.join(" | ")+"]":t.join("\n")),r},t.getTextAndFormat=function(){return this.rows},e}(),Lt=function(){function e(e,t,r){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new wt(r),this.nonDisplayedMemory=new wt(r),this.lastOutputScreen=new wt(r),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=r}var t=e.prototype;return t.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},t.getHandler=function(){return this.outputFilter},t.setHandler=function(e){this.outputFilter=e},t.setPAC=function(e){this.writeScreen.setPAC(e)},t.setBkgData=function(e){this.writeScreen.setBkgData(e)},t.setMode=function(e){e!==this.mode&&(this.mode=e,this.logger.log(gt.INFO,"MODE="+e),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)},t.insertChars=function(e){for(var t=0;t<e.length;t++)this.writeScreen.insertChar(e[t]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(gt.INFO,r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(this.logger.log(gt.TEXT,"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},t.ccRCL=function(){this.logger.log(gt.INFO,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},t.ccBS=function(){this.logger.log(gt.INFO,"BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},t.ccAOF=function(){},t.ccAON=function(){},t.ccDER=function(){this.logger.log(gt.INFO,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},t.ccRU=function(e){this.logger.log(gt.INFO,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)},t.ccFON=function(){this.logger.log(gt.INFO,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},t.ccRDC=function(){this.logger.log(gt.INFO,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},t.ccTR=function(){this.logger.log(gt.INFO,"TR"),this.setMode("MODE_TEXT")},t.ccRTD=function(){this.logger.log(gt.INFO,"RTD"),this.setMode("MODE_TEXT")},t.ccEDM=function(){this.logger.log(gt.INFO,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},t.ccCR=function(){this.logger.log(gt.INFO,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},t.ccENM=function(){this.logger.log(gt.INFO,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},t.ccEOC=function(){if(this.logger.log(gt.INFO,"EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(gt.TEXT,"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)},t.ccTO=function(e){this.logger.log(gt.INFO,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)},t.ccMIDROW=function(e){var t={flash:!1};if(t.underline=e%2==1,t.italics=e>=46,t.italics)t.foreground="white";else{var r=Math.floor(e/2)-16;t.foreground=["white","green","blue","cyan","red","yellow","magenta"][r]}this.logger.log(gt.INFO,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)},t.outputDataUpdate=function(e){void 0===e&&(e=!1);var t=this.logger.time;null!==t&&this.outputFilter&&(null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t):this.cueStartTime=t,this.lastOutputScreen.copy(this.displayedMemory))},t.cueSplitAtTime=function(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))},e}();function Dt(e,t,r){r.a=e,r.b=t}function Ot(e,t,r){return r.a===e&&r.b===t}var Ct=function(){function e(e,t,r){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var i=new St;this.channels=[null,new Lt(e,t,i),new Lt(e+1,r,i)],this.cmdHistory={a:null,b:null},this.logger=i}var t=e.prototype;return t.getHandler=function(e){return this.channels[e].getHandler()},t.setHandler=function(e,t){this.channels[e].setHandler(t)},t.addData=function(e,t){var r,i,a,n=!1;this.logger.time=e;for(var s=0;s<t.length;s+=2)if(i=127&t[s],a=127&t[s+1],0!==i||0!==a){if(this.logger.log(gt.DATA,"["+_t([t[s],t[s+1]])+"] -> ("+_t([i,a])+")"),(r=this.parseCmd(i,a))||(r=this.parseMidrow(i,a)),r||(r=this.parsePAC(i,a)),r||(r=this.parseBackgroundAttributes(i,a)),!r&&(n=this.parseChars(i,a))){var o=this.currentChannel;if(o&&o>0)this.channels[o].insertChars(n);else this.logger.log(gt.WARNING,"No channel found yet. TEXT-MODE?")}r||n||this.logger.log(gt.WARNING,"Couldn't parse cleaned data "+_t([i,a])+" orig: "+_t([t[s],t[s+1]]))}},t.parseCmd=function(e,t){var r=this.cmdHistory;if(!((20===e||28===e||21===e||29===e)&&t>=32&&t<=47)&&!((23===e||31===e)&&t>=33&&t<=35))return!1;if(Ot(e,t,r))return Dt(null,null,r),this.logger.log(gt.DEBUG,"Repeated command ("+_t([e,t])+") is dropped"),!0;var i=20===e||21===e||23===e?1:2,a=this.channels[i];return 20===e||21===e||28===e||29===e?32===t?a.ccRCL():33===t?a.ccBS():34===t?a.ccAOF():35===t?a.ccAON():36===t?a.ccDER():37===t?a.ccRU(2):38===t?a.ccRU(3):39===t?a.ccRU(4):40===t?a.ccFON():41===t?a.ccRDC():42===t?a.ccTR():43===t?a.ccRTD():44===t?a.ccEDM():45===t?a.ccCR():46===t?a.ccENM():47===t&&a.ccEOC():a.ccTO(t-32),Dt(e,t,r),this.currentChannel=i,!0},t.parseMidrow=function(e,t){var r=0;if((17===e||25===e)&&t>=32&&t<=47){if((r=17===e?1:2)!==this.currentChannel)return this.logger.log(gt.ERROR,"Mismatch channel in midrow parsing"),!1;var i=this.channels[r];return!!i&&(i.ccMIDROW(t),this.logger.log(gt.DEBUG,"MIDROW ("+_t([e,t])+")"),!0)}return!1},t.parsePAC=function(e,t){var r,i=this.cmdHistory;if(!((e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127)&&!((16===e||24===e)&&t>=64&&t<=95))return!1;if(Ot(e,t,i))return Dt(null,null,i),!0;var a=e<=23?1:2;r=t>=64&&t<=95?1===a?mt[e]:bt[e]:1===a?yt[e]:Tt[e];var n=this.channels[a];return!!n&&(n.setPAC(this.interpretPAC(r,t)),Dt(e,t,i),this.currentChannel=a,!0)},t.interpretPAC=function(e,t){var r=t,i={color:null,italics:!1,indent:null,underline:!1,row:e};return r=t>95?t-96:t-64,i.underline=1==(1&r),r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=4*Math.floor((r-16)/2),i},t.parseChars=function(e,t){var r,i=null,a=null;if(e>=25?(r=2,a=e-8):(r=1,a=e),a>=17&&a<=19){var n=t;n=17===a?t+80:18===a?t+112:t+144,this.logger.log(gt.INFO,"Special char '"+vt(n)+"' in channel "+r),i=[n]}else e>=32&&e<=127&&(i=0===t?[e]:[e,t]);if(i){var s=_t(i);this.logger.log(gt.DEBUG,"Char codes =  "+s.join(",")),Dt(e,t,this.cmdHistory)}return i},t.parseBackgroundAttributes=function(e,t){var r;if(!((16===e||24===e)&&t>=32&&t<=47)&&!((23===e||31===e)&&t>=45&&t<=47))return!1;var i={};16===e||24===e?(r=Math.floor((t-32)/2),i.background=Et[r],t%2==1&&(i.background=i.background+"_semi")):45===t?i.background="transparent":(i.foreground="black",47===t&&(i.underline=!0));var a=e<=23?1:2;return this.channels[a].setBkgData(i),Dt(e,t,this.cmdHistory),!0},t.reset=function(){for(var e=0;e<Object.keys(this.channels).length;e++){var t=this.channels[e];t&&t.reset()}this.cmdHistory={a:null,b:null}},t.cueSplitAtTime=function(e){for(var t=0;t<this.channels.length;t++){var r=this.channels[t];r&&r.cueSplitAtTime(e)}},e}(),It=function(){function e(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}var t=e.prototype;return t.dispatchCue=function(){null!==this.startTime&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},t.newCue=function(e,t,r){(null===this.startTime||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)},t.reset=function(){this.cueRanges=[]},e}(),Pt=function(e,t,r){return e.substr(r||0,t.length)===t},xt=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return(t>>>0).toString()},Mt={parse:function(e,t,r,i,a,n){var s,o=Object(Fe.b)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g,"\n").split("\n"),u="00:00.000",d=0,c=0,h=0,f=[],g=!0,p=!1,v=new ht;v.oncue=function(e){var t=r[i],a=r.ccOffset;t&&t.new&&(void 0!==c?a=r.ccOffset=t.start:function(e,t,r){var i=e[t],a=e[i.prevCC];if(!a||!a.new&&i.new)return e.ccOffset=e.presentationOffset=i.start,void(i.new=!1);for(;a&&a.new;)e.ccOffset+=i.start-a.start,i.new=!1,a=e[(i=a).prevCC];e.presentationOffset=r}(r,i,h)),h&&(a=h-r.presentationOffset),p&&(e.startTime+=a-c,e.endTime+=a-c),e.id=xt(e.startTime.toString())+xt(e.endTime.toString())+xt(e.text),e.text=decodeURIComponent(encodeURIComponent(e.text)),e.endTime>0&&f.push(e)},v.onparsingerror=function(e){s=e},v.onflush=function(){s&&n?n(s):a(f)},o.forEach((function(e){if(g){if(Pt(e,"X-TIMESTAMP-MAP=")){g=!1,p=!0,e.substr(16).split(",").forEach((function(e){Pt(e,"LOCAL:")?u=e.substr(6):Pt(e,"MPEGTS:")&&(d=parseInt(e.substr(7)))}));try{t+(9e4*r[i].start||0)<0&&(t+=8589934592),d-=t,c=function(e){var t=parseInt(e.substr(-3)),r=parseInt(e.substr(-6,2)),i=parseInt(e.substr(-9,2)),a=e.length>9?parseInt(e.substr(0,e.indexOf(":"))):0;if(!(Object(l.a)(t)&&Object(l.a)(r)&&Object(l.a)(i)&&Object(l.a)(a)))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+e);return t+=1e3*r,t+=6e4*i,t+=36e5*a}(u)/1e3,h=d/9e4}catch(e){p=!1,s=e}return}""===e&&(g=!1)}v.parse(e+"\n")})),v.flush()}};function Ft(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ut(e,t){return e&&e.label===t.name&&!(e.textTrack1||e.textTrack2)}var Nt=function(e){var t,r;function i(t){var r;if((r=e.call(this,t,u.a.MEDIA_ATTACHING,u.a.MEDIA_DETACHING,u.a.FRAG_PARSING_USERDATA,u.a.FRAG_DECRYPTED,u.a.MANIFEST_LOADING,u.a.MANIFEST_LOADED,u.a.FRAG_LOADED,u.a.INIT_PTS_FOUND)||this).media=null,r.config=void 0,r.enabled=!0,r.Cues=void 0,r.textTracks=[],r.tracks=[],r.initPTS=[],r.unparsedVttFrags=[],r.captionsTracks={},r.nonNativeCaptionsTracks={},r.captionsProperties=void 0,r.cea608Parser1=void 0,r.cea608Parser2=void 0,r.lastSn=-1,r.prevCC=-1,r.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},r.hls=t,r.config=t.config,r.Cues=t.config.cueHandler,r.captionsProperties={textTrack1:{label:r.config.captionsTextTrack1Label,languageCode:r.config.captionsTextTrack1LanguageCode},textTrack2:{label:r.config.captionsTextTrack2Label,languageCode:r.config.captionsTextTrack2LanguageCode},textTrack3:{label:r.config.captionsTextTrack3Label,languageCode:r.config.captionsTextTrack3LanguageCode},textTrack4:{label:r.config.captionsTextTrack4Label,languageCode:r.config.captionsTextTrack4LanguageCode}},r.config.enableCEA708Captions){var i=new It(Ft(r),"textTrack1"),a=new It(Ft(r),"textTrack2"),n=new It(Ft(r),"textTrack3"),s=new It(Ft(r),"textTrack4");r.cea608Parser1=new Ct(1,i,a),r.cea608Parser2=new Ct(3,n,s)}return r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.addCues=function(e,t,r,i,a){for(var n,s,o,l,d=!1,c=a.length;c--;){var h=a[c],f=(n=h[0],s=h[1],o=t,l=r,Math.min(s,l)-Math.max(n,o));if(f>=0&&(h[0]=Math.min(h[0],t),h[1]=Math.max(h[1],r),d=!0,f/(r-t)>.5))return}if(d||a.push([t,r]),this.config.renderTextTracksNatively)this.Cues.newCue(this.captionsTracks[e],t,r,i);else{var g=this.Cues.newCue(null,t,r,i);this.hls.trigger(u.a.CUES_PARSED,{type:"captions",cues:g,track:e})}},a.onInitPtsFound=function(e){var t=this,r=e.frag,i=e.id,a=e.initPTS,n=this.unparsedVttFrags;"main"===i&&(this.initPTS[r.cc]=a),n.length&&(this.unparsedVttFrags=[],n.forEach((function(e){t.onFragLoaded(e)})))},a.getExistingTrack=function(e){var t=this.media;if(t)for(var r=0;r<t.textTracks.length;r++){var i=t.textTracks[r];if(i[e])return i}return null},a.createCaptionsTrack=function(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)},a.createNativeTrack=function(e){if(!this.captionsTracks[e]){var t=this.captionsProperties,r=this.captionsTracks,i=this.media,a=t[e],n=a.label,s=a.languageCode,o=this.getExistingTrack(e);if(o)r[e]=o,Ne(r[e]),Ue(r[e],i);else{var l=this.createTextTrack("captions",n,s);l&&(l[e]=!0,r[e]=l)}}},a.createNonNativeTrack=function(e){if(!this.nonNativeCaptionsTracks[e]){var t=this.captionsProperties[e];if(t){var r={_id:e,label:t.label,kind:"captions",default:!!t.media&&!!t.media.default,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=r,this.hls.trigger(u.a.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[r]})}}},a.createTextTrack=function(e,t,r){var i=this.media;if(i)return i.addTextTrack(e,t,r)},a.destroy=function(){e.prototype.destroy.call(this)},a.onMediaAttaching=function(e){this.media=e.media,this._cleanTracks()},a.onMediaDetaching=function(){var e=this.captionsTracks;Object.keys(e).forEach((function(t){Ne(e[t]),delete e[t]})),this.nonNativeCaptionsTracks={}},a.onManifestLoading=function(){this.lastSn=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={}},a._cleanTracks=function(){var e=this.media;if(e){var t=e.textTracks;if(t)for(var r=0;r<t.length;r++)Ne(t[r])}},a.onManifestLoaded=function(e){var t=this;if(this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset()),this.config.enableWebVTT){var r=e.subtitles||[],i=this.tracks&&r&&this.tracks.length===r.length;if(this.tracks=e.subtitles||[],this.config.renderTextTracksNatively){var a=this.media?this.media.textTracks:[];this.tracks.forEach((function(e,r){var i;if(r<a.length){for(var n=null,s=0;s<a.length;s++)if(Ut(a[s],e)){n=a[s];break}n&&(i=n)}i||(i=t.createTextTrack("subtitles",e.name,e.lang)),e.default?i.mode=t.hls.subtitleDisplay?"showing":"hidden":i.mode="disabled",t.textTracks.push(i)}))}else if(!i&&this.tracks&&this.tracks.length){var n=this.tracks.map((function(e){return{label:e.name,kind:e.type.toLowerCase(),default:e.default,subtitleTrack:e}}));this.hls.trigger(u.a.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:n})}}this.config.enableCEA708Captions&&e.captions&&e.captions.forEach((function(e){var r=/(?:CC|SERVICE)([1-4])/.exec(e.instreamId);if(r){var i="textTrack"+r[1],a=t.captionsProperties[i];a&&(a.label=e.name,e.lang&&(a.languageCode=e.lang),a.media=e)}}))},a.onFragLoaded=function(e){var t=e.frag,r=e.payload,i=this.cea608Parser1,a=this.cea608Parser2,n=this.initPTS,s=this.lastSn,o=this.unparsedVttFrags;if("main"===t.type){var d=t.sn;t.sn!==s+1&&i&&a&&(i.reset(),a.reset()),this.lastSn=d}else if("subtitle"===t.type)if(r.byteLength){if(!Object(l.a)(n[t.cc]))return o.push(e),void(n.length&&this.hls.trigger(u.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t}));var c=t.decryptdata;null!=c&&null!=c.key&&"AES-128"===c.method||this._parseVTTs(t,r)}else this.hls.trigger(u.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t})},a._parseVTTs=function(e,t){var r=this,i=this.hls,a=this.prevCC,n=this.textTracks,s=this.vttCCs;s[e.cc]||(s[e.cc]={start:e.start,prevCC:a,new:!0},this.prevCC=e.cc),Mt.parse(t,this.initPTS[e.cc],s,e.cc,(function(t){if(r.config.renderTextTracksNatively){var a=n[e.level];if("disabled"===a.mode)return void i.trigger(u.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e});t.forEach((function(e){if(!a.cues.getCueById(e.id))try{if(a.addCue(e),!a.cues.getCueById(e.id))throw new Error("addCue is failed for: "+e)}catch(r){d.b.debug("Failed occurred on adding cues: "+r);var t=new window.TextTrackCue(e.startTime,e.endTime,e.text);t.id=e.id,a.addCue(t)}}))}else{var s=r.tracks[e.level].default?"default":"subtitles"+e.level;i.trigger(u.a.CUES_PARSED,{type:"subtitles",cues:t,track:s})}i.trigger(u.a.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})}),(function(t){d.b.log("Failed to parse VTT cue: "+t),i.trigger(u.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e})}))},a.onFragDecrypted=function(e){var t=e.frag,r=e.payload;if("subtitle"===t.type){if(!Object(l.a)(this.initPTS[t.cc]))return void this.unparsedVttFrags.push(e);this._parseVTTs(t,r)}},a.onFragParsingUserdata=function(e){var t=this.cea608Parser1,r=this.cea608Parser2;if(this.enabled&&t&&r)for(var i=0;i<e.samples.length;i++){var a=e.samples[i].bytes;if(a){var n=this.extractCea608Data(a);t.addData(e.samples[i].pts,n[0]),r.addData(e.samples[i].pts,n[1])}}},a.extractCea608Data=function(e){for(var t=31&e[0],r=2,i=[[],[]],a=0;a<t;a++){var n=e[r++],s=127&e[r++],o=127&e[r++],l=3&n;0===s&&0===o||0!=(4&n)&&(0!==l&&1!==l||(i[l].push(s),i[l].push(o)))}return i},i}(h);function Bt(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Gt(e){for(var t=[],r=0;r<e.length;r++){var i=e[r];"subtitles"===i.kind&&i.label&&t.push(e[r])}return t}var Kt=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.MEDIA_ATTACHED,u.a.MEDIA_DETACHING,u.a.MANIFEST_LOADED,u.a.SUBTITLE_TRACK_LOADED)||this).tracks=[],r.trackId=-1,r.media=null,r.stopped=!0,r.subtitleDisplay=!0,r.queuedDefaultTrack=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,o=i.prototype;return o.destroy=function(){h.prototype.destroy.call(this)},o.onMediaAttached=function(e){var t=this;this.media=e.media,this.media&&(Object(l.a)(this.queuedDefaultTrack)&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=null),this.trackChangeListener=this._onTextTracksChanged.bind(this),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.subtitlePollingInterval=setInterval((function(){t.trackChangeListener()}),500):this.media.textTracks.addEventListener("change",this.trackChangeListener))},o.onMediaDetaching=function(){this.media&&(this.useTextTrackPolling?clearInterval(this.subtitlePollingInterval):this.media.textTracks.removeEventListener("change",this.trackChangeListener),Object(l.a)(this.subtitleTrack)&&(this.queuedDefaultTrack=this.subtitleTrack),Gt(this.media.textTracks).forEach((function(e){Ne(e)})),this.subtitleTrack=-1,this.media=null)},o.onManifestLoaded=function(e){var t=this,r=e.subtitles||[];this.tracks=r,this.hls.trigger(u.a.SUBTITLE_TRACKS_UPDATED,{subtitleTracks:r}),r.forEach((function(e){e.default&&(t.media?t.subtitleTrack=e.id:t.queuedDefaultTrack=e.id)}))},o.onSubtitleTrackLoaded=function(e){var t=this,r=e.id,i=e.details,a=this.trackId,n=this.tracks,s=n[a];if(r>=n.length||r!==a||!s||this.stopped)this._clearReloadTimer();else if(d.b.log("subtitle track "+r+" loaded"),i.live){var o=ae(s.details,i,e.stats.trequest);d.b.log("Reloading live subtitle playlist in "+o+"ms"),this.timer=setTimeout((function(){t._loadCurrentTrack()}),o)}else this._clearReloadTimer()},o.startLoad=function(){this.stopped=!1,this._loadCurrentTrack()},o.stopLoad=function(){this.stopped=!0,this._clearReloadTimer()},o._clearReloadTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},o._loadCurrentTrack=function(){var e=this.trackId,t=this.tracks,r=this.hls,i=t[e];e<0||!i||i.details&&!i.details.live||(d.b.log("Loading subtitle track "+e),r.trigger(u.a.SUBTITLE_TRACK_LOADING,{url:i.url,id:e}))},o._toggleTrackModes=function(e){var t=this.media,r=this.subtitleDisplay,i=this.trackId;if(t){var a=Gt(t.textTracks);if(-1===e)[].slice.call(a).forEach((function(e){e.mode="disabled"}));else{var n=a[i];n&&(n.mode="disabled")}var s=a[e];s&&(s.mode=r?"showing":"hidden")}},o._setSubtitleTrackInternal=function(e){var t=this.hls,r=this.tracks;!Object(l.a)(e)||e<-1||e>=r.length||(this.trackId=e,d.b.log("Switching to subtitle track "+e),t.trigger(u.a.SUBTITLE_TRACK_SWITCH,{id:e}),this._loadCurrentTrack())},o._onTextTracksChanged=function(){if(this.media&&this.hls.config.renderTextTracksNatively){for(var e=-1,t=Gt(this.media.textTracks),r=0;r<t.length;r++)if("hidden"===t[r].mode)e=r;else if("showing"===t[r].mode){e=r;break}this.subtitleTrack=e}},a=i,(n=[{key:"subtitleTracks",get:function(){return this.tracks}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(e){this.trackId!==e&&(this._toggleTrackModes(e),this._setSubtitleTrackInternal(e))}}])&&Bt(a.prototype,n),s&&Bt(a,s),i}(h),jt=r(7);var Ht,Vt=window.performance,Yt=function(e){var t,r;function i(t,r){var i;return(i=e.call(this,t,u.a.MEDIA_ATTACHED,u.a.MEDIA_DETACHING,u.a.ERROR,u.a.KEY_LOADED,u.a.FRAG_LOADED,u.a.SUBTITLE_TRACKS_UPDATED,u.a.SUBTITLE_TRACK_SWITCH,u.a.SUBTITLE_TRACK_LOADED,u.a.SUBTITLE_FRAG_PROCESSED,u.a.LEVEL_UPDATED)||this).fragmentTracker=r,i.config=t.config,i.state=pe,i.tracks=[],i.tracksBuffered=[],i.currentTrackId=-1,i.decrypter=new jt.a(t,t.config),i.lastAVStart=0,i._onMediaSeeking=i.onMediaSeeking.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i)),i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.onSubtitleFragProcessed=function(e){var t=e.frag,r=e.success;if(this.fragPrevious=t,this.state=me,r){var i=this.tracksBuffered[this.currentTrackId];if(i){for(var a,n=t.start,s=0;s<i.length;s++)if(n>=i[s].start&&n<=i[s].end){a=i[s];break}var o=t.start+t.duration;a?a.end=o:(a={start:n,end:o},i.push(a))}}},a.onMediaAttached=function(e){var t=e.media;this.media=t,t.addEventListener("seeking",this._onMediaSeeking),this.state=me},a.onMediaDetaching=function(){var e=this;this.media&&(this.media.removeEventListener("seeking",this._onMediaSeeking),this.fragmentTracker.removeAllFragments(),this.currentTrackId=-1,this.tracks.forEach((function(t){e.tracksBuffered[t.id]=[]})),this.media=null,this.state=pe)},a.onError=function(e){var t=e.frag;t&&"subtitle"===t.type&&(this.state=me)},a.onSubtitleTracksUpdated=function(e){var t=this;d.b.log("subtitle tracks updated"),this.tracksBuffered=[],this.tracks=e.subtitleTracks,this.tracks.forEach((function(e){t.tracksBuffered[e.id]=[]}))},a.onSubtitleTrackSwitch=function(e){if(this.currentTrackId=e.id,this.tracks&&this.tracks.length&&-1!==this.currentTrackId){var t=this.tracks[this.currentTrackId];t&&t.details&&this.setInterval(500)}else this.clearInterval()},a.onSubtitleTrackLoaded=function(e){var t=e.id,r=e.details,i=this.currentTrackId,a=this.tracks,n=a[i];t>=a.length||t!==i||!n||(r.live&&function(e,t,r){void 0===r&&(r=0);var i=-1;ie(e,t,(function(e,t,r){t.start=e.start,i=r}));var a=t.fragments;if(i<0)a.forEach((function(e){e.start+=r}));else for(var n=i+1;n<a.length;n++)a[n].start=a[n-1].start+a[n-1].duration}(n.details,r,this.lastAVStart),n.details=r,this.setInterval(500))},a.onKeyLoaded=function(){this.state===be&&(this.state=me)},a.onFragLoaded=function(e){var t=this.fragCurrent,r=e.frag.decryptdata,i=e.frag,a=this.hls;if(this.state===Te&&t&&"subtitle"===e.frag.type&&t.sn===e.frag.sn&&e.payload.byteLength>0&&r&&r.key&&"AES-128"===r.method){var n=Vt.now();this.decrypter.decrypt(e.payload,r.key.buffer,r.iv.buffer,(function(e){var t=Vt.now();a.trigger(u.a.FRAG_DECRYPTED,{frag:i,payload:e,stats:{tstart:n,tdecrypt:t}})}))}},a.onLevelUpdated=function(e){var t=e.details.fragments;this.lastAVStart=t.length?t[0].start:0},a.doTick=function(){if(this.media)switch(this.state){case me:var e=this.config,t=this.currentTrackId,r=this.fragmentTracker,i=this.media,a=this.tracks;if(!a||!a[t]||!a[t].details)break;var n,s=e.maxBufferHole,o=e.maxFragLookUpTolerance,l=Math.min(e.maxBufferLength,e.maxMaxBufferLength),c=H.bufferedInfo(this._getBuffered(),i.currentTime,s),h=c.end,f=c.len,g=a[t].details,p=g.fragments,v=p.length,m=p[v-1].start+p[v-1].duration;if(f>l)return;var y=this.fragPrevious;h<m?(y&&g.hasProgramDateTime&&(n=le(p,y.endProgramDateTime,o)),n||(n=ue(y,p,h,o))):n=p[v-1],n&&n.encrypted?(d.b.log("Loading key for "+n.sn),this.state=be,this.hls.trigger(u.a.KEY_LOADING,{frag:n})):n&&r.getState(n)===U&&(this.fragCurrent=n,this.state=Te,this.hls.trigger(u.a.FRAG_LOADING,{frag:n}))}else this.state=me},a.stopLoad=function(){this.lastAVStart=0,e.prototype.stopLoad.call(this)},a._getBuffered=function(){return this.tracksBuffered[this.currentTrackId]||[]},a.onMediaSeeking=function(){this.fragPrevious=null},i}(Oe);!function(e){e.WIDEVINE="com.widevine.alpha",e.PLAYREADY="com.microsoft.playready"}(Ht||(Ht={}));var Wt="undefined"!=typeof window&&window.navigator&&window.navigator.requestMediaKeySystemAccess?window.navigator.requestMediaKeySystemAccess.bind(window.navigator):null;function qt(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Xt=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,u.a.MEDIA_ATTACHED,u.a.MEDIA_DETACHED,u.a.MANIFEST_PARSED)||this)._widevineLicenseUrl=void 0,r._licenseXhrSetup=void 0,r._emeEnabled=void 0,r._requestMediaKeySystemAccess=void 0,r._drmSystemOptions=void 0,r._config=void 0,r._mediaKeysList=[],r._media=null,r._hasSetMediaKeys=!1,r._requestLicenseFailureCount=0,r.mediaKeysPromise=null,r._onMediaEncrypted=function(e){if(d.b.log('Media is encrypted using "'+e.initDataType+'" init data type'),!r.mediaKeysPromise)return d.b.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),void r.hls.trigger(u.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_KEYS,fatal:!0});var t=function(t){r._media&&(r._attemptSetMediaKeys(t),r._generateRequestWithPreferredKeySession(e.initDataType,e.initData))};r.mediaKeysPromise.then(t).catch(t)},r._config=t.config,r._widevineLicenseUrl=r._config.widevineLicenseUrl,r._licenseXhrSetup=r._config.licenseXhrSetup,r._emeEnabled=r._config.emeEnabled,r._requestMediaKeySystemAccess=r._config.requestMediaKeySystemAccessFunc,r._drmSystemOptions=t.config.drmSystemOptions,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,l=i.prototype;return l.getLicenseServerUrl=function(e){switch(e){case Ht.WIDEVINE:if(!this._widevineLicenseUrl)break;return this._widevineLicenseUrl}throw new Error('no license server URL configured for key-system "'+e+'"')},l._attemptKeySystemAccess=function(e,t,r){var i=this,a=function(e,t,r,i){switch(e){case Ht.WIDEVINE:return function(e,t,r){var i={audioCapabilities:[],videoCapabilities:[]};return e.forEach((function(e){i.audioCapabilities.push({contentType:'audio/mp4; codecs="'+e+'"',robustness:r.audioRobustness||""})})),t.forEach((function(e){i.videoCapabilities.push({contentType:'video/mp4; codecs="'+e+'"',robustness:r.videoRobustness||""})})),[i]}(t,r,i);default:throw new Error("Unknown key-system: "+e)}}(e,t,r,this._drmSystemOptions);d.b.log("Requesting encrypted media key-system access");var n=this.requestMediaKeySystemAccess(e,a);this.mediaKeysPromise=n.then((function(t){return i._onMediaKeySystemAccessObtained(e,t)})),n.catch((function(t){d.b.error('Failed to obtain key-system "'+e+'" access:',t)}))},l._onMediaKeySystemAccessObtained=function(e,t){var r=this;d.b.log('Access for key-system "'+e+'" obtained');var i={mediaKeysSessionInitialized:!1,mediaKeySystemAccess:t,mediaKeySystemDomain:e};this._mediaKeysList.push(i);var a=Promise.resolve().then((function(){return t.createMediaKeys()})).then((function(t){return i.mediaKeys=t,d.b.log('Media-keys created for key-system "'+e+'"'),r._onMediaKeysCreated(),t}));return a.catch((function(e){d.b.error("Failed to create media-keys:",e)})),a},l._onMediaKeysCreated=function(){var e=this;this._mediaKeysList.forEach((function(t){t.mediaKeysSession||(t.mediaKeysSession=t.mediaKeys.createSession(),e._onNewMediaKeySession(t.mediaKeysSession))}))},l._onNewMediaKeySession=function(e){var t=this;d.b.log("New key-system session "+e.sessionId),e.addEventListener("message",(function(r){t._onKeySessionMessage(e,r.message)}),!1)},l._onKeySessionMessage=function(e,t){d.b.log("Got EME message event, creating license request"),this._requestLicense(t,(function(t){d.b.log("Received license data (length: "+(t?t.byteLength:t)+"), updating key-session"),e.update(t)}))},l._attemptSetMediaKeys=function(e){if(!this._media)throw new Error("Attempted to set mediaKeys without first attaching a media element");if(!this._hasSetMediaKeys){var t=this._mediaKeysList[0];if(!t||!t.mediaKeys)return d.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),void this.hls.trigger(u.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_KEYS,fatal:!0});d.b.log("Setting keys for encrypted media"),this._media.setMediaKeys(t.mediaKeys),this._hasSetMediaKeys=!0}},l._generateRequestWithPreferredKeySession=function(e,t){var r=this,i=this._mediaKeysList[0];if(!i)return d.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),void this.hls.trigger(u.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_ACCESS,fatal:!0});if(i.mediaKeysSessionInitialized)d.b.warn("Key-Session already initialized but requested again");else{var a=i.mediaKeysSession;if(!a)return d.b.error("Fatal: Media is encrypted but no key-session existing"),void this.hls.trigger(u.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_SESSION,fatal:!0});if(!t)return d.b.warn("Fatal: initData required for generating a key session is null"),void this.hls.trigger(u.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_INIT_DATA,fatal:!0});d.b.log('Generating key-session request for "'+e+'" init data type'),i.mediaKeysSessionInitialized=!0,a.generateRequest(e,t).then((function(){d.b.debug("Key-session generation succeeded")})).catch((function(e){d.b.error("Error generating key-session request:",e),r.hls.trigger(u.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_SESSION,fatal:!1})}))}},l._createLicenseXhr=function(e,t,r){var i=new XMLHttpRequest,a=this._licenseXhrSetup;try{if(a)try{a(i,e)}catch(t){i.open("POST",e,!0),a(i,e)}i.readyState||i.open("POST",e,!0)}catch(e){throw new Error("issue setting up KeySystem license XHR "+e)}return i.responseType="arraybuffer",i.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,i,e,t,r),i},l._onLicenseRequestReadyStageChange=function(e,t,r,i){switch(e.readyState){case 4:if(200===e.status)this._requestLicenseFailureCount=0,d.b.log("License request succeeded"),"arraybuffer"!==e.responseType&&d.b.warn("xhr response type was not set to the expected arraybuffer for license request"),i(e.response);else{if(d.b.error("License Request XHR failed ("+t+"). Status: "+e.status+" ("+e.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount>3)return void this.hls.trigger(u.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0});var a=3-this._requestLicenseFailureCount+1;d.b.warn("Retrying license request, "+a+" attempts left"),this._requestLicense(r,i)}}},l._generateLicenseRequestChallenge=function(e,t){switch(e.mediaKeySystemDomain){case Ht.WIDEVINE:return t}throw new Error("unsupported key-system: "+e.mediaKeySystemDomain)},l._requestLicense=function(e,t){d.b.log("Requesting content license for key-system");var r=this._mediaKeysList[0];if(!r)return d.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),void this.hls.trigger(u.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_ACCESS,fatal:!0});try{var i=this.getLicenseServerUrl(r.mediaKeySystemDomain),a=this._createLicenseXhr(i,e,t);d.b.log("Sending license request to URL: "+i);var n=this._generateLicenseRequestChallenge(r,e);a.send(n)}catch(e){d.b.error("Failure requesting DRM license: "+e),this.hls.trigger(u.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}},l.onMediaAttached=function(e){if(this._emeEnabled){var t=e.media;this._media=t,t.addEventListener("encrypted",this._onMediaEncrypted)}},l.onMediaDetached=function(){var e=this._media,t=this._mediaKeysList;e&&(e.removeEventListener("encrypted",this._onMediaEncrypted),this._media=null,this._mediaKeysList=[],Promise.all(t.map((function(e){if(e.mediaKeysSession)return e.mediaKeysSession.close().catch((function(){}))}))).then((function(){return e.setMediaKeys(null)})).catch((function(){})))},l.onManifestParsed=function(e){if(this._emeEnabled){var t=e.levels.map((function(e){return e.audioCodec})),r=e.levels.map((function(e){return e.videoCodec}));this._attemptKeySystemAccess(Ht.WIDEVINE,t,r)}},a=i,(n=[{key:"requestMediaKeySystemAccess",get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess}}])&&qt(a.prototype,n),s&&qt(a,s),i}(h);function zt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function Qt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?zt(Object(r),!0).forEach((function(t){$t(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Jt=Qt(Qt({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,liveDurationInfinity:!1,liveBackBufferLength:1/0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:$e,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,abrController:Ve,bufferController:We,capLevelController:Xe,fpsController:Qe,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:Wt,testBandwidth:!0},{cueHandler:i,enableCEA708Captions:!0,enableWebVTT:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}),{},{subtitleStreamController:Yt,subtitleTrackController:Kt,timelineController:Nt,audioStreamController:rt,audioTrackController:Ze,emeController:Xt});function Zt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function er(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Zt(Object(r),!0).forEach((function(t){tr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Zt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function tr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function rr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ir(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ar(e,t,r){return t&&ir(e.prototype,t),r&&ir(e,r),e}var nr=function(e){var t,r;function i(t){var r;void 0===t&&(t={}),(r=e.call(this)||this).config=void 0,r._autoLevelCapping=void 0,r.abrController=void 0,r.capLevelController=void 0,r.levelController=void 0,r.streamController=void 0,r.networkControllers=void 0,r.audioTrackController=void 0,r.subtitleTrackController=void 0,r.emeController=void 0,r.coreComponents=void 0,r.media=null,r.url=null;var a=i.DefaultConfig;if((t.liveSyncDurationCount||t.liveMaxLatencyDurationCount)&&(t.liveSyncDuration||t.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");r.config=er(er({},a),t);var n=rr(r).config;if(void 0!==n.liveMaxLatencyDurationCount&&n.liveMaxLatencyDurationCount<=n.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==n.liveMaxLatencyDuration&&(void 0===n.liveSyncDuration||n.liveMaxLatencyDuration<=n.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');Object(d.a)(n.debug),r._autoLevelCapping=-1;var s=r.abrController=new n.abrController(rr(r)),o=new n.bufferController(rr(r)),l=r.capLevelController=new n.capLevelController(rr(r)),u=new n.fpsController(rr(r)),c=new x(rr(r)),h=new M(rr(r)),f=new F(rr(r)),g=new Be(rr(r)),p=r.levelController=new Me(rr(r)),v=new K(rr(r)),m=[p,r.streamController=new Pe(rr(r),v)],y=n.audioStreamController;y&&m.push(new y(rr(r),v)),r.networkControllers=m;var b=[c,h,f,s,o,l,u,g,v];if(y=n.audioTrackController){var T=new y(rr(r));r.audioTrackController=T,b.push(T)}if(y=n.subtitleTrackController){var E=new y(rr(r));r.subtitleTrackController=E,m.push(E)}if(y=n.emeController){var S=new y(rr(r));r.emeController=S,b.push(S)}return(y=n.subtitleStreamController)&&m.push(new y(rr(r),v)),(y=n.timelineController)&&b.push(new y(rr(r))),r.coreComponents=b,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.isSupported=function(){return function(){var e=q();if(!e)return!1;var t=self.SourceBuffer||self.WebKitSourceBuffer,r=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return!!r&&!!i}()},ar(i,null,[{key:"version",get:function(){return"0.14.0"}},{key:"Events",get:function(){return u.a}},{key:"ErrorTypes",get:function(){return o.b}},{key:"ErrorDetails",get:function(){return o.a}},{key:"DefaultConfig",get:function(){return i.defaultConfig?i.defaultConfig:Jt},set:function(e){i.defaultConfig=e}}]);var a=i.prototype;return a.destroy=function(){d.b.log("destroy"),this.trigger(u.a.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach((function(e){e.destroy()})),this.url=null,this.removeAllListeners(),this._autoLevelCapping=-1},a.attachMedia=function(e){d.b.log("attachMedia"),this.media=e,this.trigger(u.a.MEDIA_ATTACHING,{media:e})},a.detachMedia=function(){d.b.log("detachMedia"),this.trigger(u.a.MEDIA_DETACHING),this.media=null},a.loadSource=function(e){e=s.buildAbsoluteURL(window.location.href,e,{alwaysNormalize:!0}),d.b.log("loadSource:"+e),this.url=e,this.trigger(u.a.MANIFEST_LOADING,{url:e})},a.startLoad=function(e){void 0===e&&(e=-1),d.b.log("startLoad("+e+")"),this.networkControllers.forEach((function(t){t.startLoad(e)}))},a.stopLoad=function(){d.b.log("stopLoad"),this.networkControllers.forEach((function(e){e.stopLoad()}))},a.swapAudioCodec=function(){d.b.log("swapAudioCodec"),this.streamController.swapAudioCodec()},a.recoverMediaError=function(){d.b.log("recoverMediaError");var e=this.media;this.detachMedia(),e&&this.attachMedia(e)},a.removeLevel=function(e,t){void 0===t&&(t=0),this.levelController.removeLevel(e,t)},ar(i,[{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(e){d.b.log("set currentLevel:"+e),this.loadLevel=e,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(e){d.b.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(e){d.b.log("set loadLevel:"+e),this.levelController.manualLevel=e}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){d.b.log("set firstLevel:"+e),this.levelController.firstLevel=e}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(e){d.b.log("set startLevel:"+e),-1!==e&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}},{key:"capLevelToPlayerSize",set:function(e){var t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){d.b.log("set autoLevelCapping:"+e),this._autoLevelCapping=e}},{key:"bandwidthEstimate",get:function(){var e=this.abrController._bwEstimator;return e?e.getEstimate():NaN}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){for(var e=this.levels,t=this.config.minAutoBitrate,r=e?e.length:0,i=0;i<r;i++){if((e[i].realBitrate?Math.max(e[i].realBitrate,e[i].bitrate):e[i].bitrate)>t)return i}return 0}},{key:"maxAutoLevel",get:function(){var e=this.levels,t=this.autoLevelCapping;return-1===t&&e&&e.length?e.length-1:t}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)}},{key:"audioTracks",get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]}},{key:"audioTrack",get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var t=this.audioTrackController;t&&(t.audioTrack=e)}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}},{key:"subtitleTracks",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}},{key:"subtitleDisplay",get:function(){var e=this.subtitleTrackController;return!!e&&e.subtitleDisplay},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}}]),i}(z);nr.defaultConfig=void 0}]).default}));

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
var SLIDE_IMAGE = PreviewUrls.MEDIUM;
var BACKGROUND_IMAGE = PreviewUrls.STANDART;
var ACTIVE_BUTTON_CLASS = 'videos__video-button--active';
var videos = [{
  title: "No Doubt - Don't Speak RUS COVER/НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=qRLaYz4Azf8"
}, {
  title: "Motionless In White - Voices RUS COVER/КАВЕР НА РУССКОМ (feat. Ник Черников)",
  href: "https://www.youtube.com/watch?v=iTLK1gMf-LE"
}, {
  title: "LINKIN PARK - One More Light RUS COVER/КАВЕР НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=-v_MEQ6naJA"
}, {
  title: "Skillet - Hero RUS COVER/КАВЕР НА РУССКОМ (feat. BugaGamesTV)",
  href: "https://www.youtube.com/watch?v=a-1y-p52gwQ"
}, {
  title: "Rag'n'Bone Man - Human RUS COVER/ НА РУССКОМ КАВЕР",
  href: "https://www.youtube.com/watch?v=pYp9y2NZURc"
}, {
  title: "LINKIN PARK - GIVEN UP RUS/ НА РУССКОМ КАВЕР",
  href: "https://www.youtube.com/watch?v=m2leRAXFbAc"
}, {
  title: "Three Days Grace - Over and Over RUS COVER/ КАВЕР НА РУССКОМ ЯЗЫКЕ",
  href: "https://www.youtube.com/watch?v=-efKUN4XIoM"
}, {
  title: "BRING ME THE HORIZON  -  SHADOW MOSES RUS COVER/НА РУССКОМ В ЖЕНСКОЙ ВЕРСИИ",
  href: "https://www.youtube.com/watch?v=r-X6ZNPqhbc"
}, // {title: "КАРАНТИНО (Веселая песня про карантин by Ai Mori) #карантиновидение2020", href: "https://www.youtube.com/watch?v=GOsa15ZPeNI"},
{
  title: "The Killers - Mr. Brightside RUS/НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=BbjdNQQpT7o"
}, {
  title: "Drowning Pool - Tear Away RUS/ РУССКИЙ КАВЕР",
  href: "https://www.youtube.com/watch?v=PosxJAVMCMo"
}, {
  title: "30  Seconds To Mars - The Kill RUS cover НА РУССКОМ",
  href: "https://www.youtube.com/watch?v=hz0bmNkyyUs"
}, {
  title: "The Rasmus - In the Shadows RUS/РУССКИЙ КАВЕР",
  href: "https://www.youtube.com/watch?v=KUz7SQaaxWc"
}, {
  title: "Tokio Hotel - Monsoon RUS/РУССКИЙ КАВЕР",
  href: "https://www.youtube.com/watch?v=lJlaZmL37kY"
}, {
  title: "The Pretty Reckless - Just Tonight RUS/РУССКИЙ КАВЕР",
  href: "https://www.youtube.com/watch?v=YbKMQJ1-xwE"
}, {
  title: "Open Door - Mike Shinoda feat. Ai Mori #SingOpenDoor",
  href: "https://www.youtube.com/watch?v=M6IachIhOb8"
}, {
  title: "Breaking The Habit - Linkin Park  НА РУССКОМ/ RUS COVER",
  href: "https://www.youtube.com/watch?v=9vdpNoarFJU"
}, {
  title: "My Heart Will Go On (Céline Dion RUS COVER / РУССКАЯ ВЕРСИЯ OST ТИТАНИК)",
  href: "https://www.youtube.com/watch?v=pEN2dCahQXg"
}, {
  title: "Architects - Royal Beggars RUS COVER / РУССКАЯ ВЕРСИЯ",
  href: "https://www.youtube.com/watch?v=FRupDpVDJiQ"
}, {
  title: "Green Day - Boulevard Of Broken Dreams (RUS COVER/ НА РУССКОМ КАВЕР)",
  href: "https://www.youtube.com/watch?v=Mc62sKuhSLs"
}, {
  title: "Roxette - Listen To Your Heart (ROCK RUS COVER / НА РУССКОМ РОК )",
  href: "https://www.youtube.com/watch?v=NOCYGQaWCMM"
}, {
  title: "LINKIN PARK - CRAWLING RUS COVER / РУССКАЯ ВЕРСИЯ",
  href: "https://www.youtube.com/watch?v=rGy1UgqmBzQ"
}, {
  title: "BRITNEY SPEARS - TOXIC  РОК ВЕРСИЯ НА РУССКОМ/ ROCK RUSSIAN VERSION",
  href: "https://www.youtube.com/watch?v=A26wP9LqG84"
}, {
  title: "Flyleaf - I'm So Sick  RUS COVER / РУССКАЯ ВЕРСИЯ",
  href: "https://www.youtube.com/watch?v=5KCMOVjez64"
}, {
  title: "BRING ME THE HORIZON -  SLEEPWALKING | RUS COVER / НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ",
  href: "https://www.youtube.com/watch?v=EmOdHWz-vtw"
}, {
  title: "ВЕДЬМАКУ ЗАПЛАТИТЕ ЧЕКАННОЙ МОНЕТОЙ укулеле ( Ft. Глад Валакас, Геральт из Ривии)",
  href: "https://www.youtube.com/watch?v=vPVQZJwPLLo"
}, {
  title: "В ЛЕСУ РОДИЛАСЬ ЕЛОЧКА| Rock версия",
  href: "https://www.youtube.com/watch?v=MfOvc50foQM"
}, {
  title: "MAD WORLD НА РУССКОМ (RUSSIAN VERSION)",
  href: "https://www.youtube.com/watch?v=DSwoYP90xRE"
}, {
  title: "EVANESCENCE НА РУССКОМ (RUSSIAN VERSION)",
  href: "https://www.youtube.com/watch?v=4_Pj9idMxGI"
}, {
  title: "LINKIN PARK НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ",
  href: "https://www.youtube.com/watch?v=1PCKOis6EQY"
}, {
  title: "KATY PERRY НА РУССКОМ ЯЗЫКЕ (ft. Женя Hawk)",
  href: "https://www.youtube.com/watch?v=jxcFI3Qnkus"
}, {
  title: "AVRIL LAVIGNE НА РУССКОМ ЯЗЫКЕ",
  href: "https://www.youtube.com/watch?v=UXlpXwP0LoU"
}, {
  title: "Ai Mori ft. HEYLEE, ДНК, INS1DE - BAN TWITCH",
  href: "https://www.youtube.com/watch?v=K7mXZXePMZ4"
}, {
  title: "Billie Eilish НА РУССКОМ ЯЗЫКЕ",
  href: "https://www.youtube.com/watch?v=FxaA4R4YHmo"
}, // Блогеры
{
  title: "itpedia : 50 ОТТЕНКОВ ШЕВЦОВА",
  href: "https://www.youtube.com/watch?v=b__rJ_yAcSk"
}, {
  title: "Ai Mori и Глад Валакас (Feat. Midix)",
  href: "https://www.youtube.com/watch?v=PIh7aMRBaJI"
}, {
  title: "Ai Mori и olyashaa",
  href: "https://www.youtube.com/watch?v=ZwJ9G-nhRjU"
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
    return acc + "<div class=\"swiper-slide\">\n        <div class=\"swiper-lazy-preloader\"></div>\n        <button type=\"button\" data-id=\"".concat(videoId, "\" class=\"videos__video-button\">\n          <img data-src=\"").concat(PREVIEW_URL, "/").concat(videoId, "/").concat(SLIDE_IMAGE, "\" alt=\"").concat(video.title, "\" class=\"swiper-lazy\">\n        </button>\n      </div>");
  }, '');
}

function fillSlider(videos) {
  var slider = document.querySelector('.swiper-wrapper');
  var markup = generateSlides(videos);
  slider.insertAdjacentHTML('afterbegin', markup);
}

function runVideo(id) {
  var iframe = "<iframe src=\"https://www.youtube.com/embed/".concat(id, "?autoplay=1\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"allowfullscreen\"></iframe>");
  videoBackground.style.backgroundImage = "url(".concat(PREVIEW_URL, "/").concat(id, "/").concat(BACKGROUND_IMAGE, ")");
  videoPlayer.innerHTML = '';
  videoPlayer.insertAdjacentHTML('afterbegin', iframe);
}

function hideOverlay() {
  playOverlay.classList.add('videos__play-overlay--hidden');
  videoPreloader.classList.add('videos__preloader--visible');
}

(function () {
  var player = new Playerjs({
    id: 'player',
    file: [{
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
    }]
  });
  fillSlider(videos);
  var videosButtons = document.querySelectorAll('.videos__video-button');
  videosButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var activeButton = document.querySelector(".".concat(ACTIVE_BUTTON_CLASS));
      var target = event.currentTarget;
      var videoId = target.dataset.id;
      hideOverlay();

      if (activeButton) {
        activeButton.classList.remove(ACTIVE_BUTTON_CLASS);
      }

      target.classList.add(ACTIVE_BUTTON_CLASS);
      runVideo(videoId);
    });
  });
  var DEFAULT_VIDEO_INDEX = 0;
  var defaultVideo = videos[DEFAULT_VIDEO_INDEX];
  videosButtons[DEFAULT_VIDEO_INDEX].classList.add(ACTIVE_BUTTON_CLASS);
  videoBackground.style.backgroundImage = "url(".concat(PREVIEW_URL, "/").concat(parseVideoId(defaultVideo), "/").concat(BACKGROUND_IMAGE, ")");
  playOverlay.addEventListener('click', function () {
    runVideo(parseVideoId(defaultVideo));
    hideOverlay();
  });
  var mySwiper = new Swiper('.swiper-container', {
    preloadImages: false,
    lazy: true,
    slidesPerView: 3,
    spaceBetween: 5,
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
        spaceBetween: 15,
        slidesPerGroup: 2,
        freeMode: true
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
  });
})();