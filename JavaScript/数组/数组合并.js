//去掉数组重复数据

var array1 = [23,45,34,5]
var array2 = ["xxx","wwww","eee"]
var newArr = [];
for(var i =0;i<array1.length;i++){
    newArr[i] = array1[i];
}
// j=0 newArr[j] 代表给数组里面的元素赋值，默认从下标为0开始赋值
// for(var j=0;j<array2.length;i++,j++){
//     newArr[i] = array2[j];
// }

for(var j=0;j<array2.length;j++){
    newArr[newArr.length] = array2[j];
}
console.info(newArr);

var a = [2,3,4]
var b = [4,5,6]
for(var i=0;i<b.length;i++){
    a[a.length] = b[i]
}
console.info(a);

//forEach 循环:专门用于操作数组、集合、对象。

var arr1 = [2,3,4]
var arr2 = [4,5,6]

// index 获取对象里面数据的下标
for(var index in arr2){
    console.info(index)
    console.info(arr2[index])
    arr1.push(arr2[index])
}
console.info(arr1)
