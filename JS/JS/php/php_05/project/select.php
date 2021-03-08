<?php

$db = new mysqli('localhost','root','','XAH190604');
if($db->connect_errno){
    die('连接数据库失败');
}
$db->query('set names utf8');
$sql = "select * from student";
$res = $db->query($sql);
if($res){
    if($res -> num_rows){
        echo json_encode()
    }
}else{
    echo 0;
}
$db->close();



?>