var prompt=  require("prompt-sync")();
var users =[
    ["xx","777"],
    ["xw","666"],
];

/**
 * 注册模块
 */
function register() {
    console.info("wwww")
    while (true) {
        var username = prompt("请输入用户");
        var ped = prompt("请输入密码");
        var surePwd = prompt("请输入密码")
        if (pwd != surePwd) {
            console.info("不一致")
        } else {
            var u = [username,pwd];
            users.push(u);
            //注册成功马上调用登入模块
            login();
            break;
        }
    }
}


/**
 * 登入模块
 */
function login(){
   var username =  prompt("请输入用户名");
   var ped = prompt("请输入密码");
   //验证用户和密码是否匹配
   var boo = false;
   for(const index in users){
       if(users[index][0]==username && user[index][1]==pwd){
           console.info("登入成功");
           boo = false;
           Home(username);
           break;
       }
   }
   if(boo==false){
       console.info("登入失败")
   }
}
register();
/**
 * 主页面模块
 */
function Home(){
    console.info("Welcome");
    //商品展示
    console.info("欢迎"+username+"登入")
}