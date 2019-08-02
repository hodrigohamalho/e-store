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
        if (qty > 0){
            $(this).closest('.td-number').find('span').text(newQty);
            console.log("removing product qtd");
        }

        updateLineTotal($(this), newQty);
    });

    $(".remove-product").click(function(){
        $(this).closest("tr").remove();
    });

    $("#pay").click(function(){
        // $.ajax({
        //     url: '//platform.twitter.com/widgets.js',
        //     dataType: 'application/json',
        //     cache: true
        //   }); //http://stackoverflow.com/q/6536108 

        $("#confirm-modal").modal();
    });
});

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