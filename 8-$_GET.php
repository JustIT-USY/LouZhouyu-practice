<?php
/**
 * Created by PhpStorm.
 * User: 戴尔
 * Date: 2019/2/8
 * Time: 22:18
 */
//接收以？形式传递的数据 $_GET['']
header('content-type:text/html;charset=utf-8');
$keyword=$_GET['keyword'];
echo '用户搜索的关键字为：',$keyword,'<br/>';