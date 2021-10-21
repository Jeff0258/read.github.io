function add(number){

    var sum = 0;
    for (var i = 1; i <= number; i++) {
        sum = sum + i;
    }
    console.info(sum);
}
//累加到200  add()代表调用函数
add(100);

function reduce(){
    console.info("ok");
}
function reduce1(number1,number2,message){
    console.info(number1);
    console.info(number2);
    console.info(message);
}
reduce();
reduce1(23,34,"xx");

var val1 = 222;
var val2 = 233;
var val3 = "body";
reduce1(val1,val2,val3);