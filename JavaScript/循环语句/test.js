// var sum = 0;
// for(var i = 0;i<=100;i++){
//     sum += i;
// }
// console.info(sum);

//将1-100以内的偶数加起来
// var sum = 0;
// for(var i=0;i<=100;i++){
//     if(i%2==0){
//         sum+=i;
//     }
// }
// console.info(sum);

// var sum = 0;
// for(var i=0;i<=100;i=i+2){
//     sum+=i;
// }
// console.info(sum);

// var sum = 0;
// var i = 0;
// while(i<=100){
//     sum+=i;
//     i+=2;
// }
// console.info(sum);

//求100以内奇数和和偶数和

// var sum1 = 0;
// var sum2 = 0;
// var i = 0;
// while(i<=100){
//     if(i%2==0){
//         sum1+=i;
//     }else{
//         sum2+=i;
//     }
// }

// break关键字 在switch语句中代表 case语句的结束
// break可以用在循环语句中，代表打破循环，跳出循环

for(var i=1;;i++){
    if(i%5==0 && i%7==0){
        console.info(i);
        break;
    }
}
console.info("循环结束");

// var j = 1
// while(true){
//     if(j%5==0 && j%7==0){
//         console.info(j);
//         break;
//     }
//     j++;
// }

//从1+10 3的倍数不加
var sum = 0;
for(var i =0;i<=10;i++){
    if(i%3==0){
        continue;
    }
    sum += i;
}
console.info(sum);

//鸡兔同笼问题 rabbit,i
var rabbit = 0;
for(var i=0;i<=20;i++){
    rabbit = 20-i;
    if(i*2 + rabbit*4 == 64){
        console.info(i,rabbit);
        break;
    }
}

//水仙花数
for(var i=100;i<1000;i++){
  var a = i%10;
  var b = parseInt(i / 10 % 10);
  var c = parseInt (i/100);
  if(a*a*a + b*b*b + c*c*c == i){
      console.info(i);
  }
}

//一个小球从100m落下，每次弹起来的高度是原来的一半，求第10次弹起来的高度
var h = 100;
for(var i=1;i<=10;i++){
    h = h/2;
    //console.info("第"+i+"次的高度为："+h);
}
console.info(h)

//求第10次小球经过的距离
var h = 100/2;
var sum = 0;
for(var i=1;i<=9;i++){
    sum+=h*2;
    h = h/2;
}
console.info(h);
console.info(sum+100);