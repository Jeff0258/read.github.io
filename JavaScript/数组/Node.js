//BOM(浏览器对象模型，这个函数只能在浏览器里面运行)
//Nodejs也提供了一个输入模块。在Nodejs可以下载第三方输入模块。
//require在Node中表示引入模块。
var prompt = require("prompt-sync")();
 var number = prompt("在Node环境中请输入一个数字")
 console.info(number);

var students = [123,["xiaowang","xiaozhang"]];
console.info(students[1][0])

 var students = [];
 //学生的数量控制
for (var i = 0; i < 3; i++) {
    var stu = [];
    for (var j = 0; i < 3; j++) {
        var number = prompt("请输入第" + (i + 1) + "个学生的第" + (j + 1) + "项成绩")
        stu[j] = number;
    }
    //将每个学生三门课程数组成绩，装到总数组中
    students[students.length] = stu;
}
console.info(students);

 //求学生的平均成绩，将平均成绩放到students数组里面

for (var i = 0; i < students.length; i++) {
    var sum = 0;
    for (var j = 0; j < 3; j++) {
        sum += parseInt(students[i][j]);
        console.info(sum);
        var avg = sum / 3;
        students[i][3] = avg;
    }
}
console.info(students);

 //求每个科目的平均成绩
for (var i = 0; i < 3; i++) {
    var sum = 0;
    for (var j = 0; j < 3; j++) {
        sum += students[j][i];
        console.info(sum);
        var avg = sum / 3;
        students[i][3] = avg;
    }
    students[3][i] = sum/3;
}
console.info(sum);


//设计一个函数，将要执行的代码包裹起来，以后要用，可以直接调用

var number = 23.3333;

function toDecimal(number){
    var value = parseFloat(number);
    if(isNaN(value)){      //isNaN函数是js提供的一个专门用于判断是否非数字
        return;
    }
    Math.round(number*100) /100;
    return value;
}
var res = toDecimal(33.33222);
console.info(res);