//二维数组里面存放的就是数组

var arr = [23,45,22];
var arr2 = [
    ["lisi","男",10],
    ["wangsi","男",20],
    ["zhaosi","男",10],
];

console.info(arr2[0]);
console.info(arr2[0][0]);
var sumAge = 0;


var stu = new Array("lisi","nan",20);
var stu2 = new Array("wangwu","nan",22)
var stu3 = new Array("xiaohong","nv",24)
var arr3 = new Array(stu,stu2,stu3);

console.info(stu);
console.info(arr3)

arr3[2][3] = "北大";
console.info(arr3)

//获取二维数组的长度
console.info(arr3.length);
console.info(arr3[2].length)
console.info(arr3[0].length)
arr3[2].length = 2
console.info(arr3)



//求学生的平均年龄
for(var i=0;i<arr2.length;i++){
    // //获取到某一个学生，输出年龄
    // for(var j=0;j<arr2[i].length;j++){
    //     console.info(arr2[i][j]);
    // }
    sumAge+=arr2[i][2];
}
console.info(sumAge/arr2.length);
