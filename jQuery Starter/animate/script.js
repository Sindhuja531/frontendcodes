console.log("Welcome to The Ultimate jQuery Course!🚀");

$(document).ready(function(){ 
    $(".btn_hide"). click(function() {
       $(".box").animate({
        width: "200px",
        height: "200px",
        fontSize: "20px"
       })
    
    $("body").keydown(function(event) {
        if(event.which === 72) { // ASCII values
            $(".p1").hide();
        }
        if(event.which === 83) {
            $(".p1").show();
        }
            
        });
    })            
});

