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
});

function updateLineTotal(line, qty){
    let singleProductValue = parseInt(line.closest("tr").find(".product-price").text());
    let totalValue = qty * singleProductValue;

    line.closest("tr").find(".line-total-value").text(totalValue);

    updateTotalPrice();
};

function updateTotalPrice(){
    var total = 0;

    console.log("updating total price...");
    $(".line-total-value").each(function(){
        console.log("price ->"+$(this).text());
        total += parseInt($(this).text());
    });

    console.log("new total: "+total);
    $("#total-price").html(total);
}