for(var i=1;i<9;i++){
    var str ="";
    //利用外层循环的变量和内存循环的关系
    for(var j=1;j<=i;j++){
      str +=  i + "*" + j + "=" + i*j+ "  ";
    }
    console.info(str);
}