//判断素数：只能被1和本身整除
var number = 9;
var boo = true;
for(var j=2;j<number;j++){
    if(number%j==0){
       boo = false;
       break;
    }
}
    if(boo==true){
        console.info("number："+number+"是素数")
    }else{
        console.info("number："+number+"不是素数")
    }

//找出200以内的所有素数
for(var number=2;number<=200;number++){
    var boo = true;
    for(var j =2;j<number;j++){
        if(number%j==0){
            boo = false;
            break;z
        }
    }
    if(boo==true){
        console.info(number);
    }
}