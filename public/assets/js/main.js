$( document ).ready(function() {

    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    
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

    $(".credit-card").click(function(){
        var $form = $("#pay-form");
        var data = {};
        
        data["card_name"] = $(this).find(".card-name").html();
        data["card_number"] = $(this).find(".card-number").html();
        data["card_date"] = $(this).find(".card-date").html();
        data["card_security_code"] = $(this).find(".card-security-code").html();
        data["total"] = $("#total-price").html();
        data["currency"] = 'EUR';
        data["userId"] = '1234';

        console.log(data);

        $.ajax({
            url: 'http://localhost:4000/pay/1234',
            method: 'POST',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify(data)
        }).done(function(x){
            console.log(x);
        }); 

        $("#pay-modal").modal("hide");
        $("#confirm-modal").modal();
        resetPurchase();
    });
});

function resetPurchase(){
    $("#confirm-modal").on('hidden.bs.modal', function(){
        $(".product-qty").html("0");
        $(".line-total-value").html("0");
        changeTotalPrice(0);
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

    changeTotalPrice(total);
}

function changeTotalPrice(value){
    if (value == 0){
        $("#complete-purchase").addClass("disabled");
    }else{
        $("#complete-purchase").removeClass("disabled");
    }

    $("#total-price").html(value);
}

function formData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array["'"+n['name']+"'"] = n['value'];
    });

    return indexed_array;
}