<?php
// 删除
$id = $_POST['id'];
$db = new mysqli('localhost','root','','XAH190604');
if($db->connect_errno){
    die('连接数据库失败');
}
$db->query('set names utf8');
$sql = "delete from student where id='{$id}'";
$res = $db->query($sql);
if($res){
    echo 1;
}else{
    echo 0;
}




$db -> close();




?>