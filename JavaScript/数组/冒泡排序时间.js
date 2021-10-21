var arr = [];
for (var i = 0; i < 20000; i++) {
    arr[i] = parseInt(Math.random() * 10000)
}
//  获取数组长度 console.info(arr.length)

//获取当前时间，返回毫秒
var beginTime = new Date().getTime();


for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

//获取到当前时间，两个词之间差就是中间代码运行得时间
var endTime = new Date().getTime();
console.info(endTime - beginTime);