//输入一个三位数，看是否满足要求
//  var data = prompt("输入一个三位数");
//  if(data % 4 == 2 && date % 7 == 3 && data % 9 ==5){
//      console.info("输入的数字满足要求");
//  }else{
//      console.info("不满足要求");
//  }

//  // 输入一个年份，判断是否是闰年
//  var year = prompt("输入一个年份");
//  if(year % 400 ==0 || year%4 ==0 && year%100 !=0){
//      console.info("闰年");
//  }else{
//      console.info("平年")
//  }

 //输入一个日期，判断这个日期是当年的第几天 
var year = 2020;
var month = 03;
var day = 12;   //2020/03/12

// var sumday = 0;
// //算法实现1
// if(month == 1) sumday = day;
// if(month ==2) sumday = 31+day;

// if(year % 400 ==0 || year % 4 ==0 && year % 100 != 0) sumday++;

//算法实现2：月份精确匹配
// var sumDay = 0;
// switch(month-1){
//     case 11:
//         sumDay +=30;
//     case 10:
//         sumDay +=31;
//     case 9:
//         sumDay +=30;
//     case 8:
//         sumDay +=31;
//     case 7:
//         sumDay +=31;
//     case 6:
//         sumDay +=30;
//     case 5:
//         sumDay +=31;
//     case 4: 
//         sumDay +=30;
//     case 3:
//         sumDay +=31;
//     case 2:
//         sumDay +=28;
//         sumDay +=(year%400==0 || year%4==0 && year%100 !=0)?1:0;
//     case 1:
//         sumDay +=31;
//         break;
//     default:
//         console.info("Wrong Num");
// }
// console.info(sumDay+day);

var sumDay = 0;
// && 且 短路运算符，两个条件，如果第一个条件不满足，后面这个条件就不会执行。
month > 1 && (sumDay +=31);
month >2 && (sumDay +=(year%400==0 || year%4==0 && year%100 !=0)?29:28);
month >3 && (sumDay +=31);
month >4 && (sumDay +=30);
month >5 && (sumDay +=31);
month >6 && (sumDay +=30);
month >7 && (sumDay +=31);
month >8 && (sumDay +=31);
month >9 && (sumDay +=30);
month >10 && (sumDay +=31);
month >11 && (sumDay +=30);
month >12 && (sumDay +=31);

console.info(sumDay+day);
