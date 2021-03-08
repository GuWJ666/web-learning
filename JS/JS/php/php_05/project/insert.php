<?php

$stu = json_decode($_POST['stu'],true);
$id = $stu['id'];
$name = $stu['name'];
$age = $stu['age'];
$sex = $stu['sex'];
$tel = $stu['tel'];
$db = new mysqli('localhost','root','','XAH190604');
if($db->connect_errno){
    die('连接数据库失败');
}
$db->query('set names utf8');
$sql = "insert into student (id,name,age,sex,tel) values ('{$id}','{$name}','{$age}','{$sex}','{$tel}')";
$res = $db->query($sql);
if($res){
    echo 1;
}else{
    echo 0;
}
$db->close();
?>