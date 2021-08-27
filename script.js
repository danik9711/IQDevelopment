"use strict";

$(document).ready(function(){
    $( "#ammount-dep" ).slider({
        max: 3000000,
        min: 1000,
        animate: "slow",
        range: "min",
        value: 50
    });

    $( "#added-dep" ).slider({
        max: 3000000,
        min: 1000,
        animate: "slow",
        range: "min",
        value: 50
    });

    $("#datepicker").datepicker({
        dateFormat: "dd.mm.yy"
    });

    const changeInputValue = (selectorSlider, selectorInput) => {
        $( selectorSlider ).slider({
            slide: function( event, ui ) {
                $(selectorInput).val(ui.value);
            }
        });
        $(selectorInput).change(function(e) {
            $( selectorSlider ).slider( "option", "value", e.target.value );
        });
    };

    $(".menu-item").each(function(i, item) {
        $(item).hover(
            function(e) {
                $(e.target).addClass('active-mune-item');
        },
            function(e) {
                $(e.target).removeClass('active-mune-item');
            });
    });

    const form = $("#form");


    function postData(form) {
        form.submit(function(e) {
            e.preventDefault();

            const msg = form.serialize();
            $.post("/calc.php",msg, function(data) {
                $("#result").html(`${Math.floor(data)} руб`);
                console.log(data);
                form[0].reset();
                $("#ammount-dep").slider( "option", "value", 1000 );
                $("#added-dep").slider( "option", "value", 1000 );
            });
        });
    }

    changeInputValue("#ammount-dep", "#input-ammount-dep");
    changeInputValue("#added-dep", "#input-added-dep");
    postData(form);
});