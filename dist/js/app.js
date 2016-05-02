(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function ($) {
  dynamicHeader = {
    $nav: $('nav'),

    init: function init() {
      this.setDefs(true, true);
      this.update();
    },

    setDefs: function setDefs(currentTop, previousTop) {
      this.$currentTop = currentTop ? parseFloat($(window).scrollTop()) : this.$currentTop;
      this.$previousTop = previousTop ? this.$currentTop : this.$previousTop;
    },

    update: function update() {
      if (this.$currentTop < 82) {
        this.$nav.addClass('static').removeClass('dynamic');
      } else {
        this.$nav.removeClass('static').addClass('dynamic');
      }
    },

    scrollEvent: function scrollEvent() {
      this.setDefs(true, false);
      var didScrollVertical = this.$currentTop != this.$previousTop;

      if (didScrollVertical) {
        this.update();
      }

      this.setDefs(false, true);
    }

  };

  dynamicHeader.init();

  $(window).scroll(function () {
    dynamicHeader.scrollEvent();
  });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvZHluYW1pYy1oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsVUFBUyxDQUFULEVBQVk7QUFDWCxrQkFBZ0I7QUFDZixVQUFNLEVBQUUsS0FBRixDQURTOztBQUdmLFVBQU0sZ0JBQVc7QUFDZCxXQUFLLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLElBQW5CO0FBQ0QsV0FBSyxNQUFMO0FBQ0QsS0FOYzs7QUFRZixhQUFTLGlCQUFTLFVBQVQsRUFBcUIsV0FBckIsRUFBa0M7QUFDekMsV0FBSyxXQUFMLEdBQW1CLGFBQWEsV0FBVyxFQUFFLE1BQUYsRUFBVSxTQUFWLEVBQVgsQ0FBYixHQUFpRCxLQUFLLFdBQXpFO0FBQ0EsV0FBSyxZQUFMLEdBQW9CLGNBQWMsS0FBSyxXQUFuQixHQUFpQyxLQUFLLFlBQTFEO0FBQ0QsS0FYYzs7QUFhZixZQUFRLGtCQUFXO0FBQ2hCLFVBQUksS0FBSyxXQUFMLEdBQW1CLEVBQXZCLEVBQTJCO0FBQ3pCLGFBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsUUFBbkIsRUFBNkIsV0FBN0IsQ0FBeUMsU0FBekM7QUFDRCxPQUZELE1BR0s7QUFDSCxhQUFLLElBQUwsQ0FBVSxXQUFWLENBQXNCLFFBQXRCLEVBQWdDLFFBQWhDLENBQXlDLFNBQXpDO0FBQ0Q7QUFDSCxLQXBCYzs7QUFzQmYsaUJBQWEsdUJBQVc7QUFDdEIsV0FBSyxPQUFMLENBQWEsSUFBYixFQUFtQixLQUFuQjtBQUNBLFVBQUksb0JBQW9CLEtBQUssV0FBTCxJQUFvQixLQUFLLFlBQWpEOztBQUVBLFVBQUksaUJBQUosRUFBdUI7QUFDdEIsYUFBSyxNQUFMO0FBQ0E7O0FBRUYsV0FBSyxPQUFMLENBQWEsS0FBYixFQUFvQixJQUFwQjtBQUNBOztBQS9CYyxHQUFoQjs7QUFtQ0EsZ0JBQWMsSUFBZDs7QUFFQSxJQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDM0Isa0JBQWMsV0FBZDtBQUNBLEdBRkQ7QUFHRCxDQXpDRCxFQXlDRyxNQXpDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oJCkge1xuICBkeW5hbWljSGVhZGVyID0ge1xuICBcdCRuYXY6ICQoJ25hdicpLFxuXG4gIFx0aW5pdDogZnVuY3Rpb24oKSB7XG4gXHQgICAgdGhpcy5zZXREZWZzKHRydWUsIHRydWUpO1xuICBcdCAgdGhpcy51cGRhdGUoKTtcbiAgXHR9LFxuXG4gIFx0c2V0RGVmczogZnVuY3Rpb24oY3VycmVudFRvcCwgcHJldmlvdXNUb3ApIHtcbiAgXHQgIHRoaXMuJGN1cnJlbnRUb3AgPSBjdXJyZW50VG9wID8gcGFyc2VGbG9hdCgkKHdpbmRvdykuc2Nyb2xsVG9wKCkpIDogdGhpcy4kY3VycmVudFRvcDtcbiAgXHQgIHRoaXMuJHByZXZpb3VzVG9wID0gcHJldmlvdXNUb3AgPyB0aGlzLiRjdXJyZW50VG9wIDogdGhpcy4kcHJldmlvdXNUb3A7XG4gIFx0fSxcblxuICBcdHVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy4kY3VycmVudFRvcCA8IDgyKSB7XG4gICAgICAgIHRoaXMuJG5hdi5hZGRDbGFzcygnc3RhdGljJykucmVtb3ZlQ2xhc3MoJ2R5bmFtaWMnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLiRuYXYucmVtb3ZlQ2xhc3MoJ3N0YXRpYycpLmFkZENsYXNzKCdkeW5hbWljJyk7XG4gICAgICB9XG4gIFx0fSxcblxuICBcdHNjcm9sbEV2ZW50OiBmdW5jdGlvbigpIHtcbiAgXHQgIHRoaXMuc2V0RGVmcyh0cnVlLCBmYWxzZSk7XG4gIFx0ICB2YXIgZGlkU2Nyb2xsVmVydGljYWwgPSB0aGlzLiRjdXJyZW50VG9wICE9IHRoaXMuJHByZXZpb3VzVG9wO1xuXG4gIFx0ICBpZiAoZGlkU2Nyb2xsVmVydGljYWwpIHtcbiAgXHQgIFx0dGhpcy51cGRhdGUoKTtcblx0ICAgIH1cblxuXHQgICB0aGlzLnNldERlZnMoZmFsc2UsIHRydWUpO1xuICBcdH1cblxuICB9O1xuXG4gIGR5bmFtaWNIZWFkZXIuaW5pdCgpO1xuXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gIFx0ZHluYW1pY0hlYWRlci5zY3JvbGxFdmVudCgpO1xuICB9KTtcbn0pKGpRdWVyeSk7Il19
