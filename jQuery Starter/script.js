console.log("Welcome to The Ultimate jQuery Course!🚀");

$(document).ready(function(){ 
    $(".btn_hide"). click(function() {
        $(".p1").hide(2000, function() { // fadeToggle can be used here like: $(".p1").fadeToggle("slow", 0.5) where para should slowly invisible with opacity of 0.5 percent
            console.log("Task Completed");
        });
    
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

