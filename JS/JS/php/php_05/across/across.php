<?php

// 假如后台给前端返回的数据是一个普通的字符串
// 'jsonp请求的数据'
$res = $_GET['cb'];//得到了前端发送的一个回调函数的函数名
$data = ['id'=>'001','name'=>'小红','age'=>10,'sex'=>'女','tel'=>'13312345678'];
$data = json_encode($data);
// 将数据与函数名拼接成函数调用的格式，返回给前端的script标签
$jsonp = "$res('$data')";
echo $jsonp;


?>