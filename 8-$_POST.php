<?php
/**
 * Created by PhpStorm.
 * User: 戴尔
 * Date: 2019/2/8
 * Time: 21:52
 */
header('content-type:text/html;charset=utf-8');
//接收表单发送的数据
//echo 'this is a test';
echo '用户名:',$_POST['username'],'<br/>';
echo '密码:',$_POST['password'],'<br/>';
echo '邮箱:',$_POST['email'],'<br/>';
echo '性别:',$_POST['sex'],'<br/>';