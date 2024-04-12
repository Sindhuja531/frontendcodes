console.log("Welcome to The Ultimate jQuery Course!🚀");

$(document).ready(function(){ 
    $('input').focus(function() {
        $(this).css("background-color", "tomato");
    });
    $('input').blur(function() { // when we press /hover in a input field it changes color to red
        $(this).css("background-color", "");
    });
    $('input').change(function() {
        console.log($(this).val());
    });
    $("#registration_form").submit(function(event) {
        event.preventDefault();
        console.log("Form Successfully Submitted!");
    })
});

