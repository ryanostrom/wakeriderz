!function t(r,e,n){function i(o,u){if(!e[o]){if(!r[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var f=e[o]={exports:{}};r[o][0].call(f.exports,function(t){var e=r[o][1][t];return i(e?e:t)},f,f.exports,t,r,e,n)}return e[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}({1:[function(t,r,e){"use strict";!function(t){var r={$nav:t("nav"),init:function(){this.setDefs(!0,!0),this.update()},setDefs:function(r,e){this.$currentTop=r?parseFloat(t(window).scrollTop()):this.$currentTop,this.$previousTop=e?this.$currentTop:this.$previousTop},update:function(){this.$currentTop<82?this.$nav.addClass("static").removeClass("dynamic"):this.$nav.removeClass("static").addClass("dynamic")},scrollEvent:function(){this.setDefs(!0,!1);var t=this.$currentTop!=this.$previousTop;t&&this.update(),this.setDefs(!1,!0)}};r.init(),t(window).scroll(function(){r.scrollEvent()})}(jQuery)},{}]},{},[1]);