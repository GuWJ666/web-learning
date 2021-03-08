<?php

$id = $_POST['id'];
$name = $_POST['name'];
$age = $_POST['age'];
$sex = $_POST['sex'];
$tel = $_POST['tel'];

    
// 1.连接数据库
$db = new mysqli('localhost','root','','XAH190604');
// var_dump($db);
// 2.判断是否连接成功；
if($db->connect_errno !== 0){
    echo '数据库连接失败';
}
// 3.设置支持中文
$db->query('set names utf8');
// 4.增
// 5.执行
$sql = "insert into student (id,name,age,sex,tel) values ('$id','$name','$age','$sex','$tel')";
$res = $db->query($sql);
// 查
$check = 'select * from student';
$chres = $db->query($check);

// 6.判断执行结果
if($res){
    // echo '执行成功';
    if($chres -> num_rows){
        $result = [];
        while($data = $chres -> fetch_assoc()){
            array_push($result,$data);
        }
        echo json_encode($result);
    }
}else{
    echo '执行失败';
}
// 7.断开连接
$db->close();
?>