//将数组排列顺序
var array = [32, 45, 23, 12, 90]

//数组里面的数据，从第一个数据开始，两两比较
//前面一个比后面一个大，交换位置，否则不变

//重复执行寻找最大值的for循环,直至寻找完毕
for (var index = 0; index < array.length; index++) {
    //for (var index = 0; index < array.length-1; index++){

    //寻找最大值,交换位置放在最后
    for (var i = 0; i < array.length; i++) {
        //for (var i = 0; i < array.length - index -1; i++){
        if (array[i] < array[i + 1]) {
            var temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
}

console.info(array);
//console.info(array[array.length-1])


var array2 = [23, 34, 55, 90, 34];

for (var index = 0; index < array2.length - 1; index++) {

    for (var i = 0; i < array2.length - index - 1; i++) {
        if (array2[i] > array2[i + 1]) {
            var temp = array2[i]
            array2[i] = array2[i+1]
            array2[i+1] = temp;
        }
    }
}
console.info(array2)
console.info(array2[array2.length - 1]);

