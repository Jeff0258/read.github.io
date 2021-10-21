// var money = 2200;

// if(money > 2000){
//     console.info("party");
// }else{
//     console.info("Swiming");
// }

// if(money > 5000){
//     console.info("IFS");
// }else if(money > 2000){
//     console.info("WFJ");
// }else{
//     console.info("HOME");
// }

//嵌套if语句
var money = 2000;
var time = 9;

if(money > 4000){
    if(time > 7){
        console.info("IFS")
    }else{
        console.info("IFS-M")
    }
}else if(money > 600){
    if(time > 9){
        console.info("WFJ party");
    }else{
        console.info("WFj Shopping");
    }
}else{
    console.info("HOME");
}