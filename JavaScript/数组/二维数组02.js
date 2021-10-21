var arr = [23,45,22];
var arr2 = [
    ["lisi","男",10],
    ["wangsi","男",20],
    ["zhaosi","男",10],
];

//将arr放到arr2里面
// arr2[arr2.length] = arr;
// console.info(arr2);

arr2[arr2.length] = arr;
arr2.push(arr);
console.info(arr2)