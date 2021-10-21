//输入一个月份，输出季节
//var month = prompt("输入一个月份");
var month = 9;
if(month >=1 && month <=3){
    console.info("春季");
}else if(month >=4 && month <=6){
    console.info("夏季");
}else if(month >=7 && month <=9){
    console.info("秋季");
}else{
    console.info("冬季");
}


//输入一个数字，返回周几

 var day = 30;

 // 从0开始，0表示周天、1表示周一、6表示周六

 switch(day%7){
    case 0:
         console.info("周天");
         break;
    case 1:
         console.info("周一");
         break;
    case 2:
         console.info("周二");
         break;
    case 3:
         console.info("周三");
         break;
    case 4:
            console.info("周四");
            break;
    case 5:
                console.info("周五");
                brea
    case 6:
         console.info("周六");
         break;
    
 }


// 输入三个数字，返回最大值

var a = 3,b = 20,c = 9;
var max=a;
if(max-b<0){
    max = b;
}
if(max-c<0){
    max = c;
}
console.info(max);
//输入一个字符，判断这个字符是数字、大小写字母还是符号
//企业利润、提成。
// 算法一：if-else
// var money = 100;  //利润
// var res = 0;     //奖金
// var step1 ,step2,step3,step4,step5;

// step1 = 10*0.1;        //10w整利润
// step2 = step1 + 10*0.075; //20w整利润
// step3 = step2 + 20*0.05;  
// step4 = step3 + 20*0.03; //60w整利润
// step5 = step4 + 40*0.015; //100w整利润

// if(money<=10){
//     res = money * 0.1
// }else if(money>10 && money <=20){
//     res = step1 + (money-10)*0.075;
// }else if(money >20 && money <= 40){
//     res = (money-20)*0.05 + step2;
// }else if(money >40 && money <=60){
//     res = step3 + (money-40)*0.03;
// }
// else if(money>60 && money<=100){
//     res = step4 + (money-60)*0.015;
// }
// else{
//     res = step5 + (money-100)*0.01;
// }
// console.info(res);

// 短路运算符
var money = 100;
var res = 0;

money >100 && (res+=(money-100)*0.01) && (money=100);
money >60 && (res+=(money-60)*0.015) &&(money = 60);
money >40 && (res+=(money-40)*0.03) && (money = 40);
money >20 && (res+=(money-20)*0.05) && (money=20);
money >10 && (res+=(money-10)*0.075)&&(money=10);
money> 0 && (res+=money*0.1);

console.info(res);
