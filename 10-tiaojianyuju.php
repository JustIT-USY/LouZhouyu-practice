<?php
/**
 * Created by PhpStorm.
 * User: 戴尔
 * Date: 2019/2/12
 * Time: 9:46
 */
//if语句
/*
 * if(exp){
 * 代码段；
 * }
 */
header('content-type:text/html;charset=utf-8');
$hasGF=true;
if($hasGF){
    echo '我有女朋友';
    echo '<br/>';
    echo '考虑结婚<br/>';
}
echo 'continue...<hr/>';

/*
 * if(exp){
 * exp为true时执行的代码段；
 * }else{
 * exp为false时执行的代码段
 * }
 */
$age=19;
if($age>=18){
    echo '可以看大片';
}else{
    echo '看葫芦娃';
}
echo 'continue...<hr/>';


//有多个条件时使用if...elseif  从上往下，有真就停
$age=15;
if(false){
    echo 'a<br/>';
}elseif (15){
    echo 'b<br/>';
}elseif($age>=5){
    echo 'c<br/>';
}else{
    echo '以上都为假是到我';
}
echo 'continue...<hr/>';

//if 嵌套
$name='猪';
$age=19;
if ($name='猪'){
    echo 'hello zhu<br/>';
    if ($age>=18){
        echo 'chengnian<br/>';
    }else{
        echo '小孩子<br/>';
    }
}else {
    echo 'hello<br/>';
}

/*应用
 用户输入一个数字，是奇数还是偶数
 判断用户输入的年份是否是闰年
 用户输入三个数字，输出最大值
 */
//1
$number=$_POST['number'];
if($number%2==0){
    echo '偶数';
}else{
    echo '奇数';
}
echo '<br/>';
//2
$year1=$_POST['year'];
if($year1%4==0){
    echo '闰年<br/>';
}else{
    echo '平年<br/>';
}

//3
$a=$_POST['num1'];
$b=$_POST['num2'];
$c=$_POST['num3'];
if($a>$b){
    $d=$a;
    if($a>$c){
        echo $a;
    }else{
        echo $c;
    }
}else{
    $d=$b;
    if($b>$c){
        echo $b;
    }else{
        echo $c;
    }
}
//最大值最小值max min
$a=$_POST['num1'];
$b=$_POST['num2'];
$c=$_POST['num3'];
echo max($a,$b,$c);
echo min($a,$b,$c);

//
$score=(int)$_POST['score'];
if($score<60){
    echo '不及格';
}elseif ($score>=60 && $score<80){
    echo '还行';
}elseif($score>=80 &&$score<100){
    echo '很好';
}elseif($score==100){
    echo '天才';
}else{
    echo '请输入有效数字';
}
echo '<br/>';

/*匹配到break 或者执行结束或者de
switch(exp){
 case 值1;
 代码段;
 break;
case 值2;
代码段
break
...
default;
代码段
 */
$i=3;
switch ($i){//松散比对,只能固定值
        case 1:
        case 2:
        echo 'b<br/>';
        break;
        case 3:
        echo 'c<br/>';
        case 4:
        echo 'd<br/>';
        break;
    default:
        echo '以上都没有才到我<br/>';
}
echo 'content...<br/>';

//年月日 星期  date($format,$time):格式化
//w:得到当前是一周内的第几天0-6 0是星期天
date_default_timezone_set('PRC');
echo date("Y年m月d日 H:i:s");
echo '<br/>';
$day=date('w');
if($day==0){
    $str='星期日';
}elseif ($day==1){
    $str='星期一';
}elseif ($day==2){
    $str='星期二';
}elseif ($day==3){
    $str='星期三';
}elseif ($day==4){
    $str='星期四';
}elseif ($day==5){
    $str='星期五';
}elseif ($day==6){
    $str='星期六';
}
echo date('Y年m月d日').$str;
