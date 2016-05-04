(function($) {
  $(document).ready(function() {

    let events = {
      init() {
        $('[role="toggle-ul"]').click(this.triggerUl.bind(this));
      },

      triggerUl(e) {
        let trigger = $(e.target).closest('[role="toggle-ul"]'),
          ulId = trigger.attr('data-ul-id'),
          $el = $(`#${ulId}`);

        $el.toggleClass('show');
      }
    };
    events.init();

  });
})(jQuery);