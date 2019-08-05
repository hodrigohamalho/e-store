$( document ).ready(function() {
    
    $(".add-product").click(function(){
        let qty = parseInt($(this).closest('.td-number').find('span').text());
        let newQty = qty+1;
        $(this).closest('.td-number').find('span').text(newQty);
        console.log("adding a new product");

        updateLineTotal($(this), newQty);
    });

    $(".remove-product").click(function(){
        let qty = parseInt($(this).closest('.td-number').find('span').text());
        let newQty = parseInt(qty)-1;
        console.log("remove product qt" +qty);
        if (qty > 0){
            $(this).closest('.td-number').find('span').text(newQty);
            console.log("removing product qtd");
            updateLineTotal($(this), newQty);
        }
    });

    $(".remove-product-line").click(function(){
        $(this).closest("tr").remove();
        updateLineTotal($(this), 0);
    });

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

    $("#pay").click(function(){
        // $.ajax({
        //     url: '//platform.twitter.com/widgets.js',
        //     dataType: 'application/json',
        //     cache: true
        //   }); //http://stackoverflow.com/q/6536108 

        $("#confirm-modal").modal();
        resetPurchase();
    });
});

function resetPurchase(){
    $("#confirm-modal").on('hidden.bs.modal', function(){
        $(".product-qty").html("0");
        $(".line-total-value").html("0");
        $("#total-price").html(0);
    });
}

function updateLineTotal(line, qty){
    let singleProductValue = parseInt(line.closest("tr").find(".product-price").text());
    let totalValue = qty * singleProductValue;

    line.closest("tr").find(".line-total-value").text(totalValue);

    updateTotalPrice();
};

function updateTotalPrice(){
    var total = 0;

    $(".line-total-value").each(function(){
        total += parseInt($(this).text());
    });

    $("#total-price").html(total);
}