(function($) {
  let dynamicNav = {
  	$nav: $('nav'),

  	init: function() {
 	    this.setDefs(true, true);
  	  this.update();
  	},

  	setDefs: function(currentTop, previousTop) {
  	  this.$currentTop = currentTop ? parseFloat($(window).scrollTop()) : this.$currentTop;
  	  this.$previousTop = previousTop ? this.$currentTop : this.$previousTop;
  	},

  	update: function() {
      if (this.$currentTop < 82) {
        this.$nav.addClass('static').removeClass('dynamic');
      }
      else {
        this.$nav.removeClass('static').addClass('dynamic');
      }
  	},

  	scrollEvent: function() {
  	  this.setDefs(true, false);
  	  var didScrollVertical = this.$currentTop != this.$previousTop;

  	  if (didScrollVertical) {
  	  	this.update();
	    }

	   this.setDefs(false, true);
  	}

  };

  dynamicNav.init();

  $(window).scroll(function() {
  	dynamicNav.scrollEvent();
  });
})(jQuery);