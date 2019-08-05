$( document ).ready(function() {
    
    $('.animate-value').each(function () {
        console.log("achei");
        var $this = $(this);
        $({ Price: 0 }).animate({ Price: $this.text() }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Price));
            }
        });
    });


});
