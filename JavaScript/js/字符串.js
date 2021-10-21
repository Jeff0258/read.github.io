// 在字符串中可以用双引号表示，也可以使用单引号
var userName = "jeff";
var address = '安阳';
console.info(typeof address);
console.info(typeof userName);

var message = " 今天周三 '阳江' 吃西瓜";
console.info(message);

//字符串拼接

var message2 = "今天周五 "+userName+" 吃西瓜"
console.info(message2);

//任何数据类型 和字符串相加 结果都是字符串

var boo =20;
var result = "3年2班";
var s = result+boo;
console.info(s);

var n1 = 10;
var n2 = "20";
console.info(n1+n2);