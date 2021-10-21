// 自动转化
var code = 5;
var num = "20";
s3 = code+num;
console.info(s3);

// 任何数据类型和字符串相加 都变成字符串(自动转化) 
// 不同数据类型 不能直接计算
console.info(num-code); //js判断操作是减法 将字符串转化为number 来计算
console.info(code-num); //NaN 是js比较特殊的一个值 表示结果为非数字

s = num*code;
a2 = num/code;
console.info(s);
console.info(typeof s);  //number类型
console.info(typeof s3)  //string类型

//强制转化
 var number = 20;
 var boo = true;
 var obj = {
     id:1,
     name:"洋洋"
 };
 console.info(typeof obj);
 // 将任何数据类型转化为字符串
 var res = number+"";
 var res2 = boo+ "";
 var res3 = obj+ "";
 console.info(typeof res);
 console.info(typeof res2);
 console.info(typeof res3);
 console.info(res3);

 //任何对象要转化为字符串，都可以调用toString函数
 console.info(number.toString());
 console.info(typeof (number.toString()));
 console.info(typeof obj.toString());

 var code = "224";
 console.info(typeof code);

 var num = 20;
 //将字符串转化为数字 Number()工具
 var res = Number(code);
 console.info(res);
 console.info(res+num);

 //parseInt();将字符串或者浮点数转化为整数

 var code2 = 23.34;
 console.info(typeof parseInt(code2));
 console.info(parseInt(code2));

 var code3 = "23.4";
 var code4 = "a23a";
 var code5 = "2a.3";
 console.info(parseInt(code3)); //这个函数在转化过程中 找数字
 console.info(parseInt(code4));
 console.info(parseInt(code5));

 var code5 = "34.3.4";
 console.info(parseFloat(code5));
 console.info(typeof parseFloat(code5));


 //Boolean值得转化 可以是Boolean转化为数字，也可以是数字转化为Boolean
 var b2 = Boolean("a")
 console.info( typeof b2);
 console.info(b2);  //true

 var B2 = Boolean("")
 console.info( typeof B2);
 console.info(B2);  //false

 var b3 = Boolean(-1);
 console.info(b3);  //非 0 表示 true

 var b4 = Boolean(null);
 console.info(b4);   //false

 var b5 = Boolean(undefined);
 console.info(b5);     //false

 var obj = {};
 var b6 = Boolean(obj);
 console.info(b6);   //true