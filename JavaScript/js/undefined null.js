// undefined数据类型 基础数据类型 有一个唯一值 就是undefined
// 弱类型语言，根据内容决定数据类型，但是我们定义变量可以没有值，刺客就默认数据类型为undefined
var code;
console.info(code); //undefined 这个输出结果代表内存空间保存的值
console.info(typeof code); //数据类型

// null也是一种数据类型 有一个唯一值 null，代表空。
var res = null;
console.info(res);
console.info(typeof res); //object

//面试题  undefined 是null的子类(派生类) undefined 表示内容和null表示内容是一样的
console.info(undefined == null); //true

console.info(undefined === null); //false
