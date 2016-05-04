(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function ($) {
  var dynamicNav = {
    navHeight: 45,
    adjustedHeight: 45 + 1,
    isDesktop: false,
    currentTop: false,
    previousTop: false,

    init: function init() {
      this.setTop();
      this.setDesktop();
      this.update();
    },
    setDesktop: function setDesktop() {
      this.isDesktop = window.innerWidth > 720;
    },
    setTop: function setTop() {
      this.previousTop = this.currentTop ? this.currentTop : -1;
      this.currentTop = parseFloat($(window).scrollTop());
    },
    update: function update() {
      if (this.isDesktop) {
        var navIsShowing = this.currentTop <= this.navHeight,
            navIsFixed = void 0;

        if (navIsShowing) {
          $('#social-bar').css({
            "transform": "translateY(-" + this.currentTop + "px)",
            "-webkit-transform": "translateY(-" + this.currentTop + "px)"
          });
        } else {
          $('#social-bar').css({
            "transform": "translateY(-" + this.adjustedHeight + "px)",
            "-webkit-transform": "translateY(-" + this.adjustedHeight + "px)"
          });
        }

        if (this.currentTop <= this.navHeight) {
          $('nav').css({
            "transform": "translateY(-" + this.currentTop + "px)",
            "-webkit-transform": "translateY(-" + this.currentTop + "px)"
          });
        } else {
          $('nav').css({
            "transform": "translateY(-" + this.adjustedHeight + "px)",
            "-webkit-transform": "translateY(-" + this.adjustedHeight + "px)"
          });
        }
      } else {
        $('#social-bar, nav').css({
          "transform": "translateY(0px)",
          "-webkit-transform": "translateY(0px)"
        });
      }
    },
    scrollEvent: function scrollEvent() {
      this.setTop();
      var didScrollVertical = this.currentTop !== this.previousTop;

      if (didScrollVertical) {
        this.update();
      }
    }
  };

  dynamicNav.init();

  $(window).scroll(function () {
    dynamicNav.scrollEvent();
  });

  $(window).resize(function () {
    dynamicNav.setDesktop();
    dynamicNav.scrollEvent();
  });
})(jQuery);

},{}],2:[function(require,module,exports){
'use strict';

(function ($) {
  $(document).ready(function () {

    var events = {
      init: function init() {
        $('[role="toggle-ul"]').click(this.triggerUl.bind(this));
      },
      triggerUl: function triggerUl(e) {
        var trigger = $(e.target).closest('[role="toggle-ul"]'),
            ulId = trigger.attr('data-ul-id'),
            $el = $('#' + ulId);

        $el.toggleClass('show');
      }
    };
    events.init();
  });
})(jQuery);

},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvZHluYW1pYy1uYXYuanMiLCJzb3VyY2UvanMvdG9nZ2xlLXVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFVBQVMsQ0FBVCxFQUFZO0FBQ1gsTUFBSSxhQUFhO0FBQ2YsZUFBVyxFQURJO0FBRWYsb0JBQWdCLEtBQUssQ0FGTjtBQUdmLGVBQVcsS0FISTtBQUlmLGdCQUFZLEtBSkc7QUFLZixpQkFBYSxLQUxFOztBQU9oQixRQVBnQixrQkFPVDtBQUNKLFdBQUssTUFBTDtBQUNBLFdBQUssVUFBTDtBQUNELFdBQUssTUFBTDtBQUNELEtBWGU7QUFhZixjQWJlLHdCQWFGO0FBQ1gsV0FBSyxTQUFMLEdBQWlCLE9BQU8sVUFBUCxHQUFvQixHQUFyQztBQUNELEtBZmM7QUFpQmhCLFVBakJnQixvQkFpQlA7QUFDTixXQUFLLFdBQUwsR0FBbUIsS0FBSyxVQUFMLEdBQWtCLEtBQUssVUFBdkIsR0FBb0MsQ0FBQyxDQUF4RDtBQUNELFdBQUssVUFBTCxHQUFrQixXQUFXLEVBQUUsTUFBRixFQUFVLFNBQVYsRUFBWCxDQUFsQjtBQUNELEtBcEJlO0FBc0JoQixVQXRCZ0Isb0JBc0JQO0FBQ04sVUFBSSxLQUFLLFNBQVQsRUFBb0I7QUFDbEIsWUFBSSxlQUFlLEtBQUssVUFBTCxJQUFtQixLQUFLLFNBQTNDO1lBQ0UsbUJBREY7O0FBR0EsWUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFlBQUUsYUFBRixFQUFpQixHQUFqQixDQUFxQjtBQUNuQiwwQ0FBMkIsS0FBSyxVQUFoQyxRQURtQjtBQUVuQixrREFBbUMsS0FBSyxVQUF4QztBQUZtQixXQUFyQjtBQUlELFNBTEQsTUFNSztBQUNILFlBQUUsYUFBRixFQUFpQixHQUFqQixDQUFxQjtBQUNuQiwwQ0FBMkIsS0FBSyxjQUFoQyxRQURtQjtBQUVuQixrREFBbUMsS0FBSyxjQUF4QztBQUZtQixXQUFyQjtBQUlEOztBQUVELFlBQUksS0FBSyxVQUFMLElBQW1CLEtBQUssU0FBNUIsRUFBdUM7QUFDckMsWUFBRSxLQUFGLEVBQVMsR0FBVCxDQUFhO0FBQ1gsMENBQTJCLEtBQUssVUFBaEMsUUFEVztBQUVYLGtEQUFtQyxLQUFLLFVBQXhDO0FBRlcsV0FBYjtBQUlELFNBTEQsTUFNSztBQUNILFlBQUUsS0FBRixFQUFTLEdBQVQsQ0FBYTtBQUNYLDBDQUEyQixLQUFLLGNBQWhDLFFBRFc7QUFFWCxrREFBbUMsS0FBSyxjQUF4QztBQUZXLFdBQWI7QUFJRDtBQUNGLE9BN0JELE1BOEJLO0FBQ0gsVUFBRSxrQkFBRixFQUFzQixHQUF0QixDQUEwQjtBQUN4Qix3Q0FEd0I7QUFFeEI7QUFGd0IsU0FBMUI7QUFJRDtBQUNILEtBM0RlO0FBNkRoQixlQTdEZ0IseUJBNkRGO0FBQ1osV0FBSyxNQUFMO0FBQ0EsVUFBSSxvQkFBb0IsS0FBSyxVQUFMLEtBQW9CLEtBQUssV0FBakQ7O0FBRUEsVUFBSSxpQkFBSixFQUF1QjtBQUN0QixhQUFLLE1BQUw7QUFDQTtBQUNGO0FBcEVlLEdBQWpCOztBQXdFQSxhQUFXLElBQVg7O0FBRUEsSUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQzNCLGVBQVcsV0FBWDtBQUNBLEdBRkQ7O0FBSUEsSUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQzFCLGVBQVcsVUFBWDtBQUNBLGVBQVcsV0FBWDtBQUNELEdBSEQ7QUFLRCxDQXBGRCxFQW9GRyxNQXBGSDs7Ozs7QUNBQSxDQUFDLFVBQVMsQ0FBVCxFQUFZO0FBQ1gsSUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXOztBQUUzQixRQUFJLFNBQVM7QUFDWCxVQURXLGtCQUNKO0FBQ0wsVUFBRSxvQkFBRixFQUF3QixLQUF4QixDQUE4QixLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCLENBQTlCO0FBQ0QsT0FIVTtBQUtYLGVBTFcscUJBS0QsQ0FMQyxFQUtFO0FBQ1gsWUFBSSxVQUFVLEVBQUUsRUFBRSxNQUFKLEVBQVksT0FBWixDQUFvQixvQkFBcEIsQ0FBZDtZQUNFLE9BQU8sUUFBUSxJQUFSLENBQWEsWUFBYixDQURUO1lBRUUsTUFBTSxRQUFNLElBQU4sQ0FGUjs7QUFJQSxZQUFJLFdBQUosQ0FBZ0IsTUFBaEI7QUFDRDtBQVhVLEtBQWI7QUFhQSxXQUFPLElBQVA7QUFFRCxHQWpCRDtBQWtCRCxDQW5CRCxFQW1CRyxNQW5CSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oJCkge1xuICBsZXQgZHluYW1pY05hdiA9IHtcbiAgICBuYXZIZWlnaHQ6IDQ1LFxuICAgIGFkanVzdGVkSGVpZ2h0OiA0NSArIDEsXG4gICAgaXNEZXNrdG9wOiBmYWxzZSxcbiAgICBjdXJyZW50VG9wOiBmYWxzZSxcbiAgICBwcmV2aW91c1RvcDogZmFsc2UsXG5cbiAgXHRpbml0KCkge1xuIFx0ICAgIHRoaXMuc2V0VG9wKCk7XG4gICAgICB0aGlzLnNldERlc2t0b3AoKTtcbiAgXHQgIHRoaXMudXBkYXRlKCk7XG4gIFx0fSxcblxuICAgIHNldERlc2t0b3AoKSB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IHdpbmRvdy5pbm5lcldpZHRoID4gNzIwO1xuICAgIH0sXG5cbiAgXHRzZXRUb3AoKSB7XG4gICAgICB0aGlzLnByZXZpb3VzVG9wID0gdGhpcy5jdXJyZW50VG9wID8gdGhpcy5jdXJyZW50VG9wIDogLTE7XG4gIFx0ICB0aGlzLmN1cnJlbnRUb3AgPSBwYXJzZUZsb2F0KCQod2luZG93KS5zY3JvbGxUb3AoKSk7XG4gIFx0fSxcblxuICBcdHVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLmlzRGVza3RvcCkge1xuICAgICAgICBsZXQgbmF2SXNTaG93aW5nID0gdGhpcy5jdXJyZW50VG9wIDw9IHRoaXMubmF2SGVpZ2h0LFxuICAgICAgICAgIG5hdklzRml4ZWQ7XG5cbiAgICAgICAgaWYgKG5hdklzU2hvd2luZykge1xuICAgICAgICAgICQoJyNzb2NpYWwtYmFyJykuY3NzKHtcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6YHRyYW5zbGF0ZVkoLSR7dGhpcy5jdXJyZW50VG9wfXB4KWAsXG4gICAgICAgICAgICBcIi13ZWJraXQtdHJhbnNmb3JtXCI6YHRyYW5zbGF0ZVkoLSR7dGhpcy5jdXJyZW50VG9wfXB4KWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAkKCcjc29jaWFsLWJhcicpLmNzcyh7XG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOmB0cmFuc2xhdGVZKC0ke3RoaXMuYWRqdXN0ZWRIZWlnaHR9cHgpYCxcbiAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm1cIjpgdHJhbnNsYXRlWSgtJHt0aGlzLmFkanVzdGVkSGVpZ2h0fXB4KWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb3AgPD0gdGhpcy5uYXZIZWlnaHQpIHtcbiAgICAgICAgICAkKCduYXYnKS5jc3Moe1xuICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjpgdHJhbnNsYXRlWSgtJHt0aGlzLmN1cnJlbnRUb3B9cHgpYCxcbiAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm1cIjpgdHJhbnNsYXRlWSgtJHt0aGlzLmN1cnJlbnRUb3B9cHgpYFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICQoJ25hdicpLmNzcyh7XG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOmB0cmFuc2xhdGVZKC0ke3RoaXMuYWRqdXN0ZWRIZWlnaHR9cHgpYCxcbiAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm1cIjpgdHJhbnNsYXRlWSgtJHt0aGlzLmFkanVzdGVkSGVpZ2h0fXB4KWBcbiAgICAgICAgICB9KTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAkKCcjc29jaWFsLWJhciwgbmF2JykuY3NzKHtcbiAgICAgICAgICBcInRyYW5zZm9ybVwiOmB0cmFuc2xhdGVZKDBweClgLFxuICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm1cIjpgdHJhbnNsYXRlWSgwcHgpYFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgXHR9LFxuXG4gIFx0c2Nyb2xsRXZlbnQoKSB7XG4gIFx0ICB0aGlzLnNldFRvcCgpO1xuICBcdCAgbGV0IGRpZFNjcm9sbFZlcnRpY2FsID0gdGhpcy5jdXJyZW50VG9wICE9PSB0aGlzLnByZXZpb3VzVG9wO1xuXG4gIFx0ICBpZiAoZGlkU2Nyb2xsVmVydGljYWwpIHtcbiAgXHQgIFx0dGhpcy51cGRhdGUoKTtcblx0ICAgIH1cbiAgXHR9XG5cbiAgfTtcblxuICBkeW5hbWljTmF2LmluaXQoKTtcblxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICBcdGR5bmFtaWNOYXYuc2Nyb2xsRXZlbnQoKTtcbiAgfSk7XG5cbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICBkeW5hbWljTmF2LnNldERlc2t0b3AoKTtcbiAgICBkeW5hbWljTmF2LnNjcm9sbEV2ZW50KCk7XG4gIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IGV2ZW50cyA9IHtcbiAgICAgIGluaXQoKSB7XG4gICAgICAgICQoJ1tyb2xlPVwidG9nZ2xlLXVsXCJdJykuY2xpY2sodGhpcy50cmlnZ2VyVWwuYmluZCh0aGlzKSk7XG4gICAgICB9LFxuXG4gICAgICB0cmlnZ2VyVWwoZSkge1xuICAgICAgICBsZXQgdHJpZ2dlciA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ1tyb2xlPVwidG9nZ2xlLXVsXCJdJyksXG4gICAgICAgICAgdWxJZCA9IHRyaWdnZXIuYXR0cignZGF0YS11bC1pZCcpLFxuICAgICAgICAgICRlbCA9ICQoYCMke3VsSWR9YCk7XG5cbiAgICAgICAgJGVsLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBldmVudHMuaW5pdCgpO1xuXG4gIH0pO1xufSkoalF1ZXJ5KTsiXX0=
