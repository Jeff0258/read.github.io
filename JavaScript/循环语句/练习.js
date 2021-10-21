/* 猴子吃桃问题：
 猴子吃桃问题：猴子第一天摘下若干个桃子，当即吃了一半，还不过瘾，又多吃了一个。
 第二天早上又将第一天剩下的桃子吃掉一半，有多吃了一个。
 以后每天早上都吃了前一天剩下的一半零一个。
 到第 10 天早上想再吃时，发现只剩下一个桃子了。
编写程序求猴子第一天摘了多少个桃子。
*/ 
 var sum = 1; //默认桃子总数为1 
 for(var i=10;i>1;i--){
     sum = (sum+1)*2;
 }
 console.info(sum);

 //兔子繁殖问题（斐波那契数列）

//  var num1 = 1 //数列的第一项
//  var num2 = 1 //数列的第二项
//  var temp = 0;
//  for(var i=1;i<=30;i++){
//      if(i==1 || i==2){
//          console.info("第"+i+"个月的兔子数量为："+1)
//      }else{
//          // 从第三项开始，以后每项的值都是前面两项之和
//          temp = num2
//          //前两项之和等于第三项
//          num2 = num1+num2
//          //把保存的值赋值给前面的num1项
//          num1 = temp
//          console.info("第"+i+"个月的兔子数量为："+num2)
//      }
//  }

 var num1 = 1;      //前一项
 var num2 = 0;     //后一项
 var sum = 0;

 for(var i =1;i<=30;i++){
     //表示月份为奇数月
     if(i%2 !=0){
         //两项之和
         sum = num1 + num2;
         num1 = sum;
     }else{
         sum = num1 + num2;
         num2 = sum;
     }
     console.info("第"+i+"个月的兔子数量为："+sum)
 }

 //数列之和
 //分子+分母 等于 下一项的分子  上一项分子等于下一项的分母
// 2/1 + 3/2 + 5/3 + 8/5+.....

 var a = 2;   //分子
 var b = 1;  //分母
 var temp = 0;  //临时变量
 var num = a/b;
 for(var i=2;i<=20;i++){
     //动态产生第一项后面的所有项
     temp = b;
     b = a;
     a = temp +b ;
     num += a/b;
 }
 console.info(num);

 //数字排列
 //用 1、2、3、4四个数字。能组成多少个互不相同的无重复数字的三位数，都是多少
 for(var i=1;i<=4;i++){
     for(var j=1;j<=4;j++){
         for(var k=1;k<=4;k++){
             if(i!=j && i!=k && j!=k){
                console.info(i*100+j*10+k);
             }
         }
     }
 }