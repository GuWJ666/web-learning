<?php

// echo "这是来自服务端的问候";
// $uname = $_GET['uname'];
// $pword = $_GET['pword'];
// if($uname == '小张' && $pword == '123456'){
//     echo '登录成功';
// }else{
//     echo '登录失败';
// }

$uname = $_POST['uname'];
$pword = $_POST['pword'];
if($uname == '小张' && $pword == '123456'){
    echo '登录成功';
}else{
    echo '登录失败';
}






?>