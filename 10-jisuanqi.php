<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>计算器</title>
</head>
<body>
    <h1>计算器</h1>
    <form action="#" method="post">
        num1<input type="text" name="num1">
        <select name="op">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select>
        num2<input type="text" name="num2">
        <hr>
        <input type="submit" value="计算" name="act">
    </form>
    <?php
    error_reporting(E_ALL&~E_NOTICE);
    //判断用户是否点击了计算按钮
    $act=$_POST['act'];
    if($act){
    //接收数据
    $num1=$_POST['num1'];
    $num2=$_POST['num2'];
    $op=$_POST['op'];
    //判断是否为数值
    if(is_numeric($num1)&&is_numeric($num2)){
            //根据不同的操作符完成不同的运算
    if($op=='+'){
        $res=$num1+$num2;
    }elseif ($op=='-'){
        $res=$num1-$num2;
    }elseif ($op=='*'){
        $res=$num1*$num2;
    }elseif ($op=='/'){
        //判断$num2是否为0
        if($num2!=0){
            $res=$num1/$num2;
        }//exit()或者die();输出一个消息并终止程序执行
        exit('0不能作为除数');
    }elseif ($op=='%'){
        $res=$num1%$num2;
    }else {
        echo '非法操作';
    }
    echo "运算结果为：<br>{$num1}{$op}{$num2}={$res}";
    }else{
        exit('非法操作<br/>');
    }
    }

    ?>
</body>
</html>