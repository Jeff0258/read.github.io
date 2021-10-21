var array = [34, 21, 40, 12, 89]
/* 先定义一个数组的最大值，或最小值，拿数组里面的每一个元素跟最大值或最小值比较
最大值放在元素的右侧，层层比较
需要交换位置 */

//外层循环指定一个参考值
for (var i = 0; i < array.length; i++) {
    //内循环遍历每一个值和外层比较
    for (var j = 0; j < array.length; j++) {
        if (array[i] < array[j]) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.info(array);