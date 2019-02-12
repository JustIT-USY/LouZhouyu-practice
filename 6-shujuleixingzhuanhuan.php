<?php
/**
 * Created by PhpStorm.
 * User: 戴尔
 * Date: 2019/2/7
 * Time: 15:56
 */
//1.自动转换（隐式转换）
// 1.1其他类型转换成数值型
/*
true=1
false=0
null=0
字符串如果以非法数值开始，直接转换成0
如果以合法数值开始，一直取到第一个非法数值结束

 */
echo 1+3,'<br/>';
echo 1+2.3,'<br/>';
echo 1+true,'<br/>';
echo 1+'true','<br/>';
echo 1+false,'<br/>';
echo 1+null,'<br/>';
echo 1+'3king','<br/>';//取合法数字
echo 1+'21b3c4d','<br/>';
echo 1+'2e2a2b','<br/>';//e,科学计数法
echo '<hr/>';
//1.2.其他类型转换成字符串
/*
 数值直接转换成本身
true=1
false=空字符串
null=空字符串
数组=Array
资源=Resource id #数字
对象不能直接转换成字符串
 */
echo 'king<br/>';
echo 123;
echo '<br/>';
echo true;
echo '<br/>';
echo '#',false,'#';
echo '<br/>';

//1.3.其他类型转换成布尔类型
/*
 0=false
'0'=true
null=false
空数组=false
空字符串''或""或'0'或"0"false
 */
/*
 if(条件){
    执行条件为真的代码段；
}else{
    执行条件为假的代码段；
}
 */
echo '<hr/>';

//2.强制转换
//2.1临时转换，不改变本身
/*（变量类型）$变量名称
整型：（int]integer）$变量名称
浮点型（float]doule]real）$变量名称
字符型（string）$变量名称
布尔型（bool]boolean）$变量名称
空（unset）$变量名称
数组（array）$变量名称
对象（object）$变量名称
*/
$var=true;
var_dump($var);
$res=(int)$var;
var_dump($res);
//通过系统函数实现
/*
 intval($var)返回转换成整数的值
floatval($var)...
strval($var)
boolval($var)
 */








