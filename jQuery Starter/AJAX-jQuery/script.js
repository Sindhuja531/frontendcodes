console.log("Welcome to The Ultimate jQuery Course!🚀");

$(document).ready(function(){ 
   // $("#output").load("sample.txt", function(response, statusTxt, xhr) {
    //   if(statusTxt === "success") alert("Success")
      //  if(statusTxt === "error") alert("Error:" + xhr.statusText);
    //})
    $.get(
        "https://jsonpalceholdertypicode.com/users",
    function(data, status) {
        console.log(data, status);
    }
);
    $.post("https://jsonpalceholdertypicode.com/users",
{ title: "This is title", body: "This is body"},
function(data, status) {
    console.log(data, status);
}
)

});
