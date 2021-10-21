//函数的声明
function show() {
    var number1 = 10;
    var number2 = 20;
    console.info(number1 + number2);
}
//函数的调用
show();

var fun2 = function () {
    console.info("hello")
}
console.info(typeof fun2)
fun2();
var fun3 = function add() {
    console.info("world");
}
fun3();

//函数的重复定义
function alt() {
    console.info("ooo");
}
function alt() {
    console.info("NO")
}
var alt = function () {
    console.info("o")
}
var alt = function () {
    console.info("l")
}
alt();