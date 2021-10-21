var number = 234;
var price = 34.5;
var boo = false;
// js是弱类型语言，声明变量不需要强制指定数据类型，由内容来决定它是什么类型。运行代码的时候就默认设置当前这个变量数据类型为undefined
var phoneNumber;
var address = null;

console.info(typeof number);
console.info(typeof price);
console.info(typeof boo);
console.info(typeof phoneNumber);
console.info(typeof address);

var date = "2021-08-14";
console.info(typeof date);

 var date2 = new Date();
 console.info(date2);
 console.info(typeof date2);

 var zero = "0";
 var zero2 = -0;
 console.info(zero == zero2); //== 只判断值是否相等
console.info(zero === zero2); // ==要判断值是否相等，还要判断数据类型是否一致  严格等

//精度问题
var flo = 1;
var flo2 = 0.5;
console.info(flo-flo2);

// 对于小数来说，在编程语言中一般称为浮点数，小数转化为二进制的时候，会出现精度问题。最终计算出来近似值。
console.info(0.3-0.2);
console.info(0.2-0.1);

console.info((0.3-0.2)==(0.2-0.1));