//toDecimal :将数据小数点保留两位

function toDecimal(){

}
var arr = [];
/**
 * 
 * 函数的操作
 */
function pushed(val){
    arr[arr.length] =val;
}

pushed("123");
console.info(arr);

/**
 * sort() 自定义的数组排序函数
 */
function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.info(arr);
}
var newArr = [1,2,8,4,5,0,67];
var newArr2 = [23,1,90,34,19,33,32,2];
sort(newArr);
sort(newArr2);

var arr3 = [23,12,23,10,30]
arr3 = arr3.sort();
console.info(arr3)
arr3.splice(2,2);             //删除下标为2，数量为2
console.info(arr3)