/**
 * 实际参数演示
 */
function reduce(number1,number2){
    console.info(number1);             //如果没有给函数传递参数，默认形参是undefined
    console.info(number2);             //如果传递的参数个数不正确，从前到后的方式赋值，没有的就默认为undefined
}

reduce();