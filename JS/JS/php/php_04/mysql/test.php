<?php
// 创建
$te = new mysqli('localhost','root','','XAH190604');
// var_dump($te);
// 判断是否连接成功
if($te->connect_errno !== 0){
    echo '连接数据库失败';
}
// 设置支持中文
$te -> query('set names utf8');
// 编写
// 添加
// $st = "insert into student (id,name,age,sex,tel) values ('001','李逍遥',1000000,'女','19999999999')";
// 修改
// $st = "update student set sex='男' where name='李逍遥'";
// 删除
// $st = "delete from student where name='李逍遥'"; 
// 查询
$st = "select name from student where sex='女'";
// 执行
$res = $te -> query($st);
// 判断
if($res){
    // echo '修改成功';
    if($res->num_rows){//查询到数据的条数如果不为0
        $result = json_encode($res->fetch_all(1));
        echo $result;
    }else{
        echo '查询成功，但是未查到数据';
    }
}else{
    echo '添加失败';
}
// 断开
$te -> close();



?>