(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function ($) {
  var dynamicNav = {
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

  dynamicNav.init();

  $(window).scroll(function () {
    dynamicNav.scrollEvent();
  });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvZHluYW1pYy1uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsVUFBUyxDQUFULEVBQVk7QUFDWCxNQUFJLGFBQWE7QUFDaEIsVUFBTSxFQUFFLEtBQUYsQ0FEVTs7QUFHaEIsVUFBTSxnQkFBVztBQUNkLFdBQUssT0FBTCxDQUFhLElBQWIsRUFBbUIsSUFBbkI7QUFDRCxXQUFLLE1BQUw7QUFDRCxLQU5lOztBQVFoQixhQUFTLGlCQUFTLFVBQVQsRUFBcUIsV0FBckIsRUFBa0M7QUFDekMsV0FBSyxXQUFMLEdBQW1CLGFBQWEsV0FBVyxFQUFFLE1BQUYsRUFBVSxTQUFWLEVBQVgsQ0FBYixHQUFpRCxLQUFLLFdBQXpFO0FBQ0EsV0FBSyxZQUFMLEdBQW9CLGNBQWMsS0FBSyxXQUFuQixHQUFpQyxLQUFLLFlBQTFEO0FBQ0QsS0FYZTs7QUFhaEIsWUFBUSxrQkFBVztBQUNoQixVQUFJLEtBQUssV0FBTCxHQUFtQixFQUF2QixFQUEyQjtBQUN6QixhQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFFBQW5CLEVBQTZCLFdBQTdCLENBQXlDLFNBQXpDO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBSyxJQUFMLENBQVUsV0FBVixDQUFzQixRQUF0QixFQUFnQyxRQUFoQyxDQUF5QyxTQUF6QztBQUNEO0FBQ0gsS0FwQmU7O0FBc0JoQixpQkFBYSx1QkFBVztBQUN0QixXQUFLLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEtBQW5CO0FBQ0EsVUFBSSxvQkFBb0IsS0FBSyxXQUFMLElBQW9CLEtBQUssWUFBakQ7O0FBRUEsVUFBSSxpQkFBSixFQUF1QjtBQUN0QixhQUFLLE1BQUw7QUFDQTs7QUFFRixXQUFLLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLElBQXBCO0FBQ0E7O0FBL0JlLEdBQWpCOztBQW1DQSxhQUFXLElBQVg7O0FBRUEsSUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQzNCLGVBQVcsV0FBWDtBQUNBLEdBRkQ7QUFHRCxDQXpDRCxFQXlDRyxNQXpDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oJCkge1xuICBsZXQgZHluYW1pY05hdiA9IHtcbiAgXHQkbmF2OiAkKCduYXYnKSxcblxuICBcdGluaXQ6IGZ1bmN0aW9uKCkge1xuIFx0ICAgIHRoaXMuc2V0RGVmcyh0cnVlLCB0cnVlKTtcbiAgXHQgIHRoaXMudXBkYXRlKCk7XG4gIFx0fSxcblxuICBcdHNldERlZnM6IGZ1bmN0aW9uKGN1cnJlbnRUb3AsIHByZXZpb3VzVG9wKSB7XG4gIFx0ICB0aGlzLiRjdXJyZW50VG9wID0gY3VycmVudFRvcCA/IHBhcnNlRmxvYXQoJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSA6IHRoaXMuJGN1cnJlbnRUb3A7XG4gIFx0ICB0aGlzLiRwcmV2aW91c1RvcCA9IHByZXZpb3VzVG9wID8gdGhpcy4kY3VycmVudFRvcCA6IHRoaXMuJHByZXZpb3VzVG9wO1xuICBcdH0sXG5cbiAgXHR1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuJGN1cnJlbnRUb3AgPCA4Mikge1xuICAgICAgICB0aGlzLiRuYXYuYWRkQ2xhc3MoJ3N0YXRpYycpLnJlbW92ZUNsYXNzKCdkeW5hbWljJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy4kbmF2LnJlbW92ZUNsYXNzKCdzdGF0aWMnKS5hZGRDbGFzcygnZHluYW1pYycpO1xuICAgICAgfVxuICBcdH0sXG5cbiAgXHRzY3JvbGxFdmVudDogZnVuY3Rpb24oKSB7XG4gIFx0ICB0aGlzLnNldERlZnModHJ1ZSwgZmFsc2UpO1xuICBcdCAgbGV0IGRpZFNjcm9sbFZlcnRpY2FsID0gdGhpcy4kY3VycmVudFRvcCAhPSB0aGlzLiRwcmV2aW91c1RvcDtcblxuICBcdCAgaWYgKGRpZFNjcm9sbFZlcnRpY2FsKSB7XG4gIFx0ICBcdHRoaXMudXBkYXRlKCk7XG5cdCAgICB9XG5cblx0ICAgdGhpcy5zZXREZWZzKGZhbHNlLCB0cnVlKTtcbiAgXHR9XG5cbiAgfTtcblxuICBkeW5hbWljTmF2LmluaXQoKTtcblxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICBcdGR5bmFtaWNOYXYuc2Nyb2xsRXZlbnQoKTtcbiAgfSk7XG59KShqUXVlcnkpOyJdfQ==
