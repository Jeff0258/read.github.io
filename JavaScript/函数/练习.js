var prompt = require("prompt-sync")()
var products = [
    ["1","小米","武汉"],
    ["2","飞科","深圳"],
    ["3","苹果","上海"],
];

/**
 * 设计一个函数，输入一个编号，查询出对应的商品，返回出来打印
 * 
 * 问题：在循环里面使用 return 语句
 * 问题2：return 返回的是什么？
 */

// function findProductByById(id) {
//     var boo = true;
//     for (const index in products) {
//         if (products[index][0] == id) {
//             boo = false;
//             console.info("查询到的商品为："+products[index]);
//             return products[index];
//         }
//     }
//     if(boo){
//         return "商品不存在"
//     }
// }
function findProductByById(id) {
    for (const index in products) {
        if (products[index][0] == id) {
            console.info("查询到的商品为："+products[index]);
            return products[index];
        }
    }
        return "商品不存在"
}

/**
 * 添加商品的模块
 */
function addProduct(){
    console.info("=======进入商品添加模块=======")
    var id = prompt("请输入一个商品Id");
    var productName = prompt("请输入一个商品名字");
    var address = prompt("请输入一个商品产地");
    var arr = [id,productName,address];
    products.push(arr);
}

var arr= findProductByById(3);
console.info(arr);

/**
 * 展示商品模块
 */
function showAllProduct() {
    while (true) {
        console.info("=====ID=====名字======场地======");
        for (const index in products) {
            console.info("  " + products[index][0] + "  " + products[index][1] + "  " + products[index][2])
        }
        console.info("菜单显示如下：1、查询商品-----2、查询购物车---3、添加商品")
        var number = prompt("请输入一个商品编号: ")
        switch (parseInt(number)) {
            case 1:
                var productId = prompt("请输入商品编号");
                var arr = findProductByById(productId);
                console.info(arr);
                break;
            case 3:
                addProduct();
                break;
            default:
                console.info("商品未开放")
        }
    }
}
showAllProduct();
