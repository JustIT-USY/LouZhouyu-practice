<?php
/**
 * Created by PhpStorm.
 * User: 戴尔
 * Date: 2019/2/10
 * Time: 11:58
 */
//算数运算符
$a=3;
$b=8;
echo $a+$b,'<br/>';
echo $a-$b,'<br/>';
echo $a*$b,'<br/>';
echo $a/$b,'<br/>';
echo 3%8,'<br/>';// % 取余
echo 3%-8,'<br/>';
echo -3%8,'<br/>';
echo -3%-8,'<br/>';
echo 2**3;//  **  幂运算 8
echo '<hr/>';

//递增递减运算
//ord($charset):得到指定字符的ASCII值
//chr(ASCII):根据指定字符得到对应的ASCII
/*
 1.前缀形式  $var=1,++$var,--$var  先加减1，后执行
 2.后缀形式  $var=1,$var++,$var--  先执行，后加减1
支持整型、浮点型
不支持布尔型
null只支持递增->1
字符串只支持递增a->b  z->aa a1->a2,作用最后一位，ASCII值
 */
$i=1;
echo ++$i;//前缀 先加后执行所以2

$i=5;
echo $i++,'<br/>';//后缀 先执行所以5
echo $i,'<br/>';//后加减，再次输出是6

//字符连接符    ,   .
echo 'a'.'b'.'c';
echo '<br/>';
echo 'a','b','c';
echo '<br/>';
$str1=' hello ';
$str2=' world ';
echo $str1,$str2;
echo '<br/>';
//echo$newStr=$str1,$str2;错误，表达式里用“,”不行，echo可以
$newStr=$str1.$str2;
echo $newStr;
echo '<br/>';
$newStr=$str1.'~'.$str2.'！';
echo $newStr;
echo '<hr/>';

//赋值运算符
/*
  +=  $a+=1;  $a=$a+1
  -=  $a-=1;  $a=$a-1
  *=  $a*=1;  $a=$a*1
  /=  $a/=1;  $a=$a/1
  %=  $a%=1;  $a=$a%1
  .=  $str='king';  $str=$str.'king '
 */
$i=2;
$i+=5;//$i=$i=5
echo $i;
echo '<br/>';

$str1='hello'.' ';
$str1.='world';//$str1=$str1.'world;
$str1.='!';//$str1=$str1.'!'
echo $str1;
echo '<br/>';
//mt_rand($min,$max);产生随机数
echo mt_rand(1,99);
echo '<br/>';
//产生颜色不同的随机数

$code='<span style="color: rgb('.mt_rand(0,255).','.mt_rand(0,255).','.mt_rand(0,255).'">'.mt_rand(1,9).'</span>';
$code.='<span style="color: rgb('.mt_rand(0,255).','.mt_rand(0,255).','.mt_rand(0,255).'">'.mt_rand(1,9).'</span>';
$code.='<span style="color: rgb('.mt_rand(0,255).','.mt_rand(0,255).','.mt_rand(0,255).'">'.mt_rand(1,9).'</span>';
$code.='<span style="color: rgb('.mt_rand(0,255).','.mt_rand(0,255).','.mt_rand(0,255).'">'.mt_rand(1,9).'</span>';
echo $code,'<hr/>';

//比较运算符   结果是真或假
/*
$a==$b  转换类型后等于，只比较值
===  $a=$b,并且类型也相同
！=  转换类型后不等于
<>  转换类型后不等于
!==  $a不等于$b，或者类型不同
<  $a严格小于$b
>  $a严格大于$b
<=  小于或等于
>=  大于或等于
<=> 当$a小于、等于、大于than$b时 分别返回一个小于、等于、大于0的integer值
$a??$b??  从左往右第一个存在且不为NUll的操作数。如果都没有定义且不为NULL，则返回NULL
 */
//测试==和===
var_dump(
    1==true,
    1=='1',
    0==false,
    0==null,
    1===true,
    1==='1',
    0===false,
    1===1
);
echo '<br/>';
//比较结合运算符（太空船运算符）PHP7
/*var_dump(
    3<=>,//1
    3<=>3,//0
    3<=>5//-1
);
var_dump(
    1.5<=>1.5,
    1.5<=>1.2,
    1.5<=>4.6
);
var_dump(
    'a'<=>'a',
    'c'<=>'a',
    'c'<=>'e'
); */

//NULL检测符  PHP7
/*
 var_dump(
  true??'king'??123,
  0??false??null??'hello world',
  $abcde??'hello world'
);
 */

//逻辑运算符
/*
 * and=&&  与=并且 如果$a和$b都为true  如果第一个错误，第二个不执行
 * or=||   或 如果$a或$b任一为true
 * xor  异或 如果$a或$b任一为true，但不同时是
 * not  非=取反 如果$a不为true

 */
$i=0;
$j=1;
if($i&&$j){
    echo 'aa';//0->false && =false
}else{
    echo 'bb';
}
echo '<br/>';
$i=0;
$j=1;
if($i && --$j){//0->false && =false
echo 'cc';
}else{
    echo 'dd';
}
echo '<br/>';
var_dump($i,$j);//0 1
echo '<br/>';
$i=0;
$j=0;
if(++$i && $j++){//1->true && 0->false=false
    echo 'ee';
}else{
    echo 'ff';
}
echo '<br/>';
var_dump($i,$j);//1 1
echo '<br/>';

//三元运算符->缩写的if..else,   如果exp1为true,执行？后面的exp2,否则执行之后exp3
echo true?'a':'b';//如果‘true'为真，输出’a',否则‘b’
echo '<br/>';
$name='zhu';
$res=$name='zhu'?'hello zhu':'hello world';
echo $res;

//优先级
