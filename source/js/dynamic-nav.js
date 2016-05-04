(function($) {
  let dynamicNav = {
    navHeight: 45,
    adjustedHeight: 45 + 1,
    isDesktop: false,
    currentTop: false,
    previousTop: false,

  	init() {
 	    this.setTop();
      this.setDesktop();
  	  this.update();
  	},

    setDesktop() {
      this.isDesktop = window.innerWidth > 720;
    },

  	setTop() {
      this.previousTop = this.currentTop ? this.currentTop : -1;
  	  this.currentTop = parseFloat($(window).scrollTop());
  	},

  	update() {
      if (this.isDesktop) {
        let navIsShowing = this.currentTop <= this.navHeight,
          navIsFixed;

        if (navIsShowing) {
          $('#social-bar').css({
            "transform":`translateY(-${this.currentTop}px)`,
            "-webkit-transform":`translateY(-${this.currentTop}px)`
          });
        }
        else {
          $('#social-bar').css({
            "transform":`translateY(-${this.adjustedHeight}px)`,
            "-webkit-transform":`translateY(-${this.adjustedHeight}px)`
          });
        }

        if (this.currentTop <= this.navHeight) {
          $('nav').css({
            "transform":`translateY(-${this.currentTop}px)`,
            "-webkit-transform":`translateY(-${this.currentTop}px)`
          });
        }
        else {
          $('nav').css({
            "transform":`translateY(-${this.adjustedHeight}px)`,
            "-webkit-transform":`translateY(-${this.adjustedHeight}px)`
          });          
        }
      }
      else {
        $('#social-bar, nav').css({
          "transform":`translateY(0px)`,
          "-webkit-transform":`translateY(0px)`
        });
      }
  	},

  	scrollEvent() {
  	  this.setTop();
  	  let didScrollVertical = this.currentTop !== this.previousTop;

  	  if (didScrollVertical) {
  	  	this.update();
	    }
  	}

  };

  dynamicNav.init();

  $(window).scroll(function() {
  	dynamicNav.scrollEvent();
  });

  $(window).resize(function() {
    dynamicNav.setDesktop();
    dynamicNav.scrollEvent();
  });

})(jQuery);