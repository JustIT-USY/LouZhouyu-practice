<?php
/**
 * Created by PhpStorm.
 * User: 戴尔
 * Date: 2019/2/6
 * Time: 20:07
 */
//告诉浏览器以什么编码方式解析什么类型的文档，防止乱码
header('content-type:text/html;charset=utf-8');
//整型的例子
//十进制
$var=123;
//echo $var
var_dump($var);
$var=0;
var_dump($var);
$var=-12;
var_dump($var);
//八进制，0开头
$var=0123;
//echo $var
var_dump($var);//83
//十六进制
$var=0xff00;//0x开头
var_dump($var);//打印变量的详细信息

//浮点型
//不能比较两个浮点型的大小
$float=-12.3;
var_dump($float);

$float=2e-3;//2乘以10的-3次方
var_dump($float);

//布尔型（真或假）
$bool=true;
var_dump($bool);

//if语句
$dream=false;
if($dream){
    echo '在北京买房';
}else{
    echo '打代码';
}

//字符串
$username='king';

$email='38158@comseh';

$string='';//空字符串
var_dump($string);
echo'<hr/>';

//He Said "I'm Fine"
//如果内容和定界符有冲突，使用转移符
//双引号能解析所有的转义符
$str='He Said "I\'m Fine"';
echo $str;

//用花括号{}对于字符串中的指定字符做增删改查操作,第一个字符是0
$string='abcdef';
//查找
echo $string{0};
echo '<br/>';
echo $string{2};
echo '<br/>';

//修改
//修改只能一个字符替换一个字符，不要对中文做操作
$string{1}='z';
echo $string;

//删除
$string='abcdef';

$string{2}='';
echo $string;
echo '<br/>';

$string{0}='';
echo $string;

//添加字符
echo '<br/>';
$string='abc';
$string{3}='d';
echo $string;
echo '<br/>';

$string='king';
echo $string{0};
echo '<br/>';

$string='king';
$string{2}='o';
echo $string;
echo '<br/>';

$string='king';
$string{1}='';
echo $string;
echo '<br/>';

$string='king';
$string{5}='!';
echo $string;
echo '<br/>';
echo '<hr/>';

//heredoc和nowdoc
$id=2;
$username='queen';
$email='5516516156@fgs';
$str="<table border='1' width='80%' bgcolor='blue'>
    <tr>
        <td>编号</td>
        <td>用户名</td>
        <td>邮箱</td>
    </tr>
    <tr>
        <td>1</td>
        <td>King</td>
        <td>654986@5fsf</td>
    </tr>
    <tr>
        <td>{$id}</td>
        <td>{$username}</td>
        <td>{$email}</td>
    </tr>
    </table>";
echo $str;
echo '<hr/>';
//通过heredoc的写法,大段内容，相当于双引号
$str=<<<EOF
    this is a test
    <h1 align="center">Hello world <small>power by king</small></h1>
EOF;
echo $str;
//nowdoc ,相当于单引号

//复合类型
//声明一个数组
$arr=array();//空数组
var_dump($arr);
$arr=array(12,'king',true,123.45);
var_dump($arr);
echo '<br/>';
//对象
$obj=new StdClass();
var_dump($obj);//object(stdClass)[1]
echo '<br/>';

//资源
$handle=fopen('./4.bianliang.php','r');
var_dump($handle);
echo '<br/>';

//空值
//为声明的变量直接使用
var_dump($notExistsVar);
echo '<br/>';

//声明一个变量赋值为null
$var=null;
var_dump($var);
echo '<br/>';

//通过unset销毁变量,可以销毁多个，销毁后为null
$var1=123;
var_dump($var1);
unset($var1);
var_dump($var1);
echo '<br/>';

//伪类型
