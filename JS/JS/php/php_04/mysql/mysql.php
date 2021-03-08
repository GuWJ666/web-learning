<?php

// mysql——connect（）/ mysqli（5.6及后续版本使用的操作数据库的方式，以面向对象的新式操作）
// 1.连接数据库：通过创建mysqli对象来连接操作数据库
// 参数1：string，表示要链接数据库的主机名
// 参数2: string，表示要链接数据库用户名
// 参数3：string，表示要链接数据库的密码
// 参数4：string，表示要链接的数据库名
$db = new mysqli('localhost','root','','XAH190604');
// var_dump($db);

// 2.判断是否连接成功
if($db->connect_errno !== 0){
///如果连接失败
die('连接数据库失败');
}

// 设置支持中文
$db -> query('set names utf8');

// 3.编写sql语句，string，
// （1）增 insert插入  into tableName表名  （字段） values（字段对应的值）
// $sql = "insert into student (id,name,age,sex,tel) values ('005','王娇',20,'女','14556657554')";
// （2）修改 update tableName set 字段=字段值；
// 要特别注意：修改语句存在操作 表中所有数据的能力，修改的时候一定要注意添加条件，否则表中所有数据都会被修改
// where添加条件
// and or not
// $sql = "update student set tel='19912345678' where name='马锐' and sex='女'";
// (3)删：delete from tableName
// 注意：和修改一样注意添加条件，否则会将数据表中的数据全部删除
// $sql = "delete from student where id='003'";
// (4)查：select * from tableName
$sql = "select name,age from student where sex='男'";

// 4.执行sql语句
$res = $db -> query($sql);

// 5.判断执行结果
if($res){//只能判断sql语句是否执行成功
    // 查询语句的执行结果比较特别，如果执行成功，不返回true，返回装有查询结果的object，如果执行失败任然返回false；
    // echo '执行成功'; 
    if($res -> num_rows){//返回integer，表示查询到的数据条数
        // 从返回结果中读取数据
        /**
         * fetch_row():调用一次，返回一条数据，数据存放在索引数组中
         * fetch_array():调用一次，返回一条数据，数据放在复合数组中（索引+关联）
         * fetch_assoc():调用一次，返回一条数据，数据存放在关联数组中
         * fetch_object():调用一次，返回一条数据，数据存放在对象中
         * fetch_all():调用返回所有数据，装在二维数组中(存在参数)
         * 1：关联数组
         * 2：索引数组
         * 3：复合数组
         */ 
        // 通过json_encode()将PHP数组或对象转成json数据
        // json_decode()可以将json串转成PHP数组或对象（如果第二个参数不写，那么就是对象，如果写了true，那么就是数组）
        $result = [];
        while($data = $res -> fetch_assoc()){
            array_push($result,$data);
        }
        // $result = $res -> fetch_assoc();
        // echo json_encode($result);
    }else{
        echo '查询成功，但是未查到数据';
    }
}else{
    echo '执行失败';
}

// 6.断开数据连接
$db -> close();

 






?>