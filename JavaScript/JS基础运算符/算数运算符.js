var num2 = 20;
var num3 = 30;

//写js脚本的时候 一般运算符前后都有空格 这是标准规范
console.info(num2 + num3);
console.info(num2 - num3);
console.info(num2 % num3);    // 20/30  ···20(余数)
console.info(num2 / num3);

// 我们定义一个变量，需要这个变量自增

var i = 0;
i = i + 1;    //将内存里面i这个标识符对应值取出来 +1，再放回内存
console.info(i);

var j = 0;
j++;          // j = j+1  j++一种简写
console.info(j);

var k = 0;
++k;            // k = k+1
console.info(k);

//++i & i++ 两者区别
//x++ 代表自身 +1，后缀的++  ++的优先级比乘法更高 (x++) * 4

var x = 5;
console.info(x++*4);    //20
console.info("x=",x);

var y = 5;
console.info(++y*4);  //24 ++y=6 6*4=24 y=6
console.info(y);

//如果++是前缀 那就先拿来计算++的结果，再运算。如果++是后缀，那就先拿整体去运算，运算完了再自身+1
// ++x 是一个整体 x可以看成一个整体 两个整体不一样

var n = 3;
console.info(n++*++n);  // n++ =3 --> n++ = n+1 = 4 ++n = 4+1 = 5
console.info(n++*n*n);  // 5*6*6=180
console.info(n++*++n*n);  // 6*8*8


var m = 2;
console.info(++m * ++m);