var number = 23.3333;

function toDecimal(number) {
    var value = parseFloat(number);
    if (isNaN(value)) {      //isNaN函数是js提供的一个专门用于判断是否非数字
        return;
    }
    Math.round(number * 100) / 100;
    return value;
}
var res = toDecimal(33.33222);
console.info(res);