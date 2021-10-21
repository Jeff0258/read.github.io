function add(number1,number2){
    var sum = number1 + number2;
   return sum;
}

function update(value){
    value*=2;
    console.info(value);
    
    return value;                //函数返回值
}
 var res = add(12,34);
 var res2 = update(res);
 console.info(res2)             //undefined
