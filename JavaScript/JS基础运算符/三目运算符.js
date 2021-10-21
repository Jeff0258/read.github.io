var userName = "xiaowang";
var password = "23456";

//第一个表达式 条件表达式 里面要么是判断，要么直接就是一个Boolean.
var res = (userName=="xiaowang" && password=="2345")?"登入成功":"登录失败";
console.info(res);

console.info(typeof userName); //运算符的形式
console.info(typeof(userName)); //函数的形式


// date 数据类型（引用类型）
var date = new Date();
console.info(date);  
console.info(typeof date); //object

var obj = {
    id:"1",
    username:"hanh"
}
console.info(typeof obj);

// Array就是数据类型，表示数组类型
var res2 = (array instanceof Array)?true:false;
console.info(res2);