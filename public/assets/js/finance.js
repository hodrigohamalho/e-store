$( document ).ready(function() {
    
    $('.animated-value').each(function () {
        var $this = $(this);
        $({ Price: 0 }).animate({ Price: $this.text() }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Price));
            }
        });
    });


});
