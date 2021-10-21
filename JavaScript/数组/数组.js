// 创建数组
var array =  new Array();
console.info(typeof array);

array[0] = "xx";
array[1] = "xs";
array[2] = "xu";
array[3] = 22332;

console.info(array); //获取数组里的数据,直接输出一个对象，将这个对象转化为字符串的形式来输出

console.info(array[0]);
console.info(array[8]);


array.push("xa"); //将数据放在数组的最后
console.info(array.length)
console.info(array[4]);

var student = new Array("xx",20,"华北");//初始化数组

console.info(student);

var student2 = new Array(32,23,4);
console.info(student2);

//传递的值是一个数字，那就代表定义的数组的长度。
var student3 = new Array(5);
console.info(student3);
console.info(student3.length);

student3[4] = "xlh";
student3[5] = 80;
console.info(student3.length);


var array = ["小米","华为手机","苹果手表"];

for(var i=0;i<array.length;i++){
    console.info(array[i]);
}

var count = 0;
while(count <array.length){
    console.info(array[count]);
    count++;
}

//倒叙输出
var array2 = [90,34,45,97]
for(var i=array2.length-1;i>=0;i--){
    console.info(array2[i]);
}

//数组最大值输出

var array3 = [30,75,23,65];
//最大值，找参考对象
var max = array3[0];
for(var i=0;i<array.length;i++){
    if(array3[i]>max){
        max = array3[i];
    }
}
console.info(max);

// 循环遍历数组,再遍历一次
// for(var i=0;i<array3.length;i++){
//     for(var j =0;j<array3.length;j++){
//         array3[i]
//     }
// }

var array = [23,34,56,45,65,66];

//指定下标为3 数组第一个数组下标为0
var index = 3;
for(var i=index;i<array.length;i++){
    array[i] = array[i+1];
}
array.length=array.length-1;
console.info(array);