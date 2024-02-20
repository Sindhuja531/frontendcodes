//function x() {
  //  var i = 1;
    //setTimeout(() => {
      //  console.log(1);
   // }, 3000);
   // console.log("Hello World");
//}
//x();

// to print each number 1 to 5 like 1 after 1 sec, 2 after 2 secs and so on till 5
function x() {
    for(var i = 1;i <= 5; i++) {
        setTimeout(() => {
            console.log(1);
        }, i * 1000);
        console.log("Hello World");
    }
}
x();