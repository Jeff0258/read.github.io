var dataTime = 9;
//switch(常量表达式)
//switch根据你传入的表达式的值，来进行精确匹配
//传递进来的表达式值来匹配case 匹配成功就执行case里面的内容，但是会继续往下执行，直到末尾
//break关键字 用来中断正在执行的代码
switch(dataTime){
    case 0:
        console.info("Sunday");
        break;
    case 1:
        console.info("Monday");
        break;
    case 2:
        console.info("Tuesday");
        break;
    case 3:
        console.info("Wednesday");
        break;
    case 4:
        console.info("Thursday");
        break;
    case 5:
        console.info("Friday");
        break;
    case 6:
        console.info("Saturday");
        break;
    default:                        //其他内容都不匹配的时候，执行default语句中的内容
        console.info("Wrong Number");
}

var username = "小表哥";
switch(username){
    case "小表哥":
        console.info("了了了了了了");
        var age = 20;
        switch(age){
            case 20:
                console.info("20岁");
                break;
            default:
                console.info("unknown")
        }
        break;
    case "大表哥":
        console.info("dddddddd");
        break;
    default:
        console.info("ggggg");
}