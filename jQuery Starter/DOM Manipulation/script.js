console.log("Welcome to The Ultimate jQuery Course!🚀");

$(document).ready(function(){ 
    $(".btn_hide"). click(function() {
       // $(".p1").text("These are jQuery lessons"); .//this is for replacing the para text
       // console.log($(".p1").text());
        console.log($(".p1").text());
        console.log($(".p1").html()); // It will list thee para content with html tags
        console.log($(".p1").val()); // val method for manipulating the DOM
        });
    
    $("body").keydown(function(event) {
        if(event.which === 72) { // ASCII values
            $(".p1").hide();
        }
        if(event.which === 83) {
            $(".p1").show();
        }
            
        });
});            


