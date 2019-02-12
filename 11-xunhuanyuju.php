<?php
/**
 * Created by PhpStorm.
 * User: 戴尔
 * Date: 2019/2/12
 * Time: 17:59
 */
header('content-type:text/html;charset=utf-8');
//for语句
/*
for(exp1;exp2;exp3){代码段}
exp1相当于初始化赋值，会无条件执行第一个表达式
exp2在每次循环开始前求值，看exp2是否为true，如果为true执行循环体；否则循环结束
exp3做求值操作（增量或减量）

*/
for($i=1;$i<=20;++$i){
    echo $i;
    echo '<br>';
}echo '<hr>';
echo $i;
echo '<hr>';

//不能死循环，可以通过break结束for语句
for($i=1;$i>=0;$i++){
    if($i>10){
        break;
    }
    echo $i,'<br/>';
}
//continue 代表跳过当次执行下次循环
for($i=1;$i<=10;$i++){
    if($i==3){
        continue;
        echo '跳过';
    }
    echo $i,'<br>';
}

//for循环的嵌套结构
for($i=1;$i<=3;++$i){
    echo '外层循环执行第'.$i.'次<br>';
    for($j=1;$j<=2;++$j){
        echo '内层循环执行第'.$j.'次<br>';
    }
    echo '<hr/>';
}

//表格
echo '<table border="1" cellpadding="0" cellspacing"0" width="80%">';
for($i=1;$i<=3;$i++){
    echo'<tr>';
    for($j=1;$j<=3;$j++){
        echo '<td>x</td>';
    }
    echo '</tr>';
}
echo '</table>';
echo '<hr/>';

//99乘法表
echo '<table border="1" cellpadding="0" cellspacing"0" width="80%">';
for($i=1;$i<=9;$i++){
    echo'<tr>';
    for($j=1;$j<=$i;$j++){
        echo "<td>{$j}*{$i}=".($i*$j)."</td>";
    }
    echo '</tr>';
}
echo '</table>';

//百钱买百鸡 公鸡5文，母鸡3文，三只小鸡一文，用一百文买一百只鸡
//x+y+z=100
//    5x+3y+x/3=100
for($i=1;$i<20;++$i){

}
//四位彩色验证码
for($i=0;$i<4;$i++){
    echo '<span style="color: rgb('.mt_rand(0,255).','.mt_rand(0,255).','.mt_rand(0,255).')">'.mt_rand(0,9).'</span>';
}