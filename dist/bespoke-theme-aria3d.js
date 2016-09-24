/*!
 * bespoke-theme-aria3d v1.0.0
 *
 * Copyright 2016, 
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var f=o;f=f.bespoke||(f.bespoke={}),f=f.themes||(f.themes={}),f.aria3d=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = function() {
  var css = "@import 'https://fonts.googleapis.com/css?family=Open+Sans:400,100,300,700';html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress{display:inline-block;vertical-align:baseline}video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*,::before,::after{box-sizing:inherit}html{box-sizing:border-box;font-size:16px;quotes:\"\\201c\" \"\\201d\"}aside[role=note]{display:none}figure{margin:0}img,video{vertical-align:middle}p,li{line-height:normal}p{line-height:1.5;margin:0 0 .75rem}.deck{overflow:hidden;background-color:#212121;font-family:\"Open Sans\",sans-serif;font-size:2em;color:#212121;-webkit-font-feature-settings:\"kern\" 1;-moz-font-feature-settings:\"kern\" 1;font-feature-settings:\"kern\" 1;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.deck:not(.bespoke-parent),.deck section:not(.bespoke-slide){display:none}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;right:0;bottom:0;left:0}.bespoke-scale-parent,.bespoke-slide,.bespoke-slide-canvas{pointer-events:none}.bespoke-slide{overflow:hidden;opacity:0;background-color:#fafafa;position:absolute;top:50%;left:50%;width:1280px;margin-left:-640px;height:720px;margin-top:-360px;padding:1em;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;transition:none}.bespoke-active{pointer-events:auto;opacity:1;z-index:1}.bespoke-active.no-transition{transition:none}.bespoke-bullet-inactive{visibility:hidden}.fade .bespoke-bullet-active:not(.bespoke-bullet-current){opacity:.1}.vanish .bespoke-bullet-active:not(.bespoke-bullet-current){opacity:0}h1,h2{font-weight:400;color:#414243;border-bottom:2px solid #d1d2d3;width:100%;margin:0 0 30px;padding:0}section.title{background-color:#414243}section.title h1{color:#fff}.bespoke-overview{-ms-overflow-style:none}.bespoke-overview::-webkit-scrollbar{width:0}.bespoke-overview .bespoke-active{outline-color:#00897b}.bespoke-overview .bespoke-bullet{opacity:1!important}.bespoke-overview>footer,.bespoke-overview .bespoke-progress-parent{display:none}.bespoke-overview-to .bespoke-slide,.bespoke-overview-from .bespoke-slide{transition:none}";
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};

},{"bespoke-classes":2,"insert-css":3}],2:[function(_dereq_,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],3:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}]},{},[1])
(1)
});