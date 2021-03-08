<?php

    // 超全局变量：由系统预先定义好的全局变量
    // $_GET:是一个关联数组，里面存放了以get方式发送到当前脚本的key和value
    // $_post:也是一个关联数组，里面存放了以post方式发送到当前脚本的key和value
    // var_dump($_GET);
    // 获取前端提交的用户名和密码
    $uname = $_POST['username'];
    $pword = $_POST['password'];
    // echo "{$uname} --> {$pword}";
    if($uname === 'rose'){
        if($pword === '123'){
            // 登录成功
            echo "<script>location.href = 'http://www.baidu.com'</script>";
        }else{
            // 密码错误
            echo '密码错误';
            echo "<script>setTimeout(function(){
                window.history.back();
            },2000)</script>";
        }
    }else{
        // 账号不存在
        echo '账号不存在';
        echo "<script>setTimeout(function(){
            window.history.back();
        },2000)</script>";
    
    }






?>